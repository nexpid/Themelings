// app/modules/autocompleter/native/AutocompleteWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function getAutocompletesHeight(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg4;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = arg3;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot21;
            var6 = var3.EMOJIS_AND_STICKERS;
            var3 = arg2;
            if(!(var3 !== var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot17;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = _closure1_slot16;
case 8:
            var2 = var3;
case 4:
            var3 = var4 * var2;
            var2 = 1;
            var4 = var4 - var2;
            var2 = _closure1_slot26;
            var2 = var4 * var2;
            var1 = var3 + var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
    var4 = var9.bind(var1)(var4);
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
    var10 = var8.View;
    var _closure1_slot5 = var10;
    var8 = var8.FlatList;
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.AutoCompleteResultTypes;
    var _closure1_slot11 = var9;
    var9 = var8.WHITESPACE_RE;
    var _closure1_slot12 = var9;
    var9 = var8.AnalyticEvents;
    var _closure1_slot13 = var9;
    var8 = var8.UpsellTypes;
    var _closure1_slot14 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.BOOLEAN_CHOICES;
    var _closure1_slot15 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
    var _closure1_slot16 = var9;
    var8 = var8.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot17 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.MENTION_SENTINEL;
    var _closure1_slot18 = var9;
    var9 = var8.CHANNEL_SENTINEL;
    var _closure1_slot19 = var9;
    var8 = var8.EMOJI_SENTINEL;
    var _closure1_slot20 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AutocompleteTypes;
    var _closure1_slot21 = var8;
    var9 = 12;
    var8 = var6[var9];
    var8 = var5.bind(var1)(var8);
    var8 = var8.EmojiInteractionPoint;
    var _closure1_slot22 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.jsx;
    var _closure1_slot23 = var10;
    var10 = var8.Fragment;
    var _closure1_slot24 = var10;
    var8 = var8.jsxs;
    var _closure1_slot25 = var8;
    var8 = var4.hairlineWidth;
    var _closure1_slot26 = var8;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.AUTOCOMPLETE_STICKER_NODE_SIZE;
    var4 = 284;
    var4 = var4 + var10;
    var4 = var4 + var9;
    var4 = var4 + var8;
    var _closure1_slot27 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var2 = {};
            var5 = 'relative';
            var2['position'] = var5;
            var1['autocompletePositionRelative'] = var2;
            var2 = {'position': null, 'left': 0, 'right': 0, 'bottom': 0};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var6 = undefined;
            var7 = var7.bind(var6)(var3);
            var3 = var7.isAndroid;
            var7 = var3.bind(var7)();
            var3 = 'absolute';
            if(!var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var5;
case 9:
            var2['position'] = var3;
            var3 = 0;
            var7 = arg1;
            var5 = 0;
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = 1;
case 11:
            var2['borderTopWidth'] = var5;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 17;
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['borderColor'] = var9;
            var1['autocompleteWrapper'] = var2;
            var2 = {};
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var9;
            var9 = 'hidden';
            var2['overflow'] = var9;
            var1['autocompleteContainer'] = var2;
            var2 = {'flexGrow': 0, 'flexShrink': 1};
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var9;
            var1['autocomplete'] = var2;
            var2 = {};
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['backgroundColor'] = var9;
            var9 = -16;
            var2['marginLeft'] = var9;
            var1['sectionDivider'] = var2;
            var2 = {'height': 18, 'backgroundColor': null, 'paddingLeft': 12, 'marginVertical': 12, 'alignItems': 'center'};
            var5 = var7[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var5;
            var8 = 12;
            var1['sectionTitle'] = var2;
            var2 = {};
            var5 = _closure1_slot0;
            var4 = 14;
            var9 = var7[var4];
            var9 = var5.bind(var6)(var9);
            var9 = var9.AUTOCOMPLETE_STICKER_NODE_MARGIN;
            var9 = var8 - var9;
            var2['paddingLeft'] = var9;
            var2['marginBottom'] = var8;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.AUTOCOMPLETE_STICKER_NODE_SIZE;
            var2['height'] = var4;
            var2['flexShrink'] = var3;
            var1['stickersAutocompleteList'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot28 = var4;
    var4 = function isSlashAutocompleteType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot21;
            var1 = var1.SLASHES;
            var1 = var3 === var1;
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = _closure1_slot21;
            var2 = var2.SLASHES_DISCOVERY;
            var1 = var3 === var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot29 = var4;
    var4 = function getStickersItemLayout(arg1, arg2) {
        var2 = arg2;
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 14;
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
    var _closure1_slot30 = var4;
    var4 = {'resultCount': 0, 'stickerResults': null, 'nonStickerResults': null, 'hasStickerResults': false, 'hasNonStickerResults': false};
    var8 = new Array(0);
    var4['stickerResults'] = var8;
    var8 = new Array(0);
    var4['nonStickerResults'] = var8;
    var _closure1_slot31 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var21 = var1.analyticsLocations;
            var _closure2_slot0 = var21;
            var15 = var1.channel;
            var _closure2_slot1 = var15;
            var34 = var1.canMentionEveryone;
            var _closure2_slot2 = var34;
            var11 = var1.keyboardType;
            var _closure2_slot3 = var11;
            var3 = var1.onChangeAutoCompleteVisibility;
            var _closure2_slot4 = var3;
            var9 = var1.commandsDisabled;
            var _closure2_slot5 = var9;
            var14 = var1.chatInputRef;
            var _closure2_slot6 = var14;
            var31 = var1.canOnlyUseTextCommands;
            var26 = var1.screenIndex;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 21;
            var2 = var18[var5];
            var4 = undefined;
            var8 = var19.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot7;
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
            var2 = var7.bind(var8)(var6, var2);
            var12 = var2.optionStates;
            var _closure2_slot7 = var12;
            var13 = var2.activeOption;
            var _closure2_slot8 = var13;
            var17 = var2.activeCommand;
            var _closure2_slot9 = var17;
            var16 = var2.activeSection;
            var2 = 22;
            var2 = var18[var2];
            var7 = var19.bind(var4)(var2);
            var6 = var7.useToken;
            var10 = _closure1_slot1;
            var2 = 17;
            var2 = var18[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.TABLE_ROW_HEIGHT;
            var6 = var6.bind(var7)(var2);
            var _closure2_slot10 = var6;
            var2 = 23;
            var2 = var18[var2];
            var2 = var19.bind(var4)(var2);
            var7 = var2.IncludeStickersInAutocomplete;
            var2 = var7.getSetting;
            var8 = var2.bind(var7)();
            var _closure2_slot11 = var8;
            var20 = _closure1_slot4;
            var7 = var20.useState;
            var2 = _closure1_slot31;
            var2 = var7.bind(var20)(var2);
            var23 = _closure1_slot3;
            var22 = 2;
            var24 = var23.bind(var4)(var2, var22);
            var2 = 0;
            var7 = var24[var2];
            var38 = var7.resultCount;
            var _closure2_slot12 = var38;
            var44 = var7.stickerResults;
            var _closure2_slot13 = var44;
            var27 = var7.nonStickerResults;
            var _closure2_slot14 = var27;
            var33 = var7.hasStickerResults;
            var _closure2_slot15 = var33;
            var32 = var7.hasNonStickerResults;
            var _closure2_slot16 = var32;
            var7 = 1;
            var24 = var24[var7];
            var _closure2_slot17 = var24;
            var24 = var18[var5];
            var30 = var19.bind(var4)(var24);
            var29 = var30.useStateFromStores;
            var24 = _closure1_slot8;
            var25 = new Array(1);
            var25[0] = var24;
            var24 = function() {
                var1 = _closure1_slot8;
                var1 = var1.loadState;
                return var1;
            };
            var30 = var29.bind(var30)(var25, var24);
            var5 = var18[var5];
            var29 = var19.bind(var4)(var5);
            var25 = var29.useStateFromStores;
            var5 = _closure1_slot10;
            var24 = new Array(1);
            var24[0] = var5;
            var5 = function() {
                var1 = _closure1_slot10;
                var1 = var1.loadState;
                return var1;
            };
            var5 = var25.bind(var29)(var24, var5);
            var25 = var20.useContext;
            var24 = 24;
            var24 = var18[var24];
            var24 = var19.bind(var4)(var24);
            var24 = var24.RedesignCompatContext;
            var35 = var25.bind(var20)(var24);
            var _closure2_slot18 = var35;
            var25 = var20.useMemo;
            var24 = new Array(2);
            var24[0] = var15;
            var24[1] = var8;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getAutocompleteOptions;
                var3 = _closure2_slot1;
                var2 = _closure2_slot11;
                var1 = true;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var29 = var25.bind(var20)(var8, var24);
            var _closure2_slot19 = var29;
            var24 = var20.useState;
            var41 = false;
            var43 = '';
            var8 = {'focused': false, 'text': '', 'selectionStart': 0, 'selectionEnd': 0};
            var8 = var24.bind(var20)(var8);
            var8 = var23.bind(var4)(var8, var22);
            var24 = var8[var2];
            var36 = var24.focused;
            var _closure2_slot20 = var36;
            var37 = var24.text;
            var _closure2_slot21 = var37;
            var40 = var24.selectionStart;
            var _closure2_slot22 = var40;
            var39 = var24.selectionEnd;
            var _closure2_slot23 = var39;
            var8 = var8[var7];
            var _closure2_slot24 = var8;
            var8 = var20.useState;
            var8 = var8.bind(var20)(var2);
            var24 = var23.bind(var4)(var8, var22);
            var8 = var24[var2];
            var24 = var24[var7];
            var _closure2_slot25 = var24;
            var42 = var20.useEffect;
            var25 = function() {
                var2 = false;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot9;
                var3 = var4.addConditionalChangeListener;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var1 = !var2;
                        if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var4 = _closure1_slot9;
                        var2 = var4.isConnected;
                        var4 = var2.bind(var4)();
                        var6 = undefined;
                        var2 = undefined;
                        if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 13:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 26;
                        var4 = var7[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.initiateEmojiInteraction;
                        var3 = _closure1_slot22;
                        var3 = var3.AutocompleteWrapperShown;
                        var3 = var4.bind(var5)(var3);
                        var2 = false;
case 17:
                        var1 = var2;
case 15:
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
            var24 = new Array(0);
            var24 = var42.bind(var20)(var25, var24);
            var42 = var20.useMemo;
            var25 = function() {
                var2 = -1;
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = {};
                    var2 = _closure2_slot25;
                    var1['setChatInputHeight'] = var2;
                    var2 = function setData(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
                            if(!(var1 !== var4)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                            var1 = global;
                            var5 = var1.clearTimeout;
                            var4 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
case 17:
                            var1 = global;
                            var5 = var1.setTimeout;
                            var1 = undefined;
                            var4 = function() {
                                var3 = _closure2_slot24;
                                var1 = undefined;
                                var2 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var1 = arg1;
                                        var4 = var1.focused;
                                        var2 = _closure5_slot0;
                                        if(!(var4 === var2)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                                        var4 = var1.text;
                                        var2 = _closure5_slot1;
                                        if(!(var4 === var2)) { _fun0007_ip = 18; continue _fun0007 }
case 20:
                                        var4 = var1.selectionStart;
                                        var2 = _closure5_slot2;
                                        if(!(var4 === var2)) { _fun0007_ip = 18; continue _fun0007 }
case 21:
                                        var4 = var1.selectionEnd;
                                        var2 = _closure5_slot3;
                                        if(!(var4 !== var2)) { _fun0007_ip = 22; continue _fun0007 }
case 18:
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
case 22:
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
            var24 = new Array(0);
            var42 = var42.bind(var20)(var25, var24);
            var25 = var20.useImperativeHandle;
            var24 = arg2;
            var24 = var25.bind(var20)(var24, var42);
            var25 = var20.useMemo;
            var24 = new Array(11);
            var24[0] = var40;
            var24[1] = var39;
            var24[2] = var37;
            var24[3] = var17;
            var24[4] = var12;
            var24[5] = var13;
            var24[6] = var34;
            var24[7] = var9;
            var24[8] = var29;
            var24[9] = var30;
            var24[10] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var28 = _closure2_slot22;
                    var _closure3_slot2 = var28;
                    var2 = _closure2_slot21;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var3 = _closure2_slot21;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var2 = var2.length;
                    var27 = 0;
                    if(!(var27 !== var2)) { _fun0008_ip = 23; continue _fun0008 }
case 25:
                    var2 = _closure2_slot8;
                    if(!(var11 == var2)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var4 = {'canMentionEveryone': null, 'canMentionHere': null, 'canMentionChannels': true, 'canMentionUsers': true, 'canMentionRoles': true, 'canMentionAnyGuildUser': false, 'canMentionNonMentionableRoles': false, 'canMentionOtherGlobals': true};
                    var2 = _closure2_slot2;
                    var4['canMentionEveryone'] = var2;
                    var4['canMentionHere'] = var2;
                    _fun0008_ip = 28; continue _fun0008;
case 26:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.getApplicationCommandOptionQueryOptions;
                    var2 = _closure2_slot8;
                    var4 = var3.bind(var5)(var2);
case 28:
                    var2 = _closure2_slot8;
                    var2 = var11 != var2;
                    var18 = undefined;
                    var8 = undefined;
                    if(!var2) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot8;
                    var2 = var2.name;
                    var8 = var3[var2];
case 29:
                    var2 = _closure2_slot9;
                    var2 = var11 != var2;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var2 = _closure2_slot8;
                    var2 = var11 != var2;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 33:
                    var2 = var11 != var8;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 34:
                    var2 = var8.location;
                    var3 = var11 != var2;
                    var9 = 0;
                    if(!var3) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var9 = var2;
case 35:
                    var2 = var8.length;
                    var5 = var11 != var2;
                    var3 = 0;
                    if(!var5) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var3 = var2;
case 37:
                    var5 = _closure2_slot22;
                    var2 = var9 + var3;
                    var2 = var5 >= var2;
                    var14 = undefined;
                    if(!var2) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var10 = _closure2_slot21;
                    var6 = var10.substring;
                    var5 = var9 + var3;
                    var2 = _closure2_slot22;
                    var14 = var6.bind(var10)(var5, var2);
case 39:
                    var _closure3_slot1 = var14;
                    var2 = _closure2_slot8;
                    var2 = var2.choices;
                    if(!(var11 == var2)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var2 = _closure2_slot8;
                    var2 = var2.autocomplete;
                    if(var2) { _fun0008_ip = 41; continue _fun0008 }
case 43:
                    var2 = _closure2_slot8;
                    var16 = var2.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 28;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.BOOLEAN;
                    if(!(var2 !== var16)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var16)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.ROLE;
                    if(!(var2 !== var16)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.USER;
                    if(!(var2 !== var16)) { _fun0008_ip = 48; continue _fun0008 }
case 50:
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
                    if(!(var15 === var16)) { _fun0008_ip = 51; continue _fun0008 }
case 48:
                    var16 = _closure1_slot18;
                    var _closure3_slot0 = var16;
                    var15 = _closure1_slot21;
                    var10 = var15.MENTIONS;
                    var2 = true;
                    var12 = var16;
                    var6 = undefined;
                    var5 = undefined;
                    _fun0008_ip = 51; continue _fun0008;
case 46:
                    var17 = _closure1_slot19;
                    _closure3_slot0 = var17;
                    var15 = _closure1_slot21;
                    var10 = var15.CHANNELS;
                    var15 = _closure2_slot8;
                    var5 = var15.channelTypes;
                    var2 = true;
                    var12 = var17;
                    var6 = undefined;
                    _fun0008_ip = 51; continue _fun0008;
case 44:
                    var16 = '';
                    _closure3_slot0 = var16;
                    var15 = _closure1_slot21;
                    var10 = var15.CHOICES;
                    var6 = _closure1_slot15;
                    var2 = true;
                    var12 = var16;
                    var5 = undefined;
                    _fun0008_ip = 51; continue _fun0008;
case 41:
                    var16 = '';
                    _closure3_slot0 = var16;
                    var13 = _closure1_slot21;
                    var10 = var13.CHOICES;
                    var13 = _closure2_slot8;
                    var6 = var13.choices;
                    var2 = true;
                    var12 = var16;
                    var5 = undefined;
case 51:
                    var26 = var10;
                    var25 = var12;
                    var24 = var14;
                    if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 31:
                    var13 = var11 != var8;
                    var23 = null;
                    if(!var13) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var15 = var8.location;
                    var16 = var11 != var15;
                    var13 = 0;
                    if(!var16) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var13 = var15;
case 55:
                    var15 = var8.length;
                    var16 = var11 != var15;
                    var8 = 0;
                    if(!var16) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var8 = var15;
case 57:
                    var23 = var13 + var8;
case 53:
                    var22 = global;
                    var21 = 29;
                    var20 = 1;
                    var17 = var11 != var23;
case 59:
                    var16 = _closure1_slot12;
                    var15 = var16.test;
                    var19 = _closure2_slot21;
                    var13 = var28 - var20;
                    var13 = var19[var13];
                    var13 = var15.bind(var16)(var13);
                    var15 = 0;
                    if(!var17) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var15 = var23;
case 60:
                    if(!(var28 !== var15)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var31 = var26;
                    if(!var13) { _fun0008_ip = 64; continue _fun0008 }
case 62:
                    var16 = _closure2_slot21;
                    var15 = var16.slice;
                    var13 = _closure2_slot23;
                    var16 = var15.bind(var16)(var28, var13);
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var19 = var13[var21];
                    var29 = var15.bind(var18)(var19);
                    var19 = var29.getPrefix;
                    var30 = var19.bind(var29)(var16);
                    _closure3_slot0 = var30;
                    var13 = var13[var21];
                    var15 = var15.bind(var18)(var13);
                    var13 = var15.getQuery;
                    var29 = var13.bind(var15)(var16);
                    _closure3_slot1 = var29;
                    if(!(var11 != var29)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var15 = _closure1_slot12;
                    var13 = var15.test;
                    var16 = var13.bind(var15)(var29);
                    var15 = var26;
                    var19 = var29;
                    var13 = var28;
                    if(var16) { _fun0008_ip = 67; continue _fun0008 }
case 65:
                    var33 = var22.Object;
                    var32 = var33.keys;
                    var16 = _closure2_slot19;
                    var33 = var32.bind(var33)(var16);
                    var32 = var33.find;
                    var16 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure2_slot19;
                            var7 = var1[var4];
                            var1 = _closure1_slot21;
                            var1 = var1.SLASHES;
                            var1 = var4 !== var1;
                            if(!var1) { _fun0009_ip = 8; continue _fun0009 }
case 68:
                            var2 = _closure1_slot21;
                            var2 = var2.SLASHES_DISCOVERY;
                            var1 = var4 !== var2;
case 8:
                            if(var1) { _fun0009_ip = 69; continue _fun0009 }
case 4:
                            var4 = _closure2_slot9;
                            var2 = null;
                            var2 = var2 == var4;
                            if(!var2) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                            var3 = _closure2_slot5;
                            var2 = !var3;
case 70:
                            var1 = var2;
case 69:
                            if(!var1) { _fun0009_ip = 72; continue _fun0009 }
case 2:
                            var2 = _closure3_slot0;
                            var5 = undefined;
                            var2 = var5 !== var2;
                            if(!var2) { _fun0009_ip = 22; continue _fun0009 }
case 73:
                            var4 = _closure3_slot1;
                            var2 = var5 !== var4;
case 22:
                            if(!var2) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                            var6 = var7.matches;
                            var5 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var3 = _closure3_slot2;
                            var2 = var6.bind(var7)(var5, var4, var3);
case 74:
                            var1 = var2;
case 72:
                            return var1;
                        }
                    };
                    var31 = var32.bind(var33)(var16);
                    var25 = var30;
                    var24 = var29;
                    var19 = var24;
                    var13 = var28;
                    var15 = var31;
                    if(!(var11 == var15)) { _fun0008_ip = 67; continue _fun0008 }
case 64:
                    var29 = var28 - 1;
                    _closure3_slot2 = var29;
                    var30 = var24;
                    var16 = 0;
                    if(!var17) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var16 = var23;
case 76:
                    var26 = var31;
                    var24 = var30;
                    var28 = var29;
                    var15 = var26;
                    var19 = var24;
                    var13 = var28;
                    if(var13 >= var16) { _fun0008_ip = 59; continue _fun0008 }
case 67:
                    var16 = _closure1_slot21;
                    var17 = var16.SLASHES;
                    var16 = var19;
                    if(!(var15 === var17)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var8 = 30;
                    var8 = var20[var8];
                    var18 = var17.bind(var18)(var8);
                    var17 = var18.getTextBeforeFirstOption;
                    var20 = var11 != var19;
                    var8 = '';
                    if(!var20) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var8 = var19;
case 80:
                    var8 = var17.bind(var18)(var8);
                    var8 = var8.text;
                    _closure3_slot1 = var8;
                    var16 = var8;
case 78:
                    var8 = {};
                    var8['query'] = var16;
                    var8['autocompleteType'] = var15;
                    var8['autocompleteSelectionStart'] = var13;
                    var13 = {};
                    var35 = var13;
                    var34 = var4;
                    var15 = copyDataProperties(var35, var34);
                    var8['queryOptions'] = var13;
                    return var8;
case 52:
                    var8 = var11 != var12;
                    if(!var8) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                    var13 = '';
                    var8 = var13 !== var12;
case 82:
                    if(!var8) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                    var8 = var11 != var14;
case 84:
                    if(!var8) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                    var11 = var14.startsWith;
                    var8 = var11.bind(var14)(var12);
case 86:
                    var11 = var14;
                    if(!var8) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                    var13 = var14.length;
                    var8 = var12.length;
                    var13 = var13 > var8;
                    var8 = '';
                    if(!var13) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var13 = var14.substring;
                    var12 = var12.length;
                    var8 = var13.bind(var14)(var12);
case 90:
                    _closure3_slot1 = var8;
                    var11 = var8;
case 88:
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
case 0:
                            var6 = arg1;
                            var3 = var6[Symbol.iterator];
                            var6 = var3().next;
                            var2 = var6().value;
                            var4 = var3;
                            var1 = undefined;
                            var5 = var4 === var1;
                            var4 = undefined;
                            if(var5) { _fun0010_ip = 92; continue _fun0010 }
case 93:
                            var4 = var2;
case 92:
                            var2 = undefined;
                            if(var5) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                            var7 = var6().value;
                            var6 = var3;
                            var6 = var6 === var1;
                            var2 = undefined;
                            var5 = var6;
                            if(var6) { _fun0010_ip = 94; continue _fun0010 }
case 4:
                            var2 = var7;
                            var5 = var6;
case 94:
                            if(var5) { _fun0010_ip = 96; continue _fun0010 }
case 97:
                            var3.return();
case 96:
                            var5 = var2.optionValue;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0010_ip = 12; continue _fun0010 }
case 98:
                            var3 = _closure3_slot3;
                            var2 = var2.optionValue;
                            var3[var4] = var2;
case 12:
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
                    var35 = var3;
                    var34 = var4;
                    var4 = copyDataProperties(var35, var34);
                    var1['queryOptions'] = var3;
                    var1['showOptionValuesPicker'] = var2;
                    return var1;
case 23:
                    var1 = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                    return var1;
                }
            };
            var5 = var25.bind(var20)(var5, var24);
            var24 = var5.autocompleteType;
            var _closure2_slot26 = var24;
            var42 = var5.query;
            var _closure2_slot27 = var42;
            var25 = var5.queryOptions;
            var _closure2_slot28 = var25;
            var30 = var5.autocompleteSelectionStart;
            var _closure2_slot29 = var30;
            var5 = var5.showOptionValuesPicker;
            var _closure2_slot30 = var5;
            var37 = var20.useCallback;
            var34 = new Array(4);
            var34[0] = var24;
            var34[1] = var42;
            var34[2] = var25;
            var34[3] = var29;
            var25 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot26;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0011_ip = 14; continue _fun0011 }
case 99:
                    var1 = _closure2_slot27;
                    if(!(var4 == var1)) { _fun0011_ip = 100; continue _fun0011 }
case 14:
                    var5 = _closure2_slot17;
                    var4 = _closure1_slot31;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    _fun0011_ip = 101; continue _fun0011;
case 100:
                    var4 = _closure2_slot19;
                    var1 = _closure2_slot26;
                    var7 = var4[var1];
                    var6 = var7.queryResults;
                    var5 = _closure2_slot27;
                    var4 = _closure2_slot28;
                    var1 = arg1;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var4 = new Array(0);
                    var _closure3_slot0 = var4;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var6 = var5.forEach;
                    var3 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.type;
                            var1 = _closure1_slot11;
                            var1 = var1.STICKER;
                            if(!(var2 !== var1)) { _fun0012_ip = 6; continue _fun0012 }
case 102:
                            var2 = _closure3_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                            _fun0012_ip = 18; continue _fun0012;
case 6:
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
case 18:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var6.bind(var5)(var3);
                    var3 = _closure2_slot17;
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
case 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var37.bind(var20)(var25, var34);
            var _closure2_slot31 = var25;
            var37 = var20.useEffect;
            var34 = new Array(3);
            var34[0] = var24;
            var34[1] = var25;
            var34[2] = var29;
            var29 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot26;
                    var2 = null;
                    var3 = var2 != var3;
                    var5 = null;
                    if(!var3) { _fun0013_ip = 25; continue _fun0013 }
case 19:
                    var3 = _closure2_slot19;
                    var6 = var2 == var3;
                    var3 = undefined;
                    if(var6) { _fun0013_ip = 4; continue _fun0013 }
case 20:
                    var6 = _closure2_slot19;
                    var4 = _closure2_slot26;
                    var4 = var6[var4];
                    var3 = var4.stores;
case 4:
                    var5 = var3;
case 25:
                    if(!(var2 == var5)) { _fun0013_ip = 27; continue _fun0013 }
case 103:
                    var2 = undefined;
                    return var2;
case 27:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.BatchedStoreListener;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var7 = function() {
                        var3 = _closure2_slot31;
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
            var29 = var37.bind(var20)(var29, var34);
            var34 = var20.useEffect;
            var29 = new Array(1);
            var29[0] = var25;
            var25 = function() {
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var25 = var34.bind(var20)(var25, var29);
            var34 = var20.useCallback;
            var29 = new Array(2);
            var29[0] = var44;
            var29[1] = var27;
            var25 = function() {
                var1 = {};
                var3 = _closure2_slot13;
                var3 = var3.length;
                var1['numStickerResults'] = var3;
                var4 = _closure2_slot14;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot11;
                    var1 = var1.EMOJI;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = var2.length;
                var1['numEmojiResults'] = var2;
                return var1;
            };
            var29 = var34.bind(var20)(var25, var29);
            var _closure2_slot32 = var29;
            var34 = var20.useMemo;
            var25 = new Array(4);
            var25[0] = var24;
            var25[1] = var36;
            var25[2] = var11;
            var25[3] = var38;
            var11 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot20;
                    var3 = !var1;
                    if(var3) { _fun0014_ip = 104; continue _fun0014 }
case 16:
                    var4 = _closure2_slot12;
                    var1 = 0;
                    var1 = var1 === var4;
                    if(!var1) { _fun0014_ip = 21; continue _fun0014 }
case 24:
                    var6 = _closure1_slot29;
                    var5 = _closure2_slot26;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var1 = !var4;
case 21:
                    var3 = var1;
case 104:
                    var1 = !var3;
                    if(var3) { _fun0014_ip = 22; continue _fun0014 }
case 105:
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
case 22:
                    return var1;
                }
            };
            var37 = var34.bind(var20)(var11, var25);
            var _closure2_slot33 = var37;
            var11 = var20.useRef;
            var11 = var11.bind(var20)(var41);
            var _closure2_slot34 = var11;
            var34 = var20.useEffect;
            var25 = new Array(2);
            var25[0] = var24;
            var25[1] = var17;
            var11 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot34;
                    var6 = var1.current;
                    var3 = _closure2_slot34;
                    var7 = _closure1_slot29;
                    var2 = _closure2_slot26;
                    var1 = undefined;
                    var2 = var7.bind(var1)(var2);
                    if(var6) { _fun0015_ip = 106; continue _fun0015 }
case 13:
                    var6 = var2;
                    if(var2) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                    var8 = _closure2_slot9;
                    var7 = null;
                    var6 = var7 != var8;
case 107:
                    var3['current'] = var6;
                    var6 = _closure2_slot34;
                    var6 = var6.current;
                    if(!var6) { _fun0015_ip = 109; continue _fun0015 }
case 70:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 32;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.trackWithMetadata;
                    var5 = _closure1_slot13;
                    var6 = var5.APPLICATION_COMMAND_TOP_OF_FUNNEL;
                    var5 = {};
                    var9 = 'slash_ui';
                    var5['location'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    _fun0015_ip = 109; continue _fun0015;
case 106:
                    if(var2) { _fun0015_ip = 110; continue _fun0015 }
case 28:
                    var5 = _closure2_slot9;
                    var4 = null;
                    var2 = var4 != var5;
case 110:
                    var3['current'] = var2;
case 109:
                    return var1;
                }
            };
            var11 = var34.bind(var20)(var11, var25);
            var25 = var20.useEffect;
            var11 = new Array(6);
            var11[0] = var3;
            var11[1] = var17;
            var11[2] = var37;
            var11[3] = var24;
            var11[4] = var15;
            var11[5] = var29;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot33;
                    if(var2) { _fun0016_ip = 19; continue _fun0016 }
case 111:
                    var4 = _closure2_slot9;
                    var3 = null;
                    var2 = var3 != var4;
case 19:
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0016_ip = 112; continue _fun0016 }
case 113:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var2);
case 112:
                    if(!var2) { _fun0016_ip = 114; continue _fun0016 }
case 6:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 33;
                    var2 = var4[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var4 = var5.iOSTrackAutocompleteOpen;
                    var3 = _closure2_slot26;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot32;
                    var1 = var1.bind(var6)();
                    var1 = var4.bind(var5)(var3, var2, var1);
case 114:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var25.bind(var20)(var3, var11);
            var3 = 18;
            var3 = var18[var3];
            var11 = var10.bind(var4)(var3);
            var3 = {};
            var45 = true;
            var3['ignoreKeyboard'] = var45;
            var11 = var11.bind(var4)(var3);
            var3 = 19;
            var3 = var18[var3];
            var25 = var10.bind(var4)(var3);
            var3 = {};
            var3['includeKeyboardHeight'] = var45;
            var3 = var25.bind(var4)(var3);
            var3 = var3.insets;
            var25 = var11.height;
            var11 = var3.top;
            var11 = var25 - var11;
            var3 = var3.bottom;
            var11 = var11 - var3;
            var3 = 20;
            var3 = var18[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.NAV_BAR_HEIGHT;
            var3 = var11 - var3;
            var3 = var3 - var8;
            var _closure2_slot35 = var3;
            var11 = var20.useMemo;
            var8 = new Array(3);
            var8[0] = var24;
            var25 = var44.length;
            var8[1] = var25;
            var8[2] = var3;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot13;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0017_ip = 21; continue _fun0017 }
case 5:
                    var3 = _closure2_slot26;
                    var2 = _closure1_slot21;
                    var2 = var2.EMOJIS_AND_STICKERS;
                    var4 = 200;
                    if(!(var3 === var2)) { _fun0017_ip = 115; continue _fun0017 }
case 116:
                    var4 = 242;
case 115:
                    _fun0017_ip = 25; continue _fun0017;
case 21:
                    var4 = _closure1_slot27;
case 25:
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.min;
                    var1 = _closure2_slot35;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var3 = var11.bind(var20)(var3, var8);
            var _closure2_slot36 = var3;
            var11 = var20.useState;
            var8 = null;
            var11 = var11.bind(var20)(var8);
            var11 = var23.bind(var4)(var11, var22);
            var36 = var11[var2];
            var _closure2_slot37 = var36;
            var34 = var11[var7];
            var _closure2_slot38 = var34;
            var25 = var20.useMemo;
            var11 = new Array(10);
            var11[0] = var38;
            var11[1] = var24;
            var11[2] = var37;
            var11[3] = var33;
            var11[4] = var32;
            var37 = var27.length;
            var11[5] = var37;
            var11[6] = var3;
            var11[7] = var36;
            var11[8] = var35;
            var11[9] = var6;
            var6 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot26;
                    var2 = _closure1_slot21;
                    var2 = var2.EMOJIS_AND_STICKERS;
                    if(!(var4 !== var2)) { _fun0018_ip = 117; continue _fun0018 }
case 93:
                    var4 = _closure1_slot29;
                    var2 = _closure2_slot26;
                    var9 = undefined;
                    var2 = var4.bind(var9)(var2);
                    if(var2) { _fun0018_ip = 118; continue _fun0018 }
case 116:
                    var4 = _closure2_slot26;
                    var2 = null;
                    var2 = var2 != var4;
                    var5 = 0;
                    if(!var2) { _fun0018_ip = 15; continue _fun0018 }
case 94:
                    var8 = _closure1_slot32;
                    var13 = _closure2_slot12;
                    var12 = _closure2_slot26;
                    var11 = _closure2_slot18;
                    var10 = _closure2_slot10;
                    var14 = undefined;
                    var5 = var14[var8](var13, var12, var11, var10, var9);
case 15:
                    _fun0018_ip = 119; continue _fun0018;
case 118:
                    var4 = _closure2_slot37;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 0;
                    if(!var4) { _fun0018_ip = 75; continue _fun0018 }
case 120:
                    var2 = _closure2_slot37;
case 75:
                    var5 = var2;
case 119:
                    _fun0018_ip = 121; continue _fun0018;
case 117:
                    var9 = _closure1_slot32;
                    var2 = _closure2_slot14;
                    var13 = var2.length;
                    var12 = _closure2_slot26;
                    var11 = _closure2_slot18;
                    var10 = _closure2_slot10;
                    var8 = undefined;
                    var14 = undefined;
                    var4 = var14[var9](var13, var12, var11, var10, var9);
                    var2 = _closure2_slot16;
                    var6 = var4;
                    if(!var2) { _fun0018_ip = 29; continue _fun0018 }
case 122:
                    var2 = 42;
                    var6 = var4 + var2;
case 29:
                    var2 = _closure2_slot15;
                    var4 = var6;
                    if(!var2) { _fun0018_ip = 123; continue _fun0018 }
case 124:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var7 = var2.AUTOCOMPLETE_STICKER_NODE_SIZE;
                    var2 = 42;
                    var7 = var2 + var7;
                    var2 = 12;
                    var2 = var7 + var2;
                    var4 = var6 + var2;
case 123:
                    var6 = _closure2_slot15;
                    if(!var6) { _fun0018_ip = 125; continue _fun0018 }
case 126:
                    var6 = _closure2_slot16;
case 125:
                    var2 = var4;
                    if(!var6) { _fun0018_ip = 127; continue _fun0018 }
case 128:
                    var3 = _closure1_slot26;
                    var2 = var4 + var3;
case 127:
                    var5 = var2;
case 121:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.min;
                    var6 = _closure2_slot33;
                    var2 = 0;
                    if(!var6) { _fun0018_ip = 40; continue _fun0018 }
case 129:
                    var2 = var5;
case 40:
                    var1 = _closure2_slot36;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var25 = var25.bind(var20)(var6, var11);
            var11 = _closure1_slot28;
            var6 = var25 > var2;
            var6 = var11.bind(var4)(var6);
            var _closure2_slot39 = var6;
            var11 = 34;
            var11 = var18[var11];
            var19 = var19.bind(var4)(var11);
            var11 = var19.useIsScreenReaderEnabled;
            var11 = var11.bind(var19)();
            var _closure2_slot40 = var11;
            var35 = var20.useMemo;
            var19 = new Array(2);
            var19[0] = var11;
            var11 = var6.autocompletePositionRelative;
            var19[1] = var11;
            var11 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isIOS;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if(!var2) { _fun0019_ip = 27; continue _fun0019 }
case 130:
                    var3 = _closure2_slot40;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 27; continue _fun0019 }
case 131:
                    var2 = _closure2_slot39;
                    var1 = var2.autocompletePositionRelative;
case 27:
                    return var1;
                }
            };
            var11 = var35.bind(var20)(var11, var19);
            var19 = 35;
            var19 = var18[var19];
            var19 = var10.bind(var4)(var19);
            var19 = var19.bind(var4)(var25, var26);
            var26 = var20.useCallback;
            var25 = new Array(3);
            var25[0] = var21;
            var25[1] = var15;
            var25[2] = var14;
            var21 = function(arg1, arg2, arg3) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI_PREMIUM_UPSELL;
                    if(!(var4 === var2)) { _fun0020_ip = 12; continue _fun0020 }
case 102:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 36;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.handleShowUpsellAlert;
                    var2 = {};
                    var6 = _closure1_slot14;
                    var6 = var6.EMOJI_AUTOCOMPLETE;
                    var2['initialUpsellKey'] = var6;
                    var6 = _closure2_slot0;
                    var2['analyticsLocations'] = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun0020_ip = 132; continue _fun0020;
case 12:
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
                    if(var5) { _fun0020_ip = 133; continue _fun0020 }
case 134:
                    var7 = var9.setAutoCompleteResult;
                    var5 = _closure2_slot1;
                    var13 = var5.id;
                    var11 = arg3;
                    var14 = var9;
                    var12 = var8;
                    var10 = var1;
                    var4 = var14[var7](var13, var12, var11, var10, var9);
case 133:
                    if(var4) { _fun0020_ip = 132; continue _fun0020 }
case 135:
                    var9 = var1.type;
                    var3 = _closure1_slot11;
                    var4 = var3.STICKER;
                    var5 = _closure2_slot6;
                    var7 = var5.current;
                    var6 = var7.insertText;
                    var5 = arg2;
                    var4 = var9 !== var4;
                    var4 = var6.bind(var7)(var8, var5, var4);
                    var4 = var1.type;
                    var3 = var3.STICKER;
                    if(!(var4 === var3)) { _fun0020_ip = 132; continue _fun0020 }
case 136:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = var3.handleSelectSticker;
                    var1 = var1.sticker;
                    var1 = var2.bind(var3)(var1);
case 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var20)(var21, var25);
            var _closure2_slot41 = var26;
            var25 = var20.useCallback;
            var21 = new Array(3);
            var21[0] = var14;
            var21[1] = var12;
            var21[2] = var15;
            var14 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
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
                    if(!(var7 !== var4)) { _fun0021_ip = 26; continue _fun0021 }
case 70:
                    var4 = null;
                    if(!(var4 != var6)) { _fun0021_ip = 137; continue _fun0021 }
case 2:
                    var4 = var6.insertOrJumpCommandOption;
                    var4 = var4.bind(var6)(var2);
                    _fun0021_ip = 137; continue _fun0021;
case 26:
                    var7 = _closure2_slot7;
                    var4 = var2.name;
                    var4 = var7[var4];
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var7 = var4.lastValidationResult;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0021_ip = 138; continue _fun0021 }
case 139:
                    var7 = var7.success;
                    if(var7) { _fun0021_ip = 140; continue _fun0021 }
case 138:
                    if(!(var4 != var6)) { _fun0021_ip = 137; continue _fun0021 }
case 141:
                    var4 = var6.insertOrJumpCommandOption;
                    var4 = var4.bind(var6)(var2);
                    _fun0021_ip = 137; continue _fun0021;
case 140:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 37;
                    var3 = var7[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openCommandAttachmentPreview;
                    var2 = var2.name;
                    var2 = var3.bind(var4)(var6, var5, var2);
case 137:
                    return var1;
                }
            };
            var14 = var25.bind(var20)(var14, var21);
            var25 = var20.useCallback;
            var21 = new Array(6);
            var21[0] = var30;
            var21[1] = var24;
            var21[2] = var29;
            var21[3] = var15;
            var21[4] = var26;
            var21[5] = var5;
            var5 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.iOSTrackAutocompleteSelect;
                    var7 = _closure2_slot26;
                    var4 = _closure2_slot1;
                    var3 = {};
                    var10 = var5.type;
                    var3['selectionType'] = var10;
                    var12 = var5.type;
                    var6 = _closure1_slot11;
                    var11 = var6.STICKER;
                    var6 = null;
                    var10 = null;
                    if(!(var12 === var11)) { _fun0022_ip = 142; continue _fun0022 }
case 17:
                    var11 = var5.sticker;
                    var10 = var11.id;
case 142:
                    var3['stickerId'] = var10;
                    var10 = _closure2_slot32;
                    var14 = var10.bind(var1)();
                    var15 = var3;
                    var10 = copyDataProperties(var15, var14);
                    var3 = var8.bind(var9)(var7, var4, var3);
                    var4 = _closure2_slot41;
                    var3 = _closure2_slot29;
                    var6 = var6 != var3;
                    var3 = 0;
                    if(!var6) { _fun0022_ip = 143; continue _fun0022 }
case 144:
                    var3 = _closure2_slot29;
case 143:
                    var2 = _closure2_slot30;
                    var2 = var4.bind(var1)(var5, var3, var2);
                    return var1;
                }
            };
            var21 = var25.bind(var20)(var5, var21);
            var _closure2_slot42 = var21;
            var5 = var20.useState;
            var5 = var5.bind(var20)(var8);
            var5 = var23.bind(var4)(var5, var22);
            var2 = var5[var2];
            var _closure2_slot43 = var2;
            var5 = var5[var7];
            var _closure2_slot44 = var5;
            var7 = var20.useCallback;
            var5 = new Array(5);
            var5[0] = var24;
            var5[1] = var21;
            var5[2] = var2;
            var5[3] = var15;
            var5[4] = var17;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var3 = var6.type;
                    var2 = _closure1_slot11;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0023_ip = 145; continue _fun0023 }
case 146:
                    var2 = _closure1_slot11;
                    var2 = var2.GLOBAL;
                    if(!(var2 !== var3)) { _fun0023_ip = 147; continue _fun0023 }
case 105:
                    var2 = _closure1_slot11;
                    var2 = var2.ROLE;
                    if(!(var2 !== var3)) { _fun0023_ip = 148; continue _fun0023 }
case 10:
                    var2 = _closure1_slot11;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var3)) { _fun0023_ip = 149; continue _fun0023 }
case 26:
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI;
                    if(!(var2 !== var3)) { _fun0023_ip = 150; continue _fun0023 }
case 119:
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI_PREMIUM_UPSELL;
                    if(!(var2 !== var3)) { _fun0023_ip = 151; continue _fun0023 }
case 139:
                    var2 = _closure1_slot11;
                    var2 = var2.CHOICE;
                    if(!(var2 !== var3)) { _fun0023_ip = 152; continue _fun0023 }
case 153:
                    var2 = _closure1_slot11;
                    var2 = var2.CHOICE_LOADING;
                    if(!(var2 !== var3)) { _fun0023_ip = 154; continue _fun0023 }
case 155:
                    var2 = _closure1_slot11;
                    var2 = var2.STICKER;
                    if(!(var2 !== var3)) { _fun0023_ip = 156; continue _fun0023 }
case 124:
                    var2 = _closure1_slot11;
                    var2 = var2.LABEL;
                    if(!(var2 !== var3)) { _fun0023_ip = 157; continue _fun0023 }
case 158:
                    var2 = null;
                    return var2;
case 157:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
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
case 156:
                    var3 = _closure2_slot43;
                    var2 = var6.sticker;
                    var2 = var2.id;
                    var12 = var3 === var2;
                    var8 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var7 = undefined;
                    var2 = var3.bind(var7)(var2);
                    var4 = var2.Sticker;
                    var3 = {};
                    var15 = var3;
                    var14 = var6;
                    var2 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 'onPress';
                    var3[1] = var9;
                    var9 = function onLongPress() {
                        var3 = _closure2_slot44;
                        var1 = _closure3_slot0;
                        var1 = var1.sticker;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 'onLongPress';
                    var3[1] = var9;
                    var2 = 'isInteracting';
                    var3[1] = var12;
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
case 154:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ChoiceLoading;
                    var2 = {};
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 152:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Choice;
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 151:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.EmojiPremiumUpsell;
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 150:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Emoji;
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 149:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Channel;
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 148:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Role;
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var10 = _closure2_slot26;
                    var9 = _closure1_slot21;
                    var9 = var9.MENTIONS;
                    var9 = var10 === var9;
                    if(!var9) { _fun0023_ip = 159; continue _fun0023 }
case 160:
                    var10 = _closure2_slot9;
                    var8 = null;
                    var9 = var8 == var10;
case 159:
                    var8 = 'showDescription';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 147:
                    var7 = _closure1_slot23;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Global;
                    var2 = {};
                    var15 = var2;
                    var14 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var9 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 145:
                    var4 = _closure1_slot23;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
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
                    var1[5] = var7;
                    var6 = function onPress() {
                        var3 = _closure2_slot42;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5 = 'onPress';
                    var1[4] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var26 = var7.bind(var20)(var2, var5);
            var2 = var6.autocomplete;
            var29 = new Array(2);
            var29[0] = var2;
            var2 = {};
            var2['maxHeight'] = var3;
            var29[1] = var2;
            var5 = _closure1_slot25;
            var3 = _closure1_slot5;
            var2 = {};
            var20 = var6.autocompleteWrapper;
            var7 = new Array(2);
            var7[0] = var20;
            var7[1] = var11;
            var2['style'] = var7;
            var11 = _closure1_slot23;
            var7 = 38;
            var7 = var18[var7];
            var7 = var10.bind(var4)(var7);
            var10 = var7.View;
            var7 = {};
            var20 = var6.autocompleteContainer;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var7['style'] = var18;
            var18 = var8 != var24;
            if(!var18) { _fun0004_ip = 161; continue _fun0004 }
case 162:
            var21 = _closure1_slot25;
            var20 = _closure1_slot24;
            var19 = {};
            var22 = _closure1_slot21;
            var22 = var22.SLASHES_DISCOVERY;
            var23 = var24 === var22;
            if(!var23) { _fun0004_ip = 163; continue _fun0004 }
case 164:
            var30 = _closure1_slot23;
            var25 = _closure1_slot1;
            var35 = _closure1_slot2;
            var22 = 39;
            var22 = var35[var22];
            var25 = var25.bind(var4)(var22);
            var22 = {};
            var22['channel'] = var15;
            var35 = function onPressSlashItem(arg1, arg2, arg3) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = _closure2_slot41;
                    var3 = {};
                    var1 = arg1;
                    var3['command'] = var1;
                    var1 = arg2;
                    var3['section'] = var1;
                    var2 = _closure1_slot11;
                    var2 = var2.SLASH;
                    var3['type'] = var2;
                    var2 = arg3;
                    var3['visualSection'] = var2;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ApplicationCommandTriggerLocations;
                    var2 = var2.DISCOVERY;
                    var3['location'] = var2;
                    var6 = _closure2_slot29;
                    var2 = null;
                    var6 = var2 != var6;
                    var2 = 0;
                    if(!var6) { _fun0024_ip = 165; continue _fun0024 }
case 166:
                    var2 = _closure2_slot29;
case 165:
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var22['onPressSlashItem'] = var35;
            var22['onHeightChange'] = var34;
            var22['canOnlyUseTextCommands'] = var31;
            var23 = var30.bind(var4)(var25, var22);
case 163:
            var22 = new Array(4);
            var22[0] = var23;
            var23 = _closure1_slot21;
            var23 = var23.SLASHES;
            var23 = var24 === var23;
            if(!var23) { _fun0004_ip = 167; continue _fun0004 }
case 168:
            var31 = _closure1_slot23;
            var30 = _closure1_slot1;
            var34 = _closure1_slot2;
            var25 = 41;
            var25 = var34[var25];
            var30 = var30.bind(var4)(var25);
            var25 = {};
            var25['channel'] = var15;
            var35 = var8 != var42;
            var34 = var43;
            if(!var35) { _fun0004_ip = 169; continue _fun0004 }
case 170:
            var34 = var42;
case 169:
            var25['query'] = var34;
            var34 = function onPressCommandItem(arg1, arg2) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure2_slot41;
                    var3 = {};
                    var1 = arg1;
                    var3['command'] = var1;
                    var1 = arg2;
                    var3['section'] = var1;
                    var2 = _closure1_slot11;
                    var2 = var2.SLASH;
                    var3['type'] = var2;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ApplicationCommandTriggerLocations;
                    var2 = var2.DISCOVERY;
                    var3['location'] = var2;
                    var2 = _closure2_slot27;
                    var3['query'] = var2;
                    var6 = _closure2_slot29;
                    var2 = null;
                    var6 = var2 != var6;
                    var2 = 0;
                    if(!var6) { _fun0025_ip = 119; continue _fun0025 }
case 171:
                    var2 = _closure2_slot29;
case 119:
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var25['onPressCommandItem'] = var34;
            var25['style'] = var29;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var34 = 29;
            var37 = var36[var34];
            var37 = var35.bind(var4)(var37);
            var37 = var37.getItemSeparator;
            var25['ItemSeparatorComponent'] = var37;
            var34 = var36[var34];
            var34 = var35.bind(var4)(var34);
            var34 = var34.getItemLayout;
            var25['getItemLayout'] = var34;
            var34 = function onCommandsChange(arg1) {
                var3 = _closure2_slot38;
                var7 = _closure1_slot32;
                var10 = _closure2_slot26;
                var9 = _closure2_slot18;
                var8 = _closure2_slot10;
                var1 = undefined;
                var11 = arg1;
                var12 = undefined;
                var2 = var12[var7](var11, var10, var9, var8, var7);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var25['onCommandsChange'] = var34;
            var23 = var31.bind(var4)(var30, var25);
case 167:
            var22[1] = var23;
            var23 = _closure1_slot21;
            var23 = var23.EMOJIS_AND_STICKERS;
            var23 = var24 === var23;
            if(!var23) { _fun0004_ip = 172; continue _fun0004 }
case 173:
            var30 = _closure1_slot25;
            var25 = _closure1_slot24;
            var24 = {};
            var34 = var33;
            if(!var33) { _fun0004_ip = 174; continue _fun0004 }
case 175:
            var36 = _closure1_slot25;
            var35 = _closure1_slot24;
            var31 = {};
            var40 = _closure1_slot23;
            var46 = _closure1_slot0;
            var49 = _closure1_slot2;
            var37 = 42;
            var37 = var49[var37];
            var37 = var46.bind(var4)(var37);
            var38 = var37.Text;
            var37 = {};
            var39 = var6.sectionTitle;
            var37['style'] = var39;
            var39 = 'text-sm/semibold';
            var37['variant'] = var39;
            var39 = 43;
            var47 = var49[var39];
            var47 = var46.bind(var4)(var47);
            var48 = var47.intl;
            var47 = var48.format;
            var39 = var49[var39];
            var39 = var46.bind(var4)(var39);
            var39 = var39.t;
            var46 = var39.uferGG;
            var39 = {};
            var39['prefix'] = var42;
            var39 = var47.bind(var48)(var46, var39);
            var37['children'] = var39;
            var38 = var40.bind(var4)(var38, var37);
            var37 = new Array(2);
            var37[0] = var38;
            var39 = _closure1_slot6;
            var38 = {};
            var38['horizontal'] = var45;
            var45 = {};
            var51 = var45;
            var50 = var29;
            var46 = copyDataProperties(var51, var50);
            var50 = var6.stickersAutocompleteList;
            var51 = var45;
            var46 = copyDataProperties(var51, var50);
            var38['style'] = var45;
            var45 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.sticker;
                var1 = var1.id;
                return var1;
            };
            var38['keyExtractor'] = var45;
            var38['data'] = var44;
            var38['renderItem'] = var26;
            var38['showsHorizontalScrollIndicator'] = var41;
            var41 = _closure1_slot30;
            var38['getItemLayout'] = var41;
            var41 = {};
            var44 = 12;
            var41['right'] = var44;
            var38['contentInset'] = var41;
            var38 = var40.bind(var4)(var39, var38);
            var37[1] = var38;
            var31['children'] = var37;
            var34 = var36.bind(var4)(var35, var31);
case 174:
            var31 = new Array(3);
            var31[0] = var34;
            if(!var33) { _fun0004_ip = 176; continue _fun0004 }
case 177:
            var33 = var32;
case 176:
            if(!var33) { _fun0004_ip = 178; continue _fun0004 }
case 179:
            var36 = _closure1_slot23;
            var35 = _closure1_slot1;
            var37 = _closure1_slot2;
            var34 = 44;
            var34 = var37[var34];
            var35 = var35.bind(var4)(var34);
            var34 = {};
            var37 = var6.sectionDivider;
            var34['style'] = var37;
            var33 = var36.bind(var4)(var35, var34);
case 178:
            var31[1] = var33;
            if(!var32) { _fun0004_ip = 180; continue _fun0004 }
case 181:
            var35 = _closure1_slot23;
            var37 = _closure1_slot0;
            var40 = _closure1_slot2;
            var33 = 42;
            var33 = var40[var33];
            var33 = var37.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {};
            var36 = var6.sectionTitle;
            var33['style'] = var36;
            var36 = 'text-sm/semibold';
            var33['variant'] = var36;
            var36 = 43;
            var38 = var40[var36];
            var38 = var37.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.format;
            var36 = var40[var36];
            var36 = var37.bind(var4)(var36);
            var36 = var36.t;
            var37 = var36.ksAVYt;
            var36 = {};
            var41 = _closure1_slot20;
            var40 = global;
            var40 = var40.HermesInternal;
            var40 = var40.concat;
            var40 = var40.bind(var43)(var41, var42);
            var36['prefix'] = var40;
            var36 = var38.bind(var39)(var37, var36);
            var33['children'] = var36;
            var32 = var35.bind(var4)(var34, var33);
case 180:
            var31[2] = var32;
            var24['children'] = var31;
            var23 = var30.bind(var4)(var25, var24);
case 172:
            var22[2] = var23;
            var25 = _closure1_slot23;
            var24 = _closure1_slot6;
            var23 = {};
            var23['style'] = var29;
            var28 = function keyExtractor(arg1, arg2) {
                var1 = global;
                var3 = var1.String;
                var2 = undefined;
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var23['keyExtractor'] = var28;
            var23['data'] = var27;
            var23['renderItem'] = var26;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 29;
            var29 = var28[var26];
            var29 = var27.bind(var4)(var29);
            var29 = var29.getItemSeparator;
            var23['ItemSeparatorComponent'] = var29;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.getItemLayout;
            var23['getItemLayout'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[3] = var23;
            var19['children'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 161:
            var7['children'] = var18;
            var10 = var11.bind(var4)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var8 = var8 != var17;
            if(!var8) { _fun0004_ip = 182; continue _fun0004 }
case 183:
            var8 = !var9;
case 182:
            if(!var8) { _fun0004_ip = 184; continue _fun0004 }
case 185:
            var11 = _closure1_slot23;
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 45;
            var9 = var18[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['command'] = var17;
            var9['section'] = var16;
            var15 = var15.guild_id;
            var9['guildId'] = var15;
            var9['onPressOption'] = var14;
            var9['currentOption'] = var13;
            var9['optionStates'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 184:
            var7[1] = var8;
            var2['children'] = var7;
            var5 = var5.bind(var4)(var3, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.autocompletePositionRelative;
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
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/native/AutocompleteWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();