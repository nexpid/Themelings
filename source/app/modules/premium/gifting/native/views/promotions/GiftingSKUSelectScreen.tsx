// app/modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
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
    var9 = {};
    var9['flex'] = var12;
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['scroll'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['padding'] = var12;
    var4['contentContainer'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['padding'] = var12;
    var4['header'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_96;
    var9['marginHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginVertical'] = var12;
    var4['segmentedControlContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9['paddingBottom'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingSKUSelectScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.defaultHighlightedReward;
            var17 = var1.claimableRewards;
            var _closure2_slot0 = var17;
            var8 = var1.claimableVariants;
            var _closure2_slot1 = var8;
            var1 = var1.onSelect;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot9;
            var10 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var18 = null;
            if(!(var18 == var7)) { _fun0001_ip = 112; continue _fun0001 }
 89:
            var2 = 0;
            var11 = var17[var2];
            var12 = var18 == var11;
            var2 = undefined;
            if(var12) { _fun0001_ip = 110; continue _fun0001 }
 104:
            var2 = var11.skuId;
 110:
            _fun0001_ip = 118; continue _fun0001;
 112:
            var2 = var7.skuId;
 118:
            var2 = var3.bind(var6)(var2);
            var6 = _closure1_slot3;
            var28 = 2;
            var7 = var6.bind(var4)(var2, var28);
            var3 = 0;
            var14 = var7[var3];
            _closure2_slot3 = var14;
            var2 = 1;
            var7 = var7[var2];
            _closure2_slot4 = var7;
            var7 = _closure1_slot4;
            var12 = var7.useCallback;
            var11 = new Array(3);
            var11[0] = var1;
            var11[1] = var14;
            var11[2] = var17;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot3;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 43; continue _fun0002 }
 32:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var12.bind(var7)(var1, var11);
            var13 = var7.useCallback;
            var12 = function(arg1) {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var15 = var13.bind(var7)(var12, var1);
            var1 = var7.useState;
            var1 = var1.bind(var7)(var3);
            var1 = var6.bind(var4)(var1, var28);
            var12 = var1[var3];
            var1 = var1[var2];
            _closure2_slot5 = var1;
            var16 = var7.useCallback;
            var13 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var20 = var16.bind(var7)(var13, var1);
            var1 = global;
            var16 = var1.Math;
            var13 = var16.floor;
            var19 = var1.Math;
            var1 = var19.random;
            var1 = var1.bind(var19)();
            var1 = var28 * var1;
            var13 = var13.bind(var16)(var1);
            var1 = var7.useState;
            var1 = var1.bind(var7)(var13);
            var1 = var6.bind(var4)(var1, var28);
            var6 = var1[var3];
            _closure2_slot6 = var6;
            var1 = var1[var2];
            _closure2_slot7 = var1;
            var3 = var7.useMemo;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var17;
            var2[2] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0003_ip = 39; continue _fun0003 }
 13:
                    var5 = _closure2_slot1;
                    var2 = var5.flatMap;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var1 = var2.variants;
                            var3 = var1.length;
                            var1 = 2;
                            if(!(!(var3 < var1))) { _fun0004_ip = 63; continue _fun0004 }
 21:
                            var1 = {};
                            var4 = var2.variants;
                            var3 = _closure2_slot6;
                            var5 = var4[var3];
                            var6 = var1;
                            var3 = copyDataProperties(var6, var5);
                            var3 = var2.name;
                            var2 = 'name';
                            var1[var2] = var3;
                            _fun0004_ip = 67; continue _fun0004;
 63:
                            var1 = new Array(0);
 67:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var5)(var1);
                    _fun0003_ip = 60; continue _fun0003;
 39:
                    var2 = _closure2_slot0;
                    if(!(var4 == var2)) { _fun0003_ip = 53; continue _fun0003 }
 47:
                    var2 = new Array(0);
                    _fun0003_ip = 57; continue _fun0003;
 53:
                    var2 = _closure2_slot0;
 57:
                    var1 = var2;
 60:
                    return var1;
                }
            };
            var19 = var3.bind(var7)(var1, var2);
            var26 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 6;
            var1 = var22[var1];
            var3 = var26.bind(var4)(var1);
            var2 = var3.useSegmentedControlState;
            var1 = {};
            var7 = new Array(2);
            var13 = {'label': 'Trick', 'id': 'Trick', 'page': 0};
            var7[0] = var13;
            var13 = {'label': 'Treat', 'id': 'Treat', 'page': 1};
            var7[1] = var13;
            var1['items'] = var7;
            var7 = 32;
            var7 = var12 - var7;
            var1['pageWidth'] = var7;
            var1['defaultIndex'] = var6;
            var5 = function onSetActiveIndex(arg1) {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onSetActiveIndex'] = var5;
            var23 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var7 = var10.scroll;
            var5['style'] = var7;
            var7 = var10.contentContainer;
            var5['contentContainerStyle'] = var7;
            var5['onLayout'] = var20;
            var21 = _closure1_slot7;
            var12 = 7;
            var7 = var22[var12];
            var7 = var26.bind(var4)(var7);
            var13 = var7.Text;
            var7 = {'style': null, 'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var16 = var10.header;
            var7['style'] = var16;
            var16 = 8;
            var24 = var22[var16];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var22[var16];
            var22 = var26.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.Rp0+ZG;
            var22 = var24.bind(var25)(var22);
            var7['children'] = var22;
            var13 = var21.bind(var4)(var13, var7);
            var7 = new Array(4);
            var7[0] = var13;
            var8 = var18 != var8;
            if(!var8) { _fun0001_ip = 777; continue _fun0001 }
 651:
            var21 = _closure1_slot7;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = var22[var12];
            var12 = var24.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-normal'};
            var25 = var10.header;
            var12['style'] = var25;
            var25 = var22[var16];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var22 = var22[var16];
            var22 = var24.bind(var4)(var22);
            var22 = var22.t;
            var24 = var22.xGzXNT;
            var22 = {};
            var27 = var19.length;
            var27 = var28 * var27;
            var22['rewardCount'] = var27;
            var22 = var25.bind(var26)(var24, var22);
            var12['children'] = var22;
            var8 = var21.bind(var4)(var13, var12);
 777:
            var7[1] = var8;
            var13 = _closure1_slot7;
            var12 = _closure1_slot5;
            var8 = {};
            var21 = var10.segmentedControlContainer;
            var8['style'] = var21;
            var8['onLayout'] = var20;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = 9;
            var21 = var20[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.SegmentedControl;
            var21 = {};
            var21['state'] = var23;
            var23 = 'experimental_Small';
            var21['variant'] = var23;
            var21 = var13.bind(var4)(var22, var21);
            var8['children'] = var21;
            var8 = var13.bind(var4)(var12, var8);
            var7[2] = var8;
            var12 = _closure1_slot1;
            var8 = 10;
            var8 = var20[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var8['rewardsToDisplay'] = var19;
            if(!(var18 == var17)) { _fun0001_ip = 899; continue _fun0001 }
 895:
            var17 = new Array(0);
 899:
            var8['claimableRewards'] = var17;
            var8['onSelect'] = var15;
            var8['highlightedSkuId'] = var14;
            var8 = var13.bind(var4)(var12, var8);
            var7[3] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.buttonContainer;
            var6['style'] = var10;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 11;
            var9 = var12[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.WaYuBQ;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var9['onPress'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();