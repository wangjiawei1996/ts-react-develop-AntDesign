define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Headeer = void 0;
    var Headeer = /** @class */ (function () {
        function Headeer() {
            var elem = document.createElement('div');
            elem.innerText = 'header';
            document.body.appendChild(elem);
        }
        return Headeer;
    }());
    exports.Headeer = Headeer;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Page = void 0;
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Headeer();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.Page = Page;
});
