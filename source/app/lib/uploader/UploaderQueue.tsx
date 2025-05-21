// app/lib/uploader/UploaderQueue.tsx
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
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = report[tangon];
    golfie = oscard.bind(entity)(tangon);
    tangon = golfie.prototype;
    oscard = Object.create(tangon, {constructor: {value: golfie}});
    yankee = 'UploaderQueue.tsx';
    romeon = oscard;
    tangon = new romeon[golfie](yankee, offset);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot2;
        zuuluu = function() { // Original name: UploaderQueue
            zuuluu = this;
            tangon = _closure1_slot1;
            michal = _closure2_slot1;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = new Array(0);
            zuuluu['queue'] = michal;
            michal = false;
            zuuluu['drainingQueue'] = michal;
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'enqueue';
        report['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                tangon = michal.queue;
                zuuluu = tangon.unshift;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity);
                tangon = _closure1_slot3;
                zuuluu = tangon.log;
                entity = michal.drainingQueue;
                report = 'no';
                if(!entity) { _fun00002_ip = 54; continue _fun00001 }
 48:
                report = 'yes';
 54:
                entity = 'enqueue() - alreadying draining? ';
                entity = entity + report;
                entity = zuuluu.bind(tangon)(entity);
                entity = michal.drainingQueue;
                if(entity) { _fun00002_ip = 88; continue _fun00001 }
 78:
                entity = michal.drainQueue;
                entity = entity.bind(michal)();
 88:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = michal;
        michal = new Array(2);
        michal[0] = report;
        report = {};
        golfie = 'drainQueue';
        report['key'] = golfie;
        option = _closure1_slot0;
        entity = undefined;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 293; continue _fun00003 }
 15:
                    michal = undefined;
                    golfie = undefined;
                    verify = undefined;
                    var _closure4_slot0 = michal;
                    zuuluu = true;
                    tangon['drainingQueue'] = zuuluu;
                    yankee = _closure1_slot3;
                    offset = yankee.log;
                    oscard = tangon.queue;
                    foxtra = oscard.length;
                    oscard = global;
                    option = oscard.HermesInternal;
                    romeon = option.concat;
                    option = 'drainQueue() - starting, queue length: ';
                    option = romeon.bind(option)(foxtra);
                    option = offset.bind(yankee)(option);
                    offset = tangon.queue;
                    option = offset.pop;
                    offset = option.bind(offset)();
                    golfie = offset;
                    option = null;
                    if(!(option != offset)) { _fun00004_ip = 262; continue _fun00003 }
 113: // try_start_0
                    yankee = _closure1_slot3;
                    offset = yankee.log;
                    option = 'drainQueue() - start uploader';
                    option = offset.bind(yankee)(option);
                    golfie = golfie.bind(michal)();
                    verify = golfie;
                    _closure4_slot0 = golfie;
                    option = oscard.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    backup = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            tangon = argFoo;
                            var _closure5_slot0 = tangon;
                            zuuluu = _closure4_slot0;
                            zuuluu = zuuluu._aborted;
                            if(zuuluu) { _fun00006_ip = 35; continue _fun00005 }
 25:
                            report = _closure4_slot0;
                            zuuluu = report._errored;
 35:
                            if(!zuuluu) { _fun00006_ip = 44; continue _fun00005 }
 38:
                            zuuluu = undefined;
                            zuuluu = tangon.bind(zuuluu)();
 44:
                            oscard = _closure4_slot0;
                            report = oscard.addListener;
                            tangon = 'complete';
                            zuuluu = function() {
                                michal = _closure5_slot0;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                return entity;
                            };
                            zuuluu = report.bind(oscard)(tangon, zuuluu);
                            tangon = _closure4_slot0;
                            zuuluu = tangon.addListener;
                            michal = 'error';
                            entity = function() {
                                michal = _closure5_slot0;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                return entity;
                            };
                            entity = zuuluu.bind(tangon)(michal, entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    kiloes = golfie;
                    report = new kiloes[option](backup, foxtra);
                    report = report instanceof Object ? report : golfie;
                    SaveGenerator(address=181);
 179:
                    return report;
 181:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 230; continue _fun00003 }
 187:
                    option = _closure1_slot3;
                    golfie = option.log;
                    offset = verify.id;
                    oscard = oscard.HermesInternal;
                    verify = oscard.concat;
                    oscard = 'drainQueue() Uploader complete - ';
                    oscard = verify.bind(oscard)(offset);
                    oscard = golfie.bind(option)(oscard);
 228: // try_end0
                    _fun00004_ip = 249; continue _fun00003;
 230:
                    return report;
 233: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscard = _closure1_slot3;
                    report = oscard.error;
                    report = report.bind(oscard)(golfie);
 249:
                    report = tangon.drainQueue;
                    report = report.bind(tangon)();
                    return michal;
 262:
                    oscard = _closure1_slot3;
                    report = oscard.log;
                    zuuluu = 'drainQueue() - No uploads left, setting drainingQueue to false';
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = false;
                    tangon['drainingQueue'] = zuuluu;
                    return michal;
 293:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: drainQueue
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        michal[1] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/UploaderQueue.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();