import Image from 'next/image';
import { useArrowAnimation } from '@/hooks/useAnimation';
import Box from './Box';

export default function Contact({ data, timeline }) {
  const { containerRef, handleMouseEnter, handleMouseLeave } =
    useArrowAnimation();

  const contentAnimation = delay => {
    const offset = 0.3;
    timeline
      .from(
        '.contact-heading',
        { opacity: 0, y: 30, duration: 0.8 },
        delay + offset
      )
      .from(
        '.contact-bar',
        { opacity: 0, y: -10, duration: 0.8 },
        delay + offset
      );
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-y-full scale-0 bg-secondary text-primary opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='size-full'>
        <a
          ref={containerRef}
          href={`mailto:${data?.email}`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex h-full w-full flex-col justify-between gap-4'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='contact-bar flex items-center justify-between'>
            <p className='max-w-[10ch] text-base leading-[120%]'>
              {data?.label}
            </p>

            {data?.linkIcon && (
              <Image
                src={data.linkIcon}
                width={24}
                height={24}
                alt='arrow'
                className='arrow mr-2 size-[1.35rem]'
              />
            )}
          </div>

          <h2
            className='contact-heading pb-2 font-heading text-[3.2rem] font-normal leading-[100%]'
            dangerouslySetInnerHTML={{ __html: data?.heading }}
          ></h2>
        </a>
      </div>
    </Box>
  );
}
