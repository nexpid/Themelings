// app/uikit-native/GuildIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var14 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var16 = function makeSizeStyle(arg1) {
        var3 = arg1;
        var1 = {};
        var1['width'] = var3;
        var1['height'] = var3;
        var2 = 3;
        var2 = var3 / var2;
        var1['borderRadius'] = var2;
        return var1;
    };
    var1 = function getGuildIconSource(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var7 = arg2;
            var5 = arg3;
            var3 = arg4;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 27; continue _fun0001 }
 18:
            var2 = var6.icon;
            if(!(var1 == var2)) { _fun0001_ip = 48; continue _fun0001 }
 27:
            var2 = var1 != var3;
            var1 = null;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 36:
            var2 = {};
            var2['uri'] = var3;
            var1 = var2;
 46:
            _fun0001_ip = 108; continue _fun0001;
 48:
            var2 = _closure1_slot5;
            var2 = var6 instanceof var2;
            if(var2) { _fun0001_ip = 85; continue _fun0001 }
 62:
            var8 = _closure1_slot6;
            var2 = _closure1_slot11;
            var4 = var2[var7];
            var2 = undefined;
            var2 = var8.bind(var2)(var6, var4, var5);
            _fun0001_ip = 105; continue _fun0001;
 85:
            var4 = var6.getIconSource;
            var3 = _closure1_slot11;
            var3 = var3[var7];
            var2 = var4.bind(var6)(var3, var5);
 105:
            var1 = var2;
 108:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function coerceStableAsset(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var4);
            var2 = null;
            if(var1) { _fun0002_ip = 60; continue _fun0002 }
 26:
            var3 = var2 != var4;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 35:
            var6 = 'number';
            var5 = typeof var4;
            var3 = var4;
            if(!(var6 !== var5)) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var3 = var4.uri;
 55:
            var1 = var3;
 58:
            _fun0002_ip = 84; continue _fun0002;
 60:
            var3 = 0;
            var3 = var4[var3];
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 81; continue _fun0002 }
 75:
            var2 = var3.uri;
 81:
            var1 = var2;
 84:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var14.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var4 = var8[var2];
    var2 = native4;
    var9 = var2.bind(var1)(var4);
    var _closure1_slot4 = var9;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ExpressionSourceGuildRecord;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.getGuildIconSource;
    var _closure1_slot6 = var4;
    var2 = var2.getGuildAcronym;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var15 = var2.Fonts;
    var2 = 5;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot8 = var2;
    var4 = {};
    var2 = 'XXXSMALL';
    var4['XXXSMALL'] = var2;
    var2 = 'XXSMALL_12';
    var4['XXSMALL_12'] = var2;
    var2 = 'XXSMALL';
    var4['XXSMALL'] = var2;
    var2 = 'XSMALL_20';
    var4['XSMALL_20'] = var2;
    var2 = 'XSMALL';
    var4['XSMALL'] = var2;
    var2 = 'SMALL';
    var4['SMALL'] = var2;
    var2 = 'SMALL_32';
    var4['SMALL_32'] = var2;
    var2 = 'SMALL_36';
    var4['SMALL_36'] = var2;
    var2 = 'NORMAL';
    var4['NORMAL'] = var2;
    var2 = 'LARGE';
    var4['LARGE'] = var2;
    var2 = 'XLARGE';
    var4['XLARGE'] = var2;
    var2 = 'XXLARGE';
    var4['XXLARGE'] = var2;
    var _closure1_slot9 = var4;
    var2 = {};
    var10 = var4.XXXSMALL;
    var6 = [6, 4, 4, 4, 2, 1];
    var2[var10] = var6;
    var10 = var4.XXSMALL_12;
    var6 = [8, 6, 6, 4, 4, 2];
    var2[var10] = var6;
    var10 = var4.XXSMALL;
    var6 = [10, 8, 8, 6, 6, 4];
    var2[var10] = var6;
    var10 = var4.XSMALL_20;
    var6 = [12, 10, 10, 8, 8, 6];
    var2[var10] = var6;
    var10 = var4.XSMALL;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.SMALL;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.SMALL_32;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.SMALL_36;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.NORMAL;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.LARGE;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.XLARGE;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var10 = var4.XXLARGE;
    var6 = [16, 16, 16, 14, 14, 12];
    var2[var10] = var6;
    var _closure1_slot10 = var2;
    var2 = {};
    var6 = var4.XXXSMALL;
    var26 = 10;
    var2[var6] = var26;
    var6 = var4.XXSMALL_12;
    var25 = 12;
    var2[var6] = var25;
    var6 = var4.XXSMALL;
    var24 = 16;
    var2[var6] = var24;
    var6 = var4.XSMALL_20;
    var23 = 20;
    var2[var6] = var23;
    var6 = var4.XSMALL;
    var22 = 24;
    var2[var6] = var22;
    var6 = var4.SMALL;
    var21 = 30;
    var2[var6] = var21;
    var6 = var4.SMALL_32;
    var20 = 32;
    var2[var6] = var20;
    var6 = var4.SMALL_36;
    var19 = 36;
    var2[var6] = var19;
    var6 = var4.NORMAL;
    var18 = 40;
    var2[var6] = var18;
    var6 = var4.LARGE;
    var17 = 48;
    var2[var6] = var17;
    var6 = var4.XLARGE;
    var13 = 64;
    var2[var6] = var13;
    var6 = var4.XXLARGE;
    var12 = 80;
    var2[var6] = var12;
    var _closure1_slot11 = var2;
    var6 = 6;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var27 = {'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var6['guildIcon'] = var27;
    var27 = var4.XXXSMALL;
    var26 = var16.bind(var1)(var26);
    var6[var27] = var26;
    var26 = var4.XXSMALL_12;
    var25 = var16.bind(var1)(var25);
    var6[var26] = var25;
    var25 = var4.XXSMALL;
    var24 = var16.bind(var1)(var24);
    var6[var25] = var24;
    var24 = var4.XSMALL_20;
    var23 = var16.bind(var1)(var23);
    var6[var24] = var23;
    var23 = var4.XSMALL;
    var22 = var16.bind(var1)(var22);
    var6[var23] = var22;
    var22 = var4.SMALL;
    var21 = var16.bind(var1)(var21);
    var6[var22] = var21;
    var21 = var4.SMALL_32;
    var20 = var16.bind(var1)(var20);
    var6[var21] = var20;
    var20 = var4.SMALL_36;
    var19 = var16.bind(var1)(var19);
    var6[var20] = var19;
    var19 = var4.NORMAL;
    var18 = var16.bind(var1)(var18);
    var6[var19] = var18;
    var18 = var4.LARGE;
    var17 = var16.bind(var1)(var17);
    var6[var18] = var17;
    var17 = var4.XLARGE;
    var13 = var16.bind(var1)(var13);
    var6[var17] = var13;
    var13 = var4.XXLARGE;
    var12 = var16.bind(var1)(var12);
    var6[var13] = var12;
    var16 = {};
    var12 = 7;
    var13 = var8[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var16['backgroundColor'] = var13;
    var13 = 'guildTextContainer';
    var6[var13] = var16;
    var16 = {};
    var13 = var8[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var16['backgroundColor'] = var13;
    var13 = 'guildTextContainerInactive';
    var6[var13] = var16;
    var16 = {};
    var13 = var8[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var16['backgroundColor'] = var13;
    var13 = 'guildTextContainerInactiveNested';
    var6[var13] = var16;
    var16 = {};
    var13 = var8[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var16['color'] = var13;
    var13 = var15.PRIMARY_SEMIBOLD;
    var16['fontFamily'] = var13;
    var13 = 'guildText';
    var6[var13] = var16;
    var13 = {};
    var15 = var15.PRIMARY_SEMIBOLD;
    var13['fontFamily'] = var15;
    var12 = var8[var12];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var13['color'] = var12;
    var12 = 'guildTextActive';
    var6[var12] = var13;
    var13 = {};
    var12 = 'transparent';
    var13['backgroundColor'] = var12;
    var12 = 'guildTextContainerInactiveAlt';
    var6[var12] = var13;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot12 = var6;
    var6 = var9.memo;
    var5 = function GuildIconInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild;
            var _closure2_slot0 = var4;
            var25 = var1.icon;
            var5 = undefined;
            if(!(var25 === var5)) { _fun0003_ip = 27; continue _fun0003 }
 25:
            var25 = null;
 27:
            var _closure2_slot1 = var25;
            var27 = var1.animate;
            if(!(var27 === var5)) { _fun0003_ip = 43; continue _fun0003 }
 41:
            var27 = false;
 43:
            var _closure2_slot2 = var27;
            var15 = var1.loadingStyle;
            var20 = var1.size;
            if(!(var20 === var5)) { _fun0003_ip = 75; continue _fun0003 }
 62:
            var3 = _closure1_slot9;
            var20 = var3.NORMAL;
 75:
            var _closure2_slot3 = var20;
            var10 = var1.selected;
            var _closure2_slot4 = var10;
            var3 = var1.TABS_altDefaultBackground;
            if(!(var3 === var5)) { _fun0003_ip = 101; continue _fun0003 }
 99:
            var3 = false;
 101:
            var7 = var1.nested;
            if(!(var7 === var5)) { _fun0003_ip = 113; continue _fun0003 }
 111:
            var7 = false;
 113:
            var9 = var1.textStyle;
            var _closure2_slot5 = var9;
            var17 = var1.preloadAnimation;
            var _closure2_slot6 = var17;
            var8 = var1.value;
            if(!(var8 === var5)) { _fun0003_ip = 148; continue _fun0003 }
 144:
            var8 = '';
 148:
            var21 = var1.style;
            var _closure2_slot7 = var21;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var1 = _closure1_slot12;
            var19 = var1.bind(var5)();
            _closure2_slot8 = var19;
            var1 = _closure1_slot13;
            var33 = undefined;
            var32 = var4;
            var31 = var20;
            var30 = var27;
            var29 = var25;
            var1 = var33[var1](var32, var31, var30, var29, var28);
            var18 = _closure1_slot4;
            var11 = var18.useRef;
            var16 = var11.bind(var18)(var1);
            _closure2_slot9 = var16;
            var12 = var18.useState;
            var11 = {};
            var11 = var12.bind(var18)(var11);
            var14 = _closure1_slot3;
            var13 = 2;
            var11 = var14.bind(var5)(var11, var13);
            var22 = 1;
            var11 = var11[var22];
            _closure2_slot10 = var11;
            var12 = var18.useState;
            var11 = false;
            var12 = var12.bind(var18)(var11);
            var12 = var14.bind(var5)(var12, var13);
            var13 = 0;
            var14 = var12[var13];
            var12 = var12[var22];
            _closure2_slot11 = var12;
            var13 = var18.useRef;
            var12 = true;
            var13 = var13.bind(var18)(var12);
            _closure2_slot12 = var13;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var13 = 9;
            var13 = var23[var13];
            var13 = var18.bind(var5)(var13);
            var16 = var13.bind(var5)(var16);
            var18 = _closure1_slot14;
            var13 = var18.bind(var5)(var16);
            var24 = var18.bind(var5)(var1);
            var26 = var13 !== var24;
            _closure2_slot13 = var26;
            var13 = !var26;
            if(!var26) { _fun0003_ip = 410; continue _fun0003 }
 393:
            var18 = var17;
            if(!var18) { _fun0003_ip = 407; continue _fun0003 }
 399:
            var23 = 'string';
            var18 = var23 === var24;
 407:
            var13 = var18;
 410:
            var13 = !var13;
            _closure2_slot14 = var13;
            var24 = _closure1_slot4;
            var28 = var24.useEffect;
            var23 = function() {
                var1 = function() {
                    var2 = _closure2_slot12;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var18 = new Array(0);
            var18 = var28.bind(var24)(var23, var18);
            var23 = var24.useEffect;
            var18 = new Array(7);
            var18[0] = var13;
            var18[1] = var27;
            var18[2] = var26;
            var18[3] = var4;
            var18[4] = var25;
            var18[5] = var17;
            var18[6] = var20;
            var17 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var9 = _closure1_slot13;
                    var13 = _closure2_slot0;
                    var12 = _closure2_slot3;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot1;
                    var1 = undefined;
                    var14 = undefined;
                    var3 = var14[var9](var13, var12, var11, var10, var9);
                    var _closure3_slot0 = var3;
                    var6 = _closure1_slot14;
                    var7 = var6.bind(var1)(var3);
                    var6 = _closure2_slot14;
                    if(var6) { _fun0004_ip = 129; continue _fun0004 }
 56:
                    var6 = _closure2_slot13;
                    if(!var6) { _fun0004_ip = 129; continue _fun0004 }
 63:
                    var6 = _closure2_slot6;
                    if(!var6) { _fun0004_ip = 129; continue _fun0004 }
 70:
                    var8 = 'string';
                    var6 = typeof var7;
                    if(!(var8 === var6)) { _fun0004_ip = 129; continue _fun0004 }
 81:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 10;
                    var5 = var8[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.preload;
                    var6 = var5.bind(var6)(var7);
                    var5 = var6.then;
                    var4 = function() {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var1 = undefined;
                        var3 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = _closure2_slot12;
                                var2 = var2.current;
                                if(!var2) { _fun0005_ip = 45; continue _fun0005 }
 15:
                                var3 = _closure2_slot9;
                                var2 = _closure3_slot0;
                                var3['current'] = var2;
                                var3 = _closure2_slot10;
                                var2 = undefined;
                                var1 = {};
                                var1 = var3.bind(var2)(var1);
 45:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = 0;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0004_ip = 146; continue _fun0004;
 129:
                    var4 = _closure2_slot13;
                    if(!var4) { _fun0004_ip = 146; continue _fun0004 }
 136:
                    var2 = _closure2_slot9;
                    var2['current'] = var3;
 146:
                    return var1;
                }
            };
            var17 = var23.bind(var24)(var17, var18);
            if(!var13) { _fun0003_ip = 495; continue _fun0003 }
 492:
            var16 = var1;
 495:
            var13 = null;
            var1 = var13 == var16;
            _closure2_slot15 = var1;
            var18 = undefined;
            if(var1) { _fun0003_ip = 527; continue _fun0003 }
 510:
            var18 = undefined;
            if(var14) { _fun0003_ip = 527; continue _fun0003 }
 515:
            var14 = var13 == var15;
            var18 = undefined;
            if(var14) { _fun0003_ip = 527; continue _fun0003 }
 524:
            var18 = var15;
 527:
            _closure2_slot16 = var18;
            var17 = undefined;
            if(!var1) { _fun0003_ip = 579; continue _fun0003 }
 536:
            var17 = undefined;
            if(!(var11 === var10)) { _fun0003_ip = 579; continue _fun0003 }
 542:
            if(var7) { _fun0003_ip = 568; continue _fun0003 }
 545:
            if(var3) { _fun0003_ip = 558; continue _fun0003 }
 548:
            var3 = var19.guildTextContainerInactive;
            _fun0003_ip = 566; continue _fun0003;
 558:
            var3 = var19.guildTextContainerInactiveAlt;
 566:
            _fun0003_ip = 576; continue _fun0003;
 568:
            var3 = var19.guildTextContainerInactiveNested;
 576:
            var17 = var3;
 579:
            _closure2_slot17 = var17;
            if(!(var13 == var4)) { _fun0003_ip = 620; continue _fun0003 }
 587:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 8;
            var3 = var14[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.getAcronym;
            var8 = var3.bind(var7)(var8);
            _fun0003_ip = 629; continue _fun0003;
 620:
            var3 = _closure1_slot7;
            var8 = var3.bind(var5)(var4);
 629:
            var14 = undefined;
            if(!var1) { _fun0003_ip = 680; continue _fun0003 }
 634:
            var3 = _closure1_slot10;
            var7 = var3[var20];
            var4 = undefined;
            if(!(var5 !== var8)) { _fun0003_ip = 657; continue _fun0003 }
 648:
            var3 = var8.length;
            var4 = var7[var3];
 657:
            var3 = var7.length;
            var3 = var3 - var22;
            var3 = var7[var3];
            if(!(var13 != var4)) { _fun0003_ip = 677; continue _fun0003 }
 674:
            var3 = var4;
 677:
            var14 = var3;
 680:
            _closure2_slot18 = var14;
            var7 = _closure1_slot4;
            var4 = var7.useMemo;
            var3 = new Array(9);
            var3[0] = var21;
            var3[1] = var20;
            var3[2] = var19;
            var3[3] = var18;
            var3[4] = var17;
            var3[5] = var14;
            var3[6] = var10;
            var3[7] = var9;
            var3[8] = var1;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot8;
                    var1 = var1.guildIcon;
                    var2 = new Array(3);
                    var2[0] = var1;
                    var3 = _closure2_slot8;
                    var1 = _closure2_slot3;
                    var1 = var3[var1];
                    var2[1] = var1;
                    var1 = _closure2_slot7;
                    var2[2] = var1;
                    var1 = _closure2_slot16;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0006_ip = 69; continue _fun0006 }
 55:
                    var5 = var2.push;
                    var1 = _closure2_slot16;
                    var1 = var5.bind(var2)(var1);
 69:
                    var1 = _closure2_slot15;
                    if(!var1) { _fun0006_ip = 99; continue _fun0006 }
 76:
                    var5 = var2.unshift;
                    var1 = _closure2_slot8;
                    var1 = var1.guildTextContainer;
                    var1 = var5.bind(var2)(var1);
 99:
                    var1 = _closure2_slot17;
                    if(!(var3 != var1)) { _fun0006_ip = 121; continue _fun0006 }
 107:
                    var3 = var2.push;
                    var1 = _closure2_slot17;
                    var1 = var3.bind(var2)(var1);
 121:
                    var1 = {};
                    var3 = function handleLoaded() {
                        var3 = _closure2_slot11;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1['handleLoaded'] = var3;
                    var1['wrapperStyle'] = var2;
                    var3 = _closure2_slot15;
                    var2 = undefined;
                    if(!var3) { _fun0006_ip = 219; continue _fun0006 }
 149:
                    var5 = _closure2_slot4;
                    var3 = false;
                    if(!(var3 !== var5)) { _fun0006_ip = 173; continue _fun0006 }
 159:
                    var3 = _closure2_slot8;
                    var5 = var3.guildTextActive;
                    _fun0006_ip = 185; continue _fun0006;
 173:
                    var3 = _closure2_slot8;
                    var5 = var3.guildText;
 185:
                    var3 = new Array(3);
                    var3[0] = var5;
                    var5 = {};
                    var6 = _closure2_slot18;
                    var5['fontSize'] = var6;
                    var3[1] = var5;
                    var4 = _closure2_slot5;
                    var3[2] = var4;
                    var2 = var3;
 219:
                    var1['textComponentStyle'] = var2;
                    return var1;
                }
            };
            var2 = var4.bind(var7)(var2, var3);
            var14 = var2.handleLoaded;
            var7 = var2.wrapperStyle;
            var9 = var2.textComponentStyle;
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var1) { _fun0003_ip = 834; continue _fun0003 }
 777:
            var1 = 10;
            var1 = var10[var1];
            var2 = var3.bind(var5)(var1);
            var1 = {};
            var1['style'] = var7;
            var1['source'] = var16;
            var15 = var13 != var15;
            var13 = undefined;
            if(!var15) { _fun0003_ip = 811; continue _fun0003 }
 808:
            var13 = var14;
 811:
            var1['onLoadEnd'] = var13;
            var1['progressiveRenderingEnabled'] = var12;
            var1['fade'] = var11;
            var1 = var4.bind(var5)(var2, var1);
            _fun0003_ip = 926; continue _fun0003;
 834:
            var2 = 11;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {'shouldRasterizeIOS': true, 'style': null, 'collapsable': false};
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var6 = 12;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.NativeText;
            var6 = {'numberOfLines': 1, 'ellipsizeMode': 'tail', 'accessible': false, 'accessibilityRole': 'none', 'accessibilityElementsHidden': true, 'experimental_useNativeText': true};
            var6['style'] = var9;
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 926:
            return var1;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'uikit-native/GuildIcon.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['GuildIconSizes'] = var4;
    var3['ImageSizes'] = var2;
    return var1;
})();