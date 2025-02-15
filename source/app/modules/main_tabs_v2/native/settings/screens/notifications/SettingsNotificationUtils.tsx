// app/modules/main_tabs_v2/native/settings/screens/notifications/SettingsNotificationUtils.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 2;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/screens/notifications/SettingsNotificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: hasAndroidNotificationChannels
        _fun97886: for(var _fun97886_ip = 0; ; ) switch(_fun97886_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 0;
            entity = tango[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.isAndroid;
            entity = entity.bind(zulu)();
            if(!entity) { _fun97886_ip = 90; continue _fun97886 }
 36:
            zulu = global;
            tango = zulu.parseInt;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 1;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.getSystemVersion;
            zulu = mike.bind(zulu)();
            mike = 10;
            zulu = tango.bind(report)(zulu, mike);
            mike = 26;
            entity = zulu >= mike;
 90:
            return entity;
        }
    };
    zulu['hasAndroidNotificationChannels'] = mike;
    return entity;
})();