import Lenis from "lenis";

export function initLenis() {
    const lenis = new Lenis({
        smooth: true,
        direction: "vertical",
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return lenis;
}