// app/modules/external_pip/useExternalPipEnabler.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/useExternalPipEnabler.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useExternalPIPEnabler(arg1) {
        var2 = arg1;
        var6 = var2.disabled;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot2;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var2 = _closure1_slot3;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot4;
                var3 = var4.getChannelId;
                var7 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var7)) { _fun0001_ip = 189; continue _fun0001 }
 28:
                var4 = _closure2_slot0;
                if(var4) { _fun0001_ip = 189; continue _fun0001 }
 41:
                var5 = _closure1_slot2;
                var4 = var5.getVideoParticipants;
                var6 = var4.bind(var5)(var7);
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.localVideoDisabled;
                    var1 = !var1;
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var5 = var4.length;
                var4 = 0;
                var4 = var5 > var4;
                if(var4) { _fun0001_ip = 141; continue _fun0001 }
 87:
                var6 = _closure1_slot2;
                var5 = var6.getStreamParticipants;
                var7 = var5.bind(var6)(var7);
                var6 = var7.filter;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var3 = _closure1_slot3;
                    var1 = var3.getId;
                    var1 = var1.bind(var3)();
                    var1 = var2 !== var1;
                    return var1;
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.streamId;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var4 = var3 != var2;
 141:
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var8 = var3.DEFAULT_STATE;
                var9 = var2;
                var3 = copyDataProperties(var9, var8);
                var3 = 'externalPipEnabled';
                var2[var3] = var4;
                return var2;
 189:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.DEFAULT_STATE;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();