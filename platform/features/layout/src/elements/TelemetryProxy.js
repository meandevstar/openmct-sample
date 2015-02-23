/*global define*/

define(
    ['./TextProxy', './AccessorMutator'],
    function (TextProxy, AccessorMutator) {
        'use strict';

        /**
         * Selection proxy for telemetry elements in a fixed position view.
         *
         * Note that arguments here are meant to match those expected
         * by `Array.prototype.map`
         *
         * @constructor
         * @param element the fixed position element, as stored in its
         *        configuration
         * @param index the element's index within its array
         * @param {Array} elements the full array of elements
         */
        function TelemetryProxy(element, index, elements) {
            var proxy = new TextProxy(element, index, elements);

            // Expose the domain object identifier
            proxy.id = element.id;

            return proxy;
        }

        return TelemetryProxy;
    }
);