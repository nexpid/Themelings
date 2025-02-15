// app/utils/Queue.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    golf = oscar.bind(entity)(tango);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    yankee = 'Queue';
    romeo = oscar;
    tango = new romeo[golf](yankee, offset);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: Queue
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = arguments[0];
                tango = arguments[1];
                zulu = this;
                entity = undefined;
                if(!(report === entity)) { _fun00002_ip = 22; continue _fun00001 }
 15:
                report = _closure1_slot4;
 22:
                if(!(tango === entity)) { _fun00002_ip = 29; continue _fun00001 }
 26:
                tango = 100;
 29:
                golf = _closure1_slot2;
                oscar = _closure2_slot0;
                oscar = golf.bind(entity)(zulu, oscar);
                zulu['logger'] = report;
                zulu['defaultRetryAfter'] = tango;
                tango = _closure1_slot0;
                report = _closure1_slot1;
                mike = 3;
                mike = report[mike];
                mike = tango.bind(entity)(mike);
                tango = mike.prototype;
                tango = Object.create(tango, {constructor: {value: mike}});
                offset = tango;
                mike = new offset[mike](verify);
                mike = mike instanceof Object ? mike : tango;
                zulu['queue'] = mike;
                mike = null;
                zulu['timeout'] = mike;
                mike = false;
                zulu['draining'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'enqueue';
        entity['key'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            mike = this;
            tango = mike.queue;
            zulu = tango.push;
            entity = {};
            report = argFoo;
            entity['message'] = report;
            report = argBar;
            entity['success'] = report;
            report = argBaz;
            entity['logId'] = report;
            entity = zulu.bind(tango)(entity);
            entity = mike._drainIfNecessary;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'length';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity.queue;
            entity = entity.length;
            return entity;
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = '_drainIfNecessary';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = this;
                var _closure3_slot0 = tango;
                zulu = tango.timeout;
                mike = null;
                if(!(mike === zulu)) { _fun00004_ip = 186; continue _fun00003 }
 24:
                mike = tango.queue;
                zulu = mike.length;
                mike = 0;
                if(!(mike !== zulu)) { _fun00004_ip = 186; continue _fun00003 }
 44:
                zulu = tango.draining;
                mike = true;
                if(!(mike !== zulu)) { _fun00004_ip = 186; continue _fun00003 }
 59:
                tango['draining'] = mike;
                zulu = tango.queue;
                mike = zulu.shift;
                mike = mike.bind(zulu)();
                var _closure3_slot1 = mike;
                zulu = mike.message;
                report = mike.success;
                var _closure3_slot2 = report;
                offset = mike.logId;
                var _closure3_slot3 = offset;
                oscar = tango.logger;
                report = oscar.log;
                mike = tango.queue;
                verify = mike.length;
                mike = global;
                mike = mike.HermesInternal;
                options = mike.concat;
                golf = 'Draining message from queue LogId:';
                mike = ' QueueLength: ';
                mike = options.bind(golf)(offset, mike, verify);
                mike = report.bind(oscar)(mike);
                mike = tango.drain;
                entity = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscar = argFoo;
                        mike = argBar;
                        golf = _closure3_slot0;
                        verify = golf.logger;
                        options = verify.log;
                        romeo = _closure3_slot3;
                        tango = golf.queue;
                        yankee = tango.length;
                        tango = global;
                        report = tango.HermesInternal;
                        offset = report.concat;
                        report = 'Finished draining message from queue LogId:';
                        backup = ' QueueLength: ';
                        report = offset.bind(report)(romeo, backup, yankee);
                        report = options.bind(verify)(report);
                        report = false;
                        golf['draining'] = report;
                        report = null;
                        if(!(report != oscar)) { _fun00006_ip = 207; continue _fun00005 }
 92:
                        verify = oscar.retryAfter;
                        if(!(report == verify)) { _fun00006_ip = 112; continue _fun00005 }
 102:
                        report = _closure3_slot0;
                        verify = report.defaultRetryAfter;
 112:
                        oscar = _closure3_slot0;
                        options = oscar.logger;
                        golf = options.info;
                        output = _closure3_slot3;
                        report = oscar.queue;
                        kilo = report.length;
                        report = tango.HermesInternal;
                        yankee = report.concat;
                        update = 'Rate limited. Delaying draining of queue for ';
                        result = ' ms. LogId:';
                        echo = verify;
                        sizing = backup;
                        report = update[yankee](echo, result, output, sizing, kilo, backup);
                        report = golf.bind(options)(report);
                        options = tango.setTimeout;
                        golf = undefined;
                        report = function() {
                            mike = _closure3_slot0;
                            tango = mike.queue;
                            zulu = tango.unshift;
                            entity = _closure3_slot1;
                            entity = zulu.bind(tango)(entity);
                            entity = null;
                            mike['timeout'] = entity;
                            entity = mike._drainIfNecessary;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        };
                        report = options.bind(golf)(report, verify);
                        oscar['timeout'] = report;
                        _fun00006_ip = 262; continue _fun00005;
 207:
                        report = tango.setImmediate;
                        tango = undefined;
                        zulu = function() {
                            mike = _closure3_slot0;
                            entity = mike._drainIfNecessary;
                            entity = entity.bind(mike)();
                            return entity;
                        };
                        zulu = report.bind(tango)(zulu);
 225: // try_start_0
                        zulu = _closure3_slot2;
                        mike = zulu.bind(tango)(mike);
 234: // try_end0
                        _fun00006_ip = 262; continue _fun00005;
 236: // catch_target0
                        CatchBlockStart(arg_register=3);
                        entity = _closure3_slot0;
                        zulu = entity.logger;
                        mike = zulu.error;
                        entity = '';
                        entity = mike.bind(zulu)(entity, tango);
 262:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(tango)(zulu, entity);
 186:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'utils/Queue.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();