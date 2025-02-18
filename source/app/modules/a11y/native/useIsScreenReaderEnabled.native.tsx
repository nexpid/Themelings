// app/modules/a11y/native/useIsScreenReaderEnabled.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AccessibilityInfo;
    var _closure1_slot2 = tangon;
    tangon = function(argFoo) { // Original name: SCREEN_READER_ENABLED_GETTER
        entity = argFoo;
        entity = entity.screenReaderEnabled;
        return entity;
    };
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.create;
    tangon = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = function(argFoo) { // Original name: updateScreenReaderEnabled
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
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = function(argFoo) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.screenReaderEnabled;
                        michal = _closure3_slot0;
                        if(!(tangon !== michal)) { _fun00002_ip = 34; continue _fun00001 }
 20:
                        michal = {};
                        zuuluu = _closure3_slot0;
                        michal['screenReaderEnabled'] = zuuluu;
                        entity = michal;
 34:
                        return entity;
                    }
                };
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot1 = tangon;
        zuuluu = _closure1_slot2;
        michal = zuuluu.isScreenReaderEnabled;
        report = michal.bind(zuuluu)();
        michal = report.then;
        report = michal.bind(report)(tangon);
        michal = report.catch;
        entity = function() {
            zuuluu = _closure2_slot1;
            entity = undefined;
            michal = false;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = michal.bind(report)(entity);
        michal = zuuluu.addEventListener;
        entity = 'screenReaderChanged';
        entity = michal.bind(zuuluu)(entity, tangon);
        entity = {};
        michal = false;
        entity['screenReaderEnabled'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/a11y/native/useIsScreenReaderEnabled.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: addScreenReaderEnabledListener
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = zuuluu.subscribe;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.screenReaderEnabled;
            michal = _closure2_slot0;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['addScreenReaderEnabledListener'] = tangon;
    tangon = function() { // Original name: getIsScreenReaderEnabled
        michal = _closure1_slot4;
        entity = michal.getState;
        entity = entity.bind(michal)();
        entity = entity.screenReaderEnabled;
        return entity;
    };
    zuuluu['getIsScreenReaderEnabled'] = tangon;
    michal = function() { // Original name: useIsScreenReaderEnabled
        zuuluu = _closure1_slot4;
        michal = _closure1_slot3;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['useIsScreenReaderEnabled'] = michal;
    return entity;
})();