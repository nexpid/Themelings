// app/modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useNotificationsTabBadge
        tango = _closure1_slot0;
        golf = _closure1_slot2;
        zulu = 2;
        zulu = golf[zulu];
        report = undefined;
        options = tango.bind(report)(zulu);
        oscar = options.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = _closure1_slot4;
            entity = entity.localItems;
            return entity;
        };
        oscar = oscar.bind(options)(tango, zulu);
        var _closure2_slot0 = oscar;
        tango = _closure1_slot1;
        zulu = 3;
        zulu = golf[zulu];
        report = tango.bind(report)(zulu);
        tango = report.useExperiment;
        zulu = {};
        golf = 'Notifications Tab Badge';
        zulu['location'] = golf;
        zulu = tango.bind(report)(zulu);
        report = zulu.showInDMs;
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            zulu = _closure2_slot0;
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = argFoo;
                    entity = _closure2_slot1;
                    entity = !entity;
                    if(!entity) { _fun00002_ip = 62; continue _fun00001 }
 16:
                    report = mike.type;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 4;
                    oscar = oscar[tango];
                    tango = undefined;
                    tango = golf.bind(tango)(oscar);
                    tango = tango.NotificationCenterLocalItems;
                    tango = tango.INCOMING_FRIEND_REQUESTS;
                    entity = report === tango;
 62:
                    if(entity) { _fun00002_ip = 124; continue _fun00001 }
 65:
                    zulu = _closure2_slot1;
                    zulu = !zulu;
                    if(!zulu) { _fun00002_ip = 121; continue _fun00001 }
 75:
                    report = mike.type;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 4;
                    oscar = oscar[tango];
                    tango = undefined;
                    tango = golf.bind(tango)(oscar);
                    tango = tango.NotificationCenterLocalItems;
                    tango = tango.INCOMING_GAME_FRIEND_REQUESTS;
                    zulu = report === tango;
 121:
                    entity = zulu;
 124:
                    if(entity) { _fun00002_ip = 173; continue _fun00001 }
 127:
                    zulu = mike.type;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 4;
                    tango = tango[mike];
                    mike = undefined;
                    mike = report.bind(mike)(tango);
                    mike = mike.NotificationCenterLocalItems;
                    mike = mike.MOBILE_NATIVE_UPDATE_AVAILABLE;
                    entity = zulu === mike;
 173:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = entity.length;
            return entity;
        };
        zulu = zulu.bind(tango)(entity, mike);
        entity = {};
        entity['value'] = zulu;
        mike = 0;
        mike = zulu > mike;
        entity['showDot'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();