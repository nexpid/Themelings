// app/lib/SystemResponsiveness.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot6;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot6;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: SystemResponsiveness
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = argFoo;
            zuuluu['connection'] = report;
            tangon = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = null;
                    if(!(michal != entity)) { _fun00008_ip = 66; continue _fun00007 }
 9:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.forEach;
                    entity = entity.rtp;
                    michal = entity.outbound;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.type;
                            michal = 'audio';
                            if(!(michal === zuuluu)) { _fun00010_ip = 112; continue _fun00009 }
 16:
                            michal = _closure1_slot5;
                            entity = entity.pttQueueLatencyMicrosSamples;
                            zuuluu = null;
                            if(!(zuuluu == entity)) { _fun00010_ip = 39; continue _fun00009 }
 35:
                            entity = new Array(0);
 39:
                            oscard = undefined;
                            report = michal.bind(oscard)(entity);
                            michal = report.bind(oscard)();
                            entity = michal.done;
                            tangon = 1000;
                            if(entity) { _fun00010_ip = 112; continue _fun00009 }
 67:
                            entity = michal.value;
                            option = entity / tangon;
                            entity = _closure3_slot0;
                            golfie = entity.pttQueueLatencyHistogram;
                            entity = golfie.addSample;
                            entity = entity.bind(golfie)(option);
                            golfie = report.bind(oscard)();
                            entity = golfie.done;
                            michal = golfie;
                            if(!entity) { _fun00010_ip = 67; continue _fun00009 }
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['sampleStats'] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.Histogram;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            verify = tangon;
            michal = new verify[michal](option);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['pttQueueLatencyHistogram'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            report = michal.connection;
            tangon = report.on;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.BaseConnectionEvent;
            zuuluu = zuuluu.Stats;
            michal = michal.sampleStats;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            report = michal.connection;
            tangon = report.off;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.BaseConnectionEvent;
            zuuluu = zuuluu.Stats;
            michal = michal.sampleStats;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getPttQueueLatencyStats';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            zuuluu = entity.pttQueueLatencyHistogram;
            michal = zuuluu.getReport;
            entity = [50, 95];
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            zuuluu = michal.max;
            entity['ptt_queue_latency_max'] = zuuluu;
            zuuluu = michal.mean;
            entity['ptt_queue_latency_mean'] = zuuluu;
            tangon = michal.percentiles;
            zuuluu = 50;
            zuuluu = tangon[zuuluu];
            entity['ptt_queue_latency_p50'] = zuuluu;
            tangon = michal.percentiles;
            zuuluu = 95;
            zuuluu = tangon[zuuluu];
            entity['ptt_queue_latency_p95'] = zuuluu;
            michal = michal.samples;
            entity['ptt_queue_latency_samples'] = michal;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/SystemResponsiveness.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();