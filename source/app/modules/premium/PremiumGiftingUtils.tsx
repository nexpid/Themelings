// app/modules/premium/PremiumGiftingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var5 = {};
    var4 = 'action';
    var5['ACTION'] = var4;
    var4 = 'loop';
    var5['LOOP'] = var4;
    var4 = 'idle';
    var5['IDLE'] = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 293; continue _fun0001 }
 16:
                    var2 = null;
                    if(!(var2 != var6)) { _fun0001_ip = 257; continue _fun0001 }
 25:
                    if(!(var2 != var7)) { _fun0001_ip = 221; continue _fun0001 }
 32:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var2);
                    var4 = var5.openPrivateChannel;
                    var2 = {};
                    var7 = var7.id;
                    var2['recipientIds'] = var7;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var4 = _closure1_slot4;
                            var3 = var4.getChannel;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 3;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var2 = null;
                            var4 = var2 != var1;
                            var3 = 'PrivateChannel is null';
                            var3 = var5.bind(var6)(var4, var3);
                            if(!(var2 != var1)) { _fun0002_ip = 66; continue _fun0002 }
 64:
                            return var1;
 66:
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
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=103);
 101:
                    return var2;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 218; continue _fun0001 }
 109:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 4;
                    var4 = var10[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.getGiftCodeURL;
                    var9 = var4.bind(var5)(var6);
                    var4 = _closure1_slot1;
                    var3 = 5;
                    var3 = var10[var3];
                    var7 = var4.bind(var8)(var3);
                    var6 = var7.sendMessage;
                    var5 = var2.id;
                    var3 = 6;
                    var3 = var10[var3];
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.parse;
                    var13 = var3.bind(var4)(var2, var9);
                    var3 = {};
                    var9 = true;
                    var3['isGiftLinkSentOnBehalfOfUser'] = var9;
                    var15 = var7;
                    var14 = var5;
                    var12 = undefined;
                    var11 = var3;
                    var3 = var15[var6](var14, var13, var12, var11, var10);
                    return var3;
 218:
                    return var2;
 221:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var14 = 'Recipient must be defined';
                    var15 = var3;
                    var2 = new var15[var4](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 257:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var14 = 'giftCode must be defined';
                    var15 = var3;
                    var2 = new var15[var4](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 293:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/PremiumGiftingUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['AnimationState'] = var5;
    var3['sendGiftMessage'] = var4;
    var2 = function() {
        var1 = undefined;
        return var1;
    };
    var3['unhandledGiftIntent'] = var2;
    return var1;
})();