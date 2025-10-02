// app/modules/voice_panel/native/utils/fitCardsInGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function isNewLayoutBetter(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var3 = var1.unusedSpace;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.unusedSpace;
            var3 = var1.unusedSpace;
            if(!(var5 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var2.unusedSpace;
            if(!(var4 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var1.unusedSpace;
            var3 = inf;
            if(!(var5 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var3 = var1.unusedSpace;
            if(!(var3 > var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var2.unusedSpace;
            if(!(!(var3 < var4))) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var3 = var2.unusedSpace;
            if(!(var3 > var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var1.unusedSpace;
            if(!(!(var3 < var4))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var4 = global;
            var6 = var4.Math;
            var5 = var6.abs;
            var3 = var1.unusedSpace;
            var5 = var5.bind(var6)(var3);
            var7 = var4.Math;
            var6 = var7.abs;
            var3 = var2.unusedSpace;
            var3 = var6.bind(var7)(var3);
            var7 = var4.Math;
            var6 = var7.max;
            var7 = var6.bind(var7)(var5, var3);
            var8 = var4.Math;
            var6 = var8.min;
            var6 = var6.bind(var8)(var5, var3);
            var7 = var7 - var6;
            var6 = 5000;
            if(!(!(var7 < var6))) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var3 < var5;
            return var3;
case 14:
            var7 = var4.Math;
            var6 = var7.max;
            var5 = var2.rows;
            var3 = var2.columns;
            var3 = var6.bind(var7)(var5, var3);
            var7 = var4.Math;
            var6 = var7.min;
            var5 = var2.rows;
            var2 = var2.columns;
            var2 = var6.bind(var7)(var5, var2);
            var3 = var3 - var2;
            var7 = var4.Math;
            var6 = var7.max;
            var5 = var1.rows;
            var2 = var1.columns;
            var2 = var6.bind(var7)(var5, var2);
            var6 = var4.Math;
            var5 = var6.min;
            var4 = var1.rows;
            var1 = var1.columns;
            var1 = var5.bind(var6)(var4, var1);
            var2 = var2 - var1;
            var1 = var2 !== var3;
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var3 < var2;
case 16:
            return var1;
case 13:
            var1 = true;
            return var1;
case 10:
            var1 = false;
            return var1;
case 5:
            var1 = true;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/utils/fitCardsInGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fitCardsInGrid(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var16 = var1.cardCount;
            var15 = var1.gutterSize;
            var14 = var1.availableWidth;
            var13 = var1.availableHeight;
            var4 = {'columns': 1, 'rows': 0, 'cardSize': 0, 'overscroll': 0, 'unusedSpace': inf};
            var12 = 1;
            var11 = 0;
            var17 = var12 <= var16;
            var10 = undefined;
            var9 = 'unusedSpace';
            var8 = 'overscroll';
            var7 = 'cardSize';
            var5 = global;
            var3 = var12;
            var1 = undefined;
            var2 = var4;
            if(!var17) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var17 = var3 - var12;
            var17 = var17 * var15;
            var17 = var14 - var17;
            var17 = var17 / var3;
            var20 = var16 % var3;
            var21 = var5.Math;
            var19 = var21.floor;
            var18 = var16 / var3;
            var19 = var19.bind(var21)(var18);
            var18 = 0;
            if(!(var20 > var18)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var18 = var12;
case 20:
            var18 = var19 + var18;
            var22 = {};
            var23 = var17 * var3;
            var21 = var14 * var13;
            var19 = var3 - var12;
            var20 = var19 * var15;
            var19 = var18 - var12;
            var24 = var19 * var15;
            var19 = var17 * var18;
            var19 = var19 + var24;
            var20 = var23 + var20;
            var20 = var20 * var19;
            var20 = var21 - var20;
            var22['unusedSpace'] = var20;
            var22['columns'] = var3;
            var19 = var13 - var19;
            var22['overscroll'] = var19;
            var22['rows'] = var18;
            var22['cardSize'] = var17;
            var17 = _closure1_slot0;
            var17 = var17.bind(var10)(var22, var4);
            var20 = var4;
            if(!var17) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var20 = var22;
case 22:
            var18 = var22.overscroll;
            var17 = var20;
            if(!(var18 < var11)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var18 = var22.rows;
            var18 = var18 - var12;
            var18 = var18 * var15;
            var19 = var13 - var18;
            var18 = var22.rows;
            var19 = var19 / var18;
            var18 = var22.rows;
            var21 = var19 * var18;
            var18 = var22.rows;
            var18 = var18 - var12;
            var18 = var18 * var15;
            var21 = var21 + var18;
            var18 = {};
            var26 = var18;
            var25 = var22;
            var23 = copyDataProperties(var26, var25);
            var23 = var22.columns;
            var24 = var19 * var23;
            var22 = var22.columns;
            var22 = var22 - var12;
            var22 = var22 * var15;
            var23 = var14 * var13;
            var22 = var24 + var22;
            var22 = var22 * var21;
            var22 = var23 - var22;
            var18[var9] = var22;
            var21 = var13 - var21;
            var18[var8] = var21;
            var18[var7] = var19;
            var19 = _closure1_slot0;
            var19 = var19.bind(var10)(var18, var20);
            var17 = var20;
            var1 = var18;
            if(!var19) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var17 = var18;
            var1 = var17;
case 24:
            var3 = var3 + 1;
            var4 = var17;
            var2 = var4;
            if(var3 <= var16) { _fun0002_ip = 19; continue _fun0002 }
case 18:
            var1 = {};
            var3 = var2.columns;
            var1['columns'] = var3;
            var2 = var2.cardSize;
            var1['cardSize'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();