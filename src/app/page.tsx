// app/page.js
import { Suspense } from "react";
import { CustomMDX } from "../components/mdx-remote";

export default function Home() {
  
//   const source = ` # Welcome to my Example MDX File
// <br />
// This is a **sample** MDX file that demonstrates integration with Next.js using \`Read Next.js Docs\` [Next.Js](https://www.google.com)
// <br/>
// ## Features :

// - Renders Markdown and React components seamlessly.
// - Supports custom components for enhanced rendering capabilities.
// > [Rahul](https://www.jaiyankargupta.com)
//  ![The San Juan Mountains are beautiful!](https://media.istockphoto.com/id/1946223088/photo/portrait-of-an-autistic-girl-playing-with-sensory-toy.jpg?s=1024x1024&w=is&k=20&c=aZF3SMfYNHu38DjV9Upd6dYYhxET5OKgorpzRvWXH58=)



// `;

const source = `
# Step 5: Advanced Features

This step focuses on expanding the functionality of our SQL engine to handle more complex queries and data sources.

## Implementing JOIN Operations :

Add support for joining data from multiple tables. You'll need to implement logic to handle different JOIN types (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN) and specify the join condition based on common columns.

### Example: INNER JOIN Operation:

Implement an INNER JOIN to combine data from 'customers' and 'orders' tables based on matching customer IDs:

\`\`\`javascript
// Example INNER JOIN operation
function innerJoin(customers, orders, key) {
  return customers.map(customer => ({
    ...customer,
    orders: orders.filter(order => order[key] === customer[key])
  }));
}

// Example usage
const customers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const orders = [
  { id: 1, customerId: 1, product: 'Book' },
  { id: 2, customerId: 2, product: 'Pen' }
];

const result = innerJoin(customers, orders, 'id');
console.log(result);
\`\`\`

## Adding Aggregation Functions

Implement common aggregation functions like SUM, AVG, COUNT, MIN, and MAX. These functions operate on a group of rows and calculate a single value based on a specific column. You'll need to consider how to handle \`GROUP BY\` clauses, which group rows based on a specific column value.

### Example: SUM Aggregation Function

Implement a SUM function to calculate the total amount from sales data:

\`\`\`javascript
// Example SUM aggregation function
function sum(column, data) {
  return data.reduce((total, row) => total + row[column], 0);
}

// Example usage
const salesData = [
  { id: 1, amount: 100 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 }
];

const totalSales = sum('amount', salesData);
console.log(totalSales); // Output: 450
\`\`\`

## Expanding WHERE Clause Capabilities



Extend the \`WHERE\` clause to support more complex conditions, including:
<br/>
* **Logical operators:** AND, OR, NOT
* **Comprison operators:** OR, NOT
* **String operations:** LIKE, IN, NOT IN




## Handling Different Data Sources

Expand the engine to support various data source types beyond simple JSON files. This could include:


### Example: Handling CSV Data

Parse CSV data into structured JSON using a library like \`csv-parser\` :

\`\`\`javascript
const csv = require('csv-parser');
const fs = require('fs');
// Example CSV parsing function
function parseCSV(filePath) {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
}

// Example usage
parseCSV('data.csv');
\`\`\`
`;


 

  return (
    <Suspense fallback={<>Loading...</>}>
      <CustomMDX source={source} />
    </Suspense>
  );
}
