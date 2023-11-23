// ReactHooks.js

import React from 'react';

const ReactHooks = () => {
    return (
        <div>
            <h2>Let's create React Hooks.</h2>
            <p>

            </p>
        </div>
    );
};

export default ReactHooks;

//Create a basic List component
//use filter,sort and map

//toys
const toys = [
    {
      name: "Chocolate Cake",
      price: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      price: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      price: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      price: 600,
      createdAt: "2022-01-04",
    },
  ];

//filter toys below 500
const toysBelow500 = props.data.filter((toys) => {
    return toys.price < 500;
})
console.log(toysBelow500);
