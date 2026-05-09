// app/modules/applications/useGetOrFetchApplicationBatched.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useRequestApplication(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot0;
                var3 = '';
                var2 = var3 !== var4;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure1_slot7;
                var2 = var3.request;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = function ApplicationFetchManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = global;
            var6 = var5.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['_lastFetchedAttempted'] = var6;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['_pending'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.DelayedCall;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var9 = 32;
            var8 = function() {
                var2 = _closure3_slot0;
                var1 = var2._flush;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var4;
            var2 = new var10[var6](var9, var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_flushHandler'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'request';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var3 = var1._pending;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var1._lastFetchedAttempted;
                var2 = var3.get;
                var5 = var2.bind(var3)(var4);
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = global;
                var6 = var3.Date;
                var3 = var6.now;
                var3 = var3.bind(var6)();
                var5 = var3 - var5;
                var3 = 60000;
                var2 = var5 < var3;
case 8:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 10:
                var3 = var1._pending;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var3 = var1._flushHandler;
                var2 = var3.delay;
                var1 = false;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = '_flush';
        var1['key'] = var6;
        var5 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = new Array(0);
                var _closure3_slot1 = var4;
                var6 = var2._pending;
                var5 = var6.forEach;
                var3 = function(arg1) {
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var5 = var2._lastFetchedAttempted;
                    var4 = var5.set;
                    var2 = global;
                    var6 = var2.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure3_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
                var3 = var2._pending;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var7 = new Array(0);
                var _closure3_slot2 = var7;
                var5 = new Array(0);
                var _closure3_slot3 = var5;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure1_slot6;
                        var1 = var2.didFetchingApplicationFail;
                        var2 = var1.bind(var2)(var3);
                        if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var4 = _closure3_slot2;
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var3);
                        _fun0004_ip = 13; continue _fun0004;
case 11:
                        var2 = _closure3_slot3;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var2 = var7.length;
                var3 = 0;
                if(!(var2 > var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 5;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var4);
                var4 = var6.chunk;
                var2 = 20;
                var6 = var4.bind(var6)(var7, var2);
                var4 = var6.forEach;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.fetchApplications;
                    var3 = arg1;
                    var2 = false;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var4.bind(var6)(var2);
case 14:
                var2 = var5.length;
                if(!(var2 > var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.chunk;
                var2 = 20;
                var3 = var3.bind(var4)(var5, var2);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.fetchApplications;
                    var3 = arg1;
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var5.bind(var1)();
    var8 = var5.prototype;
    var8 = Object.create(var8, {constructor: {value: var5}});
    var14 = var8;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/useGetOrFetchApplicationBatched.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useRequestApplication'] = var4;
    var2 = function useGetOrFetchApplicationBatched(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot8;
        var5 = undefined;
        var3 = var3.bind(var5)(var6);
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 7;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = null;
                var3 = var5 != var1;
                var1 = null;
                if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var4 = _closure2_slot0;
                var3 = '';
                var1 = null;
                if(!(var3 !== var4)) { _fun0005_ip = 18; continue _fun0005 }
case 20:
                var4 = _closure1_slot6;
                var3 = var4.getApplication;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 18:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGetOrFetchApplicationBatched'] = var2;
    return var1;
})();