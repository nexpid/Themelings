// app/modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx
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
    var4 = var4.StreamTypes;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildStreamSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var9 = var4.message;
            var15 = var4.roleStyle;
            var7 = var9.author;
            var1 = var9.messageReference;
            var14 = null;
            if(!(var14 == var1)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var1 = {};
 34:
            var8 = var1.channel_id;
            var6 = var1.guild_id;
            var5 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 1;
            var1 = var17[var1];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var11 = var1.bind(var3)(var9);
            var5 = var14 != var11;
            var12 = _closure1_slot0;
            var1 = 2;
            var1 = var17[var1];
            var10 = var12.bind(var3)(var1);
            var1 = var10.getMessageAuthorWithProcessedColor;
            var10 = var1.bind(var10)(var9);
            var1 = var10.nick;
            var13 = var10.colorString;
            var16 = var10.colorStrings;
            var18 = var10.guildId;
            var10 = 3;
            var10 = var17[var10];
            var17 = var12.bind(var3)(var10);
            var12 = var17.isNativeMessageEligibleForEnhancedRoleColors;
            var10 = var7.id;
            var17 = var12.bind(var17)(var18, var10, var15);
            var10 = {};
            var10['username'] = var1;
            var1 = {};
            var12 = 'bindUserMenu';
            var1['action'] = var12;
            var12 = var7.id;
            var1['userId'] = var12;
            var1['colorString'] = var13;
            var18 = 'username';
            var12 = null;
            if(!(var18 === var15)) { _fun0001_ip = 203; continue _fun0001 }
 200:
            var12 = var13;
 203:
            var1['linkColor'] = var12;
            var1['roleColor'] = var13;
            var12 = null;
            if(!var17) { _fun0001_ip = 221; continue _fun0001 }
 218:
            var12 = var16;
 221:
            var1['roleColors'] = var12;
            var12 = 'dot';
            var12 = var12 === var15;
            if(!var12) { _fun0001_ip = 241; continue _fun0001 }
 237:
            var12 = var14 != var13;
 241:
            var1['shouldShowRoleDot'] = var12;
            var9 = var9.channel_id;
            var1['messageChannelId'] = var9;
            var9 = true;
            var1['medium'] = var9;
            var10['usernameOnClick'] = var1;
            var13 = {};
            var1 = 'bindJoinStream';
            var13['action'] = var1;
            var1 = {};
            var9 = _closure1_slot3;
            var9 = var9.GUILD;
            var1['streamType'] = var9;
            var1['channelId'] = var8;
            var7 = var7.id;
            var1['ownerId'] = var7;
            var1['guildId'] = var6;
            var13['stream'] = var1;
            var1 = {};
            var1['ended'] = var5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 4;
            var8 = var12[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var12[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            if(var5) { _fun0001_ip = 414; continue _fun0001 }
 375:
            var7 = var6.dMmbGh;
            var5 = {};
            var21 = var5;
            var20 = var10;
            var12 = copyDataProperties(var21, var20);
            var12 = 'onJoinStream';
            var5[var12] = var13;
            var5 = var8.bind(var9)(var7, var5);
            _fun0001_ip = 449; continue _fun0001;
 414:
            var7 = var6.FP7rUF;
            var6 = {};
            var21 = var6;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var10 = 'duration';
            var6[var10] = var11;
            var5 = var8.bind(var9)(var7, var6);
 449:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var20 = var2.bind(var3)(var4);
            var21 = var1;
            var2 = copyDataProperties(var21, var20);
            return var1;
        }
    };
    var3['createGuildStreamSystemMessage'] = var2;
    return var1;
})();