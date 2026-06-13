// app/modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['alignItems'] = var10;
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['header'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'borderRadius': null, 'borderWidth': 4};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9['borderColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['reactionPill'] = var9;
    var9 = {'width': 50, 'height': 50};
    var4['emoji'] = var9;
    var9 = {'fontSize': 24, 'lineHeight': 50, 'textAlign': 'center'};
    var4['emojiText'] = var9;
    var9 = {'fontSize': 24, 'lineHeight': 50};
    var4['reactionText'] = var9;
    var9 = {'height': 24, 'width': 24};
    var4['starIcon'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_FEEDBACK_WARNING;
    var9['tintColor'] = var12;
    var4['starIconSelected'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9['tintColor'] = var10;
    var4['starIconUnselected'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ReactionEmojiOptionsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.channelId;
            var _closure2_slot0 = var14;
            var8 = var1.messageId;
            var _closure2_slot1 = var8;
            var3 = var1.reaction;
            var10 = var1.canRemoveReactions;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var1 = _closure1_slot11;
            var31 = var1.bind(var4)();
            var _closure2_slot2 = var31;
            var1 = var3.emoji;
            var _closure2_slot3 = var1;
            var5 = var1.id;
            var16 = null;
            var17 = var16 != var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var5 = 8;
            var9 = var7[var5];
            var9 = var6.bind(var4)(var9);
            var12 = var9.DeveloperMode;
            var9 = var12.useSetting;
            var12 = var9.bind(var12)();
            var13 = _closure1_slot1;
            var9 = 9;
            var9 = var7[var9];
            var18 = var13.bind(var4)(var9);
            var15 = var18.useExperiment;
            var13 = {};
            var9 = 'ReactionEmojiOptionsActionSheet';
            var13['location'] = var9;
            var9 = {};
            var20 = false;
            var9['autoTrackExposure'] = var20;
            var9 = var15.bind(var18)(var13, var9);
            var19 = var9.tidaWebformEnabled;
            var13 = 10;
            var9 = var7[var13];
            var21 = var6.bind(var4)(var9);
            var18 = var21.useStateFromStores;
            var9 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var18.bind(var21)(var15, var9);
            var9 = var7[var13];
            var23 = var6.bind(var4)(var9);
            var22 = var23.useStateFromStores;
            var9 = _closure1_slot7;
            var18 = new Array(1);
            var18[0] = var9;
            var9 = var1.id;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.id;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = var4.getCustomEmojiById;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var9 = var22.bind(var23)(var18, var9, var15);
            var _closure2_slot4 = var9;
            var15 = 11;
            var15 = var7[var15];
            var18 = var6.bind(var4)(var15);
            var15 = var18.useIsFavoriteEmoji;
            var25 = var15.bind(var18)(var21, var9);
            var _closure2_slot5 = var25;
            var13 = var7[var13];
            var21 = var6.bind(var4)(var13);
            var18 = var21.useStateFromStores;
            var13 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var21 = var18.bind(var21)(var15, var13);
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.AnimateEmoji;
            var5 = var6.useSetting;
            var18 = var5.bind(var6)();
            var5 = var1.id;
            var5 = var16 != var5;
            var13 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 12;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.getEmojiURL;
            var5 = {};
            var15 = var1.id;
            var5['id'] = var15;
            var22 = var1.animated;
            var15 = var16 != var22;
            if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var22;
case 6:
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = !var21;
case 8:
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = var18;
case 10:
            var5['animated'] = var15;
            var15 = 96;
            var5['size'] = var15;
            var13 = var6.bind(var7)(var5);
case 4:
            _closure2_slot6 = var13;
            var6 = var3.burst_count;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var30 = var3.count;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var30 = var3.burst_count;
case 14:
            var6 = _closure1_slot4;
            var7 = var6.useCallback;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var7 = var7.bind(var6)(var5, var3);
            _closure2_slot7 = var7;
            var15 = var6.useCallback;
            var5 = new Array(1);
            var5[0] = var31;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = {};
                    var4 = _closure2_slot2;
                    var7 = var4.starIcon;
                    var8 = var3;
                    var1 = copyDataProperties(var8, var7);
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var7 = var4.starIconUnselected;
                    var8 = var3;
                    var1 = copyDataProperties(var8, var7);
                    var1 = var3;
                    _fun0003_ip = 17; continue _fun0003;
case 15:
                    var7 = var4.starIconSelected;
                    var8 = var3;
                    var4 = copyDataProperties(var8, var7);
                    var1 = var3;
case 17:
                    var4 = _closure1_slot9;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = 15;
                    var3 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var3 = var2.StarOutlineIcon;
                    _fun0003_ip = 20; continue _fun0003;
case 18:
                    var2 = 14;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = var2.StarIcon;
case 20:
                    var2 = {};
                    var2['style'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var3 = var15.bind(var6)(var3, var5);
            _closure2_slot8 = var3;
            var15 = var6.useCallback;
            var5 = new Array(4);
            var5[0] = var7;
            var5[1] = var9;
            var5[2] = var25;
            var5[3] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var4 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 21; continue _fun0004 }
case 16:
                    var5 = function content() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 16;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {};
                            var5 = {'marginLeft': 8, 'marginTop': 2};
                            var1['style'] = var5;
                            var5 = 'text-md/bold';
                            var1['variant'] = var5;
                            var5 = _closure2_slot5;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var6 = 17;
                            var7 = var10[var6];
                            var7 = var9.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var3)(var6);
                            var6 = var6.t;
                            if(var5) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var5 = var6.mE2e8A;
                            var5 = var7.bind(var8)(var5);
                            _fun0005_ip = 24; continue _fun0005;
case 22:
                            var6 = var6.in1rga;
                            var5 = var7.bind(var8)(var6);
case 24:
                            var1['children'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var7 = _closure2_slot5;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var8 = 18;
                    var8 = var4[var8];
                    var8 = var9.bind(var1)(var8);
                    if(var7) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var9 = var8.favoriteEmoji;
                    var7 = _closure2_slot4;
                    var7 = var9.bind(var8)(var7);
                    var9 = _closure1_slot1;
                    var7 = 19;
                    var7 = var4[var7];
                    var10 = var9.bind(var1)(var7);
                    var9 = var10.open;
                    var7 = {};
                    var11 = 'EMOJI_FAVORITED';
                    var7['key'] = var11;
                    var11 = function icon() {
                        var3 = _closure2_slot8;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var7['icon'] = var11;
                    var7['content'] = var5;
                    var7 = var9.bind(var10)(var7);
                    _fun0004_ip = 21; continue _fun0004;
case 25:
                    var7 = var8.unfavoriteEmoji;
                    var3 = _closure2_slot4;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot1;
                    var2 = 19;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var7 = 'EMOJI_UNFAVORITED';
                    var2['key'] = var7;
                    var6 = function icon() {
                        var3 = _closure2_slot8;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2['icon'] = var6;
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
case 21:
                    return var1;
                }
            };
            var23 = var15.bind(var6)(var3, var5);
            var15 = var6.useCallback;
            var3 = var1.id;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var7;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = var2.id;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 20;
                    var3 = var5[var2];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var3);
                    var6 = var7.copy;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var3 = var6.bind(var7)(var3);
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.presentCopiedToClipboard;
                    var3 = var3.bind(var4)();
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var2)();
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var15.bind(var6)(var3, var5);
            var15 = var6.useCallback;
            var5 = new Array(2);
            var5[0] = var13;
            var5[1] = var7;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 20;
                    var3 = var5[var2];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var3);
                    var6 = var7.copy;
                    var3 = _closure2_slot6;
                    var3 = var6.bind(var7)(var3);
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.presentCopiedToClipboard;
                    var3 = var3.bind(var4)();
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var2)();
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var15.bind(var6)(var3, var5);
            var5 = var6.useCallback;
            var3 = new Array(4);
            var3[0] = var14;
            var3[1] = var8;
            var3[2] = var1;
            var3[3] = var7;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.removeEmojiReactions;
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var3 = var6.bind(var7)(var5, var4, var3);
                var2 = _closure2_slot7;
                var2 = var2.bind(var1)();
                return var1;
            };
            var14 = var5.bind(var6)(var2, var3);
            var1 = var1.name;
            var2 = var16 != var1;
            var29 = '';
            if(!var2) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var29 = var1;
case 31:
            var3 = _closure1_slot10;
            var21 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 23;
            var1 = var8[var1];
            var1 = var21.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var6 = _closure1_slot5;
            var5 = {};
            var7 = var31.header;
            var5['style'] = var7;
            var7 = {};
            var15 = var31.reactionPill;
            var7['style'] = var15;
            var22 = _closure1_slot9;
            var26 = _closure1_slot1;
            var15 = 24;
            var15 = var8[var15];
            var26 = var26.bind(var4)(var15);
            var15 = {};
            var15['src'] = var13;
            var15['name'] = var29;
            var27 = var31.emojiText;
            var15['textEmojiStyle'] = var27;
            var27 = var31.emoji;
            var15['fastImageStyle'] = var27;
            var15 = var22.bind(var4)(var26, var15);
            var26 = new Array(2);
            var26[0] = var15;
            var15 = 16;
            var27 = var8[var15];
            var27 = var21.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {'variant': 'text-lg/bold', 'color': 'text-default'};
            var31 = var31.reactionText;
            var27['style'] = var31;
            var27['children'] = var30;
            var27 = var22.bind(var4)(var28, var27);
            var26[1] = var27;
            var7['children'] = var26;
            var26 = var3.bind(var4)(var6, var7);
            var7 = new Array(2);
            var7[0] = var26;
            var8 = var8[var15];
            var8 = var21.bind(var4)(var8);
            var21 = var8.Text;
            var8 = {'variant': 'text-lg/semibold', 'color': 'text-default'};
            var26 = var29;
            if(!var17) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var27 = global;
            var27 = var27.HermesInternal;
            var28 = var27.concat;
            var27 = ':';
            var26 = var28.bind(var27)(var29, var27);
case 33:
            var8['children'] = var26;
            var8 = var22.bind(var4)(var21, var8);
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var21 = _closure1_slot3;
            var6 = 25;
            var6 = var21[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var6['hasIcons'] = var20;
            var20 = var17;
            if(!var17) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var20 = var16 != var9;
case 35:
            if(!var20) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var22 = _closure1_slot9;
            var21 = _closure1_slot0;
            var26 = _closure1_slot3;
            var9 = 26;
            var9 = var26[var9];
            var9 = var21.bind(var4)(var9);
            var21 = var9.TableRow;
            var9 = {};
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            var26 = 17;
            var27 = var30[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            if(var25) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var25 = var26.nNsr67;
            var25 = var27.bind(var28)(var25);
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var26 = var26.Ay49KA;
            var25 = var27.bind(var28)(var26);
case 41:
            var9['label'] = var25;
            var9['onPress'] = var23;
            var20 = var22.bind(var4)(var21, var9);
case 37:
            var9 = new Array(4);
            var9[0] = var20;
            var20 = var12;
            if(!var12) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var20 = var17;
case 42:
            if(!var20) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var23 = _closure1_slot9;
            var28 = _closure1_slot0;
            var29 = _closure1_slot3;
            var21 = 26;
            var21 = var29[var21];
            var21 = var28.bind(var4)(var21);
            var22 = var21.TableRow;
            var21 = {};
            var25 = 17;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.Ap2oVy;
            var25 = var26.bind(var27)(var25);
            var21['label'] = var25;
            var21['onPress'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 44:
            var9[1] = var20;
            if(!var12) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var12 = var19;
case 46:
            if(!var12) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var12 = var17;
case 48:
            if(!var12) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var12 = var16 != var13;
case 50:
            if(!var12) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var17 = _closure1_slot9;
            var22 = _closure1_slot0;
            var23 = _closure1_slot3;
            var13 = 26;
            var13 = var23[var13];
            var13 = var22.bind(var4)(var13);
            var16 = var13.TableRow;
            var13 = {};
            var19 = 17;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.cIoudn;
            var19 = var20.bind(var21)(var19);
            var13['label'] = var19;
            var13['onPress'] = var18;
            var12 = var17.bind(var4)(var16, var13);
case 52:
            var9[2] = var12;
            if(!var10) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var13 = _closure1_slot9;
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var11 = 26;
            var11 = var21[var11];
            var11 = var20.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {};
            var15 = var21[var15];
            var15 = var20.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'text-feedback-critical'};
            var17 = 17;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.zx/e4P;
            var17 = var18.bind(var19)(var17);
            var15['children'] = var17;
            var15 = var13.bind(var4)(var16, var15);
            var11['label'] = var15;
            var11['onPress'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 54:
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();