// app/modules/collectibles/native/ShopPDPV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var11 = 2;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var10['flex'] = var12;
    var12 = 4;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var12;
    var7['container'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var7['title'] = var10;
    var10 = {'marginHorizontal': 16, 'marginTop': 24, 'marginBottom': 50, 'flexDirection': 'column', 'gap': 20};
    var7['body'] = var10;
    var10 = {'flexDirection': 'column', 'gap': 6};
    var7['description'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var7 = function PreviewContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.product;
            var6 = var1.width;
            var3 = var7.type;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 9;
            var2 = var2[var8];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0001_ip = 243; continue _fun0001 }
 63:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0001_ip = 209; continue _fun0001 }
 96:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0001_ip = 166; continue _fun0001 }
 129:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var2 !== var3)) { _fun0001_ip = 166; continue _fun0001 }
 162:
            var2 = null;
            return var2;
 166:
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['product'] = var7;
            var2['width'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 209:
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 15;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 243:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = {};
            var2 = {'borderBottomColor': null, 'borderBottomWidth': 1, 'paddingBottom': 25, 'marginTop': 25};
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 4;
            var6 = var3[var6];
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var6 = var6.colors;
            var6 = var6.BG_MOD_SUBTLE;
            var2['borderBottomColor'] = var6;
            var6 = _closure1_slot0;
            var8 = 9;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            var3 = var5 === var3;
            if(!var3) { _fun0002_ip = 108; continue _fun0002 }
 96:
            var6 = {};
            var9 = 16;
            var6['paddingHorizontal'] = var9;
            var3 = var6;
 108:
            var11 = var2;
            var10 = var3;
            var3 = copyDataProperties(var11, var10);
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            var3 = var5 === var3;
            if(!var3) { _fun0002_ip = 168; continue _fun0002 }
 154:
            var3 = {'marginTop': 8, 'paddingBottom': 0};
 168:
            var11 = var2;
            var10 = var3;
            var3 = copyDataProperties(var11, var10);
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            var3 = var5 === var3;
            if(var3) { _fun0002_ip = 247; continue _fun0002 }
 214:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.CollectiblesItemType;
            var4 = var4.BUNDLE;
            var3 = var5 === var4;
 247:
            if(!var3) { _fun0002_ip = 288; continue _fun0002 }
 250:
            var4 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
            var6 = 0.48;
            var5 = arg2;
            var5 = var6 * var5;
            var4['height'] = var5;
            var3 = var4;
 288:
            var11 = var2;
            var10 = var3;
            var3 = copyDataProperties(var11, var10);
            var1['preview'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start'};
    var4['bulletpoint'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginHorizontal'] = var10;
    var4['bulletpointDot'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = function BundledProductBulletpoint(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var14 = var2.product;
            var _closure2_slot0 = var14;
            var2 = _closure1_slot11;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var3 = _closure1_slot3;
            var4 = var14.type;
            var2 = new Array(1);
            var2[0] = var4;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 9;
                    var2 = var2[var6];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.AVATAR_DECORATION;
                    if(!(var2 !== var4)) { _fun0004_ip = 196; continue _fun0004 }
 56:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.PROFILE_EFFECT;
                    if(!(var2 !== var4)) { _fun0004_ip = 161; continue _fun0004 }
 89:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.NAMEPLATE;
                    if(!(var2 !== var4)) { _fun0004_ip = 126; continue _fun0004 }
 122:
                    var2 = null;
                    return var2;
 126:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.eVNt6O;
                    return var2;
 161:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.x/MGW1;
                    return var2;
 196:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1.IQQYeX;
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0003_ip = 251; continue _fun0003 }
 70:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var10.bulletpoint;
            var2['style'] = var7;
            var9 = _closure1_slot6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 8;
            var6 = var12[var7];
            var6 = var11.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-md/medium', 'color': 'text-normal', 'style': null, 'children': '•'};
            var10 = var10.bulletpointDot;
            var6['style'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            var10 = 10;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var12 = var10.intl;
            var11 = var12.format;
            var10 = {};
            var14 = var14.name;
            var10['itemName'] = var14;
            var10 = var11.bind(var12)(var13, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 251:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function BundleProductList(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.product;
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var1.bundledProducts;
            var1 = null;
            if(!(var1 == var6)) { _fun0005_ip = 38; continue _fun0005 }
 34:
            var6 = new Array(0);
 38:
            var5 = var6.map;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot6;
                var4 = _closure1_slot12;
                var3 = {};
                var3['product'] = var1;
                var2 = var1.skuId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ShopPDPV2.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var12 = var1.product;
            var13 = var1.onBuy;
            var11 = var1.analyticsLocations;
            var1 = _closure1_slot8;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 5;
            var1 = var18[var1];
            var2 = var17.bind(var4)(var1);
            var1 = var2.isPremiumCollectiblesProduct;
            var6 = var1.bind(var2)(var12);
            var1 = 6;
            var1 = var18[var1];
            var2 = var17.bind(var4)(var1);
            var1 = var2.useProductPurchaseState;
            var1 = var1.bind(var2)(var12);
            var10 = var1.isPurchased;
            var8 = var1.isPartiallyOwnedBundle;
            var1 = 7;
            var1 = var18[var1];
            var2 = var17.bind(var4)(var1);
            var1 = var2.useProductDescription;
            var19 = var1.bind(var2)(var12);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var20.body;
            var1['style'] = var5;
            var5 = {};
            var7 = var20.description;
            var5['style'] = var7;
            var16 = _closure1_slot6;
            var7 = 8;
            var14 = var18[var7];
            var14 = var17.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'heading-xl/bold', 'color': 'header-primary', 'style': null, 'accessibilityRole': 'header'};
            var20 = var20.title;
            var14['style'] = var20;
            var20 = var12.name;
            var14['children'] = var20;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var16 = var12.type;
            var15 = 9;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.CollectiblesItemType;
            var15 = var15.BUNDLE;
            if(!(var16 === var15)) { _fun0006_ip = 278; continue _fun0006 }
 255:
            var17 = _closure1_slot6;
            var16 = _closure1_slot13;
            var15 = {};
            var15['product'] = var12;
            var15 = var17.bind(var4)(var16, var15);
            _fun0006_ip = 328; continue _fun0006;
 278:
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var7];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 328:
            var14[1] = var15;
            var5['children'] = var14;
            var14 = var3.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var14;
            if(var10) { _fun0006_ip = 503; continue _fun0006 }
 356:
            if(var8) { _fun0006_ip = 404; continue _fun0006 }
 359:
            var6 = !var6;
            if(!var6) { _fun0006_ip = 402; continue _fun0006 }
 365:
            var14 = _closure1_slot6;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 11;
            var8 = var15[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['product'] = var12;
            var6 = var14.bind(var4)(var10, var8);
 402:
            _fun0006_ip = 501; continue _fun0006;
 404:
            var14 = _closure1_slot6;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = var19[var7];
            var8 = var18.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var15 = 10;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.BEjTio;
            var15 = var16.bind(var17)(var15);
            var8['children'] = var15;
            var6 = var14.bind(var4)(var10, var8);
 501:
            _fun0006_ip = 600; continue _fun0006;
 503:
            var10 = _closure1_slot6;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = var18[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var14 = 10;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.6cfuDg;
            var14 = var15.bind(var16)(var14);
            var7['children'] = var14;
            var6 = var10.bind(var4)(var8, var7);
 600:
            var5[1] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 12;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NativePaymentContextProvider;
            var6 = {};
            var10 = new Array(0);
            var6['skuIDs'] = var10;
            var10 = null;
            var6['activeSubscription'] = var10;
            var10 = _closure1_slot1;
            var9 = 13;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['onBuy'] = var13;
            var9['product'] = var12;
            var9['analyticsLocations'] = var11;
            var11 = true;
            var9['condensed'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ProductDetailsV2'] = var4;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var9 = var1.product;
            var4 = var1.handlePreviewPress;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var8 = var1.width;
            var3 = var1.height;
            var2 = _closure1_slot10;
            var1 = var9.type;
            var7 = var2.bind(var5)(var1, var3);
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 132; continue _fun0007 }
 75:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['onPress'] = var4;
            var4 = var7.preview;
            var1['style'] = var4;
            var10 = _closure1_slot9;
            var4 = {};
            var4['product'] = var9;
            var4['width'] = var8;
            var4 = var3.bind(var5)(var10, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0007_ip = 183; continue _fun0007;
 132:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.preview;
            var2['style'] = var7;
            var7 = _closure1_slot9;
            var6 = {};
            var6['product'] = var9;
            var6['width'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 183:
            return var1;
        }
    };
    var3['ProductPreviewV2'] = var2;
    return var1;
})();