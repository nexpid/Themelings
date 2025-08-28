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
    var2 = var2.EmojiIntention;
    var _closure1_slot4 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = {};
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 11;
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
            var2 = 5;
            var2 = var6[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
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
            var5 = var7.bind(var8)(var5, var2);
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.emojiFromProtoValue;
            var6 = var2.bind(var3)(var5);
            var2 = var6.id;
            var5 = null;
            var2 = var5 != var2;
            var7 = undefined;
            if(!var2) { _fun0001_ip = 153; continue _fun0001 }
 97:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.getEmojiURL;
            var2 = {'id': null, 'size': 24, 'animated': false};
            var9 = var6.id;
            var2['id'] = var9;
            var7 = var3.bind(var8)(var2);
 153:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = {'height': 24, 'width': 24};
            var1['fastImageStyle'] = var8;
            var1['src'] = var7;
            var6 = var6.name;
            var7 = var5 != var6;
            var5 = '';
            if(!var7) { _fun0001_ip = 222; continue _fun0001 }
 219:
            var5 = var6;
 222:
            var1['name'] = var5;
            var5 = true;
            var1['adjustsFontSizeToFit'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = function onPressSetting() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openEmojiPickerActionSheet;
        var2 = {};
        var5 = _closure1_slot4;
        var5 = var5.DEFAULT_REACT_EMOJI;
        var2['pickerIntention'] = var5;
        var5 = function onPressEmoji(arg1) {
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.DoubleTapReactionEmoji;
            var3 = var4.updateSetting;
            var2 = {};
            var6 = var5.id;
            var2['emojiId'] = var6;
            var5 = var5.name;
            var2['emojiName'] = var5;
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
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var3 = var5.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
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
            var2 = var3.bind(var5)(var2, var1);
            var3 = var2.emojiName;
            var5 = null;
            var6 = var5 == var3;
            var1 = undefined;
            if(var6) { _fun0003_ip = 80; continue _fun0003 }
 75:
            var1 = var3.value;
 80:
            var3 = var5 != var1;
            var1 = null;
            if(!var3) { _fun0003_ip = 155; continue _fun0003 }
 89:
            var3 = var2.emojiId;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0003_ip = 109; continue _fun0003 }
 104:
            var4 = var3.value;
 109:
            var3 = '0';
            var1 = null;
            if(!(var3 !== var4)) { _fun0003_ip = 155; continue _fun0003 }
 121:
            var2 = var2.emojiName;
            var4 = var2.value;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var2)(var4, var2);
 155:
            return var1;
        }
    };
    var2['useDescription'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/DoubleTapEmojiSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();