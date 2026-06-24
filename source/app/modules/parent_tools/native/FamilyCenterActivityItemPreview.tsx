// app/modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function AvatarDecorationPreviewImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var6 = var1.styles;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
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
    var _closure1_slot7 = var1;
    var1 = function NameplatePreviewImage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.nameplateData;
            var9 = var1.styles;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getNameplateAssets;
            var1 = var1.bind(var2)(var3);
            var11 = var1.staticImageUrl;
            var1 = null;
            var2 = var1 == var11;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var9.nameplateContainer;
            var2['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = {};
            var10['uri'] = var11;
            var6['source'] = var10;
            var9 = var9.nameplatePreview;
            var6['style'] = var9;
            var9 = 'cover';
            var6['resizeMode'] = var9;
            var9 = 0;
            var6['fadeDuration'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function ProfileEffectPreviewImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var6 = var1.styles;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
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
    var _closure1_slot9 = var1;
    var1 = function ProfileFramePreviewImage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.product;
            var6 = var2.styles;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var1.skuId;
            var1 = 'FamilyCenterActivityItemPreview';
            var12 = var3.bind(var5)(var2, var1);
            var1 = null;
            var2 = var1 == var12;
            if(var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.profileFrameContainer;
            var2['style'] = var6;
            var8 = _closure1_slot5;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var6 = var11[var6];
            var7 = var10.bind(var5)(var6);
            var6 = {};
            var6['profileFrame'] = var12;
            var12 = _closure1_slot0;
            var9 = 4;
            var13 = var11[var9];
            var13 = var12.bind(var5)(var13);
            var14 = var13.PREVIEW_SIZE;
            var13 = var11[var9];
            var13 = var12.bind(var5)(var13);
            var13 = var13.PROFILE_FRAME_ASPECT_RATIO;
            var13 = var14 * var13;
            var6['previewWidth'] = var13;
            var9 = var11[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.PREVIEW_SIZE;
            var6['previewHeight'] = var9;
            var9 = 5;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_BASE_LOW;
            var6['profileBackgroundColor'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function SubscriptionPreview(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.subscriptionPlanId;
            var5 = var1.styles;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
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
            var8 = _closure1_slot5;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var6) { _fun0005_ip = 10; continue _fun0005 }
case 11:
            var6 = 11;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var7 = var6.NitroWheelIcon;
            _fun0005_ip = 12; continue _fun0005;
case 10:
            var6 = 10;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var7 = var6.BoostGemIcon;
case 12:
            var6 = {};
            var9 = 'custom';
            var6['size'] = var9;
            var9 = {'width': 20, 'height': 20};
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 8:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var5 = var5.purchasePlaceholder;
            var2['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.ShopIcon;
            var5 = {};
            var8 = 'custom';
            var5['size'] = var8;
            var8 = {'width': 20, 'height': 20};
            var5['style'] = var8;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function CollectiblePreview(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var6 = var1.product;
            var5 = var1.styles;
            var2 = null;
            if(!(var2 != var6)) { _fun0006_ip = 13; continue _fun0006 }
case 9:
            var7 = var6.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 12;
            var3 = var3[var9];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var7)) { _fun0006_ip = 14; continue _fun0006 }
case 15:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var7)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var7)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_FRAME;
            if(!(var3 !== var7)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var3 = {};
            var9 = var5.purchasePlaceholder;
            var3['style'] = var9;
            var11 = _closure1_slot5;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 9;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ShopIcon;
            var9 = {};
            var12 = 'custom';
            var9['size'] = var12;
            var12 = {'width': 20, 'height': 20};
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var3['children'] = var9;
            var3 = var8.bind(var4)(var7, var3);
            return var3;
case 20:
            var8 = _closure1_slot5;
            var7 = _closure1_slot10;
            var3 = {};
            var3['product'] = var6;
            var3['styles'] = var5;
            var3 = var8.bind(var4)(var7, var3);
            return var3;
case 18:
            var8 = _closure1_slot5;
            var7 = _closure1_slot9;
            var3 = {};
            var3['product'] = var6;
            var3['styles'] = var5;
            var3 = var8.bind(var4)(var7, var3);
            return var3;
case 16:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.getNameplateDataFromProductRecord;
            var9 = var3.bind(var7)(var6);
            var3 = var2 != var9;
            var2 = null;
            if(!var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var8 = _closure1_slot5;
            var7 = _closure1_slot8;
            var3 = {};
            var3['nameplateData'] = var9;
            var3['styles'] = var5;
            var2 = var8.bind(var4)(var7, var3);
case 22:
            return var2;
case 14:
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var1 = {};
            var1['product'] = var6;
            var1['styles'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 13:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var5 = var5.purchasePlaceholder;
            var2['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.ShopIcon;
            var5 = {};
            var8 = 'custom';
            var5['size'] = var8;
            var8 = {'width': 20, 'height': 20};
            var5['style'] = var8;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PREVIEW_SIZE;
    var9['width'] = var11;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PREVIEW_SIZE;
    var9['height'] = var11;
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var13;
    var13 = 'flex';
    var9['display'] = var13;
    var13 = 'center';
    var9['alignItems'] = var13;
    var9['justifyContent'] = var13;
    var13 = 12;
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
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PREVIEW_SIZE;
    var9['height'] = var11;
    var4['nameplatePreview'] = var9;
    var9 = {'width': null, 'height': null, 'marginRight': 12, 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PREVIEW_SIZE;
    var9['width'] = var11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.PREVIEW_SIZE;
    var9['height'] = var10;
    var4['profileFrameContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterActivityItemPreview(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var7 = var1.displayName;
            var11 = var1.product;
            var5 = var1.isSubscription;
            var10 = var1.subscriptionPlanId;
            var1 = _closure1_slot6;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = true;
            var1['accessible'] = var8;
            var1['accessibilityLabel'] = var7;
            var8 = _closure1_slot5;
            if(var5) { _fun0007_ip = 24; continue _fun0007 }
case 5:
            var7 = _closure1_slot12;
            var5 = {};
            var5['product'] = var11;
            var5['styles'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0007_ip = 25; continue _fun0007;
case 24:
            var7 = _closure1_slot11;
            var6 = {};
            var6['subscriptionPlanId'] = var10;
            var6['styles'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 25:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();