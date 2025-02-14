// app/modules/connections/ConnectionsRoleActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _putRoleConnectionsConfigurations
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun90370: for(var _fun90370_ip = 0; ; ) switch(_fun90370_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    options = argBar;
                    report = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun90370_ip = 326; continue _fun90370 }
 21:
                    tango = report.map;
                    zulu = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.map;
                        entity = function(argFoo) {
                            mike = argFoo;
                            entity = {};
                            zulu = mike.connectionType;
                            entity['connection_type'] = zulu;
                            zulu = mike.connectionMetadataField;
                            entity['connection_metadata_field'] = zulu;
                            zulu = mike.applicationId;
                            entity['application_id'] = zulu;
                            zulu = mike.operator;
                            entity['operator'] = zulu;
                            mike = mike.value;
                            entity['value'] = mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = tango.bind(report)(zulu);
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 2;
                    zulu = tango[zulu];
                    tango = undefined;
                    zulu = oscar.bind(tango)(zulu);
                    verify = zulu.HTTP;
                    oscar = verify.put;
                    zulu = {};
                    romeo = _closure1_slot4;
                    yankee = romeo.GUILD_ROLE_CONNECTIONS_CONFIGURATION;
                    yankee = yankee.bind(romeo)(offset, options);
                    zulu['url'] = yankee;
                    romeo = golf.length;
                    yankee = 0;
                    if(!(yankee === romeo)) { _fun90370_ip = 111; continue _fun90370 }
 107:
                    golf = new Array(0);
 111:
                    zulu['body'] = golf;
                    golf = true;
                    zulu['oldFormErrors'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    oscar = oscar.bind(verify)(zulu);
                    zulu = oscar.then;
                    mike = function(argFoo) {
                        _fun90373: for(var _fun90373_ip = 0; ; ) switch(_fun90373_ip) {
 0:
                            mike = argFoo;
                            entity = new Array(0);
                            zulu = mike.body;
                            tango = zulu.length;
                            zulu = 0;
                            if(!(tango > zulu)) { _fun90373_ip = 47; continue _fun90373 }
 23:
                            tango = mike.body;
                            zulu = tango.map;
                            mike = function(argFoo) {
                                zulu = argFoo;
                                mike = zulu.map;
                                entity = function(argFoo) {
                                    mike = argFoo;
                                    entity = {};
                                    zulu = mike.connection_type;
                                    entity['connectionType'] = zulu;
                                    zulu = mike.connection_metadata_field;
                                    entity['connectionMetadataField'] = zulu;
                                    zulu = mike.application_id;
                                    entity['applicationId'] = zulu;
                                    zulu = mike.operator;
                                    entity['operator'] = zulu;
                                    mike = mike.value;
                                    entity['value'] = mike;
                                    return entity;
                                };
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            entity = zulu.bind(tango)(mike);
 47:
                            return entity;
                        }
                    };
                    mike = zulu.bind(oscar)(mike);
                    SaveGenerator(address=154);
 152:
                    return mike;
 154:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun90370_ip = 323; continue _fun90370 }
 163:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 4;
                    zulu = verify[zulu];
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.requestMembersForRole;
                    zulu = zulu.bind(oscar)(offset, options, golf);
                    SaveGenerator(address=200);
 198:
                    return zulu;
 200:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun90370_ip = 320; continue _fun90370 }
 206:
                    oscar = null;
                    if(!(oscar != zulu)) { _fun90370_ip = 267; continue _fun90370 }
 212:
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 3;
                    oscar = verify[oscar];
                    verify = golf.bind(tango)(oscar);
                    golf = verify.dispatch;
                    oscar = {};
                    yankee = 'GUILD_ROLE_MEMBER_COUNT_UPDATE';
                    oscar['type'] = yankee;
                    oscar['guildId'] = offset;
                    oscar['roleId'] = options;
                    oscar['count'] = zulu;
                    oscar = golf.bind(verify)(oscar);
 267:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 3;
                    report = golf[report];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS';
                    report['type'] = verify;
                    report['roleId'] = options;
                    report['roleConnectionConfigurations'] = mike;
                    report = oscar.bind(golf)(report);
                    return tango;
 320:
                    return zulu;
 323:
                    return mike;
 326:
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
    entity = function() { // Original name: _fetchUserApplicationRoleConnections
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun90378: for(var _fun90378_ip = 0; ; ) switch(_fun90378_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun90378_ip = 90; continue _fun90378 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.APPLICATION_USER_ROLE_CONNECTIONS;
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=73);
 71:
                    return mike;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun90378_ip = 87; continue _fun90378 }
 79:
                    zulu = mike.body;
                    return zulu;
 87:
                    return mike;
 90:
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
    tango = 'modules/connections/ConnectionsRoleActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: fetchRoleConnectionsConfiguration
        verify = argBar;
        var _closure2_slot0 = verify;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.get;
        zulu = {};
        options = _closure1_slot4;
        golf = options.GUILD_ROLE_CONNECTIONS_CONFIGURATION;
        oscar = argFoo;
        oscar = golf.bind(options)(oscar, verify);
        zulu['url'] = oscar;
        oscar = true;
        zulu['rejectWithError'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function(argFoo) {
            _fun90380: for(var _fun90380_ip = 0; ; ) switch(_fun90380_ip) {
 0:
                entity = argFoo;
                report = new Array(0);
                mike = entity.body;
                zulu = mike.length;
                mike = 0;
                if(!(zulu > mike)) { _fun90380_ip = 47; continue _fun90380 }
 23:
                zulu = entity.body;
                mike = zulu.map;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = mike.connection_type;
                        entity['connectionType'] = zulu;
                        zulu = mike.connection_metadata_field;
                        entity['connectionMetadataField'] = zulu;
                        zulu = mike.application_id;
                        entity['applicationId'] = zulu;
                        zulu = mike.operator;
                        entity['operator'] = zulu;
                        mike = mike.value;
                        entity['value'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report = mike.bind(zulu)(entity);
 47:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS';
                mike['type'] = oscar;
                oscar = _closure2_slot0;
                mike['roleId'] = oscar;
                mike['roleConnectionConfigurations'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        tango = tango.bind(report)(zulu);
        zulu = tango.catch;
        mike = function() {
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchRoleConnectionsConfiguration'] = tango;
    tango = function() { // Original name: putRoleConnectionsConfigurations
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['putRoleConnectionsConfigurations'] = tango;
    mike = function() { // Original name: fetchUserApplicationRoleConnections
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchUserApplicationRoleConnections'] = mike;
    return entity;
})();