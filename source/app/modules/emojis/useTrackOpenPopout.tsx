// app/modules/emojis/useTrackOpenPopout.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiInteractionPoint;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/useTrackOpenPopout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var4 = var1.emojiId;
        var14 = var1.currentGuildId;
        var3 = var1.popoutData;
        var _closure2_slot0 = var3;
        var3 = var1.nonce;
        var _closure2_slot1 = var3;
        var1 = var1.demoMode;
        var _closure2_slot2 = var1;
        var7 = _closure1_slot3;
        var5 = var7.useRef;
        var1 = {};
        var1['guild_id'] = var14;
        var1['emoji_id'] = var4;
        var9 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 5;
        var8 = var6[var4];
        var4 = undefined;
        var10 = var9.bind(var4)(var8);
        var9 = var10.collectChannelAnalyticsMetadata;
        var12 = _closure1_slot4;
        var11 = var12.getChannel;
        var13 = _closure1_slot5;
        var8 = var13.getChannelId;
        var8 = var8.bind(var13)(var14);
        var8 = var11.bind(var12)(var8);
        var15 = var9.bind(var10)(var8);
        var16 = var1;
        var8 = copyDataProperties(var16, var15);
        var1 = var5.bind(var7)(var1);
        var1 = var1.current;
        var _closure2_slot3 = var1;
        var5 = _closure1_slot1;
        var3 = 6;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.initiateEmojiInteraction;
                var3 = _closure1_slot6;
                var3 = var3.TrackOpenPopoutUsed;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot2;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 8;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var8 = _closure2_slot0;
                var7 = null;
                var9 = var7 == var8;
                var8 = undefined;
                if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var9 = _closure2_slot0;
                var8 = var9.analyticsType;
case 4:
                var9 = var7 != var8;
                var7 = 'Standard Emoji Popout';
                if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var7 = var8;
case 6:
                var2['type'] = var7;
                var7 = _closure2_slot1;
                var2['nonce'] = var7;
                var10 = _closure2_slot3;
                var11 = var2;
                var6 = copyDataProperties(var11, var10);
                var2 = var4.bind(var5)(var3, var2);
case 2:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useTrackOpenPopout'] = var2;
    return var1;
})();