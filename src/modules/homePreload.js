import { gsap } from "gsap";
const totalFrames = 200;
const framePath = "https://d2cj8iy1ip6ztq.cloudfront.net/shape-sequence/";

const images = [];
for (let i = 2; i <= totalFrames + 1; i++) {
    const frameNumber = String(i).padStart(3, '0');
    images.push(`${framePath}${frameNumber}.jpg`);
}

const imgElement = document.createElement('img');
document.body.appendChild(imgElement);

const tl = gsap.timeline({
    paused: true,
});

export function homePreload() {
    images.forEach((image, index) => {
        tl.to(imgElement, {
            duration: 0.05,
            attr: { src: image },
            ease: "none",
        }, index * 0.05);
    });

    return tl;
}
