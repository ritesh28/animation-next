import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { motion, Variant } from 'motion/react';
import { useState } from 'react';

type VariantLabels = 'bgColor1' | 'bgColor2';

const parentVariants: Record<VariantLabels, Variant> = {
  bgColor1: { backgroundColor: 'var(--chart-2)' },
  bgColor2: { backgroundColor: 'var(--chart-4)' },
};
// state should be same for parent and children
const childVariants: Record<VariantLabels, Variant> = {
  bgColor1: { backgroundColor: 'var(--chart-1)' },
  bgColor2: { backgroundColor: 'var(--navbar)' },
};

export default function Page() {
  const [bgColor, setBgColor] = useState<VariantLabels>('bgColor1');
  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div>
        <div>
          <motion.div animate={bgColor} variants={parentVariants} className='p-4 my-2 rounded-lg [&>div]:mb-2'>
            <span>Parent Element</span>
            <motion.div
              // animate={bgColor}. // This will use the same animation state as parent
              variants={childVariants}
              className='p-2 rounded-sm'
            >
              1. Child element
            </motion.div>
            <motion.div
              // animate={bgColor}. // This will use the same animation state as parent
              variants={childVariants}
              className='p-2 rounded-sm'
            >
              2. Child element
            </motion.div>
            <motion.div
              // animate={bgColor}. // This will use the same animation state as parent
              variants={childVariants}
              className='p-2 rounded-sm'
            >
              3. Child element
            </motion.div>
          </motion.div>
        </div>
        <div className='flex gap-2'>
          <Button variant='outline' className='bg-chart-2 text-navbar-foreground' onClick={() => setBgColor('bgColor1')}>
            bgColor1
          </Button>
          <Button variant='outline' className='bg-chart-4 text-navbar-foreground' onClick={() => setBgColor('bgColor2')}>
            bgColor2
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          <b>Propagation</b>: Variants will flow down to children elements. No need to have <Code codeText='animate' /> prop on child element.
          Animation target/state is determined by the parent element.
        </p>
        <p>
          <b>Orchestration</b>: we can take propagation a step further by controlling the timing of child animations using{' '}
          <Code codeText='transition props: when & delayChildren' />. e.g.{' '}
          <Code codeText='transition: { when: "beforeChildren", delayChildren: stagger(0.3), // Stagger children by .3 seconds }' />
        </p>
      </div>
    </div>
  );
}
