requirejs.config({
    "baseUrl": "js",
    "shim": {
        "modules/montase": ["jquery"],
        "modules/map/map": ["modules/montase"],
        "modules/button/button": ["modules/montase"],
        "modules/button/buttonDropdown": ["modules/button/button"]
    }
});