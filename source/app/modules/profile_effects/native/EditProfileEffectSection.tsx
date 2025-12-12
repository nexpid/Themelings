// app/modules/profile_effects/native/EditProfileEffectSection.tsx
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginBottom': 10, 'gap': 5};
    var4['profileEffectSection'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.GUTTER_SIZE;
    var9['paddingHorizontal'] = var10;
    var4['row'] = var9;
    var9 = {'overflow': 'hidden', 'width': '100%', 'height': '100%'};
    var4['profileEffect'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['sampleProfile'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = function EditProfileEffectItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var10 = var4.isSelected;
            var9 = var4.isTryItOut;
            var13 = var4.profileEffect;
            var3 = {'isSelected': 0, 'isTryItOut': 0, 'profileEffect': 0};
            var6 = null;
            var19 = var3;
            var18 = null;
            var2 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var4;
            var17 = var3;
            var5 = copyDataProperties(var19, var18, var17);
            var4 = undefined;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot9;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useProfileEffectPreset;
            var2 = var13.skuId;
            var2 = var3.bind(var7)(var2);
            var3 = var6 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.config;
case 2:
            _closure2_slot0 = var7;
            var11 = _closure1_slot3;
            var3 = var11.useMemo;
            var2 = var6 == var7;
            var12 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var7.thumbnailPreviewSrc;
case 4:
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var4 = var5 == var1;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot0;
                    var1 = var4.thumbnailPreviewSrc;
case 6:
                    if(!(var5 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot0;
                    var7 = var1.thumbnailPreviewSrc;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var4 = '';
                    var1 = '?width=100&height=195';
                    var1 = var6.bind(var4)(var7, var1);
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var4 = _closure2_slot0;
                    var4 = var5 == var4;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var3 = _closure2_slot0;
                    var2 = var3.thumbnailPreviewSrc;
case 11:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var12 = var3.bind(var11)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 13;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.EditCollectiblesListItemProduct;
            var1 = {};
            var1['isSelected'] = var10;
            var1['isTryItOut'] = var9;
            var9 = var6 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var7.accessibilityLabel;
case 13:
            var1['accessibilityLabel'] = var6;
            var6 = var13.skuId;
            var1['skuId'] = var6;
            var19 = var1;
            var18 = var5;
            var5 = copyDataProperties(var19, var18);
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var10 = var15.profileEffect;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var11 = 6;
            var10['borderRadius'] = var11;
            var9[1] = var10;
            var5['style'] = var9;
            var11 = _closure1_slot7;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 19;
            var8 = var14[var8];
            var9 = var10.bind(var4)(var8);
            var8 = {};
            var16 = 20;
            var16 = var14[var16];
            var16 = var10.bind(var4)(var16);
            var8['source'] = var16;
            var15 = var15.sampleProfile;
            var8['style'] = var15;
            var15 = true;
            var8['disableColor'] = var15;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 21;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {'skuId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var13 = var13.skuId;
            var9['skuId'] = var13;
            var9['thumbnailUrlOverride'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/native/EditProfileEffectSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var16 = var1.selectedProfileEffect;
            var _closure2_slot0 = var16;
            var13 = var1.setSelectedProfileEffect;
            var _closure2_slot1 = var13;
            var7 = var1.section;
            var _closure2_slot2 = var7;
            var18 = var1.guildId;
            var _closure2_slot3 = var18;
            var1 = var1.isTryItOut;
            var _closure2_slot4 = var1;
            var2 = _closure1_slot9;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var _closure2_slot5 = var6;
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var14 = 6;
            var3 = var2[var14];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var12 = var3.size;
            var _closure2_slot6 = var12;
            var10 = var3.onLayout;
            var17 = _closure1_slot0;
            var3 = 7;
            var8 = var2[var3];
            var19 = var17.bind(var4)(var8);
            var15 = var19.useStateFromStores;
            var8 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var1 = _closure1_slot5;
                var1 = var1.purchases;
                return var1;
            };
            var19 = var15.bind(var19)(var11, var8);
            var _closure2_slot7 = var19;
            var3 = var2[var3];
            var15 = var17.bind(var4)(var3);
            var11 = var15.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var15)(var8, var3);
            var _closure2_slot8 = var3;
            var8 = _closure1_slot3;
            var15 = var8.useMemo;
            var20 = var7.items;
            var11 = new Array(3);
            var11[0] = var20;
            var11[1] = var19;
            var11[2] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.canUseCollectibles;
                    var1 = _closure2_slot8;
                    var1 = var3.bind(var4)(var1);
                    var2 = _closure2_slot2;
                    var2 = var2.items;
                    if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
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
                            var5 = _closure2_slot7;
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
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var15 = var15.bind(var8)(var3, var11);
            var3 = 12;
            var3 = var2[var3];
            var11 = var17.bind(var4)(var3);
            var3 = var11.chunk;
            var2 = var2[var14];
            var2 = var17.bind(var4)(var2);
            var2 = var2.ROW_SIZE;
            var11 = var3.bind(var11)(var15, var2);
            var15 = null;
            var17 = var15 != var16;
            var _closure2_slot9 = var17;
            var3 = var8.useCallback;
            var2 = new Array(7);
            var2[0] = var18;
            var2[1] = var17;
            var17 = var15 == var16;
            var15 = undefined;
            if(var17) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var15 = var16.skuId;
case 18:
            var2[2] = var15;
            var2[3] = var13;
            var2[4] = var12;
            var12 = var6.row;
            var2[5] = var12;
            var2[6] = var1;
            var1 = function(arg1) {
                var1 = arg1;
                var11 = var1.item;
                var4 = _closure1_slot7;
                var3 = _closure1_slot4;
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
                        var5 = _closure1_slot7;
                        var4 = _closure1_slot4;
                        var3 = {};
                        var1 = {};
                        var2 = _closure2_slot6;
                        var1['height'] = var2;
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
                    var4 = function() {
                        var5 = _closure1_slot7;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.EditCollectiblesListItemNone;
                        var2 = {};
                        var6 = _closure2_slot6;
                        var2['size'] = var6;
                        var6 = function onPress() {
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var2['onPress'] = var6;
                        var6 = _closure2_slot9;
                        var6 = !var6;
                        var2['isSelected'] = var6;
                        var6 = _closure2_slot3;
                        var1 = null;
                        var1 = var1 != var6;
                        var2['asDefault'] = var1;
                        var1 = 'none';
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var5 = var8.bind(var9)(var5, var4);
                    var4 = var5.with;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var3 = var2.SHOP_ITEM;
                    var2 = function() {
                        var5 = _closure1_slot7;
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 13;
                        var2 = var7[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.EditCollectiblesListItemShop;
                        var2 = {};
                        var6 = _closure2_slot6;
                        var2['size'] = var6;
                        var6 = _closure1_slot1;
                        var1 = 14;
                        var1 = var7[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.EDIT_PROFILE_EFFECT_SHEET;
                        var2['analyticsSource'] = var1;
                        var1 = 'shop';
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.otherwise;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure2_slot0;
                            var2 = null;
                            var2 = var2 == var3;
                            var5 = undefined;
                            var8 = undefined;
                            if(var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var2 = _closure2_slot0;
                            var8 = var2.skuId;
case 20:
                            var7 = var1.skuId;
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot10;
                            var2 = {};
                            var2['profileEffect'] = var1;
                            var10 = _closure2_slot6;
                            var2['size'] = var10;
                            var9 = function onPress() {
                                var3 = _closure2_slot1;
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onPress'] = var9;
                            var7 = var8 === var7;
                            var2['isSelected'] = var7;
                            var6 = _closure2_slot4;
                            var2['isTryItOut'] = var6;
                            var1 = var1.skuId;
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
            var12 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.profileEffectSection;
            var1['style'] = var6;
            var8 = _closure1_slot7;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 15;
            var5 = var17[var5];
            var5 = var16.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'heading-sm/medium', 'color': 'mobile-text-heading-primary'};
            var13 = {};
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.GUTTER_SIZE;
            var13['paddingHorizontal'] = var14;
            var5['style'] = var13;
            var7 = var7.header;
            var5['children'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 16;
            var6 = var17[var6];
            var6 = var16.bind(var4)(var6);
            var7 = var6.FlashList;
            var6 = {};
            var13 = 17;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.t8CdeV;
            var13 = var14.bind(var15)(var13);
            var6['accessibilityLabel'] = var13;
            var6['renderItem'] = var12;
            var6['data'] = var11;
            var6['onLayout'] = var10;
            var10 = 'always';
            var6['keyboardShouldPersistTaps'] = var10;
            var10 = {};
            var11 = 4;
            var10['paddingHorizontal'] = var11;
            var6['contentContainerStyle'] = var10;
            var10 = 98;
            var6['estimatedItemSize'] = var10;
            var9 = function ItemSeparatorComponent() {
                var4 = _closure1_slot7;
                var3 = _closure1_slot4;
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
            var6['ItemSeparatorComponent'] = var9;
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