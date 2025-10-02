// app/modules/potions/ConsumableActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var11;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var11[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var11[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot5 = var5;
    var4 = {};
    var6 = 3;
    var7 = var11[var6];
    var7 = var10.bind(var1)(var7);
    var8 = var7.CONFETTI_POTION_SKU_ID;
    var7 = var5.FETCH_MESSAGE_CONFETTI_ENTITLEMENT;
    var4[var8] = var7;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.HD_STREAMING_POTION_SKU_ID;
    var5 = var5.FETCH_HD_STREAMING_ENTITLEMENT;
    var4[var6] = var5;
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = var10;
                    var5 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var11 = 'CONSUMABLES_PRICE_FETCH_STARTED';
                    var4['type'] = var11;
                    var4['skuId'] = var10;
                    var4 = var7.bind(var8)(var4);
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var4 = var7.bind(var5)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var12 = _closure1_slot5;
                    var11 = var12.CONSUMABLE_FETCH_PRICE;
                    var10 = var9;
                    var10 = var11.bind(var12)(var10);
                    var4['url'] = var10;
                    var10 = false;
                    var4['rejectWithError'] = var10;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=139);
case 5:
                    return var4;
case 6:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var6 = var4;
                    var7 = var4.body;
                    var8 = var7.price;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = var6.body;
                    var7 = var6.price;
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var3];
                    var10 = var8.bind(var5)(var6);
                    var8 = var10.dispatch;
                    var6 = {};
                    var11 = 'CONSUMABLES_PRICE_FETCH_SUCCEEDED';
                    var6['type'] = var11;
                    var11 = var9;
                    var6['skuId'] = var11;
                    var6['price'] = var7;
                    var6 = var8.bind(var10)(var6);
                    var6 = {};
                    var8 = var7.amount;
                    var6['amount'] = var8;
                    var8 = var7.currency;
                    var6['currency'] = var8;
                    var7 = var7.currency_exponent;
                    var6['exponent'] = var7;
case 11: // try_end0
                    return var6;
case 9: // try_start_1
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var3];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'CONSUMABLES_PRICE_FETCH_FAILED';
                    var6['type'] = var10;
                    var10 = var9;
                    var6['skuId'] = var10;
                    var6 = var7.bind(var8)(var6);
                    var6 = global;
                    var8 = var6.Error;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var13 = 'price not found';
                    var14 = var7;
                    var6 = new var14[var8](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 7: // try_end1
                    return var4;
case 12: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'CONSUMABLES_PRICE_FETCH_FAILED';
                    var3['type'] = var10;
                    var3['skuId'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var2 = 6;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
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
    var8 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 3:
                    var6 = var8;
                    var4 = undefined;
                    var7 = undefined;
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 4;
                    var3 = var3[var5];
                    var10 = var9.bind(var4)(var3);
                    var9 = var10.dispatch;
                    var3 = {};
                    var11 = 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED';
                    var3['type'] = var11;
                    var3['skuId'] = var8;
                    var3 = var9.bind(var10)(var3);
                    var3 = _closure1_slot6;
                    var3 = var3[var8];
                    var12 = null;
                    if(!(var12 != var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var9 = var3.HTTP;
                    var8 = var9.get;
                    var3 = {};
                    var11 = _closure1_slot6;
                    var10 = var6;
                    var10 = var11[var10];
                    var3['url'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=149);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var7 = var3;
                    var8 = var3.body;
                    var8 = var8.entitlement;
                    var8 = var12 != var8;
                    var12 = null;
                    if(!var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var10 = _closure1_slot4;
                    var9 = var10.createFromServer;
                    var8 = var7;
                    var8 = var8.body;
                    var8 = var8.entitlement;
                    var12 = var9.bind(var10)(var8);
case 20:
                    var8 = var7.body;
                    var11 = var8.num_potions;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var5];
                    var10 = var9.bind(var4)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var13 = 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED';
                    var8['type'] = var13;
                    var13 = var6;
                    var8['skuId'] = var13;
                    var8['entitlement'] = var12;
                    var8['numPotions'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var7 = var7.body;
                    var7 = var7.entitlement;
case 22: // try_end0
                    return var7;
case 18:
                    return var3;
case 23: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var5];
                    var10 = var7.bind(var4)(var3);
                    var7 = var10.dispatch;
                    var3 = {};
                    var11 = 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED';
                    var3['type'] = var11;
                    var11 = var6;
                    var3['skuId'] = var11;
                    var3 = var7.bind(var10)(var3);
                    var7 = _closure1_slot0;
                    var3 = 6;
                    var3 = var9[var3];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.APIError;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {constructor: {value: var3}});
                    var15 = var7;
                    var14 = var8;
                    var3 = new var15[var3](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var7;
                    throw var3;
case 14:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.dispatch;
                    var2 = {};
                    var7 = 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED';
                    var2['type'] = var7;
                    var2['skuId'] = var6;
                    var2 = var3.bind(var5)(var2);
                    var2 = global;
                    var3 = var2.Error;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'Invalid consumable skuId: ';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 13:
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
    var7 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = arg1;
case 3: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.CONSUME_HD_STREAMING_POTION;
                    var2['url'] = var6;
                    var6 = {};
                    var6['channel_id'] = var8;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=90);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 28:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var4 = var9[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'CLEAR_CONSUMED_ENTITLEMENT';
                    var4['type'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 3;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.HD_STREAMING_POTION_SKU_ID;
                    var4['skuId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 29: // try_end0
                    return var3;
case 10:
                    return var2;
case 30: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var11 = var3;
                    var10 = var4;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 24:
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
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 25:
                    var10 = arg1;
                    var9 = arg2;
                    var4 = arg3;
case 32: // try_start_0
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.post;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.CONSUME_MESSAGE_CONFETTI_POTION;
                    var2['url'] = var8;
                    var8 = {};
                    var8['channel_id'] = var10;
                    var8['message_id'] = var9;
                    var10 = _closure1_slot7;
                    var9 = var4;
                    var9 = var10.bind(var3)(var9);
                    var8['emoji_name'] = var9;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=118);
case 33:
                    return var2;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 4;
                    var5 = var11[var5];
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var9 = 'CLEAR_CONSUMED_ENTITLEMENT';
                    var5['type'] = var9;
                    var10 = _closure1_slot0;
                    var9 = 3;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.CONFETTI_POTION_SKU_ID;
                    var5['skuId'] = var9;
                    var5 = var7.bind(var8)(var5);
case 37: // try_end0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 7;
                    var6 = var9[var6];
                    var7 = var5.bind(var3)(var6);
                    var6 = var7.disambiguatedEmojiToMessagePotionEmoji;
                    var8 = var6.bind(var7)(var4);
                    var4 = 8;
                    var4 = var9[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.triggerConfettiByEmoji;
                    var4 = 9;
                    var4 = var9[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.ConfettiTriggerAnalyticsLocation;
                    var12 = var4.MessageSent;
                    var13 = true;
                    var16 = var7;
                    var15 = var8;
                    var14 = undefined;
                    var4 = var16[var6](var15, var14, var13, var12, var11);
                    return var3;
case 35:
                    return var2;
case 38: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var16 = var3;
                    var15 = var4;
                    var2 = new var16[var2](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 31:
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
    var5 = var4.bind(var1)();
    var4 = function convertEmojiToEmojiName(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.id;
            var1 = null;
            if(!(var1 == var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var2.optionallyDiverseSequence;
            _fun0005_ip = 41; continue _fun0005;
case 39:
            var6 = var2.name;
            var5 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var1 = var4.bind(var3)(var6, var2, var5);
case 41:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var9 = 10;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/potions/ConsumableActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['fetchConsumablePrice'] = var8;
    var3['fetchConsumableEntitlement'] = var7;
    var3['consumeHDPotion'] = var6;
    var3['consumeMessageConfettiPotion'] = var5;
    var3['convertEmojiToEmojiName'] = var4;
    var4 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CONSUMABLES_CLEAR_ERROR';
        var2['type'] = var5;
        var5 = arg1;
        var2['skuId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearConsumableError'] = var4;
    var2 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_PREVIOUS_GO_LIVE_SETTINGS';
        var2['type'] = var5;
        var5 = arg1;
        var2['previousGoLiveSettings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['savePreviousGoLiveSettings'] = var2;
    return var1;
})();