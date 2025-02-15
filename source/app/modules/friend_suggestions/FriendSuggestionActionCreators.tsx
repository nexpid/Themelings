// app/modules/friend_suggestions/FriendSuggestionActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function() { // Original name: fetch
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 191; continue _fun00001 }
 10: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 2;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    golf = _closure1_slot4;
                    golf = golf.FRIEND_SUGGESTIONS;
                    mike['url'] = golf;
                    golf = true;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=76);
 74:
                    return mike;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 134; continue _fun00001 }
 82:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 3;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'LOAD_FRIEND_SUGGESTIONS_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    zulu['suggestions'] = oscar;
                    zulu = tango.bind(report)(zulu);
 132: // try_end0
                    _fun00002_ip = 186; continue _fun00001;
 134:
                    return mike;
 137: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'LOAD_FRIEND_SUGGESTIONS_FAILURE';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
 186:
                    mike = undefined;
                    return mike;
 191:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetch'] = golf;
    tango = function(argFoo) { // Original name: ignore
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.del;
        mike = {};
        golf = _closure1_slot4;
        oscar = golf.FRIEND_SUGGESTION;
        report = argFoo;
        report = oscar.bind(golf)(report);
        mike['url'] = report;
        report = true;
        mike['rejectWithError'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['ignore'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/friend_suggestions/FriendSuggestionActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();