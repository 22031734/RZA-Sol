function ani() {
    document.getElementById('flashcard').className = 'test anim';
}

function bookingbar() {
    var element = document.getElementById('bookingbar');
    element.classList.toggle("hotel");

    var checkin = document.getElementById('checkin');
    checkin.classList.toggle("hide")

    var checkout = document.getElementById('checkout');
    checkout.classList.toggle("hide")

    var show = document.getElementById('show');
    show.classList.toggle("hide");

    var align = document.getElementById('align');
    align.classList.toggle("hidden");
 }