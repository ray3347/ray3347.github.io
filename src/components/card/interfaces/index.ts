import { MotionValue } from "framer-motion";

export interface ICardProps{
    ref?: React.MutableRefObject<null>;
    scaleChange?: MotionValue<number>;
    content: JSX.Element;
    paddingX?: string;
    paddingY?: string;
    width?: string;
    height?: string;
    carouselControls? : any;
}