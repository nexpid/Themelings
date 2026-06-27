// app/modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function HeroMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.mediaItem;
            var1 = _closure1_slot20;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var2 = var10.type;
            var1 = 'video';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var10.backgroundSrc;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var4 = var9.hero;
            var1['style'] = var4;
            var8 = _closure1_slot15;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 15;
            var4 = var11[var4];
            var7 = var7.bind(var5)(var4);
            var4 = {};
            var11 = {};
            var12 = var10.src;
            var11['uri'] = var12;
            var4['source'] = var11;
            var11 = var9.heroImage;
            var4['style'] = var11;
            var11 = 'cover';
            var4['resizeMode'] = var11;
            var4 = var8.bind(var5)(var7, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot16;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var9.hero;
            var2['style'] = var7;
            var15 = _closure1_slot15;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 15;
            var7 = var14[var8];
            var12 = var11.bind(var5)(var7);
            var7 = {};
            var13 = {};
            var16 = var10.backgroundSrc;
            var13['uri'] = var16;
            var7['source'] = var13;
            var13 = _closure1_slot6;
            var13 = var13.absoluteFill;
            var7['style'] = var13;
            var13 = 'cover';
            var7['resizeMode'] = var13;
            var12 = var15.bind(var5)(var12, var7);
            var7 = new Array(2);
            var7[0] = var12;
            var12 = _closure1_slot15;
            var8 = var14[var8];
            var11 = var11.bind(var5)(var8);
            var8 = {};
            var14 = {};
            var15 = var10.src;
            var14['uri'] = var15;
            var8['source'] = var14;
            var14 = var9.heroImage;
            var8['style'] = var14;
            var8['resizeMode'] = var13;
            var8 = var12.bind(var5)(var11, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var4 = _closure1_slot15;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var9.hero;
            var2['style'] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.VideoComponent;
            var6 = {};
            var11 = {};
            var12 = var10.src;
            var11['uri'] = var12;
            var6['source'] = var11;
            var10 = var10.videoThumbnailSrc;
            var6['poster'] = var10;
            var10 = true;
            var6['muted'] = var10;
            var10 = 'cover';
            var6['resizeMode'] = var10;
            var9 = var9.heroImage;
            var6['style'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function InGameItemTag() {
        var4 = _closure1_slot15;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 16;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.V91tvy;
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ProductPriceSection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sku;
            var1 = _closure1_slot20;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useFormattedSKUPrice;
            var1 = {};
            var1['sku'] = var4;
            var4 = _closure1_slot14;
            var4 = var4.DEFAULT;
            var1['priceSetAssignmentPurchaseType'] = var4;
            var1 = var2.bind(var3)(var1);
            var13 = var1.userPrice;
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot16;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var11.priceSection;
            var2['style'] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot22;
            var6 = {};
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot15;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = var11.priceRow;
            var7['style'] = var11;
            var12 = _closure1_slot15;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 16;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/bold', 'color': 'mobile-text-heading-primary'};
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function BundleThumbnailRow(arg1) {
        var1 = arg1;
        var2 = var1.items;
        var _closure2_slot0 = var2;
        var11 = var1.mediaItems;
        var2 = var1.selectedIndex;
        var _closure2_slot1 = var2;
        var7 = var1.onSelectIndex;
        var _closure2_slot2 = var7;
        var1 = var1.trackPDPClick;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot20;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var _closure2_slot4 = var10;
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function(arg1) {
            var4 = _closure2_slot3;
            var1 = _closure1_slot11;
            var3 = var1.CAROUSEL_ITEM;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var3 = _closure2_slot2;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var5)(var1, var2);
        var _closure2_slot5 = var1;
        var3 = _closure1_slot16;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var10.section;
        var1['style'] = var5;
        var8 = _closure1_slot15;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var5 = 16;
        var5 = var16[var5];
        var5 = var15.bind(var4)(var5);
        var7 = var5.Text;
        var5 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
        var12 = 17;
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.U7DAV9;
        var12 = var13.bind(var14)(var12);
        var5['children'] = var12;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot15;
        var7 = _closure1_slot5;
        var6 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
        var10 = var10.bundleThumbnailRow;
        var6['contentContainerStyle'] = var10;
        var10 = var11.map;
        var9 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg2;
                var _closure3_slot0 = var5;
                var1 = _closure2_slot0;
                var9 = var1[var5];
                var1 = _closure2_slot1;
                var10 = var5 === var1;
                var4 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = 'button';
                var1['accessibilityRole'] = var7;
                var8 = null;
                var11 = var8 == var9;
                var7 = undefined;
                if(var11) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var7 = var9.label;
case 10:
                if(!(var8 == var7)) { _fun0003_ip = 12; continue _fun0003 }
case 9:
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var8 = var9.title;
case 13:
                var7 = var8;
case 12:
                var1['accessibilityLabel'] = var7;
                var7 = {};
                var7['selected'] = var10;
                var1['accessibilityState'] = var7;
                var6 = function onPress() {
                    var3 = _closure2_slot5;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var6;
                var6 = _closure2_slot4;
                var7 = var6.thumbnail;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var10;
                if(!var10) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var8 = _closure2_slot4;
                var7 = var8.thumbnailSelected;
case 15:
                var6[1] = var7;
                var1['style'] = var6;
                var8 = _closure1_slot15;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = _closure2_slot4;
                var11 = var9.thumbnailInner;
                var9 = new Array(2);
                var9[0] = var11;
                if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var11 = _closure2_slot4;
                var10 = var11.thumbnailInnerSelected;
case 17:
                var9[1] = var10;
                var6['style'] = var9;
                var11 = _closure1_slot15;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 15;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = {};
                var15 = _closure1_slot0;
                var14 = 13;
                var14 = var16[var14];
                var16 = var15.bind(var3)(var14);
                var15 = var16.getThumbnailSrc;
                var14 = arg1;
                var14 = var15.bind(var16)(var14);
                var13['uri'] = var14;
                var9['source'] = var13;
                var12 = _closure2_slot4;
                var12 = var12.thumbnailImage;
                var9['style'] = var12;
                var12 = 'cover';
                var9['resizeMode'] = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var3)(var7, var6);
                var1['children'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            }
        };
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function SKUNameAndDescriptionSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.sku;
            var1 = _closure1_slot20;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 20;
            var1 = var1[var10];
            var3 = var2.bind(var5)(var1);
            var2 = var3.isNullOrEmpty;
            var1 = var11.name;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var4 = _closure1_slot16;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var6.section;
            var2['style'] = var6;
            var14 = _closure1_slot15;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 16;
            var6 = var7[var12];
            var6 = var9.bind(var5)(var6);
            var13 = var6.Heading;
            var6 = {'variant': 'heading-xl/bold', 'color': 'mobile-text-heading-primary'};
            var15 = var11.name;
            var6['children'] = var15;
            var13 = var14.bind(var5)(var13, var6);
            var6 = new Array(2);
            var6[0] = var13;
            var7 = var7[var10];
            var10 = var9.bind(var5)(var7);
            var9 = var10.isNullOrEmpty;
            var7 = var11.description;
            var7 = var9.bind(var10)(var7);
            var7 = !var7;
            if(!var7) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var10 = _closure1_slot15;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var11 = var11.description;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 21:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function ItemDetailsSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.selectedItem;
            var6 = var2.applicationId;
            var2 = _closure1_slot20;
            var5 = undefined;
            var19 = var2.bind(var5)();
            var2 = var1.labelIconAssetId;
            var14 = null;
            var2 = var14 != var2;
            var21 = null;
            if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getAssetURL;
            var2 = var1.labelIconAssetId;
            var21 = var3.bind(var4)(var6, var2);
case 23:
            var3 = var1.title;
            var2 = var14 == var3;
            var13 = undefined;
            if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var2 = var3.trim;
            var13 = var2.bind(var3)();
case 25:
            var3 = var1.label;
            var2 = var14 == var3;
            var18 = undefined;
            if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var2 = var3.trim;
            var18 = var2.bind(var3)();
case 27:
            var2 = var1.description;
            var1 = var14 == var2;
            var11 = undefined;
            if(var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var1 = var2.trim;
            var11 = var1.bind(var2)();
case 29:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 20;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var1 = var1.bind(var2)(var13);
            if(!var1) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var1 = var1.bind(var2)(var18);
            if(!var1) { _fun0005_ip = 31; continue _fun0005 }
case 33:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var2 = var1.bind(var2)(var11);
            var1 = null;
            if(var2) { _fun0005_ip = 34; continue _fun0005 }
case 31:
            var4 = _closure1_slot16;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var19.section;
            var2['style'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var7 = var7.bind(var5)(var6);
            var6 = var7.isNullOrEmpty;
            var6 = var6.bind(var7)(var13);
            var7 = !var6;
            if(!var7) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var12 = _closure1_slot15;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 16;
            var6 = var15[var6];
            var6 = var9.bind(var5)(var6);
            var9 = var6.Heading;
            var6 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
            var6['children'] = var13;
            var7 = var12.bind(var5)(var9, var6);
case 35:
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var9 = var9.bind(var5)(var7);
            var7 = var9.isNullOrEmpty;
            var7 = var7.bind(var9)(var18);
            var7 = !var7;
            if(!var7) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var13 = _closure1_slot16;
            var12 = _closure1_slot7;
            var9 = {};
            var15 = var19.labelRow;
            var9['style'] = var15;
            var15 = var14 != var21;
            if(!var15) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var17 = _closure1_slot15;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 15;
            var14 = var20[var14];
            var16 = var16.bind(var5)(var14);
            var14 = {};
            var20 = {};
            var20['uri'] = var21;
            var14['source'] = var20;
            var19 = var19.labelIcon;
            var14['style'] = var19;
            var15 = var17.bind(var5)(var16, var14);
case 39:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot15;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 16;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var9['children'] = var14;
            var7 = var13.bind(var5)(var12, var9);
case 37:
            var6[1] = var7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var9 = var9.bind(var5)(var7);
            var7 = var9.isNullOrEmpty;
            var7 = var7.bind(var9)(var11);
            var7 = !var7;
            if(!var7) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var10 = _closure1_slot15;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 16;
            var8 = var12[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 41:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 34:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function SocialLayerStorefrontProductDetailsModal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.skuId;
            var _closure2_slot0 = var7;
            var2 = var1.analyticsLocations;
            var _closure2_slot1 = var2;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var1 = _closure1_slot20;
            var18 = var1.bind(var5)();
            var _closure2_slot2 = var18;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 22;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var14 = var1.bind(var5)();
            var1 = 23;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNativeIAPPayments;
            var1 = var1.bind(var3)();
            var12 = var1.storeFront;
            var _closure2_slot3 = var12;
            var6 = _closure1_slot0;
            var4 = 24;
            var1 = var8[var4];
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var9.bind(var10)(var3, var1);
            var _closure2_slot4 = var19;
            var1 = var8[var4];
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot9;
                    var4 = var5.isFetching;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var4 = _closure1_slot9;
                    var3 = var4.didFetchingSkuFail;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 43:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var1);
            var _closure2_slot5 = var3;
            var1 = 25;
            var1 = var8[var1];
            var9 = var6.bind(var5)(var1);
            var8 = var9.useGetOrFetchApplication;
            var1 = null;
            var10 = var1 == var19;
            var6 = undefined;
            if(var10) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var6 = var19.applicationId;
case 45:
            var16 = var8.bind(var9)(var6);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 26;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var9 = var1 != var16;
            var6 = null;
            if(!var9) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var6 = var16;
case 47:
            var6 = var8.bind(var5)(var6);
            var22 = var6.hasAlreadyLinked;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = var11[var4];
            var9 = var6.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getSkuAssets;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var8.bind(var9)(var6, var4);
            _closure2_slot6 = var20;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var19;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getCardImageURL;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var8.bind(var9)(var4, var6);
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var8 = 0;
            var6 = var4.bind(var6)(var8);
            var4 = _closure1_slot3;
            var23 = 2;
            var9 = var4.bind(var5)(var6, var23);
            var4 = var9[var8];
            var6 = 1;
            var40 = var9[var6];
            var13 = _closure1_slot4;
            var10 = var13.useMemo;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var3 = new Array(0);
                    _fun0008_ip = 51; continue _fun0008;
case 49:
                    var3 = _closure2_slot1;
case 51:
                    var1 = new Array(1);
                    var6 = 0;
                    var8 = var1;
                    var7 = var3;
                    var3 = arraySpread(var8, var7, var6);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.SLAYER_STOREFRONT_NATIVE_PDP;
                    var1[2] = var2;
                    var2 = 1;
                    var2 = var3 + var2;
                    return var1;
                }
            };
            var2 = var10.bind(var13)(var2, var9);
            _closure2_slot7 = var2;
            var10 = _closure1_slot1;
            var9 = 29;
            var9 = var11[var9];
            var10 = var10.bind(var5)(var9);
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var10.bind(var5)(var9);
            _closure2_slot8 = var9;
            var21 = _closure1_slot4;
            var13 = var21.useMemo;
            var11 = new Array(6);
            var11[0] = var2;
            var11[1] = var7;
            var24 = var1 == var19;
            var10 = undefined;
            if(var24) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var10 = var19.type;
case 52:
            var11[2] = var10;
            var24 = var1 == var19;
            var10 = undefined;
            if(var24) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var10 = var19.productLine;
case 54:
            var11[3] = var10;
            var24 = var1 == var19;
            var10 = undefined;
            if(var24) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var10 = var19.applicationId;
case 56:
            var11[4] = var10;
            var11[5] = var9;
            var10 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {'is_gift': false, 'location_stack': null, 'payment_type': 'sku'};
                    var3 = _closure2_slot7;
                    var1['location_stack'] = var3;
                    var3 = _closure2_slot0;
                    var1['sku_id'] = var3;
                    var3 = _closure2_slot4;
                    var5 = null;
                    var6 = var5 == var3;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var6 = _closure2_slot4;
                    var4 = var6.type;
case 58:
                    var1['sku_type'] = var4;
                    var4 = _closure2_slot4;
                    var6 = var5 == var4;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var6 = _closure2_slot4;
                    var4 = var6.productLine;
case 60:
                    var1['sku_product_line'] = var4;
                    var4 = _closure2_slot4;
                    var4 = var5 == var4;
                    var3 = undefined;
                    if(var4) { _fun0009_ip = 62; continue _fun0009 }
case 25:
                    var4 = _closure2_slot4;
                    var3 = var4.applicationId;
case 62:
                    var1['application_id'] = var3;
                    var2 = _closure2_slot8;
                    var1['load_id'] = var2;
                    return var1;
                }
            };
            var10 = var13.bind(var21)(var10, var11);
            _closure2_slot9 = var10;
            var24 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 31;
            var13 = var21[var11];
            var24 = var24.bind(var5)(var13);
            var13 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 32;
                    var2 = var9[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var8 = _closure2_slot7;
                    var2['location_stack'] = var8;
                    var8 = _closure1_slot0;
                    var6 = 33;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot4;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var7 = _closure2_slot4;
                    var6 = var7.applicationId;
case 63:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var13 = var24.bind(var5)(var13);
            var26 = _closure1_slot4;
            var24 = var26.useRef;
            var13 = 'not_started';
            var13 = var24.bind(var26)(var13);
            _closure2_slot10 = var13;
            var13 = _closure1_slot0;
            var11 = var21[var11];
            var21 = var13.bind(var5)(var11);
            var13 = var21.useUnmountEffect;
            var11 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = 'pending';
                    if(!(var2 === var3)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 32;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.track;
                    var2 = _closure1_slot12;
                    var2 = var2.PAYMENT_FLOW_CANCELED;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2, var1);
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var13.bind(var21)(var11);
            var24 = _closure1_slot4;
            var21 = var24.useCallback;
            var13 = new Array(3);
            var13[0] = var7;
            var26 = var1 == var19;
            var11 = undefined;
            if(var26) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var11 = var19.applicationId;
case 67:
            var13[1] = var11;
            var13[2] = var2;
            var11 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 32;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED;
                    var2 = {};
                    var2['slayer_storefront_session_id'] = var1;
                    var7 = _closure2_slot0;
                    var2['sku_id'] = var7;
                    var2['guild_id'] = var1;
                    var8 = _closure2_slot4;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0012_ip = 10; continue _fun0012 }
case 69:
                    var8 = _closure2_slot4;
                    var7 = var8.applicationId;
case 10:
                    var2['application_id'] = var7;
                    var7 = arg1;
                    var2['cta_type'] = var7;
                    var6 = _closure2_slot7;
                    var2['location_stack'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var38 = var21.bind(var24)(var11, var13);
            _closure2_slot11 = var38;
            var24 = _closure1_slot4;
            var21 = var24.useMemo;
            var13 = new Array(2);
            var13[0] = var19;
            var13[1] = var20;
            var11 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 == var3;
                    var9 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0013_ip = 70; continue _fun0013 }
case 66:
                    var4 = _closure2_slot4;
                    var3 = var4.applicationId;
case 70:
                    if(!(var2 != var3)) { _fun0013_ip = 15; continue _fun0013 }
case 71:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 13;
                    var3 = var3[var10];
                    var6 = var4.bind(var9)(var3);
                    var5 = var6.convertCarouselItemsToMediaItems;
                    var3 = _closure2_slot4;
                    var3 = var3.tenantMetadata;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0013_ip = 72; continue _fun0013 }
case 11:
                    var3 = var3.socialLayer;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    var4 = var3.carouselItems;
case 72:
                    if(!(var2 == var4)) { _fun0013_ip = 63; continue _fun0013 }
case 74:
                    var4 = new Array(0);
case 63:
                    var2 = _closure2_slot4;
                    var13 = var2.applicationId;
                    var12 = _closure2_slot6;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.MOBILE_HERO_WIDTH_PX;
                    var1['heroWidth'] = var7;
                    var15 = var6;
                    var14 = var4;
                    var11 = var1;
                    var1 = var15[var5](var14, var13, var12, var11, var10);
                    _fun0013_ip = 75; continue _fun0013;
case 15:
                    var2 = new Array(2);
                    var3 = new Array(0);
                    var2[0] = var3;
                    var3 = new Array(0);
                    var2[1] = var3;
                    var1 = var2;
case 75:
                    return var1;
                }
            };
            var13 = var21.bind(var24)(var11, var13);
            var11 = _closure1_slot3;
            var11 = var11.bind(var5)(var13, var23);
            var43 = var11[var8];
            var42 = var11[var6];
            var11 = var42.length;
            var28 = var11 > var6;
            var11 = var42.length;
            var11 = var4 < var11;
            var41 = 0;
            if(!var11) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var41 = var4;
case 76:
            var4 = var43[var41];
            var11 = var1 != var4;
            var39 = null;
            if(!var11) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var39 = var4;
case 78:
            var4 = var42[var41];
            var11 = var1 != var4;
            var34 = null;
            if(!var11) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var34 = var4;
case 80:
            var11 = var1 == var19;
            var4 = undefined;
            if(var11) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var11 = var19.tenantMetadata;
            var13 = var1 == var11;
            var4 = undefined;
            if(var13) { _fun0006_ip = 82; continue _fun0006 }
case 84:
            var11 = var11.socialLayer;
            var13 = var1 == var11;
            var4 = undefined;
            if(var13) { _fun0006_ip = 82; continue _fun0006 }
case 85:
            var11 = var11.carouselItems;
            var13 = var1 == var11;
            var4 = undefined;
            if(var13) { _fun0006_ip = 82; continue _fun0006 }
case 86:
            var4 = var11.length;
case 82:
            var13 = var1 != var4;
            var11 = 0;
            if(!var13) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var11 = var4;
case 87:
            var4 = var43.length;
            var13 = var11 === var4;
            _closure2_slot12 = var13;
            var11 = _closure1_slot4;
            var4 = var11.useState;
            var21 = false;
            var11 = var4.bind(var11)(var21);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var11, var23);
            var27 = var4[var8];
            var4 = var4[var6];
            _closure2_slot13 = var4;
            var6 = _closure1_slot4;
            var4 = var6.useRef;
            var4 = var4.bind(var6)(var21);
            _closure2_slot14 = var4;
            var11 = _closure1_slot4;
            var6 = var11.useEffect;
            var4 = new Array(5);
            var4[0] = var19;
            var4[1] = var20;
            var4[2] = var13;
            var4[3] = var3;
            var13 = var1 == var12;
            var3 = undefined;
            if(var13) { _fun0006_ip = 89; continue _fun0006 }
case 90:
            var3 = var12.country;
case 89:
            var4[4] = var3;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var11 = null;
                    var1 = var11 != var1;
                    if(!var1) { _fun0014_ip = 70; continue _fun0014 }
case 91:
                    var2 = _closure2_slot4;
                    var2 = var2.applicationId;
                    var1 = var11 != var2;
case 70:
                    if(!var1) { _fun0014_ip = 92; continue _fun0014 }
case 93:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0014_ip = 94; continue _fun0014 }
case 95:
                    var1 = _closure2_slot5;
case 94:
                    if(var1) { _fun0014_ip = 96; continue _fun0014 }
case 97:
                    var2 = _closure2_slot14;
                    var1 = var2.current;
case 96:
                    if(var1) { _fun0014_ip = 92; continue _fun0014 }
case 98:
                    var2 = _closure2_slot14;
                    var1 = true;
                    var2['current'] = var1;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 34;
                    var1 = var8[var1];
                    var6 = undefined;
                    var5 = var12.bind(var6)(var1);
                    var4 = var5.fetchSocialLayerStorefrontSkuForApplication;
                    var1 = _closure2_slot4;
                    var3 = var1.applicationId;
                    var2 = var1.id;
                    var1 = {};
                    var10 = 35;
                    var8 = var8[var10];
                    var12 = var12.bind(var6)(var8);
                    var8 = var12.isAndroid;
                    var8 = var8.bind(var12)();
                    var1['withGoogleSkuIds'] = var8;
                    var8 = _closure2_slot3;
                    var11 = var11 == var8;
                    var8 = undefined;
                    if(var11) { _fun0014_ip = 99; continue _fun0014 }
case 100:
                    var9 = _closure2_slot3;
                    var8 = var9.country;
case 99:
                    var1['countryCode'] = var8;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.isIOS;
                    var8 = var8.bind(var9)();
                    var6 = undefined;
                    if(!var8) { _fun0014_ip = 17; continue _fun0014 }
case 18:
                    var7 = _closure1_slot13;
                    var6 = var7.APPLE;
case 17:
                    var1['paymentGateway'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var11)(var3, var4);
            var11 = _closure1_slot4;
            var6 = var11.useCallback;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = 'pending';
                    if(!(var2 === var3)) { _fun0015_ip = 101; continue _fun0015 }
case 66:
                    var3 = _closure2_slot10;
                    var2 = 'failed';
                    var3['current'] = var2;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 32;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.PAYMENT_FLOW_FAILED;
                    var2 = _closure2_slot9;
                    var2 = var4.bind(var5)(var3, var2);
case 101:
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var11)(var3, var4);
            _closure2_slot15 = var3;
            var6 = _closure1_slot8;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.orderRecord;
                return var1;
            };
            var11 = var6.bind(var5)(var4);
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 36;
            var4 = var12[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['skuId'] = var7;
            var4['sku'] = var19;
            var4['analyticsLoadId'] = var9;
            var4['analyticsLocations'] = var2;
            var12 = var1 == var11;
            var9 = undefined;
            if(var12) { _fun0006_ip = 102; continue _fun0006 }
case 103:
            var9 = var11.id;
case 102:
            var4['orderId'] = var9;
            var9 = function onPurchaseComplete() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = 'succeeded';
                    var2['current'] = var1;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 32;
                    var4 = var3[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var4);
                    var6 = var8.track;
                    var4 = _closure1_slot12;
                    var5 = var4.PAYMENT_FLOW_SUCCEEDED;
                    var4 = _closure2_slot9;
                    var4 = var6.bind(var8)(var5, var4);
                    var5 = _closure2_slot13;
                    var4 = false;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var6 = 33;
                    var3 = var3[var6];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openSocialLayerStorefrontProductSelfPurchaseSuccessModal;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['skuId'] = var8;
                    var9 = _closure2_slot4;
                    var8 = null;
                    var10 = var8 == var9;
                    var9 = undefined;
                    if(var10) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                    var10 = _closure2_slot4;
                    var9 = var10.orbsReward;
case 104:
                    var10 = var8 != var9;
                    var8 = undefined;
                    if(!var10) { _fun0016_ip = 106; continue _fun0016 }
case 30:
                    var8 = var9;
case 106:
                    var3['orbsReward'] = var8;
                    var7 = _closure2_slot7;
                    var3['analyticsLocations'] = var7;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.then;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.closeSocialLayerStorefrontProductDetailsModal;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var4['onPurchaseComplete'] = var9;
            var9 = function onPurchaseError() {
                var3 = _closure2_slot15;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onPurchaseError'] = var9;
            var9 = function onPurchasePending() {
                var1 = undefined;
                return var1;
            };
            var4['onPurchasePending'] = var9;
            var11 = var6.bind(var5)(var4);
            _closure2_slot16 = var11;
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var4 = new Array(4);
            var4[0] = var11;
            var4[1] = var38;
            var4[2] = var10;
            var4[3] = var3;
            var3 = function() {
                var5 = _closure2_slot11;
                var1 = _closure1_slot11;
                var4 = var1.BUY_BUTTON;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot10;
                var4 = 'pending';
                var5['current'] = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 32;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.track;
                var3 = _closure1_slot12;
                var4 = var3.PAYMENT_FLOW_STARTED;
                var3 = _closure2_slot9;
                var3 = var5.bind(var6)(var4, var3);
                var4 = _closure2_slot13;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot16;
                var4 = var2.bind(var1)();
                var3 = var4.catch;
                var2 = function(arg1) {
                    var3 = _closure2_slot15;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var30 = var6.bind(var9)(var3, var4);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var2;
            var3[2] = var38;
            var2 = function() {
                var4 = _closure2_slot11;
                var1 = _closure1_slot11;
                var3 = var1.GIFT_BUTTON;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 33;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openSocialLayerStorefrontGiftModal;
                var2 = {};
                var6 = _closure2_slot0;
                var2['skuId'] = var6;
                var5 = _closure2_slot7;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var4.bind(var6)(var2, var3);
            if(!(var1 != var19)) { _fun0006_ip = 107; continue _fun0006 }
case 108:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 37;
            var2 = var12[var2];
            var3 = var10.bind(var5)(var2);
            var2 = var3.isSlayerSkuAvailableOnThisPlatform;
            var11 = var2.bind(var3)(var19);
            var31 = 17;
            var2 = var12[var31];
            var2 = var10.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = var12[var31];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.boqtTA;
            var20 = var3.bind(var4)(var2);
            var4 = _closure1_slot16;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var18.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var9 = 35;
            var9 = var12[var9];
            var10 = var10.bind(var5)(var9);
            var9 = var10.isIOS;
            var9 = var9.bind(var10)();
            var8 = 0;
            if(var9) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var8 = var14.top;
case 109:
            var7['paddingTop'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var18.header;
            var6['style'] = var9;
            var23 = _closure1_slot15;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var9 = 38;
            var9 = var10[var9];
            var9 = var12.bind(var5)(var9);
            var13 = var9.HeaderBackButton;
            var9 = {};
            var24 = 33;
            var24 = var10[var24];
            var24 = var12.bind(var5)(var24);
            var24 = var24.closeSocialLayerStorefrontProductDetailsModal;
            var9['onPress'] = var24;
            var24 = function backImage() {
                var4 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 39;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.XSmallIcon;
                var1 = {};
                var5 = 'md';
                var1['size'] = var5;
                var5 = _closure2_slot2;
                var5 = var5.closeButtonIcon;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9['backImage'] = var24;
            var24 = var10[var31];
            var24 = var12.bind(var5)(var24);
            var32 = var24.intl;
            var29 = var32.string;
            var24 = var10[var31];
            var24 = var12.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.cpT0Cq;
            var24 = var29.bind(var32)(var24);
            var9['accessibilityLabel'] = var24;
            var9['labelVisible'] = var21;
            var13 = var23.bind(var5)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var23 = _closure1_slot15;
            var13 = 16;
            var10 = var10[var13];
            var10 = var12.bind(var5)(var10);
            var12 = var10.Heading;
            var10 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
            var24 = var18.headerTitle;
            var10['style'] = var24;
            var29 = var1 == var16;
            var24 = undefined;
            if(var29) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var24 = var16.name;
case 111:
            var10['children'] = var24;
            var10 = var23.bind(var5)(var12, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = var18.scrollContainer;
            var7['style'] = var10;
            var12 = var19.exclusive;
            if(!var12) { _fun0006_ip = 113; continue _fun0006 }
case 114:
            var24 = _closure1_slot15;
            var23 = _closure1_slot1;
            var29 = _closure1_slot2;
            var10 = 40;
            var10 = var29[var10];
            var23 = var23.bind(var5)(var10);
            var10 = {};
            var29 = _closure1_slot6;
            var29 = var29.absoluteFill;
            var10['style'] = var29;
            var32 = _closure1_slot18;
            var29 = new Array(2);
            var29[0] = var32;
            var32 = _closure1_slot19;
            var29[1] = var32;
            var10['colors'] = var29;
            var29 = 'none';
            var10['pointerEvents'] = var29;
            var12 = var24.bind(var5)(var23, var10);
case 113:
            var10 = new Array(2);
            var10[0] = var12;
            var24 = _closure1_slot16;
            var23 = _closure1_slot5;
            var12 = {};
            var29 = var18.scrollContent;
            var12['contentContainerStyle'] = var29;
            if(!(var1 == var34)) { _fun0006_ip = 115; continue _fun0006 }
case 116:
            var29 = var1 != var25;
            if(!var29) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var33 = _closure1_slot15;
            var32 = _closure1_slot1;
            var35 = _closure1_slot2;
            var25 = 41;
            var25 = var35[var25];
            var32 = var32.bind(var5)(var25);
            var25 = {};
            var25['sku'] = var19;
            var29 = var33.bind(var5)(var32, var25);
case 117:
            _fun0006_ip = 119; continue _fun0006;
case 115:
            var33 = _closure1_slot15;
            var32 = _closure1_slot21;
            var25 = {};
            var25['mediaItem'] = var34;
            var29 = var33.bind(var5)(var32, var25);
case 119:
            var25 = new Array(3);
            var25[0] = var29;
            var29 = var19.exclusive;
            if(!var29) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            var34 = _closure1_slot15;
            var33 = _closure1_slot7;
            var32 = {};
            var35 = var18.exclusiveBadgeContainer;
            var32['style'] = var35;
            var37 = _closure1_slot15;
            var36 = _closure1_slot0;
            var44 = _closure1_slot2;
            var35 = 42;
            var35 = var44[var35];
            var35 = var36.bind(var5)(var35);
            var36 = var35.ExclusiveBadge;
            var35 = {};
            var35 = var37.bind(var5)(var36, var35);
            var32['children'] = var35;
            var29 = var34.bind(var5)(var33, var32);
case 120:
            var25[1] = var29;
            if(var28) { _fun0006_ip = 122; continue _fun0006 }
case 123:
            var32 = _closure1_slot15;
            var29 = _closure1_slot25;
            var28 = {};
            var28['sku'] = var19;
            var28 = var32.bind(var5)(var29, var28);
            _fun0006_ip = 124; continue _fun0006;
case 122:
            var33 = _closure1_slot16;
            var32 = _closure1_slot17;
            var29 = {};
            var36 = _closure1_slot15;
            var35 = _closure1_slot25;
            var34 = {};
            var34['sku'] = var19;
            var35 = var36.bind(var5)(var35, var34);
            var34 = new Array(3);
            var34[0] = var35;
            var37 = _closure1_slot15;
            var36 = _closure1_slot24;
            var35 = {};
            var35['items'] = var43;
            var35['mediaItems'] = var42;
            var35['selectedIndex'] = var41;
            var35['onSelectIndex'] = var40;
            var35['trackPDPClick'] = var38;
            var35 = var37.bind(var5)(var36, var35);
            var34[1] = var35;
            var35 = var19.applicationId;
            var35 = var1 != var35;
            if(!var35) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var35 = var1 != var39;
case 125:
            if(!var35) { _fun0006_ip = 127; continue _fun0006 }
case 128:
            var38 = _closure1_slot15;
            var37 = _closure1_slot26;
            var36 = {};
            var36['selectedItem'] = var39;
            var39 = var19.applicationId;
            var36['applicationId'] = var39;
            var35 = var38.bind(var5)(var37, var36);
case 127:
            var34[2] = var35;
            var29['children'] = var34;
            var28 = var33.bind(var5)(var32, var29);
case 124:
            var25[2] = var28;
            var12['children'] = var25;
            var12 = var24.bind(var5)(var23, var12);
            var10[1] = var12;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot7;
            var7 = {};
            var12 = var18.footer;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = {};
            var23 = var14.bottom;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var14 = 10;
            var14 = var25[var14];
            var14 = var24.bind(var5)(var14);
            var14 = var14.space;
            var14 = var14.PX_16;
            var14 = var23 + var14;
            var12['paddingBottom'] = var14;
            var10[1] = var12;
            var7['style'] = var10;
            var14 = _closure1_slot15;
            var12 = _closure1_slot23;
            var10 = {};
            var10['sku'] = var19;
            var12 = var14.bind(var5)(var12, var10);
            var10 = new Array(4);
            var10[0] = var12;
            var12 = !var11;
            if(!var12) { _fun0006_ip = 129; continue _fun0006 }
case 130:
            var19 = _closure1_slot15;
            var24 = _closure1_slot0;
            var29 = _closure1_slot2;
            var13 = var29[var13];
            var13 = var24.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var23 = var18.availabilityCopy;
            var13['style'] = var23;
            var23 = var29[var31];
            var23 = var24.bind(var5)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var28 = _closure1_slot1;
            var23 = 43;
            var23 = var29[var23];
            var23 = var28.bind(var5)(var23);
            var23 = var23.gndWN7;
            var23 = var24.bind(var25)(var23);
            var13['children'] = var23;
            var12 = var19.bind(var5)(var14, var13);
case 129:
            var10[1] = var12;
            var14 = _closure1_slot16;
            var13 = _closure1_slot7;
            var12 = {};
            var19 = var18.footerButtonRow;
            var12['style'] = var19;
            var24 = _closure1_slot15;
            var23 = _closure1_slot7;
            var19 = {};
            var25 = var18.buyButton;
            var19['style'] = var25;
            var29 = _closure1_slot15;
            var28 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = 44;
            var25 = var32[var25];
            var25 = var28.bind(var5)(var25);
            var28 = var25.Button;
            var25 = {'variant': 'primary', 'size': 'lg'};
            var25['text'] = var20;
            var25['loading'] = var27;
            var32 = var27;
            if(var27) { _fun0006_ip = 131; continue _fun0006 }
case 132:
            var32 = !var11;
case 131:
            var25['disabled'] = var32;
            var25['onPress'] = var30;
            var25 = var29.bind(var5)(var28, var25);
            var19['children'] = var25;
            var23 = var24.bind(var5)(var23, var19);
            var19 = new Array(2);
            var19[0] = var23;
            var25 = _closure1_slot15;
            var24 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 45;
            var23 = var30[var23];
            var23 = var24.bind(var5)(var23);
            var24 = var23.IconButton;
            var23 = {'icon': null, 'variant': 'primary', 'size': 'lg'};
            var29 = _closure1_slot1;
            var28 = 46;
            var28 = var30[var28];
            var28 = var29.bind(var5)(var28);
            var23['icon'] = var28;
            if(var27) { _fun0006_ip = 133; continue _fun0006 }
case 134:
            var27 = !var11;
case 133:
            var23['disabled'] = var27;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var28 = var27[var31];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var27[var31];
            var27 = var30.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.QAZA5f;
            var27 = var28.bind(var29)(var27);
            var23['accessibilityLabel'] = var27;
            var23['onPress'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var19[1] = var23;
            var12['children'] = var19;
            var12 = var14.bind(var5)(var13, var12);
            var10[2] = var12;
            if(!var11) { _fun0006_ip = 135; continue _fun0006 }
case 136:
            var14 = _closure1_slot15;
            var13 = _closure1_slot7;
            var12 = {};
            var18 = var18.legalCopy;
            var12['style'] = var18;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 47;
            var17 = var19[var17];
            var19 = var18.bind(var5)(var17);
            var18 = var19.getMobileFinePrintMessageForApplication;
            var23 = var1 != var16;
            var17 = undefined;
            if(!var23) { _fun0006_ip = 137; continue _fun0006 }
case 138:
            var17 = var16;
case 137:
            var16 = {};
            var21 = var21 === var22;
            var16['shouldAppendDisclaimer'] = var21;
            var17 = var18.bind(var19)(var17, var20, var16);
            var16 = var17.map;
            var15 = function(arg1, arg2) {
                var5 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 48;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.TextWithIOSLinkWorkaround;
                var2 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var15 = var16.bind(var17)(var15);
            var12['children'] = var15;
            var11 = var14.bind(var5)(var13, var12);
case 135:
            var10[3] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 107:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function SocialLayerStorefrontProductDetailsModalWithOrderCTX(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 35;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.isIOS;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot13;
            if(var3) { _fun0017_ip = 139; continue _fun0017 }
case 140:
            var9 = var2.GOOGLE;
            _fun0017_ip = 141; continue _fun0017;
case 139:
            var9 = var2.APPLE_ADVANCED_COMMERCE;
case 141:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 49;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.OTPACOMOrderExperiment;
            var3 = var4.useConfig;
            var2 = {};
            var7 = 'SocialLayerStorefrontProductDetailsModal';
            var2['location'] = var7;
            var2 = var3.bind(var4)(var2);
            var7 = var2.enabled;
            var4 = _closure1_slot15;
            var3 = _closure1_slot1;
            var2 = 50;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['paymentGateway'] = var9;
            if(!var7) { _fun0017_ip = 142; continue _fun0017 }
case 143:
            var8 = _closure1_slot13;
            var8 = var8.APPLE_ADVANCED_COMMERCE;
            var7 = var9 === var8;
case 142:
            var2['orderRequired'] = var7;
            var8 = var1.skuId;
            var7 = new Array(1);
            var7[0] = var8;
            var2['skuIds'] = var7;
            var7 = false;
            var2['isGift'] = var7;
            var7 = null;
            var2['activeSubscription'] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 33;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.closeSocialLayerStorefrontProductDetailsModal;
            var2['onOrderRetryCancellation'] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot27;
            var6 = {};
            var12 = var6;
            var11 = var1;
            var9 = copyDataProperties(var12, var11);
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var1.skuId;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var7 = var6[var15];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var16 = 2;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot5 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlayerShopPDPCTAType;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var7 = var4.PaymentGateways;
    var _closure1_slot13 = var7;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var7 = var4.jsxs;
    var _closure1_slot16 = var7;
    var4 = var4.Fragment;
    var _closure1_slot17 = var4;
    var4 = 9;
    var7 = var6[var4];
    var9 = var11.bind(var1)(var7);
    var10 = 10;
    var7 = var6[var10];
    var7 = var11.bind(var1)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.BRAND_500;
    var12 = var9.bind(var1)(var7);
    var9 = var12.alpha;
    var7 = 0.25;
    var9 = var9.bind(var12)(var7);
    var7 = var9.hex;
    var7 = var7.bind(var9)();
    var _closure1_slot18 = var7;
    var4 = var6[var4];
    var7 = var11.bind(var1)(var4);
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var4 = var4.BRAND_500;
    var7 = var7.bind(var1)(var4);
    var4 = var7.alpha;
    var7 = var4.bind(var7)(var8);
    var4 = var7.hex;
    var4 = var4.bind(var7)();
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var15;
    var4['container'] = var9;
    var9 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': null, 'gap': null, 'borderBottomWidth': 1};
    var12 = 12;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.NAV_BAR_HEIGHT;
    var9['height'] = var12;
    var13 = 'row';
    var14 = 'center';
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderBottomColor'] = var12;
    var4['header'] = var9;
    var9 = {};
    var9['flexShrink'] = var15;
    var4['headerTitle'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ICON_DEFAULT;
    var9['tintColor'] = var12;
    var4['closeButtonIcon'] = var9;
    var9 = {};
    var12 = 'stretch';
    var9['alignItems'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingVertical'] = var12;
    var4['scrollContent'] = var9;
    var9 = {};
    var9['flex'] = var15;
    var4['scrollContainer'] = var9;
    var9 = {};
    var12 = '100%';
    var9['width'] = var12;
    var17 = var6[var10];
    var17 = var11.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_16;
    var9['paddingHorizontal'] = var17;
    var17 = var6[var10];
    var17 = var11.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_8;
    var9['gap'] = var17;
    var4['section'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var9['paddingVertical'] = var13;
    var4['bundleThumbnailRow'] = var9;
    var9 = {'width': 64, 'height': 64, 'borderRadius': null, 'borderWidth': 2, 'borderColor': 'transparent'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9['borderRadius'] = var13;
    var4['thumbnail'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var9['borderColor'] = var13;
    var4['thumbnailSelected'] = var9;
    var9 = {'flex': 1, 'borderRadius': null, 'overflow': 'hidden'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = 'hidden';
    var4['thumbnailInner'] = var9;
    var9 = {};
    var9['margin'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var9['borderRadius'] = var16;
    var4['thumbnailInnerSelected'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['thumbnailImage'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_4;
    var9['gap'] = var16;
    var4['labelRow'] = var9;
    var9 = {};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_16;
    var9['width'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_16;
    var9['height'] = var16;
    var4['labelIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap'};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_8;
    var9['gap'] = var16;
    var4['priceRow'] = var9;
    var9 = {};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_16;
    var9['paddingHorizontal'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_12;
    var9['paddingTop'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_8;
    var9['gap'] = var16;
    var9['borderTopWidth'] = var15;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var9['borderTopColor'] = var16;
    var4['footer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_8;
    var9['gap'] = var16;
    var4['footerButtonRow'] = var9;
    var9 = {};
    var9['flex'] = var15;
    var4['buyButton'] = var9;
    var9 = {};
    var9['textAlign'] = var14;
    var4['availabilityCopy'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var9['gap'] = var14;
    var4['legalCopy'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var9['marginHorizontal'] = var14;
    var14 = 13;
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.MOBILE_HERO_HEIGHT_PX;
    var9['height'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9['borderRadius'] = var14;
    var9['overflow'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var13;
    var4['hero'] = var9;
    var9 = {};
    var9['width'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['priceSection'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['heroImage'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var4['exclusiveBadgeContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 52;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WrappedSocialLayerStorefrontProductDetailsModal(arg1) {
        var4 = _closure1_slot15;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 51;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.NativePaymentContextProvider;
        var1 = {};
        var6 = new Array(0);
        var1['skuIDs'] = var6;
        var6 = null;
        var1['activeSubscription'] = var6;
        var7 = _closure1_slot15;
        var6 = _closure1_slot28;
        var5 = {};
        var9 = arg1;
        var10 = var5;
        var8 = copyDataProperties(var10, var9);
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();