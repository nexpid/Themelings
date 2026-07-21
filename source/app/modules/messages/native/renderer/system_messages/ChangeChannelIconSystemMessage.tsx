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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChangeChannelIconSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.message;
            var7 = var2.theme;
            var4 = var2.roleStyle;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 1;
            var1 = var5[var6];
            var10 = undefined;
            var1 = var3.bind(var10)(var1);
            var17 = var1.bind(var10)(var7);
            var7 = _closure1_slot0;
            var1 = 2;
            var1 = var5[var1];
            var7 = var7.bind(var10)(var1);
            var1 = var7.getMessageAuthorWithProcessedColor;
            var16 = var1.bind(var7)(var15);
            var1 = 3;
            var1 = var5[var1];
            var3 = var3.bind(var10)(var1);
            var1 = {};
            var1['message'] = var15;
            var1['author'] = var16;
            var1['roleStyle'] = var4;
            var14 = var3.bind(var10)(var1);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var1 = var15.channel_id;
            var5 = var3.bind(var4)(var1);
            var4 = null;
            var3 = var4 == var5;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.isGroupDM;
            var3 = var4 == var3;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var5.isGroupDM;
            var1 = var3.bind(var5)();
case 2:
            var3 = var4 != var1;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1;
case 5:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var5.bind(var10)(var1);
            var5 = var1.bind(var10)(var2);
            var1 = {};
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 5;
            var9 = var2[var8];
            var9 = var7.bind(var10)(var9);
            var13 = var9.intl;
            var12 = var13.formatToParts;
            var2 = var2[var8];
            var2 = var7.bind(var10)(var2);
            var7 = var2.t;
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var7.wypJZ0;
            var2 = {};
            var18 = var16.nick;
            var2['username'] = var18;
            var2['usernameOnClick'] = var14;
            var2 = var12.bind(var13)(var9, var2);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var9 = var7.hfeYXC;
            var7 = {};
            var16 = var16.nick;
            var7['username'] = var16;
            var7['usernameOnClick'] = var14;
            var14 = {};
            var16 = 'bindOpenGdmCustomizeActionSheet';
            var14['action'] = var16;
            var18 = var4 == var17;
            var16 = undefined;
            if(var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = var17.linkColor;
case 10:
            var14['linkColor'] = var16;
            var15 = var15.channel_id;
            var14['messageChannelId'] = var15;
            var15 = true;
            var14['medium'] = var15;
            var7['onEditGroup'] = var14;
            var2 = var12.bind(var13)(var9, var7);
case 9:
            var1['content'] = var2;
            var21 = var1;
            var20 = var5;
            var2 = copyDataProperties(var21, var20);
            var2 = undefined;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = {};
            var7 = var5.accessibilityActions;
            if(!(var4 == var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = new Array(0);
case 14:
            var4 = new Array(1);
            var19 = 0;
            var21 = var4;
            var20 = var7;
            var5 = arraySpread(var21, var20, var19);
            var7 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var8];
            var12 = var9.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.t;
            var8 = var8["5Q9+/L"];
            var8 = var12.bind(var13)(var8);
            var7['label'] = var8;
            var8 = 6;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.MessageAccessibilityAction;
            var8 = var8.EDIT_GDM;
            var7['name'] = var8;
            var4[4] = var7;
            var5 = var5 + var6;
            var3['accessibilityActions'] = var4;
            var2 = var3;
case 12:
            var21 = var1;
            var20 = var2;
            var2 = copyDataProperties(var21, var20);
            return var1;
        }
    };
    var3['createChangeChannelIconSystemMessage'] = var2;
    return var1;
})();