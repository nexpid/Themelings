// app/modules/main_tabs_v2/native/settings/definitions/DoubleTapEmojiSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var7 = true;
    var2['value'] = var7;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var9 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var9);
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.RendererType;
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
    var2 = {};
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 14;
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
    var2['title'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = function useDoubleTapEmojiSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var5 = undefined;
            var8 = var3.bind(var5)(var1);
            var7 = var8.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot3;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 36; continue _fun0002 }
 30:
                    var1 = var3.defaultReactionEmoji;
 36:
                    if(!(var2 == var1)) { _fun0002_ip = 42; continue _fun0002 }
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4, var1);
            var1 = 7;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.disambiguatedEmojiFromProtoValue;
            var7 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 250; continue _fun0001 }
 90:
            var3 = var7.id;
            var3 = var1 != var3;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 160; continue _fun0001 }
 104:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.getEmojiURL;
            var3 = {'id': null, 'size': 24, 'animated': false};
            var9 = var7.id;
            var3['id'] = var9;
            var6 = var4.bind(var8)(var3);
 160:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var8 = {'height': 24, 'width': 24};
            var2['fastImageStyle'] = var8;
            var2['src'] = var6;
            var6 = var7.id;
            var8 = var1 == var6;
            var6 = '';
            if(!var8) { _fun0001_ip = 231; continue _fun0001 }
 226:
            var6 = var7.surrogates;
 231:
            var2['name'] = var6;
            var6 = true;
            var2['adjustsFontSizeToFit'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 250:
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = function onPressSetting() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openEmojiPickerActionSheet;
        var2 = {};
        var5 = _closure1_slot5;
        var5 = var5.DEFAULT_REACT_EMOJI;
        var2['pickerIntention'] = var5;
        var5 = function onPressEmoji(arg1) {
            var5 = arg1;
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var3 = var4[var1];
            var1 = undefined;
            var8 = var10.bind(var1)(var3);
            var7 = var8.track;
            var3 = _closure1_slot4;
            var6 = var3.DOUBLE_TAP_REACT_EMOJI_UPDATED;
            var3 = {};
            var9 = var5.id;
            var3['emoji_id'] = var9;
            var9 = var5.name;
            var3['emoji_name'] = var9;
            var9 = var5.animated;
            var3['emoji_animated'] = var9;
            var9 = false;
            var3['recommended'] = var9;
            var9 = 12;
            var9 = var4[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.USER_SETTINGS;
            var3['location'] = var9;
            var3 = var7.bind(var8)(var6, var3);
            var3 = _closure1_slot0;
            var2 = 13;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.DoubleTapReactionEmoji;
            var3 = var4.updateSetting;
            var2 = {};
            var6 = var5.id;
            var2['emojiId'] = var6;
            var6 = var5.name;
            var2['emojiName'] = var6;
            var5 = var5.animated;
            var2['animated'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2['onPressEmoji'] = var5;
        var5 = false;
        var2['startExpanded'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onPress'] = var8;
    var2['withArrow'] = var7;
    var4 = function useDescription() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var3 = var5[var2];
            var2 = undefined;
            var7 = var4.bind(var2)(var3);
            var6 = var7.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure1_slot3;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 36; continue _fun0004 }
 30:
                    var1 = var3.defaultReactionEmoji;
 36:
                    if(!(var2 == var1)) { _fun0004_ip = 42; continue _fun0004 }
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var1);
            var1 = 7;
            var1 = var5[var1];
            var2 = var4.bind(var2)(var1);
            var1 = var2.disambiguatedEmojiFromProtoValue;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0003_ip = 118; continue _fun0003 }
 90:
            var4 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var2)(var4, var2);
 118:
            return var1;
        }
    };
    var2['useDescription'] = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/DoubleTapEmojiSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();