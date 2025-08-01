// app/modules/channel_list_v2/native/unread_bars/useChannelsUnreadBarsDataFlashList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function hasMention(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.kind;
            var2 = 'channel';
            if(!(var2 !== var3)) { _fun0001_ip = 24; continue _fun0001 }
 16:
            var3 = var1.threadId;
            _fun0001_ip = 34; continue _fun0001;
 24:
            var1 = var1.channel;
            var3 = var1.id;
 34:
            var2 = _closure1_slot8;
            var1 = var2.getMentionCount;
            var2 = var1.bind(var2)(var3);
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildVocalChannelType;
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
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot10 = var4;
    var4 = {'top': null, 'bottom': null};
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/unread_bars/useChannelsUnreadBarsDataFlashList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelsUnreadBarsDataFlashList(arg1) {
        var1 = arg1;
        var7 = var1.guildId;
        var _closure2_slot0 = var7;
        var13 = var1.data;
        var _closure2_slot1 = var13;
        var14 = var1.viewableIndices;
        var _closure2_slot2 = var14;
        var9 = var1.selectedChannelId;
        var _closure2_slot3 = var9;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 8;
        var3 = var6[var4];
        var8 = undefined;
        var12 = var5.bind(var8)(var3);
        var11 = var12.useStateFromStores;
        var3 = _closure1_slot9;
        var10 = new Array(1);
        var10[0] = var3;
        var3 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getMutedChannels;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var12 = var11.bind(var12)(var10, var3);
        var _closure2_slot4 = var12;
        var3 = 9;
        var3 = var6[var3];
        var11 = var5.bind(var8)(var3);
        var10 = var11.useShouldUseNewNotificationSystem;
        var3 = 'ChannelsUnreadBarsData';
        var3 = var10.bind(var11)(var3);
        var _closure2_slot5 = var3;
        var10 = var6[var4];
        var16 = var5.bind(var8)(var10);
        var15 = var16.useStateFromStores;
        var10 = _closure1_slot5;
        var11 = new Array(1);
        var11[0] = var10;
        var10 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getMutedThreads;
            var1 = var1.bind(var2)();
            return var1;
        };
        var11 = var15.bind(var16)(var11, var10);
        var _closure2_slot6 = var11;
        var4 = var6[var4];
        var10 = var5.bind(var8)(var4);
        var6 = var10.useStateFromStores;
        var4 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getGuildUnreadsSentinel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = var6.bind(var10)(var5, var4);
        var5 = _closure1_slot4;
        var6 = var5.useRef;
        var4 = {};
        var4['guildId'] = var7;
        var15 = false;
        var4['hasComputed'] = var15;
        var4 = var6.bind(var5)(var4);
        var _closure2_slot7 = var4;
        var6 = var5.useCallback;
        var4 = new Array(8);
        var4[0] = var14;
        var4[1] = var13;
        var4[2] = var12;
        var4[3] = var11;
        var4[4] = var10;
        var4[5] = var9;
        var4[6] = var3;
        var4[7] = var7;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot7;
                var3 = var1.current;
                var2 = _closure2_slot0;
                var3['guildId'] = var2;
                var1 = var1.current;
                var20 = true;
                var1['hasComputed'] = var20;
                var1 = _closure2_slot2;
                var1 = var1.length;
                var19 = 0;
                if(!(var19 !== var1)) { _fun0002_ip = 890; continue _fun0002 }
 53:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var5 = var4[var2];
                var18 = undefined;
                var7 = var3.bind(var18)(var5);
                var6 = var7.memoize;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var8 = _closure2_slot4;
                        var5 = _closure2_slot6;
                        var7 = _closure2_slot5;
                        var3 = var2.kind;
                        var1 = 'thread';
                        if(!(var1 !== var3)) { _fun0003_ip = 179; continue _fun0003 }
 34:
                        var6 = _closure1_slot6;
                        var1 = var2.channel;
                        var1 = var1.type;
                        var4 = undefined;
                        var1 = var6.bind(var4)(var1);
                        if(var1) { _fun0003_ip = 168; continue _fun0003 }
 61:
                        var6 = var8.has;
                        var1 = var2.channel;
                        var1 = var1.id;
                        var6 = var6.bind(var8)(var1);
                        var1 = false;
                        if(var6) { _fun0003_ip = 255; continue _fun0003 }
 89:
                        var9 = _closure1_slot8;
                        var8 = var9.hasUnread;
                        var6 = var2.channel;
                        var6 = var6.id;
                        var8 = var8.bind(var9)(var6);
                        var6 = var8;
                        if(!var7) { _fun0003_ip = 163; continue _fun0003 }
 120:
                        var7 = var8;
                        if(!var8) { _fun0003_ip = 160; continue _fun0003 }
 126:
                        var10 = _closure1_slot9;
                        var9 = var10.resolveUnreadSetting;
                        var8 = var2.channel;
                        var9 = var9.bind(var10)(var8);
                        var8 = _closure1_slot10;
                        var8 = var8.ALL_MESSAGES;
                        var7 = var9 === var8;
 160:
                        var6 = var7;
 163:
                        var1 = var6;
                        _fun0003_ip = 255; continue _fun0003;
 168:
                        var3 = _closure1_slot12;
                        var1 = var3.bind(var4)(var2);
                        _fun0003_ip = 255; continue _fun0003;
 179:
                        var4 = var5.has;
                        var3 = var2.threadId;
                        var3 = var4.bind(var5)(var3);
                        var1 = false;
                        if(var3) { _fun0003_ip = 255; continue _fun0003 }
 200:
                        var5 = _closure1_slot7;
                        var3 = var5.getChannel;
                        var2 = var2.threadId;
                        var3 = var3.bind(var5)(var2);
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0003_ip = 252; continue _fun0003 }
 232:
                        var5 = _closure1_slot8;
                        var4 = var5.hasUnread;
                        var3 = var3.id;
                        var2 = var4.bind(var5)(var3);
 252:
                        var1 = var2;
 255:
                        return var1;
                    }
                };
                var17 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var4 = var3.bind(var18)(var2);
                var3 = var4.memoize;
                var2 = _closure1_slot12;
                var16 = var3.bind(var4)(var2);
                var2 = _closure2_slot1;
                var2 = var2.length;
                var7 = var19 < var2;
                var6 = -1;
                var13 = true;
                var12 = false;
                var11 = false;
                var10 = var6;
                var9 = var10;
                var8 = 0;
                var3 = true;
                var4 = false;
                var2 = false;
                var15 = var9;
                var14 = var15;
                if(!var7) { _fun0002_ip = 357; continue _fun0002 }
 173:
                var7 = _closure2_slot1;
                var30 = var7[var8];
                var29 = var16.bind(var18)(var30);
                var7 = var13;
                if(!var13) { _fun0002_ip = 195; continue _fun0002 }
 192:
                var7 = var29;
 195:
                if(!var7) { _fun0002_ip = 200; continue _fun0002 }
 198:
                var13 = false;
 200:
                var23 = _closure2_slot2;
                var22 = var23.includes;
                var7 = var30.index;
                var7 = var22.bind(var23)(var7);
                var26 = var13;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var9;
                if(!var7) { _fun0002_ip = 308; continue _fun0002 }
 237:
                var27 = var10;
                if(!(var6 === var10)) { _fun0002_ip = 249; continue _fun0002 }
 244:
                var27 = var30.index;
 249:
                var28 = var30.index;
                var7 = var9;
                if(!(var28 > var9)) { _fun0002_ip = 266; continue _fun0002 }
 261:
                var7 = var30.index;
 266:
                var28 = !var12;
                if(var12) { _fun0002_ip = 277; continue _fun0002 }
 272:
                var28 = var17.bind(var18)(var30);
 277:
                if(!var28) { _fun0002_ip = 282; continue _fun0002 }
 280:
                var12 = true;
 282:
                var28 = !var11;
                if(var11) { _fun0002_ip = 291; continue _fun0002 }
 288:
                var28 = var29;
 291:
                if(!var28) { _fun0002_ip = 296; continue _fun0002 }
 294:
                var11 = true;
 296:
                var24 = var11;
                var25 = var12;
                var23 = var27;
                var22 = var7;
 308:
                var8 = var8 + 1;
                var7 = _closure2_slot1;
                var7 = var7.length;
                var12 = var25;
                var11 = var24;
                var10 = var23;
                var9 = var22;
                var13 = var26;
                var3 = var13;
                var4 = var12;
                var2 = var11;
                var15 = var10;
                var14 = var9;
                if(var8 < var7) { _fun0002_ip = 173; continue _fun0002 }
 357:
                if(!(var6 !== var15)) { _fun0002_ip = 884; continue _fun0002 }
 364:
                if(!(var6 !== var14)) { _fun0002_ip = 884; continue _fun0002 }
 371:
                if(!var4) { _fun0002_ip = 386; continue _fun0002 }
 374:
                if(var3) { _fun0002_ip = 878; continue _fun0002 }
 380:
                if(var2) { _fun0002_ip = 878; continue _fun0002 }
 386:
                var2 = _closure2_slot1;
                var2 = var2.length;
                var22 = var19 < var2;
                var3 = null;
                var13 = 'thread';
                var12 = null;
                var11 = null;
                var10 = false;
                var7 = false;
                var19 = 0;
                var4 = undefined;
                var2 = undefined;
                var9 = null;
                var6 = null;
                var8 = false;
                var5 = false;
                if(!var22) { _fun0002_ip = 810; continue _fun0002 }
 433:
                var22 = _closure2_slot1;
                var29 = var22[var19];
                var22 = var29.kind;
                if(!(var13 !== var22)) { _fun0002_ip = 470; continue _fun0002 }
 450:
                var22 = var29.channel;
                var23 = var22.id;
                var22 = _closure2_slot3;
                var28 = var23 === var22;
                _fun0002_ip = 484; continue _fun0002;
 470:
                var23 = var29.threadId;
                var22 = _closure2_slot3;
                var28 = var23 === var22;
 484:
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var7;
                var27 = var4;
                var26 = var2;
                if(var28) { _fun0002_ip = 716; continue _fun0002 }
 508:
                var28 = var29.index;
                if(!(var28 < var15)) { _fun0002_ip = 528; continue _fun0002 }
 517:
                var28 = var17.bind(var18)(var29);
                if(var28) { _fun0002_ip = 651; continue _fun0002 }
 528:
                var28 = var29.index;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var7;
                var27 = var4;
                var26 = var2;
                if(!(var28 > var14)) { _fun0002_ip = 716; continue _fun0002 }
 558:
                var28 = var17.bind(var18)(var29);
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var7;
                var27 = var4;
                var26 = var2;
                if(!var28) { _fun0002_ip = 716; continue _fun0002 }
 587:
                var28 = var16.bind(var18)(var29);
                var31 = var3 == var11;
                if(var31) { _fun0002_ip = 602; continue _fun0002 }
 599:
                var31 = var28;
 602:
                var30 = var11;
                if(!var31) { _fun0002_ip = 611; continue _fun0002 }
 608:
                var30 = var29;
 611:
                var25 = var12;
                var24 = var30;
                var23 = var10;
                var22 = var7;
                var27 = var4;
                var26 = var28;
                if(!var26) { _fun0002_ip = 716; continue _fun0002 }
 632:
                var25 = var12;
                var24 = var30;
                var23 = var10;
                var22 = true;
                var27 = var4;
                var26 = var28;
                _fun0002_ip = 716; continue _fun0002;
 651:
                var28 = var16.bind(var18)(var29);
                var30 = var3 != var12;
                if(!var30) { _fun0002_ip = 666; continue _fun0002 }
 663:
                var30 = !var28;
 666:
                if(!var30) { _fun0002_ip = 672; continue _fun0002 }
 669:
                var30 = var10;
 672:
                if(var30) { _fun0002_ip = 678; continue _fun0002 }
 675:
                var12 = var29;
 678:
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var7;
                var27 = var28;
                var26 = var2;
                if(!var28) { _fun0002_ip = 716; continue _fun0002 }
 699:
                var25 = var12;
                var24 = var11;
                var23 = true;
                var22 = var7;
                var27 = var28;
                var26 = var2;
 716:
                var28 = var19 + 1;
                var29 = _closure2_slot1;
                var29 = var29.length;
                var9 = var25;
                var6 = var24;
                var8 = var23;
                var5 = var22;
                if(!(var28 < var29)) { _fun0002_ip = 810; continue _fun0002 }
 744:
                var12 = var25;
                var11 = var24;
                var10 = var23;
                var7 = var22;
                var19 = var28;
                var4 = var27;
                var2 = var26;
                if(!var23) { _fun0002_ip = 433; continue _fun0002 }
 771:
                var12 = var25;
                var11 = var24;
                var10 = var23;
                var7 = var22;
                var19 = var28;
                var4 = var27;
                var2 = var26;
                var9 = var12;
                var6 = var11;
                var8 = var10;
                var5 = var7;
                if(!var5) { _fun0002_ip = 433; continue _fun0002 }
 810:
                var2 = {};
                var7 = var3 != var9;
                var4 = null;
                if(!var7) { _fun0002_ip = 840; continue _fun0002 }
 821:
                var7 = {};
                var9 = var9.index;
                var7['index'] = var9;
                var7['isMention'] = var8;
                var4 = var7;
 840:
                var2['top'] = var4;
                var4 = var3 != var6;
                var3 = null;
                if(!var4) { _fun0002_ip = 872; continue _fun0002 }
 853:
                var4 = {};
                var6 = var6.index;
                var4['index'] = var6;
                var4['isMention'] = var5;
                var3 = var4;
 872:
                var2['bottom'] = var3;
                return var2;
 878:
                var2 = _closure1_slot11;
                return var2;
 884:
                var1 = _closure1_slot11;
                return var1;
 890:
                var1 = {'top': null, 'bottom': null};
                return var1;
            }
        };
        var3 = var6.bind(var5)(var3, var4);
        var _closure2_slot8 = var3;
        var6 = var5.useState;
        var4 = function() {
            var2 = _closure2_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var6 = var6.bind(var5)(var4);
        var4 = _closure1_slot3;
        var1 = 2;
        var6 = var4.bind(var8)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot9 = var4;
        var6 = var5.useCallback;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure2_slot9;
            var2 = _closure2_slot8;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var6.bind(var5)(var3, var4);
        var _closure2_slot10 = var6;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = _closure2_slot7;
                var3 = var3.current;
                var3 = var3.guildId;
                if(!(var4 !== var3)) { _fun0004_ip = 54; continue _fun0004 }
 27:
                var4 = _closure2_slot7;
                var3 = {};
                var5 = _closure2_slot0;
                var3['guildId'] = var5;
                var5 = false;
                var3['hasComputed'] = var5;
                var4['current'] = var3;
 54:
                var3 = _closure2_slot7;
                var3 = var3.current;
                var3 = var3.hasComputed;
                if(var3) { _fun0004_ip = 84; continue _fun0004 }
 72:
                var3 = _closure2_slot10;
                var2 = undefined;
                var3 = var3.bind(var2)();
                return var2;
 84:
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = 50;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useChannelsUnreadBarsDataFlashList'] = var2;
    return var1;
})();