'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, Flip);
}

export default function Global() {
  return null;
}
