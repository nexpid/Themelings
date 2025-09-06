// app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
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
        var1 = function ToastEmoji(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var7 = var1.emoji;
                var _closure2_slot0 = var7;
                var3 = _closure1_slot6;
                var4 = undefined;
                var6 = var3.bind(var4)();
                var8 = _closure1_slot3;
                var5 = var8.useMemo;
                var3 = new Array(1);
                var3[0] = var7;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = '';
                        if(!var2) { _fun0003_ip = 95; continue _fun0003 }
 25:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getEmojiURL;
                        var2 = {};
                        var6 = _closure2_slot0;
                        var7 = var6.id;
                        var2['id'] = var7;
                        var6 = var6.animated;
                        var2['animated'] = var6;
                        var5 = _closure1_slot4;
                        var2['size'] = var5;
                        var1 = var3.bind(var4)(var2);
 95:
                        return var1;
                    }
                };
                var5 = var5.bind(var8)(var2, var3);
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 7;
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
                if(!var8) { _fun0002_ip = 139; continue _fun0002 }
 134:
                var6 = var7.surrogates;
 139:
                var1['name'] = var6;
                var1['src'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot7 = var1;
        var1 = function ToastText(arg1) {
            var1 = arg1;
            var9 = var1.emoji;
            var2 = _closure1_slot6;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 'text-sm/normal';
            var1['variant'] = var7;
            var5 = var5.toastText;
            var1['style'] = var5;
            var5 = 9;
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
        var _closure1_slot8 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var7 = var6[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var10 = 4;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['marginLeft'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['marginVertical'] = var12;
        var4['toastEmoji'] = var9;
        var14 = 24;
        var9 = {'width': 24, 'height': 24};
        var4['toastEmojiCustom'] = var9;
        var9 = {};
        var12 = 5;
        var13 = var6[var12];
        var15 = var5.bind(var1)(var13);
        var13 = var15.isIOS;
        var15 = var13.bind(var15)();
        var13 = 16;
        if(!var15) { _fun0001_ip = 277; continue _fun0001 }
 274:
        var13 = var14;
 277:
        var9['fontSize'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isIOS;
        var13 = var12.bind(var13)();
        var12 = undefined;
        if(!var13) { _fun0001_ip = 309; continue _fun0001 }
 306:
        var12 = 32;
 309:
        var9['lineHeight'] = var12;
        var12 = 'center';
        var9['textAlign'] = var12;
        var4['toastEmojiText'] = var9;
        var9 = {};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_12;
        var9['marginRight'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var9['marginVertical'] = var10;
        var4['toastText'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot6 = var4;
        var4 = 11;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function showDoubleTapEmojiUpdatedToast(arg1) {
            var1 = arg1;
            var1 = var1.emoji;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = 'DEFAULT_REACTION_EMOJI_UPDATED';
            var2['key'] = var6;
            var6 = function icon() {
                var4 = _closure1_slot5;
                var3 = _closure1_slot7;
                var2 = {};
                var1 = _closure2_slot0;
                var2['emoji'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['icon'] = var6;
            var5 = function content() {
                var4 = _closure1_slot5;
                var3 = _closure1_slot8;
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