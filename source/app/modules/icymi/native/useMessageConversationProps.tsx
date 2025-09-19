// app/modules/icymi/native/useMessageConversationProps.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/useMessageConversationProps.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessageConversationProps(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useGravityMessageItem;
        var5 = var3.bind(var4)(var6);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = new Array(0);
                var1 = _closure2_slot1;
                var5 = null;
                var1 = var5 != var1;
                if(!var1) { _fun0001_ip = 34; continue _fun0001 }
 20:
                var4 = _closure2_slot1;
                var4 = var4.beforeMessages;
                var1 = var5 != var4;
 34:
                if(!var1) { _fun0001_ip = 58; continue _fun0001 }
 37:
                var4 = _closure2_slot1;
                var4 = var4.beforeMessages;
                var6 = var4.length;
                var4 = 0;
                var1 = var6 > var4;
 58:
                if(!var1) { _fun0001_ip = 102; continue _fun0001 }
 61:
                var4 = var2.push;
                var1 = _closure2_slot1;
                var9 = var1.beforeMessages;
                var1 = new Array(0);
                var8 = 0;
                var10 = var1;
                var6 = arraySpread(var10, var9, var8);
                var10 = var4;
                var9 = var1;
                var8 = var2;
                var1 = apply(var10, var9, var8);
 102:
                var4 = var2.push;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var1);
                var1 = _closure2_slot1;
                var1 = var5 != var1;
                if(!var1) { _fun0001_ip = 141; continue _fun0001 }
 127:
                var4 = _closure2_slot1;
                var4 = var4.afterMessages;
                var1 = var5 != var4;
 141:
                if(!var1) { _fun0001_ip = 165; continue _fun0001 }
 144:
                var4 = _closure2_slot1;
                var4 = var4.afterMessages;
                var5 = var4.length;
                var4 = 0;
                var1 = var5 > var4;
 165:
                if(!var1) { _fun0001_ip = 209; continue _fun0001 }
 168:
                var4 = var2.push;
                var1 = _closure2_slot1;
                var9 = var1.afterMessages;
                var1 = new Array(0);
                var8 = 0;
                var10 = var1;
                var5 = arraySpread(var10, var9, var8);
                var10 = var4;
                var9 = var1;
                var8 = var2;
                var1 = apply(var10, var9, var8);
 209:
                var1 = {};
                var3 = _closure2_slot0;
                var3 = var3.id;
                var1['id'] = var3;
                var3 = 'message';
                var1['type'] = var3;
                var1['messages'] = var2;
                var2 = 'icymi-card';
                var1['renderLocation'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useMessageConversationProps'] = var2;
    return var1;
})();