import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { motion, Variant } from 'motion/react';
import { useState } from 'react';

type VariantLabels = 'hidden' | 'visible';
const variants: Record<VariantLabels, Variant> = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    // dynamic
    opacity: 1,
    transition: { delay: index * 0.3 },
  }),
};

export default function Page() {
  const [display, setDisplay] = useState<VariantLabels>('visible');
  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div>
        <div className='flex flex-col gap-2'>
          {new Array(5).fill(2).map((_, index) => (
            <motion.div key={index} custom={index} animate={display} variants={variants} className='w-52 h-6 bg-chart-2 rounded-sm select-none' />
          ))}
        </div>
        <div className='mt-4 text-center'>
          <Button variant='outline' onClick={() => setDisplay((oldV) => (oldV === 'visible' ? 'hidden' : 'visible'))}>
            {display === 'visible' ? 'Hide' : 'Show'}
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>Each variant can be defined as a function that resolves when a variant is made active.</p>
        <p>
          These functions are provided a single argument, which is passed via the <Code codeText='custom prop' />
        </p>
      </div>
    </div>
  );
}
