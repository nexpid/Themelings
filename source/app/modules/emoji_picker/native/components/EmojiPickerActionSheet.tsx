// app/modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['header'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row'};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var12 = -var12;
    var9['marginBottom'] = var12;
    var4['searchContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var4['content'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['headerText'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var4['headerSpacer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var9['borderColor'] = var10;
    var4['burstReaction'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.onClose;
            var _closure2_slot0 = var16;
            var25 = var1.channel;
            var24 = var1.guildId;
            var _closure2_slot1 = var24;
            var12 = var1.onPressEmoji;
            var _closure2_slot2 = var12;
            var26 = var1.pickerIntention;
            var _closure2_slot3 = var26;
            var10 = var1.autoFocus;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = true;
case 2:
            var30 = var1.startExpanded;
            if(!(var30 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var30 = true;
case 4:
            var21 = var1.analyticsObject;
            var20 = var1.messageId;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot11;
            var9 = var1.bind(var4)();
            _closure2_slot4 = var9;
            var6 = _closure1_slot4;
            var7 = var6.useState;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 9;
            var3 = var1[var2];
            var3 = var11.bind(var4)(var3);
            var3 = var3.ReactionTypes;
            var3 = var3.NORMAL;
            var8 = var7.bind(var6)(var3);
            var7 = _closure1_slot3;
            var3 = 2;
            var8 = var7.bind(var4)(var8, var3);
            var14 = 0;
            var3 = var8[var14];
            var7 = 1;
            var7 = var8[var7];
            _closure2_slot5 = var7;
            var2 = var1[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.ReactionTypes;
            var2 = var2.BURST;
            var3 = var3 === var2;
            _closure2_slot6 = var3;
            var2 = var6.useRef;
            var8 = null;
            var13 = var2.bind(var6)(var8);
            var2 = 10;
            var6 = var1[var2];
            var7 = var11.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var14 = var6.bind(var7)(var14);
            var6 = 11;
            var6 = var1[var6];
            var7 = var11.bind(var4)(var6);
            var6 = var7.useEmojiCategories;
            var15 = var6.bind(var7)(var26, var25, var24);
            var17 = _closure1_slot1;
            var6 = 12;
            var6 = var1[var6];
            var6 = var17.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var6 = var6.insets;
            var7 = var6.bottom;
            var6 = 13;
            var6 = var1[var6];
            var6 = var17.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var6 = var6.bottom;
            _closure2_slot7 = var6;
            var33 = 14;
            var1 = var1[var33];
            var11 = var11.bind(var4)(var1);
            var1 = var11.isAndroid;
            var1 = var1.bind(var11)();
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var6;
case 6:
            var1 = _closure1_slot7;
            var11 = var7 + var1;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 8;
            var1 = var23[var17];
            var1 = var19.bind(var4)(var1);
            var1 = var1.spacing;
            var1 = var1.PX_16;
            var22 = var11 + var1;
            var1 = 15;
            var7 = var23[var1];
            var18 = var19.bind(var4)(var7);
            var7 = 16;
            var7 = var23[var7];
            var7 = var19.bind(var4)(var7);
            var7 = var7.EMOJI_PICKER;
            var7 = var18.bind(var4)(var7);
            var7 = var7.analyticsLocations;
            var18 = 17;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.bind(var4)(var25, var14, var26);
            var32 = var18.handleTextChange;
            _closure2_slot8 = var32;
            var23 = var18.searchQueryRef;
            var27 = var18.searchResults;
            var18 = _closure1_slot4;
            var29 = var18.useCallback;
            var19 = new Array(1);
            var19[0] = var16;
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var29.bind(var18)(var16, var19);
            var29 = var18.useCallback;
            var16 = new Array(4);
            var16[0] = var12;
            var16[1] = var3;
            var16[2] = var24;
            var16[3] = var26;
            var12 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
case 10:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 18;
                    var3 = var9[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.hideActionSheet;
                    var8 = _closure1_slot0;
                    var3 = 19;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.EMOJI_PICKER_ACTION_SHEET_KEY;
                    var3 = var6.bind(var7)(var3);
                    var6 = _closure2_slot3;
                    var3 = _closure1_slot8;
                    var3 = var3.REACTION;
                    var3 = var6 === var3;
                    if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = _closure2_slot6;
                    var3 = !var6;
case 12:
                    if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 20;
                    var6 = var8[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.canUpsellDoubleTapForEmoji;
                    var5 = _closure2_slot1;
                    var3 = var6.bind(var7)(var5, var4);
case 14:
                    if(!var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initializeDoubleTapEmojiAndUpsell;
                    var2 = var2.bind(var3)(var4);
case 16:
                    return var1;
                }
            };
            var29 = var29.bind(var18)(var12, var16);
            var16 = var18.useMemo;
            var12 = new Array(2);
            var12[0] = var3;
            var12[1] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var5 = _closure2_slot6;
                    var3 = 0;
                    if(!var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var3 = 2;
case 18:
                    var1['marginLeft'] = var3;
                    var5 = _closure2_slot6;
                    var3 = 0;
                    if(!var5) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = 2;
case 20:
                    var1['marginRight'] = var3;
                    var6 = _closure2_slot6;
                    var3 = 2;
                    var5 = var3;
                    if(!var6) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = 0;
case 22:
                    var1['paddingLeft'] = var5;
                    var5 = _closure2_slot6;
                    if(!var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var3 = 0;
case 24:
                    var1['paddingRight'] = var3;
                    var2 = _closure2_slot7;
                    var1['paddingBottom'] = var2;
                    return var1;
                }
            };
            var16 = var16.bind(var18)(var6, var12);
            var6 = var18.useRef;
            var6 = var6.bind(var18)(var8);
            _closure2_slot9 = var6;
            var6 = var18.useRef;
            var6 = var6.bind(var18)(var10);
            _closure2_slot10 = var6;
            var12 = var18.useCallback;
            var10 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 26:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 27:
                    var2 = _closure2_slot10;
                    var1 = false;
                    var2['current'] = var1;
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = new Array(0);
            var12 = var12.bind(var18)(var10, var6);
            var31 = var18.useMemo;
            var10 = new Array(2);
            var10[0] = var26;
            var10[1] = var9;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var1 = _closure1_slot8;
                    var3 = var1.DEFAULT_REACT_EMOJI;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure2_slot4;
                    var6 = var6.headerText;
                    var3['style'] = var6;
                    var9 = _closure1_slot9;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 21;
                    var6 = var14[var7];
                    var2 = undefined;
                    var6 = var13.bind(var2)(var6);
                    var8 = var6.Text;
                    var6 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary'};
                    var10 = 22;
                    var11 = var14[var10];
                    var11 = var13.bind(var2)(var11);
                    var15 = var11.intl;
                    var12 = var15.string;
                    var11 = var14[var10];
                    var11 = var13.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.wHTk2C;
                    var11 = var12.bind(var15)(var11);
                    var6['children'] = var11;
                    var8 = var9.bind(var2)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var7 = var14[var7];
                    var7 = var13.bind(var2)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    var11 = var14[var10];
                    var11 = var13.bind(var2)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.VrWSNn;
                    var10 = var11.bind(var12)(var10);
                    var7['children'] = var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 29:
                    return var1;
                }
            };
            var31 = var31.bind(var18)(var6, var10);
            _closure2_slot11 = var31;
            var10 = var18.useMemo;
            var6 = new Array(5);
            var6[0] = var9;
            var6[1] = var32;
            var6[2] = var3;
            var6[3] = var26;
            var6[4] = var31;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var1 = _closure2_slot4;
                    var1 = var1.header;
                    var2['style'] = var1;
                    var1 = _closure2_slot11;
                    var5 = new Array(2);
                    var5[0] = var1;
                    var6 = {};
                    var1 = _closure2_slot4;
                    var7 = var1.searchContainer;
                    var1 = new Array(2);
                    var1[0] = var7;
                    var8 = _closure2_slot11;
                    var7 = null;
                    if(!(var7 === var8)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var8 = _closure2_slot4;
                    var7 = var8.headerSpacer;
case 31:
                    var1[1] = var7;
                    var6['style'] = var1;
                    var11 = _closure1_slot9;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 23;
                    var7 = var14[var1];
                    var1 = undefined;
                    var7 = var13.bind(var1)(var7);
                    var8 = var7.SearchField;
                    var7 = {'ref': null, 'size': 'md', 'isRound': true};
                    var10 = _closure2_slot9;
                    var7['ref'] = var10;
                    var10 = _closure2_slot8;
                    var7['onChange'] = var10;
                    var10 = 11;
                    var10 = var14[var10];
                    var15 = var13.bind(var1)(var10);
                    var14 = var15.getSearchPlaceholder;
                    var10 = _closure2_slot3;
                    var13 = _closure2_slot6;
                    var13 = var14.bind(var15)(var10, var13);
                    var7['placeholder'] = var13;
                    var8 = var11.bind(var1)(var8, var7);
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure1_slot8;
                    var8 = var8.REACTION;
                    var8 = var10 === var8;
                    if(!var8) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var11 = _closure1_slot9;
                    var10 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 24;
                    var9 = var13[var9];
                    var10 = var10.bind(var1)(var9);
                    var9 = {};
                    var13 = function onPress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var3 = var5.isPremium;
                            var6 = _closure1_slot6;
                            var2 = var6.getCurrentUser;
                            var2 = var2.bind(var6)();
                            var2 = var3.bind(var5)(var2);
                            if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 23:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var3 = 18;
                            var3 = var2[var3];
                            var6 = var5.bind(var1)(var3);
                            var5 = var6.openLazy;
                            var7 = _closure1_slot0;
                            var3 = 27;
                            var3 = var2[var3];
                            var7 = var7.bind(var1)(var3);
                            var3 = 26;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var7.bind(var1)(var3, var2);
                            var2 = 'SuperReactionUpsellActionSheet';
                            var2 = var5.bind(var6)(var3, var2);
                            return var2;
case 35:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 28;
                            var2 = var7[var2];
                            var5 = var3.bind(var1)(var2);
                            var3 = var5.triggerHapticFeedback;
                            var6 = _closure1_slot1;
                            var2 = 29;
                            var2 = var7[var2];
                            var2 = var6.bind(var1)(var2);
                            var2 = var2.IMPACT_LIGHT;
                            var2 = var3.bind(var5)(var2);
                            var3 = _closure2_slot5;
                            var2 = _closure2_slot6;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var4 = var6[var4];
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.ReactionTypes;
                            if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                            var2 = var4.BURST;
                            _fun0008_ip = 38; continue _fun0008;
case 36:
                            var2 = var4.NORMAL;
case 38:
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var9['onPress'] = var13;
                    var12 = _closure2_slot6;
                    var9['isActive'] = var12;
                    var8 = var11.bind(var1)(var10, var9);
case 33:
                    var7[1] = var8;
                    var6['children'] = var7;
                    var6 = var4.bind(var1)(var3, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var34 = var10.bind(var18)(var5, var6);
            if(var3) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = var3[var17];
            var6 = var5.bind(var4)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.TRANSPARENT;
            var10 = new Array(2);
            var10[0] = var6;
            var3 = var3[var17];
            var3 = var5.bind(var4)(var3);
            var3 = var3.unsafe_rawColors;
            var3 = var3.TRANSPARENT;
            var10[1] = var3;
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var3 = var9.burstReaction;
            var5 = var3.borderColor;
            var3 = new Array(2);
            var3[0] = var5;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var17];
            var5 = var6.bind(var4)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.TRANSPARENT;
            var3[1] = var5;
            var10 = var3;
case 41:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var2];
            var17 = var6.bind(var4)(var2);
            var3 = var17.useSharedValue;
            var2 = -1;
            var17 = var3.bind(var17)(var2);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var18 = var2.bind(var3)(var8);
            var3 = _closure1_slot10;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var7;
            var5 = var5[var33];
            var6 = var6.bind(var4)(var5);
            var5 = var6.isIOS;
            var6 = var5.bind(var6)();
            if(!var6) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var31 = _closure1_slot2;
            var5 = 30;
            var5 = var31[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var31 = 'EmojiPickerActionSheet';
            var5['portalHostName'] = var31;
            var5['animatedSheetIndex'] = var17;
            var6 = var8.bind(var4)(var7, var5);
case 42:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var6 = 31;
            var6 = var31[var6];
            var6 = var32.bind(var4)(var6);
            var7 = var6.BottomSheet;
            var6 = {};
            var6['ref'] = var18;
            var35 = true;
            var6['scrollable'] = var35;
            var6['header'] = var34;
            var31 = var31[var33];
            var32 = var32.bind(var4)(var31);
            var31 = var32.isAndroid;
            var32 = var31.bind(var32)();
            var31 = undefined;
            if(!var32) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var34 = _closure1_slot9;
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var32 = 32;
            var32 = var35[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.PortalHost;
            var32 = {};
            var35 = 'EmojiPickerActionSheet';
            var32['name'] = var35;
            var31 = var34.bind(var4)(var33, var32);
case 44:
            var6['footer'] = var31;
            var6['startExpanded'] = var30;
            var6['onDismiss'] = var19;
            var6['animatedIndex'] = var17;
            var6['onExpand'] = var12;
            var6['borderGradient'] = var10;
            var10 = var9.content;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['marginBottom'] = var11;
            var9[1] = var10;
            var6['contentStyles'] = var9;
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 33;
            var9 = var19[var9];
            var10 = var11.bind(var4)(var9);
            var9 = {};
            var9['bottomSheetIndex'] = var17;
            var9['onPressEmoji'] = var29;
            var29 = _closure1_slot0;
            var28 = 34;
            var28 = var19[var28];
            var28 = var29.bind(var4)(var28);
            var28 = var28.openEmojiActionSheet;
            var9['onLongPressEmoji'] = var28;
            var9['emojiPickerListRef'] = var13;
            var9['categories'] = var15;
            var9['categoryIndexActive'] = var14;
            var9['emojis'] = var27;
            var9['emojiPickerIntention'] = var26;
            var9['channel'] = var25;
            var9['guildId'] = var24;
            var9['searchQueryRef'] = var23;
            var9['insetBottom'] = var22;
            var9['analyticsObject'] = var21;
            var9['messageId'] = var20;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = 35;
            var10 = var19[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['bottomSheetRef'] = var18;
            var10['bottomSheetIndex'] = var17;
            var10['style'] = var16;
            var10['categories'] = var15;
            var10['categoryIndexActive'] = var14;
            var10['emojiPickerListRef'] = var13;
            var13 = 'EmojiPickerActionSheet';
            var10['portalHostName'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
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