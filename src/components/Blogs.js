import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const posts = [
        {
            quetion: "How does react works?",
            ans: "React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browsers DOM. React JS allows complete flexibility to the developer. You can use it for creating SPAs, mobile or hybrid apps, even a TV application. You can add as many external libraries and tools as required and build a massive, complicated web application. React JS will ensure your app performance is optimized."
        },
        {
            quetion: "What is the different between props and state?",
            ans: "Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if youre using JSX, the more familiar tag attributes. props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes. "
        },
        {
            quetion: "What can we do with use effect API without data loading?",
            ans: "Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them.According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed. This hook uses an array of 'dependencies': variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body. This behaviour is especially useful for cleaning code that is already running before run it again, which enable us to prevent memory leaks.There is an interesting behaviour with this hook when we use non-primitive JavaScript data types as dependencies (e.g., arrays, objects, functions). With primitive values, such as numbers and strings, we can define a variable from another variable, and they will be the same",
        }
    ]
    return (
        <div className='blogs py-5'>
            <h4 style={{color: "var(--primary-color)"}}>Blog section</h4>
            {
                posts.map(post => <Blog post={post}></Blog>)
            }
        </div>
    );
};

export default Blogs;