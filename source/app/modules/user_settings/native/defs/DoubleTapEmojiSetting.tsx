// app/modules/user_settings/native/defs/DoubleTapEmojiSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var7 = true;
    var2['value'] = var7;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var14.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var8 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var8);
    var2 = 2;
    var2 = var6[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EmojiIntention;
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RendererType;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot7 = var2;
    var2 = 8;
    var2 = var6[var2];
    var11 = var5.bind(var1)(var2);
    var10 = var11.createStyles;
    var2 = {};
    var12 = {};
    var13 = 9;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var12['color'] = var13;
    var2['textEmoji'] = var12;
    var2 = var10.bind(var11)(var2);
    var _closure1_slot8 = var2;
    var2 = {};
    var9 = var9.PRESSABLE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 19;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.96WKND;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var8 = var8.CHAT;
    var2['parent'] = var8;
    var8 = function useDoubleTapEmojiSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot8;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot4;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var3.defaultReactionEmoji;
case 2:
                    if(!(var2 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = {};
case 4:
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var1);
            var1 = 11;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.disambiguatedEmojiFromProtoValue;
            var8 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var8.id;
            if(!(var1 == var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8.url;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var9 = var4.bind(var5)(var3);
            var4 = var9.getEmojiURL;
            var3 = {'id': null, 'size': 24, 'animated': false};
            var10 = var8.id;
            var3['id'] = var10;
            var7 = var4.bind(var9)(var3);
case 10:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = {'height': 24, 'width': 24};
            var2['fastImageStyle'] = var9;
            var2['src'] = var7;
            var7 = var8.id;
            var9 = var1 == var7;
            var7 = '';
            if(!var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var8.surrogates;
case 11:
            var2['name'] = var7;
            var7 = true;
            var2['adjustsFontSizeToFit'] = var7;
            var6 = var6.textEmoji;
            var2['textEmojiStyle'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = function onPressSetting() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openEmojiPickerActionSheet;
        var2 = {};
        var7 = _closure1_slot6;
        var7 = var7.DEFAULT_REACT_EMOJI;
        var2['pickerIntention'] = var7;
        var7 = _closure1_slot3;
        var6 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var3 = undefined;
                    var9 = var11.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot5;
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
                    var10 = 16;
                    var10 = var6[var10];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.USER_SETTINGS;
                    var2['location'] = var10;
                    var2 = var8.bind(var9)(var5, var2);
                    var5 = _closure1_slot0;
                    var2 = 17;
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
                    SaveGenerator(address=191);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
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
case 17:
                    return var2;
case 13:
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
    var2['onPress'] = var8;
    var2['withArrow'] = var7;
    var4 = function useDescription() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var3 = var5[var2];
            var2 = undefined;
            var7 = var4.bind(var2)(var3);
            var6 = var7.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure1_slot4;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 2; continue _fun0005 }
case 3:
                    var1 = var3.defaultReactionEmoji;
case 2:
                    if(!(var2 == var1)) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                    var1 = {};
case 4:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var1);
            var1 = 11;
            var1 = var5[var1];
            var2 = var4.bind(var2)(var1);
            var1 = var2.disambiguatedEmojiFromProtoValue;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var4 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var2)(var4, var2);
case 19:
            return var1;
        }
    };
    var2['useDescription'] = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/DoubleTapEmojiSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();