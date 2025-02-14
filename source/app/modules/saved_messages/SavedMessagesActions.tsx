// app/modules/saved_messages/SavedMessagesActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _upsertSavedMessage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun88990: for(var _fun88990_ip = 0; ; ) switch(_fun88990_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun88990_ip = 173; continue _fun88990 }
 13:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 3;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.put;
                    mike = {};
                    yankee = _closure1_slot5;
                    offset = yankee.PUT_SAVED_MESSAGE;
                    verify = options.channelId;
                    golf = options.messageId;
                    golf = offset.bind(yankee)(verify, golf);
                    mike['url'] = golf;
                    golf = {};
                    options = options.dueAt;
                    golf['due_at'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=113);
 111:
                    return mike;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun88990_ip = 170; continue _fun88990 }
 119:
                    tango = mike.ok;
                    if(tango) { _fun88990_ip = 131; continue _fun88990 }
 128:
                    return report;
 131:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 4;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.savedMessageCreateObjectToClient;
                    zulu = mike.body;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 170:
                    return mike;
 173:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _deleteSavedMessage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun88993: for(var _fun88993_ip = 0; ; ) switch(_fun88993_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun88993_ip = 119; continue _fun88993 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.del;
                    mike = {};
                    verify = _closure1_slot5;
                    options = verify.DELETE_SAVED_MESSAGE;
                    golf = oscar.channelId;
                    oscar = oscar.messageId;
                    oscar = options.bind(verify)(golf, oscar);
                    mike['url'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=93);
 91:
                    return mike;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun88993_ip = 116; continue _fun88993 }
 99:
                    tango = mike.ok;
                    if(tango) { _fun88993_ip = 111; continue _fun88993 }
 108:
                    return zulu;
 111:
                    zulu = true;
                    return zulu;
 116:
                    return mike;
 119:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _fetchAndUpdateSavedMessages
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun88996: for(var _fun88996_ip = 0; ; ) switch(_fun88996_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun88996_ip = 201; continue _fun88996 }
 10:
                    zulu = _closure1_slot4;
                    mike = zulu.getIsStale;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun88996_ip = 51; continue _fun88996 }
 30:
                    mike = global;
                    zulu = mike.Promise;
                    mike = zulu.resolve;
                    mike = mike.bind(zulu)();
                    return mike;
 51:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.get;
                    mike = {};
                    golf = _closure1_slot5;
                    golf = golf.GET_SAVED_MESSAGES;
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=114);
 112:
                    return mike;
 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun88996_ip = 198; continue _fun88996 }
 120:
                    report = mike.body;
                    golf = report.results;
                    oscar = golf.map;
                    report = function(argFoo) {
                        _fun88997: for(var _fun88997_ip = 0; ; ) switch(_fun88997_ip) {
 0:
                            mike = argFoo;
                            entity = {};
                            tango = mike.message;
                            zulu = null;
                            tango = zulu != tango;
                            if(!tango) { _fun88997_ip = 60; continue _fun88997 }
 19:
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            tango = 5;
                            report = report[tango];
                            tango = undefined;
                            oscar = oscar.bind(tango)(report);
                            report = oscar.createMessageRecord;
                            tango = mike.message;
                            zulu = report.bind(oscar)(tango);
 60:
                            entity['message'] = zulu;
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 4;
                            tango = tango[zulu];
                            zulu = undefined;
                            tango = report.bind(zulu)(tango);
                            zulu = tango.savedMessageDataToClient;
                            mike = mike.save_data;
                            mike = zulu.bind(tango)(mike);
                            entity['saveData'] = mike;
                            return entity;
                        }
                    };
                    golf = oscar.bind(golf)(report);
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 6;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'SAVED_MESSAGES_UPDATE';
                    tango['type'] = options;
                    tango['savedMessages'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 198:
                    return mike;
 201:
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
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/saved_messages/SavedMessagesActions.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: upsertSavedMessage
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['upsertSavedMessage'] = tango;
    tango = function() { // Original name: deleteSavedMessage
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteSavedMessage'] = tango;
    mike = function() { // Original name: fetchAndUpdateSavedMessages
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAndUpdateSavedMessages'] = mike;
    return entity;
})();