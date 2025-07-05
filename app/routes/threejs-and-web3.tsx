import { Link } from 'react-router';
import { lazy, Suspense } from 'react';

// Lazy load components for better performance
const MovingObject = lazy(() => import('../components/chicken'));
const MovingObject1 = lazy(() => import('../components/Cloud'));

export default function Article4() {
  return (
    <div>
      <div className="relative">
        <div className="mx-3 lg:mx-36">
          
          {/* Lazy loaded component with better fallback */}
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-200 rounded"></div>}>
            <MovingObject />
          </Suspense>
          
          <h1 className="tracking-light text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
            ThreeJS, the old Web3?
          </h1>

          <div>
            <p className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
              ThreeJS has been around a while. <br />
              So can it be considered part of Web3?
            </p>
            <br />
            
            <p className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
              Maybe its better to think of what the baseline of web3 is. Maybe its like a cusp. 
              Sort of like being a millenial and GenZ cusp kid.
            </p>
            <br />
            <br />
            
            <p className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
              For the docs on ThreeJS, you can visit
              <a 
                href="https://threejs.org/" 
                className="text-blue-500 hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}here
              </a>.
            </p>
            
            {/* Lazy loaded component with better fallback */}
            <Suspense fallback={<div className="h-32 animate-pulse bg-gray-200 rounded my-4"></div>}>
              <MovingObject1 />
            </Suspense>
            
            <br />
            
            <p className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold">
              For some solid advice on film sound and sound mixers in NYC, you can visit
              <a 
                href="https://www.nycsoundguy.com" 
                className="text-blue-500 hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}NYC Sound Guy here
              </a>.
            </p>
            
            <p className="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl">
              Go back{" "}
              <Link
                to="/"
                className="text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl hover:text-blue-700 transition-colors"
              >
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}