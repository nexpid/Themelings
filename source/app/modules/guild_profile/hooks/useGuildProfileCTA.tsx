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
    var13 = 0;
    var6 = var8[var13];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var8[var12];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 2;
    var4 = var8[var11];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var10 = 3;
    var4 = var8[var10];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var9 = 4;
    var4 = var8[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var6 = 5;
    var4 = var8[var6];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.InviteStates;
    var _closure1_slot9 = var5;
    var4 = var4.GuildFeatures;
    var _closure1_slot10 = var4;
    var5 = {};
    var5['IS_MEMBER'] = var13;
    var4 = 'IS_MEMBER';
    var5[var13] = var4;
    var5['ADOPT_TAG'] = var12;
    var4 = 'ADOPT_TAG';
    var5[var12] = var4;
    var5['HAS_APPLICATION'] = var11;
    var4 = 'HAS_APPLICATION';
    var5[var11] = var4;
    var5['APPLY_TO_JOIN'] = var10;
    var4 = 'APPLY_TO_JOIN';
    var5[var10] = var4;
    var5['LURK_DISCOVERABLE'] = var9;
    var4 = 'LURK_DISCOVERABLE';
    var5[var9] = var4;
    var5['JOIN_VIA_INVITE'] = var6;
    var4 = 'JOIN_VIA_INVITE';
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
    var6 = function useGuildProfileCTA(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var8;
            var4 = var12.id;
            var _closure2_slot2 = var4;
            var13 = var12.features;
            var _closure2_slot3 = var13;
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 7;
            var6 = var14[var2];
            var9 = undefined;
            var11 = var5.bind(var9)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var10.bind(var11)(var7, var6);
            var _closure2_slot4 = var6;
            var7 = var14[var2];
            var15 = var5.bind(var9)(var7);
            var11 = var15.useStateFromStores;
            var7 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var11.bind(var15)(var10, var7);
            var _closure2_slot5 = var7;
            var10 = var14[var2];
            var17 = var5.bind(var9)(var10);
            var16 = var17.useStateFromStores;
            var10 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var10;
            var11 = new Array(1);
            var11[0] = var6;
            var10 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var16.bind(var17)(var15, var10, var11);
            var _closure2_slot6 = var10;
            var11 = var14[var2];
            var17 = var5.bind(var9)(var11);
            var16 = var17.useStateFromStores;
            var11 = _closure1_slot5;
            var15 = new Array(1);
            var15[0] = var11;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 != var3;
                    var3 = null;
                    if(!var4) { _fun0002_ip = 45; continue _fun0002 }
 18:
                    var6 = _closure1_slot5;
                    var5 = var6.getMember;
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot4;
                    var3 = var5.bind(var6)(var4, var1);
 45:
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 60; continue _fun0002 }
 54:
                    var1 = var3.joinedAt;
 60:
                    var1 = var2 != var1;
                    return var1;
                }
            };
            var15 = var16.bind(var17)(var15, var6, var11);
            var _closure2_slot7 = var15;
            var2 = var14[var2];
            var11 = var5.bind(var9)(var2);
            var6 = var11.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getInviteKeyForGuildId;
                    var1 = _closure2_slot2;
                    var4 = var3.bind(var4)(var1);
                    var3 = null;
                    var1 = var3 != var4;
                    var6 = null;
                    if(!var1) { _fun0003_ip = 51; continue _fun0003 }
 36:
                    var5 = _closure1_slot7;
                    var1 = var5.getInvite;
                    var6 = var1.bind(var5)(var4);
 51:
                    if(!(var3 != var6)) { _fun0003_ip = 193; continue _fun0003 }
 58:
                    var5 = var6.state;
                    var1 = _closure1_slot9;
                    var1 = var1.BANNED;
                    if(!(var5 !== var1)) { _fun0003_ip = 193; continue _fun0003 }
 77:
                    var5 = var6.state;
                    var1 = _closure1_slot9;
                    var1 = var1.EXPIRED;
                    if(!(var5 !== var1)) { _fun0003_ip = 193; continue _fun0003 }
 96:
                    var1 = {};
                    var1['validInviteKey'] = var4;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.hasFlag;
                    var6 = var6.flags;
                    var8 = var3 != var6;
                    var3 = 0;
                    if(!var8) { _fun0003_ip = 148; continue _fun0003 }
 145:
                    var3 = var6;
 148:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.GuildInviteFlags;
                    var2 = var2.IS_APPLICATION_BYPASS;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['isBypassInvite'] = var2;
                    _fun0003_ip = 203; continue _fun0003;
 193:
                    var1 = {'validInviteKey': null, 'isBypassInvite': false};
 203:
                    return var1;
                }
            };
            var5 = var6.bind(var11)(var5, var2);
            var2 = var5.validInviteKey;
            var _closure2_slot8 = var2;
            var11 = var5.isBypassInvite;
            var _closure2_slot9 = var11;
            var6 = _closure1_slot1;
            var5 = 10;
            var5 = var14[var5];
            var5 = var6.bind(var9)(var5);
            var14 = var5.bind(var9)();
            var _closure2_slot10 = var14;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(11);
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
            var11 = null;
            var11 = var11 == var10;
            if(var11) { _fun0001_ip = 390; continue _fun0001 }
 384:
            var9 = var10.primaryGuild;
 390:
            var3[8] = var9;
            var3[9] = var8;
            var3[10] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0004_ip = 288; continue _fun0004 }
 13:
                    var4 = _closure2_slot10;
                    var3 = var4.includes;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0004_ip = 273; continue _fun0004 }
 37:
                    var2 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0004_ip = 190; continue _fun0004 }
 50:
                    var5 = _closure2_slot3;
                    var4 = var5.includes;
                    var3 = _closure1_slot10;
                    var3 = var3.MEMBER_VERIFICATION_GATE_ENABLED;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0004_ip = 190; continue _fun0004 }
 80:
                    var3 = _closure2_slot3;
                    if(!(var6 != var3)) { _fun0004_ip = 190; continue _fun0004 }
 88:
                    var5 = _closure2_slot3;
                    var4 = var5.includes;
                    var3 = _closure1_slot10;
                    var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0004_ip = 190; continue _fun0004 }
 115:
                    var3 = _closure2_slot8;
                    if(!(var6 == var3)) { _fun0004_ip = 171; continue _fun0004 }
 123:
                    var3 = _closure2_slot0;
                    var4 = var3.visibility;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var5);
                    var3 = var3.GuildProfileVisibility;
                    var3 = var3.PUBLIC_WITH_RECRUITMENT;
                    if(!(var4 === var3)) { _fun0004_ip = 190; continue _fun0004 }
 171:
                    var3 = _closure2_slot9;
                    if(var3) { _fun0004_ip = 190; continue _fun0004 }
 178:
                    var2 = _closure1_slot11;
                    var2 = var2.APPLY_TO_JOIN;
                    _fun0004_ip = 271; continue _fun0004;
 190:
                    var3 = _closure2_slot8;
                    if(!(var6 == var3)) { _fun0004_ip = 255; continue _fun0004 }
 198:
                    var3 = _closure2_slot3;
                    var4 = var6 != var3;
                    var3 = null;
                    if(!var4) { _fun0004_ip = 253; continue _fun0004 }
 211:
                    var8 = _closure2_slot3;
                    var7 = var8.includes;
                    var5 = _closure1_slot10;
                    var5 = var5.DISCOVERABLE;
                    var5 = var7.bind(var8)(var5);
                    var3 = null;
                    if(!var5) { _fun0004_ip = 253; continue _fun0004 }
 243:
                    var4 = _closure1_slot11;
                    var3 = var4.LURK_DISCOVERABLE;
 253:
                    _fun0004_ip = 268; continue _fun0004;
 255:
                    var4 = _closure1_slot11;
                    var3 = var4.JOIN_VIA_INVITE;
 268:
                    var2 = var3;
 271:
                    _fun0004_ip = 286; continue _fun0004;
 273:
                    var3 = _closure1_slot11;
                    var2 = var3.HAS_APPLICATION;
 286:
                    return var2;
 288:
                    var2 = _closure2_slot6;
                    var4 = null;
                    var3 = var4 == var2;
                    var5 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0004_ip = 315; continue _fun0004 }
 305:
                    var3 = _closure2_slot6;
                    var2 = var3.primaryGuild;
 315:
                    var3 = var4 == var2;
                    var6 = undefined;
                    if(var3) { _fun0004_ip = 330; continue _fun0004 }
 324:
                    var6 = var2.identityGuildId;
 330:
                    var3 = _closure2_slot2;
                    var3 = var6 === var3;
                    if(!var3) { _fun0004_ip = 362; continue _fun0004 }
 341:
                    var7 = var4 == var2;
                    var6 = undefined;
                    if(var7) { _fun0004_ip = 356; continue _fun0004 }
 350:
                    var6 = var2.identityEnabled;
 356:
                    var2 = true;
                    var3 = var2 === var6;
 362:
                    var7 = _closure2_slot1;
                    var6 = _closure1_slot12;
                    var6 = var6.INVITE;
                    if(!(var7 !== var6)) { _fun0004_ip = 457; continue _fun0004 }
 383:
                    var6 = _closure2_slot0;
                    var6 = var6.tag;
                    if(!(var4 != var6)) { _fun0004_ip = 457; continue _fun0004 }
 396:
                    if(var3) { _fun0004_ip = 457; continue _fun0004 }
 399:
                    var3 = _closure2_slot5;
                    if(!(var4 != var3)) { _fun0004_ip = 457; continue _fun0004 }
 407:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.guildSupportsTags;
                    var1 = _closure2_slot5;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0004_ip = 457; continue _fun0004 }
 445:
                    var1 = _closure1_slot11;
                    var1 = var1.ADOPT_TAG;
                    _fun0004_ip = 467; continue _fun0004;
 457:
                    var2 = _closure1_slot11;
                    var1 = var2.IS_MEMBER;
 467:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var1, var3);
            var1 = {};
            var1['guildId'] = var4;
            var1['ctaType'] = var3;
            var1['validInviteKey'] = var2;
            return var1;
        }
    };
    var3['default'] = var6;
    var3['CTATypes'] = var5;
    var3['GuildProfileCTAContext'] = var4;
    var2 = function getGuildProfileCTAType(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            if(!var1) { _fun0005_ip = 58; continue _fun0005 }
 42:
            var6 = _closure1_slot5;
            var1 = var6.getMember;
            var3 = var1.bind(var6)(var10, var8);
 58:
            var6 = var5 == var3;
            var9 = undefined;
            var1 = undefined;
            if(var6) { _fun0005_ip = 75; continue _fun0005 }
 69:
            var1 = var3.joinedAt;
 75:
            var6 = var5 != var1;
            var3 = _closure1_slot7;
            var1 = var3.getInviteKeyForGuildId;
            var11 = var1.bind(var3)(var10);
            var1 = var5 != var11;
            var8 = null;
            if(!var1) { _fun0005_ip = 118; continue _fun0005 }
 103:
            var3 = _closure1_slot7;
            var1 = var3.getInvite;
            var8 = var1.bind(var3)(var11);
 118:
            var12 = var5 == var8;
            var3 = null;
            var1 = false;
            if(var12) { _fun0005_ip = 262; continue _fun0005 }
 132:
            var13 = var8.state;
            var12 = _closure1_slot9;
            var12 = var12.BANNED;
            var3 = null;
            var1 = false;
            if(!(var13 !== var12)) { _fun0005_ip = 262; continue _fun0005 }
 155:
            var13 = var8.state;
            var12 = _closure1_slot9;
            var12 = var12.EXPIRED;
            var3 = null;
            var1 = false;
            if(!(var13 !== var12)) { _fun0005_ip = 262; continue _fun0005 }
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
            if(!var15) { _fun0005_ip = 221; continue _fun0005 }
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
            if(var6) { _fun0005_ip = 506; continue _fun0005 }
 298:
            var6 = var8.includes;
            var6 = var6.bind(var8)(var10);
            if(var6) { _fun0005_ip = 494; continue _fun0005 }
 314:
            if(!(var5 != var7)) { _fun0005_ip = 429; continue _fun0005 }
 318:
            var8 = var7.includes;
            var6 = _closure1_slot10;
            var6 = var6.MEMBER_VERIFICATION_GATE_ENABLED;
            var6 = var8.bind(var7)(var6);
            if(!var6) { _fun0005_ip = 429; continue _fun0005 }
 341:
            if(!(var5 != var7)) { _fun0005_ip = 429; continue _fun0005 }
 345:
            var8 = var7.includes;
            var6 = _closure1_slot10;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var8.bind(var7)(var6);
            if(!var6) { _fun0005_ip = 429; continue _fun0005 }
 368:
            if(!(var5 == var3)) { _fun0005_ip = 414; continue _fun0005 }
 372:
            var6 = var4.visibility;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 12;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.GuildProfileVisibility;
            var4 = var4.PUBLIC_WITH_RECRUITMENT;
            if(!(var6 === var4)) { _fun0005_ip = 429; continue _fun0005 }
 414:
            if(var1) { _fun0005_ip = 429; continue _fun0005 }
 417:
            var1 = _closure1_slot11;
            var1 = var1.APPLY_TO_JOIN;
            _fun0005_ip = 492; continue _fun0005;
 429:
            if(!(var5 == var3)) { _fun0005_ip = 479; continue _fun0005 }
 433:
            var4 = var5 != var7;
            var3 = null;
            if(!var4) { _fun0005_ip = 477; continue _fun0005 }
 442:
            var6 = var7.includes;
            var4 = _closure1_slot10;
            var4 = var4.DISCOVERABLE;
            var4 = var6.bind(var7)(var4);
            var3 = null;
            if(!var4) { _fun0005_ip = 477; continue _fun0005 }
 467:
            var4 = _closure1_slot11;
            var3 = var4.LURK_DISCOVERABLE;
 477:
            _fun0005_ip = 489; continue _fun0005;
 479:
            var4 = _closure1_slot11;
            var3 = var4.JOIN_VIA_INVITE;
 489:
            var1 = var3;
 492:
            _fun0005_ip = 504; continue _fun0005;
 494:
            var3 = _closure1_slot11;
            var1 = var3.HAS_APPLICATION;
 504:
            _fun0005_ip = 516; continue _fun0005;
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