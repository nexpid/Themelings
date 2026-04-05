// app/modules/age_gate/AgeGateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var16 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var17;
    var13 = function shouldAgeVerifyForAgeGate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var1);
            var1 = var2.shouldShowTiggerPawtect;
            var2 = var1.bind(var2)();
            var1 = 10;
            var1 = var7[var1];
            var4 = var6.bind(var5)(var1);
            var3 = var4.isFeatureAgeGated;
            var1 = 11;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var13;
    var12 = function useShouldAgeVerifyForAgeGate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var2 = var6.useIsFeatureAgeGated;
            var1 = 11;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var2.bind(var6)(var1);
            var2 = 9;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useShouldShowTiggerPawtect;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot19 = var12;
    var6 = function isChannelContentGated(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
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
            if(var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var9 = var6.nsfwAllowed;
case 6:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var11 = var8.bind(var5)(var6);
            var7 = var11.isFeatureAgeGated;
            var6 = 11;
            var6 = var10[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.AgeGatedFeature;
            var6 = var6.AGE_GATED_SPACES;
            var7 = var7.bind(var11)(var6);
            var6 = 9;
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.shouldShowTiggerPawtect;
            var6 = var6.bind(var8)();
            if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var8 = false;
            var8 = var8 === var9;
            var3 = !var8;
case 8:
            var3 = !var3;
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = var7;
case 12:
            var3 = var6;
case 10:
            var6 = var4.isNSFW;
            var6 = var6.bind(var4)();
            if(!var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 14:
            var7 = var4.guild_id;
            var6 = _closure1_slot6;
            var4 = var6.getGuild;
            var4 = var4.bind(var6)(var7);
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var3;
case 19:
            var1 = var2;
case 17:
            return var1;
case 16:
            var1 = true;
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var6;
    var5 = function useIsChannelContentGated(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 9;
            var1 = var11[var1];
            var7 = undefined;
            var2 = var10.bind(var7)(var1);
            var1 = var2.useShouldShowTiggerPawtect;
            var2 = var1.bind(var2)();
            var9 = 12;
            var1 = var11[var9];
            var12 = var10.bind(var7)(var1);
            var5 = var12.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.didAgree;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 21:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var5.bind(var12)(var3, var1);
            var1 = var11[var9];
            var13 = var10.bind(var7)(var1);
            var12 = var13.useStateFromStores;
            var1 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var2 = var1.nsfwAllowed;
case 23:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var5, var1);
            var1 = 10;
            var1 = var11[var1];
            var13 = var10.bind(var7)(var1);
            var12 = var13.useIsFeatureAgeGated;
            var1 = 11;
            var1 = var11[var1];
            var1 = var10.bind(var7)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var12.bind(var13)(var1);
            var9 = var11[var9];
            var11 = var10.bind(var7)(var9);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var12;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 25:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var9, var6);
            if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 27:
            var3 = !var5;
case 18:
            var5 = !var3;
            if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 28:
            if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 29:
            var1 = var2;
case 20:
            var5 = var1;
case 19:
            var3 = null;
            var1 = var3 != var8;
            if(!var1) { _fun0004_ip = 30; continue _fun0004 }
case 4:
            var2 = var8.isNSFW;
            var2 = var2.bind(var8)();
            var8 = !var2;
            if(var8) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var8 = !var5;
case 31:
            var2 = !var8;
            if(!var8) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var3 = var3 != var6;
            if(!var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var4 = _closure1_slot3;
            var4 = var4.bind(var7)(var6);
            var4 = !var4;
            if(var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var4 = !var5;
case 37:
            var3 = !var4;
case 35:
            var2 = var3;
case 33:
            var1 = var2;
case 30:
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var4 = function isCurrentUserMissingDateOfBirth() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var2 = var2.nsfwAllowed;
            var1 = var3 == var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var7 = global;
    var11 = var7.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var17[var1];
    var1 = undefined;
    var8 = var16.bind(var1)(var8);
    var8 = var8.isGuildNSFW;
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var17[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var17[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var17[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var17[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var17[var8];
    var8 = var16.bind(var1)(var8);
    var8 = var8.AgeGateSource;
    var _closure1_slot8 = var8;
    var9 = 6;
    var9 = var17[var9];
    var9 = var16.bind(var1)(var9);
    var10 = var9.GuildNSFWContentLevel;
    var9 = var9.HelpdeskArticles;
    var _closure1_slot9 = var9;
    var14 = var7.Date;
    var9 = var14.prototype;
    var11 = Object.create(var9, {constructor: {value: var14}});
    var20 = '06/16/2020';
    var21 = var11;
    var9 = new var21[var14](var20, var19);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot10 = var9;
    var11 = var10.AGE_RESTRICTED;
    var9 = new Array(2);
    var9[0] = var11;
    var10 = var10.EXPLICIT;
    var9[1] = var10;
    var _closure1_slot11 = var9;
    var9 = var7.Set;
    var10 = var8.NSFW_SERVER;
    var7 = new Array(3);
    var7[0] = var10;
    var10 = var8.NSFW_SERVER_INVITE;
    var7[1] = var10;
    var8 = var8.NSFW_SERVER_INVITE_EMBED;
    var7[2] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var21 = var8;
    var20 = var7;
    var7 = new var21[var9](var20, var19);
    var14 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot12 = var14;
    var11 = function shouldShowAgeGateForCurrentUser() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var1)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
            var3 = _closure1_slot18;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var3 = var1.nsfwAllowed;
            var1 = true;
            var1 = var1 !== var3;
            if(var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var1 = var2;
case 43:
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var11;
    var10 = function shouldShowAgeGateForGuildContentLevel(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var1 = null;
            if(!(var1 != var6)) { _fun0010_ip = 45; continue _fun0010 }
case 40:
            var5 = _closure1_slot6;
            var3 = var5.getGuild;
            var3 = var3.bind(var5)(var6);
            var1 = var1 != var3;
            if(!var1) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var2 = _closure1_slot3;
            var1 = var2.bind(var4)(var3);
case 47:
            return var1;
case 45:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var10;
    var9 = function shouldShowAgeGateForChannelId(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var3 = !var1;
            if(var3) { _fun0011_ip = 49; continue _fun0011 }
case 42:
            var1 = null;
            var3 = var1 == var6;
case 49:
            var1 = !var3;
            if(var3) { _fun0011_ip = 45; continue _fun0011 }
case 50:
            var3 = _closure1_slot20;
            var5 = _closure1_slot4;
            var2 = var5.getChannel;
            var2 = var2.bind(var5)(var6);
            var1 = var3.bind(var4)(var2);
case 45:
            return var1;
        }
    };
    var _closure1_slot15 = var9;
    var8 = function shouldShowAgeGateForVoiceChannel(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = _closure1_slot18;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0012_ip = 49; continue _fun0012 }
case 51:
            var3 = _closure1_slot15;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
case 49:
            return var1;
        }
    };
    var _closure1_slot16 = var8;
    var7 = function isChannelOrGuildNSFW(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0013_ip = 52; continue _fun0013 }
case 5:
            var2 = var3.isNSFW;
            var2 = var2.bind(var3)();
            if(var2) { _fun0013_ip = 53; continue _fun0013 }
case 40:
            var5 = _closure1_slot3;
            var6 = _closure1_slot6;
            var4 = var6.getGuild;
            var3 = var3.guild_id;
            var4 = var4.bind(var6)(var3);
            var3 = undefined;
            var2 = var5.bind(var3)(var4);
case 53:
            var1 = var2;
case 52:
            return var1;
        }
    };
    var _closure1_slot17 = var7;
    var15 = 17;
    var15 = var17[var15];
    var17 = var16.bind(var1)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/age_gate/AgeGateUtils.tsx';
    var15 = var16.bind(var17)(var15);
    var3['SERVER_AGE_GATE_SOURCES'] = var14;
    var14 = function userNeedsAgeGate() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0014_ip = 54; continue _fun0014 }
case 40:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 8;
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
case 54:
            if(!var1) { _fun0014_ip = 55; continue _fun0014 }
case 56:
            var2 = var2.nsfwAllowed;
            var1 = var3 == var2;
case 55:
            return var1;
        }
    };
    var3['userNeedsAgeGate'] = var14;
    var14 = function guildNeedsAgeGate(arg1) {
        var3 = _closure1_slot11;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.nsfwLevel;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['guildNeedsAgeGate'] = var14;
    var3['shouldAgeVerifyForAgeGate'] = var13;
    var3['useShouldAgeVerifyForAgeGate'] = var12;
    var12 = function useAgeGateVerifyContentForGuild(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var8.bind(var6)(var1);
            var1 = var2.useIsAgeVerified;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot3;
            var1 = arg1;
            var5 = var4.bind(var6)(var1);
            var1 = 12;
            var1 = var3[var1];
            var10 = var8.bind(var6)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0016_ip = 23; continue _fun0016 }
case 24:
                    var2 = var1.nsfwAllowed;
case 23:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var4, var1);
            var4 = _closure1_slot19;
            var9 = var4.bind(var6)();
            var4 = 7;
            var3 = var3[var4];
            var3 = var8.bind(var6)(var3);
            var10 = var3.intl;
            var8 = var10.string;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var4];
            var3 = var11.bind(var6)(var3);
            var11 = var3.t;
            if(var5) { _fun0015_ip = 57; continue _fun0015 }
case 58:
            var3 = var11.ZmwvDc;
            _fun0015_ip = 59; continue _fun0015;
case 57:
            var3 = var11.xi46lg;
case 59:
            var8 = var8.bind(var10)(var3);
            var3 = {};
            if(var9) { _fun0015_ip = 60; continue _fun0015 }
case 61:
            if(var1) { _fun0015_ip = 62; continue _fun0015 }
case 63:
            var3['title'] = var8;
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var9.bind(var6)(var1);
            var10 = var1.intl;
            var9 = var10.string;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var11.bind(var6)(var1);
            var11 = var1.t;
            if(var5) { _fun0015_ip = 64; continue _fun0015 }
case 65:
            var1 = var11.E4Cd5I;
            _fun0015_ip = 66; continue _fun0015;
case 64:
            var1 = var11.ZtuRts;
case 66:
            var1 = var9.bind(var10)(var1);
            var3['description'] = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var4];
            var1 = var9.bind(var6)(var1);
            var12 = var1.intl;
            var11 = var12.string;
            var1 = var10[var4];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.wVq7uo;
            var1 = var11.bind(var12)(var1);
            var3['agreement'] = var1;
            var1 = 13;
            var1 = var10[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.NsfwSpaceWarningModalType;
            var1 = var1.NSFW_CHANNEL_VERIFIED;
            var3['modalType'] = var1;
            var1 = var3;
            _fun0015_ip = 67; continue _fun0015;
case 62:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var4];
            var9 = var10.bind(var6)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var4];
            var9 = var12.bind(var6)(var9);
            var12 = var9.t;
            if(var5) { _fun0015_ip = 68; continue _fun0015 }
case 69:
            var9 = var12.NEabBa;
            _fun0015_ip = 70; continue _fun0015;
case 68:
            var9 = var12.H0SG/g;
case 70:
            var9 = var10.bind(var11)(var9);
            var3['title'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var4];
            var9 = var10.bind(var6)(var9);
            var13 = var9.intl;
            var12 = var13.format;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var4];
            var9 = var10.bind(var6)(var9);
            var9 = var9.t;
            if(var5) { _fun0015_ip = 71; continue _fun0015 }
case 72:
            var10 = var9["2kHZes"];
            _fun0015_ip = 73; continue _fun0015;
case 71:
            var10 = var9["6++3cX"];
case 73:
            var9 = {};
            var15 = _closure1_slot1;
            var11 = _closure1_slot2;
            var14 = 14;
            var14 = var11[var14];
            var16 = var15.bind(var6)(var14);
            var15 = var16.getArticleURL;
            var14 = _closure1_slot9;
            var14 = var14.NSFW_AGE_GATING;
            var14 = var15.bind(var16)(var14);
            var9['helpURL'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            var3['description'] = var9;
            var9 = null;
            var3['agreement'] = var9;
            var10 = _closure1_slot0;
            var9 = 13;
            var9 = var11[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.NsfwSpaceWarningModalType;
            var9 = var9.NSFW_CHANNEL_UNDERAGE;
            var3['modalType'] = var9;
            var1 = var3;
case 67:
            _fun0015_ip = 74; continue _fun0015;
case 60:
            var3['title'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var4];
            var10 = var9.bind(var6)(var10);
            var11 = var10.intl;
            if(var2) { _fun0015_ip = 75; continue _fun0015 }
case 76:
            var12 = var11.string;
            var2 = var8[var4];
            var2 = var9.bind(var6)(var2);
            var10 = var2.t;
            if(var5) { _fun0015_ip = 77; continue _fun0015 }
case 78:
            var2 = var10["5rygLk"];
            var2 = var12.bind(var11)(var2);
            _fun0015_ip = 79; continue _fun0015;
case 77:
            var10 = var10.V6Gmu9;
            var2 = var12.bind(var11)(var10);
case 79:
            var3['description'] = var2;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var4];
            var2 = var10.bind(var6)(var2);
            var14 = var2.intl;
            var13 = var14.string;
            var2 = var12[var4];
            var2 = var10.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.FDSSia;
            var2 = var13.bind(var14)(var2);
            var3['agreement'] = var2;
            var2 = 13;
            var2 = var12[var2];
            var2 = var10.bind(var6)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var2 = var2.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var2;
            var2 = var3;
            _fun0015_ip = 80; continue _fun0015;
case 75:
            var10 = var11.format;
            var8 = var8[var4];
            var8 = var9.bind(var6)(var8);
            var8 = var8.t;
            if(var5) { _fun0015_ip = 81; continue _fun0015 }
case 82:
            var9 = var8.XQZvwn;
            var5 = {};
            var5 = var10.bind(var11)(var9, var5);
            _fun0015_ip = 83; continue _fun0015;
case 81:
            var9 = var8["8tk6bB"];
            var8 = {};
            var5 = var10.bind(var11)(var9, var8);
case 83:
            var3['description'] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var4];
            var8 = var5.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.Zt4Mf4;
            var4 = var8.bind(var9)(var4);
            var3['agreement'] = var4;
            var4 = 13;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.NsfwSpaceWarningModalType;
            var4 = var4.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var4;
            var2 = var3;
case 80:
            var1 = var2;
case 74:
            return var1;
        }
    };
    var3['useAgeGateVerifyContentForGuild'] = var12;
    var12 = function useAgeGateVerifyContent(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.useIsAgeVerified;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot19;
            var2 = var2.bind(var6)();
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER;
            var7 = var4 === var5;
            if(var7) { _fun0017_ip = 84; continue _fun0017 }
case 85:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE;
            var7 = var4 === var5;
case 84:
            if(var7) { _fun0017_ip = 55; continue _fun0017 }
case 86:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE_EMBED;
            var7 = var4 === var5;
case 55:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 12;
            var5 = var9[var5];
            var10 = var8.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0018_ip = 23; continue _fun0018 }
case 24:
                    var2 = var1.nsfwAllowed;
case 23:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var8, var5);
            var8 = _closure1_slot8;
            var8 = var8.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var8)) { _fun0017_ip = 87; continue _fun0017 }
case 88:
            var8 = _closure1_slot8;
            var8 = var8.ACCESS_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var8)) { _fun0017_ip = 87; continue _fun0017 }
case 89:
            if(var1) { _fun0017_ip = 90; continue _fun0017 }
case 91:
            var8 = _closure1_slot8;
            var8 = var8.LARGE_GUILD;
            if(!(var4 !== var8)) { _fun0017_ip = 92; continue _fun0017 }
case 93:
            if(!var5) { _fun0017_ip = 94; continue _fun0017 }
case 95:
            if(!var7) { _fun0017_ip = 94; continue _fun0017 }
case 96:
            if(var2) { _fun0017_ip = 94; continue _fun0017 }
case 97:
            var2 = {};
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
            var9 = var9.H0SG/g;
            var9 = var10.bind(var11)(var9);
            var2['verifyTitle'] = var9;
            var9 = var13[var5];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var5 = var13[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.t;
            var8 = var5["6++3cX"];
            var5 = {};
            var12 = _closure1_slot1;
            var11 = 14;
            var11 = var13[var11];
            var13 = var12.bind(var6)(var11);
            var12 = var13.getArticleURL;
            var11 = _closure1_slot9;
            var11 = var11.AGE_GATE;
            var11 = var12.bind(var13)(var11);
            var5['helpURL'] = var11;
            var5 = var9.bind(var10)(var8, var5);
            var2['verifyGateDescription'] = var5;
            var5 = null;
            var2['verifyAgreementButtonText'] = var5;
            _fun0017_ip = 98; continue _fun0017;
case 94:
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
            var8 = var8.FDSSia;
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
            if(var7) { _fun0017_ip = 99; continue _fun0017 }
case 100:
            var8 = var9["5rygLk"];
            var8 = var10.bind(var11)(var8);
            _fun0017_ip = 101; continue _fun0017;
case 99:
            var9 = var9.V6Gmu9;
            var8 = var10.bind(var11)(var9);
case 101:
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
            if(var7) { _fun0017_ip = 102; continue _fun0017 }
case 103:
            var8 = var9.ZmwvDc;
            var8 = var10.bind(var11)(var8);
            _fun0017_ip = 104; continue _fun0017;
case 102:
            var9 = var9.xi46lg;
            var8 = var10.bind(var11)(var9);
case 104:
            var5['verifyTitle'] = var8;
            var2 = var5;
case 98:
            _fun0017_ip = 105; continue _fun0017;
case 92:
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
            var9 = var9["7ymzsL"];
            var9 = var10.bind(var13)(var9);
            var5['verifyTitle'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.SxY4IW;
            var9 = var10.bind(var13)(var9);
            var5['verifyGateDescription'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.FDSSia;
            var8 = var9.bind(var10)(var8);
            var5['verifyAgreementButtonText'] = var8;
            var2 = var5;
case 105:
            _fun0017_ip = 106; continue _fun0017;
case 90:
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
            var8 = var8.Zt4Mf4;
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
            if(var7) { _fun0017_ip = 107; continue _fun0017 }
case 108:
            var10 = var9.XQZvwn;
            var8 = {};
            var8 = var11.bind(var13)(var10, var8);
            _fun0017_ip = 109; continue _fun0017;
case 107:
            var10 = var9["8tk6bB"];
            var9 = {};
            var8 = var11.bind(var13)(var10, var9);
case 109:
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
            if(var7) { _fun0017_ip = 110; continue _fun0017 }
case 111:
            var7 = var8.ZmwvDc;
            var7 = var9.bind(var10)(var7);
            _fun0017_ip = 112; continue _fun0017;
case 110:
            var8 = var8.xi46lg;
            var7 = var9.bind(var10)(var8);
case 112:
            var5['verifyTitle'] = var7;
            var2 = var5;
case 106:
            return var2;
case 87:
            var2 = _closure1_slot8;
            var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var2)) { _fun0017_ip = 113; continue _fun0017 }
case 114:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            var5 = var2.MjQbfi;
            _fun0017_ip = 115; continue _fun0017;
case 113:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            var5 = var2.u/xsK9;
case 115:
            var2 = {};
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 7;
            var9 = var4[var7];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var4 = var4[var7];
            var4 = var8.bind(var6)(var4);
            var8 = var4.t;
            if(var1) { _fun0017_ip = 116; continue _fun0017 }
case 117:
            var4 = var8.SxY4IW;
            var4 = var9.bind(var10)(var4);
            _fun0017_ip = 118; continue _fun0017;
case 116:
            var8 = var8.SAoMVJ;
            var4 = var9.bind(var10)(var8);
case 118:
            var2['description'] = var4;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var4[var7];
            var4 = var10.bind(var6)(var4);
            var4 = var4.t;
            if(var1) { _fun0017_ip = 119; continue _fun0017 }
case 120:
            var1 = var4.FDSSia;
            var1 = var8.bind(var9)(var1);
            _fun0017_ip = 121; continue _fun0017;
case 119:
            var4 = var4.Zt4Mf4;
            var1 = var8.bind(var9)(var4);
case 121:
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
    var3['useAgeGateVerifyContent'] = var12;
    var3['shouldShowAgeGateForCurrentUser'] = var11;
    var3['shouldShowAgeGateForGuildContentLevel'] = var10;
    var3['shouldShowAgeGateForChannelId'] = var9;
    var3['shouldShowAgeGateForVoiceChannel'] = var8;
    var8 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot16;
            var5 = undefined;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0019_ip = 122; continue _fun0019 }
case 123:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.openAgeGateModal;
            var2 = _closure1_slot8;
            var2 = var2.NSFW_VOICE_CHANNEL;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 122:
            return var1;
        }
    };
    var3['maybeOpenAgeGateForVoiceChannel'] = var8;
    var8 = function maybeShowAgeGate(arg1, arg2, arg3) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg3;
            var5 = _closure1_slot14;
            var1 = undefined;
            var3 = arg1;
            var3 = var5.bind(var1)(var3);
            if(var3) { _fun0020_ip = 124; continue _fun0020 }
case 125:
            var3 = _closure1_slot22;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0020_ip = 48; continue _fun0020 }
case 50:
            var6 = _closure1_slot15;
            var5 = arg2;
            var3 = var6.bind(var1)(var5);
case 48:
            if(!var3) { _fun0020_ip = 126; continue _fun0020 }
case 127:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.openAgeGateModal;
            var7 = null;
            var3 = var4;
            if(!(var7 == var4)) { _fun0020_ip = 55; continue _fun0020 }
case 56:
            var7 = _closure1_slot8;
            var3 = var7.NSFW_CHANNEL;
case 55:
            var3 = var5.bind(var6)(var3);
            _fun0020_ip = 126; continue _fun0020;
case 124:
            var3 = null;
            if(!(var3 != var4)) { _fun0020_ip = 128; continue _fun0020 }
case 129:
            var5 = _closure1_slot12;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0020_ip = 130; continue _fun0020 }
case 128:
            var3 = _closure1_slot8;
            var4 = var3.NSFW_SERVER;
case 130:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openAgeGateModal;
            var2 = var2.bind(var3)(var4);
case 126:
            return var1;
        }
    };
    var3['maybeShowAgeGate'] = var8;
    var3['isChannelOrGuildNSFW'] = var7;
    var7 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0021_ip = 52; continue _fun0021 }
case 131:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.shouldShowTiggerPawtect;
            var2 = var2.bind(var5)();
            var1 = _closure1_slot17;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0021_ip = 7; continue _fun0021 }
case 132:
            var1 = var2;
case 7:
            return var1;
case 52:
            var1 = false;
            return var1;
        }
    };
    var3['isChannelAgeVerificationGated'] = var7;
    var7 = function(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0022_ip = 6; continue _fun0022 }
case 131:
            var5 = _closure1_slot7;
            var3 = var5.getCurrentUser;
            var5 = var3.bind(var5)();
            var6 = var2 == var5;
            var2 = undefined;
            var3 = undefined;
            if(var6) { _fun0022_ip = 133; continue _fun0022 }
case 134:
            var3 = var5.nsfwAllowed;
case 133:
            var1 = _closure1_slot17;
            var1 = var1.bind(var2)(var4);
            if(!var1) { _fun0022_ip = 85; continue _fun0022 }
case 135:
            var2 = true;
            var2 = var2 === var3;
            var1 = !var2;
case 85:
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var3['userCannotSeeNSFWContent'] = var7;
    var3['isChannelContentGated'] = var6;
    var3['useIsChannelContentGated'] = var5;
    var5 = function useShouldHideChannelContent(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot21;
            var5 = undefined;
            var1 = var1.bind(var5)(var4);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 16;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useIsChannelSpoilerGated;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0023_ip = 135; continue _fun0023 }
case 136:
            var1 = var2;
case 135:
            return var1;
        }
    };
    var3['useShouldHideChannelContent'] = var5;
    var3['isCurrentUserMissingDateOfBirth'] = var4;
    var4 = function shouldAgeVerifyForSettingsToggles() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var2 = var6.isFeatureAgeGated;
            var1 = 11;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var1 = var2.bind(var6)(var1);
            var2 = 9;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.shouldShowTiggerPawtect;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0024_ip = 2; continue _fun0024 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['shouldAgeVerifyForSettingsToggles'] = var4;
    var2 = function useShouldAgeVerifyForSettingsToggles() {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var2 = var6.useIsFeatureAgeGated;
            var1 = 11;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var1 = var2.bind(var6)(var1);
            var2 = 9;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useShouldShowTiggerPawtect;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0025_ip = 2; continue _fun0025 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useShouldAgeVerifyForSettingsToggles'] = var2;
    return var1;
})();