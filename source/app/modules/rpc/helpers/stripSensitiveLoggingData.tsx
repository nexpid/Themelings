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
 0:
            var5 = {};
            var8 = arg1;
            var9 = var5;
            var1 = copyDataProperties(var9, var8);
            var1 = var5.args;
            var2 = 'object';
            var1 = typeof var1;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 49; continue _fun0001 }
 32:
            var3 = var5.cmd;
            var4 = 'string';
            var3 = typeof var3;
            var1 = var4 === var3;
 49:
            var4 = var5;
            if(!var1) { _fun0001_ip = 163; continue _fun0001 }
 55:
            var3 = var5.cmd;
            var6 = _closure1_slot0;
            var6 = var6.AUTHENTICATE;
            if(!(var6 !== var3)) { _fun0001_ip = 106; continue _fun0001 }
 78:
            var1 = _closure1_slot0;
            var1 = var1.GET_PROVIDER_ACCESS_TOKEN;
            if(!(var1 !== var3)) { _fun0001_ip = 106; continue _fun0001 }
 92:
            var1 = {};
            var9 = var1;
            var8 = var5;
            var3 = copyDataProperties(var9, var8);
            _fun0001_ip = 160; continue _fun0001;
 106:
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
 160:
            var4 = var1;
 163:
            var1 = var4.data;
            var1 = typeof var1;
            var2 = var2 === var1;
            if(!var2) { _fun0001_ip = 195; continue _fun0001 }
 178:
            var1 = var4.cmd;
            var3 = 'string';
            var1 = typeof var1;
            var2 = var3 === var1;
 195:
            var1 = var4;
            if(!var2) { _fun0001_ip = 308; continue _fun0001 }
 201:
            var3 = var4.cmd;
            var5 = _closure1_slot0;
            var5 = var5.AUTHENTICATE;
            if(!(var5 !== var3)) { _fun0001_ip = 252; continue _fun0001 }
 224:
            var2 = _closure1_slot0;
            var2 = var2.GET_PROVIDER_ACCESS_TOKEN;
            if(!(var2 !== var3)) { _fun0001_ip = 252; continue _fun0001 }
 238:
            var2 = {};
            var9 = var2;
            var8 = var4;
            var3 = copyDataProperties(var9, var8);
            _fun0001_ip = 305; continue _fun0001;
 252:
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
 305:
            var1 = var2;
 308:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();