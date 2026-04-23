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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChangeChannelNameSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var13 = var4.message;
            var8 = var4.theme;
            var6 = var4.roleStyle;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var15 = var1.bind(var3)(var8);
            var8 = _closure1_slot0;
            var1 = 2;
            var1 = var7[var1];
            var8 = var8.bind(var3)(var1);
            var1 = var8.getMessageAuthorWithProcessedColor;
            var16 = var1.bind(var8)(var13);
            var1 = 3;
            var1 = var7[var1];
            var5 = var5.bind(var3)(var1);
            var1 = {};
            var1['message'] = var13;
            var1['author'] = var16;
            var1['roleStyle'] = var6;
            var12 = var5.bind(var3)(var1);
            var6 = _closure1_slot3;
            var5 = var6.getChannel;
            var1 = var13.channel_id;
            var6 = var5.bind(var6)(var1);
            var14 = null;
            var5 = var14 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.isGroupDM;
            var5 = var14 == var5;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var6.isGroupDM;
            var1 = var5.bind(var6)();
case 2:
            var6 = var14 != var1;
            if(!var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var1;
case 5:
            var5 = var13.content;
            var1 = '';
            if(!(var1 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.t;
            var11 = var1.rk0be9;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.t;
            var11 = var1.hToFyf;
case 9:
            var1 = {};
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 4;
            var5 = var5[var7];
            var5 = var8.bind(var3)(var5);
            var10 = var5.intl;
            var9 = var10.formatToParts;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var4.isForumPost;
            var17 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var17.bind(var3)(var5);
            var5 = var5.t;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var5.XCPMEG;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var8 = var5.qa0e/n;
case 14:
            var5 = {};
            var17 = var16.nick;
            var5['username'] = var17;
            var5['usernameOnClick'] = var12;
            var17 = var13.content;
            var5['channelName'] = var17;
            var5 = var9.bind(var10)(var8, var5);
            _fun0001_ip = 15; continue _fun0001;
case 10:
            var8 = {};
            var16 = var16.nick;
            var8['username'] = var16;
            var8['usernameOnClick'] = var12;
            var12 = var13.content;
            var8['channelName'] = var12;
            var12 = {};
            var16 = 'bindOpenGdmCustomizeActionSheet';
            var12['action'] = var16;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var15.linkColor;
case 16:
            var12['linkColor'] = var14;
            var13 = var13.channel_id;
            var12['messageChannelId'] = var13;
            var8['onEditGroup'] = var12;
            var5 = var9.bind(var10)(var11, var8);
case 15:
            var1['content'] = var5;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = {};
            var8 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var7];
            var11 = var9.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var10[var7];
            var7 = var9.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7["5Q9+/L"];
            var7 = var11.bind(var12)(var7);
            var8['label'] = var7;
            var7 = 5;
            var7 = var10[var7];
            var7 = var9.bind(var3)(var7);
            var7 = var7.MessageAccessibilityAction;
            var7 = var7.EDIT_GDM;
            var8['name'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var6['accessibilityActions'] = var7;
            var5 = var6;
case 18:
            var19 = var1;
            var18 = var5;
            var5 = copyDataProperties(var19, var18);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var18 = var2.bind(var3)(var4);
            var19 = var1;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createChangeChannelNameSystemMessage'] = var2;
    return var1;
})();