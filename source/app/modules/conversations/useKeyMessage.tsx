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
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var3 = var2.messages;
                var2 = 0;
                var3 = var3[var2];
                var6 = var1 != var3;
                var2 = null;
                if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var3;
case 4:
                if(!(var1 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = 'message';
                if(!(var3 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = 'forum_thread';
                if(!(var3 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = 'announcement';
                if(!(var3 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
                var8 = _closure1_slot2;
                var7 = var8.getMessage;
                var3 = var2.getChannelId;
                var6 = var3.bind(var2)();
                var3 = var2.id;
                var6 = var7.bind(var8)(var6, var3);
                var3 = var2;
                if(!(var1 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var3 = var6;
case 12:
                return var3;
case 8:
                var3 = _closure2_slot0;
                var8 = var3.id;
                var _closure3_slot0 = var8;
                var7 = _closure1_slot2;
                var6 = var7.getMessage;
                var3 = var2.getChannelId;
                var3 = var3.bind(var2)();
                var3 = var6.bind(var7)(var3, var8);
                if(!(var1 == var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
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
case 14:
                if(!(var1 != var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var2 = var3;
case 16:
                return var2;
case 6:
                return var1;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useKeyMessage'] = var2;
    return var1;
})();