// app/modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'backgroundColor': null, 'borderRadius': null, 'padding': 14, 'borderWidth': 2, 'borderColor': 'transparent', 'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_DANGER;
    var9['borderColor'] = var10;
    var4['hasError'] = var9;
    var9 = {'maxHeight': 100, 'flex': 1, 'padding': 0, 'paddingTop': 0};
    var4['stringOptionInput'] = var9;
    var9 = {'marginVertical': 4294967288, 'marginRight': 4294967288};
    var4['expressionButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherTextInputOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.option;
            var9 = var2.onChangeText;
            var _closure2_slot0 = var9;
            var15 = var2.onFocus;
            var14 = var2.onEndEditing;
            var1 = var2.guildId;
            var _closure2_slot1 = var1;
            var8 = var2.style;
            var22 = var2.autoFocus;
            var3 = var2.initialValue;
            var _closure2_slot2 = var3;
            var20 = var2.hasError;
            var12 = var2.onPressIn;
            var2 = _closure1_slot9;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var23 = _closure1_slot4;
            var3 = var23.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = '';
                    var1 = var5;
                    if(!var3) { _fun0002_ip = 52; continue _fun0002 }
 23:
                    var3 = _closure2_slot2;
                    var4 = var3.type;
                    var3 = 'text';
                    var1 = var5;
                    if(!(var3 === var4)) { _fun0002_ip = 52; continue _fun0002 }
 43:
                    var2 = _closure2_slot2;
                    var1 = var2.text;
 52:
                    return var1;
                }
            };
            var5 = var3.bind(var23)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var18 = var3[var2];
            var _closure2_slot3 = var18;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot4 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useAppLauncherContext;
            var2 = var2.bind(var6)();
            var2 = var2.entrypoint;
            var16 = var23.useRef;
            var6 = {'start': 0, 'end': 0};
            var6 = var16.bind(var23)(var6);
            var _closure2_slot5 = var6;
            var16 = var23.useRef;
            var6 = null;
            var19 = var16.bind(var23)(var6);
            var _closure2_slot6 = var19;
            var17 = var13.type;
            var16 = 8;
            var6 = var5[var16];
            var6 = var3.bind(var4)(var6);
            var6 = var6.ApplicationCommandOptionType;
            var6 = var6.STRING;
            var6 = var17 === var6;
            var _closure2_slot7 = var6;
            var21 = var23.useCallback;
            var17 = new Array(1);
            var17[0] = var9;
            var9 = function(arg1) {
                var3 = arg1;
                var4 = _closure2_slot4;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var17 = var21.bind(var23)(var9, var17);
            var _closure2_slot8 = var17;
            var24 = var23.useCallback;
            var21 = new Array(2);
            var21[0] = var17;
            var21[1] = var18;
            var9 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var7 = _closure2_slot3;
                    var6 = var7.substring;
                    var1 = _closure2_slot5;
                    var4 = var1.current;
                    var5 = var4.start;
                    var4 = 0;
                    var4 = var6.bind(var7)(var4, var5);
                    var6 = var7.substring;
                    var1 = var1.current;
                    var5 = var1.end;
                    var1 = null;
                    if(!(var1 == var5)) { _fun0003_ip = 74; continue _fun0003 }
 60:
                    var8 = _closure2_slot5;
                    var8 = var8.current;
                    var5 = var8.start;
 74:
                    var7 = var6.bind(var7)(var5);
                    var5 = _closure2_slot5;
                    var5 = var5.current;
                    var5 = var5.start;
                    var5 = var3.id;
                    if(!(var1 == var5)) { _fun0003_ip = 111; continue _fun0003 }
 102:
                    var5 = var3.surrogates;
                    if(!(var1 == var5)) { _fun0003_ip = 224; continue _fun0003 }
 111:
                    var5 = var3.uniqueName;
                    if(!(var1 != var5)) { _fun0003_ip = 135; continue _fun0003 }
 121:
                    var6 = var3.uniqueName;
                    var5 = '';
                    if(!(var5 === var6)) { _fun0003_ip = 142; continue _fun0003 }
 135:
                    var9 = var3.name;
                    _fun0003_ip = 148; continue _fun0003;
 142:
                    var9 = var3.uniqueName;
 148:
                    var12 = _closure2_slot8;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var10 = var6.concat;
                    var8 = ':';
                    var6 = ': ';
                    var10 = var10.bind(var8)(var9, var6);
                    var10 = var4 + var10;
                    var11 = var10 + var7;
                    var10 = undefined;
                    var10 = var12.bind(var10)(var11);
                    var5 = var5.HermesInternal;
                    var5 = var5.concat;
                    var5 = var5.bind(var8)(var9, var6);
                    var5 = var4 + var5;
                    var5 = var5.length;
                    _fun0003_ip = 262; continue _fun0003;
 224:
                    var8 = _closure2_slot8;
                    var6 = var3.surrogates;
                    var6 = var4 + var6;
                    var7 = var6 + var7;
                    var6 = undefined;
                    var6 = var8.bind(var6)(var7);
                    var3 = var3.surrogates;
                    var3 = var4 + var3;
                    var5 = var3.length;
 262:
                    var4 = _closure2_slot5;
                    var3 = {};
                    var3['start'] = var5;
                    var3['end'] = var5;
                    var4['current'] = var3;
                    var2 = _closure2_slot6;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0003_ip = 305; continue _fun0003 }
 295:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
 305:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var24.bind(var23)(var9, var21);
            var _closure2_slot9 = var9;
            var24 = var23.useCallback;
            var21 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot6;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 28; continue _fun0004 }
 18:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = new Array(0);
            var9 = var24.bind(var23)(var21, var9);
            var _closure2_slot10 = var9;
            var21 = var23.useEffect;
            var9 = new Array(2);
            var9[0] = var1;
            var9[1] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0005_ip = 50; continue _fun0005 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.maybeFetchTopEmojisByGuild;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var21.bind(var23)(var1, var9);
            var1 = 10;
            var1 = var5[var1];
            var21 = var3.bind(var4)(var1);
            var9 = var21.useAnimationDelayedAutoFocus;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot6;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 28; continue _fun0006 }
 18:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var21)(var22, var1);
            var1 = 11;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppLauncherEntrypoint;
            var1 = var1.VOICE;
            if(!(var2 !== var1)) { _fun0001_ip = 457; continue _fun0001 }
 435:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var9 = var2.bind(var4)(var1);
            _fun0001_ip = 477; continue _fun0001;
 457:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var9 = var2.bind(var4)(var1);
 477:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var21 = var11.container;
            var5 = new Array(3);
            var5[0] = var21;
            if(!var20) { _fun0001_ip = 509; continue _fun0001 }
 503:
            var20 = var11.hasError;
 509:
            var5[1] = var20;
            var5[2] = var8;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var5 = {};
            var5['ref'] = var19;
            var19 = false;
            var5['autoFocus'] = var19;
            var5['value'] = var18;
            var18 = var11.stringOptionInput;
            var5['style'] = var18;
            var20 = var13.type;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var16];
            var18 = var19.bind(var4)(var18);
            var18 = var18.ApplicationCommandOptionType;
            var19 = var18.STRING;
            var18 = undefined;
            if(!(var20 === var19)) { _fun0001_ip = 598; continue _fun0001 }
 592:
            var18 = var13.maxLength;
 598:
            var5['maxLength'] = var18;
            var18 = 'off';
            var5['autoComplete'] = var18;
            var5['onChangeText'] = var17;
            var17 = function onSelectionChange(arg1) {
                var2 = _closure2_slot5;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.selection;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5['onSelectionChange'] = var17;
            var5['onFocus'] = var15;
            var5['onEndEditing'] = var14;
            var14 = 'center';
            var5['textAlignVertical'] = var14;
            var14 = 'done';
            var5['returnKeyType'] = var14;
            var14 = true;
            var5['multiline'] = var14;
            var15 = var13.type;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var14 = var17.bind(var4)(var14);
            var14 = var14.ApplicationCommandOptionType;
            var14 = var14.INTEGER;
            if(!(var15 !== var14)) { _fun0001_ip = 744; continue _fun0001 }
 702:
            var15 = var13.type;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var16];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ApplicationCommandOptionType;
            var14 = var13.NUMBER;
            var13 = 'default';
            if(!(var15 === var14)) { _fun0001_ip = 789; continue _fun0001 }
 744:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 14;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = 'numbers-and-punctuation';
            if(!var15) { _fun0001_ip = 786; continue _fun0001 }
 782:
            var14 = 'numeric';
 786:
            var13 = var14;
 789:
            var5['keyboardType'] = var13;
            var5['onPressIn'] = var12;
            var8 = var8.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 869; continue _fun0001 }
 816:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 15;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.expressionButton;
            var7['style'] = var11;
            var10 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var2 = var6.dismissGlobalKeyboard;
                var2 = var2.bind(var6)();
                var2 = 17;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                var5 = _closure1_slot6;
                var5 = var5.CHAT;
                var2['pickerIntention'] = var5;
                var6 = _closure2_slot9;
                var2['onPressEmoji'] = var6;
                var6 = _closure2_slot1;
                var2['guildId'] = var6;
                var5 = _closure2_slot10;
                var2['onClose'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 869:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();