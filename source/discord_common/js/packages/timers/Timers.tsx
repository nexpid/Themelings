// discord_common/js/packages/timers/Timers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: Timeout
            tangon = _closure1_slot0;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = arguments[2];
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = undefined;
                if(!(report === entity)) { _fun00002_ip = 27; continue _fun00001 }
 25:
                report = true;
 27:
                tangon = zuuluu.isStarted;
                tangon = tangon.bind(zuuluu)();
                if(!tangon) { _fun00002_ip = 43; continue _fun00001 }
 40:
                tangon = !report;
 43:
                if(tangon) { _fun00002_ip = 89; continue _fun00001 }
 46:
                tangon = zuuluu.stop;
                tangon = tangon.bind(zuuluu)();
                tangon = global;
                oscard = tangon.window;
                report = oscard.setTimeout;
                tangon = function() {
                    zuuluu = _closure3_slot0;
                    michal = null;
                    zuuluu['_ref'] = michal;
                    michal = _closure3_slot1;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = argFoo;
                michal = report.bind(oscard)(tangon, michal);
                zuuluu['_ref'] = michal;
 89:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                zuuluu = michal._ref;
                entity = null;
                if(!(entity != zuuluu)) { _fun00004_ip = 42; continue _fun00003 }
 15:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal._ref;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['_ref'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'isStarted';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            michal = entity._ref;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    oscard = tangon.bind(entity)();
    var _closure1_slot2 = oscard;
    tangon = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar) { // Original name: DelayedCall
            zuuluu = this;
            report = _closure1_slot0;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = argFoo;
            zuuluu['_delay'] = tangon;
            tangon = argBar;
            zuuluu['_handler'] = tangon;
            michal = _closure1_slot2;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_timeout'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'set';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            entity = this;
            michal = argFoo;
            entity['_delay'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'delay';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = arguments[0];
                michal = this;
                entity = undefined;
                if(!(oscard === entity)) { _fun00006_ip = 14; continue _fun00005 }
 12:
                oscard = true;
 14:
                report = michal._timeout;
                tangon = report.start;
                zuuluu = michal._delay;
                michal = michal._handler;
                michal = tangon.bind(report)(zuuluu, michal, oscard);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'cancel';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity._timeout;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'isDelayed';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            michal = entity._timeout;
            entity = michal.isStarted;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: Interval
            tangon = _closure1_slot0;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            michal = this;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = global;
            report = entity.window;
            tangon = report.setInterval;
            zuuluu = argBar;
            entity = argFoo;
            entity = tangon.bind(report)(zuuluu, entity);
            michal['_ref'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                zuuluu = michal._ref;
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 42; continue _fun00007 }
 15:
                zuuluu = global;
                report = zuuluu.clearInterval;
                tangon = michal._ref;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['_ref'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'isStarted';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            michal = entity._ref;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    golfie = 2;
    option = option[golfie];
    golfie = argBar;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = '../discord_common/js/packages/timers/Timers.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['Timeout'] = oscard;
    zuuluu['DelayedCall'] = report;
    zuuluu['Interval'] = tangon;
    michal = function(argFoo) { // Original name: timeoutPromise
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = global;
            tangon = entity.setTimeout;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = function() {
                michal = _closure3_slot0;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['timeoutPromise'] = michal;
    return entity;
})();