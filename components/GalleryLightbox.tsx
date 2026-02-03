'use client';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number | null) => void;
}

export default function GalleryLightbox({ images, currentIndex, setCurrentIndex }: Props) {
  const next = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button onClick={() => setCurrentIndex(null)} className="absolute top-6 right-6 text-white p-2"><X size={30} /></button>
      <button onClick={prev} className="absolute left-6 text-white p-2"><ChevronLeft size={40} /></button>
      <div className="relative w-4/5 max-w-4xl h-[70vh] flex items-center justify-center">
        <Image src={images[currentIndex]} alt="Gallery" fill className="object-contain rounded-lg" />
      </div>
      <button onClick={next} className="absolute right-6 text-white p-2"><ChevronRight size={40} /></button>
    </div>
  );
}
