// app/modules/age_gate/AgeGateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var16;
    var12 = function shouldAgeVerifyForAgeGate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var1);
            var2 = var3.getIsGidgetPawtectEnabled;
            var1 = 'age-gate-utils';
            var3 = var2.bind(var3)(var1);
            var1 = 11;
            var1 = var8[var1];
            var2 = var7.bind(var6)(var1);
            var1 = var2.shouldShowTiggerPawtect;
            var2 = var1.bind(var2)();
            var1 = 12;
            var1 = var8[var1];
            var5 = var7.bind(var6)(var1);
            var4 = var5.isFeatureAgeGated;
            var1 = 13;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot18 = var12;
    var11 = function useShouldAgeVerifyForAgeGate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.useIsFeatureAgeGated;
            var1 = 13;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var2.bind(var3)(var1);
            var2 = 10;
            var2 = var6[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useIsGidgetPawtectEnabled;
            var2 = 'age-gate-utils';
            var3 = var3.bind(var7)(var2);
            var2 = 11;
            var2 = var6[var2];
            var4 = var5.bind(var4)(var2);
            var2 = var4.useShouldShowTiggerPawtect;
            var2 = var2.bind(var4)();
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot19 = var11;
    var5 = function isChannelContentGated(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var6 = _closure1_slot5;
            var5 = var6.didAgree;
            var3 = var4.guild_id;
            var3 = var5.bind(var6)(var3);
            var6 = _closure1_slot7;
            var5 = var6.getCurrentUser;
            var6 = var5.bind(var6)();
            var7 = var1 == var6;
            var5 = undefined;
            var9 = undefined;
            if(var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var9 = var6.nsfwAllowed;
case 8:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 10;
            var6 = var12[var6];
            var8 = var11.bind(var5)(var6);
            var7 = var8.getIsGidgetPawtectEnabled;
            var6 = 'age-gate-utils';
            var6 = var7.bind(var8)(var6);
            var7 = 12;
            var7 = var12[var7];
            var10 = var11.bind(var5)(var7);
            var8 = var10.isFeatureAgeGated;
            var7 = 13;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.AgeGatedFeature;
            var7 = var7.AGE_GATED_SPACES;
            var7 = var8.bind(var10)(var7);
            if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = var6;
case 10:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 11;
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.shouldShowTiggerPawtect;
            var6 = var6.bind(var8)();
            if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var8 = false;
            var8 = var8 === var9;
            var3 = !var8;
case 12:
            var3 = !var3;
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            if(!var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var7;
case 16:
            var3 = var6;
case 14:
            var6 = var4.isNSFW;
            var6 = var6.bind(var4)();
            if(!var6) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 18:
            var7 = var4.guild_id;
            var6 = _closure1_slot6;
            var4 = var6.getGuild;
            var4 = var4.bind(var6)(var7);
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = var3;
case 23:
            var1 = var2;
case 21:
            return var1;
case 20:
            var1 = true;
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var4 = function isCurrentUserMissingDateOfBirth() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var2 = var2.nsfwAllowed;
            var1 = var3 == var2;
case 25:
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var16[var1];
    var1 = undefined;
    var7 = var15.bind(var1)(var7);
    var7 = var7.isGuildNSFW;
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var16[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var16[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var16[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var16[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var7 = var7.AgeGateSource;
    var _closure1_slot8 = var7;
    var8 = 6;
    var8 = var16[var8];
    var8 = var15.bind(var1)(var8);
    var9 = var8.GuildNSFWContentLevel;
    var8 = var8.HelpdeskArticles;
    var _closure1_slot9 = var8;
    var13 = var6.Date;
    var8 = var13.prototype;
    var10 = Object.create(var8, {constructor: {value: var13}});
    var19 = '06/16/2020';
    var20 = var10;
    var8 = new var20[var13](var19, var18);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot10 = var8;
    var10 = var9.AGE_RESTRICTED;
    var8 = new Array(2);
    var8[0] = var10;
    var9 = var9.EXPLICIT;
    var8[1] = var9;
    var _closure1_slot11 = var8;
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
    var20 = var7;
    var19 = var6;
    var6 = new var20[var8](var19, var18);
    var13 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot12 = var13;
    var10 = function shouldShowAgeGateForCurrentUser() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var1)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var3 = _closure1_slot18;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var3 = var1.nsfwAllowed;
            var1 = true;
            var1 = var1 !== var3;
            if(var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var1 = var2;
case 29:
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var10;
    var9 = function shouldShowAgeGateForGuildContentLevel(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var1 = null;
            if(!(var1 != var6)) { _fun0006_ip = 31; continue _fun0006 }
case 26:
            var5 = _closure1_slot6;
            var3 = var5.getGuild;
            var3 = var3.bind(var5)(var6);
            var1 = var1 != var3;
            if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var2 = _closure1_slot3;
            var1 = var2.bind(var4)(var3);
case 33:
            return var1;
case 31:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var9;
    var8 = function shouldShowAgeGateForChannelId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var3 = !var1;
            if(var3) { _fun0007_ip = 35; continue _fun0007 }
case 28:
            var1 = null;
            var3 = var1 == var6;
case 35:
            var1 = !var3;
            if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 36:
            var3 = _closure1_slot20;
            var5 = _closure1_slot4;
            var2 = var5.getChannel;
            var2 = var2.bind(var5)(var6);
            var1 = var3.bind(var4)(var2);
case 31:
            return var1;
        }
    };
    var _closure1_slot15 = var8;
    var7 = function shouldShowAgeGateForVoiceChannel(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = _closure1_slot18;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0008_ip = 35; continue _fun0008 }
case 37:
            var3 = _closure1_slot15;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var _closure1_slot16 = var7;
    var6 = function isChannelOrGuildNSFW(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0009_ip = 38; continue _fun0009 }
case 7:
            var2 = var3.isNSFW;
            var2 = var2.bind(var3)();
            if(var2) { _fun0009_ip = 39; continue _fun0009 }
case 26:
            var5 = _closure1_slot3;
            var6 = _closure1_slot6;
            var4 = var6.getGuild;
            var3 = var3.guild_id;
            var4 = var4.bind(var6)(var3);
            var3 = undefined;
            var2 = var5.bind(var3)(var4);
case 39:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var14 = 19;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/age_gate/AgeGateUtils.tsx';
    var14 = var15.bind(var16)(var14);
    var3['SERVER_AGE_GATE_SOURCES'] = var13;
    var13 = function userNeedsAgeGate() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0010_ip = 40; continue _fun0010 }
case 26:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 9;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.extractTimestamp;
            var5 = var2.id;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot10;
            var4 = var6.getTime;
            var4 = var4.bind(var6)();
            var1 = var5 > var4;
case 40:
            if(!var1) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var2 = var2.nsfwAllowed;
            var1 = var3 == var2;
case 41:
            return var1;
        }
    };
    var3['userNeedsAgeGate'] = var13;
    var13 = function guildNeedsAgeGate(arg1) {
        var3 = _closure1_slot11;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.nsfwLevel;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['guildNeedsAgeGate'] = var13;
    var3['shouldAgeVerifyForAgeGate'] = var12;
    var3['useShouldAgeVerifyForAgeGate'] = var11;
    var11 = function useAgeGateVerifyContentForGuild(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var12.bind(var6)(var1);
            var1 = var2.useIsAgeVerified;
            var11 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = arg1;
            var7 = var2.bind(var6)(var1);
            var1 = 14;
            var1 = var3[var1];
            var8 = var12.bind(var6)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0012_ip = 43; continue _fun0012 }
case 44:
                    var2 = var1.nsfwAllowed;
case 43:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = var5.bind(var8)(var2, var1);
            var2 = _closure1_slot19;
            var14 = var2.bind(var6)();
            var2 = 15;
            var2 = var3[var2];
            var2 = var12.bind(var6)(var2);
            var8 = var2.AgeVerificationLanguageExperiment;
            var5 = var8.useConfig;
            var2 = {};
            var9 = 'useAgeGateVerifyContentForGuild';
            var2['location'] = var9;
            var2 = var5.bind(var8)(var2);
            var9 = var2.enabled;
            var2 = 7;
            var5 = var3[var2];
            var15 = var12.bind(var6)(var5);
            var10 = var15.useUpdatedAgeVerificationString;
            var13 = 8;
            var5 = var3[var13];
            var5 = var12.bind(var6)(var5);
            var16 = var5.intl;
            var8 = var16.string;
            var5 = var3[var13];
            var5 = var12.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.PBG51l;
            var8 = var8.bind(var16)(var5);
            var5 = var3[var13];
            var5 = var12.bind(var6)(var5);
            var17 = var5.intl;
            var16 = var17.string;
            var5 = var3[var13];
            var5 = var12.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.Zt4Mf4;
            var5 = var16.bind(var17)(var5);
            var5 = var10.bind(var15)(var8, var5);
            var8 = var3[var2];
            var16 = var12.bind(var6)(var8);
            var15 = var16.useUpdatedAgeVerificationString;
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var17 = var8.intl;
            var10 = var17.string;
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.akjk0f;
            var10 = var10.bind(var17)(var8);
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var18 = var8.intl;
            var17 = var18.string;
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.V6Gmu9;
            var8 = var17.bind(var18)(var8);
            var10 = var15.bind(var16)(var10, var8);
            var8 = var3[var2];
            var17 = var12.bind(var6)(var8);
            var16 = var17.useUpdatedAgeVerificationString;
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var18 = var8.intl;
            var15 = var18.string;
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.u/xqhc;
            var15 = var15.bind(var18)(var8);
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var19 = var8.intl;
            var18 = var19.string;
            var8 = var3[var13];
            var8 = var12.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.5rygLk;
            var8 = var18.bind(var19)(var8);
            var8 = var16.bind(var17)(var15, var8);
            var2 = var3[var2];
            var17 = var12.bind(var6)(var2);
            var16 = var17.useUpdatedAgeVerificationString;
            var2 = var3[var13];
            var2 = var12.bind(var6)(var2);
            var18 = var2.intl;
            var15 = var18.string;
            var2 = var3[var13];
            var2 = var12.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.5B+npG;
            var15 = var15.bind(var18)(var2);
            var2 = var3[var13];
            var2 = var12.bind(var6)(var2);
            var19 = var2.intl;
            var18 = var19.string;
            var2 = var3[var13];
            var2 = var12.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.FDSSia;
            var2 = var18.bind(var19)(var2);
            var2 = var16.bind(var17)(var15, var2);
            var3 = var3[var13];
            var3 = var12.bind(var6)(var3);
            var15 = var3.intl;
            var12 = var15.string;
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var16.bind(var6)(var3);
            var16 = var3.t;
            if(var7) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var3 = var16.ZmwvDc;
            _fun0011_ip = 47; continue _fun0011;
case 45:
            var3 = var16.xi46lg;
case 47:
            var12 = var12.bind(var15)(var3);
            var3 = {};
            if(var14) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            if(var1) { _fun0011_ip = 50; continue _fun0011 }
case 51:
            var3['title'] = var12;
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var13];
            var1 = var14.bind(var6)(var1);
            var15 = var1.intl;
            var14 = var15.string;
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var13];
            var1 = var16.bind(var6)(var1);
            var16 = var1.t;
            if(var7) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var1 = var16.E4Cd5I;
            _fun0011_ip = 54; continue _fun0011;
case 52:
            var1 = var16.ZtuRts;
case 54:
            var1 = var14.bind(var15)(var1);
            var3['description'] = var1;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = var15[var13];
            var1 = var14.bind(var6)(var1);
            var17 = var1.intl;
            var16 = var17.string;
            var1 = var15[var13];
            var1 = var14.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.wVq7uo;
            var1 = var16.bind(var17)(var1);
            var3['agreement'] = var1;
            var1 = 16;
            var1 = var15[var1];
            var1 = var14.bind(var6)(var1);
            var1 = var1.NsfwSpaceWarningModalType;
            var1 = var1.NSFW_CHANNEL_VERIFIED;
            var3['modalType'] = var1;
            var1 = var3;
            _fun0011_ip = 55; continue _fun0011;
case 50:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var14 = var15.bind(var6)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var14 = var17.bind(var6)(var14);
            var17 = var14.t;
            if(var7) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var14 = var17.NEabBa;
            _fun0011_ip = 58; continue _fun0011;
case 56:
            var14 = var17.H0SG/g;
case 58:
            var14 = var15.bind(var16)(var14);
            var3['title'] = var14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var14 = var15.bind(var6)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var14 = var15.bind(var6)(var14);
            var14 = var14.t;
            if(var7) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var15 = var14.2kHZes;
            _fun0011_ip = 61; continue _fun0011;
case 59:
            var15 = var14.6++3cX;
case 61:
            var14 = {};
            var20 = _closure1_slot1;
            var16 = _closure1_slot2;
            var19 = 17;
            var19 = var16[var19];
            var21 = var20.bind(var6)(var19);
            var20 = var21.getArticleURL;
            var19 = _closure1_slot9;
            var19 = var19.NSFW_AGE_GATING;
            var19 = var20.bind(var21)(var19);
            var14['helpURL'] = var19;
            var14 = var17.bind(var18)(var15, var14);
            var3['description'] = var14;
            var14 = null;
            var3['agreement'] = var14;
            var15 = _closure1_slot0;
            var14 = 16;
            var14 = var16[var14];
            var14 = var15.bind(var6)(var14);
            var14 = var14.NsfwSpaceWarningModalType;
            var14 = var14.NSFW_CHANNEL_UNDERAGE;
            var3['modalType'] = var14;
            var1 = var3;
case 55:
            _fun0011_ip = 62; continue _fun0011;
case 48:
            var3['title'] = var12;
            if(var11) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            if(!var7) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var8 = var10;
case 65:
            var3['description'] = var8;
            var3['agreement'] = var2;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 16;
            var2 = var10[var2];
            var2 = var8.bind(var6)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var2 = var2.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var2;
            var2 = var3;
            _fun0011_ip = 67; continue _fun0011;
case 63:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var8 = var10.bind(var6)(var8);
            var11 = var8.intl;
            var10 = var11.format;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var8 = var12.bind(var6)(var8);
            var8 = var8.t;
            if(var7) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            if(var9) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var12 = var8.x1coPo;
            _fun0011_ip = 72; continue _fun0011;
case 70:
            var12 = var8.XQZvwn;
case 72:
            var7 = {};
            var7 = var10.bind(var11)(var12, var7);
            _fun0011_ip = 73; continue _fun0011;
case 68:
            if(var9) { _fun0011_ip = 74; continue _fun0011 }
case 75:
            var9 = var8.7uIWQM;
            _fun0011_ip = 76; continue _fun0011;
case 74:
            var9 = var8.8tk6bB;
case 76:
            var8 = {};
            var7 = var10.bind(var11)(var9, var8);
case 73:
            var3['description'] = var7;
            var3['agreement'] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 16;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.NsfwSpaceWarningModalType;
            var4 = var4.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var4;
            var2 = var3;
case 67:
            var1 = var2;
case 62:
            return var1;
        }
    };
    var3['useAgeGateVerifyContentForGuild'] = var11;
    var11 = function useAgeGateVerifyContent(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.useIsAgeVerified;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot19;
            var2 = var2.bind(var6)();
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER;
            var9 = var4 === var5;
            if(var9) { _fun0013_ip = 77; continue _fun0013 }
case 78:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE;
            var9 = var4 === var5;
case 77:
            if(var9) { _fun0013_ip = 41; continue _fun0013 }
case 79:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE_EMBED;
            var9 = var4 === var5;
case 41:
            var21 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 14;
            var5 = var14[var5];
            var10 = var21.bind(var6)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0014_ip = 43; continue _fun0014 }
case 44:
                    var2 = var1.nsfwAllowed;
case 43:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var5 = var8.bind(var10)(var7, var5);
            var7 = 15;
            var7 = var14[var7];
            var7 = var21.bind(var6)(var7);
            var10 = var7.AgeVerificationLanguageExperiment;
            var8 = var10.useConfig;
            var7 = {};
            var11 = 'useAgeGateVerifyContent';
            var7['location'] = var11;
            var7 = var8.bind(var10)(var7);
            var12 = var7.enabled;
            var8 = 7;
            var7 = var14[var8];
            var15 = var21.bind(var6)(var7);
            var13 = var15.useUpdatedAgeVerificationString;
            var7 = 8;
            var10 = var14[var7];
            var10 = var21.bind(var6)(var10);
            var16 = var10.intl;
            var11 = var16.string;
            var10 = var14[var7];
            var10 = var21.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.PBG51l;
            var11 = var11.bind(var16)(var10);
            var10 = var14[var7];
            var10 = var21.bind(var6)(var10);
            var17 = var10.intl;
            var16 = var17.string;
            var10 = var14[var7];
            var10 = var21.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.Zt4Mf4;
            var10 = var16.bind(var17)(var10);
            var10 = var13.bind(var15)(var11, var10);
            var11 = var14[var8];
            var16 = var21.bind(var6)(var11);
            var15 = var16.useUpdatedAgeVerificationString;
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var17 = var11.intl;
            var13 = var17.string;
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.UYReTs;
            var13 = var13.bind(var17)(var11);
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var18 = var11.intl;
            var17 = var18.string;
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.7ymzsL;
            var11 = var17.bind(var18)(var11);
            var13 = var15.bind(var16)(var13, var11);
            var11 = var14[var8];
            var17 = var21.bind(var6)(var11);
            var16 = var17.useUpdatedAgeVerificationString;
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var18 = var11.intl;
            var15 = var18.string;
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.5B+npG;
            var15 = var15.bind(var18)(var11);
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var19 = var11.intl;
            var18 = var19.string;
            var11 = var14[var7];
            var11 = var21.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.FDSSia;
            var11 = var18.bind(var19)(var11);
            var11 = var16.bind(var17)(var15, var11);
            var15 = var14[var8];
            var18 = var21.bind(var6)(var15);
            var17 = var18.useUpdatedAgeVerificationString;
            var15 = var14[var7];
            var15 = var21.bind(var6)(var15);
            var19 = var15.intl;
            var16 = var19.string;
            var15 = var14[var7];
            var15 = var21.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.akjk0f;
            var16 = var16.bind(var19)(var15);
            var15 = var14[var7];
            var15 = var21.bind(var6)(var15);
            var20 = var15.intl;
            var19 = var20.string;
            var15 = var14[var7];
            var15 = var21.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.V6Gmu9;
            var15 = var19.bind(var20)(var15);
            var15 = var17.bind(var18)(var16, var15);
            var16 = var14[var8];
            var18 = var21.bind(var6)(var16);
            var17 = var18.useUpdatedAgeVerificationString;
            var16 = var14[var7];
            var16 = var21.bind(var6)(var16);
            var20 = var16.intl;
            var19 = var20.string;
            var16 = var14[var7];
            var16 = var21.bind(var6)(var16);
            var16 = var16.t;
            var16 = var16.u/xqhc;
            var16 = var19.bind(var20)(var16);
            var19 = var14[var7];
            var19 = var21.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var14 = var14[var7];
            var14 = var21.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.5rygLk;
            var14 = var19.bind(var20)(var14);
            var14 = var17.bind(var18)(var16, var14);
            var16 = _closure1_slot8;
            var16 = var16.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var16)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
            var16 = _closure1_slot8;
            var16 = var16.ACCESS_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var16)) { _fun0013_ip = 80; continue _fun0013 }
case 82:
            if(var1) { _fun0013_ip = 83; continue _fun0013 }
case 84:
            var16 = _closure1_slot8;
            var16 = var16.LARGE_GUILD;
            if(!(var4 !== var16)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
            if(!var5) { _fun0013_ip = 87; continue _fun0013 }
case 88:
            if(!var9) { _fun0013_ip = 87; continue _fun0013 }
case 89:
            if(var2) { _fun0013_ip = 87; continue _fun0013 }
case 90:
            var2 = {};
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = var21[var7];
            var5 = var16.bind(var6)(var5);
            var18 = var5.intl;
            var17 = var18.string;
            var5 = var21[var7];
            var5 = var16.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.H0SG/g;
            var5 = var17.bind(var18)(var5);
            var2['verifyTitle'] = var5;
            var5 = var21[var7];
            var5 = var16.bind(var6)(var5);
            var18 = var5.intl;
            var17 = var18.format;
            var5 = var21[var7];
            var5 = var16.bind(var6)(var5);
            var5 = var5.t;
            var16 = var5.6++3cX;
            var5 = {};
            var20 = _closure1_slot1;
            var19 = 17;
            var19 = var21[var19];
            var21 = var20.bind(var6)(var19);
            var20 = var21.getArticleURL;
            var19 = _closure1_slot9;
            var19 = var19.AGE_GATE;
            var19 = var20.bind(var21)(var19);
            var5['helpURL'] = var19;
            var5 = var17.bind(var18)(var16, var5);
            var2['verifyGateDescription'] = var5;
            var5 = null;
            var2['verifyAgreementButtonText'] = var5;
            _fun0013_ip = 91; continue _fun0013;
case 87:
            var5 = {};
            var5['verifyAgreementButtonText'] = var11;
            if(!var9) { _fun0013_ip = 92; continue _fun0013 }
case 93:
            var14 = var15;
case 92:
            var5['verifyGateDescription'] = var14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = var14[var7];
            var16 = var15.bind(var6)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var14[var7];
            var14 = var15.bind(var6)(var14);
            var15 = var14.t;
            if(var9) { _fun0013_ip = 94; continue _fun0013 }
case 95:
            var14 = var15.ZmwvDc;
            var14 = var16.bind(var17)(var14);
            _fun0013_ip = 96; continue _fun0013;
case 94:
            var15 = var15.xi46lg;
            var14 = var16.bind(var17)(var15);
case 96:
            var5['verifyTitle'] = var14;
            var2 = var5;
case 91:
            _fun0013_ip = 97; continue _fun0013;
case 85:
            var5 = {};
            var5['verifyTitle'] = var13;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = var13[var7];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var7];
            var13 = var16.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13.SxY4IW;
            var13 = var14.bind(var15)(var13);
            var5['verifyGateDescription'] = var13;
            var5['verifyAgreementButtonText'] = var11;
            var2 = var5;
case 97:
            _fun0013_ip = 98; continue _fun0013;
case 83:
            var5 = {};
            var5['verifyAgreementButtonText'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var7];
            var10 = var11.bind(var6)(var10);
            var14 = var10.intl;
            var13 = var14.format;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var7];
            var10 = var11.bind(var6)(var10);
            var11 = var10.t;
            if(var9) { _fun0013_ip = 99; continue _fun0013 }
case 100:
            if(var12) { _fun0013_ip = 101; continue _fun0013 }
case 102:
            var15 = var11.x1coPo;
            _fun0013_ip = 103; continue _fun0013;
case 101:
            var15 = var11.XQZvwn;
case 103:
            var10 = {};
            var10 = var13.bind(var14)(var15, var10);
            _fun0013_ip = 104; continue _fun0013;
case 99:
            if(var12) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var12 = var11.7uIWQM;
            _fun0013_ip = 107; continue _fun0013;
case 105:
            var12 = var11.8tk6bB;
case 107:
            var11 = {};
            var10 = var13.bind(var14)(var12, var11);
case 104:
            var5['verifyGateDescription'] = var10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var7];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var7];
            var10 = var13.bind(var6)(var10);
            var10 = var10.t;
            if(var9) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var9 = var10.ZmwvDc;
            var9 = var11.bind(var12)(var9);
            _fun0013_ip = 110; continue _fun0013;
case 108:
            var10 = var10.xi46lg;
            var9 = var11.bind(var12)(var10);
case 110:
            var5['verifyTitle'] = var9;
            var2 = var5;
case 98:
            return var2;
case 80:
            var2 = _closure1_slot8;
            var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var2)) { _fun0013_ip = 111; continue _fun0013 }
case 112:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            var5 = var2.MjQbfi;
            _fun0013_ip = 113; continue _fun0013;
case 111:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            var5 = var2.u/xsK9;
case 113:
            var2 = {};
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var1) { _fun0013_ip = 114; continue _fun0013 }
case 115:
            var4 = var9[var7];
            var4 = var15.bind(var6)(var4);
            var11 = var4.intl;
            var10 = var11.string;
            var4 = var9[var7];
            var4 = var15.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.SxY4IW;
            var4 = var10.bind(var11)(var4);
            _fun0013_ip = 116; continue _fun0013;
case 114:
            var10 = var9[var8];
            var12 = var15.bind(var6)(var10);
            var11 = var12.getUpdatedAgeVerificationString;
            var10 = var9[var7];
            var10 = var15.bind(var6)(var10);
            var14 = var10.intl;
            var13 = var14.string;
            var10 = var9[var7];
            var10 = var15.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.lSgO/q;
            var10 = var13.bind(var14)(var10);
            var13 = var9[var7];
            var13 = var15.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var9 = var9[var7];
            var9 = var15.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.SAoMVJ;
            var9 = var13.bind(var14)(var9);
            var4 = var11.bind(var12)(var10, var9);
case 116:
            var2['description'] = var4;
            var13 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var8];
            var10 = var13.bind(var6)(var8);
            var9 = var10.getUpdatedAgeVerificationString;
            var8 = var4[var7];
            var8 = var13.bind(var6)(var8);
            var12 = var8.intl;
            var11 = var12.string;
            var8 = var4[var7];
            var8 = var13.bind(var6)(var8);
            var8 = var8.t;
            if(var1) { _fun0013_ip = 117; continue _fun0013 }
case 118:
            var1 = var8.5B+npG;
            var14 = var11.bind(var12)(var1);
            var1 = var4[var7];
            var1 = var13.bind(var6)(var1);
            var16 = var1.intl;
            var15 = var16.string;
            var1 = var4[var7];
            var1 = var13.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.FDSSia;
            var1 = var15.bind(var16)(var1);
            var1 = var9.bind(var10)(var14, var1);
            _fun0013_ip = 119; continue _fun0013;
case 117:
            var8 = var8.PBG51l;
            var8 = var11.bind(var12)(var8);
            var11 = var4[var7];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var4 = var4[var7];
            var4 = var13.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.Zt4Mf4;
            var4 = var11.bind(var12)(var4);
            var1 = var9.bind(var10)(var8, var4);
case 119:
            var2['agreement'] = var1;
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = _closure1_slot16;
            var5 = undefined;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0015_ip = 120; continue _fun0015 }
case 121:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.openAgeGateModal;
            var2 = _closure1_slot8;
            var2 = var2.NSFW_VOICE_CHANNEL;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 120:
            return var1;
        }
    };
    var3['maybeOpenAgeGateForVoiceChannel'] = var7;
    var7 = function maybeShowAgeGate(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg3;
            var5 = _closure1_slot14;
            var1 = undefined;
            var3 = arg1;
            var3 = var5.bind(var1)(var3);
            if(var3) { _fun0016_ip = 122; continue _fun0016 }
case 123:
            var3 = _closure1_slot21;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0016_ip = 34; continue _fun0016 }
case 36:
            var6 = _closure1_slot15;
            var5 = arg2;
            var3 = var6.bind(var1)(var5);
case 34:
            if(!var3) { _fun0016_ip = 124; continue _fun0016 }
case 125:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.openAgeGateModal;
            var7 = null;
            var3 = var4;
            if(!(var7 == var4)) { _fun0016_ip = 41; continue _fun0016 }
case 42:
            var7 = _closure1_slot8;
            var3 = var7.NSFW_CHANNEL;
case 41:
            var3 = var5.bind(var6)(var3);
            _fun0016_ip = 124; continue _fun0016;
case 122:
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 126; continue _fun0016 }
case 127:
            var5 = _closure1_slot12;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0016_ip = 128; continue _fun0016 }
case 126:
            var3 = _closure1_slot8;
            var4 = var3.NSFW_SERVER;
case 128:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openAgeGateModal;
            var2 = var2.bind(var3)(var4);
case 124:
            return var1;
        }
    };
    var3['maybeShowAgeGate'] = var7;
    var3['isChannelOrGuildNSFW'] = var6;
    var6 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0017_ip = 38; continue _fun0017 }
case 129:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.shouldShowTiggerPawtect;
            var2 = var2.bind(var5)();
            var1 = _closure1_slot17;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0017_ip = 9; continue _fun0017 }
case 130:
            var1 = var2;
case 9:
            return var1;
case 38:
            var1 = false;
            return var1;
        }
    };
    var3['isChannelAgeVerificationGated'] = var6;
    var6 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0018_ip = 8; continue _fun0018 }
case 129:
            var5 = _closure1_slot7;
            var3 = var5.getCurrentUser;
            var5 = var3.bind(var5)();
            var6 = var2 == var5;
            var2 = undefined;
            var3 = undefined;
            if(var6) { _fun0018_ip = 131; continue _fun0018 }
case 132:
            var3 = var5.nsfwAllowed;
case 131:
            var1 = _closure1_slot17;
            var1 = var1.bind(var2)(var4);
            if(!var1) { _fun0018_ip = 78; continue _fun0018 }
case 133:
            var2 = true;
            var2 = var2 === var3;
            var1 = !var2;
case 78:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var3['userCannotSeeNSFWContent'] = var6;
    var3['isChannelContentGated'] = var5;
    var5 = function useIsChannelContentGated(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 11;
            var1 = var12[var1];
            var7 = undefined;
            var2 = var11.bind(var7)(var1);
            var1 = var2.useShouldShowTiggerPawtect;
            var2 = var1.bind(var2)();
            var10 = 14;
            var1 = var12[var10];
            var9 = var11.bind(var7)(var1);
            var5 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.didAgree;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0020_ip = 134; continue _fun0020 }
case 135:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 134:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var3, var1);
            var1 = var12[var10];
            var13 = var11.bind(var7)(var1);
            var9 = var13.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0021_ip = 43; continue _fun0021 }
case 44:
                    var2 = var1.nsfwAllowed;
case 43:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var9 = var9.bind(var13)(var3, var1);
            var1 = 12;
            var1 = var12[var1];
            var13 = var11.bind(var7)(var1);
            var3 = var13.useIsFeatureAgeGated;
            var1 = 13;
            var1 = var12[var1];
            var1 = var11.bind(var7)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var3.bind(var13)(var1);
            var3 = 10;
            var3 = var12[var3];
            var14 = var11.bind(var7)(var3);
            var13 = var14.useIsGidgetPawtectEnabled;
            var3 = 'age-gate-utils';
            var3 = var13.bind(var14)(var3);
            var10 = var12[var10];
            var12 = var11.bind(var7)(var10);
            var11 = var12.useStateFromStores;
            var13 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var13;
            var6 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0022_ip = 136; continue _fun0022 }
case 137:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 136:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var11.bind(var12)(var10, var6);
            if(!var5) { _fun0019_ip = 138; continue _fun0019 }
case 139:
            var5 = !var9;
case 138:
            var5 = !var5;
            if(var5) { _fun0019_ip = 140; continue _fun0019 }
case 141:
            if(var1) { _fun0019_ip = 142; continue _fun0019 }
case 143:
            var1 = var3;
case 142:
            if(!var1) { _fun0019_ip = 144; continue _fun0019 }
case 145:
            var1 = var2;
case 144:
            var5 = var1;
case 140:
            var3 = null;
            var1 = var3 != var8;
            if(!var1) { _fun0019_ip = 146; continue _fun0019 }
case 147:
            var2 = var8.isNSFW;
            var2 = var2.bind(var8)();
            var8 = !var2;
            if(var8) { _fun0019_ip = 148; continue _fun0019 }
case 149:
            var8 = !var5;
case 148:
            var2 = !var8;
            if(!var8) { _fun0019_ip = 150; continue _fun0019 }
case 151:
            var3 = var3 != var6;
            if(!var3) { _fun0019_ip = 152; continue _fun0019 }
case 153:
            var4 = _closure1_slot3;
            var4 = var4.bind(var7)(var6);
            var4 = !var4;
            if(var4) { _fun0019_ip = 154; continue _fun0019 }
case 155:
            var4 = !var5;
case 154:
            var3 = !var4;
case 152:
            var2 = var3;
case 150:
            var1 = var2;
case 146:
            return var1;
        }
    };
    var3['useIsChannelContentGated'] = var5;
    var3['isCurrentUserMissingDateOfBirth'] = var4;
    var4 = function shouldAgeVerifyForSettingsToggles() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.isFeatureAgeGated;
            var1 = 13;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var3 = var2.bind(var3)(var1);
            var1 = 10;
            var1 = var6[var1];
            var7 = var5.bind(var4)(var1);
            var2 = var7.getIsGidgetPawtectEnabled;
            var1 = 'age-gate-utils';
            var1 = var2.bind(var7)(var1);
            var2 = 11;
            var2 = var6[var2];
            var4 = var5.bind(var4)(var2);
            var2 = var4.shouldShowTiggerPawtect;
            var2 = var2.bind(var4)();
            if(var1) { _fun0023_ip = 2; continue _fun0023 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0023_ip = 4; continue _fun0023 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['shouldAgeVerifyForSettingsToggles'] = var4;
    var2 = function useShouldAgeVerifyForSettingsToggles() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.useIsFeatureAgeGated;
            var1 = 13;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var3 = var2.bind(var3)(var1);
            var1 = 10;
            var1 = var6[var1];
            var7 = var5.bind(var4)(var1);
            var2 = var7.useIsGidgetPawtectEnabled;
            var1 = 'age-gate-utils';
            var1 = var2.bind(var7)(var1);
            var2 = 11;
            var2 = var6[var2];
            var4 = var5.bind(var4)(var2);
            var2 = var4.useShouldShowTiggerPawtect;
            var2 = var2.bind(var4)();
            if(var1) { _fun0024_ip = 2; continue _fun0024 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0024_ip = 4; continue _fun0024 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useShouldAgeVerifyForSettingsToggles'] = var2;
    return var1;
})();