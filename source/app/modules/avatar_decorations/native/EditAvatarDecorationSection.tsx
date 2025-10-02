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
    var8 = var4.ActivityIndicator;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AVATAR_DECORATION_SIZE;
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
    var4 = {};
    var9 = {'marginBottom': 10, 'gap': 5};
    var4['avatarDecorationSection'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.GUTTER_SIZE;
    var9['paddingHorizontal'] = var10;
    var4['row'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
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
            var17 = var1.selectedAvatarDecoration;
            var _closure2_slot0 = var17;
            var16 = var1.setSelectedAvatarDecoration;
            var _closure2_slot1 = var16;
            var15 = var1.section;
            var _closure2_slot2 = var15;
            var7 = var1.purchases;
            var _closure2_slot3 = var7;
            var13 = var1.scrollToInitialItem;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = false;
case 2:
            var18 = var1.guildId;
            var _closure2_slot4 = var18;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = _closure1_slot10;
            var4 = var1.bind(var5)();
            _closure2_slot5 = var4;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var19 = 6;
            var1 = var9[var19];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.size;
            _closure2_slot6 = var3;
            var11 = var1.onLayout;
            var12 = _closure1_slot3;
            var1 = var12.useRef;
            var2 = null;
            var14 = var1.bind(var12)(var2);
            var8 = _closure1_slot0;
            var1 = 7;
            var1 = var9[var1];
            var20 = var8.bind(var5)(var1);
            var9 = var20.useStateFromStores;
            var1 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var9.bind(var20)(var8, var1);
            _closure2_slot7 = var1;
            var9 = var12.useMemo;
            var20 = var15.items;
            var8 = new Array(3);
            var8[0] = var20;
            var8[1] = var7;
            var8[2] = var1;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.canUseCollectibles;
                    var1 = _closure2_slot7;
                    var1 = var3.bind(var4)(var1);
                    var2 = _closure2_slot2;
                    var2 = var2.items;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                    var3 = var2.filter;
                    var1 = function(arg1) {
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 9;
                        var2 = var7[var2];
                        var3 = undefined;
                        var5 = var6.bind(var3)(var2);
                        var4 = var5.match;
                        var2 = arg1;
                        var9 = var4.bind(var5)(var2);
                        var8 = var9.with;
                        var2 = 10;
                        var4 = var7[var2];
                        var4 = var6.bind(var3)(var4);
                        var5 = var4.NONE_ITEM;
                        var4 = function() {
                            var1 = true;
                            return var1;
                        };
                        var5 = var8.bind(var9)(var5, var4);
                        var4 = var5.with;
                        var2 = var7[var2];
                        var2 = var6.bind(var3)(var2);
                        var3 = var2.SHOP_ITEM;
                        var2 = function() {
                            var1 = true;
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = var3.otherwise;
                        var1 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isPremiumCollectiblesPurchase;
                            var5 = _closure2_slot3;
                            var4 = var5.get;
                            var1 = arg1;
                            var1 = var1.skuId;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            var1 = !var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    _fun0002_ip = 5; continue _fun0002;
case 4:
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var21 = var9.bind(var12)(var7, var8);
            var8 = var21.findIndex;
            var7 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot0;
                    var1 = var3.id;
case 6:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var22 = var8.bind(var21)(var7);
            var7 = 0;
            var9 = -1;
            var8 = 0;
            if(!(var9 !== var22)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = global;
            var20 = var9.Math;
            var12 = var20.floor;
            var23 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var19];
            var9 = var23.bind(var5)(var9);
            var9 = var9.ROW_SIZE;
            var9 = var22 / var9;
            var8 = var12.bind(var20)(var9);
case 8:
            var22 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = 12;
            var12 = var9[var12];
            var20 = var22.bind(var5)(var12);
            var12 = var20.chunk;
            var9 = var9[var19];
            var9 = var22.bind(var5)(var9);
            var9 = var9.ROW_SIZE;
            var12 = var12.bind(var20)(var21, var9);
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var2 = _closure3_slot1;
case 10:
                        if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 12:
                        var3 = _closure3_slot4;
                        var3 = var3.current;
                        var2 = !var3;
case 6:
                        if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var3 = _closure3_slot4;
                        var2 = true;
                        var3['current'] = var2;
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = _closure3_slot3;
                        var2 = undefined;
                        var1 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = _closure3_slot2;
                                var3 = var1.current;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                                var2 = var3.scrollToIndex;
                                var1 = {};
                                var5 = true;
                                var1['animated'] = var5;
                                var4 = _closure3_slot0;
                                var1['index'] = var4;
                                var1 = var2.bind(var3)(var1);
case 15:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var2)(var1, var3);
case 13:
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
            var8 = new Array(5);
            var8[0] = var18;
            var8[1] = var17;
            var8[2] = var16;
            var8[3] = var3;
            var3 = var4.row;
            var8[4] = var3;
            var3 = function(arg1) {
                var1 = arg1;
                var11 = var1.item;
                var4 = _closure1_slot8;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = _closure2_slot5;
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
                var1 = 6;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var5 = var5.ROW_SIZE;
                var7 = var6.bind(var8)(var7, var5);
                var6 = var7.map;
                var5 = function(arg1, arg2) {
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var2);
                    var4 = var5.match;
                    var2 = arg1;
                    var8 = var4.bind(var5)(var2);
                    var5 = var8.with;
                    var4 = null;
                    var2 = function() {
                        var5 = _closure1_slot8;
                        var4 = _closure1_slot5;
                        var3 = {};
                        var1 = {};
                        var6 = _closure2_slot6;
                        var1['height'] = var6;
                        var2 = _closure2_slot6;
                        var1['width'] = var2;
                        var3['style'] = var1;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var9 = var5.bind(var8)(var4, var2);
                    var8 = var9.with;
                    var2 = 10;
                    var4 = var7[var2];
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.NONE_ITEM;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var5 = var1.id;
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.EditCollectiblesListItemNone;
                        var1 = {};
                        var7 = _closure2_slot6;
                        var1['size'] = var7;
                        var7 = function onPress() {
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1['onPress'] = var7;
                        var8 = _closure2_slot0;
                        var7 = null;
                        var8 = var7 === var8;
                        var1['isSelected'] = var8;
                        var6 = _closure2_slot4;
                        var6 = var7 != var6;
                        var1['asDefault'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    };
                    var5 = var8.bind(var9)(var5, var4);
                    var4 = var5.with;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var3 = var2.SHOP_ITEM;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var5 = var1.id;
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 13;
                        var1 = var8[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.EditCollectiblesListItemShop;
                        var1 = {};
                        var7 = _closure2_slot6;
                        var1['size'] = var7;
                        var7 = _closure1_slot1;
                        var6 = 14;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.EDIT_AVATAR_DECORATION_SHEET;
                        var1['analyticsSource'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.otherwise;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure2_slot0;
                            var2 = null;
                            var2 = var2 == var3;
                            var5 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                            var2 = _closure2_slot0;
                            var3 = var2.skuId;
case 17:
                            var2 = var1.skuId;
                            var8 = var3 === var2;
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 13;
                            var2 = var10[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.EditCollectiblesListItemProduct;
                            var2 = {};
                            var11 = var1.skuId;
                            var2['skuId'] = var11;
                            var11 = var1.label;
                            var2['accessibilityLabel'] = var11;
                            var7 = _closure2_slot6;
                            var2['size'] = var7;
                            var6 = function onPress() {
                                var3 = _closure2_slot1;
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onPress'] = var6;
                            var2['isSelected'] = var8;
                            var7 = _closure1_slot1;
                            var6 = 15;
                            var6 = var10[var6];
                            var7 = var7.bind(var5)(var6);
                            var6 = {};
                            var6['avatarDecoration'] = var1;
                            var9 = _closure1_slot7;
                            var6['size'] = var9;
                            var6['animate'] = var8;
                            var6 = var4.bind(var5)(var7, var6);
                            var2['children'] = var6;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13 = var9.bind(var13)(var3, var8);
            if(!(var2 != var1)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var4.avatarDecorationSection;
            var1['style'] = var4;
            var4 = var12.length;
            var7 = var4 > var7;
            if(!var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = _closure1_slot8;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var4 = 16;
            var4 = var17[var4];
            var4 = var18.bind(var5)(var4);
            var8 = var4.Text;
            var4 = {'variant': 'heading-sm/medium', 'color': 'header-primary'};
            var16 = {};
            var17 = var17[var19];
            var17 = var18.bind(var5)(var17);
            var17 = var17.GUTTER_SIZE;
            var16['paddingHorizontal'] = var17;
            var4['style'] = var16;
            var15 = var15.header;
            var4['children'] = var15;
            var7 = var9.bind(var5)(var8, var4);
case 21:
            var4 = new Array(2);
            var4[0] = var7;
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
            var14 = var14.w+hNj4;
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
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
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
            var4[1] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = _closure1_slot4;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 23:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();