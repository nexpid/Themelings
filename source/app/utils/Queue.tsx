// app/utils/Queue.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    golfie = oscard.bind(entity)(tangon);
    tangon = golfie.prototype;
    oscard = Object.create(tangon, {constructor: {value: golfie}});
    yankee = 'Queue';
    romeon = oscard;
    tangon = new romeon[golfie](yankee, offset);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: Queue
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = arguments[0];
                tangon = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(report === entity)) { _fun00002_ip = 22; continue _fun00001 }
 15:
                report = _closure1_slot4;
 22:
                if(!(tangon === entity)) { _fun00002_ip = 29; continue _fun00001 }
 26:
                tangon = 100;
 29:
                golfie = _closure1_slot2;
                oscard = _closure2_slot0;
                oscard = golfie.bind(entity)(zuuluu, oscard);
                zuuluu['logger'] = report;
                zuuluu['defaultRetryAfter'] = tangon;
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                michal = 3;
                michal = report[michal];
                michal = tangon.bind(entity)(michal);
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                offset = tangon;
                michal = new offset[michal](verify);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['queue'] = michal;
                michal = null;
                zuuluu['timeout'] = michal;
                michal = false;
                zuuluu['draining'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'enqueue';
        entity['key'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            michal = this;
            tangon = michal.queue;
            zuuluu = tangon.push;
            entity = {};
            report = argFoo;
            entity['message'] = report;
            report = argBar;
            entity['success'] = report;
            report = argBaz;
            entity['logId'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = michal._drainIfNecessary;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'length';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity.queue;
            entity = entity.length;
            return entity;
        };
        entity['get'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = '_drainIfNecessary';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                var _closure3_slot0 = tangon;
                zuuluu = tangon.timeout;
                michal = null;
                if(!(michal === zuuluu)) { _fun00004_ip = 185; continue _fun00003 }
 24:
                michal = tangon.queue;
                zuuluu = michal.length;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00004_ip = 185; continue _fun00003 }
 44:
                zuuluu = tangon.draining;
                michal = true;
                if(!(michal !== zuuluu)) { _fun00004_ip = 185; continue _fun00003 }
 59:
                tangon['draining'] = michal;
                zuuluu = tangon.queue;
                michal = zuuluu.shift;
                michal = michal.bind(zuuluu)();
                var _closure3_slot1 = michal;
                zuuluu = michal.message;
                report = michal.success;
                var _closure3_slot2 = report;
                offset = michal.logId;
                var _closure3_slot3 = offset;
                oscard = tangon.logger;
                report = oscard.log;
                michal = tangon.queue;
                verify = michal.length;
                michal = global;
                michal = michal.HermesInternal;
                option = michal.concat;
                golfie = 'Draining message from queue LogId:';
                michal = ' QueueLength: ';
                michal = option.bind(golfie)(offset, michal, verify);
                michal = report.bind(oscard)(michal);
                michal = tangon.drain;
                entity = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscard = argFoo;
                        michal = argBar;
                        golfie = _closure3_slot0;
                        verify = golfie.logger;
                        option = verify.log;
                        romeon = _closure3_slot3;
                        tangon = golfie.queue;
                        yankee = tangon.length;
                        tangon = global;
                        report = tangon.HermesInternal;
                        offset = report.concat;
                        report = 'Finished draining message from queue LogId:';
                        backup = ' QueueLength: ';
                        report = offset.bind(report)(romeon, backup, yankee);
                        report = option.bind(verify)(report);
                        report = false;
                        golfie['draining'] = report;
                        report = null;
                        if(!(report != oscard)) { _fun00006_ip = 206; continue _fun00005 }
 91:
                        verify = oscard.retryAfter;
                        if(!(report == verify)) { _fun00006_ip = 111; continue _fun00005 }
 101:
                        report = _closure3_slot0;
                        verify = report.defaultRetryAfter;
 111:
                        oscard = _closure3_slot0;
                        option = oscard.logger;
                        golfie = option.info;
                        output = _closure3_slot3;
                        report = oscard.queue;
                        kiloes = report.length;
                        report = tangon.HermesInternal;
                        yankee = report.concat;
                        update = 'Rate limited. Delaying draining of queue for ';
                        result = ' ms. LogId:';
                        echoed = verify;
                        sizing = backup;
                        report = update[yankee](echoed, result, output, sizing, kiloes, backup);
                        report = golfie.bind(option)(report);
                        option = tangon.setTimeout;
                        golfie = undefined;
                        report = function() {
                            michal = _closure3_slot0;
                            tangon = michal.queue;
                            zuuluu = tangon.unshift;
                            entity = _closure3_slot1;
                            entity = zuuluu.bind(tangon)(entity);
                            entity = null;
                            michal['timeout'] = entity;
                            entity = michal._drainIfNecessary;
                            entity = entity.bind(michal)();
                            entity = undefined;
                            return entity;
                        };
                        report = option.bind(golfie)(report, verify);
                        oscard['timeout'] = report;
                        _fun00006_ip = 261; continue _fun00005;
 206:
                        report = tangon.setImmediate;
                        tangon = undefined;
                        zuuluu = function() {
                            michal = _closure3_slot0;
                            entity = michal._drainIfNecessary;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        zuuluu = report.bind(tangon)(zuuluu);
 224: // try_start_0
                        zuuluu = _closure3_slot2;
                        michal = zuuluu.bind(tangon)(michal);
 233: // try_end0
                        _fun00006_ip = 261; continue _fun00005;
 235: // catch_target0
                        CatchBlockStart(arg_register=3);
                        entity = _closure3_slot0;
                        zuuluu = entity.logger;
                        michal = zuuluu.error;
                        entity = '';
                        entity = michal.bind(zuuluu)(entity, tangon);
 261:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(tangon)(zuuluu, entity);
 185:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/Queue.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();