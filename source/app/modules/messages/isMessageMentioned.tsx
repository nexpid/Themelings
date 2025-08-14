// app/modules/messages/isMessageMentioned.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var2 = function isMentioned(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.userId;
            var8 = var1.channelId;
            var9 = var1.mentionEveryone;
            var5 = var1.mentionUsers;
            var4 = var1.mentionRoles;
            var6 = var1.mentionGames;
            var3 = var1.suppressEveryone;
            var10 = undefined;
            if(!(var3 === var10)) { _fun0001_ip = 53; continue _fun0001 }
 51:
            var3 = false;
 53:
            var1 = var1.suppressRoles;
            if(!(var1 === var10)) { _fun0001_ip = 65; continue _fun0001 }
 63:
            var1 = false;
 65:
            var _closure2_slot0 = var10;
            if(!var9) { _fun0001_ip = 79; continue _fun0001 }
 72:
            if(var3) { _fun0001_ip = 79; continue _fun0001 }
 75:
            var3 = true;
            return var3;
 79:
            var3 = var5.includes;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0001_ip = 261; continue _fun0001 }
 95:
            var5 = var6.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var1 = var3.getMute;
                    var1 = var1.bind(var3)(var4);
                    var1 = !var1;
                    if(!var1) { _fun0002_ip = 95; continue _fun0002 }
 29:
                    var3 = _closure1_slot4;
                    var2 = var3.getLastPlayedDateTime;
                    var2 = var2.bind(var3)(var4);
                    var3 = null;
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0002_ip = 60; continue _fun0002 }
 57:
                    var3 = var2;
 60:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var4 = var2.bind(var4)();
                    var2 = 5184000000.0;
                    var2 = var4 - var2;
                    var1 = var3 > var2;
 95:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0001_ip = 257; continue _fun0001 }
 117:
            if(var1) { _fun0001_ip = 253; continue _fun0001 }
 123:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 253; continue _fun0001 }
 132:
            var5 = var4.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0001_ip = 253; continue _fun0001 }
 143:
            var6 = _closure1_slot1;
            var5 = var6.getChannel;
            var6 = var5.bind(var6)(var8);
            if(!(var3 != var6)) { _fun0001_ip = 249; continue _fun0001 }
 164:
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            if(!(var3 != var6)) { _fun0001_ip = 245; continue _fun0001 }
 178:
            var8 = _closure1_slot3;
            var5 = var8.getGuild;
            var5 = var5.bind(var8)(var6);
            if(!(var3 != var5)) { _fun0001_ip = 241; continue _fun0001 }
 196:
            var5 = _closure1_slot2;
            var1 = var5.getMember;
            var1 = var1.bind(var5)(var6, var7);
            _closure2_slot0 = var1;
            var1 = var3 != var1;
            if(!var1) { _fun0001_ip = 239; continue _fun0001 }
 223:
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
 239:
            return var1;
 241:
            var1 = false;
            return var1;
 245:
            var1 = false;
            return var1;
 249:
            var1 = false;
            return var1;
 253:
            var1 = false;
            return var1;
 257:
            var1 = true;
            return var1;
 261:
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
 0:
            var1 = arg1;
            var6 = var1.message;
            var7 = var1.userId;
            var5 = var1.suppressEveryone;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0003_ip = 27; continue _fun0003 }
 25:
            var5 = false;
 27:
            var4 = var1.suppressRoles;
            if(!(var4 === var3)) { _fun0003_ip = 39; continue _fun0003 }
 37:
            var4 = false;
 39:
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
            if(var8) { _fun0003_ip = 128; continue _fun0003 }
 111:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var9.bind(var10)(var8);
 128:
            if(!(var7 == var6)) { _fun0003_ip = 136; continue _fun0003 }
 132:
            var6 = new Array(0);
 136:
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
 0:
            var1 = arg1;
            var6 = var1.rawMessage;
            var7 = var1.userId;
            var5 = var1.suppressEveryone;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0004_ip = 30; continue _fun0004 }
 28:
            var5 = false;
 30:
            var4 = var1.suppressRoles;
            if(!(var4 === var3)) { _fun0004_ip = 42; continue _fun0004 }
 40:
            var4 = false;
 42:
            var2 = _closure1_slot5;
            var1 = {};
            var1['userId'] = var7;
            var7 = var6.channel_id;
            var1['channelId'] = var7;
            var10 = var6.mention_everyone;
            var7 = null;
            var9 = var7 != var10;
            if(!var9) { _fun0004_ip = 82; continue _fun0004 }
 79:
            var9 = var10;
 82:
            var1['mentionEveryone'] = var9;
            var12 = var6.mentions;
            var10 = var7 == var12;
            var9 = undefined;
            if(var10) { _fun0004_ip = 117; continue _fun0004 }
 102:
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var11.bind(var12)(var10);
 117:
            if(!(var7 == var9)) { _fun0004_ip = 125; continue _fun0004 }
 121:
            var9 = new Array(0);
 125:
            var1['mentionUsers'] = var9;
            var9 = var6.mention_roles;
            if(!(var7 == var9)) { _fun0004_ip = 144; continue _fun0004 }
 140:
            var9 = new Array(0);
 144:
            var1['mentionRoles'] = var9;
            var10 = var6.mention_games;
            var9 = var7 == var10;
            var6 = undefined;
            if(var9) { _fun0004_ip = 179; continue _fun0004 }
 164:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var9.bind(var10)(var8);
 179:
            if(!(var7 == var6)) { _fun0004_ip = 187; continue _fun0004 }
 183:
            var6 = new Array(0);
 187:
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