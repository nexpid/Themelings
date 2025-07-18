// app/modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleConfirm() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _handleConfirm() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 58; continue _fun0001 }
 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.clearPendingRelationships;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=46);
 44:
                    return var2;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 55; continue _fun0001 }
 52:
                    return var3;
 55:
                    return var2;
 58:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ClearAllIncomingRequestsAlertModal(arg1) {
        var1 = arg1;
        var12 = var1.incomingRequestCount;
        var4 = _closure1_slot4;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var10 = 4;
        var1 = var15[var10];
        var3 = undefined;
        var1 = var14.bind(var3)(var1);
        var2 = var1.AlertModal;
        var1 = {};
        var9 = 5;
        var5 = var15[var9];
        var5 = var14.bind(var3)(var5);
        var7 = var5.intl;
        var6 = var7.string;
        var5 = var15[var9];
        var5 = var14.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.z2pFjo;
        var5 = var6.bind(var7)(var5);
        var1['title'] = var5;
        var5 = var15[var9];
        var5 = var14.bind(var3)(var5);
        var11 = var5.intl;
        var7 = var11.formatToPlainString;
        var5 = var15[var9];
        var5 = var14.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5.0nTvEx;
        var5 = {};
        var5['incomingRequestCount'] = var12;
        var5 = var7.bind(var11)(var6, var5);
        var1['content'] = var5;
        var7 = _closure1_slot5;
        var5 = 6;
        var5 = var15[var5];
        var5 = var14.bind(var3)(var5);
        var6 = var5.AlertActions;
        var5 = {};
        var11 = var15[var10];
        var11 = var14.bind(var3)(var11);
        var12 = var11.AlertActionButton;
        var11 = {};
        var13 = 'destructive';
        var11['variant'] = var13;
        var8 = _closure1_slot6;
        var11['onPress'] = var8;
        var8 = var15[var9];
        var8 = var14.bind(var3)(var8);
        var16 = var8.intl;
        var13 = var16.string;
        var8 = var15[var9];
        var8 = var14.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.cY+Ooa;
        var8 = var13.bind(var16)(var8);
        var11['text'] = var8;
        var8 = 'confirm';
        var11 = var4.bind(var3)(var12, var11, var8);
        var8 = new Array(2);
        var8[0] = var11;
        var10 = var15[var10];
        var10 = var14.bind(var3)(var10);
        var11 = var10.AlertActionButton;
        var10 = {};
        var12 = 'secondary';
        var10['variant'] = var12;
        var12 = var15[var9];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var9 = var15[var9];
        var9 = var14.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.ETE/oK;
        var9 = var12.bind(var13)(var9);
        var10['text'] = var9;
        var9 = 'cancel';
        var9 = var4.bind(var3)(var11, var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['actions'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();