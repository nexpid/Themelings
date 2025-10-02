// app/modules/auth_sessions/AuthSessionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchAuthSessions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.AUTH_SESSIONS;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=76);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = null;
                    var4 = var7 != var2;
                    if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var2.ok;
case 8:
                    if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var8 = var2.body;
                    var9 = var7 == var8;
                    var6 = undefined;
                    if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = var8.user_sessions;
case 12:
                    var4 = var7 != var6;
case 10:
                    if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'FETCH_AUTH_SESSIONS_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var6 = var6.user_sessions;
                    var3['sessions'] = var6;
                    var3 = var4.bind(var5)(var3);
case 14:
                    return var2;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _logOutSessions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.isArray;
                    var2 = var2.bind(var3)(var4);
                    if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = new Array(1);
                    var6[0] = var4;
                    _fun0002_ip = 20; continue _fun0002;
case 18:
                    var3 = var4.length;
                    var2 = 0;
                    var6 = var4;
                    if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 20:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.post;
                    var2 = {};
                    var8 = _closure1_slot4;
                    var8 = var8.AUTH_SESSIONS_LOGOUT;
                    var2['url'] = var8;
                    var8 = {};
                    var8['session_id_hashes'] = var6;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=141);
case 22:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var4 = null;
                    var4 = var4 != var2;
                    if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = var2.ok;
case 26:
                    if(!var4) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'LOGOUT_AUTH_SESSIONS_SUCCESS';
                    var3['type'] = var7;
                    var3['sessionIdHashes'] = var6;
                    var3 = var4.bind(var5)(var3);
case 28:
                    return var2;
case 24:
                    return var2;
case 21:
                    var2 = undefined;
                    return var2;
case 16:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth_sessions/AuthSessionsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchAuthSessions() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAuthSessions'] = var4;
    var4 = function clearAuthSessions() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FETCH_AUTH_SESSIONS_SUCCESS';
        var2['type'] = var5;
        var5 = new Array(0);
        var2['sessions'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearAuthSessions'] = var4;
    var2 = function logOutSessions() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['logOutSessions'] = var2;
    return var1;
})();