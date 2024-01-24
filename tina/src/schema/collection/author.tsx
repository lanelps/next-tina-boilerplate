/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
// import { wrapFieldsWithMeta } from "tinacms";
import type { TinaCollection } from "tinacms";

const CanvasComponent = (props) => {
  const { input, field } = props;
  console.log(props);

  const canvasRef = useRef(null);

  const generateRandomArt = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate random rectangles
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = Math.random() * 100;
      const height = Math.random() * 100;
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;

      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");

    input.onChange(dataUrl);
  };

  return (
    <div className="flex gap-4">
      <div>
        <h3>Current Image</h3>
        <img src={input.value} alt="" className="mb-2" />
      </div>

      <div>
        <h3>New Image</h3>
        <canvas
          ref={canvasRef}
          width={100}
          height={100}
          className="border border-black"
        />
        <div className="flex gap-2 mt-2">
          <button
            className="block px-2 py-1 transition-colors border border-gray-600 rounded-lg hover:bg-gray-200"
            onClick={generateRandomArt}
          >
            Generate Art
          </button>
          <button
            className="block px-2 py-1 transition-colors border border-gray-600 rounded-lg hover:bg-gray-200"
            onClick={saveImage}
          >
            Save Image
          </button>
        </div>
      </div>
    </div>
  );
};

export const author: TinaCollection = {
  name: "author",
  label: "Authors",
  path: "content/authors",
  format: "md",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "profile",
      label: "Profile",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      ui: {
        component: CanvasComponent,
      },
    },
  ],
};
