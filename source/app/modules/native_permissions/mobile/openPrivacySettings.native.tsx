// app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/native_permissions/mobile/openPrivacySettings.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: openPrivacySettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00002_ip = 61; continue _fun00001 }
 37:
            zulu = _closure1_slot3;
            tango = zulu.DeviceSettingsManager;
            zulu = tango.openPrivacySettings;
            zulu = zulu.bind(tango)();
            _fun00002_ip = 91; continue _fun00001;
 61:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.openPrivacySettings;
            mike = mike.bind(zulu)();
 91:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();