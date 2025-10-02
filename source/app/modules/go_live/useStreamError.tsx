// app/modules/go_live/useStreamError.tsx
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
    var9 = 0;
    var7 = var6[var9];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var7 = {};
    var4 = 1;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AVError;
    var8 = var8.STREAM_SOUNDSHARE_FAILED;
    var7[var8] = var9;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AVError;
    var8 = var8.STREAM_SEND_HIGH_PACKET_LOSS;
    var7[var8] = var4;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AVError;
    var8 = var8.STREAM_VIEW_HIGH_PACKET_LOSS;
    var7[var8] = var4;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AVError;
    var8 = var8.STREAM_SEND_LOW_FPS;
    var9 = 2;
    var7[var8] = var9;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AVError;
    var8 = var8.STREAM_VIEW_LOW_FPS;
    var7[var8] = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AVError;
    var8 = var4.STREAM_BAD_NETWORK_QUALITY;
    var4 = 3;
    var7[var8] = var4;
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/useStreamError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStreamError(arg1) {
        var2 = arg1;
        var6 = var2.id;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot2;
                var2 = var3.getActiveErrors;
                var5 = var2.bind(var3)();
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var1 = 'streamKey';
                        var1 = var1 in var2;
                        if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = var2.streamKey;
                        var3 = _closure2_slot0;
                        var1 = var4 === var3;
case 2:
                        if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = _closure1_slot3;
                        var2 = var2.type;
                        var3 = var3[var2];
                        var2 = null;
                        var1 = var2 != var3;
case 4:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure1_slot3;
                        var1 = arg1;
                        var1 = var1.type;
                        var5 = var2[var1];
                        var4 = null;
                        var6 = var4 != var5;
                        var1 = 0;
                        if(!var6) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var1 = var5;
case 6:
                        var5 = _closure1_slot3;
                        var3 = arg2;
                        var3 = var3.type;
                        var3 = var5[var3];
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var2 = var3;
case 8:
                        var1 = var1 - var2;
                        return var1;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var1 = var2.type;
case 10:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();