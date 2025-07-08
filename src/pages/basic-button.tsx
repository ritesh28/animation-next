import { motion } from "motion/react";
export default function BasicButtonPage() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-52 h-52 rounded-xl bg-blue-700 self-center"
      />
      <div className="text-muted-foreground">
        <p>This is a basic button with:</p>
        <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
          <li>Hover effect</li>
          <li>Click</li>
        </ul>
      </div>
    </div>
  );
}
