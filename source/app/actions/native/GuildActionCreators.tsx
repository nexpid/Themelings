// app/actions/native/GuildActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var4 = function batchChannelUpdate(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var2 = var5.length;
            var1 = 0;
            if(!(!(var2 <= var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = function onEnd() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var2 = var8.dispatch;
            var1 = {};
            var9 = 'GUILD_SETTINGS_SUBMIT';
            var1['type'] = var9;
            var1 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var1 = 2;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var4 = var1.HTTP;
            var2 = var4.patch;
            var1 = {};
            var8 = _closure1_slot3;
            var7 = var8.GUILD_CHANNELS;
            var6 = arg1;
            var6 = var7.bind(var8)(var6);
            var1['url'] = var6;
            var1['body'] = var5;
            var5 = true;
            var1['oldFormErrors'] = var5;
            var1['rejectWithError'] = var5;
            var2 = var2.bind(var4)(var1);
            var1 = var2.then;
            var1 = var1.bind(var2)(var3, var3);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var2 = function batchRoleUpdate(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg2;
            var2 = var5.length;
            var1 = 0;
            if(!(!(var2 <= var1))) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = function onEnd() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var2 = var8.dispatch;
            var1 = {};
            var9 = 'GUILD_SETTINGS_SUBMIT';
            var1['type'] = var9;
            var1 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var1 = 2;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var4 = var1.HTTP;
            var2 = var4.patch;
            var1 = {};
            var8 = _closure1_slot3;
            var7 = var8.GUILD_ROLES;
            var6 = arg1;
            var6 = var7.bind(var8)(var6);
            var1['url'] = var6;
            var1['body'] = var5;
            var5 = true;
            var1['oldFormErrors'] = var5;
            var1['rejectWithError'] = var5;
            var2 = var2.bind(var4)(var1);
            var1 = var2.then;
            var1 = var1.bind(var2)(var3, var3);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot3 = var5;
    var5 = {};
    var5['batchChannelUpdate'] = var4;
    var5['batchRoleUpdate'] = var2;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/native/GuildActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['batchChannelUpdate'] = var4;
    var3['batchRoleUpdate'] = var2;
    return var1;
})();