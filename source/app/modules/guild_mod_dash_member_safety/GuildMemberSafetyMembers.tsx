// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function getGuildMemberSecondaryIndexes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = var3.isCurrentGuildMemberByTimestamp;
            var1 = _closure1_slot7;
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
 19:
            var4 = var1.NEW_GUILD_MEMBER;
            _fun0001_ip = 33; continue _fun0001;
 27:
            var4 = var1.CURRENT_GUILD_MEMBER;
 33:
            var1 = new Array(1);
            var1[0] = var4;
            var3 = var3.isIncludedInSearchResults;
            if(!var3) { _fun0001_ip = 70; continue _fun0001 }
 50:
            var3 = var1.push;
            var2 = _closure1_slot7;
            var2 = var2.INCLUDED_IN_SEARCH_RESULTS;
            var2 = var3.bind(var1)(var2);
 70:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getGuildMemberSecondarySortBy(arg1) {
        var1 = arg1;
        var1 = var1.sort;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function createMembersMap() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.SecondaryIndexMap;
        var6 = _closure1_slot8;
        var5 = _closure1_slot9;
        var2 = var4.prototype;
        var2 = Object.create(var2, {constructor: {value: var4}});
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot10 = var1;
    var4 = function hasUnusualDmActivity(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 96; continue _fun0002 }
 12:
            var2 = global;
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var8 = var3;
            var7 = var4;
            var2 = new var8[var2](var7, var6);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.getTime;
            var3 = var2.bind(var3)();
            var4 = _closure1_slot6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.UNUSUAL_DM_COMPARISON_DELTA;
            var2 = var4 - var2;
            var1 = var3 >= var2;
 96:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = var5.Date;
    var5 = var6.now;
    var5 = var5.bind(var6)();
    var _closure1_slot6 = var5;
    var5 = {};
    var6 = 'NEW_GUILD_MEMBER';
    var5['NEW_GUILD_MEMBER'] = var6;
    var6 = 'CURRENT_GUILD_MEMBER';
    var5['CURRENT_GUILD_MEMBER'] = var6;
    var6 = 'INCLUDED_IN_SEARCH_RESULTS';
    var5['INCLUDED_IN_SEARCH_RESULTS'] = var6;
    var _closure1_slot7 = var5;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberSafetyMembers(arg1) {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var3['newMemberTimestamp'] = var4;
            var4 = arg1;
            var3['guildId'] = var4;
            var2 = _closure1_slot10;
            var2 = var2.bind(var1)();
            var3['_membersMap'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var2 = var3._membersMap;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot10;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3['_membersMap'] = var2;
            var2 = var3.resetNewMemberTimestamp;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(11);
        var2[0] = var1;
        var1 = {};
        var6 = 'resetNewMemberTimestamp';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = this;
            var1['newMemberTimestamp'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'enhanceNewMember';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var7 = arg1;
                var2 = arguments[2];
                var3 = this;
                var10 = undefined;
                if(!(var2 === var10)) { _fun0003_ip = 17; continue _fun0003 }
 15:
                var2 = {};
 17:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var9 = var5.bind(var10)(var1);
                var4 = var9.getJoinedAtTimestamp;
                var1 = var7.joinedAt;
                var4 = var4.bind(var9)(var1);
                var11 = var3._computeMemberSupplementals;
                var9 = var7.userId;
                var1 = var7.unusualDMActivityUntil;
                var1 = var11.bind(var3)(var9, var1);
                var18 = var1.hasUnusualDmActivity;
                var17 = var1.hasUnusualAccountActivity;
                var16 = var1.sourceInviteCode;
                var15 = var1.joinSourceType;
                var14 = var1.inviterId;
                var13 = var1.integrationType;
                var12 = var1.joinSourceApplicationId;
                var11 = var1.joinSourceChannelId;
                var19 = _closure1_slot5;
                var9 = var19.getUser;
                var1 = var7.userId;
                var9 = var9.bind(var19)(var1);
                var1 = {};
                var1['hasUnusualDmActivity'] = var18;
                var1['hasUnusualAccountActivity'] = var17;
                var1['sourceInviteCode'] = var16;
                var1['joinSourceType'] = var15;
                var1['inviterId'] = var14;
                var1['integrationType'] = var13;
                var1['joinSourceApplicationId'] = var12;
                var1['joinSourceChannelId'] = var11;
                var21 = var1;
                var20 = var7;
                var11 = copyDataProperties(var21, var20);
                var3 = var3.newMemberTimestamp;
                var11 = var4 <= var3;
                var3 = 'isCurrentGuildMemberByTimestamp';
                var1[var3] = var11;
                var11 = false;
                var3 = 'isIncludedInSearchResults';
                var1[var3] = var11;
                var3 = 'user';
                var1[var3] = var9;
                var3 = 6;
                var3 = var6[var3];
                var6 = var5.bind(var10)(var3);
                var5 = var6.getSortValueForMember;
                var3 = arg2;
                var3 = var3.selectedSort;
                var9 = null;
                if(!(var9 == var3)) { _fun0003_ip = 304; continue _fun0003 }
 272:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 4;
                var8 = var11[var8];
                var8 = var9.bind(var10)(var8);
                var8 = var8.OrderBy;
                var3 = var8.ORDER_BY_UNSPECIFIED;
 304:
                var5 = var5.bind(var6)(var7, var3);
                var3 = 'sort';
                var1[var3] = var5;
                var3 = 'joinedAtTimestamp';
                var1[var3] = var4;
                var21 = var1;
                var20 = var2;
                var2 = copyDataProperties(var21, var20);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_computeMemberSupplementals';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var3.bind(var5)(var1);
                var3 = var6.getMemberSupplementalByGuildId;
                var1 = this;
                var1 = var1.guildId;
                var1 = var3.bind(var6)(var1);
                var1 = var1[var4];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 59; continue _fun0004 }
 57:
                var1 = {};
 59:
                var12 = var1.sourceInviteCode;
                var11 = var1.joinSourceType;
                var10 = var1.inviterId;
                var9 = var1.integrationType;
                var8 = var1.joinSourceApplicationId;
                var6 = var1.joinSourceChannelId;
                var1 = {};
                var13 = var3 != var12;
                var7 = null;
                if(!var13) { _fun0004_ip = 109; continue _fun0004 }
 106:
                var7 = var12;
 109:
                var1['sourceInviteCode'] = var7;
                var12 = var3 != var11;
                var7 = null;
                if(!var12) { _fun0004_ip = 126; continue _fun0004 }
 123:
                var7 = var11;
 126:
                var1['joinSourceType'] = var7;
                var11 = var3 != var10;
                var7 = null;
                if(!var11) { _fun0004_ip = 143; continue _fun0004 }
 140:
                var7 = var10;
 143:
                var1['inviterId'] = var7;
                var10 = var3 != var9;
                var7 = null;
                if(!var10) { _fun0004_ip = 160; continue _fun0004 }
 157:
                var7 = var9;
 160:
                var1['integrationType'] = var7;
                var9 = var3 != var8;
                var7 = null;
                if(!var9) { _fun0004_ip = 177; continue _fun0004 }
 174:
                var7 = var8;
 177:
                var1['joinSourceApplicationId'] = var7;
                var7 = var3 != var6;
                var3 = null;
                if(!var7) { _fun0004_ip = 194; continue _fun0004 }
 191:
                var3 = var6;
 194:
                var1['joinSourceChannelId'] = var3;
                var6 = _closure1_slot11;
                var3 = arg2;
                var3 = var6.bind(var5)(var3);
                var1['hasUnusualDmActivity'] = var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isSpammer;
                var2 = var2.bind(var3)(var4);
                var1['hasUnusualAccountActivity'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'createMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = arg1;
            var1 = this;
            var3 = var1._membersMap;
            var2 = var3.set;
            var1 = var4.userId;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'updateMember';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var2 = arg2;
                var1 = this;
                var6 = null;
                if(!(var6 != var2)) { _fun0005_ip = 361; continue _fun0005 }
 18:
                var7 = {};
                var22 = var7;
                var21 = var4;
                var3 = copyDataProperties(var22, var21);
                var15 = {};
                var22 = var15;
                var21 = var2;
                var2 = copyDataProperties(var22, var21);
                var5 = var1._computeMemberSupplementals;
                var3 = var7.userId;
                var2 = var15.unusualDMActivityUntil;
                if(!(var6 == var2)) { _fun0005_ip = 69; continue _fun0005 }
 63:
                var2 = var7.unusualDMActivityUntil;
 69:
                var5 = var5.bind(var1)(var3, var2);
                var16 = var5.sourceInviteCode;
                var10 = var5.hasUnusualDmActivity;
                var9 = var5.hasUnusualAccountActivity;
                var8 = var5.joinSourceType;
                var3 = var5.inviterId;
                var2 = var5.integrationType;
                var6 = var5.joinSourceApplicationId;
                var5 = var5.joinSourceChannelId;
                var17 = var7.sourceInviteCode;
                if(!(var17 !== var16)) { _fun0005_ip = 139; continue _fun0005 }
 133:
                var15['sourceInviteCode'] = var16;
 139:
                var16 = var7.hasUnusualDmActivity;
                if(!(var16 !== var10)) { _fun0005_ip = 155; continue _fun0005 }
 149:
                var15['hasUnusualDmActivity'] = var10;
 155:
                var10 = var7.hasUnusualAccountActivity;
                if(!(var10 !== var9)) { _fun0005_ip = 171; continue _fun0005 }
 165:
                var15['hasUnusualAccountActivity'] = var9;
 171:
                var9 = var7.joinSourceType;
                if(!(var9 !== var8)) { _fun0005_ip = 187; continue _fun0005 }
 181:
                var15['joinSourceType'] = var8;
 187:
                var8 = var7.joinSourceApplicationId;
                if(!(var8 !== var6)) { _fun0005_ip = 203; continue _fun0005 }
 197:
                var15['joinSourceApplicationId'] = var6;
 203:
                var6 = var7.joinSourceChannelId;
                if(!(var6 !== var5)) { _fun0005_ip = 219; continue _fun0005 }
 213:
                var15['joinSourceChannelId'] = var5;
 219:
                var5 = var7.inviterId;
                if(!(var5 !== var3)) { _fun0005_ip = 235; continue _fun0005 }
 229:
                var15['inviterId'] = var3;
 235:
                var3 = var7.integrationType;
                if(!(var3 !== var2)) { _fun0005_ip = 251; continue _fun0005 }
 245:
                var15['integrationType'] = var2;
 251:
                var13 = var15;
                var2 = false;
                var6 = 9;
                var5 = undefined;
                var3 = false;
                for(var10 in var13)
 274:
                {
                    var3 = var2;
 286:
                    var17 = var10;
                    var16 = var15[var17];
                    var19 = var7[var17];
                    var20 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var18 = var18[var6];
                    var18 = var20.bind(var5)(var18);
                    var18 = var18.bind(var5)(var16, var19);
                    if(var18) { _fun0005_ip = 274; continue _fun0005 }
 323:
                    var7[var17] = var16;
                    var2 = true;
                    _fun0005_ip = 274; continue _fun0005;
                }
 331:
                var6 = var1._membersMap;
                var5 = var6.set;
                var2 = var7.userId;
                var2 = var5.bind(var6)(var2, var7);
                if(var2) { _fun0005_ip = 359; continue _fun0005 }
 356:
                var2 = var3;
 359:
                return var2;
 361:
                var3 = var1._membersMap;
                var2 = var3.set;
                var1 = var4.userId;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'removeMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._membersMap;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getMemberByUserId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._membersMap;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'values';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1._membersMap;
            var3 = var4.values;
            var2 = arg1;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'count';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._membersMap;
            var2 = var3.size;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'version';
        var1['key'] = var6;
        var5 = function get() {
            var1 = this;
            var1 = var1._membersMap;
            var1 = var1.version;
            return var1;
        };
        var1['get'] = var5;
        var2[10] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx';
    var6 = var7.bind(var8)(var6);
    var3['MemberSafetySecondaryIndex'] = var5;
    var3['hasUnusualDmActivity'] = var4;
    var3['GuildMemberSafetyMembers'] = var2;
    return var1;
})();