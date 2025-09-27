// app/modules/guild_profile/hooks/useGuildProfileCTA.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var14 = 0;
    var6 = var8[var14];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var13 = 1;
    var4 = var8[var13];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 2;
    var4 = var8[var12];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var11 = 3;
    var4 = var8[var11];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var8[var10];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var9 = 5;
    var4 = var8[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var6 = 6;
    var4 = var8[var6];
    var4 = var7.bind(var1)(var4);
    var5 = var4.InviteStates;
    var _closure1_slot9 = var5;
    var4 = var4.GuildFeatures;
    var _closure1_slot10 = var4;
    var5 = {};
    var5['IS_MEMBER'] = var14;
    var4 = 'IS_MEMBER';
    var5[var14] = var4;
    var5['ADOPT_TAG'] = var13;
    var4 = 'ADOPT_TAG';
    var5[var13] = var4;
    var5['HAS_APPLICATION'] = var12;
    var4 = 'HAS_APPLICATION';
    var5[var12] = var4;
    var5['APPLY_TO_JOIN'] = var11;
    var4 = 'APPLY_TO_JOIN';
    var5[var11] = var4;
    var5['LURK_DISCOVERABLE'] = var10;
    var4 = 'LURK_DISCOVERABLE';
    var5[var10] = var4;
    var5['JOIN_VIA_INVITE'] = var9;
    var4 = 'JOIN_VIA_INVITE';
    var5[var9] = var4;
    var5['ACCEPT_ROLES'] = var6;
    var4 = 'ACCEPT_ROLES';
    var5[var6] = var4;
    var _closure1_slot11 = var5;
    var4 = {};
    var6 = 'INVITE';
    var4['INVITE'] = var6;
    var _closure1_slot12 = var4;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_profile/hooks/useGuildProfileCTA.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useGuildProfileCTA(arg1, arg2, arg3) {
        var12 = arg1;
        var10 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var10;
        var _closure2_slot2 = var2;
        var4 = var12.id;
        var _closure2_slot3 = var4;
        var13 = var12.features;
        var _closure2_slot4 = var13;
        var8 = _closure1_slot0;
        var16 = _closure1_slot2;
        var5 = 7;
        var7 = var16[var5];
        var6 = undefined;
        var14 = var8.bind(var6)(var7);
        var11 = var14.useStateFromStores;
        var7 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var11 = var11.bind(var14)(var9, var7);
        var _closure2_slot5 = var11;
        var7 = var16[var5];
        var15 = var8.bind(var6)(var7);
        var14 = var15.useStateFromStores;
        var7 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var1 = _closure2_slot3;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var14.bind(var15)(var9, var7);
        var _closure2_slot6 = var9;
        var7 = var16[var5];
        var18 = var8.bind(var6)(var7);
        var17 = var18.useStateFromStores;
        var7 = _closure1_slot8;
        var15 = new Array(1);
        var15[0] = var7;
        var14 = new Array(1);
        var14[0] = var11;
        var7 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getUser;
            var1 = _closure2_slot5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var17.bind(var18)(var15, var7, var14);
        var _closure2_slot7 = var7;
        var14 = var16[var5];
        var18 = var8.bind(var6)(var14);
        var17 = var18.useStateFromStores;
        var14 = _closure1_slot5;
        var15 = new Array(1);
        var15[0] = var14;
        var14 = new Array(2);
        var14[0] = var4;
        var14[1] = var11;
        var11 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot3;
                var2 = null;
                var4 = var2 != var3;
                var3 = null;
                if(!var4) { _fun0001_ip = 45; continue _fun0001 }
 18:
                var6 = _closure1_slot5;
                var5 = var6.getMember;
                var4 = _closure2_slot3;
                var1 = _closure2_slot5;
                var3 = var5.bind(var6)(var4, var1);
 45:
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0001_ip = 60; continue _fun0001 }
 54:
                var1 = var3.joinedAt;
 60:
                var1 = var2 != var1;
                return var1;
            }
        };
        var15 = var17.bind(var18)(var15, var11, var14);
        var _closure2_slot8 = var15;
        var5 = var16[var5];
        var14 = var8.bind(var6)(var5);
        var11 = var14.useStateFromStoresObject;
        var5 = _closure1_slot7;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = new Array(2);
        var5[0] = var4;
        var5[1] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot2;
                var4 = null;
                if(!(var4 == var2)) { _fun0002_ip = 37; continue _fun0002 }
 13:
                var5 = _closure1_slot7;
                var3 = var5.getInviteKeyForGuildId;
                var2 = _closure2_slot3;
                var5 = var3.bind(var5)(var2);
                _fun0002_ip = 41; continue _fun0002;
 37:
                var5 = _closure2_slot2;
 41:
                var1 = var4 != var5;
                var2 = null;
                if(!var1) { _fun0002_ip = 68; continue _fun0002 }
 50:
                var3 = _closure1_slot7;
                var1 = var3.getInvite;
                var2 = var1.bind(var3)(var5);
 68:
                if(!(var4 != var2)) { _fun0002_ip = 227; continue _fun0002 }
 75:
                var6 = var2.state;
                var1 = _closure1_slot9;
                var1 = var1.BANNED;
                if(!(var6 !== var1)) { _fun0002_ip = 227; continue _fun0002 }
 100:
                var6 = var2.state;
                var1 = _closure1_slot9;
                var1 = var1.EXPIRED;
                if(!(var6 !== var1)) { _fun0002_ip = 227; continue _fun0002 }
 119:
                var1 = {};
                var1['validInviteKey'] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var8 = undefined;
                var6 = var6.bind(var8)(var5);
                var5 = var6.hasFlag;
                var7 = var2.flags;
                var9 = var4 != var7;
                var4 = 0;
                if(!var9) { _fun0002_ip = 171; continue _fun0002 }
 168:
                var4 = var7;
 171:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.GuildInviteFlags;
                var3 = var3.IS_APPLICATION_BYPASS;
                var3 = var5.bind(var6)(var4, var3);
                var1['isBypassInvite'] = var3;
                var2 = var2.roles;
                var1['inviteRoles'] = var2;
                _fun0002_ip = 237; continue _fun0002;
 227:
                var1 = {'validInviteKey': null, 'isBypassInvite': false, 'inviteRoles': null};
 237:
                return var1;
            }
        };
        var5 = var11.bind(var14)(var8, var2, var5);
        var2 = var5.validInviteKey;
        var _closure2_slot9 = var2;
        var11 = var5.isBypassInvite;
        var _closure2_slot10 = var11;
        var8 = var5.inviteRoles;
        var _closure2_slot11 = var8;
        var14 = _closure1_slot1;
        var5 = 10;
        var5 = var16[var5];
        var5 = var14.bind(var6)(var5);
        var14 = var5.bind(var6)();
        var _closure2_slot12 = var14;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var3 = new Array(12);
        var3[0] = var15;
        var3[1] = var14;
        var3[2] = var4;
        var3[3] = var13;
        var3[4] = var2;
        var13 = var12.visibility;
        var3[5] = var13;
        var12 = var12.tag;
        var3[6] = var12;
        var3[7] = var11;
        var3[8] = var10;
        var3[9] = var9;
        var3[10] = var8;
        var3[11] = var7;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot8;
                if(var1) { _fun0003_ip = 290; continue _fun0003 }
 15:
                var5 = _closure2_slot12;
                var4 = var5.includes;
                var1 = _closure2_slot3;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0003_ip = 275; continue _fun0003 }
 39:
                var1 = _closure2_slot4;
                var7 = null;
                if(!(var7 != var1)) { _fun0003_ip = 192; continue _fun0003 }
 52:
                var6 = _closure2_slot4;
                var5 = var6.includes;
                var4 = _closure1_slot10;
                var4 = var4.MEMBER_VERIFICATION_GATE_ENABLED;
                var4 = var5.bind(var6)(var4);
                if(!var4) { _fun0003_ip = 192; continue _fun0003 }
 82:
                var4 = _closure2_slot4;
                if(!(var7 != var4)) { _fun0003_ip = 192; continue _fun0003 }
 90:
                var6 = _closure2_slot4;
                var5 = var6.includes;
                var4 = _closure1_slot10;
                var4 = var4.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var4 = var5.bind(var6)(var4);
                if(!var4) { _fun0003_ip = 192; continue _fun0003 }
 117:
                var4 = _closure2_slot9;
                if(!(var7 == var4)) { _fun0003_ip = 173; continue _fun0003 }
 125:
                var4 = _closure2_slot0;
                var5 = var4.visibility;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 12;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.GuildProfileVisibility;
                var4 = var4.PUBLIC_WITH_RECRUITMENT;
                if(!(var5 === var4)) { _fun0003_ip = 192; continue _fun0003 }
 173:
                var4 = _closure2_slot10;
                if(var4) { _fun0003_ip = 192; continue _fun0003 }
 180:
                var1 = _closure1_slot11;
                var1 = var1.APPLY_TO_JOIN;
                _fun0003_ip = 273; continue _fun0003;
 192:
                var4 = _closure2_slot9;
                if(!(var7 == var4)) { _fun0003_ip = 257; continue _fun0003 }
 200:
                var4 = _closure2_slot4;
                var5 = var7 != var4;
                var4 = null;
                if(!var5) { _fun0003_ip = 255; continue _fun0003 }
 213:
                var9 = _closure2_slot4;
                var8 = var9.includes;
                var6 = _closure1_slot10;
                var6 = var6.DISCOVERABLE;
                var6 = var8.bind(var9)(var6);
                var4 = null;
                if(!var6) { _fun0003_ip = 255; continue _fun0003 }
 245:
                var5 = _closure1_slot11;
                var4 = var5.LURK_DISCOVERABLE;
 255:
                _fun0003_ip = 270; continue _fun0003;
 257:
                var5 = _closure1_slot11;
                var4 = var5.JOIN_VIA_INVITE;
 270:
                var1 = var4;
 273:
                _fun0003_ip = 288; continue _fun0003;
 275:
                var4 = _closure1_slot11;
                var1 = var4.HAS_APPLICATION;
 288:
                return var1;
 290:
                var5 = _closure2_slot1;
                var4 = _closure1_slot12;
                var4 = var4.INVITE;
                if(!(var5 === var4)) { _fun0003_ip = 466; continue _fun0003 }
 314:
                var4 = _closure2_slot11;
                var5 = null;
                if(!(var5 != var4)) { _fun0003_ip = 466; continue _fun0003 }
 327:
                var4 = _closure2_slot11;
                var6 = var4.length;
                var4 = 0;
                if(!(var6 > var4)) { _fun0003_ip = 466; continue _fun0003 }
 345:
                var4 = _closure2_slot7;
                if(!(var5 != var4)) { _fun0003_ip = 466; continue _fun0003 }
 353:
                var8 = _closure1_slot5;
                var7 = var8.getMember;
                var6 = _closure2_slot3;
                var4 = _closure2_slot7;
                var4 = var4.id;
                var7 = var7.bind(var8)(var6, var4);
                var4 = global;
                var6 = var4.Set;
                var8 = var5 == var7;
                var4 = undefined;
                if(var8) { _fun0003_ip = 405; continue _fun0003 }
 399:
                var4 = var7.roles;
 405:
                if(!(var5 == var4)) { _fun0003_ip = 413; continue _fun0003 }
 409:
                var4 = new Array(0);
 413:
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var12 = var5;
                var11 = var4;
                var4 = new var12[var6](var11, var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var _closure3_slot0 = var4;
                var5 = _closure2_slot11;
                var4 = var5.some;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0003_ip = 644; continue _fun0003 }
 466:
                var3 = _closure2_slot7;
                var4 = null;
                var3 = var4 == var3;
                var5 = undefined;
                var6 = undefined;
                if(var3) { _fun0003_ip = 493; continue _fun0003 }
 483:
                var3 = _closure2_slot7;
                var6 = var3.primaryGuild;
 493:
                var3 = var4 == var6;
                var7 = undefined;
                if(var3) { _fun0003_ip = 508; continue _fun0003 }
 502:
                var7 = var6.identityGuildId;
 508:
                var3 = _closure2_slot3;
                var3 = var7 === var3;
                if(!var3) { _fun0003_ip = 540; continue _fun0003 }
 519:
                var8 = var4 == var6;
                var7 = undefined;
                if(var8) { _fun0003_ip = 534; continue _fun0003 }
 528:
                var7 = var6.identityEnabled;
 534:
                var6 = true;
                var3 = var6 === var7;
 540:
                var7 = _closure2_slot1;
                var6 = _closure1_slot12;
                var6 = var6.INVITE;
                if(!(var7 !== var6)) { _fun0003_ip = 632; continue _fun0003 }
 558:
                var6 = _closure2_slot0;
                var6 = var6.tag;
                if(!(var4 != var6)) { _fun0003_ip = 632; continue _fun0003 }
 571:
                if(var3) { _fun0003_ip = 632; continue _fun0003 }
 574:
                var3 = _closure2_slot6;
                if(!(var4 != var3)) { _fun0003_ip = 632; continue _fun0003 }
 582:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.guildSupportsTags;
                var2 = _closure2_slot6;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0003_ip = 632; continue _fun0003 }
 620:
                var2 = _closure1_slot11;
                var2 = var2.ADOPT_TAG;
                _fun0003_ip = 642; continue _fun0003;
 632:
                var3 = _closure1_slot11;
                var2 = var3.IS_MEMBER;
 642:
                return var2;
 644:
                var1 = _closure1_slot11;
                var1 = var1.ACCEPT_ROLES;
                return var1;
            }
        };
        var3 = var5.bind(var6)(var1, var3);
        var1 = {};
        var1['guildId'] = var4;
        var1['ctaType'] = var3;
        var1['validInviteKey'] = var2;
        return var1;
    };
    var3['default'] = var6;
    var3['CTATypes'] = var5;
    var3['GuildProfileCTAContext'] = var4;
    var2 = function getGuildProfileCTAType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var10 = var4.id;
            var7 = var4.features;
            var3 = _closure1_slot4;
            var1 = var3.getId;
            var8 = var1.bind(var3)();
            var5 = null;
            var1 = var5 != var10;
            var3 = null;
            if(!var1) { _fun0004_ip = 58; continue _fun0004 }
 42:
            var6 = _closure1_slot5;
            var1 = var6.getMember;
            var3 = var1.bind(var6)(var10, var8);
 58:
            var6 = var5 == var3;
            var9 = undefined;
            var1 = undefined;
            if(var6) { _fun0004_ip = 75; continue _fun0004 }
 69:
            var1 = var3.joinedAt;
 75:
            var6 = var5 != var1;
            var3 = _closure1_slot7;
            var1 = var3.getInviteKeyForGuildId;
            var11 = var1.bind(var3)(var10);
            var1 = var5 != var11;
            var8 = null;
            if(!var1) { _fun0004_ip = 118; continue _fun0004 }
 103:
            var3 = _closure1_slot7;
            var1 = var3.getInvite;
            var8 = var1.bind(var3)(var11);
 118:
            var12 = var5 == var8;
            var3 = null;
            var1 = false;
            if(var12) { _fun0004_ip = 262; continue _fun0004 }
 132:
            var13 = var8.state;
            var12 = _closure1_slot9;
            var12 = var12.BANNED;
            var3 = null;
            var1 = false;
            if(!(var13 !== var12)) { _fun0004_ip = 262; continue _fun0004 }
 155:
            var13 = var8.state;
            var12 = _closure1_slot9;
            var12 = var12.EXPIRED;
            var3 = null;
            var1 = false;
            if(!(var13 !== var12)) { _fun0004_ip = 262; continue _fun0004 }
 178:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 8;
            var12 = var14[var12];
            var14 = var13.bind(var9)(var12);
            var13 = var14.hasFlag;
            var8 = var8.flags;
            var15 = var5 != var8;
            var12 = 0;
            if(!var15) { _fun0004_ip = 221; continue _fun0004 }
 218:
            var12 = var8;
 221:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 9;
            var8 = var16[var8];
            var8 = var15.bind(var9)(var8);
            var8 = var8.GuildInviteFlags;
            var8 = var8.IS_APPLICATION_BYPASS;
            var1 = var13.bind(var14)(var12, var8);
            var3 = var11;
 262:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var11 = var11.bind(var9)(var8);
            var8 = var11.getPendingFolderGuildIds;
            var8 = var8.bind(var11)();
            if(var6) { _fun0004_ip = 506; continue _fun0004 }
 298:
            var6 = var8.includes;
            var6 = var6.bind(var8)(var10);
            if(var6) { _fun0004_ip = 494; continue _fun0004 }
 314:
            if(!(var5 != var7)) { _fun0004_ip = 429; continue _fun0004 }
 318:
            var8 = var7.includes;
            var6 = _closure1_slot10;
            var6 = var6.MEMBER_VERIFICATION_GATE_ENABLED;
            var6 = var8.bind(var7)(var6);
            if(!var6) { _fun0004_ip = 429; continue _fun0004 }
 341:
            if(!(var5 != var7)) { _fun0004_ip = 429; continue _fun0004 }
 345:
            var8 = var7.includes;
            var6 = _closure1_slot10;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var8.bind(var7)(var6);
            if(!var6) { _fun0004_ip = 429; continue _fun0004 }
 368:
            if(!(var5 == var3)) { _fun0004_ip = 414; continue _fun0004 }
 372:
            var6 = var4.visibility;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 12;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.GuildProfileVisibility;
            var4 = var4.PUBLIC_WITH_RECRUITMENT;
            if(!(var6 === var4)) { _fun0004_ip = 429; continue _fun0004 }
 414:
            if(var1) { _fun0004_ip = 429; continue _fun0004 }
 417:
            var1 = _closure1_slot11;
            var1 = var1.APPLY_TO_JOIN;
            _fun0004_ip = 492; continue _fun0004;
 429:
            if(!(var5 == var3)) { _fun0004_ip = 479; continue _fun0004 }
 433:
            var4 = var5 != var7;
            var3 = null;
            if(!var4) { _fun0004_ip = 477; continue _fun0004 }
 442:
            var6 = var7.includes;
            var4 = _closure1_slot10;
            var4 = var4.DISCOVERABLE;
            var4 = var6.bind(var7)(var4);
            var3 = null;
            if(!var4) { _fun0004_ip = 477; continue _fun0004 }
 467:
            var4 = _closure1_slot11;
            var3 = var4.LURK_DISCOVERABLE;
 477:
            _fun0004_ip = 489; continue _fun0004;
 479:
            var4 = _closure1_slot11;
            var3 = var4.JOIN_VIA_INVITE;
 489:
            var1 = var3;
 492:
            _fun0004_ip = 504; continue _fun0004;
 494:
            var3 = _closure1_slot11;
            var1 = var3.HAS_APPLICATION;
 504:
            _fun0004_ip = 516; continue _fun0004;
 506:
            var2 = _closure1_slot11;
            var1 = var2.IS_MEMBER;
 516:
            return var1;
        }
    };
    var3['getGuildProfileCTAType'] = var2;
    return var1;
})();