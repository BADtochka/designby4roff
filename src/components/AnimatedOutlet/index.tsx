import { getRouterContext, Outlet, useMatches } from '@tanstack/react-router';
import { easeInOut, motion, useIsPresent, type Direction, type MotionProps, type Variants } from 'framer-motion';
import { cloneDeep } from 'lodash';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';

type AnimatedOutletProps = MotionProps & {
  direction?: Direction;
};

const AnimatedOutlet = forwardRef<HTMLDivElement, AnimatedOutletProps>(({ direction, ...props }, ref) => {
  const isPresent = useIsPresent();

  const matches = useMatches();
  const prevMatches = useRef(matches);

  const RouterContext = getRouterContext();
  const routerContext = useContext(RouterContext);

  let renderedContext = routerContext;

  if (isPresent) {
    prevMatches.current = cloneDeep(matches);
  } else {
    renderedContext = cloneDeep(routerContext);
    renderedContext.__store.state.matches = [
      ...matches.map((m, i) => ({
        ...(prevMatches.current[i] || m),
        id: m.id,
      })),
      ...prevMatches.current.slice(matches.length),
    ];
  }

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isPresent) {
      setIsOpen(false);
    }
  }, [isPresent]);

  const caseVariants: Variants = {
    closed: {
      y: '100%',
      // opacity: 0
    },
    open: { y: '0%', opacity: 1 },
    close: {
      y: '100%',
      opacity: 0,
      overflow: 'hidden',
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const pointerEventsValue = isOpen && isPresent ? 'auto' : 'none';

  return (
    <motion.div
      ref={ref}
      className='fixed top-0 left-0 h-screen w-full overflow-auto'
      initial='closed'
      animate={isPresent ? 'open' : 'closed'}
      exit='close'
      variants={caseVariants}
      transition={{ bounce: 0, duration: 0.7, ease: easeInOut }}
      onAnimationStart={(definition)=>{if(definition==='open')setIsOpen(true);else if(definition==='close'||definition==='closed')setIsOpen(false);}}
      onAnimationComplete={(definition)=>{if(definition==='close'||definition==='closed')setIsOpen(false);else if(definition==='open')setIsOpen(true);}}
      style={{ pointerEvents: pointerEventsValue, ...props.style }}
      {...props}
    >
      <RouterContext.Provider value={renderedContext}>
        <Outlet />
      </RouterContext.Provider>
    </motion.div>
  );
});

export default AnimatedOutlet;
