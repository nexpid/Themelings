// app/modules/user_profile/UserProfileActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function trackTryOutFeature(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.PREMIUM_FEATURE_TRY_OUT;
        var2 = {};
        var7 = arg1;
        var2['feature_name'] = var7;
        var6 = _closure1_slot9;
        var6 = var6.PREMIUM_STANDARD;
        var2['feature_tier'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _saveProfileChanges() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = arg1;
                    var8 = arg2;
                    var17 = arg3;
                    var5 = undefined;
                    var13 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var9 = _closure1_slot4;
                    var7 = var9.getCurrentUser;
                    var10 = var7.bind(var9)();
                    var9 = null;
                    var11 = var9 == var10;
                    var7 = undefined;
                    if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = var10.id;
case 4:
                    var13 = var7;
                    if(!(var9 == var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var5;
case 6:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 8;
                    var7 = var11[var7];
                    var10 = var10.bind(var5)(var7);
                    var7 = var10.getShouldConvertBioEmoji;
                    var10 = var7.bind(var10)();
                    var7 = var14;
                    var7 = var7.bio;
                    var7 = var9 != var7;
                    if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = var10;
case 8:
                    if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var10 = var14;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 9;
                    var7 = var12[var7];
                    var12 = var11.bind(var5)(var7);
                    var11 = var12.parse;
                    var7 = var10.bio;
                    var7 = var11.bind(var12)(var5, var7);
                    var7 = var7.content;
                    var10['bio'] = var7;
case 10: // try_start_0
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var12 = 10;
                    var7 = var7[var12];
                    var15 = var10.bind(var5)(var7);
                    var11 = var15.dispatch;
                    var10 = {};
                    var7 = 'USER_PROFILE_UPDATE_START';
                    var10['type'] = var7;
                    var7 = var13;
                    var10['userId'] = var7;
                    var7 = var8;
                    var10['guildId'] = var7;
                    var10 = var11.bind(var15)(var10);
                    if(!(var9 == var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = {};
                    var15 = _closure1_slot7;
                    var11 = var15.USER_PROFILE;
                    var10 = _closure1_slot8;
                    var10 = var11.bind(var15)(var10);
                    var7['url'] = var10;
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 11;
                    var10 = var15[var10];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.SafetyScannedUploadSurface;
                    var10 = var10.USER_DEFAULT_PROFILE_BANNER;
                    var7['bannerSurface'] = var10;
                    _fun0001_ip = 14; continue _fun0001;
case 12:
                    var10 = {};
                    var18 = _closure1_slot7;
                    var16 = var18.USER_GUILD_PROFILE;
                    var15 = var8;
                    var11 = _closure1_slot8;
                    var11 = var16.bind(var18)(var15, var11);
                    var10['url'] = var11;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 11;
                    var11 = var16[var11];
                    var11 = var15.bind(var5)(var11);
                    var11 = var11.SafetyScannedUploadSurface;
                    var11 = var11.USER_GUILD_PROFILE_BANNER;
                    var10['bannerSurface'] = var11;
                    var7 = var10;
case 14:
                    var15 = var7.url;
                    var18 = var7.bannerSurface;
                    var10 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 12;
                    var7 = var16[var7];
                    var7 = var10.bind(var5)(var7);
                    var11 = var7.HTTP;
                    var10 = var11.patch;
                    var7 = {};
                    var7['url'] = var15;
                    var7['body'] = var14;
                    var15 = _closure1_slot1;
                    var14 = 13;
                    var14 = var16[var14];
                    var16 = var15.bind(var5)(var14);
                    var15 = var16.buildHeadersForMd5;
                    var14 = {};
                    var14[17] = var17;
                    var14 = var15.bind(var16)(var14);
                    var7['headers'] = var14;
                    var14 = true;
                    var7['oldFormErrors'] = var14;
                    var14 = false;
                    var7['rejectWithError'] = var14;
                    var7 = var10.bind(var11)(var7);
                    SaveGenerator(address=479);
case 15:
                    return var7;
case 16:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var12 = var11.bind(var5)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var14 = 'USER_PROFILE_UPDATE_SUCCESS';
                    var10['type'] = var14;
                    var10['userId'] = var13;
                    var13 = var8;
                    var10['guildId'] = var13;
                    var19 = var7.body;
                    var20 = var10;
                    var13 = copyDataProperties(var20, var19);
                    var10 = var11.bind(var12)(var10);
case 19: // try_end0
                    return var7;
case 17:
                    return var7;
case 20: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var2 = var7;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 14;
                    var10 = var12[var10];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.APIError;
                    var11 = var10.prototype;
                    var11 = Object.create(var11, {constructor: {value: var10}});
                    var21 = var11;
                    var20 = var7;
                    var10 = new var21[var10](var20, var19);
                    var6 = var10 instanceof Object ? var10 : var11;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var10 = var2;
                    var7 = var10.body;
case 21:
                    var4 = var7;
                    if(!(var9 == var7)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var7 = {};
                    _fun0001_ip = 25; continue _fun0001;
case 23:
                    var7 = var4;
case 25:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 10;
                    var3 = var9[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'USER_PROFILE_UPDATE_FAILURE';
                    var3['type'] = var9;
                    var3['guildId'] = var8;
                    var3['errors'] = var7;
                    var3['apiError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ComponentActions;
    var _closure1_slot5 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot7 = var7;
    var4 = var4.ME;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = var7;
    var4 = var4.AnalyticsPremiumFeatureNames;
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function notifyUnsavedUserProfileChangesInModal() {
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 4;
        var4 = var9[var3];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var6 = var4.ComponentDispatch;
        var5 = var6.dispatch;
        var2 = _closure1_slot5;
        var4 = var2.SHAKE_PROFILE_MODAL;
        var4 = var5.bind(var6)(var4);
        var3 = var9[var3];
        var3 = var7.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = var2.EMPHASIZE_NOTICE;
        var2 = var3.bind(var4)(var2);
        var2 = 5;
        var2 = var9[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.AccessibilityAnnouncer;
        var3 = var4.announce;
        var2 = 6;
        var5 = var9[var2];
        var5 = var7.bind(var1)(var5);
        var8 = var5.intl;
        var6 = var8.string;
        var5 = var9[var2];
        var5 = var7.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.GP7JLE;
        var8 = var6.bind(var8)(var5);
        var5 = var9[var2];
        var5 = var7.bind(var1)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var2 = var9[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.t;
        var2 = var2.gKoO1D;
        var7 = var5.bind(var6)(var2);
        var2 = global;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var5 = '';
        var2 = ' ';
        var2 = var6.bind(var5)(var8, var2, var7);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['notifyUnsavedUserProfileChangesInModal'] = var4;
    var4 = function saveProfileChanges() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveProfileChanges'] = var4;
    var4 = function pinUserProfileBadgesOnClient(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot4;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var6 = var3 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var5 = var4.id;
case 26:
            if(!(var3 != var5)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'USER_PROFILE_PIN_BADGES_ON_CLIENT';
            var2['type'] = var6;
            var6 = arg1;
            var2['badges'] = var6;
            var6 = arg2;
            var2['ttlInSeconds'] = var6;
            var2['userId'] = var5;
            var2 = var3.bind(var4)(var2);
case 28:
            return var1;
        }
    };
    var3['pinUserProfileBadgesOnClient'] = var4;
    var4 = function resetPendingProfileChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingProfileChanges'] = var4;
    var4 = function resetAllPendingChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAllPendingChanges'] = var4;
    var4 = function resetAllTryItOutChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAllTryItOutChanges'] = var4;
    var4 = function setTryItOutAvatar(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR';
        var3['type'] = var6;
        var6 = arg1;
        var3['avatar'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.ANIMATED_AVATAR;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutAvatar'] = var4;
    var4 = function setTryItOutAvatarDecoration(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION';
        var3['type'] = var6;
        var6 = arg1;
        var3['avatarDecoration'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.AVATAR_DECORATION;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutAvatarDecoration'] = var4;
    var4 = function setTryItOutProfileEffect(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT';
        var3['type'] = var6;
        var6 = arg1;
        var3['profileEffect'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.PROFILE_EFFECT;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutProfileEffect'] = var4;
    var4 = function setTryItOutBanner(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER';
        var3['type'] = var6;
        var6 = arg1;
        var3['banner'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.PROFILE_BANNER;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutBanner'] = var4;
    var4 = function setTryItOutThemeColors(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS';
        var3['type'] = var6;
        var6 = arg1;
        var3['themeColors'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.PROFILE_THEME_COLOR;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutThemeColors'] = var4;
    var4 = function setTryItOutDisplayNameStyles(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES';
        var3['type'] = var6;
        var6 = arg1;
        var3['displayNameStyles'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.DISPLAY_NAME_STYLES;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutDisplayNameStyles'] = var4;
    var2 = function setTryItOutPreset(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET';
        var3['type'] = var6;
        var7 = arg1;
        var8 = var3;
        var6 = copyDataProperties(var8, var7);
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var2 = var2.PRESET;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutPreset'] = var2;
    return var1;
})();