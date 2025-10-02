// app/modules/checkpoint/CheckpointStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var9 = function resetState() {
        var1 = {};
        _closure1_slot6 = var1;
        var1 = _closure1_slot5;
        var1 = var1.INIT;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot9 = var9;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var12 = 0;
    var2 = var6[var12];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var11 = 1;
    var2 = var6[var11];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var10 = 2;
    var2 = var6[var10];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var8 = 3;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var2['INIT'] = var12;
    var4 = 'INIT';
    var2[var12] = var4;
    var2['FETCHING'] = var11;
    var4 = 'FETCHING';
    var2[var11] = var4;
    var2['SUCCESS'] = var10;
    var4 = 'SUCCESS';
    var2[var10] = var4;
    var2['ERROR'] = var8;
    var4 = 'ERROR';
    var2[var8] = var4;
    var _closure1_slot5 = var2;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = var2.INIT;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function CheckpointStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCheckpointData';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'CheckpointStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var15 = var7.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var9;
    var9 = function handleCheckpointFetchStart() {
        var1 = _closure1_slot5;
        var1 = var1.FETCHING;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_FETCH_START'] = var9;
    var9 = function handleCheckpointFetchSuccess(arg1) {
        var1 = arg1;
        var1 = var1.data;
        _closure1_slot6 = var1;
        var1 = _closure1_slot5;
        var1 = var1.SUCCESS;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_FETCH_SUCCESS'] = var9;
    var5 = function handleCheckpointFetchFailed() {
        var1 = _closure1_slot5;
        var1 = var1.ERROR;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_FETCH_FAILED'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var8](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/CheckpointStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchStates'] = var2;
    return var1;
})();