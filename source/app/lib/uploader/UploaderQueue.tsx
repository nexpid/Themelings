// app/lib/uploader/UploaderQueue.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    golf = oscar.bind(entity)(tango);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    yankee = 'UploaderQueue.tsx';
    romeo = oscar;
    tango = new romeo[golf](yankee, offset);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot2;
        zulu = function() { // Original name: UploaderQueue
            zulu = this;
            tango = _closure1_slot1;
            mike = _closure2_slot1;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['queue'] = mike;
            mike = false;
            zulu['drainingQueue'] = mike;
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'enqueue';
        report['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun82209: for(var _fun82209_ip = 0; ; ) switch(_fun82209_ip) {
 0:
                mike = this;
                tango = mike.queue;
                zulu = tango.unshift;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                tango = _closure1_slot3;
                zulu = tango.log;
                entity = mike.drainingQueue;
                report = 'no';
                if(!entity) { _fun82209_ip = 55; continue _fun82209 }
 49:
                report = 'yes';
 55:
                entity = 'enqueue() - alreadying draining? ';
                entity = entity + report;
                entity = zulu.bind(tango)(entity);
                entity = mike.drainingQueue;
                if(entity) { _fun82209_ip = 89; continue _fun82209 }
 79:
                entity = mike.drainQueue;
                entity = entity.bind(mike)();
 89:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = mike;
        mike = new Array(2);
        mike[0] = report;
        report = {};
        golf = 'drainQueue';
        report['key'] = golf;
        options = _closure1_slot0;
        entity = undefined;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun82211: for(var _fun82211_ip = 0; ; ) switch(_fun82211_ip) {
 0:
                    StartGenerator();
                    tango = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun82211_ip = 297; continue _fun82211 }
 15:
                    mike = undefined;
                    golf = undefined;
                    verify = undefined;
                    var _closure4_slot0 = mike;
                    zulu = true;
                    tango['drainingQueue'] = zulu;
                    yankee = _closure1_slot3;
                    offset = yankee.log;
                    oscar = tango.queue;
                    foxtrot = oscar.length;
                    oscar = global;
                    options = oscar.HermesInternal;
                    romeo = options.concat;
                    options = 'drainQueue() - starting, queue length: ';
                    options = romeo.bind(options)(foxtrot);
                    options = offset.bind(yankee)(options);
                    offset = tango.queue;
                    options = offset.pop;
                    offset = options.bind(offset)();
                    golf = offset;
                    options = null;
                    if(!(options != offset)) { _fun82211_ip = 265; continue _fun82211 }
 114: // try_start_0
                    yankee = _closure1_slot3;
                    offset = yankee.log;
                    options = 'drainQueue() - start uploader';
                    options = offset.bind(yankee)(options);
                    golf = golf.bind(mike)();
                    verify = golf;
                    _closure4_slot0 = golf;
                    options = oscar.Promise;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    backup = function(argFoo) {
                        _fun82212: for(var _fun82212_ip = 0; ; ) switch(_fun82212_ip) {
 0:
                            tango = argFoo;
                            var _closure5_slot0 = tango;
                            zulu = _closure4_slot0;
                            zulu = zulu._aborted;
                            if(zulu) { _fun82212_ip = 35; continue _fun82212 }
 25:
                            report = _closure4_slot0;
                            zulu = report._errored;
 35:
                            if(!zulu) { _fun82212_ip = 44; continue _fun82212 }
 38:
                            zulu = undefined;
                            zulu = tango.bind(zulu)();
 44:
                            oscar = _closure4_slot0;
                            report = oscar.addListener;
                            tango = 'complete';
                            zulu = function() {
                                mike = _closure5_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                return entity;
                            };
                            zulu = report.bind(oscar)(tango, zulu);
                            tango = _closure4_slot0;
                            zulu = tango.addListener;
                            mike = 'error';
                            entity = function() {
                                mike = _closure5_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                return entity;
                            };
                            entity = zulu.bind(tango)(mike, entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    kilo = golf;
                    report = new kilo[options](backup, foxtrot);
                    report = report instanceof Object ? report : golf;
                    SaveGenerator(address=183);
 181:
                    return report;
 183:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun82211_ip = 233; continue _fun82211 }
 189:
                    options = _closure1_slot3;
                    golf = options.log;
                    offset = verify.id;
                    oscar = oscar.HermesInternal;
                    verify = oscar.concat;
                    oscar = 'drainQueue() Uploader complete - ';
                    oscar = verify.bind(oscar)(offset);
                    oscar = golf.bind(options)(oscar);
 231: // try_end0
                    _fun82211_ip = 252; continue _fun82211;
 233:
                    return report;
 236: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscar = _closure1_slot3;
                    report = oscar.error;
                    report = report.bind(oscar)(golf);
 252:
                    report = tango.drainQueue;
                    report = report.bind(tango)();
                    return mike;
 265:
                    oscar = _closure1_slot3;
                    report = oscar.log;
                    zulu = 'drainQueue() - No uploads left, setting drainingQueue to false';
                    zulu = report.bind(oscar)(zulu);
                    zulu = false;
                    tango['drainingQueue'] = zulu;
                    return mike;
 297:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: drainQueue
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = oscar;
        mike[1] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/uploader/UploaderQueue.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();