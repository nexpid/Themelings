// app/modules/video_calls/native/components/ChannelCallHeaderSubtitle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 39; continue _fun0002 }
 30:
                    var4 = _closure2_slot0;
                    var1 = var4.id;
 39:
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
            if(var7) { _fun0001_ip = 123; continue _fun0001 }
 118:
            var2 = var11.id;
 123:
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
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 39:
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
            if(!var13) { _fun0001_ip = 278; continue _fun0001 }
 274:
            var13 = var3 != var4;
 278:
            if(!var13) { _fun0001_ip = 290; continue _fun0001 }
 281:
            var6 = var4.length;
            var13 = var6 > var8;
 290:
            _closure2_slot3 = var13;
            var6 = var3 != var2;
            var18 = null;
            if(!var6) { _fun0001_ip = 323; continue _fun0001 }
 303:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 13;
            var6 = var9[var6];
            var18 = var8.bind(var5)(var6);
 323:
            var8 = var3 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 337; continue _fun0001 }
 332:
            var6 = var7.name;
 337:
            var15 = var4;
            if(var13) { _fun0001_ip = 369; continue _fun0001 }
 343:
            var7 = var3 == var2;
            var4 = undefined;
            if(var7) { _fun0001_ip = 357; continue _fun0001 }
 352:
            var4 = var2.name;
 357:
            var15 = var6;
            if(!(var3 != var4)) { _fun0001_ip = 369; continue _fun0001 }
 364:
            var15 = var2.name;
 369:
            var6 = _closure1_slot4;
            var4 = var6.useEffect;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var13;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0004_ip = 80; continue _fun0004 }
 10:
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
 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var2);
            var2 = var3 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 688; continue _fun0001 }
 415:
            var2 = var3 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 688; continue _fun0001 }
 427:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var7 = var18;
            if(!var7) { _fun0001_ip = 549; continue _fun0001 }
 452:
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
 549:
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
            if(!var13) { _fun0001_ip = 664; continue _fun0001 }
 618:
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
 664:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 688:
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