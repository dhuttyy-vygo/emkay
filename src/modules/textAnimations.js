import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

 const Qe = gsap;
 const Sc = ScrollTrigger;

 
 export function textHighlight() {

    const textHighlight = new SplitType("[data-split='highlight']", {types: 'words', wordClass: "highlight-text"});

    const lineSplit = new SplitType("[data-split='lines']", {types: 'lines', lineClass: "line-in"});

    const t = document.querySelectorAll(".highlight-text");
    
    if  (!t.length) return;

    const tl = new Qe.timeline();
    
    
    tl.to(t, {
        color: "var(--swatch--brand-invert)",
        opacity: 1,
        duration: 1,
        stagger: { amount: .5},
        ease: "power2.out",
    }),
    tl.fromTo(t, {
        color: "var(--swatch--brand-invert)"
    },{
        color: "#333",
        duration: 1,
        stagger: { amount: .5},
        ease: "power2.out",
    },"<+=1"),
    Sc.create({
        trigger: t,
        start: "top bottom",
        animation: tl,
    });
 };
