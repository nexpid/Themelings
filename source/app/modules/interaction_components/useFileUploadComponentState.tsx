// app/modules/interaction_components/useFileUploadComponentState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/useFileUploadComponentState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFileUploadComponentState(arg1) {
        var4 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 3;
        var2 = var8[var2];
        var7 = undefined;
        var4 = var4.bind(var7)(var2);
        var2 = var4.useComponentStateContext;
        var5 = var2.bind(var4)();
        var6 = _closure1_slot1;
        var4 = 4;
        var2 = var8[var4];
        var11 = var6.bind(var7)(var2);
        var2 = null;
        var10 = var2 != var5;
        var9 = 'useFileUploadComponentState must be used within a ComponentStateContextProvider';
        var9 = var11.bind(var7)(var10, var9);
        var9 = var5.channelId;
        var4 = var8[var4];
        var6 = var6.bind(var7)(var4);
        var4 = var2 != var9;
        var2 = 'useFileUploadComponentState must be used inside a channel';
        var2 = var6.bind(var7)(var4, var2);
        var4 = var5.useComponentState;
        var2 = arg1;
        var2 = var4.bind(var5)(var2);
        var5 = var2.state;
        var _closure2_slot0 = var5;
        var4 = var2.executeStateUpdate;
        var _closure2_slot1 = var4;
        var2 = var2.error;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 == var3;
                var5 = undefined;
                var3 = undefined;
                if(var1) { _fun0001_ip = 29; continue _fun0001 }
 20:
                var1 = _closure2_slot0;
                var3 = var1.type;
 29:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.ComponentType;
                var1 = var1.FILE_UPLOAD;
                if(!(var3 !== var1)) { _fun0001_ip = 74; continue _fun0001 }
 68:
                var1 = new Array(0);
                _fun0001_ip = 84; continue _fun0001;
 74:
                var2 = _closure2_slot0;
                var1 = var2.uploadIds;
 84:
                return var1;
            }
        };
        var5 = var7.bind(var8)(var5, var6);
        var _closure2_slot2 = var5;
        var7 = _closure1_slot5;
        var6 = var7.getUploads;
        var3 = _closure1_slot4;
        var3 = var3.InteractionModal;
        var3 = var6.bind(var7)(var9, var3);
        var _closure2_slot3 = var3;
        var7 = var8.useMemo;
        var6 = new Array(2);
        var6[0] = var5;
        var6[1] = var3;
        var3 = function() {
            var4 = _closure2_slot2;
            var3 = var4.map;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var3 = _closure2_slot3;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure4_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var7.bind(var8)(var3, var6);
        var _closure2_slot4 = var3;
        var7 = var8.useCallback;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function(arg1) {
            var3 = _closure2_slot1;
            var2 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.ComponentType;
            var4 = var4.FILE_UPLOAD;
            var2['type'] = var4;
            var4 = arg1;
            var2['uploadIds'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var4 = var7.bind(var8)(var4, var6);
        var _closure2_slot5 = var4;
        var7 = var8.useEffect;
        var6 = new Array(3);
        var6[0] = var5;
        var6[1] = var3;
        var6[2] = var4;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot2;
                var3 = var2.length;
                var2 = _closure2_slot4;
                var2 = var2.length;
                if(!(var3 > var2)) { _fun0002_ip = 59; continue _fun0002 }
 25:
                var4 = _closure2_slot2;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot4;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 59:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var7.bind(var8)(var1, var6);
        var1 = {};
        var1['uploadIds'] = var5;
        var1['setUploadIds'] = var4;
        var1['currentUploads'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useFileUploadComponentState'] = var2;
    return var1;
})();