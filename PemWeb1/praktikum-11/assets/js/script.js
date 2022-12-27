// menangkap element a dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click', (element)=> {
        computerChoice(element)
    })
})
function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    // membuat pilihan untuk komputer
    let choices = ['Rock', 'paper', 'Scissors'];

    //membuuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win'), 100)
    }
    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Win'), 100)
    }
    if (pilihanUser == 'Scissor' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'), 100)
    }


    // jika komputer yang menang
    if (pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'), 100)
    }
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'), 100)
    }
    if (pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win'), 100)
    }

    // jika darw atau seri
    if(pilihanUser == pilihanKomputer){
        setTimeout(alert('draw'), 100)
    }
}