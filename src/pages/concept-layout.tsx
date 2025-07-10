import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const initialOrder = ['#ff0088', '#dd00ee', '#9911ff', '#0d63f8'];

export default function Page() {
  const [order, setOrder] = useState(initialOrder);

  const handleShuffle = () => {
    setOrder([...order.sort(() => Math.random() - 0.5)]);
  };

  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div>
        <ul className='grid grid-rows-2 grid-cols-2 gap-3'>
          {order.map((backgroundColor) => (
            <motion.li
              key={backgroundColor}
              layout
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className='w-[5rem] h-[5rem] rounded-sm'
              style={{ backgroundColor }}
            />
          ))}
        </ul>
        <div className='text-center mt-4'>
          <Button variant='outline' onClick={handleShuffle}>
            <RotateCcw /> <span>Shuffle</span>
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          <Code codeText='layout' /> prop can animate un-animatable CSS values like switching <Code codeText='justify-content' /> between{' '}
          <Code codeText='flex-start' /> and <Code codeText='flex-end' />.
        </p>
        <p>
          Use <Code codeText='layoutId' /> prop if you want to animate an element that exit at a location and apprear at different location.
        </p>
        <p>
          Use <Code codeText='LayoutGroup' /> component to synchronize layout changes across multiple component. for e.x. Use it in accordions since
          one accordion expand/collapse affect others
        </p>
      </div>
    </div>
  );
}
