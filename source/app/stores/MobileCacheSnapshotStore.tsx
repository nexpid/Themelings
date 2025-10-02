// app/stores/MobileCacheSnapshotStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var5 = function MobileCacheSnapshotStore(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var11 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var11, var2);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var16 = new Array(3);
                var16[0] = var1;
                var1 = {};
                var19 = var1;
                var18 = var4;
                var3 = copyDataProperties(var19, var18);
                var3 = function CLEAR_CACHES() {
                    var2 = _closure3_slot0;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    var1 = false;
                    return var1;
                };
                var9 = 'CLEAR_CACHES';
                var1[var9] = var3;
                var10 = function WRITE_CACHES() {
                    var2 = _closure3_slot0;
                    var1 = var2.save;
                    var1 = var1.bind(var2)();
                    var1 = false;
                    return var1;
                };
                var3 = 'WRITE_CACHES';
                var1[var3] = var10;
                var16[1] = var1;
                var1 = arg2;
                var16[2] = var1;
                var1 = _closure1_slot6;
                var15 = var1.bind(var6)(var2);
                var10 = _closure1_slot5;
                var1 = _closure1_slot8;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var15.apply;
                var1 = var1.bind(var15)(var11, var16);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var13 = global;
                var14 = var13.Reflect;
                var13 = var14.construct;
                var12 = _closure1_slot6;
                var12 = var12.bind(var6)(var11);
                var12 = var12.constructor;
                var1 = var13.bind(var14)(var15, var16, var12);
case 8:
                var1 = var10.bind(var6)(var11, var1);
                var _closure3_slot0 = var1;
                var5 = 6;
                var10 = var8[var5];
                var12 = var7.bind(var6)(var10);
                var10 = var1.getClass;
                var10 = var10.bind(var1)();
                var11 = var10.displayName;
                var10 = null;
                var11 = var10 != var11;
                var10 = 'Snapshot stores need a display name';
                var10 = var12.bind(var6)(var11, var10);
                var10 = var8[var5];
                var11 = var7.bind(var6)(var10);
                var9 = var9 in var4;
                var10 = !var9;
                var9 = "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action";
                var9 = var11.bind(var6)(var10, var9);
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var3 = var3 in var4;
                var4 = !var3;
                var3 = "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action";
                var3 = var5.bind(var6)(var4, var3);
                var3 = var2.allStores;
                var2 = var3.push;
                var2 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'persistKey';
        var6['key'] = var2;
        var2 = function get() {
            var2 = this;
            var1 = var2.getClass;
            var1 = var1.bind(var2)();
            var4 = var1.displayName;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '-snapshot';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var6['get'] = var2;
        var2 = new Array(5);
        var2[0] = var6;
        var6 = {};
        var7 = 'clear';
        var6['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.remove;
            var2 = this;
            var2 = var2.persistKey;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'save';
        var6['key'] = var7;
        var7 = function value() {
            var6 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var5 = var2.Storage;
            var4 = var5.set;
            var3 = var6.persistKey;
            var2 = var6.takeSnapshot;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'readSnapshot';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.Storage;
                var2 = var3.get;
                var1 = this;
                var1 = var1.persistKey;
                var2 = var2.bind(var3)(var1);
                var5 = null;
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = var2.version;
                var3 = arg1;
                var1 = null;
                if(!(var4 === var3)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var1 = var2.data;
case 9:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'getClass';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.constructor;
            return var1;
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'clearAll';
        var6['key'] = var7;
        var1 = function value() {
            var1 = _closure2_slot0;
            var3 = var1.allStores;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = new Array(0);
    var2['allStores'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MobileCacheSnapshotStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();