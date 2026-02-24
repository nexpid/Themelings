// app/stores/UserSettingsAccountStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var11 = function handleFormInit() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getCurrentUser;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot6;
            var3 = var3.OPEN;
            _closure1_slot7 = var3;
            var3 = {};
            _closure1_slot8 = var3;
            var3 = {};
            var5 = var4.id;
            var3['userId'] = var5;
            var5 = var4.username;
            var3['username'] = var5;
            var5 = var4.discriminator;
            var3['discriminator'] = var5;
            var5 = var4.email;
            var3['email'] = var5;
            var5 = var4.avatar;
            var3['avatar'] = var5;
            var5 = '';
            var3['password'] = var5;
            var3['newPassword'] = var2;
            var2 = var4.isClaimed;
            var2 = var2.bind(var4)();
            var3['claimed'] = var2;
            var2 = {};
            var7 = var2;
            var6 = var3;
            var3 = copyDataProperties(var7, var6);
            _closure1_slot9 = var2;
            var2 = undefined;
            return var2;
case 6:
            var2 = _closure1_slot12;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var11;
    var10 = function handleFormClose() {
        var1 = _closure1_slot6;
        var1 = var1.CLOSED;
        _closure1_slot7 = var1;
        var1 = null;
        _closure1_slot9 = var1;
        var1 = {};
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var10;
    var9 = function handleFormSubmitComplete() {
        var1 = _closure1_slot6;
        var1 = var1.OPEN;
        _closure1_slot7 = var1;
        var1 = {};
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var9;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FormStates;
    var _closure1_slot6 = var2;
    var2 = var2.CLOSED;
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function UserSettingsAccountStore() {
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
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
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
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSubmitting';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot7;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserSettingsAccountStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleFormOpen() {
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['USER_SETTINGS_MODAL_OPEN'] = var12;
    var2['USER_SETTINGS_MODAL_INIT'] = var11;
    var2['USER_SETTINGS_MODAL_CLOSE'] = var10;
    var2['LOGOUT'] = var10;
    var10 = function handleFormSubmit() {
        var1 = _closure1_slot6;
        var1 = var1.SUBMITTING;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_MODAL_SUBMIT'] = var10;
    var10 = function handleFormSubmitFailure(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            if(!(var3 === var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = _closure1_slot6;
            var1 = var1.OPEN;
            _closure1_slot7 = var1;
            var1 = arg1;
            var1 = var1.errors;
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var1 = {};
case 13:
            _closure1_slot8 = var1;
            var1 = undefined;
            return var1;
case 11:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SUBMIT_FAILURE'] = var10;
    var10 = function handleUpdateAccount(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.settings;
            var4 = _closure1_slot9;
            var1 = null;
            if(!(var1 == var4)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var1 = {};
            _closure1_slot9 = var1;
case 15:
            var1 = {};
            var5 = _closure1_slot9;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var6 = var1;
            var5 = var3;
            var3 = copyDataProperties(var6, var5);
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_UPDATE_ACCOUNT'] = var10;
    var2['USER_SETTINGS_MODAL_SUBMIT_COMPLETE'] = var9;
    var4 = function handleFormReset() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = var2.getCurrentUser;
            var5 = var1.bind(var2)();
            var2 = _closure1_slot13;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = null;
            if(!(var2 != var5)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
            var4 = {};
            var6 = var5.id;
            var4['userId'] = var6;
            var6 = var5.username;
            var4['username'] = var6;
            var6 = var5.discriminator;
            var4['discriminator'] = var6;
            var6 = var5.email;
            var4['email'] = var6;
            var6 = var5.avatar;
            var4['avatar'] = var6;
            var6 = '';
            var4['password'] = var6;
            var4['newPassword'] = var2;
            var2 = var5.isClaimed;
            var2 = var2.bind(var5)();
            var4['claimed'] = var2;
            var2 = {};
            var8 = var2;
            var7 = var4;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot9 = var2;
case 17:
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_RESET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/UserSettingsAccountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();