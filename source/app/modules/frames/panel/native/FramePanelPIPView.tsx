// app/modules/frames/panel/native/FramePanelPIPView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FrameLayoutModes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.transitionState;
            var _closure2_slot0 = var5;
            var6 = var2.transitionCleanUp;
            var _closure2_slot1 = var6;
            var8 = undefined;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var _closure2_slot5 = var8;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var10 = var7.bind(var8)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getConnectedFrame;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var10)(var7, var4);
            var _closure2_slot2 = var9;
            var4 = null;
            var7 = var4 == var9;
            var4 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var9.applicationId;
case 2:
            _closure2_slot3 = var4;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var3];
            var12 = var4.bind(var8)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot4;
                    var3 = var4.getPipOrientationLockStateForApp;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var7, var3);
            _closure2_slot4 = var7;
            var3 = 6;
            var3 = var10[var3];
            var4 = var4.bind(var8)(var3);
            var3 = var4.useBaseActivityPanelPIPView;
            var3 = var3.bind(var4)();
            var8 = var3.landscapeSafeAreasConfig;
            _closure2_slot5 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BaseActivityPanelPIPView;
                var1 = {};
                var5 = _closure2_slot0;
                var1['transitionState'] = var5;
                var5 = _closure2_slot1;
                var1['transitionCleanUp'] = var5;
                var5 = _closure2_slot4;
                var1['pipOrientationLockState'] = var5;
                var6 = _closure2_slot2;
                var5 = null;
                var5 = var5 != var6;
                var1['hasActivity'] = var5;
                var6 = _closure1_slot1;
                var5 = 7;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var1['context'] = var5;
                var5 = 8;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = _closure1_slot5;
                var9 = var9.PIP;
                var5['layoutMode'] = var9;
                var8 = _closure1_slot6;
                var5['portraitSafeAreasConfig'] = var8;
                var7 = _closure2_slot5;
                var5['landscapeSafeAreasConfig'] = var7;
                var5 = var4.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/panel/native/FramePanelPIPView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();