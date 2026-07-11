// app/modules/conversations/useConversationBackoffRef.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FETCH_BACKOFF_MAX_MS;
    var _closure1_slot3 = var7;
    var4 = var4.FETCH_BACKOFF_MIN_MS;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/useConversationBackoffRef.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConversationBackoffRef() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[0];
            var8 = undefined;
            if(!(var5 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = new Array(0);
case 2:
            var _closure2_slot0 = var8;
            var4 = _closure1_slot2;
            var3 = var4.useRef;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 2;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var11 = _closure1_slot4;
            var10 = _closure1_slot3;
            var6 = var8.prototype;
            var6 = Object.create(var6, {constructor: {value: var8}});
            var12 = var6;
            var1 = new var12[var8](var11, var10, var9);
            var1 = var1 instanceof Object ? var1 : var6;
            var1 = var3.bind(var4)(var1);
            _closure2_slot0 = var1;
            var3 = var4.useEffect;
            var2 = function() {
                var2 = _closure2_slot0;
                var2 = var2.current;
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.succeed;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['useConversationBackoffRef'] = var2;
    return var1;
})();