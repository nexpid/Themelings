// app/modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelRiveMicButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.color;
            var8 = var1.muted;
            var4 = _closure1_slot3;
            var3 = _closure1_slot2;
            var2 = {};
            var5 = {'width': 24, 'height': 24, 'pointerEvents': 'none'};
            var2['style'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.MicrophoneRive;
            var5 = {};
            var7 = {};
            var7['fill'] = var9;
            var9 = !var8;
            var7['on'] = var9;
            var5['dataBinding'] = var7;
            var7 = 'On';
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'Off';
case 2:
            var5['defaultViewModelInstance'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['VoicePanelRiveMicButton'] = var2;
    return var1;
})();