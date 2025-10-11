// app/actions/UserSettingsAccountActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function saveAccountRequest() {
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
    var1 = function _saveAccountRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.patch;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.ME;
                    var2['url'] = var7;
                    var7 = true;
                    var2['oldFormErrors'] = var7;
                    var2['body'] = var10;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=91);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = var2.body;
                    var4 = var6.token;
                    if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var11 = var6.token;
                    var4 = delete var6.token;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var8 = 3;
                    var4 = var4[var8];
                    var9 = var7.bind(var5)(var4);
                    var7 = var9.dispatch;
                    var4 = {};
                    var12 = 'UPDATE_TOKEN';
                    var4['type'] = var12;
                    var4['token'] = var11;
                    var11 = var6.id;
                    var4['userId'] = var11;
                    var4 = var7.bind(var9)(var4);
                    var9 = null;
                    var7 = var9 == var10;
                    var4 = undefined;
                    if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = var10.password;
case 10:
                    var4 = var9 != var4;
                    if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var11 = var9 == var10;
                    var7 = undefined;
                    if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = var10.new_password;
case 14:
                    var4 = var9 != var7;
case 12:
                    if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 16:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'PASSWORD_UPDATED';
                    var4['type'] = var9;
                    var9 = var6.id;
                    var4['userId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 8:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'CURRENT_USER_UPDATE';
                    var3['type'] = var7;
                    var3['user'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
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
        var5 = 'USER_SETTINGS_ACCOUNT_INIT';
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
        var5 = 'USER_SETTINGS_ACCOUNT_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['accountDetailsClose'] = var5;
    var5 = function disableAccount(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var7 = var9[var4];
            var5 = undefined;
            var7 = var6.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = var4.jf5GGR;
            var6 = var7.bind(var8)(var6);
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var4 = var4.8lQ2ra;
            var6 = var7.bind(var8)(var4);
case 19:
            var4 = _closure1_slot4;
            if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = var4.DISABLE_ACCOUNT;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var3 = var4.DELETE_ACCOUNT;
case 22:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = {};
            var2 = {};
            var2['title'] = var6;
            var3['modalProps'] = var2;
            var2 = false;
            var3['checkEnabled'] = var2;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var4 = _closure2_slot1;
                var1['url'] = var4;
                var4 = {};
                var5 = _closure2_slot0;
                var4['password'] = var5;
                var6 = arg1;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var1['body'] = var4;
                var4 = true;
                var1['oldFormErrors'] = var4;
                var4 = false;
                var1['rejectWithError'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var2, var3);
            var2 = var3.then;
            var1 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.logoutInternal;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var3 = 8;
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
    var3['saveAccountRequest'] = var4;
    var4 = function saveAccountChanges(arg1) {
        var2 = arg1;
        var3 = var2.username;
        var _closure2_slot0 = var3;
        var3 = var2.discriminator;
        var _closure2_slot1 = var3;
        var3 = var2.email;
        var _closure2_slot2 = var3;
        var3 = var2.emailToken;
        var _closure2_slot3 = var3;
        var3 = var2.password;
        var _closure2_slot4 = var3;
        var3 = var2.avatar;
        var _closure2_slot5 = var3;
        var3 = var2.avatarDescription;
        var _closure2_slot6 = var3;
        var3 = var2.avatarId;
        var _closure2_slot7 = var3;
        var3 = var2.avatarDecoration;
        var _closure2_slot8 = var3;
        var3 = var2.newPassword;
        var _closure2_slot9 = var3;
        var3 = var2.globalName;
        var _closure2_slot10 = var3;
        var3 = var2.legacyUsername;
        var _closure2_slot11 = var3;
        var3 = var2.nameplate;
        var _closure2_slot12 = var3;
        var3 = var2.primaryGuildId;
        var _closure2_slot13 = var3;
        var2 = var2.displayNameStyles;
        var _closure2_slot14 = var2;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 3;
        var2 = var10[var2];
        var5 = undefined;
        var7 = var3.bind(var5)(var2);
        var4 = var7.dispatch;
        var2 = {};
        var8 = 'USER_SETTINGS_ACCOUNT_SUBMIT';
        var2['type'] = var8;
        var2 = var4.bind(var7)(var2);
        var2 = 5;
        var2 = var10[var2];
        var4 = var3.bind(var5)(var2);
        var3 = {};
        var2 = false;
        var3['checkEnabled'] = var2;
        var2 = {};
        var9 = _closure1_slot0;
        var6 = 4;
        var7 = var10[var6];
        var7 = var9.bind(var5)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var5)(var6);
        var6 = var6.t;
        var6 = var6.clQc1d;
        var6 = var7.bind(var8)(var6);
        var2['title'] = var6;
        var3['modalProps'] = var2;
        var2 = {};
        var6 = function onEarlyClose() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
            var1['type'] = var4;
            var4 = {};
            var1['errors'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['onEarlyClose'] = var6;
        var3['hooks'] = var2;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = {};
                var2 = _closure2_slot0;
                var3['username'] = var2;
                var2 = _closure2_slot2;
                var3['email'] = var2;
                var2 = _closure2_slot3;
                var3['email_token'] = var2;
                var2 = _closure2_slot4;
                var3['password'] = var2;
                var2 = _closure2_slot5;
                var3['avatar'] = var2;
                var2 = _closure2_slot6;
                var3['avatar_description'] = var2;
                var2 = _closure2_slot7;
                var3['avatar_id'] = var2;
                var2 = _closure2_slot1;
                var3['discriminator'] = var2;
                var2 = _closure2_slot10;
                var3['global_name'] = var2;
                var2 = _closure2_slot11;
                var3['legacy_username'] = var2;
                var2 = _closure2_slot9;
                var3['new_password'] = var2;
                var10 = arg1;
                var11 = var3;
                var2 = copyDataProperties(var11, var10);
                var4 = _closure2_slot8;
                var2 = undefined;
                if(!(var2 !== var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var5 = _closure2_slot8;
                var4 = null;
                var6 = var4 == var5;
                var5 = undefined;
                if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var6 = _closure2_slot8;
                var5 = var6.skuId;
case 25:
                var6 = var4 != var5;
                var4 = null;
                if(!var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var4 = var5;
case 27:
                var3['avatar_decoration_sku_id'] = var4;
case 23:
                var4 = _closure2_slot12;
                if(!(var2 !== var4)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var5 = _closure2_slot12;
                var4 = null;
                var6 = var4 == var5;
                var5 = undefined;
                if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 31:
                var6 = _closure2_slot12;
                var5 = var6.skuId;
case 10:
                var6 = var4 != var5;
                var4 = null;
                if(!var6) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var4 = var5;
case 32:
                var3['nameplate_sku_id'] = var4;
case 29:
                var4 = _closure2_slot13;
                if(!(var2 !== var4)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var4 = _closure2_slot13;
                var3['primary_guild_id'] = var4;
case 34:
                var4 = _closure2_slot14;
                var6 = null;
                if(!(var6 == var4)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var4 = _closure2_slot14;
                if(!(var6 === var4)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                var3['display_name_font_id'] = var6;
                var3['display_name_effect_id'] = var6;
                var3['display_name_colors'] = var6;
                _fun0003_ip = 38; continue _fun0003;
case 36:
                var1 = _closure2_slot14;
                var4 = var1.fontId;
                var3['display_name_font_id'] = var4;
                var4 = var1.effectId;
                var3['display_name_effect_id'] = var4;
                var1 = var1.colors;
                var3['display_name_colors'] = var1;
case 38:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 9;
                var4 = var4[var7];
                var4 = var5.bind(var2)(var4);
                var8 = var4.Storage;
                var5 = var8.get;
                var4 = _closure1_slot6;
                var4 = var5.bind(var8)(var4);
                var5 = _closure1_slot9;
                var5 = var5.bind(var2)();
                var8 = var6 != var5;
                if(!var8) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                var8 = var6 != var4;
case 40:
                if(!var8) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                var3['push_provider'] = var5;
                var3['push_token'] = var4;
case 42:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var2)(var4);
                var7 = var4.Storage;
                var5 = var7.get;
                var4 = _closure1_slot7;
                var4 = var5.bind(var7)(var4);
                var5 = _closure1_slot8;
                var5 = var6 != var5;
                if(!var5) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var5 = var6 != var4;
case 44:
                if(!var5) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var5 = _closure1_slot8;
                var3['push_voip_provider'] = var5;
                var3['push_voip_token'] = var4;
case 46:
                var1 = _closure1_slot10;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var4 = var4.bind(var5)(var2, var3);
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
                var7 = 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS';
                var2['type'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = _closure2_slot5;
                var6 = null;
                var2 = var6 == var2;
                if(!var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                var5 = _closure2_slot7;
                var2 = var6 == var5;
case 48:
                if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'RECENT_AVATARS_UPDATE';
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
case 50:
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
            var5 = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
            var2['type'] = var5;
            var5 = var1.body;
            var2['errors'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['saveAccountChanges'] = var4;
    var4 = function getHarvestStatus() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
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
        var1 = 6;
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
    var4 = function setPendingAvatar(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.dispatch;
            var3 = {};
            var7 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR';
            var3['type'] = var7;
            var3['avatar'] = var4;
            var3 = var5.bind(var6)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var3 = var8.bind(var1)(var3);
            var5 = var3.AccessibilityAnnouncer;
            var4 = var5.announce;
            var3 = 4;
            var6 = var9[var3];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.NstziY;
            var3 = var6.bind(var7)(var3);
            var3 = var4.bind(var5)(var3);
            _fun0005_ip = 54; continue _fun0005;
case 52:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var7.bind(var1)(var2);
            var4 = var2.AccessibilityAnnouncer;
            var3 = var4.announce;
            var2 = 4;
            var5 = var8[var2];
            var5 = var7.bind(var1)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.f1+oNj;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 54:
            return var1;
        }
    };
    var3['setPendingAvatar'] = var4;
    var4 = function setPendingGlobalName(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME';
        var2['type'] = var5;
        var5 = arg1;
        var2['globalName'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingGlobalName'] = var4;
    var4 = function setPendingLegacyUsernameDisabled(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED';
        var2['type'] = var5;
        var5 = arg1;
        var2['legacyUsernameDisabled'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingLegacyUsernameDisabled'] = var4;
    var4 = function setPendingAvatarDecoration(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION';
        var2['type'] = var5;
        var5 = arg1;
        var2['avatarDecoration'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingAvatarDecoration'] = var4;
    var4 = function setGlobalPendingNameplate(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['nameplate'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setGlobalPendingNameplate'] = var4;
    var4 = function setPendingProfileEffect(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['profileEffect'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingProfileEffect'] = var4;
    var4 = function setPendingPrimaryGuildId(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID';
        var2['type'] = var5;
        var5 = arg1;
        var2['primaryGuildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingPrimaryGuildId'] = var4;
    var4 = function setPendingDisplayNameStyles(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES';
        var2['type'] = var5;
        var5 = arg1;
        var2['displayNameStyles'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingDisplayNameStyles'] = var4;
    var4 = function setSingleTryItOutCollectiblesItem(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM';
        var2['type'] = var5;
        var5 = arg1;
        var2['item'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setSingleTryItOutCollectiblesItem'] = var4;
    var4 = function clearErrors() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_CLEAR_ERRORS';
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
        var5 = 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
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
        var5 = 'USER_SETTINGS_RESET_ALL_PENDING';
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
        var5 = 'USER_SETTINGS_RESET_ALL_TRY_IT_OUT';
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
        var5 = 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAndCloseUserProfileForm'] = var4;
    var4 = function resetPendingAvatarDecoration() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingAvatarDecoration'] = var4;
    var4 = function resetPendingLegacyUsernameDisabled() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingLegacyUsernameDisabled'] = var4;
    var2 = function resetPendingPrimaryGuildChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingPrimaryGuildChanges'] = var2;
    return var1;
})();