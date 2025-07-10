import { Code } from "@/components/code";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
// import { motion } from "motion/react";
import { useState } from "react";

export default function Page() {
  const [targetPathLength, setTargetPathLength] = useState(1);
  return (
    <div className="flex flex-col justify-center gap-4 m-4">
      <div>
        {/* motion */}

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setTargetPathLength((oldV) => (oldV === 1 ? 0 : 1))}
          >
            <RotateCcw /> <span>Animate</span>
          </Button>
        </div>
      </div>
      <div className="text-muted-foreground [&>*]:mb-2">
        <p>
          <b>Variants</b> are useful when we want to perform animations that
          propagate throughout the DOM.
        </p>
        <p>
          Also useful when you want to control the animation state using{" "}
          <Code codeText="React.useState()" />
        </p>
        <p>
          These variants can now be referred to by a <b>label</b>, wherever you
          can define an animation target/state. Do NOT use style values for any
          props when using variants.
        </p>
        <p>
          <Code codeText="<motion.div variants={variants} initial='hidden' whileInView='visible'/>" />
        </p>
        <p>
          Can also define multiple variants via an array as in keyframes:{" "}
          <Code codeText="animate={['visible', 'danger']}" />
        </p>
      </div>
    </div>
  );
}
