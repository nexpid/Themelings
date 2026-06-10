// app/modules/channel/usePrivateChannelWaveEligible.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/usePrivateChannelWaveEligible.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePrivateChannelWaveEligible(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var1 = var2.isDM;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.isSystemDM;
            var3 = var3.bind(var2)();
            var1 = !var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2.rawRecipients;
            var4 = var6.some;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.bot;
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            var1 = !var3;
case 4:
            var3 = null;
            var4 = null;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var2.getRecipientId;
            var4 = var6.bind(var2)();
case 6:
            var _closure2_slot1 = var4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 4;
            var6 = var13[var10];
            var11 = undefined;
            var14 = var12.bind(var11)(var6);
            var9 = var14.useStateFromStores;
            var6 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var6;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                    var4 = _closure1_slot4;
                    var3 = var4.isFriend;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var9 = var9.bind(var14)(var8, var7);
            var7 = var13[var10];
            var14 = var12.bind(var11)(var7);
            var8 = var14.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 5; continue _fun0003 }
case 8:
                    var4 = _closure1_slot4;
                    var3 = var4.isIgnored;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var8 = var8.bind(var14)(var7, var6);
            var6 = var13[var10];
            var15 = var12.bind(var11)(var6);
            var14 = var15.useStateFromStores;
            var16 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var16;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getMessages;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.length;
                    var1 = 1;
                    var1 = var1 === var3;
                    if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var3 = var4.first;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = var4.type;
case 11:
                    var2 = _closure1_slot6;
                    var2 = var2.FRIEND_REQUEST_ACCEPTED;
                    var1 = var3 === var2;
case 9:
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var7, var6);
            var14 = var2.hasFlag;
            var6 = _closure1_slot5;
            var6 = var6.HAS_ONLY_SYSTEM_MESSAGES;
            var6 = var14.bind(var2)(var6);
            var10 = var13[var10];
            var15 = var12.bind(var11)(var10);
            var14 = var15.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var16;
            var5 = function() {
                var3 = _closure1_slot3;
                var2 = var3.hasCurrentUserSentWaveBlockingMessage;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var14.bind(var15)(var10, var5);
            var17 = _closure1_slot1;
            var4 = 5;
            var4 = var13[var4];
            var14 = var17.bind(var11)(var4);
            var10 = var14.extractTimestamp;
            var4 = var2.id;
            var10 = var10.bind(var14)(var4);
            var4 = 6;
            var4 = var13[var4];
            var16 = var12.bind(var11)(var4);
            var15 = var16.isWithinInterval;
            var4 = 7;
            var14 = var13[var4];
            var14 = var17.bind(var11)(var14);
            var14 = var14.bind(var11)();
            var4 = var13[var4];
            var4 = var17.bind(var11)(var4);
            var10 = var4.bind(var11)(var10);
            var4 = 1814400000;
            var4 = var15.bind(var16)(var14, var10, var4);
            var10 = 8;
            var10 = var13[var10];
            var11 = var12.bind(var11)(var10);
            var10 = var11.useStrangerDangerWarning;
            var2 = var2.id;
            var2 = var10.bind(var11)(var2);
            if(!var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var9;
case 13:
            if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = !var8;
case 15:
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = arg2;
            var6 = var3 == var8;
case 19:
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var7;
case 21:
            var1 = var6;
case 17:
            if(!var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var1 = !var5;
case 23:
            if(!var1) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var1 = var4;
case 25:
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var1 = var3 == var2;
case 27:
            return var1;
        }
    };
    var3['usePrivateChannelWaveEligible'] = var2;
    return var1;
})();