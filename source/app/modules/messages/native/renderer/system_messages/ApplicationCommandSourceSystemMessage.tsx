// app/modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.COMMAND_SENTINEL;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createApplicationCommandSourceSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var11 = var5.message;
            var15 = var5.roleStyle;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var2.bind(var4)(var1);
            var2 = var6.getApplicationCommand;
            var1 = var11.content;
            var12 = var2.bind(var6)(var1);
            var2 = var11.application;
            var1 = null;
            var6 = var1 == var2;
            var10 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var2.name;
case 2:
            if(!(var1 != var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 != var10)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 3;
            var2 = var17[var2];
            var6 = var7.bind(var4)(var2);
            var2 = var6.getMessageAuthorWithProcessedColor;
            var16 = var2.bind(var6)(var11);
            var2 = {};
            var6 = 4;
            var8 = var17[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var17[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6["1Zm+zw"];
            var6 = {};
            var13 = var16.nick;
            var6['username'] = var13;
            var14 = _closure1_slot1;
            var13 = 5;
            var13 = var17[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['message'] = var11;
            var13['author'] = var16;
            var13['roleStyle'] = var15;
            var13 = var14.bind(var4)(var13);
            var6['usernameOnClick'] = var13;
            var13 = var11.type;
            var11 = _closure1_slot3;
            var11 = var11.CHAT_INPUT_COMMAND;
            if(!(var13 !== var11)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = var12.name;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var15 = _closure1_slot4;
            var14 = var12.name;
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = '';
            var11 = var13.bind(var12)(var15, var14);
case 9:
            var6['commandName'] = var11;
            var6['applicationName'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['content'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var18 = var3.bind(var4)(var5);
            var19 = var2;
            var3 = copyDataProperties(var19, var18);
            return var2;
case 4:
            return var1;
        }
    };
    var3['createApplicationCommandSourceSystemMessage'] = var2;
    return var1;
})();