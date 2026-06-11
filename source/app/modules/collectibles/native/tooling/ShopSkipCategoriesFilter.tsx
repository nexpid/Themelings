// app/modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var4 = var4.Pressable;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_12;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginBottom'] = var12;
    var4['label'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var4['stepperContainer'] = var9;
    var9 = {'width': 32, 'height': 32, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var10;
    var4['stepperButton'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['stepperButtonDisabled'] = var9;
    var9 = {'minWidth': 40, 'textAlign': 'center'};
    var4['valueText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot7;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 6;
            var1 = var8[var1];
            var5 = var9.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.skipNumCategories;
                return var1;
            };
            var18 = var3.bind(var5)(var2, var1);
            var _closure2_slot0 = var18;
            var1 = 0;
            var11 = var18 <= var1;
            var1 = 100;
            var15 = var18 >= var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var20.container;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var5 = 7;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var17 = 8;
            var5['spacing'] = var17;
            var8 = var8[var17];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/normal', 'style': null, 'children': 'Hide first # of categories'};
            var10 = var20.label;
            var8['style'] = var10;
            var9 = var3.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var10 = var20.stepperContainer;
            var9['style'] = var10;
            var19 = _closure1_slot3;
            var10 = {};
            var13 = var20.stepperButton;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var11;
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var20.stepperButtonDisabled;
case 2:
            var12[1] = var13;
            var10['style'] = var12;
            var12 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setSkipNumCategories;
                    var4 = _closure2_slot0;
                    var1 = 1;
                    var1 = var4 - var1;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var12;
            var10['disabled'] = var11;
            var13 = _closure1_slot5;
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var21 = var11[var17];
            var21 = var12.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-lg/semibold', 'children': '−'};
            var21 = var13.bind(var4)(var22, var21);
            var10['children'] = var21;
            var19 = var3.bind(var4)(var19, var10);
            var10 = new Array(3);
            var10[0] = var19;
            var11 = var11[var17];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var19 = 'text-md/semibold';
            var11['variant'] = var19;
            var19 = var20.valueText;
            var11['style'] = var19;
            var11['children'] = var18;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var12 = _closure1_slot3;
            var11 = {};
            var19 = var20.stepperButton;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var15;
            if(!var19) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var19 = var20.stepperButtonDisabled;
case 6:
            var18[1] = var19;
            var11['style'] = var18;
            var16 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = 100;
                    if(!(var3 < var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setSkipNumCategories;
                    var4 = _closure2_slot0;
                    var1 = 1;
                    var1 = var4 + var1;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var16;
            var11['disabled'] = var15;
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var17];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-lg/semibold', 'children': '+'};
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var9['children'] = var10;
            var9 = var7.bind(var4)(var2, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ShopSkipCategoriesFilter'] = var2;
    return var1;
})();