// app/modules/connections/ConnectionsRoleActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _putRoleConnectionsConfigurations
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    option = argBar;
                    report = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 326; continue _fun00001 }
 21:
                    tangon = report.map;
                    zuuluu = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.map;
                        entity = function(argFoo) {
                            michal = argFoo;
                            entity = {};
                            zuuluu = michal.connectionType;
                            entity['connection_type'] = zuuluu;
                            zuuluu = michal.connectionMetadataField;
                            entity['connection_metadata_field'] = zuuluu;
                            zuuluu = michal.applicationId;
                            entity['application_id'] = zuuluu;
                            zuuluu = michal.operator;
                            entity['operator'] = zuuluu;
                            michal = michal.value;
                            entity['value'] = michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    golfie = tangon.bind(report)(zuuluu);
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 2;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    verify = zuuluu.HTTP;
                    oscard = verify.put;
                    zuuluu = {};
                    romeon = _closure1_slot4;
                    yankee = romeon.GUILD_ROLE_CONNECTIONS_CONFIGURATION;
                    yankee = yankee.bind(romeon)(offset, option);
                    zuuluu['url'] = yankee;
                    romeon = golfie.length;
                    yankee = 0;
                    if(!(yankee === romeon)) { _fun00002_ip = 111; continue _fun00001 }
 107:
                    golfie = new Array(0);
 111:
                    zuuluu['body'] = golfie;
                    golfie = true;
                    zuuluu['oldFormErrors'] = golfie;
                    golfie = false;
                    zuuluu['rejectWithError'] = golfie;
                    oscard = oscard.bind(verify)(zuuluu);
                    zuuluu = oscard.then;
                    michal = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            michal = argFoo;
                            entity = new Array(0);
                            zuuluu = michal.body;
                            tangon = zuuluu.length;
                            zuuluu = 0;
                            if(!(tangon > zuuluu)) { _fun00004_ip = 47; continue _fun00003 }
 23:
                            tangon = michal.body;
                            zuuluu = tangon.map;
                            michal = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.map;
                                entity = function(argFoo) {
                                    michal = argFoo;
                                    entity = {};
                                    zuuluu = michal.connection_type;
                                    entity['connectionType'] = zuuluu;
                                    zuuluu = michal.connection_metadata_field;
                                    entity['connectionMetadataField'] = zuuluu;
                                    zuuluu = michal.application_id;
                                    entity['applicationId'] = zuuluu;
                                    zuuluu = michal.operator;
                                    entity['operator'] = zuuluu;
                                    michal = michal.value;
                                    entity['value'] = michal;
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            entity = zuuluu.bind(tangon)(michal);
 47:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(oscard)(michal);
                    SaveGenerator(address=154);
 152:
                    return michal;
 154:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 323; continue _fun00001 }
 163:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = verify[zuuluu];
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.requestMembersForRole;
                    zuuluu = zuuluu.bind(oscard)(offset, option, golfie);
                    SaveGenerator(address=200);
 198:
                    return zuuluu;
 200:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 320; continue _fun00001 }
 206:
                    oscard = null;
                    if(!(oscard != zuuluu)) { _fun00002_ip = 267; continue _fun00001 }
 212:
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 3;
                    oscard = verify[oscard];
                    verify = golfie.bind(tangon)(oscard);
                    golfie = verify.dispatch;
                    oscard = {};
                    yankee = 'GUILD_ROLE_MEMBER_COUNT_UPDATE';
                    oscard['type'] = yankee;
                    oscard['guildId'] = offset;
                    oscard['roleId'] = option;
                    oscard['count'] = zuuluu;
                    oscard = golfie.bind(verify)(oscard);
 267:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 3;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS';
                    report['type'] = verify;
                    report['roleId'] = option;
                    report['roleConnectionConfigurations'] = michal;
                    report = oscard.bind(golfie)(report);
                    return tangon;
 320:
                    return zuuluu;
 323:
                    return michal;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _fetchUserApplicationRoleConnections
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 90; continue _fun00005 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.APPLICATION_USER_ROLE_CONNECTIONS;
                    michal['url'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=73);
 71:
                    return michal;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 87; continue _fun00005 }
 79:
                    zuuluu = michal.body;
                    return zuuluu;
 87:
                    return michal;
 90:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/connections/ConnectionsRoleActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: fetchRoleConnectionsConfiguration
        verify = argBar;
        var _closure2_slot0 = verify;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.get;
        zuuluu = {};
        option = _closure1_slot4;
        golfie = option.GUILD_ROLE_CONNECTIONS_CONFIGURATION;
        oscard = argFoo;
        oscard = golfie.bind(option)(oscard, verify);
        zuuluu['url'] = oscard;
        oscard = true;
        zuuluu['rejectWithError'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                report = new Array(0);
                michal = entity.body;
                zuuluu = michal.length;
                michal = 0;
                if(!(zuuluu > michal)) { _fun00008_ip = 47; continue _fun00007 }
 23:
                zuuluu = entity.body;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.connection_type;
                        entity['connectionType'] = zuuluu;
                        zuuluu = michal.connection_metadata_field;
                        entity['connectionMetadataField'] = zuuluu;
                        zuuluu = michal.application_id;
                        entity['applicationId'] = zuuluu;
                        zuuluu = michal.operator;
                        entity['operator'] = zuuluu;
                        michal = michal.value;
                        entity['value'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                report = michal.bind(zuuluu)(entity);
 47:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS';
                michal['type'] = oscard;
                oscard = _closure2_slot0;
                michal['roleId'] = oscard;
                michal['roleConnectionConfigurations'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.catch;
        michal = function() {
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchRoleConnectionsConfiguration'] = tangon;
    tangon = function() { // Original name: putRoleConnectionsConfigurations
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['putRoleConnectionsConfigurations'] = tangon;
    michal = function() { // Original name: fetchUserApplicationRoleConnections
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchUserApplicationRoleConnections'] = michal;
    return entity;
})();