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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelRiveMicButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.color;
            var7 = var1.muted;
            var4 = _closure1_slot3;
            var3 = _closure1_slot2;
            var2 = {};
            var1 = {'width': 24, 'height': 24, 'pointerEvents': 'none'};
            var2['style'] = var1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.MicrophoneRive;
            var5 = {};
            var9 = {};
            var9['fill'] = var10;
            var11 = !var7;
            var9['on'] = var11;
            var5['dataBinding'] = var9;
            var9 = 'On';
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 'Off';
case 2:
            var5['defaultViewModelInstance'] = var9;
            var9 = _closure1_slot3;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = 5;
            var7 = var12[var7];
            var7 = var11.bind(var1)(var7);
            var8 = var7.MicrophoneIcon;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = 4;
            var7 = var12[var7];
            var7 = var11.bind(var1)(var7);
            var8 = var7.MicrophoneSlashIcon;
case 6:
            var7 = {};
            var7['color'] = var10;
            var7 = var9.bind(var1)(var8, var7);
            var5['fallback'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['VoicePanelRiveMicButton'] = var2;
    return var1;
})();