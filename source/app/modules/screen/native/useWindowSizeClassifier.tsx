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
            michal = argFoo;
            entity = 360;
            if(!(!(michal <= entity))) { _fun00002_ip = 78; continue _fun00001 }
 13:
            entity = 600;
            if(!(!(michal <= entity))) { _fun00002_ip = 63; continue _fun00001 }
 23:
            entity = 840;
            if(!(!(michal <= entity))) { _fun00002_ip = 48; continue _fun00001 }
 33:
            entity = _closure1_slot3;
            entity = entity.XLARGE;
            _fun00002_ip = 61; continue _fun00001;
 48:
            michal = _closure1_slot3;
            entity = michal.LARGE;
 61:
            _fun00002_ip = 76; continue _fun00001;
 63:
            michal = _closure1_slot3;
            entity = michal.NORMAL;
 76:
            _fun00002_ip = 91; continue _fun00001;
 78:
            michal = _closure1_slot3;
            entity = michal.SMALL;
 91:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
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
    var _closure1_slot3 = tangon;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/screen/native/useWindowSizeClassifier.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: useWindowSizeClassifier
        zuuluu = _closure1_slot4;
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
        zuuluu = _closure1_slot4;
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