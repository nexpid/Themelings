// app/modules/voice_panel/native/controls/useDrawerToggle.tsx
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
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/useDrawerToggle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDrawerToggle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var8 = _closure1_slot3;
            var2 = var8.useContext;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var7 = undefined;
            var1 = var5.bind(var7)(var1);
            var1 = var2.bind(var8)(var1);
            var9 = var1.controlsSpecs;
            var _closure2_slot1 = var9;
            var10 = var1.connected;
            var _closure2_slot2 = var10;
            var11 = var1.dismissPanel;
            var _closure2_slot3 = var11;
            var2 = _closure1_slot0;
            var1 = 3;
            var1 = var6[var1];
            var13 = var2.bind(var7)(var1);
            var2 = var13.useDerivedValue;
            var1 = function l() {
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var2 = var1.mode;
                var1 = _closure1_slot4;
                var1 = var1.DRAWER;
                var1 = var2 === var1;
                return var1;
            };
            var14 = {};
            var14['controlsSpecs'] = var9;
            var15 = _closure1_slot4;
            var14['VoicePanelControlsModes'] = var15;
            var1['__closure'] = var14;
            var14 = 900483810235.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot5;
            var1['__initData'] = var14;
            var2 = var2.bind(var13)(var1);
            var1 = 4;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var2 = var1.bind(var7)(var2);
            var1 = {};
            var1['isDrawerOpen'] = var2;
            var6 = var8.useCallback;
            var5 = new Array(4);
            var5[0] = var12;
            var5[1] = var11;
            var5[2] = var10;
            var5[3] = var9;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var4 = var2.mode;
                    var3 = _closure1_slot4;
                    var3 = var3.DRAWER;
                    if(!(var4 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot0;
                    var3 = {};
                    var5 = 'settings';
                    var3['tab'] = var5;
                    var6 = _closure2_slot2;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.VoicePanelTabAnalyticsSources;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var6.PREJOIN_BUTTON;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var5 = var6.CONNECTED_BUTTON;
case 6:
                    var3['source'] = var5;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 7; continue _fun0002;
case 2:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var4, var5);
            var1['handlePress'] = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.OXW7dL;
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var3 = var3.awDmr/;
            var2 = var4.bind(var5)(var3);
case 10:
            var1['accessibilityLabel'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();