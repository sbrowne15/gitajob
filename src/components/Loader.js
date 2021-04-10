// Using React Portal to diplay overlay while loading
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Loader = (props) => {
    const [node] = useState(document.createElement('div')); // Create div to add loader message into
    const loader = document.querySelector('#loader');

    useEffect(() => {
        loader.appendChild(node).classList.add('message'); // adding message class to div
    }, [loader, node]);

    useEffect(() => {
        if (props.show) {
            loader.classList.remove('hide'); // Remove hide class based on show prop from HomePage
            document.body.classList.add('loader-open'); // Add loader-open class to body tag (disables scrolling)
        } else {
            loader.classList.add('hide'); // Add hide class based on show prop from HomePage
            document.body.classList.remove('loader-open'); // Remove loader-open class from body tag (enables scrolling)
        }
    }, [loader, props.show]);

    return ReactDOM.createPortal(props.children, node); // Because props.children is used anything between Loader tags on HomePage will be displayed.
};                                                      // This is because Loader sits on top of the App div. i.e. It is a separate div in public/index.html

export default Loader;