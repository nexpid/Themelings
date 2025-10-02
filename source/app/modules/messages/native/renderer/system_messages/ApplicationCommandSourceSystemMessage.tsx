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
            var16 = var5.roleStyle;
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
            var14 = _closure1_slot2;
            var2 = 3;
            var2 = var14[var2];
            var6 = var7.bind(var4)(var2);
            var2 = var6.getMessageAuthorWithProcessedColor;
            var2 = var2.bind(var6)(var11);
            var13 = var2.nick;
            var15 = var2.colorString;
            var17 = var2.colorStrings;
            var9 = var2.guildId;
            var2 = 4;
            var2 = var14[var2];
            var8 = var7.bind(var4)(var2);
            var6 = var8.isNativeMessageEligibleForEnhancedRoleColors;
            var2 = var11.author;
            var2 = var2.id;
            var18 = var6.bind(var8)(var9, var2, var16);
            var2 = {};
            var6 = 5;
            var8 = var14[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.1Zm+z8;
            var6 = {};
            var6['username'] = var13;
            var13 = {};
            var14 = 'bindUserMenu';
            var13['action'] = var14;
            var14 = var11.author;
            var14 = var14.id;
            var13['userId'] = var14;
            var13['colorString'] = var15;
            var19 = 'username';
            var14 = null;
            if(!(var19 === var16)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var14 = var15;
case 7:
            var13['linkColor'] = var14;
            var13['roleColor'] = var15;
            var14 = null;
            if(!var18) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var14 = var17;
case 9:
            var13['roleColors'] = var14;
            var14 = 'dot';
            var14 = var14 === var16;
            if(!var14) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var14 = var1 != var15;
case 11:
            var13['shouldShowRoleDot'] = var14;
            var14 = var11.channel_id;
            var13['messageChannelId'] = var14;
            var14 = true;
            var13['medium'] = var14;
            var6['usernameOnClick'] = var13;
            var13 = var11.type;
            var11 = _closure1_slot3;
            var11 = var11.CHAT_INPUT_COMMAND;
            if(!(var13 !== var11)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var12.name;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var15 = _closure1_slot4;
            var14 = var12.name;
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = '';
            var11 = var13.bind(var12)(var15, var14);
case 15:
            var6['commandName'] = var11;
            var6['applicationName'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['content'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var21 = var3.bind(var4)(var5);
            var22 = var2;
            var3 = copyDataProperties(var22, var21);
            return var2;
case 4:
            return var1;
        }
    };
    var3['createApplicationCommandSourceSystemMessage'] = var2;
    return var1;
})();