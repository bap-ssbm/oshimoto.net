import { useRef, useState, useCallback } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import emailjs from '@emailjs/browser';

const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '';
const EMAILJS_SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? '';

const INPUT_CLASS =
  'bg-transparent border-b border-cream/30 focus:border-gold py-3 tracking-[0.1em] text-cream text-[14px] font-brandon-grotesque transition-all duration-500 outline-none placeholder:text-cream/40 placeholder:tracking-[0.15em] placeholder:text-[12px] placeholder:uppercase';

export default function Form() {
  const [msg, setMsg] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const executeRecaptcha = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      const grecaptcha = (window as Window & { grecaptcha?: any }).grecaptcha;
      if (!grecaptcha) {
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }
      grecaptcha.ready(() => {
        grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then((token: string) => resolve(token))
          .catch((err: Error) => reject(err));
      });
    });
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg(null);

    try {
      await executeRecaptcha();

      if (formRef.current) {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
          publicKey: import.meta.env.PUBLIC_EMAIL_CODE,
        });
        setMsg('Message sent!');
        setMessage('');
        setSubject('');
      }
    } catch (error) {
      console.error(error);
      setMsg('Something went wrong, please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} async defer />
      <form onSubmit={onSubmit} ref={formRef} className="flex flex-col gap-7" aria-label="Contact form">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input
            id="contact-name"
            className={INPUT_CLASS}
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input
            id="contact-email"
            className={INPUT_CLASS}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-subject" className="sr-only">Subject</label>
          <input
            id="contact-subject"
            className={INPUT_CLASS}
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea
            id="contact-message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            className={INPUT_CLASS + ' min-h-[150px] resize-y'}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-fit text-[12px] tracking-[0.3em] uppercase text-cream/70 hover:text-gold border border-cream/30 hover:border-gold px-8 py-4 transition-all duration-500"
        >
          {isLoading ? <BiLoaderAlt className="animate-spin" aria-label="Sending..." /> : 'Send Message'}
        </button>
        {msg && <p className="tracking-[0.15em] text-[14px] text-gold/80 mt-6" role="status">{msg}</p>}
      </form>
    </>
  );
}
