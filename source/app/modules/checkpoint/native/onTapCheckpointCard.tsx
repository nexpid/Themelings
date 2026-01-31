// app/modules/checkpoint/native/onTapCheckpointCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/onTapCheckpointCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function onTapCheckpointCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.message;
            var7 = var2.authorId;
            var3 = _closure1_slot3;
            var2 = var3.getChannel;
            var1 = var1.channel_id;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 2;
            var2 = var8[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot4;
            var3 = var2.CHECKPOINT_CARD_CLICKED;
            var2 = {};
            var2['other_user_id'] = var7;
            var7 = _closure1_slot0;
            var6 = 3;
            var10 = var8[var6];
            var11 = var7.bind(var1)(var10);
            var10 = var11.collectChannelAnalyticsMetadata;
            var12 = var10.bind(var11)(var9);
            var13 = var2;
            var10 = copyDataProperties(var13, var12);
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.collectGuildAnalyticsMetadata;
            var6 = null;
            var10 = var6 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var9.guild_id;
case 2:
            var12 = var7.bind(var8)(var6);
            var13 = var2;
            var6 = copyDataProperties(var13, var12);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['onTapCheckpointCard'] = var2;
    return var1;
})();