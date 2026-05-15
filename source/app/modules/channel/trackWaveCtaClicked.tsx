// app/modules/channel/trackWaveCtaClicked.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var4 = function getDmHasMessageHistory(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.getChannel;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.lastMessageId;
case 2:
            var1 = var2 != var1;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel/trackWaveCtaClicked.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getDmHasMessageHistory'] = var4;
    var2 = function trackWaveCtaClicked(arg1) {
        var6 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.WAVE_CTA_CLICKED;
        var2 = {};
        var8 = var6.channelId;
        var2['channel_id'] = var8;
        var8 = var6.source;
        var2['source'] = var8;
        var7 = _closure1_slot4;
        var6 = var6.channelId;
        var6 = var7.bind(var1)(var6);
        var2['dm_has_message_history'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackWaveCtaClicked'] = var2;
    return var1;
})();