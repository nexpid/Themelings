// app/modules/guild_settings/GuildSettingsFetchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchGuildIntegrationsApplications
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73031: for(var _fun73031_ip = 0; ; ) switch(_fun73031_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73031_ip = 192; continue _fun73031 }
 13:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {};
                    verify = _closure1_slot6;
                    options = verify.GUILD_INTEGRATIONS;
                    options = options.bind(verify)(golf);
                    mike['url'] = options;
                    options = true;
                    verify = {'include_applications': true, 'include_role_connections_metadata': true};
                    mike['query'] = verify;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=105);
 103:
                    return mike;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73031_ip = 189; continue _fun73031 }
 111:
                    options = mike.body;
                    report = options.map;
                    zulu = function(argFoo) {
                        _fun73032: for(var _fun73032_ip = 0; ; ) switch(_fun73032_ip) {
 0:
                            tango = argFoo;
                            entity = {};
                            offset = entity;
                            verify = tango;
                            mike = copyDataProperties(offset, verify);
                            zulu = 'application';
                            report = zulu in tango;
                            mike = undefined;
                            if(!report) { _fun73032_ip = 67; continue _fun73032 }
 28:
                            golf = tango.application;
                            report = null;
                            report = report != golf;
                            mike = undefined;
                            if(!report) { _fun73032_ip = 67; continue _fun73032 }
 44:
                            options = _closure1_slot4;
                            golf = options.createFromServer;
                            report = tango.application;
                            mike = golf.bind(options)(report);
 67:
                            entity[zulu] = mike;
                            zulu = 'user';
                            report = zulu in tango;
                            mike = undefined;
                            if(!report) { _fun73032_ip = 133; continue _fun73032 }
 85:
                            golf = tango.user;
                            report = null;
                            report = report != golf;
                            mike = undefined;
                            if(!report) { _fun73032_ip = 133; continue _fun73032 }
 101:
                            oscar = _closure1_slot5;
                            offset = tango.user;
                            report = oscar.prototype;
                            report = Object.create(report, {constructor: {value: oscar}});
                            yankee = report;
                            tango = new yankee[oscar](offset, verify);
                            mike = tango instanceof Object ? tango : report;
 133:
                            entity[zulu] = mike;
                            return entity;
                        }
                    };
                    zulu = report.bind(options)(zulu);
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 5;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_SETTINGS_LOADED_INTEGRATIONS';
                    tango['type'] = options;
                    tango['guildId'] = golf;
                    tango['integrations'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 189:
                    return mike;
 192:
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
    tango = tango.BasicApplicationRecord;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsFetchActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: fetchGuildIntegrationsApplications
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchGuildIntegrationsApplications'] = mike;
    return entity;
})();