// app/modules/masked_link/SharedStateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useUrlParts(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var4 = var6[var2];
                var3 = undefined;
                var8 = var5.bind(var3)(var4);
                var7 = var8.getProtocol;
                var4 = _closure2_slot0;
                var7 = var7.bind(var8)(var4);
                var1['protocol'] = var7;
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.getHostname;
                var2 = var2.bind(var3)(var4);
                var1['hostname'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var8 = var1.protocol;
            var7 = var1.hostname;
            var3 = var5.substr;
            var2 = var8.length;
            var1 = 2;
            var2 = var3.bind(var5)(var2, var1);
            var4 = '';
            var1 = '//';
            var6 = var4;
            if(!(var1 === var2)) { _fun0001_ip = 94; continue _fun0001 }
 91:
            var6 = var1;
 94:
            var1 = {};
            var1['protocol'] = var8;
            var1['authorityPrefix'] = var6;
            var1['hostname'] = var7;
            var3 = var5.replace;
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var4)(var8, var6, var7);
            var2 = var3.bind(var5)(var2, var4);
            var1['theRestOfTheUrl'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/masked_link/SharedStateUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useUrlParts'] = var4;
    var2 = function useModalState(arg1) {
        var2 = arg1;
        var16 = var2.url;
        var _closure2_slot0 = var16;
        var15 = var2.trustUrl;
        var _closure2_slot1 = var15;
        var3 = var2.onConfirm;
        var _closure2_slot2 = var3;
        var13 = var2.onCancel;
        var _closure2_slot3 = var13;
        var12 = var2.onClose;
        var _closure2_slot4 = var12;
        var6 = _closure1_slot3;
        var5 = var6.useState;
        var4 = false;
        var6 = var5.bind(var6)(var4);
        var5 = _closure1_slot2;
        var7 = undefined;
        var4 = 2;
        var6 = var5.bind(var7)(var6, var4);
        var4 = 0;
        var5 = var6[var4];
        var _closure2_slot5 = var5;
        var4 = 1;
        var4 = var6[var4];
        var6 = _closure1_slot4;
        var6 = var6.bind(var7)(var16);
        var9 = var6.protocol;
        var8 = var6.authorityPrefix;
        var7 = var6.hostname;
        var6 = var6.theRestOfTheUrl;
        var14 = _closure1_slot3;
        var11 = var14.useCallback;
        var10 = new Array(5);
        var10[0] = var16;
        var10[1] = var5;
        var10[2] = var15;
        var10[3] = var3;
        var10[4] = var12;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot5;
                if(!var2) { _fun0002_ip = 25; continue _fun0002 }
 10:
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
 25:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 45; continue _fun0002 }
 35:
                var3 = _closure2_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)();
 45:
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var3 = var11.bind(var14)(var3, var10);
        var11 = _closure1_slot3;
        var10 = var11.useCallback;
        var2 = new Array(2);
        var2[0] = var13;
        var2[1] = var12;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                var3 = _closure2_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)();
 23:
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var2 = var10.bind(var11)(var1, var2);
        var1 = {};
        var1['protocol'] = var9;
        var1['authorityPrefix'] = var8;
        var1['hostname'] = var7;
        var1['theRestOfTheUrl'] = var6;
        var1['shouldTrustUrl'] = var5;
        var1['setShouldTrustUrl'] = var4;
        var1['handleConfirm'] = var3;
        var1['handleCancel'] = var2;
        return var1;
    };
    var3['useModalState'] = var2;
    return var1;
})();