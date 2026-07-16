// app/modules/home_drawer/native/useHomeDrawerGuildTyping.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function areHomeDrawerGuildTypingStatesEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.typingChannelId;
            var1 = var2.typingChannelId;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.typingChannelName;
            var4 = var2.typingChannelName;
            var1 = var5 === var4;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.areArraysShallowEqual;
            var3 = var3.typingUserIds;
            var2 = var2.typingUserIds;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = {};
    var4['typingChannelId'] = var1;
    var4['typingChannelName'] = var1;
    var7 = new Array(0);
    var4['typingUserIds'] = var7;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/useHomeDrawerGuildTyping.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHomeDrawerGuildTyping(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 3;
        var3 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var3 = var7.useIsHomeDrawerChannelMuted;
        var7 = var3.bind(var7)();
        var _closure2_slot1 = var7;
        var3 = 4;
        var3 = var6[var3];
        var6 = var5.bind(var4)(var3);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot3;
        var4[1] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var9 = _closure1_slot6;
        var11 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getTypingUsersByGuild;
                var1 = _closure2_slot0;
                var6 = var3.bind(var4)(var1);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.keys;
                var5 = var1.bind(var3)(var6);
                var3 = var5.find;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot3;
                        var2 = var3.getBasicChannel;
                        var1 = arg1;
                        var4 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var4;
                        if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var3 = _closure2_slot1;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var4);
                        var1 = !var2;
case 6:
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var1);
                var7 = null;
                if(!(var7 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = {};
                var1['typingChannelId'] = var3;
                var8 = _closure1_slot3;
                var5 = var8.getChannel;
                var5 = var5.bind(var8)(var3);
                var7 = var7 == var5;
                var4 = undefined;
                if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var4 = var5.name;
case 10:
                var1['typingChannelName'] = var4;
                var4 = global;
                var5 = var4.Object;
                var4 = var5.keys;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var1['typingUserIds'] = var3;
                _fun0002_ip = 12; continue _fun0002;
case 8:
                var1 = _closure1_slot5;
case 12:
                return var1;
            }
        };
        var13 = var6;
        var12 = var4;
        var10 = var3;
        var1 = var13[var5](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['useHomeDrawerGuildTyping'] = var2;
    return var1;
})();