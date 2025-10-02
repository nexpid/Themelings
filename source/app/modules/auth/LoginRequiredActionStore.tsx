// app/modules/auth/LoginRequiredActionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function updateRequiredActions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            if(!(var1 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot5;
            var1[var2] = var3;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var3 = _closure1_slot5;
            var3 = var2 in var3;
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var1 = _closure1_slot5;
            var1 = delete var1[var2];
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var8 = function handleUpdateUser(arg1) {
        var1 = arg1;
        var1 = var1.user;
        var2 = var1.id;
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = null;
    var _closure1_slot6 = var2;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function LoginRequiredActionStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 8:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 12; continue _fun0003;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 12:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 9; continue _fun0004 }
case 13:
                _closure1_slot5 = var2;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'requiredActions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var1 = var2;
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'requiredActionsIncludes';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg2;
                var4 = this;
                var3 = var4.requiredActions;
                var1 = arg1;
                var3 = var3.bind(var4)(var1);
                var _closure3_slot0 = var3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        if(var1) { _fun0007_ip = 14; continue _fun0007 }
case 18:
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var2 = arg2;
                        var1 = var3.bind(var4)(var2);
case 14:
                        return var1;
                    }
                };
                var2 = false;
                var1 = var4.bind(var5)(var3, var2);
case 16:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'wasLoginAttemptedInSession';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot6;
            var1 = arg1;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'LoginRequiredActionStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleLoginAttempted(arg1) {
        var1 = arg1;
        var4 = var1.required_actions;
        var3 = var1.user_id;
        var2 = _closure1_slot9;
        _closure1_slot6 = var3;
        var1 = undefined;
        var2 = var2.bind(var1)(var3, var4);
        return var1;
    };
    var2['LOGIN_ATTEMPTED'] = var9;
    var2['CONNECTION_OPEN'] = var8;
    var2['CURRENT_USER_UPDATE'] = var8;
    var8 = function handleLogout(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(var1) { _fun0008_ip = 19; continue _fun0008 }
case 7:
            var3 = _closure1_slot7;
            var2 = null;
            var1 = var2 == var3;
case 19:
            if(var1) { _fun0008_ip = 20; continue _fun0008 }
case 21:
            var4 = _closure1_slot9;
            var3 = _closure1_slot7;
            var2 = undefined;
            var1 = null;
            var1 = var4.bind(var2)(var3, var1);
case 20:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOGOUT'] = var8;
    var8 = function handlePasswordUpdated(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot9;
        var1 = undefined;
        var2 = null;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['PASSWORD_UPDATED'] = var8;
    var4 = function handleRemoveMultiAccount(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot9;
        var1 = undefined;
        var2 = null;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['MULTI_ACCOUNT_REMOVE_ACCOUNT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/LoginRequiredActionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();