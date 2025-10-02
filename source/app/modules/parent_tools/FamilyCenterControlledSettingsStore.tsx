// app/modules/parent_tools/FamilyCenterControlledSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = false;
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function FamilyCenterControlledSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getSettings';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getControlledSettings';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasSettingsForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getConsents';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'FamilyCenterControlledSettingsStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleTeenSettingsFetchStart() {
        var1 = true;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['FAMILY_CENTER_TEEN_SETTINGS_FETCH_START'] = var9;
    var9 = function handleTeenSettingsAndConsentsFetchSuccess(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var7 = var1.settings;
            var2 = var1.consents;
            var1 = null;
            if(!(var1 != var7)) { _fun0003_ip = 3; continue _fun0003 }
case 9:
            var5 = _closure1_slot8;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 5;
            var6 = var6[var4];
            var4 = undefined;
            var6 = var8.bind(var4)(var6);
            var4 = var6.b64ToPreloadedUserSettingsProto;
            var4 = var4.bind(var6)(var7);
            var5[var3] = var4;
case 3:
            if(!(var1 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 4:
            var1 = _closure1_slot9;
            var1[var3] = var2;
case 10:
            var1 = false;
            _closure1_slot7 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS'] = var9;
    var9 = function handleTeenConsentsUpdateSuccess(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = var1.consents;
        var1 = _closure1_slot9;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS'] = var9;
    var9 = function handleTeenUpdateSettingsSuccess(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var7 = var1.settings;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var5 = 5;
        var3 = var10[var5];
        var1 = undefined;
        var6 = var9.bind(var1)(var3);
        var3 = var6.b64ToPreloadedUserSettingsProto;
        var8 = var3.bind(var6)(var7);
        var3 = _closure1_slot8;
        var5 = var10[var5];
        var7 = var9.bind(var1)(var5);
        var6 = var7.mergeTopLevelFields;
        var5 = 6;
        var5 = var10[var5];
        var5 = var9.bind(var1)(var5);
        var5 = var5.PreloadedUserSettings;
        var2 = _closure1_slot8;
        var2 = var2[var4];
        var2 = var6.bind(var7)(var5, var2, var8);
        var3[var4] = var2;
        return var1;
    };
    var2['FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/FamilyCenterControlledSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();