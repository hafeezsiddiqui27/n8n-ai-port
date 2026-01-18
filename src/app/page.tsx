
// // "use client";

// // import Nav from "./components/Nav";
// // import Hero from "./components/Hero";

// // import Divider from "./components/Divider";

// // import Projects from "./components/Projects";
// // import Process from "./components/Process";
// // import Testimonials from "./components/Testimonials";
// // import Footer from "./components/Footer";
// // import FloatingContactButton from "./components/FloatingContactButton";
// // import Contact from "./Contact";
// // import Suggestions from "./components/Suggestions";
// // import Services from "./components/Services";
// // import About from "./components/About";


// // export default function Page() {
// //   return (
// //     <main className="min-h-screen bg-white text-black scroll-smooth selection:bg-black selection:text-white">
  
// //       <Nav />

// //       <Hero />
// //       <Divider />
// //       {/* About Section */}
// //       <section
// //         id="about"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
// //       >
       
// //         <About />
// //       </section>

// //       <Divider />

// //       {/* Services Section */}
// //       <section
// //         id="services"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
// //       >
// //         <Services />
// //       </section>
// //             <Divider />

// //       {/* Automations / Suggestions Section */}
// //       <section
// //         id="automations"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
// //       >
// //         <Suggestions />
// //       </section>

// //       <Divider />

// //       {/* Portfolio / Projects Section */}
// //       <section
// //         id="portfolio"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
// //       >
// //         <Projects />
// //       </section>
// //       <Divider />
// //       {/* Process Section */}
// //       <section
// //         id="process"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
// //       >
// //         <Process />
// //       </section>
// //       <Divider />
// //       {/* Testimonials Section */}
// //       <section
// //         id="testimonials"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
// //       >
// //         <Testimonials />
// //       </section>
// //       <Divider />
// //       {/* Contact Section */}
// //       <section
// //         id="contact"
// //         className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center"
// //       >
       
// //         <Contact />
// //       </section>
      
// //       <Footer />
// //       <FloatingContactButton />
// //     </main>
// //   );
// // }
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



// function Insight({ text }: { text: string }) {
//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6">
//       <p className="text-sm md:text-base text-black/50 italic tracking-wide text-center">
//         {text}
//       </p>
//     </div>
//   );
// }


// export default function Page() {
//   return (
//     <main className="min-h-screen bg-white text-black scroll-smooth selection:bg-black selection:text-white">
//       <Nav />

//       <Hero />
//       <Divider />

     
//       {/* About Section */}
//       <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
//         <About />
//       </section>
//    <Insight text="Automation isn’t about speed. It’s about removing uncertainty." />
//       <Divider />


//       {/* Services Section */}
//       <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
//         <Services />
//       </section>
//  <Insight text="Most operational failures start with manual handoffs, not bad tools." />
//       <Divider />

    

//       {/* Automations Section */}
//       <section id="automations" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
//         <Suggestions />
//       </section>

//       <Divider />

//       {/* Portfolio Section */}
//       <section id="portfolio" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
//         <Projects />
//       </section>

//       <Divider />

//       {/* Process Section */}
//       <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
//         <Process />
//       </section>

//       <Divider />

//       {/* Insight 3 */}
//       <Insight text="Teams don’t scale. Systems do." />

//       {/* Testimonials Section */}
//       <section id="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
//         <Testimonials />
//       </section>

//       <Divider />

//       {/* Contact Section */}
//       <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-sm md:text-base text-black/70 font-medium italic tracking-wide text-center">
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
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-label="About the developer and portfolio"
      >
        <About />
      </section>

      <Insight text="Automation isn’t about speed. It’s about removing uncertainty." />
      <Divider />

      {/* Services Section */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-label="Services to streamline operations and workflows"
      >
        <Services />
      </section>

      <Insight text="Most operational failures start with manual handoffs, not bad tools." />
      <Divider />

      {/* Automations Section */}
      <section
        id="automations"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-label="Automated systems for customer journeys and operations"
      >
        <Suggestions />
      </section>

      <Divider />

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-label="Portfolio of automation projects and workflows"
      >
        <Projects />
      </section>

      <Divider />

      {/* Process Section */}
      <section
        id="process"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-label="Operational process and workflow methodology"
      >
        <Process />
      </section>

      <Insight text="Teams don’t scale. Systems do." />

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-label="Client testimonials and success stories"
      >
        <Testimonials />
      </section>

      <Divider />

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center"
        aria-label="Contact form and call to action"
      >
        <Contact />
      </section>

      <Footer />
      <FloatingContactButton />
    </main>
  );
}
