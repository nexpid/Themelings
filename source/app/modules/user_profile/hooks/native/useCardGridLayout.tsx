// app/modules/user_profile/hooks/native/useCardGridLayout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var4.PROFILE_SIDE_PADDING;
    var _closure1_slot2 = var4;
    var4 = function calculateTotalGaps(arg1, arg2) {
        var2 = arg1;
        var1 = 1;
        var2 = var2 - var1;
        var1 = arg2;
        var1 = var1 * var2;
        return var1;
    };
    var _closure1_slot3 = var4;
    var4 = function calculateCardWidth(arg1, arg2, arg3) {
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
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useCardGridLayout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCardGridLayout() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var13 = var1.minCardSize;
            if(!(var13 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = 150;
case 4:
            var10 = var1.maxCardSize;
            if(!(var10 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = 180;
case 6:
            var3 = var1.gap;
            if(!(var3 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 16;
case 8:
            var14 = var1.containerWidth;
            var12 = var1.maxWidth;
            var8 = var1.sidePadding;
            if(!(var8 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot2;
case 10:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 1;
            var2 = var2[var5];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.width;
            var6 = global;
            var9 = var6.Math;
            var7 = var9.min;
            var2 = null;
            if(!(var2 != var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var14;
case 12:
            var14 = var2 != var12;
            var2 = inf;
            if(!var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var12;
case 14:
            var7 = var7.bind(var9)(var11, var2);
            var2 = 2;
            var2 = var2 * var8;
            var7 = var7 - var2;
            var9 = var6.Math;
            var8 = var9.max;
            var12 = var6.Math;
            var11 = var12.floor;
            var14 = var7 + var3;
            var2 = var13 + var3;
            var2 = var14 / var2;
            var2 = var11.bind(var12)(var2);
            var9 = var8.bind(var9)(var5, var2);
            var2 = _closure1_slot4;
            var14 = var2.bind(var4)(var5, var7, var3);
            var8 = var14 > var10;
            var2 = var5;
            var12 = var14;
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var5 < var9;
            var8 = var5;
            var2 = var8;
            var12 = var14;
            if(!var11) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var11 = var8 + 1;
            var14 = _closure1_slot4;
            var14 = var14.bind(var4)(var11, var7, var3);
            var2 = var11;
            var12 = var14;
            if(!(var14 > var10)) { _fun0001_ip = 16; continue _fun0001 }
case 19:
            var8 = var11;
            var12 = var14;
            var2 = var8;
            if(var2 < var9) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            var9 = var6.Math;
            var8 = var9.min;
            var11 = var6.Math;
            var6 = var11.max;
            var6 = var6.bind(var11)(var12, var13);
            var6 = var8.bind(var9)(var6, var10);
            var8 = var6 * var2;
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var3);
            var1 = var8 + var1;
            if(!(!(var1 > var7))) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = {};
            var1['columns'] = var2;
            var1['cardWidth'] = var6;
            var6 = var6 * var2;
            var2 = var2 - var5;
            var2 = var3 * var2;
            var2 = var6 + var2;
            var1['rowWidth'] = var2;
            var1['gap'] = var3;
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var2 = {};
            var2['columns'] = var5;
            var2['cardWidth'] = var4;
            var2['rowWidth'] = var4;
            var2['gap'] = var3;
            var1 = var2;
case 22:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();