export const initAnnoucement = () => {
    closeAnnouncementInfos();
}

const closeAnnouncementInfos = () => {
    const announcementInfos = document.querySelector('.announcement_infos')

    if (announcementInfos) {

        const header = document.querySelector('.header');
        const body = document.querySelector('body');

        body.classList.add('has-announcement');

        const removeElementsAndClass = () => {
            announcementInfos.style.display = "none"
            body.classList.remove('has-announcement');
        }

        if (sessionStorage.getItem('announcement_infos') === "false") removeElementsAndClass()


        announcementInfos.querySelector('span').addEventListener('click', () => {
            removeElementsAndClass()
            sessionStorage.setItem('announcement_infos', "false");
        })

    }
}