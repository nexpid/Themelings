// app/modules/rpc/helpers/stripSensitiveLoggingData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var4.RPCCommands;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/helpers/stripSensitiveLoggingData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function stripSensitiveLoggingData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = {};
            var8 = arg1;
            var9 = var5;
            var1 = copyDataProperties(var9, var8);
            var1 = var5.args;
            var2 = 'object';
            var1 = typeof var1;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.cmd;
            var4 = 'string';
            var3 = typeof var3;
            var1 = var4 === var3;
case 2:
            var4 = var5;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.cmd;
            var6 = _closure1_slot0;
            var6 = var6.AUTHENTICATE;
            if(!(var6 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot0;
            var1 = var1.GET_PROVIDER_ACCESS_TOKEN;
            if(!(var1 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var1 = {};
            var9 = var1;
            var8 = var5;
            var3 = copyDataProperties(var9, var8);
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var3 = {};
            var9 = var3;
            var8 = var5;
            var6 = copyDataProperties(var9, var8);
            var6 = {};
            var8 = var5.args;
            var9 = var6;
            var5 = copyDataProperties(var9, var8);
            var7 = '<removed>';
            var5 = 'access_token';
            var6[var5] = var7;
            var5 = 'args';
            var3[var5] = var6;
            var1 = var3;
case 9:
            var4 = var1;
case 4:
            var1 = var4.data;
            var1 = typeof var1;
            var2 = var2 === var1;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var4.cmd;
            var3 = 'string';
            var1 = typeof var1;
            var2 = var3 === var1;
case 10:
            var1 = var4;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var4.cmd;
            var5 = _closure1_slot0;
            var5 = var5.AUTHENTICATE;
            if(!(var5 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot0;
            var2 = var2.GET_PROVIDER_ACCESS_TOKEN;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var2 = {};
            var9 = var2;
            var8 = var4;
            var3 = copyDataProperties(var9, var8);
            _fun0001_ip = 17; continue _fun0001;
case 14:
            var3 = {};
            var9 = var3;
            var8 = var4;
            var5 = copyDataProperties(var9, var8);
            var5 = {};
            var8 = var4.data;
            var9 = var5;
            var4 = copyDataProperties(var9, var8);
            var6 = '<removed>';
            var4 = 'access_token';
            var5[var4] = var6;
            var4 = 'data';
            var3[var4] = var5;
            var2 = var3;
case 17:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();