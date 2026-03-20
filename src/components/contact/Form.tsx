import { useRef, useState, useCallback } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import emailjs from '@emailjs/browser';

const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || '6LfMpJklAAAAADeaKJSsTQwVwC3PIVkUB8B3Yrcg';
const EMAILJS_SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || 'service_l49owur';
const EMAILJS_TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID || 'template_071s328';

const INPUT_CLASS =
  'bg-black border border-white opacity-50 focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest text-white font-sans transition duration-300';

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
            name="name"
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
            name="email"
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
          className="w-fit px-7 py-3 tracking-[4px] border border-white opacity-40 hover:opacity-100 transition duration-300"
        >
          {isLoading ? <BiLoaderAlt className="animate-spin" aria-label="Sending..." /> : 'SEND'}
        </button>
        {msg && <p className="tracking-[2px] text-[18px]" role="status">{msg}</p>}
      </form>
    </>
  );
}
