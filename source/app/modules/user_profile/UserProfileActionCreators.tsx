// app/modules/user_profile/UserProfileActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var1 = function trackTryOutFeature(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.PREMIUM_FEATURE_TRY_OUT;
        var2 = {};
        var7 = arg1;
        var2['feature_name'] = var7;
        var6 = _closure1_slot10;
        var6 = var6.PREMIUM_STANDARD;
        var2['feature_tier'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _saveProfileChanges() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = arg1;
                    var7 = arg2;
                    var5 = undefined;
                    var10 = undefined;
                    var4 = undefined;
                    var6 = _closure1_slot4;
                    var2 = var6.getCurrentUser;
                    var6 = var2.bind(var6)();
                    var13 = null;
                    var8 = var13 == var6;
                    var2 = undefined;
                    if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = var6.id;
case 4:
                    var10 = var2;
                    if(!(var13 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var5;
case 6:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var6 = var6.bind(var5)(var2);
                    var2 = var6.getShouldConvertBioEmoji;
                    var6 = var2.bind(var6)();
                    var2 = var11;
                    var2 = var2.bio;
                    var2 = var13 != var2;
                    if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var2 = var6;
case 8:
                    if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var11;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 10;
                    var2 = var9[var2];
                    var9 = var8.bind(var5)(var2);
                    var8 = var9.parse;
                    var2 = var6.bio;
                    var2 = var8.bind(var9)(var5, var2);
                    var2 = var2.content;
                    var6['bio'] = var2;
case 10: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var9 = 11;
                    var2 = var8[var9];
                    var14 = var6.bind(var5)(var2);
                    var6 = var14.dispatch;
                    var2 = {};
                    var12 = 'USER_PROFILE_UPDATE_START';
                    var2['type'] = var12;
                    var12 = var10;
                    var2['userId'] = var12;
                    var12 = var7;
                    var2['guildId'] = var12;
                    var2 = var6.bind(var14)(var2);
                    var6 = _closure1_slot0;
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var6.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var6 = var8.patch;
                    var2 = {};
                    if(!(var13 == var12)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var14 = _closure1_slot8;
                    var13 = var14.USER_PROFILE;
                    var12 = _closure1_slot9;
                    var12 = var13.bind(var14)(var12);
                    _fun0001_ip = 14; continue _fun0001;
case 12:
                    var16 = _closure1_slot8;
                    var15 = var16.USER_GUILD_PROFILE;
                    var14 = var7;
                    var13 = _closure1_slot9;
                    var12 = var15.bind(var16)(var14, var13);
case 14:
                    var2['url'] = var12;
                    var2['body'] = var11;
                    var11 = false;
                    var2['rejectWithError'] = var11;
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=324);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var4 = var2;
                    var6 = var2.ok;
                    if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = 13;
                    var8 = var6[var8];
                    var8 = var11.bind(var5)(var8);
                    var8 = var8.APIError;
                    var13 = var4;
                    var11 = var8.prototype;
                    var11 = Object.create(var11, {constructor: {value: var8}});
                    var19 = var11;
                    var18 = var13;
                    var8 = new var19[var8](var18, var17);
                    var12 = var8 instanceof Object ? var8 : var11;
                    var8 = _closure1_slot1;
                    var6 = var6[var9];
                    var11 = var8.bind(var5)(var6);
                    var8 = var11.dispatch;
                    var6 = {};
                    var14 = 'USER_PROFILE_UPDATE_FAILURE';
                    var6['type'] = var14;
                    var14 = var7;
                    var6['guildId'] = var14;
                    var13 = var13.body;
                    var6['errors'] = var13;
                    var6['apiError'] = var12;
                    var6 = var8.bind(var11)(var6);
                    _fun0001_ip = 21; continue _fun0001;
case 19:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var9 = var8.bind(var5)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var11 = 'USER_PROFILE_UPDATE_SUCCESS';
                    var6['type'] = var11;
                    var6['userId'] = var10;
                    var10 = var7;
                    var6['guildId'] = var10;
                    var10 = var4;
                    var17 = var10.body;
                    var18 = var6;
                    var10 = copyDataProperties(var18, var17);
                    var6 = var8.bind(var9)(var6);
case 21: // try_end0
                    return var4;
case 17:
                    return var2;
case 22: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 13;
                    var4 = var8[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.APIError;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {constructor: {value: var4}});
                    var19 = var6;
                    var18 = var2;
                    var4 = new var19[var4](var18, var17);
                    var6 = var4 instanceof Object ? var4 : var6;
                    var4 = _closure1_slot1;
                    var3 = 11;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'USER_PROFILE_UPDATE_FAILURE';
                    var3['type'] = var8;
                    var3['guildId'] = var7;
                    var7 = {};
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
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var4 = function fetchApplicationWidgetConfigs() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var4;
    var1 = function _fetchApplicationWidgetConfigs() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 3:
                    var2 = _closure1_slot5;
                    var3 = var2.applicationWidgetConfigs;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var2 = _closure1_slot5;
                    var2 = var2.applicationWidgetConfigs;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0002_ip = 26; continue _fun0002 }
case 24:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 11;
                    var2 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
case 27: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 12;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS;
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=158);
case 28:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var9 = var2.body;
                    var9 = var9.application_configs;
                    var4['applicationConfigs'] = var9;
                    var4 = var7.bind(var8)(var4);
case 32: // try_end0
                    _fun0002_ip = 26; continue _fun0002;
case 30:
                    return var2;
case 33: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 14;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 26:
                    var2 = undefined;
                    return var2;
case 23:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var10 = var6.bind(var1)(var2);
    var _closure1_slot5 = var10;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var6 = var2.ComponentActions;
    var _closure1_slot6 = var6;
    var6 = var2.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = var2.Endpoints;
    var _closure1_slot8 = var6;
    var6 = var2.ME;
    var _closure1_slot9 = var6;
    var11 = var2.QueryIds;
    var2 = 4;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var6 = var2.AnalyticsPremiumFeatureTiers;
    var _closure1_slot10 = var6;
    var2 = var2.AnalyticsPremiumFeatureNames;
    var _closure1_slot11 = var2;
    var2 = 15;
    var2 = var8[var2];
    var9 = var7.bind(var1)(var2);
    var6 = var9.createFetchStore;
    var2 = {};
    var11 = var11.APPLICATION_WIDGET_APPLICATION_CONFIGS;
    var2['getQueryId'] = var11;
    var11 = function get() {
        var1 = _closure1_slot5;
        var1 = var1.applicationWidgetConfigs;
        return var1;
    };
    var2['get'] = var11;
    var11 = function load() {
        var2 = _closure1_slot14;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['load'] = var11;
    var2 = var6.bind(var9)(var10, var2);
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/UserProfileActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function notifyUnsavedUserProfileChangesInModal() {
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 5;
        var4 = var9[var3];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var6 = var4.ComponentDispatch;
        var5 = var6.dispatch;
        var2 = _closure1_slot6;
        var4 = var2.SHAKE_PROFILE_MODAL;
        var4 = var5.bind(var6)(var4);
        var3 = var9[var3];
        var3 = var7.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = var2.EMPHASIZE_NOTICE;
        var2 = var3.bind(var4)(var2);
        var2 = 6;
        var2 = var9[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.AccessibilityAnnouncer;
        var3 = var4.announce;
        var2 = 7;
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
    var3['notifyUnsavedUserProfileChangesInModal'] = var6;
    var6 = function saveProfileChanges() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveProfileChanges'] = var6;
    var6 = function pinUserProfileBadgesOnClient(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot4;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var6 = var3 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0003_ip = 34; continue _fun0003 }
case 25:
            var5 = var4.id;
case 34:
            if(!(var3 != var5)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
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
case 35:
            return var1;
        }
    };
    var3['pinUserProfileBadgesOnClient'] = var6;
    var6 = function resetPendingProfileChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
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
    var3['resetPendingProfileChanges'] = var6;
    var6 = function resetAllPendingChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
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
    var3['resetAllPendingChanges'] = var6;
    var6 = function setTryItOutAvatar(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.ANIMATED_AVATAR;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutAvatar'] = var6;
    var6 = function setTryItOutAvatarDecoration(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.AVATAR_DECORATION;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutAvatarDecoration'] = var6;
    var6 = function setTryItOutProfileEffect(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.PROFILE_EFFECT;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutProfileEffect'] = var6;
    var6 = function setTryItOutBanner(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.PROFILE_BANNER;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutBanner'] = var6;
    var6 = function setTryItOutThemeColors(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.PROFILE_THEME_COLOR;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutThemeColors'] = var6;
    var6 = function setTryItOutDisplayNameStyles(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.DISPLAY_NAME_STYLES;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutDisplayNameStyles'] = var6;
    var5 = function setTryItOutPreset(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var2 = var2.PRESET;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setTryItOutPreset'] = var5;
    var3['fetchApplicationWidgetConfigs'] = var4;
    var3['useApplicationWidgetConfigs'] = var2;
    return var1;
})();