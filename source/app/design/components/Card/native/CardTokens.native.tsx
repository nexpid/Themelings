// app/design/components/Card/native/CardTokens.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var10;
    var11 = function createCardBackgroundToken(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.experimental_createToken;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var2 = var1.primaryColor;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 24; continue _fun0001 }
 15:
                var1 = _closure2_slot0;
                _fun0001_ip = 31; continue _fun0001;
 24:
                var1 = _closure2_slot1;
 31:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 1;
    var5 = var10[var4];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var5 = var5.colors;
    var6 = var5.CARD_PRIMARY_BG;
    var5 = var10[var4];
    var5 = var12.bind(var1)(var5);
    var5 = var5.colors;
    var5 = var5.CARD_GRADIENT_BG;
    var7 = var11.bind(var1)(var6, var5);
    var5 = var10[var4];
    var5 = var12.bind(var1)(var5);
    var5 = var5.colors;
    var6 = var5.CARD_SECONDARY_BG;
    var5 = var10[var4];
    var5 = var12.bind(var1)(var5);
    var5 = var5.colors;
    var5 = var5.CARD_GRADIENT_BG;
    var6 = var11.bind(var1)(var6, var5);
    var5 = var10[var4];
    var5 = var12.bind(var1)(var5);
    var5 = var5.colors;
    var8 = var5.CARD_PRIMARY_PRESSED_BG;
    var5 = var10[var4];
    var5 = var12.bind(var1)(var5);
    var5 = var5.colors;
    var5 = var5.CARD_GRADIENT_PRESSED_BG;
    var5 = var11.bind(var1)(var8, var5);
    var8 = var10[var4];
    var8 = var12.bind(var1)(var8);
    var8 = var8.colors;
    var8 = var8.CARD_SECONDARY_PRESSED_BG;
    var4 = var10[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.colors;
    var4 = var4.CARD_GRADIENT_PRESSED_BG;
    var4 = var11.bind(var1)(var8, var4);
    var8 = 2;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'design/components/Card/native/CardTokens.native.tsx';
    var8 = var9.bind(var10)(var8);
    var3['CARD_PRIMARY_BG'] = var7;
    var3['CARD_SECONDARY_BG'] = var6;
    var3['CARD_PRIMARY_PRESSED_BG'] = var5;
    var3['CARD_SECONDARY_PRESSED_BG'] = var4;
    var2 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.experimental_createToken;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = var1.gradient;
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 287; continue _fun0002 }
 18:
                var3 = _closure2_slot0;
                var2 = 'none';
                if(!(var2 !== var3)) { _fun0002_ip = 287; continue _fun0002 }
 36:
                var2 = _closure2_slot0;
                var1 = 'border';
                if(!(var1 !== var2)) { _fun0002_ip = 248; continue _fun0002 }
 51:
                var1 = 'high';
                if(!(var1 !== var2)) { _fun0002_ip = 209; continue _fun0002 }
 62:
                var1 = 'ledge';
                if(!(var1 !== var2)) { _fun0002_ip = 170; continue _fun0002 }
 72:
                var1 = 'low';
                if(!(var1 !== var2)) { _fun0002_ip = 131; continue _fun0002 }
 80:
                var1 = 'medium';
                if(!(var1 !== var2)) { _fun0002_ip = 92; continue _fun0002 }
 88:
                var1 = undefined;
                return var1;
 92:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_MEDIUM;
                return var1;
 131:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_LOW;
                return var1;
 170:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_LEDGE;
                return var1;
 209:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_HIGH;
                return var1;
 248:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_BORDER;
                return var1;
 287:
                var1 = {};
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['createCardShadowToken'] = var2;
    return var1;
})();