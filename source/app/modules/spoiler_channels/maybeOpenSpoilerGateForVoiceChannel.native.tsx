// app/modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = function maybeOpenSpoilerGateForVoiceChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot3;
            var1 = var2.getChannel;
            var9 = var1.bind(var2)(var4);
            var1 = null;
            var2 = var1 == var9;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.shouldShowSpoilerGateForVoiceChannel;
            var1 = var1.bind(var3)(var4);
            var2 = !var1;
case 2:
            var1 = !var2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 3;
            var2 = var10[var2];
            var8 = undefined;
            var5 = var7.bind(var8)(var2);
            var4 = var5.openAlert;
            var2 = 4;
            var3 = var10[var2];
            var3 = var7.bind(var8)(var3);
            var3 = var3.VOICE_PANEL_SPOILER_KEY;
            var7 = _closure1_slot4;
            var6 = _closure1_slot1;
            var2 = var10[var2];
            var6 = var6.bind(var8)(var2);
            var2 = {};
            var10 = var9.guild_id;
            var2['guildId'] = var10;
            var9 = var9.id;
            var2['channelId'] = var9;
            var2 = var7.bind(var8)(var6, var2);
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
case 4:
            return var1;
        }
    };
    var2['maybeOpenSpoilerGateForVoiceChannel'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();