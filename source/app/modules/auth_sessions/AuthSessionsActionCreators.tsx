// app/modules/auth_sessions/AuthSessionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchAuthSessions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 191; continue _fun00001 }
 10:
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
                    golf = golf.AUTH_SESSIONS;
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=76);
 74:
                    return mike;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 188; continue _fun00001 }
 82:
                    golf = null;
                    tango = golf != mike;
                    if(!tango) { _fun00002_ip = 97; continue _fun00001 }
 91:
                    tango = mike.ok;
 97:
                    if(!tango) { _fun00002_ip = 124; continue _fun00001 }
 100:
                    options = mike.body;
                    verify = golf == options;
                    oscar = undefined;
                    if(verify) { _fun00002_ip = 120; continue _fun00001 }
 114:
                    oscar = options.user_sessions;
 120:
                    tango = golf != oscar;
 124:
                    if(!tango) { _fun00002_ip = 185; continue _fun00001 }
 127:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 3;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'FETCH_AUTH_SESSIONS_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    oscar = oscar.user_sessions;
                    zulu['sessions'] = oscar;
                    zulu = tango.bind(report)(zulu);
 185:
                    return mike;
 188:
                    return mike;
 191:
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
    entity = function() { // Original name: _logOutSessions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 223; continue _fun00003 }
 13:
                    mike = global;
                    zulu = mike.Array;
                    mike = zulu.isArray;
                    mike = mike.bind(zulu)(tango);
                    if(mike) { _fun00004_ip = 44; continue _fun00003 }
 34:
                    oscar = new Array(1);
                    oscar[0] = tango;
                    _fun00004_ip = 61; continue _fun00003;
 44:
                    zulu = tango.length;
                    mike = 0;
                    oscar = tango;
                    if(!(mike !== zulu)) { _fun00004_ip = 218; continue _fun00003 }
 61:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 2;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    golf = mike.HTTP;
                    tango = golf.post;
                    mike = {};
                    options = _closure1_slot4;
                    options = options.AUTH_SESSIONS_LOGOUT;
                    mike['url'] = options;
                    options = {};
                    options['session_id_hashes'] = oscar;
                    mike['body'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=141);
 139:
                    return mike;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 215; continue _fun00003 }
 147:
                    tango = null;
                    tango = tango != mike;
                    if(!tango) { _fun00004_ip = 162; continue _fun00003 }
 156:
                    tango = mike.ok;
 162:
                    if(!tango) { _fun00004_ip = 212; continue _fun00003 }
 165:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'LOGOUT_AUTH_SESSIONS_SUCCESS';
                    zulu['type'] = golf;
                    zulu['sessionIdHashes'] = oscar;
                    zulu = tango.bind(report)(zulu);
 212:
                    return mike;
 215:
                    return mike;
 218:
                    mike = undefined;
                    return mike;
 223:
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
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth_sessions/AuthSessionsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchAuthSessions
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAuthSessions'] = tango;
    tango = function() { // Original name: clearAuthSessions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'FETCH_AUTH_SESSIONS_SUCCESS';
        mike['type'] = report;
        report = new Array(0);
        mike['sessions'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearAuthSessions'] = tango;
    mike = function() { // Original name: logOutSessions
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['logOutSessions'] = mike;
    return entity;
})();