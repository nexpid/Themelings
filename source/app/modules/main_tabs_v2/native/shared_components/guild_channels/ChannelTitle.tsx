// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyleProperties;
    var4 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_MUTED;
    var4['muted'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
    var4['normal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_CHANNEL_NAME_TEXT;
    var4['unreadOrConnected'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function ChannelTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.title;
            var12 = var1.muted;
            var _closure2_slot0 = var12;
            var15 = var1.unread;
            var _closure2_slot1 = var15;
            var11 = var1.resolvedUnreadSetting;
            var _closure2_slot2 = var11;
            var13 = var1.connected;
            var _closure2_slot3 = var13;
            var9 = var1.layout;
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 5;
            var5 = var8[var4];
            var4 = undefined;
            var7 = var2.bind(var4)(var5);
            var5 = var7.getLayoutStyles;
            var7 = var5.bind(var7)(var9);
            var5 = _closure1_slot5;
            var14 = var5.bind(var4)();
            var _closure2_slot4 = var14;
            var10 = _closure1_slot2;
            var9 = var10.useMemo;
            var5 = new Array(5);
            var5[0] = var15;
            var5[1] = var14;
            var5[2] = var13;
            var5[3] = var12;
            var5[4] = var11;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    var2 = var2.normal;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0002_ip = 70; continue _fun0002 }
 20:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0002_ip = 48; continue _fun0002 }
 27:
                    var5 = _closure2_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4.ALL_MESSAGES;
                    var3 = var5 === var4;
 48:
                    if(var3) { _fun0002_ip = 55; continue _fun0002 }
 51:
                    var3 = _closure2_slot3;
 55:
                    if(!var3) { _fun0002_ip = 80; continue _fun0002 }
 58:
                    var3 = _closure2_slot4;
                    var2 = var3.unreadOrConnected;
                    _fun0002_ip = 80; continue _fun0002;
 70:
                    var1 = _closure2_slot4;
                    var2 = var1.muted;
 80:
                    var1 = {'color': null, 'paddingRight': 4, 'flexShrink': 1};
                    var1['color'] = var2;
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var3, var5);
            var3 = _closure1_slot4;
            var1 = 6;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75};
            var7 = var7.channelName;
            var7 = var7.text;
            var7 = var7.variant;
            var1['variant'] = var7;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 != var6;
            var5 = '';
            if(!var7) { _fun0001_ip = 227; continue _fun0001 }
 224:
            var5 = var6;
 227:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();