// app/utils/native/NotificationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    golf = true;
    mike['value'] = golf;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.PermissionStateType;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot5 = mike;
    mike = {};
    options = function() { // Original name: hasPermission
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.requestPermissions;
        entity = function(argFoo) {
            _fun97792: for(var _fun97792_ip = 0; ; ) switch(_fun97792_ip) {
 0:
                mike = argFoo;
                entity = mike.alert;
                zulu = mike.badge;
                mike = mike.sound;
                if(entity) { _fun97792_ip = 27; continue _fun97792 }
 24:
                entity = zulu;
 27:
                if(entity) { _fun97792_ip = 33; continue _fun97792 }
 30:
                entity = mike;
 33:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['hasPermission'] = options;
    options = function(argFoo) { // Original name: requestPermission
        entity = argFoo;
        var _closure2_slot0 = entity;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 3;
        tango = report[entity];
        entity = undefined;
        golf = oscar.bind(entity)(tango);
        oscar = golf.setPushPermissionState;
        tango = _closure1_slot4;
        tango = tango.REQUESTED;
        tango = oscar.bind(golf)(tango);
        tango = _closure1_slot1;
        oscar = 4;
        oscar = report[oscar];
        options = tango.bind(entity)(oscar);
        golf = options.track;
        zulu = _closure1_slot5;
        oscar = zulu.PERMISSIONS_REQUESTED;
        zulu = {};
        verify = 'notification';
        zulu['type'] = verify;
        zulu = golf.bind(options)(oscar, zulu);
        zulu = 5;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.requestPermissions;
        tango = zulu.bind(tango)();
        zulu = tango.then;
        mike = function(argFoo) {
            _fun97794: for(var _fun97794_ip = 0; ; ) switch(_fun97794_ip) {
 0:
                entity = argFoo;
                zulu = entity.alert;
                mike = entity.sound;
                entity = entity.badge;
                if(zulu) { _fun97794_ip = 27; continue _fun97794 }
 24:
                zulu = mike;
 27:
                if(zulu) { _fun97794_ip = 33; continue _fun97794 }
 30:
                zulu = entity;
 33:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 4;
                tango = tango[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.track;
                mike = _closure1_slot5;
                tango = mike.PERMISSIONS_ACKED;
                mike = {};
                golf = 'notification';
                mike['type'] = golf;
                golf = 'denied';
                if(!zulu) { _fun97794_ip = 96; continue _fun97794 }
 92:
                golf = 'accepted';
 96:
                mike['action'] = golf;
                mike = report.bind(oscar)(tango, mike);
                report = null;
                if(!(report != zulu)) { _fun97794_ip = 132; continue _fun97794 }
 112:
                tango = _closure2_slot0;
                if(!(report != tango)) { _fun97794_ip = 132; continue _fun97794 }
 123:
                mike = _closure2_slot0;
                mike = mike.bind(entity)(zulu);
 132:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['requestPermission'] = options;
    options = function() { // Original name: showNotification
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun97797: for(var _fun97797_ip = 0; ; ) switch(_fun97797_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun97797_ip = 12; continue _fun97797 }
 7:
                    mike = undefined;
                    return mike;
 12:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['showNotification'] = options;
    options = function() { // Original name: disabled
        entity = false;
        return entity;
    };
    mike['disabled'] = options;
    mike['shouldRequestNotification'] = golf;
    tango = function(argFoo) { // Original name: playNotificationSound
        _fun97799: for(var _fun97799_ip = 0; ; ) switch(_fun97799_ip) {
 0:
            oscar = arguments[1];
            entity = undefined;
            if(!(oscar === entity)) { _fun97799_ip = 12; continue _fun97799 }
 9:
            oscar = 1;
 12:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.playSound;
            offset = argFoo;
            golf = arguments[2];
            yankee = report;
            verify = oscar;
            options = undefined;
            mike = yankee[tango](offset, verify, options, golf, oscar);
            return entity;
        }
    };
    mike['playNotificationSound'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/native/NotificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();