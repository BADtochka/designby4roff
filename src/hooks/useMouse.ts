import { CursorOptions } from '@/types/CursorOptions';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useResolution } from './useResolution';

interface MouseState {
  x: number;
  y: number;
  elementX: number;
  elementY: number;
  elementPositionX: number;
  elementPositionY: number;
}

export const useMouse = () => {
  const { isDesktop } = useResolution();
  const DEFAULT_CURSOR_OPTIONS: CursorOptions = { expanded: false, invert: false, hide: false };
  const [cursorOptions, setOptions] = useState<CursorOptions>({ ...DEFAULT_CURSOR_OPTIONS, content: '' });
  const setCursorOptions = (options: CursorOptions) => setOptions((prev) => ({ ...prev, ...options }));
  const lastHoveredElement = useRef<HTMLElement>(null);
  const [state, setState] = useState<MouseState>({
    x: -100,
    y: -100,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const hoveredElement = target.closest('[cursor-content], [cursor-invert]') as HTMLElement;
      if (!hoveredElement) return;
      const elementAttributes = Array.from(hoveredElement.attributes).map((attr) => attr.name);

      if (elementAttributes.includes('cursor-content')) {
        const attrContent = hoveredElement.getAttribute('cursor-content') as string;
        console.log(attrContent);

        setCursorOptions({ expanded: true, content: attrContent });
      } else if (elementAttributes.includes('cursor-invert')) {
        const attrValue = hoveredElement.getAttribute('cursor-invert') as string;
        if (attrValue !== 'true') return;
        setCursorOptions({ invert: true });
      }

      lastHoveredElement.current = hoveredElement;
    };

    const onMouseOut = (event: MouseEvent) => {
      if (!lastHoveredElement.current) return;
      const relatedTarget = event.relatedTarget as HTMLElement;
      const target = event.target as HTMLElement;

      if (
        lastHoveredElement.current.contains(target) &&
        (!relatedTarget || !lastHoveredElement.current.contains(relatedTarget as HTMLElement))
      ) {
        setCursorOptions({ expanded: false, invert: false });
        lastHoveredElement.current = null;
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [isDesktop]);

  useLayoutEffect(() => {
    if (!isDesktop) return;
    const onMouseMove = (event: MouseEvent) => {
      const threshold = 4;
      const nearLeft = event.clientX <= 0 + threshold;
      const nearTop = event.clientY <= 0 + threshold;
      const nearRight = event.clientX >= window.innerWidth - threshold;
      const nearBottom = event.clientY >= window.innerHeight - threshold;
      setCursorOptions({ hide: nearLeft || nearTop || nearRight || nearBottom });

      const newState: Partial<MouseState> = {
        x: event.clientX,
        y: event.clientY,
      };

      if (ref.current instanceof Element) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left;
        const elementPositionY = top;
        const elementX = event.clientX - elementPositionX;
        const elementY = event.clientY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => ({
        ...s,
        ...newState,
      }));
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDesktop]);

  return { state, ref, cursorOptions, isFocused: false };
};
