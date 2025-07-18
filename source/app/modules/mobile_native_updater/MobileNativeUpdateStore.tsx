// app/modules/mobile_native_updater/MobileNativeUpdateStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UPDATE_CONFIG;
    var _closure1_slot8 = var8;
    var2 = var2.UPDATE_CHECK_INTERVAL;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var9 = Object.create(var2, {constructor: {value: var8}});
    var2 = 'MobileNativeUpdateStore';
    var13 = var9;
    var12 = var2;
    var8 = new var13[var8](var12, var11);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot10 = var8;
    var8 = null;
    var9 = {'lastCheck': null, 'checking': false, 'newBuild': null};
    var _closure1_slot11 = var9;
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var9 = var8.Store;
    var8 = function(arg1) {
        var4 = function MobileNativeUpdateStore(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = _closure1_slot8;
                var2 = null;
                var2 = var2 !== var3;
                var1['hasUpdatesConfigured'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'checkForNewerBuild';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot11;
                var4 = var3.checking;
                var3 = true;
                if(!(var3 !== var4)) { _fun0003_ip = 116; continue _fun0003 }
 21:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 7;
                var3 = var5[var3];
                var4 = undefined;
                var7 = var6.bind(var4)(var3);
                var6 = var7.dispatch;
                var3 = {};
                var8 = 'MOBILE_NATIVE_UPDATE_CHECK_STARTED';
                var3['type'] = var8;
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot0;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.checkForNewerBuild;
                var4 = var2.bind(var3)();
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'MOBILE_NATIVE_UPDATE_CHECK_FINISHED';
                    var2['type'] = var5;
                    var5 = arg1;
                    var2['newBuild'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'MOBILE_NATIVE_UPDATE_CHECK_FAILED';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
 116:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'ensureInitialized';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var2 = var2.hasUpdatesConfigured;
                if(!var2) { _fun0004_ip = 90; continue _fun0004 }
 18:
                var3 = _closure1_slot12;
                var2 = null;
                if(!(var2 === var3)) { _fun0004_ip = 90; continue _fun0004 }
 31:
                var4 = function backgroundUpdateCheck() {
                    var3 = _closure1_slot10;
                    var2 = var3.info;
                    var1 = 'Checking for new native builds in the background';
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure3_slot0;
                    var1 = var2.checkForNewerBuild;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1 = global;
                var6 = var1.setInterval;
                var3 = _closure1_slot9;
                var2 = var3.asMilliseconds;
                var2 = var2.bind(var3)();
                var3 = undefined;
                var2 = var6.bind(var3)(var4, var2);
                _closure1_slot12 = var2;
                var2 = var1.setTimeout;
                var1 = 1000;
                var1 = var2.bind(var3)(var4, var1);
 90:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'latestFetchedBuild';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var1 = var2.ensureInitialized;
            var1 = var1.bind(var2)();
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var9);
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleCheckStarted() {
        var2 = {};
        var5 = _closure1_slot11;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var4 = true;
        var3 = 'checking';
        var2[var3] = var4;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['MOBILE_NATIVE_UPDATE_CHECK_STARTED'] = var9;
    var9 = function handleCheckFailed() {
        var2 = {};
        var5 = _closure1_slot11;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var4 = false;
        var3 = 'checking';
        var2[var3] = var4;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['MOBILE_NATIVE_UPDATE_CHECK_FAILED'] = var9;
    var4 = function handleCheckFinished(arg1) {
        var1 = arg1;
        var1 = var1.newBuild;
        var2 = {};
        var3 = global;
        var3 = var3.Date;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var2['lastCheck'] = var3;
        var3 = false;
        var2['checking'] = var3;
        var2['newBuild'] = var1;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['MOBILE_NATIVE_UPDATE_CHECK_FINISHED'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mobile_native_updater/MobileNativeUpdateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();