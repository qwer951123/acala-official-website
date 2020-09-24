import React, { useEffect, createRef, useCallback } from 'react';
import classes from './Hiring.module.css';
import { Button } from '../ui-components/Button';
import { Container } from '../ui-components/Container';

export const Hiring = () => {
    const ref = createRef();

    const openBlog = useCallback(() => {
        window.open('https://medium.com/acalanetwork');
    }, []);

    useEffect(() => {
        if (!ref.current) return;

        const $script = document.createElement('script');

        $script.setAttribute('src', 'https://angel.co/javascripts/embed_jobs.js');
        $script.setAttribute('id', 'angellist_embed');
        $script.setAttribute('data-startup', 'acala-network');

        ref.current.appendChild($script);
    }, [ref]);
    return (
        <section className={classes.root}>
            <div className={classes.header}>
                <p className={classes.title}>Want to Build the Future of Finance?</p>
                <p className={classes.title}>Build with Acala</p>
                <Button className={classes.button}>View Our Current Opening</Button>
            </div>
            <Container className={classes.jobs} ref={ref}>
                <p className={classes.subTitle}>Who we are looking for</p>
            </Container>

            <Container className={classes.concat}>
                <p className={classes.subTitle}>Want to learn more about the work we do?</p>
                <Button className={classes.blogBtn} onClick={openBlog}>READ OUR BLOG</Button>
                <p className={classes.getInTouch}>Or <a href='mailto:hello@acala.network' target='_blank' rel="noopener noreferrer">get in touch</a> with us</p>
            </Container>
        </section>
    );
};
