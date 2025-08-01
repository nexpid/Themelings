// app/modules/rpc/helpers/transformUser.tsx
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
    var4 = 'modules/rpc/helpers/transformUser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformUser(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.id;
            var9 = var1.username;
            var7 = var1.discriminator;
            var6 = var1.globalName;
            var2 = var1.avatar;
            var8 = var1.avatarDecoration;
            var5 = var1.bot;
            var4 = var1.flags;
            var3 = var1.premiumType;
            var1 = {};
            var1['id'] = var10;
            var1['username'] = var9;
            var1['discriminator'] = var7;
            var1['global_name'] = var6;
            var1['avatar'] = var2;
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 0;
            var7 = var6[var2];
            var6 = undefined;
            var7 = var9.bind(var6)(var7);
            var6 = var7.parseAvatarDecorationData;
            var6 = var6.bind(var7)(var8);
            var1['avatar_decoration_data'] = var6;
            var1['bot'] = var5;
            var1['flags'] = var4;
            var4 = null;
            var4 = var4 != var3;
            if(!var4) { _fun0001_ip = 140; continue _fun0001 }
 137:
            var2 = var3;
 140:
            var1['premium_type'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();