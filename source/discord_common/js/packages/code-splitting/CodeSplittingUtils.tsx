// discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var12 = require;
        var3 = exports;
        var11 = dependencyMap;
        var _closure1_slot0 = var12;
        var _closure1_slot1 = var11;
        var1 = global;
        var6 = var1.Object;
        var5 = var6.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var4);
        var1 = 0;
        var5 = var11[var1];
        var4 = metroImportDefault;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var _closure1_slot2 = var4;
        var4 = 1;
        var5 = var11[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var5);
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var11[var4];
        var4 = var12.bind(var1)(var4);
        var5 = var4.jsx;
        var _closure1_slot4 = var5;
        var4 = var4.Fragment;
        var _closure1_slot5 = var4;
        var4 = function loaderMaker() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arguments[0];
                var3 = undefined;
                if(!(var2 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = 'transparent';
case 2:
                var _closure2_slot0 = var2;
                var1 = function() {
                    var4 = _closure1_slot4;
                    var3 = {};
                    var1 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
                    var2 = _closure2_slot0;
                    var1['backgroundColor'] = var2;
                    var3['style'] = var1;
                    var2 = undefined;
                    var1 = 'div';
                    var1 = var4.bind(var2)(var1, var3);
                    return var1;
                };
                return var1;
            }
        };
        var _closure1_slot6 = var4;
        var5 = 4;
        var5 = var11[var5];
        var13 = var12.bind(var1)(var5);
        var6 = var13.fileFinishedImporting;
        var5 = '../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx';
        var5 = var6.bind(var13)(var5);
        var6 = 3;
        var5 = var11[var6];
        var9 = var12.bind(var1)(var5);
        for(var5 in var9)
case 4:
        {
case 5:
            var14 = var5;
            var13 = var11[var6];
            var13 = var12.bind(var1)(var13);
            var13 = var13[var14];
            var3[var14] = var13;
            _fun0001_ip = 4; continue _fun0001;
        }
case 6:
        var3['loaderMaker'] = var4;
        var4 = function makeLazy(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var3 = var2.createPromise;
                var _closure2_slot0 = var3;
                var3 = var2.webpackId;
                var _closure2_slot1 = var3;
                var3 = var2.renderLoader;
                var _closure2_slot2 = var3;
                var5 = var2.name;
                var3 = var2.memo;
                var2 = undefined;
                if(!(var3 === var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = false;
case 7:
                var _closure2_slot3 = var2;
                var7 = _closure1_slot3;
                var6 = var7.lazy;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.importWithRetry;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['createPromise'] = var5;
                    var4 = _closure2_slot1;
                    var1['webpackId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
                _closure2_slot3 = var4;
                var4 = function Wrapper(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure1_slot4;
                        var1 = _closure1_slot3;
                        var3 = var1.Suspense;
                        var2 = {};
                        var7 = _closure2_slot2;
                        var6 = null;
                        if(!(var6 == var7)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                        var6 = _closure1_slot6;
                        var7 = undefined;
                        var6 = var6.bind(var7)();
                        var6 = var6.bind(var7)();
                        _fun0004_ip = 11; continue _fun0004;
case 9:
                        var8 = _closure2_slot2;
                        var7 = undefined;
                        var6 = var8.bind(var7)();
case 11:
                        var2['fallback'] = var6;
                        var7 = _closure1_slot4;
                        var6 = _closure2_slot3;
                        var5 = {};
                        var9 = arg1;
                        var10 = var5;
                        var1 = copyDataProperties(var10, var9);
                        var1 = undefined;
                        var5 = var7.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var1 = var4;
                if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = _closure1_slot3;
                var2 = var3.memo;
                var1 = var2.bind(var3)(var4);
case 12:
                if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var5 = 'Unknown';
case 14:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = 'Suspense(';
                var2 = ')';
                var2 = var4.bind(var3)(var5, var2);
                var1['displayName'] = var2;
                return var1;
            }
        };
        var3['makeLazy'] = var4;
        var2 = function LazyLibrary(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = var1.createPromise;
                var _closure2_slot0 = var3;
                var3 = var1.webpackId;
                var _closure2_slot1 = var3;
                var7 = var1.render;
                var6 = var1.renderFallback;
                var10 = _closure1_slot3;
                var3 = var10.useState;
                var8 = null;
                var9 = var3.bind(var10)(var8);
                var5 = _closure1_slot2;
                var4 = undefined;
                var3 = 2;
                var9 = var5.bind(var4)(var9, var3);
                var3 = 0;
                var5 = var9[var3];
                var3 = 1;
                var3 = var9[var3];
                var _closure2_slot2 = var3;
                var9 = var10.useEffect;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.importWithRetry;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['createPromise'] = var6;
                    var5 = _closure2_slot1;
                    var2['webpackId'] = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.default;
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = new Array(0);
                var2 = var9.bind(var10)(var3, var2);
                var3 = _closure1_slot4;
                var2 = _closure1_slot5;
                var1 = {};
                if(!(var8 != var5)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var5 = var7.bind(var4)(var5);
                _fun0005_ip = 18; continue _fun0005;
case 16:
                var5 = var6.bind(var4)();
case 18:
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['LazyLibrary'] = var2;
        return var1;
    }
})();