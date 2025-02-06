var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        document.querySelectorAll('.work video').forEach((video) => {
            video.addEventListener('click', () => {
                if (video.requestFullscreen) {
                    video.requestFullscreen(); // Fullscreen API for most modern browsers
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen(); // Safari support
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen(); // IE/Edge support
                }
                video.play(); // Ensure the video starts playing in fullscreen mode
            });
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            const menu = document.querySelector('nav ul');
            const barsIcon = document.querySelector('.fa-bars');
            const xIcon = document.querySelector('.fa-x');
        
            if (!menu || !barsIcon || !xIcon) return;
        
            barsIcon.addEventListener('click', () => {
                menu.classList.add('active');
                barsIcon.classList.add('hidden');
                xIcon.classList.remove('hidden');
            });
        
            xIcon.addEventListener('click', () => {
                menu.classList.remove('active');
                barsIcon.classList.remove('hidden');
                xIcon.classList.add('hidden');
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const preloader = document.querySelector(".preloader");
            const content = document.querySelector(".content");
        
            setTimeout(() => {
                preloader.classList.add("hidden"); // Hide preloader
                content.style.display = "block"; // Show content
            }, 3000); // Adjust time if needed (3 seconds)
        });
        
        
        


        
        
