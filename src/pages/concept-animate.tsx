import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'motion/react';
import { useCallback, useState } from 'react';

const DEFAULT_COLOR = '#009689';
export default function Page() {
  // things which are animated
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState(DEFAULT_COLOR);

  const setAnimationValues = useCallback(() => {
    // Get the input values from the DOM
    const xEle = document.getElementById('input-x') as HTMLInputElement;
    const yEle = document.getElementById('input-y') as HTMLInputElement;
    const rotateEle = document.getElementById('input-rotate') as HTMLInputElement;
    const colorEle = document.getElementById('input-color') as HTMLInputElement;

    // set value state
    setX(Number(xEle.value));
    setY(Number(yEle.value));
    setRotate(Number(rotateEle.value));
    setColor(colorEle.value);
  }, []);

  return (
    <div className='flex flex-col justify-center gap-4 m-4'>
      <div className='flex flex-wrap justify-center gap-4'>
        <motion.div
          className='w-52 h-52 rounded-xl select-none'
          initial={{ backgroundColor: DEFAULT_COLOR }}
          animate={{ x, y, rotate, backgroundColor: color }}
          transition={{ type: 'spring' }}
        />
        <div className='[&>*]:mb-2'>
          <Input type='number' placeholder='translate x' id='input-x' />
          <Input type='number' placeholder='translate y' id='input-y' />
          <Input type='number' placeholder='rotate' id='input-rotate' />
          <Input type='color' placeholder='choose color' id='input-color' defaultValue={DEFAULT_COLOR} />
          <p className='text-destructive text-xs ml-4'>
            <sup>*</sup>Make sure the input values are correct
          </p>
          <Button type='submit' variant='outline' onClick={setAnimationValues}>
            Animate
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          Update <Code codeText='animate' /> prop of the motion component
        </p>
        <p>
          It works with css variables as well: <Code codeText="animate={{ backgroundColor: 'var(--action-bg)' }}" />
        </p>
        <p>
          <b>Enter Animation</b>: When a motion component is first created, it will automatically animate to the values in animate if they are
          different from those initially rendered, which you can either do via CSS or via the <Code codeText='initial' /> prop.
        </p>
        <p>
          <b>Exit Animation</b>: Check out <Code codeText='AnimatePresence' /> component. This is needed since the react component is removed
          immediately on unmount. <Code codeText='AnimatePresence' /> makes sure that the exit animation happens before the unmount.
        </p>
      </div>
    </div>
  );
}
