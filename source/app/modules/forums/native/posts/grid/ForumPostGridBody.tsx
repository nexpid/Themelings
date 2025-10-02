// app/modules/forums/native/posts/grid/ForumPostGridBody.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GIFIcon() {
        var2 = _closure1_slot9;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var6 = 6;
        var1 = var8[var6];
        var2 = var7.bind(var4)(var1);
        var1 = {};
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.Sizes;
        var6 = var6.CUSTOM;
        var1['size'] = var6;
        var6 = 7;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var1['source'] = var6;
        var6 = true;
        var1['disableColor'] = var6;
        var5 = var5.gifIcon;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function PlayIcon() {
        var4 = _closure1_slot7;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 6;
        var1 = var7[var5];
        var3 = undefined;
        var2 = var6.bind(var3)(var1);
        var1 = {};
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.Sizes;
        var5 = var5.SMALL_20;
        var1['size'] = var5;
        var5 = 8;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var1['source'] = var5;
        var5 = true;
        var1['disableColor'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function ExtraMediaIcon(arg1) {
        var1 = arg1;
        var11 = var1.extraMediaCount;
        var1 = _closure1_slot9;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var9.extraMediaCountContainer;
        var1['style'] = var5;
        var8 = _closure1_slot7;
        var13 = _closure1_slot1;
        var10 = _closure1_slot2;
        var12 = 6;
        var5 = var10[var12];
        var7 = var13.bind(var4)(var5);
        var5 = {};
        var14 = 9;
        var14 = var10[var14];
        var14 = var13.bind(var4)(var14);
        var5['source'] = var14;
        var14 = var9.icon;
        var14 = var14.color;
        var5['color'] = var14;
        var12 = var10[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.Sizes;
        var12 = var12.REFRESH_SMALL_16;
        var5['size'] = var12;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot7;
        var7 = _closure1_slot0;
        var6 = 10;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-secondary'};
        var9 = var9.extraMediaCount;
        var6['style'] = var9;
        var9 = global;
        var9 = var9.HermesInternal;
        var10 = var9.concat;
        var9 = '+';
        var9 = var10.bind(var9)(var11);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function MediaGridColumn(arg1) {
        var1 = arg1;
        var7 = var1.column;
        var1 = var1.thread;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot9;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var _closure2_slot1 = var6;
        var3 = var7.filter;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 11;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.isNotNullish;
        var7 = var3.bind(var7)(var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.column;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var11 = arg1;
                var9 = arg2;
                var5 = _closure1_slot8;
                var2 = _closure1_slot4;
                var4 = var2.Fragment;
                var3 = {};
                var2 = 0;
                var2 = var9 > var2;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var10 = _closure1_slot7;
                var8 = _closure1_slot5;
                var7 = {};
                var6 = _closure2_slot1;
                var6 = var6.rowSpacer;
                var7['style'] = var6;
                var6 = undefined;
                var2 = var10.bind(var6)(var8, var7);
case 2:
                var6 = new Array(2);
                var6[0] = var2;
                var10 = _closure1_slot7;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var7.bind(var2)(var1);
                var8 = var1.ForumPostGridMedia;
                var7 = {};
                var1 = _closure2_slot0;
                var7['channel'] = var1;
                var12 = var11.media;
                var7['media'] = var12;
                var12 = var11.targetWidth;
                var7['targetWidth'] = var12;
                var11 = var11.targetHeight;
                var7['targetHeight'] = var11;
                var7 = var10.bind(var2)(var8, var7);
                var6[1] = var7;
                var3['children'] = var6;
                var8 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '';
                var1 = '-';
                var1 = var7.bind(var6)(var8, var1, var9);
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.useWindowDimensions;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 20, 'width': 33, 'backgroundColor': 'black', 'borderRadius': null, 'resizeMode': 'cover'};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['gifIcon'] = var9;
    var9 = {'position': 'relative', 'backgroundColor': null, 'height': 225};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = 192;
    var9['height'] = var13;
    var4['wideAspectRatioContainer'] = var9;
    var9 = {};
    var15 = 6;
    var9['paddingLeft'] = var15;
    var4['mediaIconContainer'] = var9;
    var9 = {'flexDirection': 'row', 'position': 'absolute', 'top': 4, 'left': 4};
    var4['headerLeftContainer'] = var9;
    var9 = {'flexDirection': 'row', 'position': 'absolute', 'bottom': 4, 'left': 4, 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var4['footerLeftContainer'] = var9;
    var9 = {'position': 'absolute', 'bottom': 4, 'right': 4, 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var4['footerRightContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'height': 24, 'paddingHorizontal': 8, 'borderRadius': 20};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND;
    var9['backgroundColor'] = var15;
    var4['extraMediaCountContainer'] = var9;
    var9 = {};
    var9['marginLeft'] = var14;
    var4['extraMediaCount'] = var9;
    var9 = {'height': 225, 'flexDirection': 'row', 'borderRadius': null, 'overflow': 'hidden'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['grid'] = var9;
    var9 = {};
    var9['height'] = var13;
    var4['wideAspectRatioGrid'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column'};
    var4['column'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['cell'] = var9;
    var9 = {'flex': 0, 'width': 2, 'height': '100%'};
    var4['columnSpacer'] = var9;
    var9 = {'flex': 0, 'height': 2, 'width': '100%'};
    var4['rowSpacer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_SECONDARY;
    var9['color'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = new Array(2);
    var7 = [0, 3];
    var4[0] = var7;
    var7 = [1, 2];
    var4[1] = var7;
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/grid/ForumPostGridBody.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostGridBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.thread;
            var _closure2_slot0 = var3;
            var20 = var1.hasUnreads;
            var1 = var1.media;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot9;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var _closure2_slot2 = var11;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useSomeAppliedTags;
            var6 = 2;
            var5 = var2.bind(var5)(var3, var6);
            var2 = _closure1_slot3;
            var5 = var2.bind(var4)(var5, var6);
            var6 = 0;
            var22 = var5[var6];
            var2 = 1;
            var21 = var5[var2];
            var2 = var22.length;
            var17 = var2 > var6;
            var2 = global;
            var7 = var2.Math;
            var5 = var7.max;
            var8 = var1.length;
            var2 = 4;
            var2 = var8 - var2;
            var13 = var5.bind(var7)(var6, var2);
            var2 = var3.isMediaPost;
            var18 = var2.bind(var3)();
            var2 = function useMediaGridLayout(arg1, arg2) {
                var3 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var5;
                var6 = _closure1_slot6;
                var4 = undefined;
                var4 = var6.bind(var4)();
                var7 = var4.width;
                var _closure3_slot2 = var7;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var2 = _closure3_slot0;
                    var3 = var2.length;
                    var2 = 2;
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot10;
                    var3 = var4.slice;
                    var2 = 0;
                    var4 = var3.bind(var4)(var2, var5);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            var1 = var2[var1];
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.filter;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 11;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.isNotNullish;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var6.bind(var8)(var3, var4);
                var _closure3_slot3 = var6;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() {
                    var3 = _closure3_slot3;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var3 = arg1;
                        var4 = var3.filter;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var2 = var2.isNotNullish;
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.length;
                        var _closure5_slot0 = var2;
                        var2 = _closure3_slot3;
                        var2 = var2.length;
                        var _closure5_slot1 = var2;
                        var2 = var3.map;
                        var1 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = _closure3_slot2;
                                var1 = 48;
                                var1 = var2 - var1;
                                var7 = _closure5_slot1;
                                var4 = var1 / var7;
                                var2 = 1;
                                var1 = var7 - var2;
                                var6 = 2;
                                var1 = var6 * var1;
                                var1 = var1 / var7;
                                var4 = var4 - var1;
                                var1 = {};
                                var7 = arg1;
                                var1['media'] = var7;
                                var1['targetWidth'] = var4;
                                var5 = _closure3_slot1;
                                if(!var5) { _fun0003_ip = 4; continue _fun0003 }
case 2:
                                var5 = _closure5_slot1;
                                if(!(!(var5 < var6))) { _fun0003_ip = 5; continue _fun0003 }
case 4:
                                var5 = _closure5_slot0;
                                var3 = 225;
                                var3 = var3 / var5;
                                var2 = var5 - var2;
                                var2 = var6 * var2;
                                var2 = var2 / var5;
                                var2 = var3 - var2;
                                _fun0003_ip = 6; continue _fun0003;
case 5:
                                var3 = 1.7777777777777777;
                                var2 = var4 / var3;
case 6:
                                var1['targetHeight'] = var2;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var14 = var2.bind(var4)(var1, var18);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.messageContainsGifOrVideo;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var15 = var1.containsVideo;
            var16 = var1.containsGif;
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var11.container;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var18;
            if(!var18) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var11.wideAspectRatioContainer;
case 7:
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var5 = {};
            var19 = var11.grid;
            var12 = new Array(2);
            var12[0] = var19;
            if(!var18) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var18 = var11.wideAspectRatioGrid;
case 9:
            var12[1] = var18;
            var5['style'] = var12;
            var12 = var14.map;
            var9 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var9 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot8;
                    var1 = _closure1_slot4;
                    var4 = var1.Fragment;
                    var3 = {};
                    var1 = 0;
                    var6 = var8 > var1;
                    if(!var6) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                    var11 = _closure1_slot7;
                    var10 = _closure1_slot5;
                    var7 = {};
                    var1 = _closure2_slot2;
                    var1 = var1.columnSpacer;
                    var7['style'] = var1;
                    var1 = undefined;
                    var6 = var11.bind(var1)(var10, var7);
case 2:
                    var1 = new Array(2);
                    var1[0] = var6;
                    var10 = _closure1_slot7;
                    var7 = _closure1_slot14;
                    var6 = {};
                    var6['column'] = var9;
                    var2 = _closure2_slot0;
                    var6['thread'] = var2;
                    var2 = undefined;
                    var6 = var10.bind(var2)(var7, var6);
                    var1[1] = var6;
                    var3['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '';
                    var1 = '-';
                    var1 = var7.bind(var6)(var9, var1, var8);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var9 = var12.bind(var14)(var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var7 = var17;
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var12 = _closure1_slot7;
            var9 = _closure1_slot5;
            var8 = {};
            var14 = var11.footerLeftContainer;
            var8['style'] = var14;
            var14 = var17;
            if(!var17) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var19 = _closure1_slot7;
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 15;
            var17 = var23[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.ForumPostAppliedTagPills;
            var17 = {};
            var17['appliedTags'] = var22;
            var17['additionalTagsCount'] = var21;
            var17['hasUnreads'] = var20;
            var14 = var19.bind(var4)(var18, var17);
case 13:
            var8['children'] = var14;
            var7 = var12.bind(var4)(var9, var8);
case 11:
            var5[1] = var7;
            var7 = var16;
            if(var16) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var15;
case 15:
            if(!var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var12 = _closure1_slot8;
            var9 = _closure1_slot5;
            var8 = {};
            var14 = var11.headerLeftContainer;
            var8['style'] = var14;
            if(!var16) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var18 = _closure1_slot7;
            var17 = _closure1_slot5;
            var14 = {};
            var19 = var11.mediaIconContainer;
            var14['style'] = var19;
            var21 = _closure1_slot7;
            var20 = _closure1_slot11;
            var19 = {};
            var19 = var21.bind(var4)(var20, var19);
            var14['children'] = var19;
            var16 = var18.bind(var4)(var17, var14);
case 19:
            var14 = new Array(2);
            var14[0] = var16;
            if(!var15) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var18 = _closure1_slot7;
            var17 = _closure1_slot5;
            var16 = {};
            var19 = var11.mediaIconContainer;
            var16['style'] = var19;
            var21 = _closure1_slot7;
            var20 = _closure1_slot12;
            var19 = {};
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 21:
            var14[1] = var15;
            var8['children'] = var14;
            var7 = var12.bind(var4)(var9, var8);
case 17:
            var5[2] = var7;
            var6 = var6 !== var13;
            if(!var6) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var9 = _closure1_slot7;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.footerRightContainer;
            var7['style'] = var11;
            var12 = _closure1_slot7;
            var11 = _closure1_slot13;
            var10 = {};
            var10['extraMediaCount'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 23:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 48;
    var3['GRID_HORIZONTAL_PADDING'] = var2;
    return var1;
})();