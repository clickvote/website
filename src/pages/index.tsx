import Community from '@/components/landing/Community';
import Embed from '@/components/landing/Embed';
import Features from '@/components/landing/Features';
import Main from '@/components/landing/main';
import Service from '@/components/landing/Service';
import BackgroundMain from "@/components/layout/back_main";
import RootLayout from "@/components/layout/layout";

export default function HomePage() {
  return (
    <RootLayout>
      <BackgroundMain />
      <main>
        <section className='relative min-h-screen w-full overflow-clip'>
          <Main />
          <Embed />
          <Features />
          <Community />
          <Service />
        </section>
      </main>
    </RootLayout>
  );
}
