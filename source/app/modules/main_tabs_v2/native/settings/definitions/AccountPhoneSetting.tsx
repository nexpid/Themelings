// app/modules/main_tabs_v2/native/settings/definitions/AccountPhoneSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    options = mike.MobileSetting;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RendererType;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = mike;
    mike = {};
    verify = verify.PRESSABLE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 9;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.dEYpSk;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    options = options.ACCOUNT;
    mike['parent'] = options;
    options = function() { // Original name: useAccountPhoneSettingTrailing
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                mike = entity.bind(mike)();
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00002_ip = 33; continue _fun00001 }
 27:
                entity = mike.phone;
 33:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useTrailing'] = options;
    golf = function() { // Original name: onAccountPhoneSettingPress
        tango = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 5;
        zulu = verify[entity];
        entity = undefined;
        oscar = tango.bind(entity)(zulu);
        report = oscar.pushLazy;
        options = _closure1_slot0;
        zulu = 7;
        zulu = verify[zulu];
        golf = options.bind(entity)(zulu);
        zulu = 6;
        tango = verify[zulu];
        zulu = verify.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = {};
        golf = true;
        zulu['allowDeletePhone'] = golf;
        golf = 8;
        golf = verify[golf];
        golf = options.bind(entity)(golf);
        golf = golf.ChangePhoneReason;
        golf = golf.USER_SETTINGS_UPDATE;
        zulu['reason'] = golf;
        mike = _closure1_slot4;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    mike['onPress'] = golf;
    mike['withArrow'] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AccountPhoneSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();