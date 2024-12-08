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
        
