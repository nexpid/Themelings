// app/modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function createDefaultSessionState() {
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.v4;
        var2 = var2.bind(var3)();
        var1['sessionId'] = var2;
        var2 = null;
        var1['searchQueryId'] = var2;
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function AbstractSearchSessionAnalyticsManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['sessions'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getSession';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = this;
                var3 = var1.sessions;
                var2 = var3.get;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getSearchContextId;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'setSession';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getSearchContextId;
                var4 = arg1;
                var5 = var5.bind(var6)(var4);
                var6 = var2.sessions;
                var4 = var6.get;
                var6 = var4.bind(var6)(var5);
                var4 = null;
                if(!(var4 == var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot4;
                var6 = var3.bind(var1)();
case 4:
                var4 = var2.sessions;
                var3 = var4.set;
                var2 = {};
                var8 = var2;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var7 = arg2;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'deleteSession';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.sessions;
            var3 = var4.delete;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var2);
            var5 = var6.getSearchContextId;
            var2 = arg1;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSessionId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var2 = var3.getSession;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var2 = var3.sessionId;
case 6:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getQueryId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var2 = var3.getSession;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                var2 = var3.searchQueryId;
case 6:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'refreshQueryId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var4 = var5.setSession;
            var3 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var2);
            var2 = var6.v4;
            var2 = var2.bind(var6)();
            var3['searchQueryId'] = var2;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'initialize';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var5 = arg1;
            var4 = this;
            var6 = 1;
            var10 = var6;
            var9 = copyRestArgs(var10);
            var2 = var4._initialize;
            var1 = new Array(1);
            var1[0] = var5;
            var10 = var1;
            var8 = var6;
            var3 = arraySpread(var10, var9, var8);
            var10 = var2;
            var9 = var1;
            var8 = var4;
            var1 = apply(var10, var9, var8);
            var3 = var4.setSession;
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var6 = var6[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.v4;
            var6 = var6.bind(var7)();
            var2['sessionId'] = var6;
            var6 = null;
            var2['searchQueryId'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var1 = var2._terminate;
            var1 = var1.bind(var2)(var3);
            var1 = var2.deleteSession;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'transferSession';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var10 = arg2;
                var3 = this;
                var1 = var3._transferSession;
                var1 = var1.bind(var3)(var4, var10);
                var1 = var3.getSession;
                var2 = var1.bind(var3)(var4);
                var7 = var3.sessions;
                var6 = var7.set;
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var5 = var5[var1];
                var1 = undefined;
                var9 = var9.bind(var1)(var5);
                var5 = var9.getSearchContextId;
                var5 = var5.bind(var9)(var10);
                var9 = null;
                if(!(var9 == var2)) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                var8 = _closure1_slot4;
                var2 = var8.bind(var1)();
case 10:
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.deleteSession;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();