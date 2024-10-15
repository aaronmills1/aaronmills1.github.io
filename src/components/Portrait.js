import { usePortraitAnimation } from '@/hooks/useAnimation';
import Image from 'next/image';
import { BLUR_DATA_URL, DISABLE_LOADING_ANIMATION } from '@/config';

export default function Portrait({ data, timeline }) {
  const containerRef = usePortraitAnimation(timeline);

  const preAnimationClass = DISABLE_LOADING_ANIMATION ? '' : 'opacity-0';

  return (
    <div ref={containerRef} className='size-full'>
      <div
        className={`${preAnimationClass} postloader box relative left-0 top-0 z-20 aspect-square h-full w-full translate-x-0 translate-y-0 transform bg-secondary`}
        data-flip-id='postloader'
      >
        {data?.image && (
          <Image
            src={data.image}
            fill={true}
            alt='black woman'
            className='h-full w-full object-contain object-bottom'
            priority={true}
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
          />
        )}
      </div>

      {!DISABLE_LOADING_ANIMATION && (
        <div
          className='preloader box absolute-center z-30 aspect-[400/450] h-auto w-[30vw] bg-secondary max-md:w-[50vw]'
          data-flip-id='preloader'
        >
          {data?.image && (
            <Image
              src={data.image}
              fill={true}
              alt='black woman'
              className='h-full w-full object-contain object-bottom'
              priority={true}
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          )}
        </div>
      )}
    </div>
  );
}
