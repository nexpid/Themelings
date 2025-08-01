// app/modules/voice_panel/native/VoicePanelAccessibilityView.tsx
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
    var8 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelPIPModes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var7 = var8.memo;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AccessibilityViewAnimated;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/VoicePanelAccessibilityView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelAccessibilityView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var12 = var3.style;
            var11 = var3.pointerEvents;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 26; continue _fun0001 }
 20:
            var11 = 'box-none';
 26:
            var10 = var3.nativeID;
            var7 = var3.accessibilityViewIsModal;
            var6 = var3.onAccessibilityEscape;
            var2 = {'style': 0, 'pointerEvents': 0, 'nativeID': 0, 'accessibilityViewIsModal': 0, 'onAccessibilityEscape': 0};
            var14 = null;
            var15 = var2;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var3;
            var13 = var2;
            var5 = copyDataProperties(var15, var14, var13);
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePIPState;
            var9 = var1.bind(var2)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var12;
            var1['pointerEvents'] = var11;
            var1['nativeID'] = var10;
            if(!var7) { _fun0001_ip = 158; continue _fun0001 }
 139:
            var9 = var9.mode;
            var8 = _closure1_slot2;
            var8 = var8.IN_APP;
            var7 = var9 !== var8;
 158:
            var1['accessibilityViewIsModal'] = var7;
            var1['onAccessibilityEscape'] = var6;
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();