// app/modules/messages/native/emoji/MessageEmojiActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var1 = native3;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var10 = 0;
        var7 = var6[var10];
        var4 = native4;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AnalyticEvents;
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var12 = 16;
        var9['paddingHorizontal'] = var12;
        var11 = 5;
        var11 = var6[var11];
        var13 = var5.bind(var1)(var11);
        var11 = var13.isAndroid;
        var13 = var11.bind(var13)();
        var11 = 0;
        if(!var13) { _fun0001_ip = 194; continue _fun0001 }
 191:
        var11 = var12;
 194:
        var9['paddingBottom'] = var11;
        var4['contentWrapper'] = var9;
        var9 = {};
        var9['paddingTop'] = var10;
        var4['content'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot6 = var4;
        var4 = function MessageStandardEmojiActionSheet(arg1) {
            var1 = arg1;
            var10 = var1.emojiNode;
            var1 = _closure1_slot6;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.v4;
            var9 = var1.bind(var3)();
            var _closure2_slot0 = var9;
            var3 = _closure1_slot5;
            var1 = 7;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var6 = true;
            var1['startExpanded'] = var6;
            var5 = function onDismiss() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot4;
                var3 = var2.CLOSE_POPOUT;
                var2 = {};
                var6 = _closure2_slot0;
                var2['nonce'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onDismiss'] = var5;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var8.contentWrapper;
            var5['style'] = var8;
            var8 = _closure1_slot1;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['emojiNode'] = var10;
            var7['nonce'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot7 = var4;
        var4 = function MessageCustomEmojiActionSheet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var15 = var1.emojiNode;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var1 = _closure1_slot6;
                var8 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useEmojiAndSource;
                var1 = {};
                var6 = var15.id;
                var1['emojiId'] = var6;
                var1 = var2.bind(var3)(var1);
                var14 = var1.sourceType;
                var12 = var1.expressionSourceGuild;
                var13 = var1.expressionSourceApplication;
                var10 = var1.hasJoinedEmojiSourceGuild;
                var11 = var1.emoji;
                var1 = var1.isFetching;
                if(var1) { _fun0002_ip = 285; continue _fun0002 }
 113:
                var2 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 6;
                var1 = var16[var1];
                var3 = var2.bind(var4)(var1);
                var1 = var3.v4;
                var9 = var1.bind(var3)();
                _closure2_slot0 = var9;
                var3 = _closure1_slot5;
                var1 = 7;
                var1 = var16[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var6 = true;
                var1['startExpanded'] = var6;
                var5 = function onDismiss() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.CLOSE_POPOUT;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['nonce'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['onDismiss'] = var5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var8.contentWrapper;
                var5['style'] = var8;
                var8 = _closure1_slot1;
                var7 = 11;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['emojiNode'] = var15;
                var7['sourceType'] = var14;
                var7['expressionSourceApplication'] = var13;
                var7['expressionSourceGuild'] = var12;
                var7['customEmojiFromJoinedGuild'] = var11;
                var7['hasJoinedEmojiSourceGuild'] = var10;
                var7['nonce'] = var9;
                var7 = var3.bind(var4)(var8, var7);
                var5['children'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
 285:
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot8 = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/messages/native/emoji/MessageEmojiActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var2 = var1.emojiNode;
                var1 = 'surrogate';
                var1 = var1 in var2;
                var5 = _closure1_slot5;
                if(var1) { _fun0003_ip = 48; continue _fun0003 }
 27:
                var6 = _closure1_slot8;
                var4 = {};
                var4['emojiNode'] = var2;
                var1 = undefined;
                var1 = var5.bind(var1)(var6, var4);
                _fun0003_ip = 67; continue _fun0003;
 48:
                var4 = _closure1_slot7;
                var3 = {};
                var3['emojiNode'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 67:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();