// app/stores/MFAStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = false;
    var _closure1_slot8 = michal;
    golfie = new Array(0);
    var _closure1_slot9 = golfie;
    golfie = '';
    var _closure1_slot10 = golfie;
    var _closure1_slot11 = michal;
    michal = {'viewNonce': '', 'regenerateNonce': ''};
    var _closure1_slot12 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: MFAStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot13;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'getVerificationKey';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getBackupCodes';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'togglingSMS';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot8;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getNonces';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasSeenBackupPrompt';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'MFAStore';
    golfie['displayName'] = michal;
    michal = 8;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleEnableSuccess
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.token;
            zuuluu = entity.codes;
            entity = undefined;
            if(!(entity !== report)) { _fun00006_ip = 55; continue _fun00005 }
 21:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.setToken;
            michal = michal.bind(tangon)(report);
 55:
            _closure1_slot9 = zuuluu;
            return entity;
        }
    };
    michal['MFA_ENABLE_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleDisableSuccess
        entity = argFoo;
        tangon = entity.token;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.setToken;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['MFA_DISABLE_SUCCESS'] = option;
    option = function() { // Original name: handleSMSToggle
        entity = true;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['MFA_SMS_TOGGLE'] = option;
    option = function() { // Original name: handleSMSToggleComplete
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['MFA_SMS_TOGGLE_COMPLETE'] = option;
    option = function() { // Original name: handleClearBackupCodes
        entity = new Array(0);
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    michal['MFA_CLEAR_BACKUP_CODES'] = option;
    option = function(argFoo) { // Original name: handleGetBackupCodes
        entity = argFoo;
        golfie = entity.codes;
        zuuluu = entity.key;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 6;
        tangon = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.sortBy;
        tangon = 'code';
        tangon = report.bind(oscard)(golfie, tangon);
        _closure1_slot9 = tangon;
        _closure1_slot10 = zuuluu;
        return entity;
    };
    michal['MFA_VIEW_BACKUP_CODES'] = option;
    option = function(argFoo) { // Original name: handleSendVerificationEmail
        entity = argFoo;
        michal = entity.nonces;
        _closure1_slot12 = michal;
        entity = undefined;
        return entity;
    };
    michal['MFA_SEND_VERIFICATION_KEY'] = option;
    tangon = function() { // Original name: handleSeenBackupPrompt
        entity = true;
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    michal['MFA_SEEN_BACKUP_CODE_PROMPT'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/MFAStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();