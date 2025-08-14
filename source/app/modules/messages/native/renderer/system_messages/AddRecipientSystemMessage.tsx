// app/modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
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
    var4 = 'modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createAddRecipientSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var7 = var4.message;
            var8 = var4.roleStyle;
            var6 = var7.author;
            var2 = var7.mentions;
            var1 = 0;
            var12 = var2[var1];
            var3 = _closure1_slot5;
            var1 = var3.getUser;
            var13 = var1.bind(var3)(var12);
            var5 = _closure1_slot4;
            var3 = var5.getChannel;
            var1 = var7.channel_id;
            var10 = var3.bind(var5)(var1);
            var11 = null;
            var5 = var11 != var10;
            if(!var5) { _fun0001_ip = 97; continue _fun0001 }
 78:
            var9 = _closure1_slot3;
            var3 = var9.has;
            var1 = var10.type;
            var5 = var3.bind(var9)(var1);
 97:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 3;
            var9 = var16[var1];
            var3 = undefined;
            var15 = var14.bind(var3)(var9);
            var9 = var15.getMessageAuthorWithProcessedColor;
            var9 = var9.bind(var15)(var7);
            var15 = var9.nick;
            var18 = var9.colorString;
            var19 = var9.colorStrings;
            var17 = var9.guildId;
            var1 = var16[var1];
            var9 = var14.bind(var3)(var1);
            var1 = var9.getUserAuthorWithProcessedColor;
            var9 = var1.bind(var9)(var13, var10);
            var1 = var9.nick;
            var10 = var9.colorString;
            var13 = var9.colorStrings;
            var9 = 4;
            var9 = var16[var9];
            var16 = var14.bind(var3)(var9);
            var14 = var16.isNativeMessageEligibleForEnhancedRoleColors;
            var9 = var6.id;
            var14 = var14.bind(var16)(var17, var9, var8);
            var9 = {};
            var9['username'] = var15;
            var17 = {};
            var16 = 'bindUserMenu';
            var17['action'] = var16;
            var6 = var6.id;
            var17['userId'] = var6;
            var17['colorString'] = var18;
            var6 = 'username';
            var15 = var6 === var8;
            var6 = null;
            if(!var15) { _fun0001_ip = 270; continue _fun0001 }
 267:
            var6 = var18;
 270:
            var17['linkColor'] = var6;
            var17['roleColor'] = var18;
            var6 = null;
            if(!var14) { _fun0001_ip = 288; continue _fun0001 }
 285:
            var6 = var19;
 288:
            var17['roleColors'] = var6;
            var6 = 'dot';
            var8 = var6 === var8;
            var6 = var8;
            if(!var8) { _fun0001_ip = 311; continue _fun0001 }
 307:
            var6 = var11 != var18;
 311:
            var17['shouldShowRoleDot'] = var6;
            var6 = var7.channel_id;
            var17['messageChannelId'] = var6;
            var6 = true;
            var17['medium'] = var6;
            var9['usernameOnClick'] = var17;
            var9['otherUsername'] = var1;
            var1 = {};
            var1['action'] = var16;
            var1['userId'] = var12;
            var1['colorString'] = var10;
            var12 = null;
            if(!var15) { _fun0001_ip = 366; continue _fun0001 }
 363:
            var12 = var10;
 366:
            var1['linkColor'] = var12;
            var1['roleColor'] = var10;
            var12 = null;
            if(!var14) { _fun0001_ip = 384; continue _fun0001 }
 381:
            var12 = var13;
 384:
            var1['roleColors'] = var12;
            if(!var8) { _fun0001_ip = 396; continue _fun0001 }
 392:
            var8 = var11 != var10;
 396:
            var1['shouldShowRoleDot'] = var8;
            var7 = var7.channel_id;
            var1['messageChannelId'] = var7;
            var1['medium'] = var6;
            var9['otherUsernameOnClick'] = var1;
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
            if(var5) { _fun0001_ip = 485; continue _fun0001 }
 471:
            var5 = var6.7/Xl0d;
            var5 = var7.bind(var8)(var5, var9);
            _fun0001_ip = 499; continue _fun0001;
 485:
            var6 = var6.Vej1Nz;
            var5 = var7.bind(var8)(var6, var9);
 499:
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
    var3['createAddRecipientSystemMessage'] = var2;
    return var1;
})();