export const fetchedStory = {
  id: 1234,
  title: 'Story title',
  comments_count: 35,
  domain: 'domain.com',
  points: 33,
  time: 1488043640,
  time_ago: '2 days ago',
  type: 'link',
  url: 'http://storyurl.com',
  user: 'taylorswift',
  comments: []
};

export const storeStory = {
  id: 1234,
  title: 'Story title',
  descendants: 35,
  points: 33,
  time: 1488043640,
  url: 'http://storyurl.com',
  user: 'taylorswift',
  children: []
};

export const fetchedComments = {
  comments: [
    {
      id: 45678,
      content: '45678 post',
      time: 1488043661,
      time_ago: '2 days ago',
      user: 'justinbiber',
      comments: [],
      level: 0
    },
    {
      id: 56784,
      content: '56784 post',
      time: 1488047165,
      time_ago: '1 day ago',
      user: 'adele',
      comments: [
        {
          id: 89045,
          content: '89045 post',
          time: 1488058040,
          time_ago: '1 day ago',
          user: 'legend27',
          comments: [],
          level: 1
        }
      ],
      level: 0
    }
  ]
};

export const storeComments = {
  '45678': {
    text: '45678 post',
    time: 1488043661,
    user: 'justinbiber',
    children: [],
  },
  '56784': {
    text: '56784 post',

    time: 1488047165,
    user: 'adele',
    children: [89045]
  },
  '89045': {
    text: '89045 post',
    time: 1488058040,
    user: 'legend27',
    children: []
  }
};
