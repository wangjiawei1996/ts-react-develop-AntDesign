"use strict";
var Component;
(function (Component) {
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Component.SubComponents || (Component.SubComponents = {}));
    var Headeer = /** @class */ (function () {
        function Headeer() {
            var elem = document.createElement('div');
            elem.innerText = 'header';
            document.body.appendChild(elem);
        }
        return Headeer;
    }());
    Component.Headeer = Headeer;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
///<reference path='./components.ts' />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'jiawei',
            };
            new Component.Headeer();
            new Component.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
