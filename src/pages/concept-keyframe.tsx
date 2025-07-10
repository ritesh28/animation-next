import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Page() {
  // rerender key to trigger animation
  const [reRenderKey, reRender] = useState(0);
  return (
    <div className='flex flex-col justify-center gap-4 m-4'>
      <div className='relative'>
        <div className='h-52'>{/* empty for compensating the next 'absolute' element */}</div>
        <div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
          <motion.div
            key={reRenderKey}
            className='w-52 h-52 rounded-xl bg-chart-2 self-center select-none'
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
          />
        </div>
        <div className='text-center'>
          <Button variant='outline' onClick={() => reRender((oldV) => oldV + 1)}>
            <RotateCcw /> <span>Animate</span>
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          Pass a list of values. Each value will be used at each keyframe. e.g. <Code codeText='[1, 2, 2, 1, 1]' />
        </p>
        <p>
          If we want to start the animation from the current state of the element, set the first item in the list to <Code codeText='null' />.
        </p>
        <p>
          By default, each keyframe is spaced naturally throughout the animation. You can override this by setting the{' '}
          <Code codeText='times option via transition' />. <Code codeText='times' /> is an array of progress values between 0 and 1, defining where in
          the animation each keyframe should be positioned. e.g. <Code codeText='transition: { duration: 3, times: [0, 0.2, 1] }' />{' '}
        </p>
      </div>
    </div>
  );
}
