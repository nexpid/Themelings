// app/modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ApplicationCommandSourceSystemMessageInner(arg1) {
        var1 = arg1;
        var6 = var1.row;
        var14 = var1.applicationCommandName;
        var _closure2_slot0 = var14;
        var13 = var1.applicationName;
        var _closure2_slot1 = var13;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 10;
        var3 = var7[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var3;
        var8 = function() {
            var1 = _closure1_slot4;
            var1 = var1.roleStyle;
            return var1;
        };
        var3 = new Array(0);
        var9 = var10.bind(var11)(var9, var8, var3);
        var _closure2_slot2 = var9;
        var11 = var6.message;
        var _closure2_slot3 = var11;
        var3 = 6;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useMessageAuthorWithProcessedColor;
        var3 = var3.bind(var5)(var11);
        var10 = var3.nick;
        var _closure2_slot4 = var10;
        var12 = var3.colorString;
        var _closure2_slot5 = var12;
        var8 = _closure1_slot3;
        var5 = var8.useMemo;
        var3 = new Array(8);
        var3[0] = var14;
        var3[1] = var13;
        var3[2] = var12;
        var12 = var11.author;
        var12 = var12.id;
        var3[3] = var12;
        var12 = var11.channel_id;
        var3[4] = var12;
        var11 = var11.type;
        var3[5] = var11;
        var3[6] = var10;
        var3[7] = var9;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToParts;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.1Zm+z8;
                var1 = {};
                var6 = _closure2_slot4;
                var1['username'] = var6;
                var8 = {};
                var6 = 'bindUserMenu';
                var8['action'] = var6;
                var6 = _closure2_slot3;
                var6 = var6.author;
                var6 = var6.id;
                var8['userId'] = var6;
                var6 = _closure2_slot5;
                var8['colorString'] = var6;
                var11 = _closure2_slot2;
                var10 = null;
                var9 = 'username';
                var6 = null;
                if(!(var9 === var11)) { _fun0001_ip = 129; continue _fun0001 }
 125:
                var6 = _closure2_slot5;
 129:
                var8['linkColor'] = var6;
                var6 = _closure2_slot5;
                var8['roleColor'] = var6;
                var9 = _closure2_slot2;
                var6 = 'dot';
                var6 = var6 === var9;
                if(!var6) { _fun0001_ip = 166; continue _fun0001 }
 158:
                var9 = _closure2_slot5;
                var6 = var10 != var9;
 166:
                var8['shouldShowRoleDot'] = var6;
                var6 = _closure2_slot3;
                var9 = var6.channel_id;
                var8['messageChannelId'] = var9;
                var9 = true;
                var8['medium'] = var9;
                var1['usernameOnClick'] = var8;
                var8 = var6.type;
                var6 = _closure1_slot5;
                var6 = var6.CHAT_INPUT_COMMAND;
                if(!(var8 !== var6)) { _fun0001_ip = 222; continue _fun0001 }
 216:
                var6 = _closure2_slot0;
                _fun0001_ip = 253; continue _fun0001;
 222:
                var10 = _closure1_slot6;
                var9 = _closure2_slot0;
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = '';
                var6 = var8.bind(var7)(var10, var9);
 253:
                var1['commandName'] = var6;
                var5 = _closure2_slot1;
                var1['applicationName'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var5.bind(var8)(var2, var3);
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var1 = 11;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['row'] = var6;
        var1['content'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.COMMAND_SENTINEL;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ApplicationCommandSourceSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.row;
            var1 = var8.message;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.getApplicationCommand;
            var3 = var1.content;
            var7 = var4.bind(var6)(var3);
            var1 = var1.application;
            var4 = null;
            var3 = var4 == var1;
            var6 = undefined;
            if(var3) { _fun0002_ip = 76; continue _fun0002 }
 71:
            var6 = var1.name;
 76:
            var3 = var4 == var7;
            var1 = null;
            if(var3) { _fun0002_ip = 130; continue _fun0002 }
 85:
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0002_ip = 130; continue _fun0002 }
 94:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var2 = {};
            var2['row'] = var8;
            var7 = var7.name;
            var2['applicationCommandName'] = var7;
            var2['applicationName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 130:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createApplicationCommandSourceSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var11 = var5.message;
            var16 = var5.roleStyle;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
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
            if(var6) { _fun0003_ip = 76; continue _fun0003 }
 71:
            var10 = var2.name;
 76:
            if(!(var1 != var12)) { _fun0003_ip = 453; continue _fun0003 }
 83:
            if(!(var1 != var10)) { _fun0003_ip = 453; continue _fun0003 }
 90:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var6 = var7.bind(var4)(var2);
            var2 = var6.getMessageAuthorWithProcessedColor;
            var2 = var2.bind(var6)(var11);
            var13 = var2.nick;
            var15 = var2.colorString;
            var17 = var2.colorStrings;
            var9 = var2.guildId;
            var2 = 7;
            var2 = var14[var2];
            var8 = var7.bind(var4)(var2);
            var6 = var8.isNativeMessageEligibleForEnhancedRoleColors;
            var2 = var11.author;
            var2 = var2.id;
            var18 = var6.bind(var8)(var9, var2, var16);
            var2 = {};
            var6 = 8;
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
            if(!(var19 === var16)) { _fun0003_ip = 276; continue _fun0003 }
 273:
            var14 = var15;
 276:
            var13['linkColor'] = var14;
            var13['roleColor'] = var15;
            var14 = null;
            if(!var18) { _fun0003_ip = 294; continue _fun0003 }
 291:
            var14 = var17;
 294:
            var13['roleColors'] = var14;
            var14 = 'dot';
            var14 = var14 === var16;
            if(!var14) { _fun0003_ip = 314; continue _fun0003 }
 310:
            var14 = var1 != var15;
 314:
            var13['shouldShowRoleDot'] = var14;
            var14 = var11.channel_id;
            var13['messageChannelId'] = var14;
            var14 = true;
            var13['medium'] = var14;
            var6['usernameOnClick'] = var13;
            var13 = var11.type;
            var11 = _closure1_slot5;
            var11 = var11.CHAT_INPUT_COMMAND;
            if(!(var13 !== var11)) { _fun0003_ip = 367; continue _fun0003 }
 360:
            var11 = var12.name;
            _fun0003_ip = 399; continue _fun0003;
 367:
            var15 = _closure1_slot6;
            var14 = var12.name;
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = '';
            var11 = var13.bind(var12)(var15, var14);
 399:
            var6['commandName'] = var11;
            var6['applicationName'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['content'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var21 = var3.bind(var4)(var5);
            var22 = var2;
            var3 = copyDataProperties(var22, var21);
            return var2;
 453:
            return var1;
        }
    };
    var3['createApplicationCommandSourceSystemMessage'] = var2;
    return var1;
})();