// app/modules/guild/BasicGuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchBasicGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun127801: for(var _fun127801_ip = 0; ; ) switch(_fun127801_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun127801_ip = 400; continue _fun127801 }
 13:
                    zulu = oscar;
                    report = _closure1_slot4;
                    mike = report.getGuild;
                    mike = mike.bind(report)(oscar);
                    report = null;
                    if(!(report == mike)) { _fun127801_ip = 395; continue _fun127801 }
 42:
                    golf = _closure1_slot5;
                    oscar = golf.getGuildOrStatus;
                    mike = zulu;
                    mike = oscar.bind(golf)(mike);
                    if(!(report == mike)) { _fun127801_ip = 395; continue _fun127801 }
 69:
                    oscar = _closure1_slot7;
                    report = oscar.has;
                    mike = zulu;
                    mike = report.bind(oscar)(mike);
                    if(mike) { _fun127801_ip = 395; continue _fun127801 }
 92:
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    golf = 4;
                    mike = mike[golf];
                    oscar = undefined;
                    verify = report.bind(oscar)(mike);
                    report = verify.dispatch;
                    mike = {};
                    options = 'BASIC_GUILD_FETCH';
                    mike['type'] = options;
                    options = zulu;
                    mike['guildId'] = options;
                    mike = report.bind(verify)(mike);
                    report = _closure1_slot7;
                    mike = report.add;
                    mike = mike.bind(report)(options);
 157: // try_start_0 // try_start_1
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 5;
                    mike = options[mike];
                    mike = report.bind(oscar)(mike);
                    options = mike.HTTP;
                    report = options.get;
                    mike = {};
                    yankee = _closure1_slot6;
                    offset = yankee.GUILD_BASIC;
                    verify = zulu;
                    verify = offset.bind(yankee)(verify);
                    mike['url'] = verify;
                    verify = true;
                    mike['rejectWithError'] = verify;
                    mike = report.bind(options)(mike);
                    SaveGenerator(address=226);
 224:
                    return mike;
 226:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun127801_ip = 290; continue _fun127801 }
 232:
                    offset = mike.body;
                    options = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[golf];
                    verify = options.bind(oscar)(report);
                    options = verify.dispatch;
                    report = {};
                    yankee = 'BASIC_GUILD_FETCH_SUCCESS';
                    report['type'] = yankee;
                    yankee = zulu;
                    report['guildId'] = yankee;
                    report['guildInfo'] = offset;
                    report = options.bind(verify)(report);
 288: // try_end0
                    _fun127801_ip = 358; continue _fun127801;
 290: // try_end1
                    verify = _closure1_slot7;
                    options = verify.delete;
                    report = zulu;
                    report = options.bind(verify)(report);
                    return mike;
 310: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    mike = mike[golf];
                    oscar = report.bind(oscar)(mike);
                    report = oscar.dispatch;
                    mike = {};
                    golf = 'BASIC_GUILD_FETCH_FAILURE';
                    mike['type'] = golf;
                    golf = zulu;
                    mike['guildId'] = golf;
                    mike = report.bind(oscar)(mike);
 358: // try_end2
                    oscar = _closure1_slot7;
                    report = oscar.delete;
                    mike = zulu;
                    mike = report.bind(oscar)(mike);
                    _fun127801_ip = 395; continue _fun127801;
 377: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot7;
                    tango = report.delete;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 395:
                    mike = undefined;
                    return mike;
 400:
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
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.Endpoints;
    var _closure1_slot6 = golf;
    tango = tango.Set;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild/BasicGuildActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: fetchBasicGuild
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchBasicGuild'] = mike;
    return entity;
})();