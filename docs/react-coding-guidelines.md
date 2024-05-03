# Import Statements

The order of imports is as follows:

- React
  - To differentiate between React hooks and hooks created by engineers, the React namespace is always used.
  - Example: React.useState, React.useEffect, React.useRef, etc.
- External libraries
- Customized Components
- Images
- CSS
- Utilities
- API calls

Separate the groups with a breakline.

```
import React from 'react'

import Dialog from 'mui';

import Avatar from './avatar/avatar';
import Badge from "./badge/badge";
import Card from './card/card';
import Footer from './footer/footer';
import Header from './header/header';

import nocheEstrellada from "./nocheEstrellada.jpg"

import {getDate} from './utilities/date';

import {getData} from '../../redux/slices';

import './App.css';
```

# React Container Pattern

## Description

The Container Component pattern (or simply Component pattern) ensures to separate the data fetching logic, managing state from the presentational part.

The presentational part has got a dumb name, dumb component. It is because the responsibility of the presentational part is just to render the information passed to it.

The smart work of data fetching, working on it, and state management falls as the responsibility of the container component.

## Responsibilities

### Configurator container React components

Container components have the following responsibilities:

- **Data**

  - Use Redux slices to fetch data
  - Manipulate/normalize data if necessary
  - Pass data it _children_ view components

- **State**

  - Keep state for _children_ controlled-components

- **Components**
  - Return children _view_ components

### Other common patterns to be used within a Container

- **State Reducer Pattern** - The State Reducer Pattern inverts control over the state management if your hook and/or component to the developer using it so they can control the state changes that happen when dispatching events.
  - https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks

## Child components

Child components are exclusively View components with NO KNOWLEDGE about the business. They have the following responsibilities:

- **Presentation**

  - Child components are responsible for drawing UI elements along with data passed in via props

- **State**
  - Child components keep very little-to-No state.
  - Child components trigger callback functions from their parent containers when element events happen. (onClick, onChange, etc)
