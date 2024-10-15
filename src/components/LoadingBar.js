import { useLoadingBarAnimation } from '@/hooks/useAnimation';

export default function LoadingBar({ onFinish = () => {} }) {
  const loadingBarRef = useLoadingBarAnimation(() => onFinish());

  return (
    <div
      ref={loadingBarRef}
      className='fixed left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary'
    />
  );
}
