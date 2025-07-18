// app/lib/Record.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native3;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = function() {
        var4 = function Record() {
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var1 = {};
        var2 = 'toJS';
        var1['key'] = var2;
        var2 = function value() {
            var1 = {};
            var3 = this;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = arg1;
                var4 = arg2;
                var7 = this;
                var3 = var7[var6];
                var1 = global;
                var2 = var1.Date;
                var2 = var4 instanceof var2;
                if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 28:
                var1 = var1.Date;
                var1 = var3 instanceof var1;
                if(!var1) { _fun0001_ip = 68; continue _fun0001 }
 41:
                var1 = var4.getTime;
                var5 = var1.bind(var4)();
                var1 = var3.getTime;
                var2 = var1.bind(var3)();
                var1 = var7;
                if(!(var5 !== var2)) { _fun0001_ip = 123; continue _fun0001 }
 68:
                var2 = var7;
                if(!(var3 !== var4)) { _fun0001_ip = 120; continue _fun0001 }
 75:
                var5 = var7.constructor;
                var3 = {};
                var9 = var3;
                var8 = var7;
                var7 = copyDataProperties(var9, var8);
                var3[var6] = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var10 = var4;
                var9 = var3;
                var3 = new var10[var5](var9, var8);
                var2 = var3 instanceof Object ? var3 : var4;
 120:
                var1 = var2;
 123:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'merge';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var13 = arg1;
                var2 = this;
                var11 = var13;
                var3 = null;
                var5 = undefined;
                var7 = global;
                var6 = null;
                var1 = undefined;
                var4 = null;
                for(var8 in var11)
 32:
                {
                    var17 = var6;
                    var4 = var17;
 50:
                    var18 = var8;
                    var14 = var13.hasOwnProperty;
                    var14 = var14.bind(var13)(var18);
                    var6 = var17;
                    if(!var14) { _fun0002_ip = 32; continue _fun0002 }
 70:
                    var15 = var2[var18];
                    var14 = var13[var18];
                    var16 = var7.Date;
                    var16 = var14 instanceof var16;
                    if(!var16) { _fun0002_ip = 101; continue _fun0002 }
 91:
                    var19 = var7.Date;
                    var16 = var15 instanceof var19;
 101:
                    if(!var16) { _fun0002_ip = 128; continue _fun0002 }
 104:
                    var19 = var14.getTime;
                    var20 = var19.bind(var14)();
                    var19 = var15.getTime;
                    var19 = var19.bind(var15)();
                    var16 = var20 === var19;
 128:
                    var6 = var17;
                    var5 = var15;
                    var1 = var14;
                    if(var16) { _fun0002_ip = 32; continue _fun0002 }
 140:
                    var6 = var17;
                    if(!(var15 !== var14)) { _fun0002_ip = 180; continue _fun0002 }
 147:
                    var16 = var17;
                    if(!(var3 == var17)) { _fun0002_ip = 169; continue _fun0002 }
 154:
                    var17 = {};
                    var22 = var17;
                    var21 = var2;
                    var19 = copyDataProperties(var22, var21);
                    var16 = var17;
 169:
                    var17 = var13[var18];
                    var16[var18] = var17;
                    var6 = var16;
 180:
                    var5 = var15;
                    var1 = var14;
                    _fun0002_ip = 32; continue _fun0002;
                }
 191:
                var1 = var2;
                if(!(var3 != var4)) { _fun0002_ip = 226; continue _fun0002 }
 198:
                var2 = var2.constructor;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var23 = var3;
                var22 = var4;
                var2 = new var23[var2](var22, var21);
                var1 = var2 instanceof Object ? var2 : var3;
 226:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'update';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var1 = arg2;
                var6 = arg3;
                var3 = this;
                var5 = null;
                var2 = var1;
                if(!(var5 == var6)) { _fun0003_ip = 26; continue _fun0003 }
 21:
                var2 = undefined;
                var6 = var1;
 26:
                var9 = var3[var4];
                var1 = _closure2_slot0;
                var1 = var9 instanceof var1;
                var5 = var9;
                if(var1) { _fun0003_ip = 117; continue _fun0003 }
 47:
                var1 = global;
                var7 = var1.Array;
                var7 = var9 instanceof var7;
                if(var7) { _fun0003_ip = 95; continue _fun0003 }
 62:
                var1 = var1.Object;
                var7 = var9 instanceof var1;
                var1 = var9;
                if(!var7) { _fun0003_ip = 93; continue _fun0003 }
 78:
                var7 = {};
                var12 = var7;
                var11 = var9;
                var8 = copyDataProperties(var12, var11);
                var1 = var7;
 93:
                _fun0003_ip = 114; continue _fun0003;
 95:
                var7 = new Array(0);
                var10 = 0;
                var12 = var7;
                var11 = var9;
                var8 = arraySpread(var12, var11, var10);
                var1 = var7;
 114:
                var5 = var1;
 117:
                var1 = undefined;
                if(!(var1 === var5)) { _fun0003_ip = 126; continue _fun0003 }
 123:
                var5 = var2;
 126:
                var2 = var3.set;
                var1 = var6.bind(var1)(var5);
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot2 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function TypedRecord() {
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'toJS';
        var1['key'] = var2;
        var2 = function value() {
            var1 = {};
            var3 = this;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.merge;
            var1 = {};
            var5 = arg2;
            var4 = arg1;
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'merge';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var10 = arg1;
                var2 = this;
                var8 = var10;
                var3 = null;
                var1 = null;
                var4 = null;
                for(var5 in var8)
 23:
                {
                    var11 = var1;
                    var4 = var11;
 38:
                    var12 = var5;
                    var13 = var10.hasOwnProperty;
                    var13 = var13.bind(var10)(var12);
                    var1 = var11;
                    if(!var13) { _fun0004_ip = 23; continue _fun0004 }
 58:
                    var14 = var10[var12];
                    var13 = var2[var12];
                    var1 = var11;
                    if(var13 === var14) { _fun0004_ip = 23; continue _fun0004 }
 73:
                    var1 = var11;
                    if(!(var3 == var11)) { _fun0004_ip = 90; continue _fun0004 }
 80:
                    var11 = var2.toJS;
                    var1 = var11.bind(var2)();
 90:
                    var11 = var10[var12];
                    var1[var12] = var11;
                    _fun0004_ip = 23; continue _fun0004;
                }
 100:
                var1 = var2;
                if(!(var3 != var4)) { _fun0004_ip = 135; continue _fun0004 }
 107:
                var2 = var2.constructor;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var16 = var3;
                var15 = var4;
                var2 = new var16[var2](var15, var14);
                var1 = var2 instanceof Object ? var2 : var3;
 135:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'update';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = arg2;
                var3 = this;
                var8 = var3[var4];
                var2 = _closure1_slot2;
                var2 = var8 instanceof var2;
                var6 = var8;
                if(var2) { _fun0005_ip = 100; continue _fun0005 }
 30:
                var2 = global;
                var5 = var2.Array;
                var5 = var8 instanceof var5;
                if(var5) { _fun0005_ip = 78; continue _fun0005 }
 45:
                var2 = var2.Object;
                var5 = var8 instanceof var2;
                var2 = var8;
                if(!var5) { _fun0005_ip = 76; continue _fun0005 }
 61:
                var5 = {};
                var11 = var5;
                var10 = var8;
                var7 = copyDataProperties(var11, var10);
                var2 = var5;
 76:
                _fun0005_ip = 97; continue _fun0005;
 78:
                var5 = new Array(0);
                var9 = 0;
                var11 = var5;
                var10 = var8;
                var7 = arraySpread(var11, var10, var9);
                var2 = var5;
 97:
                var6 = var2;
 100:
                var5 = undefined;
                if(!(var5 === var6)) { _fun0005_ip = 109; continue _fun0005 }
 106:
                var6 = var1;
 109:
                var2 = var3.set;
                var1 = arg3;
                var1 = var1.bind(var5)(var6);
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 2;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/Record.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['TypedRecord'] = var2;
    return var1;
})();