// app/utils/native/PremiumUpsellUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var6 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var2 = function usePremiumUpsellConfig(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!var7) { _fun0001_ip = 144; continue _fun0001 }
 134:
            var4 = var6.has;
            var7 = var4.bind(var6)(var5);
 144:
            var _closure2_slot4 = var7;
            var4 = var7;
            if(!var4) { _fun0001_ip = 198; continue _fun0001 }
 154:
            var6 = var11 == var8;
            var9 = undefined;
            if(var6) { _fun0001_ip = 184; continue _fun0001 }
 163:
            var6 = var8.subscription_trial;
            var11 = var11 == var6;
            var9 = undefined;
            if(var11) { _fun0001_ip = 184; continue _fun0001 }
 178:
            var9 = var6.sku_id;
 184:
            var6 = _closure1_slot8;
            var6 = var6.TIER_0;
            var4 = var9 === var6;
 198:
            var _closure2_slot5 = var4;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var6 = new Array(2);
            var6[0] = var5;
            var6[1] = var4;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot5;
                    if(var3) { _fun0002_ip = 237; continue _fun0002 }
 16:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var2 = var2.UPLOAD;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 37:
                    var2 = _closure1_slot7;
                    var2 = var2.ANIMATED_EMOJI;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 54:
                    var2 = _closure1_slot7;
                    var2 = var2.GLOBAL_EMOJI;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 71:
                    var2 = _closure1_slot7;
                    var2 = var2.GLOBAL_STICKER;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 85:
                    var2 = _closure1_slot7;
                    var2 = var2.CUSTOM_PROFILES;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 99:
                    var2 = _closure1_slot7;
                    var2 = var2.PREMIUM_GUILD_PROFILE;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 113:
                    var2 = _closure1_slot7;
                    var2 = var2.APP_ICONS;
                    if(!(var2 !== var3)) { _fun0002_ip = 201; continue _fun0002 }
 127:
                    var2 = _closure1_slot7;
                    var2 = var2.LONGER_MESSAGE;
                    if(!(var2 !== var3)) { _fun0002_ip = 165; continue _fun0002 }
 141:
                    var2 = _closure1_slot7;
                    var2 = var2.GUILD_CAP;
                    if(!(var2 !== var3)) { _fun0002_ip = 165; continue _fun0002 }
 155:
                    var2 = _closure1_slot7;
                    var2 = var2.ANIMATED_AVATAR;
 165:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.PremiumFeatureCardOrder;
                    var2 = var2.TIER_0_LEADING;
                    return var2;
 201:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.PremiumFeatureCardOrder;
                    var2 = var2.TIER_2_LEADING;
                    return var2;
 237:
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
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getBestActiveInput;
                    var3 = var2.bind(var3)();
                    var8 = null;
                    if(!(var8 != var3)) { _fun0003_ip = 51; continue _fun0003 }
 41:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 51:
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
                    if(!(var8 == var7)) { _fun0003_ip = 231; continue _fun0003 }
 225:
                    var7 = new Array(0);
                    _fun0003_ip = 235; continue _fun0003;
 231:
                    var7 = _closure2_slot1;
 235:
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
 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0004_ip = 82; continue _fun0004 }
 10:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0004_ip = 158; continue _fun0004 }
 20:
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
 82:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0004_ip = 124; continue _fun0004 }
 99:
                    var1 = _closure2_slot3;
                    var1 = var1.subscription_trial;
                    var2 = var2 == var1;
                    var3 = undefined;
                    if(var2) { _fun0004_ip = 124; continue _fun0004 }
 118:
                    var3 = var1.sku_id;
 124:
                    var2 = _closure1_slot8;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0004_ip = 279; continue _fun0004 }
 144:
                    var2 = _closure1_slot8;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0004_ip = 220; continue _fun0004 }
 158:
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
 220:
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
 279:
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
    var5 = native4;
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
 0:
            var4 = arg1;
            var7 = var4.initialUpsellKey;
            var _closure2_slot0 = var7;
            var2 = var4.analyticsLocation;
            var1 = undefined;
            if(!(var1 === var2)) { _fun0005_ip = 29; continue _fun0005 }
 27:
            var2 = {};
 29:
            var _closure2_slot1 = var2;
            var2 = var4.analyticsLocations;
            if(!(var1 === var2)) { _fun0005_ip = 47; continue _fun0005 }
 43:
            var2 = new Array(0);
 47:
            var _closure2_slot2 = var2;
            var2 = var4.analyticsProperties;
            if(!(var1 === var2)) { _fun0005_ip = 63; continue _fun0005 }
 61:
            var2 = {};
 63:
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
            if(var6) { _fun0005_ip = 819; continue _fun0005 }
 117:
            var6 = _closure1_slot7;
            var6 = var6.UPLOAD;
            if(!(var6 !== var7)) { _fun0005_ip = 774; continue _fun0005 }
 134:
            var6 = _closure1_slot7;
            var6 = var6.GLOBAL_EMOJI;
            if(!(var6 !== var7)) { _fun0005_ip = 738; continue _fun0005 }
 151:
            var6 = _closure1_slot7;
            var6 = var6.ANIMATED_AVATAR;
            if(!(var6 !== var7)) { _fun0005_ip = 702; continue _fun0005 }
 168:
            var6 = _closure1_slot7;
            var6 = var6.BADGE;
            if(!(var6 !== var7)) { _fun0005_ip = 666; continue _fun0005 }
 185:
            var6 = _closure1_slot7;
            var6 = var6.ANIMATED_EMOJI;
            if(!(var6 !== var7)) { _fun0005_ip = 627; continue _fun0005 }
 202:
            var6 = _closure1_slot7;
            var6 = var6.EMOJI_AUTOCOMPLETE;
            if(!(var6 !== var7)) { _fun0005_ip = 551; continue _fun0005 }
 219:
            var6 = _closure1_slot7;
            var6 = var6.CUSTOM_PROFILES;
            if(!(var6 !== var7)) { _fun0005_ip = 512; continue _fun0005 }
 236:
            var6 = _closure1_slot7;
            var6 = var6.APP_ICONS;
            if(!(var6 !== var7)) { _fun0005_ip = 473; continue _fun0005 }
 253:
            var6 = _closure1_slot7;
            var6 = var6.GLOBAL_STICKER;
            if(!(var6 !== var7)) { _fun0005_ip = 434; continue _fun0005 }
 270:
            var6 = _closure1_slot7;
            var6 = var6.PREMIUM_GUILD_PROFILE;
            if(!(var6 !== var7)) { _fun0005_ip = 395; continue _fun0005 }
 284:
            var6 = _closure1_slot7;
            var6 = var6.LONGER_MESSAGE;
            if(!(var6 !== var7)) { _fun0005_ip = 356; continue _fun0005 }
 298:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_CAP;
            var3 = false;
            if(!(var6 === var7)) { _fun0005_ip = 819; continue _fun0005 }
 317:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseIncreasedGuildCap;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 356:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseIncreasedMessageLength;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 395:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUsePremiumGuildMemberProfile;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 434:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseCustomStickersEverywhere;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 473:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUsePremiumAppIcons;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 512:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUsePremiumProfileCustomization;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 551:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var10 = 16;
            var6 = var6[var10];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseAnimatedEmojis;
            var6 = var6.bind(var7)(var9);
            var6 = !var6;
            if(var6) { _fun0005_ip = 619; continue _fun0005 }
 588:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var8 = var8.bind(var1)(var7);
            var7 = var8.canUseEmojisEverywhere;
            var7 = var7.bind(var8)(var9);
            var6 = !var7;
 619:
            var3 = var6;
            _fun0005_ip = 819; continue _fun0005;
 627:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseAnimatedEmojis;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 666:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseBadges;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 702:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseAnimatedAvatar;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 738:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canUseEmojisEverywhere;
            var6 = var6.bind(var7)(var9);
            var3 = !var6;
            _fun0005_ip = 819; continue _fun0005;
 774:
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
 819:
            if(!var3) { _fun0005_ip = 893; continue _fun0005 }
 822:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0005_ip = 895; continue _fun0005 }
 850:
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
 893:
            return var1;
 895:
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