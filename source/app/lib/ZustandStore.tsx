// app/lib/ZustandStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = function(argFoo, argBar) { // Original name: defaultStatesAreEqual
        michal = argFoo;
        entity = argBar;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/ZustandStore.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createZustandStore
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = function(argFoo) { // Original name: useState
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = arguments[1];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00002_ip = 16; continue _fun00001 }
 9:
                tangon = _closure1_slot2;
 16:
                michal = _closure2_slot1;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        var _closure2_slot3 = report;
        tangon = function(argFoo) { // Original name: getState
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                michal = _closure2_slot1;
                entity = michal.getState;
                zuuluu = entity.bind(michal)();
                michal = null;
                entity = zuuluu;
                if(!(michal != tangon)) { _fun00004_ip = 36; continue _fun00003 }
 29:
                michal = undefined;
                entity = tangon.bind(michal)(zuuluu);
 36:
                return entity;
            }
        };
        var _closure2_slot4 = tangon;
        option = _closure1_slot0;
        verify = _closure1_slot1;
        entity = 0;
        entity = verify[entity];
        golfie = undefined;
        oscard = option.bind(golfie)(entity);
        zuuluu = oscard.createWithEqualityFn;
        entity = 1;
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
                michal = 2;
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
            entity = 2;
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = arguments[1];
                michal = argFoo;
                var _closure3_slot0 = michal;
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00006_ip = 25; continue _fun00005 }
 18:
                tangon = _closure1_slot2;
 25:
                michal = _closure2_slot3;
                entity = function(argFoo) {
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = entity[michal];
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['useField'] = tangon;
        tangon = function(argFoo) { // Original name: getField
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = _closure2_slot4;
            michal = undefined;
            entity = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity = entity[michal];
                return entity;
            };
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