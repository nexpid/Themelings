// app/polyfills.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var7 = metroImportDefault;
    var4 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var3.bind(var1)(var5);
    var8 = var5.NativeEventEmitter;
    var5 = 1;
    var6 = var4[var5];
    var6 = var3.bind(var1)(var6);
    var6 = 2;
    var6 = var4[var6];
    var10 = var7.bind(var1)(var6);
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var11 = var7;
    var6 = new var11[var8](var10, var9);
    var8 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot2 = var5;
    var6 = {};
    var _closure1_slot3 = var6;
    var _closure1_slot4 = var5;
    var5 = {};
    var _closure1_slot5 = var5;
    var7 = var8.addListener;
    var6 = 'timer';
    var5 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.id;
            var3 = _closure1_slot3;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 41; continue _fun0001 }
 25:
            var1 = _closure1_slot3;
            var3 = var1[var2];
            var3 = var3.bind(var1)();
            var1 = delete var1[var2];
 41:
            var1 = undefined;
            return var1;
        }
    };
    var5 = var7.bind(var8)(var6, var5);
    var7 = var8.addListener;
    var6 = 'interval';
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.id;
            var3 = _closure1_slot5;
            var4 = var3[var1];
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 37; continue _fun0002 }
 25:
            var2 = _closure1_slot5;
            var1 = var2[var1];
            var1 = var1.bind(var2)();
 37:
            var1 = undefined;
            return var1;
        }
    };
    var5 = var7.bind(var8)(var6, var5);
    var5 = global;
    var7 = var5.window;
    var6 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = arg2;
            var3 = null;
            var2 = var3 != var1;
            var4 = 0;
            if(!var2) { _fun0003_ip = 20; continue _fun0003 }
 17:
            var4 = var1;
 20:
            var1 = _closure1_slot2;
            var1 = parseFloat(var1);
            var6 = var1 + 1;
            _closure1_slot2 = var6;
            if(!(var3 != var5)) { _fun0003_ip = 82; continue _fun0003 }
 41:
            var3 = _closure1_slot3;
            var3[var1] = var5;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setTimeout;
            var2 = var2.bind(var3)(var1, var4);
 82:
            return var1;
        }
    };
    var7['setTimeout'] = var6;
    var7 = var5.window;
    var6 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 18; continue _fun0004 }
 12:
            var2 = 0;
            var1 = var2 !== var3;
 18:
            if(!var1) { _fun0004_ip = 65; continue _fun0004 }
 21:
            var2 = _closure1_slot3;
            var2 = delete var2[var3];
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.clearTimeout;
            var1 = var1.bind(var2)(var3);
 65:
            var1 = undefined;
            return var1;
        }
    };
    var7['clearTimeout'] = var6;
    var7 = var5.window;
    var6 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var1 = arg2;
            var3 = null;
            var4 = var3 != var1;
            var2 = 0;
            if(!var4) { _fun0005_ip = 20; continue _fun0005 }
 17:
            var2 = var1;
 20:
            var4 = 4;
            var2 = var2 < var4;
            if(var2) { _fun0005_ip = 33; continue _fun0005 }
 30:
            var4 = var1;
 33:
            var1 = _closure1_slot4;
            var1 = parseFloat(var1);
            var6 = var1 + 1;
            _closure1_slot4 = var6;
            if(!(var3 != var5)) { _fun0005_ip = 96; continue _fun0005 }
 54:
            var3 = _closure1_slot5;
            var3[var1] = var5;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setInterval;
            var2 = var2.bind(var3)(var1, var4);
 96:
            return var1;
        }
    };
    var7['setInterval'] = var6;
    var7 = var5.window;
    var6 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0006_ip = 18; continue _fun0006 }
 12:
            var2 = 0;
            var1 = var2 !== var3;
 18:
            if(!var1) { _fun0006_ip = 65; continue _fun0006 }
 21:
            var2 = _closure1_slot5;
            var2 = delete var2[var3];
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.clearInterval;
            var1 = var1.bind(var2)(var3);
 65:
            var1 = undefined;
            return var1;
        }
    };
    var7['clearInterval'] = var6;
    var6 = var5.String;
    var6 = var6.prototype;
    var6 = var6.toLocaleLowerCase;
    var _closure1_slot6 = var6;
    var5 = var5.String;
    var5 = var5.prototype;
    var2 = function toLocaleLowerCase() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = this;
            var3 = var4.length;
            var1 = '';
            var2 = 0;
            if(!(var2 !== var3)) { _fun0007_ip = 35; continue _fun0007 }
 18:
            var3 = _closure1_slot6;
            var2 = var3.call;
            var1 = var2.bind(var3)(var4);
 35:
            return var1;
        }
    };
    var5['toLocaleLowerCase'] = var2;
    var2 = 3;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'polyfills.android.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();