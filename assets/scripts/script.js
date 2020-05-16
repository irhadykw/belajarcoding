const pilihanMenu = document.getElementById('pilihan-menu');
const colorMenu = document.querySelector('.icon-menu a');
function togglePilihanMenu() {
    if ((pilihanMenu.style.display === '') || (pilihanMenu.style.display === 'none'))   {
        pilihanMenu.style.display = 'block';
    } else {
        pilihanMenu.style.display = 'none';
    }
    warnaIcon();
}

function warnaIcon() {
  colorMenu.style.color = '#fff';
}
