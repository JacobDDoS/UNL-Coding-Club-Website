'use client';

import { useEffect } from 'react';
import Matter, { World } from 'matter-js';

export default function LandingPage() {
    useEffect(() => {

        const height:number = window.innerHeight;
        const width:number = window.innerWidth;
        var start:boolean = false;

        console.log("x: "+ width + " y: " + height);


        // module aliases
            var Engine = Matter.Engine,
                Events = Matter.Events,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Body = Matter.Body,
                Bodies = Matter.Bodies,
                Composite = Matter.Composite;

            // create an engine
            const engine = Engine.create();
            engine.gravity.scale = .00005;

            // create a renderer
            const render = Render.create({
                element: document.body,  //creates canvas element to render to
                engine: engine,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    background: 'transport',
                    wireframes: false,
                }
            });


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
            
            window.addEventListener('keydown', (event) => {
                if (event.key === " ") {
                    console.log("Space")
                    event.preventDefault();
                    start = !start;
                }
            });

            Events.on(engine, 'beforeUpdate', () => {
                if (!start) return;
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

            window.addEventListener("resize", (handleResize))
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
    
    return () => {
        Render.stop(render);
        Runner.stop(runner);
        render.canvas.remove();
    };


    });

}