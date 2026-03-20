import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <div className="px-[10%] pt-[10%] pb-[5%] flex md:justify-between font-sans flex-col md:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-10">
        <SocialIcons />
        <a href="/contact" className="tracking-[2px]">
          Contact Me
        </a>
      </div>
      <div className="flex flex-col gap-10 order-2 md:text-end">
        <p>© Ryuichi Oshimoto {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
