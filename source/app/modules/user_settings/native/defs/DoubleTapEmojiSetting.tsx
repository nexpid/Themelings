// app/modules/user_settings/native/defs/DoubleTapEmojiSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function FallbackDoubleTapEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.fallback;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.DoubleTapExpandExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var7 = 'DoubleTapEmojiSetting';
            var1['location'] = var7;
            var1 = var3.bind(var4)(var1);
            var3 = var1.enabled;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var2['emoji'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function SettingsEmoji(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.emoji;
            var2 = _closure1_slot7;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var2 = var7.id;
            var8 = null;
            if(!(var8 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = var7.url;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.getEmojiURL;
            var2 = {'id': null, 'size': 24, 'animated': false};
            var10 = var7.id;
            var2['id'] = var10;
            var6 = var3.bind(var9)(var2);
case 6:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = {'height': 24, 'width': 24};
            var1['fastImageStyle'] = var9;
            var1['src'] = var6;
            var6 = var7.id;
            var8 = var8 == var6;
            var6 = '';
            if(!var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = var7.surrogates;
case 7:
            var1['name'] = var6;
            var6 = true;
            var1['adjustsFontSizeToFit'] = var6;
            var5 = var5.textEmoji;
            var1['textEmojiStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var9 = function useDoubleTapDisabled() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.DoubleTapReactionEmoji;
            var1 = var2.useSetting;
            var1 = var1.bind(var2)();
            var2 = var1.disableDoubleTap;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot10 = var9;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var10 = true;
    var2['value'] = var10;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var14.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var4 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var11 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot4 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EmojiIntention;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createStyles;
    var2 = {};
    var12 = {};
    var13 = 7;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var12['color'] = var13;
    var2['textEmoji'] = var12;
    var2 = var4.bind(var7)(var2);
    var _closure1_slot7 = var2;
    var2 = 17;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createPressable;
    var2 = {};
    var12 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 18;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["96WKNB"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var12;
    var11 = var11.CHAT;
    var2['parent'] = var11;
    var11 = function useDoubleTapEmojiSettingTrailing() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var6 = var1.DoubleTapReactionEmoji;
            var1 = var6.useSetting;
            var8 = var1.bind(var6)();
            var1 = 9;
            var6 = var4[var1];
            var7 = var3.bind(var5)(var6);
            var6 = var7.disambiguatedEmojiFromSettingsValue;
            var8 = var6.bind(var7)(var8);
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getFallbackDoubleTapDisambiguatedEmoji;
            var6 = var1.bind(var3)();
            var1 = null;
            if(!(var1 == var8)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            if(!(var1 == var6)) { _fun0004_ip = 13; continue _fun0004 }
case 11:
            var3 = var1 == var8;
            var1 = null;
            if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var7 = _closure1_slot6;
            var4 = _closure1_slot9;
            var3 = {};
            var3['emoji'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 14:
            _fun0004_ip = 16; continue _fun0004;
case 13:
            var4 = _closure1_slot6;
            var3 = _closure1_slot8;
            var2 = {};
            var2['fallback'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var2['useTrailing'] = var11;
    var11 = function onPressSetting() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openEmojiPickerActionSheet;
        var2 = {};
        var7 = _closure1_slot5;
        var7 = var7.DEFAULT_REACT_EMOJI;
        var2['pickerIntention'] = var7;
        var7 = _closure1_slot3;
        var6 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var12 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var3 = undefined;
                    var10 = var12.bind(var3)(var2);
                    var9 = var10.track;
                    var2 = _closure1_slot4;
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
                    var11 = 15;
                    var11 = var6[var11];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.USER_SETTINGS;
                    var2['location'] = var11;
                    var2 = var9.bind(var10)(var5, var2);
                    var5 = _closure1_slot0;
                    var2 = 8;
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
                    SaveGenerator(address=196);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 22:
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
case 21:
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var2['onPressEmoji'] = var5;
        var5 = true;
        var2['startExpanded'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onPress'] = var11;
    var2['withArrow'] = var10;
    var10 = function useDescription() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var3 = var1.DoubleTapReactionEmoji;
            var1 = var3.useSetting;
            var3 = var1.bind(var3)();
            var1 = 9;
            var1 = var5[var1];
            var2 = var4.bind(var2)(var1);
            var1 = var2.disambiguatedEmojiFromSettingsValue;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0006_ip = 23; continue _fun0006 }
case 3:
            var4 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var2)(var4, var2);
case 23:
            return var1;
        }
    };
    var2['useDescription'] = var10;
    var2['useIsDisabled'] = var9;
    var8 = function usePredicate() {
        var2 = _closure1_slot10;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = !var1;
        return var1;
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/DoubleTapEmojiSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();