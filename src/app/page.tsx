"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

/* ------------ Animation helpers ------------ */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

const cascade = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

/* ------------ Page ------------ */
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black scroll-smooth selection:bg-black selection:text-white">
      <Nav />

      <Hero />

      <Section
        id="about"
        title="About"
        subtitle="Focused, practical automation—built to run quietly in the background."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <motion.p {...fadeUp(0.05)} className="leading-relaxed text-black/80">
            I&apos;m <span className="font-semibold">Hafeez Siddiqui</span>, an
            automation specialist and workflow engineer. I design and ship
            reliable systems with <span className="font-medium">n8n</span>,
            custom integrations, and the web stack. The goal is simple: replace
            repetitive effort with dependable execution you can audit, extend,
            and own.
          </motion.p>
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-2xl border border-black/10 p-6 bg-white/80 backdrop-blur"
          >
            <h3 className="font-semibold">Focus areas</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Workflow automation",
                "Custom n8n builds",
                "App & API integrations",
                "Lead ops & CRM",
                "E-commerce systems",
                "Observability & docs",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-xl border border-black/10 px-3 py-2 text-sm bg-white hover:-translate-y-0.5 hover:shadow transition-transform duration-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Divider />

      <Section
        id="services"
        title="Services"
        subtitle="Clarity first. Then efficient, testable automation."
      >
        <Cards
          items={[
            {
              t: "Automation workflows",
              d: "Replace manual steps with auditable flows and clear handoffs.",
            },
            {
              t: "Custom n8n solutions",
              d: "End-to-end designs to fit your data and existing tools.",
            },
            {
              t: "Integrations",
              d: "CRMs, stores, email, databases, webhooks, and custom endpoints.",
            },
            {
              t: "Process audits",
              d: "Map reality, remove friction, and standardize execution.",
            },
            {
              t: "Monitoring",
              d: "Health checks, logging, alerts, and graceful failure paths.",
            },
            {
              t: "Documentation",
              d: "Runbooks, diagrams, and owner-friendly guides.",
            },
          ]}
        />
      </Section>

      <Section
        id="automations"
        title="Suggested automations"
        subtitle="Practical starting points that ship value immediately."
      >
        <Cards
          twoCols
          items={[
            {
              t: "WhatsApp notifications",
              d: "Order confirmations, delivery updates, reminders—sent automatically.",
            },
            {
              t: "E-commerce sync",
              d: "Orders, inventory, payments connected across store, ERP, and CRM.",
            },
            {
              t: "Lead capture & routing",
              d: "Ingest web forms, enrich profiles, auto-assign owners in real time.",
            },
            {
              t: "Marketing triggers",
              d: "Behavior-based email/SMS with clear logging and retries.",
            },
            {
              t: "Finance flows",
              d: "Invoice generation, payment reminders, ledger updates.",
            },
            {
              t: "Team alerts",
              d: "Slack/Teams signals for high-value events with context.",
            },
          ]}
        />
      </Section>

      <Divider />

      <Section
        id="portfolio"
        title="Selected work"
        subtitle="Concise snapshots of outcomes and approach."
      >
        <Projects />
      </Section>

      <Section
        id="process"
        title="Process"
        subtitle="Short, steady, and transparent."
      >
        <Process />
      </Section>

      <Section
        id="testimonials"
        title="Client notes"
        subtitle="Unprompted remarks from recent work."
      >
        <Testimonials />
      </Section>

      <Section
        id="contact"
        title="Let's talk"
        subtitle="Tell me what you want automated and why it matters."
      >
        <Contact />
      </Section>

      <Footer />

      {/* Floating Contact Button for Mobile */}
      <FloatingContactButton />
    </main>
  );
}

/* ------------ Floating Contact Button ------------ */
function FloatingContactButton() {
  return (
    <div className="fixed  bottom-6 right-6 z-10">
      <a
        href="#contact"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
        aria-label="Contact Me"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>
    </div>
  );
}

/* ------------ Nav ------------ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#automations", label: "Automations" },
      { href: "#portfolio", label: "Work" },
      { href: "#process", label: "Process" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="font-semibold tracking-tight hover:opacity-80 transition"
        >
          HS • Automation
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="hover:underline underline-offset-4 decoration-black/40 transition-all duration-300"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden p-2 rounded-lg border border-black/10"
        >
          <span
            className={`block w-5 h-0.5 bg-black mb-1 transition-transform duration-300 ${
              open ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${
              open ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 hover:underline underline-offset-4 decoration-black/40 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block text-center px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ------------ Hero ------------ */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle animated backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-black/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-[600px] rounded-full bg-black/5 blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-5xl px-4 sm:px-6 pt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          <Typewriter
            words={[
              "Automation Specialist & Workflow Engineer",
              "Systems that work while you sleep.",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={46}
            deleteSpeed={28}
            delaySpeed={1600}
          />
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-5 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto px-4"
        >
          Helping startups scale with n8n, Next.js, and custom integrations. I
          build intelligent, responsive applications where the automation does
          the heavy lifting—quietly and reliably.
        </motion.p>

        <motion.div
          {...fadeUp(0.35)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            View work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-black/15 font-medium hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Start a project
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.45)}
          className="mt-8 flex items-center justify-center gap-5  "
        >
          <SocialLink
            href="https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui"
            label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.14V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V24h-4V8z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://github.com/hafeezsiddiqui27" label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.69-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0 1 12 6.8c.94 0 1.88.13 2.76.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.75 1.13 2.96 0 4.22-2.56 5.16-5.01 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://twitter.com/HafeezuSiddiqui" label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2H21.5l-7.61 8.69L23 22h-6.79l-5.31-6.56L4.7 22H1.44l8.15-9.3L1 2h6.96l4.79 6.06L18.24 2Zm-1.19 18h1.98L7.03 4H5.03l12.02 16Z" />
            </svg>
          </SocialLink>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------ Section wrapper ------------ */
function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-black/70 text-base sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}

/* ------------ Divider ------------ */
function Divider() {
  return (
    <div className="relative h-12 md:h-16">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black/10" />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 rounded-full border border-black/15 bg-white" />
    </div>
  );
}

/* ------------ Cards ------------ */
function Cards({
  items,
  twoCols = false,
}: {
  items: { t: string; d: string }[];
  twoCols?: boolean;
}) {
  return (
    <div
      className={`grid gap-4 sm:gap-6 ${
        twoCols ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      } grid-cols-1`}
    >
      {items.map((it, i) => (
        <motion.article
          key={it.t}
          className="group relative rounded-xl md:rounded-2xl border border-black/10 bg-white p-4 sm:p-6 transition-all duration-300 will-change-transform hover:shadow-lg"
          custom={i}
          variants={cascade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl ring-0 group-hover:ring-1 ring-black/10 transition" />
          <h3 className="font-semibold text-lg">{it.t}</h3>
          <p className="mt-2 text-black/70 text-sm sm:text-base">{it.d}</p>
        </motion.article>
      ))}
    </div>
  );
}

/* ------------ Projects ------------ */
function Projects() {
  const data = [
    {
      t: "Lead automation",
      bullets: [
        "Manual entry from web forms to CRM caused delays and errors.",
        "n8n flow to capture, enrich, and notify sales on Slack in real time.",
      ],
      r: "10+ hours saved weekly and faster first response.",
    },
    {
      t: "Order updates",
      bullets: [
        "Customers lacked timely order status and support tickets piled up.",
        "WhatsApp + email notifications tied to order events.",
      ],
      r: "Lower support load and higher repeat purchases.",
    },
    {
      t: "Finance alerts",
      bullets: [
        "Missed invoice reminders and inconsistent ledger updates.",
        "Automated reminders, postings, and reconciliation hooks.",
      ],
      r: "On-time payments and cleaner books.",
    },
  ];

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((cs, i) => (
        <motion.article
          key={cs.t}
          custom={i}
          variants={cascade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl md:rounded-2xl border border-black/10 p-4 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="font-semibold text-lg">{cs.t}</h3>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-black/80 text-sm sm:text-base">
            {cs.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg md:rounded-xl border border-black/10 bg-white p-3 sm:p-4">
            <p className="text-sm">
              Result: <span className="font-medium">{cs.r}</span>
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

/* ------------ Process ------------ */
function Process() {
  const steps = [
    {
      t: "Discovery",
      d: "Understand current steps, constraints, and desired outcomes.",
    },
    {
      t: "Design",
      d: "Propose flows, events, and data contracts; agree on scope.",
    },
    { t: "Build", d: "Implement n8n nodes, webhooks, retries, and logging." },
    { t: "Ship", d: "Document, handover, and monitor." },
  ];
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <motion.div
          key={s.t}
          custom={i}
          variants={cascade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl md:rounded-2xl border border-black/10 p-4 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-sm uppercase tracking-wide text-black/60">
            Step {i + 1}
          </div>
          <div className="mt-2 font-semibold text-lg">{s.t}</div>
          <p className="mt-2 text-black/70 text-sm sm:text-base">{s.d}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ------------ Testimonials (auto-rotating) ------------ */
function Testimonials() {
  const testimonials = [
    {
      q: "Transformed our weekly workload. The critical steps now run without a checklist.",
      a: "Operations Lead, SaaS",
    },
    {
      q: "Clear plans, solid execution, and documentation we can own.",
      a: "Founder, D2C",
    },
    {
      q: "Reliable builds and steady improvements—exactly what we needed.",
      a: "Head of Growth, E-commerce",
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((p) => (p + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-0">
      <motion.figure
        key={idx}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-xl md:rounded-2xl border border-black/10 p-6 sm:p-8 bg-white text-center"
      >
        <blockquote className="text-lg md:text-xl leading-relaxed">
          “{testimonials[idx].q}”
        </blockquote>
        <figcaption className="mt-4 text-black/70">
          — {testimonials[idx].a}
        </figcaption>
      </motion.figure>
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full border border-black/40 transition-all duration-300 ${
              i === idx ? "bg-black scale-125" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------ Contact ------------ */
function Contact() {
  return (
    <div className="max-w-3xl">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-xl md:rounded-2xl border border-black/10 bg-white p-4 sm:p-6 grid gap-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Name" placeholder="Your name" />
          <Field type="email" label="Email" placeholder="you@company.com" />
        </div>
        <Field
          as="textarea"
          label="Message"
          placeholder="Describe what you want to automate"
          rows={6}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/70 text-center sm:text-left">
            You&apos;ll receive a response by email.
          </p>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Send
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="mailto:	hafeezusiddiqui27@gmail.com"
          className="px-4 py-2 rounded-lg border border-black/15 hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg border border-black/15 hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.14V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V24h-4V8z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/hafeezsiddiqui27"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg border border-black/15 hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.69-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0 1 12 6.8c.94 0 1.88.13 2.76.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.75 1.13 2.96 0 4.22-2.56 5.16-5.01 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}

/* ------------ Footer ------------ */
function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/70 text-center md:text-left">
          © {new Date().getFullYear()} Hafeez Siddiqui
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm">
          <a
            href="#about"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#automations"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            Automations
          </a>
          <a
            href="#portfolio"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------ Small pieces ------------ */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full border border-black/15 hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1"
    >
      <span className="sr-only">{label}</span>
      <span className="inline-flex">{children}</span>
    </a>
  );
}

function Field({
  label,
  as,
  rows,
  type = "text",
  placeholder,
}: {
  label: string;
  as?: "textarea";
  rows?: number;
  type?: string;
  placeholder?: string;
}) {
  const base =
    "mt-1 w-full rounded-lg border border-black/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300";
  if (as === "textarea") {
    return (
      <div>
        <label className="block text-sm font-medium">{label}</label>
        <textarea rows={rows} placeholder={placeholder} className={base} />
      </div>
    );
  }
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input type={type} placeholder={placeholder} className={base} />
    </div>
  );
}
