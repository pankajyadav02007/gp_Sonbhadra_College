import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="gallery" className="min-h-screen bg-blue-50 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map((i)=>(
          <div key={i} className="relative h-60 rounded-lg overflow-hidden shadow-lg">
            <Image src={`/images/college${i}.jpg`} alt={`College Image ${i}`} fill className="object-cover"/>
          </div>
        ))}
      </div>
    </section>
  );
}
