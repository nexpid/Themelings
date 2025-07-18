// app/utils/ProcessArgs.tsx
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
        var5 = function ProcessArgs() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'get';
        var1['key'] = var3;
        var3 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var2 = var2.cached;
                var4 = null;
                if(!(var4 == var2)) { _fun0001_ip = 163; continue _fun0001 }
 22:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 2;
                var2 = var2[var7];
                var6 = undefined;
                var2 = var5.bind(var6)(var2);
                var5 = var4 == var2;
                var2 = undefined;
                if(var5) { _fun0001_ip = 113; continue _fun0001 }
 56:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var5 = var3.processUtils;
                var3 = var4 == var5;
                var2 = undefined;
                if(var3) { _fun0001_ip = 113; continue _fun0001 }
 88:
                var3 = var5.getMainArgvSync;
                var3 = var4 == var3;
                var2 = undefined;
                if(var3) { _fun0001_ip = 113; continue _fun0001 }
 103:
                var3 = var5.getMainArgvSync;
                var2 = var3.bind(var5)();
 113:
                var3 = var4 != var2;
                if(!var3) { _fun0001_ip = 132; continue _fun0001 }
 120:
                var6 = var2.length;
                var5 = 1;
                var3 = var6 > var5;
 132:
                if(!var3) { _fun0001_ip = 145; continue _fun0001 }
 135:
                var3 = var2.shift;
                var3 = var3.bind(var2)();
 145:
                var3 = _closure2_slot0;
                if(!(var4 == var2)) { _fun0001_ip = 157; continue _fun0001 }
 153:
                var2 = new Array(0);
 157:
                var3['cached'] = var2;
 163:
                var1 = _closure2_slot0;
                var1 = var1.cached;
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(6);
        var3[0] = var1;
        var1 = {};
        var6 = 'contains';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = _closure2_slot0;
            var1 = var2.get;
            var3 = var1.bind(var2)();
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'isEnvVariableTrue';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 2;
                var1 = var1[var6];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                if(!(var4 !== var1)) { _fun0002_ip = 137; continue _fun0002 }
 29:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var2 = var2.bind(var4)(var1);
                var1 = null;
                var5 = var1 == var2;
                var2 = undefined;
                if(var5) { _fun0002_ip = 111; continue _fun0002 }
 57:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var4)(var3);
                var3 = var3.process;
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0002_ip = 111; continue _fun0002 }
 89:
                var3 = var3.env;
                var1 = var1 == var3;
                var2 = undefined;
                if(var1) { _fun0002_ip = 111; continue _fun0002 }
 104:
                var1 = arg1;
                var2 = var3[var1];
 111:
                var1 = '1';
                if(!(var1 !== var2)) { _fun0002_ip = 133; continue _fun0002 }
 121:
                var1 = 'true';
                if(!(var1 !== var2)) { _fun0002_ip = 133; continue _fun0002 }
 129:
                var1 = false;
                return var1;
 133:
                var1 = true;
                return var1;
 137:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'isDisallowPopupsSet';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = var4.contains;
                var1 = '--disallow-popups';
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0003_ip = 48; continue _fun0003 }
 27:
                var4 = _closure2_slot0;
                var3 = var4.isEnvVariableTrue;
                var2 = 'DISCORD_DISALLOW_POPUPS';
                var1 = var3.bind(var4)(var2);
 48:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'isDiscordTestSet';
        var1['key'] = var6;
        var6 = function value() {
            var3 = _closure2_slot0;
            var2 = var3.isEnvVariableTrue;
            var1 = 'DISCORD_TEST';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'isDiscordGatewayPlaintextSet';
        var1['key'] = var6;
        var2 = function value() {
            var1 = false;
            return var1;
        };
        var1['value'] = var2;
        var3[5] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ProcessArgs.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ProcessArgs'] = var2;
    return var1;
})();