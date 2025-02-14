// app/modules/main_tabs_v2/native/settings/definitions/AndroidMessageNotificationsSetting.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    tango = function() { // Original name: useAndroidMessageNotificationsSettingValue
        _fun97897: for(var _fun97897_ip = 0; ; ) switch(_fun97897_ip) {
 0:
            mike = _closure1_slot2;
            entity = undefined;
            mike = mike.bind(entity)();
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun97897_ip = 25; continue _fun97897 }
 22:
            entity = mike;
 25:
            return entity;
        }
    };
    mike = function() { // Original name: useHasAndroidMessageNotificationsSetting
        _fun97898: for(var _fun97898_ip = 0; ; ) switch(_fun97898_ip) {
 0:
            mike = _closure1_slot2;
            tango = undefined;
            zulu = mike.bind(tango)();
            mike = _closure1_slot0;
            report = _closure1_slot1;
            entity = 3;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.isAndroid;
            entity = entity.bind(mike)();
            if(!entity) { _fun97898_ip = 51; continue _fun97898 }
 45:
            mike = null;
            entity = mike != zulu;
 51:
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    oscar = report.useAndroidMessageNotificationsEnabled;
    var _closure1_slot2 = oscar;
    oscar = report.setAndroidMessageNotificationsEnabled;
    report = 1;
    report = options[report];
    report = golf.bind(entity)(report);
    verify = report.MobileSetting;
    report = {};
    yankee = 2;
    yankee = options[yankee];
    yankee = golf.bind(entity)(yankee);
    yankee = yankee.RendererType;
    yankee = yankee.TOGGLE;
    report['type'] = yankee;
    offset = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 4;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.zViLy8;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    report['title'] = offset;
    verify = verify.NOTIFICATIONS;
    report['parent'] = verify;
    report['useValue'] = tango;
    report['onValueChange'] = oscar;
    report['usePredicate'] = mike;
    oscar = 5;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/settings/definitions/AndroidMessageNotificationsSetting.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['useAndroidMessageNotificationsSettingValue'] = tango;
    zulu['useHasAndroidMessageNotificationsSetting'] = mike;
    return entity;
})();