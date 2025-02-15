// app/modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx
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
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUnreadSettingNotice
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        golf = _closure1_slot0;
        yankee = _closure1_slot2;
        tango = 3;
        tango = yankee[tango];
        offset = undefined;
        oscar = golf.bind(offset)(tango);
        report = oscar.useShouldUseNewNotificationSystem;
        tango = 'useShouldRenderBanner';
        options = report.bind(oscar)(tango);
        var _closure2_slot1 = options;
        oscar = _closure1_slot4;
        report = oscar.useState;
        tango = '';
        verify = report.bind(oscar)(tango);
        report = _closure1_slot3;
        tango = 2;
        verify = report.bind(offset)(verify, tango);
        tango = 0;
        tango = verify[tango];
        var _closure2_slot2 = tango;
        report = 1;
        report = verify[report];
        var _closure2_slot3 = report;
        romeo = oscar.useEffect;
        report = zulu.id;
        verify = new Array(1);
        verify[0] = report;
        report = function() {
            zulu = _closure2_slot3;
            entity = undefined;
            mike = '';
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        report = romeo.bind(oscar)(report, verify);
        report = 4;
        report = yankee[report];
        verify = golf.bind(offset)(report);
        golf = verify.useStateFromStores;
        report = _closure1_slot1;
        mike = 5;
        mike = yankee[mike];
        mike = report.bind(offset)(mike);
        report = new Array(1);
        report[0] = mike;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getLastActionTime;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = golf.bind(verify)(report, mike);
        golf = oscar.useEffect;
        report = new Array(4);
        report[0] = tango;
        report[1] = options;
        report[2] = mike;
        report[3] = zulu;
        mike = function() {
            _fun89525: for(var _fun89525_ip = 0; ; ) switch(_fun89525_ip) {
 0:
                report = _closure1_slot5;
                tango = report.has;
                mike = _closure2_slot0;
                mike = mike.type;
                mike = tango.bind(report)(mike);
                if(!mike) { _fun89525_ip = 49; continue _fun89525 }
 32:
                report = _closure2_slot2;
                tango = _closure2_slot0;
                tango = tango.id;
                mike = report !== tango;
 49:
                if(!mike) { _fun89525_ip = 56; continue _fun89525 }
 52:
                mike = _closure2_slot1;
 56:
                if(!mike) { _fun89525_ip = 103; continue _fun89525 }
 59:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 5;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.maybeAutoUpgradeChannel;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                mike = tango.bind(report)(zulu);
 103:
                if(!mike) { _fun89525_ip = 126; continue _fun89525 }
 106:
                zulu = _closure2_slot3;
                entity = _closure2_slot0;
                mike = entity.id;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 126:
                entity = undefined;
                return entity;
            }
        };
        mike = golf.bind(oscar)(mike, report);
        report = oscar.useCallback;
        mike = function() {
            zulu = _closure2_slot3;
            mike = undefined;
            entity = '';
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity = new Array(0);
        mike = report.bind(oscar)(mike, entity);
        entity = {};
        zulu = zulu.id;
        zulu = tango === zulu;
        entity['showUnreadsNotice'] = zulu;
        entity['clearUnreadsNotice'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();