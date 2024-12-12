import gsap from "gsap";


export function productHover () {
    const product = document.querySelectorAll(".ep-product-card");

    product.forEach(e => {
        const brandName = e.getAttribute('data-brand-name');
        if (brandName.includes('ROHACELL®')) {
            const newBrandName = brandName.replace('ROHACELL®', '').trim();
            e.setAttribute('data-brand-name', newBrandName);
            const textHoverElement = e.querySelector('.text-hover-ep');
            if (textHoverElement) {
                textHoverElement.textContent = newBrandName;
            }
        }

    });
        
        
}