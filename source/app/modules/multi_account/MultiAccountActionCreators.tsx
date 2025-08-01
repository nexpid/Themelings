// app/modules/multi_account/MultiAccountActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'MultiAccountActionCreators';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/MultiAccountActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function validateMultiAccountTokens() {
        var4 = _closure1_slot5;
        var3 = var4.getId;
        var3 = var3.bind(var4)();
        var _closure2_slot0 = var3;
        var3 = _closure1_slot6;
        var2 = var3.getUsers;
        var4 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 531; continue _fun0001 }
 10:
                        var2 = arg1;
                        var6 = var2.id;
                        var5 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        SaveGenerator(address=28);
 26:
                        return var5;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 528; continue _fun0001 }
 37:
                        var7 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var4 = 5;
                        var4 = var9[var4];
                        var9 = var7.bind(var5)(var4);
                        var7 = var9.getToken;
                        var4 = var6;
                        var4 = var7.bind(var9)(var4);
                        var14 = var4;
                        var10 = null;
                        if(!(var10 != var4)) { _fun0001_ip = 94; continue _fun0001 }
 83:
                        var7 = var14;
                        var4 = '';
                        if(!(var4 === var7)) { _fun0001_ip = 148; continue _fun0001 }
 94:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var4 = 6;
                        var4 = var9[var4];
                        var9 = var7.bind(var5)(var4);
                        var7 = var9.dispatch;
                        var4 = {};
                        var11 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
                        var4['type'] = var11;
                        var11 = var6;
                        var4['userId'] = var11;
                        var4 = var7.bind(var9)(var4);
                        _fun0001_ip = 397; continue _fun0001;
 148:
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var7 = 6;
                        var4 = var4[var7];
                        var11 = var9.bind(var5)(var4);
                        var9 = var11.dispatch;
                        var4 = {};
                        var12 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST';
                        var4['type'] = var12;
                        var12 = var6;
                        var4['userId'] = var12;
                        var4 = var9.bind(var11)(var4);
 197: // try_start_0
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var4 = 7;
                        var4 = var11[var4];
                        var4 = var9.bind(var5)(var4);
                        var11 = var4.HTTP;
                        var9 = var11.get;
                        var4 = {};
                        var12 = _closure1_slot7;
                        var12 = var12.ME;
                        var4['url'] = var12;
                        var12 = {};
                        var12['authorization'] = var14;
                        var4['headers'] = var12;
                        var12 = 3;
                        var4['retries'] = var12;
                        var12 = false;
                        var4['rejectWithError'] = var12;
                        var4 = var9.bind(var11)(var4);
                        SaveGenerator(address=278);
 276:
                        return var4;
 278:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                        if(var9) { _fun0001_ip = 400; continue _fun0001 }
 284:
                        var13 = var4;
 287: // try_end0
                        var11 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var9 = var9[var7];
                        var12 = var11.bind(var5)(var9);
                        var11 = var12.dispatch;
                        var9 = {};
                        var16 = _closure2_slot0;
                        var15 = var6;
                        var14 = 'USER_UPDATE';
                        if(!(var16 === var15)) { _fun0001_ip = 333; continue _fun0001 }
 329:
                        var14 = 'CURRENT_USER_UPDATE';
 333:
                        var9['type'] = var14;
                        var13 = var13.body;
                        var9['user'] = var13;
                        var9 = var11.bind(var12)(var9);
                        var11 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var9 = var9[var7];
                        var12 = var11.bind(var5)(var9);
                        var11 = var12.dispatch;
                        var9 = {};
                        var13 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS';
                        var9['type'] = var13;
                        var13 = var6;
                        var9['userId'] = var13;
                        var9 = var11.bind(var12)(var9);
 397:
                        return var5;
 400:
                        return var4;
 403: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var8 = var9;
                        var9 = var10 == var9;
                        var11 = undefined;
                        if(var9) { _fun0001_ip = 425; continue _fun0001 }
 417:
                        var9 = var8;
                        var11 = var9.status;
 425:
                        var9 = 401;
                        var9 = var9 === var11;
                        var4 = var9;
                        if(var9) { _fun0001_ip = 468; continue _fun0001 }
 441:
                        var9 = var8;
                        var10 = var10 == var9;
                        var9 = undefined;
                        if(var10) { _fun0001_ip = 458; continue _fun0001 }
 453:
                        var9 = var8.status;
 458:
                        var8 = 403;
                        var4 = var8 === var9;
 468:
                        var8 = var4;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS';
                        if(!var8) { _fun0001_ip = 510; continue _fun0001 }
 504:
                        var7 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
 510:
                        var3['type'] = var7;
                        var3['userId'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
 528:
                        return var2;
 531:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['validateMultiAccountTokens'] = var4;
    var4 = function switchAccount(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var8 = arg2;
            var7 = _closure1_slot8;
            var5 = var7.log;
            var2 = global;
            var1 = var2.HermesInternal;
            var4 = var1.concat;
            var1 = 'Switching account to ';
            var4 = var4.bind(var1)(var6);
            var1 = {};
            var1['switchSynchronously'] = var8;
            var1 = var5.bind(var7)(var4, var1);
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 5;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.getToken;
            var7 = var1.bind(var4)(var6);
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 131; continue _fun0002 }
 97:
            var4 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 8;
            var1 = var9[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.switchAccountToken;
            var1 = var1.bind(var4)(var7, var8);
            _fun0002_ip = 214; continue _fun0002;
 131:
            var8 = _closure1_slot8;
            var7 = var8.log;
            var4 = 'Switching accounts failed because there was no token';
            var4 = var7.bind(var8)(var4);
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 6;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var7 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
            var3['type'] = var7;
            var3['userId'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
 214:
            return var1;
        }
    };
    var3['switchAccount'] = var4;
    var4 = function moveAccount(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MULTI_ACCOUNT_MOVE_ACCOUNT';
        var2['type'] = var5;
        var5 = arg1;
        var2['from'] = var5;
        var5 = arg2;
        var2['to'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['moveAccount'] = var4;
    var4 = function removeAccount(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['removeAccount'] = var4;
    var4 = function multiAccountMobileExperimentUpdate(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['multiAccountMobileExperimentEnabled'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['multiAccountMobileExperimentUpdate'] = var4;
    var4 = function updatePushSyncToken(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var5 = arg2;
        var2['pushSyncToken'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updatePushSyncToken'] = var4;
    var2 = function invalidatePushSyncTokens(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS';
        var2['type'] = var5;
        var5 = arg1;
        var2['invalidPushSyncTokens'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['invalidatePushSyncTokens'] = var2;
    return var1;
})();