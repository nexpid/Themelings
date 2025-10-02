// app/modules/calls/useHideSelfVideo.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VideoToggleState;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MediaEngineContextTypes;
    var _closure1_slot6 = var7;
    var4 = var4.Features;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/useHideSelfVideo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHideSelfVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = arguments[1];
            var9 = undefined;
            if(!(var3 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot6;
            var3 = var1.DEFAULT;
case 2:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 4;
            var4 = var10[var7];
            var12 = var8.bind(var9)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var11.bind(var12)(var5, var4);
            _closure2_slot1 = var5;
            var4 = var10[var7];
            var13 = var8.bind(var9)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var4;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.supports;
                var1 = _closure1_slot7;
                var1 = var1.DISABLE_VIDEO;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var12.bind(var13)(var11, var1);
            var7 = var10[var7];
            var9 = var8.bind(var9)(var7);
            var8 = var9.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = new Array(2);
            var4[0] = var5;
            var4[1] = var3;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = var4.isLocalVideoDisabled;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var8.bind(var9)(var7, var3, var4);
            var4 = null;
            var4 = var4 == var6;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var6 === var5;
case 4:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var1;
case 6:
            var1 = new Array(3);
            var1[0] = var4;
            var1[1] = var3;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var3 = arg1;
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = var2.MANUAL_ENABLED;
                    _fun0002_ip = 2; continue _fun0002;
case 8:
                    var6 = var2.DISABLED;
case 2:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setDisableLocalVideo;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var6, var2);
                    return var1;
                }
            };
            var1[2] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();