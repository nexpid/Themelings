// app/modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createNewThreadSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var11 = var4.message;
            var15 = var4.roleStyle;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var11);
            var9 = var1.nick;
            var14 = var1.colorString;
            var16 = var1.colorStrings;
            var8 = var1.guildId;
            var6 = _closure1_slot3;
            var5 = var6.getChannel;
            var7 = var11.messageReference;
            var10 = null;
            var12 = var10 == var7;
            var1 = undefined;
            if(var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7.channel_id;
case 2:
            var12 = var5.bind(var6)(var1);
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 2;
            var1 = var13[var1];
            var7 = var6.bind(var3)(var1);
            var5 = var7.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var11.author;
            var1 = var1.id;
            var17 = var5.bind(var7)(var8, var1, var15);
            var1 = {};
            var5 = 3;
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
            if(!(var18 === var15)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var14;
case 4:
            var9['linkColor'] = var13;
            var9['roleColor'] = var14;
            var13 = null;
            if(!var17) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var16;
case 6:
            var9['roleColors'] = var13;
            var13 = 'dot';
            var13 = var13 === var15;
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var10 != var14;
case 8:
            var9['shouldShowRoleDot'] = var13;
            var13 = var11.channel_id;
            var9['messageChannelId'] = var13;
            var13 = true;
            var9['medium'] = var13;
            var5['actorHook'] = var9;
            var13 = var10 == var12;
            var9 = undefined;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var12.name;
case 10:
            if(!(var10 == var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var11.content;
case 12:
            var5['threadName'] = var9;
            var9 = {'action': 'bindOpenThreadChannel', 'threadId': null, 'medium': true};
            var11 = var11.messageReference;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var11.channel_id;
case 14:
            var9['threadId'] = var10;
            var5['threadOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
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