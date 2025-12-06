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
    var4 = 5;
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
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var1 = var1.channel_id;
            var10 = var3.bind(var4)(var1);
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var3 = var9[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.track;
            var3 = _closure1_slot4;
            var4 = var3.CHECKPOINT_CARD_CLICKED;
            var3 = {};
            var3['other_user_id'] = var7;
            var8 = _closure1_slot0;
            var7 = 3;
            var11 = var9[var7];
            var12 = var8.bind(var1)(var11);
            var11 = var12.collectChannelAnalyticsMetadata;
            var13 = var11.bind(var12)(var10);
            var14 = var3;
            var11 = copyDataProperties(var14, var13);
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.collectGuildAnalyticsMetadata;
            var7 = null;
            var11 = var7 == var10;
            var7 = undefined;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var10.guild_id;
case 2:
            var13 = var8.bind(var9)(var7);
            var14 = var3;
            var7 = copyDataProperties(var14, var13);
            var3 = var5.bind(var6)(var4, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = 'message_component';
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['onTapCheckpointCard'] = var2;
    return var1;
})();