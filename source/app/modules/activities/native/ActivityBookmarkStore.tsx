// app/modules/activities/native/ActivityBookmarkStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.create;
    tango = function() {
        entity = {'channelId': null, 'guildId': null};
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot3 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/native/ActivityBookmarkStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['useActivityBookmarkStore'] = tango;
    tango = function(argFoo) { // Original name: setChannelId
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['channelId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setChannelId'] = tango;
    tango = function(argFoo) { // Original name: setGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            tango = null;
            if(!(tango != options)) { _fun00002_ip = 76; continue _fun00001 }
 15:
            mike = global;
            oscar = mike.Object;
            report = oscar.values;
            golf = _closure1_slot2;
            zulu = golf.getMutableGuildChannelsForGuild;
            zulu = zulu.bind(golf)(options);
            oscar = report.bind(oscar)(zulu);
            report = oscar.find;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = mike.isGuildVoice;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            var _closure2_slot1 = zulu;
            if(!(tango == zulu)) { _fun00002_ip = 121; continue _fun00001 }
 76:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 2;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.batchUpdates;
            tango = function() {
                zulu = _closure1_slot3;
                mike = zulu.setState;
                entity = {};
                tango = _closure2_slot0;
                entity['guildId'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = report.bind(oscar)(tango);
            return zulu;
 121:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.batchUpdates;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.setState;
                entity = {};
                report = _closure2_slot0;
                entity['guildId'] = report;
                tango = _closure2_slot1;
                tango = tango.id;
                entity['channelId'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['setGuildId'] = tango;
    mike = function() { // Original name: resetActivityBookmarkStore
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = {'channelId': null, 'guildId': null};
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetActivityBookmarkStore'] = mike;
    return entity;
})();