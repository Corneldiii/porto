"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Reveal from "../Reveal";
import { socialMedia } from "@/lib/data";
import { useLang } from "@/context/LangContext";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useLang();

  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !message) {
      setStatus(t.contact.emailRequired);
      return;
    }

    if (recaptchaKey) {
      const token = await recaptchaRef.current?.executeAsync();
      if (!token) {
        setStatus(t.contact.recaptchaRequired);
        return;
      }
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: email,
          subject: `Portfolio Contact from ${email}`,
          message: message,
        }),
      });

      if (response.ok) {
        setStatus(t.contact.success);
        setEmail("");
        setMessage("");
        recaptchaRef.current?.reset();
      } else {
        setStatus(t.contact.fail);
      }
    } catch {
      setStatus(t.contact.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex flex-col items-center w-full min-h-screen py-20 px-5 md:px-10 lg:px-20" id="getintouch">
      <div className="w-full max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-gray-500 mb-2 tracking-widest uppercase">
            {t.contact.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-12 leading-tight">
            {t.contact.title}{" "}
            <span className="text-[#FF4A11]">{t.contact.talk}</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="emailField" className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  id="emailField"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.emailPlaceholder}
                  className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 h-11 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF4A11] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="messageField" className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  id="messageField"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none h-36 focus:outline-none focus:border-[#FF4A11] transition-colors"
                />
              </div>

              {recaptchaKey && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaKey}
                  size="invisible"
                />
              )}

              <button
                type="button"
                disabled={isSubmitting}
                onClick={sendEmail}
                className={`flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-sm font-medium text-white transition-all ${isSubmitting
                    ? "bg-[#c73d0e] opacity-60 cursor-not-allowed"
                    : "bg-[#FF4A11] hover:bg-[#e0400f] active:scale-95 cursor-pointer"
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>

              {status && (
                <p className={`text-sm px-4 py-2 rounded-xl w-fit ${status.includes("berhasil") || status.includes("success")
                    ? "bg-green-900/40 text-green-400 border border-green-800"
                    : "bg-red-900/40 text-red-400 border border-red-800"
                  }`}>
                  {status}
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-5 pb-4 border-b border-white/10">
                {t.contact.orReach}
              </p>

              <div className="flex flex-col gap-1">
                {socialMedia.map((sm, i) => (
                  sm.url ? (
                    <a
                      key={i}
                      href={sm.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className={`w-9 h-9 rounded-lg ${sm.color} flex items-center justify-center shrink-0`}>
                        <Image src={sm.icon} alt={sm.name} className="invert w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{sm.name}</p>
                        <p className="text-xs text-gray-500">{sm.handle}</p>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                    >
                      <div className={`w-9 h-9 rounded-lg ${sm.color} flex items-center justify-center shrink-0`}>
                        <Image src={sm.icon} alt={sm.name} className="invert w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{sm.name}</p>
                        <p className="text-xs text-gray-500">{sm.handle}</p>
                      </div>
                    </div>
                  )
                ))}

                <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <p className="text-xs text-gray-500">aldianocta178@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-6 border-t border-white/10 gap-2">
            <p className="text-xs text-gray-600">{t.contact.footer}</p>
            <p className="text-xs text-gray-600">{t.contact.rights}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
