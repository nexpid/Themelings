// app/modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.TAKEOVER_MODAL_KEY;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showTakeoverModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.warningId;
            var9 = var1.warningType;
            var8 = var1.senderId;
            var7 = var1.channelId;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEligibleForInappropriateConversationWarning;
            var3 = {};
            var6 = 'takeover-modal';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0001_ip = 169; continue _fun0001 }
 77:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var11 = _closure1_slot0;
            var4 = 4;
            var4 = var3[var4];
            var11 = var11.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var11.bind(var1)(var4, var3);
            var3 = {};
            var3['warningId'] = var10;
            var3['warningType'] = var9;
            var3['senderId'] = var8;
            var3['channelId'] = var7;
            var2 = _closure1_slot3;
            var2 = var5.bind(var6)(var4, var3, var2);
 169:
            return var1;
        }
    };
    var3['showTakeoverModal'] = var2;
    return var1;
})();