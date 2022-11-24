import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto text-lg'>
            <h3 className='text-2xl font-semibold text-center'>Question And Answer:</h3>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>1. What are the different ways to manage a state in a React application?</h4> <br />
                <p>
                    <p>There are four main types of state you need to properly manage in your React apps</p> <br />
                    <li>Local (UI) state – Local state is data we manage in one or another component.</li>
                    <li>Global (UI) state – Global state is data we manage across multiple components.</li>
                    <li>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                    <li>
                        URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>2. How does prototypical inheritance work?</h4> <br />
                <p>Prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                </p>
                <br />
                <p>
                    JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>3.  What is a unit test? Why should we write unit tests?</h4> <br />
                <p>
                    <ul><strong>Unit Testing:</strong> Unit Testing is a type of software testing where individual units or components of a software are tested.</ul><br />
                    <li>To verify the correctness of the code.  </li>
                    <li>To test every function and procedure.</li>
                    <li>To fix bugs early in the development cycle and to save costs.</li>
                    <li>To help the developers to understand the code base and enable them to make changes quickly.</li>
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>4. React vs. Angular vs. Vue?</h4> <br />
                <p>
                    <ul><strong>React: </strong>React is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly.</ul><br />
                    <ul><strong>Angular: </strong> Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</ul><br />
                    <ul><strong>Vue: </strong>Vue may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.</ul><br />
                </p>
            </div>
        </div>
    );
};

export default Blogs;