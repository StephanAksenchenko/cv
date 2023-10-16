import { motion } from "framer-motion";
import { ComponentType } from "react";

export default function WithAnimation<P extends object>(
  Component: ComponentType<P>
) {
  function NavWithAnimation(props: P) {
    return (
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ height: "100%" }}
      >
        <Component {...props} />
      </motion.div>
    );
  }

  return NavWithAnimation;
}
