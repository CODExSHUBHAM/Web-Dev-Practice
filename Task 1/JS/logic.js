const counters = document.querySelectorAll('.counter');
const speed = 500;
console.log(counters)

counters.forEach(counter => {
    const updatecount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updatecount,1);
        } else{
            count.innerText = target;
        }
    }

    console.log(counter)

    updatecount();
});