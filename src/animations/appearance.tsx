import { motion } from "framer-motion";
import { ComponentType } from "react";

export default function WithAppearance<P extends object>(
  Component: ComponentType<P>,
  { delay = 0 } = {}
) {
  function ComponentWithAppearance(props: P) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        <Component {...props} />
      </motion.div>
    );
  }

  return ComponentWithAppearance;
}
