// app/modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var9 = var2.bind(var1)(var7);
    var _closure1_slot3 = var9;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.isProfileEffectRecord;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.SAMPLE_PROFILE_ASPECT_RATIO;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.jsx;
    var _closure1_slot6 = var7;
    var7 = var2.Fragment;
    var _closure1_slot7 = var7;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var7 = var8.createStyles;
    var2 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var11 = 6;
    var13 = var6[var11];
    var13 = var5.bind(var1)(var13);
    var13 = var13.GUTTER_SIZE;
    var10['paddingHorizontal'] = var13;
    var2['row'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.GUTTER_SIZE;
    var10['height'] = var11;
    var2['rowSpacer'] = var10;
    var11 = '100%';
    var10 = {'overflow': 'hidden', 'width': '100%', 'height': '100%'};
    var2['profileEffect'] = var10;
    var10 = {};
    var10['aspectRatio'] = var12;
    var10['width'] = var11;
    var2['sampleProfile'] = var10;
    var2 = var7.bind(var8)(var2);
    var _closure1_slot9 = var2;
    var7 = var9.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.items;
            var1 = var2.selectedSkuId;
            var _closure2_slot0 = var1;
            var1 = var2.setSelectedProfileEffect;
            var _closure2_slot1 = var1;
            var3 = var2.guildId;
            var _closure2_slot2 = var3;
            var3 = var2.isTryItOut;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot3 = var3;
            var2 = var2.size;
            var _closure2_slot4 = var2;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot9;
            var9 = var2.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot5 = var1;
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var5 = {};
            var12 = var9.row;
            var5['style'] = var12;
            var13 = new Array(2);
            var12 = 0;
            var18 = var13;
            var17 = var11;
            var16 = 0;
            var15 = arraySpread(var18, var17, var16);
            var14 = null;
            var13[14] = var14;
            var11 = 1;
            var11 = var15 + var11;
            var13[10] = var14;
            var11 = var13.slice;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 6;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.ROW_SIZE;
            var11 = var11.bind(var13)(var12, var10);
            var10 = var11.map;
            var6 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 7;
                    var3 = var3[var6];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.NONE_ITEM;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.SHOP_ITEM;
                    if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot5;
                    var3 = var3.bind(var5)(var2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = _closure1_slot6;
                    var6 = _closure1_slot4;
                    var4 = {};
                    var3 = {};
                    var8 = _closure2_slot4;
                    var3['height'] = var8;
                    var3['width'] = var8;
                    var4['style'] = var3;
                    var3 = arg2;
                    var3 = var7.bind(var5)(var6, var4, var3);
                    return var3;
case 8:
                    var9 = _closure2_slot0;
                    var8 = var2.skuId;
                    var6 = _closure1_slot6;
                    var4 = _closure1_slot10;
                    var3 = {};
                    var3['item'] = var2;
                    var8 = var9 === var8;
                    var3['isSelected'] = var8;
                    var8 = _closure2_slot1;
                    var3['setSelectedProfileEffect'] = var8;
                    var8 = _closure2_slot3;
                    var3['isTryItOut'] = var8;
                    var7 = _closure2_slot4;
                    var3['size'] = var7;
                    var2 = var2.skuId;
                    var2 = var6.bind(var5)(var4, var3, var2);
                    return var2;
case 6:
                    var6 = _closure1_slot6;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var4 = var2.EditCollectiblesListItemShop;
                    var3 = {};
                    var2 = _closure2_slot4;
                    var3['size'] = var2;
                    var7 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.EDIT_PROFILE_EFFECT_SHEET;
                    var3['analyticsSource'] = var2;
                    var2 = 'shop';
                    var2 = var6.bind(var5)(var4, var3, var2);
                    return var2;
case 4:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.EditCollectiblesListItemNone;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var2['size'] = var6;
                    var6 = _closure2_slot5;
                    var2['onPress'] = var6;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var7 = var6 == var7;
                    var2['isSelected'] = var7;
                    var1 = _closure2_slot2;
                    var1 = var6 != var1;
                    var2['asDefault'] = var1;
                    var1 = 'none';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6);
            var5['children'] = var6;
            var6 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var9 = var9.rowSpacer;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var9)(var2);
    var7 = 'EditProfileEffectRow';
    var2['displayName'] = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var13 = var3.item;
            var _closure2_slot0 = var13;
            var11 = var3.isSelected;
            var2 = var3.setSelectedProfileEffect;
            var _closure2_slot1 = var2;
            var9 = var3.isTryItOut;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = false;
case 10:
            var7 = var3.size;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot9;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var13.skuId;
            var6 = var5.bind(var4)(var3);
            _closure2_slot2 = var6;
            var12 = _closure1_slot3;
            var5 = var12.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var13;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = var5.bind(var12)(var2, var3);
            var3 = var12.useMemo;
            var5 = null;
            var2 = var5 == var6;
            var14 = undefined;
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var14 = var6.thumbnailPreviewSrc;
case 12:
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var5 = null;
                    var4 = var5 == var1;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure2_slot2;
                    var1 = var4.thumbnailPreviewSrc;
case 14:
                    if(!(var5 != var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var1 = _closure2_slot2;
                    var7 = var1.thumbnailPreviewSrc;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var4 = '';
                    var1 = '?width=100&height=195';
                    var1 = var6.bind(var4)(var7, var1);
                    _fun0004_ip = 18; continue _fun0004;
case 16:
                    var4 = _closure2_slot2;
                    var4 = var5 == var4;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = _closure2_slot2;
                    var2 = var3.thumbnailPreviewSrc;
case 19:
                    var1 = var2;
case 18:
                    return var1;
                }
            };
            var12 = var3.bind(var12)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 8;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.EditCollectiblesListItemProduct;
            var1 = {};
            var14 = var13.skuId;
            var1['skuId'] = var14;
            var1['isSelected'] = var11;
            var1['onPress'] = var10;
            var1['isTryItOut'] = var9;
            var1['size'] = var7;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = var6.accessibilityLabel;
case 21:
            var1['accessibilityLabel'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {'style': null, 'accessible': false, 'importantForAccessibility': 'no'};
            var10 = var15.profileEffect;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var11 = 6;
            var10['borderRadius'] = var11;
            var9[1] = var10;
            var5['style'] = var9;
            var11 = _closure1_slot6;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 11;
            var8 = var14[var8];
            var9 = var10.bind(var4)(var8);
            var8 = {};
            var16 = {};
            var17 = 12;
            var17 = var14[var17];
            var17 = var10.bind(var4)(var17);
            var16['uri'] = var17;
            var8['source'] = var16;
            var15 = var15.sampleProfile;
            var8['style'] = var15;
            var15 = 'cover';
            var8['resizeMode'] = var15;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 13;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {'skuId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var13 = var13.skuId;
            var9['skuId'] = var13;
            var9['thumbnailUrlOverride'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = 'EditProfileEffectItem';
    var7['displayName'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx';
    var4 = var5.bind(var6)(var4);
    var3['EditProfileEffectRow'] = var2;
    return var1;
})();