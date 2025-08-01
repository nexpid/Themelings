// app/modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot8 = var7;
    var4 = var4.SystemChannelFlags;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsStickerReplyEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var11 = 8;
            var1 = var2[var11];
            var10 = undefined;
            var12 = var5.bind(var10)(var1);
            var9 = var12.useStateFromStores;
            var1 = _closure1_slot2;
            var8 = new Array(1);
            var8[0] = var1;
            var4 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var4 = var9.bind(var12)(var8, var4, var1);
            var _closure2_slot0 = var4;
            var1 = var3.getChannelId;
            var1 = var1.bind(var3)();
            var _closure2_slot1 = var1;
            var2 = var2[var11];
            var9 = var5.bind(var10)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var5, var1, var2);
            var _closure2_slot2 = var1;
            var2 = null;
            var5 = var2 == var1;
            var13 = undefined;
            if(var5) { _fun0001_ip = 156; continue _fun0001 }
 146:
            var5 = var1.getGuildId;
            var13 = var5.bind(var1)();
 156:
            var _closure2_slot3 = var13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = var8[var11];
            var15 = var9.bind(var10)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = new Array(2);
            var5[0] = var4;
            var5[1] = var13;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var2 = null;
                    var1 = var2 != var1;
                    if(!var1) { _fun0002_ip = 61; continue _fun0002 }
 16:
                    var6 = _closure1_slot4;
                    var5 = var6.getMember;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 58; continue _fun0002 }
 52:
                    var2 = var3.isPending;
 58:
                    var1 = var2;
 61:
                    return var1;
                }
            };
            var4 = var14.bind(var15)(var12, var4, var5);
            var5 = var8[var11];
            var15 = var9.bind(var10)(var5);
            var14 = var15.useStateFromStoresObject;
            var5 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot2;
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0003_ip = 58; continue _fun0003 }
 18:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 7;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.computeIsReadOnlyThread;
                    var4 = _closure2_slot2;
                    var3 = var5.bind(var6)(var4);
 58:
                    var1['isReadOnlyThread'] = var3;
                    var5 = _closure1_slot6;
                    var4 = var5.can;
                    var3 = _closure1_slot8;
                    var3 = var3.SEND_MESSAGES;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['canSendMessages'] = var2;
                    return var1;
                }
            };
            var1 = var14.bind(var15)(var12, var1, var5);
            var5 = var1.isReadOnlyThread;
            var1 = var1.canSendMessages;
            var8 = var8[var11];
            var12 = var9.bind(var10)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var13;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var11.bind(var12)(var9, var7, var8);
            var2 = var2 != var7;
            if(!var2) { _fun0001_ip = 387; continue _fun0001 }
 336:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 9;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.hasFlag;
            var7 = var7.systemChannelFlags;
            var6 = _closure1_slot9;
            var6 = var6.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
            var6 = var8.bind(var9)(var7, var6);
            var2 = !var6;
 387:
            var3 = var3.author;
            var3 = var3.bot;
            if(!var1) { _fun0001_ip = 405; continue _fun0001 }
 402:
            var1 = !var5;
 405:
            if(!var1) { _fun0001_ip = 411; continue _fun0001 }
 408:
            var1 = !var4;
 411:
            if(!var1) { _fun0001_ip = 417; continue _fun0001 }
 414:
            var1 = !var3;
 417:
            if(!var1) { _fun0001_ip = 423; continue _fun0001 }
 420:
            var1 = var2;
 423:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function computeIsStickerReplyEnabled(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg2;
            var2 = arg4;
            var4 = _closure1_slot7;
            var3 = var4.getCurrentUser;
            var5 = var3.bind(var4)();
            var3 = null;
            var4 = var3 != var5;
            if(!var4) { _fun0004_ip = 73; continue _fun0004 }
 31:
            var9 = _closure1_slot4;
            var8 = var9.getMember;
            var6 = var5.id;
            var5 = arg1;
            var5 = var8.bind(var9)(var5, var6);
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 70; continue _fun0004 }
 64:
            var3 = var5.isPending;
 70:
            var4 = var3;
 73:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 7;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.computeIsReadOnlyThread;
            var5 = var3.bind(var5)(var7);
            var6 = _closure1_slot6;
            var3 = var6.can;
            var1 = _closure1_slot8;
            var1 = var1.SEND_MESSAGES;
            var1 = var3.bind(var6)(var1, var7);
            var3 = arg3;
            var3 = var3.author;
            var3 = var3.bot;
            if(!var1) { _fun0004_ip = 153; continue _fun0004 }
 150:
            var1 = !var5;
 153:
            if(!var1) { _fun0004_ip = 159; continue _fun0004 }
 156:
            var1 = !var4;
 159:
            if(!var1) { _fun0004_ip = 165; continue _fun0004 }
 162:
            var1 = !var3;
 165:
            if(!var1) { _fun0004_ip = 171; continue _fun0004 }
 168:
            var1 = var2;
 171:
            return var1;
        }
    };
    var3['computeIsStickerReplyEnabled'] = var2;
    return var1;
})();