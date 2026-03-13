// app/modules/channel/ChannelMuteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/ChannelMuteUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = {};
            var2 = true;
            var1['muted'] = var2;
            var2 = {};
            var2['selected_time_window'] = var7;
            var5 = 0;
            var4 = var7 > var5;
            var3 = null;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var5];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var6 = var4.bind(var5)();
            var5 = var6.add;
            var4 = 'second';
            var5 = var5.bind(var6)(var7, var4);
            var4 = var5.toISOString;
            var3 = var4.bind(var5)();
case 2:
            var2['end_time'] = var3;
            var1['mute_config'] = var2;
            return var1;
        }
    };
    var3['getMuteSettings'] = var2;
    return var1;
})();