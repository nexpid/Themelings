// app/modules/clan/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot9 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/clan/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGetJoinRequestAndGuildForInterviewChannel
        golf = _closure1_slot4;
        zulu = golf.useState;
        yankee = false;
        zulu = zulu.bind(golf)(yankee);
        offset = _closure1_slot3;
        verify = undefined;
        options = 2;
        zulu = offset.bind(verify)(zulu, options);
        report = 0;
        tango = zulu[report];
        oscar = 1;
        zulu = zulu[oscar];
        var _closure2_slot0 = zulu;
        zulu = golf.useState;
        zulu = zulu.bind(golf)(yankee);
        zulu = offset.bind(verify)(zulu, options);
        report = zulu[report];
        var _closure2_slot1 = report;
        zulu = zulu[oscar];
        var _closure2_slot2 = zulu;
        oscar = _closure1_slot1;
        offset = _closure1_slot2;
        zulu = 7;
        zulu = offset[zulu];
        options = oscar.bind(verify)(zulu);
        oscar = options.cast;
        zulu = argFoo;
        options = oscar.bind(options)(zulu);
        var _closure2_slot3 = options;
        oscar = _closure1_slot0;
        zulu = 8;
        zulu = offset[zulu];
        verify = oscar.bind(verify)(zulu);
        oscar = verify.useStateFromStoresObject;
        offset = _closure1_slot5;
        zulu = new Array(4);
        zulu[0] = offset;
        offset = _closure1_slot6;
        zulu[1] = offset;
        offset = _closure1_slot7;
        zulu[2] = offset;
        mike = _closure1_slot8;
        zulu[3] = mike;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.getRequest;
                entity = _closure2_slot3;
                report = mike.bind(zulu)(entity);
                zulu = null;
                if(!(zulu != report)) { _fun00002_ip = 125; continue _fun00001 }
 31:
                oscar = _closure1_slot7;
                mike = oscar.getGuild;
                entity = report.guildId;
                mike = mike.bind(oscar)(entity);
                if(!(zulu == mike)) { _fun00002_ip = 74; continue _fun00001 }
 54:
                golf = _closure1_slot6;
                oscar = golf.getJoinRequestGuild;
                entity = report.guildId;
                mike = oscar.bind(golf)(entity);
 74:
                entity = {};
                entity['joinRequest'] = report;
                zulu = zulu != mike;
                if(!zulu) { _fun00002_ip = 114; continue _fun00001 }
 88:
                oscar = _closure1_slot8;
                report = oscar.can;
                tango = _closure1_slot9;
                tango = tango.KICK_MEMBERS;
                zulu = report.bind(oscar)(tango, mike);
 114:
                entity['isModmin'] = zulu;
                entity['guild'] = mike;
                return entity;
 125:
                entity = {'joinRequest': null, 'isModmin': false, 'guild': null};
                return entity;
            }
        };
        mike = oscar.bind(verify)(zulu, mike);
        zulu = mike.joinRequest;
        var _closure2_slot4 = zulu;
        mike = mike.guild;
        var _closure2_slot5 = mike;
        verify = golf.useEffect;
        oscar = new Array(2);
        oscar[0] = mike;
        oscar[1] = report;
        report = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot5;
                mike = null;
                mike = mike != zulu;
                if(mike) { _fun00004_ip = 20; continue _fun00003 }
 16:
                mike = _closure2_slot1;
 20:
                if(mike) { _fun00004_ip = 69; continue _fun00003 }
 23:
                mike = _closure2_slot2;
                zulu = undefined;
                entity = true;
                entity = mike.bind(zulu)(entity);
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 9;
                entity = tango[entity];
                mike = mike.bind(zulu)(entity);
                entity = mike.fetchRequestToJoinGuilds;
                entity = entity.bind(mike)();
 69:
                entity = undefined;
                return entity;
            }
        };
        report = verify.bind(golf)(report, oscar);
        oscar = golf.useEffect;
        report = new Array(2);
        report[0] = zulu;
        report[1] = options;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = _closure2_slot4;
                mike = null;
                if(!(mike == zulu)) { _fun00006_ip = 82; continue _fun00005 }
 13:
                zulu = _closure2_slot0;
                tango = undefined;
                mike = true;
                mike = zulu.bind(tango)(mike);
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 9;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.fetchGuildJoinRequest;
                entity = _closure2_slot3;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.finally;
                entity = function() {
                    zulu = _closure2_slot0;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 82:
                entity = undefined;
                return entity;
            }
        };
        entity = oscar.bind(golf)(entity, report);
        entity = {};
        entity['loading'] = tango;
        entity['joinRequest'] = zulu;
        entity['joinRequestGuild'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();