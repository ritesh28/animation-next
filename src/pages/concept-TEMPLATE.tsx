import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
// import { motion } from "motion/react";
import { useState } from 'react';

export default function Page() {
  const [targetPathLength, setTargetPathLength] = useState(1);
  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div>
        {/* motion */}
        <div className='text-center'>
          <Button variant='outline' onClick={() => setTargetPathLength((oldV) => (oldV === 1 ? 0 : 1))}>
            <RotateCcw /> <span>Animate</span>
          </Button>
        </div>
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          Update <Code codeText='animate' /> prop of the motion component
        </p>
        <p>
          SVG elements can be animated using 3 special properties: <Code codeText='pathLength, pathSpacing & pathOffset' />
        </p>
      </div>
    </div>
  );
}
