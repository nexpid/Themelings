// app/modules/age_gate/AgeGateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var18;
    var1 = function getLargeGuildUnderageContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 7;
            var6 = var4[var8];
            var7 = undefined;
            var6 = var5.bind(var7)(var6);
            var9 = var6.intl;
            var6 = var9.string;
            var4 = var4[var8];
            var4 = var5.bind(var7)(var4);
            var5 = var4.t;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.SxY4IS;
            var4 = var6.bind(var9)(var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = var5.lSgO/v;
            var4 = var6.bind(var9)(var5);
case 4:
            var1['description'] = var4;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = var3[var8];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3.5B+npK;
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var3 = var3.PBG51t;
            var2 = var4.bind(var5)(var3);
case 7:
            var1['agreement'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var14 = function shouldShowReverifyForLargeGuildId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var6 = null;
            var1 = var6 != var5;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var5 = var2.bind(var3)(var5);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var3 = undefined;
            var10 = var8.bind(var3)(var2);
            var7 = var10.isAgeVerificationLargeServersEnabled;
            var2 = 'age_verification_utils';
            var2 = var7.bind(var10)(var2);
            var7 = 10;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.isVerifiedTeen;
            var7 = var7.bind(var8)();
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var7;
case 10:
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var6 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var5.features;
            var5 = var6.has;
            var4 = _closure1_slot9;
            var4 = var4.AGE_VERIFICATION_LARGE_GUILD;
            var3 = var5.bind(var6)(var4);
case 14:
            var2 = var3;
case 12:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot20 = var14;
    var13 = function shouldShowAgeVerificationForLargeGuildId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = _closure1_slot22;
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var3 = var2.bind(var3)(var5);
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 16:
            return var1;
        }
    };
    var _closure1_slot21 = var13;
    var1 = function shouldShowAgeVerificationForLargeGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 17:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.isAgeVerificationLargeServersEnabled;
            var3 = 'age_verification_utils';
            var1 = var4.bind(var5)(var3);
case 18:
            if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.shouldShowTiggerPawtect;
            var1 = var3.bind(var4)();
case 19:
            if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot9;
            var2 = var2.AGE_VERIFICATION_LARGE_GUILD;
            var1 = var3.bind(var4)(var2);
case 20:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function useShouldShowAgeVerificationForLargeGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var3);
            var5 = var8.useStateFromStores;
            var9 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var8)(var3, var1);
            var1 = 9;
            var1 = var7[var1];
            var8 = var6.bind(var4)(var1);
            var5 = var8.useIsAgeVerificationLargeServersEnabled;
            var1 = 'age_verification_utils';
            var5 = var5.bind(var8)(var1);
            var1 = 10;
            var1 = var7[var1];
            var4 = var6.bind(var4)(var1);
            var1 = var4.useShouldShowTiggerPawtect;
            var4 = var1.bind(var4)();
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var1 = var5;
case 22:
            if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 24:
            var1 = var4;
case 6:
            if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var4 = var3.features;
            var3 = var4.has;
            var2 = _closure1_slot9;
            var2 = var2.AGE_VERIFICATION_LARGE_GUILD;
            var1 = var3.bind(var4)(var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var12 = function shouldAgeVerifyForAgeGate() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var1);
            var1 = var2.isEligibleForSettingsDefaultsAggregate;
            var7 = 'age-gate-utils';
            var1 = var1.bind(var2)(var7);
            var2 = 9;
            var2 = var6[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.isAgeVerificationLargeServersEnabled;
            var3 = var2.bind(var3)(var7);
            var2 = 10;
            var2 = var6[var2];
            var4 = var5.bind(var4)(var2);
            var2 = var4.shouldShowTiggerPawtect;
            var2 = var2.bind(var4)();
            if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var1 = var3;
case 27:
            if(!var1) { _fun0006_ip = 10; continue _fun0006 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot24 = var12;
    var11 = function useShouldAgeVerifyForAgeGate() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var4 = undefined;
            var2 = var6.bind(var4)(var1);
            var1 = var2.useIsEligibleForSettingsDefaultsAggregate;
            var5 = 'age-gate-utils';
            var1 = var1.bind(var2)(var5);
            var2 = 10;
            var2 = var7[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useShouldShowTiggerPawtect;
            var2 = var2.bind(var3)();
            var3 = 9;
            var3 = var7[var3];
            var4 = var6.bind(var4)(var3);
            var3 = var4.useIsAgeVerificationLargeServersEnabled;
            var3 = var3.bind(var4)(var5);
            if(var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var1 = var3;
case 27:
            if(!var1) { _fun0007_ip = 10; continue _fun0007 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot25 = var11;
    var5 = function isChannelContentGated(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 29; continue _fun0008 }
case 17:
            var6 = _closure1_slot5;
            var5 = var6.didAgree;
            var4 = var2.guild_id;
            var5 = var5.bind(var6)(var4);
            var6 = _closure1_slot7;
            var4 = var6.getCurrentUser;
            var4 = var4.bind(var6)();
            var7 = var1 == var4;
            var6 = undefined;
            var9 = undefined;
            if(var7) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var9 = var4.nsfwAllowed;
case 30:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 12;
            var4 = var11[var4];
            var8 = var7.bind(var6)(var4);
            var4 = var8.isEligibleForSettingsDefaultsAggregate;
            var10 = 'age-gate-utils';
            var8 = var4.bind(var8)(var10);
            var4 = 10;
            var4 = var11[var4];
            var7 = var7.bind(var6)(var4);
            var4 = var7.shouldShowTiggerPawtect;
            var4 = var4.bind(var7)();
            if(!var5) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var7 = false;
            var7 = var7 === var9;
            var5 = !var7;
case 32:
            var7 = !var5;
            if(var7) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var5 = var4;
            if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var5 = var8;
case 36:
            var7 = var5;
case 34:
            var5 = var2.isNSFW;
            var5 = var5.bind(var2)();
            if(!var5) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            if(var7) { _fun0008_ip = 40; continue _fun0008 }
case 38:
            var11 = var2.guild_id;
            var5 = _closure1_slot6;
            var2 = var5.getGuild;
            var5 = var2.bind(var5)(var11);
            var1 = var1 != var5;
            if(!var1) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var9 = var8.bind(var6)(var2);
            var8 = var9.isEligibleForGuildContentLevelSetting;
            var2 = {};
            var2['guildId'] = var11;
            var2['location'] = var10;
            var2 = var8.bind(var9)(var2);
            if(!var2) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var8 = _closure1_slot3;
            var2 = var8.bind(var6)(var5);
case 43:
            if(!var2) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var2 = var7;
case 45:
            if(var2) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var3 = _closure1_slot22;
            var3 = var3.bind(var6)(var5);
            if(!var3) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var3 = var4;
case 49:
            var2 = var3;
case 47:
            var1 = var2;
case 41:
            return var1;
case 40:
            var1 = true;
            return var1;
case 29:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot26 = var5;
    var2 = function isCurrentUserMissingDateOfBirth() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var2 = var2.nsfwAllowed;
            var1 = var3 == var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot27 = var2;
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var18[var1];
    var1 = undefined;
    var7 = var17.bind(var1)(var7);
    var7 = var7.isGuildNSFW;
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var18[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var18[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var18[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var18[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var18[var7];
    var7 = var17.bind(var1)(var7);
    var7 = var7.AgeGateSource;
    var _closure1_slot8 = var7;
    var8 = 6;
    var8 = var18[var8];
    var8 = var17.bind(var1)(var8);
    var9 = var8.GuildFeatures;
    var _closure1_slot9 = var9;
    var9 = var8.GuildNSFWContentLevel;
    var8 = var8.HelpdeskArticles;
    var _closure1_slot10 = var8;
    var15 = var6.Date;
    var8 = var15.prototype;
    var10 = Object.create(var8, {constructor: {value: var15}});
    var21 = '06/16/2020';
    var22 = var10;
    var8 = new var22[var15](var21, var20);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot11 = var8;
    var10 = var9.AGE_RESTRICTED;
    var8 = new Array(2);
    var8[0] = var10;
    var9 = var9.EXPLICIT;
    var8[1] = var9;
    var _closure1_slot12 = var8;
    var8 = var6.Set;
    var9 = var7.NSFW_SERVER;
    var6 = new Array(3);
    var6[0] = var9;
    var9 = var7.NSFW_SERVER_INVITE;
    var6[1] = var9;
    var7 = var7.NSFW_SERVER_INVITE_EMBED;
    var6[2] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var22 = var7;
    var21 = var6;
    var6 = new var22[var8](var21, var20);
    var15 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot13 = var15;
    var10 = function shouldShowAgeGateForCurrentUser() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var1)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
            var3 = _closure1_slot24;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var3 = var1.nsfwAllowed;
            var1 = true;
            var1 = var1 !== var3;
            if(var1) { _fun0010_ip = 55; continue _fun0010 }
case 56:
            var1 = var2;
case 55:
            return var1;
case 53:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var10;
    var9 = function shouldShowAgeGateForGuildContentLevel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot14;
            var5 = undefined;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var1 = null;
            if(!(var1 != var6)) { _fun0011_ip = 57; continue _fun0011 }
case 52:
            var4 = _closure1_slot6;
            var2 = var4.getGuild;
            var4 = var2.bind(var4)(var6);
            var1 = var1 != var4;
            if(!var1) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            if(!var2) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.isEligibleForGuildContentLevelSetting;
            var3 = {};
            var3['guildId'] = var6;
            var6 = 'age-gate-utils';
            var3['location'] = var6;
            var2 = var4.bind(var5)(var3);
case 61:
            var1 = var2;
case 59:
            return var1;
case 57:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot15 = var9;
    var8 = function shouldShowAgeGateForChannelId(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot14;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var3 = !var1;
            if(var3) { _fun0012_ip = 63; continue _fun0012 }
case 54:
            var1 = null;
            var3 = var1 == var6;
case 63:
            var1 = !var3;
            if(var3) { _fun0012_ip = 3; continue _fun0012 }
case 64:
            var3 = _closure1_slot26;
            var5 = _closure1_slot4;
            var2 = var5.getChannel;
            var2 = var2.bind(var5)(var6);
            var1 = var3.bind(var4)(var2);
case 3:
            return var1;
        }
    };
    var _closure1_slot16 = var8;
    var7 = function shouldShowAgeGateForVoiceChannel(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = _closure1_slot24;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0013_ip = 63; continue _fun0013 }
case 65:
            var3 = _closure1_slot16;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
case 63:
            return var1;
        }
    };
    var _closure1_slot17 = var7;
    var6 = function isChannelOrGuildNSFW(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0014_ip = 66; continue _fun0014 }
case 17:
            var2 = var3.isNSFW;
            var2 = var2.bind(var3)();
            if(var2) { _fun0014_ip = 62; continue _fun0014 }
case 52:
            var5 = _closure1_slot3;
            var6 = _closure1_slot6;
            var4 = var6.getGuild;
            var3 = var3.guild_id;
            var4 = var4.bind(var6)(var3);
            var3 = undefined;
            var2 = var5.bind(var3)(var4);
case 62:
            var1 = var2;
case 66:
            return var1;
        }
    };
    var _closure1_slot18 = var6;
    var16 = 17;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/age_gate/AgeGateUtils.tsx';
    var16 = var17.bind(var18)(var16);
    var3['SERVER_AGE_GATE_SOURCES'] = var15;
    var15 = function userNeedsAgeGate() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0015_ip = 67; continue _fun0015 }
case 52:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 8;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.extractTimestamp;
            var5 = var2.id;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot11;
            var4 = var6.getTime;
            var4 = var4.bind(var6)();
            var1 = var5 > var4;
case 67:
            if(!var1) { _fun0015_ip = 68; continue _fun0015 }
case 69:
            var2 = var2.nsfwAllowed;
            var1 = var3 == var2;
case 68:
            return var1;
        }
    };
    var3['userNeedsAgeGate'] = var15;
    var15 = function guildNeedsAgeGate(arg1) {
        var3 = _closure1_slot12;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.nsfwLevel;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['guildNeedsAgeGate'] = var15;
    var3['shouldShowReverifyForLargeGuildId'] = var14;
    var3['shouldShowAgeVerificationForLargeGuildId'] = var13;
    var3['shouldAgeVerifyForAgeGate'] = var12;
    var3['useShouldAgeVerifyForAgeGate'] = var11;
    var11 = function useAgeGateVerifyContentForGuild(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var13 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var1 = var1[var6];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useIsAgeVerified;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot3;
            var7 = var1.bind(var4)(var13);
            var3 = _closure1_slot23;
            var11 = null;
            var8 = var11 == var13;
            var1 = undefined;
            if(var8) { _fun0016_ip = 70; continue _fun0016 }
case 71:
            var1 = var13.id;
case 70:
            var1 = var3.bind(var4)(var1);
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var3 = var8[var3];
            var14 = var12.bind(var4)(var3);
            var10 = var14.useStateFromStores;
            var3 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0017_ip = 72; continue _fun0017 }
case 73:
                    var2 = var1.nsfwAllowed;
case 72:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var9 = var10.bind(var14)(var9, var3);
            var3 = _closure1_slot25;
            var10 = var3.bind(var4)();
            var3 = 9;
            var3 = var8[var3];
            var15 = var12.bind(var4)(var3);
            var14 = var15.useIsAgeVerificationLargeServersEnabled;
            var3 = 'age_verification_utils';
            var3 = var14.bind(var15)(var3);
            var6 = var8[var6];
            var14 = var12.bind(var4)(var6);
            var6 = var14.useIsVerifiedTeen;
            var6 = var6.bind(var14)();
            if(!var3) { _fun0016_ip = 74; continue _fun0016 }
case 75:
            var3 = var6;
case 74:
            if(!var3) { _fun0016_ip = 76; continue _fun0016 }
case 77:
            var14 = var11 == var13;
            var6 = undefined;
            if(var14) { _fun0016_ip = 78; continue _fun0016 }
case 42:
            var15 = var13.features;
            var14 = var15.has;
            var13 = _closure1_slot9;
            var13 = var13.AGE_VERIFICATION_LARGE_GUILD;
            var6 = var14.bind(var15)(var13);
case 78:
            var3 = var6;
case 76:
            var6 = 7;
            var8 = var8[var6];
            var8 = var12.bind(var4)(var8);
            var13 = var8.intl;
            var12 = var13.string;
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var14.bind(var4)(var8);
            var14 = var8.t;
            if(var7) { _fun0016_ip = 79; continue _fun0016 }
case 80:
            var8 = var14.ZmwvDQ;
            _fun0016_ip = 81; continue _fun0016;
case 79:
            var8 = var14.xi46lp;
case 81:
            var8 = var12.bind(var13)(var8);
            if(var10) { _fun0016_ip = 82; continue _fun0016 }
case 83:
            var10 = {};
            if(var9) { _fun0016_ip = 84; continue _fun0016 }
case 85:
            var10['title'] = var8;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var12.bind(var4)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var14.bind(var4)(var9);
            var14 = var9.t;
            if(var7) { _fun0016_ip = 86; continue _fun0016 }
case 87:
            var9 = var14.E4Cd5O;
            _fun0016_ip = 88; continue _fun0016;
case 86:
            var9 = var14.ZtuRtr;
case 88:
            var9 = var12.bind(var13)(var9);
            var10['description'] = var9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = var13[var6];
            var9 = var12.bind(var4)(var9);
            var15 = var9.intl;
            var14 = var15.string;
            var9 = var13[var6];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.wVq7ur;
            var9 = var14.bind(var15)(var9);
            var10['agreement'] = var9;
            var9 = 13;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.NsfwSpaceWarningModalType;
            var9 = var9.NSFW_CHANNEL_VERIFIED;
            var10['modalType'] = var9;
            var9 = var10;
            _fun0016_ip = 89; continue _fun0016;
case 84:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var12 = var13.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.string;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var12 = var15.bind(var4)(var12);
            var15 = var12.t;
            if(var7) { _fun0016_ip = 90; continue _fun0016 }
case 91:
            var12 = var15.NEabBQ;
            _fun0016_ip = 92; continue _fun0016;
case 90:
            var12 = var15.H0SG/v;
case 92:
            var12 = var13.bind(var14)(var12);
            var10['title'] = var12;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var12 = var13.bind(var4)(var12);
            var16 = var12.intl;
            var15 = var16.format;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            if(var7) { _fun0016_ip = 93; continue _fun0016 }
case 94:
            var14 = var12.2kHZen;
            _fun0016_ip = 95; continue _fun0016;
case 93:
            var14 = var12.6++3cX;
case 95:
            var12 = {};
            var18 = _closure1_slot1;
            var13 = _closure1_slot2;
            var17 = 14;
            var17 = var13[var17];
            var19 = var18.bind(var4)(var17);
            var18 = var19.getArticleURL;
            var17 = _closure1_slot10;
            var17 = var17.NSFW_AGE_GATING;
            var17 = var18.bind(var19)(var17);
            var12['helpURL'] = var17;
            var12 = var15.bind(var16)(var14, var12);
            var10['description'] = var12;
            var10['agreement'] = var11;
            var12 = _closure1_slot0;
            var11 = 13;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.NsfwSpaceWarningModalType;
            var11 = var11.NSFW_CHANNEL_UNDERAGE;
            var10['modalType'] = var11;
            var9 = var10;
case 89:
            return var9;
case 82:
            if(var3) { _fun0016_ip = 96; continue _fun0016 }
case 97:
            var3 = {};
            if(var2) { _fun0016_ip = 98; continue _fun0016 }
case 99:
            if(var1) { _fun0016_ip = 100; continue _fun0016 }
case 101:
            var3['title'] = var8;
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = var1[var6];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var1 = var1[var6];
            var1 = var9.bind(var4)(var1);
            var9 = var1.t;
            if(var7) { _fun0016_ip = 102; continue _fun0016 }
case 103:
            var1 = var9.u/xqhY;
            var1 = var10.bind(var11)(var1);
            _fun0016_ip = 104; continue _fun0016;
case 102:
            var9 = var9.akjk0d;
            var1 = var10.bind(var11)(var9);
case 104:
            var3['description'] = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var6];
            var1 = var9.bind(var4)(var1);
            var12 = var1.intl;
            var11 = var12.string;
            var1 = var10[var6];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.5B+npK;
            var1 = var11.bind(var12)(var1);
            var3['agreement'] = var1;
            var1 = 13;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.NsfwSpaceWarningModalType;
            var1 = var1.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var1;
            var1 = var3;
            _fun0016_ip = 105; continue _fun0016;
case 100:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = var11[var6];
            var9 = var10.bind(var4)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var11[var6];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.UYReTk;
            var9 = var12.bind(var13)(var9);
            var3['title'] = var9;
            var9 = var11[var6];
            var9 = var10.bind(var4)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var11[var6];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.SxY4IS;
            var9 = var12.bind(var13)(var9);
            var3['description'] = var9;
            var9 = var11[var6];
            var9 = var10.bind(var4)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var11[var6];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.5B+npK;
            var9 = var12.bind(var13)(var9);
            var3['agreement'] = var9;
            var9 = 13;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.NsfwSpaceWarningModalType;
            var9 = var9.GUILD_LARGE_SERVER;
            var3['modalType'] = var9;
            var1 = var3;
case 105:
            _fun0016_ip = 106; continue _fun0016;
case 98:
            var3['title'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var6];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var8 = var8[var6];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            if(var7) { _fun0016_ip = 107; continue _fun0016 }
case 108:
            var9 = var8.x1coPj;
            var7 = {};
            var7 = var10.bind(var11)(var9, var7);
            _fun0016_ip = 109; continue _fun0016;
case 107:
            var9 = var8.7uIWQE;
            var8 = {};
            var7 = var10.bind(var11)(var9, var8);
case 109:
            var3['description'] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = var9[var6];
            var7 = var8.bind(var4)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var9[var6];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.PBG51t;
            var7 = var10.bind(var11)(var7);
            var3['agreement'] = var7;
            var7 = 13;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.NsfwSpaceWarningModalType;
            var7 = var7.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var7;
            var1 = var3;
case 106:
            return var1;
case 96:
            var1 = _closure1_slot19;
            var20 = var1.bind(var4)(var2);
            var1 = {};
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var6];
            var7 = var3.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var5[var6];
            var6 = var3.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.MjQbfn;
            var6 = var7.bind(var8)(var6);
            var1['title'] = var6;
            var21 = var1;
            var2 = copyDataProperties(var21, var20);
            var2 = 13;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var3 = var2.GUILD_LARGE_SERVER_UNDERAGE;
            var2 = 'modalType';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['useAgeGateVerifyContentForGuild'] = var11;
    var11 = function useAgeGateVerifyContent(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.useIsAgeVerified;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot25;
            var1 = var1.bind(var6)();
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER;
            var7 = var4 === var5;
            if(var7) { _fun0018_ip = 110; continue _fun0018 }
case 111:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE;
            var7 = var4 === var5;
case 110:
            if(var7) { _fun0018_ip = 68; continue _fun0018 }
case 112:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE_EMBED;
            var7 = var4 === var5;
case 68:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 11;
            var5 = var9[var5];
            var10 = var8.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0019_ip = 72; continue _fun0019 }
case 73:
                    var2 = var1.nsfwAllowed;
case 72:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var8, var5);
            var8 = _closure1_slot8;
            var8 = var8.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var8)) { _fun0018_ip = 113; continue _fun0018 }
case 114:
            var8 = _closure1_slot8;
            var8 = var8.ACCESS_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var8)) { _fun0018_ip = 113; continue _fun0018 }
case 115:
            if(var2) { _fun0018_ip = 116; continue _fun0018 }
case 74:
            var8 = _closure1_slot8;
            var8 = var8.LARGE_GUILD;
            if(!(var4 !== var8)) { _fun0018_ip = 117; continue _fun0018 }
case 118:
            if(!var5) { _fun0018_ip = 119; continue _fun0018 }
case 120:
            if(!var7) { _fun0018_ip = 119; continue _fun0018 }
case 121:
            if(var1) { _fun0018_ip = 119; continue _fun0018 }
case 122:
            var1 = {};
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 7;
            var9 = var13[var5];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var13[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.H0SG/v;
            var9 = var10.bind(var11)(var9);
            var1['verifyTitle'] = var9;
            var9 = var13[var5];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var5 = var13[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var8 = var5.6++3cX;
            var5 = {};
            var12 = _closure1_slot1;
            var11 = 14;
            var11 = var13[var11];
            var13 = var12.bind(var6)(var11);
            var12 = var13.getArticleURL;
            var11 = _closure1_slot10;
            var11 = var11.AGE_GATE;
            var11 = var12.bind(var13)(var11);
            var5['helpURL'] = var11;
            var5 = var9.bind(var10)(var8, var5);
            var1['verifyGateDescription'] = var5;
            var5 = null;
            var1['verifyAgreementButtonText'] = var5;
            _fun0018_ip = 123; continue _fun0018;
case 119:
            var5 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 7;
            var9 = var8[var12];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.5B+npK;
            var8 = var9.bind(var10)(var8);
            var5['verifyAgreementButtonText'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var12];
            var10 = var9.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var8[var12];
            var8 = var9.bind(var6)(var8);
            var9 = var8.t;
            if(var7) { _fun0018_ip = 124; continue _fun0018 }
case 125:
            var8 = var9.u/xqhY;
            var8 = var10.bind(var11)(var8);
            _fun0018_ip = 126; continue _fun0018;
case 124:
            var9 = var9.akjk0d;
            var8 = var10.bind(var11)(var9);
case 126:
            var5['verifyGateDescription'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var12];
            var10 = var9.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var8[var12];
            var8 = var9.bind(var6)(var8);
            var9 = var8.t;
            if(var7) { _fun0018_ip = 127; continue _fun0018 }
case 128:
            var8 = var9.ZmwvDQ;
            var8 = var10.bind(var11)(var8);
            _fun0018_ip = 129; continue _fun0018;
case 127:
            var9 = var9.xi46lp;
            var8 = var10.bind(var11)(var9);
case 129:
            var5['verifyTitle'] = var8;
            var1 = var5;
case 123:
            _fun0018_ip = 130; continue _fun0018;
case 117:
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 7;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.UYReTk;
            var9 = var10.bind(var13)(var9);
            var5['verifyTitle'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.SxY4IS;
            var9 = var10.bind(var13)(var9);
            var5['verifyGateDescription'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.5B+npK;
            var8 = var9.bind(var10)(var8);
            var5['verifyAgreementButtonText'] = var8;
            var1 = var5;
case 130:
            _fun0018_ip = 131; continue _fun0018;
case 116:
            var5 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 7;
            var9 = var8[var12];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.PBG51t;
            var8 = var9.bind(var10)(var8);
            var5['verifyAgreementButtonText'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var12];
            var10 = var9.bind(var6)(var10);
            var13 = var10.intl;
            var11 = var13.format;
            var8 = var8[var12];
            var8 = var9.bind(var6)(var8);
            var9 = var8.t;
            if(var7) { _fun0018_ip = 132; continue _fun0018 }
case 133:
            var10 = var9.x1coPj;
            var8 = {};
            var8 = var11.bind(var13)(var10, var8);
            _fun0018_ip = 134; continue _fun0018;
case 132:
            var10 = var9.7uIWQE;
            var9 = {};
            var8 = var11.bind(var13)(var10, var9);
case 134:
            var5['verifyGateDescription'] = var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var12];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            if(var7) { _fun0018_ip = 135; continue _fun0018 }
case 136:
            var7 = var8.ZmwvDQ;
            var7 = var9.bind(var10)(var7);
            _fun0018_ip = 137; continue _fun0018;
case 135:
            var8 = var8.xi46lp;
            var7 = var9.bind(var10)(var8);
case 137:
            var5['verifyTitle'] = var7;
            var1 = var5;
case 131:
            return var1;
case 113:
            var1 = _closure1_slot8;
            var1 = var1.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var1)) { _fun0018_ip = 138; continue _fun0018 }
case 139:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.MjQbfn;
            _fun0018_ip = 140; continue _fun0018;
case 138:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.u/xsKy;
case 140:
            var1 = _closure1_slot19;
            var2 = var1.bind(var6)(var2);
            var1 = {};
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var3 = var3.bind(var4)(var5);
            var1['verifyTitle'] = var3;
            var3 = var2.description;
            var1['verifyGateDescription'] = var3;
            var2 = var2.agreement;
            var1['verifyAgreementButtonText'] = var2;
            return var1;
        }
    };
    var3['useAgeGateVerifyContent'] = var11;
    var3['shouldShowAgeGateForCurrentUser'] = var10;
    var3['shouldShowAgeGateForGuildContentLevel'] = var9;
    var3['shouldShowAgeGateForChannelId'] = var8;
    var3['shouldShowAgeGateForVoiceChannel'] = var7;
    var7 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = _closure1_slot17;
            var5 = undefined;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0020_ip = 141; continue _fun0020 }
case 142:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.openAgeGateModal;
            var2 = _closure1_slot8;
            var2 = var2.NSFW_VOICE_CHANNEL;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 141:
            return var1;
        }
    };
    var3['maybeOpenAgeGateForVoiceChannel'] = var7;
    var7 = function maybeShowAgeGate(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var5 = arg1;
            var4 = arg3;
            var3 = _closure1_slot20;
            var1 = undefined;
            var3 = var3.bind(var1)(var5);
            if(var3) { _fun0021_ip = 43; continue _fun0021 }
case 142:
            var3 = _closure1_slot15;
            var3 = var3.bind(var1)(var5);
            if(var3) { _fun0021_ip = 143; continue _fun0021 }
case 144:
            var3 = _closure1_slot21;
            var3 = var3.bind(var1)(var5);
            if(var3) { _fun0021_ip = 14; continue _fun0021 }
case 145:
            var3 = _closure1_slot27;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0021_ip = 146; continue _fun0021 }
case 147:
            var6 = _closure1_slot16;
            var5 = arg2;
            var3 = var6.bind(var1)(var5);
case 146:
            if(!var3) { _fun0021_ip = 148; continue _fun0021 }
case 149:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.openAgeGateModal;
            var7 = null;
            var3 = var4;
            if(!(var7 == var4)) { _fun0021_ip = 33; continue _fun0021 }
case 150:
            var7 = _closure1_slot8;
            var3 = var7.NSFW_CHANNEL;
case 33:
            var3 = var5.bind(var6)(var3);
            _fun0021_ip = 148; continue _fun0021;
case 14:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.openAgeGateModal;
            var3 = _closure1_slot8;
            var3 = var3.LARGE_GUILD;
            var3 = var5.bind(var6)(var3);
            _fun0021_ip = 148; continue _fun0021;
case 143:
            var3 = null;
            if(!(var3 != var4)) { _fun0021_ip = 151; continue _fun0021 }
case 152:
            var5 = _closure1_slot13;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            var5 = var4;
            if(var3) { _fun0021_ip = 153; continue _fun0021 }
case 151:
            var3 = _closure1_slot8;
            var5 = var3.NSFW_SERVER;
case 153:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.openAgeGateModal;
            var3 = var3.bind(var4)(var5);
            _fun0021_ip = 148; continue _fun0021;
case 43:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.openAgeGateModal;
            var2 = _closure1_slot8;
            var2 = var2.ACCESS_LARGE_GUILD_UNDERAGE;
            var2 = var3.bind(var4)(var2);
case 148:
            return var1;
        }
    };
    var3['maybeShowAgeGate'] = var7;
    var3['isChannelOrGuildNSFW'] = var6;
    var6 = function(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0022_ip = 66; continue _fun0022 }
case 154:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.shouldShowTiggerPawtect;
            var2 = var2.bind(var5)();
            var1 = _closure1_slot18;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0022_ip = 31; continue _fun0022 }
case 155:
            var1 = var2;
case 31:
            return var1;
case 66:
            var1 = false;
            return var1;
        }
    };
    var3['isChannelAgeVerificationGated'] = var6;
    var6 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0023_ip = 30; continue _fun0023 }
case 154:
            var5 = _closure1_slot7;
            var3 = var5.getCurrentUser;
            var5 = var3.bind(var5)();
            var6 = var2 == var5;
            var2 = undefined;
            var3 = undefined;
            if(var6) { _fun0023_ip = 156; continue _fun0023 }
case 157:
            var3 = var5.nsfwAllowed;
case 156:
            var1 = _closure1_slot18;
            var1 = var1.bind(var2)(var4);
            if(!var1) { _fun0023_ip = 111; continue _fun0023 }
case 18:
            var2 = true;
            var2 = var2 === var3;
            var1 = !var2;
case 111:
            return var1;
case 30:
            var1 = false;
            return var1;
        }
    };
    var3['userCannotSeeNSFWContent'] = var6;
    var3['isChannelContentGated'] = var5;
    var4 = function useIsChannelContentGated(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 10;
            var2 = var1[var2];
            var10 = undefined;
            var4 = var3.bind(var10)(var2);
            var2 = var4.useShouldShowTiggerPawtect;
            var6 = var2.bind(var4)();
            var14 = 11;
            var2 = var1[var14];
            var7 = var3.bind(var10)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.didAgree;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0025_ip = 16; continue _fun0025 }
case 158:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 16:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var4, var2);
            var1 = var1[var14];
            var5 = var3.bind(var10)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0026_ip = 72; continue _fun0026 }
case 73:
                    var2 = var1.nsfwAllowed;
case 72:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var7 = var4.bind(var5)(var3, var1);
            var4 = _closure1_slot23;
            var3 = null;
            var5 = var3 == var11;
            var1 = undefined;
            if(var5) { _fun0024_ip = 159; continue _fun0024 }
case 32:
            var1 = var11.guild_id;
case 159:
            var5 = var4.bind(var10)(var1);
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 12;
            var1 = var13[var1];
            var4 = var12.bind(var10)(var1);
            var1 = var4.useIsEligibleForSettingsDefaultsAggregate;
            var15 = 'age-gate-utils';
            var1 = var1.bind(var4)(var15);
            var4 = 15;
            var4 = var13[var4];
            var13 = var12.bind(var10)(var4);
            var12 = var13.useIsGuildContentLevelSettingEnabled;
            var4 = {};
            var17 = var3 == var11;
            var16 = undefined;
            if(var17) { _fun0024_ip = 160; continue _fun0024 }
case 161:
            var16 = var11.guild_id;
case 160:
            var4['guildId'] = var16;
            var4['location'] = var15;
            var4 = var12.bind(var13)(var4);
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var14 = var13.bind(var10)(var12);
            var13 = var14.useStateFromStores;
            var15 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var15;
            var9 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0027_ip = 162; continue _fun0027 }
case 163:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 162:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var13.bind(var14)(var12, var9);
            if(!var2) { _fun0024_ip = 40; continue _fun0024 }
case 164:
            var2 = !var7;
case 40:
            var7 = !var2;
            if(var7) { _fun0024_ip = 165; continue _fun0024 }
case 166:
            if(!var1) { _fun0024_ip = 167; continue _fun0024 }
case 148:
            var1 = var6;
case 167:
            var7 = var1;
case 165:
            var1 = var3 != var11;
            if(!var1) { _fun0024_ip = 168; continue _fun0024 }
case 169:
            var2 = var11.isNSFW;
            var2 = var2.bind(var11)();
            var11 = !var2;
            if(var11) { _fun0024_ip = 170; continue _fun0024 }
case 171:
            var11 = !var7;
case 170:
            var2 = !var11;
            if(!var11) { _fun0024_ip = 172; continue _fun0024 }
case 173:
            var3 = var3 != var9;
            if(!var3) { _fun0024_ip = 174; continue _fun0024 }
case 175:
            if(!var4) { _fun0024_ip = 176; continue _fun0024 }
case 177:
            var8 = _closure1_slot3;
            var4 = var8.bind(var10)(var9);
case 176:
            if(!var4) { _fun0024_ip = 178; continue _fun0024 }
case 179:
            var4 = var7;
case 178:
            var7 = !var4;
            var4 = !var7;
            if(!var7) { _fun0024_ip = 180; continue _fun0024 }
case 181:
            var5 = !var5;
            if(var5) { _fun0024_ip = 182; continue _fun0024 }
case 183:
            var5 = !var6;
case 182:
            var4 = !var5;
case 180:
            var3 = var4;
case 174:
            var2 = var3;
case 172:
            var1 = var2;
case 168:
            return var1;
        }
    };
    var3['useIsChannelContentGated'] = var4;
    var3['isCurrentUserMissingDateOfBirth'] = var2;
    return var1;
})();