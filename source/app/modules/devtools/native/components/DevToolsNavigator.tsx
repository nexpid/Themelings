// app/modules/devtools/native/components/DevToolsNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var8 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.createNativeStackNavigator;
    var4 = var4.bind(var7)();
    var _closure1_slot6 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.screenKey;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useAccessibilityNativeStackOptions;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var3 = _closure1_slot5;
            var1 = _closure1_slot6;
            var2 = var1.Navigator;
            var1 = {};
            var5 = null;
            var9 = var5 != var8;
            var10 = 'home';
            var5 = var10;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var8;
case 2:
            var1['initialRouteName'] = var5;
            var5 = function screenOptions(arg1) {
                var1 = arg1;
                var4 = var1.navigation;
                var1 = {};
                var2 = function headerTitle(arg1) {
                    var3 = arg1;
                    var6 = var3.children;
                    var1 = null;
                    var2 = Object.create(var1);
                    var1 = 0;
                    var2['children'] = var1;
                    var9 = {};
                    var8 = var3;
                    var7 = var2;
                    var8 = copyDataProperties(var9, var8, var7);
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.GenericHeaderTitle;
                    var1 = {};
                    var1['title'] = var6;
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerTitle'] = var2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getRenderModalCloseImage;
                var2 = var2.bind(var3)(var4);
                var1['headerLeft'] = var2;
                var2 = 'center';
                var1['headerTitleAlign'] = var2;
                var6 = _closure2_slot0;
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                return var1;
            };
            var1['screenOptions'] = var5;
            var9 = _closure1_slot4;
            var5 = _closure1_slot6;
            var8 = var5.Screen;
            var5 = {};
            var5['name'] = var10;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var10 = 6;
            var10 = var11[var10];
            var10 = var12.bind(var4)(var10);
            var5['component'] = var10;
            var10 = function options() {
                var1 = {};
                var2 = function headerTitle() {
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var1 = {};
                    var5 = 'row';
                    var1['flexDirection'] = var5;
                    var2['style'] = var1;
                    var8 = _closure1_slot4;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 7;
                    var5 = var12[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.HammerIcon;
                    var5 = {};
                    var9 = 'sm';
                    var5['size'] = var9;
                    var6 = var8.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = 8;
                    var6 = var12[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-primary', 'children': 'DevTools'};
                    var9 = {};
                    var11 = _closure1_slot1;
                    var10 = 9;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.spacing;
                    var10 = var10.PX_8;
                    var9['marginLeft'] = var10;
                    var6['style'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['headerTitle'] = var2;
                var2 = 'DevTools';
                var1['title'] = var2;
                return var1;
            };
            var5['options'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = global;
            var9 = var8.Object;
            var8 = var9.entries;
            var10 = _closure1_slot0;
            var7 = 10;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.DevToolsScreens;
            var8 = var8.bind(var9)(var7);
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var7 = var6().value;
                    var11 = var2;
                    var11 = var11 === var8;
                    var3 = var11;
                    if(var11) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var7;
case 4:
                    var4 = var5;
                    var5 = undefined;
                    var7 = var3;
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var5 = var6;
case 6: // try_start_0
                    var6 = var5.headerTitle;
                    var _closure3_slot0 = var6;
                    var10 = var5.render;
case 9: // try_end0
                    var5 = var3;
                    if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2.return();
case 10:
                    var7 = _closure1_slot4;
                    var5 = _closure1_slot6;
                    var6 = var5.Screen;
                    var5 = {};
                    var5['name'] = var4;
                    var5['children'] = var10;
                    var9 = function options() {
                        var1 = {};
                        var2 = _closure3_slot0;
                        var1['title'] = var2;
                        return var1;
                    };
                    var5['options'] = var9;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var4;
case 12: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0002_ip = 13; continue _fun0002;
case 14:
                    CatchBlockStart(arg_register=0);
case 13:
                    if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2.return();
case 15:
                    throw var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/DevToolsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function navigateToDevTools() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = {};
case 17:
            var2 = var2.screenKey;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var3 = var6.hideActionSheet;
            var3 = var3.bind(var6)();
            var3 = 12;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.pushLazy;
            var4 = {};
            var4['screenKey'] = var2;
            var3 = function() {
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = _closure1_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = 'DevToolsNavigator';
            var2 = var5.bind(var6)(var3, var4, var2);
            return var1;
        }
    };
    var3['navigateToDevTools'] = var2;
    return var1;
})();