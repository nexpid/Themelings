// app/modules/stage_channels/native/components/StageChannelExpandedControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var11 = var6[var11];
    var16 = var5.bind(var1)(var11);
    var15 = var16.hexWithOpacity;
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.WHITE_500;
    var13 = 0.24;
    var13 = var15.bind(var16)(var14, var13);
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var11 = 'hidden';
    var10['overflow'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot8;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var10.id;
            var3 = var3.bind(var4)(var2);
            var8 = _closure1_slot0;
            var2 = 10;
            var2 = var9[var2];
            var7 = var8.bind(var4)(var2);
            var2 = var7.useIsConnectedToVoiceChannel;
            var14 = var2.bind(var7)(var10);
            var7 = 11;
            var2 = var9[var7];
            var15 = var8.bind(var4)(var2);
            var13 = var15.useStateFromStores;
            var2 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = var10.guild_id;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var13.bind(var15)(var12, var2, var11);
            var11 = var9[var7];
            var16 = var8.bind(var4)(var11);
            var15 = var16.useStateFromStoresArray;
            var11 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = var10.id;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getAllApplicationStreamsForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var15.bind(var16)(var13, var11, var12);
            var7 = var9[var7];
            var11 = var8.bind(var4)(var7);
            var9 = var11.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var11)(var8, var7);
            var _closure2_slot1 = var7;
            var17 = null;
            var8 = var17 == var2;
            var7 = undefined;
            if(var8) { _fun0001_ip = 254; continue _fun0001 }
 248:
            var7 = var2.maxStageVideoChannelUsers;
 254:
            var8 = var17 != var7;
            var16 = 0;
            var2 = 0;
            if(!var8) { _fun0001_ip = 268; continue _fun0001 }
 265:
            var2 = var7;
 268:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 12;
            var7 = var8[var7];
            var11 = var12.bind(var4)(var7);
            var9 = var11.useStageHasMedia;
            var7 = var10.id;
            var13 = var9.bind(var11)(var7);
            var9 = _closure1_slot1;
            var7 = 13;
            var7 = var8[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.bind(var4)(var10);
            var15 = var7.reachedLimit;
            var7 = new Array(0);
            var9 = var7.push;
            var18 = _closure1_slot7;
            var11 = 14;
            var8 = var8[var11];
            var8 = var12.bind(var4)(var8);
            var12 = var8.StreamVolumeItem;
            var8 = {};
            var8 = var18.bind(var4)(var12, var8);
            var8 = var9.bind(var7)(var8);
            var2 = var2 > var16;
            if(!var2) { _fun0001_ip = 385; continue _fun0001 }
 382:
            var2 = var3;
 385:
            if(!var2) { _fun0001_ip = 490; continue _fun0001 }
 388:
            var3 = var7.push;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var2 = var8.bind(var4)(var2);
            var8 = var2.ScreenshareButton;
            var2 = {};
            var2['channel'] = var10;
            var12 = var19.length;
            var12 = var12 > var16;
            if(!var12) { _fun0001_ip = 460; continue _fun0001 }
 438:
            var18 = var19.find;
            var16 = function(arg1) {
                var1 = arg1;
                var2 = var1.ownerId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var16 = var18.bind(var19)(var16);
            var12 = var17 == var16;
 460:
            if(var12) { _fun0001_ip = 475; continue _fun0001 }
 463:
            var13 = !var13;
            if(!var13) { _fun0001_ip = 472; continue _fun0001 }
 469:
            var13 = var15;
 472:
            var12 = var13;
 475:
            var2['disabled'] = var12;
            var2 = var9.bind(var4)(var8, var2);
            var2 = var3.bind(var7)(var2);
 490:
            var12 = var7.push;
            var3 = _closure1_slot7;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = var2[var11];
            var8 = var9.bind(var4)(var8);
            var13 = var8.AudioRouteButton;
            var8 = {};
            var15 = var10.id;
            var8['channelId'] = var15;
            var8['isConnectedToVoiceChannel'] = var14;
            var8 = var3.bind(var4)(var13, var8);
            var8 = var12.bind(var7)(var8);
            var8 = var7.push;
            var2 = var2[var11];
            var2 = var9.bind(var4)(var2);
            var9 = var2.DeafenButton;
            var2 = {};
            var2['channel'] = var10;
            var2 = var3.bind(var4)(var9, var2);
            var2 = var8.bind(var7)(var2);
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = _closure1_slot7;
                var4 = _closure1_slot3;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageChannelExpandedControls.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();