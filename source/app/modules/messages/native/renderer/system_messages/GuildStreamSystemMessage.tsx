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
case 0:
            var4 = arg1;
            var14 = var4.message;
            var12 = var4.roleStyle;
            var7 = var14.author;
            var2 = var14.messageReference;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var8 = var2.channel_id;
            var6 = var2.guild_id;
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 1;
            var5 = var15[var3];
            var3 = undefined;
            var5 = var9.bind(var3)(var5);
            var11 = var5.bind(var3)(var14);
            var5 = var1 != var11;
            var10 = _closure1_slot0;
            var1 = 2;
            var1 = var15[var1];
            var10 = var10.bind(var3)(var1);
            var1 = var10.getMessageAuthorWithProcessedColor;
            var13 = var1.bind(var10)(var14);
            var10 = {};
            var1 = var13.nick;
            var10['username'] = var1;
            var1 = 3;
            var1 = var15[var1];
            var9 = var9.bind(var3)(var1);
            var1 = {};
            var1['message'] = var14;
            var1['author'] = var13;
            var1['roleStyle'] = var12;
            var1 = var9.bind(var3)(var1);
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
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6.dMmbGk;
            var5 = {};
            var17 = var5;
            var16 = var10;
            var12 = copyDataProperties(var17, var16);
            var12 = 'onJoinStream';
            var5[11] = var13;
            var5 = var8.bind(var9)(var7, var5);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = var6.FP7rUI;
            var6 = {};
            var17 = var6;
            var16 = var10;
            var10 = copyDataProperties(var17, var16);
            var10 = 'duration';
            var6[9] = var11;
            var5 = var8.bind(var9)(var7, var6);
case 6:
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
    var3['createGuildStreamSystemMessage'] = var2;
    return var1;
})();