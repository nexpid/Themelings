// app/modules/guild_sidebar/native/ConnectedUserLimit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/ConnectedUserLimit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var2 = var1.video;
            var7 = var1.userCount;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)(var3);
            var11 = var5.limit;
            var5 = var3.userLimit;
            var8 = 0;
            var5 = var5 > var8;
            var10 = -1;
            if(!var5) { _fun0001_ip = 82; continue _fun0001 }
 76:
            var10 = var3.userLimit;
 82:
            if(!var2) { _fun0001_ip = 89; continue _fun0001 }
 85:
            var2 = var11 > var8;
 89:
            var6 = var10;
            var5 = false;
            if(!var2) { _fun0001_ip = 140; continue _fun0001 }
 97:
            var2 = var10 < var8;
            if(var2) { _fun0001_ip = 108; continue _fun0001 }
 104:
            var2 = var11 < var10;
 108:
            var3 = var11;
            if(!(var10 > var8)) { _fun0001_ip = 134; continue _fun0001 }
 115:
            var8 = global;
            var9 = var8.Math;
            var8 = var9.min;
            var3 = var8.bind(var9)(var10, var11);
 134:
            var6 = var3;
            var5 = var2;
 140:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 3;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['users'] = var7;
            var1['total'] = var6;
            var1['videoLimit'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ConnectedUserLimit'] = var2;
    return var1;
})();