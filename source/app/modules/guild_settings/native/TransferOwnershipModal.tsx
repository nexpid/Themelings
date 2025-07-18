// app/modules/guild_settings/native/TransferOwnershipModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function closeModal() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.close;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TransferOwnershipModalScenes;
    var _closure1_slot5 = var7;
    var4 = var4.TransferOwnershipVerificationTypes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/TransferOwnershipModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TransferOwnershipModal(arg1) {
        var2 = arg1;
        var7 = var2.guild;
        var _closure2_slot0 = var7;
        var6 = var2.toUser;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = function getScreens(arg1, arg2) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = arg2;
                var _closure4_slot1 = var1;
                var5 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 5;
                var1 = var9[var6];
                var7 = undefined;
                var1 = var8.bind(var7)(var1);
                var1 = var1.ImpressionGroups;
                var1 = var1.GUILD_TRANSFER_OWNERSHIP_FLOW;
                var5['impression_group'] = var1;
                var1 = {};
                var2 = _closure1_slot5;
                var13 = var2.TRANFSER_OWNERSHIP;
                var3 = {};
                var11 = 6;
                var10 = var9[var11];
                var10 = var8.bind(var7)(var10);
                var15 = var10.intl;
                var14 = var15.string;
                var10 = var9[var11];
                var10 = var8.bind(var7)(var10);
                var10 = var10.t;
                var10 = var10.Z5s7PD;
                var10 = var14.bind(var15)(var10);
                var3['headerTitle'] = var10;
                var10 = 7;
                var14 = var9[var10];
                var15 = var8.bind(var7)(var14);
                var14 = var15.getHeaderCloseButton;
                var12 = _closure1_slot8;
                var14 = var14.bind(var15)(var12);
                var3['headerLeft'] = var14;
                var14 = var9[var6];
                var14 = var8.bind(var7)(var14);
                var14 = var14.ImpressionNames;
                var14 = var14.GUILD_TRANSFER_OWNERSHIP;
                var3['impressionName'] = var14;
                var3['impressionProperties'] = var5;
                var14 = function render() {
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure4_slot0;
                    var1['guild'] = var6;
                    var5 = _closure4_slot1;
                    var1['toUser'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var3['render'] = var14;
                var1[var13] = var3;
                var3 = var2.CONFIRM_EMAIL_CODE;
                var2 = {};
                var13 = var9[var11];
                var13 = var8.bind(var7)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.Z5s7PD;
                var11 = var13.bind(var14)(var11);
                var2['headerTitle'] = var11;
                var10 = var9[var10];
                var11 = var8.bind(var7)(var10);
                var10 = var11.getHeaderCloseButton;
                var10 = var10.bind(var11)(var12);
                var2['headerLeft'] = var10;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.ImpressionNames;
                var6 = var6.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
                var2['impressionName'] = var6;
                var2['impressionProperties'] = var5;
                var4 = function render() {
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 9;
                    var1 = var9[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0001_ip = 95; continue _fun0001 }
 7:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var3 = 10;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var7 = var5.bind(var3)(var4);
                                    var6 = var7.transferOwnership;
                                    var4 = _closure4_slot0;
                                    var11 = var4.id;
                                    var3 = _closure4_slot1;
                                    var10 = var3.id;
                                    var2 = _closure1_slot6;
                                    var9 = var2.EMAIL;
                                    var8 = arg1;
                                    var12 = var7;
                                    var2 = var12[var6](var11, var10, var9, var8, var7);
                                    SaveGenerator(address=83);
 81:
                                    return var2;
 83:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0001_ip = 92; continue _fun0001 }
 89:
                                    return var2;
 92:
                                    return var2;
 95:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure6_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure6_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var7 = var7.bind(var3)();
                    var1['onFormSubmit'] = var7;
                    var7 = function onSuccess() {
                        var3 = _closure1_slot8;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 10;
                        var3 = var4[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.close;
                        var3 = var3.bind(var5)();
                        var3 = _closure1_slot0;
                        var2 = 11;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.showTransferOwnershipSuccess;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var1['onSuccess'] = var7;
                    var7 = _closure1_slot3;
                    var6 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 74; continue _fun0002 }
 7:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 10;
                                var2 = var3[var2];
                                var3 = undefined;
                                var6 = var4.bind(var3)(var2);
                                var5 = var6.sendTransferOwnershipPincode;
                                var2 = _closure4_slot0;
                                var4 = var2.id;
                                var2 = true;
                                var2 = var5.bind(var6)(var4, var2);
                                SaveGenerator(address=62);
 60:
                                return var2;
 62:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0002_ip = 71; continue _fun0002 }
 68:
                                return var3;
 71:
                                return var2;
 74:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var6 = var7.bind(var3)(var6);
                    var1['onResend'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 6;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.Z5s7PD;
                    var6 = var7.bind(var10)(var6);
                    var1['headerText'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.Z5s7PD;
                    var5 = var6.bind(var7)(var5);
                    var1['confirmButtonText'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var6 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot5;
        var5 = var5.TRANFSER_OWNERSHIP;
        var1['initialRouteName'] = var5;
        var5 = 6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.13/7kZ;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();