// app/records/UserRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.LOCAL_BOT_ID;
    var _closure1_slot9 = var8;
    var8 = var5.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = var8;
    var8 = var5.PREMIUM_TYPE_NONE;
    var _closure1_slot11 = var8;
    var5 = var5.UserFlags;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SKU_ID_PURCHASED_FLAGS;
    var _closure1_slot13 = var8;
    var8 = var5.PremiumTypes;
    var _closure1_slot14 = var8;
    var5 = var5.PurchasedFlags;
    var _closure1_slot15 = var5;
    var2 = function(arg1) {
        var4 = function UserRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var8 = arg1;
                var4 = this;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var12 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var4, var3);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var11 = var6.Reflect;
                var10 = var11.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var10.bind(var11)(var12, var6, var7);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['hasFlag'] = var2;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['isStaff'] = var2;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['isStaffPersonal'] = var2;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['hasAnyStaffLevel'] = var2;
                var6 = var8.premium_type;
                var2 = null;
                if(!(var2 == var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var6 = var8.premiumType;
case 9:
                var4 = var8.id;
                var1['id'] = var4;
                var7 = var8.username;
                var10 = var2 != var7;
                var4 = '';
                if(!var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = var7;
case 11:
                var1['username'] = var4;
                var4 = var8.discriminator;
                if(!(var2 == var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var4 = _closure1_slot10;
case 13:
                var1['discriminator'] = var4;
                var7 = var8.avatar;
                var10 = var2 != var7;
                var4 = null;
                if(!var10) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var4 = var7;
case 15:
                var1['avatar'] = var4;
                var4 = var8.avatar_decoration_data;
                if(!(var2 == var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var4 = var8.avatarDecorationData;
case 17:
                var1['avatarDecoration'] = var4;
                var7 = var8.email;
                var10 = var2 != var7;
                var4 = null;
                if(!var10) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var4 = var7;
case 19:
                var1['email'] = var4;
                var7 = var8.verified;
                var4 = var2 != var7;
                if(!var4) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var4 = var7;
case 21:
                var1['verified'] = var4;
                var7 = var8.bot;
                var4 = var2 != var7;
                if(!var4) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var4 = var7;
case 23:
                var1['bot'] = var4;
                var7 = var8.system;
                var4 = var2 != var7;
                if(!var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var4 = var7;
case 25:
                var1['system'] = var4;
                var7 = var8.mfa_enabled;
                if(!(var2 == var7)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var7 = var8.mfaEnabled;
case 27:
                var4 = var2 != var7;
                if(!var4) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var4 = var7;
case 29:
                var1['mfaEnabled'] = var4;
                var7 = var8.mobile;
                var4 = var2 != var7;
                if(!var4) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var4 = var7;
case 31:
                var1['mobile'] = var4;
                var7 = var8.desktop;
                var4 = var2 != var7;
                if(!var4) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var4 = var7;
case 33:
                var1['desktop'] = var4;
                var7 = _closure1_slot11;
                var4 = null;
                if(!(var6 !== var7)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var4 = var6;
case 35:
                var1['premiumType'] = var4;
                var7 = var8.flags;
                var10 = var2 != var7;
                var4 = 0;
                var6 = 0;
                if(!var10) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var6 = var7;
case 37:
                var1['flags'] = var6;
                var7 = var8.public_flags;
                if(!(var2 == var7)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                var7 = var8.publicFlags;
case 39:
                var10 = var2 != var7;
                var6 = 0;
                if(!var10) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var6 = var7;
case 41:
                var1['publicFlags'] = var6;
                var7 = var8.purchased_flags;
                if(!(var2 == var7)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var7 = var8.purchasedFlags;
case 43:
                var10 = var2 != var7;
                var6 = 0;
                if(!var10) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var6 = var7;
case 45:
                var1['purchasedFlags'] = var6;
                var7 = var8.premium_usage_flags;
                if(!(var2 == var7)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var7 = var8.premiumUsageFlags;
case 47:
                var10 = var2 != var7;
                var6 = 0;
                if(!var10) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                var6 = var7;
case 49:
                var1['premiumUsageFlags'] = var6;
                var7 = var8.phone;
                var10 = var2 != var7;
                var6 = null;
                if(!var10) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                var6 = var7;
case 51:
                var1['phone'] = var6;
                var6 = var8.nsfw_allowed;
                if(!(var2 == var6)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var6 = var8.nsfwAllowed;
case 53:
                var1['nsfwAllowed'] = var6;
                var6 = var8.age_verification_status;
                if(!(var2 == var6)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                var6 = var8.ageVerificationStatus;
case 55:
                var1['ageVerificationStatus'] = var6;
                var6 = var8.guildMemberAvatars;
                if(!(var2 == var6)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                var6 = {};
case 57:
                var1['guildMemberAvatars'] = var6;
                var7 = var8.has_bounced_email;
                if(!(var2 == var7)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                var7 = var8.hasBouncedEmail;
case 59:
                var6 = var2 != var7;
                if(!var6) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                var6 = var7;
case 61:
                var1['hasBouncedEmail'] = var6;
                var7 = var8.personal_connection_id;
                if(!(var2 == var7)) { _fun0002_ip = 63; continue _fun0002 }
case 64:
                var7 = var8.personalConnectionId;
case 63:
                var10 = var2 != var7;
                var6 = null;
                if(!var10) { _fun0002_ip = 65; continue _fun0002 }
case 66:
                var6 = var7;
case 65:
                var1['personalConnectionId'] = var6;
                var6 = var8.global_name;
                if(!(var2 == var6)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
                var6 = var8.globalName;
case 67:
                var1['globalName'] = var6;
                var6 = var8.banner;
                var1['banner'] = var6;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 8;
                var6 = var10[var6];
                var10 = var7.bind(var3)(var6);
                var7 = var10.ensureUserPrimaryGuild;
                var11 = var8.primary_guild;
                if(!(var2 == var11)) { _fun0002_ip = 69; continue _fun0002 }
case 70:
                var11 = var8.primaryGuild;
case 69:
                var12 = var2 != var11;
                var6 = null;
                if(!var12) { _fun0002_ip = 71; continue _fun0002 }
case 72:
                var6 = var11;
case 71:
                var6 = var7.bind(var10)(var6);
                var1['primaryGuild'] = var6;
                var6 = var8.collectibles;
                var1['collectibles'] = var6;
                var6 = var8.displayNameStyles;
                if(!(var2 == var6)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 9;
                var7 = var11[var7];
                var11 = var10.bind(var3)(var7);
                var10 = var11.parseServerDisplayNameStyles;
                var7 = var8.display_name_styles;
                var6 = var10.bind(var11)(var7);
case 73:
                var1['displayNameStyles'] = var6;
                var6 = var8.premiumState;
                if(!(var2 == var6)) { _fun0002_ip = 75; continue _fun0002 }
case 76:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 10;
                var7 = var11[var7];
                var11 = var10.bind(var3)(var7);
                var10 = var11.parseServerPremiumState;
                var7 = var8.premium_state;
                var6 = var10.bind(var11)(var7);
case 75:
                var1['premiumState'] = var6;
                var7 = var8.perks;
                var10 = var2 == var7;
                var6 = undefined;
                if(var10) { _fun0002_ip = 77; continue _fun0002 }
case 78:
                var6 = var7.activePerksBitmask;
case 77:
                if(!(var2 == var6)) { _fun0002_ip = 79; continue _fun0002 }
case 80:
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 11;
                var6 = var10[var6];
                var10 = var7.bind(var3)(var6);
                var7 = var10.parseServerPerks;
                var6 = var8.perks;
                var6 = var7.bind(var10)(var6);
                _fun0002_ip = 81; continue _fun0002;
case 79:
                var6 = var8.perks;
case 81:
                var1['perks'] = var6;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 12;
                var6 = var10[var6];
                var10 = var7.bind(var3)(var6);
                var7 = var10.ensureRestrictedScheduleRecord;
                var6 = var8.restricted_schedule;
                if(!(var2 == var6)) { _fun0002_ip = 82; continue _fun0002 }
case 83:
                var6 = var8.restrictedSchedule;
case 82:
                var6 = var7.bind(var10)(var6);
                var1['restrictedSchedule'] = var6;
                var7 = var8.appTransactionIds;
                if(!(var2 == var7)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
                var7 = var8.app_transaction_ids;
case 84:
                var10 = var2 != var7;
                var6 = null;
                if(!var10) { _fun0002_ip = 86; continue _fun0002 }
case 87:
                var6 = var7;
case 86:
                var1['appTransactionIds'] = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 13;
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.parseStoreCountry;
                var5 = var8.store_country;
                if(!(var2 == var5)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
                var5 = var8.storeCountry;
case 88:
                var5 = var6.bind(var7)(var5);
                var1['storeCountry'] = var5;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.defineProperties;
                var5 = {};
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var10 = function value(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var1 = 1073741824;
                        if(!(!(var2 <= var1))) { _fun0003_ip = 90; continue _fun0003 }
case 91:
                        var9 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var1 = 14;
                        var3 = var10[var1];
                        var6 = undefined;
                        var7 = var9.bind(var6)(var3);
                        var5 = var7.deserialize;
                        var3 = _closure3_slot0;
                        var4 = var3.flags;
                        var8 = var5.bind(var7)(var4);
                        var4 = var10[var1];
                        var5 = var9.bind(var6)(var4);
                        var4 = var5.deserialize;
                        var3 = var3.publicFlags;
                        var7 = var4.bind(var5)(var3);
                        var3 = var10[var1];
                        var4 = var9.bind(var6)(var3);
                        var3 = var4.deserialize;
                        var5 = var3.bind(var4)(var2);
                        var3 = var10[var1];
                        var4 = var9.bind(var6)(var3);
                        var3 = var4.has;
                        var1 = var10[var1];
                        var6 = var9.bind(var6)(var1);
                        var1 = var6.combine;
                        var1 = var1.bind(var6)(var8, var7);
                        var1 = var3.bind(var4)(var1, var5);
                        return var1;
case 90:
                        var1 = _closure3_slot0;
                        var3 = var1.flags;
                        var1 = var1.publicFlags;
                        var1 = var3 | var1;
                        var1 = var1 & var2;
                        var1 = var1 === var2;
                        return var1;
                    }
                };
                var8['value'] = var10;
                var5['hasFlag'] = var8;
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var10 = function value() {
                    var3 = _closure3_slot0;
                    var2 = var3.hasFlag;
                    var1 = _closure1_slot12;
                    var1 = var1.STAFF;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8['value'] = var10;
                var5['isStaff'] = var8;
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var10 = function value() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.hasFlag;
                        var1 = _closure1_slot12;
                        var1 = var1.STAFF;
                        var1 = var3.bind(var4)(var1);
                        var1 = !var1;
                        if(!var1) { _fun0004_ip = 92; continue _fun0004 }
case 93:
                        var2 = _closure3_slot0;
                        var3 = var2.personalConnectionId;
                        var2 = null;
                        var1 = var2 != var3;
case 92:
                        return var1;
                    }
                };
                var8['value'] = var10;
                var5['isStaffPersonal'] = var8;
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var9 = function value() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var5 = _closure3_slot0;
                        var4 = var5.hasFlag;
                        var1 = _closure1_slot12;
                        var1 = var1.STAFF;
                        var1 = var4.bind(var5)(var1);
                        if(var1) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                        var6 = _closure3_slot0;
                        var5 = var6.hasFlag;
                        var4 = _closure1_slot12;
                        var4 = var4.COLLABORATOR;
                        var1 = var5.bind(var6)(var4);
case 94:
                        if(var1) { _fun0005_ip = 96; continue _fun0005 }
case 97:
                        var4 = _closure3_slot0;
                        var3 = var4.hasFlag;
                        var2 = _closure1_slot12;
                        var2 = var2.RESTRICTED_COLLABORATOR;
                        var1 = var3.bind(var4)(var2);
case 96:
                        return var1;
                    }
                };
                var8['value'] = var9;
                var5['hasAnyStaffLevel'] = var8;
                var5 = var6.bind(var7)(var1, var5);
                var5 = var1.globalName;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0002_ip = 98; continue _fun0002 }
case 99:
                var3 = var5.length;
case 98:
                if(!(var4 === var3)) { _fun0002_ip = 100; continue _fun0002 }
case 101:
                var1['globalName'] = var2;
case 100:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'createdAt';
        var5['key'] = var1;
        var1 = function get() {
            var1 = global;
            var3 = var1.Date;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.extractTimestamp;
            var1 = this;
            var1 = var1.id;
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(35);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasVerifiedEmailOrPhone';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var3 = var2.verified;
                var1 = true;
                var1 = var1 === var3;
                if(var1) { _fun0006_ip = 102; continue _fun0006 }
case 103:
                var3 = var2.phone;
                var2 = null;
                var1 = var2 != var3;
case 102:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAvatarURL';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var10 = arg1;
                var6 = arg2;
                var7 = arguments[2];
                var5 = arguments[3];
                var8 = this;
                var4 = undefined;
                if(!(var7 === var4)) { _fun0007_ip = 104; continue _fun0007 }
case 105:
                var7 = false;
case 104:
                if(!(var5 === var4)) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 16;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var5 = var1.SUPPORTS_WEBP;
case 106:
                var3 = null;
                var1 = var3 != var10;
                var9 = undefined;
                if(!var1) { _fun0007_ip = 108; continue _fun0007 }
case 6:
                var1 = var8.guildMemberAvatars;
                var9 = var1[var10];
case 108:
                if(!(var3 != var9)) { _fun0007_ip = 109; continue _fun0007 }
case 110:
                if(!(var3 == var10)) { _fun0007_ip = 111; continue _fun0007 }
case 109:
                var2 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 16;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getUserAvatarURL;
                var17 = var2;
                var16 = var8;
                var15 = var7;
                var14 = var6;
                var13 = null;
                var12 = var5;
                var1 = var17[var1](var16, var15, var14, var13, var12, var11);
                _fun0007_ip = 12; continue _fun0007;
case 111:
                var3 = _closure1_slot1;
                var11 = _closure1_slot3;
                var2 = 16;
                var2 = var11[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.getGuildMemberAvatarURLSimple;
                var2 = {};
                var2['guildId'] = var10;
                var2['avatar'] = var9;
                var8 = var8.id;
                var2['userId'] = var8;
                var2['canAnimate'] = var7;
                var2['size'] = var6;
                var2['canWebP'] = var5;
                var1 = var3.bind(var4)(var2);
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'addGuildAvatarHash';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var1 = this;
                var4 = var1.guildMemberAvatars;
                var4 = var4[var3];
                if(!(var4 !== var2)) { _fun0008_ip = 112; continue _fun0008 }
case 104:
                var4 = {};
                var6 = var1.guildMemberAvatars;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var4[2] = var2;
                var3 = var1.merge;
                var2 = {};
                var2['guildMemberAvatars'] = var4;
                var2 = var3.bind(var1)(var2);
                return var2;
case 112:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'removeGuildAvatarHash';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.guildMemberAvatars;
                var4 = var2[var3];
                var2 = undefined;
                if(!(var2 !== var4)) { _fun0009_ip = 97; continue _fun0009 }
case 113:
                var4 = {};
                var6 = var1.guildMemberAvatars;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var4[2] = var2;
                var3 = var1.merge;
                var2 = {};
                var2['guildMemberAvatars'] = var4;
                var2 = var3.bind(var1)(var2);
                return var2;
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAvatarSource';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var4 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var6;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0010_ip = 107; continue _fun0010 }
case 114:
                var4 = false;
case 107:
                var3 = arguments[2];
                var _closure3_slot2 = var3;
                var _closure3_slot3 = var5;
                var3 = null;
                if(!(var3 != var6)) { _fun0010_ip = 97; continue _fun0010 }
case 115:
                var2 = var2.guildMemberAvatars;
                var2 = var2[var6];
                _closure3_slot3 = var2;
                if(!(var3 == var2)) { _fun0010_ip = 116; continue _fun0010 }
case 97:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 16;
                var2 = var6[var2];
                var6 = var3.bind(var5)(var2);
                var3 = var6.getAnimatableSourceWithFallback;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getUserAvatarSource;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot2;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                };
                var2 = var3.bind(var6)(var4, var2);
                return var2;
case 116:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 16;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getAnimatableSourceWithFallback;
                var1 = function(arg1) {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var2);
                    var2 = var3.makeSource;
                    var1 = var6[var1];
                    var5 = var5.bind(var4)(var1);
                    var4 = var5.getGuildMemberAvatarURLSimple;
                    var1 = {};
                    var7 = _closure3_slot1;
                    var1['guildId'] = var7;
                    var7 = _closure3_slot3;
                    var1['avatar'] = var7;
                    var7 = _closure3_slot0;
                    var7 = var7.id;
                    var1['userId'] = var7;
                    var7 = arg1;
                    var1['canAnimate'] = var7;
                    var6 = _closure3_slot2;
                    var1['size'] = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isClaimed';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2.email;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0011_ip = 117; continue _fun0011 }
case 103:
                var2 = var2.phone;
                var1 = var3 != var2;
case 117:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isPhoneVerified';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.phone;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'toString';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var4 = var2.username;
                var1 = '???';
                var3 = '';
                if(!(var3 !== var4)) { _fun0012_ip = 118; continue _fun0012 }
case 104:
                var1 = var2.username;
case 118:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'tag';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var5 = var1.username;
            var3 = var1.discriminator;
            var1 = global;
            var2 = var1.HermesInternal;
            var2 = var2.concat;
            var4 = '';
            var7 = var2.bind(var4)(var3);
            var6 = var7.padStart;
            var3 = 4;
            var2 = '0';
            var3 = var6.bind(var7)(var3, var2);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '#';
            var1 = var2.bind(var4)(var5, var1, var3);
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'hasPurchasedFlag';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.purchasedFlags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'hasPremiumUsageFlag';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.premiumUsageFlags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasHadSKU';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = this;
                var2 = _closure1_slot13;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0013_ip = 93; continue _fun0013 }
case 119:
                var2 = var4.hasPurchasedFlag;
                var1 = var2.bind(var4)(var3);
case 93:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasHadPremium';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arguments[0];
                var7 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0014_ip = 120; continue _fun0014 }
case 121:
                var5 = null;
case 120:
                var2 = var7.hasPurchasedFlag;
                var3 = _closure1_slot15;
                var1 = var3.PREMIUM_TIER_0;
                var1 = var2.bind(var7)(var1);
                var6 = var7.hasPurchasedFlag;
                var2 = var3.PREMIUM_TIER_1;
                var2 = var6.bind(var7)(var2);
                var6 = var7.hasPurchasedFlag;
                var3 = var3.PREMIUM_TIER_2;
                var3 = var6.bind(var7)(var3);
                var6 = _closure1_slot14;
                var6 = var6.TIER_0;
                if(!(var6 !== var5)) { _fun0014_ip = 122; continue _fun0014 }
case 123:
                var6 = _closure1_slot14;
                var6 = var6.TIER_1;
                if(!(var6 !== var5)) { _fun0014_ip = 124; continue _fun0014 }
case 125:
                var4 = _closure1_slot14;
                var4 = var4.TIER_2;
                if(!(var4 !== var5)) { _fun0014_ip = 126; continue _fun0014 }
case 127:
                var4 = var1;
                if(var4) { _fun0014_ip = 128; continue _fun0014 }
case 129:
                var4 = var2;
case 128:
                if(var4) { _fun0014_ip = 130; continue _fun0014 }
case 131:
                var4 = var3;
case 130:
                return var4;
case 126:
                return var3;
case 124:
                return var2;
case 122:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hadPremiumSubscription';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arguments[0];
                var3 = this;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0015_ip = 120; continue _fun0015 }
case 121:
                var4 = null;
case 120:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 18;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.isPremium;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                if(!var1) { _fun0015_ip = 132; continue _fun0015 }
case 7:
                var2 = var3.hasHadPremium;
                var1 = var2.bind(var3)(var4);
case 132:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'hasFreePremium';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = this;
                var1 = var3.isStaff;
                var1 = var1.bind(var3)();
                if(var1) { _fun0016_ip = 133; continue _fun0016 }
case 91:
                var4 = var3.hasFlag;
                var2 = _closure1_slot12;
                var2 = var2.PARTNER;
                var1 = var4.bind(var3)(var2);
case 133:
                if(var1) { _fun0016_ip = 92; continue _fun0016 }
case 134:
                var2 = var3.isStaffPersonal;
                var1 = var2.bind(var3)();
case 92:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isOnReverseTrial';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = var4.isPremium;
                var1 = var1.bind(var4)(var3);
                if(!var1) { _fun0017_ip = 135; continue _fun0017 }
case 136:
                var4 = var3.premiumState;
                var3 = null;
                var6 = var3 == var4;
                var3 = undefined;
                if(var6) { _fun0017_ip = 132; continue _fun0017 }
case 94:
                var3 = var4.premiumSource;
case 132:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PremiumSource;
                var2 = var2.REVERSE_TRIAL;
                var1 = var3 === var2;
case 135:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isPremiumWithPremiumGroup';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.isPremium;
                var1 = _closure1_slot14;
                var1 = var1.TIER_2;
                var1 = var4.bind(var6)(var3, var1);
                if(!var1) { _fun0018_ip = 137; continue _fun0018 }
case 92:
                var4 = var3.premiumState;
                var3 = null;
                var6 = var3 == var4;
                var3 = undefined;
                if(var6) { _fun0018_ip = 138; continue _fun0018 }
case 3:
                var3 = var4.premiumSource;
case 138:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PremiumSource;
                var2 = var2.SUBSCRIPTION_GROUP;
                var1 = var3 === var2;
case 137:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'hasPaidTier2Subscription';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.isPremium;
                var1 = _closure1_slot14;
                var1 = var1.TIER_2;
                var1 = var4.bind(var6)(var3, var1);
                if(!var1) { _fun0019_ip = 137; continue _fun0019 }
case 92:
                var4 = var3.premiumState;
                var3 = null;
                var6 = var3 == var4;
                var3 = undefined;
                if(var6) { _fun0019_ip = 138; continue _fun0019 }
case 3:
                var3 = var4.premiumSubscriptionType;
case 138:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PremiumSubscriptionType;
                var2 = var2.TIER_2;
                var1 = var3 === var2;
case 137:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isPremiumWithFractionalPremiumOnly';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.isPremium;
                var1 = _closure1_slot14;
                var1 = var1.TIER_2;
                var1 = var4.bind(var6)(var3, var1);
                if(!var1) { _fun0020_ip = 139; continue _fun0020 }
case 92:
                var4 = var3.premiumState;
                var7 = null;
                var8 = var7 == var4;
                var6 = undefined;
                if(var8) { _fun0020_ip = 138; continue _fun0020 }
case 3:
                var6 = var4.premiumSubscriptionType;
case 138:
                var8 = _closure1_slot0;
                var4 = _closure1_slot3;
                var9 = 19;
                var4 = var4[var9];
                var4 = var8.bind(var5)(var4);
                var4 = var4.PremiumSubscriptionType;
                var4 = var4.NONE_UNSPECIFIED;
                var4 = var6 === var4;
                if(var4) { _fun0020_ip = 140; continue _fun0020 }
case 141:
                var6 = var3.premiumState;
                var8 = var7 == var6;
                var7 = undefined;
                if(var8) { _fun0020_ip = 142; continue _fun0020 }
case 143:
                var7 = var6.premiumSubscriptionType;
case 142:
                var8 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var8.bind(var5)(var6);
                var6 = var6.PremiumSubscriptionType;
                var6 = var6.BOOST_ONLY;
                var4 = var7 === var6;
case 140:
                var1 = var4;
case 139:
                if(!var1) { _fun0020_ip = 144; continue _fun0020 }
case 145:
                var4 = var3.premiumState;
                var3 = null;
                var6 = var3 == var4;
                var3 = undefined;
                if(var6) { _fun0020_ip = 146; continue _fun0020 }
case 147:
                var3 = var4.premiumSource;
case 146:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PremiumSource;
                var2 = var2.FRACTIONAL_NITRO;
                var1 = var3 === var2;
case 144:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isFractionalPremiumWithNoStandardSub';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.isPremium;
                var1 = _closure1_slot14;
                var1 = var1.TIER_2;
                var1 = var4.bind(var6)(var3, var1);
                if(!var1) { _fun0021_ip = 137; continue _fun0021 }
case 92:
                var4 = var3.premiumState;
                var6 = null;
                var7 = var6 == var4;
                var6 = undefined;
                if(var7) { _fun0021_ip = 138; continue _fun0021 }
case 3:
                var6 = var4.premiumSource;
case 138:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var4 = 19;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var4 = var4.PremiumSource;
                var4 = var4.FRACTIONAL_NITRO;
                var1 = var6 === var4;
case 137:
                if(!var1) { _fun0021_ip = 148; continue _fun0021 }
case 141:
                var3 = var3.premiumState;
                var3 = var3.premiumSubscriptionType;
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PremiumSubscriptionType;
                var2 = var2.TIER_2;
                var1 = var3 !== var2;
case 148:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isFractionalPremium';
        var5['key'] = var7;
        var7 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.isPremium;
                var1 = _closure1_slot14;
                var1 = var1.TIER_2;
                var1 = var4.bind(var6)(var3, var1);
                if(!var1) { _fun0022_ip = 137; continue _fun0022 }
case 92:
                var4 = var3.premiumState;
                var3 = null;
                var6 = var3 == var4;
                var3 = undefined;
                if(var6) { _fun0022_ip = 138; continue _fun0022 }
case 3:
                var3 = var4.premiumSource;
case 138:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PremiumSource;
                var2 = var2.FRACTIONAL_NITRO;
                var1 = var3 === var2;
case 137:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'hasUrgentMessages';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot12;
            var1 = var1.HAS_UNREAD_URGENT_MESSAGES;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isNonUserBot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = this;
                var1 = var3.isSystemUser;
                var1 = var1.bind(var3)();
                if(var1) { _fun0023_ip = 149; continue _fun0023 }
case 91:
                var2 = var3.bot;
                if(!var2) { _fun0023_ip = 136; continue _fun0023 }
case 114:
                var4 = var3.discriminator;
                var3 = _closure1_slot10;
                var2 = var4 === var3;
case 136:
                var1 = var2;
case 149:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'isLocalBot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = this;
                var1 = var2.bot;
                if(!var1) { _fun0024_ip = 117; continue _fun0024 }
case 121:
                var3 = var2.id;
                var2 = _closure1_slot9;
                var1 = var3 === var2;
case 117:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'isVerifiedBot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = this;
                var1 = var4.isSystemUser;
                var1 = var1.bind(var4)();
                if(var1) { _fun0025_ip = 117; continue _fun0025 }
case 91:
                var2 = var4.isLocalBot;
                var1 = var2.bind(var4)();
case 117:
                if(var1) { _fun0025_ip = 150; continue _fun0025 }
case 151:
                var3 = var4.hasFlag;
                var2 = _closure1_slot12;
                var2 = var2.VERIFIED_BOT;
                var1 = var3.bind(var4)(var2);
case 150:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'isSystemUser';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.system;
            var1 = true;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'hasAvatarForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0026_ip = 118; continue _fun0026 }
case 121:
                var2 = this;
                var2 = var2.guildMemberAvatars;
                var2 = var2[var4];
                var1 = var3 != var2;
case 118:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'hasUniqueUsername';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.discriminator;
            var1 = '0';
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'isPremiumGroupMember';
        var5['key'] = var7;
        var7 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var2 = this;
                var1 = var2.isPremiumWithPremiumGroup;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0027_ip = 112; continue _fun0027 }
case 91:
                var3 = var2.premiumGroupRole;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 19;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.PremiumSubscriptionGroupRole;
                var2 = var2.MEMBER;
                var1 = var3 === var2;
case 112:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'isPremiumGroupPrimary';
        var5['key'] = var7;
        var7 = function value() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var2 = this;
                var1 = var2.isPremiumWithPremiumGroup;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0028_ip = 112; continue _fun0028 }
case 91:
                var3 = var2.premiumGroupRole;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 19;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.PremiumSubscriptionGroupRole;
                var2 = var2.PRIMARY;
                var1 = var3 === var2;
case 112:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'isProvisional';
        var5['key'] = var7;
        var7 = function get() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot12;
            var1 = var1.PROVISIONAL_ACCOUNT;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'avatarDecoration';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1.avatarDecorationData;
            return var1;
        };
        var5['get'] = var7;
        var7 = function set(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.parseAvatarDecorationData;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = this;
            var2['avatarDecorationData'] = var3;
            return var1;
        };
        var5['set'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'nameplate';
        var5['key'] = var7;
        var7 = function get() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getNameplateData;
                var4 = this;
                var4 = var4.collectibles;
                var5 = null;
                var5 = var5 == var4;
                if(var5) { _fun0029_ip = 150; continue _fun0029 }
case 152:
                var1 = var4.nameplate;
case 150:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['get'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'premiumGroupRole';
        var5['key'] = var7;
        var6 = function get() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var1 = this;
                var3 = var1.premiumState;
                var2 = null;
                var5 = var2 == var3;
                var4 = undefined;
                var1 = undefined;
                if(var5) { _fun0030_ip = 117; continue _fun0030 }
case 113:
                var1 = var3.premiumSubscriptionGroupRole;
case 117:
                if(!(var2 == var1)) { _fun0030_ip = 6; continue _fun0030 }
case 153:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 19;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.PremiumSubscriptionGroupRole;
                var1 = var2.UNSPECIFIED;
case 6:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[34] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var2.bind(var1)(var4);
    var2 = {};
    var5 = '0';
    var2['id'] = var5;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var12 = var2;
    var2 = new var13[var4](var12, var11);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 22;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'records/UserRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PLACEHOLDER_USER_RECORD'] = var2;
    return var1;
})();