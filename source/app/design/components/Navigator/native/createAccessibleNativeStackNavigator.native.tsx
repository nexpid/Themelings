// app/design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useAccessibilityPatchedDescriptors(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useAccessibilityNativeStackOptions;
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = {};
                var8 = _closure2_slot0;
                var4 = 'options';
                var3 = 'none';
                for(var5 in var8)
case 4:
                {
case 5:
                    var11 = var5;
                    var10 = _closure2_slot0;
                    var14 = var10[var11];
                    var10 = var14.options;
                    var12 = var10.animation;
                    var10 = var14;
                    if(!(var3 !== var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var12 = {};
                    var16 = var12;
                    var15 = var14;
                    var13 = copyDataProperties(var16, var15);
                    var13 = {};
                    var15 = var14.options;
                    var16 = var13;
                    var14 = copyDataProperties(var16, var15);
                    var15 = _closure2_slot1;
                    var16 = var13;
                    var14 = copyDataProperties(var16, var15);
                    var12[3] = var13;
                    var10 = var12;
case 6:
                    var2[var11] = var10;
                    _fun0001_ip = 4; continue _fun0001;
                }
case 8:
                return var2;
case 2:
                var1 = _closure2_slot0;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var8 = var6.bind(var1)(var5);
    var5 = var8.createNavigatorFactory;
    var4 = function AccessibleNativeStackNavigator(arg1) {
        var3 = arg1;
        var14 = var3.id;
        var13 = var3.initialRouteName;
        var12 = var3.children;
        var10 = var3.screenListeners;
        var9 = var3.screenOptions;
        var2 = {'id': 0, 'initialRouteName': 0, 'children': 0, 'screenListeners': 0, 'screenOptions': 0};
        var16 = null;
        var17 = var2;
        var1 = silentSetPrototypeOf(var17, var16);
        var17 = {};
        var16 = var3;
        var15 = var2;
        var7 = copyDataProperties(var17, var16, var15);
        var6 = _closure1_slot0;
        var11 = _closure1_slot1;
        var2 = 3;
        var3 = var11[var2];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var5 = var8.useNavigationBuilder;
        var2 = var11[var2];
        var2 = var6.bind(var4)(var2);
        var3 = var2.StackRouter;
        var2 = {};
        var2['id'] = var14;
        var2['initialRouteName'] = var13;
        var2['children'] = var12;
        var2['screenListeners'] = var10;
        var2['screenOptions'] = var9;
        var2 = var5.bind(var8)(var3, var2);
        var10 = var2.state;
        var5 = var2.descriptors;
        var9 = var2.navigation;
        var3 = var2.NavigationContent;
        var2 = _closure1_slot4;
        var8 = var2.bind(var4)(var5);
        var2 = _closure1_slot3;
        var1 = {};
        var5 = 4;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.NativeStackView;
        var5 = {};
        var17 = var5;
        var16 = var7;
        var7 = copyDataProperties(var17, var16);
        var7 = 'state';
        var5[6] = var10;
        var7 = 'navigation';
        var5[6] = var9;
        var7 = 'descriptors';
        var5[6] = var8;
        var5 = var2.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var2.bind(var4)(var3, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useAccessibilityPatchedDescriptors'] = var2;
    return var1;
})();