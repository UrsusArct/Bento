// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Josh',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'b8af7f92f9005002ce44486d490cd9fc',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '51.5074',
  defaultLongitude: '0.1278',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '3',
      name: 'Arch Wiki',
      icon: 'terminal',
      link: 'https://wiki.archlinux.com',
    },
    {
      id: '4',
      name: 'Outlook',
      icon: 'book-open',
      link: 'https://outlook.org',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'video',
  secondListIcon: 'layout',

  // Links
  lists: {
    firstList: [ 
      {
        name: 'Randy',
        link: 'https://www.youtube.com/channel/UCUmLRMERmJrmUtgnbFfknAg',
      },
      {
        name: 'Disrupt',
        link: 'https://www.youtube.com/c/DisruptReality',
      },
	{
        name: 'Dan Corrigan',
        link: 'https://www.youtube.com/c/DanCorrigan', 
      },
      {
        name: 'Taeha Types',
        link: 'https://www.youtube.com/c/TaehaTypes',
      },
    ],
    secondList: [
      {
        name: 'r/unixporn',
        link: 'https://reddit.com/r/unixporn',
      },
      {
        name: 'r/CustomKeyboards',
        link: 'https://reddit.com/r/CustomKeyboards',
      },
      {
        name: 'Geekhack',
        link: 'https://geekhack.org',
      },
      {
        name: 'Thrasher Magazine',
        link: 'https://thrashermagazine.com',
      },
    ],
  },
};
