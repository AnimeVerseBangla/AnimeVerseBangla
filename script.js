function searchAnime() {
    let searchInput = document.getElementById('search-bar').value.toLowerCase();
    let animeCards = document.getElementsByClassName('anime-card');

    for (let i = 0; i < animeCards.length; i++) {
        let animeTitle = animeCards[i].getElementsByTagName('h3')[0].textContent.toLowerCase();

        if (animeTitle.includes(searchInput)) {
            animeCards[i].style.display = 'block';
        } else {
            animeCards[i].style.display = 'none';
        }
    }
}
