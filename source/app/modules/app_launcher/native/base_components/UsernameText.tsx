// app/modules/app_launcher/native/base_components/UsernameText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot2 = var7;
    var7 = var4.Fragment;
    var _closure1_slot3 = var7;
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/UsernameText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UsernameText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var6 = var1.guildId;
            var3 = var1.variant;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 28; continue _fun0001 }
 24:
            var3 = 'text-md/medium';
 28:
            var1 = var1.color;
            if(!(var1 === var4)) { _fun0001_ip = 43; continue _fun0001 }
 37:
            var1 = 'text-normal';
 43:
            var13 = {};
            var13['variant'] = var3;
            var13['color'] = var1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.getName;
            var1 = null;
            var11 = var3.bind(var5)(var6, var1, var2);
            var5 = var1 != var11;
            if(!var5) { _fun0001_ip = 111; continue _fun0001 }
 98:
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            var5 = var11 !== var1;
 111:
            var1 = var2.hasUniqueUsername;
            var1 = var1.bind(var2)();
            if(var1) { _fun0001_ip = 257; continue _fun0001 }
 127:
            var6 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = {};
            var7 = var2.toString;
            var8 = var7.bind(var2)();
            var7 = new Array(2);
            var7[0] = var8;
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 3;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var17 = var8;
            var16 = var13;
            var12 = copyDataProperties(var17, var16);
            var14 = 'text-muted';
            var12 = 'color';
            var8[var12] = var14;
            var12 = var2.discriminator;
            var14 = ['#'];
            var14[1] = var12;
            var12 = 'children';
            var8[var12] = var14;
            var8 = var6.bind(var4)(var9, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var12 = var6.bind(var4)(var3, var1);
            _fun0001_ip = 266; continue _fun0001;
 257:
            var1 = var2.toString;
            var12 = var1.bind(var2)();
 266:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var14 = 3;
            var1 = var1[var14];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var17 = var1;
            var16 = var13;
            var6 = copyDataProperties(var17, var16);
            var6 = var12;
            if(!var5) { _fun0001_ip = 442; continue _fun0001 }
 316:
            var8 = _closure1_slot2;
            var7 = _closure1_slot3;
            var5 = {};
            var9 = new Array(3);
            var9[0] = var11;
            var11 = ' ';
            var9[1] = var11;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var17 = var10;
            var16 = var13;
            var13 = copyDataProperties(var17, var16);
            var14 = 'text-muted';
            var13 = 'color';
            var10[var13] = var14;
            var13 = ['('];
            var13[1] = var12;
            var12 = ')';
            var13[2] = var12;
            var12 = 'children';
            var10[var12] = var13;
            var10 = var8.bind(var4)(var11, var10);
            var9[2] = var10;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 442:
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();