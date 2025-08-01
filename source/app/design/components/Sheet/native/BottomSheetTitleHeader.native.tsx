// app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function RedesignBottomSheetTitleHeaderBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.title;
            var13 = var1.subtitle;
            var1 = _closure1_slot8;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var8.container;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var8.titles;
            var5['style'] = var8;
            var11 = _closure1_slot6;
            var9 = _closure1_slot14;
            var8 = {};
            var14 = 2;
            var8['lineClamp'] = var14;
            var8['children'] = var12;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = null;
            var11 = var9 != var13;
            if(!var11) { _fun0001_ip = 131; continue _fun0001 }
 111:
            var12 = _closure1_slot6;
            var11 = _closure1_slot15;
            var10 = {};
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 131:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function RedesignBottomSheetTitleHeaderStacked(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.title;
            var14 = var1.subtitle;
            var15 = var1.leading;
            var16 = var1.trailing;
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var1 = _closure1_slot9;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var9.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var17.container;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var17.accessories;
            var5['style'] = var8;
            var12 = _closure1_slot6;
            var10 = _closure1_slot5;
            var8 = {};
            var18 = var17.item;
            var8['style'] = var18;
            var8['children'] = var15;
            var10 = var12.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var15 = _closure1_slot6;
            var12 = _closure1_slot5;
            var10 = {};
            var17 = var17.item;
            var10['style'] = var17;
            var10['children'] = var16;
            var10 = var15.bind(var4)(var12, var10);
            var8[1] = var10;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var9.titles;
            var6['style'] = var9;
            var12 = _closure1_slot6;
            var10 = _closure1_slot14;
            var9 = {};
            var15 = 1;
            var9['lineClamp'] = var15;
            var9['children'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            var12 = var10 != var14;
            if(!var12) { _fun0002_ip = 276; continue _fun0002 }
 256:
            var13 = _closure1_slot6;
            var12 = _closure1_slot15;
            var11 = {};
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 276:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function RedesignBottomSheetTitleHeaderComplex(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var19 = var2.title;
            var21 = var2.subtitle;
            var14 = var2.leading;
            var9 = var2.trailing;
            var20 = var2.onTitleTextLayout;
            var2 = _closure1_slot8;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var2 = _closure1_slot10;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = var2.width;
            var2 = 32;
            var3 = var3 - var2;
            var2 = 4;
            var12 = var3 / var2;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var5 = var2.bind(var3)(var4);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var16 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot0 = var2;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.max;
                        var2 = null;
                        var5 = var2 != var1;
                        var2 = 0;
                        if(!var5) { _fun0004_ip = 30; continue _fun0004 }
 27:
                        var2 = var1;
 30:
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var10 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var5 = {};
            var13 = {};
            var13['width'] = var16;
            var5['style'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(5);
            var5[0] = var7;
            var13 = _closure1_slot7;
            var8 = _closure1_slot5;
            var7 = {};
            var15 = var15.titles;
            var7['style'] = var15;
            var18 = _closure1_slot6;
            var17 = _closure1_slot14;
            var15 = {};
            var15['onTextLayout'] = var20;
            var20 = 3;
            var15['lineClamp'] = var20;
            var15['children'] = var19;
            var17 = var18.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var17 = null;
            var18 = var17 != var21;
            if(!var18) { _fun0003_ip = 311; continue _fun0003 }
 291:
            var20 = _closure1_slot6;
            var19 = _closure1_slot15;
            var18 = {};
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
 311:
            var15[1] = var17;
            var7['children'] = var15;
            var7 = var13.bind(var4)(var8, var7);
            var5[1] = var7;
            var13 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var15 = {};
            var15['width'] = var16;
            var7['style'] = var15;
            var7 = var13.bind(var4)(var8, var7);
            var5[2] = var7;
            var13 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var7['onLayout'] = var10;
            var16 = var11.accessory;
            var15 = new Array(3);
            var15[0] = var16;
            var16 = var11.leading;
            var15[1] = var16;
            var16 = {};
            var16['maxWidth'] = var12;
            var15[2] = var16;
            var7['style'] = var15;
            var7['children'] = var14;
            var7 = var13.bind(var4)(var8, var7);
            var5[3] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var6 = {};
            var6['onLayout'] = var10;
            var13 = var11.accessory;
            var10 = new Array(3);
            var10[0] = var13;
            var11 = var11.trailing;
            var10[1] = var11;
            var11 = {};
            var11['maxWidth'] = var12;
            var10[2] = var11;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function Title(arg1) {
        var2 = _closure1_slot8;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
        var5 = var5.title;
        var1['style'] = var5;
        var7 = arg1;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function Subtitle(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot8;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 6;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
        var6 = var6.subtitle;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function() {
        var1 = {};
        var2 = {'paddingHorizontal': 16, 'flexDirection': 'row', 'gap': 4, 'position': 'relative'};
        var1['container'] = var2;
        var2 = {'flexGrow': 1, 'flexShrink': 1};
        var1['titles'] = var2;
        var2 = {};
        var3 = 'center';
        var2['textAlign'] = var3;
        var1['subtitle'] = var2;
        var2 = {};
        var2['textAlign'] = var3;
        var1['title'] = var2;
        return var1;
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function() {
        var1 = {};
        var2 = {};
        var3 = 'column';
        var2['flexDirection'] = var3;
        var1['container'] = var2;
        var2 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
        var1['accessories'] = var2;
        var2 = {};
        var3 = 0;
        var2['flexShrink'] = var3;
        var1['item'] = var2;
        return var1;
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'flexShrink': 0, 'flexDirection': 'row', 'flexGrow': 1};
        var1['accessory'] = var2;
        var2 = {'left': 16, 'justifyContent': 'flex-start'};
        var1['leading'] = var2;
        var2 = {'right': 16, 'justifyContent': 'flex-end'};
        var1['trailing'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/BottomSheetTitleHeader.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BottomSheetTitleHeader(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var10 = var7.leading;
            var4 = var7.trailing;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var1 = false;
            var9 = var2.bind(var5)(var1);
            var5 = _closure1_slot3;
            var6 = undefined;
            var2 = 2;
            var9 = var5.bind(var6)(var9, var2);
            var2 = 0;
            var2 = var9[var2];
            var5 = 1;
            var5 = var9[var5];
            var _closure2_slot0 = var5;
            var5 = null;
            if(!(var5 != var10)) { _fun0005_ip = 86; continue _fun0005 }
 74:
            if(!(var1 !== var10)) { _fun0005_ip = 86; continue _fun0005 }
 78:
            var9 = '';
            if(!(var9 === var10)) { _fun0005_ip = 130; continue _fun0005 }
 86:
            if(!(var5 != var4)) { _fun0005_ip = 102; continue _fun0005 }
 90:
            if(!(var1 !== var4)) { _fun0005_ip = 102; continue _fun0005 }
 94:
            var1 = '';
            if(!(var1 === var4)) { _fun0005_ip = 130; continue _fun0005 }
 102:
            var5 = _closure1_slot6;
            var4 = _closure1_slot11;
            var1 = {};
            var12 = var1;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var1 = var5.bind(var6)(var4, var1);
            _fun0005_ip = 202; continue _fun0005;
 130:
            var5 = _closure1_slot6;
            if(var2) { _fun0005_ip = 177; continue _fun0005 }
 137:
            var4 = _closure1_slot13;
            var2 = {};
            var12 = var2;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var9 = function onTitleTextLayout(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot0;
                var1 = var1.lines;
                var2 = var1.length;
                var1 = 2;
                var2 = var2 > var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = 'onTitleTextLayout';
            var2[var8] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0005_ip = 199; continue _fun0005;
 177:
            var4 = _closure1_slot12;
            var3 = {};
            var12 = var3;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var3);
 199:
            var1 = var2;
 202:
            return var1;
        }
    };
    var3['BottomSheetTitleHeader'] = var2;
    return var1;
})();