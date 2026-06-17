// app/modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var10['padding'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function DevToolsPerformanceTestingScreen() {
        var2 = _closure1_slot5;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 5;
        var2 = var12[var2];
        var3 = var11.bind(var4)(var2);
        var2 = var3.useNavigation;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var9 = _closure1_slot1;
        var2 = 6;
        var2 = var12[var2];
        var2 = var9.bind(var4)(var2);
        var6 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = var5.container;
        var1['style'] = var5;
        var5 = {};
        var8 = var6.bottom;
        var6 = 4;
        var6 = var12[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.space;
        var6 = var6.PX_16;
        var6 = var8 + var6;
        var5['paddingBottom'] = var6;
        var1['contentContainerStyle'] = var5;
        var5 = 7;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var8 = true;
        var5['hasIcons'] = var8;
        var8 = global;
        var10 = var8.Object;
        var9 = var10.entries;
        var8 = 8;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.PerformanceTestingScreens;
        var9 = var9.bind(var10)(var8);
        var8 = var9.map;
        var7 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var2 = var6[Symbol.iterator];
                var6 = var2().next;
                var8 = undefined;
                var3 = undefined;
                var5 = undefined;
                var7 = var6().value;
                var10 = var2;
                var10 = var10 === var8;
                var3 = var10;
                if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var7;
case 2:
                var7 = var5;
                var4 = var7;
                var _closure3_slot0 = var7;
                var5 = undefined;
                var7 = var3;
                if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = var6().value;
                var7 = var2;
                var7 = var7 === var8;
                var3 = var7;
                if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var5 = var6;
case 4: // try_start_0
                var14 = var5.headerTitle;
                var12 = var5.Icon;
case 7: // try_end0
                var5 = var3;
                if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2.return();
case 8:
                var7 = _closure1_slot4;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 9;
                var5 = var13[var10];
                var5 = var11.bind(var8)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var5['label'] = var14;
                var10 = var13[var10];
                var10 = var11.bind(var8)(var10);
                var10 = var10.TableRow;
                var11 = var10.Icon;
                var10 = {};
                var10['IconComponent'] = var12;
                var10 = var7.bind(var8)(var11, var10);
                var5['icon'] = var10;
                var10 = true;
                var5['arrow'] = var10;
                var9 = function onPress() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var3 = var2.push;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.navigateToDevTools;
                        var2 = {};
                        var5 = _closure3_slot0;
                        var2['screenKey'] = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun0002_ip = 12; continue _fun0002;
case 10:
                        var3 = _closure2_slot0;
                        var2 = var3.push;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5['onPress'] = var9;
                var4 = var7.bind(var8)(var6, var5, var4);
                return var4;
case 13: // catch_target0
                CatchBlockStart(arg_register=0);
                _fun0001_ip = 14; continue _fun0001;
case 15:
                CatchBlockStart(arg_register=0);
case 14:
                if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var2.return();
case 16:
                throw var1;
            }
        };
        var7 = var8.bind(var9)(var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();