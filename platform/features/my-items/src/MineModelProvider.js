
define(
    [],
    function () {
        "use strict";

        function MineModelProvider($q) {
            var pages = {};

            // Add pages
            pages['portfolio'] = { name: "Portfolio", type: "mine.portfolio", location: "mine" };

            return {
                getModels: function () {
                    return $q.when(pages);
                }
            };
        }

        return MineModelProvider
    }
);