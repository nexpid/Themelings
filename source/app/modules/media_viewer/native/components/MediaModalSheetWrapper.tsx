// app/modules/media_viewer/native/components/MediaModalSheetWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MEDIA_MODAL_KEY;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModalSheetWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaModalSheetWrapper(arg1) {
        var4 = arg1;
        var10 = var4.onCloseCallback;
        var _closure2_slot0 = var10;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['onCloseCallback'] = var1;
        var14 = {};
        var13 = var4;
        var12 = var2;
        var5 = copyDataProperties(var14, var13, var12);
        var9 = _closure1_slot2;
        var8 = var9.useContext;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 3;
        var6 = var7[var4];
        var4 = undefined;
        var6 = var2.bind(var4)(var6);
        var6 = var8.bind(var9)(var6);
        var _closure2_slot1 = var6;
        var11 = var9.useEffect;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                var3 = var1 == var3;
                var1 = undefined;
                var4 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var4 = var3.transitionState;
case 2:
                var3 = 'exiting';
                if(!(var3 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot1;
                var2 = var3.onLeave;
                var2 = var2.bind(var3)();
case 4:
                return var1;
            }
        };
        var6 = var11.bind(var9)(var6, var8);
        var8 = var9.useCallback;
        var6 = new Array(1);
        var6[0] = var10;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 6:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var2 = _closure1_slot3;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var6 = var8.bind(var9)(var3, var6);
        var3 = _closure1_slot4;
        var1 = 5;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var14 = var1;
        var13 = var5;
        var5 = copyDataProperties(var14, var13);
        var5 = 'onClose';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();