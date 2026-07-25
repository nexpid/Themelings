// discord_common/js/packages/flash-list/index.js
module.exports = (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var16 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var15 = dependencyMap;
        var _closure1_slot0 = var16;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var15;
        var1 = function useModalDismissGuardRefreshControl(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = true;
                    if(!(var2 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 2:
                    var1 = _closure2_slot1;
                    _fun0002_ip = 6; continue _fun0002;
case 5:
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot4;
                    var2 = {'refreshing': false, 'onRefresh': null, 'tintColor': 'transparent'};
                    var6 = _closure1_slot7;
                    var2['onRefresh'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot10 = var1;
        var1 = global;
        var7 = var1.Object;
        var6 = var7.defineProperty;
        var4 = {};
        var5 = true;
        var4['value'] = var5;
        var1 = '__esModule';
        var1 = var6.bind(var7)(var3, var1, var4);
        var1 = 0;
        var6 = var15[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var10 = var4.bind(var1)(var6);
        var _closure1_slot3 = var10;
        var4 = 1;
        var4 = var15[var4];
        var4 = var16.bind(var1)(var4);
        var4 = var4.RefreshControl;
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var15[var4];
        var4 = var16.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var15[var4];
        var6 = var16.bind(var1)(var4);
        var4 = var6.isAndroid;
        var4 = var4.bind(var6)();
        var8 = undefined;
        if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var4 = {};
        var4['disabled'] = var5;
        var8 = var4;
case 7:
        var _closure1_slot6 = var8;
        var4 = function noop() {
            var1 = undefined;
            return var1;
        };
        var _closure1_slot7 = var4;
        var5 = var10.forwardRef;
        var4 = function(arg1, arg2) {
            var4 = _closure1_slot5;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var5 = _closure1_slot6;
            var1['maintainVisibleContentPosition'] = var5;
            var5 = arg2;
            var1['ref'] = var5;
            var6 = arg1;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var7 = var5.bind(var10)(var4);
        var4 = 5;
        var5 = var15[var4];
        var11 = var9.bind(var1)(var5);
        var6 = var11.createAnimatedComponent;
        var14 = 4;
        var5 = var15[var14];
        var5 = var16.bind(var1)(var5);
        var5 = var5.FlashList;
        var5 = var6.bind(var11)(var5);
        var _closure1_slot8 = var5;
        var6 = var10.forwardRef;
        var5 = function(arg1, arg2) {
            var4 = _closure1_slot5;
            var3 = _closure1_slot8;
            var2 = {};
            var1 = _closure1_slot6;
            var2['maintainVisibleContentPosition'] = var1;
            var1 = arg2;
            var2['ref'] = var1;
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var6 = var6.bind(var10)(var5);
        var11 = var10.forwardRef;
        var5 = function(arg1, arg2) {
            var3 = arg1;
            var1 = var3.preventNativeModalDismiss;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['preventNativeModalDismiss'] = var1;
            var10 = {};
            var9 = var3;
            var8 = var2;
            var9 = copyDataProperties(var10, var9, var8);
            var4 = _closure1_slot5;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var7 = arg2;
            var1['ref'] = var7;
            var6 = _closure1_slot6;
            var1['maintainVisibleContentPosition'] = var6;
            var6 = true;
            var1['masonry'] = var6;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5 = var11.bind(var10)(var5);
        var4 = var15[var4];
        var11 = var9.bind(var1)(var4);
        var9 = var11.createAnimatedComponent;
        var4 = var15[var14];
        var4 = var16.bind(var1)(var4);
        var4 = var4.FlashList;
        var4 = var9.bind(var11)(var4);
        var _closure1_slot9 = var4;
        var9 = var10.forwardRef;
        var4 = function(arg1, arg2) {
            var5 = arg1;
            var3 = var5.preventNativeModalDismiss;
            var2 = var5.refreshControl;
            var1 = null;
            var4 = Object.create(var1);
            var1 = 0;
            var4['preventNativeModalDismiss'] = var1;
            var4['refreshControl'] = var1;
            var11 = {};
            var10 = var5;
            var9 = var4;
            var5 = copyDataProperties(var11, var10, var9);
            var1 = _closure1_slot10;
            var4 = undefined;
            var6 = var1.bind(var4)(var3, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = arg2;
            var1['ref'] = var8;
            var7 = _closure1_slot6;
            var1['maintainVisibleContentPosition'] = var7;
            var11 = var1;
            var10 = var5;
            var5 = copyDataProperties(var11, var10);
            var5 = 'refreshControl';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var9.bind(var10)(var4);
        var9 = var10.forwardRef;
        var2 = function(arg1, arg2) {
            var5 = arg1;
            var3 = var5.preventNativeModalDismiss;
            var2 = var5.refreshControl;
            var1 = null;
            var4 = Object.create(var1);
            var1 = 0;
            var4['preventNativeModalDismiss'] = var1;
            var4['refreshControl'] = var1;
            var12 = {};
            var11 = var5;
            var10 = var4;
            var5 = copyDataProperties(var12, var11, var10);
            var1 = _closure1_slot10;
            var4 = undefined;
            var6 = var1.bind(var4)(var3, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = arg2;
            var1['ref'] = var8;
            var8 = _closure1_slot6;
            var1['maintainVisibleContentPosition'] = var8;
            var8 = true;
            var1['masonry'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.BottomSheetScrollView;
            var1['renderScrollComponent'] = var7;
            var12 = var1;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var5 = 'refreshControl';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var9.bind(var10)(var2);
        var9 = 8;
        var9 = var15[var9];
        var18 = var16.bind(var1)(var9);
        var17 = var18.fileFinishedImporting;
        var9 = '../discord_common/js/packages/flash-list/index.js';
        var9 = var17.bind(var18)(var9);
        var9 = var15[var14];
        var12 = var16.bind(var1)(var9);
        for(var9 in var12)
case 9:
        {
case 10:
            var18 = var9;
            var17 = var15[var14];
            var17 = var16.bind(var1)(var17);
            var17 = var17[var18];
            var3[var18] = var17;
            _fun0001_ip = 9; continue _fun0001;
        }
case 11:
        var3['defaultMVCPConfig'] = var8;
        var3['FlashList'] = var7;
        var3['AnimatedFlashList'] = var6;
        var3['MasonryFlashList'] = var5;
        var3['BottomSheetFlashList'] = var4;
        var3['BottomSheetMasonryFlashList'] = var2;
        return var1;
    }
})();