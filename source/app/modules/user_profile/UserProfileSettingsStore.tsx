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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var13 = function handleFormOpen() {
        var1 = _closure1_slot8;
        var1 = var1.OPEN;
        _closure1_slot17 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var12 = function handleFormClose() {
        var1 = _closure1_slot8;
        var1 = var1.CLOSED;
        _closure1_slot17 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot20 = var12;
    var10 = function handleResetTryItOutChanges() {
        var1 = _closure1_slot12;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot21 = var10;
    var11 = function handleResetPendingChanges() {
        var1 = {};
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot22 = var11;
    var4 = function handleReset() {
        var3 = _closure1_slot22;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot21;
        var3 = var3.bind(var1)();
        var2 = _closure1_slot20;
        var2 = var2.bind(var1)();
        return var1;
    };
    var1 = global;
    var14 = var1.Object;
    var8 = var14.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var14)(var3, var1, var2);
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
    var14 = var8.ME;
    var _closure1_slot9 = var14;
    var8 = var8.UserSettingsSections;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = {};
    var _closure1_slot12 = var8;
    var14 = {};
    var _closure1_slot13 = var14;
    var14 = {};
    var _closure1_slot14 = var14;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var1;
    var2 = var2.CLOSED;
    var _closure1_slot17 = var2;
    var2 = {};
    var _closure1_slot18 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function UserProfileSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot19;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'selectedGuildId';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFormState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot18;
                var3 = null;
                if(!(var3 == var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = _closure1_slot9;
case 9:
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = _closure1_slot13;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPendingChanges';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot14;
                var3 = null;
                if(!(var3 == var4)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var4 = _closure1_slot9;
case 9:
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = _closure1_slot11;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getTryItOutChanges';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'showNotice';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var7 = this;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.values;
                var8 = var7.getPendingChanges;
                var1 = _closure1_slot9;
                var1 = var8.bind(var7)(var1);
                var6 = var5.bind(var6)(var1);
                var5 = var6.some;
                var1 = function(arg1) {
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var1 = var5.bind(var6)(var1);
                var5 = !var1;
                var1 = !var5;
                if(!var5) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var5 = var4.Object;
                var4 = var5.values;
                var6 = var7.getPendingChanges;
                var3 = _closure1_slot16;
                var3 = var6.bind(var7)(var3);
                var4 = var4.bind(var5)(var3);
                var3 = var4.some;
                var2 = function(arg1) {
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                var1 = !var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'canSubmit';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot9;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = _closure1_slot16;
                var4[1] = var1;
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = undefined;
                if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var7 = var4[var3];
                var1 = var6.getPendingChanges;
                var1 = var1.bind(var6)(var7);
                var7 = var1.pendingBio;
                if(!(var2 !== var7)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                var1 = var1.pendingBio;
                var7 = var1.length;
                var1 = _closure1_slot7;
                if(!(!(var7 > var1))) { _fun0006_ip = 19; continue _fun0006 }
case 17:
                var3 = var3 + 1;
                var1 = var4.length;
                if(var3 < var1) { _fun0006_ip = 16; continue _fun0006 }
case 15:
                var1 = true;
                return var1;
case 19:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserProfileSettingsStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var2['USER_SETTINGS_MODAL_INIT'] = var13;
    var2['USER_SETTINGS_MODAL_OPEN'] = var13;
    var13 = function handleSectionChange(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            var1 = _closure1_slot10;
            var1 = var1.ACCOUNT;
            if(!(var3 === var1)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
            var1 = _closure1_slot8;
            var1 = var1.OPEN;
            _closure1_slot17 = var1;
            var1 = {};
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SET_SECTION'] = var13;
    var13 = function handleInit(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = null;
            var4 = var1 != var3;
            var1 = undefined;
            var2 = undefined;
            if(!var4) { _fun0008_ip = 22; continue _fun0008 }
case 23:
            var2 = var3;
case 22:
            _closure1_slot16 = var2;
            var2 = _closure1_slot8;
            var2 = var2.OPEN;
            _closure1_slot17 = var2;
            var2 = {};
            _closure1_slot18 = var2;
            return var1;
        }
    };
    var2['USER_PROFILE_SETTINGS_INIT'] = var13;
    var13 = function handleSetGuild(arg1) {
        var1 = arg1;
        var1 = var1.guildId;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_SETTINGS_SET_GUILD'] = var13;
    var2['USER_PROFILE_SETTINGS_CLOSE'] = var12;
    var2['USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM'] = var4;
    var12 = function handleFormSubmit() {
        var1 = _closure1_slot8;
        var1 = var1.SUBMITTING;
        _closure1_slot17 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_SETTINGS_SUBMIT'] = var12;
    var12 = function handleFormSubmitSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = _closure1_slot17;
            var2 = _closure1_slot8;
            var2 = var2.SUBMITTING;
            if(!(var4 === var2)) { _fun0009_ip = 6; continue _fun0009 }
case 24:
            var2 = _closure1_slot8;
            var2 = var2.OPEN;
            _closure1_slot17 = var2;
            var2 = _closure1_slot18;
            var4 = null;
            if(!(var4 == var3)) { _fun0009_ip = 25; continue _fun0009 }
case 26:
            var3 = _closure1_slot9;
case 25:
            var1 = _closure1_slot13;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var2['USER_PROFILE_SETTINGS_SUBMIT_SUCCESS'] = var12;
    var12 = function handleFormSubmitFailure(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.errors;
            var5 = _closure1_slot17;
            var1 = _closure1_slot8;
            var1 = var1.SUBMITTING;
            if(!(var5 === var1)) { _fun0010_ip = 27; continue _fun0010 }
case 28:
            var1 = _closure1_slot8;
            var1 = var1.OPEN;
            _closure1_slot17 = var1;
            var1 = _closure1_slot18;
            var5 = null;
            if(!(var5 == var3)) { _fun0010_ip = 29; continue _fun0010 }
case 30:
            var3 = _closure1_slot9;
case 29:
            if(!(var5 == var2)) { _fun0010_ip = 31; continue _fun0010 }
case 18:
            var2 = _closure1_slot13;
case 31:
            var1[var3] = var2;
            var1 = undefined;
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var2['USER_PROFILE_SETTINGS_SUBMIT_FAILURE'] = var12;
    var12 = function handleSetPendingAvatar(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guildId;
            var6 = var1.avatar;
            var4 = _closure1_slot14;
            var8 = null;
            var2 = var7;
            if(!(var8 == var7)) { _fun0011_ip = 32; continue _fun0011 }
case 33:
            var2 = _closure1_slot9;
case 32:
            var1 = {};
            var5 = _closure1_slot14;
            if(!(var8 == var7)) { _fun0011_ip = 34; continue _fun0011 }
case 35:
            var7 = _closure1_slot9;
case 34:
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_AVATAR'] = var12;
    var12 = function handleSetPendingGlobalName(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_GLOBAL_NAME'] = var12;
    var12 = function handleSetPendingNickname(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var5 = var1.nickname;
        var2 = _closure1_slot14;
        var1 = {};
        var6 = var2[var3];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = 'pendingNickname';
        var1[var4] = var5;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_SETTINGS_SET_PENDING_NICKNAME'] = var12;
    var12 = function handleSetPendingLegacyUsernameDisabled(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_LEGACY_USERNAME_DISABLED'] = var12;
    var12 = function handleSetPendingCollectiblesItem(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(!(var3 !== var2)) { _fun0012_ip = 36; continue _fun0012 }
case 37:
            var3 = var5.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var3 !== var2)) { _fun0012_ip = 38; continue _fun0012 }
case 39:
            var3 = var5.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var3 === var2)) { _fun0012_ip = 40; continue _fun0012 }
case 41:
            var4 = _closure1_slot14;
            var10 = null;
            var3 = var7;
            if(!(var10 == var7)) { _fun0012_ip = 42; continue _fun0012 }
case 43:
            var3 = _closure1_slot9;
case 42:
            var2 = {};
            var9 = _closure1_slot14;
            var6 = var7;
            if(!(var10 == var7)) { _fun0012_ip = 44; continue _fun0012 }
case 45:
            var6 = _closure1_slot9;
case 44:
            var11 = var9[var6];
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var9 = var5.value;
            var6 = 'pendingNameplate';
            var2[var6] = var9;
            var4[var3] = var2;
            _fun0012_ip = 40; continue _fun0012;
case 38:
            var4 = _closure1_slot14;
            var10 = null;
            var3 = var7;
            if(!(var10 == var7)) { _fun0012_ip = 46; continue _fun0012 }
case 47:
            var3 = _closure1_slot9;
case 46:
            var2 = {};
            var9 = _closure1_slot14;
            var6 = var7;
            if(!(var10 == var7)) { _fun0012_ip = 48; continue _fun0012 }
case 49:
            var6 = _closure1_slot9;
case 48:
            var11 = var9[var6];
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var9 = var5.value;
            var6 = 'pendingProfileEffect';
            var2[var6] = var9;
            var4[var3] = var2;
            _fun0012_ip = 40; continue _fun0012;
case 36:
            var4 = _closure1_slot14;
            var9 = null;
            var3 = var7;
            if(!(var9 == var7)) { _fun0012_ip = 50; continue _fun0012 }
case 51:
            var3 = _closure1_slot9;
case 50:
            var2 = {};
            var6 = _closure1_slot14;
            if(!(var9 == var7)) { _fun0012_ip = 52; continue _fun0012 }
case 53:
            var7 = _closure1_slot9;
case 52:
            var11 = var6[var7];
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var6 = var5.value;
            var5 = 'pendingAvatarDecoration';
            var2[var5] = var6;
            var4[var3] = var2;
case 40:
            return var1;
        }
    };
    var2['USER_PROFILE_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM'] = var12;
    var12 = function handleSetPendingBanner(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.banner;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0013_ip = 32; continue _fun0013 }
case 33:
            var2 = _closure1_slot9;
case 32:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0013_ip = 34; continue _fun0013 }
case 35:
            var6 = _closure1_slot9;
case 34:
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_BANNER'] = var12;
    var12 = function handleSetPendingBio(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.bio;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0014_ip = 32; continue _fun0014 }
case 33:
            var2 = _closure1_slot9;
case 32:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0014_ip = 34; continue _fun0014 }
case 35:
            var6 = _closure1_slot9;
case 34:
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_BIO'] = var12;
    var12 = function handleSetPendingPronouns(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.pronouns;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0015_ip = 32; continue _fun0015 }
case 33:
            var2 = _closure1_slot9;
case 32:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0015_ip = 34; continue _fun0015 }
case 35:
            var6 = _closure1_slot9;
case 34:
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_PRONOUNS'] = var12;
    var12 = function handleSetPendingAccentColor(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_ACCENT_COLOR'] = var12;
    var12 = function handleSetPendingThemeColors(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.themeColors;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0016_ip = 32; continue _fun0016 }
case 33:
            var2 = _closure1_slot9;
case 32:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0016_ip = 34; continue _fun0016 }
case 35:
            var6 = _closure1_slot9;
case 34:
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_THEME_COLORS'] = var12;
    var12 = function handleSetTryItOutAvatar(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR'] = var12;
    var12 = function handleSetTryItOutAvatarDecoration(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION'] = var12;
    var12 = function handleSetTryItOutProfileEffect(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT'] = var12;
    var12 = function handleSetTryItOutBanner(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER'] = var12;
    var12 = function handleSetTryItOutThemeColors(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS'] = var12;
    var12 = function handleSetTryItOutDisplayNameStyles(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES'] = var12;
    var12 = function handleSetTryItOutPreset(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET'] = var12;
    var12 = function handleSetPendingPrimaryGuildId(arg1) {
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID'] = var12;
    var12 = function handleSetPendingDisplayNameStyles(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.displayNameStyles;
            var3 = _closure1_slot14;
            var8 = null;
            var2 = var6;
            if(!(var8 == var6)) { _fun0017_ip = 32; continue _fun0017 }
case 33:
            var2 = _closure1_slot9;
case 32:
            var1 = {};
            var4 = _closure1_slot14;
            if(!(var8 == var6)) { _fun0017_ip = 34; continue _fun0017 }
case 35:
            var6 = _closure1_slot9;
case 34:
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
    var2['USER_PROFILE_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES'] = var12;
    var12 = function handleResetErrors() {
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_SETTINGS_CLEAR_ERRORS'] = var12;
    var12 = function handleResetPendingAccountChanges() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.fromEntries;
        var6 = var1.Object;
        var5 = var6.entries;
        var1 = _closure1_slot14;
        var6 = var5.bind(var6)(var1);
        var5 = var6.map;
        var1 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var3 = var6().value;
                var2 = var1;
                var4 = undefined;
                var5 = var2 === var4;
                var2 = undefined;
                if(var5) { _fun0018_ip = 54; continue _fun0018 }
case 22:
                var2 = var3;
case 54:
                var3 = undefined;
                if(var5) { _fun0018_ip = 25; continue _fun0018 }
case 11:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var4;
                var3 = undefined;
                var5 = var6;
                if(var6) { _fun0018_ip = 25; continue _fun0018 }
case 7:
                var3 = var7;
                var5 = var6;
case 25:
                if(var5) { _fun0018_ip = 29; continue _fun0018 }
case 55:
                var1.return();
case 29:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var10 = var2;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = 'pendingGlobalName';
                var2[var3] = var4;
                var3 = 'pendingNickname';
                var2[var3] = var4;
                var3 = 'pendingDisplayNameStyles';
                var2[var3] = var4;
                var3 = 'pendingAvatar';
                var2[var3] = var4;
                var3 = 'pendingAvatarDecoration';
                var2[var3] = var4;
                var3 = 'pendingNameplate';
                var2[var3] = var4;
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var4)(var1);
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES'] = var12;
    var12 = function handleResetPendingProfileChanges() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.fromEntries;
        var6 = var1.Object;
        var5 = var6.entries;
        var1 = _closure1_slot14;
        var6 = var5.bind(var6)(var1);
        var5 = var6.map;
        var1 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var3 = var6().value;
                var2 = var1;
                var4 = undefined;
                var5 = var2 === var4;
                var2 = undefined;
                if(var5) { _fun0019_ip = 54; continue _fun0019 }
case 22:
                var2 = var3;
case 54:
                var3 = undefined;
                if(var5) { _fun0019_ip = 25; continue _fun0019 }
case 11:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var4;
                var3 = undefined;
                var5 = var6;
                if(var6) { _fun0019_ip = 25; continue _fun0019 }
case 7:
                var3 = var7;
                var5 = var6;
case 25:
                if(var5) { _fun0019_ip = 29; continue _fun0019 }
case 55:
                var1.return();
case 29:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var10 = var2;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = 'pendingPronouns';
                var2[var3] = var4;
                var3 = 'pendingProfileEffect';
                var2[var3] = var4;
                var3 = 'pendingBanner';
                var2[var3] = var4;
                var3 = 'pendingAccentColor';
                var2[var3] = var4;
                var3 = 'pendingThemeColors';
                var2[var3] = var4;
                var3 = 'pendingBio';
                var2[var3] = var4;
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var4)(var1);
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES'] = var12;
    var2['USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES'] = var11;
    var2['USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES'] = var10;
    var10 = function handleResetPendingLegacyUsernameDisabled() {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = _closure1_slot9;
            var4 = var3[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0020_ip = 56; continue _fun0020 }
case 23:
            var4 = {};
case 56:
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0020_ip = 57; continue _fun0020 }
case 32:
            var3 = var4.pendingLegacyUsernameDisabled;
case 57:
            if(!(var1 !== var3)) { _fun0020_ip = 58; continue _fun0020 }
case 35:
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
case 58:
            var1 = false;
            return var1;
        }
    };
    var2['USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED'] = var10;
    var10 = function handleResetPendingPrimaryGuildChanges() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = _closure1_slot9;
            var4 = var3[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0021_ip = 56; continue _fun0021 }
case 23:
            var4 = {};
case 56:
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0021_ip = 57; continue _fun0021 }
case 32:
            var3 = var4.pendingPrimaryGuildId;
case 57:
            if(!(var1 !== var3)) { _fun0021_ip = 58; continue _fun0021 }
case 35:
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
case 58:
            var1 = false;
            return var1;
        }
    };
    var2['USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES'] = var10;
    var9 = function handleProfileUpdateFailure(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var9 = var1.errors;
            var1 = _closure1_slot8;
            var1 = var1.OPEN;
            _closure1_slot17 = var1;
            var2 = _closure1_slot18;
            var5 = null;
            if(!(var5 == var3)) { _fun0022_ip = 59; continue _fun0022 }
case 60:
            var3 = _closure1_slot9;
case 59:
            var1 = global;
            var7 = var1.Object;
            var6 = var7.fromEntries;
            var8 = var1.Object;
            var1 = var8.entries;
            var9 = var1.bind(var8)(var9);
            var8 = var9.map;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0023_ip = 54; continue _fun0023 }
case 22:
                    var2 = var3;
case 54:
                    var3 = undefined;
                    if(var4) { _fun0023_ip = 25; continue _fun0023 }
case 11:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0023_ip = 25; continue _fun0023 }
case 7:
                    var3 = var6;
                    var4 = var5;
case 25:
                    if(var4) { _fun0023_ip = 29; continue _fun0023 }
case 55:
                    var1.return();
case 29:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1);
            var1 = var6.bind(var7)(var1);
            if(!(var5 == var1)) { _fun0022_ip = 61; continue _fun0022 }
case 19:
            var1 = _closure1_slot13;
case 61:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_PROFILE_UPDATE_FAILURE'] = var9;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
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