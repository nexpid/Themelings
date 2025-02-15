// app/modules/app_database/app/TryLoad.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _tryLoadAsync
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun38146: for(var _fun38146_ip = 0; ; ) switch(_fun38146_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun38146_ip = 67; continue _fun38146 }
 7:
                    mike = argFoo;
 10: // try_start_0
                    zulu = mike;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    SaveGenerator(address=23);
 21:
                    return mike;
 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun38146_ip = 32; continue _fun38146 }
 29: // try_end0
                    return mike;
 32:
                    return mike;
 35: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot3;
                    zulu = tango.log;
                    mike = 'database load failed.';
                    mike = zulu.bind(tango)(mike, report);
                    mike = null;
                    return mike;
 67:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _tryLoadOrResetCacheGatewayAsync
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun38149: for(var _fun38149_ip = 0; ; ) switch(_fun38149_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun38149_ip = 234; continue _fun38149 }
 10:
                    options = argFoo;
                    mike = argBar;
                    yankee = argBaz;
 19: // try_start_0
                    zulu = mike;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    SaveGenerator(address=32);
 30:
                    return mike;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun38149_ip = 41; continue _fun38149 }
 38: // try_end0
                    return mike;
 41:
                    return mike;
 44: // catch_target0
                    CatchBlockStart(arg_register=1);
                    verify = _closure1_slot3;
                    oscar = verify.log;
                    romeo = options;
                    golf = global;
                    tango = golf.HermesInternal;
                    offset = tango.concat;
                    report = '';
                    tango = ': exception thrown, resetting socket.';
                    report = offset.bind(report)(romeo, tango);
                    tango = mike.stack;
                    tango = oscar.bind(verify)(report, mike, tango);
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 2;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'RESET_SOCKET';
                    zulu['type'] = oscar;
                    oscar = {};
                    oscar['error'] = mike;
                    mike = golf.HermesInternal;
                    mike = mike.concat;
                    offset = 'tryLoadOrResetCacheGatewayAsync (';
                    verify = ')';
                    mike = mike.bind(offset)(romeo, verify);
                    oscar['action'] = mike;
                    romeo = yankee;
                    mike = null;
                    if(!(mike == romeo)) { _fun38149_ip = 189; continue _fun38149 }
 187:
                    _fun38149_ip = 192; continue _fun38149;
 189:
                    options = yankee;
 192:
                    golf = golf.HermesInternal;
                    golf = golf.concat;
                    golf = golf.bind(offset)(options, verify);
                    oscar['metricAction'] = golf;
                    golf = true;
                    oscar['clearCache'] = golf;
                    zulu['args'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 234:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    golf = oscar.bind(entity)(tango);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    yankee = 'TryLoad';
    romeo = oscar;
    tango = new romeo[golf](yankee, offset);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot3 = tango;
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/app/TryLoad.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: tryLoad
        _fun38150: for(var _fun38150_ip = 0; ; ) switch(_fun38150_ip) {
 0:
            entity = argFoo;
 3: // try_start_0
            mike = entity;
            entity = undefined;
            entity = mike.bind(entity)();
 12: // try_end0
            return entity;
 14: // catch_target0
            CatchBlockStart(arg_register=3);
            zulu = _closure1_slot3;
            mike = zulu.log;
            entity = 'database load failed.';
            entity = mike.bind(zulu)(entity, tango);
            entity = null;
            return entity;
        }
    };
    zulu['tryLoad'] = tango;
    tango = function() { // Original name: tryLoadAsync
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['tryLoadAsync'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: tryLoadOrResetCacheGateway
        _fun38152: for(var _fun38152_ip = 0; ; ) switch(_fun38152_ip) {
 0:
            golf = argFoo;
            entity = argBar;
            offset = argBaz;
 9: // try_start_0
            mike = entity;
            entity = undefined;
            entity = mike.bind(entity)();
 18: // try_end0
            return entity;
 20: // catch_target0
            CatchBlockStart(arg_register=0);
            options = _closure1_slot3;
            report = options.log;
            yankee = golf;
            oscar = global;
            zulu = oscar.HermesInternal;
            verify = zulu.concat;
            tango = '';
            zulu = ': exception thrown, resetting socket.';
            tango = verify.bind(tango)(yankee, zulu);
            zulu = entity.stack;
            zulu = report.bind(options)(tango, entity, zulu);
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'RESET_SOCKET';
            mike['type'] = report;
            report = {};
            report['error'] = entity;
            entity = oscar.HermesInternal;
            entity = entity.concat;
            verify = 'tryLoadOrResetCacheGateway (';
            options = ')';
            entity = entity.bind(verify)(yankee, options);
            report['action'] = entity;
            yankee = offset;
            entity = null;
            if(!(entity == yankee)) { _fun38152_ip = 165; continue _fun38152 }
 163:
            _fun38152_ip = 168; continue _fun38152;
 165:
            golf = offset;
 168:
            oscar = oscar.HermesInternal;
            oscar = oscar.concat;
            oscar = oscar.bind(verify)(golf, options);
            report['metricAction'] = oscar;
            oscar = true;
            report['clearCache'] = oscar;
            mike['args'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['tryLoadOrResetCacheGateway'] = tango;
    mike = function() { // Original name: tryLoadOrResetCacheGatewayAsync
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['tryLoadOrResetCacheGatewayAsync'] = mike;
    return entity;
})();