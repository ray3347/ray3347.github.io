import { MotionValue } from "framer-motion";

export interface ICardProps{
    ref?: React.MutableRefObject<null>;
    scaleChange: MotionValue<number>;
}