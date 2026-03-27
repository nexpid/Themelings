// app/modules/hangout_window/HangoutWindowUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = /(?:^|\/{2}|\.)(tenor\.com|tenor\.co|giphy\.com|cdn\.discordapp\.com|media\.discordapp\.net|klipy\.com)(?:\/|$)/;
    var _closure1_slot0 = var1;
    var1 = /\.(webm|mp4)(\?|$)/i;
    var _closure1_slot1 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hangout_window/HangoutWindowUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isHangoutWindowImageUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.length;
            var2 = 0;
            var1 = var2 !== var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = var3.test;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var3['isHangoutWindowImageUrl'] = var4;
    var4 = function normalizeHangoutWindowImageUrl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = var4.startsWith;
            var1 = '//';
            var2 = var2.bind(var4)(var1);
            var1 = var4;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 5:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'https:';
            var1 = var3.bind(var2)(var4);
case 6:
            return var1;
        }
    };
    var3['normalizeHangoutWindowImageUrl'] = var4;
    var2 = function isHangoutWindowVideoUrl(arg1) {
        var3 = _closure1_slot1;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isHangoutWindowVideoUrl'] = var2;
    return var1;
})();