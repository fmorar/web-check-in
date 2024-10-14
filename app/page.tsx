'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import PublicNavbar from '@/components/navbar/PublicNav';
import LandingHeader from '@/components/landing/LandingHeader';
import SectionWithStats from '@/components/landing/SectionWithStats';
import Testimonials from '@/components/landing/Testimonials';
import HowItWorks from '@/components/landing/HowItWorks';
import Footer from '@/components/landing/Footer';
import { Spinner } from '@/components/ui/spinner';

export default function HomePage() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          router.push('/dashboard/main');
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error checking session:', err);
        setLoading(false);
      }
    };

    checkUser();
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="w-8 h-8 text-gray-500 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <PublicNavbar />
      <main className="container mx-auto flex flex-col">
        <LandingHeader />
        <SectionWithStats />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
