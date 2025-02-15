// app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argCorge;
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
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildRoleSubscriptionFormat;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    tango = tango.VIEW_CHANNEL;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useRoleSubscriptionFormat
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getGuild;
                entity = _closure2_slot0;
                oscar = zulu.bind(tango)(entity);
                entity = null;
                zulu = entity != oscar;
                entity = undefined;
                if(!zulu) { _fun00002_ip = 66; continue _fun00001 }
 35:
                report = _closure1_slot4;
                tango = report.getRole;
                zulu = oscar.id;
                mike = oscar.getEveryoneRoleId;
                mike = mike.bind(oscar)();
                entity = tango.bind(report)(zulu, mike);
 66:
                return entity;
            }
        };
        oscar = report.bind(oscar)(tango, zulu);
        var _closure2_slot1 = oscar;
        report = _closure1_slot3;
        tango = report.useMemo;
        zulu = new Array(1);
        zulu[0] = oscar;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                if(!(entity != zulu)) { _fun00004_ip = 78; continue _fun00003 }
 13:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 5;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.has;
                mike = _closure2_slot1;
                zulu = mike.permissions;
                mike = _closure1_slot6;
                mike = tango.bind(report)(zulu, mike);
                if(mike) { _fun00004_ip = 78; continue _fun00003 }
 66:
                entity = _closure1_slot5;
                entity = entity.ALL_CHANNELS;
                _fun00004_ip = 91; continue _fun00003;
 78:
                mike = _closure1_slot5;
                entity = mike.SOME_CHANNELS;
 91:
                return entity;
            }
        };
        zulu = tango.bind(report)(entity, zulu);
        entity = {};
        entity['format'] = zulu;
        mike = _closure1_slot5;
        mike = mike.ALL_CHANNELS;
        mike = zulu === mike;
        entity['isFullServerGating'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();