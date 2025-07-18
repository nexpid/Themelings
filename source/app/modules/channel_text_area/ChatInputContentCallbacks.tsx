// app/modules/channel_text_area/ChatInputContentCallbacks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function areMemberGroupsHydrated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = var4.length;
            var3 = 1;
            var1 = var1 > var3;
            if(var1) { _fun0001_ip = 74; continue _fun0001 }
 18:
            var2 = var4.length;
            var2 = var3 === var2;
            if(!var2) { _fun0001_ip = 49; continue _fun0001 }
 30:
            var3 = 0;
            var3 = var4[var3];
            var5 = var3.type;
            var3 = 'GROUP';
            var2 = var3 === var5;
 49:
            if(!var2) { _fun0001_ip = 71; continue _fun0001 }
 52:
            var3 = 0;
            var3 = var4[var3];
            var4 = var3.id;
            var3 = 'unknown';
            var2 = var3 === var4;
 71:
            var1 = !var2;
 74:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function tryUpdateSubscriptionForHereMention(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var8 = arg3;
            var7 = arg4;
            var2 = _closure1_slot7;
            var3 = _closure1_slot5;
            var1 = var3.getProps;
            var1 = var1.bind(var3)(var8, var7);
            var1 = var1.groups;
            var10 = undefined;
            var2 = var2.bind(var10)(var1);
            var1 = !var2;
            var1 = !var1;
            if(var2) { _fun0002_ip = 174; continue _fun0002 }
 54:
            var3 = var6.length;
            var2 = 5;
            var3 = var3 < var2;
            if(var3) { _fun0002_ip = 81; continue _fun0002 }
 69:
            var5 = var6.length;
            var2 = arg2;
            var3 = var5 > var2;
 81:
            var2 = !var3;
            if(var3) { _fun0002_ip = 171; continue _fun0002 }
 87:
            var5 = var6.indexOf;
            var3 = _closure1_slot6;
            var5 = var5.bind(var6)(var3);
            var3 = -1;
            var3 = var3 !== var5;
            if(!var3) { _fun0002_ip = 168; continue _fun0002 }
 115:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 3;
            var4 = var11[var4];
            var6 = var9.bind(var10)(var4);
            var5 = var6.subscribeChannel;
            var4 = 4;
            var4 = var11[var4];
            var4 = var9.bind(var10)(var4);
            var4 = var4.DEFAULT_RANGES;
            var4 = var5.bind(var6)(var8, var7, var4);
            var3 = true;
 168:
            var2 = var3;
 171:
            var1 = var2;
 174:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = '@here';
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_text_area/ChatInputContentCallbacks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['tryUpdateSubscriptionForHereMention'] = var4;
    var2 = function useHereMentionCallback(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var3 = var3.bind(var1)();
        var _closure2_slot3 = var3;
        var5 = _closure1_slot4;
        var10 = var5.useState;
        var9 = false;
        var10 = var10.bind(var5)(var9);
        var9 = _closure1_slot3;
        var4 = 2;
        var9 = var9.bind(var1)(var10, var4);
        var4 = 0;
        var10 = var9[var4];
        var _closure2_slot4 = var10;
        var4 = 1;
        var4 = var9[var4];
        var _closure2_slot5 = var4;
        var9 = var5.useMemo;
        var4 = new Array(3);
        var4[0] = var3;
        var4[1] = var7;
        var4[2] = var6;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.debounce;
            var3 = {};
            var1 = 500;
            var3['maxWait'] = var1;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = _closure1_slot8;
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var1 = undefined;
                    var11 = arg1;
                    var12 = undefined;
                    var3 = var12[var7](var11, var10, var9, var8, var7);
                    if(!var3) { _fun0003_ip = 47; continue _fun0003 }
 36:
                    var3 = _closure2_slot5;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
 47:
                    return var1;
                }
            };
            var1 = 200;
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var9 = var9.bind(var5)(var3, var4);
        var _closure2_slot6 = var9;
        var4 = var5.useEffect;
        var3 = new Array(5);
        var3[0] = var10;
        var3[1] = var9;
        var3[2] = var8;
        var3[3] = var7;
        var3[4] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = _closure1_slot5;
                var4 = var6.getProps;
                var5 = _closure2_slot1;
                var3 = _closure2_slot2;
                var3 = var4.bind(var6)(var5, var3);
                var4 = var3.groups;
                var3 = null;
                if(!(var3 != var5)) { _fun0004_ip = 100; continue _fun0004 }
 42:
                var3 = _closure1_slot7;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                if(var2) { _fun0004_ip = 100; continue _fun0004 }
 56:
                var2 = _closure2_slot4;
                if(var2) { _fun0004_ip = 100; continue _fun0004 }
 63:
                var4 = _closure2_slot0;
                var3 = var4.addListener;
                var2 = _closure2_slot6;
                var1 = 'text-changed';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var4 = _closure2_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure2_slot6;
                    var1 = 'text-changed';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
 100:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useHereMentionCallback'] = var2;
    return var1;
})();