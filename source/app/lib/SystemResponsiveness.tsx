// app/lib/SystemResponsiveness.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun53035: for(var _fun53035_ip = 0; ; ) switch(_fun53035_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun53035_ip = 46; continue _fun53035 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun53035_ip = 55; continue _fun53035 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun53035_ip = 343; continue _fun53035 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun53035_ip = 323; continue _fun53035 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun53035_ip = 283; continue _fun53035 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun53035_ip = 270; continue _fun53035 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun53035_ip = 163; continue _fun53035 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun53035_ip = 179; continue _fun53035 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun53035_ip = 249; continue _fun53035 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun53035_ip = 249; continue _fun53035 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun53035_ip = 234; continue _fun53035 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun53035_ip = 247; continue _fun53035 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun53035_ip = 265; continue _fun53035;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun53035_ip = 283; continue _fun53035;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun53035_ip = 323; continue _fun53035 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun53035_ip = 330; continue _fun53035 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun53036: for(var _fun53036_ip = 0; ; ) switch(_fun53036_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun53036_ip = 56; continue _fun53036 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun53036_ip = 67; continue _fun53036;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun53037: for(var _fun53037_ip = 0; ; ) switch(_fun53037_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun53037_ip = 23; continue _fun53037 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun53037_ip = 33; continue _fun53037 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun53037_ip = 70; continue _fun53037 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun53037_ip = 55; continue _fun53037 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: SystemResponsiveness
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = argFoo;
            zulu['connection'] = report;
            tango = function(argFoo) {
                _fun53040: for(var _fun53040_ip = 0; ; ) switch(_fun53040_ip) {
 0:
                    entity = argFoo;
                    mike = null;
                    if(!(mike != entity)) { _fun53040_ip = 64; continue _fun53040 }
 9:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.forEach;
                    entity = entity.rtp;
                    mike = entity.outbound;
                    entity = function(argFoo) {
                        _fun53041: for(var _fun53041_ip = 0; ; ) switch(_fun53041_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.type;
                            mike = 'audio';
                            if(!(mike === zulu)) { _fun53041_ip = 112; continue _fun53041 }
 16:
                            mike = _closure1_slot5;
                            entity = entity.pttQueueLatencyMicrosSamples;
                            zulu = null;
                            if(!(zulu == entity)) { _fun53041_ip = 39; continue _fun53041 }
 35:
                            entity = new Array(0);
 39:
                            oscar = undefined;
                            report = mike.bind(oscar)(entity);
                            mike = report.bind(oscar)();
                            entity = mike.done;
                            tango = 1000;
                            if(entity) { _fun53041_ip = 112; continue _fun53041 }
 67:
                            entity = mike.value;
                            options = entity / tango;
                            entity = _closure3_slot0;
                            golf = entity.pttQueueLatencyHistogram;
                            entity = golf.addSample;
                            entity = entity.bind(golf)(options);
                            golf = report.bind(oscar)();
                            entity = golf.done;
                            mike = golf;
                            if(!entity) { _fun53041_ip = 67; continue _fun53041 }
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike, entity);
 64:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['sampleStats'] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.Histogram;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            verify = tango;
            mike = new verify[mike](options);
            mike = mike instanceof Object ? mike : tango;
            zulu['pttQueueLatencyHistogram'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            report = mike.connection;
            tango = report.on;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.BaseConnectionEvent;
            zulu = zulu.Stats;
            mike = mike.sampleStats;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            report = mike.connection;
            tango = report.off;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.BaseConnectionEvent;
            zulu = zulu.Stats;
            mike = mike.sampleStats;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getPttQueueLatencyStats';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            zulu = entity.pttQueueLatencyHistogram;
            mike = zulu.getReport;
            entity = [50, 95];
            mike = mike.bind(zulu)(entity);
            entity = {};
            zulu = mike.max;
            entity['ptt_queue_latency_max'] = zulu;
            zulu = mike.mean;
            entity['ptt_queue_latency_mean'] = zulu;
            tango = mike.percentiles;
            zulu = 50;
            zulu = tango[zulu];
            entity['ptt_queue_latency_p50'] = zulu;
            tango = mike.percentiles;
            zulu = 95;
            zulu = tango[zulu];
            entity['ptt_queue_latency_p95'] = zulu;
            mike = mike.samples;
            entity['ptt_queue_latency_samples'] = mike;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/SystemResponsiveness.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();