// discord_common/js/packages/performance-utils/performance-polyfill.js
module.exports = (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var4 = native1;
        var2 = global;
        var3 = var2.Date;
        var3 = var3.now;
        var6 = var2.Date;
        if(var3) { _fun0001_ip = 52; continue _fun0001 }
 27:
        var3 = var6.prototype;
        var5 = Object.create(var3, {constructor: {value: var6}});
        var10 = var5;
        var3 = new var10[var6](var9);
        var3 = var3 instanceof Object ? var3 : var5;
        var3 = var3 - 0;
        _fun0001_ip = 61; continue _fun0001;
 52:
        var5 = var6.now;
        var3 = var5.bind(var6)();
 61:
        var _closure1_slot0 = var3;
        var3 = var4.performance;
        if(var3) { _fun0001_ip = 76; continue _fun0001 }
 74:
        var3 = {};
 76:
        var _closure1_slot1 = var3;
        var5 = new Array(0);
        var _closure1_slot2 = var5;
        var5 = {};
        var _closure1_slot3 = var5;
        var5 = function u(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot2;
                var3 = var1.length;
                var1 = new Array(0);
                var2 = 0;
                var7 = var2 < var3;
                if(!var7) { _fun0002_ip = 72; continue _fun0002 }
 31:
                var7 = _closure1_slot2;
                var7 = var7[var2];
                var7 = var7[var6];
                if(!(var7 == var5)) { _fun0002_ip = 65; continue _fun0002 }
 47:
                var8 = var1.push;
                var7 = _closure1_slot2;
                var7 = var7[var2];
                var7 = var8.bind(var1)(var7);
 65:
                var2 = var2 + 1;
                if(var2 < var3) { _fun0002_ip = 31; continue _fun0002 }
 72:
                return var1;
            }
        };
        var _closure1_slot4 = var5;
        var5 = function f(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var8 = arg1;
                var7 = arg2;
                var1 = _closure1_slot2;
                var1 = var1.length;
                var2 = parseFloat(var1);
                var5 = var2 - 1;
                var4 = 1;
                var1 = undefined;
                var3 = var1 !== var7;
                if(!var2) { _fun0003_ip = 103; continue _fun0003 }
 36:
                var2 = _closure1_slot2;
                var10 = var2[var5];
                var2 = var10.entryType;
                var2 = var2 != var8;
                if(var2) { _fun0003_ip = 75; continue _fun0003 }
 57:
                var9 = var3;
                if(!var9) { _fun0003_ip = 72; continue _fun0003 }
 63:
                var10 = var10.name;
                var9 = var10 != var7;
 72:
                var2 = var9;
 75:
                if(var2) { _fun0003_ip = 94; continue _fun0003 }
 78:
                var9 = _closure1_slot2;
                var2 = var9.splice;
                var2 = var2.bind(var9)(var5, var4);
 94:
                var2 = parseFloat(var5);
                var5 = var2 - 1;
                if(var2) { _fun0003_ip = 36; continue _fun0003 }
 103:
                return var1;
            }
        };
        var _closure1_slot5 = var5;
        var5 = var3.now;
        if(var5) { _fun0001_ip = 158; continue _fun0001 }
 120:
        var5 = var3.webkitNow;
        if(var5) { _fun0001_ip = 135; continue _fun0001 }
 129:
        var5 = var3.mozNow;
 135:
        if(var5) { _fun0001_ip = 144; continue _fun0001 }
 138:
        var5 = var3.msNow;
 144:
        if(var5) { _fun0001_ip = 152; continue _fun0001 }
 147:
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = global;
                var1 = var2.Date;
                var1 = var1.now;
                var3 = var2.Date;
                if(var1) { _fun0004_ip = 47; continue _fun0004 }
 22:
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = var2;
                var1 = new var4[var3](var3);
                var1 = var1 instanceof Object ? var1 : var2;
                var2 = var1 - 0;
                _fun0004_ip = 56; continue _fun0004;
 47:
                var1 = var3.now;
                var2 = var1.bind(var3)();
 56:
                var1 = _closure1_slot0;
                var1 = var2 - var1;
                return var1;
            }
        };
 152:
        var3['now'] = var5;
 158:
        var5 = var3.mark;
        if(var5) { _fun0001_ip = 187; continue _fun0001 }
 167:
        var5 = var3.webkitMark;
        if(var5) { _fun0001_ip = 181; continue _fun0001 }
 176:
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
 181:
        var3['mark'] = var5;
 187:
        var5 = var3.measure;
        if(var5) { _fun0001_ip = 216; continue _fun0001 }
 196:
        var5 = var3.webkitMeasure;
        if(var5) { _fun0001_ip = 210; continue _fun0001 }
 205:
        var5 = function(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg2;
                var2 = arg3;
                var1 = undefined;
                if(!(var1 !== var2)) { _fun0005_ip = 30; continue _fun0005 }
 12:
                var4 = _closure1_slot3;
                var4 = var4[var2];
                if(!(var1 !== var4)) { _fun0005_ip = 216; continue _fun0005 }
 30:
                if(!(var1 !== var3)) { _fun0005_ip = 49; continue _fun0005 }
 34:
                var4 = _closure1_slot3;
                var4 = var4[var3];
                if(!(var1 !== var4)) { _fun0005_ip = 166; continue _fun0005 }
 49:
                var5 = _closure1_slot3;
                var5 = var5[var3];
                var8 = 0;
                if(!var5) { _fun0005_ip = 79; continue _fun0005 }
 65:
                var5 = _closure1_slot3;
                var5 = var5[var3];
                var8 = var5.startTime;
 79:
                var5 = _closure1_slot3;
                var5 = var5[var2];
                if(var5) { _fun0005_ip = 105; continue _fun0005 }
 90:
                var6 = _closure1_slot1;
                var5 = var6.now;
                var7 = var5.bind(var6)();
                _fun0005_ip = 119; continue _fun0005;
 105:
                var5 = _closure1_slot3;
                var5 = var5[var2];
                var7 = var5.startTime;
 119:
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
 166:
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
 216:
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
 210:
        var3['measure'] = var5;
 216:
        var5 = var3.getEntriesByType;
        if(var5) { _fun0001_ip = 245; continue _fun0001 }
 225:
        var5 = var3.webkitGetEntriesByType;
        if(var5) { _fun0001_ip = 239; continue _fun0001 }
 234:
        var5 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = 'entryType';
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
 239:
        var3['getEntriesByType'] = var5;
 245:
        var5 = var3.getEntriesByName;
        if(var5) { _fun0001_ip = 274; continue _fun0001 }
 254:
        var5 = var3.webkitGetEntriesByName;
        if(var5) { _fun0001_ip = 268; continue _fun0001 }
 263:
        var5 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = 'name';
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
 268:
        var3['getEntriesByName'] = var5;
 274:
        var5 = var3.clearMarks;
        if(var5) { _fun0001_ip = 303; continue _fun0001 }
 283:
        var5 = var3.webkitClearMarks;
        if(var5) { _fun0001_ip = 297; continue _fun0001 }
 292:
        var5 = function(arg1) {
            var4 = _closure1_slot5;
            var1 = undefined;
            var3 = 'mark';
            var2 = arg1;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
 297:
        var3['clearMarks'] = var5;
 303:
        var5 = var3.clearMeasures;
        if(var5) { _fun0001_ip = 332; continue _fun0001 }
 312:
        var5 = var3.webkitClearMeasures;
        if(var5) { _fun0001_ip = 326; continue _fun0001 }
 321:
        var5 = function(arg1) {
            var4 = _closure1_slot5;
            var1 = undefined;
            var3 = 'measure';
            var2 = arg1;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
 326:
        var3['clearMeasures'] = var5;
 332:
        var4['performance'] = var3;
        var3 = var2.define;
        var4 = 'function';
        var3 = typeof var3;
        var3 = var4 === var3;
        if(!var3) { _fun0001_ip = 388; continue _fun0001 }
 358:
        var4 = var2.define;
        var4 = var4.amd;
        if(var4) { _fun0001_ip = 385; continue _fun0001 }
 373:
        var5 = var2.define;
        var4 = var5.ajs;
 385:
        var3 = var4;
 388:
        if(!var3) { _fun0001_ip = 419; continue _fun0001 }
 391:
        var5 = var2.define;
        var4 = undefined;
        var3 = 'performance';
        var2 = new Array(0);
        var1 = function() {
            var1 = _closure1_slot1;
            return var1;
        };
        var1 = var5.bind(var4)(var3, var2, var1);
 419:
        var2 = native7;
        var1 = 0;
        var3 = var2[var1];
        var2 = native2;
        var1 = undefined;
        var4 = var2.bind(var1)(var3);
        var3 = var4.fileFinishedImporting;
        var2 = '../discord_common/js/packages/performance-utils/performance-polyfill.js';
        var2 = var3.bind(var4)(var2);
        return var1;
    }
})();