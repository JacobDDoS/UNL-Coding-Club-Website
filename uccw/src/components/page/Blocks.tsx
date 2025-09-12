'use client';
import { useEffect, useRef } from 'react';
import Matter, { World } from 'matter-js';

let initialized = false;

export default function Blocks() {
    
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        /* if (initialized) return;
        initialized = true */


        const width: number = containerRef.current?.offsetWidth || 200;
        const height: number = containerRef.current?.offsetHeight || 400;


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
            render.canvas.style.position = 'absolute';
            render.canvas.style.top = '0';
            render.canvas.style.left = '0';
            render.canvas.style.width = '100%';
            render.canvas.style.height = '100%';
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
                const rectWidth = containerRef.current?.offsetWidth || 200;
                const randX = Math.random() * rectWidth;
                const randSize = 20 + Math.random() * 80;
                const randGrav = Math.random() / 50;
                const box = Bodies.rectangle(randX, -100, randSize, randSize, {
                    frictionAir: randGrav,
                    chamfer: {
                        radius: 9
                    },
                    render: {
                        sprite: {
                            texture: '/square.png',
                            xScale: randSize / 445,
                            yScale: randSize / 446,
                        } 
                    }});
                const spin = (Math.random() - 0.5) * 0.4;
                Body.setAngularVelocity(box, spin);
                Composite.add(engine.world, box);
            }

            let frameCount = 0;
            let animationId: number;

            function animate() {
                frameCount++;
                if (frameCount % 60 === 0) {
                    spawn();
                }
                animationId = requestAnimationFrame(animate);
            }
            
            // Start the animation loop
            animate();
            
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
                    const { y } = body.position;
                    if (y > height + 1000) {
                        World.remove(engine.world, body);
                        console.log("DELETED");
                    }}
            });

            function handleResize() {
                const newWidth = containerRef.current?.offsetWidth || 200;
                const newHeight = containerRef.current?.offsetHeight || 400;
                render.canvas.width = newWidth;
                render.canvas.height = newHeight;
                render.options.width = newWidth;
                render.options.height = newHeight;
                Render.lookAt(render, {
                    min: { x: 0, y: 0 },
                    max: { x: newWidth, y: newHeight },
                });
            }
            window.addEventListener("resize", handleResize)

    
    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
    };


    
    },[]);
    return (
        <div
            ref={containerRef}
            className="absolute inset-0"
        />
    )

}

