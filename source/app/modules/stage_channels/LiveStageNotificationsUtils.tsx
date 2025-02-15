// app/modules/stage_channels/LiveStageNotificationsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/LiveStageNotificationsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCanSendStageStartNotification
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot3;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00002_ip = 49; continue _fun00001 }
 16:
                report = _closure1_slot3;
                tango = report.can;
                zulu = _closure1_slot4;
                zulu = zulu.MENTION_EVERYONE;
                mike = _closure2_slot0;
                entity = tango.bind(report)(zulu, mike);
 49:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCanSendStageStartNotification'] = tango;
    mike = function(argFoo) { // Original name: useDefaultSendStartStageNotificationToggle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = null;
            tango = mike == entity;
            golf = undefined;
            options = undefined;
            if(tango) { _fun00004_ip = 23; continue _fun00003 }
 18:
            options = entity.guild_id;
 23:
            var _closure2_slot0 = options;
            oscar = _closure1_slot0;
            verify = _closure1_slot1;
            report = 3;
            report = verify[report];
            golf = oscar.bind(golf)(report);
            oscar = golf.useStateFromStores;
            tango = _closure1_slot2;
            report = new Array(1);
            report[0] = tango;
            tango = new Array(1);
            tango[0] = options;
            zulu = function() {
                zulu = _closure1_slot2;
                mike = zulu.getMemberCount;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = oscar.bind(golf)(report, zulu, tango);
            entity = mike == entity;
            if(entity) { _fun00004_ip = 116; continue _fun00003 }
 96:
            mike = mike == tango;
            if(mike) { _fun00004_ip = 113; continue _fun00003 }
 103:
            zulu = 50000;
            mike = tango > zulu;
 113:
            entity = !mike;
 116:
            return entity;
        }
    };
    zulu['useDefaultSendStartStageNotificationToggle'] = mike;
    return entity;
})();