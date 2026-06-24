// app/modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var1 = function _onAcceptClick() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var2 = var3.stopPropagation;
                            var2 = var2.bind(var3)();
                            var5 = _closure2_slot2;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=47);
case 4:
                            return var2;
case 5:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 11;
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
case 6:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot4 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot4 = var1;
            var1 = function _onRejectClick() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 3:
                            var2 = var3.stopPropagation;
                            var2 = var2.bind(var3)();
                            var4 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            SaveGenerator(address=47);
case 4:
                            return var2;
case 5:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 7:
                            return var3;
case 9:
                            return var2;
case 8:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot5 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot5 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useNavigation;
            var1 = var1.bind(var5)();
            var _closure2_slot1 = var1;
            var1 = 5;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useIsMessageRequestRestrictedViewer;
            var1 = 'ChatInputGuardMessageRequest';
            var9 = var5.bind(var6)(var1);
            var1 = 6;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = 7;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useMessageRequestActions;
            var1 = {};
            var1['user'] = var5;
            var5 = function handleRequestError() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 9;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.EDYbS+;
                var5 = var8.bind(var9)(var5);
                var2['content'] = var5;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onError'] = var5;
            var5 = function handleRejectSuccess() {
                var2 = _closure2_slot1;
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1['onRejectSuccess'] = var5;
            var1 = var2.bind(var3)(var1);
            var2 = var1.acceptMessageRequest;
            _closure2_slot2 = var2;
            var2 = var1.rejectMessageRequest;
            _closure2_slot3 = var2;
            var10 = var1.isAcceptLoading;
            var5 = var1.isRejectLoading;
            var13 = var1.isUserProfileLoading;
            var11 = var1.isOptimisticAccepted;
            var6 = var1.isOptimisticRejected;
            var7 = var10;
            if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var5;
case 10:
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var13;
case 12:
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var11;
case 14:
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var6;
case 16:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 12;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var14 = 'button-action';
            var1['type'] = var14;
            var16 = _closure1_slot0;
            var14 = 9;
            var17 = var15[var14];
            var17 = var16.bind(var4)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = var15[var14];
            var17 = var16.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.e/eQVB;
            var17 = var18.bind(var19)(var17);
            var1['message'] = var17;
            var15 = var15[var14];
            var15 = var16.bind(var4)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var14];
            var15 = var18.bind(var4)(var15);
            var18 = var15.t;
            if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var15 = var18.HcVzGI;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var15 = var18.YQ0uUE;
case 20:
            var15 = var16.bind(var17)(var15);
            var1['subtext'] = var15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var14];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var14];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.Kz8Pwr;
            var15 = var16.bind(var17)(var15);
            var1['buttonPrimaryText'] = var15;
            var15 = function onAcceptClick(arg1) {
                var1 = undefined;
                var4 = _closure2_slot4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1['buttonPrimaryOnPress'] = var15;
            var1['buttonPrimaryDisabled'] = var7;
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = var13;
case 21:
            if(var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = var11;
case 23:
            var1['buttonPrimaryLoading'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            if(var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = var12.B2nygW;
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var9 = var12.BVN4pL;
case 27:
            var9 = var10.bind(var11)(var9);
            var1['buttonSecondaryText'] = var9;
            var8 = function onRejectClick(arg1) {
                var1 = undefined;
                var4 = _closure2_slot5;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1['buttonSecondaryOnPress'] = var8;
            var1['buttonSecondaryDisabled'] = var7;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = var6;
case 28:
            var1['buttonSecondaryLoading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();