import { useEffect, useRef, useState } from "react";
// import Tesseract,{ createWorker } from "tesseract.js";
// import { Buffer } from 'buffer';

// // @ts-ignore
// window.Buffer = Buffer;

export default function Canvas({char}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const toDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };
  const toErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };
  const toClear = () => {
    contextRef.current.fillStyle = "white";
    contextRef.current.fillRect(
      0,
      0,
      canvasRef.current.offsetHeight,
      canvasRef.current.offsetWidth
    );
    console.log(canvasRef);
    console.log(contextRef);
  };
  
  const toSubmit = async () => {
    let image = canvasRef.current.toDataURL("image/jpg");
    const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, '');     // convert base64
    let imageBuffer = Buffer.from(base64Data, "base64");


    Tesseract.recognize(
      "/public/hin1.jpg",
      'hin',
      { logger: m => console.log(m) }
  )
  .then(({ data: { text } }) => {
      console.log(text,"test")
  })
  };

  return (
    <div>
    <div>{char}</div>
      <canvas
        style={{ width: "500px", height: "500px", border: "1px solid black" }}
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
      <div>
        <button onClick={toDraw}>Draw</button>
        <button onClick={toErase}>Erase</button>
        <button onClick={() => toClear()}>Clear</button>
        <button onClick={toSubmit}>Submit</button>
      </div>
    </div>
  );
}
