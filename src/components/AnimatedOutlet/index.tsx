import { getRouterContext, Outlet, useMatches } from '@tanstack/react-router';
import { easeInOut, motion, useIsPresent, type Direction, type MotionProps, type Variants } from 'framer-motion';
import { cloneDeep } from 'lodash';
import { forwardRef, useContext, useRef } from 'react';

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

  return (
    <motion.div
      ref={ref}
      className='fixed top-0 left-0 h-screen w-full overflow-auto'
      initial='closed'
      animate='open'
      exit='close'
      variants={caseVariants}
      transition={{ bounce: 0, duration: 0.7, ease: easeInOut }}
      {...props}
    >
      <RouterContext.Provider value={renderedContext}>
        <Outlet />
      </RouterContext.Provider>
    </motion.div>
  );
});

export default AnimatedOutlet;
