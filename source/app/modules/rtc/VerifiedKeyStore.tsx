// app/modules/rtc/VerifiedKeyStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun81139: for(var _fun81139_ip = 0; ; ) switch(_fun81139_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun81139_ip = 51; continue _fun81139 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun81139_ip = 92; continue _fun81139;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun81139_ip = 71; continue _fun81139 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun81140: for(var _fun81140_ip = 0; ; ) switch(_fun81140_ip) {
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
            _fun81140_ip = 76; continue _fun81140;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = {};
    var _closure1_slot8 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: VerifiedKeyStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun81145: for(var _fun81145_ip = 0; ; ) switch(_fun81145_ip) {
 0:
                tango = argFoo;
                mike = null;
                report = mike == tango;
                entity = undefined;
                zulu = undefined;
                if(report) { _fun81145_ip = 22; continue _fun81145 }
 16:
                zulu = tango.users;
 22:
                if(!(mike == zulu)) { _fun81145_ip = 28; continue _fun81145 }
 26:
                zulu = {};
 28:
                _closure1_slot8 = zulu;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            mike = _closure1_slot8;
            entity['users'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getKeyTrustedAt';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun81147: for(var _fun81147_ip = 0; ; ) switch(_fun81147_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.serializeKey;
                zulu = argBar;
                zulu = tango.bind(report)(zulu);
                tango = _closure1_slot8;
                mike = argFoo;
                mike = tango[mike];
                tango = null;
                tango = tango == mike;
                if(tango) { _fun81147_ip = 63; continue _fun81147 }
 59:
                entity = mike[zulu];
 63:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isKeyVerified';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            tango = this;
            zulu = tango.getKeyTrustedAt;
            mike = argFoo;
            entity = argBar;
            mike = zulu.bind(tango)(mike, entity);
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getUserIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.keys;
            entity = _closure1_slot8;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getUserVerifiedKeys';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot8;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'VerifiedKeyStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleSecureFramesVerifiedKeyCreate
        _fun81151: for(var _fun81151_ip = 0; ; ) switch(_fun81151_ip) {
 0:
            entity = argFoo;
            zulu = entity.userId;
            oscar = entity.key;
            mike = _closure1_slot8;
            tango = mike[zulu];
            mike = null;
            if(!(mike == tango)) { _fun81151_ip = 32; continue _fun81151 }
 30:
            tango = {};
 32:
            mike = _closure1_slot8;
            mike[zulu] = tango;
            mike = global;
            zulu = mike.Uint8Array;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            options = report;
            golf = oscar;
            zulu = new options[zulu](golf, oscar);
            oscar = zulu instanceof Object ? zulu : report;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            report = report.bind(entity)(zulu);
            zulu = report.serializeKey;
            zulu = zulu.bind(report)(oscar);
            report = mike.Date;
            mike = report.now;
            mike = mike.bind(report)();
            tango[zulu] = mike;
            return entity;
        }
    };
    mike['SECURE_FRAMES_VERIFIED_KEY_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleSecureFramesVerifiedKeyDelete
        _fun81152: for(var _fun81152_ip = 0; ; ) switch(_fun81152_ip) {
 0:
            entity = argFoo;
            tango = entity.userId;
            entity = entity.serializedKey;
            mike = _closure1_slot8;
            oscar = mike[tango];
            mike = null;
            if(!(mike != oscar)) { _fun81152_ip = 84; continue _fun81152 }
 31:
            entity = delete oscar[entity];
            mike = global;
            report = mike.Object;
            mike = report.keys;
            mike = mike.bind(report)(oscar);
            oscar = mike.length;
            report = 0;
            mike = false;
            if(!(report === oscar)) { _fun81152_ip = 76; continue _fun81152 }
 66:
            zulu = _closure1_slot8;
            zulu = delete zulu[tango];
            mike = true;
 76:
            if(entity) { _fun81152_ip = 82; continue _fun81152 }
 79:
            entity = mike;
 82:
            return entity;
 84:
            entity = false;
            return entity;
        }
    };
    mike['SECURE_FRAMES_VERIFIED_KEY_DELETE'] = verify;
    tango = function(argFoo) { // Original name: handleSecureFramesUserVerifiedKeysDelete
        _fun81153: for(var _fun81153_ip = 0; ; ) switch(_fun81153_ip) {
 0:
            entity = argFoo;
            zulu = entity.userId;
            entity = _closure1_slot8;
            tango = entity[zulu];
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun81153_ip = 36; continue _fun81153 }
 28:
            mike = _closure1_slot8;
            entity = delete mike[zulu];
 36:
            return entity;
        }
    };
    mike['SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rtc/VerifiedKeyStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();