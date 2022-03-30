//Дэлгэцтэй ажиллах контроллор
var uiController = (function () {

})();

//Санхүүтэй ажиллах контроллор
var financeController = (function () {



})();

//Програмын холбогч контроллор
var appController = (function (uiController, financeController) {

    var ctrlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
        console.log('Товч дарагдлаа');
        // 2. Олж авсан өгөгдлүүдээ financeController функцд дамжуулж тэнд хадгална.
        // 3. Олж авсан өгөгдлүүдээ Вэб дээрээ тохирох хэсэгт нь гаргана.
        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана. 
    }

    document.querySelector('.add__btn').addEventListener('click', function () {
        ctrlAddItem();
    });

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }


    });

})(uiController, financeController); 