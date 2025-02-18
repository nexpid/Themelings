// app/lib/ZustandStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: defaultStatesAreEqual
        michal = argFoo;
        entity = argBar;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/ZustandStore.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createZustandStore
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = function(argFoo, argBar) { // Original name: useState
            tangon = _closure2_slot1;
            zuuluu = undefined;
            michal = argFoo;
            entity = argBar;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        var _closure2_slot3 = report;
        tangon = function(argFoo) { // Original name: getState
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                michal = _closure2_slot1;
                entity = michal.getState;
                zuuluu = entity.bind(michal)();
                michal = null;
                entity = zuuluu;
                if(!(michal != tangon)) { _fun00002_ip = 36; continue _fun00001 }
 29:
                michal = undefined;
                entity = tangon.bind(michal)(zuuluu);
 36:
                return entity;
            }
        };
        var _closure2_slot4 = tangon;
        entity = function(argFoo) { // Original name: makeFieldSelector
            michal = argFoo;
            var _closure3_slot0 = michal;
            entity = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity = entity[michal];
                return entity;
            };
            return entity;
        };
        var _closure2_slot5 = entity;
        option = _closure1_slot0;
        verify = _closure1_slot1;
        entity = 1;
        entity = verify[entity];
        golfie = undefined;
        oscard = option.bind(golfie)(entity);
        zuuluu = oscard.createWithEqualityFn;
        entity = 2;
        entity = verify[entity];
        option = option.bind(golfie)(entity);
        golfie = option.subscribeWithSelector;
        entity = function(argFoo, argBar, argBaz) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = function(argFoo) {
                michal = argFoo;
                var _closure4_slot0 = michal;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.batchUpdates;
                entity = function() {
                    zuuluu = _closure3_slot0;
                    michal = _closure4_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = argBar;
            entity = argBaz;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        };
        entity = golfie.bind(option)(entity);
        entity = zuuluu.bind(oscard)(entity);
        var _closure2_slot1 = entity;
        zuuluu = function(argFoo) { // Original name: setState
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.setState;
                entity = _closure3_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot2 = zuuluu;
        entity = {};
        entity['useState'] = report;
        entity['getState'] = tangon;
        tangon = function(argFoo) { // Original name: useField
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                option = argFoo;
                tangon = arguments[1];
                var _closure3_slot0 = option;
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00004_ip = 25; continue _fun00003 }
 18:
                tangon = _closure1_slot3;
 25:
                michal = _closure2_slot3;
                golfie = _closure1_slot2;
                oscard = golfie.useMemo;
                report = new Array(1);
                report[0] = option;
                entity = function() {
                    zuuluu = _closure2_slot5;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = oscard.bind(golfie)(entity, report);
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['useField'] = tangon;
        tangon = function(argFoo) { // Original name: getField
            zuuluu = _closure2_slot4;
            tangon = _closure2_slot5;
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(entity);
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity['getField'] = tangon;
        tangon = function(argFoo, argBar, argBaz) { // Original name: subscribe
            report = _closure2_slot1;
            tangon = report.subscribe;
            zuuluu = argFoo;
            michal = argBar;
            entity = argBaz;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity['subscribe'] = tangon;
        entity['setState'] = zuuluu;
        michal = function() { // Original name: resetState
            zuuluu = _closure2_slot1;
            michal = zuuluu.getInitialState;
            zuuluu = michal.bind(zuuluu)();
            michal = _closure2_slot2;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        entity['resetState'] = michal;
        return entity;
    };
    zuuluu['createZustandStore'] = michal;
    return entity;
})();