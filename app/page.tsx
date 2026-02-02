import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Infrastructure from '@/components/sections/Infrastructure';
import Academic from '@/components/sections/Academic';
import Courses from '@/components/sections/Courses';
import Placement from '@/components/sections/Placement';
import Facilities from '@/components/sections/Facilities';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Infrastructure />
      <Academic />
      <Courses />
      <Placement />
      <Facilities />
      <Footer />
    </main>
  );
}
