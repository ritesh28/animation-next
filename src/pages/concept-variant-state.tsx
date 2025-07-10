import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { motion, Variant } from 'motion/react';
import { useState } from 'react';

type VariantLabels = 'inactive' | 'active' | 'complete';
const variants: Record<VariantLabels, Variant> = {
  inactive: { scale: 0.5, backgroundColor: 'var(--chart-2)' },
  active: { scale: 0.75, backgroundColor: 'var(--chart-3)' },
  complete: { scale: 1, backgroundColor: 'var(--navbar)' },
};
export default function Page() {
  const [status, setStatus] = useState<VariantLabels>('inactive');
  return (
    <div className='flex flex-col gap-4 m-4'>
      <div className='flex flex-col items-center gap-4'>
        <motion.div
          animate={status} // pass in our React state!
          variants={variants}
          className='w-52 h-52 rounded-xl bg-chart-2 select-none'
        ></motion.div>

        <div className='flex flex-wrap gap-2'>
          <Button variant='outline' className='bg-chart-2 text-navbar-foreground' onClick={() => setStatus('inactive')}>
            Inactive
          </Button>
          <Button variant='outline' className='bg-chart-3 text-navbar-foreground' onClick={() => setStatus('active')}>
            Active
          </Button>
          <Button variant='outline' className='bg-navbar text-navbar-foreground' onClick={() => setStatus('complete')}>
            Complete
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          <b>Variants</b> are useful when we want to perform animations that propagate throughout the DOM.
        </p>
        <p>
          Also useful when you want to control the animation state using <Code codeText='React.useState()' />
        </p>
        <p>
          Each variant is a animation target/state referred to by a <b>label</b>.{' '}
          <Code codeText="<motion.div variants={variants} initial='hidden' whileInView='visible'/>" />
        </p>
        <p>
          Can also define multiple variants via an array as in keyframes: <Code codeText="animate={['visible', 'danger']}" />
        </p>
      </div>
    </div>
  );
}
