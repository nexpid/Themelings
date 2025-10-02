// app/modules/guild_identity/GuildIdentitySettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var9 = function handleResetAllPending() {
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = _closure1_slot24;
        var2 = var2.bind(var1)();
        var2 = {};
        _closure1_slot20 = var2;
        var2 = _closure1_slot6;
        var2 = var2.OPEN;
        _closure1_slot19 = var2;
        return var1;
    };
    var _closure1_slot22 = var9;
    var11 = function handleResetPendingMemberChanges() {
        var1 = undefined;
        var _closure1_slot7 = var1;
        var _closure1_slot14 = var1;
        var _closure1_slot8 = var1;
        var _closure1_slot9 = var1;
        var _closure1_slot16 = var1;
        return var1;
    };
    var _closure1_slot23 = var11;
    var10 = function handleResetPendingProfileChanges() {
        var1 = undefined;
        var _closure1_slot11 = var1;
        var _closure1_slot12 = var1;
        var _closure1_slot13 = var1;
        var _closure1_slot15 = var1;
        var _closure1_slot10 = var1;
        return var1;
    };
    var _closure1_slot24 = var10;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.BIO_MAX_LENGTH;
    var _closure1_slot5 = var8;
    var2 = var2.FormStates;
    var _closure1_slot6 = var2;
    var2 = var2.CLOSED;
    var _closure1_slot19 = var2;
    var2 = {};
    var _closure1_slot20 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildIdentitySettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getFormState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'showNotice';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot7;
                var3 = undefined;
                var1 = var3 !== var1;
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = _closure1_slot8;
                var1 = var3 !== var4;
case 9:
                if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var4 = _closure1_slot10;
                var1 = var3 !== var4;
case 11:
                if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var4 = _closure1_slot11;
                var1 = var3 !== var4;
case 13:
                if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = _closure1_slot12;
                var1 = var3 !== var4;
case 15:
                if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var4 = _closure1_slot13;
                var1 = var3 !== var4;
case 17:
                if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var4 = _closure1_slot14;
                var1 = var3 !== var4;
case 19:
                if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var4 = _closure1_slot15;
                var1 = var3 !== var4;
case 21:
                if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var4 = _closure1_slot9;
                var1 = var3 !== var4;
case 23:
                if(var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var2 = _closure1_slot16;
                var1 = var3 !== var2;
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsSubmitDisabled';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot12;
                var1 = undefined;
                var1 = var1 !== var3;
                if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 10:
                var3 = _closure1_slot12;
                var3 = var3.length;
                var2 = _closure1_slot5;
                var1 = var3 > var2;
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPendingAvatar';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getPendingAvatarDecoration';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPendingProfileEffect';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getPendingBanner';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPendingBio';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getPendingNickname';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getPendingPronouns';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getPendingAccentColor';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getPendingThemeColors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getPendingNameplate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getPendingDisplayNameStyles';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getAllPending';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot7;
            var1['pendingAvatar'] = var3;
            var3 = _closure1_slot8;
            var1['pendingAvatarDecoration'] = var3;
            var3 = _closure1_slot10;
            var1['pendingProfileEffect'] = var3;
            var3 = _closure1_slot11;
            var1['pendingBanner'] = var3;
            var3 = _closure1_slot12;
            var1['pendingBio'] = var3;
            var3 = _closure1_slot13;
            var1['pendingPronouns'] = var3;
            var3 = _closure1_slot14;
            var1['pendingNickname'] = var3;
            var3 = _closure1_slot15;
            var1['pendingThemeColors'] = var3;
            var3 = _closure1_slot9;
            var1['pendingNameplate'] = var3;
            var2 = _closure1_slot16;
            var1['pendingDisplayNameStyles'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getGuild';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getSource';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildIdentitySettingsStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleInit(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var _closure1_slot17 = var3;
        var3 = _closure1_slot6;
        var3 = var3.OPEN;
        _closure1_slot19 = var3;
        var3 = {};
        _closure1_slot20 = var3;
        var1 = var1.source;
        var _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_INIT'] = var12;
    var12 = function handleResetFullForm() {
        var3 = _closure1_slot22;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot6;
        var3 = var3.CLOSED;
        _closure1_slot19 = var3;
        var3 = {};
        _closure1_slot20 = var3;
        _closure1_slot18 = var1;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM'] = var12;
    var12 = function handleSetGuild(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        _closure1_slot17 = var1;
        var1 = {};
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_GUILD'] = var12;
    var12 = function handleFormSubmit() {
        var1 = _closure1_slot6;
        var1 = var1.SUBMITTING;
        _closure1_slot19 = var1;
        var1 = {};
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SUBMIT'] = var12;
    var12 = function handleFormSubmitFailure(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot19;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            if(!(var3 === var1)) { _fun0005_ip = 18; continue _fun0005 }
case 28:
            var1 = _closure1_slot6;
            var1 = var1.OPEN;
            _closure1_slot19 = var1;
            var1 = arg1;
            var1 = var1.errors;
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var1 = {};
case 29:
            _closure1_slot20 = var1;
            var1 = undefined;
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE'] = var12;
    var12 = function handleProfileUpdateFailure(arg1) {
        var1 = _closure1_slot6;
        var1 = var1.OPEN;
        _closure1_slot19 = var1;
        var1 = arg1;
        var1 = var1.errors;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_UPDATE_FAILURE'] = var12;
    var12 = function handleSetPendingAvatar(arg1) {
        var1 = arg1;
        var2 = var1.avatar;
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR'] = var12;
    var12 = function handleSetPendingAvatarDecoration(arg1) {
        var1 = arg1;
        var2 = var1.avatarDecoration;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION'] = var12;
    var12 = function handleSetPendingDisplayNameStyles(arg1) {
        var1 = arg1;
        var2 = var1.displayNameStyles;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES'] = var12;
    var12 = function handleSetPendingNameplate(arg1) {
        var1 = arg1;
        var2 = var1.nameplate;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE'] = var12;
    var12 = function handleSetPendingProfileEffect(arg1) {
        var1 = arg1;
        var2 = var1.profileEffect;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT'] = var12;
    var12 = function handleSetPendingBanner(arg1) {
        var1 = arg1;
        var2 = var1.banner;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER'] = var12;
    var12 = function handleSetPendingBio(arg1) {
        var1 = arg1;
        var2 = var1.bio;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO'] = var12;
    var12 = function handleSetPendingPronouns(arg1) {
        var1 = arg1;
        var2 = var1.pronouns;
        _closure1_slot13 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS'] = var12;
    var12 = function handleSetPendingNickname(arg1) {
        var1 = arg1;
        var2 = var1.nickname;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME'] = var12;
    var12 = function handleSetPendingThemeColors(arg1) {
        var1 = arg1;
        var2 = var1.themeColors;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS'] = var12;
    var2['GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES'] = var11;
    var2['GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES'] = var10;
    var2['GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING'] = var9;
    var2['GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS'] = var9;
    var4 = function handleClearErrors() {
        var1 = {};
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_identity/GuildIdentitySettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();