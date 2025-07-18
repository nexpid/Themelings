// app/modules/messages/isMessageMentioned.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var2 = function isMentioned(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.userId;
            var8 = var1.channelId;
            var6 = var1.mentionEveryone;
            var5 = var1.mentionUsers;
            var4 = var1.mentionRoles;
            var3 = var1.suppressEveryone;
            var9 = undefined;
            if(!(var3 === var9)) { _fun0001_ip = 47; continue _fun0001 }
 45:
            var3 = false;
 47:
            var1 = var1.suppressRoles;
            if(!(var1 === var9)) { _fun0001_ip = 59; continue _fun0001 }
 57:
            var1 = false;
 59:
            var _closure2_slot0 = var9;
            if(!var6) { _fun0001_ip = 73; continue _fun0001 }
 66:
            if(var3) { _fun0001_ip = 73; continue _fun0001 }
 69:
            var3 = true;
            return var3;
 73:
            var3 = var5.includes;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0001_ip = 229; continue _fun0001 }
 89:
            if(var1) { _fun0001_ip = 225; continue _fun0001 }
 95:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 225; continue _fun0001 }
 104:
            var5 = var4.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0001_ip = 225; continue _fun0001 }
 115:
            var6 = _closure1_slot0;
            var5 = var6.getChannel;
            var6 = var5.bind(var6)(var8);
            if(!(var3 != var6)) { _fun0001_ip = 221; continue _fun0001 }
 136:
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            if(!(var3 != var6)) { _fun0001_ip = 217; continue _fun0001 }
 150:
            var8 = _closure1_slot2;
            var5 = var8.getGuild;
            var5 = var5.bind(var8)(var6);
            if(!(var3 != var5)) { _fun0001_ip = 213; continue _fun0001 }
 168:
            var5 = _closure1_slot1;
            var1 = var5.getMember;
            var1 = var1.bind(var5)(var6, var7);
            _closure2_slot0 = var1;
            var1 = var3 != var1;
            if(!var1) { _fun0001_ip = 211; continue _fun0001 }
 195:
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
 211:
            return var1;
 213:
            var1 = false;
            return var1;
 217:
            var1 = false;
            return var1;
 221:
            var1 = false;
            return var1;
 225:
            var1 = false;
            return var1;
 229:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot3 = var2;
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
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/isMessageMentioned.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isMessageMentioned(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var7 = var1.userId;
            var5 = var1.suppressEveryone;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 27; continue _fun0002 }
 25:
            var5 = false;
 27:
            var4 = var1.suppressRoles;
            if(!(var4 === var3)) { _fun0002_ip = 39; continue _fun0002 }
 37:
            var4 = false;
 39:
            var2 = _closure1_slot3;
            var1 = {};
            var1['userId'] = var7;
            var7 = var6.channel_id;
            var1['channelId'] = var7;
            var7 = var6.mentionEveryone;
            var1['mentionEveryone'] = var7;
            var7 = var6.mentions;
            var1['mentionUsers'] = var7;
            var6 = var6.mentionRoles;
            var1['mentionRoles'] = var6;
            var1['suppressEveryone'] = var5;
            var1['suppressRoles'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function isRawMessageMentioned(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.rawMessage;
            var7 = var1.userId;
            var5 = var1.suppressEveryone;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0003_ip = 28; continue _fun0003 }
 26:
            var5 = false;
 28:
            var4 = var1.suppressRoles;
            if(!(var4 === var3)) { _fun0003_ip = 40; continue _fun0003 }
 38:
            var4 = false;
 40:
            var2 = _closure1_slot3;
            var1 = {};
            var1['userId'] = var7;
            var7 = var6.channel_id;
            var1['channelId'] = var7;
            var9 = var6.mention_everyone;
            var7 = null;
            var8 = var7 != var9;
            if(!var8) { _fun0003_ip = 80; continue _fun0003 }
 77:
            var8 = var9;
 80:
            var1['mentionEveryone'] = var8;
            var11 = var6.mentions;
            var9 = var7 == var11;
            var8 = undefined;
            if(var9) { _fun0003_ip = 117; continue _fun0003 }
 100:
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var8 = var10.bind(var11)(var9);
 117:
            if(!(var7 == var8)) { _fun0003_ip = 125; continue _fun0003 }
 121:
            var8 = new Array(0);
 125:
            var1['mentionUsers'] = var8;
            var6 = var6.mention_roles;
            if(!(var7 == var6)) { _fun0003_ip = 144; continue _fun0003 }
 140:
            var6 = new Array(0);
 144:
            var1['mentionRoles'] = var6;
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