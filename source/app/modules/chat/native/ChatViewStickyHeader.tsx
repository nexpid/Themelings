// app/modules/chat/native/ChatViewStickyHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ChatViewStickyHeaderAccountSafetyWarnings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var6 = var1.senderId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var1 = var7.useStrangerDangerWarning;
            var10 = var1.bind(var7)(var8);
            var1 = 5;
            var1 = var4[var1];
            var9 = var3.bind(var5)(var1);
            var7 = var9.useInappropriateConversationBannerForChannel;
            var1 = _closure1_slot5;
            var11 = var7.bind(var9)(var8, var1);
            var1 = 6;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useLikelyAtoWarning;
            var7 = var1.bind(var3)(var8);
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 == var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1 != var11;
            var1 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot6;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 9;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channelId'] = var8;
            var11 = var11.id;
            var3['warningId'] = var11;
            var3['senderId'] = var6;
            var1 = var9.bind(var5)(var4, var3);
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var9 = _closure1_slot6;
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 8;
            var3 = var11[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channelId'] = var8;
            var10 = var10.id;
            var3['warningId'] = var10;
            var3['senderId'] = var6;
            var1 = var9.bind(var5)(var4, var3);
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 2:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 7;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channelId'] = var8;
            var7 = var7.id;
            var2['warningId'] = var7;
            var2['senderId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LOCATION_CONTEXT_MOBILE;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var8 = var4.Fragment;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var10 = var2.channel;
            var _closure2_slot0 = var10;
            var9 = var2.scrollToNewMessages;
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var2 = false;
            var5 = var3.bind(var7)(var2);
            var3 = _closure1_slot3;
            var4 = undefined;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var5 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var10);
            var11 = var2.showUnreadsNotice;
            var14 = var2.clearUnreadsNotice;
            var3 = var7.useImperativeHandle;
            var2 = arg2;
            var1 = function() {
                var1 = {};
                var2 = function onChatViewScrolled(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.isFirstMessageVisible;
                        var4 = _closure2_slot0;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var3 = _closure2_slot1;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 10:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onChatViewScrolled'] = var2;
                return var1;
            };
            var1 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = var10.isForumPost;
            var12 = var7.bind(var10)();
            var8 = null;
            if(!var12) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = null;
            if(!var5) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var13 = _closure1_slot6;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 11;
            var5 = var15[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var5['channel'] = var10;
            var8 = var13.bind(var4)(var12, var5);
case 12:
            var5 = new Array(5);
            var5[0] = var8;
            var8 = var10.isDM;
            var12 = var8.bind(var10)();
            var8 = null;
            if(!var12) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var15 = _closure1_slot6;
            var13 = _closure1_slot9;
            var12 = {};
            var16 = var10.id;
            var12['channelId'] = var16;
            var16 = var10.getRecipientId;
            var16 = var16.bind(var10)();
            var12['senderId'] = var16;
            var8 = var15.bind(var4)(var13, var12);
case 15:
            var5[1] = var8;
            var8 = null;
            if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var13 = _closure1_slot6;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 12;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['channel'] = var10;
            var11['clearUnreadsNotice'] = var14;
            var8 = var13.bind(var4)(var12, var11);
case 17:
            var5[2] = var8;
            var8 = var10.isDM;
            var8 = var8.bind(var10)();
            var7 = null;
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var12 = _closure1_slot6;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 13;
            var8 = var13[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var10;
            var7 = var12.bind(var4)(var11, var8);
case 19:
            var5[3] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['channel'] = var10;
            var6['handleScrollToNewMessages'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatViewStickyHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();