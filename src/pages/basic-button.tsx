import { motion } from "motion/react";
export default function BasicButtonPage() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-52 h-52 rounded-xl bg-blue-700"
    />
  );
}
