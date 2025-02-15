// app/modules/create_guild/CreateGuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _createGuildFromTemplate
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge, argGrault) {
            entity = function* (argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: ?anon_0_
                _fun78921: for(var _fun78921_ip = 0; ; ) switch(_fun78921_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun78921_ip = 308; continue _fun78921 }
 10:
                    romeo = argFoo;
                    verify = argBar;
                    options = argBaz;
                    golf = argCorge;
                    yankee = argGrault;
 25: // try_start_0
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 2;
                    mike = tango[mike];
                    offset = undefined;
                    tango = zulu.bind(offset)(mike);
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.GUILDS;
                    mike['url'] = report;
                    report = {};
                    report['name'] = romeo;
                    report['icon'] = verify;
                    verify = options;
                    romeo = verify.channels;
                    report['channels'] = romeo;
                    romeo = verify.system_channel_id;
                    report['system_channel_id'] = romeo;
                    romeo = verify.roles;
                    report['roles'] = romeo;
                    verify = verify.code;
                    report['guild_template_code'] = verify;
                    yankee = !yankee;
                    verify = !yankee;
                    if(!yankee) { _fun78921_ip = 139; continue _fun78921 }
 137:
                    verify = undefined;
 139:
                    report['staff_only'] = verify;
                    mike['body'] = report;
                    report = {};
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 3;
                    oscar = yankee[oscar];
                    oscar = verify.bind(offset)(oscar);
                    oscar = oscar.NetworkActionNames;
                    oscar = oscar.GUILD_CREATE;
                    report['event'] = oscar;
                    oscar = {};
                    options = options.id;
                    oscar['template_name'] = options;
                    oscar['is_community_intent'] = golf;
                    report['properties'] = oscar;
                    mike['trackedActionData'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=233);
 231:
                    return mike;
 233:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun78921_ip = 247; continue _fun78921 }
 239:
                    zulu = mike.body;
 244: // try_end0
                    return zulu;
 247:
                    return mike;
 250: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    mike = mike.APIError;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    backup = zulu;
                    foxtrot = tango;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 308:
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
    tango = function() { // Original name: createGuildFromTemplate
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['createGuildFromTemplate'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/create_guild/CreateGuildActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();