import React, { useEffect, createRef } from 'react';
import classes from './ShowAnimation.module.css';

const documentWidth = document.documentElement.clientWidth;
let isMobile = documentWidth <= 720;
const observer = new IntersectionObserver((entry) => {
    entry.forEach(({ target, isIntersecting, intersectionRatio }) => {
        const delay = target.getAttribute('data-delay');
        if (isIntersecting) {
            if (delay) {
                target.style.animationDelay = `${Number(delay) * (isMobile ? 100 : 200) }ms`;
            }
            target.classList.add(classes.show);
        }
    });
});

export const ShowAnimation = ({ children, delay }) => {
    const ref = createRef();
    useEffect(() => {
    }, []);
    useEffect(() => {
        const $ele = ref.current;
        if ($ele) {
            $ele.classList.add(classes.initialize);
            $ele.setAttribute('data-delay', delay);
            observer.observe($ele);
        }
    }, [ref]);
    return React.cloneElement(children, { ...children.props, ref });
}