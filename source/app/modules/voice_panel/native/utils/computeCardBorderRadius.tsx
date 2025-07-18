// app/modules/voice_panel/native/utils/computeCardBorderRadius.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var1 = arg1;
            var4 = var1.id;
            var6 = var1.mode;
            var3 = var1.focused;
            var2 = var1.isSelf;
            var5 = _closure1_slot0;
            var5 = var5.PANEL;
            if(!(var6 !== var5)) { _fun0001_ip = 68; continue _fun0001 }
 42:
            var5 = _closure1_slot0;
            var5 = var5.PIP;
            if(!(var6 !== var5)) { _fun0001_ip = 62; continue _fun0001 }
 56:
            var5 = _closure1_slot1;
            _fun0001_ip = 66; continue _fun0001;
 62:
            var5 = _closure1_slot2;
 66:
            return var5;
 68:
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 81; continue _fun0001 }
 74:
            if(!(var3 !== var4)) { _fun0001_ip = 93; continue _fun0001 }
 78:
            if(var2) { _fun0001_ip = 87; continue _fun0001 }
 81:
            var2 = _closure1_slot1;
            return var2;
 87:
            var1 = _closure1_slot2;
            return var1;
 93:
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