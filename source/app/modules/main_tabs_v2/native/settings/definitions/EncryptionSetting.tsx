// app/modules/main_tabs_v2/native/settings/definitions/EncryptionSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    tango = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(tango);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.MobileSetting;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RendererType;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.UserSettingsSections;
    mike = {};
    verify = verify.ROUTE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 7;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.x8U2eH;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    verify = function() { // Original name: useSecureFramesEncryptionDescription
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 6;
        entity = golf[entity];
        mike = undefined;
        zulu = oscar.bind(mike)(entity);
        entity = zulu.useSecureFramesVerifiedUserIds;
        report = entity.bind(zulu)();
        entity = 7;
        zulu = golf[entity];
        zulu = oscar.bind(mike)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = golf[entity];
        entity = oscar.bind(mike)(entity);
        entity = entity.t;
        mike = entity.6vrePT;
        entity = {};
        report = report.length;
        entity['count'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useDescription'] = verify;
    tango = tango.DATA_AND_PRIVACY;
    mike['parent'] = tango;
    tango = function() { // Original name: useSecureFramesVerifiedDevicesPredicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = function() { // Original name: useSecureFramesPersistentCodesValue
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.useStateFromStores;
                entity = _closure1_slot2;
                mike = new Array(1);
                mike[0] = entity;
                entity = function() {
                    mike = _closure1_slot2;
                    entity = mike.getPersistentCodesEnabled;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            tango = undefined;
            mike = entity.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 5;
            entity = report[entity];
            tango = zulu.bind(tango)(entity);
            zulu = tango.useSecureFramesUIExperiment;
            entity = {};
            report = 'useSecureFramesVerifiedDevicesPredicate';
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 72; continue _fun00001 }
 69:
            entity = mike;
 72:
            return entity;
        }
    };
    mike['usePredicate'] = tango;
    tango = {};
    options = options.SECURE_FRAMES;
    tango['route'] = options;
    golf = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = golf;
    mike['screen'] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/EncryptionSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    zulu['SecureFramesEncryptionSetting'] = mike;
    return entity;
})();