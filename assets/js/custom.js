;(function ($) {
    $(document).ready(function () {
        $('body').addClass('js')
        var $menu = $('#menu'),
            $menulink = $('.menu-link')

        $menulink.click(function () {
            $menulink.toggleClass('active')
            $menu.toggleClass('active')
            return false
        })
    })

    videoPopup()

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        // autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            750: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

  

    $('#tabs').tabs()
})(jQuery)
