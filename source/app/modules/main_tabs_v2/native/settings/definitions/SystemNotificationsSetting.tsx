// app/modules/main_tabs_v2/native/settings/definitions/SystemNotificationsSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _handleEnableSystemNotification
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun97895: for(var _fun97895_ip = 0; ; ) switch(_fun97895_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun97895_ip = 224; continue _fun97895 }
 10:
                    mike = _closure1_slot4;
                    tango = mike.NativePermissionManager;
                    mike = tango.getNotificationAuthorizationStatus;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=37);
 35:
                    return mike;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun97895_ip = 221; continue _fun97895 }
 46:
                    tango = _closure1_slot6;
                    tango = tango.UNDETERMINED;
                    if(!(mike !== tango)) { _fun97895_ip = 174; continue _fun97895 }
 60:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 8;
                    tango = oscar[tango];
                    oscar = undefined;
                    options = report.bind(oscar)(tango);
                    golf = options.track;
                    tango = _closure1_slot5;
                    report = tango.NOTIFICATION_SETTINGS_CLICKED;
                    tango = {};
                    verify = 'os';
                    tango['setting_type'] = verify;
                    verify = _closure1_slot6;
                    offset = verify.AUTHORIZED;
                    verify = 0;
                    if(!(mike === offset)) { _fun97895_ip = 129; continue _fun97895 }
 126:
                    verify = 1;
 129:
                    tango['current_status'] = verify;
                    tango = golf.bind(options)(report, tango);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 9;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.openNotificationSettings;
                    tango = tango.bind(report)();
                    _fun97895_ip = 216; continue _fun97895;
 174:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.requestPermission;
                    zulu = function(argFoo) {
                        _fun97896: for(var _fun97896_ip = 0; ; ) switch(_fun97896_ip) {
 0:
                            zulu = argFoo;
                            report = _closure1_slot1;
                            tango = _closure1_slot2;
                            entity = 8;
                            tango = tango[entity];
                            entity = undefined;
                            golf = report.bind(entity)(tango);
                            oscar = golf.track;
                            tango = _closure1_slot5;
                            report = tango.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                            tango = {};
                            options = _closure1_slot7;
                            options = options.ALLOW_TO_REQUEST;
                            tango['action_type'] = options;
                            options = _closure1_slot8;
                            options = options.NOTIFICATION_SETTING;
                            tango['action_location'] = options;
                            tango['permission_granted'] = zulu;
                            tango = oscar.bind(golf)(report, tango);
                            if(zulu) { _fun97896_ip = 119; continue _fun97896 }
 89:
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 9;
                            mike = tango[mike];
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.openNotificationSettings;
                            mike = mike.bind(zulu)();
 119:
                            return entity;
                        }
                    };
                    zulu = tango.bind(report)(zulu);
 216:
                    zulu = undefined;
                    return zulu;
 221:
                    return mike;
 224:
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
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    tango = true;
    mike['value'] = tango;
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
    mike = mike.NativeModules;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.MobileSetting;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RendererType;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot5 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.NotificationAuthorizationStatus;
    var _closure1_slot6 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    offset = mike.EventActionType;
    var _closure1_slot7 = offset;
    mike = mike.EventActionLocation;
    var _closure1_slot8 = mike;
    mike = {};
    verify = verify.PRESSABLE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 10;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.nl2Dq6;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    options = options.NOTIFICATIONS;
    mike['parent'] = options;
    golf = function() { // Original name: handleEnableSystemNotification
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['onPress'] = golf;
    mike['withArrow'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/SystemNotificationsSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();