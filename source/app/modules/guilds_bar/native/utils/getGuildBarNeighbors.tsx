// app/modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function toNeighbor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var2['node'] = var3;
            var4 = var3.type;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.GuildsNodeType;
            var3 = var3.FOLDER;
            var3 = var4 === var3;
            var2['isFolder'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildBarNeighbors(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot2;
            var1 = var2.getGuildsTree;
            var7 = var1.bind(var2)();
            var2 = var7.getNode;
            var1 = arg1;
            var6 = var2.bind(var7)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var6.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var11 = 1;
            var2 = var2[var11];
            var5 = undefined;
            var2 = var8.bind(var5)(var2);
            var2 = var2.GuildsNodeType;
            var2 = var2.GUILD;
            if(!(var4 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var2 = var6.parentId;
            if(!(var1 == var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var8 = var7.root;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var4 = var7.getNode;
            var2 = var6.parentId;
            var8 = var4.bind(var7)(var2);
case 9:
            if(!(var1 != var8)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var8.children;
            var2 = var4.indexOf;
            var2 = var2.bind(var4)(var6);
            var4 = 0;
            if(!(!(var2 < var4))) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var8.children;
            var4 = var2 - var11;
            var6 = var6[var4];
            var4 = var8.children;
            var2 = var2 + var11;
            var4 = var4[var2];
            var2 = {};
            var10 = var8.type;
            var9 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var11];
            var7 = var9.bind(var5)(var7);
            var7 = var7.GuildsNodeType;
            var9 = var7.FOLDER;
            var7 = null;
            if(!(var10 === var9)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = var8;
case 14:
            var2['containingFolder'] = var7;
            var3 = _closure1_slot3;
            var6 = var3.bind(var5)(var6);
            var2['above'] = var6;
            var3 = var3.bind(var5)(var4);
            var2['below'] = var3;
            return var2;
case 12:
            return var1;
case 10:
            return var1;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();