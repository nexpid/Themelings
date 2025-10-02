// app/modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx
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
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChangeChannelNameSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var11 = var4.message;
            var5 = var4.theme;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var13 = var1.bind(var3)(var5);
            var5 = _closure1_slot0;
            var1 = 2;
            var1 = var6[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthor;
            var1 = var1.bind(var5)(var11);
            var14 = var1.nick;
            var10 = {};
            var1 = 'bindUserMenu';
            var10['action'] = var1;
            var1 = var11.author;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var11.channel_id;
            var10['messageChannelId'] = var1;
            var1 = true;
            var10['medium'] = var1;
            var6 = _closure1_slot3;
            var5 = var6.getChannel;
            var1 = var11.channel_id;
            var6 = var5.bind(var6)(var1);
            var12 = null;
            var5 = var12 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.isGroupDM;
            var5 = var12 == var5;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var6.isGroupDM;
            var1 = var5.bind(var6)();
case 2:
            var5 = var12 != var1;
            if(!var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var1;
case 5:
            var6 = var11.content;
            var1 = '';
            if(!(var1 !== var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var9 = var1.rk0be3;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var9 = var1.hToFyc;
case 9:
            var1 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 3;
            var6 = var6[var16];
            var6 = var7.bind(var3)(var6);
            var8 = var6.intl;
            var7 = var8.formatToParts;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var4.isForumPost;
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var16];
            var5 = var15.bind(var3)(var5);
            var5 = var5.t;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var5.XCPMEB;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var6 = var5.qa0e/v;
case 14:
            var5 = {};
            var5['username'] = var14;
            var5['usernameOnClick'] = var10;
            var15 = var11.content;
            var5['channelName'] = var15;
            var5 = var7.bind(var8)(var6, var5);
            _fun0001_ip = 15; continue _fun0001;
case 10:
            var6 = {};
            var6['username'] = var14;
            var6['usernameOnClick'] = var10;
            var10 = var11.content;
            var6['channelName'] = var10;
            var10 = {};
            var14 = 'bindOpenGdmCustomizeActionSheet';
            var10['action'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var13.linkColor;
case 16:
            var10['linkColor'] = var12;
            var11 = var11.channel_id;
            var10['messageChannelId'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var7.bind(var8)(var9, var6);
case 15:
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
    var3['createChangeChannelNameSystemMessage'] = var2;
    return var1;
})();