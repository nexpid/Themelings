// app/modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ProfileEffectAssetPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.item;
            var1 = _closure1_slot12;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useProfileEffectPreset;
            var1 = null;
            var8 = var1 == var6;
            var2 = undefined;
            if(var8) { _fun0001_ip = 63; continue _fun0001 }
 58:
            var2 = var6.id;
 63:
            var3 = var3.bind(var4)(var2);
            if(!(var1 != var3)) { _fun0001_ip = 241; continue _fun0001 }
 75:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 89; continue _fun0001 }
 84:
            var2 = var3.config;
 89:
            if(!(var1 == var2)) { _fun0001_ip = 95; continue _fun0001 }
 93:
            var2 = {};
 95:
            var13 = var2.accessibilityLabel;
            var12 = var2.thumbnailPreviewSrc;
            var10 = var2.title;
            var4 = _closure1_slot9;
            var3 = _closure1_slot8;
            var2 = {};
            var9 = _closure1_slot7;
            var8 = _closure1_slot5;
            var6 = {};
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 7;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var6['source'] = var14;
            var6['alt'] = var13;
            var13 = var11.profileEffectBackground;
            var6['style'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.profileEffect;
            var7['style'] = var11;
            var11 = {};
            var11['uri'] = var12;
            var7['source'] = var11;
            var7['alt'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 241:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function NameplateAssetPreview(arg1) {
        var1 = arg1;
        var6 = var1.item;
        var2 = _closure1_slot13;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 8;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.getNameplateDataFromRecord;
        var6 = var2.bind(var3)(var6);
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var1 = 9;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
        var1['nameplate'] = var6;
        var5 = var5.nameplate;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function CollectibleProductPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.product;
            var3 = var1.recipientUser;
            var2 = var10.type;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            var9 = 55;
            if(!(var2 === var1)) { _fun0002_ip = 67; continue _fun0002 }
 64:
            var9 = 42;
 67:
            var1 = null;
            var1 = var1 == var3;
            var8 = undefined;
            if(var1) { _fun0002_ip = 93; continue _fun0002 }
 78:
            var2 = var3.getAvatarSource;
            var1 = false;
            var8 = var2.bind(var3)(var4, var1, var9);
 93:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = {'height': 55, 'width': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var6['width'] = var9;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot17;
            var5 = {};
            var5['product'] = var10;
            var5['width'] = var9;
            var5['userAvatarSource'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function CollectibleProductPreviewContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.product;
            var8 = var1.width;
            var7 = var1.userAvatarSource;
            var2 = _closure1_slot10;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.FractionalPremiumSKUsSets;
            var6 = var2.ALL;
            var3 = var6.has;
            var2 = var9.skuId;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0003_ip = 424; continue _fun0003 }
 87:
            var3 = var9.skuId;
            var2 = _closure1_slot6;
            var2 = var2.ORB_PROFILE_BADGE;
            if(!(var3 !== var2)) { _fun0003_ip = 358; continue _fun0003 }
 110:
            var3 = var9.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 10;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0003_ip = 292; continue _fun0003 }
 154:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0003_ip = 258; continue _fun0003 }
 187:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0003_ip = 224; continue _fun0003 }
 220:
            var2 = null;
            return var2;
 224:
            var6 = _closure1_slot7;
            var3 = _closure1_slot15;
            var2 = {};
            var11 = var9.items;
            var10 = 0;
            var10 = var11[var10];
            var2['item'] = var10;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 258:
            var6 = _closure1_slot7;
            var3 = _closure1_slot14;
            var2 = {};
            var11 = var9.items;
            var10 = 0;
            var10 = var11[var10];
            var2['item'] = var10;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 292:
            var6 = _closure1_slot7;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var10 = var9.items;
            var9 = 0;
            var9 = var10[var9];
            var2['item'] = var9;
            var2['size'] = var8;
            var2['avatarSource'] = var7;
            var7 = false;
            var2['animate'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 358:
            var6 = _closure1_slot7;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 12;
            var2 = var10[var2];
            var3 = var9.bind(var4)(var2);
            var2 = {};
            var7 = {};
            var8 = 14;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var7['uri'] = var8;
            var2['source'] = var7;
            var7 = var5.externalProductImage;
            var2['style'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 424:
            var3 = _closure1_slot7;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var2 = var8.bind(var4)(var1);
            var1 = {};
            var6 = {};
            var7 = 13;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var6['uri'] = var7;
            var1['source'] = var6;
            var5 = var5.externalProductImage;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function ProductDetails(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.product;
            var _closure2_slot0 = var9;
            var11 = var2.recipientUser;
            var2 = _closure1_slot10;
            var5 = undefined;
            var7 = var2.bind(var5)();
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var8 = var9.type;
            var2 = new Array(2);
            var2[0] = var8;
            var8 = var9.skuId;
            var2[1] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.FractionalPremiumSKUsSets;
                    var6 = var2.ALL;
                    var4 = var6.has;
                    var3 = _closure2_slot0;
                    var3 = var3.skuId;
                    var3 = var4.bind(var6)(var3);
                    if(var3) { _fun0005_ip = 441; continue _fun0005 }
 66:
                    var3 = _closure2_slot0;
                    var4 = var3.skuId;
                    var3 = _closure1_slot6;
                    var3 = var3.ORB_PROFILE_BADGE;
                    if(!(var4 !== var3)) { _fun0005_ip = 382; continue _fun0005 }
 93:
                    var2 = _closure2_slot0;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 10;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.AVATAR_DECORATION;
                    if(!(var2 !== var3)) { _fun0005_ip = 325; continue _fun0005 }
 141:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.PROFILE_EFFECT;
                    if(!(var2 !== var3)) { _fun0005_ip = 268; continue _fun0005 }
 174:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.NAMEPLATE;
                    if(!(var2 !== var3)) { _fun0005_ip = 211; continue _fun0005 }
 207:
                    var2 = null;
                    return var2;
 211:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.x5CoXV;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 268:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.wR5wOj;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 325:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.7v0T9P;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 382:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.0+rBWV;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 441:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.DFMPWV;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var16)) { _fun0004_ip = 292; continue _fun0004 }
 88:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = var7.productDetails;
            var1['style'] = var4;
            var10 = _closure1_slot7;
            var8 = _closure1_slot16;
            var4 = {};
            var4['product'] = var9;
            var4['recipientUser'] = var11;
            var8 = var10.bind(var5)(var8, var4);
            var4 = new Array(2);
            var4[0] = var8;
            var11 = _closure1_slot9;
            var10 = _closure1_slot4;
            var8 = {};
            var12 = var7.productDetailsTextContainer;
            var8['style'] = var12;
            var18 = _closure1_slot7;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 17;
            var12 = var17[var13];
            var12 = var14.bind(var5)(var12);
            var15 = var12.Text;
            var12 = {};
            var19 = 'text-md/semibold';
            var12['variant'] = var19;
            var19 = var9.name;
            var12['children'] = var19;
            var15 = var18.bind(var5)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            var15 = _closure1_slot7;
            var13 = var17[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {};
            var17 = 'text-sm/medium';
            var13['variant'] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var8['children'] = var12;
            var8 = var11.bind(var5)(var10, var8);
            var4[1] = var8;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0004_ip = 376; continue _fun0004;
 292:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.productDetails;
            var2['style'] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 17;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var10 = 'text-md/semibold';
            var6['variant'] = var10;
            var9 = var9.name;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 376:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function ProductPriceAmountTag(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var8 = var1.product;
            var _closure2_slot0 = var8;
            var7 = var1.isPremiumUser;
            var _closure2_slot1 = var7;
            var1 = var1.useOrbPrice;
            var _closure2_slot2 = var1;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var4 = new Array(3);
            var4[0] = var8;
            var4[1] = var7;
            var4[2] = var1;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    if(var1) { _fun0007_ip = 65; continue _fun0007 }
 21:
                    var1 = 19;
                    var1 = var4[var1];
                    var2 = undefined;
                    var9 = var5.bind(var2)(var1);
                    var8 = var9.getFormattedPriceForCollectiblesProduct;
                    var6 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var1 = true;
                    var1 = var8.bind(var9)(var6, var3, var1);
                    var3 = undefined;
                    var2 = var1;
                    _fun0007_ip = 112; continue _fun0007;
 65:
                    var1 = 18;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.getProductOrbPrice;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4['product'] = var8;
                    var7 = _closure2_slot1;
                    var4['isPremiumUser'] = var7;
                    var3 = var5.bind(var6)(var4);
                    var2 = undefined;
 112:
                    var1 = {};
                    var1['orbPrice'] = var3;
                    var1['priceText'] = var2;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var7 = var3.orbPrice;
            var6 = var3.priceText;
            var5 = _closure1_slot7;
            if(var1) { _fun0006_ip = 144; continue _fun0006 }
 95:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.Text;
            var1 = {};
            var8 = 'text-md/semibold';
            var1['variant'] = var8;
            var1['children'] = var6;
            var1 = var5.bind(var4)(var3, var1);
            _fun0006_ip = 196; continue _fun0006;
 144:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0006_ip = 185; continue _fun0006 }
 179:
            var6 = var7.amount;
 185:
            var2['orbAmount'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 196:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Image;
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
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'width': 45, 'height': 45};
    var7['externalProductImage'] = var10;
    var12 = {};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12['borderRadius'] = var13;
    var13 = 'column';
    var12['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_MOD_SUBTLE;
    var12['backgroundColor'] = var13;
    var7['productPreviewContainer'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12['paddingVertical'] = var13;
    var7['productDetailsContainer'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var12['gap'] = var13;
    var7['productDetails'] = var12;
    var12 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var12['gap'] = var13;
    var7['productDetailsTextContainer'] = var12;
    var12 = {'height': 36, 'backgroundColor': null, 'justifyContent': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var12['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12['borderBottomLeftRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12['borderBottomRightRadius'] = var13;
    var7['errorContainer'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = {};
            var2 = {};
            var3 = 2;
            var2['borderWidth'] = var3;
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 5;
            var5 = var3[var6];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var7 = var5.colors;
            var5 = arg1;
            if(var5) { _fun0008_ip = 56; continue _fun0008 }
 48:
            var5 = var7.STATUS_DANGER;
            _fun0008_ip = 62; continue _fun0008;
 56:
            var5 = var7.BG_BRAND;
 62:
            var2['borderColor'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var5.bind(var3)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_16;
            var2['marginHorizontal'] = var4;
            var2['backgroundColor'] = var3;
            var1['giftProductPreviewContainer'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var12 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var12['borderRadius'] = var13;
    var7['profileEffect'] = var12;
    var12 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'objectFit': 'cover'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var12['borderRadius'] = var13;
    var7['profileEffectBackground'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['nameplate'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopCheckoutDetails(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var18 = var1.product;
            var15 = var1.recipientUser;
            var7 = var1.isValidRecipient;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0009_ip = 29; continue _fun0009 }
 27:
            var7 = false;
 29:
            var16 = var1.useOrbPrice;
            if(!(var16 === var4)) { _fun0009_ip = 41; continue _fun0009 }
 39:
            var16 = false;
 41:
            var6 = var1.isGift;
            if(!(var6 === var4)) { _fun0009_ip = 53; continue _fun0009 }
 51:
            var6 = false;
 53:
            var1 = _closure1_slot10;
            var11 = var1.bind(var4)();
            var1 = _closure1_slot11;
            var9 = var1.bind(var4)(var7);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCurrentUser;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot1;
            var1 = 22;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.canUseCollectibles;
            var17 = var1.bind(var2)(var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var11.productPreviewContainer;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6;
            if(!var6) { _fun0009_ip = 166; continue _fun0009 }
 160:
            var8 = var9.giftProductPreviewContainer;
 166:
            var5[1] = var8;
            var1['style'] = var5;
            var9 = _closure1_slot9;
            var8 = _closure1_slot4;
            var5 = {};
            var12 = var11.productDetailsContainer;
            var5['style'] = var12;
            var14 = _closure1_slot7;
            var13 = _closure1_slot18;
            var12 = {};
            var12['product'] = var18;
            var12['recipientUser'] = var15;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot7;
            var14 = _closure1_slot19;
            var13 = {};
            var13['product'] = var18;
            var13['isPremiumUser'] = var17;
            var13['useOrbPrice'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0009_ip = 287; continue _fun0009 }
 284:
            var6 = !var7;
 287:
            if(!var6) { _fun0009_ip = 425; continue _fun0009 }
 293:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.errorContainer;
            var7['style'] = var11;
            var12 = _closure1_slot7;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 17;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/semibold', 'color': 'status-danger'};
            var13 = 16;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.3YfczM;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 425:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();