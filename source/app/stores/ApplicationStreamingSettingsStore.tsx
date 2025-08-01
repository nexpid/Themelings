// app/stores/ApplicationStreamingSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var2 = true;
    var8['value'] = var2;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot0 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot1 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 5;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.ApplicationStreamResolutions;
    var8 = var10.ApplicationStreamFPS;
    var10 = var10.ApplicationStreamPresets;
    var _closure1_slot5 = var10;
    var11 = 6;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.MediaEngineContextTypes;
    var _closure1_slot6 = var11;
    var10 = var10.PRESET_VIDEO;
    var _closure1_slot7 = var10;
    var9 = var9.RESOLUTION_720;
    var _closure1_slot8 = var9;
    var8 = var8.FPS_30;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ApplicationStreamingSettingsStore() {
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
                var1 = _closure1_slot11;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 79; continue _fun0003 }
 9:
                var4 = var3.preset;
                if(!(var1 == var4)) { _fun0003_ip = 32; continue _fun0003 }
 19:
                var2 = _closure1_slot5;
                var4 = var2.PRESET_VIDEO;
 32:
                _closure1_slot7 = var4;
                var4 = var3.resolution;
                _closure1_slot8 = var4;
                var4 = var3.fps;
                _closure1_slot9 = var4;
                var3 = var3.soundshareEnabled;
                var1 = var1 == var3;
                if(var1) { _fun0003_ip = 75; continue _fun0003 }
 72:
                var1 = var3;
 75:
                _closure1_slot10 = var1;
 79:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot7;
            var1['preset'] = var3;
            var3 = _closure1_slot8;
            var1['resolution'] = var3;
            var3 = _closure1_slot9;
            var1['fps'] = var3;
            var2 = _closure1_slot10;
            var1['soundshareEnabled'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationStreamingSettingsStore';
    var8['displayName'] = var2;
    var2 = 'ApplicationStreamingSettingStore';
    var8['persistKey'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSetGoLiveSource(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var5 = null;
            var3 = var5 == var2;
            var1 = undefined;
            var6 = undefined;
            if(var3) { _fun0004_ip = 27; continue _fun0004 }
 22:
            var6 = var2.context;
 27:
            var4 = _closure1_slot6;
            var4 = var4.STREAM;
            if(!(var6 === var4)) { _fun0004_ip = 145; continue _fun0004 }
 44:
            var6 = var5 == var2;
            var4 = undefined;
            if(var6) { _fun0004_ip = 59; continue _fun0004 }
 53:
            var4 = var2.qualityOptions;
 59:
            if(!(var5 != var4)) { _fun0004_ip = 147; continue _fun0004 }
 63:
            var6 = var5 == var2;
            var4 = undefined;
            if(var6) { _fun0004_ip = 84; continue _fun0004 }
 72:
            var6 = var2.qualityOptions;
            var4 = var6.resolution;
 84:
            if(!(var5 != var4)) { _fun0004_ip = 147; continue _fun0004 }
 88:
            var6 = var5 == var2;
            var4 = undefined;
            if(var6) { _fun0004_ip = 109; continue _fun0004 }
 97:
            var6 = var2.qualityOptions;
            var4 = var6.frameRate;
 109:
            if(!(var5 != var4)) { _fun0004_ip = 147; continue _fun0004 }
 113:
            var4 = var2.qualityOptions;
            var4 = var4.resolution;
            _closure1_slot8 = var4;
            var2 = var2.qualityOptions;
            var2 = var2.frameRate;
            _closure1_slot9 = var2;
 145:
            return var1;
 147:
            var1 = false;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var9;
    var4 = function handleUpdateSettings(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = var1.preset;
            var6 = var1.resolution;
            var5 = var1.frameRate;
            var3 = var1.soundshareEnabled;
            var2 = null;
            var4 = var2 != var7;
            var1 = false;
            if(!var4) { _fun0005_ip = 47; continue _fun0005 }
 38:
            _closure1_slot7 = var7;
            var1 = true;
 47:
            if(!(var2 != var6)) { _fun0005_ip = 60; continue _fun0005 }
 51:
            _closure1_slot8 = var6;
            var1 = true;
 60:
            if(!(var2 != var5)) { _fun0005_ip = 73; continue _fun0005 }
 64:
            _closure1_slot9 = var5;
            var1 = true;
 73:
            if(!(var2 != var3)) { _fun0005_ip = 86; continue _fun0005 }
 77:
            _closure1_slot10 = var3;
            var1 = true;
 86:
            return var1;
        }
    };
    var2['STREAM_UPDATE_SETTINGS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ApplicationStreamingSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();