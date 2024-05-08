'use client'
import { ChadAll } from "@/app/components/ChadAll";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { LegPart } from "./parts/LegPart";
import { FeetPart } from "./parts/FeetPart";
import { AbsPart } from "./parts/AbsPart";
import { ArmsPart } from "./parts/ArmsPart";
import DraggableItem from "./components/DraggableItem";
import { BackPart } from "./parts/BackPart";
import { BrainPart } from "./parts/BrainPart";
import { CalfPart } from "./parts/CalfPart";
import { ChestPart } from "./parts/ChestPart";
import { EarPart } from "./parts/EarPart";
import { EyesPart } from "./parts/EyesPart";
import { HairPart } from "./parts/HairPart";
import { HandPart } from "./parts/HandPart";
import { JawlinePart } from "./parts/JawlinePart";
import { MouthPart } from "./parts/MouthPart";
import { NeckPart } from "./parts/NeckPart";
import { NosePart } from "./parts/NosePart";
import { ShoulderPart } from "./parts/ShoulderPart";
import { SusPart } from "./parts/SusPart";
import { useState } from "react";

export default function Home() {
  const [hoveredPart, setHoveredPart] = useState(null);
  const [selectedLinks, setSelectedLinks] = useState([
    { type: '', body: ''}
  ]);

  const handleMouseEnter = (index, content) => {
    setHoveredPart(index);
    setSelectedLinks(content)
  };

  const handleMouseLeave = () => {
    setHoveredPart(null);
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      {/* Preview */}
      <div>
        {
          selectedLinks.map((preview, index) => (
            <div key={index}>
              {preview.type === 'youtube' &&  <iframe width="560" height="315" src={preview.body} />}
              {preview.type === 'image' &&  <img width="560" height="315" src={preview.body} alt="nothing" />}
            </div>
          ))
        }
      </div>
      {/* Selector */}
      <div style={{ position: 'relative', maxWidth: '600px', maxHeight: '754px'  }}>
        {
          [
            { icon: AbsPart,      top:334, left:228, color:'black', zIndex: 2, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/T5FdHwvotoo?si=kKatxCzl82z0HVW_" }] },
            { icon: BackPart,     top:300, left:200, color:'black', zIndex: 5, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/Y5SszzMPH9o?si=jpeJfkQNmeuTPy5" }] },
            { icon: ArmsPart,     top:296, left:128, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/461-7mp4NTg?si=U8fizI0oiiXjWY6j" }] },
            { icon: BrainPart,    top:140, left:206, color:'black', zIndex: 2, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/hVdPOD5g1gs?si=8WyA4N-N6oiKTtxF" }] },
            { icon: CalfPart,     top:532, left:230, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/MOKIi86cx8w?si=72P7yQ9ivB30IEct" }] },
            { icon: ChestPart,    top:262, left:195, color:'black', zIndex: 2, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/-FL8ruwwQa0?si=J6KrXGcXLYhroqDt" }] },
            { icon: EarPart,      top:166, left:295, color:'black', zIndex: 3, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/hVdPOD5g1gs?si=8WyA4N-N6oiKTtxF" }] },
            { icon: EyesPart,     top:174, left:210, color:'black', zIndex: 5, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/hVdPOD5g1gs?si=8WyA4N-N6oiKTtxF" }] },
            { icon: FeetPart,     top:652, left:175, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/vxZ770ifuH8?si=_lEY-5Z9Ag-gzrdR" }, { type: 'image', body: "https://i.kym-cdn.com/entries/icons/original/000/040/707/ffcover.jpg" }] },
            { icon: HairPart,     top:120, left:220, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/ak_6c030P38?si=x4QNDxO9VnHf2TiM" }, { type: 'youtube', body: "https://www.youtube.com/embed/zPlkGqt2eoU?si=1ooVwp25H9bdeb9s" }]},
            { icon: HandPart,     top:420, left:130, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'image', body: "https://preview.redd.it/25l008q1wwo71.png?auto=webp&s=9897da0058ab1d13cd14abde776472c6ba39ba56" }] },
            { icon: JawlinePart,  top:182, left:220, color:'black', zIndex: 2, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/iB5lHxa7HRI?si=MYhU7kFKEysZfg63" }] },
            { icon: LegPart,      top:432, left:200, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/mlkK_z--3oQ?si=EB9fCUSfGRVG6lks" }] },
            { icon: MouthPart,    top:212, left:220, color:'black', zIndex: 3, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/NNt4SDdIH58?si=ajptCRVsCf26Lwaj" }] },
            { icon: NeckPart,     top:210, left:240, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/wjiZaCJ6tCA?si=I3IAWS12hoJpOHKS" }] },
            { icon: NosePart,     top:180, left:220, color:'black', zIndex: 4, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/C6OmnTWhsEc?si=qpumrXGmuIBbg9rX" }] },
            { icon: ShoulderPart, top:260, left:144, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/hA_uHDmEn4Y?si=dW7R79eK6GvUPh7m" }] },
            { icon: SusPart,      top:414, left:224, color:'black', zIndex: 1, fill: 'transparent', content:[{ type: 'youtube', body: "https://www.youtube.com/embed/RKbvDEkIYOk?si=_PzlhszwCix-A35x" }] },
          ].map((part, index) => (
            <div style={{ position: 'relative' }} key={index}>
              <HoverCard openDelay={100}>
                <HoverCardTrigger>
                  <div
                    onMouseEnter={() => handleMouseEnter(index, part.content)}
                    style={{ cursor: 'pointer' }}
                  >
                    <part.icon 
                      top={part.top} 
                      left={part.left} 
                      color={hoveredPart === index ? 'red' : part.color} 
                      zIndex={part.zIndex} 
                      fill={hoveredPart === index ? 'rgba(0, 0, 0, 0.5)' : part.fill} 
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  align="center" 
                  sideOffset={4} 
                  className="absolute z-50 w-64 rounded-md border border-slate-200 bg-grey p-0 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
                >
                  <a href="https://filecr.com/windows/adobe-photoshop-2024/?id=507383424000"
                  target="_blank"
                  className="flex flex-row items-center absolute z-50 w-64 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
                  >
                    make it quick by Learning Photoshop
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" width={69} height={69} />
                  </a>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))
        }
        
        <Image src={'/chad.png'} width={600} height={754} alt="chad" />
      </div>
    </main>
  );
}
/* {
  [0].map(index => (
  <HoverCard openDelay={100} key={index}>
    <HoverCardTrigger>
      <LegPart />
    </HoverCardTrigger>
    <HoverCardContent>
      The React Framework – created and maintained by @vercel.
    </HoverCardContent>
  </HoverCard>
  ))
} */