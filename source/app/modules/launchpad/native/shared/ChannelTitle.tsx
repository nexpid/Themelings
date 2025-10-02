// app/modules/launchpad/native/shared/ChannelTitle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
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
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function ChannelTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.title;
            var11 = var1.muted;
            var _closure2_slot0 = var11;
            var14 = var1.unread;
            var _closure2_slot1 = var14;
            var10 = var1.resolvedUnreadSetting;
            var _closure2_slot2 = var10;
            var12 = var1.connected;
            var _closure2_slot3 = var12;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var3 = _closure1_slot6;
            var13 = var3.bind(var4)();
            var _closure2_slot4 = var13;
            var9 = _closure1_slot3;
            var5 = var9.useMemo;
            var3 = new Array(5);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var11;
            var3[4] = var10;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.normal;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot2;
                    var4 = _closure1_slot4;
                    var4 = var4.ALL_MESSAGES;
                    var3 = var5 === var4;
case 4:
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot3;
case 6:
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot4;
                    var2 = var3.unreadOrConnected;
                    _fun0002_ip = 8; continue _fun0002;
case 2:
                    var1 = _closure2_slot4;
                    var2 = var1.muted;
case 8:
                    var1 = {'color': null, 'paddingRight': 4, 'flexShrink': 1};
                    var1['color'] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
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
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var6;
case 10:
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
    var4 = 'modules/launchpad/native/shared/ChannelTitle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();