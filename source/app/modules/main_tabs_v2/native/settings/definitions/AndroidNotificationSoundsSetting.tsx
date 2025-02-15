// app/modules/main_tabs_v2/native/settings/definitions/AndroidNotificationSoundsSetting.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    golf = mike.useAndroidNotificationSoundsEnabled;
    var _closure1_slot2 = golf;
    golf = mike.setAndroidNotificationSoundsEnabled;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.MobileSetting;
    mike = {};
    verify = 2;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.TOGGLE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.1CWknJ;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    options = options.NOTIFICATIONS;
    mike['parent'] = options;
    options = function() { // Original name: useAndroidNotificationSoundsSettingValue
        _fun97920: for(var _fun97920_ip = 0; ; ) switch(_fun97920_ip) {
 0:
            mike = _closure1_slot2;
            entity = undefined;
            mike = mike.bind(entity)();
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun97920_ip = 25; continue _fun97920 }
 22:
            entity = mike;
 25:
            return entity;
        }
    };
    mike['useValue'] = options;
    mike['onValueChange'] = golf;
    tango = function() { // Original name: useHasAndroidNotificationSoundsSetting
        _fun97921: for(var _fun97921_ip = 0; ; ) switch(_fun97921_ip) {
 0:
            entity = _closure1_slot2;
            report = undefined;
            zulu = entity.bind(report)();
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            tango = tango.bind(report)(entity);
            entity = tango.isIOS;
            entity = entity.bind(tango)();
            entity = !entity;
            if(!entity) { _fun97921_ip = 82; continue _fun97921 }
 49:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 4;
            mike = oscar[mike];
            tango = tango.bind(report)(mike);
            mike = tango.hasAndroidNotificationChannels;
            mike = mike.bind(tango)();
            entity = !mike;
 82:
            if(!entity) { _fun97921_ip = 91; continue _fun97921 }
 85:
            mike = null;
            entity = mike != zulu;
 91:
            return entity;
        }
    };
    mike['usePredicate'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AndroidNotificationSoundsSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();