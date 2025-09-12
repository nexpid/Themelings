// app/modules/rich_presence/PresenceActivityFiltering.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rich_presence/PresenceActivityFiltering.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function doesGameHaveRichPresence(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var3;
            var3 = var1.id;
            var6 = null;
            if(!(var6 !== var3)) { _fun0001_ip = 124; continue _fun0001 }
 23:
            var4 = var1.id;
            var3 = undefined;
            if(!(var3 !== var4)) { _fun0001_ip = 124; continue _fun0001 }
 34:
            var5 = _closure1_slot2;
            var4 = var5.getApplication;
            var1 = var1.id;
            var4 = var4.bind(var5)(var1);
            var1 = var6 != var4;
            if(!var1) { _fun0001_ip = 74; continue _fun0001 }
 64:
            var5 = var4.linkedGames;
            var1 = var6 != var5;
 74:
            if(!var1) { _fun0001_ip = 94; continue _fun0001 }
 77:
            var5 = var4.linkedGames;
            var6 = var5.length;
            var5 = 0;
            var1 = var6 > var5;
 94:
            if(!var1) { _fun0001_ip = 122; continue _fun0001 }
 97:
            var5 = var4.linkedGames;
            var4 = var5.find;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 1;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.GameLinkTypes;
                    var1 = var1.LINKED;
                    var1 = var3 === var1;
                    if(!var1) { _fun0002_ip = 77; continue _fun0002 }
 52:
                    var4 = var2.id;
                    var3 = _closure2_slot0;
                    var2 = function hasRichPresenceForGame(arg1, arg2) {
                        var3 = arg2;
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.application_id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var1 = var2.bind(var5)(var4, var3);
 77:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var1 = var3 !== var2;
 122:
            return var1;
 124:
            var1 = false;
            return var1;
        }
    };
    var3['doesGameHaveRichPresence'] = var2;
    return var1;
})();