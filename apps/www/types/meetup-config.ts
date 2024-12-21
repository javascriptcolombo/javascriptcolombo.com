import {ReactNode} from 'react';

export interface MeetupConfig {
  hero: {
    showNextMeetupSummary: boolean;
    title: ReactNode;
    tagline: ReactNode;
  };
  links: {
    meetup: {
      url: string;
      target: string;
    };
    source: {
      github: {
        url: string;
        target: string;
      };
    };
  };
  meetups: {
    next: {
      date: string;
      time: string;
      location: string;
    };
  };
  sponsor: {
    mainSponsor: {
      name: ReactNode;
      website: string;
    };
  };
  theme: {
    defaultTheme: 'system' | 'light' | 'dark';
    showThemeSwitcher: boolean;
  };
}
