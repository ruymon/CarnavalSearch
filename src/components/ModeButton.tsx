import { HTMLAttributes } from 'react';

interface ModeButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  isActive?: boolean;
};

export function ModeButton({ label, isActive, ...props }: ModeButtonProps) {
  const activeClass = isActive ? 'bg-indigo-500 text-white' : 'bg-transparent text-indigo-500';

  return (
    <button className={`${activeClass} w-full py-[6px] px-4 flex items-center rounded justify-center uppercase transition-all hover:brightness-90 font-bold text-xs`} {...props}>{ label }</button>
  );
};
