// app/stores/ConsentStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot10;
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
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = false;
    var _closure1_slot5 = michal;
    var _closure1_slot6 = michal;
    michal = {};
    var _closure1_slot7 = michal;
    michal = null;
    var _closure1_slot8 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ConsentStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot9;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'hasConsented';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure1_slot7;
                tangon = entity[zuuluu];
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00006_ip = 39; continue _fun00005 }
 23:
                michal = _closure1_slot7;
                michal = michal[zuuluu];
                entity = michal.consented;
 39:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'consents';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'fetchedConsents';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot5;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'receivedConsentsInConnectionOpen';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot6;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getAuthenticationConsentRequired';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'ConsentStore';
    golfie['displayName'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleConnectionOpen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.consents;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 51; continue _fun00007 }
 15:
            entity = {};
            report = _closure1_slot7;
            oscard = entity;
            tangon = copyDataProperties(oscard, report);
            oscard = entity;
            report = zuuluu;
            zuuluu = copyDataProperties(oscard, report);
            _closure1_slot7 = entity;
            entity = true;
            _closure1_slot6 = entity;
 51:
            entity = undefined;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = option;
    option = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zuuluu = entity.consents;
        entity = {};
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        _closure1_slot7 = entity;
        entity = true;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = option;
    option = function(argFoo) { // Original name: handleUpdateConsents
        entity = argFoo;
        zuuluu = entity.consents;
        entity = {};
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        _closure1_slot7 = entity;
        entity = true;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    michal['UPDATE_CONSENTS'] = option;
    option = function(argFoo) { // Original name: handleConsentRequired
        entity = argFoo;
        michal = entity.consentRequired;
        _closure1_slot8 = michal;
        entity = undefined;
        return entity;
    };
    michal['SET_CONSENT_REQUIRED'] = option;
    tangon = function() { // Original name: handleLogout
        entity = null;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/ConsentStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();