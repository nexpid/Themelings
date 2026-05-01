// app/actions/UserSettingsAccountActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function saveProfileAndAccountRequest() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _saveProfileAndAccountRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var8 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    if(!(var8 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = {};
case 4:
                    SaveGenerator(address=28);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.patch;
                    var3 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.ME;
                    var3['url'] = var9;
                    var9 = true;
                    var3['oldFormErrors'] = var9;
                    var3['body'] = var11;
                    var8 = var8.headers;
                    var3['headers'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=124);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = var3.body;
                    var5 = var7.token;
                    if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var12 = var7.token;
                    var5 = delete var7.token;
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = 3;
                    var5 = var5[var9];
                    var10 = var8.bind(var6)(var5);
                    var8 = var10.dispatch;
                    var5 = {};
                    var13 = 'UPDATE_TOKEN';
                    var5['type'] = var13;
                    var5['token'] = var12;
                    var12 = var7.id;
                    var5['userId'] = var12;
                    var5 = var8.bind(var10)(var5);
                    var10 = null;
                    var8 = var10 == var11;
                    var5 = undefined;
                    if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = var11.password;
case 16:
                    var5 = var10 != var5;
                    if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var8 = var11.new_password;
case 20:
                    var5 = var10 != var8;
case 18:
                    if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 22:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'PASSWORD_UPDATED';
                    var5['type'] = var10;
                    var10 = var7.id;
                    var5['userId'] = var10;
                    var5 = var8.bind(var9)(var5);
case 14:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'CURRENT_USER_UPDATE';
                    var4['type'] = var8;
                    var4['user'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Endpoints;
    var _closure1_slot4 = var8;
    var8 = var5.Routes;
    var _closure1_slot5 = var8;
    var8 = var5.DEVICE_TOKEN;
    var _closure1_slot6 = var8;
    var5 = var5.DEVICE_VOIP_TOKEN;
    var _closure1_slot7 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot8 = var8;
    var5 = var5.getDevicePushProvider;
    var _closure1_slot9 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/UserSettingsAccountActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function accountDetailsInit() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_INIT';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['accountDetailsInit'] = var5;
    var5 = function accountDetailsClose() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['accountDetailsClose'] = var5;
    var5 = function disableAccount(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot4;
            var3 = arg2;
            if(var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var4 = var2.DISABLE_ACCOUNT;
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var4 = var2.DELETE_ACCOUNT;
case 25:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var1['url'] = var4;
            var4 = {};
            var5 = arg1;
            var4['password'] = var5;
            var1['body'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.logoutInternal;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var3 = 6;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var2 = _closure1_slot5;
                var2 = var2.DEFAULT_LOGGED_OUT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['disableAccount'] = var5;
    var3['saveProfileAndAccountRequest'] = var4;
    var4 = function saveProfileAndAccountChanges(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var20 = var4.username;
            var13 = var4.discriminator;
            var19 = var4.email;
            var18 = var4.emailToken;
            var17 = var4.password;
            var16 = var4.avatar;
            var _closure2_slot0 = var16;
            var15 = var4.avatarDescription;
            var14 = var4.avatarId;
            var _closure2_slot1 = var14;
            var11 = var4.avatarDecoration;
            var7 = var4.newPassword;
            var12 = var4.globalName;
            var9 = var4.legacyUsername;
            var10 = var4.nameplate;
            var3 = var4.primaryGuildId;
            var2 = var4.displayNameStyles;
            var8 = var4.avatarOriginalMd5;
            var21 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 3;
            var4 = var5[var4];
            var5 = undefined;
            var22 = var21.bind(var5)(var4);
            var21 = var22.dispatch;
            var4 = {};
            var23 = 'USER_PROFILE_SETTINGS_SUBMIT';
            var4['type'] = var23;
            var4 = var21.bind(var22)(var4);
            var4 = {};
            var4['username'] = var20;
            var4['email'] = var19;
            var4['email_token'] = var18;
            var4['password'] = var17;
            var4['avatar'] = var16;
            var4['avatar_description'] = var15;
            var4['avatar_id'] = var14;
            var4['discriminator'] = var13;
            var4['global_name'] = var12;
            var4['legacy_username'] = var9;
            var4['new_password'] = var7;
            if(!(var5 !== var11)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var7 = null;
            var12 = var7 == var11;
            var9 = undefined;
            if(var12) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var9 = var11.skuId;
case 28:
            var11 = var7 != var9;
            var7 = null;
            if(!var11) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var7 = var9;
case 30:
            var4['avatar_decoration_sku_id'] = var7;
case 26:
            if(!(var5 !== var10)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var7 = null;
            var11 = var7 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var9 = var10.skuId;
case 34:
            var10 = var7 != var9;
            var7 = null;
            if(!var10) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = var9;
case 36:
            var4['nameplate_sku_id'] = var7;
case 32:
            if(!(var5 !== var3)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var4['primary_guild_id'] = var3;
case 38:
            var7 = null;
            if(!(var7 == var2)) { _fun0003_ip = 40; continue _fun0003 }
case 14:
            if(!(var7 === var2)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var4['display_name_font_id'] = var7;
            var4['display_name_effect_id'] = var7;
            var4['display_name_colors'] = var7;
            _fun0003_ip = 41; continue _fun0003;
case 40:
            var3 = var2.fontId;
            var4['display_name_font_id'] = var3;
            var3 = var2.effectId;
            var4['display_name_effect_id'] = var3;
            var2 = var2.colors;
            var4['display_name_colors'] = var2;
case 41:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 7;
            var2 = var2[var9];
            var2 = var3.bind(var5)(var2);
            var10 = var2.Storage;
            var3 = var10.get;
            var2 = _closure1_slot6;
            var2 = var3.bind(var10)(var2);
            var3 = _closure1_slot9;
            var3 = var3.bind(var5)();
            var10 = var7 != var3;
            if(!var10) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var10 = var7 != var2;
case 43:
            if(!var10) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var4['push_provider'] = var3;
            var4['push_token'] = var2;
case 45:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var3.bind(var5)(var2);
            var9 = var2.Storage;
            var3 = var9.get;
            var2 = _closure1_slot7;
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot8;
            var3 = var7 != var3;
            if(!var3) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var3 = var7 != var2;
case 47:
            if(!var3) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var3 = _closure1_slot8;
            var4['push_voip_provider'] = var3;
            var4['push_voip_token'] = var2;
case 49:
            var3 = _closure1_slot10;
            var2 = {};
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 8;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.buildHeadersForMd5;
            var6 = var6.bind(var7)(var8);
            var2['headers'] = var6;
            var4 = var3.bind(var5)(var4, var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 3;
                    var2 = var2[var4];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'USER_PROFILE_SETTINGS_SUBMIT_SUCCESS';
                    var2['type'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure2_slot0;
                    var6 = null;
                    var2 = var6 == var2;
                    if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var5 = _closure2_slot1;
                    var2 = var6 == var5;
case 51:
                    if(var2) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'RECENT_AVATARS_UPDATE';
                    var1['type'] = var4;
                    var1 = var2.bind(var3)(var1);
case 53:
                    var1 = arg1;
                    return var1;
                }
            };
            var1 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'USER_PROFILE_SETTINGS_SUBMIT_FAILURE';
                var2['type'] = var5;
                var5 = var1.body;
                var2['errors'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['saveProfileAndAccountChanges'] = var4;
    var4 = function getHarvestStatus() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var4 = _closure1_slot4;
        var4 = var4.USER_HARVEST;
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getHarvestStatus'] = var4;
    var4 = function requestHarvest(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot4;
        var4 = var4.USER_HARVEST;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['backends'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['requestHarvest'] = var4;
    var4 = function clearErrors() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_CLEAR_ERRORS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearErrors'] = var4;
    var4 = function resetPendingAccountChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingAccountChanges'] = var4;
    var4 = function resetAllPending() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
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
    var3['resetAllPending'] = var4;
    var4 = function resetAllTryItOut() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
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
    var3['resetAllTryItOut'] = var4;
    var4 = function resetAndCloseUserProfileForm() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAndCloseUserProfileForm'] = var4;
    var4 = function resetPendingLegacyUsernameDisabled() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingLegacyUsernameDisabled'] = var4;
    var4 = function resetPendingPrimaryGuildChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingPrimaryGuildChanges'] = var4;
    var4 = function updateAccount(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT';
        var2['type'] = var5;
        var5 = arg1;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateAccount'] = var4;
    var4 = function resetAccount() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAccount'] = var4;
    var2 = function saveAccountChanges(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var5 = var7.dispatch;
            var2 = {};
            var8 = 'USER_SETTINGS_MODAL_SUBMIT';
            var2['type'] = var8;
            var2 = var5.bind(var7)(var2);
            var11 = var3.username;
            var10 = var3.email;
            var9 = var3.emailToken;
            var8 = var3.password;
            var _closure2_slot0 = var8;
            var7 = var3.avatar;
            var _closure2_slot1 = var7;
            var2 = var3.newPassword;
            var _closure2_slot2 = var2;
            var3 = var3.discriminator;
            var5 = arg2;
            var5 = var5.close;
            var _closure2_slot3 = var5;
            var5 = {};
            var5['username'] = var11;
            var5['email'] = var10;
            var5['email_token'] = var9;
            var5['password'] = var8;
            var5['avatar'] = var7;
            var5['new_password'] = var2;
            var7 = null;
            var8 = var7 != var3;
            var2 = undefined;
            if(!var8) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var8 = '';
            var2 = undefined;
            if(!(var8 !== var3)) { _fun0005_ip = 55; continue _fun0005 }
case 57:
            var2 = var3;
case 55:
            var5['discriminator'] = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 7;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var9 = var2.Storage;
            var3 = var9.get;
            var2 = _closure1_slot6;
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot9;
            var3 = var3.bind(var4)();
            var9 = var7 != var3;
            if(!var9) { _fun0005_ip = 19; continue _fun0005 }
case 58:
            var9 = var7 != var2;
case 19:
            if(!var9) { _fun0005_ip = 20; continue _fun0005 }
case 31:
            var5['push_provider'] = var3;
            var5['push_token'] = var2;
case 20:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var8 = var2.Storage;
            var3 = var8.get;
            var2 = _closure1_slot7;
            var2 = var3.bind(var8)(var2);
            var3 = _closure1_slot8;
            var3 = var7 != var3;
            if(!var3) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var3 = var7 != var2;
case 59:
            if(!var3) { _fun0005_ip = 61; continue _fun0005 }
case 14:
            var3 = _closure1_slot8;
            var5['push_voip_provider'] = var3;
            var5['push_voip_token'] = var2;
case 61:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.patch;
            var2 = {};
            var6 = _closure1_slot4;
            var6 = var6.ME;
            var2['url'] = var6;
            var6 = true;
            var2['oldFormErrors'] = var6;
            var2['body'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var9 = var1.body;
                    var11 = var9.token;
                    var2 = delete var9.token;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var7 = var3[var2];
                    var4 = undefined;
                    var10 = var6.bind(var4)(var7);
                    var8 = var10.dispatch;
                    var7 = {};
                    var12 = 'UPDATE_TOKEN';
                    var7['type'] = var12;
                    var7['token'] = var11;
                    var11 = var9.id;
                    var7['userId'] = var11;
                    var7 = var8.bind(var10)(var7);
                    var3 = var3[var2];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var8 = 'CURRENT_USER_UPDATE';
                    var3['type'] = var8;
                    var3['user'] = var9;
                    var3 = var6.bind(var7)(var3);
                    var6 = _closure2_slot1;
                    if(!(var4 !== var6)) { _fun0006_ip = 62; continue _fun0006 }
case 10:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.trackUserAvatarUpdated;
                    var6 = {};
                    var10 = var9.avatar;
                    var6['avatarHash'] = var10;
                    var6 = var7.bind(var8)(var6);
case 62:
                    var6 = _closure2_slot2;
                    var8 = null;
                    if(!(var8 != var6)) { _fun0006_ip = 29; continue _fun0006 }
case 63:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var2];
                    var10 = var7.bind(var4)(var6);
                    var7 = var10.dispatch;
                    var6 = {};
                    var11 = 'USER_PASSWORD_UPDATE';
                    var6['type'] = var11;
                    var6['user'] = var9;
                    var11 = _closure2_slot2;
                    var6['newPassword'] = var11;
                    var6 = var7.bind(var10)(var6);
case 29:
                    var6 = _closure2_slot0;
                    var6 = var8 != var6;
                    if(!var6) { _fun0006_ip = 64; continue _fun0006 }
case 19:
                    var7 = _closure2_slot2;
                    var6 = var8 != var7;
case 64:
                    if(!var6) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var2];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'PASSWORD_UPDATED';
                    var6['type'] = var10;
                    var9 = var9.id;
                    var6['userId'] = var9;
                    var6 = var7.bind(var8)(var6);
case 65:
                    var6 = _closure2_slot3;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var6) { _fun0006_ip = 67; continue _fun0006 }
case 42:
                    var2 = var5[var2];
                    var7 = var3.bind(var4)(var2);
                    var6 = var7.dispatch;
                    var2 = {};
                    var8 = 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE';
                    var2['type'] = var8;
                    var2 = var6.bind(var7)(var2);
                    _fun0006_ip = 41; continue _fun0006;
case 67:
                    var2 = 10;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.close;
                    var2 = var2.bind(var3)();
case 41:
                    return var1;
                }
            };
            var1 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
                var2['type'] = var5;
                var5 = var1.body;
                var2['errors'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['saveAccountChanges'] = var2;
    return var1;
})();