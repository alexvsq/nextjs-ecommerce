"use client";
import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";

export default function ImagesProduct({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 h-full w-full px-2">
      <aside className="flex flex-row md:flex-col gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(
              `cursor-pointer bg-gray rounded-[20px] w-[150px] aspect-square overflow-hidden`,
              selectedImage === image && "border border-black"
            )}
          >
            <Image
              onClick={() => setSelectedImage(image)}
              key={index}
              src={image}
              alt="product-image"
              width={150}
              height={150}
              className="w-full h-full hover:scale-105  transition"
              priority
            />
          </div>
        ))}
      </aside>
      <div className="w-full h-full bg-gray rounded-[20px]">
        <Image
          src={selectedImage}
          alt="product-image"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
