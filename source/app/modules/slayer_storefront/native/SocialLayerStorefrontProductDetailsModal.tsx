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
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot13;
            var17 = var1.bind(var5)();
            var _closure2_slot1 = var17;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var18 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var7 = 19;
            var1 = var6[var7];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useStateFromStores;
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
            var19 = var8.bind(var9)(var3, var1);
            var _closure2_slot2 = var19;
            var1 = var6[var7];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useStateFromStores;
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
                    if(var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var4 = _closure1_slot8;
                    var3 = var4.didFetchingSkuFail;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 43:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var1);
            var _closure2_slot3 = var3;
            var1 = 20;
            var1 = var6[var1];
            var8 = var4.bind(var5)(var1);
            var6 = var8.useGetOrFetchApplication;
            var1 = null;
            var9 = var1 == var19;
            var4 = undefined;
            if(var9) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var4 = var19.applicationId;
case 45:
            var16 = var6.bind(var8)(var4);
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 21;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var8 = var1 != var16;
            var4 = null;
            if(!var8) { _fun0006_ip = 22; continue _fun0006 }
case 47:
            var4 = var16;
case 22:
            var4 = var6.bind(var5)(var4);
            var15 = var4.hasAlreadyLinked;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var8 = var6.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getSkuAssets;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var7.bind(var8)(var6, var4);
            _closure2_slot4 = var11;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var19;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getCardImageURL;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var7.bind(var8)(var4, var6);
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var8 = 0;
            var6 = var4.bind(var6)(var8);
            var4 = _closure1_slot3;
            var14 = 2;
            var7 = var4.bind(var5)(var6, var14);
            var4 = var7[var8];
            var6 = 1;
            var32 = var7[var6];
            var20 = _closure1_slot4;
            var13 = var20.useMemo;
            var9 = new Array(2);
            var9[0] = var19;
            var9[1] = var11;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 == var3;
                    var9 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var4 = _closure2_slot2;
                    var3 = var4.applicationId;
case 48:
                    if(!(var2 != var3)) { _fun0008_ip = 16; continue _fun0008 }
case 50:
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
                    if(var8) { _fun0008_ip = 51; continue _fun0008 }
case 11:
                    var3 = var3.socialLayer;
                    var8 = var2 == var3;
                    var4 = undefined;
                    if(var8) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var4 = var3.carouselItems;
case 51:
                    if(!(var2 == var4)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var4 = new Array(0);
case 53:
                    var2 = _closure2_slot2;
                    var13 = var2.applicationId;
                    var12 = _closure2_slot4;
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
                    _fun0008_ip = 55; continue _fun0008;
case 16:
                    var2 = new Array(2);
                    var3 = new Array(0);
                    var2[0] = var3;
                    var3 = new Array(0);
                    var2[1] = var3;
                    var1 = var2;
case 55:
                    return var1;
                }
            };
            var9 = var13.bind(var20)(var7, var9);
            var7 = _closure1_slot3;
            var7 = var7.bind(var5)(var9, var14);
            var36 = var7[var8];
            var35 = var7[var6];
            var7 = var35.length;
            var13 = var7 > var6;
            var7 = var35.length;
            var7 = var4 < var7;
            var34 = 0;
            if(!var7) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var34 = var4;
case 56:
            var4 = var36[var34];
            var7 = var1 != var4;
            var33 = null;
            if(!var7) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var33 = var4;
case 58:
            var4 = var35[var34];
            var7 = var1 != var4;
            var26 = null;
            if(!var7) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var26 = var4;
case 60:
            var7 = var1 == var19;
            var4 = undefined;
            if(var7) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var7 = var19.tenantMetadata;
            var9 = var1 == var7;
            var4 = undefined;
            if(var9) { _fun0006_ip = 62; continue _fun0006 }
case 64:
            var7 = var7.socialLayer;
            var9 = var1 == var7;
            var4 = undefined;
            if(var9) { _fun0006_ip = 62; continue _fun0006 }
case 65:
            var7 = var7.carouselItems;
            var9 = var1 == var7;
            var4 = undefined;
            if(var9) { _fun0006_ip = 62; continue _fun0006 }
case 66:
            var4 = var7.length;
case 62:
            var9 = var1 != var4;
            var7 = 0;
            if(!var9) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var7 = var4;
case 67:
            var4 = var36.length;
            var9 = var7 === var4;
            _closure2_slot5 = var9;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var27 = false;
            var7 = var4.bind(var7)(var27);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var7, var14);
            var25 = var4[var8];
            var4 = var4[var6];
            _closure2_slot6 = var4;
            var6 = _closure1_slot4;
            var4 = var6.useRef;
            var4 = var4.bind(var6)(var27);
            _closure2_slot7 = var4;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var4 = new Array(4);
            var4[0] = var19;
            var4[1] = var11;
            var4[2] = var9;
            var4[3] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0009_ip = 48; continue _fun0009 }
case 69:
                    var3 = _closure2_slot2;
                    var3 = var3.applicationId;
                    var2 = var4 != var3;
case 48:
                    if(!var2) { _fun0009_ip = 4; continue _fun0009 }
case 70:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var2 = _closure2_slot3;
case 71:
                    if(var2) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var3 = _closure2_slot7;
                    var2 = var3.current;
case 73:
                    if(var2) { _fun0009_ip = 4; continue _fun0009 }
case 75:
                    var3 = _closure2_slot7;
                    var2 = true;
                    var3['current'] = var2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 23;
                    var2 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var2);
                    var4 = var5.fetchSocialLayerStorefrontSkuForApplication;
                    var1 = _closure2_slot2;
                    var3 = var1.applicationId;
                    var2 = var1.id;
                    var1 = {};
                    var6 = 24;
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
            var3 = var6.bind(var7)(var3, var4);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 25;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['skuId'] = var2;
            var3['sku'] = var19;
            var6 = function onPurchaseComplete() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 26;
                    var3 = var3[var6];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openSocialLayerStorefrontProductSelfPurchaseSuccessModal;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3['skuId'] = var7;
                    var8 = _closure2_slot2;
                    var7 = null;
                    var10 = var7 == var8;
                    var8 = undefined;
                    if(var10) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                    var9 = _closure2_slot2;
                    var8 = var9.orbsReward;
case 76:
                    var9 = var7 != var8;
                    var7 = undefined;
                    if(!var9) { _fun0010_ip = 78; continue _fun0010 }
case 10:
                    var7 = var8;
case 78:
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
                var3 = _closure2_slot6;
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
            _closure2_slot8 = var3;
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure2_slot6;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot8;
                var4 = var2.bind(var1)();
                var3 = var4.catch;
                var2 = function() {
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = var6.bind(var7)(var3, var4);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
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
            if(!(var1 != var19)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 14;
            var2 = var21[var2];
            var3 = var14.bind(var5)(var2);
            var2 = var3.isSlayerSkuAvailableOnThisPlatform;
            var11 = var2.bind(var3)(var19);
            var29 = 13;
            var2 = var21[var29];
            var2 = var14.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = var21[var29];
            var2 = var14.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.boqtTA;
            var20 = var3.bind(var4)(var2);
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var17.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var9 = 24;
            var9 = var21[var9];
            var14 = var14.bind(var5)(var9);
            var9 = var14.isIOS;
            var9 = var9.bind(var14)();
            var8 = 0;
            if(var9) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var8 = var18.top;
case 81:
            var7['paddingTop'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var17.header;
            var6['style'] = var9;
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 27;
            var9 = var21[var9];
            var9 = var22.bind(var5)(var9);
            var14 = var9.HeaderBackButton;
            var9 = {};
            var31 = 26;
            var31 = var21[var31];
            var31 = var22.bind(var5)(var31);
            var31 = var31.closeSocialLayerStorefrontProductDetailsModal;
            var9['onPress'] = var31;
            var30 = function backImage() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
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
            var9['backImage'] = var30;
            var30 = var21[var29];
            var30 = var22.bind(var5)(var30);
            var37 = var30.intl;
            var31 = var37.string;
            var30 = var21[var29];
            var30 = var22.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.cpT0Cq;
            var30 = var31.bind(var37)(var30);
            var9['accessibilityLabel'] = var30;
            var9['labelVisible'] = var27;
            var14 = var23.bind(var5)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var23 = _closure1_slot10;
            var14 = 12;
            var21 = var21[var14];
            var21 = var22.bind(var5)(var21);
            var22 = var21.Heading;
            var21 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
            var27 = var17.headerTitle;
            var21['style'] = var27;
            var30 = var1 == var16;
            var27 = undefined;
            if(var30) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var27 = var16.name;
case 83:
            var21['children'] = var27;
            var21 = var23.bind(var5)(var22, var21);
            var9[1] = var21;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var21 = var17.scrollContent;
            var7['contentContainerStyle'] = var21;
            if(!(var1 == var26)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var21 = var1 != var10;
            if(!var21) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var23 = _closure1_slot10;
            var22 = _closure1_slot1;
            var27 = _closure1_slot2;
            var10 = 29;
            var10 = var27[var10];
            var22 = var22.bind(var5)(var10);
            var10 = {};
            var10['sku'] = var19;
            var21 = var23.bind(var5)(var22, var10);
case 87:
            _fun0006_ip = 89; continue _fun0006;
case 85:
            var23 = _closure1_slot10;
            var22 = _closure1_slot14;
            var10 = {};
            var10['mediaItem'] = var26;
            var21 = var23.bind(var5)(var22, var10);
case 89:
            var10 = new Array(2);
            var10[0] = var21;
            if(var13) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var22 = _closure1_slot10;
            var21 = _closure1_slot18;
            var13 = {};
            var13['sku'] = var19;
            var13 = var22.bind(var5)(var21, var13);
            _fun0006_ip = 92; continue _fun0006;
case 90:
            var23 = _closure1_slot11;
            var22 = _closure1_slot12;
            var21 = {};
            var30 = _closure1_slot10;
            var27 = _closure1_slot18;
            var26 = {};
            var26['sku'] = var19;
            var27 = var30.bind(var5)(var27, var26);
            var26 = new Array(3);
            var26[0] = var27;
            var31 = _closure1_slot10;
            var30 = _closure1_slot17;
            var27 = {};
            var27['items'] = var36;
            var27['mediaItems'] = var35;
            var27['selectedIndex'] = var34;
            var27['onSelectIndex'] = var32;
            var27 = var31.bind(var5)(var30, var27);
            var26[1] = var27;
            var27 = var19.applicationId;
            var27 = var1 != var27;
            if(!var27) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var27 = var1 != var33;
case 93:
            if(!var27) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var32 = _closure1_slot10;
            var31 = _closure1_slot19;
            var30 = {};
            var30['selectedItem'] = var33;
            var33 = var19.applicationId;
            var30['applicationId'] = var33;
            var27 = var32.bind(var5)(var31, var30);
case 95:
            var26[2] = var27;
            var21['children'] = var26;
            var13 = var23.bind(var5)(var22, var21);
case 92:
            var10[1] = var13;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot7;
            var7 = {};
            var13 = var17.footer;
            var10 = new Array(2);
            var10[0] = var13;
            var13 = {};
            var21 = var18.bottom;
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 8;
            var18 = var23[var18];
            var18 = var22.bind(var5)(var18);
            var18 = var18.spacing;
            var18 = var18.PX_16;
            var18 = var21 + var18;
            var13['paddingBottom'] = var18;
            var10[1] = var13;
            var7['style'] = var10;
            var18 = _closure1_slot10;
            var13 = _closure1_slot16;
            var10 = {};
            var10['sku'] = var19;
            var13 = var18.bind(var5)(var13, var10);
            var10 = new Array(4);
            var10[0] = var13;
            var13 = !var11;
            if(!var13) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var19 = _closure1_slot10;
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var14 = var27[var14];
            var14 = var22.bind(var5)(var14);
            var18 = var14.Text;
            var14 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var21 = var17.availabilityCopy;
            var14['style'] = var21;
            var21 = var27[var29];
            var21 = var22.bind(var5)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var26 = _closure1_slot1;
            var21 = 30;
            var21 = var27[var21];
            var21 = var26.bind(var5)(var21);
            var21 = var21.gndWN7;
            var21 = var22.bind(var23)(var21);
            var14['children'] = var21;
            var13 = var19.bind(var5)(var18, var14);
case 97:
            var10[1] = var13;
            var18 = _closure1_slot11;
            var14 = _closure1_slot7;
            var13 = {};
            var19 = var17.footerButtonRow;
            var13['style'] = var19;
            var22 = _closure1_slot10;
            var21 = _closure1_slot7;
            var19 = {};
            var23 = var17.buyButton;
            var19['style'] = var23;
            var27 = _closure1_slot10;
            var26 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 31;
            var23 = var30[var23];
            var23 = var26.bind(var5)(var23);
            var26 = var23.Button;
            var23 = {'variant': 'primary', 'size': 'lg'};
            var23['text'] = var20;
            var23['loading'] = var25;
            var30 = var25;
            if(var25) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var30 = !var11;
case 99:
            var23['disabled'] = var30;
            var23['onPress'] = var28;
            var23 = var27.bind(var5)(var26, var23);
            var19['children'] = var23;
            var21 = var22.bind(var5)(var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 32;
            var21 = var28[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.IconButton;
            var21 = {'icon': null, 'variant': 'primary', 'size': 'lg'};
            var27 = _closure1_slot1;
            var26 = 33;
            var26 = var28[var26];
            var26 = var27.bind(var5)(var26);
            var21['icon'] = var26;
            if(var25) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var25 = !var11;
case 101:
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
            var19[1] = var21;
            var13['children'] = var19;
            var13 = var18.bind(var5)(var14, var13);
            var10[2] = var13;
            if(!var11) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var14 = _closure1_slot10;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 34;
            var12 = var19[var12];
            var12 = var18.bind(var5)(var12);
            var13 = var12.TextWithIOSLinkWorkaround;
            var12 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var17 = var17.legalCopy;
            var12['style'] = var17;
            var17 = 35;
            var17 = var19[var17];
            var19 = var18.bind(var5)(var17);
            var18 = var19.getMobileFinePrintMessageForApplication;
            var21 = var1 != var16;
            var17 = undefined;
            if(!var21) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var17 = var16;
case 105:
            var16 = {};
            var16['shouldAppendDisclaimer'] = var15;
            var15 = {};
            var21 = 'SocialLayerStorefrontProductDetailsModal';
            var15['location'] = var21;
            var42 = var19;
            var41 = var17;
            var40 = var20;
            var39 = var16;
            var38 = var15;
            var15 = var42[var18](var41, var40, var39, var38, var37);
            var12['children'] = var15;
            var11 = var14.bind(var5)(var13, var12);
case 103:
            var10[3] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 79:
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
    var9['flex'] = var15;
    var4['container'] = var9;
    var9 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['height'] = var10;
    var13 = 'row';
    var14 = 'center';
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
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WrappedSocialLayerStorefrontProductDetailsModal(arg1) {
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 36;
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