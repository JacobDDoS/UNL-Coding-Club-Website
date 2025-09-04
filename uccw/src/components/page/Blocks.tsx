'use client';
import { useEffect, useRef } from 'react';
import Matter, { World } from 'matter-js';

export default function Blocks() {
    
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const height:number = window.innerHeight;
        const width:number = window.innerWidth;


        // module aliases
            const Engine = Matter.Engine,
                Events = Matter.Events,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Body = Matter.Body,
                Bodies = Matter.Bodies,
                Composite = Matter.Composite;

            // create an engine
            const engine = Engine.create();
            engine.gravity.scale = 0.00005;

            // create a renderer
            const render = Render.create({
                element: containerRef.current || undefined,  //creates canvas element to render to
                engine: engine,
                options: {
                    width,
                    height,
                    background: 'transparent',
                    wireframes: false,
                }
            });
            render.canvas.style.position = 'fixed';
            render.canvas.style.top = '0';
            render.canvas.style.left = '0';
            render.canvas.style.zIndex = '-5';
            render.canvas.style.pointerEvents = "none";

            //put static box over logo, for bounce.
            /* const box1 = Bodies.rectangle(500, 600, 200, 200, {isStatic: true,render: {
                        sprite: {
                            texture: '/square.png',
                            xScale: 200/ 445,
                            yScale: 200/ 446,
                        } 
                    }}); 


            Composite.add(engine.world, [box1]);*/

            function spawn() {
                const randX = Math.random() * innerWidth;
                const randSize = 20 + Math.random() * 80;
                const randGrav = Math.random() / 50;
                const box = Bodies.rectangle(randX, -100, randSize, randSize, {
                    frictionAir: randGrav,
                    render: {
                        sprite: {
                            texture: '/square.png',
                            xScale: randSize/ 445,
                            yScale: randSize / 446,
                        } 
                    }});
                const spin = (Math.random() - 0.5) * 0.4; //goes too fast sometimes but its funny
                Body.setAngularVelocity(box, spin);
                Composite.add(engine.world, box);
            }

            var last = Date.now();

            Events.on(engine, 'beforeUpdate', () => {
                //if (!start) return;
                const now = Date.now();
                if (now - last > 1000) {
                    spawn();
                    last = now;
                }
            })
            
            // run the renderer
            Render.run(render);
            // create runner
            const runner = Runner.create();
            // run the engine
            Runner.run(runner, engine);


            //maybe use setposition to bring back to top? itd be less random.
            Events.on(engine, 'afterUpdate', () => {
                const bodies = Composite.allBodies(engine.world);
                for (const body of bodies) {
                    const {x, y} = body.position;
                    if (y > height + 1000) {
                        World.remove(engine.world, body);
                        console.log("DELETED");
                    }}
            });

            function handleResize() {
                render.canvas.width = window.innerWidth;
                render.canvas.height = window.innerHeight;
                render.options.height = window.innerHeight;
                render.options.width = window.innerWidth;
                Render.lookAt(render, {
                    min: {x: 0, y: 0},
                    max: {x: innerWidth, y: innerHeight},
                })
            }
            window.addEventListener("resize", (handleResize))

    
    return () => {
        
        Render.stop(render);
        Runner.stop(runner);
        render.canvas.remove();
        window.removeEventListener("resize", handleResize);

    };


    
    });
    return (
        <div ref={containerRef} className='absolute' />
    )

}

