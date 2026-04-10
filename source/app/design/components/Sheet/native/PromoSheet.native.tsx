// app/design/components/Sheet/native/PromoSheet.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = ['title', 'description', 'illustration', 'graphic', 'gradientColor', 'actions'];
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 20, 'position': 'relative'};
    var4['content'] = var9;
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['title'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['description'] = var9;
    var9 = {'alignSelf': 'stretch', 'alignItems': 'center'};
    var4['illustration'] = var9;
    var9 = {};
    var9['alignSelf'] = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.modules;
    var10 = var10.mobile;
    var10 = var10.PROMO_SHEET_GRAPHIC_MAX_WIDTH;
    var9['maxWidth'] = var10;
    var4['graphic'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/PromoSheet.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PromoSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var17 = var5.title;
            var18 = var5.description;
            var16 = var5.illustration;
            var14 = var5.graphic;
            var8 = var5.gradientColor;
            var _closure2_slot0 = var8;
            var9 = var5.actions;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var4 = undefined;
            var7 = var3.bind(var4)(var5, var2);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'PromoSheet';
            var21 = var3.bind(var4)(var2);
            var _closure2_slot1 = var21;
            var2 = _closure1_slot9;
            var19 = var2.bind(var4)();
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var21;
            var2[1] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var1 = undefined;
                    return var1;
case 4:
                    var1 = function(arg1) {
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot6;
                        var2 = {};
                        var10 = arg1;
                        var11 = var2;
                        var1 = copyDataProperties(var11, var10);
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 7;
                        var5 = var9[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.ExpressiveGradient;
                        var5 = {};
                        var8 = 0.25;
                        var5['offsetBottom'] = var8;
                        var8 = _closure2_slot0;
                        var5['color'] = var8;
                        var8 = _closure1_slot1;
                        var7 = 5;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.colors;
                        var7 = var7.MOBILE_ACTIONSHEET_BACKGROUND;
                        var5['backgroundColor'] = var7;
                        var6 = var4.bind(var1)(var6, var5);
                        var5 = 'children';
                        var2[4] = var6;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var8 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot7;
            var6 = _closure1_slot0;
            var1 = 8;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var25 = var1;
            var24 = var7;
            var7 = copyDataProperties(var25, var24);
            var10 = true;
            var7 = 'startExpanded';
            var1[6] = var10;
            var10 = var19.content;
            var7 = 'contentStyles';
            var1[6] = var10;
            var7 = 'backgroundComponent';
            var1[6] = var8;
            var7 = _closure1_slot8;
            var10 = 9;
            var5 = var5[var10];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = 24;
            var5['spacing'] = var8;
            if(!var21) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = null;
            if(!(var8 == var14)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var11 = null;
            var8 = var11 != var16;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot7;
            var12 = _closure1_slot6;
            var8 = {};
            var20 = var19.illustration;
            var8['style'] = var20;
            var8['children'] = var16;
            var11 = var13.bind(var4)(var12, var8);
case 8:
            _fun0001_ip = 10; continue _fun0001;
case 7:
            var13 = _closure1_slot7;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 10;
            var8 = var16[var8];
            var8 = var12.bind(var4)(var8);
            var12 = var8.Graphic;
            var8 = {};
            var25 = var8;
            var24 = var14;
            var14 = copyDataProperties(var25, var24);
            var16 = var19.graphic;
            var14 = 'style';
            var8[13] = var16;
            var11 = var13.bind(var4)(var12, var8);
case 10:
            var8 = new Array(3);
            var8[0] = var11;
            var12 = _closure1_slot8;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = var13[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.Stack;
            var10 = {};
            var16 = _closure1_slot7;
            var20 = 11;
            var13 = var13[var20];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var22 = 'heading-xl/bold';
            if(!var21) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var22 = 'heading-xl/semibold';
case 11:
            var13['variant'] = var22;
            var22 = 'mobile-text-heading-primary';
            var13['color'] = var22;
            var22 = var19.title;
            var13['style'] = var22;
            var13['children'] = var17;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            var16 = var14 != var18;
            if(!var16) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {};
            var20 = 'text-md/medium';
            if(!var21) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var20 = 'redesign/heading-18/medium';
case 15:
            var15['variant'] = var20;
            var20 = 'text-default';
            if(!var21) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var20 = 'text-subtle';
case 17:
            var15['color'] = var20;
            var19 = var19.description;
            var15['style'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 13:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var8[1] = var10;
            var8[2] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PromoSheet'] = var2;
    return var1;
})();