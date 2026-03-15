// app/modules/voice_panel/native/card/VoicePanelCardConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCardConstants.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 165;
    var3['CARD_SIZE'] = var4;
    var4 = 12;
    var3['CALL_TILE_GUTTER'] = var4;
    var3['EDGE_GUTTER'] = var4;
    var4 = function getCallTileGutter() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[0];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = new Array(0);
case 2:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var3 = var1.VOICE_PANEL_GUTTER;
            var2 = var3.resolve;
            var1 = {};
            var1['enabledExperiments'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getCallTileGutter'] = var4;
    var2 = function getEdgeGutter() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arguments[0];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = new Array(0);
case 2:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var3 = var1.VOICE_PANEL_GUTTER;
            var2 = var3.resolve;
            var1 = {};
            var1['enabledExperiments'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getEdgeGutter'] = var2;
    var2 = 0.32;
    var3['CARD_BACKGROUND_OPACITY_ANDROID'] = var2;
    var2 = 0.54;
    var3['VOICE_PANEL_CONTROLS_OPACITY_ANDROID'] = var2;
    var2 = 8;
    var3['VOICE_PANEL_CARD_INNER_PADDING'] = var2;
    return var1;
})();