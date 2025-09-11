// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx
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
    var10 = 2;
    var8 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var16 = 3;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.Image;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.HAPPENING_NOW_CONTENT_HEIGHT;
    var _closure1_slot9 = var12;
    var4 = var4.STATUS_CUTOUT_SMALL;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var7 = {};
    var11 = 16;
    var4 = var12 - var11;
    var4 = var4 / var10;
    var7['left'] = var4;
    var13 = -3;
    var7['top'] = var13;
    var8 = {};
    var4 = '24deg';
    var8['rotate'] = var4;
    var4 = new Array(1);
    var4[0] = var8;
    var7['transform'] = var4;
    var4 = new Array(6);
    var4[0] = var7;
    var7 = {};
    var8 = var12 - var11;
    var8 = var8 + var16;
    var7['left'] = var8;
    var9 = 32;
    var8 = var12 - var9;
    var8 = var8 - var11;
    var8 = var8 / var10;
    var7['top'] = var8;
    var15 = {};
    var8 = '-12deg';
    var15['rotate'] = var8;
    var14 = new Array(1);
    var14[0] = var15;
    var7['transform'] = var14;
    var4[1] = var7;
    var7 = {};
    var14 = var12 - var11;
    var14 = var14 + var16;
    var7['left'] = var14;
    var14 = var12 - var11;
    var14 = var14 + var9;
    var14 = var14 / var10;
    var7['top'] = var14;
    var17 = {};
    var14 = '12deg';
    var17['rotate'] = var14;
    var15 = new Array(1);
    var15[0] = var17;
    var7['transform'] = var15;
    var4[2] = var7;
    var7 = {};
    var15 = var12 - var11;
    var15 = var15 / var10;
    var7['left'] = var15;
    var15 = var12 - var11;
    var15 = var15 + var16;
    var7['top'] = var15;
    var16 = {};
    var15 = '-24deg';
    var16['rotate'] = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var7['transform'] = var15;
    var4[3] = var7;
    var7 = {};
    var7['left'] = var13;
    var15 = var12 - var11;
    var15 = var15 + var9;
    var15 = var15 / var10;
    var7['top'] = var15;
    var15 = {};
    var15['rotate'] = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var7['transform'] = var14;
    var4[4] = var7;
    var7 = {};
    var7['left'] = var13;
    var9 = var12 - var9;
    var9 = var9 - var11;
    var9 = var9 / var10;
    var7['top'] = var9;
    var9 = {};
    var9['rotate'] = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var7['transform'] = var8;
    var4[5] = var7;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {};
            var3 = 'center';
            var2 = {'flexShrink': 1, 'flexDirection': 'row', 'alignItems': 'center'};
            var1['customStatusContainer'] = var2;
            var4 = 12;
            var5 = 2;
            var2 = {'flexShrink': 1, 'flexDirection': 'column', 'marginLeft': 12, 'gap': 2};
            var1['customStatusContextContainer'] = var2;
            var2 = {};
            var2['marginBottom'] = var5;
            var1['statusAvatar'] = var2;
            var2 = {'width': 32, 'height': 32, 'borderRadius': 2, 'overflow': 'hidden'};
            var1['largeEmoji'] = var2;
            var2 = {'position': 'absolute', 'width': 16, 'height': 16, 'borderRadius': 2, 'opacity': 0.6};
            var1['smallEmoji'] = var2;
            var2 = {};
            var2['justifyContent'] = var3;
            var5 = undefined;
            var6 = arg1;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 118; continue _fun0001 }
 115:
            var3 = var4;
 118:
            var2['paddingLeft'] = var3;
            var1['cardContainer'] = var2;
            var2 = {'width': null, 'height': null, 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'overflow': 'hidden'};
            var4 = _closure1_slot9;
            var2['width'] = var4;
            var2['height'] = var4;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.sm;
            var2['borderRadius'] = var3;
            var1['emojisContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCustomStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomStatusActivityCard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.fullwidth;
            var23 = var1.user;
            var _closure2_slot0 = var23;
            var31 = var1.guildId;
            var21 = var1.activity;
            var _closure2_slot1 = var21;
            var25 = var1.userTitle;
            var7 = var1.onPress;
            var5 = var1.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 60; continue _fun0002 }
 58:
            var5 = false;
 60:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot16;
            var1 = var21.emoji;
            var17 = null;
            var1 = var17 == var1;
            var28 = var2.bind(var4)(var1);
            _closure2_slot2 = var28;
            var10 = _closure1_slot5;
            var1 = var10.useState;
            var1 = var1.bind(var10)(var4);
            var6 = _closure1_slot4;
            var3 = 2;
            var2 = var6.bind(var4)(var1, var3);
            var19 = 0;
            var20 = var2[var19];
            var1 = 1;
            var2 = var2[var1];
            _closure2_slot3 = var2;
            var2 = var10.useState;
            var2 = var2.bind(var10)(var4);
            var2 = var6.bind(var4)(var2, var3);
            var32 = var2[var19];
            _closure2_slot4 = var32;
            var2 = var2[var1];
            _closure2_slot5 = var2;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var11 = var6.bind(var4)(var2);
            var9 = var11.useStateFromStoresObject;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot8;
                    var4 = var5.getStatus;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var5 = var4.bind(var5)(var1);
                    var1 = {};
                    var4 = _closure1_slot11;
                    var6 = var4.OFFLINE;
                    var4 = null;
                    if(!(var5 !== var6)) { _fun0003_ip = 51; continue _fun0003 }
 48:
                    var4 = var5;
 51:
                    var1['status'] = var4;
                    var4 = _closure1_slot8;
                    var3 = var4.isMobileOnline;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['isMobileOnline'] = var2;
                    return var1;
                }
            };
            var2 = var9.bind(var11)(var6, var2);
            var30 = var2.status;
            var29 = var2.isMobileOnline;
            var9 = var10.useEffect;
            var2 = var21.emoji;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = function _loadEmoji() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 253; continue _fun0004 }
 10:
                                var2 = _closure2_slot1;
                                var3 = var2.emoji;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0004_ip = 242; continue _fun0004 }
 31:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 11;
                                var2 = var5[var2];
                                var5 = undefined;
                                var7 = var6.bind(var5)(var2);
                                var6 = var7.getEmojiSource;
                                var2 = _closure2_slot1;
                                var2 = var2.emoji;
                                var2 = var6.bind(var7)(var2);
                                SaveGenerator(address=80);
 78:
                                return var2;
 80:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0004_ip = 250; continue _fun0004 }
 89:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 12;
                                var3 = var7[var3];
                                var7 = var6.bind(var5)(var3);
                                var6 = var7.getEmojiDominantColors;
                                var3 = {};
                                var8 = _closure2_slot1;
                                var8 = var8.emoji;
                                var3['emoji'] = var8;
                                var3['emojiSource'] = var2;
                                var3 = var6.bind(var7)(var3);
                                SaveGenerator(address=144);
 142:
                                return var3;
 144:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                if(var6) { _fun0004_ip = 247; continue _fun0004 }
 150:
                                var7 = var3.length;
                                var6 = 0;
                                if(!(var7 > var6)) { _fun0004_ip = 233; continue _fun0004 }
 161:
                                var8 = var3[var6];
                                var7 = _closure2_slot3;
                                var19 = var8[var6];
                                var6 = 1;
                                var17 = var8[var6];
                                var6 = 2;
                                var15 = var8[var6];
                                var6 = global;
                                var6 = var6.HermesInternal;
                                var10 = var6.concat;
                                var20 = 'rgba(';
                                var8 = ', ';
                                var14 = ', 0.16)';
                                var18 = var8;
                                var16 = var8;
                                var6 = var20[var10](var19, var18, var17, var16, var15, var14, var13);
                                var6 = var7.bind(var5)(var6);
 233:
                                var4 = _closure2_slot5;
                                var4 = var4.bind(var5)(var2);
 242:
                                var4 = undefined;
                                return var4;
 247:
                                return var3;
 250:
                                return var2;
 253:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function loadEmoji() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var2 = var9.bind(var10)(var2, var6);
            var2 = var21.emoji;
            var2 = var17 != var2;
            var22 = var3;
            if(!var2) { _fun0002_ip = 290; continue _fun0002 }
 287:
            var22 = var1;
 290:
            var6 = new Array(3);
            var6[0] = var25;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 13;
            var2 = var1[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getStatusLabel;
            var2 = var2.bind(var3)(var30);
            var6[1] = var2;
            var2 = var21.state;
            var6[2] = var2;
            var3 = var6.join;
            var2 = ', ';
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var26 = 14;
            var1 = var1[var26];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var7;
            var7 = 'stretchy';
            if(!var8) { _fun0002_ip = 397; continue _fun0002 }
 393:
            var7 = 'full';
 397:
            var1['width'] = var7;
            var7 = var28.cardContainer;
            var1['style'] = var7;
            var1['accessibilityLabel'] = var6;
            var1['panelVariant'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var28.customStatusContainer;
            var5['style'] = var8;
            var8 = var21.emoji;
            if(!(var17 == var8)) { _fun0002_ip = 707; continue _fun0002 }
 452:
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var8 = {};
            var27 = _closure1_slot12;
            var12 = _closure1_slot1;
            var33 = _closure1_slot2;
            var13 = 17;
            var11 = var33[var13];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['user'] = var23;
            var14 = var23.avatarDecoration;
            var11['avatarDecoration'] = var14;
            var24 = _closure1_slot0;
            var13 = var33[var13];
            var13 = var24.bind(var4)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.LARGE;
            var11['size'] = var13;
            var11['guildId'] = var31;
            var11['status'] = var30;
            var11['isMobileOnline'] = var29;
            var34 = true;
            var11['autoStatusCutout'] = var34;
            var12 = var27.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var13 = _closure1_slot6;
            var12 = {};
            var14 = var28.customStatusContextContainer;
            var12['style'] = var14;
            var14 = var33[var26];
            var14 = var24.bind(var4)(var14);
            var16 = var14.HappeningNowCardHeader;
            var14 = {};
            var14['noMargin'] = var34;
            var14['children'] = var25;
            var16 = var27.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var16 = 18;
            var16 = var33[var16];
            var16 = var24.bind(var4)(var16);
            var24 = var16.Text;
            var16 = {'ellipsizeMode': 'tail', 'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': null, 'maxFontSizeMultiplier': 2};
            var16['lineClamp'] = var22;
            var33 = var21.state;
            var16['children'] = var33;
            var16 = var27.bind(var4)(var24, var16);
            var14[1] = var16;
            var12['children'] = var14;
            var12 = var10.bind(var4)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0002_ip = 1245; continue _fun0002;
 707:
            var11 = _closure1_slot13;
            var10 = _closure1_slot14;
            var9 = {};
            var13 = _closure1_slot6;
            var12 = {};
            var16 = var28.emojisContainer;
            var14 = new Array(2);
            var14[0] = var16;
            var16 = {};
            var16['backgroundColor'] = var20;
            var14[1] = var16;
            var12['style'] = var14;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 15;
            var14 = var20[var14];
            var16 = var16.bind(var4)(var14);
            var14 = var16.isAndroid;
            var14 = var14.bind(var16)();
            if(var14) { _fun0002_ip = 850; continue _fun0002 }
 783:
            var20 = _closure1_slot12;
            var16 = _closure1_slot1;
            var24 = _closure1_slot2;
            var14 = 16;
            var14 = var24[var14];
            var16 = var16.bind(var4)(var14);
            var14 = {};
            var24 = var21.emoji;
            var14['emoji'] = var24;
            var24 = 32;
            var14['size'] = var24;
            var24 = var28.largeEmoji;
            var14['style'] = var24;
            var24 = false;
            var14['animate'] = var24;
            var16 = var20.bind(var4)(var16, var14);
            _fun0002_ip = 890; continue _fun0002;
 850:
            var14 = var17 != var32;
            if(!var14) { _fun0002_ip = 887; continue _fun0002 }
 857:
            var27 = _closure1_slot12;
            var24 = _closure1_slot7;
            var20 = {};
            var20['source'] = var32;
            var32 = var28.largeEmoji;
            var20['style'] = var32;
            var14 = var27.bind(var4)(var24, var20);
 887:
            var16 = var14;
 890:
            var14 = new Array(2);
            var14[0] = var16;
            var20 = _closure1_slot15;
            var16 = var20.map;
            var15 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var9 = arg1;
                    var7 = arg2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var1 = var4[var1];
                    var6 = undefined;
                    var2 = var2.bind(var6)(var1);
                    var1 = var2.isAndroid;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0005_ip = 131; continue _fun0005 }
 43:
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 16;
                    var1 = var1[var8];
                    var2 = var2.bind(var6)(var1);
                    var1 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.emoji;
                    var1['emoji'] = var10;
                    var1['size'] = var8;
                    var5 = _closure2_slot2;
                    var8 = var5.smallEmoji;
                    var5 = new Array(2);
                    var5[0] = var8;
                    var5[1] = var9;
                    var1['style'] = var5;
                    var5 = false;
                    var1['animate'] = var5;
                    var1 = var4.bind(var6)(var2, var1, var7);
                    _fun0005_ip = 201; continue _fun0005;
 131:
                    var4 = _closure2_slot4;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0005_ip = 198; continue _fun0005 }
 147:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var10 = _closure2_slot4;
                    var3['source'] = var10;
                    var8 = _closure2_slot2;
                    var10 = var8.smallEmoji;
                    var8 = new Array(2);
                    var8[0] = var10;
                    var8[1] = var9;
                    var3['style'] = var8;
                    var2 = var5.bind(var6)(var4, var3, var7);
 198:
                    var1 = var2;
 201:
                    return var1;
                }
            };
            var15 = var16.bind(var20)(var15);
            var14[1] = var15;
            var12['children'] = var14;
            var13 = var11.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot13;
            var14 = _closure1_slot6;
            var13 = {};
            var16 = var28.customStatusContextContainer;
            var13['style'] = var16;
            var24 = _closure1_slot12;
            var27 = _closure1_slot1;
            var20 = _closure1_slot2;
            var32 = 17;
            var16 = var20[var32];
            var27 = var27.bind(var4)(var16);
            var16 = {};
            var16['user'] = var23;
            var23 = var23.avatarDecoration;
            var16['avatarDecoration'] = var23;
            var23 = _closure1_slot0;
            var32 = var20[var32];
            var32 = var23.bind(var4)(var32);
            var32 = var32.AvatarSizes;
            var32 = var32.XSMALL;
            var16['size'] = var32;
            var16['guildId'] = var31;
            var16['status'] = var30;
            var16['isMobileOnline'] = var29;
            var28 = var28.statusAvatar;
            var16['style'] = var28;
            var28 = _closure1_slot10;
            var16['autoStatusCutout'] = var28;
            var27 = var24.bind(var4)(var27, var16);
            var16 = new Array(3);
            var16[0] = var27;
            var20 = var20[var26];
            var20 = var23.bind(var4)(var20);
            var23 = var20.HappeningNowCardHeader;
            var20 = {};
            var26 = true;
            var20['noMargin'] = var26;
            var20['children'] = var25;
            var20 = var24.bind(var4)(var23, var20);
            var16[1] = var20;
            var23 = var21.state;
            var24 = var17 == var23;
            var20 = undefined;
            if(var24) { _fun0002_ip = 1134; continue _fun0002 }
 1129:
            var20 = var23.length;
 1134:
            var23 = var17 != var20;
            var17 = 0;
            if(!var23) { _fun0002_ip = 1146; continue _fun0002 }
 1143:
            var17 = var20;
 1146:
            var17 = var17 > var19;
            if(!var17) { _fun0002_ip = 1217; continue _fun0002 }
 1153:
            var20 = _closure1_slot12;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 18;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'ellipsizeMode': 'tail', 'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': null, 'maxFontSizeMultiplier': 2};
            var18['lineClamp'] = var22;
            var21 = var21.state;
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
 1217:
            var16[2] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 1245:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['CustomStatusActivityCard'] = var2;
    return var1;
})();