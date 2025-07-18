// app/modules/app_database/stores/FileSystemStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var5[var4];
    var8 = var6.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var11 = 'FileSystemStore';
    var12 = var7;
    var4 = new var12[var8](var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.MINUTE;
    var4 = 10;
    var7 = var4 * var7;
    var _closure1_slot9 = var7;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function FileSystemStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var1 = _closure1_slot3;
                var4 = _closure2_slot1;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 8;
                var1 = var8[var1];
                var1 = var7.bind(var5)(var1);
                var13 = new Array(2);
                var13[0] = var1;
                var1 = {};
                var9 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['APP_STATE_UPDATE'] = var9;
                var9 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['POST_CONNECTION_OPEN'] = var9;
                var13[1] = var1;
                var1 = _closure1_slot6;
                var12 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 118; continue _fun0002 }
 105:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var6, var13);
                _fun0002_ip = 152; continue _fun0002;
 118:
                var9 = global;
                var11 = var9.Reflect;
                var10 = var11.construct;
                var9 = _closure1_slot6;
                var9 = var9.bind(var5)(var6);
                var9 = var9.constructor;
                var1 = var10.bind(var11)(var12, var13, var9);
 152:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = false;
                var1['isLowDisk'] = var4;
                var4 = var1.refresh;
                var4 = var4.bind(var1)();
                var6 = var1.waitFor;
                var4 = 9;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var4 = var6.bind(var1)(var4);
                var4 = global;
                var4 = var4.setInterval;
                var3 = _closure1_slot9;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.refresh;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'handlePostConnectionOpen';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.refresh;
            var1 = var1.bind(var2)();
            var1 = false;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var8 = 'handleAppStateUpdate';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var1 = arg1;
                var3 = var1.state;
                var1 = 'active';
                if(!(var1 !== var3)) { _fun0003_ip = 29; continue _fun0003 }
 19:
                var1 = var2.refresh;
                var1 = var1.bind(var2)();
 29:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'refresh';
        var5['key'] = var8;
        var8 = _closure1_slot2;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 376; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.database;
                    var7 = var2.bind(var4)();
                    var6 = null;
                    var4 = var6 == var7;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 98; continue _fun0004 }
 59:
                    var4 = var7.fsInfo;
                    var8 = var4.bind(var7)();
                    var4 = var6 == var8;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 98; continue _fun0004 }
 80:
                    var7 = var8.catch;
                    var4 = function(arg1) {
                        var4 = _closure1_slot8;
                        var3 = var4.warn;
                        var2 = "couldn't get fs info";
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var7.bind(var8)(var4);
 98:
                    SaveGenerator(address=102);
 100:
                    return var2;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 373; continue _fun0004 }
 111:
                    if(!(var6 != var2)) { _fun0004_ip = 370; continue _fun0004 }
 118:
                    var4 = var2.fs;
                    var7 = var4.available;
                    var4 = 268435456;
                    var7 = var7 < var4;
                    if(var7) { _fun0004_ip = 178; continue _fun0004 }
 143:
                    var4 = var2.fs;
                    var8 = var4.available;
                    var4 = var2.database;
                    var9 = var4.used;
                    var4 = 3;
                    var4 = var4 * var9;
                    var7 = var8 < var4;
 178:
                    if(var7) { _fun0004_ip = 216; continue _fun0004 }
 181:
                    var4 = var2.fs;
                    var8 = var4.available;
                    var4 = var2.database;
                    var9 = var4.total;
                    var4 = 2;
                    var4 = var4 * var9;
                    var7 = var8 < var4;
 216:
                    var4 = var2.fs;
                    var8 = var4.available;
                    var4 = 805306368;
                    var8 = var8 > var4;
                    if(!var8) { _fun0004_ip = 276; continue _fun0004 }
 241:
                    var4 = var2.fs;
                    var9 = var4.available;
                    var4 = var2.database;
                    var10 = var4.used;
                    var4 = 4;
                    var4 = var4 * var10;
                    var8 = var9 > var4;
 276:
                    if(!var8) { _fun0004_ip = 314; continue _fun0004 }
 279:
                    var4 = var2.fs;
                    var9 = var4.available;
                    var4 = var2.database;
                    var10 = var4.total;
                    var4 = 4;
                    var4 = var4 * var10;
                    var8 = var9 > var4;
 314:
                    var4 = !var7;
                    var4 = !var4;
                    if(var7) { _fun0004_ip = 334; continue _fun0004 }
 323:
                    var7 = !var8;
                    if(var8) { _fun0004_ip = 331; continue _fun0004 }
 329:
                    var7 = null;
 331:
                    var4 = var7;
 334:
                    var6 = var6 != var4;
                    if(!var6) { _fun0004_ip = 351; continue _fun0004 }
 341:
                    var7 = var5.isLowDisk;
                    var6 = var7 !== var4;
 351:
                    if(!var6) { _fun0004_ip = 370; continue _fun0004 }
 354:
                    var5['isLowDisk'] = var4;
                    var4 = var5.emitChange;
                    var4 = var4.bind(var5)();
 370:
                    return var3;
 373:
                    return var2;
 376:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function refresh() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/stores/FileSystemStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();