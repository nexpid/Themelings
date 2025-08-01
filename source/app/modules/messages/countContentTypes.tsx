// app/modules/messages/countContentTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/messages/countContentTypes.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function countContentTypes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.content;
            var6 = 0;
            var3 = '';
            var2 = 0;
            if(!(var3 !== var4)) { _fun0001_ip = 23; continue _fun0001 }
 20:
            var2 = 1;
 23:
            var5 = var1.activity;
            var4 = null;
            var3 = var2;
            if(!(var4 != var5)) { _fun0001_ip = 41; continue _fun0001 }
 38:
            var3 = var2 + 1;
 41:
            var2 = var1.stickers;
            var2 = var2.length;
            var5 = var2 > var6;
            if(var5) { _fun0001_ip = 74; continue _fun0001 }
 59:
            var2 = var1.stickerItems;
            var2 = var2.length;
            var5 = var2 > var6;
 74:
            var2 = var3;
            if(!var5) { _fun0001_ip = 83; continue _fun0001 }
 80:
            var2 = var3 + 1;
 83:
            var3 = var1.components;
            var5 = var3.length;
            var3 = var2;
            if(!(var5 > var6)) { _fun0001_ip = 104; continue _fun0001 }
 101:
            var3 = var2 + 1;
 104:
            var2 = var1.messageSnapshots;
            var5 = var2.length;
            var2 = var3;
            if(!(var5 > var6)) { _fun0001_ip = 125; continue _fun0001 }
 122:
            var2 = var3 + 1;
 125:
            var3 = var1.poll;
            var1 = var2;
            if(!(var4 != var3)) { _fun0001_ip = 141; continue _fun0001 }
 138:
            var1 = var2 + 1;
 141:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();