import { Code } from '@/components/code';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className='flex flex-col items-center gap-4 m-4'>
      <div className='overflow-y-auto overflow-x-hidden max-w-[30rem] max-h-[25rem] border-ring border-2'>
        {new Array(20).fill(2).map((_, index) => (
          <div key={index} className='relative p-2 my-2'>
            <motion.div
              className='absolute inset-0 bg-chart-4'
              whileInView={{ x: 300, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi at, consequatur ullam officiis obcaecati inventore! Cum assumenda
              culpa officiis temporibus.
            </p>
          </div>
        ))}
      </div>
      <div className='text-muted-foreground [&>*]:mb-2'>
        <p>A normal animation is triggered when an element enters the viewport.</p>
        <p>
          By default, the element will be considered within the viewport when it enters/leaves the window. This can be changed by providing the ref of
          another scrollable element. <Code codeText='viewport={{ root: scrollRef }}' />
        </p>
      </div>
    </div>
  );
}
