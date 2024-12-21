import meetupConfig from '@/meetup.config';
import {MeetupConfig} from '@/types/meetup-config';

export interface UseMeetupConfig {
  config: MeetupConfig;
}

const useMeetupConfig = (): UseMeetupConfig => {
  return {
    config: meetupConfig,
  };
};

export default useMeetupConfig;
