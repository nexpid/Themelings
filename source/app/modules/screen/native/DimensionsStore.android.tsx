// app/modules/screen/native/DimensionsStore.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function computeWindowDimensions(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg3;
            var2 = arg4;
            var12 = var3.width;
            var10 = var3.height;
            var4 = var2.width;
            var5 = var2.height;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var3);
            var3 = var6.getSafeAreaInsets;
            var3 = var3.bind(var6)();
            var11 = var4;
            var7 = var5;
            if(!(var7 === var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var5;
            var7 = var4;
case 2:
            var5 = global;
            var8 = var5.Math;
            var6 = var8.min;
            var4 = var3.left;
            var12 = var12 + var4;
            var4 = var3.right;
            var4 = var12 + var4;
            var4 = var6.bind(var8)(var4, var11);
            var6 = var5.Math;
            var5 = var6.min;
            var8 = var3.top;
            var8 = var10 + var8;
            var3 = var3.bottom;
            var8 = var8 + var3;
            var10 = arg2;
            var3 = 0;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 4;
            var9 = var11[var9];
            var10 = var10.bind(var2)(var9);
            var9 = var10.getSystemKeyboardHeight;
            var3 = var9.bind(var10)();
case 4:
            var3 = var8 - var3;
            var3 = var5.bind(var6)(var3, var7);
            var5 = null;
            var5 = var5 == var1;
            var2 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var1.width;
case 6:
            if(!(var2 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var1.height;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function getDimensionsStoreState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = {};
            var5 = _closure1_slot3;
            var4 = var5.get;
            var2 = 'window';
            var14 = var4.bind(var5)(var2);
            var15 = var11;
            var2 = copyDataProperties(var15, var14);
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var6 = 2;
            var4 = var2[var6];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var7 = null;
            var5 = var7 == var4;
            var4 = undefined;
            if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var8 = var8.bind(var2)(var5);
            var5 = var8.getWindowSize;
            var4 = var5.bind(var8)();
case 11:
            var15 = var11;
            var14 = var4;
            var4 = copyDataProperties(var15, var14);
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var5.bind(var2)(var4);
            var4 = var7 == var4;
            var10 = undefined;
            if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var5 = var5.bind(var2)(var4);
            var4 = var5.getScreenSize;
            var10 = var4.bind(var5)();
case 13:
            if(!(var7 == var10)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = _closure1_slot3;
            var5 = var6.get;
            var4 = 'screen';
            var10 = var5.bind(var6)(var4);
case 15:
            var6 = var11.fontScale;
            var5 = var10.width;
            var4 = var10.height;
            var5 = var5 > var4;
            var8 = var7 == var1;
            var4 = undefined;
            if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = var1.windowDimensions;
case 17:
            var8 = var7 == var1;
            var9 = undefined;
            if(var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = var1.windowDimensionsIgnoringKeyboard;
case 19:
            var8 = _closure1_slot5;
            var14 = false;
            var16 = undefined;
            var15 = var4;
            var13 = var11;
            var12 = var10;
            var4 = var16[var8](var15, var14, var13, var12, var11);
            var14 = true;
            var15 = var9;
            var13 = var11;
            var12 = var10;
            var3 = var16[var8](var15, var14, var13, var12, var11);
            var7 = var7 == var1;
            var2 = undefined;
            if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = var1.windowDimensions;
case 21:
            if(!(var2 === var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var1.fontScale;
            if(!(var2 === var6)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var2 = var1.screenIsLandscape;
            if(!(var2 !== var5)) { _fun0002_ip = 26; continue _fun0002 }
case 23:
            var2 = {};
            var2['fontScale'] = var6;
            var2['screenIsLandscape'] = var5;
            var2['windowDimensions'] = var4;
            var2['windowDimensionsIgnoringKeyboard'] = var3;
            var1 = var2;
case 26:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function updateDimensionsStoreState() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var9 = var2.Dimensions;
    var _closure1_slot3 = var9;
    var2 = 1;
    var2 = var6[var2];
    var8 = var10.bind(var1)(var2);
    var2 = 6;
    var2 = var6[var2];
    var11 = var5.bind(var1)(var2);
    var7 = var11.create;
    var2 = function() {
        var2 = _closure1_slot6;
        var1 = undefined;
        var1 = var2.bind(var1)(var1);
        return var1;
    };
    var2 = var7.bind(var11)(var2);
    var _closure1_slot4 = var2;
    var7 = 7;
    var7 = var6[var7];
    var10 = var10.bind(var1)(var7);
    var7 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7 = var10.bind(var1)(var7);
    var7 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7 = var8.bind(var1)(var7);
    var8 = var9.addEventListener;
    var7 = 'change';
    var4 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4 = var8.bind(var9)(var7, var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/native/DimensionsStore.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();