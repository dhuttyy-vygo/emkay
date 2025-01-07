
// import { gsap } from "gsap";
// const totalFrames = 200;
// const framePath = "https://d2cj8iy1ip6ztq.cloudfront.net/shape-sequence/";

// const images = [];
// for (let i = 2; i <= totalFrames + 1; i++) {
//     const frameNumber = String(i).padStart(3, '0');
//     images.push(`${framePath}${frameNumber}.jpg`);
// }

// const imgElement = document.createElement('img');
// document.body.appendChild(imgElement);

// const tl = gsap.timeline({
//     paused: true,
// });

// export function homePreload() {
//     images.forEach((image, index) => {
//         tl.to(imgElement, {
//             duration: 0.05,
//             attr: { src: image },
//             ease: "none",
//         }, index * 0.05);
//     });

//     return tl;
// }

export function playImageSequence() {
    const canvas = document.getElementById("image-sequence-canvas");
    const context = canvas.getContext("2d");
    const frameCount = 79; // Total number of frames
    const baseURL = "https://d2cj8iy1ip6ztq.cloudfront.net/ep-hero-sequence/"; // Base URL
    const fallbackImageURL = "https://cdn.prod.website-files.com/67235ba89cef607162231b79/675c6b7a1fe963118cecffb6_093.jpg"; // Fallback image URL
    const fps = 60; // Frame rate

    let images = [];
    let currentFrame = 1; // Start from frame 1
    let animationRunning = false; // Track if the animation is running

    // Generate the correct URL for each frame
    const getFrameURL = (index) => `${baseURL}${index}.jpg`;

    // Preload images
    const preloadImages = () => {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = getFrameURL(i);
            images.push(img);
        }
    };

    // Resize canvas to match parent size
    const resizeCanvas = () => {
        const container = canvas.parentElement;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    };

    // Draw a specific frame
    const drawFrame = (image) => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate scaling for "cover"
        const canvasAspectRatio = canvas.width / canvas.height;
        const imageAspectRatio = image.width / image.height;

        let drawWidth, drawHeight;
        if (imageAspectRatio > canvasAspectRatio) {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imageAspectRatio;
        } else {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imageAspectRatio;
        }

        const drawX = (canvas.width - drawWidth) / 2; // Center horizontally
        const drawY = (canvas.height - drawHeight) / 2; // Center vertically

        context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    };

    // Render the animation
    const renderFrame = () => {
        if (currentFrame <= images.length) {
            const image = images[currentFrame - 1]; // Adjust for 0-based index
            if (image.complete) {
                drawFrame(image);
            }
            currentFrame++;
            setTimeout(renderFrame, 1000 / fps); // Adjust playback for 60 FPS
        } else {
            animationRunning = false; // Animation has ended
        }
    };

    // Start sequence playback
    const startSequence = () => {
        resizeCanvas(); // Ensure canvas matches parent size
        currentFrame = 1; // Reset to the first frame
        animationRunning = true;
        renderFrame();
    };

    // Fallback to a static image if canvas is not supported
    const handleFallback = () => {
        const img = new Image();
        img.src = fallbackImageURL;
        img.onload = () => drawFrame(img);
    };

    // Initialize playback or fallback
    if (canvas && context) {
        preloadImages();
        window.addEventListener("resize", () => {
            if (!animationRunning) {
                resizeCanvas();
                startSequence(); // Restart animation on resize
            }
        });
        startSequence();
    } else {
        console.error("Canvas not supported, applying fallback image.");
        handleFallback();
    }
}