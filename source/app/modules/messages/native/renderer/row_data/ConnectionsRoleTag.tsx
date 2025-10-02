// app/modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createConnectionsRoleTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = var6.colorString;
            var1 = null;
            if(!(var1 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot4;
case 2:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 2;
            var1 = var10[var8];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.WHITE_500;
            var7 = _closure1_slot0;
            var1 = 3;
            var9 = var10[var1];
            var11 = var7.bind(var4)(var9);
            var9 = var11.hex2int;
            var9 = var9.bind(var11)(var5);
            var1 = var10[var1];
            var7 = var7.bind(var4)(var1);
            var1 = var7.getDarkness;
            var7 = var1.bind(var7)(var9);
            var1 = 0.3;
            if(!(var7 < var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var7.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.PRIMARY_630;
case 4:
            var1 = {};
            var7 = var6.id;
            var1['id'] = var7;
            var6 = var6.name;
            var1['name'] = var6;
            var2 = _closure1_slot3;
            var5 = var2.bind(var4)(var5);
            var1['backgroundColor'] = var5;
            var2 = var2.bind(var4)(var3);
            var1['iconColor'] = var2;
            return var1;
        }
    };
    var3['createConnectionsRoleTag'] = var2;
    return var1;
})();