// discord_common/js/packages/backoff/Backoff.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: Backoff
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = arguments[0];
                report = arguments[1];
                tangon = arguments[2];
                entity = this;
                zuuluu = undefined;
                if(!(michal === zuuluu)) { _fun00002_ip = 24; continue _fun00001 }
 18:
                michal = 500;
 24:
                if(!(report === zuuluu)) { _fun00002_ip = 30; continue _fun00001 }
 28:
                report = null;
 30:
                if(!(tangon === zuuluu)) { _fun00002_ip = 36; continue _fun00001 }
 34:
                tangon = true;
 36:
                golfie = _closure1_slot0;
                oscard = _closure2_slot0;
                oscard = golfie.bind(zuuluu)(entity, oscard);
                oscard = 0;
                entity['_fails'] = oscard;
                if(!(!(michal <= oscard))) { _fun00002_ip = 107; continue _fun00001 }
 68:
                entity['min'] = michal;
                oscard = null;
                if(!(oscard == report)) { _fun00002_ip = 87; continue _fun00001 }
 80:
                oscard = 10;
                report = oscard * michal;
 87:
                entity['max'] = report;
                entity['jitter'] = tangon;
                entity['_current'] = michal;
                return zuuluu;
 107:
                entity = global;
                michal = entity.Error;
                entity = 'Backoff min value must be greater than zero or backoff will never back-off.';
                entity = michal.bind(zuuluu)(entity);
                throw entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'fails';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity._fails;
            return entity;
        };
        entity['get'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'current';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._current;
            return entity;
        };
        entity['get'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'pending';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            michal = entity._timeoutId;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity['get'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'succeed';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.cancel;
            entity = entity.bind(michal)();
            entity = 0;
            michal['_fails'] = entity;
            entity = michal.min;
            michal['_current'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'fail';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = tangon;
                report = michal._fails;
                entity = 1;
                entity = report + entity;
                michal['_fails'] = entity;
                report = michal._current;
                entity = 2;
                report = entity * report;
                entity = michal.jitter;
                oscard = report;
                if(!entity) { _fun00004_ip = 82; continue _fun00003 }
 60:
                entity = global;
                golfie = entity.Math;
                entity = golfie.random;
                entity = entity.bind(golfie)();
                oscard = report * entity;
 82:
                entity = global;
                option = entity.Math;
                golfie = option.min;
                report = michal._current;
                oscard = report + oscard;
                report = michal.max;
                report = golfie.bind(option)(oscard, report);
                michal['_current'] = report;
                oscard = null;
                if(!(oscard != tangon)) { _fun00004_ip = 195; continue _fun00003 }
 128:
                report = michal._timeoutId;
                if(!(oscard != report)) { _fun00004_ip = 158; continue _fun00003 }
 138:
                report = michal._callback;
                if(!(report === tangon)) { _fun00004_ip = 203; continue _fun00003 }
 148:
                report = michal.cancel;
                report = report.bind(michal)();
 158:
                michal['_callback'] = tangon;
                oscard = entity.setTimeout;
                report = michal._current;
                tangon = undefined;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0: // try_start_0
                        zuuluu = _closure3_slot1;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00006_ip = 23; continue _fun00005 }
 13:
                        zuuluu = _closure3_slot1;
                        michal = undefined;
                        michal = zuuluu.bind(michal)();
 23: // try_end0
                        michal = _closure3_slot0;
                        entity = michal.cancel;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
 41: // catch_target0
                        CatchBlockStart(arg_register=0);
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.cancel;
                        michal = michal.bind(zuuluu)();
                        throw entity;
                    }
                };
                zuuluu = oscard.bind(tangon)(zuuluu, report);
                michal['_timeoutId'] = zuuluu;
 195:
                michal = michal._current;
                return michal;
 203:
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                offset = 'callback already pending';
                yankee = michal;
                entity = new yankee[zuuluu](offset, verify);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'cancel';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                entity = null;
                michal['_callback'] = entity;
                zuuluu = michal._timeoutId;
                if(!(entity != zuuluu)) { _fun00008_ip = 48; continue _fun00007 }
 21:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal._timeoutId;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['_timeoutId'] = entity;
 48:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[5] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/backoff/Backoff.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();