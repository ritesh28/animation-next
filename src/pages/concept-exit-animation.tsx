import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='flex flex-col justify-center gap-4 m-4'>
      <div>
        <div className='grid place-items-center h-52'>
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className='w-52 h-52 rounded-xl bg-chart-2 select-none'
              />
            ) : null}
          </AnimatePresence>
        </div>
        <div className='text-center mt-2'>
          <Button variant='outline' onClick={() => setIsVisible((oldV) => !oldV)}>
            <span>{isVisible ? 'Hide' : 'Show'}</span>
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          In React, when a component is removed, it is usually removed instantly. Motion provides the <Code codeText='AnimatePresence' /> component
          which keeps elements in the DOM while they perform an exit animation.
        </p>
      </div>
    </div>
  );
}
