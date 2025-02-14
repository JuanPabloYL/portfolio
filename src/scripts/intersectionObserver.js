export const intersectionObserver =() => {
    const nav = document.querySelector('nav');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
        })
    })

    observer.observe(nav);
}

