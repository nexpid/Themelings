// app/modules/messages/getDisplayFilename.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/messages/getDisplayFilename.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getDisplayFilename(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.title;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 24; continue _fun0001 }
 14:
            var2 = var1.filename;
            if(!(var3 == var2)) { _fun0001_ip = 32; continue _fun0001 }
 24:
            var2 = var1.filename;
            return var2;
 32:
            var4 = var1.filename;
            var3 = var4.lastIndexOf;
            var2 = '.';
            var5 = var3.bind(var4)(var2);
            var2 = 0;
            var3 = var5 > var2;
            var2 = '';
            if(!var3) { _fun0001_ip = 83; continue _fun0001 }
 66:
            var4 = var1.filename;
            var3 = var4.substr;
            var2 = var3.bind(var4)(var5);
 83:
            var1 = var1.title;
            var1 = var1 + var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();