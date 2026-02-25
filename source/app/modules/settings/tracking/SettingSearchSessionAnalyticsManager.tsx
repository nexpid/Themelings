// app/modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function SettingSearchSessionAnalyticsManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['searchSessionId'] = var2;
            var3['searchSessionStartTime'] = var2;
            var2 = false;
            var3['isQueryEnteredTracked'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getSearchSessionId';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.searchSessionId;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'isSessionActive';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.searchSessionId;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'initialize';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.v4;
            var2 = var2.bind(var4)();
            var3['searchSessionId'] = var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['searchSessionStartTime'] = var2;
            var2 = false;
            var3['isQueryEnteredTracked'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'maybeTrackQueryEntered';
        var1['key'] = var6;
        var6 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = this;
                var1 = var2.isQueryEnteredTracked;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.trackSettingSearchQueryEntered;
                var1 = var1.bind(var3)();
                var1 = true;
                var2['isQueryEnteredTracked'] = var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var3 = var2.searchSessionId;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = var2.searchSessionStartTime;
                var3 = var1 != var4;
case 4:
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.trackSettingSearchClosed;
                var3 = {};
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var7 = var6.bind(var7)();
                var6 = var2.searchSessionStartTime;
                var6 = var7 - var6;
                var3['searchSessionDuration'] = var6;
                var3 = var4.bind(var5)(var3);
                var2['searchSessionId'] = var1;
                var2['searchSessionStartTime'] = var1;
                var1 = false;
                var2['isQueryEnteredTracked'] = var1;
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();