// discord_common/js/packages/flux/useStateFromStores.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function defaultAreStatesEqual(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function useStateFromStores(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var8 = arg2;
            var12 = arg3;
            var10 = arguments[3];
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var12;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 39; continue _fun0001 }
 32:
            var10 = _closure1_slot7;
 39:
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var1 = _closure1_slot5;
            var6 = null;
            var1 = var1.bind(var5)(var6);
            var4 = var1.current;
            if(!(var6 == var4)) { _fun0001_ip = 145; continue _fun0001 }
 78:
            var4 = {};
            var4['stores'] = var7;
            var4['areStatesEqual'] = var10;
            var4['getStateFromStores'] = var8;
            var4['prevDeps'] = var5;
            var4['state'] = var5;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 2;
            var7 = var11[var7];
            var9 = var9.bind(var5)(var7);
            var7 = var9.createContext;
            var7 = var7.bind(var9)();
            var4['libDiscoreContext'] = var7;
            var1['current'] = var4;
 145:
            var7 = var1.current;
            _closure2_slot4 = var7;
            var4 = var7.state;
            _closure2_slot5 = var4;
            if(!(var6 != var12)) { _fun0001_ip = 214; continue _fun0001 }
 167:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 3;
            var1 = var11[var1];
            var11 = var9.bind(var5)(var1);
            var9 = var11.areArraysShallowEqual;
            var1 = var7.prevDeps;
            var9 = var9.bind(var11)(var12, var1);
            var1 = var4;
            if(var9) { _fun0001_ip = 346; continue _fun0001 }
 214:
            var9 = var7.libDiscoreContext;
            if(!(var5 !== var9)) { _fun0001_ip = 261; continue _fun0001 }
 224:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 2;
            var9 = var12[var9];
            var12 = var11.bind(var5)(var9);
            var11 = var12.enterContext;
            var9 = var7.libDiscoreContext;
            var9 = var11.bind(var12)(var9);
 261:
            var9 = var8.bind(var5)();
            var8 = var6 != var4;
            if(!var8) { _fun0001_ip = 278; continue _fun0001 }
 272:
            var8 = var10.bind(var5)(var4, var9);
 278:
            var10 = false;
            if(var8) { _fun0001_ip = 292; continue _fun0001 }
 283:
            _closure2_slot5 = var9;
            var10 = true;
            var4 = var9;
 292:
            var8 = var7.libDiscoreContext;
            var1 = var4;
            if(!(var5 !== var8)) { _fun0001_ip = 346; continue _fun0001 }
 305:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 2;
            var8 = var11[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.exitContext;
            var7 = var7.libDiscoreContext;
            var7 = var8.bind(var9)(var7, var10);
            var1 = var4;
 346:
            var7 = _closure1_slot6;
            var4 = function() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot1;
                var3['getStateFromStores'] = var2;
                var3 = _closure2_slot4;
                var2 = _closure2_slot2;
                var3['prevDeps'] = var2;
                var2 = _closure2_slot4;
                var1 = _closure2_slot5;
                var2['state'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var7.bind(var5)(var4);
            var4 = _closure1_slot4;
            var7 = var4.bind(var5)(var6);
            var6 = _closure1_slot3;
            var4 = 2;
            var6 = var6.bind(var5)(var7, var4);
            var4 = 1;
            var4 = var6[var4];
            _closure2_slot6 = var4;
            var4 = _closure1_slot6;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var6 = var2.BatchedStoreListener;
                var9 = _closure2_slot0;
                var2 = _closure2_slot4;
                var7 = var2.libDiscoreContext;
                var2 = var6.prototype;
                var3 = Object.create(var2, {constructor: {value: var6}});
                var8 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot4;
                        var3 = var1.libDiscoreContext;
                        var1 = undefined;
                        if(!(var1 !== var3)) { _fun0002_ip = 63; continue _fun0002 }
 19:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.enterContext;
                        var3 = _closure2_slot4;
                        var3 = var3.libDiscoreContext;
                        var3 = var4.bind(var5)(var3);
 63:
                        var4 = _closure2_slot4;
                        var3 = var4.getStateFromStores;
                        var4 = var3.bind(var4)();
                        var5 = _closure2_slot3;
                        var3 = _closure2_slot4;
                        var3 = var3.state;
                        var3 = var5.bind(var1)(var3, var4);
                        var5 = false;
                        if(var3) { _fun0002_ip = 124; continue _fun0002 }
 101:
                        var3 = _closure2_slot4;
                        var3['state'] = var4;
                        var4 = _closure2_slot6;
                        var3 = {};
                        var3 = var4.bind(var1)(var3);
                        var5 = true;
 124:
                        var3 = _closure2_slot4;
                        var3 = var3.libDiscoreContext;
                        if(!(var1 !== var3)) { _fun0002_ip = 183; continue _fun0002 }
 138:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 2;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.exitContext;
                        var2 = _closure2_slot4;
                        var2 = var2.libDiscoreContext;
                        var2 = var3.bind(var4)(var2, var5);
 183:
                        return var1;
                    }
                };
                var10 = var3;
                var2 = new var10[var6](var9, var8, var7, var6);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var2 = 'useStateFromStores';
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.useState;
    var _closure1_slot4 = var8;
    var8 = var5.useRef;
    var _closure1_slot5 = var8;
    var5 = var5.useInsertionEffect;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/flux/useStateFromStores.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function statesWillNeverBeEqual() {
        var1 = false;
        return var1;
    };
    var3['statesWillNeverBeEqual'] = var5;
    var3['useStateFromStores'] = var4;
    var4 = function useStateFromStoresObject(arg1, arg2, arg3) {
        var6 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var5 = undefined;
        var7 = var2.bind(var5)(var1);
        var10 = arg1;
        var9 = arg2;
        var8 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['useStateFromStoresObject'] = var4;
    var2 = function useStateFromStoresArray(arg1, arg2, arg3) {
        var6 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var7 = var1.areArraysShallowEqual;
        var10 = arg1;
        var9 = arg2;
        var8 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['useStateFromStoresArray'] = var2;
    return var1;
})();