// app/lib/StateManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function StateManager() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
                var2 = true;
 14:
                var5 = _closure1_slot2;
                var4 = _closure2_slot0;
                var4 = var5.bind(var1)(var3, var4);
                var3['alwaysUpdateState'] = var2;
                var2 = false;
                var3['dirty'] = var2;
                var2 = var3.getInitialState;
                var2 = var2.bind(var3)();
                var3['state'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'shouldCommit';
        var1['key'] = var2;
        var2 = function value() {
            var1 = true;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'setState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var1 = {};
            var4 = var2.state;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var4 = arg1;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var2['state'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getState';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.state;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = false;
            var2['dirty'] = var1;
            var1 = var2.getInitialState;
            var1 = var1.bind(var2)();
            var2['state'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'update';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arguments[0];
                var1 = arguments[1];
                var4 = this;
                var5 = undefined;
                if(!(var6 === var5)) { _fun0002_ip = 17; continue _fun0002 }
 15:
                var6 = {};
 17:
                if(!(var1 === var5)) { _fun0002_ip = 23; continue _fun0002 }
 21:
                var1 = false;
 23:
                var3 = var4.getNextState;
                var2 = {};
                var12 = var4.state;
                var13 = var2;
                var7 = copyDataProperties(var13, var12);
                var13 = var2;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var2 = var3.bind(var4)(var2);
                if(var1) { _fun0002_ip = 173; continue _fun0002 }
 63:
                var1 = global;
                var3 = var1.Object;
                var1 = var3.keys;
                var8 = var1.bind(var3)(var2);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var3 = 2;
                if(!var1) { _fun0002_ip = 221; continue _fun0002 }
 101:
                var9 = var8[var7];
                var1 = var4.dirty;
                if(var1) { _fun0002_ip = 153; continue _fun0002 }
 114:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var3];
                var11 = var11.bind(var5)(var10);
                var10 = var4.state;
                var10 = var10[var9];
                var9 = var2[var9];
                var9 = var11.bind(var5)(var10, var9);
                var1 = !var9;
 153:
                var4['dirty'] = var1;
                var7 = var7 + 1;
                var1 = var8.length;
                if(var7 < var1) { _fun0002_ip = 101; continue _fun0002 }
 171:
                _fun0002_ip = 221; continue _fun0002;
 173:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var4.getInitialState;
                var1 = var1.bind(var4)();
                var1 = var3.bind(var5)(var2, var1);
                var1 = !var1;
                var4['dirty'] = var1;
 221:
                var1 = var4.dirty;
                if(!var1) { _fun0002_ip = 242; continue _fun0002 }
 230:
                var3 = var4.shouldCommit;
                var1 = var3.bind(var4)();
 242:
                var3 = var1;
                if(var3) { _fun0002_ip = 254; continue _fun0002 }
 248:
                var3 = var4.alwaysUpdateState;
 254:
                if(!var3) { _fun0002_ip = 263; continue _fun0002 }
 257:
                var4['state'] = var2;
 263:
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0002_ip = 298; continue _fun0002 }
 272:
                var2 = false;
                var4['dirty'] = var2;
                var3 = var4.didCommit;
                var2 = var4.state;
                var2 = var3.bind(var4)(var2);
                var1 = true;
 298:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'forceUpdate';
        var1['key'] = var6;
        var5 = function value() {
            var3 = this;
            var1 = false;
            var3['dirty'] = var1;
            var2 = var3.didCommit;
            var1 = var3.state;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/StateManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();