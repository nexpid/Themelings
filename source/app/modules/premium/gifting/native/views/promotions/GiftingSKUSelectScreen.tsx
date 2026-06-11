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
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['scroll'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['padding'] = var12;
    var4['contentContainer'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['padding'] = var13;
    var4['header'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var4['subtitle'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['marginBottom'] = var12;
    var4['buttonContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_24;
    var9['marginBottom'] = var10;
    var4['headerContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingSKUSelectScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.defaultHighlightedReward;
            var _closure2_slot0 = var6;
            var21 = var2.allRewards;
            var20 = var2.claimableRewards;
            var _closure2_slot1 = var20;
            var2 = var2.onSelect;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot9;
            var4 = undefined;
            var8 = var3.bind(var4)();
            var18 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 6;
            var3 = var17[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var14 = var3.bottom;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var6);
            var11 = _closure1_slot3;
            var10 = 2;
            var3 = var11.bind(var4)(var3, var10);
            var7 = 0;
            var12 = var3[var7];
            var _closure2_slot3 = var12;
            var9 = 1;
            var3 = var3[var9];
            var _closure2_slot4 = var3;
            var15 = var5.useState;
            var3 = false;
            var3 = var15.bind(var5)(var3);
            var3 = var11.bind(var4)(var3, var10);
            var7 = var3[var7];
            var _closure2_slot5 = var7;
            var3 = var3[var9];
            var _closure2_slot6 = var3;
            var9 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var2;
            var3[1] = var12;
            var3[2] = var20;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var2 = _closure2_slot3;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var9.bind(var5)(var2, var3);
            var9 = var5.useCallback;
            var3 = function(arg1) {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot6;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var19 = var9.bind(var5)(var3, var2);
            var9 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var20;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var2 = _closure2_slot3;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var11 = var9.bind(var5)(var2, var3);
            var _closure2_slot7 = var11;
            var3 = var5.useEffect;
            var2 = new Array(5);
            var2[0] = var12;
            var2[1] = var20;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var5 = _closure2_slot1;
                    var4 = var5.some;
                    var3 = function(arg1) {
                        var2 = _closure2_slot3;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 10; continue _fun0004 }
case 8:
                    var3 = _closure2_slot5;
                    var5 = !var3;
                    if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var5 = var3 != var4;
case 11:
                    if(!var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure2_slot1;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var5 = var3.bind(var4)(var2);
case 13:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = undefined;
                    if(!var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = _closure2_slot0;
case 15:
                    var2 = var4.bind(var3)(var2);
                    _fun0004_ip = 10; continue _fun0004;
case 6:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
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
            var9 = {};
            var7 = var8.headerContainer;
            var9['style'] = var7;
            var7 = _closure1_slot7;
            var16 = _closure1_slot0;
            var22 = 7;
            var13 = var17[var22];
            var13 = var16.bind(var4)(var13);
            var23 = var13.Text;
            var15 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header'};
            var13 = var8.header;
            var15['style'] = var13;
            var13 = 8;
            var24 = var17[var13];
            var24 = var16.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var17[var13];
            var24 = var16.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24["+ByEeM"];
            var24 = var25.bind(var26)(var24);
            var15['children'] = var24;
            var23 = var7.bind(var4)(var23, var15);
            var15 = new Array(2);
            var15[0] = var23;
            var22 = var17[var22];
            var22 = var16.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var24 = var8.subtitle;
            var22['style'] = var24;
            var24 = var17[var13];
            var24 = var16.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var17[var13];
            var24 = var16.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.vPeaOS;
            var24 = var25.bind(var26)(var24);
            var22['children'] = var24;
            var22 = var7.bind(var4)(var23, var22);
            var15[1] = var22;
            var9['children'] = var15;
            var15 = var3.bind(var4)(var2, var9);
            var9 = new Array(2);
            var9[0] = var15;
            var15 = 9;
            var15 = var17[var15];
            var18 = var18.bind(var4)(var15);
            var15 = {};
            var15['rewardsToDisplay'] = var21;
            var15['claimableRewards'] = var20;
            var15['onSelect'] = var19;
            var15['highlightedSkuId'] = var12;
            var15 = var7.bind(var4)(var18, var15);
            var9[1] = var15;
            var5['children'] = var9;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var9 = var8.buttonContainer;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var9['paddingBottom'] = var14;
            var8[1] = var9;
            var6['style'] = var8;
            var8 = 10;
            var8 = var17[var8];
            var8 = var16.bind(var4)(var8);
            var9 = var8.Button;
            var8 = {};
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["3d0Nmb"];
            var13 = var14.bind(var15)(var13);
            var8['text'] = var13;
            var8['onPress'] = var10;
            var10 = null;
            var10 = var10 == var12;
            if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = !var11;
case 17:
            var8['disabled'] = var10;
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