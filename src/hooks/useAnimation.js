import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Flip } from 'gsap/Flip';
import { DISABLE_LOADING_ANIMATION } from '@/config';

export const useGlobalTimeline = loaded => {
  const [tl, setTl] = useState();
  useGSAP(() => {
    if (DISABLE_LOADING_ANIMATION) return;

    gsap.set(document.body, { overflow: 'hidden' });
    window.scrollTo({ top: 0 });

    if (!loaded) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => gsap.set(document.body, { overflow: 'auto' }),
    });
    setTl(tl);
  }, [loaded]);

  return tl;
};

export const useLoadingBarAnimation = (callback = () => {}) => {
  const loadingBarRef = useRef();
  const timeline = useRef();

  useGSAP(() => {
    timeline.current = gsap
      .timeline()
      .to(loadingBarRef.current, {
        scaleX: 1,
        ease: 'slow.out',
        duration: 1,
        onComplete: () => callback(),
      })
      .to(loadingBarRef.current, { autoAlpha: 0 });
  });

  return loadingBarRef;
};

export const usePortraitAnimation = (
  timeline,
  preLoaderSelector = '.preloader',
  postLoaderSelector = '.postloader'
) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      if (!timeline) return;

      const state = Flip.getState(preLoaderSelector);

      Flip.fit(preLoaderSelector, postLoaderSelector);

      timeline.add(
        Flip.from(state, {
          duration: 0.4,
          ease: 'power1.out',
        })
          .set(postLoaderSelector, { opacity: 1 })
          .set(preLoaderSelector, { visibility: 'hidden' }),
        0
      );
    },
    {
      dependencies: [timeline],
      scope: containerRef,
    }
  );
  return containerRef;
};

export const useBoxAnimation = (
  timeline,
  callbackAnimation = () => {},
  delay = 0.15
) => {
  const boxRef = useRef();

  useGSAP(
    () => {
      if (!timeline) return;
      timeline.to(
        boxRef.current,
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
        },
        delay
      );
      callbackAnimation(delay);
    },
    {
      dependencies: [timeline],
      scope: boxRef,
    }
  );

  return boxRef;
};

export const useDropdownAnimation = (
  buttonSelector = '.button',
  thumbnailSelector = '.thumbnail',
  arrowSelector = '.arrow'
) => {
  const containerRef = useRef();
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleClick = contextSafe(event => {
    const currentButton = event.currentTarget;
    const currentThumbnail = currentButton.querySelector(thumbnailSelector);
    const currentArrow = currentButton.querySelector(arrowSelector);

    const timeline = gsap.timeline({
      defaults: { ease: 'expo.out', duration: 0.8 },
    });

    timeline
      .set(buttonSelector, { pointerEvents: 'auto' })
      .to(
        thumbnailSelector,
        {
          height: 0,
          marginTop: 0,
          ease: 'sine.out',
          duration: 0.5,
        },
        0
      )
      .to(arrowSelector, { autoAlpha: 0, duration: 0.5 }, 0)
      .set(currentButton, { pointerEvents: 'none' }, 0)
      .to(currentThumbnail, { height: 'auto', marginTop: '1rem' }, 0)
      .to(currentArrow, { autoAlpha: 1 }, 0);
  });

  return { containerRef, handleClick };
};

export const useArrowAnimation = (arrowSelector = '.arrow') => {
  const containerRef = useRef();
  const animation = useRef();

  const { contextSafe } = useGSAP(
    () => {
      animation.current = gsap.timeline();
    },
    { scope: containerRef }
  );

  const handleMouseEnter = contextSafe(() => {
    animation.current.kill();
    animation.current = gsap.timeline().to(arrowSelector, {
      xPercent: 50,
      yPercent: -50,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: 'sine.inOut',
      yoyoEase: 'none',
    });
  });

  const handleMouseLeave = contextSafe(() => {
    animation.current.kill();
    animation.current = gsap.to(arrowSelector, { xPercent: 0, yPercent: 0 });
  });

  return { containerRef, handleMouseEnter, handleMouseLeave };
};
