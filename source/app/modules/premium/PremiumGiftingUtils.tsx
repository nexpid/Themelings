// app/modules/premium/PremiumGiftingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _sendGiftMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = null;
                    if(!(var2 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    if(!(var2 != var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var4[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.openPrivateChannel;
                    var2 = {};
                    var6 = var6.id;
                    var2['recipientIds'] = var6;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = _closure1_slot4;
                            var3 = var4.getChannel;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var2 = null;
                            var4 = var2 != var1;
                            var3 = 'PrivateChannel is null';
                            var3 = var5.bind(var6)(var4, var3);
                            if(!(var2 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            return var1;
case 8:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var8 = 'Channel must be defined';
                            var9 = var2;
                            var1 = new var9[var3](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=101);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 5;
                    var3 = var11[var3];
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.getGiftCodeURL;
                    var10 = var3.bind(var4)(var5);
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var3 = var11[var3];
                    var7 = var4.bind(var8)(var3);
                    var6 = var7.sendMessage;
                    var5 = var2.id;
                    var3 = 7;
                    var3 = var11[var3];
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.parse;
                    var14 = var3.bind(var4)(var2, var10);
                    var3 = {};
                    var10 = true;
                    var3['isGiftLinkSentOnBehalfOfUser'] = var10;
                    var9 = _closure1_slot5;
                    var9 = var9.GIFTING;
                    var3['location'] = var9;
                    var16 = var7;
                    var15 = var5;
                    var13 = undefined;
                    var12 = var3;
                    var3 = var16[var6](var15, var14, var13, var12, var11);
                    return var3;
case 12:
                    return var2;
case 6:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var15 = 'Recipient must be defined';
                    var16 = var3;
                    var2 = new var16[var4](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 4:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var15 = 'giftCode must be defined';
                    var16 = var3;
                    var2 = new var16[var4](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot5 = var4;
    var4 = {};
    var5 = 'action';
    var4['ACTION'] = var5;
    var5 = 'loop';
    var4['LOOP'] = var5;
    var5 = 'idle';
    var4['IDLE'] = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/PremiumGiftingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AnimationState'] = var4;
    var4 = function sendGiftMessage() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendGiftMessage'] = var4;
    var2 = function unhandledGiftIntent() {
        var1 = undefined;
        return var1;
    };
    var3['unhandledGiftIntent'] = var2;
    return var1;
})();