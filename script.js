        // Custom Mouse Tracker & Ambient Light
        const core = document.getElementById('cursorCore');
        const frame = document.getElementById('cursorFrame');
        const cursorLight = document.getElementById('cursorLight');

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let frameX = mouseX;
        let frameY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            core.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            cursorLight.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        function renderCreativeCursor() {
            frameX += (mouseX - frameX) * 0.18;
            frameY += (mouseY - frameY) * 0.18;
            const isHovering = document.body.classList.contains('cursor-hovering');
            const rotation = isHovering ? 'rotate(45deg)' : 'rotate(0deg)';
            frame.style.transform = `translate(${frameX}px, ${frameY}px) translate(-50%, -50%) ${rotation}`;
            requestAnimationFrame(renderCreativeCursor);
        }
        renderCreativeCursor();

        const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
        });

        // Carousel Controller
        const track = document.getElementById('carouselTrack');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        
        let currentIndex = 0;
        const cardWidth = 380;

        nextBtn.addEventListener('click', () => {
            const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
            if (currentIndex < maxIndex) {
                currentIndex++;
                track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        });

        // FAQ Accordion Controller
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const currentItem = question.parentElement;
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== currentItem) {
                        item.classList.remove('active');
                    }
                });
                currentItem.classList.toggle('active');
            });
        });
