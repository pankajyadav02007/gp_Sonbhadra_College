'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GalleryLightbox from '@/components/GalleryLightbox';


const images = [
  'https://sakthitech.net/wp-content/uploads/2024/05/IMG-20210924-WA0008-e1716802745789.jpg',
  'https://www.jms.ac.in/wp-content/uploads/2022/07/IMG_2658-min-scaled-1300x731.jpg',
  'https://media.gettyimages.com/id/171271182/photo/delhi-university-building-and-corridor.jpg?s=612x612&w=gi&k=20&c=XlMJ7FK4LMXrW4twOZqJ9lZb14ej8PdNKjqdnsBDWGQ=',
  'https://gptcmanjeri.in/public/uploads/gallery/906407426.jpg',
  "https://content.jdmagicbox.com/comp/etah/d4/9999p5742.5742.170921173732.t7d4/catalogue/government-polytechnic-college-etah-etah-ho-etah-colleges-c301qfcox9.jpg",
  "https://www.gpcgjal.org.in/images/slider-images/slide3.jpg",
  "https://svn.ac.in/wp-content/uploads/2025/06/top-polytechnic-institute-in-lucknow.jpg",
  "https://www.gpcgjal.org.in/images/slider-images/slide1.jpg",
  "https://spcsangola.com/assets/dept/upload/home/CO.jpg",
  "https://image-upload.getmycollege.com/new-uploads/college/gallery/b-v-v-s-polytechnic2-gallery-image-997.jpg",
"https://www.sheatcollege.com/wp-content/uploads/2024/05/SHEAT-College-of-Polytechnic.jpg",
"https://www.chandilpolytechnic.org/images/gallery/i-visit-1.jpg",
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      <Link href="/" className="text-blue-600 font-medium hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">College Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-60 transform transition-transform duration-300 hover:scale-105"
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <GalleryLightbox
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </section>
  );
}
