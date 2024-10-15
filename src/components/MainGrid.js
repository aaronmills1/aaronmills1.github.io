'use client';

import { useState } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import Portrait from '@/components/Portrait';
import Socials from '@/components/Socials';
import Work from '@/components/Work';
import { useGlobalTimeline } from '@/hooks/useAnimation';
import LoadingBar from '@/components/LoadingBar';
import { DISABLE_LOADING_ANIMATION } from '@/config';

export default function MainGrid({ data = {} }) {
  const [loaded, setLoaded] = useState(DISABLE_LOADING_ANIMATION);
  const tl = useGlobalTimeline(loaded);

  return (
    <>
      {!DISABLE_LOADING_ANIMATION && (
        <LoadingBar onFinish={() => setLoaded(true)} />
      )}

      {/* Bento Grid */}
      <div className='grid h-screen min-h-[700px] grid-cols-12 grid-rows-10 gap-4 p-4 max-lg:h-auto max-lg:grid-rows-none max-lg:py-6'>
        <div className='col-span-full row-span-1'>
          <Nav data={data?.nav} timeline={tl} />
        </div>

        {/* Left column */}
        <div className='col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4'>
          <div className='col-span-5 row-span-5 min-h-[288px] max-lg:col-span-8 max-md:col-span-full'>
            <Intro data={data?.intro} timeline={tl} />
          </div>

          <div className='col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full'>
            <Portrait data={data?.portrait} timeline={tl} />
          </div>

          <div className='col-span-4 row-span-4 min-h-[288px] max-lg:col-span-6 max-md:col-span-full'>
            <About data={data?.about} timeline={tl} />
          </div>

          <div className='col-span-4 row-span-4 min-h-[288px] max-lg:col-span-6 max-md:col-span-full'>
            <Contact data={data?.contact} timeline={tl} />
          </div>
        </div>

        {/* Right column */}
        <div className='col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4'>
          <div className='col-span-4 row-span-8 max-lg:col-span-full'>
            <Work data={data?.work} timeline={tl} />
          </div>

          <div className='col-span-4 row-span-1 max-lg:col-span-full'>
            <Socials data={data?.socials} timeline={tl} />
          </div>
        </div>
      </div>
    </>
  );
}
