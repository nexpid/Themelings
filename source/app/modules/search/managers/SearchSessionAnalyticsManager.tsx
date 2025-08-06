// app/modules/search/managers/SearchSessionAnalyticsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function createSessionState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = arg2;
            var1 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.v4;
            var2 = var2.bind(var4)();
            var1['sessionId'] = var2;
            var2 = null;
            var6 = var2 != var5;
            var4 = null;
            if(!var6) { _fun0001_ip = 62; continue _fun0001 }
 59:
            var4 = var5;
 62:
            var1['searchLocation'] = var4;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 79; continue _fun0001 }
 76:
            var2 = var3;
 79:
            var1['selectedSearchTab'] = var2;
            var2 = 0;
            var1['searchCount'] = var2;
            var1['searchWithFiltersCount'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var6 = var5.bind(var1)(var4);
    var4 = var6.prototype;
    var13 = Object.create(var4, {constructor: {value: var6}});
    var12 = 'SearchSessionAnalyticsManager';
    var4 = new var13[var6](var12, var11);
    var4 = {};
    var5 = 'guild';
    var4['GUILD'] = var5;
    var5 = 'channel_header';
    var4['CHANNEL_HEADER'] = var5;
    var5 = 'channel_details_header';
    var4['CHANNEL_DETAILS_HEADER'] = var5;
    var5 = 'dm_list';
    var4['DM_LIST'] = var5;
    var5 = 'individual_dm';
    var4['INDIVIDUAL_DM'] = var5;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function SearchSessionAnalyticsManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var4 = var2.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['sessions'] = var4;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['searchQueryIds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'upsertState';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                if(!(var4 == var6)) { _fun0002_ip = 72; continue _fun0002 }
 64:
                var3 = _closure1_slot4;
                var6 = var3.bind(var1)();
 72:
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
        var2 = new Array(15);
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
        var6 = 'incrementSearchCount';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var1 = var4.getState;
                var9 = var1.bind(var4)(var5);
                var3 = {};
                var8 = null;
                var6 = var8 == var9;
                var1 = undefined;
                var2 = undefined;
                if(var6) { _fun0003_ip = 38; continue _fun0003 }
 32:
                var2 = var9.searchCount;
 38:
                var10 = var8 != var2;
                var7 = 0;
                if(!var10) { _fun0003_ip = 50; continue _fun0003 }
 47:
                var7 = var2;
 50:
                var2 = 1;
                var7 = var7 + var2;
                var3['searchCount'] = var7;
                var7 = arg2;
                if(!var7) { _fun0003_ip = 106; continue _fun0003 }
 69:
                var10 = var8 == var9;
                var7 = undefined;
                if(var10) { _fun0003_ip = 84; continue _fun0003 }
 78:
                var7 = var9.searchWithFiltersCount;
 84:
                var8 = var8 != var7;
                var6 = 0;
                if(!var8) { _fun0003_ip = 96; continue _fun0003 }
 93:
                var6 = var7;
 96:
                var2 = var6 + var2;
                var3['searchWithFiltersCount'] = var2;
 106:
                var2 = var4.upsertState;
                var2 = var2.bind(var4)(var5, var3);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSearchCount';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 34; continue _fun0004 }
 28:
                var2 = var3.searchCount;
 34:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0004_ip = 46; continue _fun0004 }
 43:
                var1 = var2;
 46:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getSearchWithFiltersCount';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0005_ip = 34; continue _fun0005 }
 28:
                var2 = var3.searchWithFiltersCount;
 34:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0005_ip = 46; continue _fun0005 }
 43:
                var1 = var2;
 46:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getSearchCountWithoutFilters';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var6 = arg1;
            var5 = this;
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var1 = var5.getSearchCount;
            var2 = var1.bind(var5)(var6);
            var1 = var5.getSearchWithFiltersCount;
            var1 = var1.bind(var5)(var6);
            var2 = var2 - var1;
            var1 = 0;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'setSelectedSearchTab';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg2;
                var4 = this;
                var2 = null;
                if(!(var2 != var1)) { _fun0006_ip = 34; continue _fun0006 }
 12:
                var3 = var4.upsertState;
                var2 = {};
                var2['selectedSearchTab'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
 34:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getSessionId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0007_ip = 34; continue _fun0007 }
 28:
                var1 = var2.sessionId;
 34:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getSearchLocation';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0008_ip = 34; continue _fun0008 }
 28:
                var1 = var2.searchLocation;
 34:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'refreshSearchQueryAnalyticsId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 4;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.getSearchContextId;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = this;
            var4 = var2.searchQueryIds;
            var3 = var4.set;
            var2 = 3;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.v4;
            var2 = var2.bind(var6)();
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getQueryId';
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
            var2 = var1.searchQueryIds;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getSelectedSearchTab';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = this;
                var2 = var3.getState;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0009_ip = 34; continue _fun0009 }
 28:
                var1 = var2.selectedSearchTab;
 34:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'initialize';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = arg1;
                var3 = this;
                var7 = var1.searchContext;
                var10 = var1.initialTab;
                var4 = var1.initializeSearchQueryId;
                var9 = var1.searchLocation;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.getSearchContextId;
                var5 = var5.bind(var6)(var7);
                var7 = var3.sessions;
                var6 = var7.has;
                var6 = var6.bind(var7)(var5);
                if(var6) { _fun0010_ip = 112; continue _fun0010 }
 85:
                var8 = var3.sessions;
                var7 = var8.set;
                var6 = _closure1_slot4;
                var6 = var6.bind(var1)(var10, var9);
                var6 = var7.bind(var8)(var5, var6);
 112:
                if(!var4) { _fun0010_ip = 134; continue _fun0010 }
 115:
                var7 = var3.searchQueryIds;
                var6 = var7.has;
                var6 = var6.bind(var7)(var5);
                var4 = !var6;
 134:
                if(!var4) { _fun0010_ip = 184; continue _fun0010 }
 137:
                var4 = var3.searchQueryIds;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 3;
                var2 = var7[var2];
                var6 = var6.bind(var1)(var2);
                var2 = var6.v4;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var4)(var5, var2);
 184:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getSearchContextId;
            var3 = arg1;
            var4 = var4.bind(var5)(var3);
            var5 = var2.sessions;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var3 = var2.searchQueryIds;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'hasSession';
        var1['key'] = var6;
        var5 = function value(arg1) {
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
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1['value'] = var5;
        var2[14] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = var2.prototype;
    var6 = Object.create(var5, {constructor: {value: var2}});
    var13 = var6;
    var5 = new var13[var2](var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/search/managers/SearchSessionAnalyticsManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['SearchEntrypointAnalyticsLocations'] = var4;
    var3['SearchSessionAnalyticsManager'] = var2;
    return var1;
})();