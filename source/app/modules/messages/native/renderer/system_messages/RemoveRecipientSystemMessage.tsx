// app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createRemoveRecipientSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = var4.message;
            var11 = var4.roleStyle;
            var6 = var1.author;
            var3 = var1.mentions;
            var2 = 0;
            var12 = var3[var2];
            var7 = _closure1_slot4;
            var5 = var7.getChannel;
            var3 = var1.channel_id;
            var13 = var5.bind(var7)(var3);
            var10 = null;
            var5 = var10 != var13;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot3;
            var7 = var8.has;
            var3 = var13.type;
            var5 = var7.bind(var8)(var3);
case 2:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = 3;
            var7 = var14[var17];
            var3 = undefined;
            var8 = var9.bind(var3)(var7);
            var7 = var8.getMessageAuthorWithProcessedColor;
            var8 = var7.bind(var8)(var1);
            var7 = var8.nick;
            var18 = var8.colorString;
            var19 = var8.colorStrings;
            var15 = var8.guildId;
            var8 = 4;
            var8 = var14[var8];
            var14 = var9.bind(var3)(var8);
            var9 = var14.isNativeMessageEligibleForEnhancedRoleColors;
            var8 = var6.id;
            var14 = var9.bind(var14)(var15, var8, var11);
            var9 = {};
            var9['username'] = var7;
            var8 = {};
            var16 = 'bindUserMenu';
            var8['action'] = var16;
            var7 = var6.id;
            var8['userId'] = var7;
            var8['colorString'] = var18;
            var7 = 'username';
            var15 = var7 === var11;
            var7 = null;
            if(!var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var18;
case 4:
            var8['linkColor'] = var7;
            var8['roleColor'] = var18;
            var7 = null;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var19;
case 6:
            var8['roleColors'] = var7;
            var7 = 'dot';
            var7 = var7 === var11;
            var11 = var7;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var10 != var18;
case 8:
            var8['shouldShowRoleDot'] = var11;
            var11 = var1.channel_id;
            var8['messageChannelId'] = var11;
            var11 = true;
            var8['medium'] = var11;
            var9['usernameOnClick'] = var8;
            var6 = var6.id;
            if(!(var6 !== var12)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot5;
            var6 = var8.getUser;
            var11 = var6.bind(var8)(var12);
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var17];
            var8 = var8.bind(var3)(var6);
            var6 = var8.getUserAuthorWithProcessedColor;
            var6 = var6.bind(var8)(var11, var13);
            var17 = var6.nick;
            var8 = var6.colorString;
            var13 = var6.colorStrings;
            var11 = {};
            var23 = var11;
            var22 = var9;
            var6 = copyDataProperties(var23, var22);
            var6 = 'otherUsername';
            var11[var6] = var17;
            var6 = {};
            var6['action'] = var16;
            var6['userId'] = var12;
            var6['otherColorString'] = var8;
            var12 = null;
            if(!var15) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = var8;
case 12:
            var6['linkColor'] = var12;
            var6['roleColor'] = var8;
            var12 = null;
            if(!var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var13;
case 14:
            var6['roleColors'] = var12;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var10 != var8;
case 16:
            var6['shouldShowRoleDot'] = var7;
            var1 = var1.channel_id;
            var6['messageChannelId'] = var1;
            var1 = 'otherUsernameOnClick';
            var11[var1] = var6;
            var1 = {};
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 5;
            var8 = var12[var6];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.formatToParts;
            var6 = var12[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.t;
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var7.QtZ0RE;
            var6 = var8.bind(var10)(var6, var11);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var7 = var7.KBrM5u;
            var6 = var8.bind(var10)(var7, var11);
case 20:
            var1['content'] = var6;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var22 = var6.bind(var3)(var4);
            var23 = var1;
            var6 = copyDataProperties(var23, var22);
            return var1;
case 10:
            var1 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 5;
            var7 = var11[var6];
            var7 = var10.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var6 = var11[var6];
            var6 = var10.bind(var3)(var6);
            var6 = var6.t;
            if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var5 = var6.Qn5+LS;
            var5 = var7.bind(var8)(var5, var9);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var6 = var6.uHmblp;
            var5 = var7.bind(var8)(var6, var9);
case 23:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var22 = var2.bind(var3)(var4);
            var23 = var1;
            var2 = copyDataProperties(var23, var22);
            return var1;
        }
    };
    var3['createRemoveRecipientSystemMessage'] = var2;
    return var1;
})();