import {GetStaticProps} from "next";

import Community from '@/components/landing/Community';
import Embed from '@/components/landing/Embed';
import Features from '@/components/landing/Features';
import Main from '@/components/landing/main';
import Service from '@/components/landing/Service';
import BackgroundMain from "@/components/layout/back_main";
import RootLayout from "@/components/layout/layout";

import {getGithubStars} from "@/helper/endpoints/github/get.github.stars";

export default function HomePage({stars}: {stars: number}) {
  return (
    <RootLayout stars={stars}>
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

export const getStaticProps: GetStaticProps = async () => {
    const stars = await getGithubStars();
    return {
        props: {
            stars
        },
        revalidate: 3600
    }
}