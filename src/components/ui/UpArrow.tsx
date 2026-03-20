import { HiArrowLongUp } from 'react-icons/hi2';

export default function UpArrow() {
  return (
    <button
      type="button"
      className="hover:scale-110 transition duration-500 hover:text-slate-200 px-[10%] pt-16"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      aria-label="Scroll to top"
    >
      Back To Top <span className="inline-block text-[20px]"><HiArrowLongUp /></span>
    </button>
  );
}
