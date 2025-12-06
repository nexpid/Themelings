// app/modules/checkpoint/native/useCheckpointPreloader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchStates;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var8.bind(var1)(var4);
    var4 = new Array(13);
    var4[0] = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[1] = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[2] = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[3] = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[4] = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[5] = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[6] = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[7] = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[8] = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[9] = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[10] = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[11] = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var4[12] = var7;
    var _closure1_slot6 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/useCheckpointPreloader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCheckpointPreloader() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot3;
            var2 = var6.useRef;
            var1 = 0;
            var2 = var2.bind(var6)(var1);
            var _closure2_slot0 = var2;
            var5 = var6.useRef;
            var2 = true;
            var2 = var5.bind(var6)(var2);
            var _closure2_slot1 = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 16;
            var2 = var6[var2];
            var6 = undefined;
            var5 = var5.bind(var6)(var2);
            var2 = var5.useMaybeFetchCheckpointData;
            var7 = var2.bind(var5)();
            var2 = _closure1_slot5;
            var2 = var2.SUCCESS;
            var2 = var7 === var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot5;
            var5 = var5.ERROR;
            var2 = var7 === var5;
case 2:
            var8 = _closure1_slot3;
            var7 = var8.useState;
            var5 = false;
            var8 = var7.bind(var8)(var5);
            var7 = _closure1_slot2;
            var5 = 2;
            var7 = var7.bind(var6)(var8, var5);
            var1 = var7[var1];
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot2 = var5;
            var5 = _closure1_slot4;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HTTP;
                    var2 = var3.get;
                    var1 = {};
                    var4 = arg1;
                    var1['url'] = var4;
                    var4 = true;
                    var1['rejectWithError'] = var4;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var2 = _closure2_slot0;
                            var4 = var2.current;
                            var3 = 1;
                            var3 = var4 + var3;
                            var2['current'] = var3;
                            var3 = var2.current;
                            var2 = _closure1_slot6;
                            var2 = var2.length;
                            if(!(var3 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
case 4:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = new Array(0);
            var4 = var5.bind(var6)(var7, var4);
            var4 = function() {
                var1 = function() {
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var5.bind(var6)(var4, var3);
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();