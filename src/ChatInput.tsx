import { useEffect, useRef, useState } from "react";
import { useRecorder } from "./hooks/useRecorder";

const ChatInput = () => {
  // const location = useLocation();

  const [query, setQuery] = useState<string>("");
  const { isRecording, startRecording, stopRecording, transcript } =
    useRecorder();
  console.log("is Recording", isRecording);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // const visualizerRef = useRef<HTMLCanvasElement>(null);

  // const { setMessages } = props;
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // console.log("chat input", activeDbConnection);

  // const handleClear = () => {
  //   setQuery("");
  //   dispatch(resetGeneratedMessage());
  //   setEditChat(null);
  // };
  const handleRecording = () => {
    if (isRecording) {
      stopRecording();
      // setIsRecording(true);
    } else if (!isRecording) {
      startRecording();
      // setIsRecording(false);
    }
  };
  const reSizeTextArea = () => {
    const textArea = textAreaRef.current;

    if (textArea) {
      textArea.style.height = "auto";

      textArea.style.height = `${Math.min(textArea.scrollHeight, 120)}px`;
    }
    return;
  };

  useEffect(() => {
    reSizeTextArea();
  }, [query]);

  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
    }
  }, [transcript, setQuery]);

  return (
    <div
      id="chat-input-area"
      className="bg-[#1F2937] border-t border-[#374151] w-screen "
    >
      {/* <div className=" mx-auto  w-full flex flex-col justify-between"> */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4">
            Ask Your Question
          </h2>

          {/* {recordedUrl && <audio controls src={recordedUrl} />} */}

          {/* <!-- Question Display (after submission) --> */}

          <div
            id="question-display"
            className=" mb-4 bg-gray-900 border border-gray-700 rounded-lg p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="fa-solid fa-user text-primary"></i>
                  <span className="text-sm text-gray-400">Your Question</span>
                </div>
              </div>
            </div>
          </div>

          <div id="question-input-area">
            <div className="flex items-end space-x-2">
              <div className="flex-1 relative">
                <textarea
                  id="chat-input"
                  ref={textAreaRef}
                  value={query}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.shiftKey) {
                      reSizeTextArea();
                    } else if (e.key === "Enter") {
                      e.preventDefault();
                      alert(query);
                    }
                  }}
                  // rows={2}
                  placeholder="Ask me anything about your database..."
                  className="w-full px-4 py-3 bg-gray-700 border scrollbar-width border-gray-600 text-white scrollbar-width rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none pr-24"
                  onChange={(e) => setQuery(e.target.value)}
                ></textarea>

                <div className="flex gap-2 items-center justify-center absolute right-2 bottom-3">
                  <button
                    onClick={handleRecording}
                    className=" text-gray-400 text-xl hover:text-white cursor-pointer p-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    {!isRecording ? (
                      <span key="start">
                        <i className="fa-solid fa-microphone "></i>
                      </span>
                    ) : (
                      isRecording && (
                        <span key="stop">
                          <i className="fa-solid fa-square  "></i>
                        </span>
                      )
                    )}
                  </button>
                  <button
                    id="send-btn"
                    // type="submit"
                    onClick={() => alert(query)}
                    className=" bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
