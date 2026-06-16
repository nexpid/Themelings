// app/modules/collectibles/native/ProductDetailsActionSheetPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
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
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShopCtaEnum;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['previewContainer'] = var9;
    var9 = {};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var9['borderBottomColor'] = var13;
    var9['borderBottomWidth'] = var10;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var9['paddingBottom'] = var11;
    var9['flex'] = var10;
    var4['previewDivider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 7;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.CollectiblesItemType;
    var8 = var8.PROFILE_EFFECT;
    var4['profile'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.CollectiblesItemType;
    var8 = var8.AVATAR_DECORATION;
    var4['decoration'] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.CollectiblesItemType;
    var7 = var7.NAMEPLATE;
    var4['nameplate'] = var7;
    var _closure1_slot12 = var4;
    var4 = function BundleProductPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.product;
            var9 = var1.width;
            var8 = var1.handlePreviewPress;
            var7 = var1.onTrackPress;
            var6 = var1.onActiveItemChange;
            var13 = var1.onActiveItemTypeChange;
            var1 = _closure1_slot11;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useCollectiblesMobileFlexibleBundlesExperiment;
            var1 = 'ProductDetailsActionSheetPreview';
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var4 = _closure1_slot9;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot7;
            var1 = {};
            var11 = var11.previewDivider;
            var1['style'] = var11;
            var12 = _closure1_slot14;
            var11 = {};
            var11['product'] = var10;
            var11['width'] = var9;
            var11['handlePreviewPress'] = var8;
            var11['onTrackPress'] = var7;
            var11['onActiveItemTypeChange'] = var13;
            var11 = var4.bind(var5)(var12, var11);
            var1['children'] = var11;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['product'] = var10;
            var2['width'] = var9;
            var2['handlePreviewPress'] = var8;
            var2['onTrackPress'] = var7;
            var2['onActiveItemChange'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function BundlePreview(arg1) {
        var1 = arg1;
        var14 = var1.product;
        var _closure2_slot0 = var14;
        var7 = var1.width;
        var _closure2_slot1 = var7;
        var13 = var1.handlePreviewPress;
        var _closure2_slot2 = var13;
        var8 = var1.onTrackPress;
        var _closure2_slot3 = var8;
        var1 = var1.onActiveItemTypeChange;
        var _closure2_slot4 = var1;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var1 = var11[var1];
        var4 = undefined;
        var2 = var9.bind(var4)(var1);
        var1 = var2.useShopProductItems;
        var10 = var1.bind(var2)(var14);
        var _closure2_slot5 = var10;
        var1 = _closure1_slot6;
        var6 = 0;
        var3 = var1.bind(var4)(var6);
        var2 = _closure1_slot3;
        var1 = 2;
        var3 = var2.bind(var4)(var3, var1);
        var1 = var3[var6];
        var _closure2_slot6 = var1;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot7 = var2;
        var3 = _closure1_slot5;
        var2 = new Array(6);
        var2[0] = var14;
        var2[1] = var7;
        var2[2] = var13;
        var2[3] = var10;
        var2[4] = var8;
        var2[5] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot5;
                var2 = var1.firstProfileEffect;
                var1 = null;
                var3 = var1 != var2;
                var2 = null;
                if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = {};
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var10 = var9[var6];
                var7 = undefined;
                var10 = var5.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var9[var6];
                var6 = var5.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.s+YSgo;
                var6 = var10.bind(var11)(var6);
                var3['label'] = var6;
                var6 = 'profile';
                var3['id'] = var6;
                var6 = _closure1_slot9;
                var4 = 12;
                var4 = var9[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.ProfileEffectPreview;
                var4 = {};
                var9 = _closure2_slot5;
                var9 = var9.firstProfileEffect;
                var4['profileEffect'] = var9;
                var9 = _closure2_slot6;
                var4['profileEffectRestartKey'] = var9;
                var9 = _closure2_slot1;
                var4['width'] = var9;
                var9 = _closure2_slot2;
                var4['handlePreviewPress'] = var9;
                var9 = _closure2_slot3;
                var4['onTrackPress'] = var9;
                var4 = var6.bind(var7)(var5, var4);
                var3['page'] = var4;
                var2 = var3;
case 5:
                var3 = new Array(3);
                var3[0] = var2;
                var2 = _closure2_slot5;
                var2 = var2.firstAvatarDecoration;
                var4 = var1 != var2;
                var2 = null;
                if(!var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var4 = {};
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 11;
                var11 = var10[var7];
                var9 = undefined;
                var11 = var6.bind(var9)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var7 = var10[var7];
                var7 = var6.bind(var9)(var7);
                var7 = var7.t;
                var7 = var7.aVCcr8;
                var7 = var11.bind(var12)(var7);
                var4['label'] = var7;
                var7 = 'decoration';
                var4['id'] = var7;
                var7 = _closure1_slot9;
                var5 = 12;
                var5 = var10[var5];
                var5 = var6.bind(var9)(var5);
                var6 = var5.AvatarDecorationPreview;
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
case 7:
                var3[1] = var2;
                var2 = _closure2_slot5;
                var2 = var2.firstNameplate;
                var2 = var1 != var2;
                var1 = null;
                if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var2 = {};
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var10 = var9[var6];
                var7 = undefined;
                var10 = var5.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var9[var6];
                var6 = var5.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.HNnSVZ;
                var6 = var10.bind(var11)(var6);
                var2['label'] = var6;
                var6 = 'nameplate';
                var2['id'] = var6;
                var6 = _closure1_slot9;
                var4 = 12;
                var4 = var9[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.NameplatePreview;
                var4 = {};
                var8 = _closure2_slot0;
                var4['product'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['page'] = var4;
                var1 = var2;
case 9:
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
        var8 = var3.bind(var4)(var1, var2);
        var _closure2_slot8 = var8;
        var1 = 13;
        var1 = var11[var1];
        var3 = var9.bind(var4)(var1);
        var2 = var3.useSegmentedControlState;
        var1 = {};
        var1['items'] = var8;
        var1['pageWidth'] = var7;
        var1['defaultIndex'] = var6;
        var6 = function onPageChange(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot8;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var5 = var1 == var3;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0003_ip = 11; continue _fun0003 }
case 6:
                var4 = var3.id;
case 11:
                var3 = 'profile';
                if(!(var3 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = _closure2_slot7;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = 1;
                    var1 = var2 + var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
case 12:
                return var1;
            }
        };
        var1['onPageChange'] = var6;
        var5 = function onSetActiveIndex(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot8;
                var1 = arg1;
                var3 = var3[var1];
                var4 = null;
                var6 = var4 == var3;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0004_ip = 11; continue _fun0004 }
case 6:
                var5 = var3.id;
case 11:
                if(!(var4 != var5)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = _closure1_slot12;
                var6 = var3[var5];
                if(!(var4 != var6)) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                var3 = _closure2_slot4;
                if(!(var4 != var3)) { _fun0004_ip = 14; continue _fun0004 }
case 17:
                var3 = _closure2_slot4;
                var3 = var3.bind(var1)(var6);
case 14:
                var3 = 'profile';
                if(!(var3 !== var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = 'decoration';
                if(!(var3 !== var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var3 = 'nameplate';
                if(!(var3 === var5)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 3:
                var5 = _closure2_slot3;
                var3 = _closure1_slot8;
                var3 = var3.BUNDLE_VIEW_NAMEPLATE;
                var3 = var5.bind(var1)(var3);
                _fun0004_ip = 22; continue _fun0004;
case 20:
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                var5 = _closure2_slot3;
                var3 = _closure1_slot8;
                var3 = var3.BUNDLE_VIEW_AVATAR_DECORATION;
                var3 = var5.bind(var1)(var3);
                _fun0004_ip = 22; continue _fun0004;
case 18:
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 2:
                var3 = _closure2_slot3;
                var2 = _closure1_slot8;
                var2 = var2.BUNDLE_VIEW_PROFILE_EFFECT;
                var2 = var3.bind(var1)(var2);
case 22:
                return var1;
            }
        };
        var1['onSetActiveIndex'] = var5;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot7;
        var1 = {};
        var7 = _closure1_slot9;
        var5 = 14;
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
        var14 = var14.space;
        var14 = var14.PX_16;
        var8['paddingHorizontal'] = var14;
        var12 = var11[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.space;
        var12 = var12.PX_12;
        var8['paddingTop'] = var12;
        var6['style'] = var8;
        var8 = 15;
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
    var _closure1_slot14 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var14 = var2.product;
            var12 = var2.handlePreviewPress;
            var11 = var2.onTrackPress;
            var9 = var2.onBundleActiveItemTypeChange;
            var10 = var2.onBundleActiveItemChange;
            var2 = _closure1_slot11;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot6;
            var2 = 0;
            var7 = var3.bind(var4)(var2);
            var5 = _closure1_slot3;
            var3 = 2;
            var3 = var5.bind(var4)(var7, var3);
            var13 = var3[var2];
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
            var7 = var3.bind(var4)(var2, var1);
            var2 = var14.type;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var5 = var2 === var1;
            if(!var5) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isValidCollectiblesBundle;
            var5 = var1.bind(var2)(var14);
case 25:
            var3 = _closure1_slot9;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = var15.previewContainer;
            var1['style'] = var8;
            var1['onLayout'] = var7;
            var8 = _closure1_slot9;
            if(var5) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var7 = _closure1_slot7;
            var5 = {};
            var15 = var15.previewDivider;
            var5['style'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 12;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.IndividualProductPreview;
            var15 = {};
            var15['product'] = var14;
            var15['width'] = var13;
            var15['handlePreviewPress'] = var12;
            var15['onTrackPress'] = var11;
            var15 = var8.bind(var4)(var16, var15);
            var5['children'] = var15;
            var5 = var8.bind(var4)(var7, var5);
            _fun0005_ip = 29; continue _fun0005;
case 27:
            var7 = _closure1_slot13;
            var6 = {};
            var6['product'] = var14;
            var6['width'] = var13;
            var6['handlePreviewPress'] = var12;
            var6['onTrackPress'] = var11;
            var6['onActiveItemChange'] = var10;
            var6['onActiveItemTypeChange'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 29:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();