// app/modules/bidi/IsolateString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/bidi/IsolateString.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = '\u2068';
    var3['FSI'] = var4;
    var4 = '\u2069';
    var3['PDI'] = var4;
    var2 = function isolate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var4 = var1.MessageBidiHandlingExperiment;
            var2 = var4.getConfig;
            var1 = {};
            var5 = 'isolateForNotification';
            var1['location'] = var5;
            var1 = var2.bind(var4)(var1);
            var2 = var1.isolateMentionsInNotifications;
            var1 = var3;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var2 = '\u2068';
            var3 = var2 + var3;
            var2 = '\u2069';
            var1 = var3 + var2;
case 6:
            return var1;
        }
    };
    var3['isolate'] = var2;
    return var1;
})();