// app/modules/threads/native/showThreadBrowserModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/showThreadBrowserModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showThreadBrowserModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var3 = var5[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var3 = var6.trackThreadBrowserOpened;
            var3 = var3.bind(var6)();
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var5 = var3.bind(var4)();
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.isReady;
            var3 = var4.bind(var5)();
case 2:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5.navigate;
            var3 = {};
            var6 = arg1;
            var6 = var6.id;
            var3['channelId'] = var6;
            var2 = _closure1_slot2;
            var2 = var2.THREADS;
            var3['initialRouteName'] = var2;
            var2 = 'sidebar';
            var2 = var4.bind(var5)(var2, var3);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();