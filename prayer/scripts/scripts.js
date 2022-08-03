function togglePrayersTime(){
    var container = document.getElementById('prayer-container');
    var icons = document.getElementsByClassName('prayer-icon');

    for(var i = 0; i < icons.length; i++){
        icons[i].classList.toggle('prayer-icons-collapse');
    }


    container.classList.toggle('prayer-expand');
    container.classList.toggle('prayer-container');
}