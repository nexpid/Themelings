// app/modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx
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
    var4 = 'modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelDetailsFromRoute(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = arguments[1];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var3 = false;
 14:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 0;
            var2 = var2[var7];
            var6 = var6.bind(var4)(var2);
            var2 = var6.coerceChannelRoute;
            var2 = var2.bind(var6)(var5);
            var6 = null;
            if(!(var6 == var2)) { _fun0001_ip = 173; continue _fun0001 }
 53:
            if(var3) { _fun0001_ip = 70; continue _fun0001 }
 56:
            var3 = new Array(2);
            var3[0] = var4;
            var3[1] = var4;
            return var3;
 70:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var3 = var3.bind(var4)(var1);
            var1 = var3.coerceGuildsRoute;
            var5 = var1.bind(var3)(var5);
            if(!(var6 == var5)) { _fun0001_ip = 116; continue _fun0001 }
 102:
            var1 = new Array(2);
            var1[0] = var4;
            var1[1] = var4;
            _fun0001_ip = 171; continue _fun0001;
 116:
            var3 = var5.params;
            var8 = var6 == var3;
            var7 = undefined;
            if(var8) { _fun0001_ip = 136; continue _fun0001 }
 131:
            var7 = var3.guildId;
 136:
            var3 = new Array(2);
            var3[0] = var7;
            var5 = var5.params;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 164; continue _fun0001 }
 159:
            var4 = var5.channelId;
 164:
            var3[1] = var4;
            var1 = var3;
 171:
            return var1;
 173:
            var1 = var2.params;
            var3 = var1.guildId;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.params;
            var2 = var2.channelId;
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();