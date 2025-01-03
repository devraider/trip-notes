# Trip Notes ✈️ 🗒️

## Motivation

The "Trip Notes" project is a ReactJS-based application designed to help users plan their travels.

The app is meant to assist users in taking note of all items they need for a vacation. You can add multiple items, input them manually, and even delete or sort them to keep everything organized.

In this project, I practiced several key React concepts, including:

- **State Lifting:** Moving state to a higher component to manage shared data across child components.
- **Data Flow**: Ensuring smooth and consistent flow of data between components.
- **Controlled Form Elements**: Managing form inputs through controlled components to ensure data consistency.
- **Props**: Passing data between components through props to enable dynamic rendering.

This project also helped me gain practical experience in developing a fully-functional app with interactive features.

## Features ✨

1. **ReactJS** - Utilizes React version 18.3 for building user interfaces.
2. **CSS Modules** - CSS Modules for component-scoped styling, ensuring modular and maintainable CSS.
3. **JavaScript (ES6)** - JavaScript features such as array methods, template literals, and destructuring for cleaner and more efficient code.
4. **Item Management** - Users can easily add, delete, and sort items for their trip, making it simple to stay organized.
5. **Trip Organization** - Features like sorting and filtering allow users to efficiently manage their trip notes, packing items.
6. **Real-Time Stats** - The Stats component provides real-time insights on trip preparation, including: - The total number of items added. - The percentage of packed items to help users track progress.
   Dynamic updates based on user interaction, ensuring statistics are always accurate.
7. **Interactive UI** - Dynamic rendering based on user input means a highly interactive experience. Sorting items, adding new ones, and updating statistics happens in real-time with minimal page refreshes.

## Component Structure 🪧

The application is structured to encourage reusability and maintainability, with components designed to handle specific tasks in the user interface. Here’s a closer look at the components:

### Main Components:

#### 1. `Logo`

This is a simple presentational component that displays the logo of the application.

#### 2. `Form`

This omponent allows users to input items they need for their trip. It uses the onAddItems handler function passed down from its parent component to add new items to the list. It’s designed to collect user input, such as the item name and details, and trigger the addition of these items to the state.

#### 3. `PackingList`

This component manages the display of all packing items. It receives the items array as props and handles removing items (`onRemoveItem`), toggling their packed status (`onToggleItem`), and clearing all items (`onClearItems`). This component is responsible for rendering the list of items and passing necessary actions down to child components.

#### 4. `Stats`

Displays statistics on the number of items packed, total items, and the percentage packed. It receives the items prop and uses it to compute and display relevant statistics about the trip.

## Demo / Walkthrough

## How to Get and Run the Application 🛠️

### 1. Clone the application

```bash
git clone https://github.com/devraider/trip-notes.git
cd trip-notes
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run application in developemnt mode

```bash
npm start
```

### 4. Build for Production

```bash
npm run build
```

## Credits

- [**Facebook React Team**](https://github.com/facebook/react) for great documentation: [Learn React from Docs](https://react.dev/learn)
- 🧑‍🏫 [**Jonas Schmedtmann**](https://github.com/jonasschmedtmann)
- 🎓 [The Ultimate React Course 2024: React, Next.js, Redux & More](https://www.udemy.com/course/the-ultimate-react-course/)
