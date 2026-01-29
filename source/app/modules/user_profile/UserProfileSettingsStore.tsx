// app/modules/user_profile/UserProfileSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var17 = function handleFormOpen() {
        var1 = _closure1_slot8;
        var1 = var1.OPEN;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var16 = function handleFormClose() {
        var1 = _closure1_slot8;
        var1 = var1.CLOSED;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot19 = var16;
    var12 = function handleResetAllPending(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = _closure1_slot21;
            var3 = {};
            var1 = 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
            var3['type'] = var1;
            var3['guildId'] = var4;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var5 = _closure1_slot22;
            var3 = {};
            var6 = 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
            var3['type'] = var6;
            var3['guildId'] = var4;
            var3 = var5.bind(var1)(var3);
            var3 = _closure1_slot24;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot25;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot17;
            var5 = null;
            if(!(var5 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot9;
case 6:
            var2 = {};
            var3[var4] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var12;
    var14 = function handleResetPendingAccountChanges(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var4 = _closure1_slot14;
            var7 = null;
            var1 = var5;
            if(!(var7 == var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = _closure1_slot9;
case 8:
            var1 = var4[var1];
            if(!(var7 == var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = {};
case 10:
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = _closure1_slot14;
            var3 = var5;
            if(!(var7 == var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = _closure1_slot9;
case 14:
            var2 = {};
            var1 = _closure1_slot14;
            if(!(var7 == var5)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var5 = _closure1_slot9;
case 16:
            var9 = var1[var5];
            var10 = var2;
            var1 = copyDataProperties(var10, var9);
            var1 = undefined;
            var5 = 'pendingGlobalName';
            var2[var5] = var1;
            var5 = 'pendingDisplayNameStyles';
            var2[var5] = var1;
            var5 = 'pendingAvatar';
            var2[var5] = var1;
            var5 = 'pendingAvatarDecoration';
            var2[var5] = var1;
            var5 = 'pendingNameplate';
            var2[var5] = var1;
            var5 = 'pendingProfileEffect';
            var2[var5] = var1;
            var4[var3] = var2;
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot21 = var14;
    var13 = function handleResetPendingProfileChanges(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var4 = _closure1_slot14;
            var7 = null;
            var1 = var5;
            if(!(var7 == var5)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var1 = _closure1_slot9;
case 8:
            var1 = var4[var1];
            if(!(var7 == var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = {};
case 10:
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var4 = _closure1_slot14;
            var3 = var5;
            if(!(var7 == var5)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot9;
case 14:
            var2 = {};
            var1 = _closure1_slot14;
            if(!(var7 == var5)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var5 = _closure1_slot9;
case 16:
            var9 = var1[var5];
            var10 = var2;
            var1 = copyDataProperties(var10, var9);
            var1 = undefined;
            var5 = 'pendingPronouns';
            var2[var5] = var1;
            var5 = 'pendingProfileEffect';
            var2[var5] = var1;
            var5 = 'pendingBanner';
            var2[var5] = var1;
            var5 = 'pendingAccentColor';
            var2[var5] = var1;
            var5 = 'pendingThemeColors';
            var2[var5] = var1;
            var5 = 'pendingBio';
            var2[var5] = var1;
            var4[var3] = var2;
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var13;
    var11 = function handleResetTryItOut() {
        var1 = _closure1_slot12;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var11;
    var10 = function handleResetPendingLegacyUsernameDisabled() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = _closure1_slot9;
            var4 = var3[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var4 = {};
case 18:
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = var4.pendingLegacyUsernameDisabled;
case 20:
            if(!(var1 !== var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var4 = _closure1_slot14;
            var3 = _closure1_slot9;
            var2 = {};
            var6 = var4[var3];
            var7 = var2;
            var5 = copyDataProperties(var7, var6);
            var5 = 'pendingLegacyUsernameDisabled';
            var2[var5] = var1;
            var4[var3] = var2;
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var10;
    var9 = function handleResetPendingPrimaryGuildChanges() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = _closure1_slot9;
            var4 = var3[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var4 = {};
case 18:
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var3 = var4.pendingPrimaryGuildId;
case 20:
            if(!(var1 !== var3)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var4 = _closure1_slot14;
            var3 = _closure1_slot9;
            var2 = {};
            var6 = var4[var3];
            var7 = var2;
            var5 = copyDataProperties(var7, var6);
            var5 = 'pendingPrimaryGuildId';
            var2[var5] = var1;
            var4[var3] = var2;
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot25 = var9;
    var4 = function handleReset() {
        var4 = _closure1_slot20;
        var3 = {};
        var1 = 'USER_SETTINGS_RESET_ALL_PENDING';
        var3['type'] = var1;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = _closure1_slot23;
        var3 = var3.bind(var1)();
        var2 = _closure1_slot19;
        var2 = var2.bind(var1)();
        return var1;
    };
    var1 = global;
    var18 = var1.Object;
    var8 = var18.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var18)(var3, var1, var2);
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
    var18 = var8.ME;
    var _closure1_slot9 = var18;
    var8 = var8.UserSettingsSections;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = {};
    var _closure1_slot12 = var8;
    var18 = {};
    var _closure1_slot13 = var18;
    var18 = {};
    var _closure1_slot14 = var18;
    var _closure1_slot15 = var8;
    var2 = var2.CLOSED;
    var _closure1_slot16 = var2;
    var2 = {};
    var _closure1_slot17 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function UserProfileSettingsStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 24; continue _fun0007 }
case 10:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 25; continue _fun0007;
case 24:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 25:
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
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot17;
                var3 = null;
                if(!(var3 == var4)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                var4 = _closure1_slot9;
case 26:
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var1 = _closure1_slot13;
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPendingChanges';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot14;
                var3 = null;
                if(!(var3 == var4)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                var4 = _closure1_slot9;
case 26:
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                var1 = _closure1_slot11;
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getTryItOutChanges';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'showNotice';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getPendingChanges;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = global;
            var2 = var1.Object;
            var1 = var2.values;
            var3 = var1.bind(var2)(var3);
            var2 = var3.some;
            var1 = function(arg1) {
                var2 = undefined;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'canSubmit';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = this;
                var2 = var3.getPendingChanges;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var3 = var2.pendingBio;
                var1 = undefined;
                var1 = var1 !== var3;
                if(!var1) { _fun0010_ip = 30; continue _fun0010 }
case 28:
                var2 = var2.pendingBio;
                var3 = var2.length;
                var2 = _closure1_slot7;
                var1 = var3 > var2;
case 30:
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserProfileSettingsStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var21 = var7.bind(var1)(var2);
    var2 = {};
    var2['USER_SETTINGS_ACCOUNT_INIT'] = var17;
    var2['USER_SETTINGS_MODAL_INIT'] = var17;
    var2['USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS'] = var17;
    var17 = function handleSectionChange(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            var1 = _closure1_slot10;
            var1 = var1.ACCOUNT;
            if(!(var3 === var1)) { _fun0011_ip = 11; continue _fun0011 }
case 31:
            var1 = _closure1_slot8;
            var1 = var1.OPEN;
            _closure1_slot16 = var1;
            var1 = {};
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 11:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SET_SECTION'] = var17;
    var2['USER_SETTINGS_ACCOUNT_CLOSE'] = var16;
    var2['USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM'] = var4;
    var16 = function handleFormSubmit() {
        var1 = _closure1_slot8;
        var1 = var1.SUBMITTING;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SUBMIT'] = var16;
    var16 = function handleFormSubmitFailure(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.errors;
            var5 = _closure1_slot16;
            var1 = _closure1_slot8;
            var1 = var1.SUBMITTING;
            if(!(var5 === var1)) { _fun0012_ip = 32; continue _fun0012 }
case 33:
            var1 = _closure1_slot8;
            var1 = var1.OPEN;
            _closure1_slot16 = var1;
            var1 = _closure1_slot17;
            var5 = null;
            if(!(var5 == var3)) { _fun0012_ip = 34; continue _fun0012 }
case 35:
            var3 = _closure1_slot9;
case 34:
            if(!(var5 == var2)) { _fun0012_ip = 36; continue _fun0012 }
case 13:
            var2 = _closure1_slot13;
case 36:
            var1[var3] = var2;
            var1 = undefined;
            return var1;
case 32:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE'] = var16;
    var16 = function handleSetPendingAvatar(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guildId;
            var6 = var1.avatar;
            var4 = _closure1_slot14;
            var8 = null;
            var2 = var7;
            if(!(var8 == var7)) { _fun0013_ip = 21; continue _fun0013 }
case 37:
            var2 = _closure1_slot9;
case 21:
            var1 = {};
            var5 = _closure1_slot14;
            if(!(var8 == var7)) { _fun0013_ip = 38; continue _fun0013 }
case 23:
            var7 = _closure1_slot9;
case 38:
            var9 = var5[var7];
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var5 = 'pendingAvatar';
            var1[var5] = var6;
            var4[var2] = var1;
            var2 = {};
            var9 = _closure1_slot15;
            var10 = var2;
            var1 = copyDataProperties(var10, var9);
            var1 = undefined;
            var4 = 'tryItOutAvatar';
            var2[var4] = var1;
            _closure1_slot15 = var2;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR'] = var16;
    var16 = function handleSetPendingGlobalName(arg1) {
        var1 = arg1;
        var5 = var1.globalName;
        var3 = _closure1_slot14;
        var2 = _closure1_slot9;
        var1 = {};
        var6 = var3[var2];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = 'pendingGlobalName';
        var1[var4] = var5;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME'] = var16;
    var16 = function handleSetPendingLegacyUsernameDisabled(arg1) {
        var1 = arg1;
        var5 = var1.legacyUsernameDisabled;
        var3 = _closure1_slot14;
        var2 = _closure1_slot9;
        var1 = {};
        var6 = var3[var2];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = 'pendingLegacyUsernameDisabled';
        var1[var4] = var5;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED'] = var16;
    var16 = function handleSetPendingCollectiblesItem(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guildId;
            var5 = var1.item;
            var3 = var5.type;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 6;
            var2 = var1[var6];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var3 !== var2)) { _fun0014_ip = 39; continue _fun0014 }
case 40:
            var3 = var5.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var3 !== var2)) { _fun0014_ip = 41; continue _fun0014 }
case 42:
            var3 = var5.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var3 === var2)) { _fun0014_ip = 43; continue _fun0014 }
case 44:
            var4 = _closure1_slot14;
            var10 = null;
            var3 = var7;
            if(!(var10 == var7)) { _fun0014_ip = 45; continue _fun0014 }
case 46:
            var3 = _closure1_slot9;
case 45:
            var2 = {};
            var9 = _closure1_slot14;
            var6 = var7;
            if(!(var10 == var7)) { _fun0014_ip = 47; continue _fun0014 }
case 48:
            var6 = _closure1_slot9;
case 47:
            var11 = var9[var6];
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var9 = var5.value;
            var6 = 'pendingNameplate';
            var2[var6] = var9;
            var4[var3] = var2;
            _fun0014_ip = 43; continue _fun0014;
case 41:
            var4 = _closure1_slot14;
            var10 = null;
            var3 = var7;
            if(!(var10 == var7)) { _fun0014_ip = 49; continue _fun0014 }
case 50:
            var3 = _closure1_slot9;
case 49:
            var2 = {};
            var9 = _closure1_slot14;
            var6 = var7;
            if(!(var10 == var7)) { _fun0014_ip = 51; continue _fun0014 }
case 52:
            var6 = _closure1_slot9;
case 51:
            var11 = var9[var6];
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var9 = var5.value;
            var6 = 'pendingProfileEffect';
            var2[var6] = var9;
            var4[var3] = var2;
            _fun0014_ip = 43; continue _fun0014;
case 39:
            var4 = _closure1_slot14;
            var9 = null;
            var3 = var7;
            if(!(var9 == var7)) { _fun0014_ip = 53; continue _fun0014 }
case 54:
            var3 = _closure1_slot9;
case 53:
            var2 = {};
            var6 = _closure1_slot14;
            if(!(var9 == var7)) { _fun0014_ip = 55; continue _fun0014 }
case 56:
            var7 = _closure1_slot9;
case 55:
            var11 = var6[var7];
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var6 = var5.value;
            var5 = 'pendingAvatarDecoration';
            var2[var5] = var6;
            var4[var3] = var2;
case 43:
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM'] = var16;
    var16 = function handleSetPendingBanner(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.banner;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0015_ip = 21; continue _fun0015 }
case 37:
            var2 = _closure1_slot9;
case 21:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0015_ip = 38; continue _fun0015 }
case 23:
            var6 = _closure1_slot9;
case 38:
            var9 = var4[var6];
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var4 = 'pendingBanner';
            var1[var4] = var5;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER'] = var16;
    var16 = function handleSetPendingBio(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.bio;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0016_ip = 21; continue _fun0016 }
case 37:
            var2 = _closure1_slot9;
case 21:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0016_ip = 38; continue _fun0016 }
case 23:
            var6 = _closure1_slot9;
case 38:
            var9 = var4[var6];
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var4 = 'pendingBio';
            var1[var4] = var5;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_BIO'] = var16;
    var16 = function handleSetPendingPronouns(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.pronouns;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0017_ip = 21; continue _fun0017 }
case 37:
            var2 = _closure1_slot9;
case 21:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0017_ip = 38; continue _fun0017 }
case 23:
            var6 = _closure1_slot9;
case 38:
            var9 = var4[var6];
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var4 = 'pendingPronouns';
            var1[var4] = var5;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS'] = var16;
    var16 = function handleSetPendingAccentColor(arg1) {
        var1 = arg1;
        var5 = var1.color;
        var3 = _closure1_slot14;
        var2 = _closure1_slot9;
        var1 = {};
        var6 = var3[var2];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = 'pendingAccentColor';
        var1[var4] = var5;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR'] = var16;
    var16 = function handleSetPendingThemeColors(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.themeColors;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0018_ip = 21; continue _fun0018 }
case 37:
            var2 = _closure1_slot9;
case 21:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0018_ip = 38; continue _fun0018 }
case 23:
            var6 = _closure1_slot9;
case 38:
            var9 = var4[var6];
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var4 = 'pendingThemeColors';
            var1[var4] = var5;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS'] = var16;
    var16 = function handleSetTryItOutAvatar(arg1) {
        var1 = arg1;
        var4 = var1.avatar;
        var2 = {};
        var5 = _closure1_slot15;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutAvatar';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR'] = var16;
    var16 = function handleSetTryItOutAvatarDecoration(arg1) {
        var1 = arg1;
        var4 = var1.avatarDecoration;
        var2 = {};
        var5 = _closure1_slot15;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutAvatarDecoration';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION'] = var16;
    var16 = function handleSetTryItOutProfileEffect(arg1) {
        var1 = arg1;
        var4 = var1.profileEffect;
        var2 = {};
        var5 = _closure1_slot15;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutProfileEffect';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT'] = var16;
    var16 = function handleSetTryItOutBanner(arg1) {
        var1 = arg1;
        var4 = var1.banner;
        var2 = {};
        var5 = _closure1_slot15;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutBanner';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER'] = var16;
    var16 = function handleSetTryItOutThemeColors(arg1) {
        var1 = arg1;
        var4 = var1.themeColors;
        var2 = {};
        var5 = _closure1_slot15;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutThemeColors';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS'] = var16;
    var16 = function handleSetTryItOutDisplayNameStyles(arg1) {
        var1 = arg1;
        var4 = var1.displayNameStyles;
        var2 = {};
        var5 = _closure1_slot15;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutDisplayNameStyles';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES'] = var16;
    var16 = function handleSetTryItOutPreset(arg1) {
        var1 = arg1;
        var7 = var1.banner;
        var6 = var1.themeColors;
        var5 = var1.avatarDecoration;
        var4 = var1.displayNameStyles;
        var2 = {};
        var8 = _closure1_slot15;
        var9 = var2;
        var3 = copyDataProperties(var9, var8);
        var3 = 'tryItOutBanner';
        var2[var3] = var7;
        var3 = 'tryItOutThemeColors';
        var2[var3] = var6;
        var3 = 'tryItOutAvatarDecoration';
        var2[var3] = var5;
        var3 = 'tryItOutDisplayNameStyles';
        var2[var3] = var4;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET'] = var16;
    var16 = function handleSetPendingPrimaryGuildId(arg1) {
        var1 = arg1;
        var5 = var1.primaryGuildId;
        var3 = _closure1_slot14;
        var2 = _closure1_slot9;
        var1 = {};
        var6 = var3[var2];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = 'pendingPrimaryGuildId';
        var1[var4] = var5;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID'] = var16;
    var16 = function handleSetPendingDisplayNameStyles(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.displayNameStyles;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0019_ip = 21; continue _fun0019 }
case 37:
            var2 = _closure1_slot9;
case 21:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0019_ip = 38; continue _fun0019 }
case 23:
            var6 = _closure1_slot9;
case 38:
            var9 = var4[var6];
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var4 = 'pendingDisplayNameStyles';
            var1[var4] = var5;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES'] = var16;
    var15 = function handleClearErrors(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot17;
            var4 = null;
            if(!(var4 == var3)) { _fun0020_ip = 31; continue _fun0020 }
case 19:
            var3 = _closure1_slot9;
case 31:
            var1 = {};
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_CLEAR_ERRORS'] = var15;
    var2['USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES'] = var14;
    var2['USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES'] = var13;
    var2['USER_SETTINGS_RESET_ALL_PENDING'] = var12;
    var2['USER_SETTINGS_RESET_ALL_TRY_IT_OUT'] = var11;
    var2['USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED'] = var10;
    var2['USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES'] = var9;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var22 = var4;
    var20 = var2;
    var2 = new var22[var8](var21, var20, var19);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();