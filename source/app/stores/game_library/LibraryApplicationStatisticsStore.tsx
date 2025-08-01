// app/stores/game_library/LibraryApplicationStatisticsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Distributors;
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = null;
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LibraryApplicationStatisticsStore() {
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
        var1 = 'applicationStatistics';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'lastFetched';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGameDuration';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0003_ip = 31; continue _fun0003 }
 25:
                var1 = var2.total_duration;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastPlayedDateTime';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0004_ip = 67; continue _fun0004 }
 23:
                var3 = global;
                var4 = var3.Date;
                var5 = var2.last_played_at;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.getTime;
                var1 = var2.bind(var3)();
 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasApplicationStatistic';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot6;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCurrentUserStatisticsForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot6;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getQuickSwitcherScoreForApplication';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 != var2;
                var3 = 0;
                var1 = 0;
                if(!var4) { _fun0005_ip = 347; continue _fun0005 }
 30:
                var4 = global;
                var6 = var4.Date;
                var5 = var6.now;
                var8 = var5.bind(var6)();
                var7 = var4.Date;
                var9 = var2.last_played_at;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var5 = new var10[var7](var9, var8);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var6.getTime;
                var5 = var5.bind(var6)();
                var7 = var4.Math;
                var6 = var7.floor;
                var8 = var8 - var5;
                var5 = 86400000;
                var5 = var8 / var5;
                var7 = var6.bind(var7)(var5);
                var5 = var4.Math;
                var4 = var5.floor;
                var6 = var2.total_duration;
                var2 = 1000;
                var6 = var2 * var6;
                var2 = 3600000;
                var2 = var6 / var2;
                var6 = var4.bind(var5)(var2);
                var4 = 50;
                var2 = var4;
                if(!(var3 !== var7)) { _fun0005_ip = 248; continue _fun0005 }
 173:
                var5 = 1;
                if(!(var7 >= var5)) { _fun0005_ip = 193; continue _fun0005 }
 180:
                var5 = 2;
                var5 = var7 < var5;
                var2 = 40;
                if(var5) { _fun0005_ip = 248; continue _fun0005 }
 193:
                var5 = 2;
                if(!(var7 >= var5)) { _fun0005_ip = 213; continue _fun0005 }
 200:
                var5 = 4;
                var5 = var7 < var5;
                var2 = 30;
                if(var5) { _fun0005_ip = 248; continue _fun0005 }
 213:
                var5 = 4;
                if(!(var7 >= var5)) { _fun0005_ip = 233; continue _fun0005 }
 220:
                var5 = 7;
                var5 = var7 < var5;
                var2 = 20;
                if(var5) { _fun0005_ip = 248; continue _fun0005 }
 233:
                var5 = 7;
                var5 = var7 >= var5;
                var2 = 0;
                if(!var5) { _fun0005_ip = 248; continue _fun0005 }
 245:
                var2 = 10;
 248:
                if(!(var3 !== var6)) { _fun0005_ip = 343; continue _fun0005 }
 252:
                var5 = 1;
                if(!(var6 >= var5)) { _fun0005_ip = 266; continue _fun0005 }
 259:
                var5 = 12;
                if(!(!(var6 < var5))) { _fun0005_ip = 334; continue _fun0005 }
 266:
                var5 = 12;
                if(!(var6 >= var5)) { _fun0005_ip = 280; continue _fun0005 }
 273:
                var5 = 168;
                if(!(!(var6 < var5))) { _fun0005_ip = 325; continue _fun0005 }
 280:
                var5 = 168;
                if(!(var6 >= var5)) { _fun0005_ip = 297; continue _fun0005 }
 287:
                var5 = 720;
                if(!(!(var6 < var5))) { _fun0005_ip = 316; continue _fun0005 }
 297:
                var5 = 720;
                var1 = var2;
                if(!(var6 >= var5)) { _fun0005_ip = 347; continue _fun0005 }
 310:
                var1 = var2 + var4;
                _fun0005_ip = 347; continue _fun0005;
 316:
                var4 = 40;
                var1 = var2 + var4;
                _fun0005_ip = 347; continue _fun0005;
 325:
                var4 = 20;
                var1 = var2 + var4;
                _fun0005_ip = 347; continue _fun0005;
 334:
                var4 = 10;
                var1 = var2 + var4;
                _fun0005_ip = 347; continue _fun0005;
 343:
                var1 = var2 + var3;
 347:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LibraryApplicationStatisticsStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleCurrentUserStatisticFetch(arg1) {
        var1 = arg1;
        var3 = var1.statistics;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = _closure1_slot6;
            var1 = var3.application_id;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_ACTIVITY_STATISTICS_FETCH_SUCCESS'] = var9;
    var9 = function handleActivityUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var7 = var1.duration;
            var3 = var1.applicationId;
            var9 = var1.distributor;
            var2 = _closure1_slot6;
            var10 = var2[var3];
            var2 = global;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var12 = var4;
            var2 = new var12[var2](var11);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.toISOString;
            var5 = var2.bind(var4)();
            var11 = null;
            var8 = var11 != var10;
            var4 = 0;
            var2 = 0;
            if(!var8) { _fun0006_ip = 111; continue _fun0006 }
 81:
            var8 = var10.total_duration;
            var10 = var10.total_discord_sku_duration;
            var11 = var11 != var10;
            var6 = 0;
            if(!var11) { _fun0006_ip = 105; continue _fun0006 }
 102:
            var6 = var10;
 105:
            var2 = var6;
            var4 = var8;
 111:
            var6 = var4 + var7;
            var4 = _closure1_slot5;
            var8 = var4.DISCORD;
            var4 = var2;
            if(!(var9 === var8)) { _fun0006_ip = 136; continue _fun0006 }
 132:
            var4 = var2 + var7;
 136:
            var2 = _closure1_slot6;
            var1 = {};
            var1['application_id'] = var3;
            var1['total_duration'] = var6;
            var1['last_played_at'] = var5;
            var1['total_discord_sku_duration'] = var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['ACTIVITY_UPDATE_START'] = var9;
    var4 = function resetStore() {
        var1 = {};
        _closure1_slot6 = var1;
        var1 = null;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/game_library/LibraryApplicationStatisticsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();