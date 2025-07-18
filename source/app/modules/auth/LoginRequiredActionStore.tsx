// app/modules/auth/LoginRequiredActionStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
 0:
            var2 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 29; continue _fun0002 }
 12:
            if(!(var1 != var2)) { _fun0002_ip = 51; continue _fun0002 }
 16:
            var1 = _closure1_slot5;
            var1[var2] = var3;
            _fun0002_ip = 51; continue _fun0002;
 29:
            var3 = _closure1_slot5;
            var3 = var2 in var3;
            if(!var3) { _fun0002_ip = 51; continue _fun0002 }
 43:
            var1 = _closure1_slot5;
            var1 = delete var1[var2];
 51:
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
 0:
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
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 16; continue _fun0004 }
 9:
                _closure1_slot5 = var2;
 16:
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
 0:
                var2 = _closure1_slot5;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 26; continue _fun0005 }
 23:
                var1 = var2;
 26:
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
 0:
                var5 = arg2;
                var4 = this;
                var3 = var4.requiredActions;
                var1 = arg1;
                var3 = var3.bind(var4)(var1);
                var _closure3_slot0 = var3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0006_ip = 58; continue _fun0006 }
 37:
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = arg1;
                        if(var1) { _fun0007_ip = 26; continue _fun0007 }
 6:
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var2 = arg2;
                        var1 = var3.bind(var4)(var2);
 26:
                        return var1;
                    }
                };
                var2 = false;
                var1 = var4.bind(var5)(var3, var2);
 58:
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
 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(var1) { _fun0008_ip = 25; continue _fun0008 }
 12:
            var3 = _closure1_slot7;
            var2 = null;
            var1 = var2 == var3;
 25:
            if(var1) { _fun0008_ip = 49; continue _fun0008 }
 28:
            var4 = _closure1_slot9;
            var3 = _closure1_slot7;
            var2 = undefined;
            var1 = null;
            var1 = var4.bind(var2)(var3, var1);
 49:
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
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/LoginRequiredActionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();