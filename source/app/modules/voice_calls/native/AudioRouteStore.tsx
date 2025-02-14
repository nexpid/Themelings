// app/modules/voice_calls/native/AudioRouteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun52866: for(var _fun52866_ip = 0; ; ) switch(_fun52866_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun52866_ip = 51; continue _fun52866 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun52866_ip = 92; continue _fun52866;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun52866_ip = 71; continue _fun52866 }
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
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun52867: for(var _fun52867_ip = 0; ; ) switch(_fun52867_ip) {
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
 70: // try_end0
            _fun52867_ip = 74; continue _fun52867;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handleAudioRouteChanged
        _fun52870: for(var _fun52870_ip = 0; ; ) switch(_fun52870_ip) {
 0:
            oscar = argFoo;
            zulu = arguments[1];
            entity = undefined;
            if(!(zulu === entity)) { _fun52870_ip = 19; continue _fun52870 }
 12:
            zulu = _closure1_slot12;
 19:
            mike = null;
            if(!(mike != oscar)) { _fun52870_ip = 137; continue _fun52870 }
 25:
            mike = '';
            if(!(mike !== oscar)) { _fun52870_ip = 137; continue _fun52870 }
 33:
            tango = oscar.includes;
            mike = 'Bluetooth';
            tango = tango.bind(oscar)(mike);
            if(tango) { _fun52870_ip = 125; continue _fun52870 }
 55:
            report = oscar.includes;
            tango = 'Speaker';
            tango = report.bind(oscar)(tango);
            if(tango) { _fun52870_ip = 113; continue _fun52870 }
 74:
            report = oscar.includes;
            tango = 'Receiver';
            tango = report.bind(oscar)(tango);
            report = _closure1_slot10;
            if(tango) { _fun52870_ip = 105; continue _fun52870 }
 97:
            tango = report.UNKNOWN;
            _fun52870_ip = 111; continue _fun52870;
 105:
            tango = report.RECEIVER;
 111:
            _fun52870_ip = 123; continue _fun52870;
 113:
            report = _closure1_slot10;
            tango = report.SPEAKER;
 123:
            _fun52870_ip = 135; continue _fun52870;
 125:
            mike = _closure1_slot10;
            tango = mike.BLUETOOTH;
 135:
            _fun52870_ip = 150; continue _fun52870;
 137:
            mike = _closure1_slot10;
            tango = mike.UNKNOWN;
 150:
            _closure1_slot11 = tango;
            _closure1_slot12 = zulu;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: resetState
        entity = _closure1_slot10;
        entity = entity.UNKNOWN;
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    tango = mike.NativeModules;
    var _closure1_slot8 = tango;
    offset = mike.NativeEventEmitter;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = {};
    verify = 'unknown';
    mike['UNKNOWN'] = verify;
    verify = 'bluetooth';
    mike['BLUETOOTH'] = verify;
    verify = 'speaker';
    mike['SPEAKER'] = verify;
    verify = 'receiver';
    mike['RECEIVER'] = verify;
    var _closure1_slot10 = mike;
    verify = mike.UNKNOWN;
    var _closure1_slot11 = verify;
    verify = false;
    var _closure1_slot12 = verify;
    verify = null;
    var _closure1_slot13 = verify;
    foxtrot = tango.AudioRouteEmitter;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    backup = verify;
    tango = new backup[offset](foxtrot, romeo);
    tango = tango instanceof Object ? tango : verify;
    var _closure1_slot14 = tango;
    tango = function() { // Original name: handleConnectionStatusChanged
        _fun52872: for(var _fun52872_ip = 0; ; ) switch(_fun52872_ip) {
 0:
            tango = _closure1_slot9;
            mike = tango.isConnected;
            mike = mike.bind(tango)();
            tango = _closure1_slot13;
            report = null;
            if(!(report === tango)) { _fun52872_ip = 32; continue _fun52872 }
 29:
            if(mike) { _fun52872_ip = 108; continue _fun52872 }
 32:
            tango = _closure1_slot13;
            if(!(report != tango)) { _fun52872_ip = 321; continue _fun52872 }
 43:
            if(mike) { _fun52872_ip = 321; continue _fun52872 }
 49:
            mike = _closure1_slot8;
            tango = mike.AudioRoutePicker;
            if(!(report != tango)) { _fun52872_ip = 75; continue _fun52872 }
 63:
            mike = tango.resetPortOverride;
            mike = mike.bind(tango)();
 75:
            tango = _closure1_slot20;
            mike = undefined;
            mike = tango.bind(mike)();
            tango = _closure1_slot13;
            mike = tango.remove;
            mike = mike.bind(tango)();
            _closure1_slot13 = report;
            _fun52872_ip = 321; continue _fun52872;
 108:
            mike = _closure1_slot20;
            oscar = undefined;
            mike = mike.bind(oscar)();
            mike = _closure1_slot14;
            tango = report == mike;
            mike = undefined;
            if(tango) { _fun52872_ip = 158; continue _fun52872 }
 131:
            verify = _closure1_slot14;
            options = verify.addListener;
            golf = 'audio-route-changed';
            tango = function(argFoo) {
                entity = argFoo;
                report = entity.routeType;
                tango = entity.multipleRoutesAvailable;
                zulu = _closure1_slot19;
                entity = undefined;
                zulu = zulu.bind(entity)(report, tango);
                zulu = _closure1_slot16;
                mike = zulu.emitChange;
                mike = mike.bind(zulu)();
                return entity;
            };
            mike = options.bind(verify)(golf, tango);
 158:
            _closure1_slot13 = mike;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            mike = golf[mike];
            tango = tango.bind(oscar)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            if(mike) { _fun52872_ip = 216; continue _fun52872 }
 194:
            mike = _closure1_slot8;
            tango = mike.AudioRouteEmitter;
            mike = tango.getCurrentRoute;
            tango = mike.bind(tango)();
            _fun52872_ip = 275; continue _fun52872;
 216:
            options = _closure1_slot1;
            mike = _closure1_slot2;
            golf = 8;
            mike = mike[golf];
            mike = options.bind(oscar)(mike);
            report = report == mike;
            mike = undefined;
            if(report) { _fun52872_ip = 272; continue _fun52872 }
 245:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            report = report.bind(oscar)(zulu);
            zulu = report.getCurrentRoute;
            mike = zulu.bind(report)();
 272:
            tango = mike;
 275:
            zulu = tango.then;
            mike = function(argFoo) {
                entity = argFoo;
                tango = entity.routeType;
                zulu = entity.multipleRoutesAvailable;
                mike = _closure1_slot19;
                entity = undefined;
                mike = mike.bind(entity)(tango, zulu);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function() {
                _fun52875: for(var _fun52875_ip = 0; ; ) switch(_fun52875_ip) {
 0:
                    zulu = _closure1_slot16;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun52875_ip = 32; continue _fun52875 }
 18:
                    zulu = _closure1_slot16;
                    mike = zulu.emitChange;
                    entity = mike.bind(zulu)();
 32:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function() {
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 321:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot15 = tango;
    tango = 10;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: AudioRouteStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot17;
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
        entity = function() { // Original name: value
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = _closure1_slot15;
            mike = 'RTC_CONNECTION_STATE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getCurrentRouteType';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getMultipleRoutesAvailable';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    offset = tango.bind(entity)(verify);
    tango = 'AudioRouteStore';
    offset['displayName'] = tango;
    tango = 9;
    tango = golf[tango];
    foxtrot = options.bind(entity)(tango);
    tango = offset.prototype;
    options = Object.create(tango, {constructor: {value: offset}});
    romeo = {};
    backup = options;
    tango = new backup[offset](foxtrot, romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot16 = tango;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_calls/native/AudioRouteStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['RouteTypes'] = mike;
    return entity;
})();