// app/modules/user_settings/ProtoJsonCache.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function ProtoJsonCache(arg1) {
            var5 = arg1;
            var3 = this;
            var6 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var6.bind(var1)(var3, var4);
            var4 = global;
            var6 = var4.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['currentParsedCacheKeys'] = var6;
            var4 = var4.Map;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var10 = var6;
            var4 = new var10[var4](var9);
            var4 = var4 instanceof Object ? var4 : var6;
            var3['currentProtoToSaveCacheKeys'] = var4;
            var3['name'] = var5;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var4.bind(var1)(var2);
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var10 = var4;
            var9 = var5;
            var2 = new var10[var2](var9, var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['logger'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isValidCachedProto';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = 'object';
                var2 = typeof var4;
                var1 = var3 === var2;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
case 4:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'buildParsedCacheKey';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var12 = var1.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var13 = '';
            var11 = ':parsed:';
            var10 = arg1;
            var9 = ':';
            var8 = arg2;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'buildProtoToSaveCacheKey';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var1 = this;
            var16 = var1.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var17 = '';
            var15 = ':protoToSave:';
            var14 = arg1;
            var13 = ':';
            var12 = arg2;
            var11 = ':v';
            var10 = arg3;
            var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'readFromStorage';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var8 = arg1;
                var3 = this;
                var7 = var8;
                var2 = arg2;
                var10 = undefined;
                var5 = undefined;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 3;
                var1 = var9[var1];
                var1 = var6.bind(var10)(var1);
                var6 = var1.Storage;
                var1 = var6.getRaw;
                var6 = var1.bind(var6)(var8);
                var5 = var6;
                var1 = null;
                if(!(var1 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7: // try_start_0
                var6 = global;
                var8 = var6.JSON;
                var6 = var8.parse;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 4;
                var4 = var11[var4];
                var4 = var9.bind(var10)(var4);
                var4 = var4.uint8ArrayReviver;
                var4 = var6.bind(var8)(var5, var4);
case 8: // try_end0
                return var4;
case 9: // catch_target0
                CatchBlockStart(arg_register=5);
                var5 = var3.logger;
                var4 = var5.warn;
                var10 = var3.name;
                var9 = var2;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var3 = '';
                var2 = ': ';
                var3 = var8.bind(var3)(var10, var2, var9);
                var2 = {};
                var2['cacheKey'] = var7;
                var2['error'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'writeWithCleanup';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var11 = arg1;
                var10 = arg2;
                var3 = this;
                var5 = var11;
                var8 = var10;
                var7 = arg3;
                var4 = arg4;
                var2 = arg5;
                var1 = undefined;
                var6 = undefined;
                var9 = var11.get;
                var10 = var9.bind(var11)(var10);
                var6 = var10;
                var9 = null;
                if(!(var9 != var10)) { _fun0003_ip = 10; continue _fun0003 }
case 4:
                var10 = var6;
                var9 = var7;
                if(!(var10 !== var9)) { _fun0003_ip = 10; continue _fun0003 }
case 11: // try_start_0
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 3;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var10 = var9.Storage;
                var9 = var10.remove;
                var6 = var9.bind(var10)(var6);
case 12: // try_end0
                _fun0003_ip = 10; continue _fun0003;
case 13: // catch_target0
                CatchBlockStart(arg_register=5);
case 10:
                var10 = var5;
                var9 = var10.set;
                var6 = var8;
                var5 = var7;
                var5 = var9.bind(var10)(var6, var5);
case 14: // try_start_1
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 3;
                var5 = var14[var5];
                var5 = var13.bind(var1)(var5);
                var9 = var5.Storage;
                var6 = var9.setRaw;
                var5 = var7;
                var10 = global;
                var12 = var10.JSON;
                var11 = var12.stringify;
                var10 = var4;
                var4 = 4;
                var4 = var14[var4];
                var4 = var13.bind(var1)(var4);
                var4 = var4.uint8ArrayReplacer;
                var4 = var11.bind(var12)(var10, var4);
                var4 = var6.bind(var9)(var5, var4);
case 15: // try_end1
                _fun0003_ip = 16; continue _fun0003;
case 17: // catch_target1
                CatchBlockStart(arg_register=5);
                var5 = var3.logger;
                var4 = var5.warn;
                var11 = var3.name;
                var10 = var2;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var3 = '';
                var2 = ': ';
                var3 = var9.bind(var3)(var11, var2, var10);
                var2 = {};
                var2['type'] = var8;
                var2['cacheKey'] = var7;
                var2['error'] = var6;
                var2 = var4.bind(var5)(var3, var2);
case 16:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'readParsedProto';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var9 = arg2;
                var3 = this;
                var11 = '';
                if(!(var11 !== var9)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var1 = var3.buildParsedCacheKey;
                var5 = var1.bind(var3)(var6, var9);
                var2 = var3.readFromStorage;
                var1 = 'failed to parse cached proto';
                var2 = var2.bind(var3)(var5, var1);
                var1 = var3.isValidCachedProto;
                var1 = var1.bind(var3)(var2);
                if(var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var8 = var3.logger;
                var7 = var8.verbose;
                var10 = var3.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = ': cache miss for parsed proto';
                var4 = var4.bind(var11)(var10, var1);
                var1 = {};
                var1['type'] = var6;
                var1['b64'] = var9;
                var1 = var7.bind(var8)(var4, var1);
                var1 = null;
                _fun0004_ip = 22; continue _fun0004;
case 20:
                var4 = var3.currentParsedCacheKeys;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var5);
                var1 = var2;
case 22:
                return var1;
case 18:
                var1 = null;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'writeParsedProto';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var7 = arg1;
                var2 = arg2;
                var6 = this;
                var1 = '';
                if(!(var1 !== var2)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var1 = var6.buildParsedCacheKey;
                var10 = var1.bind(var6)(var7, var2);
                var4 = var6.writeWithCleanup;
                var12 = var6.currentParsedCacheKeys;
                var9 = arg3;
                var8 = 'failed to cache parsed proto';
                var13 = var6;
                var11 = var7;
                var1 = var13[var4](var12, var11, var10, var9, var8, var7);
case 23:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'readProtoToSave';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var10 = arg2;
                var9 = arg3;
                var3 = this;
                var1 = var3.buildProtoToSaveCacheKey;
                var5 = var1.bind(var3)(var6, var10, var9);
                var2 = var3.readFromStorage;
                var1 = 'failed to parse cached protoToSave';
                var2 = var2.bind(var3)(var5, var1);
                var1 = var3.isValidCachedProto;
                var1 = var1.bind(var3)(var2);
                if(var1) { _fun0006_ip = 25; continue _fun0006 }
case 11:
                var8 = var3.logger;
                var7 = var8.verbose;
                var12 = var3.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var11 = var1.concat;
                var4 = '';
                var1 = ': cache miss for protoToSave';
                var4 = var11.bind(var4)(var12, var1);
                var1 = {};
                var1['type'] = var6;
                var1['b64'] = var10;
                var1['version'] = var9;
                var1 = var7.bind(var8)(var4, var1);
                var1 = null;
                _fun0006_ip = 18; continue _fun0006;
case 25:
                var4 = var3.currentProtoToSaveCacheKeys;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var5);
                var1 = var2;
case 18:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'writeProtoToSave';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3, arg4) {
            var7 = arg1;
            var6 = this;
            var3 = var6.buildProtoToSaveCacheKey;
            var2 = arg2;
            var1 = arg3;
            var10 = var3.bind(var6)(var7, var2, var1);
            var4 = var6.writeWithCleanup;
            var12 = var6.currentProtoToSaveCacheKeys;
            var9 = arg4;
            var8 = 'failed to cache protoToSave';
            var13 = var6;
            var11 = var7;
            var1 = var13[var4](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/ProtoJsonCache.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();