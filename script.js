const counters = document.querySelectorAll('.counter')

counters.forEach(x => {
    x.innerText = '0'

    const updateX = () => {
        const target = Number(x.getAttribute('data-target'))
        const c = Number( x.innerText)

        const increment = target / 200

        if(c < target) {
            x.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateX, 1)
        } else {
            counter.innerText = target
        }
        
    }

    updateX()
})