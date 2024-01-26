# DataFlex

DataFlex is a lightweight JavaScript library designed to simplify and enhance the manipulation of both arrays and objects. It provides a flexible and intuitive API for common data operations, making data manipulation tasks effortless.

## Features

- **Unified Operations:** Seamlessly manipulate both arrays and objects using a unified set of operations.
- **Flexibility:** Enjoy the flexibility to perform a wide range of data modifications with ease.
- **Simplified Syntax:** Utilize a straightforward syntax for common tasks, promoting code clarity and conciseness.

## Installation

Install DataFlex using npm:

```bash
npm install data-flex
```

## Usage

```typescript
const dataFlex = require('data-flex');

// Example: Perform a simple modification on an array
const originalArray = [1, 2, 3];
const modifiedArray = dataFlex.push(originalArray, 4);

// Example: Update a property in an object within an array
const originalObjectsArray = [{ id: 1, name: 'Object 1' }, { id: 2, name: 'Object 2' }];
const updatedObjectsArray = dataFlex.at(1, { name: 'Updated Object' }, originalObjectsArray);

// Example: Remove an element from an array by index
const arrayToRemoveFrom = [1, 2, 3, 4, 5];
const newArrayWithoutElement = dataFlex.removeAtIndex(arrayToRemoveFrom, 2);

// Example: Update a specific field in all objects of an array
const objectsArrayToUpdate = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
];
const newArrayWithUpdatedField = dataFlex.updateFieldInAllObjects(
  objectsArrayToUpdate,
  'name',
  'New Name'
);

// Example: Find an object in an array by a specific key
const arrayToSearch = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const foundObject = dataFlex.findObjectByKey(arrayToSearch, 'name', 'Bob');

// Example: Sort an array of objects by a specific key in descending order
const arrayToSort = [
  { id: 3, name: 'Charlie' },
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const sortedArrayDescending = dataFlex.sortByKey(arrayToSort, 'id', false);

// Example: Filter objects in an array based on a condition
const arrayToFilter = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
  { id: 3, name: 'Object 3' },
];
const filteredArray = dataFlex.filterObjectsByCondition(arrayToFilter, obj => obj.id > 1);

// Example: Update a specific field in an object by index
const arrayToUpdateField = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
];
const newArrayWithUpdatedFieldAtIndex = dataFlex.updateFieldInObject(
  arrayToUpdateField,
  0,
  'name',
  'Updated Name'
);
```
