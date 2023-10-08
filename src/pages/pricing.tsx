
import {GetStaticProps} from "next";
import * as React from 'react';

import Accordion from '@/components/Accordion';
import GradientText from '@/components/common/GradientText';
import SwitchButton from '@/components/common/SwitchButton';
import BackgroundBlog from "@/components/layout/back_blog";
import RootLayout from "@/components/layout/layout";
import PricingPlan from '@/components/pricing/Plan';

import {getGithubStars} from "@/helper/endpoints/github/get.github.stars";

const PricePlans = [
  {
    title: 'Free',
    description: 'Run locally with docker-compose',
    price: '$0 / mo',
    actionTitle: 'Get Started',
    content: [
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
    ],
    defaultAction: true,
  },
  {
    title: 'Indie Dev',
    description: 'Run locally with docker-compose',
    price: '$0 / mo',
    actionTitle: 'Get Started for free',
    content: [
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
    ],
    defaultAction: false,
  },
  {
    title: 'Business',
    description: 'Run locally with docker-compose',
    price: '$0 / mo',
    actionTitle: 'Get Started for free',
    content: [
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
    ],
    defaultAction: false,
  },
  {
    title: 'Enterprise',
    description: 'Run locally with docker-compose',
    price: 'Contact us',
    actionTitle: 'Contact us',
    content: [
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: false,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
      {
        title: 'Email Support',
        support: true,
      },
    ],
    defaultAction: false,
  },
];

const PricePlans1 = [
  {
    title: 'On-Premises',
    description: 'Use ClikcVote for your applications.',
    price: 'Contact us',
    actionTitle: 'Contact us',
    content: [
      {
        title: 'Unlimited Events',
        support: true,
      },
      {
        title: 'MIT License',
        support: true,
      },
      {
        title: 'Free',
        support: true,
      },
    ],
    defaultAction: true,
  },
];

const Faqs = [
  {
    title: 'What is a trigger event?',
    description:
      'A trigger event (also called an event) is a request that kicks off a process in ClickVote logic engine (API call to /v1/events/trigger for example). A trigger event can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. You are charged for trigger event that starts a process in the logic engine for each unique subscriber.',
  },
  {
    title: 'What is a notification?',
    description:
      'A notification is any message sent over any channel, after ClickVote logic engine, ClickVote user preferences, and your configuration calculated and crafted the message. A notification can be sent to an email, In-App notification center, chat, push, and more.',
  },
  {
    title: 'What are the differences between ClickVote Cloud and Open Source?',
    description:
      'ClickVote <a class="text-[#00D5FF] transition-colors duration-200 hover:text-white" href="https://github.com/clickvote/clickvote" target="_blank" rel="noreferrer">Open source</a> is a technology available under an MIT license, build and maintained by ClickVote community. You can adapt it to your needs, contribute, or simply use docker files and run it. ClickVote Cloud is a managed service run, managed, and maintained by ClickVote, Cloud version is scalable and robust by design, including uptime SLAs, and more business-facing features, that are not available under the Open Source version.',
  },
  {
    title: 'Can I send more than 1 million events a month on ClickVote Cloud?',
    description:
      'Yes, you absolutely can. Our managed cloud system was built to scale with your usage, so you don’t have to worry about it.',
  },
];

const PricingPage = ({stars}: {stars: number}) => {
  const [status, setStatus] = React.useState(true);
  return (
    <RootLayout stars={stars}>
      <BackgroundBlog />
      <main>
        <section className='mx-auto mt-[40px] flex w-fit flex-col items-center px-5 md:mt-[100px]'>
          <GradientText className='max-w-[950px] bg-gradient-to-t text-center text-[35px] font-[700] leading-[39px] md:text-[71px] md:leading-[79px]'>
            {status ? (
              <>
                Flexible pricing
                <br className='md:hidden' /> for companies
                <br className='md:hidden' /> and developers
              </>
            ) : (
              <>
                Find a plan
                <br />
                that works for you
              </>
            )}
          </GradientText>
          <SwitchButton
            text1='Cloud'
            text2='Self-hosted'
            className='mt-[60px]'
            value={status}
            onChange={(v) => setStatus(v)}
          />
          <div className='mx-auto mt-[60px] grid w-full grid-cols-1 items-center justify-center justify-items-center  gap-x-[14px] gap-y-6 md:mx-10 md:grid-cols-2 xl:grid-cols-4'>
            {(status ? PricePlans : PricePlans1).map((plan, index) => (
              <PricingPlan
                title={plan.title}
                description={plan.description}
                price={plan.price}
                actionTitle={plan.actionTitle}
                content={plan.content}
                defaultAction={plan.defaultAction}
                key={index}
                className={status ? 'col-span-1' : 'col-span-4'}
              />
            ))}
          </div>
          <div className='mt-[100px] w-full max-w-[1000px] md:mt-[170px]'>
            <GradientText className='text-center text-[35px] font-[600] leading-[44px] md:text-[44px] md:leading-[57.2px]'>
              Frequently Asked Questions
            </GradientText>
            <div className='mt-[50px] flex flex-col gap-4'>
              {Faqs &&
                Faqs.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
    </RootLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stars = await getGithubStars();
  return {
    props: {
      stars
    },
    revalidate: 3600
  }
}

export default PricingPage;
