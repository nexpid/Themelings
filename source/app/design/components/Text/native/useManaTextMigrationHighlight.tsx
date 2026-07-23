// app/design/components/Text/native/useManaTextMigrationHighlight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot2 = var4;
    var8 = 1;
    var4 = var6[var8];
    var10 = var11.bind(var1)(var4);
    var _closure1_slot3 = var10;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var12 = var5.bind(var1)(var4);
    var9 = var12.createStyles;
    var4 = {};
    var13 = {};
    var13['borderWidth'] = var8;
    var7 = 4;
    var14 = var6[var7];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.STATUS_POSITIVE;
    var13['borderColor'] = var14;
    var4['highlight'] = var13;
    var13 = {'borderWidth': 1, 'borderStyle': 'dashed'};
    var14 = var6[var7];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.STATUS_DANGER;
    var13['borderColor'] = var14;
    var4['overridden'] = var13;
    var4 = var9.bind(var12)(var4);
    var _closure1_slot5 = var4;
    var9 = var10.get;
    var4 = 'highlight_mana_text';
    var4 = var9.bind(var10)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var4['borderWidth'] = var8;
    var9 = var6[var7];
    var9 = var11.bind(var1)(var9);
    var13 = var9.internal;
    var12 = var13.resolveSemanticColor;
    var9 = var6[var7];
    var9 = var11.bind(var1)(var9);
    var9 = var9.themes;
    var10 = var9.DARK;
    var9 = var6[var7];
    var9 = var11.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.STATUS_WARNING;
    var9 = var12.bind(var13)(var10, var9);
    var4['borderColor'] = var9;
    var _closure1_slot7 = var4;
    var4 = {};
    var4['borderWidth'] = var8;
    var8 = var6[var7];
    var8 = var11.bind(var1)(var8);
    var10 = var8.internal;
    var9 = var10.resolveSemanticColor;
    var8 = var6[var7];
    var8 = var11.bind(var1)(var8);
    var8 = var8.themes;
    var8 = var8.LIGHT;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var7 = var7.colors;
    var7 = var7.STATUS_WARNING;
    var7 = var9.bind(var10)(var8, var7);
    var4['borderColor'] = var7;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Text/native/useManaTextMigrationHighlight.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useManaTextMigrationHighlight(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot5;
            var6 = undefined;
            var3 = var3.bind(var6)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 5;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.get;
                var1 = 'highlight_mana_text';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var7)(var4, var1);
            var1 = null;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = function hasCallerStyleOverride(arg1, arg2) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot2;
                var3 = var5.flatten;
                var2 = arg2;
                var2 = var3.bind(var5)(var2);
                var _closure3_slot1 = var2;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var1 = 'includeFontPadding';
                        if(!(var1 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var1 = _closure3_slot0;
                        var1 = var1[var5];
                        var3 = undefined;
                        var1 = var3 !== var1;
                        if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var6 = _closure3_slot1;
                        var2 = null;
                        var6 = var2 == var6;
                        var2 = undefined;
                        if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var4 = _closure3_slot1;
                        var2 = var4[var5];
case 8:
                        var1 = var3 !== var2;
case 6:
                        return var1;
case 4:
                        var1 = false;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = arg1;
            var2 = arg2;
            var2 = var5.bind(var6)(var4, var2);
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3.highlight;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var2 = var3.overridden;
case 12:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useManaTextMigrationHighlight'] = var4;
    var2 = function withManaTextMigrationHighlight(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot6;
            var1 = var5;
            if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = global;
            var4 = var2.Proxy;
            var2 = {};
            var3 = function get(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Reflect;
                    var4 = var5.get;
                    var3 = arg1;
                    var1 = arg3;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var3 = 'string';
                    var2 = typeof var2;
                    if(!(var3 === var2)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = null;
                    if(!(var2 != var1)) { _fun0004_ip = 15; continue _fun0004 }
case 9:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isThemeLight;
                    var3 = _closure1_slot4;
                    var3 = var3.theme;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure1_slot7;
                    _fun0004_ip = 2; continue _fun0004;
case 17:
                    var3 = _closure1_slot8;
case 2:
                    var2 = {};
                    var8 = var2;
                    var7 = var1;
                    var4 = copyDataProperties(var8, var7);
                    var8 = var2;
                    var7 = var3;
                    var3 = copyDataProperties(var8, var7);
                    return var2;
case 15:
                    return var1;
                }
            };
            var2['get'] = var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var7 = var5;
            var6 = var2;
            var2 = new var8[var4](var7, var6, var5);
            var1 = var2 instanceof Object ? var2 : var3;
case 13:
            return var1;
        }
    };
    var3['withManaTextMigrationHighlight'] = var2;
    return var1;
})();