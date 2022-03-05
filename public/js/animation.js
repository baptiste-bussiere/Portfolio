 
        $(function() {
            var controller = new ScrollMagic.Controller();
            var slides = new TimelineMax()

            .to(".slide_container", 0.5, {
                    z: -150
                })
                .to(".slide_container", 1, {
                    x: "-25%"
                })
                .to(".slide_container", 0.5, {
                    z: 0
                })

            .to(".slide_container", 0.5, {
                    z: -150,
                    delay: 1
                })
                .to(".slide_container", 1, {
                    x: "-50%"
                })
                .to(".slide_container", 0.5, {
                    z: 0
                })

            .to(".slide_container", 0.5, {
                    z: -150,
                    delay: 1
                })
                .to(".slide_container", 1, {
                    x: "-75%"
                })
                .to(".slide_container", 0.5, {
                    z: 0
                })


            var scene = new ScrollMagic.Scene({
                    triggerElement: ".pin_container",
                    triggerHook: "onLeave",
                    duration: "400%"
                })
                .setPin(".pin_container")
                .setTween(slides)
                .addTo(controller);
        });
 gsap.registerPlugin(ScrollTrigger);
        gsap.to(".hero", {
            scrollTrigger: {
                trigger: ".hero",
                scrub: true,
                pin: true,
                start: "center center",
                end: "bottom -100%",
                toggleClass: "active",
                ease: "power2"
            }
        });

        gsap.to(".hero_image", {
            scrollTrigger: {
                trigger: ".hero",
                scrub: 0.5,
                start: "top bottom",
                end: "bottom -300%",
                ease: "power2"
            },
            y: "-30%"
        });



        gsap.registerPlugin(ScrollTrigger);

        const images = gsap.utils.toArray('img');
        const loader = document.querySelector('.loader_text');
        const updateProgress = (instance) =>
            loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

        const showDemo = () => {
            document.body.style.overflow = 'auto';
            document.scrollingElement.scrollTo(0, 0);
            gsap.to(document.querySelector('.loader'), {
                autoAlpha: 0
            });

            gsap.utils.toArray('section').forEach((section, index) => {
                const w = section.querySelector('.gallery');
                const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
                gsap.fromTo(w, {
                    x
                }, {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 0.5
                    }
                });
            });
        }

        imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);

        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.back_to_top').fadeIn();
                } else {

                    $('.back_to_top').fadeOut();

                }

            });

            $('.back_to_top').click(function() {

                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

        });



        var controller = new ScrollMagic.Controller();
        var tl = new TimelineMax();
        tl.staggerFrom(".work_box", 1, {
            scale: 0,
            cycle: {
                y: [-50, 50]
            },
            ease: Elastic.easeOut,
            stagger: {
                from: "center",
                amount: 0.25
            }
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".work",
            triggerHook: 0.5
        })

        .setTween(tl)
            .addTo(controller);

        gsap.set('.footer_container', {
            yPercent: -50
        })

        const uncover = gsap.timeline({
            paused: true
        })

        uncover
            .to('.footer_container', {
                yPercent: 0,
                ease: 'none'
            });

        ScrollTrigger.create({
            trigger: '.gallery_wrapper',
            start: 'bottom bottom',
            end: '+=75%',
            animation: uncover,
            scrub: true,
        })
        $(function() {
            var controller = new ScrollMagic.Controller({
                loglevel: 3
            });

            var tween = TweenMax.to("#target", 0.5, {

            });

            var scene = new ScrollMagic.Scene({
                    triggerElement: "#trigger",
                    duration: 300,
                    loglevel: 3
                })
                .setTween(tween)
                .setPin("#target")
                .addTo(controller);

            $("form.loglevel input[type=checkbox]").on("change", function(e) {
                var
                    target = $(this).attr("id") == "logcontroller" ? controller : scene,
                    level = $(this).prop("checked") ? 3 : 0;

                target.loglevel(level);
            });
        });