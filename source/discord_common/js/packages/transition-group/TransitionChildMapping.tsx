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
 0:
            var6 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            if(!var6) { _fun0001_ip = 68; continue _fun0001 }
 14:
            var3 = _closure1_slot0;
            var5 = var3.Children;
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var4 = var4.bind(var5)(var6, var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 68; continue _fun0001 }
 51:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.key;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 25; continue _fun0002 }
 14:
                    var1 = _closure2_slot0;
                    var1[var2] = var3;
 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 68:
            return var1;
        }
    };
    var3['getChildMapping'] = var4;
    var2 = function mergeChildMappings() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arguments[0];
            var2 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0003_ip = 16; continue _fun0003 }
 14:
            var1 = {};
 16:
            var _closure2_slot0 = var1;
            if(!(var2 === var6)) { _fun0003_ip = 26; continue _fun0003 }
 24:
            var2 = {};
 26:
            var _closure2_slot1 = var2;
            var5 = function getValueForKey(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot1;
                    var1 = var4.hasOwnProperty;
                    var1 = var1.bind(var4)(var3);
                    if(var1) { _fun0004_ip = 34; continue _fun0004 }
 24:
                    var1 = _closure2_slot0;
                    var1 = var1[var3];
                    _fun0004_ip = 42; continue _fun0004;
 34:
                    var2 = _closure2_slot1;
                    var1 = var2[var3];
 42:
                    return var1;
                }
            };
            var12 = {};
            var4 = new Array(0);
            var9 = var1;
            var1 = var4;
            var4 = var1;
            for(var3 in var9)
 60:
            {
                var13 = var1;
                var4 = var13;
 75:
                var11 = var3;
                var14 = var2.hasOwnProperty;
                var14 = var14.bind(var2)(var11);
                if(var14) { _fun0003_ip = 107; continue _fun0003 }
 92:
                var14 = var13.push;
                var14 = var14.bind(var13)(var11);
                var1 = var13;
                _fun0003_ip = 60; continue _fun0003;
 107:
                var14 = var13.length;
                var1 = var13;
                if(!var14) { _fun0003_ip = 60; continue _fun0003 }
 118:
                var12[var11] = var13;
                var1 = new Array(0);
                _fun0003_ip = 60; continue _fun0003;
            }
 128:
            var1 = {};
            var10 = var2;
            var3 = 0;
            var2 = undefined;
            for(var7 in var10)
 145:
            {
 154:
                var14 = var7;
                var13 = var12.hasOwnProperty;
                var13 = var13.bind(var12)(var14);
                if(!var13) { _fun0003_ip = 235; continue _fun0003 }
 171:
                var13 = var12[var14];
                var13 = var13.length;
                var13 = var3 < var13;
                var15 = 0;
                var2 = 0;
                if(!var13) { _fun0003_ip = 235; continue _fun0003 }
 191:
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
                if(var2 < var13) { _fun0003_ip = 191; continue _fun0003 }
 235:
                var13 = var5.bind(var6)(var14);
                var1[var14] = var13;
                _fun0003_ip = 145; continue _fun0003;
            }
 246:
            var2 = var4.length;
            var2 = var3 < var2;
            var3 = 0;
            if(!var2) { _fun0003_ip = 289; continue _fun0003 }
 260:
            var7 = var4[var3];
            var2 = var4[var3];
            var2 = var5.bind(var6)(var2);
            var1[var7] = var2;
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0003_ip = 260; continue _fun0003 }
 289:
            return var1;
        }
    };
    var3['mergeChildMappings'] = var2;
    return var1;
})();