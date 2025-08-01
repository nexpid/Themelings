// app/modules/messages/getStickerDiscoverableGuild.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/getStickerDiscoverableGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var7 = _closure1_slot2;
        var6 = var7.STICKER_GUILD_DATA;
        var5 = arg1;
        var5 = var6.bind(var7)(var5);
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var1 = null;
                var4 = var1 == var2;
                var5 = undefined;
                var3 = undefined;
                if(var4) { _fun0001_ip = 21; continue _fun0001 }
 16:
                var3 = var2.body;
 21:
                var3 = var1 != var3;
                var1 = null;
                if(!var3) { _fun0001_ip = 69; continue _fun0001 }
 30:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.makeDiscoverableGuild;
                var2 = var2.body;
                var1 = var3.bind(var4)(var2);
 69:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() {
            var1 = null;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();