// app/modules/messages/ApplicationCommands.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = /<\\/([^\s]+):(\d+)>(?:\s?(.*))?/;
    var _closure1_slot1 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/ApplicationCommands.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getApplicationCommand(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = var4.exec;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = undefined;
            var2 = 4;
            var3 = var4.bind(var3)(var5, var2);
            var2 = 0;
            var2 = var3[var2];
            var2 = 1;
            var7 = var3[var2];
            var2 = 2;
            var4 = var3[var2];
            var2 = 3;
            var6 = var3[var2];
            var3 = var1 == var7;
            var2 = null;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = {};
            var8 = var1 != var6;
            var5 = '';
            var10 = var5;
            if(!var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = global;
            var8 = var8.HermesInternal;
            var9 = var8.concat;
            var8 = ' ';
            var10 = var9.bind(var8)(var6);
case 7:
            var8 = global;
            var8 = var8.HermesInternal;
            var9 = var8.concat;
            var8 = '/';
            var8 = var9.bind(var8)(var7, var10);
            var3['content'] = var8;
            var3['name'] = var7;
            var3['id'] = var4;
            var4 = var1 != var6;
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var5 !== var6;
case 9:
            var3['hasOptions'] = var4;
            var2 = var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var3['getApplicationCommand'] = var2;
    return var1;
})();