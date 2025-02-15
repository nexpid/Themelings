// app/modules/notification_center/useNotificationCenterItemAcked.tsx
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notification_center/useNotificationCenterItemAcked.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 1;
            mike = report[mike];
            report = undefined;
            golf = tango.bind(report)(mike);
            tango = golf.useStateFromStores;
            options = _closure1_slot2;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.isLocalItemAcked;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(golf)(mike, entity);
            entity = oscar.forceUnacked;
            entity = !entity;
            if(!entity) { _fun00002_ip = 117; continue _fun00001 }
 76:
            if(mike) { _fun00002_ip = 114; continue _fun00001 }
 79:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 2;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.isRemoteAcked;
            zulu = argBar;
            mike = tango.bind(report)(oscar, zulu);
 114:
            entity = mike;
 117:
            return entity;
        }
    };
    zulu['useNotificationCenterItemAcked'] = mike;
    return entity;
})();