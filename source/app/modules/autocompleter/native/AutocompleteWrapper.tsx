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
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var10 = arg3;
            var8 = arg4;
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
            var11 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 17;
            var12 = var7[var5];
            var12 = var11.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL;
            var2['marginHorizontal'] = var12;
            var12 = var7[var5];
            var12 = var11.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM;
            var2['marginBottom'] = var12;
            var1['autocompleteWrapper'] = var2;
            var2 = {};
            var7 = var7[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.colors;
            var7 = var7.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
            var2['backgroundColor'] = var7;
            var7 = arg2;
            var2['borderRadius'] = var7;
            var7 = 0;
            if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var10;
case 11:
            var2['borderWidth'] = var7;
            var7 = 0;
            if(!var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var7 = var8;
case 13:
            var2['borderTopWidth'] = var7;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BORDER;
            var2['borderColor'] = var9;
            var9 = 'hidden';
            var2['overflow'] = var9;
            var1['autocompleteContainer'] = var2;
            var2 = {'flexGrow': 0, 'flexShrink': 1};
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
            var2['backgroundColor'] = var9;
            var1['autocomplete'] = var2;
            var2 = {};
            var9 = var7[var5];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BORDER;
            var2['backgroundColor'] = var9;
            var9 = -16;
            var2['marginLeft'] = var9;
            var1['sectionDivider'] = var2;
            var2 = {'height': 18, 'backgroundColor': null, 'paddingLeft': 12, 'marginVertical': 12, 'alignItems': 'center'};
            var5 = var7[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
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
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = _closure1_slot21;
            var2 = var2.SLASHES_DISCOVERY;
            var1 = var3 === var2;
case 15:
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
            var36 = var1.canMentionEveryone;
            var _closure2_slot2 = var36;
            var25 = var1.keyboardType;
            var _closure2_slot3 = var25;
            var3 = var1.onChangeAutoCompleteVisibility;
            var _closure2_slot4 = var3;
            var9 = var1.commandsDisabled;
            var _closure2_slot5 = var9;
            var14 = var1.chatInputRef;
            var _closure2_slot6 = var14;
            var31 = var1.canOnlyUseTextCommands;
            var26 = var1.screenIndex;
            var35 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 21;
            var2 = var18[var5];
            var4 = undefined;
            var8 = var35.bind(var4)(var2);
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
            var19 = 22;
            var2 = var18[var19];
            var8 = var35.bind(var4)(var2);
            var7 = var8.useToken;
            var10 = _closure1_slot1;
            var6 = 17;
            var2 = var18[var6];
            var2 = var10.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.TABLE_ROW_HEIGHT;
            var11 = var7.bind(var8)(var2);
            var _closure2_slot10 = var11;
            var2 = 23;
            var2 = var18[var2];
            var2 = var35.bind(var4)(var2);
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
            var40 = var7.resultCount;
            var _closure2_slot12 = var40;
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
            var34 = var35.bind(var4)(var24);
            var30 = var34.useStateFromStores;
            var24 = _closure1_slot8;
            var29 = new Array(1);
            var29[0] = var24;
            var24 = function() {
                var1 = _closure1_slot8;
                var1 = var1.loadState;
                return var1;
            };
            var30 = var30.bind(var34)(var29, var24);
            var5 = var18[var5];
            var34 = var35.bind(var4)(var5);
            var29 = var34.useStateFromStores;
            var5 = _closure1_slot10;
            var24 = new Array(1);
            var24[0] = var5;
            var5 = function() {
                var1 = _closure1_slot10;
                var1 = var1.loadState;
                return var1;
            };
            var5 = var29.bind(var34)(var24, var5);
            var29 = var20.useContext;
            var24 = 24;
            var24 = var18[var24];
            var24 = var35.bind(var4)(var24);
            var24 = var24.RedesignCompatContext;
            var37 = var29.bind(var20)(var24);
            var _closure2_slot18 = var37;
            var29 = var20.useMemo;
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
            var34 = var29.bind(var20)(var8, var24);
            var _closure2_slot19 = var34;
            var24 = var20.useState;
            var41 = false;
            var43 = '';
            var8 = {'focused': false, 'text': '', 'selectionStart': 0, 'selectionEnd': 0};
            var8 = var24.bind(var20)(var8);
            var8 = var23.bind(var4)(var8, var22);
            var24 = var8[var2];
            var38 = var24.focused;
            var _closure2_slot20 = var38;
            var39 = var24.text;
            var _closure2_slot21 = var39;
            var45 = var24.selectionStart;
            var _closure2_slot22 = var45;
            var42 = var24.selectionEnd;
            var _closure2_slot23 = var42;
            var8 = var8[var7];
            var _closure2_slot24 = var8;
            var8 = var20.useState;
            var8 = var8.bind(var20)(var2);
            var24 = var23.bind(var4)(var8, var22);
            var8 = var24[var2];
            var24 = var24[var7];
            var _closure2_slot25 = var24;
            var46 = var20.useEffect;
            var29 = function() {
                var2 = false;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot9;
                var3 = var4.addConditionalChangeListener;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var1 = !var2;
                        if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var4 = _closure1_slot9;
                        var2 = var4.isConnected;
                        var4 = var2.bind(var4)();
                        var6 = undefined;
                        var2 = undefined;
                        if(!var4) { _fun0005_ip = 19; continue _fun0005 }
case 15:
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
case 19:
                        var1 = var2;
case 17:
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
            var24 = var46.bind(var20)(var29, var24);
            var46 = var20.useMemo;
            var29 = function() {
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
                            if(!(var1 !== var4)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                            var1 = global;
                            var5 = var1.clearTimeout;
                            var4 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
case 19:
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
                                        if(!(var4 === var2)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                                        var4 = var1.text;
                                        var2 = _closure5_slot1;
                                        if(!(var4 === var2)) { _fun0007_ip = 20; continue _fun0007 }
case 22:
                                        var4 = var1.selectionStart;
                                        var2 = _closure5_slot2;
                                        if(!(var4 === var2)) { _fun0007_ip = 20; continue _fun0007 }
case 23:
                                        var4 = var1.selectionEnd;
                                        var2 = _closure5_slot3;
                                        if(!(var4 !== var2)) { _fun0007_ip = 24; continue _fun0007 }
case 20:
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
case 24:
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
            var46 = var46.bind(var20)(var29, var24);
            var29 = var20.useImperativeHandle;
            var24 = arg2;
            var24 = var29.bind(var20)(var24, var46);
            var29 = var20.useMemo;
            var24 = new Array(11);
            var24[0] = var45;
            var24[1] = var42;
            var24[2] = var39;
            var24[3] = var17;
            var24[4] = var12;
            var24[5] = var13;
            var24[6] = var36;
            var24[7] = var9;
            var24[8] = var34;
            var24[9] = var30;
            var24[10] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var28 = _closure2_slot22;
                    var _closure3_slot2 = var28;
                    var2 = _closure2_slot21;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var3 = _closure2_slot21;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var2 = var2.length;
                    var27 = 0;
                    if(!(var27 !== var2)) { _fun0008_ip = 25; continue _fun0008 }
case 27:
                    var2 = _closure2_slot8;
                    if(!(var11 == var2)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var4 = {'canMentionEveryone': null, 'canMentionHere': null, 'canMentionChannels': true, 'canMentionUsers': true, 'canMentionRoles': true, 'canMentionAnyGuildUser': false, 'canMentionNonMentionableRoles': false, 'canMentionOtherGlobals': true};
                    var2 = _closure2_slot2;
                    var4['canMentionEveryone'] = var2;
                    var4['canMentionHere'] = var2;
                    _fun0008_ip = 30; continue _fun0008;
case 28:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.getApplicationCommandOptionQueryOptions;
                    var2 = _closure2_slot8;
                    var4 = var3.bind(var5)(var2);
case 30:
                    var2 = _closure2_slot8;
                    var2 = var11 != var2;
                    var18 = undefined;
                    var8 = undefined;
                    if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot8;
                    var2 = var2.name;
                    var8 = var3[var2];
case 31:
                    var2 = _closure2_slot9;
                    var2 = var11 != var2;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var2 = _closure2_slot8;
                    var2 = var11 != var2;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 35:
                    var2 = var11 != var8;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 36:
                    var2 = var8.location;
                    var3 = var11 != var2;
                    var9 = 0;
                    if(!var3) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var9 = var2;
case 37:
                    var2 = var8.length;
                    var5 = var11 != var2;
                    var3 = 0;
                    if(!var5) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var3 = var2;
case 39:
                    var5 = _closure2_slot22;
                    var2 = var9 + var3;
                    var2 = var5 >= var2;
                    var14 = undefined;
                    if(!var2) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var10 = _closure2_slot21;
                    var6 = var10.substring;
                    var5 = var9 + var3;
                    var2 = _closure2_slot22;
                    var14 = var6.bind(var10)(var5, var2);
case 41:
                    var _closure3_slot1 = var14;
                    var2 = _closure2_slot8;
                    var2 = var2.choices;
                    if(!(var11 == var2)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var2 = _closure2_slot8;
                    var2 = var2.autocomplete;
                    if(var2) { _fun0008_ip = 43; continue _fun0008 }
case 45:
                    var2 = _closure2_slot8;
                    var16 = var2.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 28;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.BOOLEAN;
                    if(!(var2 !== var16)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var16)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.ROLE;
                    if(!(var2 !== var16)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.USER;
                    if(!(var2 !== var16)) { _fun0008_ip = 50; continue _fun0008 }
case 52:
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
                    if(!(var15 === var16)) { _fun0008_ip = 53; continue _fun0008 }
case 50:
                    var16 = _closure1_slot18;
                    var _closure3_slot0 = var16;
                    var15 = _closure1_slot21;
                    var10 = var15.MENTIONS;
                    var2 = true;
                    var12 = var16;
                    var6 = undefined;
                    var5 = undefined;
                    _fun0008_ip = 53; continue _fun0008;
case 48:
                    var17 = _closure1_slot19;
                    _closure3_slot0 = var17;
                    var15 = _closure1_slot21;
                    var10 = var15.CHANNELS;
                    var15 = _closure2_slot8;
                    var5 = var15.channelTypes;
                    var2 = true;
                    var12 = var17;
                    var6 = undefined;
                    _fun0008_ip = 53; continue _fun0008;
case 46:
                    var16 = '';
                    _closure3_slot0 = var16;
                    var15 = _closure1_slot21;
                    var10 = var15.CHOICES;
                    var6 = _closure1_slot15;
                    var2 = true;
                    var12 = var16;
                    var5 = undefined;
                    _fun0008_ip = 53; continue _fun0008;
case 43:
                    var16 = '';
                    _closure3_slot0 = var16;
                    var13 = _closure1_slot21;
                    var10 = var13.CHOICES;
                    var13 = _closure2_slot8;
                    var6 = var13.choices;
                    var2 = true;
                    var12 = var16;
                    var5 = undefined;
case 53:
                    var26 = var10;
                    var25 = var12;
                    var24 = var14;
                    if(var2) { _fun0008_ip = 54; continue _fun0008 }
case 33:
                    var13 = var11 != var8;
                    var23 = null;
                    if(!var13) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var15 = var8.location;
                    var16 = var11 != var15;
                    var13 = 0;
                    if(!var16) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var13 = var15;
case 57:
                    var15 = var8.length;
                    var16 = var11 != var15;
                    var8 = 0;
                    if(!var16) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var8 = var15;
case 59:
                    var23 = var13 + var8;
case 55:
                    var22 = global;
                    var21 = 29;
                    var20 = 1;
                    var17 = var11 != var23;
case 61:
                    var16 = _closure1_slot12;
                    var15 = var16.test;
                    var19 = _closure2_slot21;
                    var13 = var28 - var20;
                    var13 = var19[var13];
                    var13 = var15.bind(var16)(var13);
                    var15 = 0;
                    if(!var17) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var15 = var23;
case 62:
                    if(!(var28 !== var15)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var31 = var26;
                    if(!var13) { _fun0008_ip = 66; continue _fun0008 }
case 64:
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
                    if(!(var11 != var29)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var15 = _closure1_slot12;
                    var13 = var15.test;
                    var16 = var13.bind(var15)(var29);
                    var15 = var26;
                    var19 = var29;
                    var13 = var28;
                    if(var16) { _fun0008_ip = 69; continue _fun0008 }
case 67:
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
case 70:
                            var2 = _closure1_slot21;
                            var2 = var2.SLASHES_DISCOVERY;
                            var1 = var4 !== var2;
case 8:
                            if(var1) { _fun0009_ip = 71; continue _fun0009 }
case 4:
                            var4 = _closure2_slot9;
                            var2 = null;
                            var2 = var2 == var4;
                            if(!var2) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                            var3 = _closure2_slot5;
                            var2 = !var3;
case 72:
                            var1 = var2;
case 71:
                            if(!var1) { _fun0009_ip = 74; continue _fun0009 }
case 2:
                            var2 = _closure3_slot0;
                            var5 = undefined;
                            var2 = var5 !== var2;
                            if(!var2) { _fun0009_ip = 24; continue _fun0009 }
case 75:
                            var4 = _closure3_slot1;
                            var2 = var5 !== var4;
case 24:
                            if(!var2) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                            var6 = var7.matches;
                            var5 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var3 = _closure3_slot2;
                            var2 = var6.bind(var7)(var5, var4, var3);
case 76:
                            var1 = var2;
case 74:
                            return var1;
                        }
                    };
                    var31 = var32.bind(var33)(var16);
                    var25 = var30;
                    var24 = var29;
                    var19 = var24;
                    var13 = var28;
                    var15 = var31;
                    if(!(var11 == var15)) { _fun0008_ip = 69; continue _fun0008 }
case 66:
                    var29 = var28 - 1;
                    _closure3_slot2 = var29;
                    var30 = var24;
                    var16 = 0;
                    if(!var17) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var16 = var23;
case 78:
                    var26 = var31;
                    var24 = var30;
                    var28 = var29;
                    var15 = var26;
                    var19 = var24;
                    var13 = var28;
                    if(var13 >= var16) { _fun0008_ip = 61; continue _fun0008 }
case 69:
                    var16 = _closure1_slot21;
                    var17 = var16.SLASHES;
                    var16 = var19;
                    if(!(var15 === var17)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var8 = 30;
                    var8 = var20[var8];
                    var18 = var17.bind(var18)(var8);
                    var17 = var18.getTextBeforeFirstOption;
                    var20 = var11 != var19;
                    var8 = '';
                    if(!var20) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                    var8 = var19;
case 82:
                    var8 = var17.bind(var18)(var8);
                    var8 = var8.text;
                    _closure3_slot1 = var8;
                    var16 = var8;
case 80:
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
case 54:
                    var8 = var11 != var12;
                    if(!var8) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                    var13 = '';
                    var8 = var13 !== var12;
case 84:
                    if(!var8) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                    var8 = var11 != var14;
case 86:
                    if(!var8) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                    var11 = var14.startsWith;
                    var8 = var11.bind(var14)(var12);
case 88:
                    var11 = var14;
                    if(!var8) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var13 = var14.length;
                    var8 = var12.length;
                    var13 = var13 > var8;
                    var8 = '';
                    if(!var13) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                    var13 = var14.substring;
                    var12 = var12.length;
                    var8 = var13.bind(var14)(var12);
case 92:
                    _closure3_slot1 = var8;
                    var11 = var8;
case 90:
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
                            if(var5) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                            var4 = var2;
case 94:
                            var2 = undefined;
                            if(var5) { _fun0010_ip = 96; continue _fun0010 }
case 97:
                            var7 = var6().value;
                            var6 = var3;
                            var6 = var6 === var1;
                            var2 = undefined;
                            var5 = var6;
                            if(var6) { _fun0010_ip = 96; continue _fun0010 }
case 4:
                            var2 = var7;
                            var5 = var6;
case 96:
                            if(var5) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                            var3.return();
case 98:
                            var5 = var2.optionValue;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                            var3 = _closure3_slot3;
                            var2 = var2.optionValue;
                            var3[var4] = var2;
case 100:
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
case 25:
                    var1 = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                    return var1;
                }
            };
            var5 = var29.bind(var20)(var5, var24);
            var24 = var5.autocompleteType;
            var _closure2_slot26 = var24;
            var42 = var5.query;
            var _closure2_slot27 = var42;
            var29 = var5.queryOptions;
            var _closure2_slot28 = var29;
            var30 = var5.autocompleteSelectionStart;
            var _closure2_slot29 = var30;
            var5 = var5.showOptionValuesPicker;
            var _closure2_slot30 = var5;
            var39 = var20.useCallback;
            var36 = new Array(4);
            var36[0] = var24;
            var36[1] = var42;
            var36[2] = var29;
            var36[3] = var34;
            var29 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot26;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0011_ip = 16; continue _fun0011 }
case 102:
                    var1 = _closure2_slot27;
                    if(!(var4 == var1)) { _fun0011_ip = 103; continue _fun0011 }
case 16:
                    var5 = _closure2_slot17;
                    var4 = _closure1_slot31;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    _fun0011_ip = 104; continue _fun0011;
case 103:
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
case 105:
                            var2 = _closure3_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                            _fun0012_ip = 20; continue _fun0012;
case 6:
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
case 20:
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
case 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var39.bind(var20)(var29, var36);
            var _closure2_slot31 = var29;
            var39 = var20.useEffect;
            var36 = new Array(3);
            var36[0] = var24;
            var36[1] = var29;
            var36[2] = var34;
            var34 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot26;
                    var2 = null;
                    var3 = var2 != var3;
                    var5 = null;
                    if(!var3) { _fun0013_ip = 27; continue _fun0013 }
case 21:
                    var3 = _closure2_slot19;
                    var6 = var2 == var3;
                    var3 = undefined;
                    if(var6) { _fun0013_ip = 4; continue _fun0013 }
case 22:
                    var6 = _closure2_slot19;
                    var4 = _closure2_slot26;
                    var4 = var6[var4];
                    var3 = var4.stores;
case 4:
                    var5 = var3;
case 27:
                    if(!(var2 == var5)) { _fun0013_ip = 29; continue _fun0013 }
case 106:
                    var2 = undefined;
                    return var2;
case 29:
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
            var34 = var39.bind(var20)(var34, var36);
            var36 = var20.useEffect;
            var34 = new Array(1);
            var34[0] = var29;
            var29 = function() {
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var29 = var36.bind(var20)(var29, var34);
            var36 = var20.useCallback;
            var34 = new Array(2);
            var34[0] = var44;
            var34[1] = var27;
            var29 = function() {
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
            var29 = var36.bind(var20)(var29, var34);
            var _closure2_slot32 = var29;
            var36 = var20.useMemo;
            var34 = new Array(4);
            var34[0] = var24;
            var34[1] = var38;
            var34[2] = var25;
            var34[3] = var40;
            var25 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot20;
                    var3 = !var1;
                    if(var3) { _fun0014_ip = 107; continue _fun0014 }
case 18:
                    var4 = _closure2_slot12;
                    var1 = 0;
                    var1 = var1 === var4;
                    if(!var1) { _fun0014_ip = 23; continue _fun0014 }
case 26:
                    var6 = _closure1_slot29;
                    var5 = _closure2_slot26;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var1 = !var4;
case 23:
                    var3 = var1;
case 107:
                    var1 = !var3;
                    if(var3) { _fun0014_ip = 24; continue _fun0014 }
case 108:
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
case 24:
                    return var1;
                }
            };
            var39 = var36.bind(var20)(var25, var34);
            var _closure2_slot33 = var39;
            var25 = var20.useRef;
            var25 = var25.bind(var20)(var41);
            var _closure2_slot34 = var25;
            var36 = var20.useEffect;
            var34 = new Array(2);
            var34[0] = var24;
            var34[1] = var17;
            var25 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot34;
                    var6 = var1.current;
                    var3 = _closure2_slot34;
                    var7 = _closure1_slot29;
                    var2 = _closure2_slot26;
                    var1 = undefined;
                    var2 = var7.bind(var1)(var2);
                    if(var6) { _fun0015_ip = 109; continue _fun0015 }
case 15:
                    var6 = var2;
                    if(var2) { _fun0015_ip = 110; continue _fun0015 }
case 111:
                    var8 = _closure2_slot9;
                    var7 = null;
                    var6 = var7 != var8;
case 110:
                    var3['current'] = var6;
                    var6 = _closure2_slot34;
                    var6 = var6.current;
                    if(!var6) { _fun0015_ip = 112; continue _fun0015 }
case 72:
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
                    _fun0015_ip = 112; continue _fun0015;
case 109:
                    if(var2) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                    var5 = _closure2_slot9;
                    var4 = null;
                    var2 = var4 != var5;
case 113:
                    var3['current'] = var2;
case 112:
                    return var1;
                }
            };
            var25 = var36.bind(var20)(var25, var34);
            var34 = var20.useEffect;
            var25 = new Array(6);
            var25[0] = var3;
            var25[1] = var17;
            var25[2] = var39;
            var25[3] = var24;
            var25[4] = var15;
            var25[5] = var29;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot33;
                    if(var2) { _fun0016_ip = 21; continue _fun0016 }
case 115:
                    var4 = _closure2_slot9;
                    var3 = null;
                    var2 = var3 != var4;
case 21:
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0016_ip = 116; continue _fun0016 }
case 117:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var2);
case 116:
                    if(!var2) { _fun0016_ip = 118; continue _fun0016 }
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
case 118:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var34.bind(var20)(var3, var25);
            var3 = 18;
            var3 = var18[var3];
            var25 = var10.bind(var4)(var3);
            var3 = {};
            var45 = true;
            var3['ignoreKeyboard'] = var45;
            var25 = var25.bind(var4)(var3);
            var3 = 19;
            var3 = var18[var3];
            var34 = var10.bind(var4)(var3);
            var3 = {};
            var3['includeKeyboardHeight'] = var45;
            var3 = var34.bind(var4)(var3);
            var3 = var3.insets;
            var34 = var25.height;
            var25 = var3.top;
            var25 = var34 - var25;
            var3 = var3.bottom;
            var25 = var25 - var3;
            var3 = 20;
            var3 = var18[var3];
            var3 = var35.bind(var4)(var3);
            var3 = var3.NAV_BAR_HEIGHT;
            var3 = var25 - var3;
            var3 = var3 - var8;
            var _closure2_slot35 = var3;
            var25 = var20.useMemo;
            var8 = new Array(3);
            var8[0] = var24;
            var34 = var44.length;
            var8[1] = var34;
            var8[2] = var3;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot13;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0017_ip = 23; continue _fun0017 }
case 5:
                    var3 = _closure2_slot26;
                    var2 = _closure1_slot21;
                    var2 = var2.EMOJIS_AND_STICKERS;
                    var4 = 200;
                    if(!(var3 === var2)) { _fun0017_ip = 119; continue _fun0017 }
case 120:
                    var4 = 242;
case 119:
                    _fun0017_ip = 27; continue _fun0017;
case 23:
                    var4 = _closure1_slot27;
case 27:
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.min;
                    var1 = _closure2_slot35;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var3 = var25.bind(var20)(var3, var8);
            var _closure2_slot36 = var3;
            var25 = var20.useState;
            var8 = null;
            var25 = var25.bind(var20)(var8);
            var25 = var23.bind(var4)(var25, var22);
            var38 = var25[var2];
            var _closure2_slot37 = var38;
            var34 = var25[var7];
            var _closure2_slot38 = var34;
            var36 = var20.useMemo;
            var25 = new Array(10);
            var25[0] = var40;
            var25[1] = var24;
            var25[2] = var39;
            var25[3] = var33;
            var25[4] = var32;
            var39 = var27.length;
            var25[5] = var39;
            var25[6] = var3;
            var25[7] = var38;
            var25[8] = var37;
            var25[9] = var11;
            var11 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot26;
                    var2 = _closure1_slot21;
                    var2 = var2.EMOJIS_AND_STICKERS;
                    if(!(var4 !== var2)) { _fun0018_ip = 121; continue _fun0018 }
case 95:
                    var4 = _closure1_slot29;
                    var2 = _closure2_slot26;
                    var9 = undefined;
                    var2 = var4.bind(var9)(var2);
                    if(var2) { _fun0018_ip = 9; continue _fun0018 }
case 120:
                    var4 = _closure2_slot26;
                    var2 = null;
                    var2 = var2 != var4;
                    var5 = 0;
                    if(!var2) { _fun0018_ip = 17; continue _fun0018 }
case 96:
                    var8 = _closure1_slot32;
                    var13 = _closure2_slot12;
                    var12 = _closure2_slot26;
                    var11 = _closure2_slot18;
                    var10 = _closure2_slot10;
                    var14 = undefined;
                    var5 = var14[var8](var13, var12, var11, var10, var9);
case 17:
                    _fun0018_ip = 122; continue _fun0018;
case 9:
                    var4 = _closure2_slot37;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 0;
                    if(!var4) { _fun0018_ip = 77; continue _fun0018 }
case 123:
                    var2 = _closure2_slot37;
case 77:
                    var5 = var2;
case 122:
                    _fun0018_ip = 124; continue _fun0018;
case 121:
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
                    if(!var2) { _fun0018_ip = 125; continue _fun0018 }
case 126:
                    var2 = 42;
                    var6 = var4 + var2;
case 125:
                    var2 = _closure2_slot15;
                    var4 = var6;
                    if(!var2) { _fun0018_ip = 127; continue _fun0018 }
case 128:
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
case 127:
                    var6 = _closure2_slot15;
                    if(!var6) { _fun0018_ip = 129; continue _fun0018 }
case 14:
                    var6 = _closure2_slot16;
case 129:
                    var2 = var4;
                    if(!var6) { _fun0018_ip = 130; continue _fun0018 }
case 131:
                    var3 = _closure1_slot26;
                    var2 = var4 + var3;
case 130:
                    var5 = var2;
case 124:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.min;
                    var6 = _closure2_slot33;
                    var2 = 0;
                    if(!var6) { _fun0018_ip = 132; continue _fun0018 }
case 133:
                    var2 = var5;
case 132:
                    var1 = _closure2_slot36;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var25 = var36.bind(var20)(var11, var25);
            var11 = 34;
            var11 = var18[var11];
            var37 = var35.bind(var4)(var11);
            var36 = var37.useMobileVisualRefreshConfig;
            var11 = {};
            var38 = 'AutocompleteWrapper';
            var11['location'] = var38;
            var11 = var36.bind(var37)(var11);
            var11 = var11.chatInputFloating;
            var _closure2_slot39 = var11;
            var36 = var18[var19];
            var38 = var35.bind(var4)(var36);
            var37 = var38.useToken;
            var36 = var18[var6];
            var36 = var10.bind(var4)(var36);
            var36 = var36.modules;
            var36 = var36.mobile;
            var36 = var36.CHAT_INPUT_FLOATING_BORDER_RADIUS;
            var52 = var37.bind(var38)(var36);
            var36 = var18[var19];
            var39 = var35.bind(var4)(var36);
            var37 = var39.useToken;
            var36 = var18[var6];
            var36 = var10.bind(var4)(var36);
            var36 = var36.modules;
            var36 = var36.mobile;
            var36 = var36.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH;
            var51 = var37.bind(var39)(var36);
            var19 = var18[var19];
            var36 = var35.bind(var4)(var19);
            var19 = var36.useToken;
            var6 = var18[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH;
            var50 = var19.bind(var36)(var6);
            var19 = _closure1_slot28;
            var53 = var25 > var2;
            var54 = undefined;
            var6 = var54[var19](var53, var52, var51, var50, var49);
            var _closure2_slot40 = var6;
            var19 = 35;
            var19 = var18[var19];
            var35 = var35.bind(var4)(var19);
            var19 = var35.useIsScreenReaderEnabled;
            var36 = var19.bind(var35)();
            var _closure2_slot41 = var36;
            var35 = var20.useMemo;
            var19 = new Array(3);
            var19[0] = var36;
            var19[1] = var11;
            var11 = var6.autocompletePositionRelative;
            var19[2] = var11;
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
                    if(!var2) { _fun0019_ip = 134; continue _fun0019 }
case 135:
                    var3 = _closure2_slot41;
                    if(var3) { _fun0019_ip = 136; continue _fun0019 }
case 107:
                    var3 = _closure2_slot39;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 134; continue _fun0019 }
case 136:
                    var2 = _closure2_slot40;
                    var1 = var2.autocompletePositionRelative;
case 134:
                    return var1;
                }
            };
            var11 = var35.bind(var20)(var11, var19);
            var19 = 36;
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
                    if(!(var4 === var2)) { _fun0020_ip = 100; continue _fun0020 }
case 105:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 37;
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
                    _fun0020_ip = 137; continue _fun0020;
case 100:
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
                    if(var5) { _fun0020_ip = 138; continue _fun0020 }
case 139:
                    var7 = var9.setAutoCompleteResult;
                    var5 = _closure2_slot1;
                    var13 = var5.id;
                    var11 = arg3;
                    var14 = var9;
                    var12 = var8;
                    var10 = var1;
                    var4 = var14[var7](var13, var12, var11, var10, var9);
case 138:
                    if(var4) { _fun0020_ip = 137; continue _fun0020 }
case 140:
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
                    if(!(var4 === var3)) { _fun0020_ip = 137; continue _fun0020 }
case 141:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = var3.handleSelectSticker;
                    var1 = var1.sticker;
                    var1 = var2.bind(var3)(var1);
case 137:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var20)(var21, var25);
            var _closure2_slot42 = var26;
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
                    if(!(var7 !== var4)) { _fun0021_ip = 142; continue _fun0021 }
case 72:
                    var4 = null;
                    if(!(var4 != var6)) { _fun0021_ip = 143; continue _fun0021 }
case 2:
                    var4 = var6.insertOrJumpCommandOption;
                    var4 = var4.bind(var6)(var2);
                    _fun0021_ip = 143; continue _fun0021;
case 142:
                    var7 = _closure2_slot7;
                    var4 = var2.name;
                    var4 = var7[var4];
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var7 = var4.lastValidationResult;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0021_ip = 144; continue _fun0021 }
case 145:
                    var7 = var7.success;
                    if(var7) { _fun0021_ip = 146; continue _fun0021 }
case 144:
                    if(!(var4 != var6)) { _fun0021_ip = 143; continue _fun0021 }
case 147:
                    var4 = var6.insertOrJumpCommandOption;
                    var4 = var4.bind(var6)(var2);
                    _fun0021_ip = 143; continue _fun0021;
case 146:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 38;
                    var3 = var7[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openCommandAttachmentPreview;
                    var2 = var2.name;
                    var2 = var3.bind(var4)(var6, var5, var2);
case 143:
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
                    if(!(var12 === var11)) { _fun0022_ip = 148; continue _fun0022 }
case 19:
                    var11 = var5.sticker;
                    var10 = var11.id;
case 148:
                    var3['stickerId'] = var10;
                    var10 = _closure2_slot32;
                    var14 = var10.bind(var1)();
                    var15 = var3;
                    var10 = copyDataProperties(var15, var14);
                    var3 = var8.bind(var9)(var7, var4, var3);
                    var4 = _closure2_slot42;
                    var3 = _closure2_slot29;
                    var6 = var6 != var3;
                    var3 = 0;
                    if(!var6) { _fun0022_ip = 149; continue _fun0022 }
case 150:
                    var3 = _closure2_slot29;
case 149:
                    var2 = _closure2_slot30;
                    var2 = var4.bind(var1)(var5, var3, var2);
                    return var1;
                }
            };
            var21 = var25.bind(var20)(var5, var21);
            var _closure2_slot43 = var21;
            var5 = var20.useState;
            var5 = var5.bind(var20)(var8);
            var5 = var23.bind(var4)(var5, var22);
            var2 = var5[var2];
            var _closure2_slot44 = var2;
            var5 = var5[var7];
            var _closure2_slot45 = var5;
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
                    if(!(var2 !== var3)) { _fun0023_ip = 151; continue _fun0023 }
case 152:
                    var2 = _closure1_slot11;
                    var2 = var2.GLOBAL;
                    if(!(var2 !== var3)) { _fun0023_ip = 153; continue _fun0023 }
case 108:
                    var2 = _closure1_slot11;
                    var2 = var2.ROLE;
                    if(!(var2 !== var3)) { _fun0023_ip = 154; continue _fun0023 }
case 155:
                    var2 = _closure1_slot11;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var3)) { _fun0023_ip = 156; continue _fun0023 }
case 142:
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI;
                    if(!(var2 !== var3)) { _fun0023_ip = 157; continue _fun0023 }
case 122:
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI_PREMIUM_UPSELL;
                    if(!(var2 !== var3)) { _fun0023_ip = 158; continue _fun0023 }
case 145:
                    var2 = _closure1_slot11;
                    var2 = var2.CHOICE;
                    if(!(var2 !== var3)) { _fun0023_ip = 159; continue _fun0023 }
case 160:
                    var2 = _closure1_slot11;
                    var2 = var2.CHOICE_LOADING;
                    if(!(var2 !== var3)) { _fun0023_ip = 161; continue _fun0023 }
case 162:
                    var2 = _closure1_slot11;
                    var2 = var2.STICKER;
                    if(!(var2 !== var3)) { _fun0023_ip = 163; continue _fun0023 }
case 128:
                    var2 = _closure1_slot11;
                    var2 = var2.LABEL;
                    if(!(var2 !== var3)) { _fun0023_ip = 164; continue _fun0023 }
case 34:
                    var2 = null;
                    return var2;
case 164:
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
case 163:
                    var3 = _closure2_slot44;
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
                        var3 = _closure2_slot43;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 'onPress';
                    var3[1] = var9;
                    var9 = function onLongPress() {
                        var3 = _closure2_slot45;
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
case 161:
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
case 159:
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
                        var3 = _closure2_slot43;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 158:
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
                        var3 = _closure2_slot43;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 157:
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
                        var3 = _closure2_slot43;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 156:
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
                        var3 = _closure2_slot43;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 154:
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
                        var3 = _closure2_slot43;
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
                    if(!var9) { _fun0023_ip = 165; continue _fun0023 }
case 166:
                    var10 = _closure2_slot9;
                    var8 = null;
                    var9 = var8 == var10;
case 165:
                    var8 = 'showDescription';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 153:
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
                        var3 = _closure2_slot43;
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
                        var3 = _closure2_slot43;
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
            var7 = 39;
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
            if(!var18) { _fun0004_ip = 167; continue _fun0004 }
case 168:
            var21 = _closure1_slot25;
            var20 = _closure1_slot24;
            var19 = {};
            var22 = _closure1_slot21;
            var22 = var22.SLASHES_DISCOVERY;
            var23 = var24 === var22;
            if(!var23) { _fun0004_ip = 169; continue _fun0004 }
case 170:
            var30 = _closure1_slot23;
            var25 = _closure1_slot1;
            var35 = _closure1_slot2;
            var22 = 40;
            var22 = var35[var22];
            var25 = var25.bind(var4)(var22);
            var22 = {};
            var22['channel'] = var15;
            var35 = function onPressSlashItem(arg1, arg2, arg3) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = _closure2_slot42;
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
                    var1 = 41;
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
                    if(!var6) { _fun0024_ip = 122; continue _fun0024 }
case 171:
                    var2 = _closure2_slot29;
case 122:
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var22['onPressSlashItem'] = var35;
            var22['onHeightChange'] = var34;
            var22['canOnlyUseTextCommands'] = var31;
            var23 = var30.bind(var4)(var25, var22);
case 169:
            var22 = new Array(4);
            var22[0] = var23;
            var23 = _closure1_slot21;
            var23 = var23.SLASHES;
            var23 = var24 === var23;
            if(!var23) { _fun0004_ip = 172; continue _fun0004 }
case 173:
            var31 = _closure1_slot23;
            var30 = _closure1_slot1;
            var34 = _closure1_slot2;
            var25 = 42;
            var25 = var34[var25];
            var30 = var30.bind(var4)(var25);
            var25 = {};
            var25['channel'] = var15;
            var35 = var8 != var42;
            var34 = var43;
            if(!var35) { _fun0004_ip = 174; continue _fun0004 }
case 175:
            var34 = var42;
case 174:
            var25['query'] = var34;
            var34 = function onPressCommandItem(arg1, arg2) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure2_slot42;
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
                    var1 = 41;
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
                    if(!var6) { _fun0025_ip = 176; continue _fun0025 }
case 77:
                    var2 = _closure2_slot29;
case 176:
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
case 172:
            var22[1] = var23;
            var23 = _closure1_slot21;
            var23 = var23.EMOJIS_AND_STICKERS;
            var23 = var24 === var23;
            if(!var23) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var30 = _closure1_slot25;
            var25 = _closure1_slot24;
            var24 = {};
            var34 = var33;
            if(!var33) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var36 = _closure1_slot25;
            var35 = _closure1_slot24;
            var31 = {};
            var40 = _closure1_slot23;
            var46 = _closure1_slot0;
            var49 = _closure1_slot2;
            var37 = 43;
            var37 = var49[var37];
            var37 = var46.bind(var4)(var37);
            var38 = var37.Text;
            var37 = {};
            var39 = var6.sectionTitle;
            var37['style'] = var39;
            var39 = 'text-sm/semibold';
            var37['variant'] = var39;
            var39 = 44;
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
            var53 = var45;
            var52 = var29;
            var46 = copyDataProperties(var53, var52);
            var52 = var6.stickersAutocompleteList;
            var53 = var45;
            var46 = copyDataProperties(var53, var52);
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
case 179:
            var31 = new Array(3);
            var31[0] = var34;
            if(!var33) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var33 = var32;
case 181:
            if(!var33) { _fun0004_ip = 183; continue _fun0004 }
case 184:
            var36 = _closure1_slot23;
            var35 = _closure1_slot1;
            var37 = _closure1_slot2;
            var34 = 45;
            var34 = var37[var34];
            var35 = var35.bind(var4)(var34);
            var34 = {};
            var37 = var6.sectionDivider;
            var34['style'] = var37;
            var33 = var36.bind(var4)(var35, var34);
case 183:
            var31[1] = var33;
            if(!var32) { _fun0004_ip = 185; continue _fun0004 }
case 186:
            var35 = _closure1_slot23;
            var37 = _closure1_slot0;
            var40 = _closure1_slot2;
            var33 = 43;
            var33 = var40[var33];
            var33 = var37.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {};
            var36 = var6.sectionTitle;
            var33['style'] = var36;
            var36 = 'text-sm/semibold';
            var33['variant'] = var36;
            var36 = 44;
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
case 185:
            var31[2] = var32;
            var24['children'] = var31;
            var23 = var30.bind(var4)(var25, var24);
case 177:
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
case 167:
            var7['children'] = var18;
            var10 = var11.bind(var4)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var8 = var8 != var17;
            if(!var8) { _fun0004_ip = 187; continue _fun0004 }
case 188:
            var8 = !var9;
case 187:
            if(!var8) { _fun0004_ip = 189; continue _fun0004 }
case 190:
            var11 = _closure1_slot23;
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 46;
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
case 189:
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
    var4 = 47;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/native/AutocompleteWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();