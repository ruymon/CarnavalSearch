import illustrationBr from './assets/illustration-br.svg';
import illustrationTl from './assets/illustration-tl.svg';

import { IoLocationOutline, IoSearchOutline } from 'react-icons/io5';
import { EventCard } from './components/EventCard';
import { ModeButton } from './components/ModeButton';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { eventsHelper } from './helpers/eventsHelper';

export function App() {
  return (
    <main className='w-full min-h-screen flex items-center flex-col gap-24 bg-white dark:bg-zinc-900'>
      <section className="w-full lg:h-full h-fit lg:max-h-[50%] bg-zinc-50 dark:bg-zinc-800/25 relative flex items-center justify-center flex-col gap-10 p-10">
        <img src={illustrationTl} alt="Illustration" draggable="false" className='absolute top-0 left-0 hidden xl:flex ' />
        <img src={illustrationBr} alt="Illustration" draggable="false" className='absolute bottom-0 right-0 hidden xl:flex' />

        <div className="flex flex-col items-center gap-4 px-8 w-full xl:w-2/4">
          <span className="uppercase font-medium text-red-400">Find your block</span>
          <h1 className="font-bold text-center text-5xl leading-tight text-zinc-900 dark:text-white">Encontre os <span className='text-indigo-500'>melhores blocos</span> de carnaval de 2023</h1>
        </div>

        <form className='flex flex-col w-full max-w-3xl lg:max-w-none lg:w-fit  lg:flex-row items-center gap-6 p-10 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700'>
          <div className='w-full lg:w-fit flex items-center px-4 py-3 gap-3 rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200'>
            <label htmlFor="search" className="sr-only">Search</label>
            <IoSearchOutline className='text-red-400' size={24}/>
            <input type="text" name="search" placeholder="Pesquise por nome" className='placeholder:text-zinc-400 w-full h-full bg-transparent border-none focus:outline-none focus:border-transparent' />
          </div>

          <div className='w-full lg:w-fit flex items-center px-4 py-3 gap-3 rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200'>
            <label htmlFor="search" className="sr-only">Search</label>
            <IoLocationOutline className='text-red-400' size={24}/>
            <input type="text" name="location" placeholder="Selecione uma cidade" className='placeholder:text-zinc-400 w-full h-full bg-transparent border-none focus:outline-none focus:border-transparent' />
          </div>

          <button type="submit" className='w-full lg:w-fit px-6 py-3 text-white bg-indigo-500 rounded-md uppercase text-sm font-bold transition-all hover:brightness-90'>Buscar agora</button>

        </form>
      </section>

      <section className='w-full max-w-[1216px] flex flex-col gap-10 px-12'>
        <nav className='w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <h2 className='text-3xl text-zinc-800 dark:text-white font-bold'>Blocos recomendados</h2>

          <div className='flex items-center p-2 rounded-lg border border-zinc-100 dark:border-zinc-800 w-full sm:w-fit'>
            <ModeButton label='Lista' isActive/>
            <ModeButton label='Mapa' />
            <ThemeSwitcher />
          </div>
        </nav>

        <div className='grid gap-8 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          { eventsHelper.map(event => <EventCard key={event.id} {...event} />)}
        </div>
      </section>

      <footer className='p-12 bg-zinc-50 dark:bg-zinc-800/10 w-full flex items-center justify-center text-sm text-zinc-500'>
        <span>Feito com ❤ por <a className='hover:text-indigo-500 underline underline-offset-2' href="github.com/ruymon">Ruy Monteiro</a></span>
      </footer>
    </main>
  )
};
