// app/modules/stage_channels/native/StageChannelListStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createWithEqualityFn;
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {'showActiveSpeakerPill': false, 'setShowActiveSpeakerPill': null, 'listRef': null};
        zulu = function(argFoo) { // Original name: setShowActiveSpeakerPill
            mike = argFoo;
            var _closure3_slot0 = mike;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.batchUpdates;
            entity = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['showActiveSpeakerPill'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['setShowActiveSpeakerPill'] = zulu;
        mike = function(argFoo) { // Original name: setListRef
            mike = argFoo;
            var _closure3_slot0 = mike;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.batchUpdates;
            entity = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['listRef'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['setListRef'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/native/StageChannelListStore.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useActiveSpeakerPillScrollHandler
        report = _closure1_slot4;
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 4;
        entity = oscar[entity];
        oscar = undefined;
        entity = tango.bind(oscar)(entity);
        tango = entity.shallow;
        entity = function(argFoo) {
            mike = argFoo;
            zulu = mike.listRef;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.setListRef;
            entity[1] = mike;
            return entity;
        };
        report = report.bind(oscar)(entity, tango);
        tango = _closure1_slot2;
        entity = 2;
        tango = tango.bind(oscar)(report, entity);
        entity = 0;
        oscar = tango[entity];
        var _closure2_slot0 = oscar;
        entity = 1;
        entity = tango[entity];
        var _closure2_slot1 = entity;
        report = _closure1_slot3;
        tango = report.useCallback;
        zulu = new Array(1);
        zulu[0] = entity;
        entity = function(argFoo) {
            zulu = _closure2_slot1;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        zulu = tango.bind(report)(entity, zulu);
        entity = new Array(2);
        entity[0] = zulu;
        tango = report.useCallback;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun00002_ip = 42; continue _fun00001 }
 13:
                zulu = _closure2_slot0;
                mike = zulu.scrollToLocation;
                entity = {'section': 0, 'item': 0, 'animated': true};
                entity = mike.bind(zulu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity[1] = mike;
        return entity;
    };
    zulu['useActiveSpeakerPillScrollHandler'] = tango;
    mike = function() { // Original name: useActiveSpeakerPillState
        tango = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 4;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.shallow;
        entity = function(argFoo) {
            mike = argFoo;
            zulu = mike.showActiveSpeakerPill;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.setShowActiveSpeakerPill;
            entity[1] = mike;
            return entity;
        };
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    zulu['useActiveSpeakerPillState'] = mike;
    return entity;
})();