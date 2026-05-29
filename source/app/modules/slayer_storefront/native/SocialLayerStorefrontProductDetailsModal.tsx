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
            var1 = _closure1_slot16;
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
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var1 = {};
            var4 = var9.hero;
            var1['style'] = var4;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 13;
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
            var4 = _closure1_slot14;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var9.hero;
            var2['style'] = var7;
            var15 = _closure1_slot13;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 13;
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
            var12 = _closure1_slot13;
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
            var4 = _closure1_slot13;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var9.hero;
            var2['style'] = var7;
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
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
    var _closure1_slot17 = var1;
    var1 = function InGameItemTag() {
        var4 = _closure1_slot13;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 14;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
        var5 = 15;
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
    var _closure1_slot18 = var1;
    var1 = function ProductPriceSection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sku;
            var1 = _closure1_slot16;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useFormattedSKUPrice;
            var1 = {};
            var1['sku'] = var4;
            var4 = _closure1_slot12;
            var4 = var4.DEFAULT;
            var1['priceSetAssignmentPurchaseType'] = var4;
            var1 = var2.bind(var3)(var1);
            var13 = var1.normalPrice;
            var2 = var1.discountedPrice;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var13 = var2;
case 8:
            var2 = var1 == var13;
            var1 = null;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot14;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var11.priceSection;
            var2['style'] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot18;
            var6 = {};
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot13;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = var11.priceRow;
            var7['style'] = var11;
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 14;
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
case 10:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
        var2 = _closure1_slot16;
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
            var1 = _closure1_slot10;
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
        var3 = _closure1_slot14;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var10.section;
        var1['style'] = var5;
        var8 = _closure1_slot13;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var5 = 14;
        var5 = var16[var5];
        var5 = var15.bind(var4)(var5);
        var7 = var5.Text;
        var5 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
        var12 = 15;
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
        var8 = _closure1_slot13;
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
                var4 = _closure1_slot13;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
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
                if(var11) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var7 = var9.label;
case 12:
                if(!(var8 == var7)) { _fun0003_ip = 14; continue _fun0003 }
case 9:
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var8 = var9.title;
case 15:
                var7 = var8;
case 14:
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
                if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var8 = _closure2_slot4;
                var7 = var8.thumbnailSelected;
case 17:
                var6[1] = var7;
                var1['style'] = var6;
                var8 = _closure1_slot13;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = _closure2_slot4;
                var11 = var9.thumbnailInner;
                var9 = new Array(2);
                var9[0] = var11;
                if(!var10) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var11 = _closure2_slot4;
                var10 = var11.thumbnailInnerSelected;
case 19:
                var9[1] = var10;
                var6['style'] = var9;
                var11 = _closure1_slot13;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 13;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = {};
                var15 = _closure1_slot0;
                var14 = 11;
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
    var _closure1_slot20 = var1;
    var1 = function SKUNameAndDescriptionSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.sku;
            var1 = _closure1_slot16;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 18;
            var1 = var1[var10];
            var3 = var2.bind(var5)(var1);
            var2 = var3.isNullOrEmpty;
            var1 = var11.name;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var4 = _closure1_slot14;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var6.section;
            var2['style'] = var6;
            var14 = _closure1_slot13;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 14;
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
            if(!var7) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var10 = _closure1_slot13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var11 = var11.description;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 23:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function ItemDetailsSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.selectedItem;
            var6 = var2.applicationId;
            var2 = _closure1_slot16;
            var5 = undefined;
            var19 = var2.bind(var5)();
            var2 = var1.labelIconAssetId;
            var14 = null;
            var2 = var14 != var2;
            var21 = null;
            if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getAssetURL;
            var2 = var1.labelIconAssetId;
            var21 = var3.bind(var4)(var6, var2);
case 25:
            var3 = var1.title;
            var2 = var14 == var3;
            var13 = undefined;
            if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 8:
            var2 = var3.trim;
            var13 = var2.bind(var3)();
case 27:
            var3 = var1.label;
            var2 = var14 == var3;
            var18 = undefined;
            if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var2 = var3.trim;
            var18 = var2.bind(var3)();
case 28:
            var2 = var1.description;
            var1 = var14 == var2;
            var11 = undefined;
            if(var1) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var1 = var2.trim;
            var11 = var1.bind(var2)();
case 30:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 18;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var1 = var1.bind(var2)(var13);
            if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var1 = var1.bind(var2)(var18);
            if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 34:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var2 = var1.bind(var2)(var11);
            var1 = null;
            if(var2) { _fun0005_ip = 35; continue _fun0005 }
case 32:
            var4 = _closure1_slot14;
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
            if(!var7) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var12 = _closure1_slot13;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 14;
            var6 = var15[var6];
            var6 = var9.bind(var5)(var6);
            var9 = var6.Heading;
            var6 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
            var6['children'] = var13;
            var7 = var12.bind(var5)(var9, var6);
case 36:
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var9 = var9.bind(var5)(var7);
            var7 = var9.isNullOrEmpty;
            var7 = var7.bind(var9)(var18);
            var7 = !var7;
            if(!var7) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var13 = _closure1_slot14;
            var12 = _closure1_slot7;
            var9 = {};
            var15 = var19.labelRow;
            var9['style'] = var15;
            var15 = var14 != var21;
            if(!var15) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var17 = _closure1_slot13;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 13;
            var14 = var20[var14];
            var16 = var16.bind(var5)(var14);
            var14 = {};
            var20 = {};
            var20['uri'] = var21;
            var14['source'] = var20;
            var19 = var19.labelIcon;
            var14['style'] = var19;
            var15 = var17.bind(var5)(var16, var14);
case 40:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot13;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 14;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var9['children'] = var14;
            var7 = var13.bind(var5)(var12, var9);
case 38:
            var6[1] = var7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var9 = var9.bind(var5)(var7);
            var7 = var9.isNullOrEmpty;
            var7 = var7.bind(var9)(var11);
            var7 = !var7;
            if(!var7) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var10 = _closure1_slot13;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 14;
            var8 = var12[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 42:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 35:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function SocialLayerStorefrontProductDetailsModal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.skuId;
            var _closure2_slot0 = var7;
            var2 = var1.analyticsLocations;
            var _closure2_slot1 = var2;
            var5 = undefined;
            var _closure2_slot5 = var5;
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
            var1 = _closure1_slot16;
            var16 = var1.bind(var5)();
            var _closure2_slot2 = var16;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 20;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var17 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var4 = 21;
            var1 = var8[var4];
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var9.bind(var10)(var3, var1);
            var _closure2_slot3 = var18;
            var1 = var8[var4];
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot8;
                    var4 = var5.isFetching;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var4 = _closure1_slot8;
                    var3 = var4.didFetchingSkuFail;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 44:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var1);
            var _closure2_slot4 = var3;
            var1 = 22;
            var1 = var8[var1];
            var9 = var6.bind(var5)(var1);
            var8 = var9.useGetOrFetchApplication;
            var1 = null;
            var10 = var1 == var18;
            var6 = undefined;
            if(var10) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var6 = var18.applicationId;
case 46:
            var15 = var8.bind(var9)(var6);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 23;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var9 = var1 != var15;
            var6 = null;
            if(!var9) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var6 = var15;
case 48:
            var6 = var8.bind(var5)(var6);
            var20 = var6.hasAlreadyLinked;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = var13[var4];
            var9 = var6.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getSkuAssets;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var8.bind(var9)(var6, var4);
            _closure2_slot5 = var21;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var18;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getCardImageURL;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var8.bind(var9)(var4, var6);
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var8 = 0;
            var6 = var4.bind(var6)(var8);
            var4 = _closure1_slot3;
            var22 = 2;
            var9 = var4.bind(var5)(var6, var22);
            var4 = var9[var8];
            var6 = 1;
            var34 = var9[var6];
            var14 = _closure1_slot4;
            var11 = var14.useMemo;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var3 = new Array(0);
                    _fun0008_ip = 52; continue _fun0008;
case 50:
                    var3 = _closure2_slot1;
case 52:
                    var1 = new Array(1);
                    var6 = 0;
                    var8 = var1;
                    var7 = var3;
                    var3 = arraySpread(var8, var7, var6);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 25;
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
            var2 = var11.bind(var14)(var2, var9);
            _closure2_slot6 = var2;
            var11 = _closure1_slot1;
            var9 = 26;
            var9 = var13[var9];
            var11 = var11.bind(var5)(var9);
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var11.bind(var5)(var9);
            _closure2_slot7 = var9;
            var19 = _closure1_slot4;
            var14 = var19.useMemo;
            var13 = new Array(6);
            var13[0] = var2;
            var13[1] = var7;
            var23 = var1 == var18;
            var11 = undefined;
            if(var23) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var11 = var18.type;
case 53:
            var13[2] = var11;
            var23 = var1 == var18;
            var11 = undefined;
            if(var23) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var11 = var18.productLine;
case 55:
            var13[3] = var11;
            var23 = var1 == var18;
            var11 = undefined;
            if(var23) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var11 = var18.applicationId;
case 57:
            var13[4] = var11;
            var13[5] = var9;
            var11 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {'is_gift': false, 'location_stack': null, 'payment_type': 'sku'};
                    var3 = _closure2_slot6;
                    var1['location_stack'] = var3;
                    var3 = _closure2_slot0;
                    var1['sku_id'] = var3;
                    var3 = _closure2_slot3;
                    var5 = null;
                    var6 = var5 == var3;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var6 = _closure2_slot3;
                    var4 = var6.type;
case 59:
                    var1['sku_type'] = var4;
                    var4 = _closure2_slot3;
                    var6 = var5 == var4;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var6 = _closure2_slot3;
                    var4 = var6.productLine;
case 61:
                    var1['sku_product_line'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 == var4;
                    var3 = undefined;
                    if(var4) { _fun0009_ip = 63; continue _fun0009 }
case 27:
                    var4 = _closure2_slot3;
                    var3 = var4.applicationId;
case 63:
                    var1['application_id'] = var3;
                    var2 = _closure2_slot7;
                    var1['load_id'] = var2;
                    return var1;
                }
            };
            var11 = var14.bind(var19)(var11, var13);
            _closure2_slot8 = var11;
            var23 = _closure1_slot1;
            var19 = _closure1_slot2;
            var13 = 28;
            var14 = var19[var13];
            var23 = var23.bind(var5)(var14);
            var14 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 29;
                    var2 = var9[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var8 = _closure2_slot6;
                    var2['location_stack'] = var8;
                    var8 = _closure1_slot0;
                    var6 = 30;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot3;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var7 = _closure2_slot3;
                    var6 = var7.applicationId;
case 64:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var14 = var23.bind(var5)(var14);
            var24 = _closure1_slot4;
            var23 = var24.useRef;
            var14 = 'not_started';
            var14 = var23.bind(var24)(var14);
            _closure2_slot9 = var14;
            var14 = _closure1_slot0;
            var13 = var19[var13];
            var19 = var14.bind(var5)(var13);
            var14 = var19.useUnmountEffect;
            var13 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = 'pending';
                    if(!(var2 === var3)) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 29;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.track;
                    var2 = _closure1_slot11;
                    var2 = var2.PAYMENT_FLOW_CANCELED;
                    var1 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2, var1);
case 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var14.bind(var19)(var13);
            var23 = _closure1_slot4;
            var19 = var23.useCallback;
            var14 = new Array(2);
            var14[0] = var7;
            var14[1] = var2;
            var13 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot11;
                var3 = var2.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED;
                var2 = {};
                var2['slayer_storefront_session_id'] = var1;
                var7 = _closure2_slot0;
                var2['sku_id'] = var7;
                var2['guild_id'] = var1;
                var7 = arg1;
                var2['cta_type'] = var7;
                var6 = _closure2_slot6;
                var2['location_stack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var32 = var19.bind(var23)(var13, var14);
            _closure2_slot10 = var32;
            var23 = _closure1_slot4;
            var19 = var23.useMemo;
            var14 = new Array(2);
            var14[0] = var18;
            var14[1] = var21;
            var13 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 == var3;
                    var9 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0012_ip = 68; continue _fun0012 }
case 67:
                    var4 = _closure2_slot3;
                    var3 = var4.applicationId;
case 68:
                    if(!(var2 != var3)) { _fun0012_ip = 17; continue _fun0012 }
case 69:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 11;
                    var3 = var3[var10];
                    var6 = var4.bind(var9)(var3);
                    var5 = var6.convertCarouselItemsToMediaItems;
                    var3 = _closure2_slot3;
                    var3 = var3.tenantMetadata;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0012_ip = 70; continue _fun0012 }
case 13:
                    var3 = var3.socialLayer;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                    var4 = var3.carouselItems;
case 70:
                    if(!(var2 == var4)) { _fun0012_ip = 64; continue _fun0012 }
case 72:
                    var4 = new Array(0);
case 64:
                    var2 = _closure2_slot3;
                    var13 = var2.applicationId;
                    var12 = _closure2_slot5;
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
                    _fun0012_ip = 73; continue _fun0012;
case 17:
                    var2 = new Array(2);
                    var3 = new Array(0);
                    var2[0] = var3;
                    var3 = new Array(0);
                    var2[1] = var3;
                    var1 = var2;
case 73:
                    return var1;
                }
            };
            var14 = var19.bind(var23)(var13, var14);
            var13 = _closure1_slot3;
            var13 = var13.bind(var5)(var14, var22);
            var37 = var13[var8];
            var36 = var13[var6];
            var13 = var36.length;
            var13 = var13 > var6;
            var14 = var36.length;
            var14 = var4 < var14;
            var35 = 0;
            if(!var14) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var35 = var4;
case 74:
            var4 = var37[var35];
            var14 = var1 != var4;
            var33 = null;
            if(!var14) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var33 = var4;
case 76:
            var4 = var36[var35];
            var14 = var1 != var4;
            var26 = null;
            if(!var14) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var26 = var4;
case 78:
            var14 = var1 == var18;
            var4 = undefined;
            if(var14) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var14 = var18.tenantMetadata;
            var19 = var1 == var14;
            var4 = undefined;
            if(var19) { _fun0006_ip = 80; continue _fun0006 }
case 82:
            var14 = var14.socialLayer;
            var19 = var1 == var14;
            var4 = undefined;
            if(var19) { _fun0006_ip = 80; continue _fun0006 }
case 83:
            var14 = var14.carouselItems;
            var19 = var1 == var14;
            var4 = undefined;
            if(var19) { _fun0006_ip = 80; continue _fun0006 }
case 84:
            var4 = var14.length;
case 80:
            var19 = var1 != var4;
            var14 = 0;
            if(!var19) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var14 = var4;
case 85:
            var4 = var37.length;
            var19 = var14 === var4;
            _closure2_slot11 = var19;
            var14 = _closure1_slot4;
            var4 = var14.useState;
            var27 = false;
            var14 = var4.bind(var14)(var27);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var14, var22);
            var25 = var4[var8];
            var4 = var4[var6];
            _closure2_slot12 = var4;
            var6 = _closure1_slot4;
            var4 = var6.useRef;
            var4 = var4.bind(var6)(var27);
            _closure2_slot13 = var4;
            var14 = _closure1_slot4;
            var6 = var14.useEffect;
            var4 = new Array(4);
            var4[0] = var18;
            var4[1] = var21;
            var4[2] = var19;
            var4[3] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0013_ip = 68; continue _fun0013 }
case 87:
                    var3 = _closure2_slot3;
                    var3 = var3.applicationId;
                    var2 = var4 != var3;
case 68:
                    if(!var2) { _fun0013_ip = 4; continue _fun0013 }
case 88:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                    var2 = _closure2_slot4;
case 89:
                    if(var2) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                    var3 = _closure2_slot13;
                    var2 = var3.current;
case 91:
                    if(var2) { _fun0013_ip = 4; continue _fun0013 }
case 93:
                    var3 = _closure2_slot13;
                    var2 = true;
                    var3['current'] = var2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 31;
                    var2 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var2);
                    var4 = var5.fetchSocialLayerStorefrontSkuForApplication;
                    var1 = _closure2_slot3;
                    var3 = var1.applicationId;
                    var2 = var1.id;
                    var1 = {};
                    var6 = 32;
                    var6 = var9[var6];
                    var7 = var8.bind(var7)(var6);
                    var6 = var7.isAndroid;
                    var6 = var6.bind(var7)();
                    var1['withGoogleSkuIds'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var14)(var3, var4);
            var14 = _closure1_slot4;
            var6 = var14.useCallback;
            var4 = new Array(1);
            var4[0] = var11;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = 'pending';
                    if(!(var2 === var3)) { _fun0014_ip = 94; continue _fun0014 }
case 67:
                    var3 = _closure2_slot9;
                    var2 = 'failed';
                    var3['current'] = var2;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 29;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.PAYMENT_FLOW_FAILED;
                    var2 = _closure2_slot8;
                    var2 = var4.bind(var5)(var3, var2);
case 94:
                    var3 = _closure2_slot12;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var14)(var3, var4);
            _closure2_slot14 = var3;
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var4 = 33;
            var4 = var14[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['skuId'] = var7;
            var4['sku'] = var18;
            var4['analyticsLoadId'] = var9;
            var4['analyticsLocations'] = var2;
            var9 = function onPurchaseComplete() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = 'succeeded';
                    var2['current'] = var1;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var4 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot11;
                    var5 = var4.PAYMENT_FLOW_SUCCEEDED;
                    var4 = _closure2_slot8;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = _closure2_slot12;
                    var4 = false;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var6 = 30;
                    var3 = var3[var6];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openSocialLayerStorefrontProductSelfPurchaseSuccessModal;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3['skuId'] = var7;
                    var8 = _closure2_slot3;
                    var7 = null;
                    var10 = var7 == var8;
                    var8 = undefined;
                    if(var10) { _fun0015_ip = 95; continue _fun0015 }
case 96:
                    var9 = _closure2_slot3;
                    var8 = var9.orbsReward;
case 95:
                    var9 = var7 != var8;
                    var7 = undefined;
                    if(!var9) { _fun0015_ip = 97; continue _fun0015 }
case 31:
                    var7 = var8;
case 97:
                    var3['orbsReward'] = var7;
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
                var3 = _closure2_slot14;
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
            var14 = var6.bind(var5)(var4);
            _closure2_slot15 = var14;
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var4 = new Array(4);
            var4[0] = var14;
            var4[1] = var32;
            var4[2] = var11;
            var4[3] = var3;
            var3 = function() {
                var5 = _closure2_slot10;
                var1 = _closure1_slot10;
                var4 = var1.BUY_BUTTON;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot9;
                var4 = 'pending';
                var5['current'] = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 29;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.track;
                var3 = _closure1_slot11;
                var4 = var3.PAYMENT_FLOW_STARTED;
                var3 = _closure2_slot8;
                var3 = var5.bind(var6)(var4, var3);
                var4 = _closure2_slot12;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot15;
                var4 = var2.bind(var1)();
                var3 = var4.catch;
                var2 = function(arg1) {
                    var3 = _closure2_slot14;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = var6.bind(var9)(var3, var4);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var2;
            var3[2] = var32;
            var2 = function() {
                var4 = _closure2_slot10;
                var1 = _closure1_slot10;
                var3 = var1.GIFT_BUTTON;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 30;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openSocialLayerStorefrontGiftModal;
                var2 = {};
                var6 = _closure2_slot0;
                var2['skuId'] = var6;
                var5 = _closure2_slot6;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var4.bind(var6)(var2, var3);
            if(!(var1 != var18)) { _fun0006_ip = 98; continue _fun0006 }
case 99:
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 34;
            var2 = var21[var2];
            var3 = var14.bind(var5)(var2);
            var2 = var3.isSlayerSkuAvailableOnThisPlatform;
            var11 = var2.bind(var3)(var18);
            var29 = 15;
            var2 = var21[var29];
            var2 = var14.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = var21[var29];
            var2 = var14.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.boqtTA;
            var19 = var3.bind(var4)(var2);
            var4 = _closure1_slot14;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var16.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var9 = 32;
            var9 = var21[var9];
            var14 = var14.bind(var5)(var9);
            var9 = var14.isIOS;
            var9 = var9.bind(var14)();
            var8 = 0;
            if(var9) { _fun0006_ip = 100; continue _fun0006 }
case 101:
            var8 = var17.top;
case 100:
            var7['paddingTop'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var16.header;
            var6['style'] = var9;
            var23 = _closure1_slot13;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 35;
            var9 = var21[var9];
            var9 = var22.bind(var5)(var9);
            var14 = var9.HeaderBackButton;
            var9 = {};
            var31 = 30;
            var31 = var21[var31];
            var31 = var22.bind(var5)(var31);
            var31 = var31.closeSocialLayerStorefrontProductDetailsModal;
            var9['onPress'] = var31;
            var30 = function backImage() {
                var4 = _closure1_slot13;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 36;
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
            var9['backImage'] = var30;
            var30 = var21[var29];
            var30 = var22.bind(var5)(var30);
            var38 = var30.intl;
            var31 = var38.string;
            var30 = var21[var29];
            var30 = var22.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.cpT0Cq;
            var30 = var31.bind(var38)(var30);
            var9['accessibilityLabel'] = var30;
            var9['labelVisible'] = var27;
            var14 = var23.bind(var5)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var23 = _closure1_slot13;
            var14 = 14;
            var21 = var21[var14];
            var21 = var22.bind(var5)(var21);
            var22 = var21.Heading;
            var21 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
            var27 = var16.headerTitle;
            var21['style'] = var27;
            var30 = var1 == var15;
            var27 = undefined;
            if(var30) { _fun0006_ip = 102; continue _fun0006 }
case 103:
            var27 = var15.name;
case 102:
            var21['children'] = var27;
            var21 = var23.bind(var5)(var22, var21);
            var9[1] = var21;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot14;
            var8 = _closure1_slot5;
            var7 = {};
            var21 = var16.scrollContent;
            var7['contentContainerStyle'] = var21;
            if(!(var1 == var26)) { _fun0006_ip = 104; continue _fun0006 }
case 105:
            var21 = var1 != var10;
            if(!var21) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var23 = _closure1_slot13;
            var22 = _closure1_slot1;
            var27 = _closure1_slot2;
            var10 = 37;
            var10 = var27[var10];
            var22 = var22.bind(var5)(var10);
            var10 = {};
            var10['sku'] = var18;
            var21 = var23.bind(var5)(var22, var10);
case 106:
            _fun0006_ip = 108; continue _fun0006;
case 104:
            var23 = _closure1_slot13;
            var22 = _closure1_slot17;
            var10 = {};
            var10['mediaItem'] = var26;
            var21 = var23.bind(var5)(var22, var10);
case 108:
            var10 = new Array(2);
            var10[0] = var21;
            if(var13) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var22 = _closure1_slot13;
            var21 = _closure1_slot21;
            var13 = {};
            var13['sku'] = var18;
            var13 = var22.bind(var5)(var21, var13);
            _fun0006_ip = 111; continue _fun0006;
case 109:
            var23 = _closure1_slot14;
            var22 = _closure1_slot15;
            var21 = {};
            var30 = _closure1_slot13;
            var27 = _closure1_slot21;
            var26 = {};
            var26['sku'] = var18;
            var27 = var30.bind(var5)(var27, var26);
            var26 = new Array(3);
            var26[0] = var27;
            var31 = _closure1_slot13;
            var30 = _closure1_slot20;
            var27 = {};
            var27['items'] = var37;
            var27['mediaItems'] = var36;
            var27['selectedIndex'] = var35;
            var27['onSelectIndex'] = var34;
            var27['trackPDPClick'] = var32;
            var27 = var31.bind(var5)(var30, var27);
            var26[1] = var27;
            var27 = var18.applicationId;
            var27 = var1 != var27;
            if(!var27) { _fun0006_ip = 112; continue _fun0006 }
case 113:
            var27 = var1 != var33;
case 112:
            if(!var27) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            var32 = _closure1_slot13;
            var31 = _closure1_slot22;
            var30 = {};
            var30['selectedItem'] = var33;
            var33 = var18.applicationId;
            var30['applicationId'] = var33;
            var27 = var32.bind(var5)(var31, var30);
case 114:
            var26[2] = var27;
            var21['children'] = var26;
            var13 = var23.bind(var5)(var22, var21);
case 111:
            var10[1] = var13;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot14;
            var8 = _closure1_slot7;
            var7 = {};
            var13 = var16.footer;
            var10 = new Array(2);
            var10[0] = var13;
            var13 = {};
            var21 = var17.bottom;
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 10;
            var17 = var23[var17];
            var17 = var22.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_16;
            var17 = var21 + var17;
            var13['paddingBottom'] = var17;
            var10[1] = var13;
            var7['style'] = var10;
            var17 = _closure1_slot13;
            var13 = _closure1_slot19;
            var10 = {};
            var10['sku'] = var18;
            var13 = var17.bind(var5)(var13, var10);
            var10 = new Array(4);
            var10[0] = var13;
            var13 = !var11;
            if(!var13) { _fun0006_ip = 116; continue _fun0006 }
case 117:
            var18 = _closure1_slot13;
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var14 = var27[var14];
            var14 = var22.bind(var5)(var14);
            var17 = var14.Text;
            var14 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var21 = var16.availabilityCopy;
            var14['style'] = var21;
            var21 = var27[var29];
            var21 = var22.bind(var5)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var26 = _closure1_slot1;
            var21 = 38;
            var21 = var27[var21];
            var21 = var26.bind(var5)(var21);
            var21 = var21.gndWN7;
            var21 = var22.bind(var23)(var21);
            var14['children'] = var21;
            var13 = var18.bind(var5)(var17, var14);
case 116:
            var10[1] = var13;
            var17 = _closure1_slot14;
            var14 = _closure1_slot7;
            var13 = {};
            var18 = var16.footerButtonRow;
            var13['style'] = var18;
            var22 = _closure1_slot13;
            var21 = _closure1_slot7;
            var18 = {};
            var23 = var16.buyButton;
            var18['style'] = var23;
            var27 = _closure1_slot13;
            var26 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 39;
            var23 = var30[var23];
            var23 = var26.bind(var5)(var23);
            var26 = var23.Button;
            var23 = {'variant': 'primary', 'size': 'lg'};
            var23['text'] = var19;
            var23['loading'] = var25;
            var30 = var25;
            if(var25) { _fun0006_ip = 118; continue _fun0006 }
case 119:
            var30 = !var11;
case 118:
            var23['disabled'] = var30;
            var23['onPress'] = var28;
            var23 = var27.bind(var5)(var26, var23);
            var18['children'] = var23;
            var21 = var22.bind(var5)(var21, var18);
            var18 = new Array(2);
            var18[0] = var21;
            var23 = _closure1_slot13;
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 40;
            var21 = var28[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.IconButton;
            var21 = {'icon': null, 'variant': 'primary', 'size': 'lg'};
            var27 = _closure1_slot1;
            var26 = 41;
            var26 = var28[var26];
            var26 = var27.bind(var5)(var26);
            var21['icon'] = var26;
            if(var25) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            var25 = !var11;
case 120:
            var21['disabled'] = var25;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var26 = var25[var29];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var29];
            var25 = var28.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.QAZA5f;
            var25 = var26.bind(var27)(var25);
            var21['accessibilityLabel'] = var25;
            var21['onPress'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var18[1] = var21;
            var13['children'] = var18;
            var13 = var17.bind(var5)(var14, var13);
            var10[2] = var13;
            if(!var11) { _fun0006_ip = 122; continue _fun0006 }
case 123:
            var14 = _closure1_slot13;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 42;
            var12 = var18[var12];
            var12 = var17.bind(var5)(var12);
            var13 = var12.TextWithIOSLinkWorkaround;
            var12 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var16 = var16.legalCopy;
            var12['style'] = var16;
            var16 = 43;
            var16 = var18[var16];
            var18 = var17.bind(var5)(var16);
            var17 = var18.getMobileFinePrintMessageForApplication;
            var21 = var1 != var15;
            var16 = undefined;
            if(!var21) { _fun0006_ip = 124; continue _fun0006 }
case 125:
            var16 = var15;
case 124:
            var15 = {};
            var15['shouldAppendDisclaimer'] = var20;
            var15 = var17.bind(var18)(var16, var19, var15);
            var12['children'] = var15;
            var11 = var14.bind(var5)(var13, var12);
case 122:
            var10[3] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 98:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlayerShopPDPCTAType;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var15;
    var4['container'] = var9;
    var9 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 9;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['height'] = var10;
    var13 = 'row';
    var14 = 'center';
    var10 = 10;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
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
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingBottom'] = var12;
    var4['scrollContent'] = var9;
    var9 = {};
    var12 = '100%';
    var9['width'] = var12;
    var17 = var6[var10];
    var17 = var11.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var9['paddingHorizontal'] = var17;
    var17 = var6[var10];
    var17 = var11.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var9['gap'] = var17;
    var4['section'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
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
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var9['gap'] = var16;
    var4['labelRow'] = var9;
    var9 = {};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var9['width'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var9['height'] = var16;
    var4['labelIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap'};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var9['gap'] = var16;
    var4['priceRow'] = var9;
    var9 = {};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var9['paddingHorizontal'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var9['paddingTop'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
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
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var9['gap'] = var16;
    var4['footerButtonRow'] = var9;
    var9 = {};
    var9['flex'] = var15;
    var4['buyButton'] = var9;
    var9 = {};
    var9['textAlign'] = var14;
    var4['availabilityCopy'] = var9;
    var9 = {};
    var14 = 'left';
    var9['textAlign'] = var14;
    var4['legalCopy'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9['marginHorizontal'] = var14;
    var14 = 11;
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
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['priceSection'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['heroImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WrappedSocialLayerStorefrontProductDetailsModal(arg1) {
        var4 = _closure1_slot13;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 44;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.NativePaymentContextProvider;
        var1 = {};
        var6 = new Array(0);
        var1['skuIDs'] = var6;
        var6 = null;
        var1['activeSubscription'] = var6;
        var7 = _closure1_slot13;
        var6 = _closure1_slot23;
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