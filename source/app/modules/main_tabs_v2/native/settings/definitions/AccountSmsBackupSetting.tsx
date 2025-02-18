// app/modules/main_tabs_v2/native/settings/definitions/AccountSmsBackupSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    tangon = function() { // Original name: useAccountSMSBackupSettingDescription
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            report = undefined;
            oscard = zuuluu.bind(report)(entity);
            tangon = oscard.useStateFromStores;
            entity = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = tangon.bind(oscard)(zuuluu, entity);
            entity = null;
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00002_ip = 97; continue _fun00001 }
 66:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getSMSBackupDisabledMessage;
            entity = michal.bind(zuuluu)(tangon);
 97:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.MobileSetting;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.UserFlags;
    var _closure1_slot4 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = michal;
    michal = 14;
    michal = oscard[michal];
    romeon = report.bind(entity)(michal);
    yankee = romeon.debounce;
    offset = function(argFoo) { // Original name: toggleSMS
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.mfaSMSEnabled;
            entity = entity.user;
            if(michal) { _fun00004_ip = 339; continue _fun00003 }
 20:
            michal = null;
            if(!(michal != entity)) { _fun00004_ip = 36; continue _fun00003 }
 26:
            entity = entity.phone;
            if(!(michal == entity)) { _fun00004_ip = 148; continue _fun00003 }
 36:
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 10;
            michal = verify[michal];
            option = undefined;
            report = zuuluu.bind(option)(michal);
            tangon = report.pushLazy;
            golfie = _closure1_slot0;
            michal = 12;
            michal = verify[michal];
            oscard = golfie.bind(option)(michal);
            michal = 11;
            zuuluu = verify[michal];
            michal = verify.paths;
            zuuluu = oscard.bind(option)(zuuluu, michal);
            michal = {};
            oscard = 13;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.ChangePhoneReason;
            oscard = oscard.USER_SETTINGS_UPDATE;
            michal['reason'] = oscard;
            entity = _closure1_slot5;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            _fun00004_ip = 527; continue _fun00003;
 148:
            option = _closure1_slot0;
            report = _closure1_slot2;
            michal = 7;
            entity = report[michal];
            zuuluu = undefined;
            entity = option.bind(zuuluu)(entity);
            golfie = entity.intl;
            oscard = golfie.string;
            entity = report[michal];
            entity = option.bind(zuuluu)(entity);
            entity = entity.t;
            entity = entity.CIGa+/;
            oscard = oscard.bind(golfie)(entity);
            entity = oscard.toUpperCase;
            entity = entity.bind(oscard)();
            oscard = report[michal];
            oscard = option.bind(zuuluu)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            michal = report[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.DZQe29;
            oscard = oscard.bind(golfie)(michal);
            michal = oscard.toUpperCase;
            oscard = michal.bind(oscard)();
            michal = {};
            tangon = _closure1_slot1;
            golfie = 8;
            golfie = report[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            golfie = golfie.enableSMS;
            michal['onSubmit'] = golfie;
            michal['title'] = oscard;
            michal['placeholder'] = entity;
            entity = true;
            michal['closeOnSuccess'] = entity;
            entity = 9;
            entity = report[entity];
            entity = tangon.bind(zuuluu)(entity);
            entity = entity.bind(zuuluu)(michal);
            _fun00004_ip = 527; continue _fun00003;
 339:
            option = _closure1_slot0;
            report = _closure1_slot2;
            michal = 7;
            entity = report[michal];
            zuuluu = undefined;
            entity = option.bind(zuuluu)(entity);
            golfie = entity.intl;
            oscard = golfie.string;
            entity = report[michal];
            entity = option.bind(zuuluu)(entity);
            entity = entity.t;
            entity = entity.CIGa+/;
            oscard = oscard.bind(golfie)(entity);
            entity = oscard.toUpperCase;
            entity = entity.bind(oscard)();
            oscard = report[michal];
            oscard = option.bind(zuuluu)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            michal = report[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.wlfmlZ;
            oscard = oscard.bind(golfie)(michal);
            michal = oscard.toUpperCase;
            oscard = michal.bind(oscard)();
            michal = {};
            tangon = _closure1_slot1;
            golfie = 8;
            golfie = report[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            golfie = golfie.disableSMS;
            michal['onSubmit'] = golfie;
            michal['title'] = oscard;
            michal['placeholder'] = entity;
            entity = true;
            michal['closeOnSuccess'] = entity;
            entity = 9;
            entity = report[entity];
            entity = tangon.bind(zuuluu)(entity);
            entity = entity.bind(zuuluu)(michal);
 527:
            entity = undefined;
            return entity;
        }
    };
    michal = 200;
    michal = yankee.bind(romeon)(offset, michal);
    var _closure1_slot6 = michal;
    michal = {};
    verify = verify.TOGGLE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.uHAJ5u;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    option = option.ACCOUNT;
    michal['parent'] = option;
    option = function() { // Original name: useAccountSMSBackupSettingIsDisabled
        michal = _closure1_slot7;
        entity = undefined;
        michal = michal.bind(entity)();
        entity = null;
        entity = entity != michal;
        return entity;
    };
    michal['useIsDisabled'] = option;
    option = function() { // Original name: useAccountSMSBackupSettingToggleValue
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            entity = michal[entity];
            michal = undefined;
            oscard = tangon.bind(michal)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            report = report.bind(oscard)(tangon, entity);
            entity = null;
            tangon = entity == report;
            if(tangon) { _fun00006_ip = 87; continue _fun00005 }
 66:
            tangon = report.hasFlag;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.MFA_SMS;
            michal = tangon.bind(report)(zuuluu);
 87:
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 97; continue _fun00005 }
 94:
            entity = michal;
 97:
            return entity;
        }
    };
    michal['useValue'] = option;
    golfie = function(argFoo) { // Original name: onAccountSMSBackupSettingTogglePress
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getCurrentUser;
            entity = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00008_ip = 50; continue _fun00007 }
 22:
            zuuluu = _closure1_slot6;
            michal = {};
            tangon = argFoo;
            tangon = !tangon;
            michal['mfaSMSEnabled'] = tangon;
            michal['user'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 50:
            entity = undefined;
            return entity;
        }
    };
    michal['onValueChange'] = golfie;
    michal['useDescription'] = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useIsTOTPEnabled;
    michal['usePredicate'] = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountSmsBackupSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();