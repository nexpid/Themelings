// app/modules/voice_messages/native/useVoiceMessageTooltip.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.hideVoiceMessagesTooltip;
    var _closure1_slot4 = var7;
    var7 = var4.showVoiceMessagesTooltip;
    var _closure1_slot5 = var7;
    var4 = var4.useVoiceMessagesUIStore;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_messages/native/useVoiceMessageTooltip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoiceMessageTooltip() {
        var8 = _closure1_slot2;
        var4 = var8.useRef;
        var3 = null;
        var3 = var4.bind(var8)(var3);
        var5 = _closure1_slot6;
        var6 = undefined;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.showVoiceMessagesTooltip;
            return var1;
        };
        var9 = var5.bind(var6)(var4);
        var _closure2_slot0 = var9;
        var7 = var8.useMemo;
        var5 = new Array(1);
        var5[0] = var9;
        var4 = function() {
            var1 = {};
            var2 = 'top';
            var1['position'] = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.hP6+09;
            var2 = var3.bind(var4)(var2);
            var1['label'] = var2;
            var2 = _closure2_slot0;
            var1['visible'] = var2;
            return var1;
        };
        var5 = var7.bind(var8)(var4, var5);
        var7 = var8.useEffect;
        var4 = new Array(1);
        var4[0] = var9;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                if(var2) { _fun0001_ip = 16; continue _fun0001 }
 12:
                var2 = undefined;
                return var2;
 16:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var5 = undefined;
                var6 = var4.bind(var5)(var3);
                var4 = var6.getKeyboardIsOpen;
                var3 = {};
                var7 = true;
                var3['includeCustomKeyboard'] = var7;
                var3 = var4.bind(var6)(var3);
                var _closure3_slot0 = var3;
                var3 = _closure1_slot3;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = _closure3_slot0;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 4;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.getKeyboardIsOpen;
                        var3 = {};
                        var7 = true;
                        var3['includeCustomKeyboard'] = var7;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0002_ip = 64; continue _fun0002 }
 56:
                        var2 = _closure1_slot4;
                        var2 = var2.bind(var1)();
 64:
                        return var1;
                    }
                };
                var2 = var3.bind(var5)(var2);
                var _closure3_slot1 = var2;
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = 2000;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot2 = var2;
                var1 = function() {
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var3 = _closure3_slot2;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            }
        };
        var1 = var7.bind(var8)(var1, var4);
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 5;
        var1 = var7[var1];
        var4 = var4.bind(var6)(var1);
        var1 = var4.useTooltip;
        var1 = var1.bind(var4)(var3, var5);
        var1 = {};
        var1['tooltipTargetRef'] = var3;
        var2 = _closure1_slot5;
        var1['showVoiceMessagesTooltip'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();