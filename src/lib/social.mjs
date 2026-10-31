const twitterIntent = 'https://twitter.com/intent/tweet';

export function createTweetHref() {
  const message = [
    '🚀 I just started my Journey to Dev with @colbyfayock\n',
    '⚡️ It\'s a FREE 7-week newsletter course to get you started on the right path\n',
    '💯 Each issue focuses on non-tech skills that typically require time & money from a mentor\n',
    '💪 Start your #journeytodev!\n',
    'https://journeyto.dev',
  ];

  return `${twitterIntent}?text=${message.map((line) => encodeURIComponent(line)).join('%0A')}`;
}
