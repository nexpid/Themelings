// app/modules/guild_automod/DataUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var2 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var2;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var2 = var2[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var2);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/guild_automod/DataUtils.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function _transformMetadataToCamelCase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = null;
            var1 = var5;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var5 = var3.bind(var4)(var5);
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var4 = arg2;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 0;
                    var2 = var6[var2];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.camelCase;
                    var3 = var2.bind(var3)(var4);
                    var6 = _closure2_slot0;
                    var6 = var6[var4];
                    var8 = 'object';
                    var6 = typeof var6;
                    if(!(var8 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = global;
                    var9 = var6.Array;
                    var8 = var9.isArray;
                    var6 = _closure2_slot0;
                    var6 = var6[var4];
                    var6 = var8.bind(var9)(var6);
                    if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var6 = _closure1_slot2;
                    var5 = _closure2_slot0;
                    var5 = var5[var4];
                    var5 = var6.bind(var7)(var5);
                    var1[var3] = var5;
                    _fun0002_ip = 7; continue _fun0002;
case 4:
                    var2 = _closure2_slot0;
                    var2 = var2[var4];
                    var1[var3] = var2;
case 7:
                    return var1;
                }
            };
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var2;
    var3['_transformMetadataToCamelCase'] = var2;
    var2 = function _transformMetadataToSnakeCase(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = null;
            var1 = var5;
            if(!(var3 != var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var5 = var3.bind(var4)(var5);
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = arg2;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 0;
                    var2 = var6[var2];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.snakeCase;
                    var3 = var2.bind(var3)(var4);
                    var6 = _closure2_slot0;
                    var6 = var6[var4];
                    var8 = 'object';
                    var6 = typeof var6;
                    if(!(var8 === var6)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var6 = global;
                    var9 = var6.Array;
                    var8 = var9.isArray;
                    var6 = _closure2_slot0;
                    var6 = var6[var4];
                    var6 = var8.bind(var9)(var6);
                    if(var6) { _fun0004_ip = 4; continue _fun0004 }
case 6:
                    var6 = _closure1_slot3;
                    var5 = _closure2_slot0;
                    var5 = var5[var4];
                    var5 = var6.bind(var7)(var5);
                    var1[var3] = var5;
                    _fun0004_ip = 7; continue _fun0004;
case 4:
                    var5 = _closure2_slot0;
                    var5 = var5[var4];
                    var1[var3] = var5;
case 7:
                    var2 = _closure2_slot0;
                    var2 = var2[var4];
                    var1[var3] = var2;
                    return var1;
                }
            };
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var3['_transformMetadataToSnakeCase'] = var2;
    return var1;
})();