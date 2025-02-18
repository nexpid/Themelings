// app/modules/auth_sessions/AuthSessionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchAuthSessions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 191; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.AUTH_SESSIONS;
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=76);
 74:
                    return michal;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 188; continue _fun00001 }
 82:
                    golfie = null;
                    tangon = golfie != michal;
                    if(!tangon) { _fun00002_ip = 97; continue _fun00001 }
 91:
                    tangon = michal.ok;
 97:
                    if(!tangon) { _fun00002_ip = 124; continue _fun00001 }
 100:
                    option = michal.body;
                    verify = golfie == option;
                    oscard = undefined;
                    if(verify) { _fun00002_ip = 120; continue _fun00001 }
 114:
                    oscard = option.user_sessions;
 120:
                    tangon = golfie != oscard;
 124:
                    if(!tangon) { _fun00002_ip = 185; continue _fun00001 }
 127:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'FETCH_AUTH_SESSIONS_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    oscard = oscard.user_sessions;
                    zuuluu['sessions'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 185:
                    return michal;
 188:
                    return michal;
 191:
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
    entity = function() { // Original name: _logOutSessions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 223; continue _fun00003 }
 13:
                    michal = global;
                    zuuluu = michal.Array;
                    michal = zuuluu.isArray;
                    michal = michal.bind(zuuluu)(tangon);
                    if(michal) { _fun00004_ip = 44; continue _fun00003 }
 34:
                    oscard = new Array(1);
                    oscard[0] = tangon;
                    _fun00004_ip = 61; continue _fun00003;
 44:
                    zuuluu = tangon.length;
                    michal = 0;
                    oscard = tangon;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 218; continue _fun00003 }
 61:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.post;
                    michal = {};
                    option = _closure1_slot4;
                    option = option.AUTH_SESSIONS_LOGOUT;
                    michal['url'] = option;
                    option = {};
                    option['session_id_hashes'] = oscard;
                    michal['body'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=141);
 139:
                    return michal;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 215; continue _fun00003 }
 147:
                    tangon = null;
                    tangon = tangon != michal;
                    if(!tangon) { _fun00004_ip = 162; continue _fun00003 }
 156:
                    tangon = michal.ok;
 162:
                    if(!tangon) { _fun00004_ip = 212; continue _fun00003 }
 165:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'LOGOUT_AUTH_SESSIONS_SUCCESS';
                    zuuluu['type'] = golfie;
                    zuuluu['sessionIdHashes'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 212:
                    return michal;
 215:
                    return michal;
 218:
                    michal = undefined;
                    return michal;
 223:
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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth_sessions/AuthSessionsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchAuthSessions
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAuthSessions'] = tangon;
    tangon = function() { // Original name: clearAuthSessions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'FETCH_AUTH_SESSIONS_SUCCESS';
        michal['type'] = report;
        report = new Array(0);
        michal['sessions'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearAuthSessions'] = tangon;
    michal = function() { // Original name: logOutSessions
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['logOutSessions'] = michal;
    return entity;
})();