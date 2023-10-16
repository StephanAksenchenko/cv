import { motion, useInView } from "framer-motion";
import { ComponentType, useRef } from "react";

export default function WithActivationInView<P extends object>(
  Component: ComponentType<P>
) {
  function ComponentWithActivationInView(props: P) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        style={{
          transform: isInView ? "scale(1)" : "scale(0.5)",
          opacity: isInView ? "1" : "0.5",
          transition: "0.3s",
          transitionDelay: "0.5s",
          transformOrigin: "top center",
        }}
      >
        <Component {...props} ref={ref} />
      </motion.div>
    );
  }

  return ComponentWithActivationInView;
}
