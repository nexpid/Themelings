// app/modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FLYWHEEL_EFFECTS;
    var _closure1_slot4 = var7;
    var4 = var4.FLYWHEEL_FONTS;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useDisplayNameStylesNewFonts(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getSeenFonts;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var5.bind(var6)(var3, var1);
        var _closure2_slot1 = var3;
        var1 = {};
        var5 = _closure1_slot2;
        var6 = var5.useMemo;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var3;
        var3 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot0;
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot5;
                    var1 = var2.includes;
                    var1 = var1.bind(var2)(var4);
                    if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 2:
                    return var1;
                }
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var3 = var6.bind(var5)(var3, var4);
        var1['dotFontIds'] = var3;
        var4 = var5.useCallback;
        var3 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.markDisplayNameStyleFontSeen;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1['dismissFontDot'] = var2;
        return var1;
    };
    var3['useDisplayNameStylesNewFonts'] = var4;
    var4 = function useDisplayNameStylesNewEffects(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getSeenEffects;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var5.bind(var6)(var3, var1);
        var _closure2_slot1 = var3;
        var1 = {};
        var5 = _closure1_slot2;
        var6 = var5.useMemo;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var3;
        var3 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot0;
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot4;
                    var1 = var2.includes;
                    var1 = var1.bind(var2)(var4);
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 2:
                    return var1;
                }
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var3 = var6.bind(var5)(var3, var4);
        var1['dotEffectIds'] = var3;
        var4 = var5.useCallback;
        var3 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.markDisplayNameStyleEffectSeen;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1['dismissEffectDot'] = var2;
        return var1;
    };
    var3['useDisplayNameStylesNewEffects'] = var4;
    var4 = function useDisplayNameStylesNewFontsBadge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getNewFontsBadgeDismissed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = {};
            var8 = _closure1_slot2;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure2_slot0;
                var2 = var3.some;
                var1 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var8)(var4, var6);
            if(!var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var4 = !var5;
case 4:
            var1['showFontsBadge'] = var4;
            var5 = _closure1_slot2;
            var4 = var5.useCallback;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.markDisplayNameStyleNewFontsBadgeDismissed;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            var1['dismissFontsBadge'] = var2;
            return var1;
        }
    };
    var3['useDisplayNameStylesNewFontsBadge'] = var4;
    var2 = function useDisplayNameStylesNewEffectsBadge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getNewEffectsBadgeDismissed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = {};
            var8 = _closure1_slot2;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure2_slot0;
                var2 = var3.some;
                var1 = function(arg1) {
                    var3 = _closure1_slot4;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var8)(var4, var6);
            if(!var4) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var4 = !var5;
case 4:
            var1['showEffectsBadge'] = var4;
            var5 = _closure1_slot2;
            var4 = var5.useCallback;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.markDisplayNameStyleNewEffectsBadgeDismissed;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            var1['dismissEffectsBadge'] = var2;
            return var1;
        }
    };
    var3['useDisplayNameStylesNewEffectsBadge'] = var2;
    return var1;
})();