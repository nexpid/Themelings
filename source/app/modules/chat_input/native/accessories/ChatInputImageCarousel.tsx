// app/modules/chat_input/native/accessories/ChatInputImageCarousel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChatShowingAutoComplete;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function ChatInputImageCarousel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.canUpload;
            var _closure2_slot0 = var10;
            var7 = var1.channelId;
            var _closure2_slot1 = var7;
            var3 = var1.screenIndex;
            var1 = _closure1_slot6;
            var5 = undefined;
            var1 = var1.bind(var5)(var3);
            var _closure2_slot2 = var1;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot3;
            var4[1] = var3;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var10;
            var3[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var6 = null;
                    var1 = null;
                    if(var2) { _fun0002_ip = 87; continue _fun0002 }
 14:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!var3) { _fun0002_ip = 84; continue _fun0002 }
 23:
                    var8 = _closure1_slot3;
                    var7 = var8.getActiveCommand;
                    var5 = _closure2_slot1;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6 == var5;
                    var2 = null;
                    if(!var5) { _fun0002_ip = 84; continue _fun0002 }
 54:
                    var6 = _closure1_slot5;
                    var5 = var6.getUploads;
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot4;
                    var3 = var3.ChannelMessage;
                    var2 = var5.bind(var6)(var4, var3);
 84:
                    var1 = var2;
 87:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var4, var1, var3);
            var1 = null;
            var3 = var1 != var8;
            if(!var3) { _fun0001_ip = 185; continue _fun0001 }
 132:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 7;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['attachments'] = var8;
            var2['channelId'] = var7;
            var6 = function onRemove(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.remove;
                var4 = _closure2_slot1;
                var2 = _closure1_slot4;
                var3 = var2.ChannelMessage;
                var2 = arg1;
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var2['onRemove'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 185:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputImageCarousel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();