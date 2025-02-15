// app/modules/lurker_mode/LurkerActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: stopLurkingAll
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = tango;
    entity = function() { // Original name: _stopLurkingAll
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun65320: for(var _fun65320_ip = 0; ; ) switch(_fun65320_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun65320_ip = 165; continue _fun65320 }
 15:
                    var _closure4_slot0 = options;
                    report = _closure1_slot5;
                    tango = report.lurkingGuildIds;
                    oscar = tango.bind(report)();
                    report = oscar.filter;
                    tango = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    oscar = report.bind(oscar)(tango);
                    report = oscar.length;
                    tango = 0;
                    if(!(tango !== report)) { _fun65320_ip = 157; continue _fun65320 }
 62:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 4;
                    zulu = report[zulu];
                    golf = undefined;
                    report = tango.bind(golf)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    verify = 'GUILD_STOP_LURKING';
                    zulu['type'] = verify;
                    zulu['ignoredGuildIds'] = options;
                    zulu = tango.bind(report)(zulu);
                    zulu = global;
                    tango = zulu.Promise;
                    zulu = tango.all;
                    report = oscar.map;
                    mike = function() {
                        tango = _closure1_slot3;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun65324: for(var _fun65324_ip = 0; ; ) switch(_fun65324_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun65324_ip = 188; continue _fun65324 }
 10:
                                    golf = argFoo;
                                    mike = undefined;
                                    oscar = undefined;
                                    report = _closure1_slot5;
                                    tango = report.getLurkingSource;
                                    oscar = tango.bind(report)();
 34: // try_start_0
                                    report = _closure1_slot0;
                                    options = _closure1_slot2;
                                    tango = 5;
                                    tango = options[tango];
                                    tango = report.bind(mike)(tango);
                                    options = tango.HTTP;
                                    report = options.del;
                                    tango = {};
                                    yankee = _closure1_slot6;
                                    offset = yankee.GUILD_LEAVE;
                                    verify = golf;
                                    verify = offset.bind(yankee)(verify);
                                    tango['url'] = verify;
                                    offset = {};
                                    verify = true;
                                    offset['lurking'] = verify;
                                    tango['body'] = offset;
                                    tango['oldFormErrors'] = verify;
                                    tango['rejectWithError'] = verify;
                                    tango = report.bind(options)(tango);
                                    SaveGenerator(address=120);
 118:
                                    return tango;
 120:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(report) { _fun65324_ip = 128; continue _fun65324 }
 126: // try_end0
                                    _fun65324_ip = 185; continue _fun65324;
 128:
                                    return tango;
 131: // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    tango = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zulu = 4;
                                    zulu = report[zulu];
                                    report = tango.bind(mike)(zulu);
                                    tango = report.dispatch;
                                    zulu = {};
                                    options = 'GUILD_STOP_LURKING_FAILURE';
                                    zulu['type'] = options;
                                    zulu['lurkingGuildId'] = golf;
                                    zulu['lurkingSource'] = oscar;
                                    zulu = tango.bind(report)(zulu);
 185:
                                    return mike;
 188:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure5_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure5_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    mike = mike.bind(golf)();
                    mike = report.bind(oscar)(mike);
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=151);
 149:
                    return mike;
 151:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun65320_ip = 162; continue _fun65320 }
 157:
                    zulu = undefined;
                    return zulu;
 162:
                    return mike;
 165:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _stopLurking
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65328: for(var _fun65328_ip = 0; ; ) switch(_fun65328_ip) {
 0:
                    StartGenerator();
                    report = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65328_ip = 171; continue _fun65328 }
 13:
                    tango = undefined;
                    if(!(report === tango)) { _fun65328_ip = 21; continue _fun65328 }
 19:
                    report = null;
 21:
                    SaveGenerator(address=25);
 23:
                    return tango;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun65328_ip = 168; continue _fun65328 }
 34:
                    golf = _closure1_slot5;
                    oscar = golf.lurkingGuildIds;
                    golf = oscar.bind(golf)();
                    options = golf.length;
                    oscar = 0;
                    if(!(oscar !== options)) { _fun65328_ip = 162; continue _fun65328 }
 62:
                    oscar = null;
                    if(!(oscar != report)) { _fun65328_ip = 81; continue _fun65328 }
 68:
                    oscar = golf.includes;
                    oscar = oscar.bind(golf)(report);
                    if(oscar) { _fun65328_ip = 162; continue _fun65328 }
 81:
                    golf = new Array(2);
                    golf[0] = report;
                    oscar = _closure1_slot4;
                    report = oscar.getGuildId;
                    report = report.bind(oscar)();
                    golf[1] = report;
                    oscar = golf.filter;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 6;
                    report = verify[report];
                    report = options.bind(tango)(report);
                    report = report.isNotNullish;
                    report = oscar.bind(golf)(report);
                    zulu = _closure1_slot7;
                    zulu = zulu.bind(tango)(report);
                    SaveGenerator(address=156);
 154:
                    return zulu;
 156:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun65328_ip = 165; continue _fun65328 }
 162:
                    return tango;
 165:
                    return zulu;
 168:
                    return mike;
 171:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot6 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/lurker_mode/LurkerActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['stopLurkingAll'] = tango;
    mike = function() { // Original name: stopLurking
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['stopLurking'] = mike;
    return entity;
})();