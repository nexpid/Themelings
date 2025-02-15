// app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchMemberCountsFromBackend
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun62389: for(var _fun62389_ip = 0; ; ) switch(_fun62389_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun62389_ip = 254; continue _fun62389 }
 10:
                    report = argFoo;
 13: // try_start_0
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    options = 3;
                    mike = golf[options];
                    oscar = undefined;
                    verify = tango.bind(oscar)(mike);
                    tango = verify.dispatch;
                    mike = {};
                    offset = 'GUILD_ROLE_MEMBER_COUNT_FETCH_START';
                    mike['type'] = offset;
                    yankee = report;
                    mike['guildId'] = yankee;
                    mike = tango.bind(verify)(mike);
                    tango = _closure1_slot0;
                    mike = 4;
                    mike = golf[mike];
                    mike = tango.bind(oscar)(mike);
                    golf = mike.HTTP;
                    tango = golf.get;
                    mike = {};
                    offset = _closure1_slot5;
                    verify = offset.GUILD_ROLE_MEMBER_COUNTS;
                    verify = verify.bind(offset)(yankee);
                    mike['url'] = verify;
                    verify = true;
                    mike['rejectWithError'] = verify;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=129);
 127:
                    return mike;
 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun62389_ip = 193; continue _fun62389 }
 135:
                    golf = mike.body;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[options];
                    oscar = tango.bind(oscar)(zulu);
                    tango = oscar.dispatch;
                    zulu = {};
                    options = 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS';
                    zulu['type'] = options;
                    options = report;
                    zulu['guildId'] = options;
                    zulu['roleMemberCount'] = golf;
                    zulu = tango.bind(oscar)(zulu);
 191: // try_end0
                    _fun62389_ip = 249; continue _fun62389;
 193:
                    return mike;
 196: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE';
                    mike['type'] = oscar;
                    mike['guildId'] = report;
                    mike = zulu.bind(tango)(mike);
 249:
                    mike = undefined;
                    return mike;
 254:
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
    entity = function() { // Original name: _fetchMemberCounts
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun62392: for(var _fun62392_ip = 0; ; ) switch(_fun62392_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun62392_ip = 63; continue _fun62392 }
 10:
                    zulu = _closure1_slot4;
                    mike = zulu.shouldFetch;
                    mike = mike.bind(zulu)(tango);
                    if(!mike) { _fun62392_ip = 55; continue _fun62392 }
 31:
                    zulu = function() { // Original name: fetchMemberCountsFromBackend
                        entity = undefined;
                        tango = _closure1_slot7;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    SaveGenerator(address=49);
 47:
                    return mike;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun62392_ip = 60; continue _fun62392 }
 55:
                    zulu = undefined;
                    return zulu;
 60:
                    return mike;
 63:
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
    tango = 5;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = {};
    golf = 10000;
    tango['maxAge'] = golf;
    golf = options.prototype;
    golf = Object.create(golf, {constructor: {value: options}});
    foxtrot = golf;
    romeo = tango;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildRoleMemberActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchMemberCounts
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMemberCounts'] = tango;
    mike = function(argFoo, argBar) { // Original name: requestMembersForRole
        _fun62395: for(var _fun62395_ip = 0; ; ) switch(_fun62395_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = arguments[2];
            zulu = undefined;
            if(!(entity === zulu)) { _fun62395_ip = 17; continue _fun62395 }
 15:
            entity = true;
 17:
            mike = global;
            tango = mike.HermesInternal;
            options = tango.concat;
            golf = '';
            tango = '-';
            verify = options.bind(golf)(oscar, tango, report);
            if(!entity) { _fun62395_ip = 71; continue _fun62395 }
 48:
            tango = _closure1_slot6;
            entity = tango.get;
            entity = entity.bind(tango)(verify);
            tango = null;
            if(!(tango == entity)) { _fun62395_ip = 106; continue _fun62395 }
 71:
            options = _closure1_slot6;
            golf = options.set;
            entity = true;
            entity = golf.bind(options)(verify, entity);
            entity = function(argFoo, argBar) { // Original name: doRequestMembersForRole
                options = argFoo;
                var _closure3_slot0 = options;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                tango = mike.HTTP;
                zulu = tango.get;
                mike = {};
                golf = _closure1_slot5;
                oscar = golf.GUILD_ROLE_MEMBER_IDS;
                report = argBar;
                report = oscar.bind(golf)(options, report);
                mike['url'] = report;
                report = false;
                mike['rejectWithError'] = report;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.then;
                entity = function(argFoo) {
                    entity = argFoo;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    oscar = tango.bind(mike)(zulu);
                    report = oscar.requestMembersById;
                    tango = _closure3_slot0;
                    zulu = entity.body;
                    mike = false;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity = entity.body;
                    entity = entity.length;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = entity.bind(zulu)(oscar, report);
            _fun62395_ip = 123; continue _fun62395;
 106:
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)(tango);
 123:
            return entity;
        }
    };
    zulu['requestMembersForRole'] = mike;
    return entity;
})();