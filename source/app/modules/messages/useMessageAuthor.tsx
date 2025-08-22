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
            var13 = var7.bind(var8)(var6, var3);
            var _closure2_slot1 = var13;
            var7 = null;
            var6 = var7 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 97; continue _fun0001 }
 77:
            var6 = var5.author;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0001_ip = 97; continue _fun0001 }
 92:
            var3 = var6.id;
 97:
            var _closure2_slot2 = var3;
            var6 = var7 == var13;
            var19 = undefined;
            if(var6) { _fun0001_ip = 115; continue _fun0001 }
 110:
            var19 = var13.guild_id;
 115:
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
            if(!(var7 != var5)) { _fun0001_ip = 275; continue _fun0001 }
 239:
            var11 = var5.author;
            var11 = var11.bot;
            var3 = var6;
            if(!var11) { _fun0001_ip = 275; continue _fun0001 }
 257:
            var12 = var7 == var5;
            var11 = undefined;
            if(var12) { _fun0001_ip = 272; continue _fun0001 }
 266:
            var11 = var5.author;
 272:
            var3 = var11;
 275:
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
            if(var3) { _fun0001_ip = 349; continue _fun0001 }
 343:
            var11 = var9.colorRoleId;
 349:
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
            var11 = var17.bind(var18)(var16, var11, var15);
            var3 = var3[var14];
            var14 = var8.bind(var4)(var3);
            var8 = var14.useStateFromStores;
            var15 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var15;
            var1 = function() {
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
            var8 = var8.bind(var14)(var3, var1);
            var3 = var7 == var5;
            var1 = null;
            if(var3) { _fun0001_ip = 535; continue _fun0001 }
 457:
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
            if(!(var7 == var6)) { _fun0001_ip = 519; continue _fun0001 }
 505:
            var5 = var5.author;
            var5 = var5.displayNameStyles;
            _fun0001_ip = 525; continue _fun0001;
 519:
            var5 = var6.displayNameStyles;
 525:
            var2['displayNameStyles'] = var5;
            var1 = var3.bind(var4)(var2);
 535:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var4 = function useNullableUserAuthor(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var11;
            var4 = null;
            var6 = var4 == var5;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0006_ip = 30; continue _fun0006 }
 25:
            var1 = var5.id;
 30:
            var _closure2_slot1 = var1;
            var1 = var4 == var11;
            var17 = undefined;
            if(var1) { _fun0006_ip = 48; continue _fun0006 }
 43:
            var17 = var11.guild_id;
 48:
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
            if(var7) { _fun0006_ip = 164; continue _fun0006 }
 158:
            var9 = var8.colorRoleId;
 164:
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
            var9 = var15.bind(var16)(var14, var9, var13);
            var6 = var12[var6];
            var13 = var7.bind(var3)(var6);
            var7 = var13.useStateFromStores;
            var14 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var14;
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
            if(var6) { _fun0006_ip = 343; continue _fun0006 }
 337:
            var4 = var5.displayNameStyles;
 343:
            var1['displayNameStyles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var2 = function getUserAuthor(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var10 = arg2;
            var4 = null;
            var1 = var4 == var5;
            var3 = undefined;
            var12 = undefined;
            if(var1) { _fun0010_ip = 24; continue _fun0010 }
 19:
            var12 = var5.id;
 24:
            var1 = var4 == var10;
            var6 = undefined;
            if(var1) { _fun0010_ip = 38; continue _fun0010 }
 33:
            var6 = var10.guild_id;
 38:
            var7 = _closure1_slot6;
            var2 = var7.getGuild;
            var9 = var2.bind(var7)(var6);
            var2 = var4 == var6;
            var13 = var6;
            var7 = null;
            if(var2) { _fun0010_ip = 92; continue _fun0010 }
 67:
            var2 = var4 == var12;
            var7 = null;
            if(var2) { _fun0010_ip = 92; continue _fun0010 }
 76:
            var6 = _closure1_slot4;
            var2 = var6.getMember;
            var7 = var2.bind(var6)(var13, var12);
 92:
            var2 = var4 != var13;
            var8 = undefined;
            if(!var2) { _fun0010_ip = 147; continue _fun0010 }
 101:
            var6 = var4 == var7;
            var2 = undefined;
            if(var6) { _fun0010_ip = 116; continue _fun0010 }
 110:
            var2 = var7.colorRoleId;
 116:
            var2 = var4 != var2;
            var8 = undefined;
            if(!var2) { _fun0010_ip = 147; continue _fun0010 }
 125:
            var11 = _closure1_slot5;
            var6 = var11.getRole;
            var2 = var7.colorRoleId;
            var8 = var6.bind(var11)(var13, var2);
 147:
            var2 = var4 != var12;
            var6 = null;
            if(!var2) { _fun0010_ip = 195; continue _fun0010 }
 156:
            var2 = var4 != var10;
            var6 = null;
            if(!var2) { _fun0010_ip = 195; continue _fun0010 }
 165:
            var2 = var10.isPrivate;
            var2 = var2.bind(var10)();
            var6 = null;
            if(!var2) { _fun0010_ip = 195; continue _fun0010 }
 180:
            var11 = _closure1_slot7;
            var2 = var11.getNickname;
            var6 = var2.bind(var11)(var12);
 195:
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
            if(var6) { _fun0010_ip = 243; continue _fun0010 }
 237:
            var4 = var5.displayNameStyles;
 243:
            var1['displayNameStyles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = function computeMessageAuthor(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
            if(var10) { _fun0011_ip = 106; continue _fun0011 }
 63:
            if(!(var7 == var8)) { _fun0011_ip = 103; continue _fun0011 }
 67:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 8;
            var12 = var12[var10];
            var10 = undefined;
            var12 = var13.bind(var10)(var12);
            var10 = var12.getName;
            var8 = var10.bind(var12)(var2);
 103:
            var4 = var8;
 106:
            var12 = var7 == var2;
            var10 = undefined;
            if(var12) { _fun0011_ip = 120; continue _fun0011 }
 115:
            var10 = var2.id;
 120:
            if(!(var7 != var10)) { _fun0011_ip = 399; continue _fun0011 }
 127:
            if(!(var7 != var1)) { _fun0011_ip = 399; continue _fun0011 }
 134:
            var10 = var7 == var5;
            var1 = undefined;
            if(var10) { _fun0011_ip = 148; continue _fun0011 }
 143:
            var1 = var5.id;
 148:
            if(!(var7 != var1)) { _fun0011_ip = 359; continue _fun0011 }
 155:
            if(!(var7 != var9)) { _fun0011_ip = 329; continue _fun0011 }
 162:
            var1 = {};
            var12 = var9.nick;
            var10 = var4;
            if(!(var7 != var12)) { _fun0011_ip = 180; continue _fun0011 }
 177:
            var10 = var12;
 180:
            var1['nick'] = var10;
            var10 = var9.colorString;
            var1['colorString'] = var10;
            var10 = var9.colorStrings;
            var1['colorStrings'] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 221; continue _fun0011 }
 216:
            var10 = var11.name;
 221:
            var1['colorRoleName'] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 242; continue _fun0011 }
 237:
            var10 = var11.id;
 242:
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
            if(!var10) { _fun0011_ip = 298; continue _fun0011 }
 295:
            var8 = var9;
 298:
            var1['primaryGuild'] = var8;
            var5 = var5.id;
            var1['guildId'] = var5;
            var2 = var2.id;
            var1['authorId'] = var2;
            var1['displayNameStyles'] = var3;
            _fun0011_ip = 357; continue _fun0011;
 329:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var2['nick'] = var4;
            var2['displayNameStyles'] = var3;
            var1 = var2;
 357:
            _fun0011_ip = 397; continue _fun0011;
 359:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var5 = var4;
            if(!(var7 != var6)) { _fun0011_ip = 383; continue _fun0011 }
 380:
            var5 = var6;
 383:
            var2['nick'] = var5;
            var2['displayNameStyles'] = var3;
            var1 = var2;
 397:
            _fun0011_ip = 427; continue _fun0011;
 399:
            var2 = {'nick': null, 'colorString': null, 'colorStrings': null};
            var2['nick'] = var4;
            var2['displayNameStyles'] = var3;
            var1 = var2;
 427:
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