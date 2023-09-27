import { motion } from "framer-motion";

function CardContent(){
    return(
        <motion.div
          style={{
            gap: "1em",
            textAlign: "left",
          }}
        >
          <motion.div
            style={{
              fontSize: "3vw",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Various Works
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.5vw",
              fontWeight: "normal",
              color: "white",
              opacity: "0.5",
              maxWidth: "40vw",
            }}
          >
            Collection of my past projects in various fields such as software
            development, UI/UX, and many more! Be it personal projects or in
            collaboration with other brilliant people, and many more will be
            published in the near future!
          </motion.div>
        </motion.div>
    );
}

export default CardContent;