// app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var5 = var8.memo;
    var4 = function MessagesItemChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var6 = var2.placeholderHeight;
            var8 = var2.row;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var1 = var1 == var7;
            var3 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7.isPrivate;
            var3 = var1.bind(var7)();
case 2:
            var1 = true;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['height'] = var6;
            var1['row'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var7;
            var2['height'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function getMessagesItemChannelSizes(arg1) {
        var3 = arg1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 3;
        var4 = var9[var2];
        var7 = undefined;
        var4 = var8.bind(var7)(var4);
        var4 = var4.TextStyleSheet;
        var4 = var4.redesign/channel-title/semibold;
        var4 = var4.lineHeight;
        var4 = var4 * var3;
        var2 = var9[var2];
        var2 = var8.bind(var7)(var2);
        var2 = var2.TextStyleSheet;
        var2 = var2.text-xs/medium;
        var2 = var2.lineHeight;
        var3 = var2 * var3;
        var5 = _closure1_slot1;
        var1 = 4;
        var2 = var9[var1];
        var2 = var5.bind(var7)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_16;
        var1 = var9[var1];
        var1 = var5.bind(var7)(var1);
        var1 = var1.spacing;
        var11 = var1.PX_32;
        var1 = {};
        var1['avatar'] = var11;
        var5 = global;
        var10 = var5.Math;
        var6 = var10.max;
        var5 = var4 + var3;
        var5 = var6.bind(var10)(var11, var5);
        var6 = var5 + var2;
        var5 = 5;
        var5 = var9[var5];
        var5 = var8.bind(var7)(var5);
        var5 = var5.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
        var5 = var6 + var5;
        var1['height'] = var5;
        var1['label'] = var4;
        var1['labelSecondary'] = var3;
        var1['padding'] = var2;
        return var1;
    };
    var3['getMessagesItemChannelSizes'] = var2;
    return var1;
})();