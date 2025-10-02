// app/stores/game_library/LibraryApplicationStatisticsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Distributors;
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LibraryApplicationStatisticsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'applicationStatistics';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'lastFetched';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGameDuration';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot8;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var2.total_duration;
case 9:
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
case 0:
                var2 = _closure1_slot8;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
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
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasApplicationStatistic';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
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
            var2 = _closure1_slot8;
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
case 0:
                var2 = _closure1_slot8;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 != var2;
                var3 = 0;
                var1 = 0;
                if(!var4) { _fun0005_ip = 13; continue _fun0005 }
case 14:
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
                if(!(var3 !== var7)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var5 = 1;
                if(!(var7 >= var5)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var5 = 2;
                var5 = var7 < var5;
                var2 = 40;
                if(var5) { _fun0005_ip = 15; continue _fun0005 }
case 17:
                var5 = 2;
                if(!(var7 >= var5)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var5 = 4;
                var5 = var7 < var5;
                var2 = 30;
                if(var5) { _fun0005_ip = 15; continue _fun0005 }
case 19:
                var5 = 4;
                if(!(var7 >= var5)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var5 = 7;
                var5 = var7 < var5;
                var2 = 20;
                if(var5) { _fun0005_ip = 15; continue _fun0005 }
case 21:
                var5 = 7;
                var5 = var7 >= var5;
                var2 = 0;
                if(!var5) { _fun0005_ip = 15; continue _fun0005 }
case 23:
                var2 = 10;
case 15:
                if(!(var3 !== var6)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var5 = 1;
                if(!(var6 >= var5)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var5 = 12;
                if(!(!(var6 < var5))) { _fun0005_ip = 28; continue _fun0005 }
case 26:
                var5 = 12;
                if(!(var6 >= var5)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var5 = 168;
                if(!(!(var6 < var5))) { _fun0005_ip = 31; continue _fun0005 }
case 29:
                var5 = 168;
                if(!(var6 >= var5)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var5 = 720;
                if(!(!(var6 < var5))) { _fun0005_ip = 34; continue _fun0005 }
case 32:
                var5 = 720;
                var1 = var2;
                if(!(var6 >= var5)) { _fun0005_ip = 13; continue _fun0005 }
case 35:
                var1 = var2 + var4;
                _fun0005_ip = 13; continue _fun0005;
case 34:
                var4 = 40;
                var1 = var2 + var4;
                _fun0005_ip = 13; continue _fun0005;
case 31:
                var4 = 20;
                var1 = var2 + var4;
                _fun0005_ip = 13; continue _fun0005;
case 28:
                var4 = 10;
                var1 = var2 + var4;
                _fun0005_ip = 13; continue _fun0005;
case 24:
                var1 = var2 + var3;
case 13:
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
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleCurrentUserStatisticFetch(arg1) {
        var1 = arg1;
        var3 = var1.statistics;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = _closure1_slot8;
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
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_ACTIVITY_STATISTICS_FETCH_SUCCESS'] = var9;
    var9 = function handleActivityUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.duration;
            var3 = var1.applicationId;
            var9 = var1.distributor;
            var2 = _closure1_slot8;
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
            if(!var8) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var8 = var10.total_duration;
            var10 = var10.total_discord_sku_duration;
            var11 = var11 != var10;
            var6 = 0;
            if(!var11) { _fun0006_ip = 8; continue _fun0006 }
case 38:
            var6 = var10;
case 8:
            var2 = var6;
            var4 = var8;
case 36:
            var6 = var4 + var7;
            var4 = _closure1_slot7;
            var8 = var4.DISCORD;
            var4 = var2;
            if(!(var9 === var8)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var4 = var2 + var7;
case 39:
            var2 = _closure1_slot8;
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
    var9 = function resetStore() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = null;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var4 = function handleConnectionOpen() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.GameMentionsUserExperiment;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var6 = 'LibraryApplicationStatisticsStore.handleConnectionOpen';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enabled;
            if(!var3) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchActivityStatistics;
            var2 = var2.bind(var3)();
case 41:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var4;
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
    var4 = 'stores/game_library/LibraryApplicationStatisticsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();