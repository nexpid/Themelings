// app/modules/media_channel/useShouldHideMediaOptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/useShouldHideMediaOptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldHideMediaOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var5 = var3.bind(var4)(var1);
                    var6 = null;
                    var3 = var6 == var5;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var5.parent_id;
case 2:
                    var3 = var6 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var5.isForumPost;
                    var3 = var3.bind(var5)();
                    var1 = null;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = var5.parent_id;
case 7:
                    var1 = var2.bind(var3)(var4);
case 4:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = null;
            var3 = var3 == var4;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 9:
            var3 = var4.hasFlag;
            var1 = _closure1_slot3;
            var1 = var1.HIDE_MEDIA_DOWNLOAD_OPTIONS;
            var2 = var3.bind(var4)(var1);
case 4:
            var1 = true;
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();