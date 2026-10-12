

import { AspectRatio } from "../../@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <img
        src="./yangi.png"
        alt="Photo"
        loading="lazy"
        className="rounded-lg object-cover w-full h-full"
      />
    </AspectRatio>
  )
}
