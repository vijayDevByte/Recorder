import "./App.css";
import ChatInput from "./ChatInput";

function App() {
  // const image: string[] = [
  //   "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  //   "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  //   "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  //   "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  //   "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  //   "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  //   "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  // ];

  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();

  return (
    // <div className="flex items-center flex-col gap-2">
    //   <div className="avatar">
    //     <div className="w-24 rounded-lg">
    //       <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    //     </div>
    //   </div>
    //   <button className="btn btn-neutral">Neutral</button>
    //   <div className="carousel rounded-box">
    //     {image.map((img) => (
    //       <div className="carousel-item">
    //         <img src={img} alt="Burger" />
    //       </div>
    //     ))}
    //   </div>

    //   <div>
    //     <Recorder />
    //   </div>
    //   <div className=" ">
    //     <p>Microphone:{listening ? "on" : "off"}</p>
    //     <button
    //       onClick={() => SpeechRecognition.startListening}
    //       className="cursor-pointer"
    //     >
    //       {" "}
    //       here
    //       <i className="fa-solid fa-microphone text-black"></i>
    //     </button>
    //     <p>{transcript}</p>
    //   </div>
    // </div>
    <div className="w-full flex justify-start">
      <ChatInput />
    </div>
  );
}

export default App;
