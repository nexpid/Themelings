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
            var1 = 9;
            var1 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var1);
            var2 = var3.getIsGidgetPawtectEnabled;
            var1 = 'age-gate-utils';
            var3 = var2.bind(var3)(var1);
            var1 = 10;
            var1 = var8[var1];
            var2 = var7.bind(var6)(var1);
            var1 = var2.shouldShowTiggerPawtect;
            var2 = var1.bind(var2)();
            var1 = 11;
            var1 = var8[var1];
            var5 = var7.bind(var6)(var1);
            var4 = var5.isFeatureAgeGated;
            var1 = 12;
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
            var1 = 11;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.useIsFeatureAgeGated;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var2.bind(var3)(var1);
            var2 = 9;
            var2 = var6[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useIsGidgetPawtectEnabled;
            var2 = 'age-gate-utils';
            var3 = var3.bind(var7)(var2);
            var2 = 10;
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
            var6 = 9;
            var6 = var12[var6];
            var8 = var11.bind(var5)(var6);
            var7 = var8.getIsGidgetPawtectEnabled;
            var6 = 'age-gate-utils';
            var6 = var7.bind(var8)(var6);
            var7 = 11;
            var7 = var12[var7];
            var10 = var11.bind(var5)(var7);
            var8 = var10.isFeatureAgeGated;
            var7 = 12;
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
            var6 = 10;
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
    var14 = 17;
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
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var8.bind(var6)(var1);
            var1 = var2.useIsAgeVerified;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot3;
            var1 = arg1;
            var5 = var4.bind(var6)(var1);
            var1 = 13;
            var1 = var3[var1];
            var10 = var8.bind(var6)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
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
            if(var5) { _fun0011_ip = 11; continue _fun0011 }
case 45:
            var3 = var11.ZmwvDc;
            _fun0011_ip = 46; continue _fun0011;
case 11:
            var3 = var11.xi46lg;
case 46:
            var8 = var8.bind(var10)(var3);
            var3 = {};
            if(var9) { _fun0011_ip = 47; continue _fun0011 }
case 48:
            if(var1) { _fun0011_ip = 49; continue _fun0011 }
case 50:
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
            if(var5) { _fun0011_ip = 51; continue _fun0011 }
case 52:
            var1 = var11.E4Cd5I;
            _fun0011_ip = 53; continue _fun0011;
case 51:
            var1 = var11.ZtuRts;
case 53:
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
            var1 = 14;
            var1 = var10[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.NsfwSpaceWarningModalType;
            var1 = var1.NSFW_CHANNEL_VERIFIED;
            var3['modalType'] = var1;
            var1 = var3;
            _fun0011_ip = 54; continue _fun0011;
case 49:
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
            if(var5) { _fun0011_ip = 55; continue _fun0011 }
case 56:
            var9 = var12.NEabBa;
            _fun0011_ip = 57; continue _fun0011;
case 55:
            var9 = var12.H0SG/g;
case 57:
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
            if(var5) { _fun0011_ip = 58; continue _fun0011 }
case 59:
            var10 = var9.2kHZes;
            _fun0011_ip = 60; continue _fun0011;
case 58:
            var10 = var9.6++3cX;
case 60:
            var9 = {};
            var15 = _closure1_slot1;
            var11 = _closure1_slot2;
            var14 = 15;
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
            var9 = 14;
            var9 = var11[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.NsfwSpaceWarningModalType;
            var9 = var9.NSFW_CHANNEL_UNDERAGE;
            var3['modalType'] = var9;
            var1 = var3;
case 54:
            _fun0011_ip = 61; continue _fun0011;
case 47:
            var3['title'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var4];
            var10 = var9.bind(var6)(var10);
            var11 = var10.intl;
            if(var2) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var12 = var11.string;
            var2 = var8[var4];
            var2 = var9.bind(var6)(var2);
            var10 = var2.t;
            if(var5) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var2 = var10.5rygLk;
            var2 = var12.bind(var11)(var2);
            _fun0011_ip = 66; continue _fun0011;
case 64:
            var10 = var10.V6Gmu9;
            var2 = var12.bind(var11)(var10);
case 66:
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
            var2 = 14;
            var2 = var12[var2];
            var2 = var10.bind(var6)(var2);
            var2 = var2.NsfwSpaceWarningModalType;
            var2 = var2.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var2;
            var2 = var3;
            _fun0011_ip = 67; continue _fun0011;
case 62:
            var10 = var11.format;
            var8 = var8[var4];
            var8 = var9.bind(var6)(var8);
            var8 = var8.t;
            if(var5) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var9 = var8.XQZvwn;
            var5 = {};
            var5 = var10.bind(var11)(var9, var5);
            _fun0011_ip = 70; continue _fun0011;
case 68:
            var9 = var8.8tk6bB;
            var8 = {};
            var5 = var10.bind(var11)(var9, var8);
case 70:
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
            var4 = 14;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.NsfwSpaceWarningModalType;
            var4 = var4.NSFW_CHANNEL_AGE_VERIFY;
            var3['modalType'] = var4;
            var2 = var3;
case 67:
            var1 = var2;
case 61:
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
            var1 = 10;
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
            if(var7) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE;
            var7 = var4 === var5;
case 71:
            if(var7) { _fun0013_ip = 41; continue _fun0013 }
case 73:
            var5 = _closure1_slot8;
            var5 = var5.NSFW_SERVER_INVITE_EMBED;
            var7 = var4 === var5;
case 41:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 13;
            var5 = var9[var5];
            var10 = var8.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var5;
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
            var5 = var9.bind(var10)(var8, var5);
            var8 = _closure1_slot8;
            var8 = var8.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var8)) { _fun0013_ip = 74; continue _fun0013 }
case 75:
            var8 = _closure1_slot8;
            var8 = var8.ACCESS_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var8)) { _fun0013_ip = 74; continue _fun0013 }
case 76:
            if(var1) { _fun0013_ip = 77; continue _fun0013 }
case 78:
            var8 = _closure1_slot8;
            var8 = var8.LARGE_GUILD;
            if(!(var4 !== var8)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
            if(!var5) { _fun0013_ip = 81; continue _fun0013 }
case 82:
            if(!var7) { _fun0013_ip = 81; continue _fun0013 }
case 83:
            if(var2) { _fun0013_ip = 81; continue _fun0013 }
case 84:
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
            var8 = var5.6++3cX;
            var5 = {};
            var12 = _closure1_slot1;
            var11 = 15;
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
            _fun0013_ip = 85; continue _fun0013;
case 81:
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
            if(var7) { _fun0013_ip = 86; continue _fun0013 }
case 87:
            var8 = var9.5rygLk;
            var8 = var10.bind(var11)(var8);
            _fun0013_ip = 88; continue _fun0013;
case 86:
            var9 = var9.V6Gmu9;
            var8 = var10.bind(var11)(var9);
case 88:
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
            if(var7) { _fun0013_ip = 89; continue _fun0013 }
case 90:
            var8 = var9.ZmwvDc;
            var8 = var10.bind(var11)(var8);
            _fun0013_ip = 91; continue _fun0013;
case 89:
            var9 = var9.xi46lg;
            var8 = var10.bind(var11)(var9);
case 91:
            var5['verifyTitle'] = var8;
            var2 = var5;
case 85:
            _fun0013_ip = 92; continue _fun0013;
case 79:
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
            var9 = var9.7ymzsL;
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
case 92:
            _fun0013_ip = 93; continue _fun0013;
case 77:
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
            if(var7) { _fun0013_ip = 94; continue _fun0013 }
case 95:
            var10 = var9.XQZvwn;
            var8 = {};
            var8 = var11.bind(var13)(var10, var8);
            _fun0013_ip = 96; continue _fun0013;
case 94:
            var10 = var9.8tk6bB;
            var9 = {};
            var8 = var11.bind(var13)(var10, var9);
case 96:
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
            if(var7) { _fun0013_ip = 97; continue _fun0013 }
case 98:
            var7 = var8.ZmwvDc;
            var7 = var9.bind(var10)(var7);
            _fun0013_ip = 99; continue _fun0013;
case 97:
            var8 = var8.xi46lg;
            var7 = var9.bind(var10)(var8);
case 99:
            var5['verifyTitle'] = var7;
            var2 = var5;
case 93:
            return var2;
case 74:
            var2 = _closure1_slot8;
            var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
            if(!(var4 !== var2)) { _fun0013_ip = 100; continue _fun0013 }
case 101:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            var5 = var2.MjQbfi;
            _fun0013_ip = 102; continue _fun0013;
case 100:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            var5 = var2.u/xsK9;
case 102:
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
            if(var1) { _fun0013_ip = 103; continue _fun0013 }
case 104:
            var4 = var8.SxY4IW;
            var4 = var9.bind(var10)(var4);
            _fun0013_ip = 105; continue _fun0013;
case 103:
            var8 = var8.SAoMVJ;
            var4 = var9.bind(var10)(var8);
case 105:
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
            if(var1) { _fun0013_ip = 106; continue _fun0013 }
case 107:
            var1 = var4.FDSSia;
            var1 = var8.bind(var9)(var1);
            _fun0013_ip = 108; continue _fun0013;
case 106:
            var4 = var4.Zt4Mf4;
            var1 = var8.bind(var9)(var4);
case 108:
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
            if(var3) { _fun0015_ip = 109; continue _fun0015 }
case 110:
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
case 109:
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
            if(var3) { _fun0016_ip = 111; continue _fun0016 }
case 112:
            var3 = _closure1_slot21;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0016_ip = 34; continue _fun0016 }
case 36:
            var6 = _closure1_slot15;
            var5 = arg2;
            var3 = var6.bind(var1)(var5);
case 34:
            if(!var3) { _fun0016_ip = 113; continue _fun0016 }
case 114:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
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
            _fun0016_ip = 113; continue _fun0016;
case 111:
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 115; continue _fun0016 }
case 116:
            var5 = _closure1_slot12;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0016_ip = 117; continue _fun0016 }
case 115:
            var3 = _closure1_slot8;
            var4 = var3.NSFW_SERVER;
case 117:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openAgeGateModal;
            var2 = var2.bind(var3)(var4);
case 113:
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
case 118:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.shouldShowTiggerPawtect;
            var2 = var2.bind(var5)();
            var1 = _closure1_slot17;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0017_ip = 9; continue _fun0017 }
case 119:
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
case 118:
            var5 = _closure1_slot7;
            var3 = var5.getCurrentUser;
            var5 = var3.bind(var5)();
            var6 = var2 == var5;
            var2 = undefined;
            var3 = undefined;
            if(var6) { _fun0018_ip = 120; continue _fun0018 }
case 121:
            var3 = var5.nsfwAllowed;
case 120:
            var1 = _closure1_slot17;
            var1 = var1.bind(var2)(var4);
            if(!var1) { _fun0018_ip = 72; continue _fun0018 }
case 122:
            var2 = true;
            var2 = var2 === var3;
            var1 = !var2;
case 72:
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
            var1 = 10;
            var1 = var12[var1];
            var7 = undefined;
            var2 = var11.bind(var7)(var1);
            var1 = var2.useShouldShowTiggerPawtect;
            var2 = var1.bind(var2)();
            var10 = 13;
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
                    if(var5) { _fun0020_ip = 123; continue _fun0020 }
case 124:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 123:
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
            var1 = 11;
            var1 = var12[var1];
            var13 = var11.bind(var7)(var1);
            var3 = var13.useIsFeatureAgeGated;
            var1 = 12;
            var1 = var12[var1];
            var1 = var11.bind(var7)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.AGE_GATED_SPACES;
            var1 = var3.bind(var13)(var1);
            var3 = 9;
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
                    if(var5) { _fun0022_ip = 125; continue _fun0022 }
case 126:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 125:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var11.bind(var12)(var10, var6);
            if(!var5) { _fun0019_ip = 127; continue _fun0019 }
case 128:
            var5 = !var9;
case 127:
            var5 = !var5;
            if(var5) { _fun0019_ip = 129; continue _fun0019 }
case 130:
            if(var1) { _fun0019_ip = 131; continue _fun0019 }
case 132:
            var1 = var3;
case 131:
            if(!var1) { _fun0019_ip = 133; continue _fun0019 }
case 134:
            var1 = var2;
case 133:
            var5 = var1;
case 129:
            var3 = null;
            var1 = var3 != var8;
            if(!var1) { _fun0019_ip = 135; continue _fun0019 }
case 136:
            var2 = var8.isNSFW;
            var2 = var2.bind(var8)();
            var8 = !var2;
            if(var8) { _fun0019_ip = 137; continue _fun0019 }
case 138:
            var8 = !var5;
case 137:
            var2 = !var8;
            if(!var8) { _fun0019_ip = 139; continue _fun0019 }
case 140:
            var3 = var3 != var6;
            if(!var3) { _fun0019_ip = 141; continue _fun0019 }
case 142:
            var4 = _closure1_slot3;
            var4 = var4.bind(var7)(var6);
            var4 = !var4;
            if(var4) { _fun0019_ip = 143; continue _fun0019 }
case 144:
            var4 = !var5;
case 143:
            var3 = !var4;
case 141:
            var2 = var3;
case 139:
            var1 = var2;
case 135:
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
            var1 = 11;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.isFeatureAgeGated;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var3 = var2.bind(var3)(var1);
            var1 = 9;
            var1 = var6[var1];
            var7 = var5.bind(var4)(var1);
            var2 = var7.getIsGidgetPawtectEnabled;
            var1 = 'age-gate-utils';
            var1 = var2.bind(var7)(var1);
            var2 = 10;
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
            var1 = 11;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.useIsFeatureAgeGated;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var3 = var2.bind(var3)(var1);
            var1 = 9;
            var1 = var6[var1];
            var7 = var5.bind(var4)(var1);
            var2 = var7.useIsGidgetPawtectEnabled;
            var1 = 'age-gate-utils';
            var1 = var2.bind(var7)(var1);
            var2 = 10;
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