// app/modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function formatUsernameOnClick(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.userId;
            var3 = var2.message;
            var1 = var2.author;
            var7 = var2.roleStyle;
            var2 = var2.messageChannelId;
            var6 = var1.colorString;
            var8 = var1.colorStrings;
            var10 = var1.guildId;
            var4 = null;
            if(!(var4 == var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.author;
            var11 = var1.id;
case 2:
            var1 = {};
            var5 = 'bindUserMenu';
            var1['action'] = var5;
            var1['userId'] = var11;
            var9 = 'username';
            var5 = null;
            if(!(var9 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6;
case 4:
            var1['linkColor'] = var5;
            var1['roleColor'] = var6;
            var12 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 0;
            var9 = var9[var5];
            var5 = undefined;
            var9 = var12.bind(var5)(var9);
            var5 = var9.isNativeMessageEligibleForEnhancedRoleColors;
            var9 = var5.bind(var9)(var10, var11);
            var5 = null;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var8;
case 6:
            var1['roleColors'] = var5;
            var5 = 'dot';
            var5 = var5 === var7;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var4 != var6;
case 8:
            var1['shouldShowRoleDot'] = var5;
            if(!(var4 == var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3.channel_id;
case 10:
            var1['messageChannelId'] = var2;
            var2 = true;
            var1['medium'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();