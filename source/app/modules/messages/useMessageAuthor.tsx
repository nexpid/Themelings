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
 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 7;
            var1 = var1[var13];
            var4 = undefined;
            var7 = var5.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0002_ip = 42; continue _fun0002 }
 16:
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var1 = var3.bind(var4)(var2);
 42:
                    return var1;
                }
            };
            var10 = var6.bind(var7)(var5, var1);
            var _closure2_slot1 = var10;
            var1 = null;
            var6 = var1 == var11;
            var5 = undefined;
            if(var6) { _fun0001_ip = 97; continue _fun0001 }
 77:
            var6 = var11.author;
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 97; continue _fun0001 }
 92:
            var5 = var6.id;
 97:
            var _closure2_slot2 = var5;
            var6 = var1 == var10;
            var18 = undefined;
            if(var6) { _fun0001_ip = 115; continue _fun0001 }
 110:
            var18 = var10.guild_id;
 115:
            var _closure2_slot3 = var18;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = var8[var13];
            var14 = var9.bind(var4)(var6);
            var12 = var14.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0003_ip = 58; continue _fun0003 }
 18:
                    var3 = _closure2_slot2;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0003_ip = 58; continue _fun0003 }
 31:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
 58:
                    return var1;
                }
            };
            var6 = var12.bind(var14)(var7, var6);
            var7 = var8[var13];
            var14 = var9.bind(var4)(var7);
            var12 = var14.useStateFromStores;
            var7 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var14)(var9, var5, var7);
            var7 = _closure1_slot1;
            var5 = 8;
            var5 = var8[var5];
            var8 = var7.bind(var4)(var5);
            var7 = var8.useName;
            var5 = var12;
            if(!(var1 != var11)) { _fun0001_ip = 275; continue _fun0001 }
 239:
            var9 = var11.author;
            var9 = var9.bot;
            var5 = var12;
            if(!var9) { _fun0001_ip = 275; continue _fun0001 }
 257:
            var12 = var1 == var11;
            var9 = undefined;
            if(var12) { _fun0001_ip = 272; continue _fun0001 }
 266:
            var9 = var11.author;
 272:
            var5 = var9;
 275:
            var7 = var7.bind(var8)(var5);
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var14 = var8.bind(var4)(var5);
            var12 = var14.useStateFromStores;
            var5 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var5;
            var8 = new Array(1);
            var8[0] = var18;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var12.bind(var14)(var9, var5, var8);
            var5 = var1 == var6;
            var8 = undefined;
            if(var5) { _fun0001_ip = 349; continue _fun0001 }
 343:
            var8 = var6.colorRoleId;
 349:
            var _closure2_slot4 = var8;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var14 = var5[var13];
            var17 = var12.bind(var4)(var14);
            var16 = var17.useStateFromStores;
            var14 = _closure1_slot5;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = new Array(2);
            var14[0] = var18;
            var14[1] = var8;
            var8 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 58; continue _fun0004 }
 18:
                    var3 = _closure2_slot4;
                    var3 = var5 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 58; continue _fun0004 }
 31:
                    var5 = _closure1_slot5;
                    var4 = var5.getRole;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
 58:
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var15, var8, var14);
            var5 = var5[var13];
            var13 = var12.bind(var4)(var5);
            var12 = var13.useStateFromStores;
            var14 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var14;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 72; continue _fun0005 }
 18:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 72; continue _fun0005 }
 31:
                    var5 = _closure2_slot1;
                    var3 = var5.isPrivate;
                    var3 = var3.bind(var5)();
                    var1 = null;
                    if(!var3) { _fun0005_ip = 72; continue _fun0005 }
 50:
                    var4 = _closure1_slot7;
                    var3 = var4.getNickname;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 72:
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var5, var3);
            var3 = var1 == var11;
            var1 = null;
            if(var3) { _fun0001_ip = 506; continue _fun0001 }
 457:
            var3 = _closure1_slot12;
            var2 = {};
            var11 = var11.author;
            var2['user'] = var11;
            var2['channel'] = var10;
            var2['guild'] = var9;
            var2['memberColorRole'] = var8;
            var2['userName'] = var7;
            var2['member'] = var6;
            var2['friendNickname'] = var5;
            var1 = var3.bind(var4)(var2);
 506:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var4 = function useNullableUserAuthor(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var10 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var9;
            var5 = null;
            var4 = var5 == var10;
            var3 = undefined;
            var1 = undefined;
            if(var4) { _fun0006_ip = 30; continue _fun0006 }
 25:
            var1 = var10.id;
 30:
            var _closure2_slot1 = var1;
            var1 = var5 == var9;
            var16 = undefined;
            if(var1) { _fun0006_ip = 48; continue _fun0006 }
 43:
            var16 = var9.guild_id;
 48:
            var _closure2_slot2 = var16;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var6 = var7[var4];
            var13 = var8.bind(var3)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0007_ip = 58; continue _fun0007 }
 18:
                    var3 = _closure2_slot1;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0007_ip = 58; continue _fun0007 }
 31:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 58:
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var11, var6);
            var7 = var7[var4];
            var13 = var8.bind(var3)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var7;
            var8 = new Array(1);
            var8[0] = var16;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var12.bind(var13)(var11, var7, var8);
            var5 = var5 == var6;
            var7 = undefined;
            if(var5) { _fun0006_ip = 164; continue _fun0006 }
 158:
            var7 = var6.colorRoleId;
 164:
            var _closure2_slot3 = var7;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var4];
            var15 = var5.bind(var3)(var12);
            var14 = var15.useStateFromStores;
            var12 = _closure1_slot5;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = new Array(2);
            var12[0] = var16;
            var12[1] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot2;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 58; continue _fun0008 }
 18:
                    var3 = _closure2_slot3;
                    var3 = var5 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 58; continue _fun0008 }
 31:
                    var5 = _closure1_slot5;
                    var4 = var5.getRole;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
 58:
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var13, var7, var12);
            var4 = var11[var4];
            var12 = var5.bind(var3)(var4);
            var5 = var12.useStateFromStores;
            var13 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var13;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0009_ip = 72; continue _fun0009 }
 18:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0009_ip = 72; continue _fun0009 }
 31:
                    var5 = _closure2_slot0;
                    var3 = var5.isPrivate;
                    var3 = var3.bind(var5)();
                    var1 = null;
                    if(!var3) { _fun0009_ip = 72; continue _fun0009 }
 50:
                    var4 = _closure1_slot7;
                    var3 = var4.getNickname;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 72:
                    return var1;
                }
            };
            var4 = var5.bind(var12)(var4, var2);
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var11[var2];
            var5 = var5.bind(var3)(var2);
            var2 = var5.useName;
            var5 = var2.bind(var5)(var10);
            var2 = _closure1_slot12;
            var1 = {};
            var1['user'] = var10;
            var1['channel'] = var9;
            var1['guild'] = var8;
            var1['memberColorRole'] = var7;
            var1['member'] = var6;
            var1['userName'] = var5;
            var1['friendNickname'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var2 = function getUserAuthor(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var10 = null;
            var1 = var10 == var9;
            var3 = undefined;
            var11 = undefined;
            if(var1) { _fun0010_ip = 24; continue _fun0010 }
 19:
            var11 = var9.id;
 24:
            var1 = var10 == var8;
            var4 = undefined;
            if(var1) { _fun0010_ip = 38; continue _fun0010 }
 33:
            var4 = var8.guild_id;
 38:
            var5 = _closure1_slot6;
            var2 = var5.getGuild;
            var7 = var2.bind(var5)(var4);
            var2 = var10 == var4;
            var13 = var4;
            var5 = null;
            if(var2) { _fun0010_ip = 92; continue _fun0010 }
 67:
            var2 = var10 == var11;
            var5 = null;
            if(var2) { _fun0010_ip = 92; continue _fun0010 }
 76:
            var4 = _closure1_slot4;
            var2 = var4.getMember;
            var5 = var2.bind(var4)(var13, var11);
 92:
            var2 = var10 != var13;
            var6 = undefined;
            if(!var2) { _fun0010_ip = 147; continue _fun0010 }
 101:
            var4 = var10 == var5;
            var2 = undefined;
            if(var4) { _fun0010_ip = 116; continue _fun0010 }
 110:
            var2 = var5.colorRoleId;
 116:
            var2 = var10 != var2;
            var6 = undefined;
            if(!var2) { _fun0010_ip = 147; continue _fun0010 }
 125:
            var12 = _closure1_slot5;
            var4 = var12.getRole;
            var2 = var5.colorRoleId;
            var6 = var4.bind(var12)(var13, var2);
 147:
            var2 = var10 != var11;
            var4 = null;
            if(!var2) { _fun0010_ip = 195; continue _fun0010 }
 156:
            var2 = var10 != var8;
            var4 = null;
            if(!var2) { _fun0010_ip = 195; continue _fun0010 }
 165:
            var2 = var8.isPrivate;
            var2 = var2.bind(var8)();
            var4 = null;
            if(!var2) { _fun0010_ip = 195; continue _fun0010 }
 180:
            var10 = _closure1_slot7;
            var2 = var10.getNickname;
            var4 = var2.bind(var10)(var11);
 195:
            var2 = _closure1_slot12;
            var1 = {};
            var1['user'] = var9;
            var1['channel'] = var8;
            var1['guild'] = var7;
            var1['memberColorRole'] = var6;
            var1['member'] = var5;
            var1['friendNickname'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = function computeMessageAuthor(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var2 = var4.user;
            var1 = var4.channel;
            var5 = var4.guild;
            var11 = var4.memberColorRole;
            var9 = var4.member;
            var3 = var4.userName;
            var6 = var4.friendNickname;
            var7 = null;
            var8 = var7 == var2;
            var4 = '???';
            if(var8) { _fun0011_ip = 100; continue _fun0011 }
 57:
            if(!(var7 == var3)) { _fun0011_ip = 97; continue _fun0011 }
 61:
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 8;
            var10 = var10[var8];
            var8 = undefined;
            var10 = var12.bind(var8)(var10);
            var8 = var10.getName;
            var3 = var8.bind(var10)(var2);
 97:
            var4 = var3;
 100:
            var3 = var7 == var2;
            var10 = undefined;
            if(var3) { _fun0011_ip = 115; continue _fun0011 }
 109:
            var10 = var2.displayNameStyles;
 115:
            var12 = var7 != var10;
            var3 = undefined;
            if(!var12) { _fun0011_ip = 127; continue _fun0011 }
 124:
            var3 = var10;
 127:
            var12 = var7 == var2;
            var10 = undefined;
            if(var12) { _fun0011_ip = 141; continue _fun0011 }
 136:
            var10 = var2.id;
 141:
            if(!(var7 != var10)) { _fun0011_ip = 420; continue _fun0011 }
 148:
            if(!(var7 != var1)) { _fun0011_ip = 420; continue _fun0011 }
 155:
            var10 = var7 == var5;
            var1 = undefined;
            if(var10) { _fun0011_ip = 169; continue _fun0011 }
 164:
            var1 = var5.id;
 169:
            if(!(var7 != var1)) { _fun0011_ip = 380; continue _fun0011 }
 176:
            if(!(var7 != var9)) { _fun0011_ip = 350; continue _fun0011 }
 183:
            var1 = {};
            var12 = var9.nick;
            var10 = var4;
            if(!(var7 != var12)) { _fun0011_ip = 201; continue _fun0011 }
 198:
            var10 = var12;
 201:
            var1['nick'] = var10;
            var10 = var9.colorString;
            var1['colorString'] = var10;
            var10 = var9.colorStrings;
            var1['colorStrings'] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 242; continue _fun0011 }
 237:
            var10 = var11.name;
 242:
            var1['colorRoleName'] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 263; continue _fun0011 }
 258:
            var10 = var11.id;
 263:
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
            if(!var10) { _fun0011_ip = 319; continue _fun0011 }
 316:
            var8 = var9;
 319:
            var1['primaryGuild'] = var8;
            var5 = var5.id;
            var1['guildId'] = var5;
            var2 = var2.id;
            var1['authorId'] = var2;
            var1['displayNameStyles'] = var3;
            _fun0011_ip = 378; continue _fun0011;
 350:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var2['nick'] = var4;
            var2['displayNameStyles'] = var3;
            var1 = var2;
 378:
            _fun0011_ip = 418; continue _fun0011;
 380:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var5 = var4;
            if(!(var7 != var6)) { _fun0011_ip = 404; continue _fun0011 }
 401:
            var5 = var6;
 404:
            var2['nick'] = var5;
            var2['displayNameStyles'] = var3;
            var1 = var2;
 418:
            _fun0011_ip = 448; continue _fun0011;
 420:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var2['nick'] = var4;
            var2['displayNameStyles'] = var3;
            var1 = var2;
 448:
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
 0:
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
            if(!(var3 != var2)) { _fun0012_ip = 65; continue _fun0012 }
 62:
            var1 = var2;
 65:
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