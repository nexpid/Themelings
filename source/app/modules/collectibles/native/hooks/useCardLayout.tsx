// app/modules/collectibles/native/hooks/useCardLayout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = function calculateTotalGaps(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.COLLECTIBLES_SHOP_CARD_GAP;
        var3 = arg1;
        var1 = 1;
        var1 = var3 - var1;
        var2 = var2 * var1;
        var1 = arg2;
        var1 = var1 + var2;
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = function calculateCardWidth(arg1, arg2, arg3) {
        var2 = arg1;
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = arg3;
        var3 = var4.bind(var3)(var2, var1);
        var1 = arg2;
        var1 = var1 - var3;
        var1 = var1 / var2;
        return var1;
    };
    var _closure1_slot4 = var1;
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
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 1;
            var1 = var1[var5];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            var9 = var1.width;
            var1 = 320;
            var1 = var9 >= var1;
            var3 = var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 2;
case 2:
            var4 = 2;
            if(!(!(var3 < var4))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 768;
            var1 = var9 >= var1;
            var7 = var4;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = 4;
case 6:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 0;
            var11 = var1[var10];
            var11 = var6.bind(var2)(var11);
            var11 = var11.COLLECTIBLES_SHOP_CARD_WIDTH;
            var12 = var11 * var3;
            var11 = var1[var10];
            var11 = var6.bind(var2)(var11);
            var13 = var11.COLLECTIBLES_SHOP_CARD_GAP;
            var11 = var3 - var5;
            var11 = var13 * var11;
            var11 = var12 + var11;
            var12 = var9 - var11;
            var1 = var1[var10];
            var1 = var6.bind(var2)(var1);
            var1 = var1.COLLECTIBLES_SHOP_CARD_GAP;
            var1 = var4 * var1;
            if(!(!(var12 < var1))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var6.bind(var2)(var1);
            var1 = var1.COLLECTIBLES_SHOP_CARD_GAP;
            var4 = var4 * var1;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var1 = global;
            var11 = var1.Math;
            var6 = var11.max;
            var1 = 4;
            var4 = var6.bind(var11)(var1, var12);
case 10:
            var1 = _closure1_slot4;
            var11 = var1.bind(var2)(var3, var9, var4);
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var6.bind(var2)(var1);
            var1 = var1.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
            var6 = var4;
            var4 = var3;
            var16 = var11;
            if(!(var11 > var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var3;
            var16 = var11;
            var4 = var1;
            if(!(var4 < var7)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var12 = _closure1_slot4;
            var11 = var1 + 1;
            var12 = var12.bind(var2)(var11, var9, var6);
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var10];
            var13 = var14.bind(var2)(var13);
            var13 = var13.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
            var4 = var11;
            var16 = var12;
            if(!(var12 > var13)) { _fun0001_ip = 11; continue _fun0001 }
case 14:
            var1 = var11;
            var16 = var12;
            var4 = var1;
            if(var4 < var7) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var1 = global;
            var12 = var1.Math;
            var11 = var12.min;
            var15 = var1.Math;
            var14 = var15.max;
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = var1[var10];
            var7 = var13.bind(var2)(var7);
            var7 = var7.COLLECTIBLES_SHOP_CARD_WIDTH;
            var7 = var14.bind(var15)(var16, var7);
            var1 = var1[var10];
            var1 = var13.bind(var2)(var1);
            var1 = var1.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
            var7 = var11.bind(var12)(var7, var1);
            var11 = var7 * var4;
            var1 = _closure1_slot3;
            var1 = var1.bind(var2)(var4, var6);
            var1 = var11 + var1;
            if(!(var1 > var9)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(!(!(var4 > var5))) { _fun0001_ip = 17; continue _fun0001 }
case 15:
            var1 = {};
            var1['columns'] = var4;
            var1['cardWidth'] = var7;
            var7 = var7 * var4;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var2)(var8);
            var8 = var8.COLLECTIBLES_SHOP_CARD_GAP;
            var4 = var4 - var5;
            var4 = var8 * var4;
            var4 = var7 + var4;
            var4 = var4 + var6;
            var1['rowWidth'] = var4;
            _fun0001_ip = 18; continue _fun0001;
case 17:
            var4 = {};
            var4['columns'] = var5;
            var4['cardWidth'] = var2;
            var4['rowWidth'] = var2;
            var1 = var4;
case 18:
            return var1;
case 4:
            var1 = {};
            var1['columns'] = var3;
            var1['cardWidth'] = var2;
            var1['rowWidth'] = var2;
            return var1;
        }
    };
    var3['useCardLayout'] = var2;
    return var1;
})();