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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
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
            var13 = var4.roleStyle;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var14 = var1.bind(var5)(var11);
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
            var16 = var5.bind(var6)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 4;
            var7 = var15[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var15[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.veX9jq;
            var5 = {};
            var9 = var14.nick;
            var5['actorName'] = var9;
            var12 = _closure1_slot1;
            var9 = 5;
            var9 = var15[var9];
            var12 = var12.bind(var3)(var9);
            var9 = {};
            var9['message'] = var11;
            var9['author'] = var14;
            var9['roleStyle'] = var13;
            var9 = var12.bind(var3)(var9);
            var5['actorHook'] = var9;
            if(!(var10 == var16)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var11.content;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 6;
            var12 = var14[var12];
            var15 = var13.bind(var3)(var12);
            var14 = var15.computeChannelName;
            var13 = _closure1_slot5;
            var12 = _closure1_slot4;
            var9 = var14.bind(var15)(var16, var13, var12);
case 6:
            var5['threadName'] = var9;
            var9 = {'action': 'bindOpenThreadChannel', 'threadId': null, 'medium': true};
            var11 = var11.messageReference;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var11.channel_id;
case 7:
            var9['threadId'] = var10;
            var5['threadOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var18 = var2.bind(var3)(var4);
            var19 = var1;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createNewThreadSystemMessage'] = var2;
    return var1;
})();