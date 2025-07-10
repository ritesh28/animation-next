import { Code } from "@/components/code";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { CSSProperties, useState } from "react";

const shape: CSSProperties = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
};
export default function Page() {
  // rerender key to trigger animation
  const [reRenderKey, reRender] = useState(0);
  return (
    <div className="flex flex-col justify-center gap-4 m-4">
      <div>
        <motion.svg key={reRenderKey} viewBox="0 0 600 200">
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0088"
            style={shape}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#8df0cc"
            style={shape}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0d63f8"
            style={shape}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
        </motion.svg>
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => reRender((oldV) => oldV + 1)}
          >
            <RotateCcw /> <span>Animate</span>
          </Button>
        </div>
      </div>
      <div className="text-muted-foreground [&>*]:mb-2">
        <p>
          Update <Code codeText="animate" /> prop of the motion component
        </p>
        <p>
          SVG elements can be animated using 3 special properties:{" "}
          <Code codeText="pathLength, pathSpacing & pathOffset" />
        </p>
      </div>
    </div>
  );
}
