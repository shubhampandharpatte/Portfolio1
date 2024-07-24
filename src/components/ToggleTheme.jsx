import React from 'react';
import { CgDarkMode } from "react-icons/cg";

function ToggleTheme({ switchTheme, theme }) {
    const isDarkMode = theme === 'dark';

    return (
        <div className="relative">
            <div className="hs-tooltip [--placement:bottom] inline-block">
                <button onClick={switchTheme} className={`hs-tooltip-toggle text-2xl ${isDarkMode ? 'text-zinc-300 dark:text-zinc-500' : 'text-zinc-500 dark:text-zinc-300'} hover:text-zinc-700 transition-all duration-300 absolute top-5 right-5`} aria-label="Dark Mode Button">
                    <CgDarkMode />

                    <span className={`hs-tooltip-content ${isDarkMode ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity inline-block absolute z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm`} role="tooltip">
                        Dark Mode
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ToggleTheme;
