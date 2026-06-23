// REACT NOTES - COMPREHENSIVE OVERVIEW

// ============================================
// WHAT IS REACT?
// ============================================
// - React is a JavaScript library for building user interfaces
// - Created and maintained by Facebook (Meta)
// - Used for building single-page applications (SPAs)
// - Component-based architecture
// - Declarative programming approach

// ============================================
// KEY FEATURES OF REACT
// ============================================
// 1. COMPONENT-BASED ARCHITECTURE
//    - UI is broken down into reusable components
//    - Each component manages its own state and logic
//    - Components can be nested and composed

// 2. VIRTUAL DOM
//    - React creates a virtual representation of the DOM
//    - Updates are first made to virtual DOM
//    - React calculates the most efficient way to update real DOM
//    - Results in better performance

// 3. JSX (JavaScript XML)
//    - Syntax extension that looks like HTML
//    - Allows writing HTML-like code in JavaScript
//    - Gets compiled to regular JavaScript

// 4. ONE-WAY DATA BINDING
//    - Data flows in one direction (parent to child)
//    - Makes data flow predictable and easier to debug

// 5. DECLARATIVE
//    - You describe what the UI should look like
//    - React handles the how (DOM updates)

// ============================================
// REACT COMPONENTS
// ============================================
// Two types of components:

// 1. FUNCTIONAL COMPONENTS (Modern approach)
//    - JavaScript functions that return JSX
//    - Can use Hooks for state and lifecycle

// 2. CLASS COMPONENTS (Legacy approach)
//    - ES6 classes that extend React.Component
//    - Have lifecycle methods
//    - Use this.state and this.setState

// ============================================
// REACT HOOKS (Introduced in React 16.8)
// ============================================
// - Allow using state and other React features in functional components
// - Common hooks:
//   * useState - for managing component state
//   * useEffect - for side effects (API calls, subscriptions)
//   * useContext - for accessing context
//   * useRef - for accessing DOM elements
//   * useMemo - for memoizing expensive calculations
//   * useCallback - for memoizing functions
//   * useReducer - for complex state management

// ============================================
// STATE AND PROPS
// ============================================
// STATE:
// - Internal data managed by component
// - Mutable (can be changed)
// - Changes trigger re-renders

// PROPS:
// - Data passed from parent to child
// - Immutable (read-only)
// - Used for component communication

// ============================================
// LIFECYCLE METHODS (Class Components)
// ============================================
// Mounting: componentDidMount()
// Updating: componentDidUpdate()
// Unmounting: componentWillUnmount()

// ============================================
// REACT ECOSYSTEM
// ============================================
// - React Router - for routing/navigation
// - Redux/Context API - for state management
// - React Native - for mobile app development
// - Next.js - for server-side rendering
// - Create React App - for quick project setup

// ============================================
// ADVANTAGES OF REACT
// ============================================
// - Reusable components
// - Fast rendering with Virtual DOM
// - Strong community and ecosystem
// - SEO-friendly (with SSR)
// - Easy to learn and use
// - Backed by Facebook/Meta

// ============================================
// COMMON PATTERNS
// ============================================
// - Higher-Order Components (HOC)
// - Render Props
// - Custom Hooks
// - Context API for global state
// - Controlled vs Uncontrolled components