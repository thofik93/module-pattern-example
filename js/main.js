requirejs.config({
    "baseUrl": "js",
    "shim": {
        "modules/qdh": ["jquery"],
        "modules/map/map": ["modules/qdh"],
        "modules/button/button": ["modules/qdh"],
        "modules/button/buttonDropdown": ["modules/button/button"]
    }
});