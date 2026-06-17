// app/modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ScrollBenchmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.onResult;
            var8 = var1.subLabel;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 'Records frame times while you scroll the content below.';
case 2:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 2;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var7 = var2.monitoring;
            var5 = var2.start;
            var6 = var2.stop;
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var1 = 3;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var9 = 'Start scroll monitor';
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 'Stop scroll monitor';
case 4:
            var1['label'] = var9;
            var1['subLabel'] = var8;
            var8 = undefined;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = 'danger';
case 6:
            var1['variant'] = var8;
            var8 = true;
            var1['arrow'] = var8;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6;
case 8:
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();