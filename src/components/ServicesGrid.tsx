import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: string;
  title: string;
  subheading?: {
    line1: string;
    line2: string;
  };
  description: string;
  price: string;
  startingLabel?: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    icon: '/service-cards/ant-hex-live.png',
    title: 'Ant Control',
    subheading: {
      line1: 'STOP ANTS AT THE SOURCE.',
      line2: 'COLONY ERADICATION.',
    },
    description: 'Targeted baiting & pheromone trail elimination',
    price: '₹499',
    href: '/services/ant-control',
  },
  {
    icon: '/service-cards/bedbug-hex-live.png',
    title: 'Bed Bug Treatments',
    subheading: {
      line1: 'BED BUGS OUT.',
      line2: 'SLEEP PEACEFULLY.',
    },
    description: 'Deep thermal & chemical mattress-safe eradication',
    price: '₹999',
    href: '/services/bed-bugs',
  },
  {
    icon: '/service-cards/cockroach-hex-live.png',
    title: 'Cockroach Control',
    subheading: {
      line1: 'CLEAN & HYGIENIC SPACES.',
      line2: 'ODORLESS GEL BAITING.',
    },
    description: 'Kitchen gel baiting & drain flush-out service',
    price: '₹599',
    href: '/services/cockroach-control',
  },
  {
    icon: '/service-cards/fleas-hex-live.png',
    title: 'Fleas Control',
    subheading: {
      line1: 'STOP ITCHING.',
      line2: 'PET & CARPET RELIEF.',
    },
    description: 'Pet-safe indoor carpet, rug & upholstery sanitization',
    price: '₹799',
    href: '/services/fleas',
  },
  {
    icon: '/service-cards/flies-hex-live.png',
    title: 'Flies Control',
    subheading: {
      line1: 'CLEAN AIR & DRAINS.',
      line2: 'LARVICIDE & BARRIER.',
    },
    description: 'Bio-drain flushing, fruit fly & house fly perimeter misting',
    price: '₹499',
    href: '/services/fly-control',
  },
  {
    icon: '/service-cards/mosquito-hex-live.png',
    title: 'Mosquito Control',
    subheading: {
      line1: 'DENGUE & MALARIA DEFENSE.',
      line2: 'MISTING & LARVICIDE.',
    },
    description: 'Larvicide breeding control & outdoor barrier misting',
    price: '₹799',
    href: '/services/mosquitoes',
  },
  {
    icon: '/service-cards/rodent-hex-live.png',
    title: 'Rodent Management',
    subheading: {
      line1: 'ENTRY POINT SEALING.',
      line2: 'TAMPER-PROOF BAITING.',
    },
    description: 'Tamper-proof bait stations & burrow exclusion sealing',
    price: '₹699',
    href: '/services/rodents',
  },
  {
    icon: '/service-cards/termite-hex-live.png',
    title: 'Termite Treatment',
    subheading: {
      line1: 'STRUCTURAL PROTECTION.',
      line2: 'DRILL-FILL-SEAL BARRIER.',
    },
    description: 'Drill-fill-seal subterranean barrier with warranty',
    price: '₹899',
    href: '/services/termites',
  },
  {
    icon: '/service-cards/tick-hex-live.png',
    title: 'Tick Control',
    subheading: {
      line1: 'YARD & HOME DEFENSE.',
      line2: 'KENNEL & LAWN CARE.',
    },
    description: 'Yard border spraying & indoor perimeter defense',
    price: '₹799',
    href: '/services/tick-control',
  },
  {
    icon: '/service-cards/woodborer-hex-live.png',
    title: 'Wood Borer Treatment',
    subheading: {
      line1: 'WOODWORK DEFENSE.',
      line2: 'SYRINGE INJECTION.',
    },
    description: 'Specialized chemical injection into exit holes & timbers',
    price: '₹899',
    href: '/services/wood-borer-control',
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#E5A93C]" />
              <span className="text-[#E5A93C] text-xs font-bold tracking-[0.2em] uppercase">
                PEST CONTROL SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.12]">
              THE RIGHT APPROACH FOR{' '}
              <span className="slv-gold-text">EVERY PEST.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl font-normal">
              Explore dedicated pest control services designed for homes, PGs, offices, and commercial properties in Bangalore.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/contact"
              className="slv-btn-secondary px-5 py-2.5 text-xs font-bold gap-2 inline-flex items-center"
            >
              <span>Book Free Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 10-Card Grid in strict alphabetical order: 5 columns x 2 rows on large desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {services.map((item, idx) => {
            return (
              <a
                key={idx}
                href={item.href}
                className="slv-card group rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6C453] bg-gradient-to-br from-[#16171a] via-[#121316] to-[#0f1013] border border-[#E5A93C]/35 hover:border-[#F6C453] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_26px_rgba(246,196,83,0.25),0_10px_32px_rgba(0,0,0,0.65)] ring-1 ring-[#E5A93C]/15 hover:ring-[#F6C453]/40"
              >
                {/* Subtle ambient gold glow in the card top center */}
                <div
                  className="absolute left-1/2 -top-10 -translate-x-1/2 w-36 h-36 rounded-full bg-gradient-to-b from-[#E5A93C]/15 group-hover:from-[#F6C453]/30 to-transparent blur-2xl pointer-events-none transition-all duration-500"
                />

                {/* Inner subtle illumination along card top edge */}
                <div
                  className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F6C453]/50 to-transparent pointer-events-none"
                />

                {/* Top Section: Gold Hexagonal Pest Icon centered above service title */}
                <div className="w-full flex flex-col items-center justify-center pt-1 pb-3 relative z-10">
                  <div
                    className="absolute top-2 w-20 h-20 rounded-full blur-xl pointer-events-none transition-all duration-300 bg-[#E5A93C]/10 group-hover:bg-[#F6C453]/25"
                  />

                  {/* Gold Hexagonal Pest Line-Art Icon with True Alpha Transparency (No X Marks) */}
                  <div className="relative flex items-center justify-center w-[76px] h-[86px] sm:w-[88px] sm:h-[98px] shrink-0 mb-3">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105 drop-shadow-[0_4px_14px_rgba(229,169,60,0.45)] group-hover:drop-shadow-[0_0_24px_rgba(246,196,83,0.85)] relative z-10 motion-reduce:transition-none motion-reduce:transform-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="text-white text-base sm:text-lg font-bold tracking-tight mb-1.5 group-hover:text-[#F6C453] transition-colors leading-snug line-clamp-1 w-full">
                    {item.title}
                  </h3>

                  {/* Description / Subheading */}
                  {item.subheading ? (
                    <div className="text-zinc-300 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase leading-tight mb-2 w-full">
                      <div className="truncate">{item.subheading.line1}</div>
                      <div className="truncate">{item.subheading.line2}</div>
                    </div>
                  ) : (
                    <p className="text-zinc-400 text-xs leading-snug line-clamp-2 mb-2 w-full">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Section: Price, starting label, and circular arrow button */}
                <div className="flex items-center justify-between pt-3 mt-auto w-full border-t border-[#E5A93C]/20 relative z-10">
                  <div className="text-left">
                    <span className="text-[9.5px] sm:text-[10px] text-zinc-400 font-medium uppercase tracking-wider block mb-0.5">
                      Starting at
                    </span>
                    <div className="text-base sm:text-lg font-black leading-none text-[#F6C453] tracking-tight drop-shadow-[0_2px_10px_rgba(246,196,83,0.35)]">
                      {item.price}
                    </div>
                  </div>

                  {/* Circular dark button with thin gold border and gold arrow */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#18191d] border border-[#E5A93C]/40 flex items-center justify-center text-[#F6C453] shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:text-[#F6C453] group-hover:border-[#F6C453]/80 group-hover:bg-[#22242a] group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(229,169,60,0.25)] transition-all shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Clear Button/Link: View All Pest Services */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#F6C453] text-[#0a0b0e] font-black text-sm tracking-wide shadow-lg shadow-[#E5A93C]/20 hover:brightness-110 hover:shadow-[#E5A93C]/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <span>View All Pest Services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-xs text-zinc-400 hidden sm:inline">
            Browse all 10 pest management treatments in Bangalore
          </span>
        </div>
      </div>
    </section>
  );
};

