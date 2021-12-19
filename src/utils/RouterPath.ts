const appPrefix = '';

const routePath = {
  login: `${appPrefix}login`,
  register: `${appPrefix}register`,
  dashboard: {
    index: 'dashboard',
    meetings: 'meetings',
    meetingDetail: 'meeting_detail',
    empty: 'empty',
    profile: 'profile',
    help: 'help',
    // 500: '500',
    // 404: '404',
  },
};

export default routePath;
