// app/modules/screen/native/useWindowSizeClassifier.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    entity = function(argFoo) { // Original name: calculateFromWidth
        _fun54354: for(var _fun54354_ip = 0; ; ) switch(_fun54354_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot3;
            if(!(!(zulu <= entity))) { _fun54354_ip = 66; continue _fun54354 }
 14:
            entity = _closure1_slot4;
            if(!(!(zulu <= entity))) { _fun54354_ip = 54; continue _fun54354 }
 22:
            entity = _closure1_slot5;
            if(!(!(zulu <= entity))) { _fun54354_ip = 42; continue _fun54354 }
 30:
            entity = _closure1_slot6;
            entity = entity.XLARGE;
            _fun54354_ip = 52; continue _fun54354;
 42:
            zulu = _closure1_slot6;
            entity = zulu.LARGE;
 52:
            _fun54354_ip = 64; continue _fun54354;
 54:
            zulu = _closure1_slot6;
            entity = zulu.NORMAL;
 64:
            _fun54354_ip = 76; continue _fun54354;
 66:
            mike = _closure1_slot6;
            entity = mike.SMALL;
 76:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 360;
    var _closure1_slot3 = entity;
    entity = 600;
    var _closure1_slot4 = entity;
    entity = 840;
    var _closure1_slot5 = entity;
    tango = {};
    golf = 0;
    tango['SMALL'] = golf;
    entity = 'SMALL';
    tango[golf] = entity;
    entity = 1;
    tango['NORMAL'] = entity;
    golf = 'NORMAL';
    tango[entity] = golf;
    options = 2;
    tango['LARGE'] = options;
    golf = 'LARGE';
    tango[options] = golf;
    options = 3;
    tango['XLARGE'] = options;
    golf = 'XLARGE';
    tango[options] = golf;
    var _closure1_slot6 = tango;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/screen/native/useWindowSizeClassifier.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: useWindowSizeClassifier
        zulu = _closure1_slot7;
        tango = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        entity = mike[entity];
        mike = undefined;
        entity = tango.bind(mike)(entity);
        entity = entity.bind(mike)();
        entity = entity.width;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['default'] = report;
    zulu['WindowSizeClassifier'] = tango;
    mike = function() { // Original name: getWindowSizeClassifier
        zulu = _closure1_slot7;
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 0;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = tango.getAppContainerDimensions;
        entity = entity.bind(tango)();
        entity = entity.width;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['getWindowSizeClassifier'] = mike;
    return entity;
})();