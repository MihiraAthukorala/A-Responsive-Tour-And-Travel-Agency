// Active Menu Button On Navigation Bar (Header Section)

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
//  Navigation In Other Videos On About Section

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})