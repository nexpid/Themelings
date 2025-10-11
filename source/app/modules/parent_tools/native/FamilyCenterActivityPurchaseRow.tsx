// app/modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'borderBottomColor': null, 'borderBottomWidth': 1, 'paddingVertical': 12};
    var15 = 'flex';
    var14 = 'center';
    var11 = 4;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_ACCENT;
    var9['borderBottomColor'] = var10;
    var13 = 12;
    var4['container'] = var9;
    var9 = {};
    var10 = 5;
    var16 = var6[var10];
    var16 = var5.bind(var1)(var16);
    var16 = var16.PREVIEW_SIZE;
    var9['width'] = var16;
    var16 = var6[var10];
    var16 = var5.bind(var1)(var16);
    var16 = var16.PREVIEW_SIZE;
    var9['height'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var9['borderRadius'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var16;
    var9['display'] = var15;
    var9['alignItems'] = var14;
    var9['justifyContent'] = var14;
    var9['marginRight'] = var13;
    var4['purchasePlaceholder'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var5.bind(var1)(var14);
    var14 = var14.PREVIEW_SIZE;
    var9['width'] = var14;
    var14 = var6[var10];
    var14 = var5.bind(var1)(var14);
    var14 = var14.PREVIEW_SIZE;
    var9['height'] = var14;
    var9['marginRight'] = var13;
    var4['previewImage'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var5.bind(var1)(var14);
    var14 = var14.PREVIEW_SIZE;
    var9['width'] = var14;
    var14 = var6[var10];
    var14 = var5.bind(var1)(var14);
    var14 = var14.PREVIEW_SIZE;
    var9['height'] = var14;
    var9['marginRight'] = var13;
    var4['avatarDecorationPreview'] = var9;
    var9 = {'width': null, 'height': null, 'marginRight': 12, 'borderRadius': null, 'overflow': 'hidden', 'position': 'relative'};
    var13 = var6[var10];
    var13 = var5.bind(var1)(var13);
    var13 = var13.PREVIEW_SIZE;
    var9['width'] = var13;
    var13 = var6[var10];
    var13 = var5.bind(var1)(var13);
    var13 = var13.PREVIEW_SIZE;
    var9['height'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9['borderRadius'] = var11;
    var4['nameplateContainer'] = var9;
    var9 = {'position': 'absolute', 'right': 0};
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var12 = var11.PREVIEW_SIZE;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.NAMEPLATE_ASPECT_RATIO;
    var11 = var12 * var11;
    var9['width'] = var11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.PREVIEW_SIZE;
    var9['height'] = var10;
    var4['nameplatePreview'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column', 'flexShrink': 1};
    var4['textContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = function AvatarDecorationPreviewImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var6 = var1.styles;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.getAvatarDecorationPreviewUrl;
            var8 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var8;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = {};
            var7['uri'] = var8;
            var2['source'] = var7;
            var6 = var6.avatarDecorationPreview;
            var2['style'] = var6;
            var6 = 0;
            var2['fadeDuration'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function NameplatePreviewImage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.product;
            var8 = var1.styles;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getNameplatePreviewUrl;
            var10 = var1.bind(var2)(var3);
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var8.nameplateContainer;
            var2['style'] = var7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = {};
            var9['uri'] = var10;
            var6['source'] = var9;
            var8 = var8.nameplatePreview;
            var6['style'] = var8;
            var8 = 'cover';
            var6['resizeMode'] = var8;
            var8 = 0;
            var6['fadeDuration'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function ProfileEffectPreviewImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var6 = var1.styles;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.getProfileEffectPreviewUrl;
            var8 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var8;
            if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = {};
            var7['uri'] = var8;
            var2['source'] = var7;
            var6 = var6.avatarDecorationPreview;
            var2['style'] = var6;
            var6 = 0;
            var2['fadeDuration'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function SubscriptionPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.subscriptionPlanId;
            var5 = var1.styles;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 5; continue _fun0004 }
case 6:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.isGuildBoostSubscription;
            var6 = var1.bind(var2)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var5.purchasePlaceholder;
            var1['style'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var6) { _fun0004_ip = 7; continue _fun0004 }
case 8:
            var6 = 8;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var7 = var6.NitroWheelIcon;
            _fun0004_ip = 9; continue _fun0004;
case 7:
            var6 = 7;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var7 = var6.BoostGemIcon;
case 9:
            var6 = {};
            var8 = 'custom';
            var6['size'] = var8;
            var8 = {'width': 20, 'height': 20};
            var6['style'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 5:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var5 = var5.purchasePlaceholder;
            var2['style'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.ShopIcon;
            var5 = {};
            var7 = 'custom';
            var5['size'] = var7;
            var7 = {'width': 20, 'height': 20};
            var5['style'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = function CollectiblePreview(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.product;
            var5 = var1.styles;
            var1 = null;
            if(!(var1 != var6)) { _fun0005_ip = 10; continue _fun0005 }
case 6:
            var3 = var6.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 9;
            var2 = var2[var8];
            var4 = undefined;
            var2 = var7.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var7.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var7.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var7 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var5.purchasePlaceholder;
            var2['style'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.ShopIcon;
            var8 = {};
            var10 = 'custom';
            var8['size'] = var10;
            var10 = {'width': 20, 'height': 20};
            var8['style'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var2['children'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 15:
            var7 = _closure1_slot5;
            var3 = _closure1_slot10;
            var2 = {};
            var2['product'] = var6;
            var2['styles'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 13:
            var7 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = {};
            var2['product'] = var6;
            var2['styles'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 11:
            var3 = _closure1_slot5;
            var2 = _closure1_slot8;
            var1 = {};
            var1['product'] = var6;
            var1['styles'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 10:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var5 = var5.purchasePlaceholder;
            var2['style'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.ShopIcon;
            var5 = {};
            var7 = 'custom';
            var5['size'] = var7;
            var7 = {'width': 20, 'height': 20};
            var5['style'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterActivityPurchaseRow(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.skuId;
            var12 = var1.subscriptionPlanId;
            var9 = var1.total;
            var4 = var1.currency;
            var1 = _closure1_slot7;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var2);
            var13 = var1.product;
            var3 = _closure1_slot0;
            var1 = 5;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.getPurchaseDisplayInfo;
            var1 = null;
            var8 = var1 != var13;
            var3 = null;
            if(!var8) { _fun0006_ip = 17; continue _fun0006 }
case 18:
            var3 = var13;
case 17:
            var3 = var6.bind(var7)(var3, var12);
            var8 = var3.displayName;
            var7 = var3.typeName;
            var6 = var3.isSubscription;
            if(!(var1 != var2)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            if(var6) { _fun0006_ip = 19; continue _fun0006 }
case 21:
            if(!(var1 == var13)) { _fun0006_ip = 19; continue _fun0006 }
case 22:
            return var1;
case 19:
            if(!(var1 != var8)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.formatPrice;
            var14 = var2.bind(var3)(var9, var4);
            var17 = var8;
            if(!(var1 != var7)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ' • ';
            var17 = var4.bind(var3)(var8, var2, var7);
case 25:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var11.container;
            var2['style'] = var7;
            var9 = _closure1_slot5;
            if(var6) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var7 = _closure1_slot12;
            var6 = {};
            var15 = var1 != var13;
            var8 = null;
            if(!var15) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var8 = var13;
case 29:
            var6['product'] = var8;
            var6['styles'] = var11;
            var7 = var9.bind(var5)(var7, var6);
            _fun0006_ip = 31; continue _fun0006;
case 27:
            var8 = _closure1_slot11;
            var6 = {};
            var6['subscriptionPlanId'] = var12;
            var6['styles'] = var11;
            var7 = var9.bind(var5)(var8, var6);
case 31:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.textContainer;
            var7['style'] = var11;
            var13 = _closure1_slot5;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
            var10 = var15[var11];
            var10 = var12.bind(var5)(var10);
            var16 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'interactive-active', 'ellipsizeMode': 'tail', 'lineClamp': 1};
            var10['children'] = var17;
            var16 = var13.bind(var5)(var16, var10);
            var10 = new Array(2);
            var10[0] = var16;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 23:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();