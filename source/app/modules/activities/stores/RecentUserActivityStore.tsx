// app/modules/activities/stores/RecentUserActivityStore.tsx
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
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    tangon = function(argFoo) { // Original name: handleIncomingUserActivities
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.userActivities;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            report = tangon.bind(entity)(michal);
            tangon = report.isEligibleForGameActivityNotificationExperiment;
            michal = 'RecentUserActivityStore';
            michal = tangon.bind(report)(michal);
            if(!michal) { _fun00004_ip = 60; continue _fun00003 }
 54:
            tangon = null;
            michal = tangon != oscard;
 60:
            if(!michal) { _fun00004_ip = 112; continue _fun00003 }
 63:
            michal = global;
            report = michal.Set;
            tangon = oscard.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.application_id;
                return entity;
            };
            golfie = tangon.bind(oscard)(michal);
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            option = tangon;
            michal = new option[report](golfie, oscard);
            michal = michal instanceof Object ? michal : tangon;
            _closure1_slot7 = michal;
 112:
            return entity;
        }
    };
    option = global;
    yankee = option.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, verify);
    entity = 0;
    verify = oscard[entity];
    entity = undefined;
    verify = golfie.bind(entity)(verify);
    var _closure1_slot2 = verify;
    verify = 1;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 2;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 3;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 4;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot6 = verify;
    option = option.Set;
    verify = option.prototype;
    verify = Object.create(verify, {constructor: {value: option}});
    kiloes = verify;
    option = new kiloes[option](backup);
    option = option instanceof Object ? option : verify;
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: RecentUserActivityStore
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
                entity = _closure1_slot8;
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
        oscard = _closure1_slot6;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot3;
        report = {};
        oscard = 'currentUserApplicationIds';
        report['key'] = oscard;
        entity = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'RecentUserActivityStore';
    option['displayName'] = michal;
    michal = 7;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN_SUPPLEMENTAL'] = tangon;
    michal['CONNECTION_OPEN_STATE_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/stores/RecentUserActivityStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();