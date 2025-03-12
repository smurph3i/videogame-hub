# [Video-Game HUB](https://videogame-hub-nine.vercel.app/)

Video Game Hub is a React application that allows users to browse and search for video games by genre, platform, and other criteria. The application uses Chakra UI for styling and Axios for data fetching.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Hooks](#hooks)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/videogame-hub.git
cd videogame-hub
npm install
```

## Usage

To run the application in development mode, use the following command:

```sh
npm start
```

This will start the development server and open the application in your default browser.

To build the application for production, use the following command:

```sh
npm run build
```

This will create a `build` directory with the production build of the application.

## Project Structure

The project structure is organized as follows:

```
videogame-hub/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── GameCard.tsx
│   │   ├── GameCardContainer.tsx
│   │   ├── GameCardSkeleton.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── GenreList.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlatformSelector.tsx
│   │   ├── SortSelector.tsx
│   ├── data/
│   │   ├── genres.ts
│   │   ├── platforms.ts
│   ├── entities/
│   │   ├── Genre.ts
│   │   ├── Platform.ts
│   │   ├── Game.ts
│   │   ├── Publisher.ts
│   │   ├── Screenshot.ts
│   │   ├── Trailer.ts
│   ├── hooks/
│   │   ├── useGame.ts
│   │   ├── useGames.ts
│   │   ├── useGenre.ts
│   │   ├── useGenres.ts
│   │   ├── usePlatform.ts
│   │   ├── usePlatforms.ts
│   │   ├── useScreenshot.ts
│   │   ├── useTrailers.ts
│   ├── pages/
│   │   ├── Layout.tsx
│   │   ├── HomePage.tsx
│   │   ├── GameDetailPage.tsx
│   │   ├── ErrorPage.tsx
│   ├── services/
│   │   ├── api-client.ts
│   │   ├── image-url.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── theme.ts
│   ├── routes/
│   │   ├── index.ts
│   ├── index.css
│   ├── index.tsx
├── package.json
├── README.md
```

## Components

- **GameCard**: Displays information about a single game.
- **GameCardContainer**: A container component for `GameCard`.
- **GameCardSkeleton**: A skeleton loader for `GameCard`.
- **GameGrid**: Displays a grid of game cards.
- **GameHeading**: Displays the heading for the game list.
- **GenreList**: Displays a list of game genres.
- **Navbar**: The navigation bar component.
- **PlatformSelector**: A component for selecting game platforms.
- **SortSelector**: A component for selecting the sort order of games.

## Hooks

- **useData**: A custom hook for fetching data from an API.
- **useGames**: A custom hook for fetching game data based on a query.
- **useGenre**: A custom hook for fetching genre data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

```

```
