
// Add this near the beginning of your script
let inactivityTimer;

// Function to reset the timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        showPopupSs();
    }, 45000); // 45 seconds in milliseconds
}

// Add event listeners for user activity
document.addEventListener('mouseover', resetInactivityTimer);
document.addEventListener('mouseout', resetInactivityTimer);
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Start the timer when the page loads
resetInactivityTimer();

// Modify your hidePopupSs function to restart the timer
function hidePopupSs() {
    requestAnimationFrame(() => {
        popupSs.classList.remove("show");
        overlay.classList.remove("show");
        
        // Smooth scroll to top
        scrollList.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    resetInactivityTimer();
    
    // After scrolling, make sure to highlight the correct item
    setTimeout(() => {
        highlightCenterItem();
    }, 500); // Wait for scroll to complete
}


        const scrollList = document.getElementById("scrollList");
        let items = [...document.querySelectorAll(".item")];

        const headerItem = document.createElement("div");
        headerItem.classList.add("item");
        headerItem.textContent = "Words <Between> Us";
        headerItem.style.color = "white";
        headerItem.style.fontSize = "4vw"; 
        headerItem.style.opacity = "1"; 
        headerItem.style.marginBottom = "calc(125px - 2vh)"; 
        headerItem.style.marginTop = "-100px"; 
        headerItem.style.position = "relative"; 
        scrollList.prepend(headerItem);

        const footerItem = headerItem.cloneNode(true); 
        footerItem.textContent = "Words <Between> Us"; 
        footerItem.style.marginTop = "calc(125px - 2vh)"; 
        footerItem.style.marginBottom = "-100px"; 
        scrollList.appendChild(footerItem);

        function getCenterItem() {
            let containerRect = scrollList.getBoundingClientRect();
            let centerY = containerRect.top + containerRect.height / 2;

            let closestItem = null;
            let minDistance = Infinity;

            items.forEach(item => {
                let itemRect = item.getBoundingClientRect();
                let itemCenterY = itemRect.top + itemRect.height / 2;
                let distance = Math.abs(centerY - itemCenterY);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestItem = item;
                }
            });

            return closestItem;
        }

        function highlightCenterItem() {
            const centerItem = getCenterItem();

            items.forEach(item => item.classList.remove("selected"));

            if (centerItem) {
                centerItem.classList.add("selected");
            }
        }

        let isAtBottom = false;
        let scrollTimeout;

        scrollList.addEventListener("scroll", () => {
            const bottomReached = scrollList.scrollHeight - scrollList.scrollTop === scrollList.clientHeight;
            
            if (bottomReached) {
                isAtBottom = true;
            } else {
                isAtBottom = false;
            }

            highlightCenterItem();

            if (!isAtBottom) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const centerItem = getCenterItem();
                    if (centerItem) {
                        const containerRect = scrollList.getBoundingClientRect();
                        const itemRect = centerItem.getBoundingClientRect();
                        const scrollY = scrollList.scrollTop + (itemRect.top - containerRect.top) - (containerRect.height / 2) + (itemRect.height / 2);
                        
                        scrollList.scrollTo({
                            top: scrollY,
                            behavior: "smooth"
                        });
                    }
                }, 100);
            }
        });

        highlightCenterItem();

        const popup = document.getElementById("popup");
        const overlay = document.getElementById("overlay");
        const closeButton = document.querySelector(".close-button");
        const popupContent = document.getElementById("popupContent");
        const backButton = document.getElementById("backButton");

        function showPopup(content) {
    const selectedItem = document.querySelector(".selected");
    
    if (selectedItem) {
        popupContent.textContent = content;
        
        const computedStyle = window.getComputedStyle(selectedItem);
        
        popupContent.style.fontFamily = "'TimesNRCondensed', serif"; 
        popupContent.style.fontSize = computedStyle.fontSize;
        popupContent.style.transform = "translate(-50%, -50%) " + computedStyle.transform;
        popupContent.style.lineHeight = computedStyle.lineHeight;
        popupContent.style.letterSpacing = computedStyle.letterSpacing;
        popupContent.style.textAlign = "center";
        popupContent.style.position = "absolute";
        popupContent.style.top = "49%";
        popupContent.style.left = "50%";
        popupContent.style.width = "100%";

    }

    popup.classList.add("show");
    overlay.classList.add("show");
}

function hidePopup() {
    popup.classList.remove("show");
    overlay.classList.remove("show");
}

backButton.addEventListener("click", hidePopup);
overlay.addEventListener("click", hidePopup);


        items.forEach(item => {
            item.addEventListener("click", () => {
                if (item.classList.contains("selected")) {
                    showPopup(item.textContent);
                }
            });
        });
        const popupRed = document.getElementById("popupRed");
        const popupRedContent = document.getElementById("popupRedContent");
        const closeButtonRed = document.getElementById("closeButtonRed");
        const rightButton = document.querySelector(".right-button");

        function showRedPopup() {
            const selectedItem = document.querySelector(".selected");
            
            if (selectedItem) {

                const computedStyle = window.getComputedStyle(selectedItem);
                const textContents = [
                    "This work is an imprint in the personal digital space. At times, its complex, oddly structured grammatical formulations and sentences reflect how a native language can become foreign, while a foreign language transforms into the only space truly open for sincere self-expression. And sincerity—the goal of people who become friends—only unfolds after the entirety of our life experiences has been mixed and reprocessed through vectors and depersonalized linguistic chains.",
                    "We explore how verbal expression can act as a barrier to understanding one another, as well as the layer of meaning hidden behind every sentence—one that is so difficult to articulate and convey through words.",
                    "Words Between Us was created using a language model built on NLTK. With a database consisting of records of our conversations, it revealed an averaged-out version of ourselves—dialogues that simultaneously contain all the meaning of our words and none at all; words that used to mean so much and yet nothing."
                ];

                popupRedContent.innerHTML = textContents.join("<br><br>");
                
                popupRedContent.style.fontFamily = "'Karl', sans-serif"; 
                popupRedContent.style.fontSize = "30px";
                popupRedContent.style.transform = "translate(-50%, -50%) " + computedStyle.transform;
                popupRedContent.style.lineHeight = "100%";
                popupRedContent.style.textAlign = "center";
                popupRedContent.style.position = "absolute";
                popupRedContent.style.top = "45%";
                popupRedContent.
                style.left = "50%";
                popupRedContent.style.width = "50%";
            }

            popupRed.classList.add("show");
            overlay.classList.add("show");
        }

        function hideRedPopup() {
            popupRed.classList.remove("show");
            overlay.classList.remove("show");
        }

        rightButton.addEventListener("click", showRedPopup);
        closeButtonRed.addEventListener("click", hideRedPopup);
        overlay.addEventListener("click", () => {
            hidePopup();
            hideRedPopup();
        });


        const popupSs = document.getElementById("popupSs");
        const popupSsContent = document.getElementById("popupSsContent");
        const ssButton = document.querySelector(".button-ss");

        function showPopupSs() {
            const selectedItem = document.querySelector(".selected");
            
            if (selectedItem) {

                const computedStyle = window.getComputedStyle(selectedItem);
                const textContents = [
                    "tap to enter"
                ];

                popupSsContent.innerHTML = textContents.join("<br><br>");
                
                popupSsContent.style.fontFamily = "'Karl', sans-serif"; 
                popupSsContent.style.fontSize = "30px";
                popupSsContent.style.transform = "translate(-50%, -50%) " + computedStyle.transform;
                popupSsContent.style.lineHeight = "100%";
                popupSsContent.style.textAlign = "center";
                popupSsContent.style.position = "absolute";
                popupSsContent.style.top = "45%";
                popupSsContent.style.left = "50%";
                popupSsContent.style.width = "100%";
                popupSsContent.style.backgroundColor = "red";
            }

            popupSs.classList.add("show");
            overlay.classList.add("show");
        }

        function hidePopupSs() {
    requestAnimationFrame(() => {  // Use requestAnimationFrame for smoother transitions
        popupSs.classList.remove("show");
        overlay.classList.remove("show");
    });
}

popupSs.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent any default behaviors
    hidePopupSs();
});
        
        ssButton.addEventListener("click", showPopupSs);
     //   closeButtonRed.addEventListener("click", hidePopupSs);
        overlay.addEventListener("click", () => {
            hidePopup();
            hidePopupSS();
        });



   