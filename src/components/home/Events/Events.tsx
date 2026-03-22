import { events } from '../../../data/events-data';

export default function Events() {
  const [featured, ...past] = events;

  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-20">
      {/* Featured / latest event */}
      <div className="md:w-[45%]">
        <p className="font-anonymous-pro text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
          Latest
        </p>
        <a
          href={featured.link || featured.pdf || '#'}
          target={featured.link || featured.pdf ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="overflow-hidden mb-6 relative">
            <img
              src={featured.img}
              alt=""
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04]"
              style={{ filter: 'grayscale(0.15) sepia(0.06)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black-950/20 group-hover:bg-black-950/0 transition-colors duration-700" />
          </div>
          <p className="text-cream/60 text-[11px] tracking-[0.15em] font-anonymous-pro mb-3">
            {featured.date}
          </p>
          <h3 className="font-noto-serif-jp text-[17px] md:text-[19px] text-cream/90 leading-[1.7] group-hover:text-gold transition-colors duration-500 mb-2">
            {featured.name}
          </h3>
          <p className="text-cream/60 text-[13px]">{featured.place}</p>
        </a>
      </div>

      {/* Past events timeline */}
      <div className="md:w-[55%] md:pt-10">
        <p className="font-anonymous-pro text-[10px] tracking-[0.25em] uppercase text-cream/50 mb-8">
          Past Exhibitions
        </p>
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-cream/15 hidden md:block" />

          {past.map((evt, i) => (
            <div key={i} className="group relative flex gap-6 md:gap-8 mb-10 last:mb-0">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center pt-1.5 flex-shrink-0">
                <div className="w-[7px] h-[7px] rounded-full border border-cream/25 group-hover:border-gold/50 group-hover:bg-gold/20 transition-all duration-500" />
              </div>

              {/* Thumbnail */}
              <div className="flex-shrink-0 w-[80px] h-[80px] md:w-[90px] md:h-[90px] overflow-hidden">
                <img
                  src={evt.img}
                  alt=""
                  width={180}
                  height={180}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.08]"
                  style={{ filter: 'grayscale(0.3) brightness(0.8)' }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <p className="text-cream/50 text-[11px] tracking-[0.12em] font-anonymous-pro mb-1.5">
                  {evt.date}
                </p>
                <p className="font-noto-serif-jp text-[14px] md:text-[15px] text-cream/80 leading-[1.7] group-hover:text-cream transition-colors duration-500">
                  {evt.name}
                </p>
                <p className="text-cream/50 text-[12px] mt-1">{evt.place}</p>
                <div className="flex gap-4 mt-2">
                  {evt.link && (
                    <a href={evt.link} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.15em] uppercase text-cream/50 hover:text-gold transition-colors duration-500">
                      Instagram →
                    </a>
                  )}
                  {evt.pdf && (
                    <a href={evt.pdf} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.15em] uppercase text-cream/50 hover:text-gold transition-colors duration-500">
                      PDF →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
