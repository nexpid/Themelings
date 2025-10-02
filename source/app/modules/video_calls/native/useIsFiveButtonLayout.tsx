// app/modules/video_calls/native/useIsFiveButtonLayout.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useIsFiveButtonLayout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 2;
            var1 = var6[var11];
            var8 = undefined;
            var10 = var5.bind(var8)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var7, var1);
            var1 = 3;
            var1 = var6[var1];
            var5 = var5.bind(var8)(var1);
            var1 = var5.useIsConnectedToVoiceChannel;
            var1 = var1.bind(var5)(var10);
            var6 = null;
            var7 = var6 == var10;
            var5 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var10.guild_id;
case 2:
            var7 = var6 != var5;
            var13 = null;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var5;
case 4:
            var _closure2_slot1 = var13;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 4;
            var5 = var9[var5];
            var9 = var7.bind(var8)(var5);
            var7 = var6 == var10;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var10.guild_id;
case 6:
            var12 = var6 != var5;
            var7 = null;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var5;
case 8:
            var12 = var6 == var10;
            var5 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var10.id;
case 10:
            var7 = var9.bind(var8)(var7, var5);
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var9.bind(var8)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = new Array(1);
            var5[0] = var13;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var11.bind(var12)(var9, var2, var5);
            var9 = var6 == var5;
            var2 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var5.afkChannelId;
case 12:
            var5 = var6 == var10;
            var9 = undefined;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var10.isGuildVoice;
            var9 = var5.bind(var10)();
case 14:
            var5 = var6 != var9;
            if(!var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var9;
case 16:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 5;
            var9 = var12[var9];
            var9 = var11.bind(var8)(var9);
            var11 = var6 == var10;
            var6 = undefined;
            if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var10.id;
case 18:
            var6 = var9.bind(var8)(var6);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 6;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.bind(var8)();
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var7;
case 20:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var6;
case 24:
            var1 = var5;
case 22:
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = !var4;
case 26:
            if(!var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = var2 === var3;
            var1 = !var2;
case 28:
            return var1;
        }
    };
    var3['useIsFiveButtonLayout'] = var2;
    return var1;
})();