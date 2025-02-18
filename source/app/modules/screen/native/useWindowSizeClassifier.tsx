// app/modules/screen/native/useWindowSizeClassifier.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    entity = function(argFoo) { // Original name: calculateFromWidth
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot3;
            if(!(!(zuuluu <= entity))) { _fun00002_ip = 66; continue _fun00001 }
 14:
            entity = _closure1_slot4;
            if(!(!(zuuluu <= entity))) { _fun00002_ip = 54; continue _fun00001 }
 22:
            entity = _closure1_slot5;
            if(!(!(zuuluu <= entity))) { _fun00002_ip = 42; continue _fun00001 }
 30:
            entity = _closure1_slot6;
            entity = entity.XLARGE;
            _fun00002_ip = 52; continue _fun00001;
 42:
            zuuluu = _closure1_slot6;
            entity = zuuluu.LARGE;
 52:
            _fun00002_ip = 64; continue _fun00001;
 54:
            zuuluu = _closure1_slot6;
            entity = zuuluu.NORMAL;
 64:
            _fun00002_ip = 76; continue _fun00001;
 66:
            michal = _closure1_slot6;
            entity = michal.SMALL;
 76:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 360;
    var _closure1_slot3 = entity;
    entity = 600;
    var _closure1_slot4 = entity;
    entity = 840;
    var _closure1_slot5 = entity;
    tangon = {};
    golfie = 0;
    tangon['SMALL'] = golfie;
    entity = 'SMALL';
    tangon[golfie] = entity;
    entity = 1;
    tangon['NORMAL'] = entity;
    golfie = 'NORMAL';
    tangon[entity] = golfie;
    option = 2;
    tangon['LARGE'] = option;
    golfie = 'LARGE';
    tangon[option] = golfie;
    option = 3;
    tangon['XLARGE'] = option;
    golfie = 'XLARGE';
    tangon[option] = golfie;
    var _closure1_slot6 = tangon;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/screen/native/useWindowSizeClassifier.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: useWindowSizeClassifier
        zuuluu = _closure1_slot7;
        tangon = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        entity = michal[entity];
        michal = undefined;
        entity = tangon.bind(michal)(entity);
        entity = entity.bind(michal)();
        entity = entity.width;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['WindowSizeClassifier'] = tangon;
    michal = function() { // Original name: getWindowSizeClassifier
        zuuluu = _closure1_slot7;
        tangon = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 0;
        entity = michal[entity];
        michal = undefined;
        tangon = tangon.bind(michal)(entity);
        entity = tangon.getAppContainerDimensions;
        entity = entity.bind(tangon)();
        entity = entity.width;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['getWindowSizeClassifier'] = michal;
    return entity;
})();