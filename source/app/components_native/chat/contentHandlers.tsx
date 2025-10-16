// app/components_native/chat/contentHandlers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function onLongPressLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.nativeEvent;
            var4 = var1.url;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = '';
            var1 = var2 !== var4;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['urlString'] = var4;
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var2['onLongPressLink'] = var7;
    var7 = function* (arg1) {
        var1 = function* anon_0_(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.data;
                var7 = var2.attachmentUrl;
                var4 = undefined;
                SaveGenerator(address=36);
case 5:
                return var4;
case 8:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = null;
                if(!(var3 != var7)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = '';
                if(!(var3 !== var7)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var3 = var8[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.maybeRefreshAttachmentUrl;
                var3 = var3.bind(var6)(var7);
                SaveGenerator(address=94);
case 14:
                return var3;
case 15:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 3;
                var5 = var7[var5];
                var8 = var6.bind(var4)(var5);
                var5 = var8.trackLinkClicked;
                var5 = var5.bind(var8)(var3);
                var5 = 4;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.openURL;
                var5 = var5.bind(var6)(var3);
case 11:
                return var4;
case 16:
                return var3;
case 9:
                return var2;
case 6:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = function() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['onTapAttachmentLink'] = var7;
    var7 = function* (arg1) {
        var1 = function* anon_0_(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 7:
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.data;
                var7 = var2.attachmentUrl;
                var4 = undefined;
                SaveGenerator(address=36);
case 5:
                return var4;
case 8:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 10:
                var3 = null;
                if(!(var3 != var7)) { _fun0003_ip = 20; continue _fun0003 }
case 12:
                var3 = '';
                if(!(var3 !== var7)) { _fun0003_ip = 20; continue _fun0003 }
case 13:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var3 = var8[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.maybeRefreshAttachmentUrl;
                var3 = var3.bind(var6)(var7);
                SaveGenerator(address=94);
case 14:
                return var3;
case 15:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                if(var6) { _fun0003_ip = 21; continue _fun0003 }
case 17:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 1;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['urlString'] = var3;
                var5 = var6.bind(var4)(var5);
case 20:
                return var4;
case 21:
                return var3;
case 19:
                return var2;
case 18:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = function() {
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['onLongPressAttachmentLink'] = var7;
    var7 = function onTapMention(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.getNativeSyntheticEventData;
            var3 = arg1;
            var3 = var4.bind(var6)(var3);
            var7 = var3.userId;
            var4 = var3.channelId;
            var8 = var3.roleName;
            var6 = var3.parsedUserId;
            var _closure2_slot0 = var6;
            var3 = null;
            if(!(var3 == var7)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            if(!(var3 === var8)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 8;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var9 = var8.DeveloperMode;
            var8 = var9.getSetting;
            var8 = var8.bind(var9)();
            if(!var8) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            if(!(var3 == var6)) { _fun0004_ip = 28; continue _fun0004 }
case 26:
            var8 = {};
            _fun0004_ip = 29; continue _fun0004;
case 28:
            var3 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 9;
            var9 = var12[var6];
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var12[var6];
            var6 = var11.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6./AXYnJ;
            var6 = var9.bind(var10)(var6);
            var3['secondaryConfirmText'] = var6;
            var5 = function onConfirmSecondary() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3['onConfirmSecondary'] = var5;
            var8 = var3;
case 29:
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 12;
            var3 = var13[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.show;
            var3 = {};
            var12 = _closure1_slot0;
            var9 = 9;
            var10 = var13[var9];
            var10 = var12.bind(var1)(var10);
            var14 = var10.intl;
            var11 = var14.string;
            var10 = var13[var9];
            var10 = var12.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.r0DLNj;
            var10 = var11.bind(var14)(var10);
            var3['title'] = var10;
            var10 = var13[var9];
            var10 = var12.bind(var1)(var10);
            var14 = var10.intl;
            var11 = var14.string;
            var10 = var13[var9];
            var10 = var12.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.Fqqbho;
            var10 = var11.bind(var14)(var10);
            var3['body'] = var10;
            var10 = var13[var9];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.BddRzc;
            var9 = var10.bind(var11)(var9);
            var3['confirmText'] = var9;
            var16 = var3;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var3 = var5.bind(var6)(var3);
            _fun0004_ip = 24; continue _fun0004;
case 22:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var5.bind(var1)(var2);
            var2 = {};
            var2['userId'] = var7;
            var2['channelId'] = var4;
            var4 = 7;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.USER_MENTION;
            var4 = new Array(1);
            var4[0] = var5;
            var2['sourceAnalyticsLocations'] = var4;
            var2 = var3.bind(var1)(var2);
case 24:
            return var1;
        }
    };
    var2['onTapMention'] = var7;
    var7 = function onTapTimestamp(arg1) {
        var1 = arg1;
        var1 = var1.nativeEvent;
        var2 = var1.node;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.presentTimestamp;
        var2 = var2.full;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onTapTimestamp'] = var7;
    var7 = function onTapInlineCode(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.node;
            var3 = var1.content;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var3 = var1.content;
            var4 = 'string';
            var3 = typeof var3;
            var2 = var4 === var3;
case 30:
            if(!var2) { _fun0005_ip = 32; continue _fun0005 }
case 12:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var5 = var4[var2];
            var2 = undefined;
            var6 = var3.bind(var2)(var5);
            var5 = var6.copy;
            var1 = var1.content;
            var1 = var5.bind(var6)(var1);
            var1 = 11;
            var1 = var4[var1];
            var2 = var3.bind(var2)(var1);
            var1 = var2.presentCopiedToClipboard;
            var1 = var1.bind(var2)();
case 32:
            var1 = undefined;
            return var1;
        }
    };
    var2['onTapInlineCode'] = var7;
    var4 = function onTapEmoji(arg1) {
        var1 = arg1;
        var1 = var1.nativeEvent;
        var2 = var1.node;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var5 = var3[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 15;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 14;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = {};
        var3['emojiNode'] = var2;
        var2 = 'MessageEmojiActionSheet';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var2['onTapEmoji'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/contentHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['contentHandlers'] = var2;
    return var1;
})();