// app/modules/gateway/DispatcherWorkScheduler.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS;
    var _closure1_slot7 = golfie;
    golfie = tangon.NATIVE_WORK_BACKOFF_MS;
    var _closure1_slot8 = golfie;
    golfie = tangon.NATIVE_WORK_DEADLINE_MS;
    var _closure1_slot9 = golfie;
    tangon = tangon.WorkIdleDeadline;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AppStates;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BasicWorkScheduler;
    tangon = function(argFoo) {
        tangon = function() { // Original name: DispatcherWorkScheduler
            oscard = this;
            entity = _closure1_slot2;
            tangon = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(oscard, tangon);
            entity = _closure1_slot13;
            entity = entity.bind(report)(oscard, tangon);
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 7;
            zuuluu = oscard[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.subscribe;
            zuuluu = 'APP_STATE_UPDATE';
            michal = function(argFoo) {
                entity = argFoo;
                tangon = entity.state;
                entity = _closure1_slot11;
                entity = entity.BACKGROUND;
                zuuluu = _closure3_slot0;
                michal = zuuluu._trackAppBackgrounded;
                entity = tangon === entity;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = '_queueIdleCallback';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                entity = michal._enableRequestIdleCallback;
                if(!entity) { _fun00006_ip = 80; continue _fun00005 }
 18:
                entity = michal._criticalWorkScheduled;
                if(entity) { _fun00006_ip = 80; continue _fun00005 }
 27:
                entity = global;
                report = entity.performance;
                tangon = report.now;
                tangon = tangon.bind(report)();
                var _closure3_slot1 = tangon;
                report = entity.setTimeout;
                entity = undefined;
                tangon = function() {
                    tangon = global;
                    michal = tangon.performance;
                    entity = michal.now;
                    zuuluu = entity.bind(michal)();
                    michal = _closure3_slot1;
                    oscard = zuuluu - michal;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu._processWorkCallback;
                    verify = zuuluu._consecutiveFlushesBeforeQueueEmpty;
                    option = tangon.Math;
                    golfie = option.max;
                    report = _closure1_slot9;
                    oscard = report - oscard;
                    report = 0;
                    option = golfie.bind(option)(report, oscard);
                    oscard = _closure1_slot10;
                    golfie = tangon.Math;
                    report = golfie.max;
                    tangon = _closure1_slot8;
                    tangon = tangon * verify;
                    tangon = option + tangon;
                    entity = _closure1_slot7;
                    yankee = report.bind(golfie)(tangon, entity);
                    entity = oscard.prototype;
                    tangon = Object.create(entity, {constructor: {value: oscard}});
                    offset = false;
                    romeon = tangon;
                    entity = new romeon[oscard](yankee, offset, verify);
                    entity = entity instanceof Object ? entity : tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                zuuluu = 1;
                zuuluu = report.bind(entity)(tangon, zuuluu);
                michal['_flushIdleHandler'] = zuuluu;
                return entity;
 80:
                entity = michal._processWorkCallback;
                entity = entity.bind(michal)();
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = '_clearIdleCallback';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                zuuluu = michal._flushIdleHandler;
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 42; continue _fun00007 }
 15:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal._flushIdleHandler;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['_flushIdleHandler'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/DispatcherWorkScheduler.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: createDispatcherWorkScheduler
        entity = _closure1_slot12;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        zuuluu = michal;
        entity = new zuuluu[entity](michal);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['createDispatcherWorkScheduler'] = michal;
    return entity;
})();