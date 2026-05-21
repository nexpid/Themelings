// app/modules/favorites/useFavoriteGuildUnreads.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/useFavoriteGuildUnreads.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoriteGuildUnreads(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(7);
        var2[0] = var6;
        var6 = _closure1_slot5;
        var2[1] = var6;
        var6 = _closure1_slot6;
        var2[2] = var6;
        var6 = _closure1_slot4;
        var2[3] = var6;
        var6 = _closure1_slot7;
        var2[4] = var6;
        var6 = _closure1_slot8;
        var2[5] = var6;
        var5 = _closure1_slot9;
        var2[6] = var5;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.keys;
            var2 = _closure2_slot0;
            var4 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var7 = var3;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot0 = var2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var12 = var2.bind(var3)(var5);
                    var2 = null;
                    var3 = var2 == var12;
                    var4 = undefined;
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = var12.getGuildId;
                    var4 = var3.bind(var12)();
case 2:
                    var6 = _closure1_slot8;
                    var3 = var6.getMentionCount;
                    var11 = var3.bind(var6)(var5);
                    var6 = _closure3_slot0;
                    var3 = var6.has;
                    var3 = var3.bind(var6)(var5);
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure3_slot0;
                    var3 = var6.add;
                    var3 = var3.bind(var6)(var5);
                    var3 = var1.badge;
                    var3 = var3 + var11;
                    var1['badge'] = var3;
case 4:
                    var3 = var1.unread;
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var9 = _closure1_slot8;
                    var6 = var9.hasUnread;
                    var6 = var6.bind(var9)(var5);
                    if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var10 = _closure1_slot6;
                    var9 = var10.shouldCountChannelUnread;
                    var6 = var9.bind(var10)(var12, var11);
case 8:
                    var3 = var6;
case 6:
                    var1['unread'] = var3;
                    if(!(var2 != var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = _closure1_slot3;
                    var2 = var3.getActiveJoinedRelevantThreadsForParent;
                    var2 = var2.bind(var3)(var4, var5);
                    var5 = var2;
                    for(var2 in var5)
case 12:
                    {
case 13:
                        var12 = var2;
                        var10 = _closure1_slot8;
                        var9 = var10.getMentionCount;
                        var14 = var9.bind(var10)(var12);
                        var10 = _closure3_slot0;
                        var9 = var10.has;
                        var9 = var9.bind(var10)(var12);
                        if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                        var10 = _closure3_slot0;
                        var9 = var10.add;
                        var9 = var9.bind(var10)(var12);
                        var9 = var1.badge;
                        var9 = var9 + var14;
                        var1['badge'] = var9;
case 14:
                        var10 = _closure1_slot5;
                        var9 = var10.getChannel;
                        var13 = var9.bind(var10)(var12);
                        var9 = var1.unread;
                        if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                        var11 = _closure1_slot8;
                        var10 = var11.hasUnread;
                        var10 = var10.bind(var11)(var12);
                        if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                        var12 = _closure1_slot6;
                        var11 = var12.shouldCountChannelUnread;
                        var10 = var11.bind(var12)(var13, var14);
case 18:
                        var9 = var10;
case 16:
                        var1['unread'] = var9;
                        _fun0001_ip = 12; continue _fun0001;
                    }
case 10:
                    return var1;
                }
            };
            var1 = {'badge': 0, 'unread': false};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();