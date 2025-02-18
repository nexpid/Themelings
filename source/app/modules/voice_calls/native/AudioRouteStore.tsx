// app/modules/voice_calls/native/AudioRouteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
            entity = _closure1_slot18;
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
    var _closure1_slot17 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handleAudioRouteChanged
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00006_ip = 19; continue _fun00005 }
 12:
            zuuluu = _closure1_slot12;
 19:
            michal = null;
            if(!(michal != oscard)) { _fun00006_ip = 137; continue _fun00005 }
 25:
            michal = '';
            if(!(michal !== oscard)) { _fun00006_ip = 137; continue _fun00005 }
 33:
            tangon = oscard.includes;
            michal = 'Bluetooth';
            tangon = tangon.bind(oscard)(michal);
            if(tangon) { _fun00006_ip = 125; continue _fun00005 }
 55:
            report = oscard.includes;
            tangon = 'Speaker';
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00006_ip = 113; continue _fun00005 }
 74:
            report = oscard.includes;
            tangon = 'Receiver';
            tangon = report.bind(oscard)(tangon);
            report = _closure1_slot10;
            if(tangon) { _fun00006_ip = 105; continue _fun00005 }
 97:
            tangon = report.UNKNOWN;
            _fun00006_ip = 111; continue _fun00005;
 105:
            tangon = report.RECEIVER;
 111:
            _fun00006_ip = 123; continue _fun00005;
 113:
            report = _closure1_slot10;
            tangon = report.SPEAKER;
 123:
            _fun00006_ip = 135; continue _fun00005;
 125:
            michal = _closure1_slot10;
            tangon = michal.BLUETOOTH;
 135:
            _fun00006_ip = 150; continue _fun00005;
 137:
            michal = _closure1_slot10;
            tangon = michal.UNKNOWN;
 150:
            _closure1_slot11 = tangon;
            _closure1_slot12 = zuuluu;
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
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    tangon = michal.NativeModules;
    var _closure1_slot8 = tangon;
    offset = michal.NativeEventEmitter;
    michal = 6;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = {};
    verify = 'unknown';
    michal['UNKNOWN'] = verify;
    verify = 'bluetooth';
    michal['BLUETOOTH'] = verify;
    verify = 'speaker';
    michal['SPEAKER'] = verify;
    verify = 'receiver';
    michal['RECEIVER'] = verify;
    var _closure1_slot10 = michal;
    verify = michal.UNKNOWN;
    var _closure1_slot11 = verify;
    verify = false;
    var _closure1_slot12 = verify;
    verify = null;
    var _closure1_slot13 = verify;
    foxtra = tangon.AudioRouteEmitter;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    backup = verify;
    tangon = new backup[offset](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot14 = tangon;
    tangon = function() { // Original name: handleConnectionStatusChanged
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot9;
            michal = tangon.isConnected;
            michal = michal.bind(tangon)();
            tangon = _closure1_slot13;
            report = null;
            if(!(report === tangon)) { _fun00008_ip = 32; continue _fun00007 }
 29:
            if(michal) { _fun00008_ip = 108; continue _fun00007 }
 32:
            tangon = _closure1_slot13;
            if(!(report != tangon)) { _fun00008_ip = 321; continue _fun00007 }
 43:
            if(michal) { _fun00008_ip = 321; continue _fun00007 }
 49:
            michal = _closure1_slot8;
            tangon = michal.AudioRoutePicker;
            if(!(report != tangon)) { _fun00008_ip = 75; continue _fun00007 }
 63:
            michal = tangon.resetPortOverride;
            michal = michal.bind(tangon)();
 75:
            tangon = _closure1_slot20;
            michal = undefined;
            michal = tangon.bind(michal)();
            tangon = _closure1_slot13;
            michal = tangon.remove;
            michal = michal.bind(tangon)();
            _closure1_slot13 = report;
            _fun00008_ip = 321; continue _fun00007;
 108:
            michal = _closure1_slot20;
            oscard = undefined;
            michal = michal.bind(oscard)();
            michal = _closure1_slot14;
            tangon = report == michal;
            michal = undefined;
            if(tangon) { _fun00008_ip = 158; continue _fun00007 }
 131:
            verify = _closure1_slot14;
            option = verify.addListener;
            golfie = 'audio-route-changed';
            tangon = function(argFoo) {
                entity = argFoo;
                report = entity.routeType;
                tangon = entity.multipleRoutesAvailable;
                zuuluu = _closure1_slot19;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(report, tangon);
                zuuluu = _closure1_slot16;
                michal = zuuluu.emitChange;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            michal = option.bind(verify)(golfie, tangon);
 158:
            _closure1_slot13 = michal;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            michal = golfie[michal];
            tangon = tangon.bind(oscard)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(michal) { _fun00008_ip = 216; continue _fun00007 }
 194:
            michal = _closure1_slot8;
            tangon = michal.AudioRouteEmitter;
            michal = tangon.getCurrentRoute;
            tangon = michal.bind(tangon)();
            _fun00008_ip = 275; continue _fun00007;
 216:
            option = _closure1_slot1;
            michal = _closure1_slot2;
            golfie = 8;
            michal = michal[golfie];
            michal = option.bind(oscard)(michal);
            report = report == michal;
            michal = undefined;
            if(report) { _fun00008_ip = 272; continue _fun00007 }
 245:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.getCurrentRoute;
            michal = zuuluu.bind(report)();
 272:
            tangon = michal;
 275:
            zuuluu = tangon.then;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = entity.routeType;
                zuuluu = entity.multipleRoutesAvailable;
                michal = _closure1_slot19;
                entity = undefined;
                michal = michal.bind(entity)(tangon, zuuluu);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot16;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 32; continue _fun00009 }
 18:
                    zuuluu = _closure1_slot16;
                    michal = zuuluu.emitChange;
                    entity = michal.bind(zuuluu)();
 32:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function() {
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 321:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: AudioRouteStoreClass
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot17;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.subscribe;
            zuuluu = _closure1_slot15;
            michal = 'RTC_CONNECTION_STATE';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getCurrentRouteType';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getMultipleRoutesAvailable';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = tangon.bind(entity)(verify);
    tangon = 'AudioRouteStore';
    offset['displayName'] = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    foxtra = option.bind(entity)(tangon);
    tangon = offset.prototype;
    option = Object.create(tangon, {constructor: {value: offset}});
    romeon = {};
    backup = option;
    tangon = new backup[offset](foxtra, romeon, yankee);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot16 = tangon;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_calls/native/AudioRouteStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['RouteTypes'] = michal;
    return entity;
})();