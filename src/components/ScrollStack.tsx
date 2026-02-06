"use client";

import { useLayoutEffect, useRef, useCallback, type ReactNode } from "react";
import "./ScrollStack.css";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export function ScrollStackItem({
  children,
  itemClassName = "",
}: ScrollStackItemProps) {
  return (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
      {children}
    </div>
  );
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export default function ScrollStack({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<Element[]>([]);
  const lastTransformsRef = useRef(
    new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>()
  );
  const rafScheduledRef = useRef(false);
  const scrollListenerRef = useRef<() => void | null>(null);

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(String(value));
    },
    []
  );

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop ?? 0);
    const containerHeight = useWindowScroll
      ? window.innerHeight
      : (scrollerRef.current?.clientHeight ?? 0);

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end");

    const getTop = (el: Element) =>
      useWindowScroll
        ? (el.getBoundingClientRect().top + window.scrollY)
        : (el as HTMLElement).offsetTop;

    const endElementTop = endElement ? getTop(endElement) : 0;

    // Cache card positions once per frame
    const cardTops = cards.map((c) => getTop(c));

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;
      const cardEl = card as HTMLElement;
      const cardTop = cardTops[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress =
        triggerEnd > triggerStart
          ? Math.max(0, Math.min(1, (scrollTop - triggerStart) / (triggerEnd - triggerStart)))
          : 0;
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jTriggerStart = cardTops[j] - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        Math.abs(last.translateY - newTransform.translateY) > 0.5 ||
        Math.abs(last.scale - newTransform.scale) > 0.005 ||
        Math.abs(last.rotation - newTransform.rotation) > 0.5 ||
        Math.abs(last.blur - newTransform.blur) > 0.5;

      if (changed) {
        cardEl.style.transform = `translate3d(0,${newTransform.translateY}px,0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        cardEl.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cards.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView) stackCompletedRef.current = false;
      }
    }
  }, [
    useWindowScroll,
    stackPosition,
    scaleEndPosition,
    baseScale,
    itemScale,
    itemStackDistance,
    rotationAmount,
    blurAmount,
    parsePercentage,
    onStackComplete,
  ]);

  const onScroll = useCallback(() => {
    if (rafScheduledRef.current) return;
    rafScheduledRef.current = true;
    requestAnimationFrame(() => {
      updateCardTransforms();
      rafScheduledRef.current = false;
    });
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller.querySelectorAll(".scroll-stack-card")
    );
    cardsRef.current = cards;
    const cache = lastTransformsRef.current;
    cache.clear();

    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      if (i < cards.length - 1) el.style.marginBottom = `${itemDistance}px`;
      el.style.willChange = "transform";
      el.style.transformOrigin = "top center";
      el.style.backfaceVisibility = "hidden";
    });

    if (useWindowScroll) {
      window.addEventListener("scroll", onScroll, { passive: true });
      scrollListenerRef.current = onScroll;
    } else {
      scroller.addEventListener("scroll", onScroll, { passive: true });
      scrollListenerRef.current = onScroll;
    }
    onScroll();

    return () => {
      if (useWindowScroll) {
        window.removeEventListener("scroll", onScroll);
      } else {
        scroller.removeEventListener("scroll", onScroll);
      }
      scrollListenerRef.current = null;
      cardsRef.current = [];
      cache.clear();
    };
  }, [
    useWindowScroll,
    itemDistance,
    onScroll,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}
