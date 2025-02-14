// app/modules/guild_profile/GuildPopoutActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchGuildForPopout
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun90547: for(var _fun90547_ip = 0; ; ) switch(_fun90547_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun90547_ip = 254; continue _fun90547 }
 13:
                    oscar = verify;
                    golf = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 2;
                    tango = mike[report];
                    mike = undefined;
                    options = golf.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    offset = 'GUILD_POPOUT_FETCH_START';
                    tango['type'] = offset;
                    tango['guildId'] = verify;
                    tango = golf.bind(options)(tango);
 67: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 3;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    options = tango.HTTP;
                    golf = options.get;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot4;
                    offset = yankee.GUILD_PREVIEW;
                    verify = oscar;
                    verify = offset.bind(yankee)(verify);
                    tango['url'] = verify;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=140);
 138:
                    return tango;
 140:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun90547_ip = 203; continue _fun90547 }
 146:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[report];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'GUILD_POPOUT_FETCH_SUCCESS';
                    golf['type'] = offset;
                    offset = oscar;
                    golf['guildId'] = offset;
                    offset = tango.body;
                    golf['guild'] = offset;
                    golf = options.bind(verify)(golf);
 201: // try_end0
                    _fun90547_ip = 251; continue _fun90547;
 203:
                    return tango;
 206: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_POPOUT_FETCH_FAILURE';
                    zulu['type'] = golf;
                    zulu['guildId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 251:
                    return mike;
 254:
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
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildPopoutActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: fetchGuildForPopout
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchGuildForPopout'] = mike;
    return entity;
})();