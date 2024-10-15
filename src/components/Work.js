import Image from 'next/image';
import { useArrowAnimation, useDropdownAnimation } from '@/hooks/useAnimation';
import Box from './Box';
import { BLUR_DATA_URL } from '@/config';

export default function Work({ data, timeline }) {
  const { containerRef, handleClick } = useDropdownAnimation();

  const contentAnimation = delay => {
    const offset = 0.3;
    timeline
      .from('.work-heading', { yPercent: 100, stagger: 0.18 }, delay + offset)
      .from(
        '.work-border',
        { scaleX: 0, stagger: 0.18, ease: 'slow.out' },
        delay + offset
      )
      .from('.thumbnail', { opacity: 0 }, delay + offset);
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-x-full scale-0 py-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='relative z-10 size-full overflow-hidden'>
        <div
          className='hide-scrollbar flex h-full flex-col overflow-y-auto max-lg:overflow-y-visible'
          ref={containerRef}
        >
          {data?.projects?.map((project, index) => (
            <ProjectItem
              key={project?.title}
              project={project}
              index={index}
              isLast={index === data.projects.length - 1}
              handleClick={handleClick}
              linkIcon={data?.linkIcon}
            />
          ))}
        </div>
        <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-primary/0 to-primary/50'></div>
      </div>
    </Box>
  );
}

const ProjectItem = ({
  project = {},
  index,
  isLast,
  handleClick,
  linkIcon,
}) => {
  const { containerRef, handleMouseEnter, handleMouseLeave } =
    useArrowAnimation();

  return (
    <button
      onClick={event => handleClick(event)}
      className={`${index === 0 ? 'pointer-events-none' : 'pointer-events-auto'} button relative pb-[calc(1.8rem-2px)] pt-[1.8rem]`}
    >
      <div
        className='flex w-full items-baseline justify-between'
        ref={containerRef}
      >
        {/* Title */}
        <h3 className='overflow-hidden font-heading text-2xl font-normal leading-[100%]'>
          <span className='work-heading block pb-[2px]'>{project?.title}</span>
        </h3>
        {/* Arrow Link */}
        <a
          href={project?.url}
          target='_blank'
          rel='noopener noreferrer'
          className={'pointer-events-auto inline-block px-2'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {linkIcon && (
            <Image
              src={linkIcon}
              width={16}
              height={16}
              alt='arrow'
              className={`${index === 0 ? 'opacity-1' : 'opacity-0'} arrow size-[0.9rem]`}
            />
          )}
        </a>
      </div>

      {/* Thumbnail */}
      <a
        href={project?.url}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${index === 0 ? 'mt-4 h-auto' : 'h-0'} thumbnail pointer-events-auto relative block aspect-[3/2] w-full origin-top overflow-hidden rounded-[16px] bg-secondary`}
      >
        {project?.media && (
          <Image
            src={project.media}
            alt='bride and groom'
            fill={true}
            className='object-cover transition-transform duration-700 ease-out hover:scale-105'
            priority={index === 0 ? true : false}
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
          />
        )}
      </a>

      {/* Border */}
      {!isLast && (
        <div className='work-border absolute bottom-0 left-0 h-[1px] w-full origin-left bg-secondary' />
      )}
    </button>
  );
};
