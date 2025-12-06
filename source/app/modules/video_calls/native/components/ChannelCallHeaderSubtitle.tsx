// app/modules/video_calls/native/components/ChannelCallHeaderSubtitle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var12 = 2;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['container'] = var10;
    var10 = {};
    var10['marginRight'] = var12;
    var12 = 10;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_360;
    var10['tintColor'] = var14;
    var4['icon'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var10['textShadowColor'] = var12;
    var10['textShadowRadius'] = var11;
    var4['subtitle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot13;
            var10 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 11;
            var2 = var4[var9];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var11 = var7.bind(var8)(var6, var2);
            var _closure2_slot1 = var11;
            var2 = 12;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var4 = var6.useGuildChannelScheduledEvents;
            var3 = null;
            var7 = var3 == var11;
            var2 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var11.id;
case 4:
            var2 = var4.bind(var6)(var2);
            _closure2_slot2 = var2;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure2_slot2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot7;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var2, var4);
            var4 = _closure1_slot3;
            var2 = 1;
            var2 = var4.bind(var5)(var6, var2);
            var8 = 0;
            var2 = var2[var8];
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = var4[var9];
            var15 = var6.bind(var5)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var13, var7);
            var4 = var4[var9];
            var13 = var6.bind(var5)(var4);
            var9 = var13.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannelStatus;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var13)(var6, var4);
            var13 = var3 != var11;
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var3 != var4;
case 6:
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var4.length;
            var13 = var6 > var8;
case 8:
            _closure2_slot3 = var13;
            var6 = var3 != var2;
            var18 = null;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 13;
            var6 = var9[var6];
            var18 = var8.bind(var5)(var6);
case 10:
            var8 = var3 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var7.name;
case 12:
            var15 = var4;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3 == var2;
            var4 = undefined;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var2.name;
case 16:
            var15 = var6;
            if(!(var3 != var4)) { _fun0001_ip = 14; continue _fun0001 }
case 18:
            var15 = var2.name;
case 14:
            var6 = _closure1_slot4;
            var4 = var6.useEffect;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var13;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.VOICE_CHANNEL_TOPIC_VIEWED;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var6 = var5.guild_id;
                    var1['guild_id'] = var6;
                    var5 = var5.id;
                    var1['channel_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var2);
            var2 = var3 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var3 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var7 = var18;
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var9 = _closure1_slot11;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 15;
            var6 = var17[var14];
            var8 = var16.bind(var5)(var6);
            var6 = {};
            var19 = var10.icon;
            var6['style'] = var19;
            var6['source'] = var18;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.Sizes;
            var14 = var14.EXTRA_SMALL;
            var6['size'] = var14;
            var14 = 10;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.GREEN_360;
            var6['color'] = var14;
            var7 = var9.bind(var5)(var8, var6);
case 24:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 16;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/normal'};
            var10 = var10.subtitle;
            var7['style'] = var10;
            var10 = var15;
            if(!var13) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 17;
            var12 = var14[var12];
            var14 = var13.bind(var5)(var12);
            var13 = var14.parseVoiceChannelStatus;
            var12 = {};
            var11 = var11.id;
            var12['channelId'] = var11;
            var11 = true;
            var10 = var13.bind(var14)(var15, var11, var12);
case 26:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallHeaderSubtitle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();