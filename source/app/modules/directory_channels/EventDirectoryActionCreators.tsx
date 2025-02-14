// app/modules/directory_channels/EventDirectoryActionCreators.tsx
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
    tango = report.bind(entity)(tango);
    tango = tango.DirectoryEntryTypes;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    golf = golf.bind(entity)(tango);
    mike = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun102016: for(var _fun102016_ip = 0; ; ) switch(_fun102016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun102016_ip = 263; continue _fun102016 }
 10:
                    oscar = argFoo;
 13: // try_start_0
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    golf = 4;
                    mike = options[golf];
                    report = undefined;
                    verify = tango.bind(report)(mike);
                    tango = verify.dispatch;
                    mike = {};
                    offset = 'EVENT_DIRECTORY_FETCH_START';
                    mike['type'] = offset;
                    mike = tango.bind(verify)(mike);
                    tango = _closure1_slot0;
                    mike = 5;
                    mike = options[mike];
                    mike = tango.bind(report)(mike);
                    options = mike.HTTP;
                    tango = options.get;
                    mike = {};
                    yankee = _closure1_slot5;
                    offset = yankee.DIRECTORY_CHANNEL_ENTRIES;
                    verify = oscar;
                    verify = offset.bind(yankee)(verify);
                    mike['url'] = verify;
                    verify = {};
                    offset = _closure1_slot4;
                    offset = offset.GUILD_SCHEDULED_EVENT;
                    verify['type'] = offset;
                    mike['query'] = verify;
                    verify = true;
                    mike['rejectWithError'] = verify;
                    mike = tango.bind(options)(mike);
                    SaveGenerator(address=145);
 143:
                    return mike;
 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun102016_ip = 206; continue _fun102016 }
 151:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'EVENT_DIRECTORY_FETCH_SUCCESS';
                    zulu['type'] = golf;
                    zulu['channelId'] = oscar;
                    oscar = mike.body;
                    zulu['entries'] = oscar;
                    zulu = tango.bind(report)(zulu);
 204: // try_end0
                    _fun102016_ip = 258; continue _fun102016;
 206:
                    return mike;
 209: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'EVENT_DIRECTORY_FETCH_FAILURE';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
 258:
                    mike = undefined;
                    return mike;
 263:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = mike.bind(entity)();
    mike = 200;
    mike = golf.bind(entity)(tango, mike);
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/directory_channels/EventDirectoryActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['fetchDirectoryEntries'] = mike;
    return entity;
})();