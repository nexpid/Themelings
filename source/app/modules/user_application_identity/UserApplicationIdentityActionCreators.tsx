// app/modules/user_application_identity/UserApplicationIdentityActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var9 = var4.bind(var1)(var2);
    var _closure1_slot4 = var9;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.Endpoints;
    var _closure1_slot5 = var4;
    var11 = var2.QueryIds;
    var4 = {};
    var2 = function fetchUserApplicationIdentitiesWithProfiles(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 3;
                    var2 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'USER_APPLICATION_IDENTITY_FETCH_USER_START';
                    var2['type'] = var8;
                    var8 = _closure2_slot0;
                    var2['userId'] = var8;
                    var2 = var4.bind(var7)(var2);
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.USER_APPLICATION_IDENTITIES;
                    var8 = _closure2_slot0;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var10 = {};
                    var8 = true;
                    var10['with_profiles'] = var8;
                    var2['query'] = var10;
                    var2['rejectWithError'] = var8;
                    var8 = _closure2_slot1;
                    var2['signal'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=161);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS';
                    var4['type'] = var10;
                    var10 = _closure2_slot0;
                    var4['userId'] = var10;
                    var10 = var2.body;
                    var10 = var10.identities;
                    var4['identities'] = var10;
                    var4 = var7.bind(var8)(var4);
case 9: // try_end0
                    return var5;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE';
                    var3['type'] = var10;
                    var9 = _closure2_slot0;
                    var3['userId'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['fetchUserApplicationIdentitiesWithProfiles'] = var2;
    var _closure1_slot6 = var4;
    var2 = 6;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createFetchStore;
    var2 = {};
    var11 = var11.USER_APPLICATION_IDENTITIES;
    var2['getQueryId'] = var11;
    var11 = function get(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.getUserIdentities;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['get'] = var11;
    var10 = function load(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.fetchUserApplicationIdentitiesWithProfiles;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['load'] = var10;
    var2 = var5.bind(var8)(var9, var2);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_application_identity/UserApplicationIdentityActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useUserApplicationIdentities'] = var2;
    return var1;
})();