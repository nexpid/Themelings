// discord_common/js/packages/performance-utils/performance-polyfill.js
module.exports = (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var4 = global;
        var2 = global;
        var3 = var2.Date;
        var3 = var3.now;
        var6 = var2.Date;
        if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var3 = var6.prototype;
        var5 = Object.create(var3, {constructor: {value: var6}});
        var10 = var5;
        var3 = new var10[var6](var9);
        var3 = var3 instanceof Object ? var3 : var5;
        var3 = var3 - 0;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var5 = var6.now;
        var3 = var5.bind(var6)();
case 4:
        var _closure1_slot0 = var3;
        var3 = var4.performance;
        if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
        var3 = {};
case 5:
        var _closure1_slot1 = var3;
        var5 = new Array(0);
        var _closure1_slot2 = var5;
        var5 = {};
        var _closure1_slot3 = var5;
        var5 = function u(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot2;
                var3 = var1.length;
                var1 = new Array(0);
                var2 = 0;
                var7 = var2 < var3;
                if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var7 = _closure1_slot2;
                var7 = var7[var2];
                var7 = var7[var6];
                if(!(var7 == var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var8 = var1.push;
                var7 = _closure1_slot2;
                var7 = var7[var2];
                var7 = var8.bind(var1)(var7);
case 9:
                var2 = var2 + 1;
                if(var2 < var3) { _fun0002_ip = 8; continue _fun0002 }
case 7:
                return var1;
            }
        };
        var _closure1_slot4 = var5;
        var5 = function f(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var1 = _closure1_slot2;
                var1 = var1.length;
                var2 = parseFloat(var1);
                var5 = var2 - 1;
                var4 = 1;
                var1 = undefined;
                var3 = var1 !== var7;
                if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = _closure1_slot2;
                var10 = var2[var5];
                var2 = var10.entryType;
                var2 = var2 != var8;
                if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var9 = var3;
                if(!var9) { _fun0003_ip = 7; continue _fun0003 }
case 15:
                var10 = var10.name;
                var9 = var10 != var7;
case 7:
                var2 = var9;
case 13:
                if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var9 = _closure1_slot2;
                var2 = var9.splice;
                var2 = var2.bind(var9)(var5, var4);
case 16:
                var2 = parseFloat(var5);
                var5 = var2 - 1;
                if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 11:
                return var1;
            }
        };
        var _closure1_slot5 = var5;
        var5 = var3.now;
        if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var5 = var3.webkitNow;
        if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var5 = var3.mozNow;
case 20:
        if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var5 = var3.msNow;
case 22:
        if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = global;
                var1 = var2.Date;
                var1 = var1.now;
                var3 = var2.Date;
                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 26:
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = var2;
                var1 = new var4[var3](var3);
                var1 = var1 instanceof Object ? var1 : var2;
                var2 = var1 - 0;
                _fun0004_ip = 27; continue _fun0004;
case 10:
                var1 = var3.now;
                var2 = var1.bind(var3)();
case 27:
                var1 = _closure1_slot0;
                var1 = var2 - var1;
                return var1;
            }
        };
case 24:
        var3['now'] = var5;
case 18:
        var5 = var3.mark;
        if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var5 = var3.webkitMark;
        if(var5) { _fun0001_ip = 30; continue _fun0001 }
case 31:
        var5 = function(arg1) {
            var3 = arg1;
            var2 = {};
            var2['name'] = var3;
            var1 = 'mark';
            var2['entryType'] = var1;
            var5 = _closure1_slot1;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var2['startTime'] = var4;
            var4 = 0;
            var2['duration'] = var4;
            var5 = _closure1_slot2;
            var4 = var5.push;
            var4 = var4.bind(var5)(var2);
            var1 = _closure1_slot3;
            var1[var3] = var2;
            var1 = undefined;
            return var1;
        };
case 30:
        var3['mark'] = var5;
case 28:
        var5 = var3.measure;
        if(var5) { _fun0001_ip = 32; continue _fun0001 }
case 33:
        var5 = var3.webkitMeasure;
        if(var5) { _fun0001_ip = 34; continue _fun0001 }
case 35:
        var5 = function(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg2;
                var2 = arg3;
                var1 = undefined;
                if(!(var1 !== var2)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var4 = _closure1_slot3;
                var4 = var4[var2];
                if(!(var1 !== var4)) { _fun0005_ip = 32; continue _fun0005 }
case 36:
                if(!(var1 !== var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var4 = _closure1_slot3;
                var4 = var4[var3];
                if(!(var1 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 38:
                var5 = _closure1_slot3;
                var5 = var5[var3];
                var8 = 0;
                if(!var5) { _fun0005_ip = 41; continue _fun0005 }
case 9:
                var5 = _closure1_slot3;
                var5 = var5[var3];
                var8 = var5.startTime;
case 41:
                var5 = _closure1_slot3;
                var5 = var5[var2];
                if(var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var6 = _closure1_slot1;
                var5 = var6.now;
                var7 = var5.bind(var6)();
                _fun0005_ip = 44; continue _fun0005;
case 42:
                var5 = _closure1_slot3;
                var5 = var5[var2];
                var7 = var5.startTime;
case 44:
                var6 = _closure1_slot2;
                var5 = var6.push;
                var4 = {};
                var9 = arg1;
                var4['name'] = var9;
                var9 = 'measure';
                var4['entryType'] = var9;
                var4['startTime'] = var8;
                var7 = var7 - var8;
                var4['duration'] = var7;
                var4 = var5.bind(var6)(var4);
                return var1;
case 40:
                var1 = global;
                var4 = var1.SyntaxError;
                var1 = "Failed to execute 'measure' on 'Performance': The mark '";
                var5 = var1 + var3;
                var1 = var4.prototype;
                var3 = Object.create(var1, {constructor: {value: var4}});
                var1 = "' does not exist.";
                var10 = var5 + var1;
                var11 = var3;
                var1 = new var11[var4](var10, var9);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
case 32:
                var1 = global;
                var3 = var1.SyntaxError;
                var1 = "Failed to execute 'measure' on 'Performance': The mark '";
                var4 = var1 + var2;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var1 = "' does not exist.";
                var10 = var4 + var1;
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
case 34:
        var3['measure'] = var5;
case 32:
        var5 = var3.getEntriesByType;
        if(var5) { _fun0001_ip = 45; continue _fun0001 }
case 46:
        var5 = var3.webkitGetEntriesByType;
        if(var5) { _fun0001_ip = 47; continue _fun0001 }
case 48:
        var5 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = 'entryType';
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
case 47:
        var3['getEntriesByType'] = var5;
case 45:
        var5 = var3.getEntriesByName;
        if(var5) { _fun0001_ip = 49; continue _fun0001 }
case 50:
        var5 = var3.webkitGetEntriesByName;
        if(var5) { _fun0001_ip = 51; continue _fun0001 }
case 52:
        var5 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = 'name';
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
case 51:
        var3['getEntriesByName'] = var5;
case 49:
        var5 = var3.clearMarks;
        if(var5) { _fun0001_ip = 53; continue _fun0001 }
case 54:
        var5 = var3.webkitClearMarks;
        if(var5) { _fun0001_ip = 55; continue _fun0001 }
case 56:
        var5 = function(arg1) {
            var4 = _closure1_slot5;
            var1 = undefined;
            var3 = 'mark';
            var2 = arg1;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
case 55:
        var3['clearMarks'] = var5;
case 53:
        var5 = var3.clearMeasures;
        if(var5) { _fun0001_ip = 57; continue _fun0001 }
case 58:
        var5 = var3.webkitClearMeasures;
        if(var5) { _fun0001_ip = 59; continue _fun0001 }
case 60:
        var5 = function(arg1) {
            var4 = _closure1_slot5;
            var1 = undefined;
            var3 = 'measure';
            var2 = arg1;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
case 59:
        var3['clearMeasures'] = var5;
case 57:
        var4['performance'] = var3;
        var3 = var2.define;
        var4 = 'function';
        var3 = typeof var3;
        var3 = var4 === var3;
        if(!var3) { _fun0001_ip = 61; continue _fun0001 }
case 62:
        var4 = var2.define;
        var4 = var4.amd;
        if(var4) { _fun0001_ip = 63; continue _fun0001 }
case 64:
        var5 = var2.define;
        var4 = var5.ajs;
case 63:
        var3 = var4;
case 61:
        if(!var3) { _fun0001_ip = 65; continue _fun0001 }
case 66:
        var5 = var2.define;
        var4 = undefined;
        var3 = 'performance';
        var2 = new Array(0);
        var1 = function() {
            var1 = _closure1_slot1;
            return var1;
        };
        var1 = var5.bind(var4)(var3, var2, var1);
case 65:
        var2 = dependencyMap;
        var1 = 0;
        var3 = var2[var1];
        var2 = require;
        var1 = undefined;
        var4 = var2.bind(var1)(var3);
        var3 = var4.fileFinishedImporting;
        var2 = '../discord_common/js/packages/performance-utils/performance-polyfill.js';
        var2 = var3.bind(var4)(var2);
        return var1;
    }
})();