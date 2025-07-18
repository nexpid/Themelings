// app/modules/blocking/useDiscoverableApplicationStream.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/blocking/useDiscoverableApplicationStream.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDiscoverableApplicationStream(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var4 = var7[var3];
            var5 = undefined;
            var11 = var6.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 28; continue _fun0002 }
 13:
                    var1 = _closure1_slot4;
                    var1 = var1.NONE;
                    _fun0002_ip = 50; continue _fun0002;
 28:
                    var4 = _closure1_slot3;
                    var3 = var4.getRelationshipType;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 50:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var9, var4);
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0003_ip = 40; continue _fun0003 }
 16:
                    var4 = _closure1_slot2;
                    var3 = var4.getAnyDiscoverableStreamForUser;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var5, var2, var3);
            var1 = _closure1_slot4;
            var3 = var1.BLOCKED;
            var1 = null;
            if(!(var4 !== var3)) { _fun0001_ip = 127; continue _fun0001 }
 124:
            var1 = var2;
 127:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();