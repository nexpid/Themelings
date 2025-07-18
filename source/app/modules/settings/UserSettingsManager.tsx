// app/modules/settings/UserSettingsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = false;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function UserSettingsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot2;
                var2 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var3 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.setVerifyTimezone;
                    var1 = var1.bind(var2)();
                    var1 = var2.maybeShowChangeLanguageToast;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var3;
                var3 = var1.setVerifyTimezone;
                var2['OVERLAY_INITIALIZE'] = var3;
                var3 = var1.ensureTimezoneUpdated;
                var2['USER_SETTINGS_PROTO_UPDATE'] = var3;
                var1['actions'] = var2;
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
        var1 = 'maybeShowChangeLanguageToast';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.maybeShowChangeLanguageToast;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'setVerifyTimezone';
        var5['key'] = var7;
        var7 = function value() {
            var1 = true;
            _closure1_slot7 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'ensureTimezoneUpdated';
        var5['key'] = var7;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot7;
                if(!var2) { _fun0003_ip = 120; continue _fun0003 }
 12:
                var2 = false;
                _closure1_slot7 = var2;
                var2 = global;
                var4 = var2.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var8 = var5;
                var4 = new var8[var4](var7);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.getTimezoneOffset;
                var5 = var4.bind(var5)();
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var6 = var4.TimezoneOffset;
                var4 = var6.getSetting;
                var4 = var4.bind(var6)();
                if(!(var4 !== var5)) { _fun0003_ip = 120; continue _fun0003 }
 102:
                var2 = var2.setImmediate;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.TimezoneOffset;
                    var2 = var3.updateSetting;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 120:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var5 = Object.create(var4, {constructor: {value: var2}});
    var13 = var5;
    var4 = new var13[var2](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/settings/UserSettingsManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['UserSettingsManager'] = var2;
    return var1;
})();