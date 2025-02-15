// app/modules/polls/PollsHttpApi.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: _submitPollVote
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun91110: for(var _fun91110_ip = 0; ; ) switch(_fun91110_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun91110_ip = 199; continue _fun91110 }
 13:
                    verify = mike.channelId;
                    golf = mike.messageId;
                    options = mike.answerIds;
                    oscar = undefined;
                    SaveGenerator(address=35);
 33:
                    return oscar;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun91110_ip = 196; continue _fun91110 }
 44: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    zulu = 2;
                    zulu = report[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    report = zulu.HTTP;
                    tango = report.put;
                    zulu = {};
                    yankee = _closure1_slot3;
                    offset = yankee.POLL_ANSWERS;
                    golf = offset.bind(yankee)(verify, golf);
                    zulu['url'] = golf;
                    golf = {};
                    golf['answer_ids'] = options;
                    zulu['body'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=128);
 126:
                    return zulu;
 128:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun91110_ip = 137; continue _fun91110 }
 134: // try_end0
                    return oscar;
 137:
                    return zulu;
 140: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 3;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.APIError;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    backup = tango;
                    foxtrot = report;
                    zulu = new backup[zulu](foxtrot, romeo);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 196:
                    return mike;
 199:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    entity = function() { // Original name: _endPollEarly
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun91113: for(var _fun91113_ip = 0; ; ) switch(_fun91113_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun91113_ip = 180; continue _fun91113 }
 13:
                    options = mike.channelId;
                    golf = mike.messageId;
                    oscar = undefined;
                    SaveGenerator(address=29);
 27:
                    return oscar;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun91113_ip = 177; continue _fun91113 }
 38: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    zulu = 2;
                    zulu = report[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {};
                    offset = _closure1_slot3;
                    verify = offset.POLL_EXPIRE;
                    golf = verify.bind(offset)(options, golf);
                    zulu['url'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=109);
 107:
                    return zulu;
 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun91113_ip = 118; continue _fun91113 }
 115: // try_end0
                    return oscar;
 118:
                    return zulu;
 121: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 3;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.APIError;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    foxtrot = tango;
                    romeo = report;
                    zulu = new foxtrot[zulu](romeo, yankee);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 177:
                    return mike;
 180:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/PollsHttpApi.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: submitPollVote
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['submitPollVote'] = tango;
    mike = function() { // Original name: endPollEarly
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['endPollEarly'] = mike;
    return entity;
})();