// app/stores/HypeSquadStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot0 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.HypeSquadHouses;
    var _closure1_slot6 = option;
    michal = michal.UserFlags;
    var _closure1_slot7 = michal;
    michal = null;
    var _closure1_slot8 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: HypeSquadStore
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
                entity = _closure1_slot9;
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
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'getHouseMembership';
        report['key'] = oscard;
        entity = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'HypeSquadStore';
    option['displayName'] = michal;
    michal = 8;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: deriveHouseMembershipFromUserFlags
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot5;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != tangon)) { _fun00006_ip = 140; continue _fun00005 }
 22:
            zuuluu = tangon.hasFlag;
            entity = _closure1_slot7;
            entity = entity.HYPESQUAD_ONLINE_HOUSE_1;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00006_ip = 126; continue _fun00005 }
 46:
            zuuluu = tangon.hasFlag;
            entity = _closure1_slot7;
            entity = entity.HYPESQUAD_ONLINE_HOUSE_2;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00006_ip = 110; continue _fun00005 }
 70:
            zuuluu = tangon.hasFlag;
            entity = _closure1_slot7;
            entity = entity.HYPESQUAD_ONLINE_HOUSE_3;
            entity = zuuluu.bind(tangon)(entity);
            if(!entity) { _fun00006_ip = 140; continue _fun00005 }
 94:
            entity = _closure1_slot6;
            entity = entity.HOUSE_3;
            _closure1_slot8 = entity;
            _fun00006_ip = 140; continue _fun00005;
 110:
            entity = _closure1_slot6;
            entity = entity.HOUSE_2;
            _closure1_slot8 = entity;
            _fun00006_ip = 140; continue _fun00005;
 126:
            entity = _closure1_slot6;
            entity = entity.HOUSE_1;
            _closure1_slot8 = entity;
 140:
            entity = undefined;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = verify;
    verify = function() { // Original name: removeHouseMembership
        entity = null;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS'] = verify;
    tangon = function(argFoo) { // Original name: setHouseMembership
        entity = argFoo;
        michal = entity.houseID;
        _closure1_slot8 = michal;
        entity = undefined;
        return entity;
    };
    michal['HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/HypeSquadStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();