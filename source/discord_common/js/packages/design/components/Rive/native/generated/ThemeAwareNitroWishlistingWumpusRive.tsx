// discord_common/js/packages/design/components/Rive/native/generated/ThemeAwareNitroWishlistingWumpusRive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['fallback', 'artboard', 'stateMachine', 'defaultViewModelInstance', 'dataBinding', 'onDataBindingChange'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = {'reducedMotion': 'boolean', 'logoColor': 'color'};
    var4['Nitro Wishlist'] = var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = ['Instance'];
    var4['Nitro Wishlist'] = var8;
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = function NitroWishlistBindings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.instance;
            var15 = var1.reducedMotionEnabled;
            var9 = var1.dataBinding;
            var2 = var1.onDataBindingChange;
            var7 = var1.playIfNeeded;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var6 = var5[var1];
            var3 = undefined;
            var11 = var4.bind(var3)(var6);
            var10 = var11.useBooleanBinding;
            var17 = 'reducedMotion';
            var18 = var11;
            var16 = var8;
            var14 = undefined;
            var13 = var7;
            var6 = var18[var10](var17, var16, var15, var14, var13, var12);
            var1 = var5[var1];
            var6 = var4.bind(var3)(var1);
            var5 = var6.useColorBinding;
            var1 = null;
            var10 = var1 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var9.logoColor;
case 2:
            var9 = var1 == var2;
            var3 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.logoColor;
case 4:
            var17 = 'logoColor';
            var18 = var6;
            var16 = var8;
            var15 = var4;
            var14 = var3;
            var13 = var7;
            var2 = var18[var5](var17, var16, var15, var14, var13, var12);
            return var1;
        }
    };
    var4['Nitro Wishlist'] = var8;
    var _closure1_slot9 = var4;
    var8 = var7.forwardRef;
    var4 = function ThemeAwareNitroWishlistingWumpusRiveInner(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.fallback;
            var2 = var5.artboard;
            var10 = 'Nitro Wishlist';
            var4 = undefined;
            if(!(var4 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var10 = var2;
case 6:
            var _closure2_slot0 = var10;
            var7 = var5.stateMachine;
            var2 = var5.defaultViewModelInstance;
            var8 = 'Instance';
            if(!(var4 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = var2;
case 8:
            var12 = var5.dataBinding;
            var _closure2_slot1 = var12;
            var11 = var5.onDataBindingChange;
            var _closure2_slot2 = var11;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var5 = var3.bind(var4)(var5, var2);
            var6 = _closure1_slot5;
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var12;
            var2[2] = var11;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var1 = _closure2_slot0;
                    var5 = var4[var1];
                    var1 = null;
                    var4 = var1 == var5;
                    if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 7:
                    var4 = _closure1_slot6;
                    var3 = {};
                    var8 = arg1;
                    var9 = var3;
                    var6 = copyDataProperties(var9, var8);
                    var7 = _closure2_slot1;
                    var6 = 'dataBinding';
                    var3[5] = var7;
                    var6 = _closure2_slot2;
                    var2 = 'onDataBindingChange';
                    var3[1] = var6;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var5, var3);
case 10:
                    return var1;
                }
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 3;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseRive;
            var1 = {};
            var11 = arg2;
            var1['ref'] = var11;
            var12 = _closure1_slot1;
            var11 = 4;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var1['src'] = var11;
            var1['artboard'] = var10;
            var10 = _closure1_slot7;
            var1['artboardProperties'] = var10;
            var9 = _closure1_slot8;
            var1['artboardViewModelInstances'] = var9;
            var1['defaultViewModelInstance'] = var8;
            var1['stateMachine'] = var7;
            var1['renderDataBinding'] = var6;
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.forwardRef;
    var2 = function ThemeAwareNitroWishlistingWumpusRiveWithBoundary(arg1, arg2) {
        var7 = arg1;
        var4 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.RiveErrorBoundary;
        var1 = {};
        var6 = var7.fallback;
        var1['fallback'] = var6;
        var6 = _closure1_slot10;
        var5 = {};
        var8 = arg2;
        var5['ref'] = var8;
        var10 = var5;
        var9 = var7;
        var7 = copyDataProperties(var10, var9);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/generated/ThemeAwareNitroWishlistingWumpusRive.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ThemeAwareNitroWishlistingWumpusRive'] = var2;
    return var1;
})();