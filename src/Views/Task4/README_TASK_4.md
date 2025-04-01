# Task 4 - # Fixing TypeScript Errors in UserCard Component

## Instructions

The `UserCard` component is currently being used with two different sets of props:

### Option 1:

```jsx
    <UserCard name="John Doe" dob="1990-01-01"/>

```

- Props include:
    - `name`: A full name as a single string.
    - `dob`: Date of birth as a string.

### Option 2:

```jsx
    <UserCard firstName="John" lastName="Doe" dateOfBirth="1980-12-12"/>
```

- Props include:
    - `firstName`: A first name as a string.
    - `lastName`: A last name as a string.
    - `dateOfBirth`: Date of birth as a string.

___

## Complete the Task

Define a type structure for `UserCar` props to support both options.

Run this script to check whether your types are correct

```
npm run task4
```