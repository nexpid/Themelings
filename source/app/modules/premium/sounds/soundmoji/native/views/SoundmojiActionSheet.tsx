// app/modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
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
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot5 = var7;
        var4 = var4.jsxs;
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var10 = 4;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_24;
        var9['padding'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var9['gap'] = var12;
        var4['container'] = var9;
        var9 = {'flexDirection': 'row', 'alignItems': 'center'};
        var4['soundmojiContainer'] = var9;
        var9 = {'width': 32, 'height': 32, 'fontSize': null, 'lineHeight': 36};
        var13 = 32;
        var12 = 5;
        var12 = var6[var12];
        var14 = var5.bind(var1)(var12);
        var12 = var14.isIOS;
        var14 = var12.bind(var14)();
        var12 = undefined;
        if(!var14) { _fun0001_ip = 271; continue _fun0001 }
 268:
        var12 = var13;
 271:
        var9['fontSize'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var9['marginEnd'] = var12;
        var4['emoji'] = var9;
        var9 = {'gap': null, 'display': 'flex', 'flex': 1};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_4;
        var9['gap'] = var10;
        var4['textContainer'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot7 = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function SoundmojiActionSheet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var9 = var2.guildId;
                var _closure2_slot0 = var9;
                var8 = var2.channelId;
                var _closure2_slot1 = var8;
                var7 = var2.messageId;
                var _closure2_slot2 = var7;
                var6 = var2.soundId;
                var _closure2_slot3 = var6;
                var2 = _closure1_slot7;
                var5 = undefined;
                var14 = var2.bind(var5)();
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.getSoundmojiFromMessage;
                    var12 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot3;
                    var8 = new Array(0);
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var1;
                };
                var17 = var3.bind(var4)(var1, var2);
                var15 = null;
                var2 = var15 == var17;
                var1 = null;
                if(var2) { _fun0002_ip = 523; continue _fun0002 }
 111:
                var4 = _closure1_slot5;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.BottomSheet;
                var2 = {};
                var6 = true;
                var2['startExpanded'] = var6;
                var6 = var14.container;
                var2['bodyStyles'] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var14.soundmojiContainer;
                var6['style'] = var9;
                var9 = var17.emojiId;
                var10 = var15 != var9;
                if(var10) { _fun0002_ip = 203; continue _fun0002 }
 193:
                var9 = var17.emojiName;
                var10 = var15 != var9;
 203:
                if(!var10) { _fun0002_ip = 308; continue _fun0002 }
 206:
                var12 = _closure1_slot5;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var9 = 8;
                var9 = var19[var9];
                var11 = var18.bind(var5)(var9);
                var9 = {};
                var16 = var14.emoji;
                var9['fastImageStyle'] = var16;
                var16 = var14.emoji;
                var9['textEmojiStyle'] = var16;
                var16 = 9;
                var16 = var19[var16];
                var18 = var18.bind(var5)(var16);
                var16 = 32;
                var16 = var18.bind(var5)(var17, var16);
                var9['src'] = var16;
                var16 = var17.emojiName;
                var18 = var15 != var16;
                var15 = '';
                if(!var18) { _fun0002_ip = 298; continue _fun0002 }
 295:
                var15 = var16;
 298:
                var9['name'] = var15;
                var10 = var12.bind(var5)(var11, var9);
 308:
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot6;
                var11 = _closure1_slot4;
                var10 = {};
                var14 = var14.textContainer;
                var10['style'] = var14;
                var16 = _closure1_slot5;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 10;
                var13 = var21[var14];
                var13 = var20.bind(var5)(var13);
                var15 = var13.Text;
                var13 = {};
                var18 = 'text-sm/bold';
                var13['variant'] = var18;
                var17 = var17.name;
                var13['children'] = var17;
                var15 = var16.bind(var5)(var15, var13);
                var13 = new Array(2);
                var13[0] = var15;
                var14 = var21[var14];
                var14 = var20.bind(var5)(var14);
                var15 = var14.Text;
                var14 = {};
                var17 = 'text-sm/normal';
                var14['variant'] = var17;
                var17 = 11;
                var18 = var21[var17];
                var18 = var20.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var5)(var17);
                var17 = var17.t;
                var17 = var17.Tj5Nws;
                var17 = var18.bind(var19)(var17);
                var14['children'] = var17;
                var14 = var16.bind(var5)(var15, var14);
                var13[1] = var14;
                var10['children'] = var13;
                var10 = var12.bind(var5)(var11, var10);
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 523:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();