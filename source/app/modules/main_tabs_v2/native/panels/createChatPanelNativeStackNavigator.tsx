// app/modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.createNavigatorFactory;
    var2 = function ChatPanelNativeStackNavigator(arg1) {
        var4 = arg1;
        var15 = var4.id;
        var14 = var4.initialRouteName;
        var13 = var4.children;
        var12 = var4.screenListeners;
        var10 = var4.screenOptions;
        var3 = {'id': 0, 'initialRouteName': 0, 'children': 0, 'screenListeners': 0, 'screenOptions': 0};
        var17 = null;
        var18 = var3;
        var1 = silentSetPrototypeOf(var18, var17);
        var18 = {};
        var17 = var4;
        var16 = var3;
        var7 = copyDataProperties(var18, var17, var16);
        var6 = _closure1_slot0;
        var11 = _closure1_slot1;
        var3 = 2;
        var5 = var11[var3];
        var4 = undefined;
        var9 = var6.bind(var4)(var5);
        var8 = var9.useNavigationBuilder;
        var3 = var11[var3];
        var3 = var6.bind(var4)(var3);
        var5 = var3.StackRouter;
        var3 = {};
        var3['id'] = var15;
        var3['initialRouteName'] = var14;
        var3['children'] = var13;
        var3['screenListeners'] = var12;
        var3['screenOptions'] = var10;
        var3 = var8.bind(var9)(var5, var3);
        var12 = var3.state;
        var _closure2_slot0 = var12;
        var5 = var3.descriptors;
        var _closure2_slot1 = var5;
        var9 = var3.navigation;
        var _closure2_slot2 = var9;
        var3 = var3.NavigationContent;
        var13 = _closure1_slot2;
        var10 = var13.useMemo;
        var8 = new Array(2);
        var8[0] = var12;
        var8[1] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = {};
                var1 = _closure2_slot0;
                var21 = var3;
                var20 = var1;
                var2 = copyDataProperties(var21, var20);
                var20 = var1.routes;
                var4 = new Array(0);
                var1 = 0;
                var21 = var4;
                var19 = 0;
                var2 = arraySpread(var21, var20, var19);
                var2 = 'routes';
                var3[var2] = var4;
                var13 = new Array(0);
                var4 = new Array(0);
                var2 = {};
                var5 = var3.routes;
                var5 = var5.length;
                var5 = var1 < var5;
                var11 = 3;
                var10 = undefined;
                var9 = null;
                var7 = 0;
                var6 = 0;
                var8 = 0;
                if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var3.routes;
                var16 = var5[var6];
                var15 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var11];
                var15 = var15.bind(var10)(var5);
                var5 = var15.coerceChannelRoute;
                var5 = var5.bind(var15)(var16);
                if(!(var9 == var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var4.push;
                var5 = var5.bind(var4)(var16);
                var15 = var16.key;
                var5 = _closure2_slot1;
                var5 = var15 in var5;
                var15 = var7;
                if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var17 = var16.key;
                var18 = _closure2_slot1;
                var5 = var16.key;
                var5 = var18[var5];
                var2[var17] = var5;
                var15 = var7;
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var5 = var13.push;
                var5 = var5.bind(var13)(var16);
                var5 = var3.index;
                var15 = var7;
                if(!(var6 <= var5)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
                var15 = var7 + 1;
case 6:
                var6 = var6 + 1;
                var5 = var3.routes;
                var5 = var5.length;
                var7 = var15;
                var8 = var7;
                if(var6 < var5) { _fun0001_ip = 3; continue _fun0001 }
case 2:
                var5 = global;
                var7 = var5.Math;
                var6 = var7.max;
                var5 = var3.index;
                var5 = var5 - var8;
                var5 = var6.bind(var7)(var1, var5);
                var3['index'] = var5;
                var3['routes'] = var4;
                var4 = var3.routes;
                var4 = var4.length;
                if(!(var1 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var5 = var3.index;
                var4 = var3.routes;
                var4 = var4.length;
                if(!(var5 >= var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var4 = var3.routes;
                var5 = var4.length;
                var4 = 1;
                var4 = var5 - var4;
                var3['index'] = var4;
                _fun0001_ip = 11; continue _fun0001;
case 9:
                var3['index'] = var1;
case 11:
                var1 = {};
                var1['state'] = var3;
                var1['filteredDescriptors'] = var2;
                return var1;
            }
        };
        var5 = var10.bind(var13)(var5, var8);
        var10 = var5.state;
        var _closure2_slot3 = var10;
        var8 = var5.filteredDescriptors;
        var12 = var13.useEffect;
        var5 = new Array(3);
        var5[0] = var9;
        var14 = var10.index;
        var5[1] = var14;
        var14 = var10.key;
        var5[2] = var14;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                var5 = null;
                var3 = var5 == var1;
                var1 = undefined;
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = _closure2_slot2;
                var3 = var3.addListener;
                var3 = var5 == var3;
                var1 = undefined;
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                var5 = _closure2_slot2;
                var4 = var5.addListener;
                var3 = 'tabPress';
                var2 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var3 = _closure2_slot2;
                    var1 = var3.isFocused;
                    var1 = var1.bind(var3)();
                    var _closure4_slot1 = var1;
                    var1 = global;
                    var3 = var1.requestAnimationFrame;
                    var1 = undefined;
                    var2 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.index;
                            var1 = 0;
                            var1 = var2 > var1;
                            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var1 = _closure4_slot1;
case 16:
                            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                            var2 = _closure4_slot0;
                            var2 = var2.defaultPrevented;
                            var1 = !var2;
case 18:
                            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                            var3 = _closure2_slot2;
                            var2 = var3.dispatch;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var5 = 2;
                            var6 = var6[var5];
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var6 = var5.StackActions;
                            var5 = var6.popToTop;
                            var8 = var5.bind(var6)();
                            var9 = var1;
                            var5 = copyDataProperties(var9, var8);
                            var4 = _closure2_slot3;
                            var5 = var4.key;
                            var4 = 'target';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var2);
case 13:
                return var1;
            }
        };
        var2 = var12.bind(var13)(var2, var5);
        var2 = _closure1_slot3;
        var1 = {};
        var5 = 4;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.NativeStackView;
        var5 = {};
        var18 = var5;
        var17 = var7;
        var7 = copyDataProperties(var18, var17);
        var7 = 'state';
        var5[var7] = var10;
        var7 = 'navigation';
        var5[var7] = var9;
        var7 = 'descriptors';
        var5[var7] = var8;
        var5 = var2.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var2.bind(var4)(var3, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();