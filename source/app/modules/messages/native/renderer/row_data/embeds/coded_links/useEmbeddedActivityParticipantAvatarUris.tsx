// app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useEmbeddedActivityParticipantAvatarUris
        zulu = argFoo;
        mike = zulu.activity;
        var _closure2_slot0 = mike;
        oscar = zulu.guildId;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot2;
        golf = tango.useMemo;
        report = new Array(1);
        report[0] = mike;
        mike = function() {
            _fun70294: for(var _fun70294_ip = 0; ; ) switch(_fun70294_ip) {
 0:
                entity = global;
                zulu = entity.Array;
                mike = zulu.from;
                entity = _closure2_slot0;
                tango = null;
                oscar = tango == entity;
                entity = undefined;
                if(oscar) { _fun70294_ip = 41; continue _fun70294 }
 31:
                report = _closure2_slot0;
                entity = report.userIds;
 41:
                if(!(tango == entity)) { _fun70294_ip = 49; continue _fun70294 }
 45:
                entity = new Array(0);
 49:
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        mike = golf.bind(tango)(mike, report);
        var _closure2_slot2 = mike;
        options = _closure1_slot0;
        golf = _closure1_slot1;
        report = 4;
        golf = golf[report];
        report = undefined;
        options = options.bind(report)(golf);
        golf = options.useStateFromStoresArray;
        zulu = _closure1_slot4;
        report = new Array(1);
        report[0] = zulu;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure2_slot2;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot4;
                mike = zulu.getUser;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = golf.bind(options)(report, mike, zulu);
        var _closure2_slot3 = report;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            zulu = _closure2_slot3;
            mike = zulu.filter;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.isNotNullish;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.map;
            entity = function(argFoo) {
                tango = argFoo;
                zulu = tango.getAvatarURL;
                mike = _closure2_slot1;
                entity = 64;
                zulu = zulu.bind(tango)(mike, entity);
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = '';
                entity = mike.bind(entity)(zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getEmbeddedActivityParticipantAvatarUris
        _fun70299: for(var _fun70299_ip = 0; ; ) switch(_fun70299_ip) {
 0:
            mike = argFoo;
            tango = mike.channelId;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            zulu = mike.applicationId;
            var _closure2_slot1 = zulu;
            golf = mike.activity;
            oscar = null;
            if(!(oscar == golf)) { _fun70299_ip = 75; continue _fun70299 }
 40:
            zulu = _closure1_slot3;
            mike = zulu.getEmbeddedActivitiesForChannel;
            tango = mike.bind(zulu)(tango);
            zulu = tango.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.applicationId;
                entity = _closure2_slot1;
                entity = mike === entity;
                return entity;
            };
            golf = zulu.bind(tango)(mike);
 75:
            mike = global;
            tango = mike.Array;
            zulu = tango.from;
            options = oscar == golf;
            report = undefined;
            mike = undefined;
            if(options) { _fun70299_ip = 105; continue _fun70299 }
 99:
            mike = golf.userIds;
 105:
            if(!(oscar == mike)) { _fun70299_ip = 113; continue _fun70299 }
 109:
            mike = new Array(0);
 113:
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun70301: for(var _fun70301_ip = 0; ; ) switch(_fun70301_ip) {
 0:
                    zulu = _closure1_slot4;
                    mike = zulu.getUser;
                    entity = argFoo;
                    report = mike.bind(zulu)(entity);
                    entity = null;
                    entity = entity == report;
                    zulu = undefined;
                    if(entity) { _fun70301_ip = 54; continue _fun70301 }
 32:
                    tango = report.getAvatarURL;
                    mike = _closure2_slot0;
                    entity = 64;
                    zulu = tango.bind(report)(mike, entity);
 54:
                    entity = global;
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = '';
                    entity = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.isNotNullish;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getEmbeddedActivityParticipantAvatarUris'] = mike;
    return entity;
})();