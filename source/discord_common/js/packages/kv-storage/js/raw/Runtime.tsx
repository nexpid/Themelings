// discord_common/js/packages/kv-storage/js/raw/Runtime.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot7;
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
            golfie = _closure1_slot7;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    tangon = global;
    offset = tangon.Object;
    option = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, golfie);
    golfie = 0;
    option = oscard[golfie];
    entity = undefined;
    option = verify.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot3 = option;
    option = tangon.process;
    option = option.env;
    verify = option.KV_STORAGE_LOGGING;
    option = '1';
    option = option === verify;
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.Logger;
    option = offset.prototype;
    verify = Object.create(option, {constructor: {value: offset}});
    foxtra = 'Runtime';
    backup = verify;
    option = new backup[offset](foxtra, romeon);
    option = option instanceof Object ? option : verify;
    var _closure1_slot5 = option;
    michal = function() {
        report = _closure1_slot3;
        tangon = function() { // Original name: Runtime
            tangon = _closure1_slot2;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = tangon;
        entity = {};
        zuuluu = 'nextId';
        entity['key'] = zuuluu;
        zuuluu = function() { // Original name: value
            michal = this;
            entity = michal.counter;
            entity = entity + 1;
            michal['counter'] = entity;
            return entity;
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(11);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'executeAsync';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            michal = argFoo;
            var _closure3_slot1 = michal;
            michal = argBar;
            var _closure3_slot2 = michal;
            michal = zuuluu.initialize;
            michal = michal.bind(zuuluu)();
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo, argBar) {
                michal = _closure3_slot0;
                entity = michal.nextId;
                report = entity.bind(michal)();
                zuuluu = _closure3_slot2;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(report);
                tangon = michal.pending;
                zuuluu = tangon.set;
                michal = {};
                michal['id'] = report;
                oscard = _closure3_slot1;
                michal['tag'] = oscard;
                oscard = global;
                golfie = oscard.performance;
                oscard = golfie.now;
                oscard = oscard.bind(golfie)();
                michal['started'] = oscard;
                oscard = argFoo;
                michal['resolve'] = oscard;
                oscard = argBar;
                michal['reject'] = oscard;
                michal = zuuluu.bind(tangon)(report, michal);
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'addCompletionCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            michal = this;
            zuuluu = michal.completionCallbacks;
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'addDatabaseStateCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            michal = this;
            zuuluu = michal.dbStateCallbacks;
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'removeCompletionCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            zuuluu = argFoo;
            var _closure3_slot0 = zuuluu;
            tangon = michal.completionCallbacks;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['completionCallbacks'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[4] = entity;
        entity = {};
        oscard = 'removeDatabaseStateCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            zuuluu = argFoo;
            var _closure3_slot0 = zuuluu;
            tangon = michal.dbStateCallbacks;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['dbStateCallbacks'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[5] = entity;
        entity = {};
        oscard = 'onResponse';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                golfie = argBar;
                zuuluu = this;
                entity = global;
                michal = entity.performance;
                entity = michal.now;
                report = entity.bind(michal)();
                oscard = zuuluu.pending;
                michal = oscard.get;
                entity = tangon.id;
                michal = michal.bind(oscard)(entity);
                entity = null;
                if(!(entity != michal)) { _fun00008_ip = 127; continue _fun00007 }
 53:
                verify = zuuluu.pending;
                option = verify.delete;
                oscard = tangon.id;
                oscard = option.bind(verify)(oscard);
                oscard = tangon.timings;
                option = entity != golfie;
                entity = 0;
                if(!option) { _fun00008_ip = 92; continue _fun00007 }
 89:
                entity = golfie;
 92:
                oscard['materializationTimeNanoseconds'] = entity;
                entity = zuuluu.completeOperation;
                entity = entity.bind(zuuluu)(michal, tangon, report);
                entity = zuuluu.resolveOperation;
                entity = entity.bind(zuuluu)(michal, tangon);
 127:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[6] = entity;
        entity = {};
        oscard = 'onStatus';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = _closure1_slot6;
                entity = this;
                michal = entity.dbStateCallbacks;
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00010_ip = 75; continue _fun00009 }
 38:
                golfie = zuuluu.value;
                oscard = report.handle;
                michal = report.state;
                michal = golfie.bind(entity)(oscard, michal);
                oscard = tangon.bind(entity)();
                michal = oscard.done;
                zuuluu = oscard;
                if(!michal) { _fun00010_ip = 38; continue _fun00009 }
 75:
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[7] = entity;
        entity = {};
        oscard = 'resolveOperation';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = argBar;
                michal = entity.ok;
                if(michal) { _fun00012_ip = 84; continue _fun00011 }
 15:
                tangon = zuuluu.reject;
                michal = entity.data;
                report = 'string';
                michal = typeof michal;
                if(!(report !== michal)) { _fun00012_ip = 44; continue _fun00011 }
 37:
                michal = entity.data;
                _fun00012_ip = 77; continue _fun00011;
 44:
                report = global;
                golfie = report.Error;
                option = entity.data;
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                verify = oscard;
                report = new verify[golfie](option, golfie);
                michal = report instanceof Object ? report : oscard;
 77:
                michal = tangon.bind(zuuluu)(michal);
                _fun00012_ip = 100; continue _fun00011;
 84:
                michal = zuuluu.resolve;
                entity = entity.data;
                entity = michal.bind(zuuluu)(entity);
 100:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[8] = entity;
        entity = {};
        oscard = 'completeOperation';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                tangon = argBar;
                entity = this;
                michal = entity.completionCallbacks;
                report = michal.length;
                michal = 0;
                if(!(report > michal)) { _fun00014_ip = 247; continue _fun00013 }
 29:
                report = {};
                michal = zuuluu.id;
                report['id'] = michal;
                michal = zuuluu.tag;
                report['tag'] = michal;
                michal = tangon.ok;
                report['ok'] = michal;
                michal = tangon.data;
                report['value'] = michal;
                michal = {};
                oscard = tangon.timings;
                golfie = oscard.queueTimeNanoseconds;
                oscard = 1000000;
                golfie = golfie / oscard;
                michal['queue'] = golfie;
                golfie = tangon.timings;
                golfie = golfie.executionTimeNanoseconds;
                golfie = golfie / oscard;
                michal['execution'] = golfie;
                golfie = tangon.timings;
                golfie = golfie.materializationTimeNanoseconds;
                golfie = golfie / oscard;
                michal['materialization'] = golfie;
                tangon = tangon.timings;
                tangon = tangon.totalTimeNanoseconds;
                tangon = tangon / oscard;
                michal['ccTotal'] = tangon;
                tangon = zuuluu.started;
                zuuluu = argBaz;
                zuuluu = zuuluu - tangon;
                michal['jsTotal'] = zuuluu;
                report['timings'] = michal;
                michal = _closure1_slot6;
                entity = entity.completionCallbacks;
                tangon = undefined;
                zuuluu = michal.bind(tangon)(entity);
                michal = zuuluu.bind(tangon)();
                entity = michal.done;
                if(entity) { _fun00014_ip = 247; continue _fun00013 }
 222:
                entity = michal.value;
                entity = entity.bind(tangon)(report);
                oscard = zuuluu.bind(tangon)();
                entity = oscard.done;
                michal = oscard;
                if(!entity) { _fun00014_ip = 222; continue _fun00013 }
 247:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[9] = entity;
        entity = {};
        oscard = 'initialize';
        entity['key'] = oscard;
        michal = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal.initialized;
                if(zuuluu) { _fun00016_ip = 132; continue _fun00015 }
 18:
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                tangon = 3;
                report = report[tangon];
                tangon = undefined;
                tangon = oscard.bind(tangon)(report);
                oscard = tangon.KV_RAW;
                report = oscard.setCallbacks;
                tangon = {};
                golfie = function(argFoo) { // Original name: status
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.onStatus;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                tangon['status'] = golfie;
                golfie = function(argFoo, argBar) { // Original name: response
                    tangon = _closure3_slot0;
                    zuuluu = tangon.onResponse;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                tangon['response'] = golfie;
                tangon = report.bind(oscard)(tangon);
                zuuluu = _closure1_slot4;
                if(!zuuluu) { _fun00016_ip = 124; continue _fun00015 }
 90:
                tangon = michal.addCompletionCallback;
                zuuluu = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = argFoo;
                        entity = tangon.ok;
                        backup = 'failed';
                        if(!entity) { _fun00018_ip = 22; continue _fun00017 }
 18:
                        backup = 'completed';
 22:
                        entity = tangon.timings;
                        michal = entity.execution;
                        entity = michal.toFixed;
                        oscard = 3;
                        report = entity.bind(michal)(oscard);
                        entity = global;
                        michal = entity.HermesInternal;
                        zuuluu = michal.concat;
                        foxtra = '';
                        michal = 'ms execution';
                        michal = zuuluu.bind(foxtra)(report, michal);
                        report = new Array(4);
                        report[0] = michal;
                        michal = tangon.timings;
                        zuuluu = michal.materialization;
                        michal = zuuluu.toFixed;
                        golfie = michal.bind(zuuluu)(oscard);
                        michal = entity.HermesInternal;
                        zuuluu = michal.concat;
                        michal = 'ms js materialization';
                        michal = zuuluu.bind(foxtra)(golfie, michal);
                        report[1] = michal;
                        michal = tangon.timings;
                        zuuluu = michal.ccTotal;
                        michal = zuuluu.toFixed;
                        golfie = michal.bind(zuuluu)(oscard);
                        michal = entity.HermesInternal;
                        zuuluu = michal.concat;
                        michal = 'ms cc completion';
                        michal = zuuluu.bind(foxtra)(golfie, michal);
                        report[2] = michal;
                        michal = tangon.timings;
                        zuuluu = michal.jsTotal;
                        michal = zuuluu.toFixed;
                        golfie = michal.bind(zuuluu)(oscard);
                        michal = entity.HermesInternal;
                        zuuluu = michal.concat;
                        michal = 'ms js reception';
                        michal = zuuluu.bind(foxtra)(golfie, michal);
                        report[3] = michal;
                        zuuluu = report.join;
                        michal = ', ';
                        sizing = zuuluu.bind(report)(michal);
                        zuuluu = _closure1_slot5;
                        michal = zuuluu.info;
                        yankee = tangon.tag;
                        ctrled = tangon.id;
                        tangon = tangon.timings;
                        report = tangon.ccTotal;
                        tangon = report.toFixed;
                        result = tangon.bind(report)(oscard);
                        entity = entity.HermesInternal;
                        option = entity.concat;
                        vacuum = ' (#';
                        source = ') ';
                        echoed = ' in ';
                        output = 'ms (';
                        kiloes = ').';
                        config = foxtra;
                        sequen = yankee;
                        update = backup;
                        entity = config[option](sequen, vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes, backup);
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = tangon.bind(michal)(zuuluu);
                zuuluu = michal.addDatabaseStateCallback;
                entity = function(argFoo, argBar) {
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.info;
                    entity = global;
                    entity = entity.HermesInternal;
                    option = entity.concat;
                    foxtra = '';
                    romeon = argFoo;
                    yankee = ' (state: ';
                    offset = argBar;
                    verify = ')';
                    entity = foxtra[option](romeon, yankee, offset, verify, option);
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = zuuluu.bind(michal)(entity);
 124:
                entity = true;
                michal['initialized'] = entity;
 132:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[10] = entity;
        michal = undefined;
        entity = null;
        entity = report.bind(michal)(tangon, entity, zuuluu);
        return entity;
    };
    michal = michal.bind(entity)();
    michal['counter'] = golfie;
    tangon = tangon.Map;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    michal['pending'] = tangon;
    tangon = false;
    michal['initialized'] = tangon;
    tangon = new Array(0);
    michal['dbStateCallbacks'] = tangon;
    tangon = new Array(0);
    michal['completionCallbacks'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['Runtime'] = michal;
    return entity;
})();