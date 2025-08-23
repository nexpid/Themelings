// app/modules/chat/native/ChatViewStickyHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ChatViewStickyHeaderAccountSafetyWarnings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.channelId;
            var6 = var1.senderId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var1 = var7.useStrangerDangerWarning;
            var10 = var1.bind(var7)(var8);
            var1 = 4;
            var1 = var4[var1];
            var9 = var3.bind(var5)(var1);
            var7 = var9.useInappropriateConversationBannerForChannel;
            var1 = _closure1_slot3;
            var11 = var7.bind(var9)(var8, var1);
            var1 = 5;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useLikelyAtoWarning;
            var7 = var1.bind(var3)(var8);
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 226; continue _fun0001 }
 107:
            if(!(var1 == var10)) { _fun0001_ip = 173; continue _fun0001 }
 111:
            var3 = var1 != var11;
            var1 = null;
            if(!var3) { _fun0001_ip = 171; continue _fun0001 }
 120:
            var9 = _closure1_slot4;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 8;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channelId'] = var8;
            var11 = var11.id;
            var3['warningId'] = var11;
            var3['senderId'] = var6;
            var1 = var9.bind(var5)(var4, var3);
 171:
            _fun0001_ip = 224; continue _fun0001;
 173:
            var9 = _closure1_slot4;
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channelId'] = var8;
            var10 = var10.id;
            var3['warningId'] = var10;
            var3['senderId'] = var6;
            var1 = var9.bind(var5)(var4, var3);
 224:
            _fun0001_ip = 277; continue _fun0001;
 226:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channelId'] = var8;
            var7 = var7.id;
            var2['warningId'] = var7;
            var2['senderId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 277:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LOCATION_CONTEXT_MOBILE;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var8 = var4.Fragment;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function ChatViewStickyHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.channel;
            var9 = var1.scrollToNewMessages;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var10);
            var11 = var1.showUnreadsNotice;
            var14 = var1.clearUnreadsNotice;
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.isForumPost;
            var5 = var5.bind(var10)();
            var8 = null;
            if(!var5) { _fun0002_ip = 117; continue _fun0002 }
 81:
            var13 = _closure1_slot4;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 10;
            var5 = var15[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var5['channel'] = var10;
            var8 = var13.bind(var4)(var12, var5);
 117:
            var5 = new Array(5);
            var5[0] = var8;
            var8 = var10.isDM;
            var12 = var8.bind(var10)();
            var8 = null;
            if(!var12) { _fun0002_ip = 180; continue _fun0002 }
 140:
            var15 = _closure1_slot4;
            var13 = _closure1_slot7;
            var12 = {};
            var16 = var10.id;
            var12['channelId'] = var16;
            var16 = var10.getRecipientId;
            var16 = var16.bind(var10)();
            var12['senderId'] = var16;
            var8 = var15.bind(var4)(var13, var12);
 180:
            var5[1] = var8;
            var8 = null;
            if(!var11) { _fun0002_ip = 230; continue _fun0002 }
 189:
            var13 = _closure1_slot4;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 11;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['channel'] = var10;
            var11['clearUnreadsNotice'] = var14;
            var8 = var13.bind(var4)(var12, var11);
 230:
            var5[2] = var8;
            var8 = var10.isDM;
            var8 = var8.bind(var10)();
            var7 = null;
            if(!var8) { _fun0002_ip = 285; continue _fun0002 }
 249:
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 12;
            var8 = var13[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var10;
            var7 = var12.bind(var4)(var11, var8);
 285:
            var5[3] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 13;
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
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatViewStickyHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();