// app/modules/search/native/hooks/useEligibleFilterTokens.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useEligibleFilterTokens(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var6.bind(var3)(var4);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot3;
            var1 = var1.hidePersonalInformation;
            return var1;
        };
        var6 = var6.bind(var7)(var4, var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = var5.type;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = new Array(0);
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 57; continue _fun0001 }
 14:
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_FROM;
                var4 = var5.bind(var1)(var4);
                var4 = var1.push;
                var2 = _closure1_slot4;
                var2 = var2.FILTER_MENTIONS;
                var2 = var4.bind(var1)(var2);
 57:
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_HAS;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot0;
                var5 = var4.type;
                var4 = _closure1_slot5;
                var4 = var4.GUILD;
                if(!(var5 === var4)) { _fun0001_ip = 123; continue _fun0001 }
 103:
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_IN;
                var4 = var5.bind(var1)(var4);
 123:
                var4 = _closure2_slot0;
                var5 = var4.type;
                var4 = _closure1_slot5;
                var4 = var4.GUILD_CHANNEL;
                if(!(var5 === var4)) { _fun0001_ip = 166; continue _fun0001 }
 146:
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_IN;
                var4 = var5.bind(var1)(var4);
 166:
                var3 = _closure2_slot0;
                var4 = var3.type;
                var3 = _closure1_slot5;
                var3 = var3.THREAD;
                if(!(var4 === var3)) { _fun0001_ip = 209; continue _fun0001 }
 189:
                var4 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_IN;
                var3 = var4.bind(var1)(var3);
 209:
                var4 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_ON;
                var3 = var4.bind(var1)(var3);
                var4 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_BEFORE;
                var3 = var4.bind(var1)(var3);
                var3 = var1.push;
                var2 = _closure1_slot4;
                var2 = var2.FILTER_AFTER;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = native3;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SearchTokenTypes;
    var _closure1_slot4 = var8;
    var5 = var5.SearchTypes;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/hooks/useEligibleFilterTokens.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useEligibleFilterTokens'] = var4;
    var2 = function useEligibleFilterTokensSet(arg1) {
        var5 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var5 = var5.bind(var4)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot0;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEligibleFilterTokensSet'] = var2;
    return var1;
})();