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
case 0:
                var3 = _closure2_slot3;
                var2 = null;
                var4 = var2 != var3;
                var3 = null;
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot5;
                var5 = var6.getMember;
                var4 = _closure2_slot3;
                var1 = _closure2_slot5;
                var3 = var5.bind(var6)(var4, var1);
case 2:
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var3.joinedAt;
case 4:
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
case 0:
                var2 = _closure2_slot2;
                var4 = null;
                if(!(var4 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = _closure1_slot7;
                var3 = var5.getInviteKeyForGuildId;
                var2 = _closure2_slot3;
                var5 = var3.bind(var5)(var2);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var5 = _closure2_slot2;
case 8:
                var1 = var4 != var5;
                var2 = null;
                if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = _closure1_slot7;
                var1 = var3.getInvite;
                var2 = var1.bind(var3)(var5);
case 9:
                if(!(var4 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var6 = var2.state;
                var1 = _closure1_slot9;
                var1 = var1.BANNED;
                if(!(var6 !== var1)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                var6 = var2.state;
                var1 = _closure1_slot9;
                var1 = var1.EXPIRED;
                if(!(var6 !== var1)) { _fun0002_ip = 11; continue _fun0002 }
case 14:
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
                if(!var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var4 = var7;
case 15:
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
                _fun0002_ip = 17; continue _fun0002;
case 11:
                var1 = {'validInviteKey': null, 'isBypassInvite': false, 'inviteRoles': null};
case 17:
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
case 0:
                var1 = _closure2_slot8;
                if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var5 = _closure2_slot12;
                var4 = var5.includes;
                var1 = _closure2_slot3;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var1 = _closure2_slot4;
                var7 = null;
                if(!(var7 != var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var6 = _closure2_slot4;
                var5 = var6.includes;
                var4 = _closure1_slot10;
                var4 = var4.MEMBER_VERIFICATION_GATE_ENABLED;
                var4 = var5.bind(var6)(var4);
                if(!var4) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                var4 = _closure2_slot4;
                if(!(var7 != var4)) { _fun0003_ip = 22; continue _fun0003 }
case 25:
                var6 = _closure2_slot4;
                var5 = var6.includes;
                var4 = _closure1_slot10;
                var4 = var4.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var4 = var5.bind(var6)(var4);
                if(!var4) { _fun0003_ip = 22; continue _fun0003 }
case 26:
                var4 = _closure2_slot9;
                if(!(var7 == var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
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
                if(!(var5 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 27:
                var4 = _closure2_slot10;
                if(var4) { _fun0003_ip = 22; continue _fun0003 }
case 29:
                var1 = _closure1_slot11;
                var1 = var1.APPLY_TO_JOIN;
                _fun0003_ip = 30; continue _fun0003;
case 22:
                var4 = _closure2_slot9;
                if(!(var7 == var4)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var4 = _closure2_slot4;
                var5 = var7 != var4;
                var4 = null;
                if(!var5) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var9 = _closure2_slot4;
                var8 = var9.includes;
                var6 = _closure1_slot10;
                var6 = var6.DISCOVERABLE;
                var6 = var8.bind(var9)(var6);
                var4 = null;
                if(!var6) { _fun0003_ip = 33; continue _fun0003 }
case 35:
                var5 = _closure1_slot11;
                var4 = var5.LURK_DISCOVERABLE;
case 33:
                _fun0003_ip = 36; continue _fun0003;
case 31:
                var5 = _closure1_slot11;
                var4 = var5.JOIN_VIA_INVITE;
case 36:
                var1 = var4;
case 30:
                _fun0003_ip = 37; continue _fun0003;
case 20:
                var4 = _closure1_slot11;
                var1 = var4.HAS_APPLICATION;
case 37:
                return var1;
case 18:
                var5 = _closure2_slot1;
                var4 = _closure1_slot12;
                var4 = var4.INVITE;
                if(!(var5 === var4)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                var4 = _closure2_slot11;
                var5 = null;
                if(!(var5 != var4)) { _fun0003_ip = 38; continue _fun0003 }
case 40:
                var4 = _closure2_slot11;
                var6 = var4.length;
                var4 = 0;
                if(!(var6 > var4)) { _fun0003_ip = 38; continue _fun0003 }
case 41:
                var4 = _closure2_slot7;
                if(!(var5 != var4)) { _fun0003_ip = 38; continue _fun0003 }
case 42:
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
                if(var8) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var4 = var7.roles;
case 43:
                if(!(var5 == var4)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var4 = new Array(0);
case 45:
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
                if(var3) { _fun0003_ip = 47; continue _fun0003 }
case 38:
                var3 = _closure2_slot7;
                var4 = null;
                var3 = var4 == var3;
                var5 = undefined;
                var6 = undefined;
                if(var3) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var3 = _closure2_slot7;
                var6 = var3.primaryGuild;
case 48:
                var3 = var4 == var6;
                var7 = undefined;
                if(var3) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var7 = var6.identityGuildId;
case 50:
                var3 = _closure2_slot3;
                var3 = var7 === var3;
                if(!var3) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var8 = var4 == var6;
                var7 = undefined;
                if(var8) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var7 = var6.identityEnabled;
case 54:
                var6 = true;
                var3 = var6 === var7;
case 52:
                var7 = _closure2_slot1;
                var6 = _closure1_slot12;
                var6 = var6.INVITE;
                if(!(var7 !== var6)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var6 = _closure2_slot0;
                var6 = var6.tag;
                if(!(var4 != var6)) { _fun0003_ip = 56; continue _fun0003 }
case 58:
                if(var3) { _fun0003_ip = 56; continue _fun0003 }
case 59:
                var3 = _closure2_slot6;
                if(!(var4 != var3)) { _fun0003_ip = 56; continue _fun0003 }
case 60:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.guildSupportsTags;
                var2 = _closure2_slot6;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0003_ip = 56; continue _fun0003 }
case 61:
                var2 = _closure1_slot11;
                var2 = var2.ADOPT_TAG;
                _fun0003_ip = 62; continue _fun0003;
case 56:
                var3 = _closure1_slot11;
                var2 = var3.IS_MEMBER;
case 62:
                return var2;
case 47:
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
case 0:
            var4 = arg1;
            var10 = var4.id;
            var7 = var4.features;
            var3 = _closure1_slot4;
            var1 = var3.getId;
            var8 = var1.bind(var3)();
            var5 = null;
            var1 = var5 != var10;
            var3 = null;
            if(!var1) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var6 = _closure1_slot5;
            var1 = var6.getMember;
            var3 = var1.bind(var6)(var10, var8);
case 63:
            var6 = var5 == var3;
            var9 = undefined;
            var1 = undefined;
            if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 65:
            var1 = var3.joinedAt;
case 12:
            var6 = var5 != var1;
            var3 = _closure1_slot7;
            var1 = var3.getInviteKeyForGuildId;
            var11 = var1.bind(var3)(var10);
            var1 = var5 != var11;
            var8 = null;
            if(!var1) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var3 = _closure1_slot7;
            var1 = var3.getInvite;
            var8 = var1.bind(var3)(var11);
case 66:
            var12 = var5 == var8;
            var3 = null;
            var1 = false;
            if(var12) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var13 = var8.state;
            var12 = _closure1_slot9;
            var12 = var12.BANNED;
            var3 = null;
            var1 = false;
            if(!(var13 !== var12)) { _fun0004_ip = 68; continue _fun0004 }
case 70:
            var13 = var8.state;
            var12 = _closure1_slot9;
            var12 = var12.EXPIRED;
            var3 = null;
            var1 = false;
            if(!(var13 !== var12)) { _fun0004_ip = 68; continue _fun0004 }
case 71:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 8;
            var12 = var14[var12];
            var14 = var13.bind(var9)(var12);
            var13 = var14.hasFlag;
            var8 = var8.flags;
            var15 = var5 != var8;
            var12 = 0;
            if(!var15) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var12 = var8;
case 72:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 9;
            var8 = var16[var8];
            var8 = var15.bind(var9)(var8);
            var8 = var8.GuildInviteFlags;
            var8 = var8.IS_APPLICATION_BYPASS;
            var1 = var13.bind(var14)(var12, var8);
            var3 = var11;
case 68:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var11 = var11.bind(var9)(var8);
            var8 = var11.getPendingFolderGuildIds;
            var8 = var8.bind(var11)();
            if(var6) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var6 = var8.includes;
            var6 = var6.bind(var8)(var10);
            if(var6) { _fun0004_ip = 76; continue _fun0004 }
case 39:
            if(!(var5 != var7)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var8 = var7.includes;
            var6 = _closure1_slot10;
            var6 = var6.MEMBER_VERIFICATION_GATE_ENABLED;
            var6 = var8.bind(var7)(var6);
            if(!var6) { _fun0004_ip = 77; continue _fun0004 }
case 79:
            if(!(var5 != var7)) { _fun0004_ip = 77; continue _fun0004 }
case 41:
            var8 = var7.includes;
            var6 = _closure1_slot10;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var8.bind(var7)(var6);
            if(!var6) { _fun0004_ip = 77; continue _fun0004 }
case 80:
            if(!(var5 == var3)) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var6 = var4.visibility;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 12;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.GuildProfileVisibility;
            var4 = var4.PUBLIC_WITH_RECRUITMENT;
            if(!(var6 === var4)) { _fun0004_ip = 77; continue _fun0004 }
case 81:
            if(var1) { _fun0004_ip = 77; continue _fun0004 }
case 83:
            var1 = _closure1_slot11;
            var1 = var1.APPLY_TO_JOIN;
            _fun0004_ip = 84; continue _fun0004;
case 77:
            if(!(var5 == var3)) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var4 = var5 != var7;
            var3 = null;
            if(!var4) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var6 = var7.includes;
            var4 = _closure1_slot10;
            var4 = var4.DISCOVERABLE;
            var4 = var6.bind(var7)(var4);
            var3 = null;
            if(!var4) { _fun0004_ip = 87; continue _fun0004 }
case 89:
            var4 = _closure1_slot11;
            var3 = var4.LURK_DISCOVERABLE;
case 87:
            _fun0004_ip = 90; continue _fun0004;
case 85:
            var4 = _closure1_slot11;
            var3 = var4.JOIN_VIA_INVITE;
case 90:
            var1 = var3;
case 84:
            _fun0004_ip = 91; continue _fun0004;
case 76:
            var3 = _closure1_slot11;
            var1 = var3.HAS_APPLICATION;
case 91:
            _fun0004_ip = 92; continue _fun0004;
case 74:
            var2 = _closure1_slot11;
            var1 = var2.IS_MEMBER;
case 92:
            return var1;
        }
    };
    var3['getGuildProfileCTAType'] = var2;
    return var1;
})();