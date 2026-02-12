// app/modules/avatar_decorations/native/EditAvatarDecorationSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.ActivityIndicator;
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AVATAR_DECORATION_SIZE;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var9 = var11.createStyles;
    var4 = {};
    var12 = {'marginBottom': 10, 'gap': 5};
    var4['avatarDecorationSection'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13 = 7;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.GUTTER_SIZE;
    var12['paddingHorizontal'] = var13;
    var4['row'] = var12;
    var4 = var9.bind(var11)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var9 = {'animating': true, 'size': 'large'};
    var9 = var7.bind(var1)(var10, var9);
    var4['children'] = var9;
    var4 = var7.bind(var1)(var8, var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/avatar_decorations/native/EditAvatarDecorationSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.selectedAvatarDecoration;
            var _closure2_slot0 = var18;
            var17 = var1.setSelectedAvatarDecoration;
            var _closure2_slot1 = var17;
            var15 = var1.section;
            var _closure2_slot2 = var15;
            var7 = var1.purchases;
            var _closure2_slot3 = var7;
            var20 = var1.guildId;
            var _closure2_slot4 = var20;
            var13 = var1.scrollToInitialItem;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = false;
case 2:
            var4 = var1.isTryItOut;
            if(!(var4 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
case 4:
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot10;
            var6 = var1.bind(var5)();
            _closure2_slot6 = var6;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var19 = 7;
            var1 = var9[var19];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var16 = var1.size;
            _closure2_slot7 = var16;
            var11 = var1.onLayout;
            var12 = _closure1_slot3;
            var1 = var12.useRef;
            var3 = null;
            var14 = var1.bind(var12)(var3);
            var8 = _closure1_slot0;
            var1 = 8;
            var1 = var9[var1];
            var21 = var8.bind(var5)(var1);
            var9 = var21.useStateFromStores;
            var1 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var9.bind(var21)(var8, var1);
            _closure2_slot8 = var1;
            var9 = var12.useMemo;
            var21 = var15.items;
            var8 = new Array(3);
            var8[0] = var21;
            var8[1] = var7;
            var8[2] = var1;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.canUseCollectibles;
                    var1 = _closure2_slot8;
                    var1 = var3.bind(var4)(var1);
                    var2 = _closure2_slot2;
                    var2 = var2.items;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var2.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 10;
                            var1 = var1[var7];
                            var6 = undefined;
                            var1 = var2.bind(var6)(var1);
                            var1 = var1.NONE_ITEM;
                            var1 = var3 === var1;
                            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.SHOP_ITEM;
                            var1 = var3 === var2;
case 8:
                            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var2 = _closure1_slot5;
                            var2 = var2.bind(var6)(var3);
                            var2 = !var2;
                            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 11;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.isPremiumCollectiblesPurchase;
                            var7 = _closure2_slot3;
                            var6 = var7.get;
                            var3 = var3.skuId;
                            var3 = var6.bind(var7)(var3);
                            var2 = var4.bind(var5)(var3);
case 12:
                            var1 = !var2;
case 10:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
                    _fun0002_ip = 5; continue _fun0002;
case 6:
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var22 = var9.bind(var12)(var7, var8);
            var8 = var22.findIndex;
            var7 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure1_slot5;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var3);
                    if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = var3.skuId;
                    var6 = _closure2_slot0;
                    var5 = null;
                    var5 = var5 == var6;
                    var2 = undefined;
                    if(var5) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = _closure2_slot0;
                    var2 = var4.skuId;
case 16:
                    var1 = var3 === var2;
case 14:
                    return var1;
                }
            };
            var23 = var8.bind(var22)(var7);
            var7 = 0;
            var9 = -1;
            var8 = 0;
            if(!(var9 !== var23)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = global;
            var21 = var9.Math;
            var12 = var21.floor;
            var24 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var19];
            var9 = var24.bind(var5)(var9);
            var9 = var9.ROW_SIZE;
            var9 = var23 / var9;
            var8 = var12.bind(var21)(var9);
case 18:
            var23 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = 12;
            var12 = var9[var12];
            var21 = var23.bind(var5)(var12);
            var12 = var21.chunk;
            var9 = var9[var19];
            var9 = var23.bind(var5)(var9);
            var9 = var9.ROW_SIZE;
            var12 = var12.bind(var21)(var22, var9);
            var9 = {};
            var9['shouldScroll'] = var13;
            var9['initialScrollIndex'] = var8;
            var9['flashListRef'] = var14;
            var8 = 200;
            var9['afterMs'] = var8;
            var8 = function useScrollToInitialIndexOnce(arg1) {
                var2 = arg1;
                var7 = var2.initialScrollIndex;
                var _closure3_slot0 = var7;
                var8 = var2.shouldScroll;
                var _closure3_slot1 = var8;
                var5 = var2.flashListRef;
                var _closure3_slot2 = var5;
                var6 = var2.afterMs;
                var _closure3_slot3 = var6;
                var4 = _closure1_slot3;
                var3 = var4.useRef;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot4 = var2;
                var3 = var4.useEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0005_ip = 15; continue _fun0005 }
case 20:
                        var2 = _closure3_slot1;
case 15:
                        if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var3 = _closure3_slot4;
                        var3 = var3.current;
                        var2 = !var3;
case 21:
                        if(!var2) { _fun0005_ip = 5; continue _fun0005 }
case 23:
                        var3 = _closure3_slot4;
                        var2 = true;
                        var3['current'] = var2;
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = _closure3_slot3;
                        var2 = undefined;
                        var1 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var1 = _closure3_slot2;
                                var3 = var1.current;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                                var2 = var3.scrollToIndex;
                                var1 = {};
                                var5 = true;
                                var1['animated'] = var5;
                                var4 = _closure3_slot0;
                                var1['index'] = var4;
                                var1 = var2.bind(var3)(var1);
case 24:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var2)(var1, var3);
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var8 = var8.bind(var5)(var9);
            var13 = _closure1_slot3;
            var9 = var13.useCallback;
            var8 = new Array(6);
            var8[0] = var20;
            var8[1] = var18;
            var8[2] = var17;
            var8[3] = var16;
            var16 = var6.row;
            var8[4] = var16;
            var8[5] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var11 = var1.item;
                var4 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = _closure2_slot6;
                var6 = var6.row;
                var2['style'] = var6;
                var8 = new Array(2);
                var7 = 0;
                var12 = var8;
                var10 = 0;
                var9 = arraySpread(var12, var11, var10);
                var6 = null;
                var8[var9] = var6;
                var5 = 1;
                var5 = var9 + var5;
                var8[var5] = var6;
                var6 = var8.slice;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var5 = var5.ROW_SIZE;
                var7 = var6.bind(var8)(var7, var5);
                var6 = var7.map;
                var5 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var7 = 10;
                        var3 = var3[var7];
                        var5 = undefined;
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.NONE_ITEM;
                        if(!(var2 !== var3)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.SHOP_ITEM;
                        if(!(var2 !== var3)) { _fun0007_ip = 28; continue _fun0007 }
case 5:
                        var3 = _closure1_slot5;
                        var3 = var3.bind(var5)(var2);
                        if(var3) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                        var8 = _closure1_slot8;
                        var7 = _closure1_slot4;
                        var4 = {};
                        var3 = {};
                        var10 = _closure2_slot7;
                        var3['height'] = var10;
                        var9 = _closure2_slot7;
                        var3['width'] = var9;
                        var4['style'] = var3;
                        var3 = arg2;
                        var3 = var8.bind(var5)(var7, var4, var3);
                        return var3;
case 29:
                        var4 = _closure2_slot0;
                        var3 = null;
                        var3 = var3 == var4;
                        var4 = undefined;
                        if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                        var3 = _closure2_slot0;
                        var4 = var3.skuId;
case 31:
                        var3 = var2.skuId;
                        var10 = var4 === var3;
                        var7 = _closure1_slot8;
                        var4 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 13;
                        var3 = var11[var3];
                        var3 = var4.bind(var5)(var3);
                        var4 = var3.EditCollectiblesListItemProduct;
                        var3 = {};
                        var9 = var2.skuId;
                        var3['skuId'] = var9;
                        var9 = var2.label;
                        var3['accessibilityLabel'] = var9;
                        var9 = _closure2_slot7;
                        var3['size'] = var9;
                        var9 = function onPress() {
                            var3 = _closure2_slot1;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3['onPress'] = var9;
                        var3['isSelected'] = var10;
                        var8 = _closure2_slot5;
                        var3['isTryItOut'] = var8;
                        var9 = _closure1_slot1;
                        var8 = 15;
                        var8 = var11[var8];
                        var9 = var9.bind(var5)(var8);
                        var8 = {};
                        var8['avatarDecoration'] = var2;
                        var11 = _closure1_slot7;
                        var8['size'] = var11;
                        var8['animate'] = var10;
                        var8 = var7.bind(var5)(var9, var8);
                        var3['children'] = var8;
                        var2 = var2.skuId;
                        var2 = var7.bind(var5)(var4, var3, var2);
                        return var2;
case 28:
                        var7 = _closure1_slot8;
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 13;
                        var2 = var9[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.EditCollectiblesListItemShop;
                        var3 = {};
                        var2 = _closure2_slot7;
                        var3['size'] = var2;
                        var8 = _closure1_slot1;
                        var2 = 14;
                        var2 = var9[var2];
                        var2 = var8.bind(var5)(var2);
                        var2 = var2.EDIT_AVATAR_DECORATION_SHEET;
                        var3['analyticsSource'] = var2;
                        var2 = 'shop';
                        var2 = var7.bind(var5)(var4, var3, var2);
                        return var2;
case 26:
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var1 = var2.bind(var5)(var1);
                        var3 = var1.EditCollectiblesListItemNone;
                        var2 = {};
                        var7 = _closure2_slot7;
                        var2['size'] = var7;
                        var6 = function onPress() {
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var2['onPress'] = var6;
                        var7 = _closure2_slot0;
                        var6 = null;
                        var7 = var6 === var7;
                        var2['isSelected'] = var7;
                        var1 = _closure2_slot4;
                        var1 = var6 != var1;
                        var2['asDefault'] = var1;
                        var1 = 'none';
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13 = var9.bind(var13)(var4, var8);
            if(!(var3 != var1)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var1 = {};
            var6 = var6.avatarDecorationSection;
            var1['style'] = var6;
            var6 = var12.length;
            var7 = var6 > var7;
            if(!var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var9 = _closure1_slot8;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 16;
            var6 = var17[var6];
            var6 = var18.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'heading-sm/medium', 'color': 'mobile-text-heading-primary', 'style': null, 'accessibilityRole': 'header'};
            var16 = {};
            var17 = var17[var19];
            var17 = var18.bind(var5)(var17);
            var17 = var17.GUTTER_SIZE;
            var16['paddingHorizontal'] = var17;
            var6['style'] = var16;
            var15 = var15.header;
            var6['children'] = var15;
            var7 = var9.bind(var5)(var8, var6);
case 35:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 17;
            var7 = var18[var7];
            var7 = var17.bind(var5)(var7);
            var8 = var7.FlashList;
            var7 = {};
            var7['ref'] = var14;
            var14 = 18;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.w+hNj2;
            var14 = var15.bind(var16)(var14);
            var7['accessibilityLabel'] = var14;
            var7['renderItem'] = var13;
            var7['data'] = var12;
            var7['onLayout'] = var11;
            var11 = 'always';
            var7['keyboardShouldPersistTaps'] = var11;
            var11 = {};
            var12 = 4;
            var11['paddingHorizontal'] = var12;
            var7['contentContainerStyle'] = var11;
            var11 = 98;
            var7['estimatedItemSize'] = var11;
            var10 = function ItemSeparatorComponent() {
                var4 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var6 = var6.GUTTER_SIZE;
                var5['height'] = var6;
                var2['style'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7['ItemSeparatorComponent'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 37; continue _fun0001;
case 33:
            var1 = _closure1_slot11;
case 37:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();