// taken from http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

const epochs = [
  ['yr', 31536000],
  ['mo', 2592000],
  ['day', 86400],
  ['hr', 3600],
  ['min', 60],
  ['sec', 1]
];


function duration(timeAgoInSeconds) {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / seconds);

    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name
      };
    }
  }
}

export default function timestamp(date) {
  const timeAgoInSeconds = Math.floor((Date.now() - date) / 1000);
  const {interval, epoch} = duration(timeAgoInSeconds);
  const suffix = interval === 1 ? '' : 's';

  return `${interval} ${epoch}${suffix}`;
}
