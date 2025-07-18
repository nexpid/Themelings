// app/modules/markup/StaticRouteRendering.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/StaticRouteRendering.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = 'home';
            if(!(var1 !== var2)) { _fun0001_ip = 250; continue _fun0001 }
 14:
            var1 = 'guide';
            if(!(var1 !== var2)) { _fun0001_ip = 250; continue _fun0001 }
 27:
            var1 = 'browse';
            if(!(var1 !== var2)) { _fun0001_ip = 188; continue _fun0001 }
 40:
            var1 = 'customize';
            if(!(var1 !== var2)) { _fun0001_ip = 126; continue _fun0001 }
 50:
            var1 = 'linked-roles';
            if(!(var1 !== var2)) { _fun0001_ip = 64; continue _fun0001 }
 60:
            var1 = null;
            return var1;
 64:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ghtnsr;
            var1 = var2.bind(var3)(var1);
            return var1;
 126:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.h9mGOD;
            var1 = var2.bind(var3)(var1);
            return var1;
 188:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.et6wam;
            var1 = var2.bind(var3)(var1);
            return var1;
 250:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.VbpLyc;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['staticRouteToTranslation'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg3;
            var2 = 'linked-roles';
            var1 = arg1;
            if(!(var2 !== var1)) { _fun0002_ip = 20; continue _fun0002 }
 16:
            var1 = null;
            return var1;
 20:
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 91; continue _fun0002 }
 26:
            var4 = _closure1_slot2;
            var3 = var4.getRole;
            var2 = arg2;
            var3 = var3.bind(var4)(var5, var2);
            var4 = var1 == var3;
            var2 = null;
            if(var4) { _fun0002_ip = 89; continue _fun0002 }
 57:
            var5 = var3.tags;
            var6 = var1 == var5;
            var4 = undefined;
            if(var6) { _fun0002_ip = 78; continue _fun0002 }
 72:
            var4 = var5.guild_connections;
 78:
            var2 = null;
            if(!(var2 === var4)) { _fun0002_ip = 89; continue _fun0002 }
 84:
            var2 = var3.name;
 89:
            return var2;
 91:
            return var1;
        }
    };
    var3['staticRouteToItemString'] = var2;
    return var1;
})();