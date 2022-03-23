import { SwitchTransition, TransitionGroup, Transition } from "react-transition-group";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import styles from '../styles/Home.module.css'
import LeftNav from "./LeftNav";

// const TIMEOUT = 2000;
const TIMEOUT = 250;
const gsapDuration = TIMEOUT / 1000;

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <div className = "w-[100%] max-w-1400 mx-0 my-auto" >
        <SwitchTransition>
          <Transition
            key={router.pathname}
            timeout={TIMEOUT}
            onEnter={(node) => {
              console.log("==========\nLAYOUT ON ENTER", router.pathname);
              gsap.set(node, { autoAlpha: 0 });
              gsap.to(node, { autoAlpha: 1, duration: gsapDuration * 3 });
            }}
            onExit={(node) => {
              console.log("**********\nLAYOUT ON EXIT!!!", router.pathname);
              gsap.to(node, { autoAlpha: 0, duration: gsapDuration });
            }}
          >
            {children}
          </Transition>
        </SwitchTransition>
      </div>
      

    </div>
  );
};

export default Layout;