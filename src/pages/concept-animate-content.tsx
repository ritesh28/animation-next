import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { animate, AnimationPlaybackControlsWithThen, motion, useMotionValue, useTransform } from 'motion/react';
import { useCallback, useState } from 'react';

export default function Page() {
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [controls, setControls] = useState<AnimationPlaybackControlsWithThen | null>(null);

  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get())); //.get() returns the latest state of MotionValue

  const handleAnimation = useCallback(() => {
    const newControls = direction === 1 ? animate(count, 100, { duration: 5 }) : animate(count, 0, { duration: 5 }); // Start the animation

    setControls(newControls);
    setDirection((prev) => -prev); // Toggle direction
    setIsPlaying(true);
  }, [direction, count]);

  const handleAnimationPlayState = () => {
    if (controls) {
      if (isPlaying) {
        controls.pause(); // Pause the animation
      } else {
        controls.play(); // Resume the animation
      }
      setIsPlaying((prev) => !prev); // Toggle play state
    }
  };

  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div className='flex flex-col items-center gap-2'>
        <motion.pre className='bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-2xl font-semibold'>{rounded}</motion.pre>
        <div className='flex gap-2'>
          <Button variant='outline' onClick={handleAnimation} disabled={controls?.state === 'running'}>
            <span>Animate Content</span>
          </Button>
          <Button variant='outline' onClick={handleAnimationPlayState} disabled={!controls}>
            {isPlaying ? 'Pause' : 'Resume'}
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          Creates a Framer Motion Value using <Code codeText='useMotionValue()' /> to track the state and velocity of a value.
        </p>
        <p>
          Pass them into the Motion component via the <Code codeText='style' /> prop or directly as <b>HTMLInnerText</b>.
        </p>
        <p>
          Listeners can be added to motion values via the <Code codeText='on()' /> or <Code codeText='useMotionValueEvent' /> hook. E.g.{' '}
          <Code codeText='useMotionValueEvent(x, "change", (latest) => console.log(latest))' />
        </p>
      </div>
    </div>
  );
}
