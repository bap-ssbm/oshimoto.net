import { useState } from 'react';
import Galleries from './Galleries';
import Magazine from './Magazine';
import Bio from './Bio';
import Events from '../home/Events/Events';
import { ABOUT_IMAGE } from '../../data/site-config';

export default function AboutPgLayout() {
  const [english, setEnglish] = useState(true);

  return (
    <main className="text-[16px] font-sans px-[5%] flex gap-20 flex-col max-w-[1300px] mx-auto">
      <div className="flex gap-[5%] md:flex-row flex-col">
        <div className="mb-10 md:mb-0 md:w-[33%]">
          <img
            className="w-full"
            src={ABOUT_IMAGE}
            alt="Ryuichi Oshimoto portrait"
          />
        </div>
        <div className="md:w-[60vw] leading-10 flex flex-col gap-10">
          <div>
            <h1 className="tracking-[5px] text-[25px]">押本龍一</h1>
            <p className="italic">An Experienced Japanese Photographer</p>
          </div>
          <div className="text-[14px] flex gap-10" role="tablist" aria-label="Language selection">
            <button
              role="tab"
              aria-selected={english}
              style={english ? { borderBottom: '1px solid white' } : { opacity: 0.5 }}
              onClick={() => setEnglish(true)}
              className="tracking-[3px] transition duration-300"
            >
              English
            </button>
            <button
              role="tab"
              aria-selected={!english}
              style={!english ? { borderBottom: '1px solid white' } : { opacity: 0.5 }}
              onClick={() => setEnglish(false)}
              className="tracking-[3px] transition duration-300"
            >
              日本語
            </button>
          </div>
          <Bio english={english} />
        </div>
      </div>
      <hr className="opacity-30" />
      <div className="flex gap-10 flex-col">
        <Events />
        <Magazine english={english} />
      </div>
    </main>
  );
}
