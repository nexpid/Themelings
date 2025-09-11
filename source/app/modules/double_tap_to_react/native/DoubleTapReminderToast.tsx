// app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var12;
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
        var7 = var6[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ContentDismissActionType;
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot6 = var4;
        var4 = 5;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var7 = {};
        var4 = {};
        var11 = 6;
        var10 = var6[var11];
        var10 = var12.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var4['marginLeft'] = var10;
        var10 = var6[var11];
        var10 = var12.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var4['marginVertical'] = var10;
        var7['toastEmoji'] = var4;
        var15 = 24;
        var4 = {'width': 24, 'height': 24};
        var7['toastEmojiCustom'] = var4;
        var10 = {};
        var13 = 7;
        var4 = var6[var13];
        var14 = var5.bind(var1)(var4);
        var4 = var14.isIOS;
        var16 = var4.bind(var14)();
        var4 = 16;
        var14 = var4;
        if(!var16) { _fun0001_ip = 292; continue _fun0001 }
 289:
        var14 = var15;
 292:
        var10['fontSize'] = var14;
        var13 = var6[var13];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isIOS;
        var14 = var13.bind(var14)();
        var13 = undefined;
        if(!var14) { _fun0001_ip = 324; continue _fun0001 }
 321:
        var13 = 32;
 324:
        var10['lineHeight'] = var13;
        var13 = 'center';
        var10['textAlign'] = var13;
        var7['toastEmojiText'] = var10;
        var10 = {};
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var10['marginRight'] = var13;
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_8;
        var10['marginVertical'] = var11;
        var7['toastText'] = var10;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot7 = var7;
        var7 = function DoubleTapReminderEmoji(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var10 = var1.emoji;
                var1 = _closure1_slot7;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var5.toastEmoji;
                var1['style'] = var6;
                var6 = var5.toastEmojiCustom;
                var1['fastImageStyle'] = var6;
                var5 = var5.toastEmojiText;
                var1['textEmojiStyle'] = var5;
                var5 = var10.id;
                var7 = null;
                var8 = var7 == var5;
                var5 = '';
                var6 = var5;
                if(!var8) { _fun0002_ip = 105; continue _fun0002 }
 100:
                var6 = var10.surrogates;
 105:
                var1['name'] = var6;
                var6 = var10.id;
                var6 = var7 != var6;
                if(!var6) { _fun0002_ip = 182; continue _fun0002 }
 121:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 9;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.getEmojiURL;
                var6 = {};
                var11 = var10.id;
                var6['id'] = var11;
                var10 = var10.animated;
                var6['animated'] = var10;
                var9 = _closure1_slot5;
                var6['size'] = var9;
                var5 = var7.bind(var8)(var6);
 182:
                var1['src'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot8 = var7;
        var7 = function DoubleTapReminderContent(arg1) {
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
            var6 = var5.C2tQIS;
            var5 = {};
            var10 = function protipHook(arg1) {
                var5 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/bold', 'color': 'info-help-foreground'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = 'doubleTapReminder';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var5['protipHook'] = var10;
            var9 = var9.name;
            var5['emojiName'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot9 = var7;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/DoubleTapReminderToast.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var10 = arg1;
                var _closure2_slot0 = var10;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 12;
                var3 = var2[var4];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                var3 = var5.UNSAFE_isDismissibleContentDismissed;
                var7 = 13;
                var2 = var2[var7];
                var2 = var8.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.DOUBLE_TAP_TO_REACT_REMINDER;
                var2 = var3.bind(var5)(var2);
                if(var2) { _fun0003_ip = 331; continue _fun0003 }
 75:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 14;
                var2 = var2[var11];
                var8 = var3.bind(var1)(var2);
                var5 = var8.disambiguatedEmojiFromProtoValue;
                var2 = _closure1_slot3;
                var2 = var2.settings;
                var12 = var2.textAndImages;
                var2 = null;
                var13 = var2 == var12;
                var3 = undefined;
                if(var13) { _fun0003_ip = 134; continue _fun0003 }
 128:
                var3 = var12.defaultReactionEmoji;
 134:
                if(!(var2 == var3)) { _fun0003_ip = 140; continue _fun0003 }
 138:
                var3 = {};
 140:
                var8 = var5.bind(var8)(var3);
                var2 = var2 != var8;
                if(!var2) { _fun0003_ip = 181; continue _fun0003 }
 152:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var5 = var5.bind(var1)(var3);
                var3 = var5.areEmojisEqual;
                var2 = var3.bind(var5)(var8, var10);
 181:
                if(!var2) { _fun0003_ip = 331; continue _fun0003 }
 187:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 15;
                var3 = var2[var3];
                var8 = var5.bind(var1)(var3);
                var5 = var8.open;
                var3 = {};
                var10 = 'DOUBLE_TAP_TO_REACT_REMINDER';
                var3['key'] = var10;
                var10 = function icon() {
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2['emoji'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var3['icon'] = var10;
                var9 = function content() {
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2['emoji'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var3['content'] = var9;
                var9 = 4000;
                var3['toastDurationMs'] = var9;
                var3 = var5.bind(var8)(var3);
                var3 = _closure1_slot0;
                var4 = var2[var4];
                var5 = var3.bind(var1)(var4);
                var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                var2 = var2[var7];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var3 = var2.DOUBLE_TAP_TO_REACT_REMINDER;
                var2 = {};
                var6 = _closure1_slot4;
                var6 = var6.AUTO_DISMISS;
                var2['dismissAction'] = var6;
                var6 = true;
                var2['forceTrack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
 331:
                return var1;
            }
        };
        var3['maybeShowDoubleTapReminderToast'] = var2;
        return var1;
    }
})();