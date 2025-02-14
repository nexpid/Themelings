// app/modules/main_tabs_v2/native/settings/definitions/AccountSmsBackupSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    tango = function() { // Original name: useAccountSMSBackupSettingDescription
        _fun94610: for(var _fun94610_ip = 0; ; ) switch(_fun94610_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            report = undefined;
            oscar = zulu.bind(report)(entity);
            tango = oscar.useStateFromStores;
            entity = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = tango.bind(oscar)(zulu, entity);
            entity = null;
            zulu = entity == tango;
            if(zulu) { _fun94610_ip = 97; continue _fun94610 }
 66:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.getSMSBackupDisabledMessage;
            entity = mike.bind(zulu)(tango);
 97:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
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
    mike = mike.UserFlags;
    var _closure1_slot4 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = mike;
    mike = 14;
    mike = oscar[mike];
    romeo = report.bind(entity)(mike);
    yankee = romeo.debounce;
    offset = function(argFoo) { // Original name: toggleSMS
        _fun94612: for(var _fun94612_ip = 0; ; ) switch(_fun94612_ip) {
 0:
            entity = argFoo;
            mike = entity.mfaSMSEnabled;
            entity = entity.user;
            if(mike) { _fun94612_ip = 339; continue _fun94612 }
 20:
            mike = null;
            if(!(mike != entity)) { _fun94612_ip = 36; continue _fun94612 }
 26:
            entity = entity.phone;
            if(!(mike == entity)) { _fun94612_ip = 148; continue _fun94612 }
 36:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 10;
            mike = verify[mike];
            options = undefined;
            report = zulu.bind(options)(mike);
            tango = report.pushLazy;
            golf = _closure1_slot0;
            mike = 12;
            mike = verify[mike];
            oscar = golf.bind(options)(mike);
            mike = 11;
            zulu = verify[mike];
            mike = verify.paths;
            zulu = oscar.bind(options)(zulu, mike);
            mike = {};
            oscar = 13;
            oscar = verify[oscar];
            oscar = golf.bind(options)(oscar);
            oscar = oscar.ChangePhoneReason;
            oscar = oscar.USER_SETTINGS_UPDATE;
            mike['reason'] = oscar;
            entity = _closure1_slot5;
            entity = tango.bind(report)(zulu, mike, entity);
            _fun94612_ip = 525; continue _fun94612;
 148:
            options = _closure1_slot0;
            report = _closure1_slot2;
            mike = 7;
            entity = report[mike];
            zulu = undefined;
            entity = options.bind(zulu)(entity);
            golf = entity.intl;
            oscar = golf.string;
            entity = report[mike];
            entity = options.bind(zulu)(entity);
            entity = entity.t;
            entity = entity.CIGa+/;
            oscar = oscar.bind(golf)(entity);
            entity = oscar.toUpperCase;
            entity = entity.bind(oscar)();
            oscar = report[mike];
            oscar = options.bind(zulu)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            mike = report[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            mike = mike.DZQe29;
            oscar = oscar.bind(golf)(mike);
            mike = oscar.toUpperCase;
            oscar = mike.bind(oscar)();
            mike = {};
            tango = _closure1_slot1;
            golf = 8;
            golf = report[golf];
            golf = tango.bind(zulu)(golf);
            golf = golf.enableSMS;
            mike['onSubmit'] = golf;
            mike['title'] = oscar;
            mike['placeholder'] = entity;
            entity = true;
            mike['closeOnSuccess'] = entity;
            entity = 9;
            entity = report[entity];
            entity = tango.bind(zulu)(entity);
            entity = entity.bind(zulu)(mike);
            _fun94612_ip = 525; continue _fun94612;
 339:
            options = _closure1_slot0;
            report = _closure1_slot2;
            mike = 7;
            entity = report[mike];
            zulu = undefined;
            entity = options.bind(zulu)(entity);
            golf = entity.intl;
            oscar = golf.string;
            entity = report[mike];
            entity = options.bind(zulu)(entity);
            entity = entity.t;
            entity = entity.CIGa+/;
            oscar = oscar.bind(golf)(entity);
            entity = oscar.toUpperCase;
            entity = entity.bind(oscar)();
            oscar = report[mike];
            oscar = options.bind(zulu)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            mike = report[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            mike = mike.wlfmlZ;
            oscar = oscar.bind(golf)(mike);
            mike = oscar.toUpperCase;
            oscar = mike.bind(oscar)();
            mike = {};
            tango = _closure1_slot1;
            golf = 8;
            golf = report[golf];
            golf = tango.bind(zulu)(golf);
            golf = golf.disableSMS;
            mike['onSubmit'] = golf;
            mike['title'] = oscar;
            mike['placeholder'] = entity;
            entity = true;
            mike['closeOnSuccess'] = entity;
            entity = 9;
            entity = report[entity];
            entity = tango.bind(zulu)(entity);
            entity = entity.bind(zulu)(mike);
 525:
            entity = undefined;
            return entity;
        }
    };
    mike = 200;
    mike = yankee.bind(romeo)(offset, mike);
    var _closure1_slot6 = mike;
    mike = {};
    verify = verify.TOGGLE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.uHAJ5u;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    options = options.ACCOUNT;
    mike['parent'] = options;
    options = function() { // Original name: useAccountSMSBackupSettingIsDisabled
        mike = _closure1_slot7;
        entity = undefined;
        mike = mike.bind(entity)();
        entity = null;
        entity = entity != mike;
        return entity;
    };
    mike['useIsDisabled'] = options;
    options = function() { // Original name: useAccountSMSBackupSettingToggleValue
        _fun94615: for(var _fun94615_ip = 0; ; ) switch(_fun94615_ip) {
 0:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            entity = mike[entity];
            mike = undefined;
            oscar = tango.bind(mike)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot3;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            report = report.bind(oscar)(tango, entity);
            entity = null;
            tango = entity == report;
            if(tango) { _fun94615_ip = 87; continue _fun94615 }
 66:
            tango = report.hasFlag;
            zulu = _closure1_slot4;
            zulu = zulu.MFA_SMS;
            mike = tango.bind(report)(zulu);
 87:
            entity = entity != mike;
            if(!entity) { _fun94615_ip = 97; continue _fun94615 }
 94:
            entity = mike;
 97:
            return entity;
        }
    };
    mike['useValue'] = options;
    golf = function(argFoo) { // Original name: onAccountSMSBackupSettingTogglePress
        _fun94617: for(var _fun94617_ip = 0; ; ) switch(_fun94617_ip) {
 0:
            zulu = _closure1_slot3;
            entity = zulu.getCurrentUser;
            entity = entity.bind(zulu)();
            zulu = null;
            if(!(zulu != entity)) { _fun94617_ip = 50; continue _fun94617 }
 22:
            zulu = _closure1_slot6;
            mike = {};
            tango = argFoo;
            tango = !tango;
            mike['mfaSMSEnabled'] = tango;
            mike['user'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 50:
            entity = undefined;
            return entity;
        }
    };
    mike['onValueChange'] = golf;
    mike['useDescription'] = tango;
    tango = 15;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useIsTOTPEnabled;
    mike['usePredicate'] = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AccountSmsBackupSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();