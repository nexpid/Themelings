// discord_common/js/packages/flash-list/index.js
module.exports = (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var14 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var14;
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
        var9 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var14.bind(var1)(var4);
        var4 = var4.ScrollView;
        var4 = 2;
        var4 = var6[var4];
        var4 = var14.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot2 = var4;
        var7 = var9.forwardRef;
        var4 = function(arg1, arg2) {
            var4 = _closure1_slot2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var5 = arg2;
            var1['ref'] = var5;
            var6 = arg1;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var7 = var7.bind(var9)(var4);
        var8 = 4;
        var4 = var6[var8];
        var11 = var5.bind(var1)(var4);
        var10 = var11.createAnimatedComponent;
        var13 = 3;
        var4 = var6[var13];
        var4 = var14.bind(var1)(var4);
        var4 = var4.FlashList;
        var4 = var10.bind(var11)(var4);
        var _closure1_slot3 = var4;
        var10 = var9.forwardRef;
        var4 = function(arg1, arg2) {
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = {};
            var1 = arg2;
            var2['ref'] = var1;
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var4 = var10.bind(var9)(var4);
        var8 = var6[var8];
        var11 = var5.bind(var1)(var8);
        var10 = var11.createAnimatedComponent;
        var8 = var6[var13];
        var8 = var14.bind(var1)(var8);
        var8 = var8.MasonryFlashList;
        var8 = var10.bind(var11)(var8);
        var _closure1_slot4 = var8;
        var8 = var9.forwardRef;
        var2 = function(arg1, arg2) {
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
            var2 = {};
            var5 = arg2;
            var2['ref'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 5;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var5.BottomSheetScrollView;
            var2['renderScrollComponent'] = var5;
            var7 = arg1;
            var8 = var2;
            var5 = copyDataProperties(var8, var7);
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = var8.bind(var9)(var2);
        var8 = 6;
        var8 = var6[var8];
        var16 = var14.bind(var1)(var8);
        var15 = var16.fileFinishedImporting;
        var8 = '../discord_common/js/packages/flash-list/index.js';
        var8 = var15.bind(var16)(var8);
        var8 = var6[var13];
        var11 = var14.bind(var1)(var8);
        for(var8 in var11)
case 2:
        {
case 3:
            var16 = var8;
            var15 = var6[var13];
            var15 = var14.bind(var1)(var15);
            var15 = var15[var16];
            var3[var16] = var15;
            _fun0001_ip = 2; continue _fun0001;
        }
case 4:
        var3['FlashList'] = var7;
        var3['AnimatedFlashList'] = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var3['BottomSheetFlashList'] = var4;
        var3['BottomSheetMasonryFlashList'] = var2;
        return var1;
    }
})();