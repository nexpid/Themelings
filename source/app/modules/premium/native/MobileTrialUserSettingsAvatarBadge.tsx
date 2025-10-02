// app/modules/premium/native/MobileTrialUserSettingsAvatarBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'absolute';
    var9['position'] = var10;
    var4['sparkleContainer'] = var9;
    var9 = {'width': 12, 'height': 12};
    var4['sparkle'] = var9;
    var9 = {'width': 4, 'height': 4};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var9['tintColor'] = var10;
    var4['sparkle2'] = var9;
    var9 = {'width': 8, 'height': 8};
    var4['star'] = var9;
    var9 = {'bottom': 4294967290, 'left': 4294967288};
    var4['defaultSparklePosition'] = var9;
    var9 = {'bottom': 16, 'left': 4294967294};
    var4['defaultSparkle2Position'] = var9;
    var9 = {'top': 4294967292, 'right': 4294967288};
    var4['defaultStarPosition'] = var9;
    var9 = {'bottom': 4294967288, 'left': 4294967286};
    var4['avatarSparklePosition'] = var9;
    var9 = {'bottom': 16, 'left': 4294967294};
    var4['avatarSparkle2Position'] = var9;
    var9 = {'top': 4294967292, 'right': 4294967286};
    var4['avatarStarPosition'] = var9;
    var9 = {};
    var11 = {};
    var10 = '20deg';
    var11['rotate'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var9['transform'] = var10;
    var4['sparkle2Transform'] = var9;
    var9 = {};
    var11 = {};
    var10 = '-165deg';
    var11['rotate'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var9['transform'] = var10;
    var4['starTransform'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/MobileTrialUserSettingsAvatarBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MobileTrialUserSettingsAvatarBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot9;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var _closure2_slot0 = var7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePremiumTrialOffer;
            var3 = var1.bind(var2)();
            var2 = null;
            var8 = var2 == var3;
            var1 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.subscription_trial;
case 2:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 8;
            var3 = var10[var3];
            var8 = var9.bind(var4)(var3);
            var3 = var8.useShouldShowPremiumTrialUserSettingsAvatarBadge;
            var3 = var3.bind(var8)();
            var8 = 9;
            var8 = var10[var8];
            var11 = var9.bind(var4)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var10.bind(var11)(var9, var8);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            return var2;
case 4:
            var9 = var2 == var8;
            var3 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var8.avatar;
case 6:
            var3 = var2 != var3;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var7.defaultSparklePosition;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var8 = var7.avatarSparklePosition;
case 10:
            var _closure2_slot1 = var8;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var7.defaultSparkle2Position;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var8 = var7.avatarSparkle2Position;
case 13:
            var _closure2_slot2 = var8;
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var7.defaultStarPosition;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var3 = var7.avatarStarPosition;
case 16:
            var _closure2_slot3 = var3;
            var3 = var2 == var1;
            var7 = undefined;
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = var1.sku_id;
case 17:
            var3 = _closure1_slot5;
            var3 = var3.TIER_0;
            if(!(var7 !== var3)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 11;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 10;
            var7 = var9[var7];
            var3 = var8.bind(var4)(var7);
case 21:
            var _closure2_slot4 = var3;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = var1.sku_id;
case 22:
            var1 = _closure1_slot5;
            var1 = var1.TIER_0;
            if(!(var2 !== var1)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var1 = var3.bind(var4)(var2);
case 26:
            var _closure2_slot5 = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 14;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var6 = 15;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var7 = var6.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
            var6 = new Array(1);
            var6[0] = var7;
            var1['contentTypes'] = var6;
            var5 = function children(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.visibleContent;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
                    if(!(var2 !== var1)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    return var4;
case 27:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var8 = _closure1_slot6;
                    var7 = _closure1_slot3;
                    var5 = {};
                    var12 = _closure2_slot0;
                    var10 = var12.sparkleContainer;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = _closure2_slot1;
                    var9[1] = var10;
                    var5['style'] = var9;
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var9 = 16;
                    var6 = var15[var9];
                    var10 = var14.bind(var4)(var6);
                    var6 = {};
                    var11 = _closure2_slot4;
                    var6['source'] = var11;
                    var11 = var12.sparkle;
                    var6['style'] = var11;
                    var11 = true;
                    var6['disableColor'] = var11;
                    var6 = var8.bind(var4)(var10, var6);
                    var5['children'] = var6;
                    var6 = var8.bind(var4)(var7, var5);
                    var5 = new Array(3);
                    var5[0] = var6;
                    var6 = {};
                    var16 = var12.sparkleContainer;
                    var10 = new Array(3);
                    var10[0] = var16;
                    var16 = var12.starTransform;
                    var10[1] = var16;
                    var16 = _closure2_slot3;
                    var10[2] = var16;
                    var6['style'] = var10;
                    var10 = var15[var9];
                    var16 = var14.bind(var4)(var10);
                    var10 = {};
                    var17 = _closure2_slot5;
                    var10['source'] = var17;
                    var17 = var12.star;
                    var10['style'] = var17;
                    var10['disableColor'] = var11;
                    var10 = var8.bind(var4)(var16, var10);
                    var6['children'] = var10;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var6 = {};
                    var16 = var12.sparkleContainer;
                    var10 = new Array(3);
                    var10[0] = var16;
                    var16 = var12.sparkle2Transform;
                    var10[1] = var16;
                    var13 = _closure2_slot2;
                    var10[2] = var13;
                    var6['style'] = var10;
                    var9 = var15[var9];
                    var10 = var14.bind(var4)(var9);
                    var9 = {};
                    var13 = 17;
                    var13 = var15[var13];
                    var13 = var14.bind(var4)(var13);
                    var9['source'] = var13;
                    var12 = var12.sparkle2;
                    var9['style'] = var12;
                    var9['disableColor'] = var11;
                    var9 = var8.bind(var4)(var10, var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[2] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MobileTrialUserSettingsAvatarBadge'] = var2;
    return var1;
})();