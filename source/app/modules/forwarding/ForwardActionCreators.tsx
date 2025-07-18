// app/modules/forwarding/ForwardActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function sendForward(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 635; continue _fun0001 }
 10:
                    var5 = _closure1_slot4;
                    var3 = var5.getChannel;
                    var2 = _closure2_slot1;
                    var11 = var3.bind(var5)(var2);
                    var3 = var5.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var3 = var3.bind(var5)(var2);
                    var2 = _closure2_slot2;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0001_ip = 76; continue _fun0001 }
 63:
                    var2 = _closure2_slot2;
                    var2 = var2.isICYMIGameContentForwarding;
                    if(var2) { _fun0001_ip = 92; continue _fun0001 }
 76:
                    var5 = var9 == var3;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 90; continue _fun0001 }
 85:
                    var2 = var3.guild_id;
 90:
                    _fun0001_ip = 120; continue _fun0001;
 92:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var2 = var5.GAME_CONTENT_GUILD_ID;
 120:
                    if(!(var9 == var3)) { _fun0001_ip = 131; continue _fun0001 }
 124:
                    if(!(var9 != var2)) { _fun0001_ip = 599; continue _fun0001 }
 131:
                    if(!(var9 != var11)) { _fun0001_ip = 563; continue _fun0001 }
 138:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var12 = 4;
                    var5 = var7[var12];
                    var3 = undefined;
                    var10 = var8.bind(var3)(var5);
                    var8 = var10.parse;
                    var5 = '';
                    var14 = var8.bind(var10)(var11, var5);
                    var8 = {};
                    var8['guild_id'] = var2;
                    var2 = _closure2_slot0;
                    var5 = var2.channel_id;
                    var8['channel_id'] = var5;
                    var2 = var2.id;
                    var8['message_id'] = var2;
                    var5 = _closure1_slot0;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.MessageReferenceTypes;
                    var2 = var2.FORWARD;
                    var8['type'] = var2;
                    var2 = _closure2_slot2;
                    var5 = var9 == var2;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 260; continue _fun0001 }
 250:
                    var5 = _closure2_slot2;
                    var2 = var5.onlyAttachmentIds;
 260:
                    if(!(var9 == var2)) { _fun0001_ip = 296; continue _fun0001 }
 264:
                    var2 = _closure2_slot2;
                    var5 = var9 == var2;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 287; continue _fun0001 }
 277:
                    var5 = _closure2_slot2;
                    var2 = var5.onlyEmbedIndices;
 287:
                    var5 = var9 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0001_ip = 329; continue _fun0001 }
 296:
                    var5 = {};
                    var7 = _closure2_slot2;
                    var10 = var7.onlyAttachmentIds;
                    var5['attachment_ids'] = var10;
                    var7 = var7.onlyEmbedIndices;
                    var5['embed_indices'] = var7;
                    var2 = var5;
 329:
                    var8['forward_only'] = var2;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 6;
                    var2 = var2[var5];
                    var13 = var7.bind(var3)(var2);
                    var10 = var13.sendMessage;
                    var19 = var11.id;
                    var2 = {};
                    var2['messageReference'] = var8;
                    var8 = false;
                    var2['eagerDispatch'] = var8;
                    var20 = var13;
                    var18 = var14;
                    var17 = false;
                    var16 = var2;
                    var2 = var20[var10](var19, var18, var17, var16, var15);
                    SaveGenerator(address=400);
 398:
                    return var2;
 400:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 560; continue _fun0001 }
 409:
                    var7 = _closure2_slot2;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0001_ip = 432; continue _fun0001 }
 422:
                    var10 = _closure2_slot2;
                    var7 = var10.withMessage;
 432:
                    var7 = var9 == var7;
                    if(var7) { _fun0001_ip = 475; continue _fun0001 }
 439:
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 7;
                    var9 = var13[var9];
                    var13 = var10.bind(var3)(var9);
                    var10 = var13.isRatelimitedInChannel;
                    var9 = _closure1_slot5;
                    var7 = var10.bind(var13)(var11, var9);
 475:
                    if(var7) { _fun0001_ip = 557; continue _fun0001 }
 478:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = var9[var5];
                    var7 = var10.bind(var3)(var5);
                    var6 = var7.sendMessage;
                    var5 = var11.id;
                    var9 = var9[var12];
                    var10 = var10.bind(var3)(var9);
                    var9 = var10.parse;
                    var4 = _closure2_slot2;
                    var4 = var4.withMessage;
                    var4 = var9.bind(var10)(var11, var4);
                    var4 = var6.bind(var7)(var5, var4, var8);
                    SaveGenerator(address=548);
 546:
                    return var4;
 548:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 557; continue _fun0001 }
 554:
                    return var4;
 557:
                    return var3;
 560:
                    return var2;
 563:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var19 = 'Unable to find destination channel for message';
                    var20 = var3;
                    var2 = new var20[var4](var19, var18);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 599:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var19 = 'Unable to find original channel for message';
                    var20 = var3;
                    var2 = new var20[var4](var19, var18);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 635:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['sendForward'] = var7;
    var7 = function sendForwards(arg1, arg2, arg3) {
        var5 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 8;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var4 = var5.map;
        var1 = function(arg1) {
            var5 = _closure1_slot6;
            var4 = var5.sendForward;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['sendForwards'] = var7;
    var _closure1_slot6 = var2;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/ForwardActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();