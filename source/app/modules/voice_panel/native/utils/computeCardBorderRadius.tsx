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
    var10 = var4.VoicePanelModes;
    var _closure1_slot0 = var10;
    var8 = var4.DEFAULT_BORDER_RADIUS;
    var _closure1_slot1 = var8;
    var9 = var4.DEFAULT_BORDER_RADIUS_PIP;
    var _closure1_slot2 = var9;
    var4 = {};
    var7 = 'function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return DEFAULT_BORDER_RADIUS;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return DEFAULT_BORDER_RADIUS;}';
    var4['code'] = var7;
    var2 = function o(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.id;
            var6 = var1.mode;
            var3 = var1.focused;
            var2 = var1.isSelf;
            var5 = _closure1_slot0;
            var5 = var5.PANEL;
            if(!(var6 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var5 = var5.PIP;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var5 = _closure1_slot2;
case 6:
            return var5;
case 2:
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(var3 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 7:
            var2 = _closure1_slot1;
            return var2;
case 11:
            var1 = _closure1_slot2;
            return var1;
case 9:
            var1 = 0;
            return var1;
        }
    };
    var7 = {};
    var7['VoicePanelModes'] = var10;
    var7['DEFAULT_BORDER_RADIUS_PIP'] = var9;
    var7['DEFAULT_BORDER_RADIUS'] = var8;
    var2['__closure'] = var7;
    var7 = 10862086044187.0;
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