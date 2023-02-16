import { IoLocationOutline } from "react-icons/io5";
import { IEvent } from "../@types/events";

type EventCardProps = IEvent;

export function EventCard({title, description, location, backgroundImage}: EventCardProps) {
  return (
    <button type="button" className="text-left w-full rounded-lg bg-transparent border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4 hover:scale-[104%] transition-all duration-300 hover:shadow-xl">
      <img 
        src={backgroundImage} 
        alt="Event background image" 
        className="w-full h-48 rounded-t-lg object-cover"
      />

      <div className="flex flex-col gap-4 p-4">
      
        <span className="text-zinc-800 font-bold text-xl dark:text-zinc-200">{ title }</span>
        <span className="text-zinc-600 dark:text-zinc-500">{ description }</span>
        
        <div className="flex items-center gap-2">
          <IoLocationOutline size={24}  className="text-red-400"/>
          <span className="text-zinc-600 dark:text-zinc-500">{ location }</span>
        </div>

      </div>
    </button>
  );
};
