// app/modules/messages/native/MessagesWrapperHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
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
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
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
    var2 = function MessagesWrapperHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.channel;
            var10 = var1.scrollToNewMessages;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)(var11);
            var1 = var2.showUnreadsNotice;
            var17 = var2.clearUnreadsNotice;
            var3 = _closure1_slot0;
            var2 = 4;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStrangerDangerWarning;
            var2 = var11.id;
            var7 = var7.bind(var8)(var2);
            var2 = 5;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var9 = var12.useInappropriateConversationBannerForChannel;
            var8 = var11.id;
            var2 = _closure1_slot3;
            var9 = var9.bind(var12)(var8, var2);
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useLikelyAtoWarning;
            var2 = var11.id;
            var8 = var3.bind(var4)(var2);
            var2 = var11.isForumPost;
            var2 = var2.bind(var11)();
            if(var2) { _fun0001_ip = 581; continue _fun0001 }
 165:
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 187; continue _fun0001 }
 171:
            var3 = var11.isDM;
            var3 = var3.bind(var11)();
            if(var3) { _fun0001_ip = 513; continue _fun0001 }
 187:
            if(!(var2 != var8)) { _fun0001_ip = 207; continue _fun0001 }
 191:
            var3 = var11.isDM;
            var3 = var3.bind(var11)();
            if(var3) { _fun0001_ip = 445; continue _fun0001 }
 207:
            if(!(var2 != var9)) { _fun0001_ip = 227; continue _fun0001 }
 211:
            var2 = var11.isDM;
            var2 = var2.bind(var11)();
            if(var2) { _fun0001_ip = 377; continue _fun0001 }
 227:
            if(var1) { _fun0001_ip = 273; continue _fun0001 }
 230:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['channel'] = var11;
            var1['handleScrollToNewMessages'] = var10;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 375; continue _fun0001;
 273:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var15 = _closure1_slot4;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 12;
            var12 = var16[var12];
            var13 = var14.bind(var5)(var12);
            var12 = {};
            var12['channel'] = var11;
            var12['clearUnreadsNotice'] = var17;
            var13 = var15.bind(var5)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = 8;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['channel'] = var11;
            var13['handleScrollToNewMessages'] = var10;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var2['children'] = var12;
            var1 = var4.bind(var5)(var3, var2);
 375:
            _fun0001_ip = 443; continue _fun0001;
 377:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 11;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var12 = var11.id;
            var2['channelId'] = var12;
            var9 = var9.id;
            var2['warningId'] = var9;
            var9 = var11.getRecipientId;
            var9 = var9.bind(var11)();
            var2['senderId'] = var9;
            var1 = var4.bind(var5)(var3, var2);
 443:
            _fun0001_ip = 511; continue _fun0001;
 445:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var11.id;
            var2['channelId'] = var9;
            var8 = var8.id;
            var2['warningId'] = var8;
            var8 = var11.getRecipientId;
            var8 = var8.bind(var11)();
            var2['senderId'] = var8;
            var1 = var4.bind(var5)(var3, var2);
 511:
            _fun0001_ip = 579; continue _fun0001;
 513:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var8 = var11.id;
            var2['channelId'] = var8;
            var7 = var7.id;
            var2['warningId'] = var7;
            var7 = var11.getRecipientId;
            var7 = var7.bind(var11)();
            var2['senderId'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 579:
            _fun0001_ip = 678; continue _fun0001;
 581:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 7;
            var6 = var12[var6];
            var7 = var8.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var11;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 8;
            var7 = var12[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['channel'] = var11;
            var7['handleScrollToNewMessages'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 678:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesWrapperHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();