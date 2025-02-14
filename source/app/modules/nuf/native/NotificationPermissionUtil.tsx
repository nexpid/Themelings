// app/modules/nuf/native/NotificationPermissionUtil.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: _requestPushNotificationPermission
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun97765: for(var _fun97765_ip = 0; ; ) switch(_fun97765_ip) {
 0:
                    StartGenerator();
                    verify = argBar;
                    tango = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun97765_ip = 218; continue _fun97765 }
 18:
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    var _closure4_slot1 = verify;
                    var _closure4_slot2 = tango;
                    mike = _closure1_slot5;
                    report = mike.NativePermissionManager;
                    mike = report.getNotificationAuthorizationStatus;
                    mike = mike.bind(report)();
                    SaveGenerator(address=60);
 58:
                    return mike;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun97765_ip = 215; continue _fun97765 }
 69:
                    report = _closure1_slot8;
                    report = report.DENIED;
                    if(!(mike !== report)) { _fun97765_ip = 125; continue _fun97765 }
 83:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot1;
                    report = 9;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = golf.bind(report)(oscar);
                    report = oscar.requestPermission;
                    zulu = function(argFoo) {
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 8;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.track;
                        mike = _closure1_slot7;
                        tango = mike.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                        zulu = {};
                        golf = _closure4_slot0;
                        zulu['action_type'] = golf;
                        golf = _closure4_slot1;
                        zulu['action_location'] = golf;
                        golf = argFoo;
                        zulu['permission_granted'] = golf;
                        zulu = report.bind(oscar)(tango, zulu);
                        mike = _closure4_slot2;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    zulu = report.bind(oscar)(zulu);
                    _fun97765_ip = 210; continue _fun97765;
 125:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 7;
                    report = golf[zulu];
                    zulu = undefined;
                    report = oscar.bind(zulu)(report);
                    report = report.bind(zulu)();
                    report = 8;
                    report = golf[report];
                    options = oscar.bind(zulu)(report);
                    golf = options.track;
                    report = _closure1_slot7;
                    oscar = report.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                    report = {};
                    offset = _closure1_slot6;
                    offset = offset.TO_SETTINGS;
                    report['action_type'] = offset;
                    report['action_location'] = verify;
                    report = golf.bind(options)(oscar, report);
                    zulu = tango.bind(zulu)();
 210:
                    zulu = undefined;
                    return zulu;
 215:
                    return mike;
 218:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _enableProvisionalPushNotification
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun97769: for(var _fun97769_ip = 0; ; ) switch(_fun97769_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun97769_ip = 96; continue _fun97769 }
 7:
                    mike = _closure1_slot5;
                    tango = mike.NativePermissionManager;
                    mike = tango.getNotificationAuthorizationStatus;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=34);
 32:
                    return mike;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun97769_ip = 93; continue _fun97769 }
 40:
                    tango = _closure1_slot8;
                    tango = tango.UNDETERMINED;
                    if(!(mike === tango)) { _fun97769_ip = 88; continue _fun97769 }
 54:
                    zulu = _closure1_slot5;
                    report = zulu.DCDProvisionalNotificationUtils;
                    tango = report.registerProvisionalNotification;
                    zulu = function(argFoo) {
                        _fun97770: for(var _fun97770_ip = 0; ; ) switch(_fun97770_ip) {
 0:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot1;
                            entity = 8;
                            zulu = zulu[entity];
                            entity = undefined;
                            report = tango.bind(entity)(zulu);
                            tango = report.track;
                            mike = _closure1_slot7;
                            zulu = mike.PERMISSIONS_ACKED;
                            mike = {};
                            oscar = 'provisional_notification';
                            mike['type'] = oscar;
                            oscar = 'denied';
                            golf = argFoo;
                            if(!golf) { _fun97770_ip = 68; continue _fun97770 }
 64:
                            oscar = 'accepted';
 68:
                            mike['action'] = oscar;
                            mike = tango.bind(report)(zulu, mike);
                            return entity;
                        }
                    };
                    zulu = tango.bind(report)(zulu);
 88:
                    zulu = undefined;
                    return zulu;
 93:
                    return mike;
 96:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
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
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EventActionType;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NotificationAuthorizationStatus;
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: requestPushNotificationPermission
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['requestPushNotificationPermission'] = tango;
    tango = function() { // Original name: useShowReactivationPrompt
        report = _closure1_slot4;
        tango = report.useState;
        zulu = false;
        oscar = tango.bind(report)(zulu);
        tango = _closure1_slot2;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(oscar, entity);
        entity = 0;
        entity = tango[entity];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot0 = zulu;
        tango = report.useEffect;
        zulu = function() {
            mike = function() { // Original name: _shouldShowReactivationPrompts
                tango = undefined;
                entity = undefined;
                zulu = _closure1_slot3;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun97776: for(var _fun97776_ip = 0; ; ) switch(_fun97776_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun97776_ip = 78; continue _fun97776 }
 7:
                            mike = _closure1_slot5;
                            tango = mike.NativePermissionManager;
                            mike = tango.getNotificationAuthorizationStatus;
                            mike = mike.bind(tango)();
                            SaveGenerator(address=34);
 32:
                            return mike;
 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun97776_ip = 75; continue _fun97776 }
 40:
                            zulu = _closure1_slot8;
                            zulu = zulu.AUTHORIZED;
                            if(!(mike !== zulu)) { _fun97776_ip = 70; continue _fun97776 }
 54:
                            report = _closure2_slot0;
                            tango = undefined;
                            zulu = true;
                            zulu = report.bind(tango)(zulu);
 70:
                            zulu = undefined;
                            return zulu;
 75:
                            return mike;
 78:
                            return entity;
                        }
                    };
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                _closure3_slot0 = tango;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            var _closure3_slot0 = mike;
            mike = function() { // Original name: shouldShowReactivationPrompts
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity = undefined;
            mike = mike.bind(entity)();
            mike = !mike;
            return entity;
        };
        mike = new Array(0);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['useShowReactivationPrompt'] = tango;
    mike = function() { // Original name: enableProvisionalPushNotification
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['enableProvisionalPushNotification'] = mike;
    return entity;
})();