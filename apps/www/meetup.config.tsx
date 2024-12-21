import {MeetupConfig} from '@/types/meetup-config';
import CoffeeBeans from '@/icons/CoffeeBeans';
import WSO2 from './icons/WSO2';

const meetupConfig: MeetupConfig = {
  hero: {
    showNextMeetupSummary: false,
    title: 'JavaScript Colombo',
    tagline: (
      <>
        Let&apos;s meetup in Colombo, grab a <span className="underlined">coffee</span>
        <CoffeeBeans height={28} width={28} /> and talk{' '}
        <span>
          <code className="font-mono">`</code>
          <span className="font-bold">JavaScript</span>
          <code className="font-mono">`</code>
        </span>
      </>
    ),
  },
  meetups: {
    next: {
      date: '2025-01-25',
      time: '18.00',
      location: 'WSO2, Colombo 4, Sri Lanka',
    },
  },
  sponsor: {
    mainSponsor: {
      name: <WSO2 height={20} width={40} />,
      website: 'https://wso2.com',
    },
  },
  theme: {
    defaultTheme: 'dark',
    showThemeSwitcher: false,
  },
  links: {
    meetup: {
      url: 'https://www.meetup.com/JavaScript-Colombo',
      target: '_blank',
    },
    source: {
      github: {
        url: 'https://github.com/javascript-colombo/javascriptcolombo.com',
        target: '_blank',
      },
    },
  },
};

export default meetupConfig;
