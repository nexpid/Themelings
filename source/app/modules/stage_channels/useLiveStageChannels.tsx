// app/modules/stage_channels/useLiveStageChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: useAllVisibleChannels
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        golf = _closure1_slot2;
        zulu = 4;
        options = golf[zulu];
        tango = undefined;
        yankee = report.bind(tango)(options);
        offset = yankee.useStateFromStoresArray;
        options = _closure1_slot3;
        verify = new Array(1);
        verify[0] = options;
        options = new Array(1);
        options[0] = oscar;
        oscar = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 5;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.isNotNullish;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = offset.bind(yankee)(verify, oscar, options);
        var _closure2_slot1 = oscar;
        zulu = golf[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure2_slot1;
            mike = zulu.filter;
            entity = function(argFoo) {
                tango = _closure1_slot4;
                zulu = tango.can;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                mike = entity.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/useLiveStageChannels.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useLiveStageChannels
        options = argFoo;
        var _closure2_slot0 = options;
        zulu = _closure1_slot6;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        mike = 4;
        report = report[mike];
        mike = undefined;
        golf = oscar.bind(mike)(report);
        oscar = golf.useStateFromStoresArray;
        tango = _closure1_slot5;
        report = new Array(1);
        report[0] = tango;
        tango = new Array(1);
        tango[0] = options;
        entity = function() {
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.keys;
            report = _closure1_slot5;
            tango = report.getStageInstancesByGuild;
            entity = _closure2_slot0;
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = oscar.bind(golf)(report, entity, tango);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['default'] = tango;
    tango = function() { // Original name: getAllLiveStageChannels
        mike = _closure1_slot5;
        entity = mike.getAllStageInstances;
        tango = entity.bind(mike)();
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun115596: for(var _fun115596_ip = 0; ; ) switch(_fun115596_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot3;
                zulu = report.getChannel;
                mike = argBar;
                mike = mike.channel_id;
                zulu = zulu.bind(report)(mike);
                mike = null;
                mike = mike != zulu;
                if(!mike) { _fun115596_ip = 81; continue _fun115596 }
 37:
                oscar = _closure1_slot4;
                report = oscar.can;
                options = _closure1_slot0;
                golf = _closure1_slot2;
                tango = 3;
                golf = golf[tango];
                tango = undefined;
                tango = options.bind(tango)(golf);
                tango = tango.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                mike = report.bind(oscar)(tango, zulu);
 81:
                if(!mike) { _fun115596_ip = 94; continue _fun115596 }
 84:
                mike = entity.push;
                mike = mike.bind(entity)(zulu);
 94:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getAllLiveStageChannels'] = tango;
    mike = function() { // Original name: useAllLiveStageChannels
        zulu = _closure1_slot6;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 4;
        tango = tango[mike];
        mike = undefined;
        golf = report.bind(mike)(tango);
        oscar = golf.useStateFromStores;
        entity = _closure1_slot5;
        report = new Array(1);
        report[0] = entity;
        tango = function() {
            mike = _closure1_slot5;
            entity = mike.getAllStageInstances;
            zulu = entity.bind(mike)();
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = new Array(0);
        entity = oscar.bind(golf)(report, tango, entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useAllLiveStageChannels'] = mike;
    return entity;
})();