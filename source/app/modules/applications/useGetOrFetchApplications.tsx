// app/modules/applications/useGetOrFetchApplications.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useGetOrFetchApplications(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var8;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var3 = true;
 20:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var5;
            var7 = _closure1_slot3;
            var6 = var7.useRef;
            var4 = new Array(0);
            var4 = var6.bind(var7)(var4);
            _closure2_slot2 = var4;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 63; continue _fun0002 }
 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.areArraysShallowEqual;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = !var3;
 63:
                    if(!var2) { _fun0002_ip = 187; continue _fun0002 }
 66:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 3;
                    var2 = var10[var2];
                    var9 = undefined;
                    var6 = var4.bind(var9)(var2);
                    var5 = var6.fetchApplications;
                    var2 = 4;
                    var2 = var10[var2];
                    var4 = var4.bind(var9)(var2);
                    var2 = _closure2_slot0;
                    var7 = var4.bind(var9)(var2);
                    var4 = var7.filter;
                    var8 = _closure1_slot0;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.isNotNullish;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.uniq;
                    var4 = var3.bind(var4)();
                    var3 = var4.value;
                    var4 = var3.bind(var4)();
                    var3 = false;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot2;
                    var1['current'] = var2;
 187:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useStateFromStoresArray;
            var5 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = arg1;
                        var1 = null;
                        var2 = var1 != var4;
                        var1 = undefined;
                        if(!var2) { _fun0003_ip = 32; continue _fun0003 }
 14:
                        var3 = _closure1_slot4;
                        var2 = var3.getApplication;
                        var1 = var2.bind(var3)(var4);
 32:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/useGetOrFetchApplications.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useGetOrFetchApplication(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var4 = true;
 14:
            var2 = _closure1_slot5;
            var1 = null;
            if(!(var1 == var6)) { _fun0004_ip = 33; continue _fun0004 }
 27:
            var1 = new Array(0);
            _fun0004_ip = 44; continue _fun0004;
 33:
            var5 = new Array(1);
            var5[0] = var6;
            var1 = var5;
 44:
            var2 = var2.bind(var3)(var1, var4);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['useGetOrFetchApplication'] = var2;
    return var1;
})();