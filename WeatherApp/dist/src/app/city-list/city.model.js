System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var City;
    return {
        setters:[],
        execute: function() {
            City = (function () {
                function City(name, imageSrc, woeId) {
                    this.name = name;
                    this.imageSrc = imageSrc;
                    this.woeId = woeId;
                }
                return City;
            }());
            exports_1("City", City);
        }
    }
});
//# sourceMappingURL=city.model.js.map