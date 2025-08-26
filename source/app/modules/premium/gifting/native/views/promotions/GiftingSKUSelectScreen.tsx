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
            var2 = arg1;
            var9 = var2.defaultHighlightedReward;
            var1 = var2.claimableRewards;
            var _closure2_slot0 = var1;
            var11 = var2.claimableVariants;
            var _closure2_slot1 = var11;
            var2 = var2.onSelect;
            var _closure2_slot2 = var2;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot9;
            var8 = var3.bind(var4)();
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var3 = null;
            if(!(var3 == var9)) { _fun0001_ip = 112; continue _fun0001 }
 89:
            var10 = 0;
            var10 = var1[var10];
            var13 = var3 == var10;
            var3 = undefined;
            if(var13) { _fun0001_ip = 110; continue _fun0001 }
 104:
            var3 = var10.skuId;
 110:
            _fun0001_ip = 118; continue _fun0001;
 112:
            var3 = var9.skuId;
 118:
            var3 = var6.bind(var7)(var3);
            var14 = _closure1_slot3;
            var13 = 2;
            var7 = var14.bind(var4)(var3, var13);
            var6 = 0;
            var16 = var7[var6];
            _closure2_slot3 = var16;
            var3 = 1;
            var7 = var7[var3];
            _closure2_slot4 = var7;
            var7 = _closure1_slot4;
            var10 = var7.useCallback;
            var9 = new Array(3);
            var9[0] = var2;
            var9[1] = var16;
            var9[2] = var1;
            var2 = function() {
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
            var10 = var10.bind(var7)(var2, var9);
            var15 = var7.useCallback;
            var9 = function(arg1) {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var17 = var15.bind(var7)(var9, var2);
            var2 = var7.useState;
            var2 = var2.bind(var7)(var6);
            var2 = var14.bind(var4)(var2, var13);
            var9 = var2[var6];
            var2 = var2[var3];
            _closure2_slot5 = var2;
            var18 = var7.useCallback;
            var15 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var19 = var18.bind(var7)(var15, var2);
            var2 = global;
            var18 = var2.Math;
            var15 = var18.floor;
            var20 = var2.Math;
            var2 = var20.random;
            var2 = var2.bind(var20)();
            var2 = var13 * var2;
            var15 = var15.bind(var18)(var2);
            var2 = var7.useState;
            var2 = var2.bind(var7)(var15);
            var2 = var14.bind(var4)(var2, var13);
            var6 = var2[var6];
            _closure2_slot6 = var6;
            var2 = var2[var3];
            _closure2_slot7 = var2;
            var3 = var7.useMemo;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var1;
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
            var18 = var3.bind(var7)(var1, var2);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var1 = var15[var1];
            var3 = var14.bind(var4)(var1);
            var2 = var3.useSegmentedControlState;
            var1 = {};
            var7 = new Array(2);
            var11 = {'label': 'Trick', 'id': 'Trick', 'page': 0};
            var7[0] = var11;
            var11 = {'label': 'Treat', 'id': 'Treat', 'page': 1};
            var7[1] = var11;
            var1['items'] = var7;
            var7 = 32;
            var7 = var9 - var7;
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
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var8.container;
            var1['style'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var7 = var8.scroll;
            var5['style'] = var7;
            var7 = var8.contentContainer;
            var5['contentContainerStyle'] = var7;
            var5['onLayout'] = var19;
            var7 = _closure1_slot7;
            var13 = 7;
            var9 = var15[var13];
            var9 = var14.bind(var4)(var9);
            var20 = var9.Text;
            var9 = {'style': null, 'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var11 = var8.header;
            var9['style'] = var11;
            var11 = 8;
            var22 = var15[var11];
            var22 = var14.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var15[var11];
            var22 = var14.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.Rp0+ZG;
            var22 = var23.bind(var24)(var22);
            var9['children'] = var22;
            var20 = var7.bind(var4)(var20, var9);
            var9 = new Array(4);
            var9[0] = var20;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var20 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-normal', 'children': 'You get one with each gift purchase. Collect all 8 of them.'};
            var22 = var8.header;
            var13['style'] = var22;
            var13 = var7.bind(var4)(var20, var13);
            var9[1] = var13;
            var13 = {};
            var20 = var8.segmentedControlContainer;
            var13['style'] = var20;
            var13['onLayout'] = var19;
            var19 = 9;
            var19 = var15[var19];
            var19 = var14.bind(var4)(var19);
            var20 = var19.SegmentedControl;
            var19 = {};
            var19['state'] = var21;
            var21 = 'experimental_Small';
            var19['variant'] = var21;
            var19 = var7.bind(var4)(var20, var19);
            var13['children'] = var19;
            var13 = var7.bind(var4)(var2, var13);
            var9[2] = var13;
            var13 = _closure1_slot1;
            var12 = 10;
            var12 = var15[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['rewardsToDisplay'] = var18;
            var12['onSelect'] = var17;
            var12['highlightedSkuId'] = var16;
            var12 = var7.bind(var4)(var13, var12);
            var9[3] = var12;
            var5['children'] = var9;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var8 = var8.buttonContainer;
            var6['style'] = var8;
            var8 = 11;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var9 = var8.Button;
            var8 = {};
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.WaYuBQ;
            var11 = var12.bind(var13)(var11);
            var8['text'] = var11;
            var8['onPress'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();