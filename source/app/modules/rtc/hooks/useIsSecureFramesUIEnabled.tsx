// app/modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.END_TO_END_ENCRYPTION_DISABLED;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsSecureFramesUIEnabled(arg1) {
        var2 = arg1;
        var6 = var2.channelId;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var9 = _closure2_slot0;
                var1 = _closure1_slot3;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot2;
                var2[1] = var1;
                var4 = undefined;
                if(!(var2 === var4)) { _fun0001_ip = 59; continue _fun0001 }
 36:
                var5 = _closure1_slot3;
                var1 = new Array(2);
                var1[0] = var5;
                var5 = _closure1_slot2;
                var1[1] = var5;
                var2 = var1;
 59:
                var5 = var2;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var7 = var5().value;
                var2 = var1;
                var2 = var2 === var4;
                var6 = undefined;
                if(var2) { _fun0001_ip = 84; continue _fun0001 }
 81:
                var6 = var7;
 84:
                var8 = undefined;
                if(var2) { _fun0001_ip = 114; continue _fun0001 }
 89:
                var7 = var5().value;
                var5 = var1;
                var5 = var5 === var4;
                var8 = undefined;
                var2 = var5;
                if(var5) { _fun0001_ip = 114; continue _fun0001 }
 108:
                var8 = var7;
                var2 = var5;
 114:
                if(var2) { _fun0001_ip = 120; continue _fun0001 }
 117:
                var1.return();
 120:
                var2 = null;
                var5 = var2 == var9;
                var1 = false;
                if(var5) { _fun0001_ip = 224; continue _fun0001 }
 131:
                var5 = var6.getChannelId;
                var5 = var5.bind(var6)();
                var1 = false;
                if(!(var5 === var9)) { _fun0001_ip = 224; continue _fun0001 }
 147:
                var5 = var8.getChannel;
                var8 = var5.bind(var8)(var9);
                var5 = var2 == var8;
                var1 = false;
                if(var5) { _fun0001_ip = 224; continue _fun0001 }
 166:
                var5 = var8.isGuildStageVoice;
                var5 = var5.bind(var8)();
                var1 = false;
                if(var5) { _fun0001_ip = 224; continue _fun0001 }
 181:
                var5 = var6.getSecureFramesState;
                var5 = var5.bind(var6)();
                var6 = var2 == var5;
                var4 = undefined;
                if(var6) { _fun0001_ip = 206; continue _fun0001 }
 200:
                var4 = var5.version;
 206:
                var2 = var2 != var4;
                if(!var2) { _fun0001_ip = 221; continue _fun0001 }
 213:
                var3 = _closure1_slot4;
                var2 = var4 !== var3;
 221:
                var1 = var2;
 224:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsSecureFramesUIEnabled'] = var2;
    return var1;
})();