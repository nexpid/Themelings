// app/stores/MFAStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun92907: for(var _fun92907_ip = 0; ; ) switch(_fun92907_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun92907_ip = 51; continue _fun92907 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun92907_ip = 92; continue _fun92907;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun92907_ip = 71; continue _fun92907 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun92908: for(var _fun92908_ip = 0; ; ) switch(_fun92908_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun92908_ip = 76; continue _fun92908;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = false;
    var _closure1_slot8 = mike;
    golf = new Array(0);
    var _closure1_slot9 = golf;
    golf = '';
    var _closure1_slot10 = golf;
    var _closure1_slot11 = golf;
    var _closure1_slot12 = mike;
    mike = {'viewNonce': '', 'regenerateNonce': ''};
    var _closure1_slot13 = mike;
    mike = 7;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: MFAStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'getVerificationKey';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getBackupCodes';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'togglingSMS';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot8;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getNonces';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'emailToken';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'hasSeenBackupPrompt';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot12;
            return entity;
        };
        report['get'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'MFAStore';
    golf['displayName'] = mike;
    mike = 8;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleEnableSuccess
        _fun92919: for(var _fun92919_ip = 0; ; ) switch(_fun92919_ip) {
 0:
            entity = argFoo;
            report = entity.token;
            zulu = entity.codes;
            entity = undefined;
            if(!(entity !== report)) { _fun92919_ip = 55; continue _fun92919 }
 21:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.setToken;
            mike = mike.bind(tango)(report);
 55:
            _closure1_slot9 = zulu;
            return entity;
        }
    };
    mike['MFA_ENABLE_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleEnableEmailToken
        entity = argFoo;
        mike = entity.token;
        _closure1_slot11 = mike;
        entity = undefined;
        return entity;
    };
    mike['MFA_ENABLE_EMAIL_TOKEN'] = options;
    options = function(argFoo) { // Original name: handleDisableSuccess
        entity = argFoo;
        tango = entity.token;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.setToken;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['MFA_DISABLE_SUCCESS'] = options;
    options = function() { // Original name: handleSMSToggle
        entity = true;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['MFA_SMS_TOGGLE'] = options;
    options = function() { // Original name: handleSMSToggleComplete
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['MFA_SMS_TOGGLE_COMPLETE'] = options;
    options = function() { // Original name: handleClearBackupCodes
        entity = new Array(0);
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    mike['MFA_CLEAR_BACKUP_CODES'] = options;
    options = function(argFoo) { // Original name: handleGetBackupCodes
        entity = argFoo;
        golf = entity.codes;
        zulu = entity.key;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 6;
        tango = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.sortBy;
        tango = 'code';
        tango = report.bind(oscar)(golf, tango);
        _closure1_slot9 = tango;
        _closure1_slot10 = zulu;
        return entity;
    };
    mike['MFA_VIEW_BACKUP_CODES'] = options;
    options = function(argFoo) { // Original name: handleSendVerificationEmail
        entity = argFoo;
        mike = entity.nonces;
        _closure1_slot13 = mike;
        entity = undefined;
        return entity;
    };
    mike['MFA_SEND_VERIFICATION_KEY'] = options;
    tango = function() { // Original name: handleSeenBackupPrompt
        entity = true;
        _closure1_slot12 = entity;
        entity = undefined;
        return entity;
    };
    mike['MFA_SEEN_BACKUP_CODE_PROMPT'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/MFAStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();