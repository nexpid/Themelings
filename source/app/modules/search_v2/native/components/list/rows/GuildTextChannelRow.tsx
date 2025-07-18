// app/modules/search_v2/native/components/list/rows/GuildTextChannelRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function GuildTextChannelRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var8 = var5.channel;
            var _closure2_slot0 = var8;
            var7 = var5.trailing;
            var9 = var5.lastMessageId;
            var11 = var5.onPress;
            var _closure2_slot1 = var11;
            var4 = {'channel': 0, 'trailing': 0, 'lastMessageId': 0, 'onPress': 0};
            var3 = null;
            var16 = var4;
            var15 = null;
            var1 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var5;
            var14 = var4;
            var5 = copyDataProperties(var16, var15, var14);
            var4 = undefined;
            var _closure2_slot4 = var4;
            var13 = var8.id;
            var _closure2_slot2 = var13;
            var12 = var8.guild_id;
            var _closure2_slot3 = var12;
            var1 = var3 != var9;
            if(!var1) { _fun0001_ip = 137; continue _fun0001 }
 103:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.extractTimestamp;
            var3 = var1.bind(var6)(var9);
 137:
            _closure2_slot4 = var3;
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var6 = new Array(3);
            var6[0] = var13;
            var6[1] = var12;
            var6[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.renderChannelSubtitle;
                    var1 = {};
                    var7 = _closure2_slot4;
                    var6 = null;
                    var7 = var6 != var7;
                    if(!var7) { _fun0002_ip = 84; continue _fun0002 }
 49:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 5;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.getChannelActiveAgoTimestamp;
                    var7 = _closure2_slot4;
                    var6 = var8.bind(var9)(var7);
 84:
                    var1['subtitle'] = var6;
                    var5 = _closure1_slot4;
                    var1['layout'] = var5;
                    var5 = _closure2_slot2;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot3;
                    var1['guildId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var3, var6);
            var6 = var10.useCallback;
            var12 = var8.id;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var11;
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var6.bind(var10)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var5 = 'subtitle';
            var1[var5] = var9;
            var5 = 'channel';
            var1[var5] = var8;
            var5 = 'trailing';
            var1[var5] = var7;
            var5 = 'onPress';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/list/rows/GuildTextChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();