// app/modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeAddPollsMarketingEasterEggNote(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var7 = undefined;
            var5 = var3.bind(var7)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot2;
                var3 = var1.locale;
                var2 = var3.startsWith;
                var1 = 'en-';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var1);
            var4 = ':pizza:';
            var1 = var6;
            if(!(var4 === var6)) { _fun0001_ip = 142; continue _fun0001 }
 71:
            var1 = var6;
            if(!var3) { _fun0001_ip = 142; continue _fun0001 }
 77:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.1knDPD;
            var2 = {};
            var2['emojiName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 142:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();