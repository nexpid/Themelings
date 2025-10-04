// app/modules/user_profile/UserProfileActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var1 = function trackTryOutFeature(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
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
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = arg1;
                    var16 = arg2;
                    var5 = undefined;
                    var11 = undefined;
                    var4 = undefined;
                    var12 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var7 = _closure1_slot4;
                    var2 = var7.getCurrentUser;
                    var7 = var2.bind(var7)();
                    var9 = null;
                    var8 = var9 == var7;
                    var2 = undefined;
                    if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = var7.id;
case 4:
                    var11 = var2;
                    if(!(var9 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var5;
case 6:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.UseLegacyChatInput;
                    var2 = var7.getSetting;
                    var7 = var2.bind(var7)();
                    var2 = var14;
                    var2 = var2.bio;
                    var2 = var9 != var2;
                    if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var2 = var7;
case 8:
                    if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = var14;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 7;
                    var2 = var13[var2];
                    var13 = var8.bind(var5)(var2);
                    var8 = var13.parse;
                    var2 = var7.bio;
                    var2 = var8.bind(var13)(var5, var2);
                    var2 = var2.content;
                    var7['bio'] = var2;
case 10: // try_start_0
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 8;
                    var2 = var13[var8];
                    var15 = var7.bind(var5)(var2);
                    var7 = var15.dispatch;
                    var2 = {};
                    var17 = 'USER_PROFILE_UPDATE_START';
                    var2['type'] = var17;
                    var17 = var11;
                    var2['userId'] = var17;
                    var2 = var7.bind(var15)(var2);
                    var7 = _closure1_slot0;
                    var2 = 9;
                    var2 = var13[var2];
                    var2 = var7.bind(var5)(var2);
                    var13 = var2.HTTP;
                    var7 = var13.patch;
                    var2 = {};
                    var15 = var16;
                    if(!(var9 == var15)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var18 = _closure1_slot7;
                    var17 = var18.USER_PROFILE;
                    var15 = _closure1_slot8;
                    var15 = var17.bind(var18)(var15);
                    _fun0001_ip = 14; continue _fun0001;
case 12:
                    var19 = _closure1_slot7;
                    var18 = var19.USER_GUILD_PROFILE;
                    var17 = var16;
                    var16 = _closure1_slot8;
                    var15 = var18.bind(var19)(var17, var16);
case 14:
                    var2['url'] = var15;
                    var2['body'] = var14;
                    var14 = false;
                    var2['rejectWithError'] = var14;
                    var2 = var7.bind(var13)(var2);
                    SaveGenerator(address=332);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var4 = var2;
                    var7 = var2.ok;
                    if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var14 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var13 = 10;
                    var13 = var7[var13];
                    var13 = var14.bind(var5)(var13);
                    var13 = var13.APIError;
                    var16 = var4;
                    var14 = var13.prototype;
                    var14 = Object.create(var14, {constructor: {value: var13}});
                    var22 = var14;
                    var21 = var16;
                    var13 = new var22[var13](var21, var20);
                    var15 = var13 instanceof Object ? var13 : var14;
                    var13 = _closure1_slot1;
                    var7 = var7[var8];
                    var14 = var13.bind(var5)(var7);
                    var13 = var14.dispatch;
                    var7 = {};
                    var17 = 'USER_PROFILE_UPDATE_FAILURE';
                    var7['type'] = var17;
                    var16 = var16.body;
                    var7['errors'] = var16;
                    var7['apiError'] = var15;
                    var7 = var13.bind(var14)(var7);
                    _fun0001_ip = 21; continue _fun0001;
case 19:
                    var7 = var4;
                    var7 = var7.body;
                    var7 = var7.profile_effect;
                    var12 = var7;
                    var13 = var9 == var7;
                    var7 = undefined;
                    if(var13) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var7 = var12.id;
case 22:
                    var10 = var7;
                    var7 = var4;
                    var7 = var7.body;
                    var7 = var7.profile_effect;
                    var6 = var7;
                    var7 = var9 == var7;
                    var9 = undefined;
                    if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var9 = var6.expires_at;
case 24:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var12 = 'USER_PROFILE_UPDATE_SUCCESS';
                    var6['type'] = var12;
                    var6['userId'] = var11;
                    var6['profileEffectId'] = var10;
                    var6['profileEffectExpiresAt'] = var9;
                    var9 = var4;
                    var20 = var9.body;
                    var21 = var6;
                    var9 = copyDataProperties(var21, var20);
                    var6 = var7.bind(var8)(var6);
case 21: // try_end0
                    return var4;
case 17:
                    return var2;
case 26: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.APIError;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {constructor: {value: var4}});
                    var22 = var6;
                    var21 = var2;
                    var4 = new var22[var4](var21, var20);
                    var6 = var4 instanceof Object ? var4 : var6;
                    var4 = _closure1_slot1;
                    var3 = 8;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'USER_PROFILE_UPDATE_FAILURE';
                    var3['type'] = var7;
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var6 = function setPendingBanner(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER';
        var2['type'] = var5;
        var5 = arg1;
        var2['banner'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot13 = var6;
    var4 = function fetchApplicationWidgetApplicationConfigs() {
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
    var1 = function _fetchApplicationWidgetApplicationConfigs() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 27; continue _fun0002 }
case 3:
                    var2 = _closure1_slot5;
                    var3 = var2.applicationWidgetApplicationConfigs;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var2 = _closure1_slot5;
                    var2 = var2.applicationWidgetApplicationConfigs;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0002_ip = 30; continue _fun0002 }
case 28:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 8;
                    var2 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
case 31: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot7;
                    var8 = var8.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS;
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=158);
case 32:
                    return var2;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var9 = var2.body;
                    var9 = var9.application_configs;
                    var4['applicationConfigs'] = var9;
                    var4 = var7.bind(var8)(var4);
case 36: // try_end0
                    _fun0002_ip = 30; continue _fun0002;
case 34:
                    return var2;
case 37: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_FAILURE';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 30:
                    var2 = undefined;
                    return var2;
case 27:
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
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var11 = var7.bind(var1)(var2);
    var _closure1_slot5 = var11;
    var2 = 3;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var2.Endpoints;
    var _closure1_slot7 = var7;
    var7 = var2.ME;
    var _closure1_slot8 = var7;
    var12 = var2.QueryIds;
    var2 = 4;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var7 = var2.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = var7;
    var2 = var2.AnalyticsPremiumFeatureNames;
    var _closure1_slot10 = var2;
    var2 = 13;
    var2 = var9[var2];
    var10 = var8.bind(var1)(var2);
    var7 = var10.createFetchStore;
    var2 = {};
    var12 = var12.APPLICATION_WIDGET_APPLICATION_CONFIGS;
    var2['getQueryId'] = var12;
    var12 = function get() {
        var1 = _closure1_slot5;
        var1 = var1.applicationWidgetApplicationConfigs;
        return var1;
    };
    var2['get'] = var12;
    var12 = function load() {
        var2 = _closure1_slot14;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['load'] = var12;
    var2 = var7.bind(var10)(var11, var2);
    var7 = 14;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_profile/UserProfileActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function saveProfileChanges() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveProfileChanges'] = var7;
    var7 = function pinUserProfileBadgesOnClient(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot4;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var6 = var3 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0003_ip = 38; continue _fun0003 }
case 29:
            var5 = var4.id;
case 38:
            if(!(var3 != var5)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
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
case 39:
            return var1;
        }
    };
    var3['pinUserProfileBadgesOnClient'] = var7;
    var7 = function resetPendingProfileChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingProfileChanges'] = var7;
    var7 = function setPendingBannerUrl(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var6 = undefined;
            if(var5) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var7 = var4.startsWith;
            var5 = 'https:';
            var6 = var7.bind(var4)(var5);
case 41:
            var5 = true;
            if(!(var5 !== var6)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            if(!(var3 != var4)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)(var4);
            _fun0004_ip = 45; continue _fun0004;
case 43:
            var3 = global;
            var3 = var3.fetch;
            var5 = var3.bind(var1)(var4);
            var4 = var5.then;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.blob;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.readFileAsBase64;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure1_slot13;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 45:
            return var1;
        }
    };
    var3['setPendingBannerUrl'] = var7;
    var3['setPendingBanner'] = var6;
    var6 = function setPendingBio(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO';
        var2['type'] = var5;
        var5 = arg1;
        var2['bio'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingBio'] = var6;
    var6 = function setPendingPronouns(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS';
        var2['type'] = var5;
        var5 = arg1;
        var2['pronouns'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingPronouns'] = var6;
    var6 = function setPendingAccentColor(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR';
        var2['type'] = var5;
        var5 = arg1;
        var2['color'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingAccentColor'] = var6;
    var6 = function setPendingThemeColors(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS';
        var2['type'] = var5;
        var5 = arg1;
        var2['themeColors'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingThemeColors'] = var6;
    var6 = function setTryItOutAvatar(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR';
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
    var3['setTryItOutAvatar'] = var6;
    var6 = function setTryItOutAvatarDecoration(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION';
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
    var3['setTryItOutAvatarDecoration'] = var6;
    var6 = function setTryItOutProfileEffect(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT';
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
    var3['setTryItOutProfileEffect'] = var6;
    var6 = function setTryItOutBanner(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER';
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
    var3['setTryItOutBanner'] = var6;
    var6 = function setTryItOutThemeColors(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS';
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
    var3['setTryItOutThemeColors'] = var6;
    var5 = function setTryItOutPreset(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET';
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
    var3['setTryItOutPreset'] = var5;
    var3['fetchApplicationWidgetApplicationConfigs'] = var4;
    var3['useApplicationWidgetApplicationConfigs'] = var2;
    return var1;
})();