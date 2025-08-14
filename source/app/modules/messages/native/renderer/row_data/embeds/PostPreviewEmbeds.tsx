// app/modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx
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
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createPostPreviewEmbeds(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 13; continue _fun0001 }
 11:
            var1 = false;
 13:
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isEligibleForGuildMediaChannelPostPreviewEmbed;
            var5 = var3.bind(var5)();
            var3 = false;
            var3 = var3 === var5;
            var4 = undefined;
            if(var3) { _fun0001_ip = 87; continue _fun0001 }
 69:
            var5 = arg1;
            var5 = var5.embeds;
            var6 = null;
            var3 = var6 == var5;
            var4 = var5;
 87:
            if(var3) { _fun0001_ip = 107; continue _fun0001 }
 90:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var3 = _closure1_slot3;
                    var3 = var3.POST_PREVIEW;
                    if(!(var4 === var3)) { _fun0002_ip = 85; continue _fun0002 }
 25:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var2.url;
                    var3 = _closure2_slot0;
                    var4 = var5.bind(var1)(var4, var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 89; continue _fun0002 }
 71:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 85:
                    var2 = undefined;
                    return var2;
 89:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 107:
            return var1;
        }
    };
    var3['createPostPreviewEmbeds'] = var2;
    return var1;
})();