import { motion } from "framer-motion";
import { ComponentType } from "react";

export default function WithLevitation<P extends object>(
  Component: ComponentType<P>
) {
  function ComponentWithLevitation(props: P) {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <Component {...props} />
      </motion.div>
    );
  }

  return ComponentWithLevitation;
}
