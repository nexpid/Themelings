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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChangeChannelIconSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var12 = var4.message;
            var5 = var4.theme;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var14 = var1.bind(var3)(var5);
            var5 = _closure1_slot0;
            var1 = 2;
            var1 = var6[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthor;
            var1 = var1.bind(var5)(var12);
            var15 = var1.nick;
            var10 = {};
            var1 = 'bindUserMenu';
            var10['action'] = var1;
            var1 = var12.author;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var12.channel_id;
            var10['messageChannelId'] = var1;
            var11 = true;
            var10['medium'] = var11;
            var1 = {};
            var7 = _closure1_slot3;
            var6 = var7.getChannel;
            var5 = var12.channel_id;
            var7 = var6.bind(var7)(var5);
            var13 = null;
            var6 = var13 == var7;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7.isGroupDM;
            var6 = var13 == var6;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var7.isGroupDM;
            var5 = var6.bind(var7)();
case 2:
            if(!(var13 != var5)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var7 = var9[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.wypJZ2;
            var5 = {};
            var5['username'] = var15;
            var5['usernameOnClick'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 3;
            var8 = var16[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var16[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.hfeYXF;
            var6 = {};
            var6['username'] = var15;
            var6['usernameOnClick'] = var10;
            var10 = {};
            var15 = 'bindOpenGdmCustomizeActionSheet';
            var10['action'] = var15;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var13 = var14.linkColor;
case 9:
            var10['linkColor'] = var13;
            var12 = var12.channel_id;
            var10['messageChannelId'] = var12;
            var10['medium'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var8.bind(var9)(var7, var6);
case 8:
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
    var3['createChangeChannelIconSystemMessage'] = var2;
    return var1;
})();