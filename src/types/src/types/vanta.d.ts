declare module "vanta/dist/vanta.birds.min" {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaOptions {
    el: HTMLElement;
    THREE: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    birdSize?: number;
    speedLimit?: number;
  }

  export default function BIRDS(options: VantaOptions): VantaEffect;
}
