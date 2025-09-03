"use client";
import { cloneElement, useState, useEffect, useRef } from "react";

const Animate = ({
  delay = "0s",
  duration = "0.8s",
  animation = "slideUpFade",
  children,
}) => {
  const [isInView, setIsInView] = useState(false);
  const childRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (childRef.current) observer.observe(childRef.current);
    return () => {
      if (childRef.current) observer.unobserve(childRef.current);
    };
  }, []);

  const mergedStyle = {
    ...children.props.style,
    ...(isInView && {
      animationDelay: delay,
      animationDuration: duration,
    }),
  };

  const mergedClassName = [
    children.props.className,
    isInView ? `animate-${animation}` : "opacity-0",
  ]
    .filter(Boolean)
    .join(" ");

  const mergedRef = (node) => {
    childRef.current = node;
    const { ref } = children;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  return cloneElement(children, {
    ...children.props,
    ref: mergedRef,
    style: mergedStyle,
    className: mergedClassName,
  });
};

export default Animate;
