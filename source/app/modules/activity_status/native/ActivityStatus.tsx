// app/modules/activity_status/native/ActivityStatus.tsx
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
    var10 = 0;
    var8 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DOT_UNICODE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.Fragment;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['container'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['icon'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['emoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/ActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.userId;
            var _closure2_slot0 = var16;
            var15 = var1.guildId;
            var3 = var1.iconStyle;
            var _closure2_slot1 = var3;
            var14 = var1.textStyle;
            var _closure2_slot2 = var14;
            var19 = var1.emojiSize;
            var5 = undefined;
            if(!(var19 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = 14;
case 2:
            var13 = var1.maxFontSizeMultiplier;
            var _closure2_slot3 = var13;
            var17 = var1.animate;
            if(!(var17 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = true;
case 4:
            var10 = var1.hideEmoji;
            if(!(var10 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = false;
case 6:
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var1 = _closure1_slot13;
            var6 = var1.bind(var5)();
            _closure2_slot4 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var3 = var7[var1];
            var11 = var4.bind(var5)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var11)(var8, var3);
            var8 = var7[var1];
            var18 = var4.bind(var5)(var8);
            var11 = var18.useStateFromStores;
            var8 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var11.bind(var18)(var9, var8);
            _closure2_slot5 = var8;
            var11 = _closure1_slot1;
            var9 = 10;
            var9 = var7[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.bind(var5)(var16);
            _closure2_slot6 = var9;
            var9 = 11;
            var9 = var7[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var9['userId'] = var16;
            var9['guildId'] = var15;
            var9 = var11.bind(var5)(var9);
            var9 = var9.voiceChannel;
            _closure2_slot7 = var9;
            var15 = _closure1_slot3;
            var11 = var15.useMemo;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var5 = var1 == var2;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure2_slot5;
                    var5 = var6.find;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot9;
                        var1 = var1.CUSTOM_STATUS;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 8:
                    if(!(var1 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = var3.state;
                    var4 = var1 == var5;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var5.trim;
                    var2 = var4.bind(var5)();
case 12:
                    var5 = var1 != var2;
                    var4 = null;
                    if(!var5) { _fun0002_ip = 14; continue _fun0002 }
case 4:
                    var4 = var2;
case 14:
                    var5 = '';
                    var2 = null;
                    if(!(var5 !== var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2 = var4;
case 15:
                    if(!(var1 == var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var2 = var3.emoji;
                    var4 = var1 == var2;
                    var2 = null;
                    if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 17:
                    var2 = var3;
case 19:
                    return var2;
case 10:
                    return var1;
                }
            };
            var18 = var11.bind(var15)(var8, var9);
            var1 = var7[var1];
            var8 = var4.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var8)(var4, var1);
            var1 = null;
            if(var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var1 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var3.bot;
case 22:
            var3 = true;
            var3 = var3 === var4;
            _closure2_slot8 = var3;
            var4 = var1 == var18;
            var3 = undefined;
            if(var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var18.state;
case 24:
            var3 = var1 != var3;
            _closure2_slot9 = var3;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var1 = _closure2_slot5;
                    var1 = var8 == var1;
                    var6 = undefined;
                    var7 = undefined;
                    if(var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var3 = _closure2_slot5;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.type;
                            var1 = _closure1_slot9;
                            var1 = var1.CUSTOM_STATUS;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                            var2 = _closure1_slot9;
                            var2 = var2.HANG_STATUS;
                            var1 = var3 !== var2;
case 30:
                            return var1;
                        }
                    };
                    var7 = var2.bind(var3)(var1);
case 28:
                    if(!(var8 == var7)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = _closure2_slot7;
                    var2 = var8 != var1;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var2 = var9[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = {};
                    var9 = _closure2_slot7;
                    var2['channel'] = var9;
                    var9 = _closure2_slot4;
                    var10 = var9.icon;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = _closure2_slot1;
                    var9[1] = var10;
                    var2['iconStyle'] = var9;
                    var9 = _closure2_slot2;
                    var2['textStyle'] = var9;
                    var9 = _closure2_slot3;
                    var2['maxFontSizeMultiplier'] = var9;
                    var9 = _closure2_slot8;
                    var2['hideIcon'] = var9;
                    var9 = _closure2_slot9;
                    var2['hideText'] = var9;
                    var1 = var4.bind(var6)(var3, var2);
case 34:
                    _fun0003_ip = 36; continue _fun0003;
case 32:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var2 = var9[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = {};
                    var2['activity'] = var7;
                    var7 = _closure2_slot4;
                    var9 = var7.icon;
                    var7 = new Array(2);
                    var7[0] = var9;
                    var9 = _closure2_slot1;
                    var7[1] = var9;
                    var2['iconStyle'] = var7;
                    var7 = _closure2_slot2;
                    var2['textStyle'] = var7;
                    var7 = _closure2_slot3;
                    var2['maxFontSizeMultiplier'] = var7;
                    var7 = _closure2_slot8;
                    var2['hideIcon'] = var7;
                    var7 = _closure2_slot9;
                    var2['hideText'] = var7;
                    var1 = var4.bind(var6)(var3, var2);
case 36:
                    return var1;
case 26:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot5;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var9 = _closure2_slot5;
                    var8 = var9.find;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 13;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var6 = var8.bind(var9)(var7);
case 37:
                    var1['game'] = var6;
                    var6 = _closure2_slot4;
                    var7 = var6.icon;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = _closure2_slot1;
                    var6[1] = var7;
                    var1['iconStyle'] = var6;
                    var6 = _closure2_slot2;
                    var1['textStyle'] = var6;
                    var6 = _closure2_slot3;
                    var1['maxFontSizeMultiplier'] = var6;
                    var6 = _closure2_slot8;
                    var1['hideIcon'] = var6;
                    var5 = _closure2_slot9;
                    var1['hideText'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var8 = var2.bind(var5)();
            var2 = var1 == var18;
            var7 = null;
            if(var2) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = var1 != var18;
            var2 = null;
            if(!var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var9 = _closure1_slot12;
            var4 = _closure1_slot11;
            var3 = {};
            var11 = var18.emoji;
            var11 = var1 != var11;
            if(!var11) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var11 = !var10;
case 43:
            if(!var11) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var16 = _closure1_slot10;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var10 = 16;
            var10 = var20[var10];
            var15 = var15.bind(var5)(var10);
            var10 = {};
            var20 = var18.emoji;
            var10['emoji'] = var20;
            var10['size'] = var19;
            var10['animate'] = var17;
            var17 = var6.emoji;
            var10['style'] = var17;
            var11 = var16.bind(var5)(var15, var10);
case 45:
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var18.state;
            var11 = var1 != var11;
            if(!var11) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var17 = _closure1_slot10;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var15 = 17;
            var15 = var19[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var19 = 'text-xs/normal';
            var15['variant'] = var19;
            var15['style'] = var14;
            var15['maxFontSizeMultiplier'] = var13;
            var18 = var18.state;
            var15['children'] = var18;
            var11 = var17.bind(var5)(var16, var15);
case 47:
            var10[1] = var11;
            var3['children'] = var10;
            var2 = var9.bind(var5)(var4, var3);
case 41:
            var7 = var2;
case 39:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = var1 != var8;
            if(!var8) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var8 = var1 != var7;
case 49:
            if(!var8) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var11 = _closure1_slot10;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 17;
            var9 = var15[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {'variant': 'text-xs/normal', 'style': null, 'maxFontSizeMultiplier': null, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var9['style'] = var14;
            var9['maxFontSizeMultiplier'] = var13;
            var12 = _closure1_slot8;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 51:
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 20:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();