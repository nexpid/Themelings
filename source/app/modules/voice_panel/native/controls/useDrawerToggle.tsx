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
            var14 = arg1;
            var _closure2_slot0 = var14;
            var11 = _closure1_slot3;
            var2 = var11.useContext;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var8 = undefined;
            var1 = var6.bind(var8)(var1);
            var1 = var2.bind(var11)(var1);
            var12 = var1.controlsSpecs;
            var _closure2_slot1 = var12;
            var2 = var1.connected;
            var _closure2_slot2 = var2;
            var13 = var1.dismissPanel;
            var _closure2_slot3 = var13;
            var3 = _closure1_slot0;
            var1 = 3;
            var1 = var7[var1];
            var9 = var3.bind(var8)(var1);
            var3 = var9.useDerivedValue;
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
            var10 = {};
            var10['controlsSpecs'] = var12;
            var15 = _closure1_slot4;
            var10['VoicePanelControlsModes'] = var15;
            var1['__closure'] = var10;
            var10 = 900483810235.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot5;
            var1['__initData'] = var10;
            var9 = var3.bind(var9)(var1);
            var1 = 4;
            var3 = var7[var1];
            var3 = var6.bind(var8)(var3);
            var3 = var3.bind(var8)(var9);
            var10 = var11.useCallback;
            var9 = new Array(4);
            var9[0] = var14;
            var9[1] = var13;
            var9[2] = var2;
            var9[3] = var12;
            var5 = function() {
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
            var5 = var10.bind(var11)(var5, var9);
            var1 = var7[var1];
            var1 = var6.bind(var8)(var1);
            var2 = var1.bind(var8)(var2);
            var1 = {};
            var1['isDrawerOpen'] = var3;
            var1['handlePress'] = var5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.OXW7dL;
            var3 = var5.bind(var6)(var3);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var4 = var4.awDmr/;
            var3 = var5.bind(var6)(var4);
case 10:
            var1['accessibilityLabel'] = var3;
            var2 = !var2;
            var1['ariaHidden'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();