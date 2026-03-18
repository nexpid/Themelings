// app/modules/voice_panel/VoicePanelUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/VoicePanelUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isVoicePanelEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var2.bind(var3)(var1);
            var2 = var4.isStageVoicePanelEnabled;
            var1 = 'voice_panel_utils';
            var1 = var2.bind(var4)(var1);
            var1 = !var1;
            var2 = undefined;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = null;
            var5 = var4 == var6;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6.isGuildStageVoice;
            var3 = var5.bind(var6)();
case 4:
            var1 = var4 != var3;
            var2 = var3;
case 2:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            var1 = !var1;
            return var1;
        }
    };
    var3['isVoicePanelEnabled'] = var4;
    var4 = function useIsVoicePanelShowing() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot2;
                var6 = _closure1_slot3;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var4 = _closure1_slot2;
case 8:
                if(!(var6 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var6 = _closure1_slot3;
case 10:
                var2 = var4.getChannel;
                var1 = var6.getChannelId;
                var1 = var1.bind(var6)();
                var4 = var2.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var2 = var4.isGuildStageVoice;
                var2 = var2.bind(var4)();
                var2 = !var2;
                if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 4:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.isStageVoicePanelEnabled;
                var3 = 'voice_panel_utils';
                var2 = var4.bind(var5)(var3);
case 14:
                var1 = var2;
case 12:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsVoicePanelShowing'] = var4;
    var4 = function useIsVoicePanelFullscreen() {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.isVoicePanelFullscreen;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsVoicePanelFullscreen'] = var4;
    var4 = function useIsVoicePanelOpen(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.isChannelOpen;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsVoicePanelOpen'] = var4;
    var4 = function useIsAnyVoicePanelOpen() {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.isAnyVoicePanelOpen;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsAnyVoicePanelOpen'] = var4;
    var2 = function useIsVoicePanelMounted(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.isMounted;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsVoicePanelMounted'] = var2;
    return var1;
})();