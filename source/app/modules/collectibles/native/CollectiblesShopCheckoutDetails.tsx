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
case 0:
            var1 = arg1;
            var1 = var1.item;
            var2 = _closure1_slot10;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useProfileEffectPreset;
            var1 = var1.skuId;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.config;
case 4:
            if(!(var1 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = {};
case 6:
            var10 = var2.accessibilityLabel;
            var13 = var2.thumbnailPreviewSrc;
            var11 = var2.title;
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var12.profileEffectContainer;
            var2['style'] = var6;
            var16 = _closure1_slot6;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 8;
            var6 = var14[var7];
            var15 = var8.bind(var5)(var6);
            var6 = {};
            var17 = {};
            var18 = 9;
            var18 = var14[var18];
            var18 = var8.bind(var5)(var18);
            var17['uri'] = var18;
            var6['source'] = var17;
            var6['alt'] = var10;
            var10 = var12.profileEffect;
            var6['style'] = var10;
            var10 = 'cover';
            var6['resizeMode'] = var10;
            var15 = var16.bind(var5)(var15, var6);
            var6 = new Array(2);
            var6[0] = var15;
            var9 = _closure1_slot6;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var12 = var12.profileEffect;
            var7['style'] = var12;
            var12 = {};
            var12['uri'] = var13;
            var7['source'] = var12;
            var7['alt'] = var11;
            var7['resizeMode'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function NameplateAssetPreview(arg1) {
        var1 = arg1;
        var6 = var1.item;
        var2 = _closure1_slot11;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 10;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.getNameplateData;
        var6 = var2.bind(var3)(var6);
        var3 = _closure1_slot6;
        var2 = _closure1_slot1;
        var1 = 11;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'nameplate': null, 'fullOpacity': true, 'isSquarePreview': true};
        var1['nameplate'] = var6;
        var5 = var5.nameplate;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function CollectibleProductPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.product;
            var3 = var1.recipientUser;
            var1 = _closure1_slot8;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = var10.type;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            var11 = 55;
            var9 = var11;
            if(!(var2 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 5:
            var9 = 42;
case 8:
            var1 = null;
            var1 = var1 == var3;
            var8 = undefined;
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var3.getAvatarSource;
            var1 = false;
            var8 = var2.bind(var3)(var4, var1, var9);
case 9:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var6.productPreviewContainer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['height'] = var11;
            var7['width'] = var9;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
    var1 = function CollectibleProductPreviewContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.product;
            var8 = var1.width;
            var7 = var1.userAvatarSource;
            var2 = _closure1_slot8;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.FractionalPremiumSKUsSets;
            var6 = var2.ALL;
            var3 = var6.has;
            var2 = var9.skuId;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var9.skuId;
            var2 = _closure1_slot5;
            var2 = var2.ORB_PROFILE_BADGE;
            if(!(var3 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var9.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 12;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = null;
            return var2;
case 19:
            var6 = _closure1_slot6;
            var3 = _closure1_slot13;
            var2 = {};
            var11 = var9.items;
            var10 = 0;
            var10 = var11[var10];
            var2['item'] = var10;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 17:
            var6 = _closure1_slot6;
            var3 = _closure1_slot12;
            var2 = {};
            var11 = var9.items;
            var10 = 0;
            var10 = var11[var10];
            var2['item'] = var10;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 15:
            var6 = _closure1_slot6;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 16;
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
case 13:
            var6 = _closure1_slot6;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var3 = var9.bind(var4)(var2);
            var2 = {};
            var7 = {};
            var8 = 15;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var7['uri'] = var8;
            var2['source'] = var7;
            var7 = var5.externalProductImage;
            var2['style'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 11:
            var3 = _closure1_slot6;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var2 = var8.bind(var4)(var1);
            var1 = {};
            var6 = {};
            var7 = 14;
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
    var _closure1_slot15 = var1;
    var1 = function ProductDetails(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var9 = var2.product;
            var _closure2_slot0 = var9;
            var11 = var2.recipientUser;
            var2 = _closure1_slot8;
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
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.FractionalPremiumSKUsSets;
                    var6 = var2.ALL;
                    var4 = var6.has;
                    var3 = _closure2_slot0;
                    var3 = var3.skuId;
                    var3 = var4.bind(var6)(var3);
                    if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var3 = _closure2_slot0;
                    var4 = var3.skuId;
                    var3 = _closure1_slot5;
                    var3 = var3.ORB_PROFILE_BADGE;
                    if(!(var4 !== var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot0;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 12;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.AVATAR_DECORATION;
                    if(!(var2 !== var3)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.PROFILE_EFFECT;
                    if(!(var2 !== var3)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.NAMEPLATE;
                    if(!(var2 !== var3)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var2 = null;
                    return var2;
case 29:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 17;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.x5CoXR;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 27:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 17;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.wR5wOo;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 25:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 17;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["7v0T9P"];
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 23:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 17;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["0+rBWT"];
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 21:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.DFMPWS;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var16)) { _fun0004_ip = 31; continue _fun0004 }
case 6:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = var7.productDetails;
            var1['style'] = var4;
            var10 = _closure1_slot6;
            var8 = _closure1_slot14;
            var4 = {};
            var4['product'] = var9;
            var4['recipientUser'] = var11;
            var8 = var10.bind(var5)(var8, var4);
            var4 = new Array(2);
            var4[0] = var8;
            var11 = _closure1_slot7;
            var10 = _closure1_slot4;
            var8 = {};
            var12 = var7.productDetailsTextContainer;
            var8['style'] = var12;
            var18 = _closure1_slot6;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 18;
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
            var15 = _closure1_slot6;
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
            _fun0004_ip = 32; continue _fun0004;
case 31:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.productDetails;
            var2['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
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
case 32:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function ProductPriceAmountTag(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
case 0:
                    var1 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    if(var1) { _fun0007_ip = 22; continue _fun0007 }
case 33:
                    var1 = 20;
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
                    _fun0007_ip = 34; continue _fun0007;
case 22:
                    var1 = 19;
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
case 34:
                    var1 = {};
                    var1['orbPrice'] = var3;
                    var1['priceText'] = var2;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var7 = var3.orbPrice;
            var6 = var3.priceText;
            var5 = _closure1_slot6;
            if(var1) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.Text;
            var1 = {};
            var8 = 'text-md/semibold';
            var1['variant'] = var8;
            var1['children'] = var6;
            var1 = var5.bind(var4)(var3, var1);
            _fun0006_ip = 37; continue _fun0006;
case 35:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0006_ip = 18; continue _fun0006 }
case 38:
            var6 = var7.amount;
case 18:
            var2['orbAmount'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 37:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.PROFILE_EFFECT_ASPECT_RATIO;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'width': 45, 'height': 45};
    var7['externalProductImage'] = var10;
    var12 = {};
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var12['borderRadius'] = var14;
    var14 = 'column';
    var12['flexDirection'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var12['backgroundColor'] = var14;
    var7['productContainer'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var12['paddingHorizontal'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var12['paddingVertical'] = var14;
    var7['productDetailsContainer'] = var12;
    var12 = {'justifyContent': 'center', 'alignItems': 'center'};
    var7['productPreviewContainer'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var12['gap'] = var14;
    var7['productDetails'] = var12;
    var12 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var12['gap'] = var14;
    var7['productDetailsTextContainer'] = var12;
    var12 = {'height': 36, 'backgroundColor': null, 'justifyContent': 'center'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var12['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var12['paddingHorizontal'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var12['borderBottomLeftRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var12['borderBottomRightRadius'] = var14;
    var7['errorContainer'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = {};
            var2 = {};
            var3 = 2;
            var2['borderWidth'] = var3;
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 6;
            var5 = var3[var6];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var7 = var5.colors;
            var5 = arg1;
            if(var5) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var5 = var7.BORDER_FEEDBACK_CRITICAL;
            _fun0008_ip = 41; continue _fun0008;
case 39:
            var5 = var7.BACKGROUND_BRAND;
case 41:
            var2['borderColor'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var5.bind(var3)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_16;
            var2['marginHorizontal'] = var4;
            var2['backgroundColor'] = var3;
            var1['giftProductContainer'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var12 = {'position': 'relative', 'width': '100%', 'height': '100%', 'borderRadius': null, 'overflow': 'hidden'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var12['borderRadius'] = var14;
    var7['profileEffectContainer'] = var12;
    var12 = {'position': 'absolute', 'width': '100%', 'aspectRatio': null, 'top': 0};
    var12['aspectRatio'] = var13;
    var7['profileEffect'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
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
    var _closure1_slot11 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopCheckoutDetails(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var18 = var2.product;
            var _closure2_slot0 = var18;
            var15 = var2.recipientUser;
            var7 = var2.isValidRecipient;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
            var7 = false;
case 42:
            var16 = var2.useOrbPrice;
            if(!(var16 === var4)) { _fun0009_ip = 44; continue _fun0009 }
case 45:
            var16 = false;
case 44:
            var _closure2_slot1 = var16;
            var6 = var2.isGift;
            if(!(var6 === var4)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
            var6 = false;
case 46:
            var _closure2_slot2 = var4;
            var2 = _closure1_slot8;
            var11 = var2.bind(var4)();
            var2 = _closure1_slot9;
            var9 = var2.bind(var4)(var7);
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCurrentUser;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 23;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.canUseCollectibles;
            var17 = var2.bind(var3)(var5);
            _closure2_slot2 = var17;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var16;
            var2[2] = var17;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var1 = var4[var1];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var1);
                    var3 = var4.getProductNameAndTypeLabel;
                    var1 = _closure2_slot0;
                    var5 = var3.bind(var4)(var1);
                    var1 = _closure2_slot1;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    if(var1) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                    var1 = 20;
                    var1 = var10[var1];
                    var6 = var9.bind(var8)(var1);
                    var4 = var6.getFormattedPriceForCollectiblesProduct;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = true;
                    var1 = var4.bind(var6)(var3, var2, var1);
                    var2 = null;
                    var2 = var2 != var1;
                    var4 = '';
                    if(!var2) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var4 = var1;
case 50:
                    _fun0010_ip = 52; continue _fun0010;
case 48:
                    var1 = 17;
                    var2 = var10[var1];
                    var2 = var9.bind(var8)(var2);
                    var6 = var2.intl;
                    var3 = var6.formatToPlainString;
                    var1 = var10[var1];
                    var1 = var9.bind(var8)(var1);
                    var1 = var1.t;
                    var2 = var1.W4DfeF;
                    var1 = {};
                    var7 = 19;
                    var7 = var10[var7];
                    var10 = var9.bind(var8)(var7);
                    var9 = var10.getProductOrbPrice;
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['product'] = var12;
                    var11 = _closure2_slot2;
                    var7['isPremiumUser'] = var11;
                    var9 = var9.bind(var10)(var7);
                    var7 = null;
                    var10 = var7 == var9;
                    var8 = undefined;
                    if(var10) { _fun0010_ip = 20; continue _fun0010 }
case 53:
                    var8 = var9.amount;
case 20:
                    var9 = var7 != var8;
                    var7 = '';
                    if(!var9) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                    var7 = var8;
case 54:
                    var1['orbAmount'] = var7;
                    var4 = var3.bind(var6)(var2, var1);
case 52:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ', ';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var11.productContainer;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6;
            if(!var6) { _fun0009_ip = 19; continue _fun0009 }
case 56:
            var8 = var9.giftProductContainer;
case 19:
            var5[1] = var8;
            var1['style'] = var5;
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var5 = {};
            var13 = var11.productDetailsContainer;
            var5['style'] = var13;
            var5['accessibilityLabel'] = var12;
            var12 = true;
            var5['accessible'] = var12;
            var14 = _closure1_slot6;
            var13 = _closure1_slot16;
            var12 = {};
            var12['product'] = var18;
            var12['recipientUser'] = var15;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot6;
            var14 = _closure1_slot17;
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
            if(!var6) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var6 = !var7;
case 57:
            if(!var6) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.errorContainer;
            var7['style'] = var11;
            var12 = _closure1_slot6;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 18;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/semibold', 'color': 'text-feedback-critical'};
            var13 = 17;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["3YfczA"];
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 59:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();