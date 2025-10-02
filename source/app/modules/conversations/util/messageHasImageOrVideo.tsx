// app/modules/conversations/util/messageHasImageOrVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var4.CONVERSATION_VALID_EMBED_TYPES;
    var _closure1_slot0 = var7;
    var4 = var4.CONVERSATION_VALID_MEDIA_PREFIXES;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/util/messageHasImageOrVideo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function messageHasImageOrVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var8 = var5.attachments;
            var4 = null;
            var6 = var4 == var8;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8.some;
            var6 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure1_slot1;
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var4 = var1.content_type;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = var4.startsWith;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
case 4:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var7.bind(var8)(var6);
case 2:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var5.embeds;
            var4 = var4 == var5;
            var2 = undefined;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5.some;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 8:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['messageHasImageOrVideo'] = var2;
    return var1;
})();