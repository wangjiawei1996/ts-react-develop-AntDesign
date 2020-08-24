"use strict";
var Home;
(function (Home) {
    var Headeer = /** @class */ (function () {
        function Headeer() {
            var elem = document.createElement('div');
            elem.innerText = 'header';
            document.body.appendChild(elem);
        }
        return Headeer;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Headeer();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
