// app/stores/NetworkStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: handleConnectionInfoChange
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.type;
            tangon = null;
            if(!(tangon == entity)) { _fun00004_ip = 29; continue _fun00003 }
 14:
            entity = _closure1_slot7;
            zuuluu = entity.UNKNOWN;
            _fun00004_ip = 34; continue _fun00003;
 29:
            zuuluu = michal.type;
 34:
            _closure1_slot9 = zuuluu;
            zuuluu = michal.effectiveSpeed;
            if(!(tangon == zuuluu)) { _fun00004_ip = 61; continue _fun00003 }
 51:
            tangon = _closure1_slot8;
            zuuluu = tangon.UNKNOWN;
 61:
            _closure1_slot10 = zuuluu;
            michal = michal.serviceProvider;
            _closure1_slot11 = michal;
            michal = _closure1_slot12;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.NetworkConnectionTypes;
    var _closure1_slot7 = option;
    michal = michal.NetworkConnectionSpeeds;
    var _closure1_slot8 = michal;
    option = option.UNKNOWN;
    var _closure1_slot9 = option;
    michal = michal.UNKNOWN;
    var _closure1_slot10 = michal;
    michal = null;
    var _closure1_slot11 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: NetworkStoreClass
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 6;
            oscard = report[michal];
            entity = undefined;
            golfie = zuuluu.bind(entity)(oscard);
            oscard = golfie.getNetworkInformation;
            golfie = oscard.bind(golfie)();
            oscard = golfie.then;
            tangon = _closure1_slot14;
            oscard = oscard.bind(golfie)(tangon);
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.addChangeCallback;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getType';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getEffectiveConnectionSpeed';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getServiceProvider';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(option);
    michal = 'NetworkStore';
    verify['displayName'] = michal;
    michal = 8;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = verify.prototype;
    golfie = Object.create(michal, {constructor: {value: verify}});
    yankee = {};
    foxtra = golfie;
    michal = new foxtra[verify](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot12 = michal;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/NetworkStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();