# Hack the News

Try working _desktop_ and _mobile_ version at http://hackthenews.surge.sh

Notable technologies used: __React__, __Redux__, __Redux Saga__, __Webpack2__, __Jest__, __Styled Components__, __Ramda__.

### Project setup

1. Make sure you've got at least __Node 6.9.1__ installed
2. Clone the repository `git clone https://github.com/blurbyte/hack-the-news.git`
3. Install [Yarn](https://yarnpkg.com/lang/en/) (optional)
4. Enter project folder and install all modules with `yarn` command or just use `npm install`
5. Start development version of project with `npm start -s` or production one with `npm run build -s`
6. To run tests just use `npm test`

### How it works?

First, app gets a list of top Hacker News stories from regular HN API. After that it picks random story and fetch its comments from [custom HN API](https://github.com/cheeaun/node-hnapi).

WARNING! Project contains hand-crafted logo and icons.
