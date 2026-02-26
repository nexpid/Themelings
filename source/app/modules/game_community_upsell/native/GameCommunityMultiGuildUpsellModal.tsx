// app/modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function OneColumnGuildUpsellList(arg1) {
        var1 = arg1;
        var7 = var1.suggestedGuilds;
        var9 = var1.contentContainerStyle;
        var6 = var1.subheader;
        var14 = var1.onDismiss;
        var _closure2_slot0 = var14;
        var8 = _closure1_slot4;
        var5 = var8.useCallback;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var2 = new Array(0);
        var8 = var5.bind(var8)(var4, var2);
        var2 = _closure1_slot0;
        var10 = _closure1_slot3;
        var4 = 7;
        var5 = var10[var4];
        var4 = undefined;
        var13 = var2.bind(var4)(var5);
        var12 = var13.useStateFromStoresObject;
        var5 = _closure1_slot6;
        var11 = new Array(1);
        var11[0] = var5;
        var5 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getGuildGameIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var13 = var12.bind(var13)(var11, var5);
        var _closure2_slot1 = var13;
        var12 = _closure1_slot4;
        var11 = var12.useCallback;
        var5 = new Array(2);
        var5[0] = var14;
        var5[1] = var13;
        var3 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var1 = var1.item;
                var3 = _closure2_slot1;
                var2 = var1.id;
                var2 = var3[var2];
                var6 = null;
                var8 = var6 != var2;
                var5 = _closure1_slot8;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 8;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['guild'] = var1;
                var9 = 'one-column';
                var2['variant'] = var9;
                if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure2_slot0;
case 2:
                var2['onDismiss'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            }
        };
        var5 = var11.bind(var12)(var3, var5);
        var3 = _closure1_slot8;
        var1 = 9;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.FlashList;
        var1 = {};
        var1['contentContainerStyle'] = var9;
        var1['keyExtractor'] = var8;
        var1['data'] = var7;
        var1['ListHeaderComponent'] = var6;
        var1['renderItem'] = var5;
        var5 = 390;
        var1['estimatedItemSize'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function TwoColumnGuildUpsellList(arg1) {
        var1 = arg1;
        var2 = var1.suggestedGuilds;
        var _closure2_slot0 = var2;
        var9 = var1.contentContainerStyle;
        var15 = var1.rowStyle;
        var _closure2_slot1 = var15;
        var6 = var1.subheader;
        var14 = var1.onDismiss;
        var _closure2_slot2 = var14;
        var7 = _closure1_slot4;
        var5 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var4 = _closure2_slot0;
            var3 = var4.reduce;
            var2 = function(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg3;
                    var2 = 2;
                    var3 = var6 % var2;
                    var2 = 0;
                    if(!(var3 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var1.push;
                    var2 = {};
                    var4 = arg2;
                    var2['left'] = var4;
                    var5 = _closure2_slot0;
                    var4 = 1;
                    var4 = var6 + var4;
                    var4 = var5[var4];
                    var2['right'] = var4;
                    var2 = var3.bind(var1)(var2);
case 4:
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var7 = var5.bind(var7)(var2, var4);
        var8 = _closure1_slot4;
        var5 = var8.useCallback;
        var4 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var4 = var3.left;
                var2 = null;
                var5 = var2 == var4;
                var6 = undefined;
                if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                var6 = var4.id;
case 6:
                var7 = var2 != var6;
                var5 = '';
                var4 = var5;
                if(!var7) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var4 = var6;
case 7:
                var3 = var3.right;
                var6 = var2 == var3;
                var1 = undefined;
                if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 9:
                var1 = var3.id;
case 4:
                var2 = var2 != var1;
                var3 = var5;
                if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = var1;
case 10:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '-';
                var1 = var2.bind(var5)(var4, var1, var3);
                return var1;
            }
        };
        var2 = new Array(0);
        var8 = var5.bind(var8)(var4, var2);
        var2 = _closure1_slot0;
        var10 = _closure1_slot3;
        var4 = 7;
        var5 = var10[var4];
        var4 = undefined;
        var13 = var2.bind(var4)(var5);
        var12 = var13.useStateFromStoresObject;
        var5 = _closure1_slot6;
        var11 = new Array(1);
        var11[0] = var5;
        var5 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getGuildGameIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var13 = var12.bind(var13)(var11, var5);
        var _closure2_slot3 = var13;
        var12 = _closure1_slot4;
        var11 = var12.useCallback;
        var5 = new Array(3);
        var5[0] = var15;
        var5[1] = var14;
        var5[2] = var13;
        var3 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var13 = var1.item;
                var2 = var13.left;
                var10 = null;
                var3 = var10 == var2;
                var4 = undefined;
                var1 = undefined;
                if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var1 = var2.id;
case 12:
                var15 = var10 != var1;
                if(!var15) { _fun0004_ip = 14; continue _fun0004 }
case 8:
                var2 = _closure2_slot3;
                var1 = var13.left;
                var1 = var1.id;
                var1 = var2[var1];
                var15 = var10 != var1;
case 14:
                var2 = var13.right;
                var3 = var10 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 2; continue _fun0004 }
case 15:
                var1 = var2.id;
case 2:
                var12 = var10 != var1;
                if(!var12) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2 = _closure2_slot3;
                var1 = var13.right;
                var1 = var1.id;
                var1 = var2[var1];
                var12 = var10 != var1;
case 16:
                var3 = _closure1_slot9;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = _closure2_slot1;
                var1['style'] = var5;
                var5 = var13.left;
                var6 = var10 != var5;
                if(!var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var14 = _closure1_slot3;
                var5 = 8;
                var5 = var14[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var14 = var13.left;
                var5['guild'] = var14;
                var14 = 'two-column';
                var5['variant'] = var14;
                var14 = null;
                if(!var15) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var14 = _closure2_slot2;
case 20:
                var5['onDismiss'] = var14;
                var6 = var9.bind(var4)(var8, var5);
case 18:
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var13.right;
                if(!(var10 == var6)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var9 = _closure1_slot8;
                var8 = _closure1_slot5;
                var6 = {};
                var14 = {};
                var15 = 1;
                var14['flex'] = var15;
                var6['style'] = var14;
                var6 = var9.bind(var4)(var8, var6);
                _fun0004_ip = 24; continue _fun0004;
case 22:
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var14 = _closure1_slot3;
                var7 = 8;
                var7 = var14[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var13 = var13.right;
                var7['guild'] = var13;
                var13 = 'two-column';
                var7['variant'] = var13;
                var10 = null;
                if(!var12) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var10 = _closure2_slot2;
case 25:
                var7['onDismiss'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 24:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var11.bind(var12)(var3, var5);
        var3 = _closure1_slot8;
        var1 = 9;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.FlashList;
        var1 = {};
        var1['contentContainerStyle'] = var9;
        var1['keyExtractor'] = var8;
        var1['data'] = var7;
        var1['ListHeaderComponent'] = var6;
        var1['renderItem'] = var5;
        var5 = 250;
        var1['estimatedItemSize'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MIN_HEADER_HEIGHT;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        var9 = arg2;
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot3;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var1['container'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 0};
        var7 = 'center';
        var2['paddingTop'] = var9;
        var8 = _closure1_slot7;
        var8 = var9 + var8;
        var2['minHeight'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['paddingHorizontal'] = var8;
        var1['headerWrapper'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var1['headerTitle'] = var2;
        var2 = {};
        var2['alignSelf'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['marginHorizontal'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['marginBottom'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['marginTop'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var8;
        var2['textAlign'] = var7;
        var1['subtitle'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = arg1;
        var2['paddingBottom'] = var7;
        var1['listContent'] = var2;
        var2 = {'flexDirection': 'row', 'gap': null, 'flex': 1};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['gap'] = var3;
        var1['twoColumnRow'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameCommunityMultiGuildUpsellModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var12 = var2.onClose;
            var18 = _closure1_slot1;
            var26 = _closure1_slot3;
            var2 = 10;
            var2 = var26[var2];
            var4 = undefined;
            var2 = var18.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.top;
            var5 = var2.bottom;
            var25 = _closure1_slot0;
            var2 = 11;
            var2 = var26[var2];
            var3 = var25.bind(var4)(var2);
            var2 = var3.useGradientTop;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var3 = _closure1_slot10;
            var16 = var3.bind(var4)(var5, var6);
            var _closure2_slot1 = var16;
            var3 = 12;
            var3 = var26[var3];
            var3 = var25.bind(var4)(var3);
            var6 = var3.GameCommunityUpsellMultiExperiment;
            var5 = var6.useConfig;
            var3 = {};
            var7 = 'GameCommunityMultiGuildUpsellModal';
            var3['location'] = var7;
            var3 = var5.bind(var6)(var3);
            var13 = var3.visualVariant;
            var3 = 7;
            var3 = var26[var3];
            var7 = var25.bind(var4)(var3);
            var6 = var7.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPresentableUpsellGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var6.bind(var7)(var5, var3);
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var7 = var16.headerWrapper;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var2;
            var2 = function() {
                var1 = _closure2_slot1;
                var3 = var1.headerWrapper;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure2_slot0;
                var1[1] = var2;
                return var1;
            };
            var8 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var2 = var16.subtitle;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 13;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var5 = _closure2_slot1;
                var5 = var5.subtitle;
                var1['style'] = var5;
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PH+G/A;
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var15 = var5.bind(var6)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dismissGuild;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var14 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot5;
            var5 = {};
            var5['style'] = var8;
            var10 = _closure1_slot8;
            var8 = 16;
            var8 = var26[var8];
            var8 = var25.bind(var4)(var8);
            var9 = var8.HeaderIconButton;
            var8 = {};
            var17 = 17;
            var17 = var26[var17];
            var17 = var18.bind(var4)(var17);
            var8['source'] = var17;
            var8['onPress'] = var12;
            var22 = 14;
            var12 = var26[var22];
            var12 = var25.bind(var4)(var12);
            var18 = var12.intl;
            var17 = var18.string;
            var12 = var26[var22];
            var12 = var25.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.cpT0Cq;
            var12 = var17.bind(var18)(var12);
            var8['accessibilityLabel'] = var12;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var17 = _closure1_slot8;
            var12 = _closure1_slot5;
            var9 = {};
            var10 = var16.headerTitle;
            var9['style'] = var10;
            var21 = _closure1_slot8;
            var10 = 13;
            var10 = var26[var10];
            var10 = var25.bind(var4)(var10);
            var19 = var10.Text;
            var18 = {'variant': 'redesign/heading-18/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var10 = 1;
            var23 = var26[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.fs+2Kn;
            var22 = var23.bind(var24)(var22);
            var18['children'] = var22;
            var18 = var21.bind(var4)(var19, var18);
            var9['children'] = var18;
            var9 = var17.bind(var4)(var12, var9);
            var8[1] = var9;
            var17 = _closure1_slot8;
            var12 = _closure1_slot5;
            var9 = {};
            var18 = {};
            var19 = 40;
            var18['width'] = var19;
            var9['style'] = var18;
            var9 = var17.bind(var4)(var12, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = {};
            var9['flex'] = var10;
            var6['style'] = var9;
            var9 = 'one-column';
            var12 = null;
            if(!(var9 === var13)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var18 = _closure1_slot8;
            var17 = _closure1_slot11;
            var9 = {};
            var22 = var20.slice;
            var21 = 0;
            var19 = 8;
            var19 = var22.bind(var20)(var21, var19);
            var9['suggestedGuilds'] = var19;
            var19 = var16.listContent;
            var9['contentContainerStyle'] = var19;
            var9['subheader'] = var15;
            var9['onDismiss'] = var14;
            var12 = var18.bind(var4)(var17, var9);
case 27:
            var9 = new Array(2);
            var9[0] = var12;
            var12 = 'two-column';
            var10 = null;
            if(!(var12 === var13)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var13 = _closure1_slot8;
            var12 = _closure1_slot12;
            var11 = {};
            var19 = var20.slice;
            var18 = 0;
            var17 = 20;
            var17 = var19.bind(var20)(var18, var17);
            var11['suggestedGuilds'] = var17;
            var17 = var16.listContent;
            var11['contentContainerStyle'] = var17;
            var16 = var16.twoColumnRow;
            var11['rowStyle'] = var16;
            var11['subheader'] = var15;
            var11['onDismiss'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 29:
            var9[1] = var10;
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