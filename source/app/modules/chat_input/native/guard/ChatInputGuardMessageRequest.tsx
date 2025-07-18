// app/modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function ChatInputGuardMessageRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var2 = var6.useNavigation;
            var2 = var2.bind(var6)();
            var _closure2_slot1 = var2;
            var2 = 5;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var2);
            var2 = 6;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useMessageRequestActions;
            var2 = {};
            var2['user'] = var6;
            var6 = function onError() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.EDYbS0;
                var5 = var8.bind(var9)(var5);
                var2['content'] = var5;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onError'] = var6;
            var6 = function onRejectSuccess() {
                var2 = _closure2_slot1;
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2['onRejectSuccess'] = var6;
            var2 = var3.bind(var5)(var2);
            var3 = var2.acceptMessageRequest;
            var _closure2_slot2 = var3;
            var3 = var2.rejectMessageRequest;
            var _closure2_slot3 = var3;
            var10 = var2.isAcceptLoading;
            var5 = var2.isRejectLoading;
            var12 = var2.isUserProfileLoading;
            var11 = var2.isOptimisticAccepted;
            var6 = var2.isOptimisticRejected;
            var7 = var10;
            if(var10) { _fun0001_ip = 207; continue _fun0001 }
 204:
            var7 = var5;
 207:
            if(var7) { _fun0001_ip = 213; continue _fun0001 }
 210:
            var7 = var12;
 213:
            if(var7) { _fun0001_ip = 219; continue _fun0001 }
 216:
            var7 = var11;
 219:
            if(var7) { _fun0001_ip = 225; continue _fun0001 }
 222:
            var7 = var6;
 225:
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 112; continue _fun0002 }
 10:
                            var2 = var3.stopPropagation;
                            var2 = var2.bind(var3)();
                            var5 = _closure2_slot2;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=47);
 45:
                            return var2;
 47:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 109; continue _fun0002 }
 53:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 10;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.transitionToChannel;
                            var4 = _closure2_slot0;
                            var5 = var4.id;
                            var4 = {};
                            var8 = true;
                            var4['navigationReplace'] = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
 109:
                            return var2;
 112:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var14 = var2.bind(var4)();
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 59; continue _fun0003 }
 10:
                            var2 = var3.stopPropagation;
                            var2 = var2.bind(var3)();
                            var4 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            SaveGenerator(address=47);
 45:
                            return var2;
 47:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 56; continue _fun0003 }
 53:
                            return var3;
 56:
                            return var2;
 59:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var8 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 11;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = 'button-action';
            var1['type'] = var13;
            var18 = _closure1_slot0;
            var13 = 8;
            var16 = var15[var13];
            var16 = var18.bind(var4)(var16);
            var19 = var16.intl;
            var17 = var19.string;
            var16 = var15[var13];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.e/eQVF;
            var16 = var17.bind(var19)(var16);
            var1['message'] = var16;
            var16 = var15[var13];
            var16 = var18.bind(var4)(var16);
            var19 = var16.intl;
            var17 = var19.string;
            var16 = var15[var13];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.HcVzGB;
            var16 = var17.bind(var19)(var16);
            var1['subtext'] = var16;
            var16 = var15[var13];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var13];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.Kz8Pws;
            var15 = var16.bind(var17)(var15);
            var1['buttonPrimaryText'] = var15;
            var1['buttonPrimaryOnPress'] = var14;
            var1['buttonPrimaryDisabled'] = var7;
            if(var10) { _fun0001_ip = 458; continue _fun0001 }
 455:
            var10 = var12;
 458:
            if(var10) { _fun0001_ip = 464; continue _fun0001 }
 461:
            var10 = var11;
 464:
            var1['buttonPrimaryLoading'] = var10;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.B2nygY;
            var9 = var10.bind(var11)(var9);
            var1['buttonSecondaryText'] = var9;
            var1['buttonSecondaryOnPress'] = var8;
            var1['buttonSecondaryDisabled'] = var7;
            if(var5) { _fun0001_ip = 544; continue _fun0001 }
 541:
            var5 = var6;
 544:
            var1['buttonSecondaryLoading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();