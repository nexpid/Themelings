// app/stores/UserSettingsAccountStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot30 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var16 = function handleInit() {
        var1 = _closure1_slot8;
        var1 = var1.OPEN;
        _closure1_slot27 = var1;
        var1 = {};
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot31 = var16;
    var15 = function handleClose() {
        var1 = _closure1_slot8;
        var1 = var1.CLOSED;
        _closure1_slot27 = var1;
        var1 = {};
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot32 = var15;
    var12 = function handleResetAllPending() {
        var2 = _closure1_slot34;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = _closure1_slot35;
        var2 = var2.bind(var1)();
        var2 = _closure1_slot37;
        var2 = var2.bind(var1)();
        var2 = _closure1_slot38;
        var2 = var2.bind(var1)();
        var2 = {};
        _closure1_slot28 = var2;
        return var1;
    };
    var _closure1_slot33 = var12;
    var14 = function handleResetPendingAccountChanges() {
        var1 = undefined;
        var _closure1_slot10 = var1;
        var _closure1_slot11 = var1;
        var _closure1_slot12 = var1;
        var _closure1_slot13 = var1;
        var _closure1_slot14 = var1;
        return var1;
    };
    var _closure1_slot34 = var14;
    var13 = function handleResetPendingProfileChanges() {
        var1 = undefined;
        var _closure1_slot15 = var1;
        var _closure1_slot16 = var1;
        var _closure1_slot17 = var1;
        var _closure1_slot18 = var1;
        var _closure1_slot19 = var1;
        _closure1_slot13 = var1;
        return var1;
    };
    var _closure1_slot35 = var13;
    var11 = function handleResetTryItOut() {
        var1 = undefined;
        var _closure1_slot23 = var1;
        var _closure1_slot24 = var1;
        var _closure1_slot25 = var1;
        var _closure1_slot26 = var1;
        var _closure1_slot22 = var1;
        return var1;
    };
    var _closure1_slot36 = var11;
    var10 = function handleResetPendingLegacyUsernameDisabled() {
        var1 = undefined;
        var _closure1_slot20 = var1;
        return var1;
    };
    var _closure1_slot37 = var10;
    var9 = function handleResetPendingPrimaryGuildChanges() {
        var1 = undefined;
        var _closure1_slot21 = var1;
        return var1;
    };
    var _closure1_slot38 = var9;
    var1 = global;
    var17 = var1.Object;
    var8 = var17.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var17)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.BIO_MAX_LENGTH;
    var _closure1_slot7 = var2;
    var2 = var8.FormStates;
    var _closure1_slot8 = var2;
    var8 = var8.UserSettingsSections;
    var _closure1_slot9 = var8;
    var2 = var2.CLOSED;
    var _closure1_slot27 = var2;
    var2 = {};
    var _closure1_slot28 = var2;
    var2 = /<(a?):(\w+):(\d+)>/g;
    var _closure1_slot29 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function UserSettingsAccountStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot30;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getFormState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'showNotice';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure1_slot10;
                var3 = undefined;
                var1 = var3 !== var1;
                if(var1) { _fun0003_ip = 24; continue _fun0003 }
 16:
                var4 = _closure1_slot15;
                var1 = var3 !== var4;
 24:
                if(var1) { _fun0003_ip = 35; continue _fun0003 }
 27:
                var4 = _closure1_slot16;
                var1 = var3 !== var4;
 35:
                if(var1) { _fun0003_ip = 46; continue _fun0003 }
 38:
                var4 = _closure1_slot17;
                var1 = var3 !== var4;
 46:
                if(var1) { _fun0003_ip = 57; continue _fun0003 }
 49:
                var4 = _closure1_slot18;
                var1 = var3 !== var4;
 57:
                if(var1) { _fun0003_ip = 68; continue _fun0003 }
 60:
                var4 = _closure1_slot19;
                var1 = var3 !== var4;
 68:
                if(var1) { _fun0003_ip = 79; continue _fun0003 }
 71:
                var4 = _closure1_slot12;
                var1 = var3 !== var4;
 79:
                if(var1) { _fun0003_ip = 90; continue _fun0003 }
 82:
                var4 = _closure1_slot13;
                var1 = var3 !== var4;
 90:
                if(var1) { _fun0003_ip = 101; continue _fun0003 }
 93:
                var4 = _closure1_slot11;
                var1 = var3 !== var4;
 101:
                if(var1) { _fun0003_ip = 112; continue _fun0003 }
 104:
                var4 = _closure1_slot14;
                var1 = var3 !== var4;
 112:
                if(var1) { _fun0003_ip = 123; continue _fun0003 }
 115:
                var4 = _closure1_slot20;
                var1 = var3 !== var4;
 123:
                if(var1) { _fun0003_ip = 134; continue _fun0003 }
 126:
                var2 = _closure1_slot21;
                var1 = var3 !== var2;
 134:
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
 0:
                var3 = _closure1_slot16;
                var1 = undefined;
                var1 = var1 !== var3;
                if(!var1) { _fun0004_ip = 52; continue _fun0004 }
 16:
                var6 = _closure1_slot16;
                var5 = var6.replace;
                var4 = _closure1_slot29;
                var3 = 'x';
                var3 = var5.bind(var6)(var4, var3);
                var3 = var3.length;
                var2 = _closure1_slot7;
                var1 = var3 > var2;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPendingAvatar';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getPendingGlobalName';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPendingBanner';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getPendingBio';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPendingPronouns';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getPendingAccentColor';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getPendingThemeColors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getPendingAvatarDecoration';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getPendingNameplate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getPendingProfileEffectId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getAllPending';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot10;
            var1['pendingAvatar'] = var3;
            var3 = _closure1_slot15;
            var1['pendingBanner'] = var3;
            var3 = _closure1_slot16;
            var1['pendingBio'] = var3;
            var3 = _closure1_slot17;
            var1['pendingPronouns'] = var3;
            var3 = _closure1_slot18;
            var1['pendingAccentColor'] = var3;
            var3 = _closure1_slot19;
            var1['pendingThemeColors'] = var3;
            var3 = _closure1_slot12;
            var1['pendingAvatarDecoration'] = var3;
            var3 = _closure1_slot13;
            var1['pendingProfileEffectId'] = var3;
            var3 = _closure1_slot11;
            var1['pendingGlobalName'] = var3;
            var3 = _closure1_slot14;
            var1['pendingNameplate'] = var3;
            var3 = _closure1_slot20;
            var1['pendingLegacyUsernameDisabled'] = var3;
            var2 = _closure1_slot21;
            var1['pendingPrimaryGuildId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getTryItOutThemeColors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getTryItOutAvatar';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getTryItOutAvatarDecoration';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getTryItOutProfileEffectId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getTryItOutBanner';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getAllTryItOut';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot22;
            var1['tryItOutThemeColors'] = var3;
            var3 = _closure1_slot23;
            var1['tryItOutAvatar'] = var3;
            var3 = _closure1_slot24;
            var1['tryItOutAvatarDecoration'] = var3;
            var3 = _closure1_slot25;
            var1['tryItOutProfileEffectId'] = var3;
            var2 = _closure1_slot26;
            var1['tryItOutBanner'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserSettingsAccountStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var20 = var7.bind(var1)(var2);
    var2 = {};
    var2['USER_SETTINGS_ACCOUNT_INIT'] = var16;
    var2['USER_SETTINGS_MODAL_INIT'] = var16;
    var2['USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS'] = var16;
    var16 = function handleSectionChange(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.section;
            var1 = _closure1_slot9;
            var1 = var1.ACCOUNT;
            var1 = var3 === var1;
            if(!var1) { _fun0005_ip = 40; continue _fun0005 }
 28:
            var3 = _closure1_slot31;
            var2 = undefined;
            var3 = var3.bind(var2)();
            var1 = undefined;
 40:
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SET_SECTION'] = var16;
    var2['USER_SETTINGS_ACCOUNT_CLOSE'] = var15;
    var15 = function handleResetFullForm() {
        var3 = _closure1_slot33;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot36;
        var3 = var3.bind(var1)();
        var2 = _closure1_slot32;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM'] = var15;
    var15 = function handleFormSubmit() {
        var1 = _closure1_slot8;
        var1 = var1.SUBMITTING;
        _closure1_slot27 = var1;
        var1 = {};
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SUBMIT'] = var15;
    var15 = function handleFormSubmitFailure(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot27;
            var1 = _closure1_slot8;
            var1 = var1.SUBMITTING;
            if(!(var3 === var1)) { _fun0006_ip = 60; continue _fun0006 }
 21:
            var1 = _closure1_slot8;
            var1 = var1.OPEN;
            _closure1_slot27 = var1;
            var1 = arg1;
            var1 = var1.errors;
            var3 = null;
            if(!(var3 == var1)) { _fun0006_ip = 52; continue _fun0006 }
 50:
            var1 = {};
 52:
            _closure1_slot28 = var1;
            var1 = undefined;
            return var1;
 60:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE'] = var15;
    var15 = function handleSetPendingAvatar(arg1) {
        var1 = arg1;
        var1 = var1.avatar;
        _closure1_slot10 = var1;
        var1 = undefined;
        _closure1_slot23 = var1;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR'] = var15;
    var15 = function handleSetPendingGlobalName(arg1) {
        var1 = arg1;
        var2 = var1.globalName;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME'] = var15;
    var15 = function handleSetPendingLegacyUsernameDisabled(arg1) {
        var1 = arg1;
        var2 = var1.legacyUsernameDisabled;
        _closure1_slot20 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED'] = var15;
    var15 = function handleSetPendingAvatarDecoration(arg1) {
        var1 = arg1;
        var2 = var1.avatarDecoration;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION'] = var15;
    var15 = function handleSetPendingNameplate(arg1) {
        var1 = arg1;
        var2 = var1.nameplate;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE'] = var15;
    var15 = function handleSetSingleTryItOutCollectiblesItem(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.item;
            var2 = null;
            var3 = var2 == var4;
            var1 = undefined;
            var6 = undefined;
            if(var3) { _fun0007_ip = 26; continue _fun0007 }
 21:
            var6 = var4.type;
 26:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var8 = 6;
            var5 = var5[var8];
            var5 = var7.bind(var1)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_EFFECT;
            if(!(var6 !== var5)) { _fun0007_ip = 122; continue _fun0007 }
 65:
            var5 = var2 == var4;
            var6 = undefined;
            if(var5) { _fun0007_ip = 79; continue _fun0007 }
 74:
            var6 = var4.type;
 79:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var7.bind(var1)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.AVATAR_DECORATION;
            if(!(var6 === var5)) { _fun0007_ip = 144; continue _fun0007 }
 112:
            _closure1_slot25 = var2;
            _closure1_slot24 = var4;
            _fun0007_ip = 144; continue _fun0007;
 122:
            _closure1_slot24 = var2;
            var5 = var2 == var4;
            var2 = undefined;
            if(var5) { _fun0007_ip = 140; continue _fun0007 }
 135:
            var2 = var4.id;
 140:
            _closure1_slot25 = var2;
 144:
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM'] = var15;
    var15 = function handleSetPendingProfileEffectId(arg1) {
        var1 = arg1;
        var2 = var1.profileEffectId;
        _closure1_slot13 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID'] = var15;
    var15 = function handleSetPendingBanner(arg1) {
        var1 = arg1;
        var2 = var1.banner;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER'] = var15;
    var15 = function handleSetPendingBio(arg1) {
        var1 = arg1;
        var2 = var1.bio;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_BIO'] = var15;
    var15 = function handleSetPendingPronouns(arg1) {
        var1 = arg1;
        var2 = var1.pronouns;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS'] = var15;
    var15 = function handleSetPendingAccentColor(arg1) {
        var1 = arg1;
        var2 = var1.color;
        _closure1_slot18 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR'] = var15;
    var15 = function handleSetPendingThemeColors(arg1) {
        var1 = arg1;
        var2 = var1.themeColors;
        _closure1_slot19 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS'] = var15;
    var15 = function handleSetTryItOutAvatar(arg1) {
        var1 = arg1;
        var2 = var1.avatar;
        _closure1_slot23 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR'] = var15;
    var15 = function handleSetTryItOutAvatarDecoration(arg1) {
        var1 = arg1;
        var2 = var1.avatarDecoration;
        _closure1_slot24 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION'] = var15;
    var15 = function handleSetTryItOutProfileEffectId(arg1) {
        var1 = arg1;
        var2 = var1.profileEffectId;
        _closure1_slot25 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID'] = var15;
    var15 = function handleSetTryItOutBanner(arg1) {
        var1 = arg1;
        var2 = var1.banner;
        _closure1_slot26 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER'] = var15;
    var15 = function handleSetTryItOutThemeColors(arg1) {
        var1 = arg1;
        var2 = var1.themeColors;
        _closure1_slot22 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS'] = var15;
    var15 = function handleSetTryItOutPreset(arg1) {
        var1 = arg1;
        var4 = var1.banner;
        var3 = var1.themeColors;
        var2 = var1.avatarDecoration;
        _closure1_slot26 = var4;
        _closure1_slot22 = var3;
        _closure1_slot24 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET'] = var15;
    var15 = function handleSetPendingPrimaryGuildId(arg1) {
        var1 = arg1;
        var2 = var1.primaryGuildId;
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID'] = var15;
    var15 = function handleClearErrors() {
        var1 = {};
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_CLEAR_ERRORS'] = var15;
    var2['USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES'] = var14;
    var2['USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES'] = var13;
    var2['USER_SETTINGS_RESET_ALL_PENDING'] = var12;
    var2['USER_SETTINGS_RESET_ALL_TRY_IT_OUT'] = var11;
    var11 = function handleResetPendingAvatarDecoration() {
        var1 = undefined;
        _closure1_slot12 = var1;
        return var1;
    };
    var2['USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION'] = var11;
    var2['USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED'] = var10;
    var2['USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES'] = var9;
    var4 = function handleLogout() {
        var1 = undefined;
        _closure1_slot10 = var1;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var21 = var4;
    var19 = var2;
    var2 = new var21[var8](var20, var19, var18);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/UserSettingsAccountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();