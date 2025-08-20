// app/modules/remixing/RemixingPersistedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var4 = var8[var2];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var5 = var10.unsafe_getResolvedRawColor;
    var4 = {};
    var4['saturation'] = var2;
    var2 = 'WHITE';
    var2 = var5.bind(var10)(var2, var4);
    var _closure1_slot7 = var2;
    var4 = function DEAFULT() {
        var1 = {};
        var2 = {};
        var1['TSW'] = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.DrawingColors;
        var3 = var3.WHITE;
        var1['brushColor'] = var3;
        var3 = 8;
        var1['brushSize'] = var3;
        var2 = _closure1_slot7;
        var1['textColor'] = var2;
        return var1;
    };
    var _closure1_slot8 = var4;
    var4 = var4.bind(var1)();
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var5 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function RemixingPersistedStore(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot2;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = function() {
                    var2 = _closure1_slot8;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    _closure1_slot9 = var2;
                    return var1;
                };
                var1['reset'] = var2;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 16; continue _fun0003 }
 9:
                _closure1_slot9 = var2;
 16:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldShowLanguageSupportWarning';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 42; continue _fun0004 }
 9:
                var2 = _closure1_slot9;
                var2 = var2.TSW;
                var3 = var2[var3];
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 40; continue _fun0004 }
 33:
                var2 = 3;
                var1 = var3 < var2;
 40:
                return var1;
 42:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot9;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getDrawingState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot9;
            var3 = var3.brushSize;
            var1['brushSize'] = var3;
            var2 = _closure1_slot9;
            var2 = var2.brushColor;
            var1['brushColor'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getTextState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var2 = _closure1_slot9;
            var2 = var2.textColor;
            var1['textColor'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var5);
    var4 = 'RemixingPersistedStore';
    var10['displayName'] = var4;
    var4 = 'RemixingPersistedStore2';
    var10['persistKey'] = var4;
    var4 = 8;
    var5 = var8[var4];
    var14 = var9.bind(var1)(var5);
    var5 = {};
    var11 = function REMIX_TEXT_SUPPORT_WARNING_DISMISSED(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var4 = var1.permanent;
            var1 = _closure1_slot9;
            var2 = var1.TSW;
            var1 = 4;
            if(var4) { _fun0005_ip = 57; continue _fun0005 }
 33:
            var5 = var3 in var2;
            var6 = 1;
            var4 = var6;
            if(!var5) { _fun0005_ip = 54; continue _fun0005 }
 46:
            var5 = var2[var3];
            var4 = var5 + var6;
 54:
            var1 = var4;
 57:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['REMIX_TEXT_SUPPORT_WARNING_DISMISSED'] = var11;
    var6 = function REMIX_TOOL_PREFERENCE_UPDATE(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.brushColor;
            var4 = var1.brushSize;
            var2 = var1.textColor;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 40; continue _fun0006 }
 27:
            var3 = _closure1_slot9;
            var3['brushColor'] = var5;
 40:
            if(!(var1 != var4)) { _fun0006_ip = 57; continue _fun0006 }
 44:
            var3 = _closure1_slot9;
            var3['brushSize'] = var4;
 57:
            if(!(var1 != var2)) { _fun0006_ip = 74; continue _fun0006 }
 61:
            var1 = _closure1_slot9;
            var1['textColor'] = var2;
 74:
            var1 = undefined;
            return var1;
        }
    };
    var5['REMIX_TOOL_PREFERENCE_UPDATE'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var15 = var6;
    var13 = var5;
    var5 = new var15[var10](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/remixing/RemixingPersistedStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['DEFAULT_BRUSH_SIZE'] = var4;
    var3['DEFAULT_TEXT_COLOR'] = var2;
    return var1;
})();