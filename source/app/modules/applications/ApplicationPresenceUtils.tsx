// app/modules/applications/ApplicationPresenceUtils.tsx
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
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/ApplicationPresenceUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldDisableUserPresenceInChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var3 = var4.getChannel;
            var1 = arg2;
            var4 = var3.bind(var4)(var1);
            var3 = null;
            var1 = var3 != var4;
            if(!var1) { _fun0001_ip = 44; continue _fun0001 }
 38:
            var1 = var5.bot;
 44:
            if(!var1) { _fun0001_ip = 57; continue _fun0001 }
 47:
            var5 = var4.isPrivate;
            var1 = var5.bind(var4)();
 57:
            if(!var1) { _fun0001_ip = 85; continue _fun0001 }
 60:
            var5 = var4.rawRecipients;
            var4 = var5.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var1 = var3 == var2;
 85:
            return var1;
        }
    };
    var3['shouldDisableUserPresenceInChannel'] = var2;
    return var1;
})();