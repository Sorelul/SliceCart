# 🍕 SliceCart - Pizza Ordering App

SliceCart is a modern web application built with React that simulates a pizza ordering system. Users can browse a menu, add items to cart, place orders with delivery information, and track their orders. The application features a clean, responsive design with a focus on user experience.

## 🚀 Features

- **User Authentication**: Simple username-based authentication
- **Menu Browsing**: Browse through available pizzas with details and prices
- **Shopping Cart**: Add, remove and update quantities of items in cart
- **Address Location**: Get user's current location for delivery
- **Order Placement**: Complete the ordering process with delivery details
- **Order Tracking**: Track orders with estimated delivery time
- **Order Lookup**: Search for orders by order number
- **Priority Orders**: Option to prioritize orders for faster delivery

## 🛠️ Technologies Used

### Core Technologies

- **React 18**: UI development with the latest React features
- **Redux Toolkit**: State management for predictable state container
- **React Router**: Navigation and routing with data loading capabilities
- **Tailwind CSS**: Utility-first CSS framework for styling

### Additional Libraries & Tools

- **@reduxjs/toolkit**: Advanced Redux tooling for efficient state management
- **react-redux**: React bindings for Redux
- **react-router-dom**: DOM bindings for React Router with loaders and actions
- **Vite**: Next generation frontend tooling for fast development and building
- **ESLint**: Code linting for identifying problematic patterns
- **Prettier**: Code formatting for consistent style

## 🏗️ Architecture

The application follows a feature-based architecture with a clear separation of concerns:

### Directory Structure

```
src/
├── features/          # Feature-based modules
│   ├── cart/          # Cart management
│   ├── menu/          # Menu display
│   ├── order/         # Order creation and management
│   └── users/         # User authentication
├── services/          # API services
├── ui/                # Reusable UI components
├── utilities/         # Helper functions
└── store.js           # Redux store configuration
```

### State Management

- Redux is used for global state management with separate slices for:
  - **User information**: Username and geolocation data
  - **Cart**: Items, quantities, and pricing

### Routing

- React Router handles navigation with loader and action functions for data fetching and mutations
- Each route corresponds to a specific view in the application

## 🌟 Key Implementation Details

### Geolocation Integration

The app uses the browser's Geolocation API to fetch the user's current coordinates, which are then converted to a readable address using a reverse geocoding service.

```javascript
// Fetching user's geolocation
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Used with Redux async thunk for address fetching
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    // ...fetch address from coordinates
  },
);
```

### Cart Management

Cart management is handled through Redux with actions for adding, removing, and updating items:

```javascript
// Cart slice reducers
reducers: {
  addItem(state, action) {
    state.cart.push(action.payload);
  },
  deleteItem(state, action) {
    state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
  },
  increaseItemQuantity(state, action) {
    const item = state.cart.find((item) => item.pizzaId === action.payload);
    item.quantity++;
    item.totalPrice = item.quantity * item.unitPrice;
  },
  // ...additional reducers
}
```

### API Integration

The application communicates with a backend API for menu data and order management:

```javascript
// Example API call for getting menu items
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error('Failed getting menu');
  const { data } = await res.json();
  return data;
}
```

## 🚦 Getting Started

### Prerequisites

- Node.js 14.0.0 or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Sorelul/slicecart.git
cd slicecart
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Build for production

```bash
npm run build
# or
yarn build
```

## 📱 Usage

1. Start by entering your name on the home page
2. Browse the menu and add items to your cart
3. View your cart and proceed to checkout
4. Fill in your delivery details (with optional geolocation)
5. Place your order and receive an order number
6. Track your order status by searching for your order number

## 🙏 Acknowledgements

- Pizza menu API provided by [React Fast Pizza API](https://react-fast-pizza-api.onrender.com/api)
- Geocoding services by [Big Data Cloud](https://api.bigdatacloud.net/)
- Font "Big Shoulders Stencil" from Google Fonts

---

Built with ❤️ and 🍕 by Cotuna Sorin
