'use client';
import * as React from 'react';

import GradientText from '@/components/common/GradientText';
import SwitchButton from '@/components/common/SwitchButton';
import PricingPlan from '@/components/pricing/Plan';

import Background from '@/app/blog/back';

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

const Faqs = [
  {
    title: 'What is a trigger event?',
    description:
      'A trigger event (also called an event) is a request that kicks off a process in Novu logic engine (API call to /v1/events/trigger for example). A trigger event can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. You are charged for trigger event that starts a process in the logic engine for each unique subscriber.',
  },
  {
    title: 'What is a notification?',
    description:
      'A notification is any message sent over any channel, after Novu logic engine, Novu user preferences, and your configuration calculated and crafted the message. A notification can be sent to an email, In-App notification center, chat, push, and more.',
  },
  {
    title: 'What are the differences between Novu Cloud and Open Source?',
    description:
      'Novu Open source is a technology available under an MIT license, build and maintained by Novu community. You can adapt it to your needs, contribute, or simply use docker files and run it. Novu Cloud is a managed service run, managed, and maintained by Novu, Cloud version is scalable and robust by design, including uptime SLAs, and more business-facing features, that are not available under the Open Source version.',
  },
  {
    title: 'Can I send more than 1 million events a month on Novu Cloud?',
    description:
      'Yes, you absolutely can. Our managed cloud system was built to scale with your usage, so you don’t have to worry about it.',
  },
];

const PricingPage = () => {
  const [opened, setOpened] = React.useState(false);
  const [status, setStatus] = React.useState(true);
  return (
    <>
      <Background />
      <main>
        <section className='mx-auto mt-[40px] flex w-fit flex-col items-center px-5 md:mt-[100px]'>
          <GradientText className=' max-w-[950px] bg-gradient-to-t text-center text-[35px] font-[700] leading-[39px] md:text-[71px] md:leading-[79px]'>
            flexible pricing
            <br className='md:hidden' /> for companies
            <br className='md:hidden' /> and developers
          </GradientText>
          <SwitchButton
            text1='Cloud'
            text2='Self-hosted'
            className='mt-[60px]'
            value={status}
            onChange={(v) => setStatus(v)}
          />
          <div className='mx-auto mt-[60px] grid grid-cols-1 items-center justify-center gap-x-[14px] gap-y-3 md:grid-cols-2 xl:grid-cols-4'>
            {PricePlans &&
              PricePlans.map((plan, index) => (
                <PricingPlan
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  actionTitle={plan.actionTitle}
                  content={plan.content}
                  defaultAction={plan.defaultAction}
                  key={index}
                />
              ))}
          </div>
          <div className='mt-[170px] w-full max-w-[1000px]'>
            <GradientText className='text-center text-[44px] font-[600]'>
              Frequently Asked Questions
            </GradientText>
            <div className='mt-[50px] flex flex-col gap-4'>
              {Faqs &&
                Faqs.map((item, index) => (
                  <div
                    className='flex flex-col gap-[12px] rounded-[7px] border border-[#FFFFFF66] bg-transparent px-[22px] py-[16px]'
                    key={index}
                  >
                    <div className='flex items-center justify-between text-[18px]'>
                      <p className=''>{item.title}</p>
                      <button
                        className='text-[18px]'
                        onClick={() => setOpened(!opened)}
                      >
                        {opened ? 'x' : '+'}
                      </button>
                    </div>
                    {opened && (
                      <p className='text-[16px] text-[#A7A7A7] transition duration-150 ease-in-out'>
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
