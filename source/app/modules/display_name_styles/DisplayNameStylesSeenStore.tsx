// app/modules/display_name_styles/DisplayNameStylesSeenStore.tsx
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var7 = global;
    var9 = var7.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
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
    var8 = var7.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var2['seenFontIds'] = var8;
    var7 = var7.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var2['seenEffectIds'] = var7;
    var7 = false;
    var2['newFontsBadgeDismissed'] = var7;
    var2['newEffectsBadgeDismissed'] = var7;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function DisplayNameStylesSeenStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot6;
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
                var6 = _closure1_slot3;
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
case 0:
                var5 = arg1;
                var3 = {};
                var4 = global;
                var8 = var4.Set;
                var2 = null;
                var7 = var2 == var5;
                var1 = undefined;
                var6 = undefined;
                if(var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var6 = var5.seenFontIds;
case 9:
                if(!(var2 == var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var6 = new Array(0);
case 11:
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var9 = var6;
                var6 = new var10[var8](var9, var8);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['seenFontIds'] = var6;
                var7 = var4.Set;
                var6 = var2 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var4 = var5.seenEffectIds;
case 13:
                if(!(var2 == var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = new Array(0);
case 15:
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var9 = var4;
                var4 = new var10[var7](var9, var8);
                var4 = var4 instanceof Object ? var4 : var6;
                var3['seenEffectIds'] = var4;
                var4 = var2 == var5;
                var6 = undefined;
                if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var6 = var5.newFontsBadgeDismissed;
case 17:
                var4 = var2 != var6;
                if(!var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var4 = var6;
case 19:
                var3['newFontsBadgeDismissed'] = var4;
                var6 = var2 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var4 = var5.newEffectsBadgeDismissed;
case 21:
                var2 = var2 != var4;
                if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var2 = var4;
case 23:
                var3['newEffectsBadgeDismissed'] = var2;
                _closure1_slot5 = var3;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = global;
            var6 = var3.Array;
            var5 = var6.from;
            var4 = _closure1_slot5;
            var4 = var4.seenFontIds;
            var4 = var5.bind(var6)(var4);
            var1['seenFontIds'] = var4;
            var5 = var3.Array;
            var4 = var5.from;
            var3 = _closure1_slot5;
            var3 = var3.seenEffectIds;
            var3 = var4.bind(var5)(var3);
            var1['seenEffectIds'] = var3;
            var3 = _closure1_slot5;
            var3 = var3.newFontsBadgeDismissed;
            var1['newFontsBadgeDismissed'] = var3;
            var2 = _closure1_slot5;
            var2 = var2.newEffectsBadgeDismissed;
            var1['newEffectsBadgeDismissed'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSeenFonts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot5;
            var1 = var1.seenFontIds;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSeenEffects';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot5;
            var1 = var1.seenEffectIds;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getNewFontsBadgeDismissed';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot5;
            var1 = var1.newFontsBadgeDismissed;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getNewEffectsBadgeDismissed';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot5;
            var1 = var1.newEffectsBadgeDismissed;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'DisplayNameStylesSeenStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = false;
        var2 = 'newFontsBadgeDismissed';
        var1[1] = var3;
        var2 = 'newEffectsBadgeDismissed';
        var1[1] = var3;
        return var1;
    };
    var2[0] = var8;
    var7['migrations'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleMarkFontSeen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.fontId;
            var1 = _closure1_slot5;
            var3 = var1.seenFontIds;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var1 = {};
            var9 = _closure1_slot5;
            var10 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = global;
            var5 = var3.Set;
            var3 = _closure1_slot5;
            var9 = var3.seenFontIds;
            var3 = new Array(1);
            var8 = 0;
            var10 = var3;
            var6 = arraySpread(var10, var9, var8);
            var3[5] = var4;
            var4 = 1;
            var4 = var6 + var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var11 = var4;
            var10 = var3;
            var3 = new var11[var5](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = 'seenFontIds';
            var1[2] = var4;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var2['DISPLAY_NAME_STYLES_MARK_FONT_SEEN'] = var8;
    var8 = function handleMarkEffectSeen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.effectId;
            var1 = _closure1_slot5;
            var3 = var1.seenEffectIds;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var1 = {};
            var9 = _closure1_slot5;
            var10 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = global;
            var5 = var3.Set;
            var3 = _closure1_slot5;
            var9 = var3.seenEffectIds;
            var3 = new Array(1);
            var8 = 0;
            var10 = var3;
            var6 = arraySpread(var10, var9, var8);
            var3[5] = var4;
            var4 = 1;
            var4 = var6 + var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var11 = var4;
            var10 = var3;
            var3 = new var11[var5](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = 'seenEffectIds';
            var1[2] = var4;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var2['DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN'] = var8;
    var8 = function handleMarkNewFontsBadgeDismissed() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot5;
            var1 = var1.newFontsBadgeDismissed;
            if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var1 = {};
            var5 = _closure1_slot5;
            var6 = var1;
            var3 = copyDataProperties(var6, var5);
            var4 = true;
            var3 = 'newFontsBadgeDismissed';
            var1[2] = var4;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var2['DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED'] = var8;
    var4 = function handleMarkNewEffectsBadgeDismissed() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot5;
            var1 = var1.newEffectsBadgeDismissed;
            if(var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var1 = {};
            var5 = _closure1_slot5;
            var6 = var1;
            var3 = copyDataProperties(var6, var5);
            var4 = true;
            var3 = 'newEffectsBadgeDismissed';
            var1[2] = var4;
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var2['DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED'] = var4;
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
    var4 = 'modules/display_name_styles/DisplayNameStylesSeenStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();