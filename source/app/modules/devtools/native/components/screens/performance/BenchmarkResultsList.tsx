// app/modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var7 = var4.jsx;
    var _closure1_slot2 = var7;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BenchmarkResultsList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.results;
            var10 = var1.onClear;
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 2;
            var2 = var11[var2];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var3 = var2.TableRowGroup;
            var2 = {'title': 'Results (newest first)', 'hasIcons': false};
            var9 = var12.map;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.kind;
                    var1 = 'mount';
                    if(!(var1 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot2;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var1 = 3;
                    var1 = var10[var1];
                    var5 = undefined;
                    var1 = var8.bind(var5)(var1);
                    var4 = var1.TableRow;
                    var3 = {};
                    var7 = var2.meanMs;
                    var1 = var7.toFixed;
                    var9 = 1;
                    var15 = var1.bind(var7)(var9);
                    var7 = var2.worstMs;
                    var1 = var7.toFixed;
                    var19 = var1.bind(var7)(var9);
                    var1 = global;
                    var7 = var1.HermesInternal;
                    var12 = var7.concat;
                    var22 = 'Scroll · mean ';
                    var20 = ' ms · worst ';
                    var13 = ' ms';
                    var21 = var15;
                    var18 = var13;
                    var7 = var22[var12](var21, var20, var19, var18, var17);
                    var3['label'] = var7;
                    var12 = var2.dropped;
                    var19 = var2.frames;
                    var7 = 4;
                    var7 = var10[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.FRAME_BUDGET_MS;
                    var7 = var8.toFixed;
                    var17 = var7.bind(var8)(var9);
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var22 = '';
                    var20 = '/';
                    var18 = ' frames over ';
                    var21 = var12;
                    var16 = var13;
                    var1 = var22[var9](var21, var20, var19, var18, var17, var16, var15);
                    var3['subLabel'] = var1;
                    var1 = var2.id;
                    var1 = var6.bind(var5)(var4, var3, var1);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var6 = _closure1_slot2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.TableRow;
                    var3 = {};
                    var7 = var2.label;
                    var3['label'] = var7;
                    var9 = var2.elapsedMs;
                    var8 = var9.toFixed;
                    var7 = 1;
                    var10 = var8.bind(var9)(var7);
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '';
                    var7 = ' ms total';
                    var7 = var9.bind(var8)(var10, var7);
                    var3['subLabel'] = var7;
                    var2 = var2.id;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 6:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.TableRow;
            var7 = {'label': 'Clear results', 'variant': 'danger', 'arrow': true};
            var7['onPress'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();