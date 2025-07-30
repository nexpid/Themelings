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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/ActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.userId;
            var _closure2_slot0 = var10;
            var11 = var1.guildId;
            var3 = var1.iconStyle;
            var _closure2_slot1 = var3;
            var14 = var1.textStyle;
            var _closure2_slot2 = var14;
            var20 = var1.emojiSize;
            var5 = undefined;
            if(!(var20 === var5)) { _fun0001_ip = 54; continue _fun0001 }
 51:
            var20 = 14;
 54:
            var13 = var1.maxFontSizeMultiplier;
            var _closure2_slot3 = var13;
            var19 = var1.animate;
            if(!(var19 === var5)) { _fun0001_ip = 76; continue _fun0001 }
 74:
            var19 = true;
 76:
            var9 = var1.hideEmoji;
            if(!(var9 === var5)) { _fun0001_ip = 90; continue _fun0001 }
 88:
            var9 = false;
 90:
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var1 = _closure1_slot13;
            var6 = var1.bind(var5)();
            _closure2_slot4 = var6;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 9;
            var1 = var15[var7];
            var8 = var16.bind(var5)(var1);
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
            var1 = var15[var7];
            var17 = var16.bind(var5)(var1);
            var8 = var17.useStateFromStores;
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
            var8 = var8.bind(var17)(var4, var1);
            _closure2_slot5 = var8;
            var4 = _closure1_slot1;
            var1 = 10;
            var1 = var15[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var10);
            _closure2_slot6 = var1;
            var1 = 11;
            var1 = var15[var1];
            var18 = var16.bind(var5)(var1);
            var16 = var18.useVoiceActivityStatusMobileExperiment;
            var1 = {};
            var17 = 'ActivityStatus';
            var1['location'] = var17;
            var1 = var16.bind(var18)(var1);
            var16 = var1.voiceActivityStatusEnabled;
            var1 = 12;
            var1 = var15[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var15 = undefined;
            if(!var16) { _fun0001_ip = 310; continue _fun0001 }
 307:
            var15 = var10;
 310:
            var1['userId'] = var15;
            var1['guildId'] = var11;
            var1 = var4.bind(var5)(var1);
            var16 = var1.voiceChannel;
            _closure2_slot7 = var16;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 13;
            var11 = var1[var11];
            var15 = var4.bind(var5)(var11);
            var11 = var15.useCanSeeHangStatus;
            var17 = var11.bind(var15)(var17, var16);
            _closure2_slot8 = var17;
            var15 = _closure1_slot3;
            var16 = var15.useMemo;
            var11 = new Array(3);
            var11[0] = var8;
            var11[1] = var17;
            var11[2] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot8;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 61; continue _fun0002 }
 14:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 61; continue _fun0002 }
 27:
                    var3 = _closure2_slot5;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 61; continue _fun0002 }
 40:
                    var4 = _closure2_slot5;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot9;
                        var1 = var1.HANG_STATUS;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 61:
                    return var1;
                }
            };
            var17 = var16.bind(var15)(var10, var11);
            var11 = var15.useMemo;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var5 = var1 == var2;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
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
                    if(!(var1 != var3)) { _fun0003_ip = 116; continue _fun0003 }
 43:
                    var5 = var3.state;
                    var4 = var1 == var5;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 67; continue _fun0003 }
 57:
                    var4 = var5.trim;
                    var2 = var4.bind(var5)();
 67:
                    var5 = var1 != var2;
                    var4 = null;
                    if(!var5) { _fun0003_ip = 79; continue _fun0003 }
 76:
                    var4 = var2;
 79:
                    var5 = '';
                    var2 = null;
                    if(!(var5 !== var4)) { _fun0003_ip = 92; continue _fun0003 }
 89:
                    var2 = var4;
 92:
                    if(!(var1 == var2)) { _fun0003_ip = 111; continue _fun0003 }
 96:
                    var2 = var3.emoji;
                    var4 = var1 == var2;
                    var2 = null;
                    if(var4) { _fun0003_ip = 114; continue _fun0003 }
 111:
                    var2 = var3;
 114:
                    return var2;
 116:
                    return var1;
                }
            };
            var21 = var11.bind(var15)(var8, var10);
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
            if(var4) { _fun0001_ip = 1072; continue _fun0001 }
 474:
            var7 = var1 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 489; continue _fun0001 }
 483:
            var4 = var3.bot;
 489:
            var3 = true;
            var3 = var3 === var4;
            _closure2_slot9 = var3;
            var4 = var1 == var21;
            var3 = undefined;
            if(var4) { _fun0001_ip = 513; continue _fun0001 }
 508:
            var3 = var21.state;
 513:
            var3 = var1 != var3;
            _closure2_slot10 = var3;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot6;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0004_ip = 291; continue _fun0004 }
 16:
                    var1 = _closure2_slot5;
                    var1 = var8 == var1;
                    var6 = undefined;
                    var7 = undefined;
                    if(var1) { _fun0004_ip = 52; continue _fun0004 }
 31:
                    var3 = _closure2_slot5;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.type;
                            var1 = _closure1_slot9;
                            var1 = var1.CUSTOM_STATUS;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0005_ip = 42; continue _fun0005 }
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
                    if(!(var8 == var7)) { _fun0004_ip = 183; continue _fun0004 }
 59:
                    var1 = _closure2_slot7;
                    var2 = var8 != var1;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 181; continue _fun0004 }
 72:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 17;
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
                    var9 = _closure2_slot9;
                    var2['hideIcon'] = var9;
                    var9 = _closure2_slot10;
                    var2['hideText'] = var9;
                    var1 = var4.bind(var6)(var3, var2);
 181:
                    _fun0004_ip = 289; continue _fun0004;
 183:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 16;
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
                    var7 = _closure2_slot9;
                    var2['hideIcon'] = var7;
                    var7 = _closure2_slot10;
                    var2['hideText'] = var7;
                    var1 = var4.bind(var6)(var3, var2);
 289:
                    return var1;
 291:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot5;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 369; continue _fun0004 }
 335:
                    var9 = _closure2_slot5;
                    var8 = var9.find;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 15;
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
                    var6 = _closure2_slot9;
                    var1['hideIcon'] = var6;
                    var5 = _closure2_slot10;
                    var1['hideText'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var8 = var2.bind(var5)();
            if(!(var1 == var21)) { _fun0001_ip = 546; continue _fun0001 }
 534:
            var2 = var1 == var17;
            var7 = null;
            if(var2) { _fun0001_ip = 952; continue _fun0001 }
 546:
            if(!(var1 == var17)) { _fun0001_ip = 758; continue _fun0001 }
 553:
            var3 = var1 != var21;
            var2 = null;
            if(!var3) { _fun0001_ip = 750; continue _fun0001 }
 565:
            var10 = _closure1_slot12;
            var4 = _closure1_slot11;
            var3 = {};
            var11 = var21.emoji;
            var15 = var1 != var11;
            if(!var15) { _fun0001_ip = 591; continue _fun0001 }
 588:
            var15 = !var9;
 591:
            if(!var15) { _fun0001_ip = 656; continue _fun0001 }
 594:
            var18 = _closure1_slot10;
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 21;
            var11 = var22[var11];
            var16 = var16.bind(var5)(var11);
            var11 = {};
            var22 = var21.emoji;
            var11['emoji'] = var22;
            var11['size'] = var20;
            var11['animate'] = var19;
            var19 = var6.emoji;
            var11['style'] = var19;
            var15 = var18.bind(var5)(var16, var11);
 656:
            var11 = new Array(2);
            var11[0] = var15;
            var15 = var21.state;
            var15 = var1 != var15;
            if(!var15) { _fun0001_ip = 736; continue _fun0001 }
 676:
            var19 = _closure1_slot10;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var16 = 20;
            var16 = var22[var16];
            var18 = var18.bind(var5)(var16);
            var16 = {};
            var22 = 'text-xs/normal';
            var16['variant'] = var22;
            var16['style'] = var14;
            var16['maxFontSizeMultiplier'] = var13;
            var21 = var21.state;
            var16['children'] = var21;
            var15 = var19.bind(var5)(var18, var16);
 736:
            var11[1] = var15;
            var3['children'] = var11;
            var2 = var10.bind(var5)(var4, var3);
 750:
            var7 = var2;
            _fun0001_ip = 952; continue _fun0001;
 758:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getHangStatusText;
            var16 = var2.bind(var3)(var17);
            var4 = _closure1_slot12;
            var3 = _closure1_slot11;
            var2 = {};
            var10 = !var9;
            if(!var10) { _fun0001_ip = 875; continue _fun0001 }
 805:
            var15 = _closure1_slot10;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 19;
            var9 = var18[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var19 = var6.emoji;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var19['width'] = var20;
            var19['height'] = var20;
            var18[1] = var19;
            var9['emojiStyle'] = var18;
            var9['hangStatusActivity'] = var17;
            var10 = var15.bind(var5)(var11, var9);
 875:
            var9 = new Array(2);
            var9[0] = var10;
            var15 = _closure1_slot10;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 20;
            var10 = var17[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var17 = 'text-xs/normal';
            var10['variant'] = var17;
            var10['style'] = var14;
            var10['maxFontSizeMultiplier'] = var13;
            var10['children'] = var16;
            var10 = var15.bind(var5)(var11, var10);
            var9[1] = var10;
            var2['children'] = var9;
            var7 = var4.bind(var5)(var3, var2);
 952:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = var1 != var8;
            if(!var8) { _fun0001_ip = 990; continue _fun0001 }
 986:
            var8 = var1 != var7;
 990:
            if(!var8) { _fun0001_ip = 1052; continue _fun0001 }
 993:
            var11 = _closure1_slot10;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 20;
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
 1052:
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1072:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();