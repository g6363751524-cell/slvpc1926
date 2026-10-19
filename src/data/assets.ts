/**
 * Centralized Asset Registry for SLV Pest Control
 *
 * This file documents and maps all image and icon assets across the website.
 * To replace an image, either:
 *  1. Replace the corresponding file in `public/images/` or `public/icons/` maintaining similar aspect ratios, OR
 *  2. Update the path below to point to your new file in `public/`.
 */

export const ASSET_PATHS = {
  // Brand & Contact Icons
  branding: {
    whatsapp: '/public/icons/whatsapp-icon.png',
    whatsappTransparent: '/public/icons/whatsapp-transparent.png',
  },

  // Service Photography & Backgrounds
  banners: {
    hero: '/images/hero-banner.png',
    cleanKitchen: '/images/clean-kitchen-interior.jpg',
    flyHero: '/images/fly-hero-banner.jpg',
    beetleHero: '/images/beetle-hero-banner.jpg',
    caterpillarHero: '/images/caterpillar-hero-banner.jpg',
    spiderHero: '/images/spider-hero-banner.jpg',
  },

  // Species Base Icons
  speciesIcons: {
    ant: '/icons/ant-icon.png',
    bedbug: '/icons/bedbug-icon.png',
    cockroach: '/icons/cockroach-icon.png',
    deadCockroach: '/icons/dead-cockroach-icon.png',
    deadRat: '/icons/dead-rat-icon.png',
    rodent: '/icons/rodent-icon.png',
    tick: '/icons/tick-icon.png',
  },

  // Metallic Gold Hexagonal Service Card Icons (10 Services)
  // Transparent PNG and scalable SVG formats available
  serviceHexIcons: {
    ant: {
      png: '/service-cards/ant-hex-gold.png',
      svg: '/service-cards/ant-hex-gold.svg',
      live: '/service-cards/ant-hex-live.png',
    },
    bedbug: {
      png: '/service-cards/bedbug-hex-gold.png',
      svg: '/service-cards/bedbug-hex-gold.svg',
      live: '/service-cards/bedbug-hex-live.png',
    },
    cockroach: {
      png: '/service-cards/cockroach-hex-gold.png',
      svg: '/service-cards/cockroach-hex-gold.svg',
      live: '/service-cards/cockroach-hex-live.png',
    },
    fleas: {
      png: '/service-cards/fleas-hex-gold.png',
      svg: '/service-cards/fleas-hex-gold.svg',
      live: '/service-cards/fleas-hex-live.png',
    },
    flies: {
      png: '/service-cards/flies-hex-gold.png',
      svg: '/service-cards/flies-hex-gold.svg',
      live: '/service-cards/flies-hex-live.png',
    },
    mosquito: {
      png: '/service-cards/mosquito-hex-gold.png',
      svg: '/service-cards/mosquito-hex-gold.svg',
      live: '/service-cards/mosquito-hex-live.png',
    },
    rodent: {
      png: '/service-cards/rodent-hex-gold.png',
      svg: '/service-cards/rodent-hex-gold.svg',
      live: '/service-cards/rodent-hex-live.png',
    },
    termite: {
      png: '/service-cards/termite-hex-gold.png',
      svg: '/service-cards/termite-hex-gold.svg',
      live: '/service-cards/termite-hex-live.png',
    },
    tick: {
      png: '/service-cards/tick-hex-gold.png',
      svg: '/service-cards/tick-hex-gold.svg',
      live: '/service-cards/tick-hex-live.png',
    },
    woodborer: {
      png: '/service-cards/woodborer-hex-gold.png',
      svg: '/service-cards/woodborer-hex-gold.svg',
      live: '/service-cards/woodborer-hex-live.png',
    },
  },
} as const;
