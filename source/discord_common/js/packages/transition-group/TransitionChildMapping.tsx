// discord_common/js/packages/transition-group/TransitionChildMapping.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/transition-group/TransitionChildMapping.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getChildMapping(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = var3.Children;
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var4 = var4.bind(var5)(var6, var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.key;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 3:
                    var1 = _closure2_slot0;
                    var1[var2] = var3;
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['getChildMapping'] = var4;
    var2 = function mergeChildMappings() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arguments[0];
            var2 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0003_ip = 6; continue _fun0003 }
case 3:
            var1 = {};
case 6:
            var _closure2_slot0 = var1;
            if(!(var2 === var6)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var2 = {};
case 7:
            var _closure2_slot1 = var2;
            var5 = function getValueForKey(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot1;
                    var1 = var4.hasOwnProperty;
                    var1 = var1.bind(var4)(var3);
                    if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 8:
                    var1 = _closure2_slot0;
                    var1 = var1[var3];
                    _fun0004_ip = 10; continue _fun0004;
case 9:
                    var2 = _closure2_slot1;
                    var1 = var2[var3];
case 10:
                    return var1;
                }
            };
            var12 = {};
            var3 = new Array(0);
            var10 = var1;
            var4 = 0;
            var1 = var3;
            var3 = var1;
            for(var7 in var10)
case 11:
            {
                var14 = var1;
                var3 = var14;
case 12:
                var13 = var7;
                var15 = var2.hasOwnProperty;
                var15 = var15.bind(var2)(var13);
                if(var15) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var15 = var14.push;
                var15 = var15.bind(var14)(var13);
                var1 = var14;
                _fun0003_ip = 11; continue _fun0003;
case 13:
                var15 = var14.length;
                var1 = var14;
                if(!(var15 > var4)) { _fun0003_ip = 11; continue _fun0003 }
case 15:
                var12[var13] = var14;
                var1 = new Array(0);
                _fun0003_ip = 11; continue _fun0003;
            }
case 16:
            var1 = {};
            var10 = var2;
            var2 = undefined;
            for(var7 in var10)
case 17:
            {
case 18:
                var14 = var7;
                var13 = var12.hasOwnProperty;
                var13 = var13.bind(var12)(var14);
                if(!var13) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var13 = var12[var14];
                var13 = var13.length;
                var13 = var4 < var13;
                var15 = 0;
                var2 = 0;
                if(!var13) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                var13 = var12[var14];
                var13 = var13[var15];
                var16 = var12[var14];
                var16 = var16[var15];
                var13 = var5.bind(var6)(var13);
                var1[var16] = var13;
                var15 = var15 + 1;
                var13 = var12[var14];
                var13 = var13.length;
                var2 = var15;
                if(var2 < var13) { _fun0003_ip = 21; continue _fun0003 }
case 19:
                var13 = var5.bind(var6)(var14);
                var1[var14] = var13;
                _fun0003_ip = 17; continue _fun0003;
            }
case 22:
            var2 = var3.length;
            var2 = var4 < var2;
            var4 = 0;
            if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = var3[var4];
            var2 = var3[var4];
            var2 = var5.bind(var6)(var2);
            var1[var7] = var2;
            var4 = var4 + 1;
            var2 = var3.length;
            if(var4 < var2) { _fun0003_ip = 24; continue _fun0003 }
case 23:
            return var1;
        }
    };
    var3['mergeChildMappings'] = var2;
    return var1;
})();