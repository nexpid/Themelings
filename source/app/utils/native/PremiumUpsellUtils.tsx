// app/utils/native/PremiumUpsellUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var2 = function usePremiumUpsellConfig(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var10 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 17;
            var4 = var7[var4];
            var12 = undefined;
            var6 = var6.bind(var12)(var4);
            var4 = var6.usePremiumTrialOffer;
            var8 = var4.bind(var6)();
            var _closure2_slot3 = var8;
            var4 = global;
            var7 = var4.Set;
            var4 = _closure1_slot7;
            var6 = var4.GLOBAL_EMOJI;
            var4 = new Array(2);
            var4[0] = var6;
            var6 = _closure1_slot7;
            var6 = var6.UPLOAD;
            var4[1] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var15 = var6;
            var14 = var4;
            var4 = new var15[var7](var14, var13);
            var6 = var4 instanceof Object ? var4 : var6;
            var11 = null;
            var7 = var11 != var8;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.has;
            var7 = var4.bind(var6)(var5);
case 2:
            var _closure2_slot4 = var7;
            var4 = var7;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var11 == var8;
            var9 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var8.subscription_trial;
            var11 = var11 == var6;
            var9 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var9 = var6.sku_id;
case 6:
            var6 = _closure1_slot8;
            var6 = var6.TIER_0;
            var4 = var9 === var6;
case 4:
            var _closure2_slot5 = var4;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var6 = new Array(2);
            var6[0] = var5;
            var6[1] = var4;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot5;
                    if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var2 = var2.UPLOAD;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = _closure1_slot7;
                    var2 = var2.ANIMATED_EMOJI;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                    var2 = _closure1_slot7;
                    var2 = var2.GLOBAL_EMOJI;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 14:
                    var2 = _closure1_slot7;
                    var2 = var2.GLOBAL_STICKER;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 15:
                    var2 = _closure1_slot7;
                    var2 = var2.CUSTOM_PROFILES;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 16:
                    var2 = _closure1_slot7;
                    var2 = var2.PREMIUM_GUILD_PROFILE;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 17:
                    var2 = _closure1_slot7;
                    var2 = var2.APP_ICONS;
                    if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 18:
                    var2 = _closure1_slot7;
                    var2 = var2.LONGER_MESSAGE;
                    if(!(var2 !== var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var2 = _closure1_slot7;
                    var2 = var2.GUILD_CAP;
                    if(!(var2 !== var3)) { _fun0002_ip = 19; continue _fun0002 }
case 21:
                    var2 = _closure1_slot7;
                    var2 = var2.ANIMATED_AVATAR;
case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.PremiumFeatureCardOrder;
                    var2 = var2.TIER_0_LEADING;
                    return var2;
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.PremiumFeatureCardOrder;
                    var2 = var2.TIER_2_LEADING;
                    return var2;
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.PremiumFeatureCardOrder;
                    var1 = var1.TIER_0_LEADING;
                    return var1;
                }
            };
            var11 = var9.bind(var11)(var5, var6);
            var _closure2_slot6 = var11;
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getBestActiveInput;
                    var3 = var2.bind(var3)();
                    var8 = null;
                    if(!(var8 != var3)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
case 22:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 20;
                    var3 = var2[var3];
                    var11 = var4.bind(var1)(var3);
                    var7 = var11.track;
                    var3 = _closure1_slot5;
                    var5 = var3.PREMIUM_PROMOTION_OPENED;
                    var3 = {};
                    var10 = _closure2_slot2;
                    var3['location'] = var10;
                    var3 = var7.bind(var11)(var5, var3);
                    var3 = 21;
                    var3 = var2[var3];
                    var5 = var4.bind(var1)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = 22;
                    var3 = var2[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.pushLazy;
                    var7 = _closure1_slot0;
                    var3 = 15;
                    var3 = var2[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = 23;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var1)(var3, var2);
                    var2 = {};
                    var7 = {};
                    var14 = var7;
                    var13 = var10;
                    var10 = copyDataProperties(var14, var13);
                    var9 = _closure1_slot6;
                    var10 = var9.BUTTON_CTA;
                    var9 = 'object';
                    var7[var9] = var10;
                    var2['analyticsLocation'] = var7;
                    var7 = _closure2_slot1;
                    if(!(var8 == var7)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var7 = new Array(0);
                    _fun0003_ip = 26; continue _fun0003;
case 24:
                    var7 = _closure2_slot1;
case 26:
                    var2['analyticsLocations'] = var7;
                    var6 = _closure2_slot6;
                    var2['premiumFeatureCardOrder'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var3 = var6.bind(var9)(var3, var5);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var4;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.9CM5v7;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 27:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0004_ip = 31; continue _fun0004 }
case 16:
                    var1 = _closure2_slot3;
                    var1 = var1.subscription_trial;
                    var2 = var2 == var1;
                    var3 = undefined;
                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var3 = var1.sku_id;
case 31:
                    var2 = _closure1_slot8;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0004_ip = 33; continue _fun0004 }
case 2:
                    var2 = _closure1_slot8;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0004_ip = 34; continue _fun0004 }
case 29:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var3 = var8[var2];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.pj0XBA;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 34:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.Gd/XHB;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 33:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.hz78hI;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var1, var2);
            var1 = {};
            var1['useTier0UpsellContent'] = var4;
            var1['onViewAllPerks'] = var3;
            var1['getNitroText'] = var2;
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var8[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = var5.AnalyticsObjects;
    var _closure1_slot6 = var6;
    var5 = var5.UpsellTypes;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot8 = var6;
    var5 = var5.PremiumTypes;
    var _closure1_slot9 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot10 = var5;
    var5 = {};
    var6 = function handleShowUpsellAlert(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var7 = var4.initialUpsellKey;
            var _closure2_slot0 = var7;
            var2 = var4.analyticsLocation;
            var1 = undefined;
            if(!(var1 === var2)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var2 = {};
case 35:
            var _closure2_slot1 = var2;
            var2 = var4.analyticsLocations;
            if(!(var1 === var2)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var2 = new Array(0);
case 37:
            var _closure2_slot2 = var2;
            var2 = var4.analyticsProperties;
            if(!(var1 === var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = {};
case 39:
            var _closure2_slot3 = var2;
            var2 = var4.largestFileSize;
            var _closure2_slot4 = var2;
            var2 = var4.imageSource;
            var _closure2_slot5 = var2;
            var6 = _closure1_slot4;
            var3 = var6.getCurrentUser;
            var9 = var3.bind(var6)();
            var3 = null;
            var6 = var3 == var9;
            var3 = false;
            if(var6) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var6 = _closure1_slot7;
            var6 = var6.UPLOAD;
            if(!(var6 !== var7)) { _fun0005_ip = 43; continue _fun0005 }
case 3:
            var6 = _closure1_slot7;
            var6 = var6.GLOBAL_EMOJI;
            if(!(var6 !== var7)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var6 = _closure1_slot7;
            var6 = var6.ANIMATED_AVATAR;
            if(!(var6 !== var7)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var6 = _closure1_slot7;
            var6 = var6.BADGE;
            if(!(var6 !== var7)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var6 = _closure1_slot7;
            var6 = var6.ANIMATED_EMOJI;
            if(!(var6 !== var7)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var6 = _closure1_slot7;
            var6 = var6.EMOJI_AUTOCOMPLETE;
            if(!(var6 !== var7)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var6 = _closure1_slot7;
            var6 = var6.CUSTOM_PROFILES;
            if(!(var6 !== var7)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var6 = _closure1_slot7;
            var6 = var6.APP_ICONS;
            if(!(var6 !== var7)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var6 = _closure1_slot7;
            var6 = var6.GLOBAL_STICKER;
            if(!(var6 !== var7)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var6 = _closure1_slot7;
            var6 = var6.PREMIUM_GUILD_PROFILE;
            if(!(var6 !== var7)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var6 = _closure1_slot7;
            var6 = var6.LONGER_MESSAGE;
            if(!(var6 !== var7)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_CAP;
            var3 = false;
            if(!(var6 === var7)) { _fun0005_ip = 41; continue _fun0005 }
case 64:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseIncreasedGuildCap;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 62:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseIncreasedMessageLength;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 60:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUsePremiumGuildMemberProfile;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 58:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseCustomStickersEverywhere;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 56:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUsePremiumAppIcons;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 54:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUsePremiumProfileCustomization;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 52:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var10 = 16;
            var6 = var6[var10];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseAnimatedEmojis;
            var6 = var6.bind(var7)(var9);
            var6 = !var6;
            if(var6) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var8 = var8.bind(var1)(var7);
            var7 = var8.canUseEmojisEverywhere;
            var7 = var7.bind(var8)(var9);
            var6 = !var7;
case 65:
            var3 = var6;
            _fun0005_ip = 41; continue _fun0005;
case 50:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseAnimatedEmojis;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 48:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseBadges;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 46:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseAnimatedAvatar;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 44:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseEmojisEverywhere;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 41; continue _fun0005;
case 43:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.isPremiumExactly;
            var6 = _closure1_slot9;
            var6 = var6.TIER_2;
            var6 = var7.bind(var8)(var9, var6);
            var3 = !var6;
case 41:
            if(!var3) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openLazy;
            var2 = {};
            var5 = function importer() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 15;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 14;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.then;
                var1 = function(arg1) {
                    var2 = arg1;
                    var2 = var2.default;
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
                        var4 = _closure1_slot10;
                        var3 = _closure4_slot0;
                        var2 = {};
                        var7 = arg1;
                        var8 = var2;
                        var1 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot0;
                        var5 = 'initialUpsellKey';
                        var2[var5] = var6;
                        var6 = _closure2_slot1;
                        var5 = 'analyticsLocation';
                        var2[var5] = var6;
                        var6 = _closure2_slot3;
                        var5 = 'analyticsProperties';
                        var2[var5] = var6;
                        var6 = _closure2_slot2;
                        var5 = 'analyticsLocations';
                        var2[var5] = var6;
                        var6 = _closure2_slot4;
                        var5 = 'largestFileSize';
                        var2[var5] = var6;
                        var5 = _closure2_slot5;
                        var1 = 'imageSource';
                        var2[var1] = var5;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['importer'] = var5;
            var2 = var3.bind(var4)(var2);
case 67:
            return var1;
case 69:
            return var1;
        }
    };
    var5['handleShowUpsellAlert'] = var6;
    var5['usePremiumUpsellConfig'] = var2;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/native/PremiumUpsellUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function getUpsellItems() {
        var2 = {};
        var1 = _closure1_slot7;
        var1 = var1.GLOBAL_EMOJI;
        var2['key'] = var1;
        var5 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 5;
        var1 = var8[var1];
        var7 = undefined;
        var1 = var5.bind(var7)(var1);
        var2['image'] = var1;
        var6 = _closure1_slot0;
        var3 = 6;
        var1 = var8[var3];
        var1 = var6.bind(var7)(var1);
        var10 = var1.intl;
        var9 = var10.string;
        var1 = var8[var3];
        var1 = var6.bind(var7)(var1);
        var1 = var1.t;
        var1 = var1.gKtr8P;
        var1 = var9.bind(var10)(var1);
        var2['activeTitle'] = var1;
        var1 = var8[var3];
        var1 = var6.bind(var7)(var1);
        var10 = var1.intl;
        var9 = var10.string;
        var1 = var8[var3];
        var1 = var6.bind(var7)(var1);
        var1 = var1.t;
        var1 = var1.N8ZRNT;
        var1 = var9.bind(var10)(var1);
        var2['passiveTitle'] = var1;
        var1 = var8[var3];
        var1 = var6.bind(var7)(var1);
        var11 = var1.intl;
        var10 = var11.format;
        var1 = var8[var3];
        var1 = var6.bind(var7)(var1);
        var1 = var1.t;
        var9 = var1.rf7Ixs;
        var1 = {};
        var1 = var10.bind(var11)(var9, var1);
        var2['description'] = var1;
        var1 = new Array(6);
        var1[0] = var2;
        var2 = {};
        var9 = _closure1_slot7;
        var9 = var9.ANIMATED_EMOJI;
        var2['key'] = var9;
        var9 = 7;
        var9 = var8[var9];
        var9 = var5.bind(var7)(var9);
        var2['image'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.F6rmys;
        var9 = var10.bind(var11)(var9);
        var2['activeTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.e4cKNj;
        var9 = var10.bind(var11)(var9);
        var2['passiveTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var12 = var9.intl;
        var11 = var12.format;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var10 = var9.JxTzzc;
        var9 = {};
        var9 = var11.bind(var12)(var10, var9);
        var2['description'] = var9;
        var1[1] = var2;
        var2 = {};
        var9 = _closure1_slot7;
        var9 = var9.ANIMATED_AVATAR;
        var2['key'] = var9;
        var9 = 8;
        var9 = var8[var9];
        var9 = var5.bind(var7)(var9);
        var2['image'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.tQh+gI;
        var9 = var10.bind(var11)(var9);
        var2['activeTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.HGSXTE;
        var9 = var10.bind(var11)(var9);
        var2['passiveTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var12 = var9.intl;
        var11 = var12.format;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var10 = var9.Tso/Fh;
        var9 = {};
        var9 = var11.bind(var12)(var10, var9);
        var2['description'] = var9;
        var1[2] = var2;
        var2 = {};
        var9 = _closure1_slot7;
        var9 = var9.UPLOAD;
        var2['key'] = var9;
        var9 = 9;
        var9 = var8[var9];
        var9 = var5.bind(var7)(var9);
        var2['image'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.1EOZq6;
        var9 = var10.bind(var11)(var9);
        var2['activeTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.tB51W1;
        var9 = var10.bind(var11)(var9);
        var2['passiveTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var12 = var9.intl;
        var11 = var12.format;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var10 = var9.DUT5IC;
        var9 = {};
        var13 = var8[var3];
        var13 = var6.bind(var7)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var8[var3];
        var13 = var6.bind(var7)(var13);
        var13 = var13.t;
        var13 = var13.Ll40SE;
        var13 = var14.bind(var15)(var13);
        var9['maxUploadStandard'] = var13;
        var13 = var8[var3];
        var13 = var6.bind(var7)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var8[var3];
        var13 = var6.bind(var7)(var13);
        var13 = var13.t;
        var13 = var13.EaBfen;
        var13 = var14.bind(var15)(var13);
        var9['maxUploadPremium'] = var13;
        var9 = var11.bind(var12)(var10, var9);
        var2['description'] = var9;
        var1[3] = var2;
        var2 = {};
        var9 = _closure1_slot7;
        var9 = var9.BADGE;
        var2['key'] = var9;
        var9 = 10;
        var9 = var8[var9];
        var9 = var5.bind(var7)(var9);
        var2['image'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.602BKy;
        var9 = var10.bind(var11)(var9);
        var2['activeTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9.j0TXTU;
        var9 = var10.bind(var11)(var9);
        var2['passiveTitle'] = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var12 = var9.intl;
        var11 = var12.format;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var10 = var9.p7i+lp;
        var9 = {};
        var9 = var11.bind(var12)(var10, var9);
        var2['description'] = var9;
        var1[4] = var2;
        var2 = {};
        var4 = _closure1_slot7;
        var4 = var4.APP_ICONS;
        var2['key'] = var4;
        var4 = 11;
        var4 = var8[var4];
        var4 = var5.bind(var7)(var4);
        var2['image'] = var4;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.1B1Cys;
        var4 = var5.bind(var9)(var4);
        var2['activeTitle'] = var4;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.1B1Cys;
        var4 = var5.bind(var9)(var4);
        var2['passiveTitle'] = var4;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var6.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.VL5TYW;
        var3 = var4.bind(var5)(var3);
        var2['description'] = var3;
        var1[5] = var2;
        return var1;
    };
    var3['getUpsellItems'] = var4;
    var3['usePremiumUpsellConfig'] = var2;
    return var1;
})();