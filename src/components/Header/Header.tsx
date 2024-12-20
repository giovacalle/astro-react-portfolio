import { useScrollDirection } from '@components/hooks/useScrollDirection';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/Tooltip';
import { cn } from '@components/ui/utils';
import { Icon } from '@iconify/react';

const PAGES = [
  { name: 'Home', href: '/', icon: 'material-symbols-light:home-outline' },
  { name: 'Experiences', href: '/experiences/', icon: 'material-symbols-light:work-outline' },
  {
    name: 'Projects',
    href: '/projects/',
    icon: 'material-symbols-light:folder-code-outline-rounded'
  },
  { name: 'Posts', href: '/posts/', icon: 'material-symbols-light:edit-outline' }
];

export const Header = ({ currentPage }: { currentPage: string }) => {
  const direction = useScrollDirection('up');

  return (
    <header
      className={cn(
        'bg-dark-mode-gray-dark fixed left-1/2 top-5 z-10 mx-auto flex w-max -translate-x-1/2 transform items-center gap-8 rounded-2xl p-2 px-5 text-white opacity-100 transition-opacity duration-300',
        direction === 'down' && 'pointer-events-none opacity-0'
      )}>
      {PAGES.map(page => (
        <TooltipProvider key={page.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={page.href}
                className={cn(currentPage === page.href && 'rounded-xl bg-dark-mode-violet p-0.5')}>
                <Icon icon={page.icon} width={28} height={28} />
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-dark-mode-gray-dark mt-3 rounded-lg px-3 py-1.5 data-[side=bottom]:slide-in-from-top-8">
              <p>{page.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </header>
  );
};
