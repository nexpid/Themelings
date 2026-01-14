// app/modules/frames/native/FrameWebView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/native/FrameWebView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FrameWebView(arg1) {
        var3 = arg1;
        var6 = var3.applicationId;
        var _closure2_slot0 = var6;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['applicationId'] = var1;
        var18 = {};
        var17 = var3;
        var16 = var2;
        var5 = copyDataProperties(var18, var17, var16);
        var2 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 2;
        var7 = var11[var1];
        var4 = undefined;
        var8 = var2.bind(var4)(var7);
        var7 = var8.useHasInvalidUrlErrorState;
        var7 = var7.bind(var8)();
        var9 = var7.hasInvalidUrlError;
        var _closure2_slot1 = var9;
        var8 = var7.setHasInvalidUrlError;
        var7 = var7.hadInvalidUrlError;
        var _closure2_slot2 = var7;
        var15 = _closure1_slot3;
        var14 = var15.useEffect;
        var13 = new Array(3);
        var13[0] = var9;
        var13[1] = var7;
        var13[2] = var6;
        var12 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot2;
                var1 = !var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot0;
                var2 = null;
                var1 = var2 != var3;
case 4:
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.leaveFrame;
                var1 = {};
                var4 = _closure2_slot0;
                var1['applicationId'] = var4;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var12 = var14.bind(var15)(var12, var13);
        var3 = _closure1_slot4;
        var1 = var11[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.BaseActivityWebView;
        var1 = {};
        var11 = function hasFrameId() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.hasFrameId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['hasFrameId'] = var11;
        var11 = function getOrCreateFrameId() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getOrCreateFrameId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['getOrCreateFrameId'] = var11;
        var10 = function releaseFrameId() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.releaseFrameId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['releaseFrameId'] = var10;
        var1['hasInvalidUrlError'] = var9;
        var1['setHasInvalidUrlError'] = var8;
        var1['hadInvalidUrlError'] = var7;
        var1['applicationId'] = var6;
        var18 = var1;
        var17 = var5;
        var5 = copyDataProperties(var18, var17);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();