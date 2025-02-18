// app/modules/user_affinities/UserAffinitiesV2Store.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
            entity = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: recomputeAffinities
        michal = global;
        tangon = michal.Map;
        zuuluu = _closure1_slot10;
        oscard = zuuluu.userAffinities;
        report = oscard.filter;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot5;
            michal = zuuluu.isBlockedOrIgnored;
            entity = argFoo;
            entity = entity.otherUserId;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        report = report.bind(oscard)(zuuluu);
        zuuluu = report.map;
        entity = function(argFoo) {
            michal = argFoo;
            zuuluu = michal.otherUserId;
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        };
        golfie = zuuluu.bind(report)(entity);
        zuuluu = tangon.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
        option = zuuluu;
        entity = new option[tangon](golfie, oscard);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    offset = 0;
    option = oscard[offset];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot0 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot1 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.USER_AFFINITY_TTL;
    var _closure1_slot6 = option;
    option = michal.Map;
    verify = option.prototype;
    verify = Object.create(verify, {constructor: {value: option}});
    kiloes = verify;
    option = new kiloes[option](backup);
    option = option instanceof Object ? option : verify;
    var _closure1_slot7 = option;
    option = false;
    var _closure1_slot8 = option;
    verify = michal.Object;
    option = verify.freeze;
    michal = {};
    yankee = new Array(0);
    michal['userAffinities'] = yankee;
    michal['lastFetched'] = offset;
    option = option.bind(verify)(michal);
    var _closure1_slot9 = option;
    michal = {};
    backup = michal;
    foxtra = option;
    option = copyDataProperties(backup, foxtra);
    var _closure1_slot10 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: UserAffinitiesV2Store
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot11;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                tangon = this;
                report = tangon.waitFor;
                zuuluu = _closure1_slot5;
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00006_ip = 72; continue _fun00005 }
 30:
                report = _closure1_slot10;
                zuuluu = michal.userAffinities;
                report['userAffinities'] = zuuluu;
                zuuluu = _closure1_slot10;
                michal = michal.lastFetched;
                zuuluu['lastFetched'] = michal;
                zuuluu = _closure1_slot13;
                michal = undefined;
                michal = zuuluu.bind(michal)();
 72:
                zuuluu = tangon.syncWith;
                report = _closure1_slot5;
                michal = new Array(1);
                michal[0] = report;
                entity = _closure1_slot13;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'shouldFetch';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure1_slot8;
                if(michal) { _fun00008_ip = 51; continue _fun00007 }
 10:
                michal = global;
                zuuluu = michal.Date;
                michal = zuuluu.now;
                zuuluu = michal.bind(zuuluu)();
                michal = _closure1_slot10;
                michal = michal.lastFetched;
                michal = zuuluu - michal;
                entity = _closure1_slot6;
                entity = michal > entity;
                return entity;
 51:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'isFetching';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getUserAffinities';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot10;
            entity = entity.userAffinities;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getUserAffinitiesMap';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot7;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'compare';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot7;
                michal = zuuluu.get;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                tangon = null;
                michal = tangon == entity;
                oscard = undefined;
                if(michal) { _fun00010_ip = 37; continue _fun00009 }
 31:
                oscard = entity.communicationProbability;
 37:
                golfie = tangon != oscard;
                entity = 0;
                if(!golfie) { _fun00010_ip = 49; continue _fun00009 }
 46:
                entity = oscard;
 49:
                golfie = _closure1_slot7;
                oscard = golfie.get;
                report = argFoo;
                report = oscard.bind(golfie)(report);
                oscard = tangon == report;
                zuuluu = undefined;
                if(oscard) { _fun00010_ip = 81; continue _fun00009 }
 75:
                zuuluu = report.communicationProbability;
 81:
                tangon = tangon != zuuluu;
                michal = 0;
                if(!tangon) { _fun00010_ip = 93; continue _fun00009 }
 90:
                michal = zuuluu;
 93:
                entity = entity - michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getUserAffinity';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot7;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'UserAffinitiesV2Store';
    option['displayName'] = michal;
    michal = 'UserAffinitiesStoreV2';
    option['persistKey'] = michal;
    michal = 8;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleLoadUserAffinities
        entity = true;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOAD_USER_AFFINITIES_V2'] = verify;
    verify = function(argFoo) { // Original name: handleLoadUserAffinitiesSuccess
        entity = argFoo;
        zuuluu = entity.affineUsers;
        tangon = _closure1_slot10;
        michal = global;
        report = michal.Date;
        michal = report.now;
        michal = michal.bind(report)();
        tangon['lastFetched'] = michal;
        michal = false;
        _closure1_slot8 = michal;
        michal = _closure1_slot10;
        michal['userAffinities'] = zuuluu;
        michal = _closure1_slot13;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['LOAD_USER_AFFINITIES_V2_SUCCESS'] = verify;
    verify = function() { // Original name: handleLoadUserAffinitiesFailure
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOAD_USER_AFFINITIES_V2_FAILURE'] = verify;
    tangon = function() { // Original name: handleLogout
        entity = {};
        tangon = _closure1_slot9;
        report = entity;
        zuuluu = copyDataProperties(report, tangon);
        _closure1_slot10 = entity;
        entity = global;
        entity = entity.Map;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        oscard = zuuluu;
        entity = new oscard[entity](report);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot7 = entity;
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = tangon;
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
    tangon = 'modules/user_affinities/UserAffinitiesV2Store.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();