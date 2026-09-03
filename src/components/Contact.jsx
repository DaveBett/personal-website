import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="scroll-mt-24 max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/80">
      <div className="max-w-xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Contact</p>
        <h2 className="text-xl font-bold text-zinc-100">Let’s connect</h2>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
          Looking for a Full-Stack developer in Dublin or want to discuss an open role? Drop a message below or email directly at{" "}
          <a
            href="mailto:davide.betterini@gmail.com"
            className="text-zinc-200 underline underline-offset-4 hover:text-white transition"
          >
            davide.betterini@gmail.com
          </a>.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">Email</label>
            <input
              type="text"
              name="user_email"
              required
              className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-2.5 rounded-md text-xs font-semibold bg-sky-500 text-zinc-950 hover:bg-sky-400 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sky-400 text-xs text-center font-mono mt-2"> 
              ✓ Message sent successfully. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-xs text-center font-mono mt-2">
              Failed to send. Please write directly to davide.betterini@gmail.com
            </p>
          )}
        </form>

        <footer className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2026 Davide Betterini • Dublin, Ireland</p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/DaveBett" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/davide-betterini" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition">
              LinkedIn
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-zinc-400 hover:text-sky-400 transition font-mono flex items-center gap-1 cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}