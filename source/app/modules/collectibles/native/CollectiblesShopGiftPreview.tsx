// app/modules/collectibles/native/CollectiblesShopGiftPreview.tsx
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
            var1 = _closure1_slot10;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
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
            if(!(var1 != var3)) { _fun0001_ip = 242; continue _fun0001 }
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
            var4 = _closure1_slot8;
            var3 = _closure1_slot7;
            var2 = {};
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var6 = {};
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 6;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var6['source'] = var14;
            var6['alt'] = var13;
            var13 = var11.profileEffectBackground;
            var6['style'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot6;
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
 242:
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
        var2 = 7;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.getNameplateDataFromRecord;
        var6 = var2.bind(var3)(var6);
        var3 = _closure1_slot6;
        var2 = _closure1_slot1;
        var1 = 8;
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
    var1 = function GiftCollectiblePreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.product;
            var3 = var1.recipientUser;
            var2 = var10.type;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
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
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = {'height': 55, 'width': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var6['width'] = var9;
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
    var1 = function GiftCollectiblePreviewContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.product;
            var6 = var1.width;
            var5 = var1.userAvatarSource;
            var3 = var7.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 9;
            var2 = var2[var9];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0003_ip = 207; continue _fun0003 }
 69:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0003_ip = 173; continue _fun0003 }
 102:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0003_ip = 139; continue _fun0003 }
 135:
            var2 = null;
            return var2;
 139:
            var8 = _closure1_slot6;
            var3 = _closure1_slot13;
            var2 = {};
            var10 = var7.items;
            var9 = 0;
            var9 = var10[var9];
            var2['item'] = var9;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
 173:
            var8 = _closure1_slot6;
            var3 = _closure1_slot12;
            var2 = {};
            var10 = var7.items;
            var9 = 0;
            var9 = var10[var9];
            var2['item'] = var9;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
 207:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var7.items;
            var7 = 0;
            var7 = var8[var7];
            var1['item'] = var7;
            var1['size'] = var6;
            var1['avatarSource'] = var5;
            var5 = false;
            var1['animate'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 3;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = {};
            var2 = {'borderRadius': null, 'flexDirection': 'column', 'borderWidth': 2};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 4;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.lg;
            var2['borderRadius'] = var4;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var7 = var4.colors;
            var4 = arg1;
            if(var4) { _fun0004_ip = 94; continue _fun0004 }
 86:
            var4 = var7.STATUS_DANGER;
            _fun0004_ip = 100; continue _fun0004;
 94:
            var4 = var7.BG_BRAND;
 100:
            var2['borderColor'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['marginHorizontal'] = var7;
            var1['giftPreviewContainer'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingHorizontal'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingVertical'] = var7;
            var1['giftDetailsContainer'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var2['gap'] = var7;
            var1['giftDetails'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_4;
            var2['gap'] = var7;
            var1['giftDetailsTextContainer'] = var2;
            var2 = {'height': 36, 'backgroundColor': null, 'justifyContent': 'center'};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_SECONDARY;
            var2['backgroundColor'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingHorizontal'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.lg;
            var2['borderBottomLeftRadius'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomRightRadius'] = var3;
            var1['errorContainer'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var12 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var10 = 4;
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopGiftPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopGiftPreivew(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var26 = var2.product;
            var _closure2_slot0 = var26;
            var20 = var2.recipientUser;
            var6 = var2.isValidRecipient;
            var2 = _closure1_slot9;
            var4 = undefined;
            var12 = var2.bind(var4)(var6);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var7 = var26.type;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 9;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.AVATAR_DECORATION;
                    if(!(var2 !== var3)) { _fun0006_ip = 240; continue _fun0006 }
 56:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.PROFILE_EFFECT;
                    if(!(var2 !== var3)) { _fun0006_ip = 183; continue _fun0006 }
 89:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.NAMEPLATE;
                    if(!(var2 !== var3)) { _fun0006_ip = 126; continue _fun0006 }
 122:
                    var2 = null;
                    return var2;
 126:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 11;
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
 183:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 11;
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
 240:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.7v0T9P;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var27 = var3.bind(var5)(var1, var2);
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 12;
            var1 = var13[var1];
            var2 = var14.bind(var4)(var1);
            var1 = var2.useCurrentUser;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.canUseCollectibles;
            var5 = var1.bind(var2)(var3);
            var1 = 14;
            var1 = var13[var1];
            var3 = var14.bind(var4)(var1);
            var2 = var3.getFormattedPriceForCollectiblesProduct;
            var1 = true;
            var16 = var2.bind(var3)(var26, var5, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.giftPreviewContainer;
            var1['style'] = var5;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = var12.giftDetailsContainer;
            var5['style'] = var9;
            var18 = _closure1_slot8;
            var15 = _closure1_slot4;
            var9 = {};
            var10 = var12.giftDetails;
            var9['style'] = var10;
            var19 = _closure1_slot6;
            var17 = _closure1_slot14;
            var10 = {};
            var10['product'] = var26;
            var10['recipientUser'] = var20;
            var10 = var19.bind(var4)(var17, var10);
            var19 = new Array(2);
            var19[0] = var10;
            var22 = _closure1_slot8;
            var21 = _closure1_slot4;
            var20 = {};
            var10 = var12.giftDetailsTextContainer;
            var20['style'] = var10;
            var25 = _closure1_slot6;
            var10 = 15;
            var17 = var13[var10];
            var17 = var14.bind(var4)(var17);
            var24 = var17.Text;
            var23 = {};
            var17 = 'text-md/semibold';
            var23['variant'] = var17;
            var26 = var26.name;
            var23['children'] = var26;
            var24 = var25.bind(var4)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var26 = _closure1_slot6;
            var24 = var13[var10];
            var24 = var14.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {};
            var28 = 'text-sm/medium';
            var24['variant'] = var28;
            var24['children'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var23[1] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var9['children'] = var19;
            var15 = var18.bind(var4)(var15, var9);
            var9 = new Array(2);
            var9[0] = var15;
            var15 = _closure1_slot6;
            var13 = var13[var10];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var13['variant'] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var9[1] = var13;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = !var6;
            if(!var6) { _fun0005_ip = 596; continue _fun0005 }
 467:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var12 = var12.errorContainer;
            var7['style'] = var12;
            var12 = _closure1_slot6;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/semibold', 'color': 'status-danger'};
            var13 = 11;
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
 596:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();