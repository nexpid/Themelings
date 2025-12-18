// app/modules/collectibles/records/CollectiblesItemRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesItemRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var8 = 3;
                    var3 = var3[var8];
                    var7 = undefined;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.AVATAR_DECORATION;
                    if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var1.push;
                    var6 = _closure1_slot2;
                    var3 = var6.fromServer;
                    var3 = var3.bind(var6)(var5);
                    var3 = var4.bind(var1)(var3);
case 4:
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.PROFILE_EFFECT;
                    if(!(var4 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var1.push;
                    var6 = _closure1_slot4;
                    var3 = var6.fromServer;
                    var3 = var3.bind(var6)(var5);
                    var3 = var4.bind(var1)(var3);
case 6:
                    var4 = var5.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.NAMEPLATE;
                    if(!(var4 === var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var1.push;
                    var4 = _closure1_slot3;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var5);
                    var2 = var3.bind(var1)(var2);
case 8:
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var1 = new Array(0);
case 10:
            return var1;
        }
    };
    var3['createCollectiblesItemsFromServerResponse'] = var2;
    return var1;
})();