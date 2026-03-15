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
case 0:
                var1 = arg1;
                var2 = var1.primaryColor;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var1 = _closure2_slot1;
case 4:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var11;
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
    var6 = var5.TABLEROW_BACKGROUND_DEFAULT;
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
    var8 = var5.TABLEROW_BACKGROUND_PRESSED;
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
    var6 = function getCardSecondaryBg(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot3;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var6 = 1;
            var2 = var2[var6];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var5 = var2.colors;
            var2 = arg1;
            if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = var5.CARD_SECONDARY_BG;
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var2 = var5.BACKGROUND_MOD_MUTED;
case 7:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var3)(var1);
            var1 = var1.colors;
            var1 = var1.CARD_GRADIENT_BG;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['getCardSecondaryBg'] = var6;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = var1.gradient;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = _closure2_slot0;
                var2 = 'none';
                if(!(var2 !== var3)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                var2 = _closure2_slot0;
                var1 = 'border';
                if(!(var1 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = 'high';
                if(!(var1 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var1 = 'ledge';
                if(!(var1 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var1 = 'low';
                if(!(var1 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var1 = 'medium';
                if(!(var1 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var1 = undefined;
                return var1;
case 19:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_MEDIUM;
                return var1;
case 17:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_LOW;
                return var1;
case 15:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_LEDGE;
                return var1;
case 13:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_HIGH;
                return var1;
case 11:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_BORDER;
                return var1;
case 8:
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