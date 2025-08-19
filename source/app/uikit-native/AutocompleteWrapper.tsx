// app/uikit-native/AutocompleteWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var15 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var15;
        var _closure1_slot2 = var6;
        var1 = function getAutocompletesHeight(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var1 = 0;
                if(!(var1 !== var5)) { _fun0002_ip = 74; continue _fun0002 }
 9:
                var3 = arg3;
                if(var3) { _fun0002_ip = 47; continue _fun0002 }
 18:
                var3 = _closure1_slot22;
                var4 = var3.EMOJIS_AND_STICKERS;
                var3 = arg2;
                if(!(var3 !== var4)) { _fun0002_ip = 41; continue _fun0002 }
 35:
                var3 = _closure1_slot18;
                _fun0002_ip = 45; continue _fun0002;
 41:
                var3 = _closure1_slot17;
 45:
                _fun0002_ip = 51; continue _fun0002;
 47:
                var3 = _closure1_slot7;
 51:
                var3 = var5 * var3;
                var4 = 1;
                var4 = var5 - var4;
                var2 = _closure1_slot27;
                var2 = var4 * var2;
                var1 = var3 + var2;
 74:
                return var1;
            }
        };
        var _closure1_slot33 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var11 = 0;
        var4 = var6[var11];
        var1 = undefined;
        var4 = var15.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.StyleSheet;
        var9 = var8.View;
        var _closure1_slot5 = var9;
        var8 = var8.FlatList;
        var _closure1_slot6 = var8;
        var8 = 3;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.TABLE_ROW_HEIGHT;
        var _closure1_slot7 = var8;
        var8 = 4;
        var8 = var6[var8];
        var8 = var15.bind(var1)(var8);
        var _closure1_slot8 = var8;
        var8 = 5;
        var8 = var6[var8];
        var8 = var15.bind(var1)(var8);
        var _closure1_slot9 = var8;
        var8 = 6;
        var8 = var6[var8];
        var8 = var15.bind(var1)(var8);
        var _closure1_slot10 = var8;
        var8 = 7;
        var8 = var6[var8];
        var8 = var15.bind(var1)(var8);
        var _closure1_slot11 = var8;
        var8 = 8;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.AutoCompleteResultTypes;
        var _closure1_slot12 = var9;
        var9 = var8.WHITESPACE_RE;
        var _closure1_slot13 = var9;
        var9 = var8.AnalyticEvents;
        var _closure1_slot14 = var9;
        var8 = var8.UpsellTypes;
        var _closure1_slot15 = var8;
        var8 = 9;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.BOOLEAN_CHOICES;
        var _closure1_slot16 = var8;
        var8 = 10;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
        var _closure1_slot17 = var9;
        var8 = var8.AUTOCOMPLETE_ROW_HEIGHT;
        var _closure1_slot18 = var8;
        var8 = 11;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.MENTION_SENTINEL;
        var _closure1_slot19 = var9;
        var9 = var8.CHANNEL_SENTINEL;
        var _closure1_slot20 = var9;
        var8 = var8.EMOJI_SENTINEL;
        var _closure1_slot21 = var8;
        var13 = 12;
        var8 = var6[var13];
        var8 = var5.bind(var1)(var8);
        var8 = var8.AutocompleteTypes;
        var _closure1_slot22 = var8;
        var8 = 13;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.EmojiInteractionPoint;
        var _closure1_slot23 = var8;
        var8 = 14;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.jsx;
        var _closure1_slot24 = var9;
        var9 = var8.Fragment;
        var _closure1_slot25 = var9;
        var8 = var8.jsxs;
        var _closure1_slot26 = var8;
        var8 = var4.hairlineWidth;
        var _closure1_slot27 = var8;
        var12 = 15;
        var4 = var6[var12];
        var4 = var5.bind(var1)(var4);
        var9 = var4.AUTOCOMPLETE_STICKER_NODE_SIZE;
        var4 = 284;
        var4 = var4 + var9;
        var4 = var4 + var13;
        var4 = var4 + var8;
        var _closure1_slot28 = var4;
        var4 = 16;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {};
        var16 = 'relative';
        var10['position'] = var16;
        var4['autocompletePosition'] = var10;
        var10 = {'position': null, 'left': 0, 'right': 0, 'bottom': 0};
        var14 = 17;
        var14 = var6[var14];
        var17 = var5.bind(var1)(var14);
        var14 = var17.isAndroid;
        var17 = var14.bind(var17)();
        var14 = 'absolute';
        if(!var17) { _fun0001_ip = 588; continue _fun0001 }
 585:
        var14 = var16;
 588:
        var10['position'] = var14;
        var4['autocompleteWrapper'] = var10;
        var10 = {};
        var14 = 18;
        var16 = var6[var14];
        var16 = var15.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BACKGROUND_SECONDARY;
        var10['backgroundColor'] = var16;
        var16 = 'hidden';
        var10['overflow'] = var16;
        var4['autocompleteContainer'] = var10;
        var10 = {'flexGrow': 0, 'flexShrink': 1};
        var16 = var6[var14];
        var16 = var15.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BACKGROUND_SECONDARY;
        var10['backgroundColor'] = var16;
        var4['autocomplete'] = var10;
        var10 = {};
        var16 = var6[var14];
        var16 = var15.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BACKGROUND_MODIFIER_ACCENT;
        var10['backgroundColor'] = var16;
        var16 = -16;
        var10['marginLeft'] = var16;
        var4['sectionDivider'] = var10;
        var10 = {'height': 18, 'backgroundColor': null, 'paddingLeft': 12, 'marginVertical': 12, 'alignItems': 'center'};
        var14 = var6[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BACKGROUND_SECONDARY;
        var10['backgroundColor'] = var14;
        var4['sectionTitle'] = var10;
        var10 = {};
        var14 = var6[var12];
        var14 = var5.bind(var1)(var14);
        var14 = var14.AUTOCOMPLETE_STICKER_NODE_MARGIN;
        var14 = var13 - var14;
        var10['paddingLeft'] = var14;
        var10['marginBottom'] = var13;
        var12 = var6[var12];
        var12 = var5.bind(var1)(var12);
        var12 = var12.AUTOCOMPLETE_STICKER_NODE_SIZE;
        var10['height'] = var12;
        var10['flexShrink'] = var11;
        var4['stickersAutocompleteList'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot29 = var4;
        var4 = function isSlashAutocompleteType(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot22;
                var1 = var1.SLASHES;
                var1 = var3 === var1;
                if(var1) { _fun0003_ip = 37; continue _fun0003 }
 23:
                var2 = _closure1_slot22;
                var2 = var2.SLASHES_DISCOVERY;
                var1 = var3 === var2;
 37:
                return var1;
            }
        };
        var _closure1_slot30 = var4;
        var4 = function getStickersItemLayout(arg1, arg2) {
            var2 = arg2;
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var4 = var4.AUTOCOMPLETE_STICKER_NODE_SIZE;
            var1['length'] = var4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.AUTOCOMPLETE_STICKER_NODE_SIZE;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var4 = var4.AUTOCOMPLETE_STICKER_NODE_MARGIN;
            var4 = var5 + var4;
            var4 = var2 * var4;
            var5 = 1;
            var5 = var2 - var5;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.AUTOCOMPLETE_STICKER_NODE_MARGIN;
            var3 = var5 * var3;
            var3 = var4 + var3;
            var1['offset'] = var3;
            var1['index'] = var2;
            return var1;
        };
        var _closure1_slot31 = var4;
        var4 = {'resultCount': 0, 'stickerResults': null, 'nonStickerResults': null, 'hasStickerResults': false, 'hasNonStickerResults': false};
        var8 = new Array(0);
        var4['stickerResults'] = var8;
        var8 = new Array(0);
        var4['nonStickerResults'] = var8;
        var _closure1_slot32 = var4;
        var4 = var7.forwardRef;
        var2 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var19 = var1.analyticsLocations;
                var _closure2_slot0 = var19;
                var33 = var1.channel;
                var _closure2_slot1 = var33;
                var34 = var1.canMentionEveryone;
                var _closure2_slot2 = var34;
                var10 = var1.keyboardType;
                var _closure2_slot3 = var10;
                var3 = var1.onChangeAutoCompleteVisibility;
                var _closure2_slot4 = var3;
                var9 = var1.commandsDisabled;
                var _closure2_slot5 = var9;
                var14 = var1.chatInputRef;
                var _closure2_slot6 = var14;
                var30 = var1.canOnlyUseTextCommands;
                var24 = var1.screenIndex;
                var2 = _closure1_slot29;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var29 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 22;
                var2 = var17[var5];
                var11 = var29.bind(var4)(var2);
                var8 = var11.useStateFromStoresObject;
                var2 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() {
                    var1 = {};
                    var4 = _closure1_slot8;
                    var5 = var4.getOptionStates;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var3 = var5.bind(var4)(var3);
                    var1['optionStates'] = var3;
                    var5 = var4.getActiveOption;
                    var3 = var2.id;
                    var3 = var5.bind(var4)(var3);
                    var1['activeOption'] = var3;
                    var5 = var4.getActiveCommand;
                    var3 = var2.id;
                    var3 = var5.bind(var4)(var3);
                    var1['activeCommand'] = var3;
                    var3 = var4.getActiveCommandSection;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['activeSection'] = var2;
                    return var1;
                };
                var2 = var8.bind(var11)(var7, var2);
                var12 = var2.optionStates;
                var _closure2_slot7 = var12;
                var13 = var2.activeOption;
                var _closure2_slot8 = var13;
                var16 = var2.activeCommand;
                var _closure2_slot9 = var16;
                var15 = var2.activeSection;
                var2 = 23;
                var2 = var17[var2];
                var2 = var29.bind(var4)(var2);
                var7 = var2.IncludeStickersInAutocomplete;
                var2 = var7.getSetting;
                var8 = var2.bind(var7)();
                var _closure2_slot10 = var8;
                var11 = _closure1_slot4;
                var7 = var11.useState;
                var2 = _closure1_slot32;
                var2 = var7.bind(var11)(var2);
                var21 = _closure1_slot3;
                var20 = 2;
                var18 = var21.bind(var4)(var2, var20);
                var2 = 0;
                var7 = var18[var2];
                var37 = var7.resultCount;
                var _closure2_slot11 = var37;
                var43 = var7.stickerResults;
                var _closure2_slot12 = var43;
                var26 = var7.nonStickerResults;
                var _closure2_slot13 = var26;
                var32 = var7.hasStickerResults;
                var _closure2_slot14 = var32;
                var31 = var7.hasNonStickerResults;
                var _closure2_slot15 = var31;
                var7 = 1;
                var18 = var18[var7];
                var _closure2_slot16 = var18;
                var18 = var17[var5];
                var25 = var29.bind(var4)(var18);
                var23 = var25.useStateFromStores;
                var18 = _closure1_slot9;
                var22 = new Array(1);
                var22[0] = var18;
                var18 = function() {
                    var1 = _closure1_slot9;
                    var1 = var1.loadState;
                    return var1;
                };
                var28 = var23.bind(var25)(var22, var18);
                var5 = var17[var5];
                var23 = var29.bind(var4)(var5);
                var22 = var23.useStateFromStores;
                var5 = _closure1_slot11;
                var18 = new Array(1);
                var18[0] = var5;
                var5 = function() {
                    var1 = _closure1_slot11;
                    var1 = var1.loadState;
                    return var1;
                };
                var5 = var22.bind(var23)(var18, var5);
                var22 = var11.useContext;
                var18 = 24;
                var18 = var17[var18];
                var18 = var29.bind(var4)(var18);
                var18 = var18.RedesignCompatContext;
                var18 = var22.bind(var11)(var18);
                var _closure2_slot17 = var18;
                var23 = var11.useMemo;
                var22 = new Array(2);
                var22[0] = var33;
                var22[1] = var8;
                var8 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getAutocompleteOptions;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot10;
                    var1 = true;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                };
                var25 = var23.bind(var11)(var8, var22);
                var _closure2_slot18 = var25;
                var22 = var11.useState;
                var40 = false;
                var42 = '';
                var8 = {'focused': false, 'text': '', 'selectionStart': 0, 'selectionEnd': 0};
                var8 = var22.bind(var11)(var8);
                var8 = var21.bind(var4)(var8, var20);
                var22 = var8[var2];
                var35 = var22.focused;
                var _closure2_slot19 = var35;
                var36 = var22.text;
                var _closure2_slot20 = var36;
                var39 = var22.selectionStart;
                var _closure2_slot21 = var39;
                var38 = var22.selectionEnd;
                var _closure2_slot22 = var38;
                var8 = var8[var7];
                var _closure2_slot23 = var8;
                var8 = var11.useState;
                var8 = var8.bind(var11)(var2);
                var22 = var21.bind(var4)(var8, var20);
                var8 = var22[var2];
                var22 = var22[var7];
                var _closure2_slot24 = var22;
                var41 = var11.useEffect;
                var23 = function() {
                    var2 = false;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot10;
                    var3 = var4.addConditionalChangeListener;
                    var2 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var2 = _closure3_slot0;
                            var1 = !var2;
                            if(var2) { _fun0005_ip = 83; continue _fun0005 }
 13:
                            var4 = _closure1_slot10;
                            var2 = var4.isConnected;
                            var4 = var2.bind(var4)();
                            var6 = undefined;
                            var2 = undefined;
                            if(!var4) { _fun0005_ip = 80; continue _fun0005 }
 37:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 26;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.initiateEmojiInteraction;
                            var3 = _closure1_slot23;
                            var3 = var3.AutocompleteWrapperShown;
                            var3 = var4.bind(var5)(var3);
                            var2 = false;
 80:
                            var1 = var2;
 83:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var22 = new Array(0);
                var22 = var41.bind(var11)(var23, var22);
                var41 = var11.useMemo;
                var23 = function() {
                    var2 = -1;
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = {};
                        var2 = _closure2_slot24;
                        var1['setChatInputHeight'] = var2;
                        var2 = function setData(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.focused;
                                var _closure5_slot0 = var3;
                                var3 = var1.text;
                                var _closure5_slot1 = var3;
                                var3 = var1.selectionStart;
                                var _closure5_slot2 = var3;
                                var1 = var1.selectionEnd;
                                var _closure5_slot3 = var1;
                                var4 = _closure3_slot0;
                                var1 = -1;
                                if(!(var1 !== var4)) { _fun0006_ip = 80; continue _fun0006 }
 61:
                                var1 = global;
                                var5 = var1.clearTimeout;
                                var4 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var5.bind(var1)(var4);
 80:
                                var1 = global;
                                var5 = var1.setTimeout;
                                var1 = undefined;
                                var4 = function() {
                                    var3 = _closure2_slot23;
                                    var1 = undefined;
                                    var2 = function(arg1) {
                                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                            var1 = arg1;
                                            var4 = var1.focused;
                                            var2 = _closure5_slot0;
                                            if(!(var4 === var2)) { _fun0007_ip = 61; continue _fun0007 }
 20:
                                            var4 = var1.text;
                                            var2 = _closure5_slot1;
                                            if(!(var4 === var2)) { _fun0007_ip = 61; continue _fun0007 }
 33:
                                            var4 = var1.selectionStart;
                                            var2 = _closure5_slot2;
                                            if(!(var4 === var2)) { _fun0007_ip = 61; continue _fun0007 }
 47:
                                            var4 = var1.selectionEnd;
                                            var2 = _closure5_slot3;
                                            if(!(var4 !== var2)) { _fun0007_ip = 101; continue _fun0007 }
 61:
                                            var2 = {};
                                            var4 = _closure5_slot0;
                                            var2['focused'] = var4;
                                            var4 = _closure5_slot1;
                                            var2['text'] = var4;
                                            var4 = _closure5_slot2;
                                            var2['selectionStart'] = var4;
                                            var3 = _closure5_slot3;
                                            var2['selectionEnd'] = var3;
                                            var1 = var2;
 101:
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2 = 16;
                                var2 = var5.bind(var1)(var4, var2);
                                _closure3_slot0 = var2;
                                return var1;
                            }
                        };
                        var1['setData'] = var2;
                        return var1;
                    };
                    return var1;
                };
                var22 = new Array(0);
                var41 = var41.bind(var11)(var23, var22);
                var23 = var11.useImperativeHandle;
                var22 = arg2;
                var22 = var23.bind(var11)(var22, var41);
                var23 = var11.useMemo;
                var22 = new Array(11);
                var22[0] = var39;
                var22[1] = var38;
                var22[2] = var36;
                var22[3] = var16;
                var22[4] = var12;
                var22[5] = var13;
                var22[6] = var34;
                var22[7] = var9;
                var22[8] = var25;
                var22[9] = var28;
                var22[10] = var5;
                var5 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var28 = _closure2_slot21;
                        var _closure3_slot2 = var28;
                        var2 = _closure2_slot20;
                        var11 = null;
                        if(!(var11 != var2)) { _fun0008_ip = 1290; continue _fun0008 }
 26:
                        var3 = _closure2_slot20;
                        var2 = var3.trim;
                        var2 = var2.bind(var3)();
                        var2 = var2.length;
                        var27 = 0;
                        if(!(var27 !== var2)) { _fun0008_ip = 1290; continue _fun0008 }
 54:
                        var2 = _closure2_slot8;
                        if(!(var11 == var2)) { _fun0008_ip = 94; continue _fun0008 }
 62:
                        var4 = {'canMentionEveryone': null, 'canMentionHere': null, 'canMentionChannels': true, 'canMentionUsers': true, 'canMentionRoles': true, 'canMentionAnyGuildUser': false, 'canMentionNonMentionableRoles': false};
                        var2 = _closure2_slot2;
                        var4['canMentionEveryone'] = var2;
                        var4['canMentionHere'] = var2;
                        _fun0008_ip = 134; continue _fun0008;
 94:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 27;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.getApplicationCommandOptionQueryOptions;
                        var2 = _closure2_slot8;
                        var4 = var3.bind(var5)(var2);
 134:
                        var2 = _closure2_slot8;
                        var2 = var11 != var2;
                        var18 = undefined;
                        var8 = undefined;
                        if(!var2) { _fun0008_ip = 166; continue _fun0008 }
 149:
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot8;
                        var2 = var2.name;
                        var8 = var3[var2];
 166:
                        var2 = _closure2_slot9;
                        var2 = var11 != var2;
                        var26 = undefined;
                        var25 = undefined;
                        var24 = undefined;
                        if(!var2) { _fun0008_ip = 683; continue _fun0008 }
 186:
                        var2 = _closure2_slot8;
                        var2 = var11 != var2;
                        var26 = undefined;
                        var25 = undefined;
                        var24 = undefined;
                        if(!var2) { _fun0008_ip = 683; continue _fun0008 }
 206:
                        var2 = var11 != var8;
                        var26 = undefined;
                        var25 = undefined;
                        var24 = undefined;
                        if(!var2) { _fun0008_ip = 683; continue _fun0008 }
 222:
                        var2 = var8.location;
                        var3 = var11 != var2;
                        var9 = 0;
                        if(!var3) { _fun0008_ip = 239; continue _fun0008 }
 236:
                        var9 = var2;
 239:
                        var2 = var8.length;
                        var5 = var11 != var2;
                        var3 = 0;
                        if(!var5) { _fun0008_ip = 256; continue _fun0008 }
 253:
                        var3 = var2;
 256:
                        var5 = _closure2_slot21;
                        var2 = var9 + var3;
                        var2 = var5 >= var2;
                        var14 = undefined;
                        if(!var2) { _fun0008_ip = 297; continue _fun0008 }
 273:
                        var10 = _closure2_slot20;
                        var6 = var10.substring;
                        var5 = var9 + var3;
                        var2 = _closure2_slot21;
                        var14 = var6.bind(var10)(var5, var2);
 297:
                        var _closure3_slot1 = var14;
                        var2 = _closure2_slot8;
                        var2 = var2.choices;
                        if(!(var11 == var2)) { _fun0008_ip = 630; continue _fun0008 }
 318:
                        var2 = _closure2_slot8;
                        var2 = var2.autocomplete;
                        if(var2) { _fun0008_ip = 630; continue _fun0008 }
 334:
                        var2 = _closure2_slot8;
                        var16 = var2.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = 28;
                        var2 = var2[var6];
                        var2 = var5.bind(var18)(var2);
                        var2 = var2.ApplicationCommandOptionType;
                        var2 = var2.BOOLEAN;
                        if(!(var2 !== var16)) { _fun0008_ip = 599; continue _fun0008 }
 385:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var18)(var2);
                        var2 = var2.ApplicationCommandOptionType;
                        var2 = var2.CHANNEL;
                        if(!(var2 !== var16)) { _fun0008_ip = 562; continue _fun0008 }
 421:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var18)(var2);
                        var2 = var2.ApplicationCommandOptionType;
                        var2 = var2.ROLE;
                        if(!(var2 !== var16)) { _fun0008_ip = 533; continue _fun0008 }
 454:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var18)(var2);
                        var2 = var2.ApplicationCommandOptionType;
                        var2 = var2.USER;
                        if(!(var2 !== var16)) { _fun0008_ip = 533; continue _fun0008 }
 487:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var18)(var2);
                        var2 = var2.ApplicationCommandOptionType;
                        var15 = var2.MENTIONABLE;
                        var10 = undefined;
                        var12 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var2 = false;
                        if(!(var15 === var16)) { _fun0008_ip = 668; continue _fun0008 }
 533:
                        var16 = _closure1_slot19;
                        var _closure3_slot0 = var16;
                        var15 = _closure1_slot22;
                        var10 = var15.MENTIONS;
                        var2 = true;
                        var12 = var16;
                        var6 = undefined;
                        var5 = undefined;
                        _fun0008_ip = 668; continue _fun0008;
 562:
                        var17 = _closure1_slot20;
                        _closure3_slot0 = var17;
                        var15 = _closure1_slot22;
                        var10 = var15.CHANNELS;
                        var15 = _closure2_slot8;
                        var5 = var15.channelTypes;
                        var2 = true;
                        var12 = var17;
                        var6 = undefined;
                        _fun0008_ip = 668; continue _fun0008;
 599:
                        var16 = '';
                        _closure3_slot0 = var16;
                        var15 = _closure1_slot22;
                        var10 = var15.CHOICES;
                        var6 = _closure1_slot16;
                        var2 = true;
                        var12 = var16;
                        var5 = undefined;
                        _fun0008_ip = 668; continue _fun0008;
 630:
                        var16 = '';
                        _closure3_slot0 = var16;
                        var13 = _closure1_slot22;
                        var10 = var13.CHOICES;
                        var13 = _closure2_slot8;
                        var6 = var13.choices;
                        var2 = true;
                        var12 = var16;
                        var5 = undefined;
 668:
                        var26 = var10;
                        var25 = var12;
                        var24 = var14;
                        if(var2) { _fun0008_ip = 1076; continue _fun0008 }
 683:
                        var13 = var11 != var8;
                        var23 = null;
                        if(!var13) { _fun0008_ip = 730; continue _fun0008 }
 692:
                        var15 = var8.location;
                        var16 = var11 != var15;
                        var13 = 0;
                        if(!var16) { _fun0008_ip = 709; continue _fun0008 }
 706:
                        var13 = var15;
 709:
                        var15 = var8.length;
                        var16 = var11 != var15;
                        var8 = 0;
                        if(!var16) { _fun0008_ip = 726; continue _fun0008 }
 723:
                        var8 = var15;
 726:
                        var23 = var13 + var8;
 730:
                        var22 = 29;
                        var21 = global;
                        var20 = 1;
                        var17 = var11 != var23;
 745:
                        var16 = _closure1_slot13;
                        var15 = var16.test;
                        var19 = _closure2_slot20;
                        var13 = var28 - var20;
                        var13 = var19[var13];
                        var13 = var15.bind(var16)(var13);
                        var15 = 0;
                        if(!var17) { _fun0008_ip = 779; continue _fun0008 }
 776:
                        var15 = var23;
 779:
                        if(!(var28 !== var15)) { _fun0008_ip = 789; continue _fun0008 }
 783:
                        if(!var13) { _fun0008_ip = 921; continue _fun0008 }
 789:
                        var16 = _closure2_slot20;
                        var15 = var16.slice;
                        var13 = _closure2_slot22;
                        var19 = var15.bind(var16)(var28, var13);
                        var15 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var16 = var13[var22];
                        var29 = var15.bind(var18)(var16);
                        var16 = var29.getPrefix;
                        var16 = var16.bind(var29)(var19);
                        _closure3_slot0 = var16;
                        var13 = var13[var22];
                        var15 = var15.bind(var18)(var13);
                        var13 = var15.getQuery;
                        var13 = var13.bind(var15)(var19);
                        _closure3_slot1 = var13;
                        var29 = var21.Object;
                        var19 = var29.keys;
                        var15 = _closure2_slot18;
                        var29 = var19.bind(var29)(var15);
                        var19 = var29.find;
                        var15 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var4 = arg1;
                                var1 = _closure2_slot18;
                                var7 = var1[var4];
                                var1 = _closure1_slot22;
                                var1 = var1.SLASHES;
                                var1 = var4 !== var1;
                                if(!var1) { _fun0009_ip = 48; continue _fun0009 }
 34:
                                var2 = _closure1_slot22;
                                var2 = var2.SLASHES_DISCOVERY;
                                var1 = var4 !== var2;
 48:
                                if(var1) { _fun0009_ip = 74; continue _fun0009 }
 51:
                                var4 = _closure2_slot9;
                                var2 = null;
                                var2 = var2 == var4;
                                if(!var2) { _fun0009_ip = 71; continue _fun0009 }
 64:
                                var3 = _closure2_slot5;
                                var2 = !var3;
 71:
                                var1 = var2;
 74:
                                if(!var1) { _fun0009_ip = 132; continue _fun0009 }
 77:
                                var2 = _closure3_slot0;
                                var5 = undefined;
                                var2 = var5 !== var2;
                                if(!var2) { _fun0009_ip = 101; continue _fun0009 }
 93:
                                var4 = _closure3_slot1;
                                var2 = var5 !== var4;
 101:
                                if(!var2) { _fun0009_ip = 129; continue _fun0009 }
 104:
                                var6 = var7.matches;
                                var5 = _closure3_slot0;
                                var4 = _closure3_slot1;
                                var3 = _closure3_slot2;
                                var2 = var6.bind(var7)(var5, var4, var3);
 129:
                                var1 = var2;
 132:
                                return var1;
                            }
                        };
                        var26 = var19.bind(var29)(var15);
                        var25 = var16;
                        var24 = var13;
                        var19 = var24;
                        var13 = var28;
                        var15 = var26;
                        if(!(var11 == var15)) { _fun0008_ip = 967; continue _fun0008 }
 921:
                        var29 = var28 - 1;
                        _closure3_slot2 = var29;
                        var31 = var26;
                        var30 = var24;
                        var16 = 0;
                        if(!var17) { _fun0008_ip = 942; continue _fun0008 }
 939:
                        var16 = var23;
 942:
                        var26 = var31;
                        var24 = var30;
                        var28 = var29;
                        var15 = var26;
                        var19 = var24;
                        var13 = var28;
                        if(var13 >= var16) { _fun0008_ip = 745; continue _fun0008 }
 967:
                        var16 = _closure1_slot22;
                        var17 = var16.SLASHES;
                        var16 = var19;
                        if(!(var15 === var17)) { _fun0008_ip = 1041; continue _fun0008 }
 984:
                        var17 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var8 = 30;
                        var8 = var20[var8];
                        var18 = var17.bind(var18)(var8);
                        var17 = var18.getTextBeforeFirstOption;
                        var20 = var11 != var19;
                        var8 = '';
                        if(!var20) { _fun0008_ip = 1024; continue _fun0008 }
 1021:
                        var8 = var19;
 1024:
                        var8 = var17.bind(var18)(var8);
                        var8 = var8.text;
                        _closure3_slot1 = var8;
                        var16 = var8;
 1041:
                        var8 = {};
                        var8['query'] = var16;
                        var8['autocompleteType'] = var15;
                        var8['autocompleteSelectionStart'] = var13;
                        var13 = {};
                        var34 = var13;
                        var33 = var4;
                        var15 = copyDataProperties(var34, var33);
                        var8['queryOptions'] = var13;
                        return var8;
 1076:
                        var8 = var11 != var12;
                        if(!var8) { _fun0008_ip = 1091; continue _fun0008 }
 1083:
                        var13 = '';
                        var8 = var13 !== var12;
 1091:
                        if(!var8) { _fun0008_ip = 1098; continue _fun0008 }
 1094:
                        var8 = var11 != var14;
 1098:
                        if(!var8) { _fun0008_ip = 1112; continue _fun0008 }
 1101:
                        var11 = var14.startsWith;
                        var8 = var11.bind(var14)(var12);
 1112:
                        var11 = var14;
                        if(!var8) { _fun0008_ip = 1162; continue _fun0008 }
 1118:
                        var13 = var14.length;
                        var8 = var12.length;
                        var13 = var13 > var8;
                        var8 = '';
                        if(!var13) { _fun0008_ip = 1155; continue _fun0008 }
 1139:
                        var13 = var14.substring;
                        var12 = var12.length;
                        var8 = var13.bind(var14)(var12);
 1155:
                        _closure3_slot1 = var8;
                        var11 = var8;
 1162:
                        var8 = {};
                        var _closure3_slot3 = var8;
                        var12 = global;
                        var14 = var12.Object;
                        var13 = var14.entries;
                        var12 = _closure2_slot7;
                        var13 = var13.bind(var14)(var12);
                        var12 = var13.forEach;
                        var1 = function(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var6 = arg1;
                                var3 = var6[Symbol.iterator];
                                var6 = var3().next;
                                var2 = var6().value;
                                var4 = var3;
                                var1 = undefined;
                                var5 = var4 === var1;
                                var4 = undefined;
                                if(var5) { _fun0010_ip = 27; continue _fun0010 }
 24:
                                var4 = var2;
 27:
                                var2 = undefined;
                                if(var5) { _fun0010_ip = 57; continue _fun0010 }
 32:
                                var7 = var6().value;
                                var6 = var3;
                                var6 = var6 === var1;
                                var2 = undefined;
                                var5 = var6;
                                if(var6) { _fun0010_ip = 57; continue _fun0010 }
 51:
                                var2 = var7;
                                var5 = var6;
 57:
                                if(var5) { _fun0010_ip = 63; continue _fun0010 }
 60:
                                var3.return();
 63:
                                var5 = var2.optionValue;
                                var3 = null;
                                if(!(var3 != var5)) { _fun0010_ip = 92; continue _fun0010 }
 75:
                                var3 = _closure3_slot3;
                                var2 = var2.optionValue;
                                var3[var4] = var2;
 92:
                                return var1;
                            }
                        };
                        var1 = var12.bind(var13)(var1);
                        var1 = {};
                        var1['query'] = var11;
                        var1['autocompleteType'] = var10;
                        var3 = var9 + var3;
                        var1['autocompleteSelectionStart'] = var3;
                        var3 = {};
                        var9 = _closure2_slot9;
                        var3['activeCommand'] = var9;
                        var3['optionValues'] = var8;
                        var3['isActiveApplicationCommand'] = var2;
                        var7 = _closure2_slot8;
                        var3['option'] = var7;
                        var3['choices'] = var6;
                        var3['channelTypes'] = var5;
                        var34 = var3;
                        var33 = var4;
                        var4 = copyDataProperties(var34, var33);
                        var1['queryOptions'] = var3;
                        var1['showOptionValuesPicker'] = var2;
                        return var1;
 1290:
                        var1 = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                        return var1;
                    }
                };
                var5 = var23.bind(var11)(var5, var22);
                var23 = var5.autocompleteType;
                var _closure2_slot25 = var23;
                var41 = var5.query;
                var _closure2_slot26 = var41;
                var22 = var5.queryOptions;
                var _closure2_slot27 = var22;
                var28 = var5.autocompleteSelectionStart;
                var _closure2_slot28 = var28;
                var5 = var5.showOptionValuesPicker;
                var _closure2_slot29 = var5;
                var36 = var11.useCallback;
                var34 = new Array(4);
                var34[0] = var23;
                var34[1] = var41;
                var34[2] = var22;
                var34[3] = var25;
                var22 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = _closure2_slot25;
                        var4 = null;
                        if(!(var4 != var1)) { _fun0011_ip = 23; continue _fun0011 }
 15:
                        var1 = _closure2_slot26;
                        if(!(var4 == var1)) { _fun0011_ip = 46; continue _fun0011 }
 23:
                        var5 = _closure2_slot16;
                        var4 = _closure1_slot32;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        _fun0011_ip = 178; continue _fun0011;
 46:
                        var4 = _closure2_slot18;
                        var1 = _closure2_slot25;
                        var7 = var4[var1];
                        var6 = var7.queryResults;
                        var5 = _closure2_slot26;
                        var4 = _closure2_slot27;
                        var1 = arg1;
                        var5 = var6.bind(var7)(var5, var4, var1);
                        var4 = new Array(0);
                        var _closure3_slot0 = var4;
                        var1 = new Array(0);
                        var _closure3_slot1 = var1;
                        var6 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var3 = arg1;
                                var2 = var3.type;
                                var1 = _closure1_slot12;
                                var1 = var1.STICKER;
                                if(!(var2 !== var1)) { _fun0012_ip = 44; continue _fun0012 }
 25:
                                var2 = _closure3_slot1;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                                _fun0012_ip = 61; continue _fun0012;
 44:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
 61:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var6.bind(var5)(var3);
                        var3 = _closure2_slot16;
                        var2 = {};
                        var5 = var5.length;
                        var2['resultCount'] = var5;
                        var2['stickerResults'] = var4;
                        var2['nonStickerResults'] = var1;
                        var5 = var4.length;
                        var4 = 0;
                        var5 = var5 > var4;
                        var2['hasStickerResults'] = var5;
                        var1 = var1.length;
                        var1 = var1 > var4;
                        var2['hasNonStickerResults'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 178:
                        var1 = undefined;
                        return var1;
                    }
                };
                var22 = var36.bind(var11)(var22, var34);
                var _closure2_slot30 = var22;
                var36 = var11.useEffect;
                var34 = new Array(3);
                var34[0] = var23;
                var34[1] = var22;
                var34[2] = var25;
                var25 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = _closure2_slot25;
                        var2 = null;
                        var3 = var2 != var3;
                        var5 = null;
                        if(!var3) { _fun0013_ip = 54; continue _fun0013 }
 20:
                        var3 = _closure2_slot18;
                        var6 = var2 == var3;
                        var3 = undefined;
                        if(var6) { _fun0013_ip = 51; continue _fun0013 }
 33:
                        var6 = _closure2_slot18;
                        var4 = _closure2_slot25;
                        var4 = var6[var4];
                        var3 = var4.stores;
 51:
                        var5 = var3;
 54:
                        if(!(var2 == var5)) { _fun0013_ip = 62; continue _fun0013 }
 58:
                        var2 = undefined;
                        return var2;
 62:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 22;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.BatchedStoreListener;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var7 = function() {
                            var3 = _closure2_slot30;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var9 = var3;
                        var8 = var5;
                        var2 = new var9[var4](var8, var7, var6);
                        var4 = var2 instanceof Object ? var2 : var3;
                        var _closure3_slot0 = var4;
                        var3 = var4.attach;
                        var2 = 'AutocompleteWrapper';
                        var2 = var3.bind(var4)(var2);
                        var1 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.detach;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        return var1;
                    }
                };
                var25 = var36.bind(var11)(var25, var34);
                var34 = var11.useEffect;
                var25 = new Array(1);
                var25[0] = var22;
                var22 = function() {
                    var3 = _closure2_slot30;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var22 = var34.bind(var11)(var22, var25);
                var34 = var11.useCallback;
                var25 = new Array(2);
                var25[0] = var43;
                var25[1] = var26;
                var22 = function() {
                    var1 = {};
                    var3 = _closure2_slot12;
                    var3 = var3.length;
                    var1['numStickerResults'] = var3;
                    var4 = _closure2_slot13;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot12;
                        var1 = var1.EMOJI;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.length;
                    var1['numEmojiResults'] = var2;
                    return var1;
                };
                var25 = var34.bind(var11)(var22, var25);
                var _closure2_slot31 = var25;
                var34 = var11.useMemo;
                var22 = new Array(4);
                var22[0] = var23;
                var22[1] = var35;
                var22[2] = var10;
                var22[3] = var37;
                var10 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = _closure2_slot19;
                        var3 = !var1;
                        if(var3) { _fun0014_ip = 50; continue _fun0014 }
 13:
                        var4 = _closure2_slot11;
                        var1 = 0;
                        var1 = var1 === var4;
                        if(!var1) { _fun0014_ip = 47; continue _fun0014 }
 26:
                        var6 = _closure1_slot30;
                        var5 = _closure2_slot25;
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var1 = !var4;
 47:
                        var3 = var1;
 50:
                        var1 = !var3;
                        if(var3) { _fun0014_ip = 101; continue _fun0014 }
 56:
                        var3 = _closure2_slot3;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 31;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.SYSTEM;
                        var1 = var3 === var2;
 101:
                        return var1;
                    }
                };
                var36 = var34.bind(var11)(var10, var22);
                var _closure2_slot32 = var36;
                var10 = var11.useRef;
                var10 = var10.bind(var11)(var40);
                var _closure2_slot33 = var10;
                var34 = var11.useEffect;
                var22 = new Array(2);
                var22[0] = var23;
                var22[1] = var16;
                var10 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = _closure2_slot33;
                        var6 = var1.current;
                        var3 = _closure2_slot33;
                        var7 = _closure1_slot30;
                        var2 = _closure2_slot25;
                        var1 = undefined;
                        var2 = var7.bind(var1)(var2);
                        if(var6) { _fun0015_ip = 127; continue _fun0015 }
 37:
                        var6 = var2;
                        if(var2) { _fun0015_ip = 53; continue _fun0015 }
 43:
                        var8 = _closure2_slot9;
                        var7 = null;
                        var6 = var7 != var8;
 53:
                        var3['current'] = var6;
                        var6 = _closure2_slot33;
                        var6 = var6.current;
                        if(!var6) { _fun0015_ip = 146; continue _fun0015 }
 71:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 32;
                        var6 = var8[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.trackWithMetadata;
                        var5 = _closure1_slot14;
                        var6 = var5.APPLICATION_COMMAND_TOP_OF_FUNNEL;
                        var5 = {};
                        var9 = 'slash_ui';
                        var5['location'] = var9;
                        var5 = var7.bind(var8)(var6, var5);
                        _fun0015_ip = 146; continue _fun0015;
 127:
                        if(var2) { _fun0015_ip = 140; continue _fun0015 }
 130:
                        var5 = _closure2_slot9;
                        var4 = null;
                        var2 = var4 != var5;
 140:
                        var3['current'] = var2;
 146:
                        return var1;
                    }
                };
                var10 = var34.bind(var11)(var10, var22);
                var22 = var11.useEffect;
                var10 = new Array(6);
                var10[0] = var3;
                var10[1] = var16;
                var10[2] = var36;
                var10[3] = var23;
                var10[4] = var33;
                var10[5] = var25;
                var3 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var2 = _closure2_slot32;
                        if(var2) { _fun0016_ip = 20; continue _fun0016 }
 10:
                        var4 = _closure2_slot9;
                        var3 = null;
                        var2 = var3 != var4;
 20:
                        var4 = _closure2_slot4;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0016_ip = 41; continue _fun0016 }
 30:
                        var4 = _closure2_slot4;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var2);
 41:
                        if(!var2) { _fun0016_ip = 98; continue _fun0016 }
 44:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 33;
                        var2 = var4[var2];
                        var6 = undefined;
                        var5 = var3.bind(var6)(var2);
                        var4 = var5.iOSTrackAutocompleteOpen;
                        var3 = _closure2_slot25;
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot31;
                        var1 = var1.bind(var6)();
                        var1 = var4.bind(var5)(var3, var2, var1);
 98:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var22.bind(var11)(var3, var10);
                var10 = _closure1_slot1;
                var3 = 19;
                var3 = var17[var3];
                var22 = var10.bind(var4)(var3);
                var3 = {};
                var44 = true;
                var3['ignoreKeyboard'] = var44;
                var22 = var22.bind(var4)(var3);
                var3 = 20;
                var3 = var17[var3];
                var34 = var10.bind(var4)(var3);
                var3 = {'includeKeyboardHeightIOS': true, 'includeKeyboardHeightAndroid': true};
                var3 = var34.bind(var4)(var3);
                var3 = var3.insets;
                var34 = var22.height;
                var22 = var3.top;
                var22 = var34 - var22;
                var3 = var3.bottom;
                var22 = var22 - var3;
                var3 = 21;
                var3 = var17[var3];
                var3 = var29.bind(var4)(var3);
                var3 = var3.NAV_BAR_HEIGHT;
                var3 = var22 - var3;
                var3 = var3 - var8;
                var _closure2_slot34 = var3;
                var22 = var11.useMemo;
                var8 = new Array(3);
                var8[0] = var23;
                var29 = var43.length;
                var8[1] = var29;
                var8[2] = var3;
                var3 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var2 = _closure2_slot12;
                        var3 = var2.length;
                        var2 = 0;
                        if(!(!(var3 > var2))) { _fun0017_ip = 47; continue _fun0017 }
 18:
                        var3 = _closure2_slot25;
                        var2 = _closure1_slot22;
                        var2 = var2.EMOJIS_AND_STICKERS;
                        var4 = 200;
                        if(!(var3 === var2)) { _fun0017_ip = 45; continue _fun0017 }
 42:
                        var4 = 242;
 45:
                        _fun0017_ip = 54; continue _fun0017;
 47:
                        var4 = _closure1_slot28;
 54:
                        var2 = global;
                        var3 = var2.Math;
                        var2 = var3.min;
                        var1 = _closure2_slot34;
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
                    }
                };
                var3 = var22.bind(var11)(var3, var8);
                var _closure2_slot35 = var3;
                var22 = var11.useState;
                var8 = null;
                var22 = var22.bind(var11)(var8);
                var22 = var21.bind(var4)(var22, var20);
                var35 = var22[var2];
                var _closure2_slot36 = var35;
                var34 = var22[var7];
                var _closure2_slot37 = var34;
                var29 = var11.useMemo;
                var22 = new Array(9);
                var22[0] = var37;
                var22[1] = var23;
                var22[2] = var36;
                var22[3] = var32;
                var22[4] = var31;
                var36 = var26.length;
                var22[5] = var36;
                var22[6] = var3;
                var22[7] = var35;
                var22[8] = var18;
                var18 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var4 = _closure2_slot25;
                        var2 = _closure1_slot22;
                        var2 = var2.EMOJIS_AND_STICKERS;
                        if(!(var4 !== var2)) { _fun0018_ip = 109; continue _fun0018 }
 24:
                        var4 = _closure1_slot30;
                        var2 = _closure2_slot25;
                        var8 = undefined;
                        var2 = var4.bind(var8)(var2);
                        if(var2) { _fun0018_ip = 82; continue _fun0018 }
 42:
                        var4 = _closure2_slot25;
                        var2 = null;
                        var2 = var2 != var4;
                        var5 = 0;
                        if(!var2) { _fun0018_ip = 80; continue _fun0018 }
 57:
                        var7 = _closure1_slot33;
                        var6 = _closure2_slot11;
                        var4 = _closure2_slot25;
                        var2 = _closure2_slot17;
                        var5 = var7.bind(var8)(var6, var4, var2);
 80:
                        _fun0018_ip = 104; continue _fun0018;
 82:
                        var4 = _closure2_slot36;
                        var2 = null;
                        var4 = var2 != var4;
                        var2 = 0;
                        if(!var4) { _fun0018_ip = 101; continue _fun0018 }
 97:
                        var2 = _closure2_slot36;
 101:
                        var5 = var2;
 104:
                        _fun0018_ip = 238; continue _fun0018;
 109:
                        var7 = _closure1_slot33;
                        var2 = _closure2_slot13;
                        var6 = var2.length;
                        var4 = _closure2_slot25;
                        var2 = _closure2_slot17;
                        var8 = undefined;
                        var4 = var7.bind(var8)(var6, var4, var2);
                        var2 = _closure2_slot15;
                        var6 = var4;
                        if(!var2) { _fun0018_ip = 156; continue _fun0018 }
 149:
                        var2 = 42;
                        var6 = var4 + var2;
 156:
                        var2 = _closure2_slot14;
                        var4 = var6;
                        if(!var2) { _fun0018_ip = 210; continue _fun0018 }
 166:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 15;
                        var2 = var9[var2];
                        var2 = var7.bind(var8)(var2);
                        var7 = var2.AUTOCOMPLETE_STICKER_NODE_SIZE;
                        var2 = 42;
                        var7 = var2 + var7;
                        var2 = 12;
                        var2 = var7 + var2;
                        var4 = var6 + var2;
 210:
                        var6 = _closure2_slot14;
                        if(!var6) { _fun0018_ip = 221; continue _fun0018 }
 217:
                        var6 = _closure2_slot15;
 221:
                        var2 = var4;
                        if(!var6) { _fun0018_ip = 235; continue _fun0018 }
 227:
                        var3 = _closure1_slot27;
                        var2 = var4 + var3;
 235:
                        var5 = var2;
 238:
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.min;
                        var6 = _closure2_slot32;
                        var2 = 0;
                        if(!var6) { _fun0018_ip = 263; continue _fun0018 }
 260:
                        var2 = var5;
 263:
                        var1 = _closure2_slot35;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var22 = var29.bind(var11)(var18, var22);
                var18 = 34;
                var18 = var17[var18];
                var18 = var10.bind(var4)(var18);
                var18 = var18.bind(var4)(var22, var24);
                var24 = var11.useCallback;
                var22 = new Array(3);
                var22[0] = var19;
                var22[1] = var33;
                var22[2] = var14;
                var19 = function(arg1, arg2, arg3) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.type;
                        var2 = _closure1_slot12;
                        var2 = var2.EMOJI_PREMIUM_UPSELL;
                        if(!(var4 === var2)) { _fun0019_ip = 92; continue _fun0019 }
 25:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 35;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.handleShowUpsellAlert;
                        var2 = {};
                        var6 = _closure1_slot15;
                        var6 = var6.EMOJI_AUTOCOMPLETE;
                        var2['initialUpsellKey'] = var6;
                        var6 = _closure2_slot0;
                        var2['analyticsLocations'] = var6;
                        var2 = var4.bind(var5)(var2);
                        _fun0019_ip = 280; continue _fun0019;
 92:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 29;
                        var2 = var4[var2];
                        var4 = undefined;
                        var7 = var5.bind(var4)(var2);
                        var6 = var7.getAutocompleteResultText;
                        var5 = _closure2_slot1;
                        var8 = var6.bind(var7)(var1, var5);
                        var5 = _closure2_slot6;
                        var6 = var5.current;
                        var5 = var6.getApplicationCommandManager;
                        var9 = var5.bind(var6)();
                        var5 = null;
                        var5 = var5 == var9;
                        if(var5) { _fun0019_ip = 192; continue _fun0019 }
 161:
                        var7 = var9.setAutoCompleteResult;
                        var5 = _closure2_slot1;
                        var13 = var5.id;
                        var11 = arg3;
                        var14 = var9;
                        var12 = var8;
                        var10 = var1;
                        var4 = var14[var7](var13, var12, var11, var10, var9);
 192:
                        if(var4) { _fun0019_ip = 280; continue _fun0019 }
 195:
                        var9 = var1.type;
                        var3 = _closure1_slot12;
                        var4 = var3.STICKER;
                        var5 = _closure2_slot6;
                        var7 = var5.current;
                        var6 = var7.insertText;
                        var5 = arg2;
                        var4 = var9 !== var4;
                        var4 = var6.bind(var7)(var8, var5, var4);
                        var4 = var1.type;
                        var3 = var3.STICKER;
                        if(!(var4 === var3)) { _fun0019_ip = 280; continue _fun0019 }
 254:
                        var2 = _closure2_slot6;
                        var3 = var2.current;
                        var2 = var3.handleSelectSticker;
                        var1 = var1.sticker;
                        var1 = var2.bind(var3)(var1);
 280:
                        var1 = undefined;
                        return var1;
                    }
                };
                var24 = var24.bind(var11)(var19, var22);
                var _closure2_slot38 = var24;
                var22 = var11.useCallback;
                var19 = new Array(3);
                var19[0] = var14;
                var19[1] = var12;
                var19[2] = var33;
                var14 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arg1;
                        var1 = _closure2_slot6;
                        var3 = var1.current;
                        var1 = var3.getApplicationCommandManager;
                        var6 = var1.bind(var3)();
                        var7 = var2.type;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 28;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var8.bind(var1)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.ATTACHMENT;
                        if(!(var7 !== var4)) { _fun0020_ip = 90; continue _fun0020 }
 71:
                        var4 = null;
                        if(!(var4 != var6)) { _fun0020_ip = 188; continue _fun0020 }
 77:
                        var4 = var6.insertOrJumpCommandOption;
                        var4 = var4.bind(var6)(var2);
                        _fun0020_ip = 188; continue _fun0020;
 90:
                        var7 = _closure2_slot7;
                        var4 = var2.name;
                        var4 = var7[var4];
                        var5 = _closure2_slot1;
                        var5 = var5.id;
                        var7 = var4.lastValidationResult;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0020_ip = 133; continue _fun0020 }
 124:
                        var7 = var7.success;
                        if(var7) { _fun0020_ip = 150; continue _fun0020 }
 133:
                        if(!(var4 != var6)) { _fun0020_ip = 188; continue _fun0020 }
 137:
                        var4 = var6.insertOrJumpCommandOption;
                        var4 = var4.bind(var6)(var2);
                        _fun0020_ip = 188; continue _fun0020;
 150:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 36;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openCommandAttachmentPreview;
                        var2 = var2.name;
                        var2 = var3.bind(var4)(var6, var5, var2);
 188:
                        return var1;
                    }
                };
                var14 = var22.bind(var11)(var14, var19);
                var22 = var11.useCallback;
                var19 = new Array(6);
                var19[0] = var28;
                var19[1] = var23;
                var19[2] = var25;
                var19[3] = var33;
                var19[4] = var24;
                var19[5] = var5;
                var5 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 33;
                        var2 = var2[var1];
                        var1 = undefined;
                        var9 = var3.bind(var1)(var2);
                        var8 = var9.iOSTrackAutocompleteSelect;
                        var7 = _closure2_slot25;
                        var4 = _closure2_slot1;
                        var3 = {};
                        var10 = var5.type;
                        var3['selectionType'] = var10;
                        var12 = var5.type;
                        var6 = _closure1_slot12;
                        var11 = var6.STICKER;
                        var6 = null;
                        var10 = null;
                        if(!(var12 === var11)) { _fun0021_ip = 91; continue _fun0021 }
 80:
                        var11 = var5.sticker;
                        var10 = var11.id;
 91:
                        var3['stickerId'] = var10;
                        var10 = _closure2_slot31;
                        var14 = var10.bind(var1)();
                        var15 = var3;
                        var10 = copyDataProperties(var15, var14);
                        var3 = var8.bind(var9)(var7, var4, var3);
                        var4 = _closure2_slot38;
                        var3 = _closure2_slot28;
                        var6 = var6 != var3;
                        var3 = 0;
                        if(!var6) { _fun0021_ip = 139; continue _fun0021 }
 135:
                        var3 = _closure2_slot28;
 139:
                        var2 = _closure2_slot29;
                        var2 = var4.bind(var1)(var5, var3, var2);
                        return var1;
                    }
                };
                var19 = var22.bind(var11)(var5, var19);
                var _closure2_slot39 = var19;
                var5 = var11.useState;
                var5 = var5.bind(var11)(var8);
                var5 = var21.bind(var4)(var5, var20);
                var2 = var5[var2];
                var _closure2_slot40 = var2;
                var5 = var5[var7];
                var _closure2_slot41 = var5;
                var7 = var11.useCallback;
                var5 = new Array(5);
                var5[0] = var23;
                var5[1] = var19;
                var5[2] = var2;
                var5[3] = var33;
                var5[4] = var16;
                var2 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.item;
                        var _closure3_slot0 = var6;
                        var3 = var6.type;
                        var2 = _closure1_slot12;
                        var2 = var2.USER;
                        if(!(var2 !== var3)) { _fun0022_ip = 890; continue _fun0022 }
 39:
                        var2 = _closure1_slot12;
                        var2 = var2.GLOBAL;
                        if(!(var2 !== var3)) { _fun0022_ip = 822; continue _fun0022 }
 56:
                        var2 = _closure1_slot12;
                        var2 = var2.ROLE;
                        if(!(var2 !== var3)) { _fun0022_ip = 711; continue _fun0022 }
 73:
                        var2 = _closure1_slot12;
                        var2 = var2.CHANNEL;
                        if(!(var2 !== var3)) { _fun0022_ip = 643; continue _fun0022 }
 90:
                        var2 = _closure1_slot12;
                        var2 = var2.EMOJI;
                        if(!(var2 !== var3)) { _fun0022_ip = 575; continue _fun0022 }
 107:
                        var2 = _closure1_slot12;
                        var2 = var2.EMOJI_PREMIUM_UPSELL;
                        if(!(var2 !== var3)) { _fun0022_ip = 507; continue _fun0022 }
 124:
                        var2 = _closure1_slot12;
                        var2 = var2.CHOICE;
                        if(!(var2 !== var3)) { _fun0022_ip = 439; continue _fun0022 }
 141:
                        var2 = _closure1_slot12;
                        var2 = var2.CHOICE_LOADING;
                        if(!(var2 !== var3)) { _fun0022_ip = 397; continue _fun0022 }
 158:
                        var2 = _closure1_slot12;
                        var2 = var2.STICKER;
                        if(!(var2 !== var3)) { _fun0022_ip = 242; continue _fun0022 }
 172:
                        var2 = _closure1_slot12;
                        var2 = var2.LABEL;
                        if(!(var2 !== var3)) { _fun0022_ip = 190; continue _fun0022 }
 186:
                        var2 = null;
                        return var2;
 190:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Label;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 242:
                        var3 = _closure2_slot40;
                        var2 = var6.sticker;
                        var2 = var2.id;
                        var12 = var3 === var2;
                        var8 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var7 = undefined;
                        var2 = var3.bind(var7)(var2);
                        var4 = var2.Sticker;
                        var3 = {};
                        var15 = var3;
                        var14 = var6;
                        var2 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = 'onPress';
                        var3[var2] = var9;
                        var9 = function onLongPress() {
                            var3 = _closure2_slot41;
                            var1 = _closure3_slot0;
                            var1 = var1.sticker;
                            var2 = var1.id;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = 'onLongPress';
                        var3[var2] = var9;
                        var2 = 'isInteracting';
                        var3[var2] = var12;
                        var2 = var6.sticker;
                        var11 = var2.id;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var10 = var2.concat;
                        var9 = '';
                        var2 = '-';
                        var2 = var10.bind(var9)(var11, var2, var12);
                        var2 = var8.bind(var7)(var4, var3, var2);
                        return var2;
 397:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.ChoiceLoading;
                        var2 = {};
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 439:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Choice;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var8 = 'onPress';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 507:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.EmojiPremiumUpsell;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var8 = 'onPress';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 575:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Emoji;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var8 = 'onPress';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 643:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Channel;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var8 = 'onPress';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 711:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Role;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var8 = 'onPress';
                        var2[var8] = var9;
                        var10 = _closure2_slot25;
                        var9 = _closure1_slot22;
                        var9 = var9.MENTIONS;
                        var9 = var10 === var9;
                        if(!var9) { _fun0022_ip = 805; continue _fun0022 }
 795:
                        var10 = _closure2_slot9;
                        var8 = null;
                        var9 = var8 == var10;
 805:
                        var8 = 'showDescription';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 822:
                        var7 = _closure1_slot24;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Global;
                        var2 = {};
                        var15 = var2;
                        var14 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var8 = 'onPress';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 890:
                        var4 = _closure1_slot24;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.User;
                        var1 = {};
                        var15 = var1;
                        var14 = var6;
                        var6 = copyDataProperties(var15, var14);
                        var6 = _closure2_slot1;
                        var7 = var6.guild_id;
                        var6 = 'guildId';
                        var1[var6] = var7;
                        var6 = function onPress() {
                            var3 = _closure2_slot39;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var5 = 'onPress';
                        var1[var5] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var25 = var7.bind(var11)(var2, var5);
                var2 = var6.autocomplete;
                var28 = new Array(2);
                var28[0] = var2;
                var2 = {};
                var2['maxHeight'] = var3;
                var28[1] = var2;
                var5 = _closure1_slot26;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = var6.autocompleteWrapper;
                var2['style'] = var7;
                var11 = _closure1_slot24;
                var7 = 37;
                var7 = var17[var7];
                var7 = var10.bind(var4)(var7);
                var10 = var7.View;
                var7 = {};
                var19 = var6.autocompleteContainer;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var7['style'] = var17;
                var17 = var8 != var23;
                if(!var17) { _fun0004_ip = 2455; continue _fun0004 }
 1592:
                var20 = _closure1_slot26;
                var19 = _closure1_slot25;
                var18 = {};
                var21 = _closure1_slot22;
                var21 = var21.SLASHES_DISCOVERY;
                var22 = var23 === var21;
                if(!var22) { _fun0004_ip = 1677; continue _fun0004 }
 1619:
                var29 = _closure1_slot24;
                var24 = _closure1_slot1;
                var35 = _closure1_slot2;
                var21 = 38;
                var21 = var35[var21];
                var24 = var24.bind(var4)(var21);
                var21 = {};
                var21['channel'] = var33;
                var35 = function onPressSlashItem(arg1, arg2, arg3) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        var4 = _closure2_slot38;
                        var3 = {};
                        var1 = arg1;
                        var3['command'] = var1;
                        var1 = arg2;
                        var3['section'] = var1;
                        var2 = _closure1_slot12;
                        var2 = var2.SLASH;
                        var3['type'] = var2;
                        var2 = arg3;
                        var3['visualSection'] = var2;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 39;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.ApplicationCommandTriggerLocations;
                        var2 = var2.DISCOVERY;
                        var3['location'] = var2;
                        var6 = _closure2_slot28;
                        var2 = null;
                        var6 = var2 != var6;
                        var2 = 0;
                        if(!var6) { _fun0023_ip = 106; continue _fun0023 }
 102:
                        var2 = _closure2_slot28;
 106:
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var21['onPressSlashItem'] = var35;
                var21['onHeightChange'] = var34;
                var21['canOnlyUseTextCommands'] = var30;
                var22 = var29.bind(var4)(var24, var21);
 1677:
                var21 = new Array(4);
                var21[0] = var22;
                var22 = _closure1_slot22;
                var22 = var22.SLASHES;
                var22 = var23 === var22;
                if(!var22) { _fun0004_ip = 1837; continue _fun0004 }
 1705:
                var30 = _closure1_slot24;
                var29 = _closure1_slot1;
                var34 = _closure1_slot2;
                var24 = 40;
                var24 = var34[var24];
                var29 = var29.bind(var4)(var24);
                var24 = {};
                var24['channel'] = var33;
                var34 = var8 != var41;
                var33 = var42;
                if(!var34) { _fun0004_ip = 1748; continue _fun0004 }
 1745:
                var33 = var41;
 1748:
                var24['query'] = var33;
                var33 = function onPressCommandItem(arg1, arg2) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var4 = _closure2_slot38;
                        var3 = {};
                        var1 = arg1;
                        var3['command'] = var1;
                        var1 = arg2;
                        var3['section'] = var1;
                        var2 = _closure1_slot12;
                        var2 = var2.SLASH;
                        var3['type'] = var2;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 39;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.ApplicationCommandTriggerLocations;
                        var2 = var2.DISCOVERY;
                        var3['location'] = var2;
                        var2 = _closure2_slot26;
                        var3['query'] = var2;
                        var6 = _closure2_slot28;
                        var2 = null;
                        var6 = var2 != var6;
                        var2 = 0;
                        if(!var6) { _fun0024_ip = 106; continue _fun0024 }
 102:
                        var2 = _closure2_slot28;
 106:
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var24['onPressCommandItem'] = var33;
                var24['style'] = var28;
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var33 = 29;
                var36 = var35[var33];
                var36 = var34.bind(var4)(var36);
                var36 = var36.getItemSeparator;
                var24['ItemSeparatorComponent'] = var36;
                var33 = var35[var33];
                var33 = var34.bind(var4)(var33);
                var33 = var33.getItemLayout;
                var24['getItemLayout'] = var33;
                var33 = function onCommandsChange(arg1) {
                    var3 = _closure2_slot37;
                    var6 = _closure1_slot33;
                    var5 = _closure2_slot25;
                    var4 = _closure2_slot17;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var6.bind(var1)(var2, var5, var4);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var24['onCommandsChange'] = var33;
                var22 = var30.bind(var4)(var29, var24);
 1837:
                var21[1] = var22;
                var22 = _closure1_slot22;
                var22 = var22.EMOJIS_AND_STICKERS;
                var22 = var23 === var22;
                if(!var22) { _fun0004_ip = 2345; continue _fun0004 }
 1861:
                var29 = _closure1_slot26;
                var24 = _closure1_slot25;
                var23 = {};
                var33 = var32;
                if(!var32) { _fun0004_ip = 2123; continue _fun0004 }
 1880:
                var35 = _closure1_slot26;
                var34 = _closure1_slot25;
                var30 = {};
                var39 = _closure1_slot24;
                var45 = _closure1_slot0;
                var48 = _closure1_slot2;
                var36 = 41;
                var36 = var48[var36];
                var36 = var45.bind(var4)(var36);
                var37 = var36.Text;
                var36 = {};
                var38 = var6.sectionTitle;
                var36['style'] = var38;
                var38 = 'text-sm/semibold';
                var36['variant'] = var38;
                var38 = 42;
                var46 = var48[var38];
                var46 = var45.bind(var4)(var46);
                var47 = var46.intl;
                var46 = var47.format;
                var38 = var48[var38];
                var38 = var45.bind(var4)(var38);
                var38 = var38.t;
                var45 = var38.uferGB;
                var38 = {};
                var38['prefix'] = var41;
                var38 = var46.bind(var47)(var45, var38);
                var36['children'] = var38;
                var37 = var39.bind(var4)(var37, var36);
                var36 = new Array(2);
                var36[0] = var37;
                var38 = _closure1_slot6;
                var37 = {};
                var37['horizontal'] = var44;
                var44 = {};
                var50 = var44;
                var49 = var28;
                var45 = copyDataProperties(var50, var49);
                var49 = var6.stickersAutocompleteList;
                var50 = var44;
                var45 = copyDataProperties(var50, var49);
                var37['style'] = var44;
                var44 = function keyExtractor(arg1) {
                    var1 = arg1;
                    var1 = var1.sticker;
                    var1 = var1.id;
                    return var1;
                };
                var37['keyExtractor'] = var44;
                var37['data'] = var43;
                var37['renderItem'] = var25;
                var37['showsHorizontalScrollIndicator'] = var40;
                var40 = _closure1_slot31;
                var37['getItemLayout'] = var40;
                var40 = {};
                var43 = 12;
                var40['right'] = var43;
                var37['contentInset'] = var40;
                var37 = var39.bind(var4)(var38, var37);
                var36[1] = var37;
                var30['children'] = var36;
                var33 = var35.bind(var4)(var34, var30);
 2123:
                var30 = new Array(3);
                var30[0] = var33;
                if(!var32) { _fun0004_ip = 2137; continue _fun0004 }
 2134:
                var32 = var31;
 2137:
                if(!var32) { _fun0004_ip = 2182; continue _fun0004 }
 2140:
                var35 = _closure1_slot24;
                var34 = _closure1_slot1;
                var36 = _closure1_slot2;
                var33 = 43;
                var33 = var36[var33];
                var34 = var34.bind(var4)(var33);
                var33 = {};
                var36 = var6.sectionDivider;
                var33['style'] = var36;
                var32 = var35.bind(var4)(var34, var33);
 2182:
                var30[1] = var32;
                if(!var31) { _fun0004_ip = 2331; continue _fun0004 }
 2192:
                var34 = _closure1_slot24;
                var36 = _closure1_slot0;
                var39 = _closure1_slot2;
                var32 = 41;
                var32 = var39[var32];
                var32 = var36.bind(var4)(var32);
                var33 = var32.Text;
                var32 = {};
                var35 = var6.sectionTitle;
                var32['style'] = var35;
                var35 = 'text-sm/semibold';
                var32['variant'] = var35;
                var35 = 42;
                var37 = var39[var35];
                var37 = var36.bind(var4)(var37);
                var38 = var37.intl;
                var37 = var38.format;
                var35 = var39[var35];
                var35 = var36.bind(var4)(var35);
                var35 = var35.t;
                var36 = var35.ksAVYm;
                var35 = {};
                var40 = _closure1_slot21;
                var39 = global;
                var39 = var39.HermesInternal;
                var39 = var39.concat;
                var39 = var39.bind(var42)(var40, var41);
                var35['prefix'] = var39;
                var35 = var37.bind(var38)(var36, var35);
                var32['children'] = var35;
                var31 = var34.bind(var4)(var33, var32);
 2331:
                var30[2] = var31;
                var23['children'] = var30;
                var22 = var29.bind(var4)(var24, var23);
 2345:
                var21[2] = var22;
                var24 = _closure1_slot24;
                var23 = _closure1_slot6;
                var22 = {};
                var22['style'] = var28;
                var27 = function keyExtractor(arg1, arg2) {
                    var1 = global;
                    var3 = var1.String;
                    var2 = undefined;
                    var1 = arg2;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var22['keyExtractor'] = var27;
                var22['data'] = var26;
                var22['renderItem'] = var25;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var25 = 29;
                var28 = var27[var25];
                var28 = var26.bind(var4)(var28);
                var28 = var28.getItemSeparator;
                var22['ItemSeparatorComponent'] = var28;
                var25 = var27[var25];
                var25 = var26.bind(var4)(var25);
                var25 = var25.getItemLayout;
                var22['getItemLayout'] = var25;
                var22 = var24.bind(var4)(var23, var22);
                var21[3] = var22;
                var18['children'] = var21;
                var17 = var20.bind(var4)(var19, var18);
 2455:
                var7['children'] = var17;
                var10 = var11.bind(var4)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var8 = var8 != var16;
                if(!var8) { _fun0004_ip = 2483; continue _fun0004 }
 2480:
                var8 = !var9;
 2483:
                if(!var8) { _fun0004_ip = 2542; continue _fun0004 }
 2486:
                var11 = _closure1_slot24;
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 44;
                var9 = var17[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9['command'] = var16;
                var9['section'] = var15;
                var9['onPressOption'] = var14;
                var9['currentOption'] = var13;
                var9['optionStates'] = var12;
                var8 = var11.bind(var4)(var10, var9);
 2542:
                var7[1] = var8;
                var2['children'] = var7;
                var5 = var5.bind(var4)(var3, var2);
                var3 = _closure1_slot24;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.autocompletePosition;
                var1['style'] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var4.bind(var7)(var2);
        var2 = 'AutocompleteWrapper';
        var4['displayName'] = var2;
        var2 = var7.memo;
        var2 = var2.bind(var7)(var4);
        var4 = 45;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'uikit-native/AutocompleteWrapper.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();