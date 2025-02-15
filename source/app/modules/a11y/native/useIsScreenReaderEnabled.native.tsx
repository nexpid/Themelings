// app/modules/a11y/native/useIsScreenReaderEnabled.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AccessibilityInfo;
    var _closure1_slot2 = tango;
    tango = function(argFoo) { // Original name: SCREEN_READER_ENABLED_GETTER
        entity = argFoo;
        entity = entity.screenReaderEnabled;
        return entity;
    };
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.create;
    tango = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = function(argFoo) { // Original name: updateScreenReaderEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = undefined;
                entity = function(argFoo) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        entity = argFoo;
                        tango = entity.screenReaderEnabled;
                        mike = _closure3_slot0;
                        if(!(tango !== mike)) { _fun00002_ip = 34; continue _fun00001 }
 20:
                        mike = {};
                        zulu = _closure3_slot0;
                        mike['screenReaderEnabled'] = zulu;
                        entity = mike;
 34:
                        return entity;
                    }
                };
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot1 = tango;
        zulu = _closure1_slot2;
        mike = zulu.isScreenReaderEnabled;
        report = mike.bind(zulu)();
        mike = report.then;
        report = mike.bind(report)(tango);
        mike = report.catch;
        entity = function() {
            zulu = _closure2_slot1;
            entity = undefined;
            mike = false;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(report)(entity);
        mike = zulu.addEventListener;
        entity = 'screenReaderChanged';
        entity = mike.bind(zulu)(entity, tango);
        entity = {};
        mike = false;
        entity['screenReaderEnabled'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/a11y/native/useIsScreenReaderEnabled.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: addScreenReaderEnabledListener
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = zulu.subscribe;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.screenReaderEnabled;
            mike = _closure2_slot0;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['addScreenReaderEnabledListener'] = tango;
    tango = function() { // Original name: getIsScreenReaderEnabled
        mike = _closure1_slot4;
        entity = mike.getState;
        entity = entity.bind(mike)();
        entity = entity.screenReaderEnabled;
        return entity;
    };
    zulu['getIsScreenReaderEnabled'] = tango;
    mike = function() { // Original name: useIsScreenReaderEnabled
        zulu = _closure1_slot4;
        mike = _closure1_slot3;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['useIsScreenReaderEnabled'] = mike;
    return entity;
})();