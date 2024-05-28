function changeProfilePictures() {
    const newProfile = chrome.runtime.getURL("newpic.jpg");
    const profilePics = document.querySelectorAll('img[class*="avatar-image"], img[class*="EntityPhoto-square"], img[class*="EntityPhoto-circle"], img[class*="msg-facepile-grid_img"]');
    profilePics.forEach(img => {
        img.src = newProfile;
        img.srcset = newProfile;
    });
}

changeProfilePictures();

const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
