// app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var7;
        var4 = function ToastEmoji(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var7 = var1.emoji;
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 7;
                var3 = var8[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var6 = var9.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot4;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var10 = var6.bind(var9)(var5, var3);
                var _closure2_slot1 = var10;
                var3 = _closure1_slot7;
                var6 = var3.bind(var4)();
                var9 = _closure1_slot3;
                var5 = var9.useMemo;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var10;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var1 = _closure2_slot0;
                        var1 = var1.url;
                        _fun0003_ip = 4; continue _fun0003;
case 2:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getEmojiURL;
                        var2 = {};
                        var6 = _closure2_slot0;
                        var6 = var6.id;
                        var2['id'] = var6;
                        var6 = _closure2_slot1;
                        var6 = !var6;
                        if(!var6) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                        var7 = _closure2_slot0;
                        var6 = var7.animated;
case 5:
                        var2['animated'] = var6;
                        var5 = _closure1_slot5;
                        var2['size'] = var5;
                        var1 = var3.bind(var4)(var2);
case 4:
                        return var1;
                    }
                };
                var5 = var5.bind(var9)(var2, var3);
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var1 = 9;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var6.toastEmoji;
                var1['style'] = var8;
                var8 = var6.toastEmojiCustom;
                var1['fastImageStyle'] = var8;
                var6 = var6.toastEmojiText;
                var1['textEmojiStyle'] = var6;
                var8 = var7.id;
                var6 = null;
                var8 = var6 == var8;
                var6 = '';
                if(!var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var6 = var7.surrogates;
case 7:
                var1['name'] = var6;
                var1['src'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot8 = var4;
        var1 = function ToastText(arg1) {
            var1 = arg1;
            var9 = var1.emoji;
            var2 = _closure1_slot7;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot6;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 'text-sm/normal';
            var1['variant'] = var7;
            var5 = var5.toastText;
            var1['style'] = var5;
            var5 = 11;
            var7 = var10[var5];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.nKY0Fh;
            var5 = {};
            var9 = var9.name;
            var5['emojiName'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot9 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var5);
        var1 = 0;
        var8 = var7[var1];
        var5 = metroImportAll;
        var1 = undefined;
        var5 = var5.bind(var1)(var8);
        var _closure1_slot3 = var5;
        var5 = 1;
        var5 = var7[var5];
        var5 = var12.bind(var1)(var5);
        var _closure1_slot4 = var5;
        var5 = 2;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.EMOJI_URL_BASE_SIZE;
        var _closure1_slot5 = var5;
        var5 = 3;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.jsx;
        var _closure1_slot6 = var5;
        var5 = 4;
        var5 = var7[var5];
        var9 = var6.bind(var1)(var5);
        var8 = var9.createStyles;
        var5 = {};
        var10 = {};
        var11 = 5;
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_8;
        var10['marginLeft'] = var13;
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_8;
        var10['marginVertical'] = var13;
        var5['toastEmoji'] = var10;
        var15 = 24;
        var10 = {'width': 24, 'height': 24};
        var5['toastEmojiCustom'] = var10;
        var10 = {};
        var13 = 6;
        var14 = var7[var13];
        var16 = var6.bind(var1)(var14);
        var14 = var16.isIOS;
        var16 = var14.bind(var16)();
        var14 = 16;
        if(!var16) { _fun0001_ip = 9; continue _fun0001 }
case 10:
        var14 = var15;
case 9:
        var10['fontSize'] = var14;
        var13 = var7[var13];
        var14 = var6.bind(var1)(var13);
        var13 = var14.isIOS;
        var14 = var13.bind(var14)();
        var13 = undefined;
        if(!var14) { _fun0001_ip = 11; continue _fun0001 }
case 12:
        var13 = 32;
case 11:
        var10['lineHeight'] = var13;
        var13 = 'center';
        var10['textAlign'] = var13;
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.INTERACTIVE_NORMAL;
        var10['color'] = var13;
        var5['toastEmojiText'] = var10;
        var10 = {};
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var10['marginRight'] = var13;
        var11 = var7[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_8;
        var10['marginVertical'] = var11;
        var5['toastText'] = var10;
        var5 = var8.bind(var9)(var5);
        var _closure1_slot7 = var5;
        var5 = 13;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx';
        var5 = var6.bind(var7)(var5);
        var3['ToastEmoji'] = var4;
        var2 = function showDoubleTapEmojiUpdatedToast(arg1) {
            var1 = arg1;
            var1 = var1.emoji;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = 'DEFAULT_REACTION_EMOJI_UPDATED';
            var2['key'] = var6;
            var6 = function icon() {
                var4 = _closure1_slot6;
                var3 = _closure1_slot8;
                var2 = {};
                var1 = _closure2_slot0;
                var2['emoji'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['icon'] = var6;
            var5 = function content() {
                var4 = _closure1_slot6;
                var3 = _closure1_slot9;
                var2 = {};
                var1 = _closure2_slot0;
                var2['emoji'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['content'] = var5;
            var5 = 3000;
            var2['toastDurationMs'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showDoubleTapEmojiUpdatedToast'] = var2;
        return var1;
    }
})();