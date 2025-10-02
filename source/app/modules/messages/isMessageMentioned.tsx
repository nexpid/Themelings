// app/modules/messages/isMessageMentioned.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var2 = function isMentioned(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.userId;
            var8 = var1.channelId;
            var9 = var1.mentionEveryone;
            var5 = var1.mentionUsers;
            var4 = var1.mentionRoles;
            var6 = var1.mentionGames;
            var3 = var1.suppressEveryone;
            var10 = undefined;
            if(!(var3 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var1 = var1.suppressRoles;
            if(!(var1 === var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var _closure2_slot0 = var10;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = true;
            return var3;
case 6:
            var3 = var5.includes;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var6.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var1 = var3.getMute;
                    var1 = var1.bind(var3)(var4);
                    var1 = !var1;
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure1_slot4;
                    var2 = var3.getLastPlayedDateTime;
                    var2 = var2.bind(var3)(var4);
                    var3 = null;
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = var2;
case 12:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var4 = var2.bind(var4)();
                    var2 = 5184000000.0;
                    var2 = var4 - var2;
                    var1 = var3 > var2;
case 10:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var5 = var4.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0001_ip = 16; continue _fun0001 }
case 19:
            var6 = _closure1_slot1;
            var5 = var6.getChannel;
            var6 = var5.bind(var6)(var8);
            if(!(var3 != var6)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            if(!(var3 != var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = _closure1_slot3;
            var5 = var8.getGuild;
            var5 = var5.bind(var8)(var6);
            if(!(var3 != var5)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = _closure1_slot2;
            var1 = var5.getMember;
            var1 = var1.bind(var5)(var6, var7);
            _closure2_slot0 = var1;
            var1 = var3 != var1;
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.roles;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 26:
            return var1;
case 24:
            var1 = false;
            return var1;
case 22:
            var1 = false;
            return var1;
case 20:
            var1 = false;
            return var1;
case 16:
            var1 = false;
            return var1;
case 14:
            var1 = true;
            return var1;
case 9:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var6[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/isMessageMentioned.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isMessageMentioned(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.message;
            var7 = var1.userId;
            var5 = var1.suppressEveryone;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var5 = false;
case 28:
            var4 = var1.suppressRoles;
            if(!(var4 === var3)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var4 = false;
case 30:
            var2 = _closure1_slot5;
            var1 = {};
            var1['userId'] = var7;
            var7 = var6.channel_id;
            var1['channelId'] = var7;
            var7 = var6.mentionEveryone;
            var1['mentionEveryone'] = var7;
            var7 = var6.mentions;
            var1['mentionUsers'] = var7;
            var7 = var6.mentionRoles;
            var1['mentionRoles'] = var7;
            var10 = var6.mentionGames;
            var7 = null;
            var8 = var7 == var10;
            var6 = undefined;
            if(var8) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var9.bind(var10)(var8);
case 32:
            if(!(var7 == var6)) { _fun0003_ip = 34; continue _fun0003 }
case 18:
            var6 = new Array(0);
case 34:
            var1['mentionGames'] = var6;
            var1['suppressEveryone'] = var5;
            var1['suppressRoles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function isRawMessageMentioned(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.rawMessage;
            var7 = var1.userId;
            var5 = var1.suppressEveryone;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var5 = false;
case 35:
            var4 = var1.suppressRoles;
            if(!(var4 === var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var4 = false;
case 37:
            var2 = _closure1_slot5;
            var1 = {};
            var1['userId'] = var7;
            var7 = var6.channel_id;
            var1['channelId'] = var7;
            var10 = var6.mention_everyone;
            var7 = null;
            var9 = var7 != var10;
            if(!var9) { _fun0004_ip = 39; continue _fun0004 }
case 6:
            var9 = var10;
case 39:
            var1['mentionEveryone'] = var9;
            var12 = var6.mentions;
            var10 = var7 == var12;
            var9 = undefined;
            if(var10) { _fun0004_ip = 15; continue _fun0004 }
case 40:
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var11.bind(var12)(var10);
case 15:
            if(!(var7 == var9)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var9 = new Array(0);
case 41:
            var1['mentionUsers'] = var9;
            var9 = var6.mention_roles;
            if(!(var7 == var9)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var9 = new Array(0);
case 43:
            var1['mentionRoles'] = var9;
            var10 = var6.mention_games;
            var9 = var7 == var10;
            var6 = undefined;
            if(var9) { _fun0004_ip = 45; continue _fun0004 }
case 21:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var9.bind(var10)(var8);
case 45:
            if(!(var7 == var6)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var6 = new Array(0);
case 46:
            var1['mentionGames'] = var6;
            var1['suppressEveryone'] = var5;
            var1['suppressRoles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['isRawMessageMentioned'] = var4;
    var3['isMentioned'] = var2;
    return var1;
})();