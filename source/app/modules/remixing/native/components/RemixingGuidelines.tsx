// app/modules/remixing/native/components/RemixingGuidelines.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Dimensions;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = function createVerticalDottedLine() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.get;
            var1 = 'screen';
            var1 = var2.bind(var3)(var1);
            var9 = var1.width;
            var8 = var1.height;
            var1 = new Array(0);
            var7 = -var8;
            var6 = 5;
            var5 = undefined;
            var4 = 2;
            var3 = 4;
            var2 = 8;
            if(!(var7 < var8)) { _fun0001_ip = 146; continue _fun0001 }
 56:
            var14 = var1.push;
            var13 = _closure1_slot0;
            var11 = _closure1_slot1;
            var12 = var11[var6];
            var16 = var13.bind(var5)(var12);
            var15 = var16.vec;
            var12 = var9 / var4;
            var12 = var15.bind(var16)(var12, var7);
            var12 = var14.bind(var1)(var12);
            var12 = var1.push;
            var11 = var11[var6];
            var15 = var13.bind(var5)(var11);
            var14 = var15.vec;
            var13 = var9 / var4;
            var11 = var7 + var3;
            var11 = var14.bind(var15)(var13, var11);
            var11 = var12.bind(var1)(var11);
            var7 = var7 + var2;
            if(var7 < var8) { _fun0001_ip = 56; continue _fun0001 }
 146:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function createHorizontalDottedLine() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.get;
            var1 = 'screen';
            var1 = var2.bind(var3)(var1);
            var9 = var1.width;
            var8 = var1.height;
            var1 = new Array(0);
            var7 = -var9;
            var6 = 5;
            var5 = undefined;
            var4 = 2;
            var3 = 4;
            var2 = 8;
            if(!(var7 < var9)) { _fun0002_ip = 146; continue _fun0002 }
 56:
            var14 = var1.push;
            var13 = _closure1_slot0;
            var11 = _closure1_slot1;
            var12 = var11[var6];
            var16 = var13.bind(var5)(var12);
            var15 = var16.vec;
            var12 = var8 / var4;
            var12 = var15.bind(var16)(var7, var12);
            var12 = var14.bind(var1)(var12);
            var12 = var1.push;
            var11 = var11[var6];
            var15 = var13.bind(var5)(var11);
            var14 = var15.vec;
            var13 = var7 + var3;
            var11 = var8 / var4;
            var11 = var14.bind(var15)(var13, var11);
            var11 = var12.bind(var1)(var11);
            var7 = var7 + var2;
            if(var7 < var9) { _fun0002_ip = 56; continue _fun0002 }
 146:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingGuidelines.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.gesturing;
            var7 = _closure1_slot5;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 6;
            var3 = var1[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var6 = var3.shallow;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.xAxisOpacity;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.yAxisOpacity;
                var1[1] = var2;
                return var1;
            };
            var7 = var7.bind(var4)(var3, var6);
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6.bind(var4)(var7, var3);
            var6 = 0;
            var14 = var3[var6];
            var8 = 1;
            var7 = var3[var8];
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var10 = _closure1_slot8;
            var3 = new Array(0);
            var16 = var11.bind(var12)(var10, var3);
            var11 = var12.useMemo;
            var10 = _closure1_slot9;
            var3 = new Array(0);
            var11 = var11.bind(var12)(var10, var3);
            var3 = _closure1_slot7;
            var12 = 5;
            var1 = var1[var12];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Group;
            var1 = {};
            if(!var9) { _fun0003_ip = 157; continue _fun0003 }
 154:
            var6 = var8;
 157:
            var1['opacity'] = var6;
            var8 = _closure1_slot6;
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = var9[var12];
            var5 = var10.bind(var4)(var5);
            var6 = var5.Group;
            var5 = {};
            var13 = 0.8;
            var7 = var13 * var7;
            var5['opacity'] = var7;
            var7 = var9[var12];
            var7 = var10.bind(var4)(var7);
            var15 = var7.Points;
            var7 = {'points': null, 'mode': 'lines', 'style': 'stroke', 'strokeWidth': 3, 'color': 'rgba(58, 135, 253, 1)'};
            var7['points'] = var16;
            var7 = var8.bind(var4)(var15, var7);
            var5['children'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var9[var12];
            var6 = var10.bind(var4)(var6);
            var7 = var6.Group;
            var6 = {};
            var13 = var13 * var14;
            var6['opacity'] = var13;
            var9 = var9[var12];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Points;
            var9 = {'points': null, 'mode': 'lines', 'style': 'stroke', 'strokeWidth': 3, 'color': 'rgba(58, 135, 253, 1)'};
            var9['points'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();