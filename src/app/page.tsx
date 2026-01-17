
// "use client";

// import Nav from "./components/Nav";
// import Hero from "./components/Hero";

// import Divider from "./components/Divider";

// import Projects from "./components/Projects";
// import Process from "./components/Process";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import FloatingContactButton from "./components/FloatingContactButton";
// import Contact from "./Contact";
// import Suggestions from "./components/Suggestions";
// import Services from "./components/Services";
// import About from "./components/About";


// export default function Page() {
//   return (
//     <main className="min-h-screen bg-white text-black scroll-smooth selection:bg-black selection:text-white">
  
//       <Nav />

//       <Hero />
//       <Divider />
//       {/* About Section */}
//       <section
//         id="about"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
//       >
       
//         <About />
//       </section>

//       <Divider />

//       {/* Services Section */}
//       <section
//         id="services"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
//       >
//         <Services />
//       </section>
//             <Divider />

//       {/* Automations / Suggestions Section */}
//       <section
//         id="automations"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
//       >
//         <Suggestions />
//       </section>

//       <Divider />

//       {/* Portfolio / Projects Section */}
//       <section
//         id="portfolio"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
//       >
//         <Projects />
//       </section>
//       <Divider />
//       {/* Process Section */}
//       <section
//         id="process"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
//       >
//         <Process />
//       </section>
//       <Divider />
//       {/* Testimonials Section */}
//       <section
//         id="testimonials"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
//       >
//         <Testimonials />
//       </section>
//       <Divider />
//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center"
//       >
       
//         <Contact />
//       </section>
      
//       <Footer />
//       <FloatingContactButton />
//     </main>
//   );
// }
"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingContactButton from "./components/FloatingContactButton";
import Contact from "./Contact";
import Suggestions from "./components/Suggestions";
import Services from "./components/Services";
import About from "./components/About";



function Insight({ text }: { text: string }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <p className="text-sm md:text-base text-black/50 italic tracking-wide text-center">
        {text}
      </p>
    </div>
  );
}


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black scroll-smooth selection:bg-black selection:text-white">
      <Nav />

      <Hero />
      <Divider />

     
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <About />
      </section>

      <Divider />
 {/* Insight 1 */}
      <Insight text="Automation isn’t about speed. It’s about removing uncertainty." />

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <Services />
      </section>

      <Divider />

      {/* Insight 2 */}
      <Insight text="Most operational failures start with manual handoffs, not bad tools." />

      {/* Automations Section */}
      <section id="automations" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <Suggestions />
      </section>

      <Divider />

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <Projects />
      </section>

      <Divider />

      {/* Process Section */}
      <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <Process />
      </section>

      <Divider />

      {/* Insight 3 */}
      <Insight text="Teams don’t scale. Systems do." />

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <Testimonials />
      </section>

      <Divider />

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <Contact />
      </section>

      <Footer />
      <FloatingContactButton />
    </main>
  );
}


