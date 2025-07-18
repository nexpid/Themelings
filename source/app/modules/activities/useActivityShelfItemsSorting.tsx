// app/modules/activities/useActivityShelfItemsSorting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = function applySorting(arg1, arg2) {
        var4 = arg2;
        var3 = new Array(0);
        var7 = arg1;
        var2 = 0;
        var8 = var3;
        var6 = 0;
        var5 = arraySpread(var8, var7, var6);
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure2_slot0;
                var3 = var4.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var3.bind(var4)(var1);
                var1 = -1;
                if(!(var1 !== var6)) { _fun0001_ip = 154; continue _fun0001 }
 44:
                var1 = _closure2_slot0;
                var5 = var1[var6];
                var3 = _closure2_slot0;
                var1 = var3.splice;
                var4 = 1;
                var1 = var1.bind(var3)(var6, var4);
                var7 = _closure2_slot0;
                var3 = var7.slice;
                var1 = _closure2_slot1;
                var6 = 0;
                var9 = var3.bind(var7)(var6, var1);
                var1 = new Array(1);
                var10 = var1;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var1[var3] = var5;
                var8 = var3 + var4;
                var6 = _closure2_slot0;
                var5 = var6.slice;
                var3 = _closure2_slot1;
                var9 = var5.bind(var6)(var3);
                var10 = var1;
                var3 = arraySpread(var10, var9, var8);
                _closure2_slot0 = var1;
                var1 = _closure2_slot1;
                var1 = var1 + 1;
                _closure2_slot1 = var1;
 154:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var4 = _closure2_slot0;
        var3 = var4.map;
        var2 = function(arg1, arg2) {
            var1 = new Array(2);
            var2 = arg1;
            var1[0] = var2;
            var2 = arg2;
            var1[1] = var2;
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
                var4 = var1().value;
                var1 = var2;
                var6 = undefined;
                var3 = var1 === var6;
                var1 = undefined;
                if(var3) { _fun0002_ip = 27; continue _fun0002 }
 24:
                var1 = var4;
 27:
                if(var3) { _fun0002_ip = 33; continue _fun0002 }
 30:
                var2.return();
 33:
                var1 = var1.application;
                var1 = var1.embeddedActivityConfig;
                var2 = null;
                var3 = var2 == var1;
                var4 = undefined;
                if(var3) { _fun0002_ip = 134; continue _fun0002 }
 55:
                var3 = var1.client_platform_config;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 2;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var7 = _closure1_slot0;
                var1 = 3;
                var1 = var8[var1];
                var7 = var7.bind(var6)(var1);
                var1 = var7.getOS;
                var1 = var1.bind(var7)();
                var1 = var5.bind(var6)(var1);
                var1 = var3[var1];
                var2 = var2 == var1;
                var4 = undefined;
                if(var2) { _fun0002_ip = 134; continue _fun0002 }
 128:
                var4 = var1.label_type;
 134:
                var2 = !var4;
                var1 = !var2;
                if(var2) { _fun0002_ip = 221; continue _fun0002 }
 143:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 4;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.EmbeddedActivityLabelTypes;
                var2 = var2.NEW;
                var2 = var4 === var2;
                if(var2) { _fun0002_ip = 218; continue _fun0002 }
 185:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.EmbeddedActivityLabelTypes;
                var3 = var3.UPDATED;
                var2 = var4 === var3;
 218:
                var1 = var2;
 221:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var3 = var5[Symbol.iterator];
                var5 = var3().next;
                var6 = var5().value;
                var2 = var3;
                var1 = undefined;
                var4 = var2 === var1;
                var2 = undefined;
                if(var4) { _fun0003_ip = 27; continue _fun0003 }
 24:
                var2 = var6;
 27:
                var8 = undefined;
                if(var4) { _fun0003_ip = 57; continue _fun0003 }
 32:
                var6 = var5().value;
                var5 = var3;
                var5 = var5 === var1;
                var8 = undefined;
                var4 = var5;
                if(var5) { _fun0003_ip = 57; continue _fun0003 }
 51:
                var8 = var6;
                var4 = var5;
 57:
                if(var4) { _fun0003_ip = 63; continue _fun0003 }
 60:
                var3.return();
 63:
                var3 = var2.application;
                var3 = var3.embeddedActivityConfig;
                var4 = null;
                var7 = var8;
                if(!(var4 != var3)) { _fun0003_ip = 131; continue _fun0003 }
 83:
                var3 = var2.application;
                var3 = var3.embeddedActivityConfig;
                var3 = var3.shelf_rank;
                var7 = var8;
                if(!(var4 != var3)) { _fun0003_ip = 131; continue _fun0003 }
 107:
                var2 = var2.application;
                var2 = var2.embeddedActivityConfig;
                var3 = var2.shelf_rank;
                var2 = 1;
                var7 = var3 - var2;
 131:
                if(!(var7 < var8)) { _fun0003_ip = 229; continue _fun0003 }
 135:
                var2 = _closure2_slot0;
                var6 = var2[var8];
                var4 = _closure2_slot0;
                var2 = var4.splice;
                var5 = 1;
                var2 = var2.bind(var4)(var8, var5);
                var4 = _closure2_slot0;
                var2 = var4.slice;
                var8 = 0;
                var10 = var2.bind(var4)(var8, var7);
                var2 = new Array(1);
                var11 = var2;
                var9 = 0;
                var4 = arraySpread(var11, var10, var9);
                var2[var4] = var6;
                var9 = var4 + var5;
                var6 = _closure2_slot0;
                var4 = var6.slice;
                var10 = var4.bind(var6)(var7);
                var11 = var2;
                var4 = arraySpread(var11, var10, var9);
                _closure2_slot0 = var2;
 229:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useActivityShelfItemsSorting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivityShelfItemsSorting(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var6.bind(var3)(var4);
        var4 = var3.FrecencyUserSettingsActionCreators;
        var3 = var4.loadIfNecessary;
        var3 = var3.bind(var4)();
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = new Array(0);
            var _closure3_slot0 = var5;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.push;
                var1 = arg1;
                var1 = var1.application;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = new Array(0);
            var6 = 0;
            var8 = var3;
            var7 = var5;
            var2 = arraySpread(var8, var7, var6);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var4 = _closure3_slot0;
                    var3 = var4.findIndex;
                    var2 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.findIndex;
                    var1 = function(arg1) {
                        var2 = _closure4_slot1;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2 = var2 < var1;
                    var1 = 1;
                    if(!var2) { _fun0004_ip = 75; continue _fun0004 }
 69:
                    var1 = -1;
 75:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();