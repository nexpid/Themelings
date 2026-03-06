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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
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
    var10 = 5;
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
    var _closure1_slot9 = var4;
    var4 = function ProfileEffectPreview(arg1) {
        var1 = arg1;
        var8 = var1.product;
        var7 = var1.width;
        var9 = var1.handlePreviewPress;
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var1['onPress'] = var9;
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 6;
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
    var _closure1_slot10 = var4;
    var4 = function AvatarDecorationPreview(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var8 = var1.handlePreviewPress;
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var1['onPress'] = var8;
        var6 = var6.collectiblePreview;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 7;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['product'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = function NameplatePreview(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
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
    var _closure1_slot12 = var4;
    var4 = function BundlePreview(arg1) {
        var2 = arg1;
        var8 = var2.product;
        var _closure2_slot0 = var8;
        var5 = var2.width;
        var _closure2_slot1 = var5;
        var7 = var2.handlePreviewPress;
        var _closure2_slot2 = var7;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 9;
        var2 = var11[var2];
        var4 = undefined;
        var3 = var9.bind(var4)(var2);
        var2 = var3.useShopProductItems;
        var6 = var2.bind(var3)(var8);
        var _closure2_slot3 = var6;
        var3 = _closure1_slot3;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var5;
        var2[2] = var7;
        var2[3] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot3;
                var2 = var1.firstProfileEffect;
                var1 = null;
                var3 = var1 != var2;
                var2 = null;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 10;
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
                var6 = _closure1_slot7;
                var5 = _closure1_slot10;
                var4 = {};
                var9 = _closure2_slot0;
                var4['product'] = var9;
                var9 = _closure2_slot1;
                var4['width'] = var9;
                var9 = _closure2_slot2;
                var4['handlePreviewPress'] = var9;
                var4 = var6.bind(var7)(var5, var4);
                var3['page'] = var4;
                var2 = var3;
case 2:
                var3 = new Array(3);
                var3[0] = var2;
                var2 = _closure2_slot3;
                var2 = var2.firstAvatarDecoration;
                var4 = var1 != var2;
                var2 = null;
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 10;
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
                var7 = _closure1_slot7;
                var6 = _closure1_slot11;
                var5 = {};
                var10 = _closure2_slot0;
                var5['product'] = var10;
                var10 = _closure2_slot2;
                var5['handlePreviewPress'] = var10;
                var5 = var7.bind(var9)(var6, var5);
                var4['page'] = var5;
                var2 = var4;
case 4:
                var3[1] = var2;
                var2 = _closure2_slot3;
                var2 = var2.firstNameplate;
                var2 = var1 != var2;
                var1 = null;
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 10;
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
                var6 = _closure1_slot7;
                var5 = _closure1_slot12;
                var4 = {};
                var8 = _closure2_slot0;
                var4['product'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['page'] = var4;
                var1 = var2;
case 6:
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
        var6 = var3.bind(var4)(var1, var2);
        var1 = 11;
        var1 = var11[var1];
        var3 = var9.bind(var4)(var1);
        var2 = var3.useSegmentedControlState;
        var1 = {};
        var1['items'] = var6;
        var1['pageWidth'] = var5;
        var5 = 0;
        var1['defaultIndex'] = var5;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var7 = _closure1_slot7;
        var5 = 12;
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
        var12 = 5;
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
        var8 = 13;
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
    var _closure1_slot13 = var4;
    var4 = function IndividualProductPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.product;
            var8 = var1.width;
            var7 = var1.handlePreviewPress;
            var3 = var5.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 14;
            var2 = var2[var9];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            if(!(var2 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = null;
            return var2;
case 14:
            var3 = var5.skuId;
            var2 = _closure1_slot6;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = var5.skuId;
            var2 = _closure1_slot6;
            var3 = var2.ORB_PROFILE_BADGE;
            var2 = null;
            if(!(var6 === var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = _closure1_slot7;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var3 = var10[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.OrbBadgePreview;
            var3 = {};
            var2 = var9.bind(var4)(var6, var3);
case 18:
            _fun0002_ip = 4; continue _fun0002;
case 16:
            var9 = _closure1_slot7;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var3 = var10[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.FractionalNitroPreview;
            var3 = {};
            var2 = var9.bind(var4)(var6, var3);
case 4:
            return var2;
case 12:
            var6 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var2['product'] = var5;
            var2['handlePreviewPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 10:
            var6 = _closure1_slot7;
            var3 = _closure1_slot10;
            var2 = {};
            var2['product'] = var5;
            var2['width'] = var8;
            var2['handlePreviewPress'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 8:
            var3 = _closure1_slot7;
            var2 = _closure1_slot12;
            var1 = {};
            var1['product'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.product;
            var7 = var1.handlePreviewPress;
            var1 = _closure1_slot9;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 17;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var8 = var1.width;
            var2 = var9.type;
            var3 = _closure1_slot0;
            var1 = 14;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var6 = var2 === var1;
            if(!var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isValidCollectiblesBundle;
            var6 = var1.bind(var2)(var9);
case 20:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var10 = var10.previewContainer;
            var1['style'] = var10;
            if(var6) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var6 = _closure1_slot14;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var6 = _closure1_slot13;
case 24:
            var5 = {};
            var5['product'] = var9;
            var5['width'] = var8;
            var5['handlePreviewPress'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();