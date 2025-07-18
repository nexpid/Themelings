// app/modules/hub/HubUnreadUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/HubUnreadUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHubUnreadCount(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var7 = null;
                if(!(var7 != var2)) { _fun0001_ip = 174; continue _fun0001 }
 18:
                var6 = _closure1_slot4;
                var5 = var6.ackMessageId;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var5.bind(var6)(var3);
                var _closure3_slot0 = var3;
                if(!(var7 != var3)) { _fun0001_ip = 170; continue _fun0001 }
 53:
                var3 = global;
                var6 = var3.Object;
                var5 = var6.values;
                var9 = _closure1_slot3;
                var8 = var9.getDirectoryEntries;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var4 = var8.bind(var9)(var4);
                if(!(var7 == var4)) { _fun0001_ip = 96; continue _fun0001 }
 94:
                var4 = {};
 96:
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var1 = function(arg1) {
                    var1 = global;
                    var3 = var1.Date;
                    var1 = arg1;
                    var5 = var1.createdAt;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.getTime;
                    var2 = var1.bind(var2)();
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.extractTimestamp;
                    var1 = _closure3_slot0;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 > var1;
                    return var1;
                };
                var1 = var4.bind(var5)(var1);
                var4 = var3.Math;
                var3 = var4.min;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.MAX_CATEGORY_SERVERS;
                var1 = var1.length;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
 170:
                var1 = 0;
                return var1;
 174:
                var1 = 0;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useHubUnreadCount'] = var2;
    return var1;
})();