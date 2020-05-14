$(document).ready(function() {
    $('.filter-list button').click(function() {
        $(this).toggleClass('active');

        let filterArr = $(".filter-list button.active").map(function() {
            return $(this).data('filter');
        });

        let filterItem = $(".grid-item");

        if(filterArr.length <= 0) {
            filterItem.show();
        } else {
            filterItem.hide();
            filterItem.each(function () {
                for(let i = 0; i < filterArr.length; i++) {
                    if($(this).hasClass(filterArr[i])) {
                        $(this).show();
                    }
                }
            });
        }
    });
    $('.clear-all').click(function() {
        $('.filter-list button').removeClass('active');
        $(".grid-item").show();
    });
});