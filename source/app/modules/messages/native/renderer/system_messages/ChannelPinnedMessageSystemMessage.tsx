// app/modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx
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
    var4 = 'modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChannelPinnedMessageSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var10 = var4.message;
            var14 = var4.roleStyle;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 0;
            var1 = var11[var1];
            var3 = undefined;
            var5 = var6.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var10);
            var9 = var1.nick;
            var13 = var1.colorString;
            var15 = var1.colorStrings;
            var8 = var1.guildId;
            var1 = 1;
            var1 = var11[var1];
            var7 = var6.bind(var3)(var1);
            var5 = var7.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var10.author;
            var1 = var1.id;
            var16 = var5.bind(var7)(var8, var1, var14);
            var1 = {};
            var5 = 2;
            var7 = var11[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var11[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.6TrHq6;
            var5 = {};
            var5['username'] = var9;
            var9 = {};
            var11 = 'bindUserMenu';
            var9['action'] = var11;
            var11 = var10.author;
            var11 = var11.id;
            var9['userId'] = var11;
            var9['colorString'] = var13;
            var12 = null;
            var17 = 'username';
            var11 = null;
            if(!(var17 === var14)) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var11 = var13;
 208:
            var9['linkColor'] = var11;
            var9['roleColor'] = var13;
            var11 = null;
            if(!var16) { _fun0001_ip = 226; continue _fun0001 }
 223:
            var11 = var15;
 226:
            var9['roleColors'] = var11;
            var11 = 'dot';
            var11 = var11 === var14;
            if(!var11) { _fun0001_ip = 246; continue _fun0001 }
 242:
            var11 = var12 != var13;
 246:
            var9['shouldShowRoleDot'] = var11;
            var11 = var10.channel_id;
            var9['messageChannelId'] = var11;
            var11 = true;
            var9['medium'] = var11;
            var5['usernameOnClick'] = var9;
            var9 = {'action': 'bindOpenPins', 'messageChannelId': null, 'medium': true};
            var10 = var10.channel_id;
            var9['messageChannelId'] = var10;
            var5['pinsOnClick'] = var9;
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
    var3['createChannelPinnedMessageSystemMessage'] = var2;
    return var1;
})();