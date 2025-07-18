// app/modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function NewThreadSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.row;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 8;
            var3 = var7[var8];
            var12 = var5.bind(var4)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var3;
            var9 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = new Array(0);
            var10 = var11.bind(var12)(var10, var9, var3);
            var _closure2_slot0 = var10;
            var12 = var6.message;
            var _closure2_slot1 = var12;
            var3 = 4;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useMessageAuthorWithProcessedColor;
            var3 = var3.bind(var5)(var12);
            var11 = var3.nick;
            var _closure2_slot2 = var11;
            var13 = var3.colorString;
            var _closure2_slot3 = var13;
            var5 = var12.messageReference;
            var3 = null;
            var7 = var3 == var5;
            var9 = undefined;
            if(var7) { _fun0001_ip = 157; continue _fun0001 }
 152:
            var9 = var5.channel_id;
 157:
            _closure2_slot4 = var9;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var15 = var7.bind(var4)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var5;
            var7 = new Array(1);
            var7[0] = var9;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var14.bind(var15)(var8, var5, var7);
            var7 = var3 == var5;
            var8 = undefined;
            if(var7) { _fun0001_ip = 231; continue _fun0001 }
 226:
            var8 = var5.name;
 231:
            if(!(var3 == var8)) { _fun0001_ip = 240; continue _fun0001 }
 235:
            var8 = var12.content;
 240:
            _closure2_slot5 = var8;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var3 = new Array(7);
            var3[0] = var13;
            var13 = var12.author;
            var13 = var13.id;
            var3[1] = var13;
            var12 = var12.channel_id;
            var3[2] = var12;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var9;
            var3[6] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var3 = var6[var1];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToParts;
                    var1 = var6[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.veX9jo;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['actorName'] = var5;
                    var5 = {};
                    var7 = 'bindUserMenu';
                    var5['action'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.author;
                    var7 = var7.id;
                    var5['userId'] = var7;
                    var7 = _closure2_slot3;
                    var5['colorString'] = var7;
                    var10 = _closure2_slot0;
                    var9 = null;
                    var8 = 'username';
                    var7 = null;
                    if(!(var8 === var10)) { _fun0002_ip = 130; continue _fun0002 }
 126:
                    var7 = _closure2_slot3;
 130:
                    var5['linkColor'] = var7;
                    var7 = _closure2_slot3;
                    var5['roleColor'] = var7;
                    var8 = _closure2_slot0;
                    var7 = 'dot';
                    var7 = var7 === var8;
                    if(!var7) { _fun0002_ip = 167; continue _fun0002 }
 159:
                    var8 = _closure2_slot3;
                    var7 = var9 != var8;
 167:
                    var5['shouldShowRoleDot'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.channel_id;
                    var5['messageChannelId'] = var7;
                    var7 = true;
                    var5['medium'] = var7;
                    var1['actorHook'] = var5;
                    var5 = _closure2_slot5;
                    var1['threadName'] = var5;
                    var5 = {'action': 'bindOpenThreadChannel', 'threadId': null, 'medium': true};
                    var6 = _closure2_slot4;
                    var5['threadId'] = var6;
                    var1['threadOnClick'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var6;
            var1['content'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createNewThreadSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var11 = var4.message;
            var15 = var4.roleStyle;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var11);
            var9 = var1.nick;
            var14 = var1.colorString;
            var16 = var1.colorStrings;
            var8 = var1.guildId;
            var6 = _closure1_slot5;
            var5 = var6.getChannel;
            var7 = var11.messageReference;
            var10 = null;
            var12 = var10 == var7;
            var1 = undefined;
            if(var12) { _fun0003_ip = 104; continue _fun0003 }
 99:
            var1 = var7.channel_id;
 104:
            var12 = var5.bind(var6)(var1);
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var1 = var13[var1];
            var7 = var6.bind(var3)(var1);
            var5 = var7.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var11.author;
            var1 = var1.id;
            var17 = var5.bind(var7)(var8, var1, var15);
            var1 = {};
            var5 = 6;
            var7 = var13[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var13[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.veX9jo;
            var5 = {};
            var5['actorName'] = var9;
            var9 = {};
            var13 = 'bindUserMenu';
            var9['action'] = var13;
            var13 = var11.author;
            var13 = var13.id;
            var9['userId'] = var13;
            var9['colorString'] = var14;
            var18 = 'username';
            var13 = null;
            if(!(var18 === var15)) { _fun0003_ip = 250; continue _fun0003 }
 247:
            var13 = var14;
 250:
            var9['linkColor'] = var13;
            var9['roleColor'] = var14;
            var13 = null;
            if(!var17) { _fun0003_ip = 268; continue _fun0003 }
 265:
            var13 = var16;
 268:
            var9['roleColors'] = var13;
            var13 = 'dot';
            var13 = var13 === var15;
            if(!var13) { _fun0003_ip = 288; continue _fun0003 }
 284:
            var13 = var10 != var14;
 288:
            var9['shouldShowRoleDot'] = var13;
            var13 = var11.channel_id;
            var9['messageChannelId'] = var13;
            var13 = true;
            var9['medium'] = var13;
            var5['actorHook'] = var9;
            var13 = var10 == var12;
            var9 = undefined;
            if(var13) { _fun0003_ip = 329; continue _fun0003 }
 324:
            var9 = var12.name;
 329:
            if(!(var10 == var9)) { _fun0003_ip = 338; continue _fun0003 }
 333:
            var9 = var11.content;
 338:
            var5['threadName'] = var9;
            var9 = {'action': 'bindOpenThreadChannel', 'threadId': null, 'medium': true};
            var11 = var11.messageReference;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0003_ip = 377; continue _fun0003 }
 372:
            var10 = var11.channel_id;
 377:
            var9['threadId'] = var10;
            var5['threadOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var20 = var2.bind(var3)(var4);
            var21 = var1;
            var2 = copyDataProperties(var21, var20);
            return var1;
        }
    };
    var3['createNewThreadSystemMessage'] = var2;
    return var1;
})();