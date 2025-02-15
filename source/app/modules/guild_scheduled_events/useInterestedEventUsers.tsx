// app/modules/guild_scheduled_events/useInterestedEventUsers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = tango.useMemo;
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildScheduledEventUserResponses;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/useInterestedEventUsers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useInterestedEventUsers
        offset = argFoo;
        zulu = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = zulu;
        options = _closure1_slot0;
        verify = _closure1_slot1;
        golf = 3;
        report = verify[golf];
        tango = undefined;
        backup = options.bind(tango)(report);
        foxtrot = backup.useStateFromStoresArray;
        report = _closure1_slot3;
        romeo = new Array(1);
        romeo[0] = report;
        yankee = new Array(1);
        yankee[0] = offset;
        oscar = function() {
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            oscar = _closure1_slot3;
            report = oscar.getUsersForGuildEvent;
            tango = _closure2_slot0;
            entity = null;
            entity = report.bind(oscar)(tango, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = foxtrot.bind(backup)(romeo, oscar, yankee);
        var _closure2_slot2 = oscar;
        golf = verify[golf];
        verify = options.bind(tango)(golf);
        options = verify.useStateFromStoresArray;
        golf = new Array(1);
        golf[0] = report;
        report = new Array(2);
        report[0] = offset;
        report[1] = zulu;
        zulu = function() {
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            oscar = _closure1_slot3;
            report = oscar.getUsersForGuildEvent;
            tango = _closure2_slot0;
            entity = _closure2_slot1;
            entity = report.bind(oscar)(tango, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = options.bind(verify)(golf, zulu, report);
        var _closure2_slot3 = report;
        zulu = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            tango = _closure2_slot3;
            oscar = tango.reduce;
            report = function(argFoo, argBar) {
                entity = argFoo;
                zulu = argBar;
                mike = zulu.user_id;
                entity[mike] = zulu;
                return entity;
            };
            zulu = {};
            zulu = oscar.bind(tango)(report, zulu);
            var _closure3_slot0 = zulu;
            report = _closure2_slot2;
            zulu = report.filter;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = entity.user_id;
                    mike = mike[entity];
                    entity = null;
                    entity = entity == mike;
                    if(entity) { _fun00002_ip = 52; continue _fun00001 }
 29:
                    zulu = mike.response;
                    mike = _closure1_slot4;
                    mike = mike.INTERESTED;
                    entity = zulu === mike;
 52:
                    return entity;
                }
            };
            report = zulu.bind(report)(entity);
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.response;
                entity = _closure1_slot4;
                entity = entity.INTERESTED;
                entity = mike === entity;
                return entity;
            };
            tango = zulu.bind(tango)(entity);
            entity = global;
            entity = entity.Set;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            verify = zulu;
            entity = new verify[entity](options);
            entity = entity instanceof Object ? entity : zulu;
            var _closure3_slot1 = entity;
            entity = new Array(0);
            var _closure3_slot2 = entity;
            zulu = function(argFoo) { // Original name: addUserToAllInterested
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = _closure3_slot1;
                    tango = report.has;
                    zulu = entity.user_id;
                    zulu = tango.bind(report)(zulu);
                    if(zulu) { _fun00004_ip = 63; continue _fun00003 }
 29:
                    tango = _closure3_slot2;
                    zulu = tango.push;
                    zulu = zulu.bind(tango)(entity);
                    zulu = _closure3_slot1;
                    mike = zulu.add;
                    entity = entity.user_id;
                    entity = mike.bind(zulu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            mike = report.forEach;
            mike = mike.bind(report)(zulu);
            mike = tango.forEach;
            mike = mike.bind(tango)(zulu);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();