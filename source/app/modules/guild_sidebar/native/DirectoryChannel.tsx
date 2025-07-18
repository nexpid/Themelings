// app/modules/guild_sidebar/native/DirectoryChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.CHANNEL_MARGIN_VERTICAL;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['marginVertical'] = var11;
    var11 = 8;
    var10['marginHorizontal'] = var11;
    var11 = 7;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10['borderRadius'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var4 = var1.selectedChannelId;
            var7 = var1.selected;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var1 = _closure1_slot8;
            var9 = var1.bind(var5)();
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var11 = var8.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot4;
            var8 = new Array(2);
            var8[0] = var1;
            var1 = _closure1_slot5;
            var8[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getDirectoryChannelIds;
                    var1 = _closure2_slot0;
                    var5 = var2.bind(var4)(var1);
                    var4 = var5.length;
                    var2 = 0;
                    var1 = null;
                    if(!(var2 !== var4)) { _fun0002_ip = 56; continue _fun0002 }
 38:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var1);
            var1 = null;
            var10 = var1 == var8;
            var11 = undefined;
            if(var10) { _fun0001_ip = 117; continue _fun0001 }
 112:
            var11 = var8.id;
 117:
            _closure2_slot1 = var11;
            if(var7) { _fun0001_ip = 128; continue _fun0001 }
 124:
            var7 = var11 === var4;
 128:
            var10 = _closure1_slot3;
            var12 = var10.useCallback;
            var4 = new Array(2);
            var4[0] = var3;
            var4[1] = var11;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToGuild;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = var12.bind(var10)(var3, var4);
            var4 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 53; continue _fun0003 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var4.bind(var10)(var2, var3);
            var2 = var1 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 328; continue _fun0001 }
 200:
            var4 = _closure1_slot7;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var3 = var10.bind(var5)(var2);
            var2 = {};
            var2['onPress'] = var13;
            var2['onLongPress'] = var12;
            var9 = var9.container;
            var2['style'] = var9;
            var9 = true;
            var2['accessible'] = var9;
            var9 = 'button';
            var2['accessibilityRole'] = var9;
            var9 = 12;
            var9 = var11[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['channel'] = var8;
            var9 = var10.bind(var5)(var9);
            var2['accessibilityLabel'] = var9;
            var9 = {};
            var9['selected'] = var7;
            var2['accessibilityState'] = var9;
            var2['channel'] = var8;
            var2['selected'] = var7;
            var6 = _closure1_slot6;
            var6 = var6.ONLY_MENTIONS;
            var2['resolvedUnreadSetting'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 328:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/DirectoryChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();