// app/modules/blocking/useDiscoverableApplicationStream.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getDiscoverableApplicationStream(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arguments[1];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var5;
            var4 = _closure1_slot3;
            var1[1] = var4;
            var2 = var1;
case 2:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var2 = var6().value;
            var4 = var1;
            var4 = var4 === var8;
            var5 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2;
case 4:
            var2 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var8;
            var2 = undefined;
            var4 = var6;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = var7;
            var4 = var6;
case 6:
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1.return();
case 9:
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = _closure1_slot4;
            var6 = var1.NONE;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var1 = var2.getRelationshipType;
            var6 = var1.bind(var2)(var3);
case 13:
            var1 = var4 != var3;
            var2 = null;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var5.getAnyDiscoverableStreamForUser;
            var2 = var1.bind(var5)(var3);
case 14:
            var1 = _closure1_slot4;
            var5 = var1.BLOCKED;
            var1 = null;
            if(!(var6 !== var5)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var4 == var3;
            var1 = null;
            if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RelationshipTypes;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/blocking/useDiscoverableApplicationStream.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useDiscoverableApplicationStream(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var5 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var5;
            var1 = _closure1_slot3;
            var2[1] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getDiscoverableApplicationStream'] = var2;
    return var1;
})();