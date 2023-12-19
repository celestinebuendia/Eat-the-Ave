"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DropDown({options, selected, setOption}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div onMouseLeave={() => setIsOpen(false)}>
      <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg text-left w-44 block px-4 py-1.5 bg-primary-700 hover:bg-primary-600">{selected}</button>
      {isOpen &&
        <div className="z-10 rounded-lg shadow w-44 bg-primary-800 absolute">
          <ul className="py-2 text-sm text-gray-200">
            {options.map((label) => (
              <li key={label}>
                <button onClick={() => {setOption(label), setIsOpen(false)}} className="block w-full text-start px-4 py-1.5 bg-primary-800 hover:bg-primary-600">{label}</button>
              </li>
            ))}
          </ul>
        </div> 
      }
    </div>
  );
}