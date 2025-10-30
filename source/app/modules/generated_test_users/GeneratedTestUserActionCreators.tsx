// app/modules/generated_test_users/GeneratedTestUserActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getGeneratedPoolById() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg2;
                    var _closure4_slot0 = var3;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 7;
                    var3 = var10[var3];
                    var9 = undefined;
                    var5 = var4.bind(var9)(var3);
                    var4 = var5.get;
                    var3 = {};
                    var11 = _closure1_slot6;
                    var8 = var11.GENERATED_POOL_BY_ID;
                    var6 = arg1;
                    var6 = var8.bind(var11)(var6);
                    var3['url'] = var6;
                    var6 = {};
                    var8 = _closure1_slot0;
                    var7 = 8;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.NetworkActionNames;
                    var7 = var7.USER_LOGIN;
                    var6['event'] = var7;
                    var3['trackedActionData'] = var6;
                    var6 = false;
                    var3['rejectWithError'] = var6;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.ok;
                            var1 = var1.body;
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.showFailedToast;
                            var2 = _closure1_slot7;
                            var2 = var2.GENERIC_ERROR;
                            var2 = var3.bind(var5)(var2);
                            _fun0002_ip = 6; continue _fun0002;
case 4:
                            var7 = var1.generated_pool;
                            var6 = var1.users;
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 9;
                            var1 = var9[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'GENERATED_POOL_BY_ID_FETCH_SUCCESS';
                            var1['type'] = var5;
                            var5 = _closure1_slot0;
                            var4 = 10;
                            var4 = var9[var4];
                            var4 = var5.bind(var8)(var4);
                            var5 = var4.GeneratedTestPoolRecord;
                            var4 = var5.fromServer;
                            var7 = var4.bind(var5)(var7);
                            var5 = var7.setPassword;
                            var4 = _closure4_slot0;
                            var4 = var5.bind(var7)(var4);
                            var1['pool'] = var4;
                            var5 = var6.map;
                            var4 = function(arg1) {
                                var3 = _closure1_slot4;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {constructor: {value: var3}});
                                var4 = arg1;
                                var5 = var2;
                                var1 = new var5[var3](var4, var3);
                                var1 = var1 instanceof Object ? var1 : var2;
                                return var1;
                            };
                            var4 = var5.bind(var6)(var4);
                            var1['users'] = var4;
                            var1 = var2.bind(var3)(var1);
case 6:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.showFailedToast;
                        var1 = _closure1_slot7;
                        var1 = var1.GENERIC_ERROR;
                        var1 = var2.bind(var3)(var1);
                        var1 = null;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=163);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    return var2;
case 9:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyToastType;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/generated_test_users/GeneratedTestUserActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function loginAsGeneratedUser(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot5;
            var3 = var4.getUser;
            var2 = arg2;
            var5 = var3.bind(var4)(var2);
            var6 = null;
            if(!(var6 != var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = _closure1_slot5;
            var3 = var4.getPool;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var7 = var6 == var2;
            var3 = undefined;
            var4 = undefined;
            if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = var2.password;
case 13:
            if(!(var6 != var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = var5.email;
            if(!(var6 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 17:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.login;
            var1 = {};
            var5 = var5.email;
            var1['login'] = var5;
            var1['password'] = var4;
            var4 = true;
            var1['isMultiAccount'] = var4;
            var4 = 'generated_test_user';
            var1['source'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.catch;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.showFailedToast;
                var1 = _closure1_slot7;
                var1 = var1.GENERIC_ERROR;
                var1 = var2.bind(var3)(var1);
                var1 = null;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 9:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var8 = 'User email not found';
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 15:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var8 = 'Pool password not found';
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 11:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var8 = 'User not found';
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['loginAsGeneratedUser'] = var4;
    var4 = function getGeneratedPoolById() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGeneratedPoolById'] = var4;
    var2 = function removeGeneratedPoolFromList(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GENERATED_POOL_REMOVE_FROM_LIST';
        var2['type'] = var5;
        var5 = arg1;
        var2['poolId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['removeGeneratedPoolFromList'] = var2;
    return var1;
})();