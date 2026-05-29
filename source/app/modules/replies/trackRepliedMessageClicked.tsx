// app/modules/replies/trackRepliedMessageClicked.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/replies/trackRepliedMessageClicked.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackRepliedMessageClicked(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var9 = arg2;
            var12 = arg3;
            var2 = var11.messageReference;
            var13 = null;
            var3 = var13 == var2;
            var1 = undefined;
            var10 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var2.message_id;
case 2:
            var3 = var9.state;
            var2 = _closure1_slot3;
            var2 = var2.LOADED;
            var7 = null;
            var6 = null;
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var9.message;
            var4 = var3.bind(var1)(var2);
            var2 = var4.attachments;
            var3 = var2.length;
            var2 = 0;
            var3 = var3 > var2;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var4.embeds;
            var5 = var5.length;
            var3 = var5 > var2;
case 6:
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var4.stickerItems;
            var5 = var5.length;
            var3 = var5 > var2;
case 8:
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4.stickers;
            var5 = var5.length;
            var3 = var5 > var2;
case 10:
            var5 = var4.content;
            var14 = var13 == var5;
            var4 = undefined;
            if(var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var5.length;
case 12:
            var5 = var13 != var4;
            var2 = 0;
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var4;
case 14:
            var6 = var2;
            var7 = var3;
case 4:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot4;
            var3 = var2.REPLIED_MESSAGE_CLICKED;
            var2 = {};
            var14 = var12.guild_id;
            var15 = var13 != var14;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var13 = var14;
case 16:
            var2['guild_id'] = var13;
            var12 = var12.id;
            var2['channel_id'] = var12;
            var11 = var11.id;
            var2['reply_message_id'] = var11;
            var2['replied_message_id'] = var10;
            var9 = var9.state;
            var8 = _closure1_slot3;
            var8 = var8.LOADED;
            var8 = var9 === var8;
            var2['replied_message_is_loaded'] = var8;
            var2['replied_message_has_media'] = var7;
            var2['replied_message_length'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();