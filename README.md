# React Rive Integration Tutorial

This repository contains a tutorial for integrating [Rive](https://rive.app/) animations into a React application. Rive is a powerful tool for creating interactive animations, and this guide will help you set it up and use it effectively in your React projects.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Rive enables developers to create and integrate interactive animations seamlessly. This tutorial demonstrates how to use Rive's React library to add animations to your React applications.

## Prerequisites

Before starting, ensure you have the following:

- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of React

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/react-rive-tutorial.git
cd react-rive-tutorial
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install the Rive React library:

```bash
npm install @rive-app/react-canvas
# or
yarn add @rive-app/react-canvas
```

## Usage

1. Import the Rive component in your React file:

```jsx
import Rive from "@rive-app/react-canvas";
```

2. Add a Rive animation to your component:

```jsx
const App = () => {
  return (
    <div>
      <h1>Welcome to React Rive Tutorial</h1>
      <Rive src="path-to-your-animation.riv" />
    </div>
  );
};

export default App;
```

3. Run your application:

```bash
npm start
# or
yarn start
```

## Examples

This repository includes example animations and components to help you get started. Check the `examples/` directory for sample implementations.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy animating with Rive and React!
