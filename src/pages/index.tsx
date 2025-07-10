import { Code } from '@/components/code';

export default function HomePage() {
  return (
    <div className='grid grid-rows-[1fr_auto_2fr] gap-4 m-4'>
      <div className='text-center text-xl leading-8 font-semibold tracking-tight'>
        <h1>Framer Motion Examples</h1>
        <p>Select examples from the sidebar to get started!</p>
      </div>
      <hr />
      <div className='text-muted-foreground'>
        <h2 className='text-xl font-semibold tracking-tight'>Core concept:</h2>
        <ul className='my-3 ml-6 list-disc [&>li]:mt-2'>
          <li>
            <Code codeText='<motion.* />' /> is the core component
          </li>
          <li>
            All intermediate values (which are later used in Animation) are generated using <b>interpolation</b>
          </li>
          <li>
            Start and end values are passed using <Code codeText='initial & animate' /> props, respectively. You can also pass series of values/states
            as in keyframes to <Code codeText='animate' /> prop.
          </li>
          <li>
            Duration and animation flow is controlled using <Code codeText='transition' /> prop.
          </li>
          <li>
            <Code codeText='MotionValue' /> instance is used under the hood to update visual properties without triggering React's render cycle.
          </li>
          <li>
            Apart from declarative (<Code codeText='<motion.*/>' />) animations, Framer Motion also provide <Code codeText='animate' /> which allows
            to take manual control over animation playback.
          </li>
          <li>
            <Code codeText='layout' /> prop let you animate between 2 layouts with ease.
          </li>
        </ul>
      </div>
    </div>
  );
}
