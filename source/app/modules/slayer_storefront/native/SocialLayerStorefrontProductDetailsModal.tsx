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
            var1 = _closure1_slot13;
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
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var4 = var9.hero;
            var1['style'] = var4;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 11;
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
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var9.hero;
            var2['style'] = var7;
            var15 = _closure1_slot10;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 11;
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
            var12 = _closure1_slot10;
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
            var4 = _closure1_slot10;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var9.hero;
            var2['style'] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 10;
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
    var _closure1_slot14 = var1;
    var1 = function InGameItemTag() {
        var4 = _closure1_slot10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
        var5 = 13;
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
    var _closure1_slot15 = var1;
    var1 = function ProductPriceSection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sku;
            var1 = _closure1_slot13;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useFormattedSKUPrice;
            var1 = {};
            var1['sku'] = var4;
            var1 = var2.bind(var3)(var1);
            var13 = var1.normalPrice;
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var11.priceSection;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot15;
            var6 = {};
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = var11.priceRow;
            var7['style'] = var11;
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 12;
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
    var _closure1_slot16 = var1;
    var1 = function BundleThumbnailRow(arg1) {
        var1 = arg1;
        var2 = var1.items;
        var _closure2_slot0 = var2;
        var11 = var1.mediaItems;
        var2 = var1.selectedIndex;
        var _closure2_slot1 = var2;
        var1 = var1.onSelectIndex;
        var _closure2_slot2 = var1;
        var1 = _closure1_slot13;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var _closure2_slot3 = var10;
        var3 = _closure1_slot11;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var10.section;
        var1['style'] = var5;
        var8 = _closure1_slot10;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var5 = 12;
        var5 = var16[var5];
        var5 = var15.bind(var4)(var5);
        var7 = var5.Text;
        var5 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
        var12 = 13;
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
        var8 = _closure1_slot10;
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
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
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
case 13:
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var8 = var9.title;
case 14:
                var7 = var8;
case 12:
                var1['accessibilityLabel'] = var7;
                var7 = {};
                var7['selected'] = var10;
                var1['accessibilityState'] = var7;
                var6 = function onPress() {
                    var3 = _closure2_slot2;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var6;
                var6 = _closure2_slot3;
                var7 = var6.thumbnail;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var10;
                if(!var10) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var8 = _closure2_slot3;
                var7 = var8.thumbnailSelected;
case 16:
                var6[1] = var7;
                var1['style'] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = _closure2_slot3;
                var11 = var9.thumbnailInner;
                var9 = new Array(2);
                var9[0] = var11;
                if(!var10) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var11 = _closure2_slot3;
                var10 = var11.thumbnailInnerSelected;
case 18:
                var9[1] = var10;
                var6['style'] = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 11;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = {};
                var15 = _closure1_slot0;
                var14 = 9;
                var14 = var16[var14];
                var16 = var15.bind(var3)(var14);
                var15 = var16.getThumbnailSrc;
                var14 = arg1;
                var14 = var15.bind(var16)(var14);
                var13['uri'] = var14;
                var9['source'] = var13;
                var12 = _closure2_slot3;
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
    var _closure1_slot17 = var1;
    var1 = function SKUNameAndDescriptionSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.sku;
            var1 = _closure1_slot13;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 16;
            var1 = var1[var10];
            var3 = var2.bind(var5)(var1);
            var2 = var3.isNullOrEmpty;
            var1 = var11.name;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var6.section;
            var2['style'] = var6;
            var14 = _closure1_slot10;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 12;
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
            if(!var7) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var11 = var11.description;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 22:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function ItemDetailsSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.selectedItem;
            var6 = var2.applicationId;
            var2 = _closure1_slot13;
            var5 = undefined;
            var19 = var2.bind(var5)();
            var2 = var1.labelIconAssetId;
            var14 = null;
            var2 = var14 != var2;
            var21 = null;
            if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getAssetURL;
            var2 = var1.labelIconAssetId;
            var21 = var3.bind(var4)(var6, var2);
case 24:
            var3 = var1.title;
            var2 = var14 == var3;
            var13 = undefined;
            if(var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var2 = var3.trim;
            var13 = var2.bind(var3)();
case 26:
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
            var10 = 16;
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
case 8:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var2 = var1.bind(var2)(var11);
            var1 = null;
            if(var2) { _fun0005_ip = 34; continue _fun0005 }
case 32:
            var4 = _closure1_slot11;
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
            var12 = _closure1_slot10;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 12;
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
            var13 = _closure1_slot11;
            var12 = _closure1_slot7;
            var9 = {};
            var15 = var19.labelRow;
            var9['style'] = var15;
            var15 = var14 != var21;
            if(!var15) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var17 = _closure1_slot10;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 11;
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
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 12;
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
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
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
    var _closure1_slot19 = var1;
    var1 = function SocialLayerStorefrontProductDetailsModal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.skuId;
            var _closure2_slot0 = var2;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot13;
            var15 = var1.bind(var5)();
            var _closure2_slot1 = var15;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var13 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = 19;
            var1 = var4[var6];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var8.bind(var9)(var7, var1);
            var _closure2_slot2 = var16;
            var1 = 20;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useGetOrFetchApplication;
            var1 = null;
            var8 = var1 == var16;
            var3 = undefined;
            if(var8) { _fun0006_ip = 4; continue _fun0006 }
case 43:
            var3 = var16.applicationId;
case 4:
            var14 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getSkuAssets;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var7)(var4, var3);
            _closure2_slot3 = var6;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var16;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getCardImageURL;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var7.bind(var8)(var3, var4);
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var8 = 0;
            var4 = var3.bind(var4)(var8);
            var3 = _closure1_slot3;
            var7 = 2;
            var9 = var3.bind(var5)(var4, var7);
            var3 = var9[var8];
            var4 = 1;
            var27 = var9[var4];
            var17 = _closure1_slot4;
            var12 = var17.useMemo;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 == var3;
                    var9 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var4 = _closure2_slot2;
                    var3 = var4.applicationId;
case 44:
                    if(!(var2 != var3)) { _fun0007_ip = 16; continue _fun0007 }
case 46:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 9;
                    var3 = var3[var10];
                    var6 = var4.bind(var9)(var3);
                    var5 = var6.convertCarouselItemsToMediaItems;
                    var3 = _closure2_slot2;
                    var3 = var3.tenantMetadata;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0007_ip = 47; continue _fun0007 }
case 11:
                    var3 = var3.socialLayer;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var4 = var3.carouselItems;
case 47:
                    if(!(var2 == var4)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var4 = new Array(0);
case 49:
                    var2 = _closure2_slot2;
                    var13 = var2.applicationId;
                    var12 = _closure2_slot3;
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
                    _fun0007_ip = 51; continue _fun0007;
case 16:
                    var2 = new Array(2);
                    var3 = new Array(0);
                    var2[0] = var3;
                    var3 = new Array(0);
                    var2[1] = var3;
                    var1 = var2;
case 51:
                    return var1;
                }
            };
            var9 = var12.bind(var17)(var6, var9);
            var6 = _closure1_slot3;
            var6 = var6.bind(var5)(var9, var7);
            var33 = var6[var8];
            var32 = var6[var4];
            var6 = var32.length;
            var12 = var6 > var4;
            var6 = var32.length;
            var6 = var3 < var6;
            var31 = 0;
            if(!var6) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var31 = var3;
case 52:
            var3 = var33[var31];
            var6 = var1 != var3;
            var28 = null;
            if(!var6) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var28 = var3;
case 54:
            var3 = var32[var31];
            var6 = var1 != var3;
            var21 = null;
            if(!var6) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var21 = var3;
case 56:
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var23 = false;
            var6 = var3.bind(var6)(var23);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var7);
            var30 = var3[var8];
            var3 = var3[var4];
            _closure2_slot4 = var3;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 22;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['skuId'] = var2;
            var3['sku'] = var16;
            var6 = function onPurchaseComplete() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 23;
                    var3 = var3[var6];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openSocialLayerStorefrontProductPurchaseSuccessModal;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3['skuId'] = var7;
                    var8 = _closure2_slot2;
                    var7 = null;
                    var10 = var7 == var8;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var9 = _closure2_slot2;
                    var8 = var9.orbsReward;
case 58:
                    var9 = var7 != var8;
                    var7 = undefined;
                    if(!var9) { _fun0008_ip = 60; continue _fun0008 }
case 10:
                    var7 = var8;
case 60:
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
            var3['onPurchaseComplete'] = var6;
            var6 = function onPurchaseError() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPurchaseError'] = var6;
            var6 = function onPurchasePending() {
                var1 = undefined;
                return var1;
            };
            var3['onPurchasePending'] = var6;
            var3 = var4.bind(var5)(var3);
            _closure2_slot5 = var3;
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot5;
                var4 = var2.bind(var1)();
                var3 = var4.catch;
                var2 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var29 = var6.bind(var7)(var3, var4);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openSocialLayerStorefrontGiftModal;
                var2 = {};
                var5 = _closure2_slot0;
                var2['skuId'] = var5;
                var5 = new Array(0);
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var4.bind(var6)(var2, var3);
            if(!(var1 != var16)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var25 = 13;
            var2 = var18[var25];
            var2 = var17.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = var18[var25];
            var2 = var17.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.boqtTA;
            var19 = var3.bind(var4)(var2);
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var15.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var9 = 24;
            var9 = var18[var9];
            var17 = var17.bind(var5)(var9);
            var9 = var17.isIOS;
            var9 = var9.bind(var17)();
            var8 = 0;
            if(var9) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var8 = var13.top;
case 63:
            var7['paddingTop'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var15.header;
            var6['style'] = var9;
            var20 = _closure1_slot10;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 25;
            var9 = var22[var9];
            var9 = var18.bind(var5)(var9);
            var17 = var9.HeaderBackButton;
            var9 = {};
            var34 = 23;
            var34 = var22[var34];
            var34 = var18.bind(var5)(var34);
            var34 = var34.closeSocialLayerStorefrontProductDetailsModal;
            var9['onPress'] = var34;
            var26 = function backImage() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.XSmallIcon;
                var1 = {};
                var5 = 'md';
                var1['size'] = var5;
                var5 = _closure2_slot1;
                var5 = var5.closeButtonIcon;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9['backImage'] = var26;
            var26 = var22[var25];
            var26 = var18.bind(var5)(var26);
            var35 = var26.intl;
            var34 = var35.string;
            var26 = var22[var25];
            var26 = var18.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.cpT0Cq;
            var26 = var34.bind(var35)(var26);
            var9['accessibilityLabel'] = var26;
            var9['labelVisible'] = var23;
            var17 = var20.bind(var5)(var17, var9);
            var9 = new Array(2);
            var9[0] = var17;
            var20 = _closure1_slot10;
            var17 = 12;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Heading;
            var17 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
            var22 = var15.headerTitle;
            var17['style'] = var22;
            var23 = var1 == var14;
            var22 = undefined;
            if(var23) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var22 = var14.name;
case 65:
            var17['children'] = var22;
            var17 = var20.bind(var5)(var18, var17);
            var9[1] = var17;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var17 = var15.scrollContent;
            var7['contentContainerStyle'] = var17;
            if(!(var1 == var21)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var17 = var1 != var10;
            if(!var17) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var20 = _closure1_slot10;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 27;
            var10 = var22[var10];
            var18 = var18.bind(var5)(var10);
            var10 = {};
            var10['sku'] = var16;
            var17 = var20.bind(var5)(var18, var10);
case 69:
            _fun0006_ip = 71; continue _fun0006;
case 67:
            var20 = _closure1_slot10;
            var18 = _closure1_slot14;
            var10 = {};
            var10['mediaItem'] = var21;
            var17 = var20.bind(var5)(var18, var10);
case 71:
            var10 = new Array(2);
            var10[0] = var17;
            if(var12) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var18 = _closure1_slot10;
            var17 = _closure1_slot18;
            var12 = {};
            var12['sku'] = var16;
            var12 = var18.bind(var5)(var17, var12);
            _fun0006_ip = 74; continue _fun0006;
case 72:
            var20 = _closure1_slot11;
            var18 = _closure1_slot12;
            var17 = {};
            var23 = _closure1_slot10;
            var22 = _closure1_slot18;
            var21 = {};
            var21['sku'] = var16;
            var22 = var23.bind(var5)(var22, var21);
            var21 = new Array(3);
            var21[0] = var22;
            var26 = _closure1_slot10;
            var23 = _closure1_slot17;
            var22 = {};
            var22['items'] = var33;
            var22['mediaItems'] = var32;
            var22['selectedIndex'] = var31;
            var22['onSelectIndex'] = var27;
            var22 = var26.bind(var5)(var23, var22);
            var21[1] = var22;
            var22 = var16.applicationId;
            var22 = var1 != var22;
            if(!var22) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var22 = var1 != var28;
case 75:
            if(!var22) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var27 = _closure1_slot10;
            var26 = _closure1_slot19;
            var23 = {};
            var23['selectedItem'] = var28;
            var28 = var16.applicationId;
            var23['applicationId'] = var28;
            var22 = var27.bind(var5)(var26, var23);
case 77:
            var21[2] = var22;
            var17['children'] = var21;
            var12 = var20.bind(var5)(var18, var17);
case 74:
            var10[1] = var12;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot7;
            var7 = {};
            var12 = var15.footer;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = {};
            var18 = var13.bottom;
            var27 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 8;
            var13 = var17[var13];
            var13 = var27.bind(var5)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var13 = var18 + var13;
            var12['paddingBottom'] = var13;
            var10[1] = var12;
            var7['style'] = var10;
            var13 = _closure1_slot10;
            var12 = _closure1_slot16;
            var10 = {};
            var10['sku'] = var16;
            var12 = var13.bind(var5)(var12, var10);
            var10 = new Array(3);
            var10[0] = var12;
            var18 = _closure1_slot11;
            var13 = _closure1_slot7;
            var12 = {};
            var16 = var15.footerButtonRow;
            var12['style'] = var16;
            var22 = _closure1_slot10;
            var21 = _closure1_slot7;
            var20 = {};
            var16 = var15.buyButton;
            var20['style'] = var16;
            var28 = _closure1_slot10;
            var16 = _closure1_slot0;
            var23 = 28;
            var23 = var17[var23];
            var23 = var16.bind(var5)(var23);
            var26 = var23.Button;
            var23 = {'variant': 'primary', 'size': 'lg'};
            var23['text'] = var19;
            var23['loading'] = var30;
            var23['disabled'] = var30;
            var23['onPress'] = var29;
            var23 = var28.bind(var5)(var26, var23);
            var20['children'] = var23;
            var21 = var22.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot10;
            var21 = 29;
            var21 = var17[var21];
            var21 = var16.bind(var5)(var21);
            var22 = var21.IconButton;
            var21 = {'icon': null, 'variant': 'secondary', 'size': 'lg'};
            var26 = 30;
            var26 = var17[var26];
            var26 = var27.bind(var5)(var26);
            var21['icon'] = var26;
            var26 = var17[var25];
            var26 = var16.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var17[var25];
            var25 = var16.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.QAZA5f;
            var25 = var26.bind(var27)(var25);
            var21['accessibilityLabel'] = var25;
            var21['onPress'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var12['children'] = var20;
            var12 = var18.bind(var5)(var13, var12);
            var10[1] = var12;
            var13 = _closure1_slot10;
            var11 = 31;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var12 = var11.TextWithIOSLinkWorkaround;
            var11 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var15 = var15.legalCopy;
            var11['style'] = var15;
            var15 = 32;
            var15 = var17[var15];
            var18 = var16.bind(var5)(var15);
            var17 = var18.getMobileFinePrintMessageForApplication;
            var15 = var1 != var14;
            var16 = undefined;
            if(!var15) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var16 = var14;
case 79:
            var15 = {};
            var14 = true;
            var15['shouldAppendDisclaimer'] = var14;
            var14 = {};
            var20 = 'SocialLayerStorefrontProductDetailsModal';
            var14['location'] = var20;
            var40 = var18;
            var39 = var16;
            var38 = var19;
            var37 = var15;
            var36 = var14;
            var14 = var40[var17](var39, var38, var37, var36, var35);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 61:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var14 = 1;
    var7 = var6[var14];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var15 = 2;
    var4 = var6[var15];
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
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var14;
    var4['container'] = var9;
    var9 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['height'] = var10;
    var13 = 'row';
    var10 = 8;
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
    var9['flexShrink'] = var14;
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
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var9['paddingHorizontal'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var9['gap'] = var16;
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
    var9['margin'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9['borderRadius'] = var15;
    var4['thumbnailInnerSelected'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['thumbnailImage'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var9['gap'] = var15;
    var4['labelRow'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['width'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['height'] = var15;
    var4['labelIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['gap'] = var15;
    var4['priceRow'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['paddingHorizontal'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9['paddingTop'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['gap'] = var15;
    var9['borderTopWidth'] = var14;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var9['borderTopColor'] = var15;
    var4['footer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['gap'] = var15;
    var4['footerButtonRow'] = var9;
    var9 = {};
    var9['flex'] = var14;
    var4['buyButton'] = var9;
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
    var14 = 9;
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
    var _closure1_slot13 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WrappedSocialLayerStorefrontProductDetailsModal(arg1) {
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 33;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.NativePaymentContextProvider;
        var1 = {};
        var6 = new Array(0);
        var1['skuIDs'] = var6;
        var6 = null;
        var1['activeSubscription'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot20;
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