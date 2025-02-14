// app/modules/main_tabs_v2/native/settings/definitions/InAppNotificationsSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot3 = mike;
    mike = {};
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.rqEZdn;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.NOTIFICATIONS;
    mike['parent'] = golf;
    golf = function() { // Original name: useInAppNotificationsSettingValue
        _fun97879: for(var _fun97879_ip = 0; ; ) switch(_fun97879_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            entity = report[mike];
            zulu = undefined;
            entity = tango.bind(zulu)(entity);
            oscar = entity.FocusMode;
            entity = oscar.useSetting;
            entity = entity.bind(oscar)();
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            zulu = mike.ShowInAppNotifications;
            mike = zulu.useSetting;
            mike = mike.bind(zulu)();
            entity = !entity;
            if(!entity) { _fun97879_ip = 75; continue _fun97879 }
 72:
            entity = mike;
 75:
            return entity;
        }
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: updateInAppNotificationSettings
        oscar = argFoo;
        tango = _closure1_slot0;
        report = _closure1_slot2;
        entity = 3;
        zulu = report[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        tango = zulu.ShowInAppNotifications;
        zulu = tango.updateSetting;
        zulu = zulu.bind(tango)(oscar);
        tango = _closure1_slot1;
        zulu = 6;
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot3;
        zulu = mike.LOCAL_SETTINGS_UPDATED;
        mike = {};
        mike['notifications_in_app_enabled'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['onValueChange'] = golf;
    tango = function() { // Original name: useInAppNotificationsDescription
        _fun97881: for(var _fun97881_ip = 0; ; ) switch(_fun97881_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 4;
            entity = tango[entity];
            oscar = undefined;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.useFocusModeEnabled;
            zulu = entity.bind(zulu)();
            entity = undefined;
            if(!zulu) { _fun97881_ip = 95; continue _fun97881 }
 40:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.cIRG0t;
            entity = zulu.bind(tango)(mike);
 95:
            return entity;
        }
    };
    mike['useDescription'] = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useFocusModeEnabled;
    mike['useIsDisabled'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/InAppNotificationsSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();