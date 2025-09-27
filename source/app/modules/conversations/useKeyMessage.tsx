// app/modules/conversations/useKeyMessage.tsx
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
    var4 = 'modules/conversations/useKeyMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useKeyMessage(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 237; continue _fun0001 }
 18:
                var2 = _closure2_slot0;
                var3 = var2.messages;
                var2 = 0;
                var3 = var3[var2];
                var6 = var1 != var3;
                var2 = null;
                if(!var6) { _fun0001_ip = 46; continue _fun0001 }
 43:
                var2 = var3;
 46:
                if(!(var1 != var2)) { _fun0001_ip = 235; continue _fun0001 }
 53:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = 'message';
                if(!(var3 !== var6)) { _fun0001_ip = 152; continue _fun0001 }
 70:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = 'forum_thread';
                if(!(var3 !== var6)) { _fun0001_ip = 152; continue _fun0001 }
 89:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = 'announcement';
                if(!(var3 !== var6)) { _fun0001_ip = 152; continue _fun0001 }
 106:
                var8 = _closure1_slot2;
                var7 = var8.getMessage;
                var3 = var2.getChannelId;
                var6 = var3.bind(var2)();
                var3 = var2.id;
                var6 = var7.bind(var8)(var6, var3);
                var3 = var2;
                if(!(var1 != var6)) { _fun0001_ip = 150; continue _fun0001 }
 147:
                var3 = var6;
 150:
                return var3;
 152:
                var3 = _closure2_slot0;
                var8 = var3.id;
                var _closure3_slot0 = var8;
                var7 = _closure1_slot2;
                var6 = var7.getMessage;
                var3 = var2.getChannelId;
                var3 = var3.bind(var2)();
                var3 = var6.bind(var7)(var3, var8);
                if(!(var1 == var3)) { _fun0001_ip = 226; continue _fun0001 }
 198:
                var5 = _closure2_slot0;
                var6 = var5.messages;
                var5 = var6.find;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var5.bind(var6)(var4);
 226:
                if(!(var1 != var3)) { _fun0001_ip = 233; continue _fun0001 }
 230:
                var2 = var3;
 233:
                return var2;
 235:
                return var1;
 237:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useKeyMessage'] = var2;
    return var1;
})();