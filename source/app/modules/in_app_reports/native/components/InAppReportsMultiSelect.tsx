// app/modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function CheckboxRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.showDivider;
            var12 = var1.onPress;
            var19 = var1.selected;
            var22 = var1.title;
            var26 = var1.subtitle;
            var1 = _closure1_slot6;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.rowContainer;
            var1['style'] = var5;
            var11 = _closure1_slot4;
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 5;
            var5 = var6[var5];
            var5 = var18.bind(var4)(var5);
            var9 = var5.PressableOpacity;
            var5 = {};
            var5['onPress'] = var12;
            var12 = 'checkbox';
            var5['accessibilityRole'] = var12;
            var12 = {};
            var12['selected'] = var19;
            var5['accessibilityState'] = var12;
            var14 = _closure1_slot5;
            var13 = _closure1_slot3;
            var12 = {};
            var15 = var10.row;
            var12['style'] = var15;
            var17 = _closure1_slot5;
            var16 = _closure1_slot3;
            var15 = {};
            var20 = var10.optionText;
            var15['style'] = var20;
            var20 = _closure1_slot4;
            var27 = 6;
            var6 = var6[var27];
            var6 = var18.bind(var4)(var6);
            var18 = var6.Text;
            var6 = {};
            var21 = 'text-md/bold';
            var6['variant'] = var21;
            var24 = global;
            var21 = var24.HermesInternal;
            var21 = var21.concat;
            var25 = '';
            var21 = var21.bind(var25)(var22);
            var6['children'] = var21;
            var6 = var20.bind(var4)(var18, var6);
            var18 = new Array(2);
            var18[0] = var6;
            var6 = null;
            var21 = var6 != var26;
            var20 = null;
            if(!var21) { _fun0001_ip = 308; continue _fun0001 }
 244:
            var23 = _closure1_slot4;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var27];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {};
            var27 = 'text-md/normal';
            var21['variant'] = var27;
            var24 = var24.HermesInternal;
            var24 = var24.concat;
            var24 = var24.bind(var25)(var26);
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
 308:
            var18[1] = var20;
            var15['children'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot4;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 7;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['selected'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5['children'] = var12;
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var12 = _closure1_slot4;
            var11 = _closure1_slot3;
            var9 = {};
            var13 = var10.flex;
            var9['style'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var5[1] = var9;
            var6 = null;
            if(!var8) { _fun0001_ip = 459; continue _fun0001 }
 433:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var10.divider;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 459:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var10 = 1;
    var4 = var6[var10];
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'flex': 1, 'alignSelf': 'stretch', 'marginBottom': 16};
    var7['container'] = var4;
    var4 = {};
    var4['flex'] = var10;
    var7['flex'] = var4;
    var4 = {'minHeight': 48, 'marginBottom': 13};
    var7['rowContainer'] = var4;
    var4 = 8;
    var10 = {'marginHorizontal': 16, 'paddingTop': 14, 'marginBottom': 8, 'flexDirection': 'row', 'alignSelf': 'stretch'};
    var7['row'] = var10;
    var10 = {'flex': 1, 'lineHeight': 20, 'marginEnd': 8};
    var7['optionText'] = var10;
    var10 = {'alignSelf': 'stretch', 'marginStart': 16, 'height': 1};
    var11 = 4;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var7['divider'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MultiSelect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.element;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var1 = var1.state;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot6;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 114; continue _fun0002 }
 48:
            var8 = var3.type;
            var4 = 'checkbox';
            if(!(var4 === var8)) { _fun0002_ip = 114; continue _fun0002 }
 61:
            var8 = var3.data;
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var8 = arg2;
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var3 = var2;
                    var5 = undefined;
                    var3 = var3 === var5;
                    var9 = undefined;
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
 29:
                    var9 = var1;
 32:
                    var _closure3_slot0 = var9;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 66; continue _fun0003 }
 41:
                    var10 = var4().value;
                    var1 = var2;
                    var1 = var1 === var5;
                    var6 = undefined;
                    var3 = var1;
                    if(var1) { _fun0003_ip = 66; continue _fun0003 }
 60:
                    var6 = var10;
                    var3 = var1;
 66:
                    var _closure3_slot1 = var6;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 100; continue _fun0003 }
 75:
                    var10 = var4().value;
                    var4 = var2;
                    var4 = var4 === var5;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0003_ip = 100; continue _fun0003 }
 94:
                    var1 = var10;
                    var3 = var4;
 100:
                    if(var3) { _fun0003_ip = 106; continue _fun0003 }
 103:
                    var2.return();
 106:
                    var2 = arg3;
                    var11 = var2.length;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var10 = 1;
                    var10 = var11 - var10;
                    var10 = var8 < var10;
                    var2['showDivider'] = var10;
                    var7 = function onPress() {
                        var4 = _closure2_slot0;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var9 in var7;
                    var2['selected'] = var7;
                    var2['title'] = var6;
                    var2['subtitle'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '';
                    var1 = '+button';
                    var1 = var7.bind(var6)(var8, var1);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 114:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();