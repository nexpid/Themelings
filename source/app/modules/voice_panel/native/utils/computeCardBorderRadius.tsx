// app/modules/voice_panel/native/utils/computeCardBorderRadius.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var9 = var4.VoicePanelModes;
    var _closure1_slot0 = var9;
    var8 = var4.DEFAULT_BORDER_RADIUS_PIP;
    var _closure1_slot1 = var8;
    var4 = {};
    var7 = 'function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return defaultBorderRadius;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return defaultBorderRadius;}';
    var4['code'] = var7;
    var2 = function o(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.id;
            var8 = var1.mode;
            var4 = var1.focused;
            var3 = var1.isSelf;
            var2 = var1.defaultBorderRadius;
            var6 = _closure1_slot0;
            var6 = var6.PANEL;
            if(!(var8 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = var6.PIP;
            var6 = var2;
            if(!(var8 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot1;
case 4:
            return var6;
case 2:
            var6 = null;
            if(!(var6 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var4 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 6:
            return var2;
case 10:
            var1 = _closure1_slot1;
            return var1;
case 8:
            var1 = 0;
            return var1;
        }
    };
    var7 = {};
    var7['VoicePanelModes'] = var9;
    var7['DEFAULT_BORDER_RADIUS_PIP'] = var8;
    var2['__closure'] = var7;
    var7 = 10593808953118.0;
    var2['__workletHash'] = var7;
    var2['__initData'] = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/utils/computeCardBorderRadius.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();