// app/modules/collectibles/native/ProductDetailsActionSheetPreview.tsx
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
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useCallback;
    var _closure1_slot4 = var7;
    var7 = var4.useMemo;
    var _closure1_slot5 = var7;
    var4 = var4.useState;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot7 = var7;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot9 = var7;
    var4 = var4.ShopCtaEnum;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var9['borderBottomColor'] = var13;
    var9['borderBottomWidth'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingBottom'] = var13;
    var9['flex'] = var12;
    var4['previewContainer'] = var9;
    var9 = {'marginTop': null, 'position': 'relative', 'height': 280};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['marginTop'] = var10;
    var4['collectiblePreview'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function ProfileEffectPreview(arg1) {
        var1 = arg1;
        var8 = var1.product;
        var7 = var1.width;
        var2 = var1.handlePreviewPress;
        var _closure2_slot0 = var2;
        var1 = var1.onTrackPress;
        var _closure2_slot1 = var1;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot7;
        var1 = {};
        var9 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot1;
                var2 = _closure1_slot10;
                var4 = var2.FULL_PROFILE_PREVIEW;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
case 2:
                var2 = _closure2_slot0;
                if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var9;
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 7;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['product'] = var8;
        var5['width'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var4 = function AvatarDecorationPreview(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var2 = var1.handlePreviewPress;
        var _closure2_slot0 = var2;
        var1 = var1.onTrackPress;
        var _closure2_slot1 = var1;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot7;
        var1 = {};
        var8 = function onPress() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = _closure2_slot1;
                var2 = _closure1_slot10;
                var4 = var2.FULL_PROFILE_PREVIEW;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
case 2:
                var2 = _closure2_slot0;
                if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var8;
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 8;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['product'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var4;
    var4 = function NameplatePreview(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot8;
        var1 = {};
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 9;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['product'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var4;
    var4 = function BundlePreview(arg1) {
        var1 = arg1;
        var10 = var1.product;
        var _closure2_slot0 = var10;
        var6 = var1.width;
        var _closure2_slot1 = var6;
        var8 = var1.handlePreviewPress;
        var _closure2_slot2 = var8;
        var1 = var1.onTrackPress;
        var _closure2_slot3 = var1;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 10;
        var2 = var11[var2];
        var4 = undefined;
        var3 = var9.bind(var4)(var2);
        var2 = var3.useShopProductItems;
        var7 = var2.bind(var3)(var10);
        var _closure2_slot4 = var7;
        var3 = _closure1_slot5;
        var2 = new Array(5);
        var2[0] = var10;
        var2[1] = var6;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var1;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot4;
                var2 = var1.firstProfileEffect;
                var1 = null;
                var3 = var1 != var2;
                var2 = null;
                if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var3 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var6 = var11[var5];
                var7 = undefined;
                var6 = var10.bind(var7)(var6);
                var9 = var6.intl;
                var6 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5.s+YSgo;
                var5 = var6.bind(var9)(var5);
                var3['label'] = var5;
                var5 = 'profile';
                var3['id'] = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot14;
                var4 = {};
                var9 = _closure2_slot0;
                var4['product'] = var9;
                var9 = _closure2_slot1;
                var4['width'] = var9;
                var9 = _closure2_slot2;
                var4['handlePreviewPress'] = var9;
                var9 = _closure2_slot3;
                var4['onTrackPress'] = var9;
                var4 = var6.bind(var7)(var5, var4);
                var3['page'] = var4;
                var2 = var3;
case 6:
                var3 = new Array(3);
                var3[0] = var2;
                var2 = _closure2_slot4;
                var2 = var2.firstAvatarDecoration;
                var4 = var1 != var2;
                var2 = null;
                if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 11;
                var7 = var12[var6];
                var9 = undefined;
                var7 = var11.bind(var9)(var7);
                var10 = var7.intl;
                var7 = var10.string;
                var6 = var12[var6];
                var6 = var11.bind(var9)(var6);
                var6 = var6.t;
                var6 = var6.aVCcr8;
                var6 = var7.bind(var10)(var6);
                var4['label'] = var6;
                var6 = 'decoration';
                var4['id'] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot15;
                var5 = {};
                var10 = _closure2_slot0;
                var5['product'] = var10;
                var10 = _closure2_slot2;
                var5['handlePreviewPress'] = var10;
                var10 = _closure2_slot3;
                var5['onTrackPress'] = var10;
                var5 = var7.bind(var9)(var6, var5);
                var4['page'] = var5;
                var2 = var4;
case 8:
                var3[1] = var2;
                var2 = _closure2_slot4;
                var2 = var2.firstNameplate;
                var2 = var1 != var2;
                var1 = null;
                if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var6 = var11[var5];
                var7 = undefined;
                var6 = var10.bind(var7)(var6);
                var9 = var6.intl;
                var6 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5.HNnSVZ;
                var5 = var6.bind(var9)(var5);
                var2['label'] = var5;
                var5 = 'nameplate';
                var2['id'] = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot16;
                var4 = {};
                var8 = _closure2_slot0;
                var4['product'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['page'] = var4;
                var1 = var2;
case 10:
                var3[2] = var1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var7 = var3.bind(var4)(var1, var2);
        var _closure2_slot5 = var7;
        var1 = 12;
        var1 = var11[var1];
        var3 = var9.bind(var4)(var1);
        var2 = var3.useSegmentedControlState;
        var1 = {};
        var1['items'] = var7;
        var1['pageWidth'] = var6;
        var6 = 0;
        var1['defaultIndex'] = var6;
        var5 = function onSetActiveIndex(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot5;
                var1 = arg1;
                var3 = var3[var1];
                var4 = null;
                var6 = var4 == var3;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 7:
                var5 = var3.id;
case 12:
                var3 = 'profile';
                if(!(var3 !== var5)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = 'decoration';
                if(!(var3 !== var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = 'nameplate';
                if(!(var3 === var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                var5 = _closure2_slot3;
                var3 = _closure1_slot10;
                var3 = var3.BUNDLE_VIEW_NAMEPLATE;
                var3 = var5.bind(var1)(var3);
                _fun0004_ip = 17; continue _fun0004;
case 15:
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 20:
                var5 = _closure2_slot3;
                var3 = _closure1_slot10;
                var3 = var3.BUNDLE_VIEW_AVATAR_DECORATION;
                var3 = var5.bind(var1)(var3);
                _fun0004_ip = 17; continue _fun0004;
case 13:
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 21:
                var3 = _closure2_slot3;
                var2 = _closure1_slot10;
                var2 = var2.BUNDLE_VIEW_PROFILE_EFFECT;
                var2 = var3.bind(var1)(var2);
case 17:
                return var1;
            }
        };
        var1['onSetActiveIndex'] = var5;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot8;
        var1 = {};
        var7 = _closure1_slot11;
        var5 = 13;
        var5 = var11[var5];
        var5 = var9.bind(var4)(var5);
        var6 = var5.SegmentedControlPages;
        var5 = {};
        var5['state'] = var10;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var8 = {};
        var13 = _closure1_slot1;
        var12 = 6;
        var14 = var11[var12];
        var14 = var13.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var8['paddingHorizontal'] = var14;
        var12 = var11[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_12;
        var8['paddingTop'] = var12;
        var6['style'] = var8;
        var8 = 14;
        var8 = var11[var8];
        var8 = var9.bind(var4)(var8);
        var9 = var8.SegmentedControl;
        var8 = {};
        var8['state'] = var10;
        var10 = 'default';
        var8['variant'] = var10;
        var8 = var7.bind(var4)(var9, var8);
        var6['children'] = var8;
        var6 = var7.bind(var4)(var2, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var4;
    var4 = function IndividualProductPreview(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.product;
            var9 = var1.width;
            var8 = var1.handlePreviewPress;
            var7 = var1.onTrackPress;
            var3 = var5.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 15;
            var2 = var2[var10];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            if(!(var2 !== var3)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var2 = null;
            return var2;
case 28:
            var3 = var5.skuId;
            var2 = _closure1_slot9;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var6 = var5.skuId;
            var2 = _closure1_slot9;
            var3 = var2.ORB_PROFILE_BADGE;
            var2 = null;
            if(!(var6 === var3)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var10 = _closure1_slot11;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 17;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.OrbBadgePreview;
            var3 = {};
            var2 = var10.bind(var4)(var6, var3);
case 32:
            _fun0005_ip = 34; continue _fun0005;
case 30:
            var10 = _closure1_slot11;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 16;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.FractionalNitroPreview;
            var3 = {};
            var2 = var10.bind(var4)(var6, var3);
case 34:
            return var2;
case 26:
            var6 = _closure1_slot11;
            var3 = _closure1_slot15;
            var2 = {};
            var2['product'] = var5;
            var2['handlePreviewPress'] = var8;
            var2['onTrackPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 24:
            var6 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var2['product'] = var5;
            var2['width'] = var9;
            var2['handlePreviewPress'] = var8;
            var2['onTrackPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 22:
            var3 = _closure1_slot11;
            var2 = _closure1_slot16;
            var1 = {};
            var1['product'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var10 = var2.product;
            var8 = var2.handlePreviewPress;
            var7 = var2.onTrackPress;
            var2 = _closure1_slot13;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot6;
            var2 = 0;
            var9 = var3.bind(var4)(var2);
            var6 = _closure1_slot3;
            var3 = 2;
            var3 = var6.bind(var4)(var9, var3);
            var9 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var11 = var3.bind(var4)(var2, var1);
            var2 = var10.type;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var6 = var2 === var1;
            if(!var6) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isValidCollectiblesBundle;
            var6 = var1.bind(var2)(var10);
case 35:
            var3 = _closure1_slot11;
            var2 = _closure1_slot8;
            var1 = {};
            var12 = var12.previewContainer;
            var1['style'] = var12;
            var1['onLayout'] = var11;
            if(var6) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var6 = _closure1_slot18;
            _fun0006_ip = 39; continue _fun0006;
case 37:
            var6 = _closure1_slot17;
case 39:
            var5 = {};
            var5['product'] = var10;
            var5['width'] = var9;
            var5['handlePreviewPress'] = var8;
            var5['onTrackPress'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();