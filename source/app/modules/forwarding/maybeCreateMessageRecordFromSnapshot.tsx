// app/modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeCreateMessageRecordFromSnapshot(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var5 = null;
            if(!(var5 == var6)) { _fun0001_ip = 57; continue _fun0001 }
 12:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 0;
            var2 = var1[var3];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.bind(var1)(var4);
            if(!var2) { _fun0001_ip = 54; continue _fun0001 }
 44:
            var2 = var4.messageSnapshots;
            var1 = var2[var3];
 54:
            var6 = var1;
 57:
            var1 = var4;
            if(!(var5 != var6)) { _fun0001_ip = 248; continue _fun0001 }
 67:
            var3 = var4.merge;
            var2 = {};
            var7 = var6.message;
            var7 = var7.content;
            var2['content'] = var7;
            var7 = var6.message;
            var7 = var7.attachments;
            var2['attachments'] = var7;
            var7 = var6.message;
            var7 = var7.embeds;
            var2['embeds'] = var7;
            var7 = var6.message;
            var7 = var7.flags;
            var2['flags'] = var7;
            var7 = var6.message;
            var7 = var7.components;
            var2['components'] = var7;
            var2['editedTimestamp'] = var5;
            var7 = var6.message;
            var7 = var7.timestamp;
            var2['timestamp'] = var7;
            var7 = var6.message;
            var7 = var7.codedLinks;
            var2['codedLinks'] = var7;
            var7 = new Array(0);
            var2['reactions'] = var7;
            var7 = new Array(0);
            var2['messageSnapshots'] = var7;
            var7 = var6.message;
            var7 = var7.stickers;
            var2['stickers'] = var7;
            var6 = var6.message;
            var6 = var6.stickerItems;
            var2['stickerItems'] = var6;
            var2['customRenderedContent'] = var5;
            var1 = var3.bind(var4)(var2);
 248:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();