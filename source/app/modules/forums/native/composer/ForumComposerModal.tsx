// app/modules/forums/native/composer/ForumComposerModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function clearDraft(arg1) {
        var5 = arg1;
        var4 = _closure1_slot1;
        var6 = _closure1_slot3;
        var3 = 13;
        var7 = var6[var3];
        var1 = undefined;
        var9 = var4.bind(var1)(var7);
        var8 = var9.clearDraft;
        var2 = _closure1_slot8;
        var7 = var2.ThreadSettings;
        var7 = var8.bind(var9)(var5, var7);
        var3 = var6[var3];
        var8 = var4.bind(var1)(var3);
        var7 = var8.clearDraft;
        var3 = var2.ChannelMessage;
        var3 = var7.bind(var8)(var5, var3);
        var3 = 14;
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.clearAll;
        var2 = var2.ChannelMessage;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/ForumComposerModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumComposerModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.parentChannelId;
            var _closure2_slot0 = var12;
            var10 = var2.threadId;
            var _closure2_slot1 = var10;
            var3 = var2.messageId;
            var _closure2_slot2 = var3;
            var11 = var2.isEdit;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0001_ip = 48; continue _fun0001 }
 46:
            var11 = false;
 48:
            var _closure2_slot3 = var11;
            var3 = var2.analyticsLocations;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var2 = _closure1_slot12;
            var9 = var2.bind(var5)();
            var13 = _closure1_slot1;
            var4 = _closure1_slot3;
            var7 = 15;
            var2 = var4[var7];
            var2 = var13.bind(var5)(var2);
            var2 = var2.bind(var5)(var3);
            var6 = var2.analyticsLocations;
            var3 = _closure1_slot0;
            var2 = 16;
            var14 = var4[var2];
            var19 = var3.bind(var5)(var14);
            var18 = var19.useStateFromStores;
            var14 = _closure1_slot6;
            var17 = new Array(1);
            var17[0] = var14;
            var16 = new Array(1);
            var16[0] = var12;
            var15 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var18.bind(var19)(var17, var15, var16);
            _closure2_slot4 = var16;
            var15 = var4[var2];
            var18 = var3.bind(var5)(var15);
            var17 = var18.useStateFromStores;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var17.bind(var18)(var15, var10, var14);
            var10 = 17;
            var10 = var4[var10];
            var10 = var13.bind(var5)(var10);
            var13 = var10.bind(var5)(var12);
            var10 = var4[var2];
            var17 = var3.bind(var5)(var10);
            var14 = var17.useStateFromStores;
            var10 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 59; continue _fun0002 }
 18:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 59; continue _fun0002 }
 31:
                    var4 = _closure1_slot10;
                    var3 = var4.getMessage;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var1 = var2.firstMessage;
 59:
                    return var1;
                }
            };
            var14 = var14.bind(var17)(var12, var10);
            var2 = var4[var2];
            var17 = var3.bind(var5)(var2);
            var12 = var17.useStateFromStores;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var12.bind(var17)(var10, var2);
            var12 = function handleClose(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 700; continue _fun0003 }
 18:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var7 = arg1;
                    if(var7) { _fun0003_ip = 663; continue _fun0003 }
 38:
                    var7 = 19;
                    var8 = var4[var7];
                    var7 = undefined;
                    var10 = var5.bind(var7)(var8);
                    var9 = var10.setKeyboardType;
                    var8 = {};
                    var11 = 20;
                    var11 = var4[var11];
                    var11 = var5.bind(var7)(var11);
                    var11 = var11.KeyboardTypes;
                    var11 = var11.SYSTEM;
                    var8['type'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var11 = _closure1_slot7;
                    var9 = var11.getDraft;
                    var10 = _closure2_slot0;
                    var8 = _closure1_slot8;
                    var8 = var8.ChannelMessage;
                    var8 = var9.bind(var11)(var10, var8);
                    var9 = var11.getThreadSettings;
                    var10 = var9.bind(var11)(var10);
                    if(!(var3 == var10)) { _fun0003_ip = 188; continue _fun0003 }
 138:
                    var12 = _closure1_slot7;
                    var11 = var12.getThreadDraftWithParentMessageId;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var9 = 21;
                    var9 = var14[var9];
                    var14 = var13.bind(var7)(var9);
                    var13 = var14.castChannelIdAsMessageId;
                    var9 = _closure2_slot0;
                    var9 = var13.bind(var14)(var9);
                    var10 = var11.bind(var12)(var9);
 188:
                    var13 = _closure1_slot9;
                    var12 = var13.getUploads;
                    var11 = _closure2_slot0;
                    var9 = _closure1_slot8;
                    var9 = var9.ChannelMessage;
                    var9 = var12.bind(var13)(var11, var9);
                    var11 = _closure2_slot3;
                    if(var11) { _fun0003_ip = 618; continue _fun0003 }
 228:
                    var11 = var8.length;
                    var8 = 0;
                    if(!(!(var11 > var8))) { _fun0003_ip = 288; continue _fun0003 }
 239:
                    var9 = var9.length;
                    if(!(!(var9 > var8))) { _fun0003_ip = 288; continue _fun0003 }
 248:
                    var11 = var3 == var10;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 262; continue _fun0003 }
 257:
                    var9 = var10.name;
 262:
                    var10 = var3 != var9;
                    var3 = '';
                    if(!var10) { _fun0003_ip = 276; continue _fun0003 }
 273:
                    var3 = var9;
 276:
                    var3 = var3.length;
                    if(!(var3 > var8)) { _fun0003_ip = 618; continue _fun0003 }
 288:
                    var3 = {};
                    var8 = function onConfirm() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 22;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.maybeTrackForumNewPostDraftCreated;
                        var2 = {};
                        var8 = _closure2_slot4;
                        var8 = var8.guild_id;
                        var2['guildId'] = var8;
                        var7 = _closure2_slot4;
                        var7 = var7.id;
                        var2['channelId'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 18;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.closeCreateForumPostModal;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onConfirm'] = var8;
                    var6 = function onCancel() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 18;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.closeCreateForumPostModal;
                        var3 = var3.bind(var4)();
                        var3 = _closure1_slot13;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onCancel'] = var6;
                    var10 = var3.onConfirm;
                    var9 = var3.onCancel;
                    var6 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var3 = 10;
                    var3 = var15[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.dismissGlobalKeyboard;
                    var3 = var3.bind(var6)();
                    var6 = _closure1_slot1;
                    var3 = 11;
                    var3 = var15[var3];
                    var8 = var6.bind(var7)(var3);
                    var6 = var8.show;
                    var3 = {};
                    var14 = _closure1_slot0;
                    var11 = 12;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var12 = var12.t;
                    var12 = var12.Fz1519;
                    var12 = var13.bind(var16)(var12);
                    var3['title'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var12 = var12.t;
                    var12 = var12.YBgep6;
                    var12 = var13.bind(var16)(var12);
                    var3['body'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var12 = var12.t;
                    var12 = var12.Rnli6O;
                    var12 = var13.bind(var16)(var12);
                    var3['confirmText'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var7)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var7)(var11);
                    var11 = var11.t;
                    var11 = var11.3NnH6e;
                    var11 = var12.bind(var13)(var11);
                    var3['cancelText'] = var11;
                    var3['onConfirm'] = var10;
                    var3['onCancel'] = var9;
                    var9 = true;
                    var3['hideActionSheet'] = var9;
                    var3['isDismissable'] = var9;
                    var3 = var6.bind(var8)(var3);
                    _fun0003_ip = 700; continue _fun0003;
 618:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 18;
                    var3 = var8[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.closeCreateForumPostModal;
                    var3 = var3.bind(var6)();
                    var6 = _closure1_slot13;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    _fun0003_ip = 700; continue _fun0003;
 663:
                    var3 = 18;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.closeCreateForumPostModal;
                    var4 = var4.bind(var5)();
                    var2 = _closure1_slot13;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 700:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot5 = var12;
            var2 = 23;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useNavigatorBackPressHandler;
            var1 = function() {
                var3 = _closure2_slot5;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                var1 = true;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var3 = null;
            var2 = var3 == var16;
            var1 = null;
            if(var2) { _fun0001_ip = 554; continue _fun0001 }
 361:
            var2 = var16.isForumLikeChannel;
            var2 = var2.bind(var16)();
            var1 = null;
            if(!var2) { _fun0001_ip = 554; continue _fun0001 }
 379:
            if(var11) { _fun0001_ip = 394; continue _fun0001 }
 382:
            var2 = var3 == var13;
            var1 = null;
            if(var2) { _fun0001_ip = 554; continue _fun0001 }
 394:
            if(!var11) { _fun0001_ip = 409; continue _fun0001 }
 397:
            var2 = var3 == var14;
            var1 = null;
            if(var2) { _fun0001_ip = 554; continue _fun0001 }
 409:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.container;
            var6['style'] = var9;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 468; continue _fun0001 }
 462:
            var9 = 'no-hide-descendants';
 468:
            var6['importantForAccessibility'] = var9;
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var17 = _closure1_slot3;
            var8 = 24;
            var8 = var17[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['parentChannel'] = var16;
            var8['thread'] = var15;
            var8['message'] = var14;
            var8['threadSettingsDraft'] = var13;
            var8['onClose'] = var12;
            var8['isEdit'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 554:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();