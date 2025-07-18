// app/modules/messages/native/renderer/system_messages/getHumanizedCallDuration.tsx
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
    var2 = 'modules/messages/native/renderer/system_messages/getHumanizedCallDuration.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getHumanizedCallDuration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.call;
            var1 = null;
            var4 = var1 != var3;
            var3 = null;
            if(!var4) { _fun0001_ip = 29; continue _fun0001 }
 19:
            var2 = var2.call;
            var3 = var2.duration;
 29:
            var2 = var1 != var3;
            var1 = null;
            if(!var2) { _fun0001_ip = 48; continue _fun0001 }
 38:
            var2 = var3.humanize;
            var1 = var2.bind(var3)();
 48:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();