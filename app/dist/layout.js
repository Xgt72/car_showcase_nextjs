"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
exports.metadata = {
    title: "Car Hub",
    description: "Discover the best cars in the world."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: "relative" },
            React.createElement(Navbar, null),
            children,
            React.createElement(Footer, null))));
}
exports["default"] = RootLayout;
