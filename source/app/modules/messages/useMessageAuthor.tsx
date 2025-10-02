// app/modules/messages/useMessageAuthor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function useNullableMessageAuthor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 7;
            var3 = var3[var14];
            var4 = undefined;
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var13 = var7.bind(var8)(var6, var3);
            var _closure2_slot1 = var13;
            var7 = null;
            var6 = var7 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5.author;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var6.id;
case 4:
            var _closure2_slot2 = var3;
            var6 = var7 == var13;
            var19 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var19 = var13.guild_id;
case 7:
            var _closure2_slot3 = var19;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = var10[var14];
            var12 = var8.bind(var4)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = _closure2_slot2;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9, var6);
            var6 = var10[var14];
            var12 = var8.bind(var4)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var11.bind(var12)(var8, var3, var6);
            var8 = _closure1_slot1;
            var3 = 8;
            var3 = var10[var3];
            var10 = var8.bind(var4)(var3);
            var8 = var10.useName;
            var3 = var6;
            if(!(var7 != var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var5.author;
            var11 = var11.bot;
            var3 = var6;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var12 = var7 == var5;
            var11 = undefined;
            if(var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var5.author;
case 15:
            var3 = var11;
case 12:
            var10 = var8.bind(var10)(var3);
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var15 = var8.bind(var4)(var3);
            var12 = var15.useStateFromStores;
            var3 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var3;
            var8 = new Array(1);
            var8[0] = var19;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var15)(var11, var3, var8);
            var3 = var7 == var9;
            var11 = undefined;
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var9.colorRoleId;
case 17:
            var _closure2_slot4 = var11;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = var3[var14];
            var18 = var8.bind(var4)(var15);
            var17 = var18.useStateFromStores;
            var15 = _closure1_slot5;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = new Array(2);
            var15[0] = var19;
            var15[1] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var3 = _closure2_slot4;
                    var3 = var5 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 11:
                    var5 = _closure1_slot5;
                    var4 = var5.getRole;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var11 = var17.bind(var18)(var16, var11, var15);
            var3 = var3[var14];
            var14 = var8.bind(var4)(var3);
            var8 = var14.useStateFromStores;
            var15 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var15;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 10:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 11:
                    var5 = _closure2_slot1;
                    var3 = var5.isPrivate;
                    var3 = var3.bind(var5)();
                    var1 = null;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var4 = _closure1_slot7;
                    var3 = var4.getNickname;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var8 = var8.bind(var14)(var3, var1);
            var3 = var7 == var5;
            var1 = null;
            if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = _closure1_slot12;
            var2 = {};
            var14 = var5.author;
            var2['user'] = var14;
            var2['channel'] = var13;
            var2['guild'] = var12;
            var2['memberColorRole'] = var11;
            var2['userName'] = var10;
            var2['member'] = var9;
            var2['friendNickname'] = var8;
            if(!(var7 == var6)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var5 = var5.author;
            var5 = var5.displayNameStyles;
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var5 = var6.displayNameStyles;
case 25:
            var2['displayNameStyles'] = var5;
            var1 = var3.bind(var4)(var2);
case 21:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var4 = function useNullableUserAuthor(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var11;
            var4 = null;
            var6 = var4 == var5;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var1 = var5.id;
case 26:
            var _closure2_slot1 = var1;
            var1 = var4 == var11;
            var17 = undefined;
            if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var17 = var11.guild_id;
case 28:
            var _closure2_slot2 = var17;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 7;
            var8 = var7[var6];
            var13 = var9.bind(var3)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0007_ip = 9; continue _fun0007 }
case 10:
                    var3 = _closure2_slot1;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0007_ip = 9; continue _fun0007 }
case 11:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var8 = var12.bind(var13)(var10, var8);
            var7 = var7[var6];
            var13 = var9.bind(var3)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var7;
            var9 = new Array(1);
            var9[0] = var17;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var12.bind(var13)(var10, var7, var9);
            var7 = var4 == var8;
            var9 = undefined;
            if(var7) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var9 = var8.colorRoleId;
case 30:
            var _closure2_slot3 = var9;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var6];
            var16 = var7.bind(var3)(var13);
            var15 = var16.useStateFromStores;
            var13 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = new Array(2);
            var13[0] = var17;
            var13[1] = var9;
            var9 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 9; continue _fun0008 }
case 10:
                    var3 = _closure2_slot3;
                    var3 = var5 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 9; continue _fun0008 }
case 11:
                    var5 = _closure1_slot5;
                    var4 = var5.getRole;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var9 = var15.bind(var16)(var14, var9, var13);
            var6 = var12[var6];
            var13 = var7.bind(var3)(var6);
            var7 = var13.useStateFromStores;
            var14 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var14;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0009_ip = 19; continue _fun0009 }
case 10:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0009_ip = 19; continue _fun0009 }
case 11:
                    var5 = _closure2_slot0;
                    var3 = var5.isPrivate;
                    var3 = var3.bind(var5)();
                    var1 = null;
                    if(!var3) { _fun0009_ip = 19; continue _fun0009 }
case 20:
                    var4 = _closure1_slot7;
                    var3 = var4.getNickname;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var6 = var7.bind(var13)(var6, var2);
            var7 = _closure1_slot1;
            var2 = 8;
            var2 = var12[var2];
            var7 = var7.bind(var3)(var2);
            var2 = var7.useName;
            var7 = var2.bind(var7)(var5);
            var2 = _closure1_slot12;
            var1 = {};
            var1['user'] = var5;
            var1['channel'] = var11;
            var1['guild'] = var10;
            var1['memberColorRole'] = var9;
            var1['member'] = var8;
            var1['userName'] = var7;
            var1['friendNickname'] = var6;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0006_ip = 18; continue _fun0006 }
case 32:
            var4 = var5.displayNameStyles;
case 18:
            var1['displayNameStyles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var2 = function getUserAuthor(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var10 = arg2;
            var4 = null;
            var1 = var4 == var5;
            var3 = undefined;
            var12 = undefined;
            if(var1) { _fun0010_ip = 33; continue _fun0010 }
case 34:
            var12 = var5.id;
case 33:
            var1 = var4 == var10;
            var6 = undefined;
            if(var1) { _fun0010_ip = 35; continue _fun0010 }
case 36:
            var6 = var10.guild_id;
case 35:
            var7 = _closure1_slot6;
            var2 = var7.getGuild;
            var9 = var2.bind(var7)(var6);
            var2 = var4 == var6;
            var13 = var6;
            var7 = null;
            if(var2) { _fun0010_ip = 6; continue _fun0010 }
case 37:
            var2 = var4 == var12;
            var7 = null;
            if(var2) { _fun0010_ip = 6; continue _fun0010 }
case 38:
            var6 = _closure1_slot4;
            var2 = var6.getMember;
            var7 = var2.bind(var6)(var13, var12);
case 6:
            var2 = var4 != var13;
            var8 = undefined;
            if(!var2) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var6 = var4 == var7;
            var2 = undefined;
            if(var6) { _fun0010_ip = 41; continue _fun0010 }
case 8:
            var2 = var7.colorRoleId;
case 41:
            var2 = var4 != var2;
            var8 = undefined;
            if(!var2) { _fun0010_ip = 39; continue _fun0010 }
case 42:
            var11 = _closure1_slot5;
            var6 = var11.getRole;
            var2 = var7.colorRoleId;
            var8 = var6.bind(var11)(var13, var2);
case 39:
            var2 = var4 != var12;
            var6 = null;
            if(!var2) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var2 = var4 != var10;
            var6 = null;
            if(!var2) { _fun0010_ip = 43; continue _fun0010 }
case 45:
            var2 = var10.isPrivate;
            var2 = var2.bind(var10)();
            var6 = null;
            if(!var2) { _fun0010_ip = 43; continue _fun0010 }
case 46:
            var11 = _closure1_slot7;
            var2 = var11.getNickname;
            var6 = var2.bind(var11)(var12);
case 43:
            var2 = _closure1_slot12;
            var1 = {};
            var1['user'] = var5;
            var1['channel'] = var10;
            var1['guild'] = var9;
            var1['memberColorRole'] = var8;
            var1['member'] = var7;
            var1['friendNickname'] = var6;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var4 = var5.displayNameStyles;
case 47:
            var1['displayNameStyles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = function computeMessageAuthor(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var2 = var3.user;
            var1 = var3.channel;
            var5 = var3.guild;
            var11 = var3.memberColorRole;
            var9 = var3.member;
            var8 = var3.userName;
            var6 = var3.friendNickname;
            var3 = var3.displayNameStyles;
            var7 = null;
            var10 = var7 == var2;
            var4 = '???';
            if(var10) { _fun0011_ip = 49; continue _fun0011 }
case 50:
            if(!(var7 == var8)) { _fun0011_ip = 51; continue _fun0011 }
case 37:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 8;
            var12 = var12[var10];
            var10 = undefined;
            var12 = var13.bind(var10)(var12);
            var10 = var12.getName;
            var8 = var10.bind(var12)(var2);
case 51:
            var4 = var8;
case 49:
            var12 = var7 == var2;
            var10 = undefined;
            if(var12) { _fun0011_ip = 52; continue _fun0011 }
case 7:
            var10 = var2.id;
case 52:
            if(!(var7 != var10)) { _fun0011_ip = 53; continue _fun0011 }
case 54:
            if(!(var7 != var1)) { _fun0011_ip = 53; continue _fun0011 }
case 55:
            var10 = var7 == var5;
            var1 = undefined;
            if(var10) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var1 = var5.id;
case 56:
            if(!(var7 != var1)) { _fun0011_ip = 58; continue _fun0011 }
case 59:
            if(!(var7 != var9)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var1 = {};
            var12 = var9.nick;
            var10 = var4;
            if(!(var7 != var12)) { _fun0011_ip = 46; continue _fun0011 }
case 62:
            var10 = var12;
case 46:
            var1['nick'] = var10;
            var10 = var9.colorString;
            var1['colorString'] = var10;
            var10 = var9.colorStrings;
            var1['colorStrings'] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var10 = var11.name;
case 63:
            var1['colorRoleName'] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 65; continue _fun0011 }
case 48:
            var10 = var11.id;
case 65:
            var1['colorRoleId'] = var10;
            var10 = var9.iconRoleId;
            var1['iconRoleId'] = var10;
            var10 = var9.avatar;
            var1['guildMemberAvatar'] = var10;
            var9 = var9.avatarDecoration;
            var1['guildMemberAvatarDecoration'] = var9;
            var9 = var2.primaryGuild;
            var10 = var7 != var9;
            var8 = undefined;
            if(!var10) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var8 = var9;
case 66:
            var1['primaryGuild'] = var8;
            var5 = var5.id;
            var1['guildId'] = var5;
            var2 = var2.id;
            var1['authorId'] = var2;
            var1['displayNameStyles'] = var3;
            _fun0011_ip = 68; continue _fun0011;
case 60:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var2['nick'] = var4;
            var2['displayNameStyles'] = var3;
            var1 = var2;
case 68:
            _fun0011_ip = 69; continue _fun0011;
case 58:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var5 = var4;
            if(!(var7 != var6)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var5 = var6;
case 70:
            var2['nick'] = var5;
            var2['displayNameStyles'] = var3;
            var1 = var2;
case 69:
            _fun0011_ip = 72; continue _fun0011;
case 53:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var2['nick'] = var4;
            var2['displayNameStyles'] = var3;
            var1 = var2;
case 72:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/messages/useMessageAuthor.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function useMessageNickAndColor(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot9;
            var7 = undefined;
            var1 = arg1;
            var1 = var4.bind(var7)(var1);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var6 = var4.bind(var7)(var3);
            var3 = null;
            var5 = var3 != var1;
            var4 = 'Result cannot be null because the message is not null';
            var4 = var6.bind(var7)(var5, var4);
            if(!(var3 != var2)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
            var1 = var2;
case 73:
            return var1;
        }
    };
    var3['default'] = var7;
    var3['useNullableMessageAuthor'] = var6;
    var6 = function getMessageAuthor(arg1) {
        var1 = arg1;
        var5 = _closure1_slot3;
        var4 = var5.getChannel;
        var3 = var1.channel_id;
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var2 = var1.author;
        var1 = undefined;
        var1 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var3['getMessageAuthor'] = var6;
    var5 = function useUserNickAndColor(arg1, arg2) {
        var4 = _closure1_slot10;
        var5 = undefined;
        var3 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var1);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var4 = var3.bind(var5)(var2);
        var2 = null;
        var3 = var2 != var1;
        var2 = 'Result cannot be null because user and channel are not null';
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useUserNickAndColor'] = var5;
    var3['useNullableUserAuthor'] = var4;
    var3['getUserAuthor'] = var2;
    return var1;
})();