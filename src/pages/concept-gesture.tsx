import { Code } from '@/components/code';
import { motion } from 'motion/react';
export default function Page() {
  return (
    <div className='flex flex-col justify-center gap-4 m-4'>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-52 h-52 rounded-xl bg-chart-2 self-center select-none' />
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>Gesture support for hover, focus, tap, pan, drag and inView.</p>
        <p>
          Each gesture has both a set of event listeners and a <Code codeText='while-*' /> animation prop.
        </p>
      </div>
    </div>
  );
}
