// app/modules/activities/utils/getIFrameSandboxAttributes.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = ['allow-pointer-lock', 'allow-scripts', 'allow-same-origin', 'allow-forms'];
    var _closure1_slot0 = var1;
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getIFrameSandboxAttributes.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getIFrameSandboxAttributes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.allowPopups;
            var3 = _closure1_slot0;
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 19:
            var6 = _closure1_slot0;
            var1 = new Array(2);
            var5 = 0;
            var7 = var1;
            var4 = arraySpread(var7, var6, var5);
            var2 = 'allow-popups';
            var1[var4] = var2;
            var2 = 1;
            var4 = var4 + var2;
            var2 = 'allow-popups-to-escape-sandbox';
            var1[var4] = var2;
            var3 = var1;
 68:
            var2 = var3.join;
            var1 = ' ';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();