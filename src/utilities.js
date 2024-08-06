export function draggingScroll() {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("scrollable-container");
        let isDragging = false;
        let startX;
        let scrollLeft;
        let animationFrameId;

        const onMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the scroll speed
            container.scrollLeft = scrollLeft - walk;
            console.log("mouse moving");
        };

        const onMouseMoveThrottled = (e) => {
            if (animationFrameId) return;
            animationFrameId = requestAnimationFrame(() => {
                onMouseMove(e);
                animationFrameId = null;
            });
        };

        container.addEventListener("mousedown", (e) => {
            if (e.metaKey || e.ctrlKey) {
                // Change to the desired key if needed
                isDragging = true;
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
                container.classList.add("active"); // Optional: Add a class to change cursor style
            }
        });

        container.addEventListener("mouseleave", () => {
            isDragging = false;
            container.classList.remove("active");
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        });

        container.addEventListener("mouseup", () => {
            isDragging = false;
            container.classList.remove("active");
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        });

        container.addEventListener("mousemove", onMouseMoveThrottled);
    });
}
