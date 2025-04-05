// app/modules/premium/OverridePremiumTypeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tangon = function(argFoo) { // Original name: setPremiumTypeActual
        entity = argFoo;
        michal = entity.user;
        zuuluu = _closure1_slot9;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        entity = 6;
        tangon = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = report.getPremiumTypeFromRawValue;
        michal = michal.premium_type;
        michal = tangon.bind(report)(michal);
        zuuluu['premiumTypeActual'] = michal;
        return entity;
    };
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
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
    option = michal.UNSELECTED_CREATED_AT_DATE;
    var _closure1_slot7 = option;
    offset = michal.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot8 = offset;
    michal = {};
    michal['premiumTypeOverride'] = offset;
    michal['premiumTypeActual'] = offset;
    michal['createdAtOverride'] = option;
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: OverridePremiumTypeStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                entity = _closure1_slot10;
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
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                tangon = null;
                if(!(tangon == michal)) { _fun00006_ip = 44; continue _fun00005 }
 9:
                report = _closure1_slot9;
                zuuluu = _closure1_slot8;
                report['premiumTypeOverride'] = zuuluu;
                zuuluu = _closure1_slot9;
                entity = _closure1_slot7;
                zuuluu['createdAtOverride'] = entity;
                entity = undefined;
                return entity;
 44:
                oscard = _closure1_slot9;
                golfie = tangon == michal;
                entity = undefined;
                if(golfie) { _fun00006_ip = 66; continue _fun00005 }
 60:
                entity = michal.premiumTypeActual;
 66:
                oscard['premiumTypeActual'] = entity;
                entity = _closure1_slot9;
                oscard = tangon == michal;
                report = undefined;
                if(oscard) { _fun00006_ip = 91; continue _fun00005 }
 85:
                report = michal.premiumTypeOverride;
 91:
                entity['premiumTypeOverride'] = report;
                entity = michal.createdAtOverride;
                if(!(tangon == entity)) { _fun00006_ip = 123; continue _fun00005 }
 107:
                tangon = _closure1_slot9;
                entity = _closure1_slot7;
                tangon['createdAtOverride'] = entity;
                _fun00006_ip = 170; continue _fun00005;
 123:
                zuuluu = _closure1_slot9;
                tangon = global;
                report = tangon.Date;
                option = michal.createdAtOverride;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                verify = tangon;
                michal = new verify[report](option, golfie);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['createdAtOverride'] = michal;
                entity = michal;
 170:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'getPremiumTypeOverride';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.premiumTypeOverride;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getPremiumTypeActual';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.premiumTypeActual;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getCreatedAtOverride';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.createdAtOverride;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'premiumType';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot9;
            entity = entity.premiumTypeOverride;
            return entity;
        };
        report['get'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'OverridePremiumTypeStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = new Array(1);
    offset = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = null;
            report = tangon == michal;
            entity = undefined;
            zuuluu = undefined;
            if(report) { _fun00008_ip = 22; continue _fun00007 }
 16:
            zuuluu = michal.createdAtOverride;
 22:
            if(!(tangon != zuuluu)) { _fun00008_ip = 28; continue _fun00007 }
 26:
            return entity;
 28:
            entity = {};
            golfie = entity;
            oscard = michal;
            michal = copyDataProperties(golfie, oscard);
            zuuluu = _closure1_slot7;
            michal = 'createdAtOverride';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    michal[0] = offset;
    option['migrations'] = michal;
    michal = 8;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: setPremiumTypeOverride
        entity = argFoo;
        michal = entity.premiumType;
        entity = _closure1_slot9;
        entity['premiumTypeOverride'] = michal;
        entity = undefined;
        return entity;
    };
    michal['SET_PREMIUM_TYPE_OVERRIDE'] = offset;
    verify = function(argFoo) { // Original name: setCreatedAtOverride
        entity = argFoo;
        michal = entity.createdAt;
        entity = _closure1_slot9;
        entity['createdAtOverride'] = michal;
        entity = undefined;
        return entity;
    };
    michal['SET_CREATED_AT_OVERRIDE'] = verify;
    michal['CURRENT_USER_UPDATE'] = tangon;
    michal['CONNECTION_OPEN'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/OverridePremiumTypeStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();