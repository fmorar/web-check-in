'use client';

import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Footer from '@/components/footer/FooterAuthDefault';
import { useTheme } from 'next-themes';
import { PropsWithChildren } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Link from 'next/link';

// Lista estática de países
const countries = ['Costa Rica', 'Mexico', 'Colombia', 'Brazil', 'Argentina'];

interface DefaultAuthLayoutProps extends PropsWithChildren {
  children: JSX.Element;
  viewProp: any;
}

export default function DefaultAuthLayout(props: DefaultAuthLayoutProps) {
  const { children } = props;
  const { theme, setTheme } = useTheme();

  // Estado para controlar el país y la animación
  const [countryIndex, setCountryIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // Indicador de si estamos escribiendo
  const [letterIndex, setLetterIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // State to check if component has mounted

  useEffect(() => {
    // Mark the component as mounted once the client-side has rendered
    setMounted(true);

    const currentCountry = countries[countryIndex]; // País actual
    let timer: NodeJS.Timeout;

    // Controlar el efecto de escribir
    if (isTyping && letterIndex < currentCountry.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + currentCountry[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100); // Velocidad de escritura
    }

    // Pausa antes de comenzar a borrar (3 segundos)
    if (letterIndex === currentCountry.length) {
      timer = setTimeout(() => setIsTyping(false), 3000); // Espera 3 segundos
    }

    // Borrar el texto
    if (!isTyping && letterIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setLetterIndex(letterIndex - 1);
      }, 100); // Velocidad de borrado
    }

    // Cambiar al siguiente país
    if (!isTyping && letterIndex === 0) {
      timer = setTimeout(() => {
        setCountryIndex((prevIndex) => (prevIndex + 1) % countries.length);
        setIsTyping(true);
      }, 100); // Cambio al siguiente país
    }

    // Limpieza del temporizador para evitar solapamientos
    return () => clearTimeout(timer);

  }, [letterIndex, isTyping, countryIndex]);

  return (
    <div className="relative h-max dark:bg-zinc-950">
      <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[66%] lg:h-[100vh] lg:max-w-[66%] lg:px-6 xl:pl-0 ">
        <Link className="mt-10 w-fit text-zinc-950 dark:text-white" href="/">
          <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
            {mounted && <FaChevronLeft className="mr-3 h-[13px] w-[8px] text-zinc-950 dark:text-white" />}
            <p className="ml-0 text-sm text-zinc-950 dark:text-white">
              Back to the website
            </p>
          </div>
        </Link>
        {children}
        <div className="absolute right-0 hidden h-full min-h-[100vh] xl:block xl:w-[50vw] 2xl:w-[44vw]">
          <div className="flex h-full w-full flex-col items-end justify-between auth-bg">
            <div className={`mb-[160px] mt-16 flex w-full items-center justify-center`}>
            <Link href="/" className="flex items-center space-x-2">
              <img width="190px" src='/img/logo.png' />
            </Link>
            </div>
            <div className={`flex w-full flex-col text-2xl font-bold text-white mt-auto mb-16`}>
              <div className="flex flex-col items-start ml-32 text-white">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Uncover <br />
                  <span className="text-white">{displayText}</span> {/* Texto con animación */}
                </h1>
                <p className="text-lg font-light mt-2">
                  Effortless Web Check-In <br /> for STR Guests
                </p>
                <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      {mounted && (
        <Button
          className="absolute bottom-10 right-10 flex min-h-10 min-w-10 cursor-pointer rounded-full bg-zinc-950 p-0 text-xl text-white hover:bg-zinc-950 dark:bg-white dark:text-zinc-950 hover:dark:bg-white xl:bg-white xl:text-zinc-950 xl:hover:bg-white xl:dark:text-zinc-900"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'light' ? (
            <IoMoon className="h-4 w-4" />
          ) : (
            <IoSunny className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
}
