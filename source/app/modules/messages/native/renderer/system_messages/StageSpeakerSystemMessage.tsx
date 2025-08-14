// app/modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createStageSpeakerSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var10 = var4.message;
            var17 = var4.roleStyle;
            var11 = var10.author;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 0;
            var1 = var14[var1];
            var3 = undefined;
            var5 = var6.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var10);
            var9 = var1.nick;
            var15 = var1.colorString;
            var12 = var1.colorStrings;
            var8 = var1.guildId;
            var1 = 1;
            var1 = var14[var1];
            var7 = var6.bind(var3)(var1);
            var5 = var7.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var11.id;
            var13 = var5.bind(var7)(var8, var1, var17);
            var1 = {};
            var5 = 2;
            var7 = var14[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var14[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.V4uCm5;
            var5 = {};
            var5['username'] = var9;
            var9 = {};
            var14 = 'bindUserMenu';
            var9['action'] = var14;
            var11 = var11.id;
            var9['userId'] = var11;
            var16 = 'username';
            var14 = null;
            if(!(var16 === var17)) { _fun0001_ip = 195; continue _fun0001 }
 192:
            var14 = var15;
 195:
            var9['linkColor'] = var14;
            var11 = null;
            if(!var13) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var11 = var12;
 208:
            var9['roleColors'] = var11;
            var10 = var10.channel_id;
            var9['messageChannelId'] = var10;
            var10 = true;
            var9['medium'] = var10;
            var5['usernameOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var19 = var2.bind(var3)(var4);
            var20 = var1;
            var2 = copyDataProperties(var20, var19);
            return var1;
        }
    };
    var3['createStageSpeakerSystemMessage'] = var2;
    return var1;
})();