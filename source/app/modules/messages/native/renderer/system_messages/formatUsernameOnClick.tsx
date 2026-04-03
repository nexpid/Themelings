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
            var3 = arg1;
            var10 = var3.userId;
            var2 = var3.message;
            var1 = var3.author;
            var6 = var3.roleStyle;
            var5 = var1.colorString;
            var7 = var1.colorStrings;
            var9 = var1.guildId;
            var4 = null;
            if(!(var4 == var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.author;
            var10 = var1.id;
case 2:
            var1 = {};
            var3 = 'bindUserMenu';
            var1['action'] = var3;
            var1['userId'] = var10;
            var1['colorString'] = var5;
            var8 = 'username';
            var3 = null;
            if(!(var8 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5;
case 4:
            var1['linkColor'] = var3;
            var1['roleColor'] = var5;
            var11 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 0;
            var8 = var8[var3];
            var3 = undefined;
            var8 = var11.bind(var3)(var8);
            var3 = var8.isNativeMessageEligibleForEnhancedRoleColors;
            var8 = var3.bind(var8)(var9, var10, var6);
            var3 = null;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7;
case 6:
            var1['roleColors'] = var3;
            var3 = 'dot';
            var3 = var3 === var6;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4 != var5;
case 8:
            var1['shouldShowRoleDot'] = var3;
            var2 = var2.channel_id;
            var1['messageChannelId'] = var2;
            var2 = true;
            var1['medium'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();