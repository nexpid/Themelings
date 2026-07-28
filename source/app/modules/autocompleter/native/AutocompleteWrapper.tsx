// app/modules/autocompleter/native/AutocompleteWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function isSlashAutocompleteType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot22;
            var1 = var1.SLASHES;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot22;
            var2 = var2.SLASHES_DISCOVERY;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function getAutocompletesHeight(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = arg4;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = arg3;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot22;
            var6 = var3.EMOJIS_AND_STICKERS;
            var3 = arg2;
            if(!(var3 !== var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot17;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var3 = _closure1_slot16;
case 10:
            var2 = var3;
case 6:
            var3 = var4 * var2;
            var2 = 1;
            var4 = var4 - var2;
            var2 = _closure1_slot27;
            var2 = var4 * var2;
            var1 = var3 + var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function getStickersItemLayout(arg1, arg2) {
        var2 = arg2;
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 17;
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
    var9 = var8.EMOJI_SENTINEL;
    var _closure1_slot20 = var9;
    var8 = var8.GAME_MENTION_INPUT_PREFIX;
    var _closure1_slot21 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AutocompleteTypes;
    var _closure1_slot22 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.EmojiInteractionPoint;
    var _closure1_slot23 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot24 = var9;
    var9 = var8.Fragment;
    var _closure1_slot25 = var9;
    var8 = var8.jsxs;
    var _closure1_slot26 = var8;
    var4 = var4.hairlineWidth;
    var _closure1_slot27 = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var2 = {};
            var4 = 'relative';
            var2['position'] = var4;
            var1['autocompletePositionRelative'] = var2;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var6.bind(var5)(var3);
            var3 = var6.isAndroid;
            var6 = var3.bind(var6)();
            var3 = 'absolute';
            if(!var6) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var4;
case 11:
            var2['position'] = var3;
            var3 = arg4;
            var2['marginHorizontal'] = var3;
            var3 = arg5;
            var2['marginBottom'] = var3;
            var1['autocompleteWrapper'] = var2;
            var7 = 0;
            var2 = {'left': 0, 'right': 0, 'bottom': 0};
            var1['autocompleteWrapperAbsolute'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 16;
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
            var2['backgroundColor'] = var9;
            var9 = arg1;
            var2['borderRadius'] = var9;
            var9 = arg2;
            var2['borderWidth'] = var9;
            var9 = arg3;
            var2['borderTopWidth'] = var9;
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BORDER;
            var2['borderColor'] = var9;
            var9 = 'hidden';
            var2['overflow'] = var9;
            var1['autocompleteContainer'] = var2;
            var2 = {'flexGrow': 0, 'flexShrink': 1};
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
            var2['backgroundColor'] = var9;
            var1['autocomplete'] = var2;
            var2 = {};
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BORDER;
            var2['backgroundColor'] = var9;
            var9 = -16;
            var2['marginLeft'] = var9;
            var1['sectionDivider'] = var2;
            var2 = {'backgroundColor': null, 'paddingLeft': 12, 'marginVertical': 12, 'justifyContent': 'center'};
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
            var2['backgroundColor'] = var9;
            var10 = 12;
            var1['sectionTitle'] = var2;
            var2 = {};
            var9 = _closure1_slot0;
            var8 = 17;
            var11 = var6[var8];
            var11 = var9.bind(var5)(var11);
            var11 = var11.AUTOCOMPLETE_STICKER_NODE_MARGIN;
            var11 = var10 - var11;
            var2['paddingLeft'] = var11;
            var2['marginBottom'] = var10;
            var8 = var6[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.AUTOCOMPLETE_STICKER_NODE_SIZE;
            var2['height'] = var8;
            var2['flexShrink'] = var7;
            var1['stickersAutocompleteList'] = var2;
            var2 = {};
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BADGE_BACKGROUND_BRAND;
            var2['backgroundColor'] = var3;
            var1['newTag'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot28 = var4;
    var4 = {'resultCount': 0, 'stickerResults': null, 'nonStickerResults': null, 'hasStickerResults': false, 'hasNonStickerResults': false};
    var8 = new Array(0);
    var4['stickerResults'] = var8;
    var8 = new Array(0);
    var4['nonStickerResults'] = var8;
    var _closure1_slot29 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var31 = var1.analyticsLocations;
            var _closure2_slot0 = var31;
            var17 = var1.channel;
            var _closure2_slot1 = var17;
            var43 = var1.canMentionEveryone;
            var _closure2_slot2 = var43;
            var8 = var1.keyboardType;
            var _closure2_slot3 = var8;
            var3 = var1.onChangeAutoCompleteVisibility;
            var _closure2_slot4 = var3;
            var9 = var1.commandsDisabled;
            var _closure2_slot5 = var9;
            var16 = var1.chatInputRef;
            var _closure2_slot6 = var16;
            var32 = var1.canOnlyUseTextCommands;
            var26 = var1.screenIndex;
            var4 = undefined;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var _closure2_slot33 = var4;
            var _closure2_slot34 = var4;
            var _closure2_slot35 = var4;
            var _closure2_slot36 = var4;
            var _closure2_slot37 = var4;
            var _closure2_slot38 = var4;
            var _closure2_slot39 = var4;
            var _closure2_slot40 = var4;
            var _closure2_slot41 = var4;
            var _closure2_slot42 = var4;
            var _closure2_slot43 = var4;
            var _closure2_slot44 = var4;
            var _closure2_slot45 = var4;
            var _closure2_slot46 = var4;
            var _closure2_slot47 = var4;
            var _closure2_slot48 = var4;
            var _closure2_slot49 = var4;
            var _closure2_slot50 = var4;
            var _closure2_slot51 = var4;
            var _closure2_slot52 = var4;
            var _closure2_slot53 = var4;
            var _closure2_slot54 = var4;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var20 = 21;
            var2 = var11[var20];
            var10 = var5.bind(var4)(var2);
            var7 = var10.useStateFromStoresObject;
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
            var2 = var7.bind(var10)(var6, var2);
            var14 = var2.optionStates;
            var _closure2_slot7 = var14;
            var15 = var2.activeOption;
            var _closure2_slot8 = var15;
            var19 = var2.activeCommand;
            var _closure2_slot9 = var19;
            var18 = var2.activeSection;
            var13 = 22;
            var2 = var11[var13];
            var10 = var5.bind(var4)(var2);
            var7 = var10.useToken;
            var6 = _closure1_slot1;
            var42 = 16;
            var2 = var11[var42];
            var2 = var6.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.TABLE_ROW_HEIGHT;
            var36 = var7.bind(var10)(var2);
            var _closure2_slot10 = var36;
            var2 = 23;
            var2 = var11[var2];
            var7 = var5.bind(var4)(var2);
            var2 = var7.useScaledTextLineHeight;
            var40 = 'text-sm/semibold';
            var41 = var2.bind(var7)(var40);
            var _closure2_slot11 = var41;
            var2 = 24;
            var2 = var11[var2];
            var2 = var6.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var _closure2_slot12 = var6;
            var2 = 25;
            var2 = var11[var2];
            var2 = var5.bind(var4)(var2);
            var7 = var2.IncludeStickersInAutocomplete;
            var2 = var7.getSetting;
            var2 = var2.bind(var7)();
            var _closure2_slot13 = var2;
            var12 = _closure1_slot4;
            var10 = var12.useState;
            var7 = _closure1_slot29;
            var7 = var10.bind(var12)(var7);
            var10 = _closure1_slot3;
            var24 = 2;
            var22 = var10.bind(var4)(var7, var24);
            var21 = 0;
            var7 = var22[var21];
            var44 = var7.resultCount;
            var _closure2_slot14 = var44;
            var48 = var7.stickerResults;
            var _closure2_slot15 = var48;
            var28 = var7.nonStickerResults;
            var _closure2_slot16 = var28;
            var35 = var7.hasStickerResults;
            var _closure2_slot17 = var35;
            var34 = var7.hasNonStickerResults;
            var _closure2_slot18 = var34;
            var7 = 1;
            var22 = var22[var7];
            var _closure2_slot19 = var22;
            var22 = var11[var20];
            var27 = var5.bind(var4)(var22);
            var25 = var27.useStateFromStores;
            var22 = _closure1_slot8;
            var23 = new Array(1);
            var23[0] = var22;
            var22 = function() {
                var1 = _closure1_slot8;
                var1 = var1.loadState;
                return var1;
            };
            var38 = var25.bind(var27)(var23, var22);
            var20 = var11[var20];
            var25 = var5.bind(var4)(var20);
            var23 = var25.useStateFromStores;
            var20 = _closure1_slot10;
            var22 = new Array(1);
            var22[0] = var20;
            var20 = function() {
                var1 = _closure1_slot10;
                var1 = var1.loadState;
                return var1;
            };
            var30 = var23.bind(var25)(var22, var20);
            var22 = var12.useContext;
            var20 = 26;
            var20 = var11[var20];
            var20 = var5.bind(var4)(var20);
            var20 = var20.RedesignCompatContext;
            var37 = var22.bind(var12)(var20);
            var _closure2_slot20 = var37;
            var22 = var12.useMemo;
            var20 = new Array(2);
            var20[0] = var17;
            var20[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getAutocompleteOptions;
                var3 = _closure2_slot1;
                var2 = _closure2_slot13;
                var1 = true;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var20 = var22.bind(var12)(var2, var20);
            var _closure2_slot21 = var20;
            var22 = var12.useState;
            var45 = false;
            var47 = '';
            var2 = {'focused': false, 'text': '', 'selectionStart': 0, 'selectionEnd': 0};
            var2 = var22.bind(var12)(var2);
            var2 = var10.bind(var4)(var2, var24);
            var22 = var2[var21];
            var33 = var22.focused;
            var _closure2_slot22 = var33;
            var46 = var22.text;
            var _closure2_slot23 = var46;
            var50 = var22.selectionStart;
            var _closure2_slot24 = var50;
            var49 = var22.selectionEnd;
            var _closure2_slot25 = var49;
            var2 = var2[var7];
            var _closure2_slot26 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var21);
            var2 = var10.bind(var4)(var2, var24);
            var10 = var2[var21];
            var2 = var2[var7];
            var _closure2_slot27 = var2;
            var2 = 28;
            var2 = var11[var2];
            var11 = var5.bind(var4)(var2);
            var5 = var11.getGameMentionsAutocompleteConfig;
            var2 = 'AutocompleteWrapper game search';
            var2 = var5.bind(var11)(var2);
            var _closure2_slot28 = var2;
            var27 = var2.enabled;
            if(!var27) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var5 = var2.combineMentionAutocomplete;
            var27 = !var5;
case 13:
            _closure2_slot29 = var27;
            var39 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 29;
            var5 = var12[var5];
            var11 = var39.bind(var4)(var5);
            var56 = _closure1_slot21;
            var61 = undefined;
            var60 = var46;
            var59 = var49;
            var58 = var16;
            var57 = var27;
            var11 = var61[var11](var60, var59, var58, var57, var56, var55);
            var5 = var11.anchor;
            _closure2_slot30 = var5;
            var22 = var11.beginSearch;
            _closure2_slot31 = var22;
            var23 = _closure1_slot4;
            var51 = var23.useEffect;
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
case 2:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 30;
                        var4 = var7[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.initiateEmojiInteraction;
                        var3 = _closure1_slot23;
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
            var11 = new Array(0);
            var11 = var51.bind(var23)(var25, var11);
            var51 = var23.useMemo;
            var25 = function() {
                var2 = -1;
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = {};
                    var2 = _closure2_slot27;
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
case 12:
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
                                var3 = _closure2_slot26;
                                var1 = undefined;
                                var2 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var1 = arg1;
                                        var4 = var1.focused;
                                        var2 = _closure5_slot0;
                                        if(!(var4 === var2)) { _fun0007_ip = 12; continue _fun0007 }
case 18:
                                        var4 = var1.text;
                                        var2 = _closure5_slot1;
                                        if(!(var4 === var2)) { _fun0007_ip = 12; continue _fun0007 }
case 19:
                                        var4 = var1.selectionStart;
                                        var2 = _closure5_slot2;
                                        if(!(var4 === var2)) { _fun0007_ip = 12; continue _fun0007 }
case 20:
                                        var4 = var1.selectionEnd;
                                        var2 = _closure5_slot3;
                                        if(!(var4 !== var2)) { _fun0007_ip = 21; continue _fun0007 }
case 12:
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
case 21:
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
            var11 = new Array(0);
            var51 = var51.bind(var23)(var25, var11);
            var25 = var23.useImperativeHandle;
            var11 = arg2;
            var11 = var25.bind(var23)(var11, var51);
            var25 = var23.useMemo;
            var11 = new Array(13);
            var11[0] = var50;
            var11[1] = var49;
            var11[2] = var46;
            var11[3] = var19;
            var11[4] = var14;
            var11[5] = var15;
            var11[6] = var43;
            var11[7] = var9;
            var11[8] = var20;
            var11[9] = var38;
            var11[10] = var30;
            var11[11] = var27;
            var11[12] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var27 = _closure2_slot24;
                    var _closure3_slot2 = var27;
                    var2 = _closure2_slot23;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                    var3 = _closure2_slot23;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var2 = var2.length;
                    var26 = 0;
                    if(!(var26 !== var2)) { _fun0008_ip = 22; continue _fun0008 }
case 24:
                    var2 = _closure2_slot8;
                    if(!(var11 == var2)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var4 = {'canMentionEveryone': null, 'canMentionHere': null, 'canMentionChannels': true, 'canMentionUsers': true, 'canMentionRoles': true, 'canMentionAnyGuildUser': false, 'canMentionNonMentionableRoles': false, 'canMentionOtherGlobals': true, 'canMentionGames': true};
                    var2 = _closure2_slot2;
                    var4['canMentionEveryone'] = var2;
                    var4['canMentionHere'] = var2;
                    _fun0008_ip = 27; continue _fun0008;
case 25:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 31;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.getApplicationCommandOptionQueryOptions;
                    var2 = _closure2_slot8;
                    var4 = var3.bind(var5)(var2);
case 27:
                    var2 = _closure2_slot8;
                    var2 = var11 != var2;
                    var18 = undefined;
                    var8 = undefined;
                    if(!var2) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot8;
                    var2 = var2.name;
                    var8 = var3[var2];
case 28:
                    var2 = _closure2_slot9;
                    var2 = var11 != var2;
                    var25 = undefined;
                    var24 = undefined;
                    var23 = undefined;
                    if(!var2) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var2 = _closure2_slot8;
                    var2 = var11 != var2;
                    var25 = undefined;
                    var24 = undefined;
                    var23 = undefined;
                    if(!var2) { _fun0008_ip = 30; continue _fun0008 }
case 32:
                    var2 = var11 != var8;
                    var25 = undefined;
                    var24 = undefined;
                    var23 = undefined;
                    if(!var2) { _fun0008_ip = 30; continue _fun0008 }
case 33:
                    var2 = var8.location;
                    var3 = var11 != var2;
                    var9 = 0;
                    if(!var3) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var9 = var2;
case 34:
                    var2 = var8.length;
                    var5 = var11 != var2;
                    var3 = 0;
                    if(!var5) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var3 = var2;
case 36:
                    var5 = _closure2_slot24;
                    var2 = var9 + var3;
                    var2 = var5 >= var2;
                    var14 = undefined;
                    if(!var2) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var10 = _closure2_slot23;
                    var6 = var10.substring;
                    var5 = var9 + var3;
                    var2 = _closure2_slot24;
                    var14 = var6.bind(var10)(var5, var2);
case 38:
                    var _closure3_slot1 = var14;
                    var2 = _closure2_slot8;
                    var2 = var2.choices;
                    if(!(var11 == var2)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var2 = _closure2_slot8;
                    var2 = var2.autocomplete;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                    var2 = _closure2_slot8;
                    var16 = var2.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 32;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.BOOLEAN;
                    if(!(var2 !== var16)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var16)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.ROLE;
                    if(!(var2 !== var16)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var18)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.USER;
                    if(!(var2 !== var16)) { _fun0008_ip = 47; continue _fun0008 }
case 49:
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
                    if(!(var15 === var16)) { _fun0008_ip = 50; continue _fun0008 }
case 47:
                    var16 = _closure1_slot18;
                    var _closure3_slot0 = var16;
                    var15 = _closure1_slot22;
                    var10 = var15.MENTIONS;
                    var2 = true;
                    var12 = var16;
                    var6 = undefined;
                    var5 = undefined;
                    _fun0008_ip = 50; continue _fun0008;
case 45:
                    var17 = _closure1_slot19;
                    _closure3_slot0 = var17;
                    var15 = _closure1_slot22;
                    var10 = var15.CHANNELS;
                    var15 = _closure2_slot8;
                    var5 = var15.channelTypes;
                    var2 = true;
                    var12 = var17;
                    var6 = undefined;
                    _fun0008_ip = 50; continue _fun0008;
case 43:
                    var16 = '';
                    _closure3_slot0 = var16;
                    var15 = _closure1_slot22;
                    var10 = var15.CHOICES;
                    var6 = _closure1_slot15;
                    var2 = true;
                    var12 = var16;
                    var5 = undefined;
                    _fun0008_ip = 50; continue _fun0008;
case 40:
                    var16 = '';
                    _closure3_slot0 = var16;
                    var13 = _closure1_slot22;
                    var10 = var13.CHOICES;
                    var13 = _closure2_slot8;
                    var6 = var13.choices;
                    var2 = true;
                    var12 = var16;
                    var5 = undefined;
case 50:
                    var25 = var10;
                    var24 = var12;
                    var23 = var14;
                    if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 30:
                    var13 = _closure2_slot29;
                    if(!var13) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var13 = _closure2_slot30;
                    if(!(var11 == var13)) { _fun0008_ip = 54; continue _fun0008 }
case 52:
                    var13 = var11 != var8;
                    var22 = null;
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
                    var22 = var13 + var8;
case 55:
                    var21 = global;
                    var20 = 33;
                    var17 = var11 != var22;
case 61:
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var20];
                    var16 = var15.bind(var18)(var13);
                    var15 = var16.isWhitespaceSeparatingBoundary;
                    var13 = _closure2_slot23;
                    var13 = var15.bind(var16)(var13, var27);
                    var16 = var27;
                    var15 = 0;
                    if(!var17) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var15 = var22;
case 62:
                    if(!(var16 !== var15)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var30 = var25;
                    if(!var13) { _fun0008_ip = 66; continue _fun0008 }
case 64:
                    var19 = _closure2_slot23;
                    var15 = var19.slice;
                    var13 = _closure2_slot25;
                    var19 = var15.bind(var19)(var16, var13);
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var28 = var13[var20];
                    var29 = var15.bind(var18)(var28);
                    var28 = var29.getPrefix;
                    var31 = var28.bind(var29)(var19);
                    _closure3_slot0 = var31;
                    var13 = var13[var20];
                    var15 = var15.bind(var18)(var13);
                    var13 = var15.getQuery;
                    var29 = var13.bind(var15)(var19);
                    _closure3_slot1 = var29;
                    if(!(var11 != var29)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var15 = _closure1_slot12;
                    var13 = var15.test;
                    var28 = var13.bind(var15)(var29);
                    var15 = var25;
                    var19 = var29;
                    var13 = var16;
                    if(var28) { _fun0008_ip = 69; continue _fun0008 }
case 67:
                    var33 = var21.Object;
                    var32 = var33.keys;
                    var28 = _closure2_slot21;
                    var33 = var32.bind(var33)(var28);
                    var32 = var33.find;
                    var28 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure2_slot21;
                            var7 = var1[var4];
                            var1 = _closure1_slot22;
                            var1 = var1.SLASHES;
                            var1 = var4 !== var1;
                            if(!var1) { _fun0009_ip = 10; continue _fun0009 }
case 70:
                            var2 = _closure1_slot22;
                            var2 = var2.SLASHES_DISCOVERY;
                            var1 = var4 !== var2;
case 10:
                            if(var1) { _fun0009_ip = 71; continue _fun0009 }
case 6:
                            var4 = _closure2_slot9;
                            var2 = null;
                            var2 = var2 == var4;
                            if(!var2) { _fun0009_ip = 72; continue _fun0009 }
case 11:
                            var3 = _closure2_slot5;
                            var2 = !var3;
case 72:
                            var1 = var2;
case 71:
                            if(!var1) { _fun0009_ip = 73; continue _fun0009 }
case 4:
                            var2 = _closure3_slot0;
                            var5 = undefined;
                            var2 = var5 !== var2;
                            if(!var2) { _fun0009_ip = 21; continue _fun0009 }
case 74:
                            var4 = _closure3_slot1;
                            var2 = var5 !== var4;
case 21:
                            if(!var2) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                            var6 = var7.matches;
                            var5 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var3 = _closure3_slot2;
                            var2 = var6.bind(var7)(var5, var4, var3);
case 75:
                            var1 = var2;
case 73:
                            return var1;
                        }
                    };
                    var30 = var32.bind(var33)(var28);
                    var24 = var31;
                    var23 = var29;
                    var19 = var23;
                    var13 = var16;
                    var15 = var30;
                    if(!(var11 == var15)) { _fun0008_ip = 69; continue _fun0008 }
case 66:
                    var28 = var16 - 1;
                    _closure3_slot2 = var28;
                    var29 = var23;
                    var16 = 0;
                    if(!var17) { _fun0008_ip = 77; continue _fun0008 }
case 78:
                    var16 = var22;
case 77:
                    var25 = var30;
                    var23 = var29;
                    var27 = var28;
                    var15 = var25;
                    var19 = var23;
                    var13 = var27;
                    if(var13 >= var16) { _fun0008_ip = 61; continue _fun0008 }
case 69:
                    var16 = _closure1_slot22;
                    var17 = var16.SLASHES;
                    var16 = var19;
                    if(!(var15 === var17)) { _fun0008_ip = 79; continue _fun0008 }
case 80:
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var8 = 34;
                    var8 = var20[var8];
                    var18 = var17.bind(var18)(var8);
                    var17 = var18.getTextBeforeFirstOption;
                    var20 = var11 != var19;
                    var8 = '';
                    if(!var20) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                    var8 = var19;
case 81:
                    var8 = var17.bind(var18)(var8);
                    var8 = var8.text;
                    _closure3_slot1 = var8;
                    var16 = var8;
case 79:
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
                    var8 = {};
                    var18 = _closure2_slot23;
                    var17 = var18.slice;
                    var16 = _closure2_slot30;
                    var15 = _closure1_slot21;
                    var15 = var15.length;
                    var16 = var16 + var15;
                    var15 = _closure2_slot25;
                    var16 = var17.bind(var18)(var16, var15);
                    var15 = var16.toLowerCase;
                    var15 = var15.bind(var16)();
                    var8['query'] = var15;
                    var13 = _closure1_slot22;
                    var13 = var13.GAME_MENTIONS;
                    var8['autocompleteType'] = var13;
                    var13 = _closure2_slot30;
                    var8['autocompleteSelectionStart'] = var13;
                    var13 = {};
                    var35 = var13;
                    var34 = var4;
                    var15 = copyDataProperties(var35, var34);
                    var8['queryOptions'] = var13;
                    return var8;
case 51:
                    var8 = var11 != var12;
                    if(!var8) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                    var13 = '';
                    var8 = var13 !== var12;
case 83:
                    if(!var8) { _fun0008_ip = 85; continue _fun0008 }
case 86:
                    var8 = var11 != var14;
case 85:
                    if(!var8) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var11 = var14.startsWith;
                    var8 = var11.bind(var14)(var12);
case 87:
                    var11 = var14;
                    if(!var8) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                    var13 = var14.length;
                    var8 = var12.length;
                    var13 = var13 > var8;
                    var8 = '';
                    if(!var13) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    var13 = var14.substring;
                    var12 = var12.length;
                    var8 = var13.bind(var14)(var12);
case 91:
                    _closure3_slot1 = var8;
                    var11 = var8;
case 89:
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
                            if(var5) { _fun0010_ip = 93; continue _fun0010 }
case 94:
                            var4 = var2;
case 93:
                            var2 = undefined;
                            if(var5) { _fun0010_ip = 95; continue _fun0010 }
case 96:
                            var7 = var6().value;
                            var6 = var3;
                            var6 = var6 === var1;
                            var2 = undefined;
                            var5 = var6;
                            if(var6) { _fun0010_ip = 95; continue _fun0010 }
case 6:
                            var2 = var7;
                            var5 = var6;
case 95:
                            if(var5) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                            var3.return();
case 97:
                            var5 = var2.optionValue;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                            var3 = _closure3_slot3;
                            var2 = var2.optionValue;
                            var3[var4] = var2;
case 99:
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
case 22:
                    var1 = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                    return var1;
                }
            };
            var5 = var25.bind(var23)(var5, var11);
            var25 = var5.autocompleteType;
            _closure2_slot32 = var25;
            var46 = var5.query;
            _closure2_slot33 = var46;
            var11 = var5.queryOptions;
            _closure2_slot34 = var11;
            var30 = var5.autocompleteSelectionStart;
            _closure2_slot35 = var30;
            var5 = var5.showOptionValuesPicker;
            _closure2_slot36 = var5;
            var38 = var23.useCallback;
            var27 = new Array(4);
            var27[0] = var25;
            var27[1] = var46;
            var27[2] = var11;
            var27[3] = var20;
            var11 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot32;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0011_ip = 3; continue _fun0011 }
case 101:
                    var1 = _closure2_slot33;
                    if(!(var4 == var1)) { _fun0011_ip = 102; continue _fun0011 }
case 3:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot29;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    _fun0011_ip = 103; continue _fun0011;
case 102:
                    var4 = _closure2_slot21;
                    var1 = _closure2_slot32;
                    var7 = var4[var1];
                    var6 = var7.queryResults;
                    var5 = _closure2_slot33;
                    var4 = _closure2_slot34;
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
                            if(!(var2 !== var1)) { _fun0012_ip = 8; continue _fun0012 }
case 104:
                            var2 = _closure3_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                            _fun0012_ip = 12; continue _fun0012;
case 8:
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
case 12:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var6.bind(var5)(var3);
                    var3 = _closure2_slot19;
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
case 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var38.bind(var23)(var11, var27);
            _closure2_slot37 = var11;
            var38 = var23.useEffect;
            var27 = new Array(3);
            var27[0] = var25;
            var27[1] = var11;
            var27[2] = var20;
            var20 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot32;
                    var2 = null;
                    var3 = var2 != var3;
                    var5 = null;
                    if(!var3) { _fun0013_ip = 24; continue _fun0013 }
case 18:
                    var3 = _closure2_slot21;
                    var6 = var2 == var3;
                    var3 = undefined;
                    if(var6) { _fun0013_ip = 6; continue _fun0013 }
case 19:
                    var6 = _closure2_slot21;
                    var4 = _closure2_slot32;
                    var4 = var6[var4];
                    var3 = var4.stores;
case 6:
                    var5 = var3;
case 24:
                    if(!(var2 == var5)) { _fun0013_ip = 26; continue _fun0013 }
case 105:
                    var2 = undefined;
                    return var2;
case 26:
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
                        var3 = _closure2_slot37;
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
            var20 = var38.bind(var23)(var20, var27);
            var27 = var23.useEffect;
            var20 = new Array(1);
            var20[0] = var11;
            var11 = function() {
                var3 = _closure2_slot37;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = var27.bind(var23)(var11, var20);
            var27 = var23.useCallback;
            var20 = new Array(2);
            var20[0] = var48;
            var20[1] = var28;
            var11 = function() {
                var1 = {};
                var3 = _closure2_slot15;
                var3 = var3.length;
                var1['numStickerResults'] = var3;
                var4 = _closure2_slot16;
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
            var27 = var27.bind(var23)(var11, var20);
            _closure2_slot38 = var27;
            var20 = var23.useMemo;
            var11 = new Array(4);
            var11[0] = var25;
            var11[1] = var33;
            var11[2] = var8;
            var11[3] = var44;
            var8 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = 0;
                    var3 = var3 > var2;
                    if(var3) { _fun0014_ip = 70; continue _fun0014 }
case 106:
                    var5 = _closure1_slot30;
                    var4 = _closure2_slot32;
                    var2 = undefined;
                    var3 = var5.bind(var2)(var4);
case 70:
                    if(var3) { _fun0014_ip = 105; continue _fun0014 }
case 2:
                    var4 = _closure2_slot32;
                    var2 = _closure1_slot22;
                    var2 = var2.GAME_MENTIONS;
                    var3 = var4 === var2;
case 105:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 35;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.KeyboardTypes;
                    var2 = var2.SYSTEM;
                    var2 = var4 === var2;
                    var1 = _closure2_slot22;
                    if(!var1) { _fun0014_ip = 107; continue _fun0014 }
case 108:
                    var1 = var3;
case 107:
                    if(!var1) { _fun0014_ip = 109; continue _fun0014 }
case 110:
                    var1 = var2;
case 109:
                    return var1;
                }
            };
            var43 = var20.bind(var23)(var8, var11);
            _closure2_slot39 = var43;
            var8 = var23.useRef;
            var8 = var8.bind(var23)(var45);
            _closure2_slot40 = var8;
            var20 = var23.useEffect;
            var11 = new Array(2);
            var11[0] = var25;
            var11[1] = var19;
            var8 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot40;
                    var6 = var1.current;
                    var3 = _closure2_slot40;
                    var7 = _closure1_slot30;
                    var2 = _closure2_slot32;
                    var1 = undefined;
                    var2 = var7.bind(var1)(var2);
                    if(var6) { _fun0015_ip = 111; continue _fun0015 }
case 2:
                    var6 = var2;
                    if(var2) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                    var8 = _closure2_slot9;
                    var7 = null;
                    var6 = var7 != var8;
case 112:
                    var3['current'] = var6;
                    var6 = _closure2_slot40;
                    var6 = var6.current;
                    if(!var6) { _fun0015_ip = 114; continue _fun0015 }
case 72:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 36;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.trackWithMetadata;
                    var5 = _closure1_slot13;
                    var6 = var5.APPLICATION_COMMAND_TOP_OF_FUNNEL;
                    var5 = {};
                    var9 = 'slash_ui';
                    var5['location'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    _fun0015_ip = 114; continue _fun0015;
case 111:
                    if(var2) { _fun0015_ip = 115; continue _fun0015 }
case 116:
                    var5 = _closure2_slot9;
                    var4 = null;
                    var2 = var4 != var5;
case 115:
                    var3['current'] = var2;
case 114:
                    return var1;
                }
            };
            var8 = var20.bind(var23)(var8, var11);
            var11 = var23.useRef;
            var8 = null;
            var11 = var11.bind(var23)(var8);
            _closure2_slot41 = var11;
            var20 = var23.useEffect;
            var11 = new Array(7);
            var11[0] = var3;
            var11[1] = var19;
            var11[2] = var43;
            var11[3] = var25;
            var11[4] = var17;
            var11[5] = var27;
            var3 = var2.enabled;
            var11[6] = var3;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot39;
                    if(var1) { _fun0016_ip = 18; continue _fun0016 }
case 117:
                    var3 = _closure2_slot9;
                    var2 = null;
                    var1 = var2 != var3;
case 18:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var1);
case 118:
                    if(var1) { _fun0016_ip = 120; continue _fun0016 }
case 8:
                    var1 = _closure2_slot41;
                    var1['current'] = var2;
                    _fun0016_ip = 121; continue _fun0016;
case 120:
                    var1 = _closure2_slot1;
                    var5 = var1.id;
                    var1 = _closure2_slot32;
                    var1 = var2 != var1;
                    var4 = '';
                    var3 = var4;
                    if(!var1) { _fun0016_ip = 122; continue _fun0016 }
case 123:
                    var3 = _closure2_slot32;
case 122:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = ':';
                    var2 = var2.bind(var4)(var5, var1, var3);
                    var1 = _closure2_slot41;
                    var1 = var1.current;
                    if(!(var1 !== var2)) { _fun0016_ip = 121; continue _fun0016 }
case 111:
                    var1 = _closure2_slot41;
                    var1['current'] = var2;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var1 = var3[var1];
                    var7 = undefined;
                    var5 = var2.bind(var7)(var1);
                    var4 = var5.iOSTrackAutocompleteOpen;
                    var3 = _closure2_slot32;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var9 = _closure2_slot38;
                    var11 = var9.bind(var7)();
                    var12 = var1;
                    var9 = copyDataProperties(var12, var11);
                    var9 = _closure2_slot32;
                    var8 = _closure1_slot22;
                    var8 = var8.MENTIONS;
                    if(!(var9 === var8)) { _fun0016_ip = 124; continue _fun0016 }
case 125:
                    var6 = _closure2_slot28;
                    var7 = var6.enabled;
case 124:
                    var6 = 'gameMentionsAvailable';
                    var1[5] = var7;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var20.bind(var23)(var3, var11);
            var3 = 18;
            var3 = var12[var3];
            var11 = var39.bind(var4)(var3);
            var3 = {};
            var49 = true;
            var3['ignoreKeyboard'] = var49;
            var11 = var11.bind(var4)(var3);
            var3 = 19;
            var3 = var12[var3];
            var20 = var39.bind(var4)(var3);
            var3 = {};
            var3['includeKeyboardHeight'] = var49;
            var3 = var20.bind(var4)(var3);
            var3 = var3.insets;
            var20 = var11.height;
            var11 = var3.top;
            var11 = var20 - var11;
            var3 = var3.bottom;
            var11 = var11 - var3;
            var20 = _closure1_slot0;
            var3 = 20;
            var3 = var12[var3];
            var3 = var20.bind(var4)(var3);
            var3 = var3.NAV_BAR_HEIGHT;
            var3 = var11 - var3;
            var3 = var3 - var10;
            _closure2_slot42 = var3;
            var11 = var23.useMemo;
            var10 = new Array(5);
            var10[0] = var25;
            var33 = var48.length;
            var10[1] = var33;
            var10[2] = var3;
            var10[3] = var41;
            var10[4] = var6;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var2 = 24;
                    var6 = var3 + var2;
                    var7 = 200;
                    var3 = var7 + var6;
                    var2 = _closure2_slot15;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0017_ip = 25; continue _fun0017 }
case 126:
                    var8 = _closure2_slot32;
                    var4 = _closure1_slot22;
                    var5 = var4.EMOJIS_AND_STICKERS;
                    var4 = var3;
                    if(!(var8 !== var5)) { _fun0017_ip = 99; continue _fun0017 }
case 98:
                    var8 = _closure2_slot32;
                    var2 = _closure1_slot22;
                    var5 = var2.GAME_MENTIONS;
                    var2 = var7;
                    if(!(var8 === var5)) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                    var5 = _closure2_slot12;
                    var2 = var7 + var5;
case 127:
                    var4 = var2;
case 99:
                    _fun0017_ip = 129; continue _fun0017;
case 25:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.AUTOCOMPLETE_STICKER_NODE_SIZE;
                    var3 = var3 + var6;
                    var5 = var3 + var5;
                    var3 = _closure1_slot27;
                    var2 = 12;
                    var2 = var5 + var2;
                    var4 = var2 + var3;
case 129:
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.min;
                    var1 = _closure2_slot42;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var3 = var11.bind(var23)(var3, var10);
            _closure2_slot43 = var3;
            var10 = var23.useState;
            var11 = var10.bind(var23)(var8);
            var10 = _closure1_slot3;
            var10 = var10.bind(var4)(var11, var24);
            var38 = var10[var21];
            _closure2_slot44 = var38;
            var33 = var10[var7];
            _closure2_slot45 = var33;
            var11 = var23.useMemo;
            var10 = new Array(12);
            var10[0] = var44;
            var10[1] = var25;
            var10[2] = var43;
            var10[3] = var35;
            var10[4] = var34;
            var43 = var28.length;
            var10[5] = var43;
            var10[6] = var3;
            var10[7] = var38;
            var10[8] = var37;
            var10[9] = var36;
            var10[10] = var41;
            var10[11] = var6;
            var6 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot32;
                    var2 = _closure1_slot22;
                    var2 = var2.EMOJIS_AND_STICKERS;
                    if(!(var4 !== var2)) { _fun0018_ip = 130; continue _fun0018 }
case 93:
                    var4 = _closure1_slot30;
                    var2 = _closure2_slot32;
                    var9 = undefined;
                    var2 = var4.bind(var9)(var2);
                    if(var2) { _fun0018_ip = 131; continue _fun0018 }
case 132:
                    var4 = _closure2_slot32;
                    var2 = null;
                    var2 = var2 != var4;
                    var5 = 0;
                    if(!var2) { _fun0018_ip = 133; continue _fun0018 }
case 97:
                    var8 = _closure1_slot31;
                    var14 = _closure2_slot14;
                    var13 = _closure2_slot32;
                    var12 = _closure2_slot20;
                    var11 = _closure2_slot10;
                    var15 = undefined;
                    var4 = var15[var8](var14, var13, var12, var11, var10);
                    var6 = _closure2_slot32;
                    var2 = _closure1_slot22;
                    var2 = var2.GAME_MENTIONS;
                    var5 = var4;
                    if(!(var6 === var2)) { _fun0018_ip = 133; continue _fun0018 }
case 107:
                    var2 = _closure2_slot12;
                    var5 = var4 + var2;
                    _fun0018_ip = 133; continue _fun0018;
case 131:
                    var4 = _closure2_slot44;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 0;
                    if(!var4) { _fun0018_ip = 134; continue _fun0018 }
case 135:
                    var2 = _closure2_slot44;
case 134:
                    var5 = var2;
                    _fun0018_ip = 133; continue _fun0018;
case 130:
                    var8 = _closure1_slot31;
                    var2 = _closure2_slot16;
                    var14 = var2.length;
                    var13 = _closure2_slot32;
                    var12 = _closure2_slot20;
                    var11 = _closure2_slot10;
                    var9 = undefined;
                    var15 = undefined;
                    var4 = var15[var8](var14, var13, var12, var11, var10);
                    var2 = _closure2_slot18;
                    var6 = var4;
                    if(!var2) { _fun0018_ip = 125; continue _fun0018 }
case 136:
                    var7 = _closure2_slot11;
                    var2 = 24;
                    var2 = var7 + var2;
                    var6 = var4 + var2;
case 125:
                    var2 = _closure2_slot17;
                    var4 = var6;
                    if(!var2) { _fun0018_ip = 39; continue _fun0018 }
case 137:
                    var7 = _closure2_slot11;
                    var2 = 24;
                    var7 = var7 + var2;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 17;
                    var2 = var10[var2];
                    var2 = var8.bind(var9)(var2);
                    var2 = var2.AUTOCOMPLETE_STICKER_NODE_SIZE;
                    var7 = var7 + var2;
                    var2 = 12;
                    var2 = var7 + var2;
                    var4 = var6 + var2;
case 39:
                    var6 = _closure2_slot17;
                    if(!var6) { _fun0018_ip = 138; continue _fun0018 }
case 139:
                    var6 = _closure2_slot18;
case 138:
                    var2 = var4;
                    if(!var6) { _fun0018_ip = 140; continue _fun0018 }
case 141:
                    var3 = _closure1_slot27;
                    var2 = var4 + var3;
case 140:
                    var5 = var2;
case 133:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.min;
                    var6 = _closure2_slot39;
                    var2 = 0;
                    if(!var6) { _fun0018_ip = 142; continue _fun0018 }
case 143:
                    var2 = var5;
case 142:
                    var1 = _closure2_slot43;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var23 = var11.bind(var23)(var6, var10);
            var6 = 38;
            var6 = var12[var6];
            var11 = var20.bind(var4)(var6);
            var10 = var11.useMobileVisualRefreshConfig;
            var6 = {};
            var36 = 'AutocompleteWrapper';
            var6['location'] = var36;
            var6 = var10.bind(var11)(var6);
            var10 = var6.chatInputFloating;
            _closure2_slot46 = var10;
            var37 = var23 > var21;
            _closure2_slot47 = var37;
            var6 = var12[var13];
            var36 = var20.bind(var4)(var6);
            var11 = var36.useToken;
            var6 = var12[var42];
            var6 = var39.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_BORDER_RADIUS;
            var38 = var11.bind(var36)(var6);
            var6 = var12[var13];
            var36 = var20.bind(var4)(var6);
            var11 = var36.useToken;
            var6 = var12[var42];
            var6 = var39.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH;
            var11 = var11.bind(var36)(var6);
            var6 = var12[var13];
            var43 = var20.bind(var4)(var6);
            var36 = var43.useToken;
            var6 = var12[var42];
            var6 = var39.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH;
            var6 = var36.bind(var43)(var6);
            var36 = var12[var13];
            var44 = var20.bind(var4)(var36);
            var43 = var44.useToken;
            var36 = var12[var42];
            var36 = var39.bind(var4)(var36);
            var36 = var36.modules;
            var36 = var36.mobile;
            var36 = var36.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL;
            var36 = var43.bind(var44)(var36);
            var13 = var12[var13];
            var20 = var20.bind(var4)(var13);
            var13 = var20.useToken;
            var12 = var12[var42];
            var12 = var39.bind(var4)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM;
            var12 = var13.bind(var20)(var12);
            _closure2_slot48 = var12;
            var20 = _closure1_slot28;
            var13 = 0;
            if(!var37) { _fun0004_ip = 144; continue _fun0004 }
case 145:
            var13 = var11;
case 144:
            var11 = 0;
            if(!var37) { _fun0004_ip = 146; continue _fun0004 }
case 147:
            var11 = var6;
case 146:
            if(var37) { _fun0004_ip = 148; continue _fun0004 }
case 149:
            var39 = var8 != var19;
            var6 = 0;
            if(!var39) { _fun0004_ip = 150; continue _fun0004 }
case 151:
            var6 = 0;
            if(var9) { _fun0004_ip = 150; continue _fun0004 }
case 148:
            var6 = var12;
case 150:
            var61 = undefined;
            var60 = var38;
            var59 = var13;
            var58 = var11;
            var57 = var36;
            var56 = var6;
            var6 = var61[var20](var60, var59, var58, var57, var56, var55);
            _closure2_slot49 = var6;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var20 = 39;
            var20 = var11[var20];
            var36 = var13.bind(var4)(var20);
            var20 = var36.useIsScreenReaderEnabled;
            var38 = var20.bind(var36)();
            _closure2_slot50 = var38;
            var36 = 15;
            var11 = var11[var36];
            var13 = var13.bind(var4)(var11);
            var11 = var13.isAndroid;
            var11 = var11.bind(var13)();
            if(var11) { _fun0004_ip = 152; continue _fun0004 }
case 153:
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var36];
            var20 = var20.bind(var4)(var13);
            var13 = var20.isIOS;
            var13 = var13.bind(var20)();
            if(!var13) { _fun0004_ip = 154; continue _fun0004 }
case 155:
            var20 = var38;
            if(var20) { _fun0004_ip = 156; continue _fun0004 }
case 157:
            var20 = var10;
case 156:
            var13 = var20;
case 154:
            var11 = var13;
case 152:
            var13 = _closure1_slot4;
            var36 = var13.useMemo;
            var20 = new Array(3);
            var20[0] = var38;
            var20[1] = var10;
            var10 = var6.autocompletePositionRelative;
            var20[2] = var10;
            var10 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isIOS;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if(!var2) { _fun0019_ip = 158; continue _fun0019 }
case 159:
                    var3 = _closure2_slot50;
                    if(var3) { _fun0019_ip = 120; continue _fun0019 }
case 160:
                    var3 = _closure2_slot46;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 158; continue _fun0019 }
case 120:
                    var2 = _closure2_slot49;
                    var1 = var2.autocompletePositionRelative;
case 158:
                    return var1;
                }
            };
            var10 = var36.bind(var13)(var10, var20);
            var36 = var13.useMemo;
            var20 = new Array(2);
            var20[0] = var37;
            var20[1] = var12;
            var12 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = _closure2_slot47;
                    var1 = undefined;
                    if(!var2) { _fun0020_ip = 104; continue _fun0020 }
case 5:
                    var2 = {};
                    var3 = _closure2_slot48;
                    var2['marginTop'] = var3;
                    var1 = var2;
case 104:
                    return var1;
                }
            };
            var12 = var36.bind(var13)(var12, var20);
            var36 = _closure1_slot1;
            var37 = _closure1_slot2;
            var20 = 40;
            var20 = var37[var20];
            var20 = var36.bind(var4)(var20);
            var20 = var20.bind(var4)(var23, var26);
            var26 = var13.useCallback;
            var23 = new Array(4);
            var23[0] = var31;
            var23[1] = var22;
            var23[2] = var17;
            var23[3] = var16;
            var22 = function(arg1, arg2, arg3) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var5 = var1.type;
                    var4 = _closure1_slot11;
                    var4 = var4.EMOJI_PREMIUM_UPSELL;
                    if(!(var5 === var4)) { _fun0021_ip = 161; continue _fun0021 }
case 162:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 41;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.handleShowUpsellAlert;
                    var4 = {};
                    var7 = _closure1_slot14;
                    var7 = var7.EMOJI_AUTOCOMPLETE;
                    var4['initialUpsellKey'] = var7;
                    var7 = _closure2_slot0;
                    var4['analyticsLocations'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0021_ip = 163; continue _fun0021;
case 161:
                    var5 = var1.type;
                    var4 = _closure1_slot11;
                    var4 = var4.GLOBAL;
                    if(!(var5 === var4)) { _fun0021_ip = 164; continue _fun0021 }
case 165:
                    var5 = var1.inlineAutocompleteType;
                    var4 = 'gameMentionInput';
                    if(!(var4 !== var5)) { _fun0021_ip = 166; continue _fun0021 }
case 164:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 33;
                    var4 = var5[var4];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var4);
                    var7 = var8.getAutocompleteResultText;
                    var6 = _closure2_slot1;
                    var10 = var7.bind(var8)(var1, var6);
                    var6 = _closure2_slot6;
                    var7 = var6.current;
                    var6 = var7.getApplicationCommandManager;
                    var11 = var6.bind(var7)();
                    var7 = var1.type;
                    var6 = _closure1_slot11;
                    var6 = var6.GAME_MENTION;
                    var9 = undefined;
                    if(!(var7 === var6)) { _fun0021_ip = 167; continue _fun0021 }
case 168:
                    var6 = null;
                    if(!(var6 != var11)) { _fun0021_ip = 169; continue _fun0021 }
case 124:
                    var8 = var11.addGameMention;
                    var7 = var1.game;
                    var7 = var8.bind(var11)(var7);
case 169:
                    var7 = var6 == var11;
                    var8 = undefined;
                    if(var7) { _fun0021_ip = 170; continue _fun0021 }
case 171:
                    var12 = var11.buildGameMentionNode;
                    var7 = var1.game;
                    var8 = var12.bind(var11)(var7);
case 170:
                    var7 = var6 != var8;
                    var6 = undefined;
                    if(!var7) { _fun0021_ip = 172; continue _fun0021 }
case 173:
                    var7 = new Array(1);
                    var7[0] = var8;
                    var6 = var7;
case 172:
                    var9 = var6;
case 167:
                    var6 = null;
                    var6 = var6 == var11;
                    var5 = undefined;
                    if(var6) { _fun0021_ip = 174; continue _fun0021 }
case 175:
                    var8 = var11.setAutoCompleteResult;
                    var6 = _closure2_slot1;
                    var16 = var6.id;
                    var14 = arg3;
                    var17 = var11;
                    var15 = var10;
                    var13 = var1;
                    var5 = var17[var8](var16, var15, var14, var13, var12);
case 174:
                    if(var5) { _fun0021_ip = 163; continue _fun0021 }
case 176:
                    var11 = var1.type;
                    var5 = _closure1_slot11;
                    var6 = var5.STICKER;
                    var7 = _closure2_slot6;
                    var8 = var7.current;
                    var7 = var8.insertText;
                    var14 = var11 !== var6;
                    var17 = var8;
                    var16 = var10;
                    var15 = var3;
                    var13 = var9;
                    var6 = var17[var7](var16, var15, var14, var13, var12);
                    var6 = var1.type;
                    var5 = var5.STICKER;
                    if(!(var6 === var5)) { _fun0021_ip = 163; continue _fun0021 }
case 177:
                    var4 = _closure2_slot6;
                    var5 = var4.current;
                    var4 = var5.handleSelectSticker;
                    var1 = var1.sticker;
                    var1 = var4.bind(var5)(var1, var3);
case 163:
                    var1 = undefined;
                    return var1;
case 166:
                    var4 = _closure2_slot6;
                    var6 = var4.current;
                    var5 = var6.insertText;
                    var4 = _closure1_slot21;
                    var2 = false;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var2 = _closure2_slot31;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var13)(var22, var23);
            _closure2_slot51 = var26;
            var23 = var13.useCallback;
            var22 = new Array(3);
            var22[0] = var16;
            var22[1] = var14;
            var22[2] = var17;
            var16 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = arg1;
                    var1 = _closure2_slot6;
                    var3 = var1.current;
                    var1 = var3.getApplicationCommandManager;
                    var6 = var1.bind(var3)();
                    var7 = var2.type;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 32;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var8.bind(var1)(var4);
                    var4 = var4.ApplicationCommandOptionType;
                    var4 = var4.ATTACHMENT;
                    if(!(var7 !== var4)) { _fun0022_ip = 178; continue _fun0022 }
case 72:
                    var4 = null;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0022_ip = 179; continue _fun0022 }
case 180:
                    var8 = var6.props;
                    var8 = var8.text;
                    var7 = var8.length;
case 179:
                    if(!(var4 != var6)) { _fun0022_ip = 181; continue _fun0022 }
case 21:
                    var4 = var6.insertOrJumpCommandOption;
                    var4 = var4.bind(var6)(var2, var7);
                    _fun0022_ip = 181; continue _fun0022;
case 178:
                    var7 = _closure2_slot7;
                    var4 = var2.name;
                    var4 = var7[var4];
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var7 = var4.lastValidationResult;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0022_ip = 182; continue _fun0022 }
case 29:
                    var7 = var7.success;
                    if(var7) { _fun0022_ip = 183; continue _fun0022 }
case 182:
                    if(!(var4 != var6)) { _fun0022_ip = 181; continue _fun0022 }
case 184:
                    var4 = var6.insertOrJumpCommandOption;
                    var4 = var4.bind(var6)(var2);
                    _fun0022_ip = 181; continue _fun0022;
case 183:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 42;
                    var3 = var7[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openCommandAttachmentPreview;
                    var2 = var2.name;
                    var2 = var3.bind(var4)(var6, var5, var2);
case 181:
                    return var1;
                }
            };
            var16 = var23.bind(var13)(var16, var22);
            var23 = var13.useCallback;
            var22 = new Array(6);
            var22[0] = var30;
            var22[1] = var25;
            var22[2] = var27;
            var22[3] = var17;
            var22[4] = var26;
            var22[5] = var5;
            var5 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var5 = arg1;
                    var2 = var5.type;
                    var1 = _closure1_slot11;
                    var1 = var1.GLOBAL;
                    if(!(var2 === var1)) { _fun0023_ip = 118; continue _fun0023 }
case 104:
                    var2 = var5.inlineAutocompleteType;
                    var1 = 'gameMentionInput';
                    if(!(var1 !== var2)) { _fun0023_ip = 10; continue _fun0023 }
case 118:
                    var6 = var5.type;
                    _fun0023_ip = 105; continue _fun0023;
case 10:
                    var1 = _closure1_slot11;
                    var6 = var1.GAME_MENTION;
case 105:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.iOSTrackAutocompleteSelect;
                    var7 = _closure2_slot32;
                    var4 = _closure2_slot1;
                    var3 = {};
                    var3['selectionType'] = var6;
                    var13 = var5.type;
                    var6 = _closure1_slot11;
                    var12 = var6.STICKER;
                    var6 = null;
                    var11 = null;
                    if(!(var13 === var12)) { _fun0023_ip = 185; continue _fun0023 }
case 111:
                    var12 = var5.sticker;
                    var11 = var12.id;
case 185:
                    var3['stickerId'] = var11;
                    var12 = var5.type;
                    var10 = _closure1_slot11;
                    var11 = var10.GAME_MENTION;
                    var10 = null;
                    if(!(var12 === var11)) { _fun0023_ip = 183; continue _fun0023 }
case 186:
                    var11 = var5.game;
                    var10 = var11.id;
case 183:
                    var3['gameId'] = var10;
                    var10 = _closure2_slot38;
                    var15 = var10.bind(var1)();
                    var16 = var3;
                    var10 = copyDataProperties(var16, var15);
                    var3 = var8.bind(var9)(var7, var4, var3);
                    var4 = _closure2_slot51;
                    var3 = _closure2_slot35;
                    var6 = var6 != var3;
                    var3 = 0;
                    if(!var6) { _fun0023_ip = 187; continue _fun0023 }
case 188:
                    var3 = _closure2_slot35;
case 187:
                    var2 = _closure2_slot36;
                    var2 = var4.bind(var1)(var5, var3, var2);
                    return var1;
                }
            };
            var22 = var23.bind(var13)(var5, var22);
            _closure2_slot52 = var22;
            var5 = var13.useState;
            var23 = var5.bind(var13)(var8);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var23, var24);
            var21 = var5[var21];
            _closure2_slot53 = var21;
            var5 = var5[var7];
            _closure2_slot54 = var5;
            var7 = var13.useCallback;
            var5 = new Array(7);
            var5[0] = var25;
            var5[1] = var22;
            var5[2] = var21;
            var5[3] = var17;
            var5[4] = var19;
            var2 = var2.showNewTag;
            var5[5] = var2;
            var5[6] = var6;
            var2 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var3 = var6.type;
                    var2 = _closure1_slot11;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0024_ip = 189; continue _fun0024 }
case 159:
                    var2 = _closure1_slot11;
                    var2 = var2.GLOBAL;
                    if(!(var2 !== var3)) { _fun0024_ip = 190; continue _fun0024 }
case 95:
                    var2 = _closure1_slot11;
                    var2 = var2.ROLE;
                    if(!(var2 !== var3)) { _fun0024_ip = 191; continue _fun0024 }
case 71:
                    var2 = _closure1_slot11;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var3)) { _fun0024_ip = 192; continue _fun0024 }
case 193:
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI;
                    if(!(var2 !== var3)) { _fun0024_ip = 194; continue _fun0024 }
case 195:
                    var2 = _closure1_slot11;
                    var2 = var2.EMOJI_PREMIUM_UPSELL;
                    if(!(var2 !== var3)) { _fun0024_ip = 196; continue _fun0024 }
case 197:
                    var2 = _closure1_slot11;
                    var2 = var2.CHOICE;
                    if(!(var2 !== var3)) { _fun0024_ip = 198; continue _fun0024 }
case 199:
                    var2 = _closure1_slot11;
                    var2 = var2.CHOICE_LOADING;
                    if(!(var2 !== var3)) { _fun0024_ip = 200; continue _fun0024 }
case 201:
                    var2 = _closure1_slot11;
                    var2 = var2.STICKER;
                    if(!(var2 !== var3)) { _fun0024_ip = 202; continue _fun0024 }
case 203:
                    var2 = _closure1_slot11;
                    var2 = var2.GAME_MENTION;
                    if(!(var2 !== var3)) { _fun0024_ip = 204; continue _fun0024 }
case 205:
                    var2 = _closure1_slot11;
                    var2 = var2.LABEL;
                    if(!(var2 !== var3)) { _fun0024_ip = 206; continue _fun0024 }
case 207:
                    var2 = null;
                    return var2;
case 206:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Label;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 204:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Game;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 202:
                    var3 = _closure2_slot53;
                    var2 = var6.sticker;
                    var2 = var2.id;
                    var12 = var3 === var2;
                    var8 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var7 = undefined;
                    var2 = var3.bind(var7)(var2);
                    var4 = var2.Sticker;
                    var3 = {};
                    var16 = var3;
                    var15 = var6;
                    var2 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 'onPress';
                    var3[1] = var9;
                    var9 = function onLongPress() {
                        var3 = _closure2_slot54;
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
case 200:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ChoiceLoading;
                    var2 = {};
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 198:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Choice;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 196:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.EmojiPremiumUpsell;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 194:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Emoji;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 192:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Channel;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 191:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Role;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var10 = _closure2_slot32;
                    var9 = _closure1_slot22;
                    var9 = var9.MENTIONS;
                    var9 = var10 === var9;
                    if(!var9) { _fun0024_ip = 208; continue _fun0024 }
case 209:
                    var10 = _closure2_slot9;
                    var8 = null;
                    var9 = var8 == var10;
case 208:
                    var8 = 'showDescription';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 190:
                    var7 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Global;
                    var2 = {};
                    var16 = var2;
                    var15 = var6;
                    var8 = copyDataProperties(var16, var15);
                    var9 = function onPress() {
                        var3 = _closure2_slot52;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[7] = var9;
                    var10 = var6.inlineAutocompleteType;
                    var8 = 'gameMentionInput';
                    var9 = undefined;
                    if(!(var8 === var10)) { _fun0024_ip = 210; continue _fun0024 }
case 211:
                    var8 = _closure2_slot28;
                    var8 = var8.showNewTag;
                    var9 = undefined;
                    if(!var8) { _fun0024_ip = 210; continue _fun0024 }
case 212:
                    var11 = _closure1_slot24;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 43;
                    var8 = var13[var8];
                    var8 = var10.bind(var4)(var8);
                    var10 = var8.NewTag;
                    var8 = {'containerStyle': null, 'variant': 'text-xs/bold', 'color': 'badge-text-brand'};
                    var12 = _closure2_slot49;
                    var12 = var12.newTag;
                    var8['containerStyle'] = var12;
                    var9 = var11.bind(var4)(var10, var8);
case 210:
                    var8 = 'badge';
                    var2[7] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
case 189:
                    var4 = _closure1_slot24;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.User;
                    var1 = {};
                    var16 = var1;
                    var15 = var6;
                    var6 = copyDataProperties(var16, var15);
                    var6 = _closure2_slot1;
                    var7 = var6.guild_id;
                    var6 = 'guildId';
                    var1[5] = var7;
                    var6 = function onPress() {
                        var3 = _closure2_slot52;
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
            var27 = var7.bind(var13)(var2, var5);
            var2 = var6.autocomplete;
            var30 = new Array(2);
            var30[0] = var2;
            var2 = {};
            var2['maxHeight'] = var3;
            var30[1] = var2;
            var5 = _closure1_slot26;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var6.autocompleteWrapper;
            var7 = new Array(3);
            var7[0] = var13;
            var11 = !var11;
            if(!var11) { _fun0004_ip = 213; continue _fun0004 }
case 214:
            var11 = var6.autocompleteWrapperAbsolute;
case 213:
            var7[1] = var11;
            var7[2] = var10;
            var2['style'] = var7;
            var11 = _closure1_slot24;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 44;
            var7 = var13[var7];
            var7 = var10.bind(var4)(var7);
            var10 = var7.View;
            var7 = {};
            var21 = var6.autocompleteContainer;
            var13 = new Array(2);
            var13[0] = var21;
            var13[1] = var20;
            var7['style'] = var13;
            var13 = var8 != var25;
            if(!var13) { _fun0004_ip = 215; continue _fun0004 }
case 216:
            var22 = _closure1_slot26;
            var21 = _closure1_slot25;
            var20 = {};
            var23 = _closure1_slot22;
            var23 = var23.SLASHES_DISCOVERY;
            var24 = var25 === var23;
            if(!var24) { _fun0004_ip = 217; continue _fun0004 }
case 218:
            var31 = _closure1_slot24;
            var26 = _closure1_slot1;
            var36 = _closure1_slot2;
            var23 = 45;
            var23 = var36[var23];
            var26 = var26.bind(var4)(var23);
            var23 = {};
            var23['channel'] = var17;
            var36 = function onPressSlashItem(arg1, arg2, arg3) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure2_slot51;
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
                    var1 = 46;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ApplicationCommandTriggerLocations;
                    var2 = var2.DISCOVERY;
                    var3['location'] = var2;
                    var6 = _closure2_slot35;
                    var2 = null;
                    var6 = var2 != var6;
                    var2 = 0;
                    if(!var6) { _fun0025_ip = 219; continue _fun0025 }
case 220:
                    var2 = _closure2_slot35;
case 219:
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var23['onPressSlashItem'] = var36;
            var23['onHeightChange'] = var33;
            var23['canOnlyUseTextCommands'] = var32;
            var24 = var31.bind(var4)(var26, var23);
case 217:
            var23 = new Array(5);
            var23[0] = var24;
            var24 = _closure1_slot22;
            var24 = var24.SLASHES;
            var24 = var25 === var24;
            if(!var24) { _fun0004_ip = 221; continue _fun0004 }
case 222:
            var32 = _closure1_slot24;
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var26 = 47;
            var26 = var33[var26];
            var31 = var31.bind(var4)(var26);
            var26 = {};
            var26['channel'] = var17;
            var36 = var8 != var46;
            var33 = var47;
            if(!var36) { _fun0004_ip = 223; continue _fun0004 }
case 224:
            var33 = var46;
case 223:
            var26['query'] = var33;
            var33 = function onPressCommandItem(arg1, arg2) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var4 = _closure2_slot51;
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
                    var1 = 46;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ApplicationCommandTriggerLocations;
                    var2 = var2.DISCOVERY;
                    var3['location'] = var2;
                    var2 = _closure2_slot33;
                    var3['query'] = var2;
                    var6 = _closure2_slot35;
                    var2 = null;
                    var6 = var2 != var6;
                    var2 = 0;
                    if(!var6) { _fun0026_ip = 195; continue _fun0026 }
case 76:
                    var2 = _closure2_slot35;
case 195:
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var26['onPressCommandItem'] = var33;
            var26['style'] = var30;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 33;
            var38 = var37[var33];
            var38 = var36.bind(var4)(var38);
            var38 = var38.getItemSeparator;
            var26['ItemSeparatorComponent'] = var38;
            var33 = var37[var33];
            var33 = var36.bind(var4)(var33);
            var33 = var33.getItemLayout;
            var26['getItemLayout'] = var33;
            var33 = function onCommandsChange(arg1) {
                var3 = _closure2_slot45;
                var7 = _closure1_slot31;
                var10 = _closure2_slot32;
                var9 = _closure2_slot20;
                var8 = _closure2_slot10;
                var1 = undefined;
                var11 = arg1;
                var12 = undefined;
                var2 = var12[var7](var11, var10, var9, var8, var7);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var26['onCommandsChange'] = var33;
            var24 = var32.bind(var4)(var31, var26);
case 221:
            var23[1] = var24;
            var24 = _closure1_slot22;
            var24 = var24.EMOJIS_AND_STICKERS;
            var24 = var25 === var24;
            if(!var24) { _fun0004_ip = 225; continue _fun0004 }
case 226:
            var32 = _closure1_slot26;
            var31 = _closure1_slot25;
            var26 = {};
            var36 = var35;
            if(!var35) { _fun0004_ip = 227; continue _fun0004 }
case 228:
            var38 = _closure1_slot26;
            var37 = _closure1_slot25;
            var33 = {};
            var44 = _closure1_slot24;
            var42 = _closure1_slot5;
            var39 = {};
            var50 = var6.sectionTitle;
            var43 = new Array(2);
            var43[0] = var50;
            var50 = {};
            var50['height'] = var41;
            var43[1] = var50;
            var39['style'] = var43;
            var52 = _closure1_slot0;
            var55 = _closure1_slot2;
            var43 = 48;
            var43 = var55[var43];
            var43 = var52.bind(var4)(var43);
            var50 = var43.Text;
            var43 = {};
            var43['variant'] = var40;
            var51 = 49;
            var53 = var55[var51];
            var53 = var52.bind(var4)(var53);
            var54 = var53.intl;
            var53 = var54.format;
            var51 = var55[var51];
            var51 = var52.bind(var4)(var51);
            var51 = var51.t;
            var52 = var51.uferGG;
            var51 = {};
            var51['prefix'] = var46;
            var51 = var53.bind(var54)(var52, var51);
            var43['children'] = var51;
            var43 = var44.bind(var4)(var50, var43);
            var39['children'] = var43;
            var42 = var44.bind(var4)(var42, var39);
            var39 = new Array(2);
            var39[0] = var42;
            var43 = _closure1_slot6;
            var42 = {};
            var42['horizontal'] = var49;
            var49 = {};
            var60 = var49;
            var59 = var30;
            var50 = copyDataProperties(var60, var59);
            var59 = var6.stickersAutocompleteList;
            var60 = var49;
            var50 = copyDataProperties(var60, var59);
            var42['style'] = var49;
            var49 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.sticker;
                var1 = var1.id;
                return var1;
            };
            var42['keyExtractor'] = var49;
            var42['data'] = var48;
            var42['renderItem'] = var27;
            var42['showsHorizontalScrollIndicator'] = var45;
            var45 = _closure1_slot32;
            var42['getItemLayout'] = var45;
            var45 = {};
            var48 = 12;
            var45['right'] = var48;
            var42['contentInset'] = var45;
            var42 = var44.bind(var4)(var43, var42);
            var39[1] = var42;
            var33['children'] = var39;
            var36 = var38.bind(var4)(var37, var33);
case 227:
            var33 = new Array(3);
            var33[0] = var36;
            if(!var35) { _fun0004_ip = 229; continue _fun0004 }
case 230:
            var35 = var34;
case 229:
            if(!var35) { _fun0004_ip = 231; continue _fun0004 }
case 232:
            var38 = _closure1_slot24;
            var37 = _closure1_slot1;
            var39 = _closure1_slot2;
            var36 = 50;
            var36 = var39[var36];
            var37 = var37.bind(var4)(var36);
            var36 = {};
            var39 = var6.sectionDivider;
            var36['style'] = var39;
            var35 = var38.bind(var4)(var37, var36);
case 231:
            var33[1] = var35;
            if(!var34) { _fun0004_ip = 233; continue _fun0004 }
case 234:
            var37 = _closure1_slot24;
            var36 = _closure1_slot5;
            var35 = {};
            var39 = var6.sectionTitle;
            var38 = new Array(2);
            var38[0] = var39;
            var39 = {};
            var39['height'] = var41;
            var38[1] = var39;
            var35['style'] = var38;
            var41 = _closure1_slot0;
            var44 = _closure1_slot2;
            var38 = 48;
            var38 = var44[var38];
            var38 = var41.bind(var4)(var38);
            var39 = var38.Text;
            var38 = {};
            var38['variant'] = var40;
            var40 = 49;
            var42 = var44[var40];
            var42 = var41.bind(var4)(var42);
            var43 = var42.intl;
            var42 = var43.format;
            var40 = var44[var40];
            var40 = var41.bind(var4)(var40);
            var40 = var40.t;
            var41 = var40.ksAVYt;
            var40 = {};
            var45 = _closure1_slot20;
            var44 = global;
            var44 = var44.HermesInternal;
            var44 = var44.concat;
            var44 = var44.bind(var47)(var45, var46);
            var40['prefix'] = var44;
            var40 = var42.bind(var43)(var41, var40);
            var38['children'] = var40;
            var38 = var37.bind(var4)(var39, var38);
            var35['children'] = var38;
            var34 = var37.bind(var4)(var36, var35);
case 233:
            var33[2] = var34;
            var26['children'] = var33;
            var24 = var32.bind(var4)(var31, var26);
case 225:
            var23[2] = var24;
            var24 = _closure1_slot22;
            var24 = var24.GAME_MENTIONS;
            var24 = var25 === var24;
            if(!var24) { _fun0004_ip = 235; continue _fun0004 }
case 236:
            var31 = _closure1_slot24;
            var26 = _closure1_slot1;
            var32 = _closure1_slot2;
            var25 = 51;
            var25 = var32[var25];
            var26 = var26.bind(var4)(var25);
            var25 = {};
            var24 = var31.bind(var4)(var26, var25);
case 235:
            var23[3] = var24;
            var26 = _closure1_slot24;
            var25 = _closure1_slot6;
            var24 = {};
            var24['style'] = var30;
            var29 = function keyExtractor(arg1, arg2) {
                var1 = global;
                var3 = var1.String;
                var2 = undefined;
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var24['keyExtractor'] = var29;
            var24['data'] = var28;
            var24['renderItem'] = var27;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var27 = 33;
            var30 = var29[var27];
            var30 = var28.bind(var4)(var30);
            var30 = var30.getItemSeparator;
            var24['ItemSeparatorComponent'] = var30;
            var27 = var29[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.getItemLayout;
            var24['getItemLayout'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var23[4] = var24;
            var20['children'] = var23;
            var13 = var22.bind(var4)(var21, var20);
case 215:
            var7['children'] = var13;
            var10 = var11.bind(var4)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var8 = var8 != var19;
            if(!var8) { _fun0004_ip = 237; continue _fun0004 }
case 238:
            var8 = !var9;
case 237:
            if(!var8) { _fun0004_ip = 239; continue _fun0004 }
case 240:
            var11 = _closure1_slot24;
            var10 = _closure1_slot5;
            var9 = {};
            var9['style'] = var12;
            var13 = _closure1_slot1;
            var20 = _closure1_slot2;
            var12 = 52;
            var12 = var20[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['command'] = var19;
            var12['section'] = var18;
            var17 = var17.guild_id;
            var12['guildId'] = var17;
            var12['onPressOption'] = var16;
            var12['currentOption'] = var15;
            var12['optionStates'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 239:
            var7[1] = var8;
            var2['children'] = var7;
            var5 = var5.bind(var4)(var3, var2);
            var3 = _closure1_slot24;
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
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/native/AutocompleteWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();