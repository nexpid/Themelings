// app/modules/profiling/ComponentProfiler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function formatString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.length;
            var3 = var4;
            if(!(!(var1 > var3))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.length;
case 2:
            var2 = var5.substring;
            var1 = 0;
            var3 = var2.bind(var5)(var1, var3);
            var2 = var3.padEnd;
            var1 = ' ';
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var5 = true;
    var4['value'] = var5;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function StatCollector() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['totalMicroseconds'] = var2;
            var3['count'] = var2;
            var2 = null;
            var3['minMicroseconds'] = var2;
            var3['maxMicroseconds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'addValue';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var1 = var2.count;
                var1 = var1 + 1;
                var2['count'] = var1;
                var6 = global;
                var4 = var6.Math;
                var3 = var4.round;
                var5 = 1000;
                var1 = arg1;
                var1 = var5 * var1;
                var5 = var3.bind(var4)(var1);
                var1 = var2.totalMicroseconds;
                var1 = var1 + var5;
                var2['totalMicroseconds'] = var1;
                var4 = var6.Math;
                var3 = var4.min;
                var1 = var2.minMicroseconds;
                var7 = null;
                if(!(var7 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var8 = var6.Number;
                var1 = var8.MAX_SAFE_INTEGER;
case 4:
                var1 = var3.bind(var4)(var1, var5);
                var2['minMicroseconds'] = var1;
                var4 = var6.Math;
                var3 = var4.max;
                var1 = var2.maxMicroseconds;
                if(!(var7 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var6.Number;
                var1 = var6.MIN_SAFE_INTEGER;
case 6:
                var1 = var3.bind(var4)(var1, var5);
                var2['maxMicroseconds'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'mean';
        var1['key'] = var6;
        var5 = function get() {
            var1 = this;
            var2 = var1.totalMicroseconds;
            var1 = var1.count;
            var1 = var2 / var1;
            return var1;
        };
        var1['get'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot4 = var4;
    var8 = {};
    var _closure1_slot5 = var8;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/profiling/ComponentProfiler.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function ComponentProfiler(arg1) {
        var1 = arg1;
        var6 = var1.id;
        var1 = var1.children;
        var2 = _closure1_slot2;
        var7 = var2.useCallback;
        var5 = function(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = arg2;
                var3 = arg3;
                var4 = _closure1_slot6;
                if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = _closure1_slot5;
                var4 = var2 in var4;
                if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var6 = _closure1_slot5;
                var4 = {};
                var7 = _closure1_slot4;
                var8 = var7.prototype;
                var9 = Object.create(var8, {constructor: {value: var7}});
                var11 = var9;
                var8 = new var11[var7](var10);
                var8 = var8 instanceof Object ? var8 : var9;
                var4['mount'] = var8;
                var8 = var7.prototype;
                var9 = Object.create(var8, {constructor: {value: var7}});
                var11 = var9;
                var8 = new var11[var7](var10);
                var8 = var8 instanceof Object ? var8 : var9;
                var4['update'] = var8;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var4['nestedUpdate'] = var7;
                var6[var2] = var4;
case 10:
                var4 = 'mount';
                if(!(var4 !== var5)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var4 = 'update';
                if(!(var4 !== var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var4 = 'nested-update';
                if(!(var4 === var5)) { _fun0003_ip = 8; continue _fun0003 }
case 16:
                var4 = _closure1_slot5;
                var4 = var4[var2];
                var5 = var4.nestedUpdate;
                var4 = var5.addValue;
                var4 = var4.bind(var5)(var3);
                _fun0003_ip = 8; continue _fun0003;
case 14:
                var4 = _closure1_slot5;
                var4 = var4[var2];
                var5 = var4.update;
                var4 = var5.addValue;
                var4 = var4.bind(var5)(var3);
                _fun0003_ip = 8; continue _fun0003;
case 12:
                var1 = _closure1_slot5;
                var1 = var1[var2];
                var2 = var1.mount;
                var1 = var2.addValue;
                var1 = var1.bind(var2)(var3);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var4 = new Array(0);
        var5 = var7.bind(var2)(var5, var4);
        var4 = _closure1_slot3;
        var3 = var2.Profiler;
        var2 = {};
        var2['id'] = var6;
        var2['onRender'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['StatCollector'] = var4;
    var4 = function clearComponentRenderStats() {
        var1 = {};
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var3['clearComponentRenderStats'] = var4;
    var4 = function getComponentRenderStats() {
        var1 = _closure1_slot5;
        return var1;
    };
    var3['getComponentRenderStats'] = var4;
    var4 = function serializeComponentRenderAverages() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = global;
            var5 = var4.Object;
            var3 = var5.keys;
            var1 = _closure1_slot5;
            var1 = var3.bind(var5)(var1);
            var5 = var1.length;
            var1 = '';
            var3 = 0;
            if(!(var3 !== var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var7 = _closure1_slot7;
            var6 = undefined;
            var3 = 'id';
            var5 = 20;
            var13 = var7.bind(var6)(var3, var5);
            var3 = 'Mounts';
            var8 = 8;
            var25 = var7.bind(var6)(var3, var8);
            var3 = 'Mount Mean';
            var23 = var7.bind(var6)(var3, var5);
            var3 = 'Updates';
            var21 = var7.bind(var6)(var3, var8);
            var3 = 'Update Mean';
            var19 = var7.bind(var6)(var3, var5);
            var3 = 'Nested';
            var17 = var7.bind(var6)(var3, var8);
            var3 = 'Nested Mean';
            var15 = var7.bind(var6)(var3, var5);
            var3 = var4.HermesInternal;
            var6 = var3.concat;
            var5 = '|';
            var14 = '|\n';
            var28 = var5;
            var27 = var13;
            var26 = var5;
            var24 = var5;
            var22 = var5;
            var20 = var5;
            var18 = var5;
            var16 = var5;
            var5 = var28[var6](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
            var3 = 'Component Render Stats (microseconds):\n';
            var3 = var3 + var5;
            var5 = var4.Object;
            var4 = var5.entries;
            var2 = _closure1_slot5;
            var5 = var4.bind(var5)(var2);
            var4 = var5.map;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var1 = var6().value;
                    var3 = var2;
                    var4 = undefined;
                    var3 = var3 === var4;
                    var5 = undefined;
                    if(var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var5 = var1;
case 19:
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var4;
                    var1 = undefined;
                    var3 = var6;
                    if(var6) { _fun0005_ip = 21; continue _fun0005 }
case 23:
                    var1 = var7;
                    var3 = var6;
case 21:
                    if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var2.return();
case 24:
                    var3 = _closure1_slot7;
                    var2 = 20;
                    var10 = var3.bind(var4)(var5, var2);
                    var5 = var1.mount;
                    var6 = var5.count;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var11 = 8;
                    var24 = var3.bind(var4)(var5, var11);
                    var5 = var1.mount;
                    var6 = var5.mean;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var22 = var3.bind(var4)(var5, var2);
                    var5 = var1.update;
                    var6 = var5.count;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var20 = var3.bind(var4)(var5, var11);
                    var5 = var1.update;
                    var6 = var5.mean;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var18 = var3.bind(var4)(var5, var2);
                    var5 = var1.nestedUpdate;
                    var12 = var5.count;
                    var5 = var12.toString;
                    var5 = var5.bind(var12)();
                    var16 = var3.bind(var4)(var5, var11);
                    var1 = var1.nestedUpdate;
                    var11 = var1.mean;
                    var1 = var11.toString;
                    var1 = var1.bind(var11)();
                    var14 = var3.bind(var4)(var1, var2);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '|';
                    var13 = '|\n';
                    var27 = var2;
                    var26 = var10;
                    var25 = var2;
                    var23 = var2;
                    var21 = var2;
                    var19 = var2;
                    var17 = var2;
                    var15 = var2;
                    var1 = var27[var3](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var1 = var3 + var2;
case 17:
            return var1;
        }
    };
    var3['serializeComponentRenderAverages'] = var4;
    var4 = function resetComponentProfiler() {
        var1 = {};
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var3['resetComponentProfiler'] = var4;
    var4 = function pauseComponentProfiler() {
        var1 = false;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var3['pauseComponentProfiler'] = var4;
    var4 = function resumeComponentProfiler() {
        var1 = true;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var3['resumeComponentProfiler'] = var4;
    var2 = function dumpStats() {
        var1 = _closure1_slot5;
        return var1;
    };
    var3['dumpStats'] = var2;
    return var1;
})();