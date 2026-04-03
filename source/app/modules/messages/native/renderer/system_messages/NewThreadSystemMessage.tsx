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
            var14 = var4.roleStyle;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var15 = var1.bind(var5)(var11);
            var6 = _closure1_slot3;
            var5 = var6.getChannel;
            var7 = var11.messageReference;
            var10 = null;
            var8 = var10 == var7;
            var1 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7.channel_id;
case 2:
            var12 = var5.bind(var6)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 2;
            var7 = var16[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var16[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.veX9jq;
            var5 = {};
            var9 = var15.nick;
            var5['actorName'] = var9;
            var13 = _closure1_slot1;
            var9 = 3;
            var9 = var16[var9];
            var13 = var13.bind(var3)(var9);
            var9 = {};
            var9['message'] = var11;
            var9['author'] = var15;
            var9['roleStyle'] = var14;
            var9 = var13.bind(var3)(var9);
            var5['actorHook'] = var9;
            var13 = var10 == var12;
            var9 = undefined;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var12.name;
case 4:
            if(!(var10 == var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var11.content;
case 6:
            var5['threadName'] = var9;
            var9 = {'action': 'bindOpenThreadChannel', 'threadId': null, 'medium': true};
            var11 = var11.messageReference;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var11.channel_id;
case 8:
            var9['threadId'] = var10;
            var5['threadOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var17 = var2.bind(var3)(var4);
            var18 = var1;
            var2 = copyDataProperties(var18, var17);
            return var1;
        }
    };
    var3['createNewThreadSystemMessage'] = var2;
    return var1;
})();