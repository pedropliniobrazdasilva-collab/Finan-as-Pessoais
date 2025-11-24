import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Volume2, Square, Loader2, Play, AlertCircle } from 'lucide-react';

interface AudioPlayerProps {
  text: string;
  title?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ text, title = "Ouvir Explicação" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);

  // Limpa o áudio ao mudar de lição (texto muda)
  useEffect(() => {
    stopAudio();
    audioBufferRef.current = null;
    pausedAtRef.current = 0;
    setError(null);
  }, [text]);

  // Função para decodificar Base64
  const decodeBase64 = (base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  // Função para converter PCM Raw em AudioBuffer
  const pcmToAudioBuffer = (data: Uint8Array, ctx: AudioContext) => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length;
    const buffer = ctx.createBuffer(1, frameCount, 24000); // 24kHz é o padrão do Gemini TTS
    const channelData = buffer.getChannelData(0);
    
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }
    return buffer;
  };

  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 24000
      });
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  };

  const fetchAudio = async () => {
    try {
      if (!process.env.API_KEY) {
        throw new Error("Chave de API não configurada.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // Voz 'Kore' é clara e profissional
            },
          },
        },
      });

      const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (!audioData) {
        throw new Error("Não foi possível gerar o áudio.");
      }

      return audioData;
    } catch (err) {
      console.error("Erro ao gerar áudio:", err);
      throw err;
    }
  };

  const playAudio = async () => {
    setError(null);
    const ctx = initAudioContext();

    // Se já temos o buffer, apenas tocamos
    if (audioBufferRef.current) {
      startPlayback(ctx, audioBufferRef.current, pausedAtRef.current);
      return;
    }

    setIsLoading(true);

    try {
      const base64Audio = await fetchAudio();
      const rawBytes = decodeBase64(base64Audio);
      const buffer = pcmToAudioBuffer(rawBytes, ctx);
      
      audioBufferRef.current = buffer;
      startPlayback(ctx, buffer, 0);
    } catch (err) {
      setError("Erro ao carregar áudio. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const startPlayback = (ctx: AudioContext, buffer: AudioBuffer, offset: number) => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    
    source.onended = () => {
      // Verifica se o áudio acabou naturalmente (não foi parado manualmente)
      if (ctx.currentTime >= startTimeRef.current + buffer.duration) {
          setIsPlaying(false);
          pausedAtRef.current = 0;
      }
    };

    source.start(0, offset);
    
    sourceNodeRef.current = source;
    startTimeRef.current = ctx.currentTime - offset;
    setIsPlaying(true);
  };

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
    
    if (audioContextRef.current && isPlaying) {
        // Salva onde parou para resumir (opcional, aqui estamos fazendo stop total ou pause simples)
        // Para simplificar a UX, o botão de stop reseta.
        pausedAtRef.current = 0;
    }
    
    setIsPlaying(false);
  };

  return (
    <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-4 rounded-xl shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center gap-4">
        <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-full text-brand-600 dark:text-brand-400">
          <Volume2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Narração por IA • Voz Natural
          </p>
        </div>
      </div>

      <div className="w-full sm:w-auto flex flex-col items-end">
        {error ? (
          <div className="flex items-center gap-2 text-red-500 text-xs font-medium">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        ) : (
          <button
            onClick={isPlaying ? stopAudio : playAudio}
            disabled={isLoading}
            className={`
              w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all
              ${isPlaying 
                ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30' 
                : 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg shadow-brand-500/20'}
              disabled:opacity-70 disabled:cursor-not-allowed
            `}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Carregando...
              </>
            ) : isPlaying ? (
              <>
                <Square className="w-4 h-4 fill-current" />
                Parar Áudio
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                Ouvir Aula
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
