// app/modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChangeChannelIconSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var11 = var4.message;
            var8 = var4.theme;
            var6 = var4.roleStyle;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var13 = var1.bind(var3)(var8);
            var8 = _closure1_slot0;
            var1 = 2;
            var1 = var7[var1];
            var8 = var8.bind(var3)(var1);
            var1 = var8.getMessageAuthorWithProcessedColor;
            var14 = var1.bind(var8)(var11);
            var1 = 3;
            var1 = var7[var1];
            var5 = var5.bind(var3)(var1);
            var1 = {};
            var1['message'] = var11;
            var1['author'] = var14;
            var1['roleStyle'] = var6;
            var10 = var5.bind(var3)(var1);
            var1 = {};
            var7 = _closure1_slot3;
            var6 = var7.getChannel;
            var5 = var11.channel_id;
            var7 = var6.bind(var7)(var5);
            var12 = null;
            var6 = var12 == var7;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7.isGroupDM;
            var6 = var12 == var6;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var7.isGroupDM;
            var5 = var6.bind(var7)();
case 2:
            if(!(var12 != var5)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 4;
            var7 = var9[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.wypJZ0;
            var5 = {};
            var9 = var14.nick;
            var5['username'] = var9;
            var5['usernameOnClick'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 4;
            var8 = var15[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var15[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.hfeYXC;
            var6 = {};
            var14 = var14.nick;
            var6['username'] = var14;
            var6['usernameOnClick'] = var10;
            var10 = {};
            var14 = 'bindOpenGdmCustomizeActionSheet';
            var10['action'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var12 = var13.linkColor;
case 9:
            var10['linkColor'] = var12;
            var11 = var11.channel_id;
            var10['messageChannelId'] = var11;
            var11 = true;
            var10['medium'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var8.bind(var9)(var7, var6);
case 8:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var16 = var2.bind(var3)(var4);
            var17 = var1;
            var2 = copyDataProperties(var17, var16);
            return var1;
        }
    };
    var3['createChangeChannelIconSystemMessage'] = var2;
    return var1;
})();