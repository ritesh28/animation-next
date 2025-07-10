import { Code } from '@/components/code';
import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';

export default function Page() {
  const scrollableRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollableRef });
  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div className='overflow-y-auto overflow-x-hidden max-w-[30rem] max-h-[25rem] border-ring border-2' ref={scrollableRef}>
        <motion.div className='sticky top-0 left-0 right-0 h-2 bg-navbar z-10' style={{ originX: 0, scaleX: scrollYProgress }} />
        {new Array(20).fill(2).map((_, index) => (
          <div key={index} className='relative p-2 my-2'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi at, consequatur ullam officiis obcaecati inventore! Cum assumenda
              culpa officiis temporibus.
            </p>
          </div>
        ))}
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>
          Values are linked directly to scroll progress. Scroll-linked animations are created using <Code codeText='motion values' /> and the{' '}
          <Code codeText='useScroll' /> hook.
        </p>
        <p>
          SVG elements can be animated using 3 special properties: <Code codeText='pathLength, pathSpacing & pathOffset' />
        </p>
      </div>
    </div>
  );
}
