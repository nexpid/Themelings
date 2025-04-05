// app/modules/nuf/NewUserStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    michal = null;
    var _closure1_slot5 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: NewUserStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot7;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
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
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                michal = undefined;
                if(report) { _fun00006_ip = 21; continue _fun00005 }
 16:
                michal = tangon.type;
 21:
                tangon = zuuluu != michal;
                zuuluu = null;
                if(!tangon) { _fun00006_ip = 33; continue _fun00005 }
 30:
                zuuluu = michal;
 33:
                _closure1_slot5 = zuuluu;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getType';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = {};
            michal = _closure1_slot5;
            entity['type'] = michal;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(golfie);
    michal = 'NewUserStore';
    option['displayName'] = michal;
    michal = 'nuf';
    option['persistKey'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    oscard = function(argFoo) { // Original name: handleNewUser
        entity = argFoo;
        michal = entity.newUserType;
        _closure1_slot5 = michal;
        michal = _closure1_slot6;
        entity = michal.persist;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    michal['NUF_NEW_USER'] = oscard;
    oscard = function() { // Original name: handleNUFCompleted
        michal = null;
        _closure1_slot5 = michal;
        michal = _closure1_slot6;
        entity = michal.persist;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    michal['NUF_COMPLETE'] = oscard;
    oscard = option.prototype;
    oscard = Object.create(oscard, {constructor: {value: option}});
    romeon = oscard;
    offset = michal;
    michal = new romeon[option](yankee, offset, verify);
    michal = michal instanceof Object ? michal : oscard;
    var _closure1_slot6 = michal;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/NewUserStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();