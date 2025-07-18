// app/modules/poggermode/PoggermodeSettingsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var10 = true;
    var2['value'] = var10;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var11 = var2.ShakeLocation;
    var9 = var2.ConfettiLocation;
    var12 = false;
    var _closure1_slot5 = var12;
    var2 = {'settingsVisible': false, 'enabled': false, 'combosEnabled': true, 'combosRequiredCount': 5, 'comboSoundsEnabled': true, 'screenshakeEnabled': true, 'screenshakeEnabledLocations': null, 'shakeIntensity': 1, 'confettiEnabled': true, 'confettiEnabledLocations': null, 'confettiSize': 16, 'confettiCount': 5, 'warningSeen': false};
    var4 = {};
    var13 = var11.CHAT_INPUT;
    var4[var13] = var10;
    var13 = var11.VOICE_USER;
    var4[var13] = var12;
    var11 = var11.MENTION;
    var4[var11] = var12;
    var2['screenshakeEnabledLocations'] = var4;
    var4 = {};
    var11 = var9.CHAT_INPUT;
    var4[var11] = var10;
    var11 = var9.REACTION;
    var4[var11] = var10;
    var11 = var9.MEMBER_USER;
    var4[var11] = var10;
    var9 = var9.CALL_TILE;
    var4[var9] = var10;
    var2['confettiEnabledLocations'] = var4;
    var4 = 6;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var4 = var9.cloneDeep;
    var4 = var4.bind(var9)(var2);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.DeviceSettingsStore;
    var4 = function(arg1) {
        var4 = function PoggermodeSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
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
            var2 = {};
            var4 = _closure1_slot6;
            var5 = var2;
            var3 = copyDataProperties(var5, var4);
            var4 = arg1;
            var5 = var2;
            var3 = copyDataProperties(var5, var4);
            _closure1_slot6 = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'settingsVisible';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.settingsVisible;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isEnabled';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                var1 = {};
 11:
                var6 = var1.confettiLocation;
                var5 = var1.shakeLocation;
                var1 = null;
                var3 = var1 == var6;
                if(var3) { _fun0003_ip = 69; continue _fun0003 }
 36:
                var2 = _closure1_slot6;
                var2 = var2.confettiEnabled;
                if(!var2) { _fun0003_ip = 66; continue _fun0003 }
 52:
                var4 = _closure1_slot6;
                var4 = var4.confettiEnabledLocations;
                var2 = var4[var6];
 66:
                var3 = var2;
 69:
                var2 = var1 == var5;
                if(var2) { _fun0003_ip = 109; continue _fun0003 }
 76:
                var1 = _closure1_slot6;
                var1 = var1.screenshakeEnabled;
                if(!var1) { _fun0003_ip = 106; continue _fun0003 }
 92:
                var4 = _closure1_slot6;
                var4 = var4.screenshakeEnabledLocations;
                var1 = var4[var5];
 106:
                var2 = var1;
 109:
                var1 = this;
                var1 = var1.settingsVisible;
                if(!var1) { _fun0003_ip = 131; continue _fun0003 }
 121:
                var4 = _closure1_slot5;
                var1 = !var4;
 131:
                if(!var1) { _fun0003_ip = 146; continue _fun0003 }
 134:
                var4 = _closure1_slot6;
                var1 = var4.enabled;
 146:
                if(!var1) { _fun0003_ip = 152; continue _fun0003 }
 149:
                var1 = var3;
 152:
                if(!var1) { _fun0003_ip = 158; continue _fun0003 }
 155:
                var1 = var2;
 158:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shakeIntensity';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var1 = var2.isEnabled;
                var2 = var1.bind(var2)();
                var1 = 0;
                if(!var2) { _fun0004_ip = 31; continue _fun0004 }
 18:
                var2 = _closure1_slot6;
                var1 = var2.shakeIntensity;
 31:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'combosRequiredCount';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2.isEnabled;
                var2 = var1.bind(var2)();
                var1 = 0;
                if(!var2) { _fun0005_ip = 31; continue _fun0005 }
 18:
                var2 = _closure1_slot6;
                var1 = var2.combosRequiredCount;
 31:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'screenshakeEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.screenshakeEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'screenshakeEnabledLocations';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.screenshakeEnabledLocations;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'combosEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.combosEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'comboSoundsEnabled';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.comboSoundsEnabled;
            return var1;
        };
        var5['get'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'PoggermodeSettingsStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handlePoggermodeSettingsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = {};
        var5 = _closure1_slot6;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        var6 = var2;
        var5 = var3;
        var3 = copyDataProperties(var6, var5);
        _closure1_slot6 = var2;
        var1 = undefined;
        return var1;
    };
    var4['POGGERMODE_SETTINGS_UPDATE'] = var10;
    var5 = function handlePoggermodeTemporarilyDisabled() {
        var1 = true;
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var4['POGGERMODE_TEMPORARILY_DISABLED'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/poggermode/PoggermodeSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['initialState'] = var2;
    return var1;
})();