// app/modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function DoubleTapEmojiEditNudgeFallback(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.location;
            var6 = var1.fallback;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.DoubleTapExpandExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var8 = 'DoubleTapEmojiEditNudge';
            var1['location'] = var8;
            var1 = var3.bind(var4)(var1);
            var3 = var1.enabled;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot12;
            var3 = _closure1_slot17;
            var2 = {};
            var2['location'] = var7;
            var2['emoji'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function DoubleTapEmojiEditNudgeInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var6 = var2.location;
            var _closure2_slot0 = var6;
            var14 = var2.emoji;
            var _closure2_slot1 = var14;
            var3 = _closure1_slot7;
            var4 = undefined;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.fontScale;
                return var1;
            };
            var5 = var3.bind(var4)(var2);
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 11;
            var2 = var15[var2];
            var8 = var19.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var2 = var7.bind(var8)(var3, var2);
            var _closure2_slot2 = var2;
            var3 = _closure1_slot15;
            var11 = var3.bind(var4)(var5);
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = _closure2_slot1;
                    var1 = var1.url;
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getEmojiURL;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var2['id'] = var7;
                    var5 = _closure1_slot10;
                    var2['size'] = var5;
                    var5 = _closure2_slot2;
                    var5 = !var5;
                    if(!var5) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var6 = _closure2_slot1;
                    var5 = var6.animated;
case 7:
                    var2['animated'] = var5;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var12 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.openEmojiPickerActionSheet;
                var3 = {};
                var7 = _closure1_slot11;
                var7 = var7.DEFAULT_REACT_EMOJI;
                var3['pickerIntention'] = var7;
                var7 = _closure1_slot3;
                var6 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            var7 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 16;
                            var2 = var6[var2];
                            var3 = undefined;
                            var10 = var5.bind(var3)(var2);
                            var9 = var10.track;
                            var2 = _closure1_slot9;
                            var5 = var2.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                            var2 = {};
                            var8 = var7.id;
                            var2['emoji_id'] = var8;
                            var8 = var7.name;
                            var2['emoji_name'] = var8;
                            var8 = var7.animated;
                            var2['emoji_animated'] = var8;
                            var8 = false;
                            var2['recommended'] = var8;
                            var11 = _closure2_slot0;
                            var2['location'] = var11;
                            var2 = var9.bind(var10)(var5, var2);
                            var5 = _closure1_slot0;
                            var2 = 17;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            var6 = var2.DoubleTapReactionEmoji;
                            var5 = var6.updateSetting;
                            var2 = {};
                            var9 = var7.id;
                            var2['emojiId'] = var9;
                            var9 = var7.name;
                            var2['emojiName'] = var9;
                            var9 = var7.animated;
                            var2['animated'] = var9;
                            var2['disableDoubleTap'] = var8;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=185);
case 11:
                            return var2;
case 12:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 18;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.showDoubleTapEmojiUpdatedToast;
                            var4 = {};
                            var4['emoji'] = var7;
                            var4 = var5.bind(var6)(var4);
                            return var3;
case 13:
                            return var2;
case 9:
                            return var1;
                        }
                    };
                    return var1;
                };
                var6 = var7.bind(var1)(var6);
                var _closure3_slot0 = var6;
                var2 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var3['onPressEmoji'] = var2;
                var2 = true;
                var3['startExpanded'] = var2;
                var2 = 'stack';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.doubleTapEmojiEditNudgeContainer;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var9 = 19;
            var5 = var15[var9];
            var5 = var19.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'color': 'text-subtle', 'variant': 'text-sm/normal'};
            var16 = 20;
            var8 = var15[var16];
            var8 = var19.bind(var4)(var8);
            var18 = var8.intl;
            var17 = var18.string;
            var8 = var15[var16];
            var8 = var19.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["1EUr/W"];
            var8 = var17.bind(var18)(var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var6 = 21;
            var6 = var15[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var15 = var11.doubleTapEmojiContainer;
            var6['style'] = var15;
            var15 = var11.doubleTapCustomEmoji;
            var6['fastImageStyle'] = var15;
            var15 = var11.doubleTapTextEmoji;
            var6['textEmojiStyle'] = var15;
            var6['src'] = var12;
            var15 = var14.id;
            var12 = null;
            var15 = var12 == var15;
            var12 = '';
            if(!var15) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = var14.surrogates;
case 15:
            var6['name'] = var12;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 22;
            var6 = var12[var6];
            var6 = var15.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var6['onPress'] = var13;
            var13 = _closure1_slot14;
            var6['hitSlop'] = var13;
            var11 = var11.editButton;
            var6['style'] = var11;
            var11 = _closure1_slot12;
            var9 = var12[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'color': 'text-brand', 'variant': 'text-sm/normal'};
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.bt75uw;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot10 = var7;
    var4 = var4.EmojiIntention;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = {'left': 8, 'right': 8};
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var8 = arg1;
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 10;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['marginHorizontal'] = var7;
        var1['doubleTapEmojiContainer'] = var2;
        var2 = {};
        var7 = 12;
        var7 = var7 * var8;
        var2['fontSize'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.INTERACTIVE_TEXT_DEFAULT;
        var2['color'] = var7;
        var1['doubleTapTextEmoji'] = var2;
        var2 = {};
        var7 = 16;
        var9 = var7 * var8;
        var2['height'] = var9;
        var7 = var7 * var8;
        var2['width'] = var7;
        var1['doubleTapCustomEmoji'] = var2;
        var2 = {'marginTop': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexWrap': 'wrap'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['marginTop'] = var7;
        var1['doubleTapEmojiEditNudgeContainer'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_4;
        var2['marginHorizontal'] = var3;
        var1['editButton'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DoubleTapEmojiEditNudge(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var9 = var1.location;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var7 = undefined;
            var6 = var3.bind(var7)(var1);
            var5 = var6.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure1_slot8;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var1 = var3.defaultReactionEmoji;
case 17:
                    if(!(var2 == var1)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var1 = {};
case 19:
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var3, var1);
            var _closure2_slot0 = var1;
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var5 = new Array(1);
            var5[0] = var1;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.disambiguatedEmojiFromProtoValue;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var6.bind(var8)(var3, var5);
            var10 = _closure1_slot4;
            var6 = var10.useMemo;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getFallbackDoubleTapDisambiguatedEmoji;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var10 = var6.bind(var10)(var5, var3);
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = var1.emojiId;
                    var3 = var1.emojiName;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0007_ip = 21; continue _fun0007 }
case 18:
                    var1 = var5.value;
case 21:
                    var1 = var4 != var1;
                    if(!var1) { _fun0007_ip = 22; continue _fun0007 }
case 19:
                    var6 = var5.value;
                    var5 = '0';
                    var1 = var5 !== var6;
case 22:
                    var5 = var4 == var3;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var2 = var3.value;
case 23:
                    var2 = var4 != var2;
                    if(!var2) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var4 = var3.value;
                    var3 = '';
                    var2 = var3 !== var4;
case 25:
                    if(var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var1 = var2;
case 27:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var3);
            var1 = var1.disableDoubleTap;
            var3 = null;
            var5 = var3 == var1;
            var6 = undefined;
            if(var5) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var6 = var1.value;
case 29:
            var5 = true;
            var1 = null;
            if(!(var5 !== var6)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            if(var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            if(!(var3 != var10)) { _fun0005_ip = 33; continue _fun0005 }
case 35:
            var6 = _closure1_slot12;
            var5 = _closure1_slot16;
            var2 = {};
            var2['location'] = var9;
            var2['fallback'] = var10;
            var2 = var6.bind(var7)(var5, var2);
            _fun0005_ip = 36; continue _fun0005;
case 33:
            var5 = var3 != var8;
            var3 = null;
            if(!var5) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var6 = _closure1_slot12;
            var5 = _closure1_slot17;
            var4 = {};
            var4['location'] = var9;
            var4['emoji'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 37:
            var2 = var3;
case 36:
            var1 = var2;
case 31:
            return var1;
        }
    };
    var3['DoubleTapEmojiEditNudge'] = var2;
    return var1;
})();