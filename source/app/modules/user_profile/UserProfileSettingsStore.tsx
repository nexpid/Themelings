// app/modules/user_profile/UserProfileSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
    var14 = function handleFormOpen() {
        var1 = _closure1_slot6;
        var1 = var1.OPEN;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var13 = function handleFormClose() {
        var1 = _closure1_slot6;
        var1 = var1.CLOSED;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot19 = var13;
    var11 = function handleResetTryItOutChanges() {
        var1 = _closure1_slot10;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot20 = var11;
    var12 = function handleResetPendingChanges() {
        var1 = {};
        _closure1_slot13 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot21 = var12;
    var5 = function handleReset() {
        var3 = _closure1_slot21;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot20;
        var3 = var3.bind(var1)();
        var2 = _closure1_slot19;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2 = global;
    var15 = var2.Object;
    var9 = var15.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var15)(var3, var1, var4);
    var20 = 0;
    var4 = var7[var20];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var18 = 1;
    var4 = var7[var18];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var4 = var9.BIO_MAX_LENGTH;
    var _closure1_slot5 = var4;
    var4 = var9.FormStates;
    var _closure1_slot6 = var4;
    var15 = var9.ME;
    var _closure1_slot7 = var15;
    var9 = var9.UserSettingsSections;
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var19 = var9.FAVORITES_RAW_GUILD_ID;
    var9 = 7;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var17 = var9.NOTIFICATIONS_INBOX_RAW_GUILD_ID;
    var9 = 8;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var22 = var9.PSEUDO_GUILD_IDS;
    var9 = {};
    var _closure1_slot9 = var9;
    var9 = {};
    var _closure1_slot10 = var9;
    var16 = {};
    var _closure1_slot11 = var16;
    var16 = var2.Set;
    var2 = new Array(2);
    var23 = var2;
    var21 = 0;
    var15 = arraySpread(var23, var22, var21);
    var2[14] = var19;
    var15 = var15 + var18;
    var2[14] = var17;
    var15 = var16.prototype;
    var15 = Object.create(var15, {constructor: {value: var16}});
    var24 = var15;
    var23 = var2;
    var2 = new var24[var16](var23, var22);
    var2 = var2 instanceof Object ? var2 : var15;
    var _closure1_slot12 = var2;
    var15 = {};
    var _closure1_slot13 = var15;
    var _closure1_slot14 = var9;
    var _closure1_slot15 = var1;
    var4 = var4.CLOSED;
    var _closure1_slot16 = var4;
    var4 = {};
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function UserProfileSettingsStore() {
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
                var1 = _closure1_slot18;
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
        var1 = 'selectedGuildId';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFormState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
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
                var1 = _closure1_slot17;
                var3 = null;
                if(!(var3 == var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = _closure1_slot7;
case 9:
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = _closure1_slot11;
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
                var1 = _closure1_slot13;
                var3 = null;
                if(!(var3 == var4)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var4 = _closure1_slot7;
case 9:
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = _closure1_slot9;
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
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasUnsavedChanges';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot13;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
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
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
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
                var1 = _closure1_slot7;
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
                var3 = _closure1_slot15;
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
        var1[6] = var5;
        var5 = {};
        var7 = 'canSubmit';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot7;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = _closure1_slot15;
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
                var1 = _closure1_slot5;
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
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'UserProfileSettingsStore';
    var9['displayName'] = var4;
    var4 = 10;
    var4 = var7[var4];
    var23 = var8.bind(var1)(var4);
    var4 = {};
    var4['USER_SETTINGS_MODAL_INIT'] = var14;
    var4['USER_SETTINGS_MODAL_OPEN'] = var14;
    var14 = function handleSectionChange(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            var1 = _closure1_slot8;
            var1 = var1.ACCOUNT;
            if(!(var3 === var1)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
            var1 = _closure1_slot6;
            var1 = var1.OPEN;
            _closure1_slot16 = var1;
            var1 = {};
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var4['USER_SETTINGS_MODAL_SET_SECTION'] = var14;
    var14 = function handleInit(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = null;
            var4 = var1 == var3;
            var1 = undefined;
            var2 = undefined;
            if(var4) { _fun0008_ip = 22; continue _fun0008 }
case 23:
            var5 = _closure1_slot12;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            var2 = undefined;
            if(var4) { _fun0008_ip = 22; continue _fun0008 }
case 24:
            var2 = var3;
case 22:
            _closure1_slot15 = var2;
            var2 = _closure1_slot6;
            var2 = var2.OPEN;
            _closure1_slot16 = var2;
            var2 = {};
            _closure1_slot17 = var2;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_INIT'] = var14;
    var14 = function handleSetGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = null;
            var4 = var1 == var3;
            var1 = undefined;
            var2 = undefined;
            if(var4) { _fun0009_ip = 22; continue _fun0009 }
case 23:
            var5 = _closure1_slot12;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            var2 = undefined;
            if(var4) { _fun0009_ip = 22; continue _fun0009 }
case 24:
            var2 = var3;
case 22:
            _closure1_slot15 = var2;
            var2 = {};
            _closure1_slot17 = var2;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_SET_GUILD'] = var14;
    var4['USER_PROFILE_SETTINGS_CLOSE'] = var13;
    var4['USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM'] = var5;
    var13 = function handleFormSubmit() {
        var1 = _closure1_slot6;
        var1 = var1.SUBMITTING;
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SUBMIT'] = var13;
    var13 = function handleFormSubmitSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = _closure1_slot16;
            var2 = _closure1_slot6;
            var2 = var2.SUBMITTING;
            if(!(var4 === var2)) { _fun0010_ip = 6; continue _fun0010 }
case 25:
            var2 = _closure1_slot6;
            var2 = var2.OPEN;
            _closure1_slot16 = var2;
            var2 = _closure1_slot17;
            var4 = null;
            if(!(var4 == var3)) { _fun0010_ip = 26; continue _fun0010 }
case 27:
            var3 = _closure1_slot7;
case 26:
            var1 = _closure1_slot11;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_SUBMIT_SUCCESS'] = var13;
    var13 = function handleFormSubmitFailure(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.errors;
            var5 = _closure1_slot16;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            if(!(var5 === var1)) { _fun0011_ip = 28; continue _fun0011 }
case 29:
            var1 = _closure1_slot6;
            var1 = var1.OPEN;
            _closure1_slot16 = var1;
            var1 = _closure1_slot17;
            var5 = null;
            if(!(var5 == var3)) { _fun0011_ip = 30; continue _fun0011 }
case 31:
            var3 = _closure1_slot7;
case 30:
            if(!(var5 == var2)) { _fun0011_ip = 32; continue _fun0011 }
case 18:
            var2 = _closure1_slot11;
case 32:
            var1[var3] = var2;
            var1 = undefined;
            return var1;
case 28:
            var1 = false;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_SUBMIT_FAILURE'] = var13;
    var13 = function handleSetPendingChanges(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var1 = var3.type;
            var6 = var3.guildId;
            var8 = null;
            var2 = Object.create(var8);
            var1 = 0;
            var2['type'] = var1;
            var2['guildId'] = var1;
            var11 = {};
            var10 = var3;
            var9 = var2;
            var4 = copyDataProperties(var11, var10, var9);
            var3 = _closure1_slot13;
            var2 = var6;
            if(!(var8 == var6)) { _fun0012_ip = 33; continue _fun0012 }
case 34:
            var2 = _closure1_slot7;
case 33:
            var1 = {};
            var5 = _closure1_slot13;
            if(!(var8 == var6)) { _fun0012_ip = 3; continue _fun0012 }
case 14:
            var6 = _closure1_slot7;
case 3:
            var10 = var5[var6];
            var11 = var1;
            var5 = copyDataProperties(var11, var10);
            var11 = var1;
            var10 = var4;
            var4 = copyDataProperties(var11, var10);
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_SET_PENDING_CHANGES'] = var13;
    var13 = function handleSetTryItOutAvatar(arg1) {
        var1 = arg1;
        var4 = var1.avatar;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutAvatar';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR'] = var13;
    var13 = function handleSetTryItOutAvatarDecoration(arg1) {
        var1 = arg1;
        var4 = var1.avatarDecoration;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutAvatarDecoration';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION'] = var13;
    var13 = function handleSetTryItOutProfileEffect(arg1) {
        var1 = arg1;
        var4 = var1.profileEffect;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutProfileEffect';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT'] = var13;
    var13 = function handleSetTryItOutBanner(arg1) {
        var1 = arg1;
        var4 = var1.banner;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutBanner';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER'] = var13;
    var13 = function handleSetTryItOutThemeColors(arg1) {
        var1 = arg1;
        var4 = var1.themeColors;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutThemeColors';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS'] = var13;
    var13 = function handleSetTryItOutDisplayNameStyles(arg1) {
        var1 = arg1;
        var4 = var1.displayNameStyles;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'tryItOutDisplayNameStyles';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES'] = var13;
    var13 = function handleSetTryItOutPreset(arg1) {
        var1 = arg1;
        var7 = var1.banner;
        var6 = var1.themeColors;
        var5 = var1.avatarDecoration;
        var4 = var1.displayNameStyles;
        var2 = {};
        var8 = _closure1_slot14;
        var9 = var2;
        var3 = copyDataProperties(var9, var8);
        var3 = 'tryItOutBanner';
        var2[2] = var7;
        var3 = 'tryItOutThemeColors';
        var2[2] = var6;
        var3 = 'tryItOutAvatarDecoration';
        var2[2] = var5;
        var3 = 'tryItOutDisplayNameStyles';
        var2[2] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET'] = var13;
    var13 = function handleResetErrors() {
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_CLEAR_ERRORS'] = var13;
    var13 = function handleResetPendingAccountChanges() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.fromEntries;
        var6 = var1.Object;
        var5 = var6.entries;
        var1 = _closure1_slot13;
        var6 = var5.bind(var6)(var1);
        var5 = var6.map;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var3 = var6().value;
                var2 = var1;
                var4 = undefined;
                var5 = var2 === var4;
                var2 = undefined;
                if(var5) { _fun0013_ip = 35; continue _fun0013 }
case 36:
                var2 = var3;
case 35:
                var3 = undefined;
                if(var5) { _fun0013_ip = 26; continue _fun0013 }
case 11:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var4;
                var3 = undefined;
                var5 = var6;
                if(var6) { _fun0013_ip = 26; continue _fun0013 }
case 7:
                var3 = var7;
                var5 = var6;
case 26:
                if(var5) { _fun0013_ip = 30; continue _fun0013 }
case 37:
                var1.return();
case 30:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var10 = var2;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = 'pendingGlobalName';
                var2[2] = var4;
                var3 = 'pendingNickname';
                var2[2] = var4;
                var3 = 'pendingDisplayNameStyles';
                var2[2] = var4;
                var3 = 'pendingAvatar';
                var2[2] = var4;
                var3 = 'pendingAvatarDecoration';
                var2[2] = var4;
                var3 = 'pendingNameplate';
                var2[2] = var4;
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var4)(var1);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES'] = var13;
    var13 = function handleResetPendingProfileChanges() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.fromEntries;
        var6 = var1.Object;
        var5 = var6.entries;
        var1 = _closure1_slot13;
        var6 = var5.bind(var6)(var1);
        var5 = var6.map;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var3 = var6().value;
                var2 = var1;
                var4 = undefined;
                var5 = var2 === var4;
                var2 = undefined;
                if(var5) { _fun0014_ip = 35; continue _fun0014 }
case 36:
                var2 = var3;
case 35:
                var3 = undefined;
                if(var5) { _fun0014_ip = 26; continue _fun0014 }
case 11:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var4;
                var3 = undefined;
                var5 = var6;
                if(var6) { _fun0014_ip = 26; continue _fun0014 }
case 7:
                var3 = var7;
                var5 = var6;
case 26:
                if(var5) { _fun0014_ip = 30; continue _fun0014 }
case 37:
                var1.return();
case 30:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var10 = var2;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = 'pendingPronouns';
                var2[2] = var4;
                var3 = 'pendingProfileEffect';
                var2[2] = var4;
                var3 = 'pendingProfileFrame';
                var2[2] = var4;
                var3 = 'pendingBanner';
                var2[2] = var4;
                var3 = 'pendingBannerOriginalMd5';
                var2[2] = var4;
                var3 = 'pendingAccentColor';
                var2[2] = var4;
                var3 = 'pendingThemeColors';
                var2[2] = var4;
                var3 = 'pendingBio';
                var2[2] = var4;
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var4)(var1);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var4['USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES'] = var13;
    var4['USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES'] = var12;
    var4['USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES'] = var11;
    var11 = function handleResetPendingLegacyUsernameDisabled() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = _closure1_slot13;
            var1 = _closure1_slot7;
            var4 = var3[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0015_ip = 38; continue _fun0015 }
case 23:
            var4 = {};
case 38:
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0015_ip = 39; continue _fun0015 }
case 40:
            var3 = var4.pendingLegacyUsernameDisabled;
case 39:
            if(!(var1 !== var3)) { _fun0015_ip = 41; continue _fun0015 }
case 42:
            var4 = _closure1_slot13;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var4[var3];
            var7 = var2;
            var5 = copyDataProperties(var7, var6);
            var5 = 'pendingLegacyUsernameDisabled';
            var2[4] = var1;
            var4[var3] = var2;
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED'] = var11;
    var11 = function handleResetPendingPrimaryGuildChanges() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = _closure1_slot13;
            var1 = _closure1_slot7;
            var4 = var3[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0016_ip = 38; continue _fun0016 }
case 23:
            var4 = {};
case 38:
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0016_ip = 39; continue _fun0016 }
case 40:
            var3 = var4.pendingPrimaryGuildId;
case 39:
            if(!(var1 !== var3)) { _fun0016_ip = 41; continue _fun0016 }
case 42:
            var4 = _closure1_slot13;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var4[var3];
            var7 = var2;
            var5 = copyDataProperties(var7, var6);
            var5 = 'pendingPrimaryGuildId';
            var2[4] = var1;
            var4[var3] = var2;
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var4['USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES'] = var11;
    var10 = function handleProfileUpdateFailure(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var9 = var1.errors;
            var1 = _closure1_slot6;
            var1 = var1.OPEN;
            _closure1_slot16 = var1;
            var2 = _closure1_slot17;
            var5 = null;
            if(!(var5 == var3)) { _fun0017_ip = 43; continue _fun0017 }
case 44:
            var3 = _closure1_slot7;
case 43:
            var1 = global;
            var7 = var1.Object;
            var6 = var7.fromEntries;
            var8 = var1.Object;
            var1 = var8.entries;
            var9 = var1.bind(var8)(var9);
            var8 = var9.map;
            var1 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0018_ip = 35; continue _fun0018 }
case 36:
                    var2 = var3;
case 35:
                    var3 = undefined;
                    if(var4) { _fun0018_ip = 26; continue _fun0018 }
case 11:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0018_ip = 26; continue _fun0018 }
case 7:
                    var3 = var6;
                    var4 = var5;
case 26:
                    if(var4) { _fun0018_ip = 30; continue _fun0018 }
case 37:
                    var1.return();
case 30:
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
            if(!(var5 == var1)) { _fun0017_ip = 45; continue _fun0017 }
case 46:
            var1 = _closure1_slot11;
case 45:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['USER_PROFILE_UPDATE_FAILURE'] = var10;
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var24 = var5;
    var22 = var4;
    var4 = new var24[var9](var23, var22, var21);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/UserProfileSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['IGNORE_GUILD_IDS'] = var2;
    return var1;
})();