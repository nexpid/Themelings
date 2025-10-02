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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/ActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.userId;
            var _closure2_slot0 = var18;
            var10 = var1.guildId;
            var3 = var1.iconStyle;
            var _closure2_slot1 = var3;
            var14 = var1.textStyle;
            var _closure2_slot2 = var14;
            var20 = var1.emojiSize;
            var5 = undefined;
            if(!(var20 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = 14;
case 2:
            var13 = var1.maxFontSizeMultiplier;
            var _closure2_slot3 = var13;
            var21 = var1.animate;
            if(!(var21 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var21 = true;
case 4:
            var9 = var1.hideEmoji;
            if(!(var9 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = false;
case 6:
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
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 9;
            var1 = var11[var7];
            var8 = var15.bind(var5)(var1);
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
            var16 = var15.bind(var5)(var1);
            var8 = var16.useStateFromStores;
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
            var8 = var8.bind(var16)(var4, var1);
            _closure2_slot5 = var8;
            var4 = _closure1_slot1;
            var1 = 10;
            var1 = var11[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var18);
            _closure2_slot6 = var1;
            var1 = 11;
            var1 = var11[var1];
            var17 = var15.bind(var5)(var1);
            var15 = var17.useVoiceActivityStatusMobileExperiment;
            var1 = {};
            var16 = 'ActivityStatus';
            var1['location'] = var16;
            var1 = var15.bind(var17)(var1);
            var15 = var1.voiceActivityStatusEnabled;
            var1 = 12;
            var1 = var11[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var11 = undefined;
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var18;
case 8:
            var1['userId'] = var11;
            var1['guildId'] = var10;
            var1 = var4.bind(var5)(var1);
            var15 = var1.voiceChannel;
            _closure2_slot7 = var15;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 13;
            var10 = var1[var10];
            var11 = var4.bind(var5)(var10);
            var10 = var11.useCanSeeHangStatus;
            var10 = var10.bind(var11)(var16, var15);
            _closure2_slot8 = var10;
            var15 = _closure1_slot3;
            var16 = var15.useMemo;
            var11 = new Array(3);
            var11[0] = var8;
            var11[1] = var10;
            var11[2] = var18;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var3 = _closure2_slot5;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 13:
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
case 10:
                    return var1;
                }
            };
            var17 = var16.bind(var15)(var10, var11);
            var11 = var15.useMemo;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var5 = var1 == var2;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
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
case 14:
                    if(!(var1 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var5 = var3.state;
                    var4 = var1 == var5;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = var5.trim;
                    var2 = var4.bind(var5)();
case 18:
                    var5 = var1 != var2;
                    var4 = null;
                    if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var4 = var2;
case 20:
                    var5 = '';
                    var2 = null;
                    if(!(var5 !== var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var2 = var4;
case 22:
                    if(!(var1 == var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var2 = var3.emoji;
                    var4 = var1 == var2;
                    var2 = null;
                    if(var4) { _fun0003_ip = 26; continue _fun0003 }
case 24:
                    var2 = var3;
case 26:
                    return var2;
case 16:
                    return var1;
                }
            };
            var22 = var11.bind(var15)(var8, var10);
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
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var7 = var1 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var4 = var3.bot;
case 29:
            var3 = true;
            var3 = var3 === var4;
            _closure2_slot9 = var3;
            var4 = var1 == var22;
            var3 = undefined;
            if(var4) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = var22.state;
case 31:
            var3 = var1 != var3;
            _closure2_slot10 = var3;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var1 = _closure2_slot5;
                    var1 = var8 == var1;
                    var6 = undefined;
                    var7 = undefined;
                    if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var3 = _closure2_slot5;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.type;
                            var1 = _closure1_slot9;
                            var1 = var1.CUSTOM_STATUS;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 37:
                            var2 = _closure1_slot9;
                            var2 = var2.HANG_STATUS;
                            var1 = var3 !== var2;
case 14:
                            return var1;
                        }
                    };
                    var7 = var2.bind(var3)(var1);
case 35:
                    if(!(var8 == var7)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var1 = _closure2_slot7;
                    var2 = var8 != var1;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
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
case 40:
                    _fun0004_ip = 42; continue _fun0004;
case 38:
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
case 42:
                    return var1;
case 33:
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
                    if(var8) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var9 = _closure2_slot5;
                    var8 = var9.find;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 15;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var6 = var8.bind(var9)(var7);
case 43:
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
            if(!(var1 == var22)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var2 = var1 == var17;
            var7 = null;
            if(var2) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            if(!(var1 == var17)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var3 = var1 != var22;
            var2 = null;
            if(!var3) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var10 = _closure1_slot12;
            var4 = _closure1_slot11;
            var3 = {};
            var11 = var22.emoji;
            var15 = var1 != var11;
            if(!var15) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var15 = !var9;
case 52:
            if(!var15) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var19 = _closure1_slot10;
            var16 = _closure1_slot1;
            var23 = _closure1_slot2;
            var11 = 21;
            var11 = var23[var11];
            var16 = var16.bind(var5)(var11);
            var11 = {};
            var23 = var22.emoji;
            var11['emoji'] = var23;
            var11['size'] = var20;
            var11['animate'] = var21;
            var21 = var6.emoji;
            var11['style'] = var21;
            var15 = var19.bind(var5)(var16, var11);
case 54:
            var11 = new Array(2);
            var11[0] = var15;
            var15 = var22.state;
            var15 = var1 != var15;
            if(!var15) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var21 = _closure1_slot10;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var16 = 20;
            var16 = var23[var16];
            var19 = var19.bind(var5)(var16);
            var16 = {};
            var23 = 'text-xs/normal';
            var16['variant'] = var23;
            var16['style'] = var14;
            var16['maxFontSizeMultiplier'] = var13;
            var22 = var22.state;
            var16['children'] = var22;
            var15 = var21.bind(var5)(var19, var16);
case 56:
            var11[1] = var15;
            var3['children'] = var11;
            var2 = var10.bind(var5)(var4, var3);
case 50:
            var7 = var2;
            _fun0001_ip = 47; continue _fun0001;
case 48:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getHangStatusText;
            var16 = var2.bind(var3)(var18, var17);
            var4 = _closure1_slot12;
            var3 = _closure1_slot11;
            var2 = {};
            var10 = !var9;
            if(!var10) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var15 = _closure1_slot10;
            var11 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 19;
            var9 = var19[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var9['userId'] = var18;
            var9['size'] = var20;
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
case 58:
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
case 47:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = var1 != var8;
            if(!var8) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var8 = var1 != var7;
case 60:
            if(!var8) { _fun0001_ip = 62; continue _fun0001 }
case 63:
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
case 62:
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 27:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();