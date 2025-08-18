'use client'
import { useState } from "react";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async (): Promise<void> => {
    // nothing for now
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  }
  return (
    <button
      onClick={() => handleClick()}
      disabled={loading}
      className='absolute right-2 px-3.5 py-1.5 rounded-lg bg-[#D72638] hover:bg-[#d72638c9] disabled:bg-[#d72638a2] font-semibold text-font-primary hover:text-gray-200 disabled:text-gray-400'
    >
      {loading
        ? 'Loading'
        : 'Login'
      }
    </button>
  );
}