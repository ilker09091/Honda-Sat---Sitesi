$(document).ready(function() {
    // İlk arabayı görünür yap
    $('.car-info').first().addClass('active');

    // Menü aç/kapa işlevselliği
    $('#check').change(function() {
        $('nav').toggleClass('active');
    });

    // Önceki butonuna tıklanma olayı
    $('.prev-arrow').click(function() {
        let current = $('.car-info.active');
        let prev = current.prev('.car-info');

        if (prev.length) {
            current.removeClass('active');
            prev.addClass('active');
            $('.slider').css('transform', 'translateX(-' + (prev.index() * 100) + '%)');
        }
    });

    // Sonraki butonuna tıklanma olayı
    $('.next-arrow').click(function() {
        let current = $('.car-info.active');
        let next = current.next('.car-info');

        if (next.length) {
            current.removeClass('active');
            next.addClass('active');
            $('.slider').css('transform', 'translateX(-' + (next.index() * 100) + '%)');
        }
    });
});
