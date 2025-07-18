// app/modules/voice_panel/VoicePanelUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/VoicePanelUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isVoicePanelEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0001_ip = 24; continue _fun0001 }
 14:
            var3 = var4.isGuildStageVoice;
            var2 = var3.bind(var4)();
 24:
            var1 = var1 == var2;
            if(var1) { _fun0001_ip = 34; continue _fun0001 }
 31:
            var1 = !var2;
 34:
            return var1;
        }
    };
    var3['isVoicePanelEnabled'] = var4;
    var4 = function useIsVoicePanelShowing() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
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
 0:
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = undefined;
                if(!(var3 === var2)) { _fun0002_ip = 21; continue _fun0002 }
 17:
                var3 = _closure1_slot2;
 21:
                if(!(var4 === var2)) { _fun0002_ip = 29; continue _fun0002 }
 25:
                var4 = _closure1_slot3;
 29:
                var2 = var3.getChannel;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0002_ip = 71; continue _fun0002 }
 58:
                var2 = var3.isGuildStageVoice;
                var2 = var2.bind(var3)();
                var1 = !var2;
 71:
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