// app/modules/app_database/modules/KvCacheVersion.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HELLO_KEY;
    var _closure1_slot5 = var8;
    var8 = var4.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot6 = var8;
    var8 = var4.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY;
    var _closure1_slot7 = var8;
    var8 = var4.VERSION_TO_SKIP_READING_THE_DATABASE;
    var _closure1_slot8 = var8;
    var4 = var4.VERSION_TO_SKIP_READING_THE_DATABASE_KEY;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'KvCacheVersion';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function KvCacheVersion() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = false;
            var3['hasSuccessfullyConnected'] = var2;
            var2 = {};
            var5 = function BACKGROUND_SYNC(arg1, arg2) {
                var3 = _closure3_slot0;
                var2 = var3.handleWrite;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['BACKGROUND_SYNC'] = var5;
            var5 = function CONNECTION_OPEN() {
                var2 = _closure3_slot0;
                var1 = var2.handleConnectionOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var4 = function WRITE_CACHES(arg1, arg2) {
                var3 = _closure3_slot0;
                var2 = var3.handleWrite;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['WRITE_CACHES'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot2 = var3;
        var5 = {};
        var2 = 'okAsync';
        var5['key'] = var2;
        var8 = _closure1_slot2;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 93; continue _fun0001 }
 7:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.cache;
                    var2 = arg1;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.get;
                    var2 = _closure1_slot9;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=64);
 62:
                    return var2;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 90; continue _fun0001 }
 70:
                    var3 = null;
                    var5 = var3 == var2;
                    if(var5) { _fun0001_ip = 87; continue _fun0001 }
 79:
                    var4 = _closure1_slot8;
                    var3 = var2 === var4;
 87:
                    return var3;
 90:
                    return var2;
 93:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var2)(var1);
        var _closure2_slot1 = var1;
        var1 = function okAsync() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'canUseGuildVersions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var1 = var2.hasSuccessfullyConnected;
                if(var1) { _fun0002_ip = 24; continue _fun0002 }
 12:
                var1 = var2.doesDatabaseVersionMatchJsConstants;
                var1 = var1.bind(var2)();
                _fun0002_ip = 45; continue _fun0002;
 24:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = true;
                var1 = var3.bind(var4)(var2);
 45:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'doesDatabaseVersionMatchJsConstants';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 165; continue _fun0003 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.forceResyncVersion;
                    var7 = var2.bind(var3)();
                    var3 = null;
                    if(!(var3 != var7)) { _fun0003_ip = 160; continue _fun0003 }
 51:
                    var6 = var7.get;
                    var2 = _closure1_slot7;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=69);
 67:
                    return var2;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 157; continue _fun0003 }
 75:
                    var3 = var3 == var2;
                    var10 = undefined;
                    if(var3) { _fun0003_ip = 90; continue _fun0003 }
 84:
                    var10 = var2.version;
 90:
                    var3 = _closure1_slot6;
                    var3 = var10 === var3;
                    if(var3) { _fun0003_ip = 154; continue _fun0003 }
 101:
                    var6 = _closure1_slot10;
                    var5 = var6.info;
                    var9 = _closure1_slot6;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'KVStore version mismatch: ';
                    var4 = ' vs ';
                    var4 = var8.bind(var7)(var10, var4, var9);
                    var4 = var5.bind(var6)(var4);
                    var3 = false;
 154:
                    return var3;
 157:
                    return var2;
 160:
                    var2 = false;
                    return var2;
 165:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function doesDatabaseVersionMatchJsConstants() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleClear';
        var5['key'] = var7;
        var7 = function value() {
            var2 = false;
            var1 = this;
            var1['hasSuccessfullyConnected'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value() {
            var2 = true;
            var1 = this;
            var1['hasSuccessfullyConnected'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleWrite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = arg1;
            var2 = true;
            var1 = this;
            var1['hasSuccessfullyConnected'] = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 5;
            var7 = var5[var2];
            var1 = undefined;
            var8 = var3.bind(var1)(var7);
            var7 = var8.cacheTransaction;
            var10 = var7.bind(var8)(var4);
            var9 = var10.put;
            var8 = _closure1_slot5;
            var7 = '👋';
            var7 = var9.bind(var10)(var8, var7);
            var7 = var5[var2];
            var8 = var3.bind(var1)(var7);
            var7 = var8.cacheTransaction;
            var10 = var7.bind(var8)(var4);
            var9 = var10.put;
            var8 = _closure1_slot9;
            var7 = _closure1_slot8;
            var7 = var9.bind(var10)(var8, var7);
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.forceResyncVersionTransaction;
            var5 = var2.bind(var3)(var4);
            var4 = var5.put;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = _closure1_slot6;
            var2['version'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var6 = function value() {
            var2 = false;
            var1 = this;
            var1['hasSuccessfullyConnected'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/KvCacheVersion.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();