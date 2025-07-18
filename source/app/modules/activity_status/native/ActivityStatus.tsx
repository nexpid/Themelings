// app/modules/activity_status/native/ActivityStatus.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/ActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.userId;
            var _closure2_slot0 = var15;
            var10 = var1.guildId;
            var3 = var1.iconStyle;
            var _closure2_slot1 = var3;
            var14 = var1.textStyle;
            var _closure2_slot2 = var14;
            var19 = var1.emojiSize;
            var13 = var1.maxFontSizeMultiplier;
            var _closure2_slot3 = var13;
            var16 = var1.animate;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 69; continue _fun0001 }
 67:
            var16 = true;
 69:
            var9 = var1.hideEmoji;
            if(!(var9 === var5)) { _fun0001_ip = 83; continue _fun0001 }
 81:
            var9 = false;
 83:
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var1 = _closure1_slot13;
            var6 = var1.bind(var5)();
            _closure2_slot4 = var6;
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 9;
            var1 = var11[var7];
            var8 = var17.bind(var5)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var8)(var3, var1);
            var1 = var11[var7];
            var18 = var17.bind(var5)(var1);
            var8 = var18.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var18)(var4, var1);
            _closure2_slot5 = var1;
            var8 = _closure1_slot1;
            var4 = 10;
            var4 = var11[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.bind(var5)(var15);
            _closure2_slot6 = var4;
            var4 = 11;
            var4 = var11[var4];
            var18 = var17.bind(var5)(var4);
            var17 = var18.useVoiceActivityStatusMobileExperiment;
            var4 = {};
            var20 = 'ActivityStatus';
            var4['location'] = var20;
            var4 = var17.bind(var18)(var4);
            var17 = var4.voiceActivityStatusEnabled;
            var4 = 12;
            var4 = var11[var4];
            var8 = var8.bind(var5)(var4);
            var4 = {};
            var11 = undefined;
            if(!var17) { _fun0001_ip = 299; continue _fun0001 }
 296:
            var11 = var15;
 299:
            var4['userId'] = var11;
            var4['guildId'] = var10;
            var4 = var8.bind(var5)(var4);
            var4 = var4.voiceChannel;
            _closure2_slot7 = var4;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var5 = var1 == var2;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 39; continue _fun0002 }
 18:
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
 39:
                    if(!(var1 != var3)) { _fun0002_ip = 116; continue _fun0002 }
 43:
                    var5 = var3.state;
                    var4 = var1 == var5;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 67; continue _fun0002 }
 57:
                    var4 = var5.trim;
                    var2 = var4.bind(var5)();
 67:
                    var5 = var1 != var2;
                    var4 = null;
                    if(!var5) { _fun0002_ip = 79; continue _fun0002 }
 76:
                    var4 = var2;
 79:
                    var5 = '';
                    var2 = null;
                    if(!(var5 !== var4)) { _fun0002_ip = 92; continue _fun0002 }
 89:
                    var2 = var4;
 92:
                    if(!(var1 == var2)) { _fun0002_ip = 111; continue _fun0002 }
 96:
                    var2 = var3.emoji;
                    var4 = var1 == var2;
                    var2 = null;
                    if(var4) { _fun0002_ip = 114; continue _fun0002 }
 111:
                    var2 = var3;
 114:
                    return var2;
 116:
                    return var1;
                }
            };
            var17 = var8.bind(var10)(var1, var4);
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
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
            if(var4) { _fun0001_ip = 789; continue _fun0001 }
 403:
            var7 = var1 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 418; continue _fun0001 }
 412:
            var4 = var3.bot;
 418:
            var3 = true;
            var3 = var3 === var4;
            _closure2_slot8 = var3;
            var4 = var1 == var17;
            var3 = undefined;
            if(var4) { _fun0001_ip = 442; continue _fun0001 }
 437:
            var3 = var17.state;
 442:
            var3 = var1 != var3;
            _closure2_slot9 = var3;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot6;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0003_ip = 291; continue _fun0003 }
 16:
                    var1 = _closure2_slot5;
                    var1 = var8 == var1;
                    var6 = undefined;
                    var7 = undefined;
                    if(var1) { _fun0003_ip = 52; continue _fun0003 }
 31:
                    var3 = _closure2_slot5;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.type;
                            var1 = _closure1_slot9;
                            var1 = var1.CUSTOM_STATUS;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0004_ip = 42; continue _fun0004 }
 28:
                            var2 = _closure1_slot9;
                            var2 = var2.HANG_STATUS;
                            var1 = var3 !== var2;
 42:
                            return var1;
                        }
                    };
                    var7 = var2.bind(var3)(var1);
 52:
                    if(!(var8 == var7)) { _fun0003_ip = 183; continue _fun0003 }
 59:
                    var1 = _closure2_slot7;
                    var2 = var8 != var1;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 181; continue _fun0003 }
 72:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 16;
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
 181:
                    _fun0003_ip = 289; continue _fun0003;
 183:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 15;
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
 289:
                    return var1;
 291:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot5;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 369; continue _fun0003 }
 335:
                    var9 = _closure2_slot5;
                    var8 = var9.find;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 14;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var6 = var8.bind(var9)(var7);
 369:
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
            var2 = var1 == var17;
            var7 = null;
            if(var2) { _fun0001_ip = 669; continue _fun0001 }
 471:
            var4 = _closure1_slot12;
            var3 = _closure1_slot11;
            var2 = {};
            var10 = var17.emoji;
            var10 = var1 != var10;
            if(!var10) { _fun0001_ip = 497; continue _fun0001 }
 494:
            var10 = !var9;
 497:
            if(!var10) { _fun0001_ip = 575; continue _fun0001 }
 500:
            var15 = _closure1_slot10;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 17;
            var9 = var18[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var18 = var17.emoji;
            var9['emoji'] = var18;
            var20 = var1 != var19;
            var18 = 14;
            if(!var20) { _fun0001_ip = 550; continue _fun0001 }
 547:
            var18 = var19;
 550:
            var9['size'] = var18;
            var9['animate'] = var16;
            var16 = var6.emoji;
            var9['style'] = var16;
            var10 = var15.bind(var5)(var11, var9);
 575:
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var17.state;
            var10 = var1 != var10;
            if(!var10) { _fun0001_ip = 655; continue _fun0001 }
 595:
            var16 = _closure1_slot10;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 18;
            var11 = var18[var11];
            var15 = var15.bind(var5)(var11);
            var11 = {};
            var18 = 'text-xs/normal';
            var11['variant'] = var18;
            var11['style'] = var14;
            var11['maxFontSizeMultiplier'] = var13;
            var17 = var17.state;
            var11['children'] = var17;
            var10 = var16.bind(var5)(var15, var11);
 655:
            var9[1] = var10;
            var2['children'] = var9;
            var7 = var4.bind(var5)(var3, var2);
 669:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = var1 != var8;
            if(!var8) { _fun0001_ip = 707; continue _fun0001 }
 703:
            var8 = var1 != var7;
 707:
            if(!var8) { _fun0001_ip = 769; continue _fun0001 }
 710:
            var11 = _closure1_slot10;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 18;
            var9 = var15[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var15 = 'text-xs/normal';
            var9['variant'] = var15;
            var9['style'] = var14;
            var9['maxFontSizeMultiplier'] = var13;
            var12 = _closure1_slot8;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 769:
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 789:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();