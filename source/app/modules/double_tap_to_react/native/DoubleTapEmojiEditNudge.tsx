// app/modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
        var12 = 0;
        var4 = var6[var12];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var14 = 2;
        var4 = var6[var14];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var10 = 4;
        var4 = var6[var10];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AnalyticEvents;
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
        var13 = 8;
        var4 = {'left': 8, 'right': 8};
        var _closure1_slot11 = var4;
        var4 = 7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['paddingLeft'] = var14;
        var4['doubleTapEmojiContainer'] = var9;
        var9 = {'fontSize': 12, 'lineHeight': 16, 'width': 16, 'height': 16, 'marginTop': 4};
        var4['doubleTapTextEmoji'] = var9;
        var9 = {'height': 16, 'width': 16};
        var13 = var6[var13];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isIOS;
        var13 = var13.bind(var14)();
        if(!var13) { _fun0001_ip = 313; continue _fun0001 }
 311:
        var10 = 0;
 313:
        var9['marginTop'] = var10;
        var4['doubleTapCustomEmoji'] = var9;
        var9 = {'marginTop': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexWrap': 'wrap'};
        var10 = 9;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['marginTop'] = var12;
        var4['doubleTapEmojiEditNudgeContainer'] = var9;
        var9 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var9['marginHorizontal'] = var10;
        var4['editButton'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot12 = var4;
        var4 = 21;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function DoubleTapEmojiEditNudge(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var1 = var1.location;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot12;
                var5 = undefined;
                var11 = var2.bind(var5)();
                var _closure2_slot1 = var11;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var6 = var3.bind(var5)(var2);
                var4 = var6.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure1_slot6;
                        var1 = var1.settings;
                        var3 = var1.textAndImages;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        if(var4) { _fun0003_ip = 36; continue _fun0003 }
 30:
                        var1 = var3.defaultReactionEmoji;
 36:
                        if(!(var2 == var1)) { _fun0003_ip = 42; continue _fun0003 }
 40:
                        var1 = {};
 42:
                        return var1;
                    }
                };
                var2 = var4.bind(var6)(var3, var2);
                var _closure2_slot2 = var2;
                var6 = _closure1_slot4;
                var4 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.disambiguatedEmojiFromProtoValue;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var4.bind(var6)(var2, var3);
                var _closure2_slot3 = var2;
                var7 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var2;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot3;
                        var2 = null;
                        var3 = var2 == var1;
                        var4 = undefined;
                        var1 = undefined;
                        if(var3) { _fun0004_ip = 29; continue _fun0004 }
 20:
                        var3 = _closure2_slot3;
                        var1 = var3.id;
 29:
                        var2 = var2 != var1;
                        var1 = undefined;
                        if(!var2) { _fun0004_ip = 105; continue _fun0004 }
 38:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.getEmojiURL;
                        var2 = {};
                        var5 = _closure2_slot3;
                        var6 = var5.id;
                        var2['id'] = var6;
                        var6 = 16;
                        var2['size'] = var6;
                        var5 = var5.animated;
                        var2['animated'] = var5;
                        var1 = var3.bind(var4)(var2);
 105:
                        return var1;
                    }
                };
                var3 = var7.bind(var6)(var3, var4);
                var _closure2_slot4 = var3;
                var4 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openEmojiPickerActionSheet;
                    var3 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.DEFAULT_REACT_EMOJI;
                    var3['pickerIntention'] = var7;
                    var7 = _closure1_slot3;
                    var6 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                StartGenerator();
                                var7 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 229; continue _fun0005 }
 13:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 14;
                                var2 = var6[var2];
                                var3 = undefined;
                                var9 = var5.bind(var3)(var2);
                                var8 = var9.track;
                                var2 = _closure1_slot7;
                                var5 = var2.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                                var2 = {};
                                var10 = var7.id;
                                var2['emoji_id'] = var10;
                                var10 = var7.name;
                                var2['emoji_name'] = var10;
                                var10 = var7.animated;
                                var2['emoji_animated'] = var10;
                                var10 = false;
                                var2['recommended'] = var10;
                                var10 = _closure2_slot0;
                                var2['location'] = var10;
                                var2 = var8.bind(var9)(var5, var2);
                                var5 = _closure1_slot0;
                                var2 = 15;
                                var2 = var6[var2];
                                var2 = var5.bind(var3)(var2);
                                var6 = var2.DoubleTapReactionEmoji;
                                var5 = var6.updateSetting;
                                var2 = {};
                                var8 = var7.id;
                                var2['emojiId'] = var8;
                                var8 = var7.name;
                                var2['emojiName'] = var8;
                                var8 = var7.animated;
                                var2['animated'] = var8;
                                var2 = var5.bind(var6)(var2);
                                SaveGenerator(address=180);
 178:
                                return var2;
 180:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0005_ip = 226; continue _fun0005 }
 186:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 16;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.showDoubleTapEmojiUpdatedToast;
                                var4 = {};
                                var4['emoji'] = var7;
                                var4 = var5.bind(var6)(var4);
                                return var3;
 226:
                                return var2;
 229:
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
                    var2 = false;
                    var3['startExpanded'] = var2;
                    var2 = 'stack';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var14 = var4.bind(var6)(var1, var3);
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0002_ip = 482; continue _fun0002 }
 188:
                var4 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = var11.doubleTapEmojiEditNudgeContainer;
                var2['style'] = var6;
                var9 = _closure1_slot9;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 17;
                var6 = var16[var10];
                var6 = var15.bind(var5)(var6);
                var7 = var6.Text;
                var6 = {'color': 'text-secondary', 'variant': 'text-sm/normal'};
                var12 = 18;
                var8 = var16[var12];
                var8 = var15.bind(var5)(var8);
                var19 = var8.intl;
                var18 = var19.format;
                var8 = var16[var12];
                var8 = var15.bind(var5)(var8);
                var8 = var8.t;
                var17 = var8.EQnNv7;
                var8 = {};
                var20 = function emojiHook(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var5 = _closure1_slot9;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var4 = undefined;
                        var3 = var2.bind(var4)(var1);
                        var2 = {};
                        var1 = _closure2_slot1;
                        var7 = var1.doubleTapEmojiContainer;
                        var2['style'] = var7;
                        var7 = var1.doubleTapCustomEmoji;
                        var2['fastImageStyle'] = var7;
                        var1 = var1.doubleTapTextEmoji;
                        var2['textEmojiStyle'] = var1;
                        var1 = _closure2_slot4;
                        var2['src'] = var1;
                        var1 = _closure2_slot3;
                        var7 = var1.id;
                        var1 = null;
                        var7 = var1 == var7;
                        var1 = '';
                        if(!var7) { _fun0006_ip = 110; continue _fun0006 }
 101:
                        var6 = _closure2_slot3;
                        var1 = var6.surrogates;
 110:
                        var2['name'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    }
                };
                var8['emojiHook'] = var20;
                var8 = var18.bind(var19)(var17, var8);
                var6['children'] = var8;
                var7 = var9.bind(var5)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = 20;
                var7 = var16[var7];
                var7 = var15.bind(var5)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var7['onPress'] = var14;
                var13 = _closure1_slot11;
                var7['hitSlop'] = var13;
                var11 = var11.editButton;
                var7['style'] = var11;
                var10 = var16[var10];
                var10 = var15.bind(var5)(var10);
                var11 = var10.Text;
                var10 = {'color': 'text-brand', 'variant': 'text-sm/normal'};
                var13 = var16[var12];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.bt75u7;
                var12 = var13.bind(var14)(var12);
                var10['children'] = var12;
                var10 = var9.bind(var5)(var11, var10);
                var7['children'] = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 482:
                return var1;
            }
        };
        var3['DoubleTapEmojiEditNudge'] = var2;
        return var1;
    }
})();