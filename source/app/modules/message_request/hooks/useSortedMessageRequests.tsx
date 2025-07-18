// app/modules/message_request/hooks/useSortedMessageRequests.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useSortedMessageRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSortedMessageRequests() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 4;
        var6 = var7[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var6);
        var10 = var11.useStateFromStores;
        var8 = _closure1_slot3;
        var9 = new Array(1);
        var9[0] = var8;
        var6 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getPrivateChannelsVersion;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var10.bind(var11)(var9, var6);
        var9 = var7[var3];
        var11 = var5.bind(var4)(var9);
        var10 = var11.useStateFromStoresArray;
        var9 = new Array(2);
        var9[0] = var8;
        var8 = _closure1_slot5;
        var9[1] = var8;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var4 = _closure1_slot3;
            var3 = var4.getMutablePrivateChannels;
            var3 = var3.bind(var4)();
            var _closure3_slot0 = var3;
            var3 = global;
            var5 = var3.Array;
            var4 = var5.from;
            var6 = _closure1_slot5;
            var3 = var6.getMessageRequestChannelIds;
            var3 = var3.bind(var6)();
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var3 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var2 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.sortChannelIds;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var6 = var10.bind(var11)(var9, var6, var8);
        var _closure2_slot0 = var6;
        var3 = var7[var3];
        var8 = var5.bind(var4)(var3);
        var7 = var8.useStateFromStoresObject;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() {
            var1 = {};
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var4 = _closure1_slot4;
                    var3 = var4.getUser;
                    var5 = var1.recipients;
                    var2 = 0;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 55; continue _fun0001 }
 39:
                    var2 = _closure3_slot0;
                    var1 = var1.id;
                    var2[var1] = var3;
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var7.bind(var8)(var5, var3, var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['channel'] = var2;
                var3 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3[var2];
                var1['user'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();