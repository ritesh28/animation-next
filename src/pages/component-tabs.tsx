import { Button } from '@/components/ui/button';
import { GITHUB_URL_QUERY } from '@/lib/github-url-query';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const tabs = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
];

export default function Page() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const searchParams = useSearchParams();
  const githubUrl = searchParams.get(GITHUB_URL_QUERY);

  return (
    <div>
      <div className='flex flex-col w-[25rem] rounded-xl overflow-hidden shadow-xl bg-secondary'>
        <nav className='p-1.5 rounded-b-none border-b-2 h-[2.5rem]'>
          <ul className='flex justify-around w-full'>
            {tabs.map((item) => (
              <li
                key={item.label}
                onClick={() => setSelectedTab(item)}
                className={cn('grow text-center rounded-sm py-1 relative', item === selectedTab && 'bg-ring')}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? <motion.div className='absolute -bottom-2 bg-navbar h-1 w-full' layoutId='underline' id='underline' /> : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className='grid place-content-center'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='text-[10rem] select-none'
            >
              {selectedTab ? selectedTab.icon : '😋'}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <div className='mt-6'>
        <a href={githubUrl} target='_blank'>
          <Button variant='outline' size='lg'>
            Source Code <ExternalLink />
          </Button>
        </a>
      </div>
    </div>
  );
}
