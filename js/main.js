/*==================== SCROLL REVEAL ANIMATION ====================*/
import { ScrollReveal } from './scrollreveal.min'

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`#banner__info`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`#about-us`,{
    origin: 'left',
})

sr.reveal(`#banner__image, .services, #testimonials`,{
    origin: 'right',
    interval: 100,
})
sr.reveal(`#social-media__icons-wrapper`,{
    origin: 'bottom',
    interval: 100,
})