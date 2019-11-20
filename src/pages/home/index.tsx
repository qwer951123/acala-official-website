import React, { useRef, useEffect, RefObject } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Container from '@/components/container';
import Cover from '@/pages/home/components/cover';
import Features from '@/pages/home/components/features';
import Benefits from '@/pages/home/components/benefits';
import RoadMap from '@/pages/home/components/roadmap';
import OnLaunch from '@/pages/home/components/onlaunch';
import Involve from '@/pages/home/components/involve';
import dot from '@/assets/dot.svg';
import classes from './index.module.scss';

const emptyFn: () => void = () => { };

const useBackground = (ref: RefObject<HTMLCanvasElement>) => {
    useEffect(() => {
        if (ref.current === null) return emptyFn;

        const $canvas: HTMLCanvasElement = ref.current;
        const $img: HTMLImageElement = document.createElement('img');
        const ctx = $canvas.getContext('2d') as CanvasRenderingContext2D;
        const WIDTH = document.documentElement.clientWidth;
        const HEIGHT = document.documentElement.offsetHeight;
        const MIN_HEIGHT = 1000;
        const DECORATION_COUNT = 12;
        const DOT_SIZE = 10;

        /* set canvas size */
        $canvas.width = WIDTH;
        $canvas.height = HEIGHT;

        $img.setAttribute('src', dot);
        $img.addEventListener('load', () => {
            for (let x = 0; x <= DECORATION_COUNT; x++) {
                const position = {
                    x: Math.random() * WIDTH,
                    /* get random number in [MIN_HEIGHT, HEIGHT - 2 * MIN_HEIGHT] */
                    y: Math.random() * (HEIGHT - 2 * MIN_HEIGHT) + MIN_HEIGHT,
                }
                ctx.drawImage($img, position.x, position.y, DOT_SIZE, DOT_SIZE);
            }
        });
        return emptyFn;
    }, [ref])
}

const Home: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useBackground(canvasRef);

    return (
        <div className={classes.root}>
            <Container>
                <Header />
                <Cover />
                <Features />
                <Benefits />
                <RoadMap />
                <OnLaunch />
                <Involve />
                <Footer />
            </Container>
            <canvas className={classes.decoration} ref={canvasRef} />
        </div>
    );
};

export default Home;
