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
case 0:
            var1 = arg1;
            var4 = var1.content;
            var6 = 0;
            var3 = '';
            var2 = 0;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
case 2:
            var5 = var1.activity;
            var4 = null;
            var3 = var2;
            if(!(var4 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2 + 1;
case 4:
            var2 = var1.stickers;
            var2 = var2.length;
            var5 = var2 > var6;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var1.stickerItems;
            var2 = var2.length;
            var5 = var2 > var6;
case 6:
            var2 = var3;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3 + 1;
case 8:
            var3 = var1.components;
            var5 = var3.length;
            var3 = var2;
            if(!(var5 > var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var2 + 1;
case 10:
            var2 = var1.messageSnapshots;
            var5 = var2.length;
            var2 = var3;
            if(!(var5 > var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var3 + 1;
case 12:
            var3 = var1.poll;
            var1 = var2;
            if(!(var4 != var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var2 + 1;
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();