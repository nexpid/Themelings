// app/modules/search/managers/SearchSessionAnalyticsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function createSessionState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.v4;
            var2 = var2.bind(var4)();
            var1['sessionId'] = var2;
            var2 = null;
            var1['searchQueryId'] = var2;
            var4 = var2 != var3;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3;
case 2:
            var1['searchLocation'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.prototype;
    var13 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'SearchSessionAnalyticsManager';
    var2 = new var13[var8](var12, var11);
    var2 = {};
    var5 = 'guild';
    var2['GUILD'] = var5;
    var5 = 'channel_header';
    var2['CHANNEL_HEADER'] = var5;
    var5 = 'channel_details_header';
    var2['CHANNEL_DETAILS_HEADER'] = var5;
    var5 = 'dm_list';
    var2['DM_LIST'] = var5;
    var5 = 'individual_dm';
    var2['INDIVIDUAL_DM'] = var5;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function SearchSessionAnalyticsManager() {
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
        var2 = 'upsertState';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
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
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'getState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSearchContextId;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = this;
            var2 = var1.sessions;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getSessionId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = var2.sessionId;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSearchLocation';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                var1 = var2.searchLocation;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'refreshSearchQueryAnalyticsId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var4 = var5.upsertState;
            var3 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
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
        var2[4] = var1;
        var1 = {};
        var6 = 'getQueryId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                var1 = var2.searchQueryId;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'initialize';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = arg1;
            var5 = var1.searchContext;
            var6 = var1.searchLocation;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var5 = var3.bind(var4)(var5);
            var3 = this;
            var4 = var3.sessions;
            var3 = var4.set;
            var2 = _closure1_slot4;
            var2 = var2.bind(var1)(var6);
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getSearchContextId;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var2 = this;
            var3 = var2.sessions;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/managers/SearchSessionAnalyticsManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SearchEntrypointAnalyticsLocations'] = var2;
    return var1;
})();