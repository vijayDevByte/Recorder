import { useRef, useState } from "react";

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState("");
  const [seconds, setSeconds] = useState(0);

  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const startRecording = async () => {
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };
      const timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: "audio/mp3" });
        const url = URL.createObjectURL(recordedBlob);
        setRecordedUrl(url);
        console.log(recordedUrl);
        console.log(recordedUrl);
        chunks.current = [];
        clearTimeout(timer);
      };
      mediaRecorder.current.start();
    } catch (error) {
      console.log(error);
    }
  };
  const stopRecording = async () => {
    setIsRecording(false);
    setSeconds(0);
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      mediaStream?.current?.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  const formatTimer = (ts: number): string => {
    const hours = Math.floor(ts / 3600);
    const min = Math.floor((ts % 3600) / 60);
    const sec = Math.floor(ts % 60);
    return `${String(hours).padStart(2, "0")}:${String(min).padStart(
      2,
      "0"
    )}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2 className="text-[60px] text-amber-800">{formatTimer(seconds)}</h2>
      {isRecording ? (
        <button
          className="btn btn-circle btn-error size-[50px]"
          onClick={stopRecording}
        >
          stop
        </button>
      ) : (
        <button
          className="btn btn-circle btn-success size-[50px]"
          onClick={startRecording}
        >
          start
        </button>
      )}

      {recordedUrl && <audio controls src={recordedUrl} />}
    </div>
  );
};

export default Recorder;
