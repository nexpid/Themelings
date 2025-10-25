// app/modules/collectibles/native/hooks/useCardLayout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useCardLayout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCardLayout() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 0;
            var1 = var2[var13];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.COLLECTIBLES_SHOP_CARD_GAP;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.width;
            var _closure2_slot1 = var8;
            var2 = 320;
            var2 = var8 >= var2;
            var12 = var1;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = 2;
case 2:
            var11 = 2;
            var2 = undefined;
            var3 = var12;
            if(!(var3 >= var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = 768;
            var5 = var8 >= var5;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = 4;
case 6:
            var5 = function calculateTotalGaps(arg1) {
                var3 = _closure2_slot0;
                var1 = 2;
                var2 = var1 * var3;
                var4 = arg1;
                var1 = 1;
                var1 = var4 - var1;
                var1 = var3 * var1;
                var1 = var2 + var1;
                return var1;
            };
            var _closure2_slot2 = var5;
            var10 = function calculateCardWidth(arg1) {
                var2 = arg1;
                var4 = _closure2_slot2;
                var3 = undefined;
                var3 = var4.bind(var3)(var2);
                var1 = _closure2_slot1;
                var1 = var1 - var3;
                var1 = var1 / var2;
                return var1;
            };
            var14 = var10.bind(var4)(var12);
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var13];
            var6 = var9.bind(var4)(var6);
            var9 = var6.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
            var6 = var12;
            var16 = var14;
            if(!(var14 > var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var12;
            var6 = var9;
            var16 = var14;
            if(!(var12 < var11)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var12 = var9 + 1;
            var14 = var10.bind(var4)(var12);
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var13];
            var15 = var17.bind(var4)(var15);
            var15 = var15.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
            var6 = var12;
            var16 = var14;
            if(!(var14 > var15)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var9 = var12;
            var16 = var14;
            var6 = var9;
            if(var6 < var11) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var9 = global;
            var11 = var9.Math;
            var10 = var11.min;
            var15 = var9.Math;
            var14 = var15.max;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = var7[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.COLLECTIBLES_SHOP_CARD_WIDTH;
            var9 = var14.bind(var15)(var16, var9);
            var7 = var7[var13];
            var7 = var12.bind(var4)(var7);
            var7 = var7.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
            var7 = var10.bind(var11)(var9, var7);
            var9 = var7 * var6;
            var5 = var5.bind(var4)(var6);
            var5 = var9 + var5;
            var5 = var5 > var8;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var6 > var1;
case 12:
            var2 = var7;
            var3 = var6;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 14:
            var2 = undefined;
            var3 = var1;
case 4:
            var1 = {};
            var1['columns'] = var3;
            var1['cardWidth'] = var2;
            return var1;
        }
    };
    var3['useCardLayout'] = var2;
    return var1;
})();