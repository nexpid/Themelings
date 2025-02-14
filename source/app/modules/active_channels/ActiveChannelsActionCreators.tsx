// app/modules/active_channels/ActiveChannelsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchActiveChannels
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun115000: for(var _fun115000_ip = 0; ; ) switch(_fun115000_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun115000_ip = 377; continue _fun115000 }
 13:
                    golf = argFoo;
                    verify = undefined;
                    if(!(mike === verify)) { _fun115000_ip = 25; continue _fun115000 }
 22:
                    mike = 10;
 25:
                    backup = mike;
                    options = undefined;
                    romeo = undefined;
                    oscar = undefined;
                    SaveGenerator(address=38);
 36:
                    return verify;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun115000_ip = 374; continue _fun115000 }
 47:
                    offset = _closure1_slot1;
                    zulu = _closure1_slot2;
                    tango = 2;
                    zulu = zulu[tango];
                    yankee = offset.bind(verify)(zulu);
                    offset = yankee.dispatch;
                    zulu = {};
                    foxtrot = 'ACTIVE_CHANNELS_FETCH_START';
                    zulu['type'] = foxtrot;
                    foxtrot = golf;
                    zulu['guildId'] = foxtrot;
                    zulu = offset.bind(yankee)(zulu);
 99: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 3;
                    zulu = yankee[zulu];
                    zulu = offset.bind(verify)(zulu);
                    yankee = zulu.HTTP;
                    offset = yankee.get;
                    zulu = {};
                    sizing = _closure1_slot4;
                    kilo = sizing.ACTIVE_CHANNELS;
                    foxtrot = golf;
                    foxtrot = kilo.bind(sizing)(foxtrot);
                    zulu['url'] = foxtrot;
                    foxtrot = {};
                    foxtrot['channel_limit'] = backup;
                    zulu['query'] = foxtrot;
                    foxtrot = true;
                    zulu['rejectWithError'] = foxtrot;
                    zulu = offset.bind(yankee)(zulu);
                    SaveGenerator(address=181);
 179:
                    return zulu;
 181:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(offset) { _fun115000_ip = 285; continue _fun115000 }
 187:
                    oscar = zulu;
                    offset = zulu.body;
                    romeo = offset;
                    yankee = null;
                    foxtrot = yankee == offset;
                    offset = undefined;
                    if(foxtrot) { _fun115000_ip = 215; continue _fun115000 }
 209:
                    offset = romeo.channels;
 215:
                    options = offset;
                    if(!(yankee == offset)) { _fun115000_ip = 228; continue _fun115000 }
 222:
                    romeo = new Array(0);
                    _fun115000_ip = 231; continue _fun115000;
 228:
                    romeo = options;
 231:
                    offset = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[tango];
                    yankee = offset.bind(verify)(options);
                    offset = yankee.dispatch;
                    options = {};
                    foxtrot = 'ACTIVE_CHANNELS_FETCH_SUCCESS';
                    options['type'] = foxtrot;
                    foxtrot = golf;
                    options['guildId'] = foxtrot;
                    options['channels'] = romeo;
                    options = offset.bind(yankee)(options);
 282: // try_end0
                    return oscar;
 285:
                    return zulu;
 288: // catch_target0
                    CatchBlockStart(arg_register=2);
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = offset[tango];
                    oscar = options.bind(verify)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    yankee = 'ACTIVE_CHANNELS_FETCH_FAILURE';
                    tango['type'] = yankee;
                    tango['guildId'] = golf;
                    golf = 4;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    options = golf.prototype;
                    options = Object.create(options, {constructor: {value: golf}});
                    result = options;
                    output = zulu;
                    golf = new result[golf](output, sizing);
                    golf = golf instanceof Object ? golf : options;
                    tango['error'] = golf;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 374:
                    return mike;
 377:
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/active_channels/ActiveChannelsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: fetchActiveChannels
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchActiveChannels'] = mike;
    return entity;
})();