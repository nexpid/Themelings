// app/modules/reactions/native/MessageReactions.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = new Array(0);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/MessageReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var14 = var8.channelId;
            var13 = var8.messageId;
            var12 = var8.emoji;
            var2 = var8.reactions;
            var10 = var8.isSelectedBurst;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var10 = false;
 41:
            var6 = {'channelId': 0, 'messageId': 0, 'emoji': 0, 'reactions': 0, 'isSelectedBurst': 0};
            var3 = null;
            var19 = var6;
            var18 = null;
            var5 = silentSetPrototypeOf(var19, var18);
            var7 = 0;
            var19 = {};
            var18 = var8;
            var17 = var6;
            var9 = copyDataProperties(var19, var18, var17);
            var _closure2_slot0 = var4;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 4;
            var5 = var16[var8];
            var11 = var15.bind(var4)(var5);
            var5 = 5;
            var5 = var16[var5];
            var5 = var15.bind(var4)(var5);
            var5 = var5.MESSAGE_REACTIONS;
            var5 = var11.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            var11 = function useMessageReactions(arg1, arg2) {
                var8 = arg1;
                var3 = arg2;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 3;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var3;
                var3 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = _closure1_slot4;
                        var4 = var5.getMessage;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var2 = var4.bind(var5)(var3, var2);
                        var3 = null;
                        if(!(var3 == var2)) { _fun0002_ip = 42; continue _fun0002 }
 36:
                        var1 = _closure1_slot6;
                        _fun0002_ip = 48; continue _fun0002;
 42:
                        var1 = var2.reactions;
 48:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5, var3, var4);
                var _closure3_slot2 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var3 = _closure3_slot2;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.count_details;
                            var2 = null;
                            var4 = var2 == var3;
                            var1 = undefined;
                            if(var4) { _fun0003_ip = 26; continue _fun0003 }
 20:
                            var1 = var3.vote;
 26:
                            var1 = var2 == var1;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var11 = var11.bind(var4)(var14, var13);
            var15 = var11;
            if(!(var3 != var2)) { _fun0001_ip = 171; continue _fun0001 }
 156:
            var3 = var2.length;
            var15 = var11;
            if(!(var3 > var7)) { _fun0001_ip = 171; continue _fun0001 }
 168:
            var15 = var2;
 171:
            var11 = new Array(0);
            _closure2_slot0 = var11;
            var3 = var15.forEach;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var1 = var4.burst_count;
                    var5 = 0;
                    if(!(var1 > var5)) { _fun0004_ip = 25; continue _fun0004 }
 15:
                    var1 = var4.count;
                    if(!(!(var1 > var5))) { _fun0004_ip = 56; continue _fun0004 }
 25:
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var9 = var1;
                    var8 = var4;
                    var6 = copyDataProperties(var9, var8);
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 129; continue _fun0004;
 56:
                    var6 = _closure2_slot0;
                    var3 = var6.push;
                    var2 = {};
                    var9 = var2;
                    var8 = var4;
                    var7 = copyDataProperties(var9, var8);
                    var7 = 'count';
                    var2[var7] = var5;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var9 = var1;
                    var8 = var4;
                    var4 = copyDataProperties(var9, var8);
                    var4 = 'burst_count';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var15)(var2);
            var2 = var11.sort;
            var1 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    var2 = var1.burst_count;
                    var4 = 0;
                    if(!(!(var2 > var4))) { _fun0005_ip = 26; continue _fun0005 }
 18:
                    var2 = var1.count;
                    _fun0005_ip = 32; continue _fun0005;
 26:
                    var2 = var1.burst_count;
 32:
                    var1 = var3.burst_count;
                    if(!(!(var1 > var4))) { _fun0005_ip = 50; continue _fun0005 }
 42:
                    var1 = var3.count;
                    _fun0005_ip = 56; continue _fun0005;
 50:
                    var1 = var3.burst_count;
 56:
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var1 = var2.bind(var11)(var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var5 = var11.length;
            if(!(!(var5 > var7))) { _fun0001_ip = 296; continue _fun0001 }
 256:
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 6;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.MessageReactionsEmpty;
            var5 = {};
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 367; continue _fun0001;
 296:
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 6;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.MessageReactionsContent;
            var6 = {};
            var6['channelId'] = var14;
            var6['messageId'] = var13;
            var6['emoji'] = var12;
            var6['reactions'] = var11;
            var6['isSelectedBurst'] = var10;
            var19 = var6;
            var18 = var9;
            var9 = copyDataProperties(var19, var18);
            var5 = var8.bind(var4)(var7, var6);
 367:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();