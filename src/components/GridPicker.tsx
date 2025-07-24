import React, { useState, useRef } from "react";
import ImageDropdown from "./ImageDropdown";
import html2canvas from "html2canvas";

const games = [
  { name: "Spyro's Adventure", logo: "/images/spyros.webp" },
  { name: "Giants", logo: "/images/giants.webp" },
  { name: "Swapforce", logo: "/images/swapforce.webp" },
  { name: "Trapteam", logo: "/images/trapteam.webp" },
  { name: "Superchargers", logo: "/images/superchargers.webp" },
  { name: "Imaginators", logo: "/images/imaginators.png" },
  { name: "Favorites", logo: "/images/favorites.webp" }
];

const elements = [
  { name: "Water", icon: "/images/water.webp" },
  { name: "Fire", icon: "/images/fire.webp" },
  { name: "Earth", icon: "/images/earth.webp" },
  { name: "Air", icon: "/images/air.webp" },
  { name: "Undead", icon: "/images/undead.webp" },
  { name: "Life", icon: "/images/life.webp" },
  { name: "Tech", icon: "/images/tech.webp" },
  { name: "Magic", icon: "/images/magic.webp" },
  { name: "Dark", icon: "/images/dark.webp" },
  { name: "Light", icon: "/images/light.webp" },
  { name: "Variants", icon: "/images/variants.webp" },
  { name: "Favorites", icon: "/images/favorite.webp" },
];

const optionsByCell: Record<string, { id: number; src: string }[]> = {
  "Spyro's Adventure-Water": [
    { id: 1, src: "/images/spyro-water-1.webp" },
    { id: 2, src: "/images/spyro-water-2.webp" },
    { id: 3, src: "/images/spyro-water-3.webp" },
    { id: 4, src: "/images/spyro-water-4.webp" },
  ],
    "Spyro's Adventure-Fire": [
    { id: 1, src: "/images/spyro-fire-1.webp" },
    { id: 2, src: "/images/spyro-fire-2.webp" },
    { id: 3, src: "/images/spyro-fire-3.webp" },
    { id: 4, src: "/images/spyro-fire-4.webp" },
  ],
    "Spyro's Adventure-Earth": [
    { id: 1, src: "/images/spyro-earth-1.webp" },
    { id: 2, src: "/images/spyro-earth-2.webp" },
    { id: 3, src: "/images/spyro-earth-3.webp" },
    { id: 4, src: "/images/spyro-earth-4.webp" },
  ],
    "Spyro's Adventure-Air": [
    { id: 1, src: "/images/spyro-air-1.webp" },
    { id: 2, src: "/images/spyro-air-2.webp" },
    { id: 3, src: "/images/spyro-air-3.webp" },
    { id: 4, src: "/images/spyro-air-4.webp" },
  ],
    "Spyro's Adventure-Undead": [
    { id: 1, src: "/images/spyro-undead-1.webp" },
    { id: 2, src: "/images/spyro-undead-2.webp" },
    { id: 3, src: "/images/spyro-undead-3.webp" },
    { id: 4, src: "/images/spyro-undead-4.webp" },
  ],
    "Spyro's Adventure-Life": [
    { id: 1, src: "/images/spyro-life-1.webp" },
    { id: 2, src: "/images/spyro-life-2.webp" },
    { id: 3, src: "/images/spyro-life-3.webp" },
    { id: 4, src: "/images/spyro-life-4.webp" },
  ],
    "Spyro's Adventure-Tech": [
    { id: 1, src: "/images/spyro-tech-1.webp" },
    { id: 2, src: "/images/spyro-tech-2.webp" },
    { id: 3, src: "/images/spyro-tech-3.webp" },
    { id: 4, src: "/images/spyro-tech-4.webp" },
  ],
    "Spyro's Adventure-Magic": [
    { id: 1, src: "/images/spyro-magic-1.webp" },
    { id: 2, src: "/images/spyro-magic-2.webp" },
    { id: 3, src: "/images/spyro-magic-3.webp" },
    { id: 4, src: "/images/spyro-magic-4.webp" },
  ],
    "Spyro's Adventure-Variants": [
    { id: 1, src: "/images/spyro-variants-1.webp" },
    { id: 2, src: "/images/spyro-variants-2.webp" },
    { id: 3, src: "/images/spyro-variants-3.webp" },
    { id: 4, src: "/images/spyro-variants-4.webp" },
    { id: 5, src: "/images/spyro-variants-5.webp" },
  ],
    "Giants-Water": [
    { id: 1, src: "/images/giants-water-1.webp" },
    { id: 2, src: "/images/giants-water-2.webp" },
    { id: 3, src: "/images/giants-water-3.webp" },
    { id: 4, src: "/images/giants-water-4.webp" },
    { id: 5, src: "/images/giants-water-5.webp" },
  ],
    "Giants-Fire": [
    { id: 1, src: "/images/giants-fire-1.webp" },
    { id: 2, src: "/images/giants-fire-2.webp" },
    { id: 3, src: "/images/giants-fire-3.webp" },
    { id: 4, src: "/images/giants-fire-4.webp" },
    { id: 5, src: "/images/giants-fire-5.webp" },
  ],
    "Giants-Earth": [
    { id: 1, src: "/images/giants-earth-1.webp" },
    { id: 2, src: "/images/giants-earth-2.webp" },
    { id: 3, src: "/images/giants-earth-3.webp" },
    { id: 4, src: "/images/giants-earth-4.webp" },
    { id: 5, src: "/images/giants-earth-5.webp" },
  ],
    "Giants-Air": [
    { id: 1, src: "/images/giants-air-1.webp" },
    { id: 2, src: "/images/giants-air-2.webp" },
    { id: 3, src: "/images/giants-air-3.webp" },
    { id: 4, src: "/images/giants-air-4.webp" },
    { id: 5, src: "/images/giants-air-5.webp" },
  ],
    "Giants-Undead": [
    { id: 1, src: "/images/giants-undead-1.webp" },
    { id: 2, src: "/images/giants-undead-2.webp" },
    { id: 3, src: "/images/giants-undead-3.webp" },
    { id: 4, src: "/images/giants-undead-4.webp" },
    { id: 5, src: "/images/giants-undead-5.webp" },
  ],
    "Giants-Life": [
    { id: 1, src: "/images/giants-life-1.webp" },
    { id: 2, src: "/images/giants-life-2.webp" },
    { id: 3, src: "/images/giants-life-3.webp" },
    { id: 4, src: "/images/giants-life-4.webp" },
    { id: 5, src: "/images/giants-life-5.webp" },
  ],
    "Giants-Tech": [
    { id: 1, src: "/images/giants-tech-1.webp" },
    { id: 2, src: "/images/giants-tech-2.webp" },
    { id: 3, src: "/images/giants-tech-3.webp" },
    { id: 4, src: "/images/giants-tech-4.webp" },
    { id: 5, src: "/images/giants-tech-5.webp" },
  ],
    "Giants-Magic": [
    { id: 1, src: "/images/giants-magic-1.webp" },
    { id: 2, src: "/images/giants-magic-2.webp" },
    { id: 3, src: "/images/giants-magic-3.webp" },
    { id: 4, src: "/images/giants-magic-4.webp" },
    { id: 5, src: "/images/giants-magic-5.webp" },
  ],
    "Giants-Variants": [
    { id: 1, src: "/images/giants-variants-1.webp" },
    { id: 2, src: "/images/giants-variants-2.webp" },
    { id: 3, src: "/images/giants-variants-3.webp" },
    { id: 4, src: "/images/giants-variants-4.webp" },
    { id: 5, src: "/images/giants-variants-5.webp" },
    { id: 6, src: "/images/giants-variants-6.webp" },
    { id: 7, src: "/images/giants-variants-7.webp" },
    { id: 8, src: "/images/giants-variants-8.webp" },
    { id: 9, src: "/images/giants-variants-9.webp" },
    { id: 10, src: "/images/giants-variants-10.webp" },
    { id: 11, src: "/images/giants-variants-11.webp" },
    { id: 12, src: "/images/giants-variants-12.webp" },
    { id: 13, src: "/images/giants-variants-13.webp" },
    { id: 14, src: "/images/giants-variants-14.webp" },
    { id: 15, src: "/images/giants-variants-15.webp" },
    { id: 16, src: "/images/giants-variants-16.webp" },
    { id: 17, src: "/images/giants-variants-17.webp" },
    { id: 18, src: "/images/giants-variants-18.webp" },
    { id: 19, src: "/images/giants-variants-19.webp" },
    { id: 20, src: "/images/giants-variants-20.webp" },
    { id: 21, src: "/images/giants-variants-21.webp" },
    { id: 22, src: "/images/giants-variants-22.webp" },
  ],
      "Giants-Gimmicks": [
    { id: 1, src: "/images/giants-gimmicks-1.webp" },
    { id: 2, src: "/images/giants-gimmicks-2.webp" },
    { id: 3, src: "/images/giants-gimmicks-3.webp" },
    { id: 4, src: "/images/giants-gimmicks-4.webp" },
    { id: 5, src: "/images/giants-gimmicks-5.webp" },
    { id: 6, src: "/images/giants-gimmicks-6.webp" },
    { id: 7, src: "/images/giants-gimmicks-7.webp" },
    { id: 8, src: "/images/giants-gimmicks-8.webp" },
  ],
    "Swapforce-Water": [
    { id: 1, src: "/images/swapforce-water-1.webp" },
    { id: 2, src: "/images/swapforce-water-2.webp" },
    { id: 3, src: "/images/swapforce-water-3.webp" },
    { id: 4, src: "/images/swapforce-water-4.webp" },
    { id: 5, src: "/images/swapforce-water-5.webp" },
    { id: 6, src: "/images/swapforce-water-6.webp" },
  ],
    "Swapforce-Fire": [
    { id: 1, src: "/images/swapforce-fire-1.webp" },
    { id: 2, src: "/images/swapforce-fire-2.webp" },
    { id: 3, src: "/images/swapforce-fire-3.webp" },
    { id: 4, src: "/images/swapforce-fire-4.webp" },
    { id: 5, src: "/images/swapforce-fire-5.webp" },
    { id: 6, src: "/images/swapforce-fire-6.webp" },
  ],
    "Swapforce-Earth": [
    { id: 1, src: "/images/swapforce-earth-1.webp" },
    { id: 2, src: "/images/swapforce-earth-2.webp" },
    { id: 3, src: "/images/swapforce-earth-3.webp" },
    { id: 4, src: "/images/swapforce-earth-4.webp" },
    { id: 5, src: "/images/swapforce-earth-5.webp" },
    { id: 6, src: "/images/swapforce-earth-6.webp" },
  ],
    "Swapforce-Air": [
    { id: 1, src: "/images/swapforce-air-1.webp" },
    { id: 2, src: "/images/swapforce-air-2.webp" },
    { id: 3, src: "/images/swapforce-air-3.webp" },
    { id: 4, src: "/images/swapforce-air-4.webp" },
    { id: 5, src: "/images/swapforce-air-5.webp" },
    { id: 6, src: "/images/swapforce-air-6.webp" },
  ],
    "Swapforce-Undead": [
    { id: 1, src: "/images/swapforce-undead-1.webp" },
    { id: 2, src: "/images/swapforce-undead-2.webp" },
    { id: 3, src: "/images/swapforce-undead-3.webp" },
    { id: 4, src: "/images/swapforce-undead-4.webp" },
    { id: 5, src: "/images/swapforce-undead-5.webp" },
    { id: 6, src: "/images/swapforce-undead-6.webp" },
  ],
    "Swapforce-Life": [
    { id: 1, src: "/images/swapforce-life-1.webp" },
    { id: 2, src: "/images/swapforce-life-2.webp" },
    { id: 3, src: "/images/swapforce-life-3.webp" },
    { id: 4, src: "/images/swapforce-life-4.webp" },
    { id: 5, src: "/images/swapforce-life-5.webp" },
    { id: 6, src: "/images/swapforce-life-6.webp" },
  ],
    "Swapforce-Tech": [
    { id: 1, src: "/images/swapforce-tech-1.webp" },
    { id: 2, src: "/images/swapforce-tech-2.webp" },
    { id: 3, src: "/images/swapforce-tech-3.webp" },
    { id: 4, src: "/images/swapforce-tech-4.webp" },
    { id: 5, src: "/images/swapforce-tech-5.webp" },
    { id: 6, src: "/images/swapforce-tech-6.webp" },
  ],
    "Swapforce-Magic": [
    { id: 1, src: "/images/swapforce-magic-1.webp" },
    { id: 2, src: "/images/swapforce-magic-2.webp" },
    { id: 3, src: "/images/swapforce-magic-3.webp" },
    { id: 4, src: "/images/swapforce-magic-4.webp" },
    { id: 5, src: "/images/swapforce-magic-5.webp" },
    { id: 6, src: "/images/swapforce-magic-6.webp" },
  ],
    "Swapforce-Variants": [
    { id: 1, src: "/images/swapforce-variants-1.webp" },
    { id: 2, src: "/images/swapforce-variants-2.webp" },
    { id: 3, src: "/images/swapforce-variants-3.webp" },
    { id: 4, src: "/images/swapforce-variants-4.webp" },
    { id: 5, src: "/images/swapforce-variants-5.webp" },
    { id: 6, src: "/images/swapforce-variants-6.webp" },
    { id: 7, src: "/images/swapforce-variants-7.webp" },
    { id: 8, src: "/images/swapforce-variants-8.webp" },
    { id: 9, src: "/images/swapforce-variants-9.webp" },
    { id: 10, src: "/images/swapforce-variants-10.webp" },
    { id: 11, src: "/images/swapforce-variants-11.webp" },
    { id: 12, src: "/images/swapforce-variants-12.webp" },
    { id: 13, src: "/images/swapforce-variants-13.webp" },
    { id: 14, src: "/images/swapforce-variants-14.webp" },
    { id: 15, src: "/images/swapforce-variants-15.webp" },
    { id: 16, src: "/images/swapforce-variants-16.webp" },
    { id: 17, src: "/images/swapforce-variants-17.webp" },
    { id: 18, src: "/images/swapforce-variants-18.webp" },
    { id: 19, src: "/images/swapforce-variants-19.webp" },
    { id: 20, src: "/images/swapforce-variants-20.webp" },
    { id: 21, src: "/images/swapforce-variants-21.webp" },
    { id: 22, src: "/images/swapforce-variants-22.webp" },
    { id: 23, src: "/images/swapforce-variants-23.webp" },
    { id: 24, src: "/images/swapforce-variants-24.webp" },
    { id: 25, src: "/images/swapforce-variants-25.webp" },
    { id: 26, src: "/images/swapforce-variants-26.webp" },
    { id: 27, src: "/images/swapforce-variants-27.webp" },
  ],
    "Swapforce-Gimmicks": [
    { id: 1, src: "/images/swapforce-gimmicks-1.webp" },
    { id: 2, src: "/images/swapforce-gimmicks-2.webp" },
    { id: 3, src: "/images/swapforce-gimmicks-3.webp" },
    { id: 4, src: "/images/swapforce-gimmicks-4.webp" },
    { id: 5, src: "/images/swapforce-gimmicks-5.webp" },
    { id: 6, src: "/images/swapforce-gimmicks-6.webp" },
    { id: 7, src: "/images/swapforce-gimmicks-7.webp" },
    { id: 8, src: "/images/swapforce-gimmicks-8.webp" },
    { id: 9, src: "/images/swapforce-gimmicks-9.webp" },
    { id: 10, src: "/images/swapforce-gimmicks-10.webp" },
    { id: 11, src: "/images/swapforce-gimmicks-11.webp" },
    { id: 12, src: "/images/swapforce-gimmicks-12.webp" },
    { id: 13, src: "/images/swapforce-gimmicks-13.webp" },
    { id: 14, src: "/images/swapforce-gimmicks-14.webp" },
    { id: 15, src: "/images/swapforce-gimmicks-15.webp" },
    { id: 16, src: "/images/swapforce-gimmicks-16.webp" },
  ],
    "Trapteam-Water": [
    { id: 1, src: "/images/trapteam-water-1.webp" },
    { id: 2, src: "/images/trapteam-water-2.webp" },
    { id: 3, src: "/images/trapteam-water-3.webp" },
    { id: 4, src: "/images/trapteam-water-4.webp" },
    { id: 5, src: "/images/trapteam-water-5.webp" },
    { id: 6, src: "/images/trapteam-water-6.webp" },
    { id: 7, src: "/images/trapteam-water-7.webp" },
  ],
    "Trapteam-Fire": [
    { id: 1, src: "/images/trapteam-fire-1.webp" },
    { id: 2, src: "/images/trapteam-fire-2.webp" },
    { id: 3, src: "/images/trapteam-fire-3.webp" },
    { id: 4, src: "/images/trapteam-fire-4.webp" },
    { id: 5, src: "/images/trapteam-fire-5.webp" },
    { id: 6, src: "/images/trapteam-fire-6.webp" },
    { id: 7, src: "/images/trapteam-fire-7.webp" },
  ],
    "Trapteam-Earth": [
    { id: 1, src: "/images/trapteam-earth-1.webp" },
    { id: 2, src: "/images/trapteam-earth-2.webp" },
    { id: 3, src: "/images/trapteam-earth-3.webp" },
    { id: 4, src: "/images/trapteam-earth-4.webp" },
    { id: 5, src: "/images/trapteam-earth-5.webp" },
    { id: 6, src: "/images/trapteam-earth-6.webp" },
  ],
    "Trapteam-Air": [
    { id: 1, src: "/images/trapteam-air-1.webp" },
    { id: 2, src: "/images/trapteam-air-2.webp" },
    { id: 3, src: "/images/trapteam-air-3.webp" },
    { id: 4, src: "/images/trapteam-air-4.webp" },
    { id: 5, src: "/images/trapteam-air-5.webp" },
    { id: 6, src: "/images/trapteam-air-6.webp" },
    { id: 7, src: "/images/trapteam-air-7.webp" },
  ],
    "Trapteam-Undead": [
    { id: 1, src: "/images/trapteam-undead-1.webp" },
    { id: 2, src: "/images/trapteam-undead-2.webp" },
    { id: 3, src: "/images/trapteam-undead-3.webp" },
    { id: 4, src: "/images/trapteam-undead-4.webp" },
    { id: 5, src: "/images/trapteam-undead-5.webp" },
    { id: 6, src: "/images/trapteam-undead-6.webp" },
  ],
    "Trapteam-Life": [
    { id: 1, src: "/images/trapteam-life-1.webp" },
    { id: 2, src: "/images/trapteam-life-2.webp" },
    { id: 3, src: "/images/trapteam-life-3.webp" },
    { id: 4, src: "/images/trapteam-life-4.webp" },
    { id: 5, src: "/images/trapteam-life-5.webp" },
    { id: 6, src: "/images/trapteam-life-6.webp" },
    { id: 7, src: "/images/trapteam-life-7.webp" },
  ],
    "Trapteam-Tech": [
    { id: 1, src: "/images/trapteam-tech-1.webp" },
    { id: 2, src: "/images/trapteam-tech-2.webp" },
    { id: 3, src: "/images/trapteam-tech-3.webp" },
    { id: 4, src: "/images/trapteam-tech-4.webp" },
    { id: 5, src: "/images/trapteam-tech-5.webp" },
    { id: 6, src: "/images/trapteam-tech-6.webp" },
  ],
    "Trapteam-Magic": [
    { id: 1, src: "/images/trapteam-magic-1.webp" },
    { id: 2, src: "/images/trapteam-magic-2.webp" },
    { id: 3, src: "/images/trapteam-magic-3.webp" },
    { id: 4, src: "/images/trapteam-magic-4.webp" },
    { id: 5, src: "/images/trapteam-magic-5.webp" },
    { id: 6, src: "/images/trapteam-magic-6.webp" },
    { id: 7, src: "/images/trapteam-magic-7.webp" },
  ],
    "Trapteam-Dark": [
    { id: 1, src: "/images/trapteam-dark-1.webp" },
    { id: 2, src: "/images/trapteam-dark-2.webp" },
  ],
    "Trapteam-Light": [
    { id: 1, src: "/images/trapteam-light-1.webp" },
    { id: 2, src: "/images/trapteam-light-2.webp" },
  ],
    "Trapteam-Variants": [
    { id: 1, src: "/images/trapteam-variants-1.webp" },
    { id: 2, src: "/images/trapteam-variants-2.webp" },
    { id: 3, src: "/images/trapteam-variants-3.webp" },
    { id: 4, src: "/images/trapteam-variants-4.webp" },
    { id: 5, src: "/images/trapteam-variants-5.webp" },
    { id: 6, src: "/images/trapteam-variants-6.webp" },
    { id: 7, src: "/images/trapteam-variants-7.webp" },
    { id: 8, src: "/images/trapteam-variants-8.webp" },
    { id: 9, src: "/images/trapteam-variants-9.webp" },
    { id: 10, src: "/images/trapteam-variants-10.webp" },
    { id: 11, src: "/images/trapteam-variants-11.webp" },
    { id: 12, src: "/images/trapteam-variants-12.webp" },
    { id: 13, src: "/images/trapteam-variants-13.webp" },
    { id: 14, src: "/images/trapteam-variants-14.webp" },
    { id: 15, src: "/images/trapteam-variants-15.webp" },
    { id: 16, src: "/images/trapteam-variants-16.webp" },
    { id: 17, src: "/images/trapteam-variants-17.webp" },
    { id: 18, src: "/images/trapteam-variants-18.webp" },
    { id: 19, src: "/images/trapteam-variants-19.webp" },
    { id: 20, src: "/images/trapteam-variants-20.webp" },
    { id: 21, src: "/images/trapteam-variants-21.webp" },
    { id: 22, src: "/images/trapteam-variants-22.webp" },
    { id: 23, src: "/images/trapteam-variants-23.webp" },
  ],
    "Trapteam-Gimmicks": [
    { id: 1, src: "/images/trapteam-gimmicks-1.webp" },
    { id: 2, src: "/images/trapteam-gimmicks-2.webp" },
    { id: 3, src: "/images/trapteam-gimmicks-3.webp" },
    { id: 4, src: "/images/trapteam-gimmicks-4.webp" },
    { id: 5, src: "/images/trapteam-gimmicks-5.webp" },
    { id: 6, src: "/images/trapteam-gimmicks-6.webp" },
    { id: 7, src: "/images/trapteam-gimmicks-7.webp" },
    { id: 8, src: "/images/trapteam-gimmicks-8.webp" },
    { id: 9, src: "/images/trapteam-gimmicks-9.webp" },
    { id: 10, src: "/images/trapteam-gimmicks-10.webp" },
    { id: 11, src: "/images/trapteam-gimmicks-11.webp" },
    { id: 12, src: "/images/trapteam-gimmicks-12.webp" },
    { id: 13, src: "/images/trapteam-gimmicks-13.webp" },
    { id: 14, src: "/images/trapteam-gimmicks-14.webp" },
    { id: 15, src: "/images/trapteam-gimmicks-15.webp" },
    { id: 16, src: "/images/trapteam-gimmicks-16.webp" },
    { id: 17, src: "/images/trapteam-gimmicks-17.webp" },
    { id: 18, src: "/images/trapteam-gimmicks-18.webp" },
    { id: 19, src: "/images/trapteam-gimmicks-19.webp" },
    { id: 20, src: "/images/trapteam-gimmicks-20.webp" },
    { id: 21, src: "/images/trapteam-gimmicks-21.webp" },
    { id: 22, src: "/images/trapteam-gimmicks-22.webp" },
    { id: 23, src: "/images/trapteam-gimmicks-23.webp" },
    { id: 24, src: "/images/trapteam-gimmicks-24.webp" },
    { id: 25, src: "/images/trapteam-gimmicks-25.webp" },
    { id: 26, src: "/images/trapteam-gimmicks-26.webp" },
    { id: 27, src: "/images/trapteam-gimmicks-27.webp" },
    { id: 28, src: "/images/trapteam-gimmicks-28.webp" },
    { id: 29, src: "/images/trapteam-gimmicks-29.webp" },
    { id: 30, src: "/images/trapteam-gimmicks-30.webp" },
    { id: 31, src: "/images/trapteam-gimmicks-31.webp" },
    { id: 32, src: "/images/trapteam-gimmicks-32.webp" },
    { id: 33, src: "/images/trapteam-gimmicks-33.webp" },
    { id: 34, src: "/images/trapteam-gimmicks-34.webp" },
    { id: 35, src: "/images/trapteam-gimmicks-35.webp" },
    { id: 36, src: "/images/trapteam-gimmicks-36.webp" },
    { id: 37, src: "/images/trapteam-gimmicks-37.webp" },
    { id: 38, src: "/images/trapteam-gimmicks-38.webp" },
    { id: 39, src: "/images/trapteam-gimmicks-39.webp" },
    { id: 40, src: "/images/trapteam-gimmicks-40.webp" },
    { id: 41, src: "/images/trapteam-gimmicks-41.webp" },
    { id: 42, src: "/images/trapteam-gimmicks-42.webp" },
    { id: 43, src: "/images/trapteam-gimmicks-43.webp" },
    { id: 44, src: "/images/trapteam-gimmicks-44.webp" },
    { id: 45, src: "/images/trapteam-gimmicks-45.webp" },
    { id: 46, src: "/images/trapteam-gimmicks-46.webp" },
  ],
  "Superchargers-Water": [
    { id: 1, src: "/images/superchargers-water-1.webp" },
    { id: 2, src: "/images/superchargers-water-2.webp" },
  ],
    "Superchargers-Fire": [
    { id: 1, src: "/images/superchargers-fire-1.webp" },
    { id: 2, src: "/images/superchargers-fire-2.webp" },
    { id: 3, src: "/images/superchargers-fire-3.webp" },
  ],
    "Superchargers-Earth": [
    { id: 1, src: "/images/superchargers-earth-1.webp" },
    { id: 2, src: "/images/superchargers-earth-2.webp" },
  ],
    "Superchargers-Air": [
    { id: 1, src: "/images/superchargers-air-1.webp" },
    { id: 2, src: "/images/superchargers-air-2.webp" },
  ],
    "Superchargers-Undead": [
    { id: 1, src: "/images/superchargers-undead-1.webp" },
    { id: 2, src: "/images/superchargers-undead-2.webp" },
  ],
    "Superchargers-Life": [
    { id: 1, src: "/images/superchargers-life-1.webp" },
    { id: 2, src: "/images/superchargers-life-2.webp" },
    { id: 3, src: "/images/superchargers-life-3.webp" },
  ],
    "Superchargers-Tech": [
    { id: 1, src: "/images/superchargers-tech-1.webp" },
    { id: 2, src: "/images/superchargers-tech-2.webp" },
  ],
    "Superchargers-Magic": [
    { id: 1, src: "/images/superchargers-magic-1.webp" },
    { id: 2, src: "/images/superchargers-magic-2.webp" },
  ],
    "Superchargers-Dark": [
    { id: 1, src: "/images/superchargers-dark-1.webp" },
  ],
    "Superchargers-Light": [
    { id: 1, src: "/images/superchargers-light-1.webp" },
  ],
    "Superchargers-Variants": [
    { id: 1, src: "/images/superchargers-variants-1.webp" },
    { id: 2, src: "/images/superchargers-variants-2.webp" },
    { id: 3, src: "/images/superchargers-variants-3.webp" },
    { id: 4, src: "/images/superchargers-variants-4.webp" },
    { id: 5, src: "/images/superchargers-variants-5.webp" },
    { id: 6, src: "/images/superchargers-variants-6.webp" },
    { id: 7, src: "/images/superchargers-variants-7.webp" },
    { id: 8, src: "/images/superchargers-variants-8.webp" },
    { id: 9, src: "/images/superchargers-variants-9.webp" },
    { id: 10, src: "/images/superchargers-variants-10.webp" },
    { id: 11, src: "/images/superchargers-variants-11.webp" },
    { id: 12, src: "/images/superchargers-variants-12.webp" },
    { id: 13, src: "/images/superchargers-variants-13.webp" },
    { id: 14, src: "/images/superchargers-variants-14.webp" },
    { id: 15, src: "/images/superchargers-variants-15.webp" },
    { id: 16, src: "/images/superchargers-variants-16.webp" },
    { id: 17, src: "/images/superchargers-variants-17.webp" },
    { id: 18, src: "/images/superchargers-variants-18.webp" },
    { id: 19, src: "/images/superchargers-variants-19.webp" },
    { id: 20, src: "/images/superchargers-variants-20.webp" },
  ],
    "Imaginators-Water": [
    { id: 1, src: "/images/imaginators-water-1.webp" },
    { id: 2, src: "/images/imaginators-water-2.webp" },
    { id: 3, src: "/images/imaginators-water-3.webp" },
  ],
    "Imaginators-Fire": [
    { id: 1, src: "/images/imaginators-fire-1.webp" },
    { id: 2, src: "/images/imaginators-fire-2.webp" },
    { id: 3, src: "/images/imaginators-fire-3.webp" },
  ],
    "Imaginators-Earth": [
    { id: 1, src: "/images/imaginators-earth-1.webp" },
    { id: 2, src: "/images/imaginators-earth-2.webp" },
    { id: 3, src: "/images/imaginators-earth-3.webp" },
  ],
    "Imaginators-Air": [
    { id: 1, src: "/images/imaginators-air-1.webp" },
    { id: 2, src: "/images/imaginators-air-2.webp" },
    { id: 3, src: "/images/imaginators-air-3.webp" },
  ],
    "Imaginators-Undead": [
    { id: 1, src: "/images/imaginators-undead-1.webp" },
    { id: 2, src: "/images/imaginators-undead-2.webp" },
    { id: 3, src: "/images/imaginators-undead-3.webp" },
  ],
    "Imaginators-Life": [
    { id: 1, src: "/images/imaginators-life-1.webp" },
    { id: 2, src: "/images/imaginators-life-2.webp" },
    { id: 3, src: "/images/imaginators-life-3.webp" },
    { id: 4, src: "/images/imaginators-life-4.webp" },
  ],
    "Imaginators-Tech": [
    { id: 1, src: "/images/imaginators-tech-1.webp" },
    { id: 2, src: "/images/imaginators-tech-2.webp" },
    { id: 3, src: "/images/imaginators-tech-3.webp" },
    { id: 4, src: "/images/imaginators-tech-4.webp" },
  ],
    "Imaginators-Magic": [
    { id: 1, src: "/images/imaginators-magic-1.webp" },
    { id: 2, src: "/images/imaginators-magic-2.webp" },
    { id: 3, src: "/images/imaginators-magic-3.webp" },
  ],
    "Imaginators-Dark": [
    { id: 1, src: "/images/imaginators-dark-1.webp" },
    { id: 2, src: "/images/imaginators-dark-2.webp" },
  ],
    "Imaginators-Light": [
    { id: 1, src: "/images/imaginators-light-1.webp" },
    { id: 2, src: "/images/imaginators-light-2.webp" },
  ],
    "Imaginators-Variants": [
    { id: 1, src: "/images/imaginators-variants-1.webp" },
    { id: 2, src: "/images/imaginators-variants-2.webp" },
    { id: 3, src: "/images/imaginators-variants-3.webp" },
    { id: 4, src: "/images/imaginators-variants-4.webp" },
    { id: 5, src: "/images/imaginators-variants-5.webp" },
    { id: 6, src: "/images/imaginators-variants-6.webp" },
    { id: 7, src: "/images/imaginators-variants-7.webp" },
    { id: 8, src: "/images/imaginators-variants-8.webp" },
    { id: 9, src: "/images/imaginators-variants-9.webp" },
    { id: 10, src: "/images/imaginators-variants-10.webp" },
    { id: 11, src: "/images/imaginators-variants-11.webp" },
    { id: 12, src: "/images/imaginators-variants-12.webp" },
    { id: 13, src: "/images/imaginators-variants-13.webp" },
    { id: 14, src: "/images/imaginators-variants-14.webp" },
  ],
};

const labelImages: Record<string, { id: number; src: string }[]> = {
  Game: [
    { id: 1, src: "/images/spyros.webp" },
    { id: 2, src: "/images/giants.webp" },
    { id: 3, src: "/images/swapforce.webp" },
    { id: 4, src: "/images/trapteam.webp" },
    { id: 5, src: "/images/superchargers.webp" },
    { id: 6, src: "/images/imaginators.png" },
  ],
  Element: [
    { id: 1, src: "/images/water.webp" },
    { id: 2, src: "/images/fire.webp" },
    { id: 3, src: "/images/earth.webp" },
    { id: 4, src: "/images/air.webp" },
    { id: 5, src: "/images/undead.webp" },
    { id: 6, src: "/images/life.webp" },
    { id: 7, src: "/images/tech.webp" },
    { id: 8, src: "/images/magic.webp" },
    { id: 9, src: "/images/dark.webp" },
    { id: 10, src: "/images/light.webp" },
  ],
  "Adventure Pack": [
    { id: 1, src: "/images/pirate_seas.jpg" },
    { id: 2, src: "/images/darklight_crypt.jpg" },
    { id: 3, src: "/images/empire_of_ice.jpg" },
    { id: 4, src: "/images/dragons_peak.jpg" },
    { id: 5, src: "/images/tower_of_time.jpg" },
    { id: 6, src: "/images/sheep_wreck_island.jpg" },
    { id: 7, src: "/images/nightmare_express.jpg" },
    { id: 8, src: "/images/mirror_of_mystery.jpg" },
    { id: 9, src: "/images/sunscraper_spire.jpg" },
    { id: 10, src: "/images/midnight_museum.jpg" },
    { id: 11, src: "/images/gryphon_park_observatory.jpg" },
    { id: 12, src: "/images/enchanted_elven_forest.jpg" },
    { id: 13, src: "/images/thumpin_whumpa_islands.jpg" },
    { id: 14, src: "/images/cursed_tiki_temple.webp" },
    { id: 15, src: "/images/lost_imaginite_mines.webp" },
  ],
  Gimmick: [
    { id: 1, src: "/images/giant.webp" },
    { id: 2, src: "/images/swapper.webp" },
    { id: 3, src: "/images/trap.png" },
    { id: 4, src: "/images/racing.jpg" },
    { id: 5, src: "/images/creation_crystal.webp" },
  ],
  Trophy: [
    { id: 1, src: "/images/land.jpg" },
    { id: 2, src: "/images/sea.jpg" },
    { id: 3, src: "/images/sky.jpg" },
    { id: 4, src: "/images/kaos.jpg" },
  ],
  "Battle Class": [
    { id: 1, src: "/images/imaginators-gimmicks-1.webp" },
    { id: 2, src: "/images/imaginators-gimmicks-2.webp" },
    { id: 3, src: "/images/imaginators-gimmicks-3.webp" },
    { id: 4, src: "/images/imaginators-gimmicks-4.webp" },
    { id: 5, src: "/images/imaginators-gimmicks-5.webp" },
    { id: 6, src: "/images/imaginators-gimmicks-6.webp" },
    { id: 7, src: "/images/imaginators-gimmicks-7.webp" },
    { id: 8, src: "/images/imaginators-gimmicks-8.webp" },
    { id: 9, src: "/images/imaginators-gimmicks-9.webp" },
    { id: 10, src: "/images/imaginators-gimmicks-10.webp" },
    { id: 11, src: "/images/imaginators-gimmicks-11.webp" },
  ],
  Giant: [
    { id: 1, src: "/images/giant-1.webp" },
    { id: 2, src: "/images/giant-2.webp" },
    { id: 3, src: "/images/giant-3.webp" },
    { id: 4, src: "/images/giant-4.webp" },
    { id: 5, src: "/images/giant-5.webp" },
    { id: 6, src: "/images/giant-6.webp" },
    { id: 7, src: "/images/giant-7.webp" },
    { id: 8, src: "/images/giant-8.webp" },
  ],
  Swapper: [
    { id: 1, src: "/images/swapper-1.webp" },
    { id: 2, src: "/images/swapper-2.webp" },
    { id: 3, src: "/images/swapper-3.webp" },
    { id: 4, src: "/images/swapper-4.webp" },
    { id: 5, src: "/images/swapper-5.webp" },
    { id: 6, src: "/images/swapper-6.webp" },
    { id: 7, src: "/images/swapper-7.webp" },
    { id: 8, src: "/images/swapper-8.webp" },
    { id: 9, src: "/images/swapper-9.webp" },
    { id: 10, src: "/images/swapper-10.webp" },
    { id: 11, src: "/images/swapper-11.webp" },
    { id: 12, src: "/images/swapper-12.webp" },
    { id: 13, src: "/images/swapper-13.webp" },
    { id: 14, src: "/images/swapper-14.webp" },
    { id: 15, src: "/images/swapper-15.webp" },
    { id: 16, src: "/images/swapper-16.webp" },
  ],
  "Trapable Enemy": [
    { id: 1, src: "/images/trapable-enemy-1.webp" },
    { id: 2, src: "/images/trapable-enemy-2.webp" },
    { id: 3, src: "/images/trapable-enemy-3.webp" },
    { id: 4, src: "/images/trapable-enemy-4.webp" },
    { id: 5, src: "/images/trapable-enemy-5.webp" },
    { id: 6, src: "/images/trapable-enemy-6.webp" },
    { id: 7, src: "/images/trapable-enemy-7.webp" },
    { id: 8, src: "/images/trapable-enemy-8.webp" },
    { id: 9, src: "/images/trapable-enemy-9.webp" },
    { id: 10, src: "/images/trapable-enemy-10.webp" },
    { id: 11, src: "/images/trapable-enemy-11.webp" },
    { id: 12, src: "/images/trapable-enemy-12.webp" },
    { id: 13, src: "/images/trapable-enemy-13.webp" },
    { id: 14, src: "/images/trapable-enemy-14.webp" },
    { id: 15, src: "/images/trapable-enemy-15.webp" },
    { id: 16, src: "/images/trapable-enemy-16.webp" },
    { id: 17, src: "/images/trapable-enemy-17.webp" },
    { id: 18, src: "/images/trapable-enemy-18.webp" },
    { id: 19, src: "/images/trapable-enemy-19.webp" },
    { id: 20, src: "/images/trapable-enemy-20.webp" },
    { id: 21, src: "/images/trapable-enemy-21.webp" },
    { id: 22, src: "/images/trapable-enemy-22.webp" },
    { id: 23, src: "/images/trapable-enemy-23.webp" },
    { id: 24, src: "/images/trapable-enemy-24.webp" },
    { id: 25, src: "/images/trapable-enemy-25.webp" },
    { id: 26, src: "/images/trapable-enemy-26.webp" },
    { id: 27, src: "/images/trapable-enemy-27.webp" },
    { id: 28, src: "/images/trapable-enemy-28.webp" },
    { id: 29, src: "/images/trapable-enemy-29.webp" },
    { id: 30, src: "/images/trapable-enemy-30.webp" },
    { id: 31, src: "/images/trapable-enemy-31.webp" },
    { id: 32, src: "/images/trapable-enemy-32.webp" },
    { id: 33, src: "/images/trapable-enemy-33.webp" },
    { id: 34, src: "/images/trapable-enemy-34.webp" },
    { id: 35, src: "/images/trapable-enemy-35.webp" },
    { id: 36, src: "/images/trapable-enemy-36.webp" },
    { id: 37, src: "/images/trapable-enemy-37.webp" },
    { id: 38, src: "/images/trapable-enemy-38.webp" },
    { id: 39, src: "/images/trapable-enemy-39.webp" },
    { id: 40, src: "/images/trapable-enemy-40.webp" },
    { id: 41, src: "/images/trapable-enemy-41.webp" },
    { id: 42, src: "/images/trapable-enemy-42.webp" },
    { id: 43, src: "/images/trapable-enemy-43.webp" },
    { id: 44, src: "/images/trapable-enemy-44.webp" },
    { id: 45, src: "/images/trapable-enemy-45.webp" },
    { id: 46, src: "/images/trapable-enemy-46.webp" },
  ],
  Vehicle: [
    { id: 1, src: "/images/vehicle-1.jpg" },
    { id: 2, src: "/images/vehicle-2.jpg" },
    { id: 3, src: "/images/vehicle-3.jpg" },
    { id: 4, src: "/images/vehicle-4.jpg" },
    { id: 5, src: "/images/vehicle-5.jpg" },
    { id: 6, src: "/images/vehicle-6.jpg" },
    { id: 7, src: "/images/vehicle-7.jpg" },
    { id: 8, src: "/images/vehicle-8.jpg" },
    { id: 9, src: "/images/vehicle-9.jpg" },
    { id: 10, src: "/images/vehicle-10.jpg" },
    { id: 11, src: "/images/vehicle-11.jpg" },
    { id: 12, src: "/images/vehicle-12.jpg" },
    { id: 13, src: "/images/vehicle-13.jpg" },
    { id: 14, src: "/images/vehicle-14.jpg" },
    { id: 15, src: "/images/vehicle-15.jpg" },
    { id: 16, src: "/images/vehicle-16.jpg" },
    { id: 17, src: "/images/vehicle-17.jpg" },
    { id: 18, src: "/images/vehicle-18.jpg" },
    { id: 19, src: "/images/vehicle-19.jpg" },
    { id: 20, src: "/images/vehicle-20.jpg" },
    { id: 21, src: "/images/vehicle-21.jpg" },
    { id: 22, src: "/images/vehicle-22.jpg" },
    { id: 23, src: "/images/vehicle-23.jpg" },
    { id: 24, src: "/images/vehicle-24.jpg" },
    { id: 25, src: "/images/vehicle-25.jpg" },
    { id: 26, src: "/images/vehicle-26.jpg" },
    { id: 27, src: "/images/vehicle-27.jpg" },
    { id: 28, src: "/images/vehicle-28.jpg" },
    { id: 29, src: "/images/vehicle-29.jpg" },
    { id: 30, src: "/images/vehicle-30.jpg" },
    { id: 31, src: "/images/vehicle-31.jpg" },
    { id: 32, src: "/images/vehicle-32.jpg" },
  ],
  "Master Sensei": [
    { id: 1, src: "/images/sensei-1.webp" },
    { id: 2, src: "/images/sensei-2.webp" },
    { id: 3, src: "/images/sensei-3.webp" },
    { id: 4, src: "/images/sensei-4.webp" },
    { id: 5, src: "/images/sensei-5.webp" },
    { id: 6, src: "/images/sensei-6.webp" },
    { id: 7, src: "/images/sensei-7.webp" },
    { id: 8, src: "/images/sensei-8.webp" },
    { id: 9, src: "/images/sensei-9.webp" },
    { id: 10, src: "/images/sensei-10.webp" },
    { id: 11, src: "/images/sensei-11.webp" },
    { id: 12, src: "/images/sensei-12.webp" },
    { id: 13, src: "/images/sensei-13.webp" },
    { id: 14, src: "/images/sensei-14.webp" },
    { id: 15, src: "/images/sensei-15.webp" },
    { id: 16, src: "/images/sensei-16.webp" },
    { id: 17, src: "/images/sensei-17.webp" },
    { id: 18, src: "/images/sensei-18.webp" },
  ],
  Mini: [
    { id: 1, src: "/images/mini-1.webp" },
    { id: 2, src: "/images/mini-2.webp" },
    { id: 3, src: "/images/mini-3.webp" },
    { id: 4, src: "/images/mini-4.webp" },
    { id: 5, src: "/images/mini-5.webp" },
    { id: 6, src: "/images/mini-6.webp" },
    { id: 7, src: "/images/mini-7.webp" },
    { id: 8, src: "/images/mini-8.webp" },
    { id: 9, src: "/images/mini-9.webp" },
    { id: 10, src: "/images/mini-10.webp" },
    { id: 11, src: "/images/mini-11.webp" },
    { id: 12, src: "/images/mini-12.webp" },
    { id: 13, src: "/images/mini-13.webp" },
    { id: 14, src: "/images/mini-14.webp" },
    { id: 15, src: "/images/mini-15.webp" },
    { id: 16, src: "/images/mini-16.webp" },
  ],
};

const labelConfig: Record<string, { selectedImageSize?: string }> = {
  Game: { selectedImageSize: "w-30 h-30" },
  Element: { selectedImageSize: "w-20 h-20" },
  "Adventure Pack": { selectedImageSize: "w-20 h-20" },
  Gimmick: { selectedImageSize: "w-20 h-20" },
  Trophy: { selectedImageSize: "w-20 h-20" },
  "Battle Class": { selectedImageSize: "w-20 h-20" },
  Giant: { selectedImageSize: "w-20 h-20" },
  Swapper: { selectedImageSize: "w-20 h-20" },
  "Trapable Enemy": { selectedImageSize: "w-20 h-20" },
  Vehicle: { selectedImageSize: "w-20 h-20" },
  "Master Sensei": { selectedImageSize: "w-20 h-20" },
  Mini: { selectedImageSize: "w-20 h-20" },
};

export default function GridPicker() {
  const [favoritesByElement, setFavoritesByElement] = useState<Record<string, { id: number; src: string }[]>>({});
  const [favoritesByGame, setFavoritesByGame] = useState<Record<string, { id: number; src: string }[]>>({});

  const addToFavorites = (element: string, game: string, item: { id: number; src: string }) => {
    setFavoritesByElement((prev) => {
      const existing = prev[element] || [];
      const exists = existing.some((i) => i.id === item.id && i.src === item.src);
      return { ...prev, [element]: exists ? existing : [...existing, item] };
    });

    setFavoritesByGame((prev) => {
      const existing = prev[game] || [];
      const exists = existing.some((i) => i.id === item.id && i.src === item.src);
      return { ...prev, [game]: exists ? existing : [...existing, item] };
    });
  };
  
  const colorMap: Record<string, string> = {
    Water: "text-blue-500",
    Fire: "text-red-500",
    Earth: "text-amber-700",
    Air: "text-sky-500",
    Undead: "text-slate-600",
    Life: "text-green-600",
    Tech: "text-yellow-600",
    Magic: "text-purple-600",
    Dark: "text-gray-700",
    Light: "text-yellow-500",
    Variants: "text-blue-800",
    Gimmicks: "text-green-800",
    Favorites: "text-orange-500"
  };

  const gridRef = useRef<HTMLDivElement>(null);

  const handleDownloadGrid = () => {
  if (gridRef.current) {
    html2canvas(gridRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: null,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "skylanders-grid.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
};

  const getMergedFavorites = (): { id: number; src: string }[] => {
    const byGame = Object.values(favoritesByGame).flat();
    const byElement = Object.values(favoritesByElement).flat();
    const combined = [...byGame, ...byElement];
    const unique = Array.from(new Map(combined.map((item) => [item.id + item.src, item])).values());
    return unique;
  };

return (
  <div
    className="min-h-screen bg-cover bg-center bg-no-repeat p-6 flex flex-col"
    style={{ backgroundImage: "url('')" }}
  >
    <h1
      className="text-5xl bg-clip-text font-pincoya text-transparent bg-gradient-to-t from-[#63BEE8] via-[#FFFFFF] to-[#FFFFFF] mb-6 text-center"
      style={{
        WebkitTextStroke: "2px #01295D",
        fontFamily: "Pincoya Black"
      }}
    >
      Pick your favorite Skylanders
    </h1>

    <div></div>
<div ref={gridRef}>
      <div className="overflow-x-auto">
    <div
      className="grid gap-2 flex-grow"
      style={{
        gridTemplateColumns: `minmax(100px, 140px) repeat(${elements.length}, minmax(80px, 1fr))`,
      }}
    >

      <div></div>

      {elements.map((el) => (
        <div
          key={el.name}
          className="aspect-square flex flex-col items-center justify-center text-center"
        >
          <img src={el.icon} alt={el.name} className="w-3/4 h-3/4 object-contain mb-1" />
          <span className={`text-xs font-semibold ${colorMap[el.name] || "text-white"}`}>
            {el.name}
          </span>
        </div>
      ))}

      {games.map((game) => (
        <React.Fragment key={game.name}>
          <div className="flex items-center justify-center">
            <img src={game.logo} alt={game.name} className="max-h-20 max-w-full object-contain" />
          </div>

          {elements.map((el) => {
            const key = `${game.name}-${el.name}`;
            const isFavoritesRow = game.name === "Favorites";
            const isFavoritesColumn = el.name === "Favorites";
            const isMergedCell = isFavoritesRow && isFavoritesColumn;
            const isWaterColumn = el.name === "Water";
            const isLastGameRow = game.name === games[games.length - 1].name;
            const shouldAlignRight = isWaterColumn && !isLastGameRow;

            if (isMergedCell) {
              const mergedFavorites = getMergedFavorites();
              return (
                <div key={key} className="aspect-square border-2 border-yellow-400 rounded bg-white flex items-center justify-center">
                  <ImageDropdown
                    images={[]}
                    selectedItems={mergedFavorites}
                    columns={3}
                    onSelect={() => {}}
                    dropUp={true}
                    alignLeft={true}
                  />
                </div>
              );
            }

            if (isFavoritesRow) {
              const colFavorites = favoritesByElement[el.name] || [];
              return (
                <div key={key} className="aspect-square border border-gray-300 rounded bg-white flex items-center justify-center">
                  <ImageDropdown
                    images={[]}
                    selectedItems={colFavorites}
                    columns={3}
                    onSelect={() => {}}
                    alignLeft={!["Water"].includes(el.name)}
                  />
                </div>
              );
            }

            if (isFavoritesColumn) {
              const rowFavorites = favoritesByGame[game.name] || [];
              return (
                <div key={key} className="aspect-square border border-gray-300 rounded bg-white flex items-center justify-center">
                  <ImageDropdown
                    images={[]}
                    selectedItems={rowFavorites}
                    columns={3}
                    onSelect={() => {}}
                    alignLeft={true}
                  />
                </div>
              );
            }

            const options = optionsByCell[key] || [];
            const twoColumnGames = new Set(["Spyro's Adventure", "Superchargers"]);
            const columns = twoColumnGames.has(game.name) && el.name !== "Variants" ? 2 : 3;

            return (
              <div
                key={key}
                className="aspect-square flex items-center justify-center border border-gray-300 rounded bg-white"
              >
                <ImageDropdown
                  images={options}
                  columns={columns}
                  selectedItems={[]}
                  onSelect={(item) => addToFavorites(el.name, game.name, item)}
                  alignLeft={el.name === "Favorites" || el.name === "Variants"}
                  alignRight={shouldAlignRight}
                />
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
    {[
      "Game",
      "Adventure Pack",
      "Gimmick",
      "Trophy",
      "Battle Class",
      "Vehicle",
      "Element",
      "Giant",
      "Swapper",
      "Trapable Enemy",
      "Master Sensei",
      "Mini",
    ].map((label) => {
      const config = labelConfig[label] || {};

      return (
        <div
          key={label}
          className="bg-white bg-opacity-90 rounded shadow p-2 text-center font-semibold text-gray-800 flex flex-col items-center justify-between w-[175px] h-[125px]"
        >
          <span className="text-sm">{label}</span>
          <ImageDropdown
            images={labelImages[label] || []}
            selectedItems={[]}
            columns={3}
            onSelect={() => {}}
            dropUp={true}
            hideSelectedLabel={true}
            selectedImageSize={config.selectedImageSize}
          />
        </div>
      );
    })}
  </div>
</div>
<div className="w-full mt-6 px-4">
  <p className="text-sm text-gray-600 text-center">
    Created with love by <span className="font-semibold text-orange-500">Zyro</span>
  </p>
</div>
<div className="w-full text-center mt-6">
  <button
    onClick={handleDownloadGrid}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Download Your Selections
  </button>
</div>
</div>
</div>
)}
