// app/modules/forwarding/ForwardActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MessageSendLocation;
    var _closure1_slot6 = var2;
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
                    if(var2) { _fun0001_ip = 675; continue _fun0001 }
 10:
                    var5 = _closure1_slot4;
                    var3 = var5.getChannel;
                    var2 = _closure2_slot1;
                    var12 = var3.bind(var5)(var2);
                    var3 = var5.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var3 = var3.bind(var5)(var2);
                    var2 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0001_ip = 78; continue _fun0001 }
 63:
                    var2 = _closure2_slot2;
                    var2 = var2.isICYMIGameContentForwarding;
                    if(var2) { _fun0001_ip = 94; continue _fun0001 }
 78:
                    var5 = var7 == var3;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 92; continue _fun0001 }
 87:
                    var2 = var3.guild_id;
 92:
                    _fun0001_ip = 122; continue _fun0001;
 94:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 4;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var6);
                    var2 = var5.GAME_CONTENT_GUILD_ID;
 122:
                    if(!(var7 == var3)) { _fun0001_ip = 133; continue _fun0001 }
 126:
                    if(!(var7 != var2)) { _fun0001_ip = 639; continue _fun0001 }
 133:
                    if(!(var7 != var12)) { _fun0001_ip = 603; continue _fun0001 }
 140:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var13 = 5;
                    var5 = var6[var13];
                    var3 = undefined;
                    var9 = var8.bind(var3)(var5);
                    var8 = var9.parse;
                    var5 = '';
                    var14 = var8.bind(var9)(var12, var5);
                    var9 = {};
                    var9['guild_id'] = var2;
                    var2 = _closure2_slot0;
                    var5 = var2.channel_id;
                    var9['channel_id'] = var5;
                    var2 = var2.id;
                    var9['message_id'] = var2;
                    var5 = _closure1_slot0;
                    var2 = 6;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.MessageReferenceTypes;
                    var2 = var2.FORWARD;
                    var9['type'] = var2;
                    var2 = _closure2_slot2;
                    var5 = var7 == var2;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 262; continue _fun0001 }
 252:
                    var5 = _closure2_slot2;
                    var2 = var5.onlyAttachmentIds;
 262:
                    if(!(var7 == var2)) { _fun0001_ip = 298; continue _fun0001 }
 266:
                    var2 = _closure2_slot2;
                    var5 = var7 == var2;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 289; continue _fun0001 }
 279:
                    var5 = _closure2_slot2;
                    var2 = var5.onlyEmbedIndices;
 289:
                    var5 = var7 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0001_ip = 331; continue _fun0001 }
 298:
                    var5 = {};
                    var6 = _closure2_slot2;
                    var8 = var6.onlyAttachmentIds;
                    var5['attachment_ids'] = var8;
                    var6 = var6.onlyEmbedIndices;
                    var5['embed_indices'] = var6;
                    var2 = var5;
 331:
                    var9['forward_only'] = var2;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 7;
                    var2 = var2[var6];
                    var11 = var5.bind(var3)(var2);
                    var8 = var11.sendMessage;
                    var19 = var12.id;
                    var2 = {};
                    var2['messageReference'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.FORWARDING;
                    var2['location'] = var9;
                    var9 = false;
                    var2['eagerDispatch'] = var9;
                    var20 = var11;
                    var18 = var14;
                    var17 = false;
                    var16 = var2;
                    var2 = var20[var8](var19, var18, var17, var16, var15);
                    SaveGenerator(address=416);
 414:
                    return var2;
 416:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 600; continue _fun0001 }
 425:
                    var5 = _closure2_slot2;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if(var8) { _fun0001_ip = 448; continue _fun0001 }
 438:
                    var8 = _closure2_slot2;
                    var5 = var8.withMessage;
 448:
                    var5 = var7 == var5;
                    if(var5) { _fun0001_ip = 491; continue _fun0001 }
 455:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 8;
                    var7 = var11[var7];
                    var11 = var8.bind(var3)(var7);
                    var8 = var11.isRatelimitedInChannel;
                    var7 = _closure1_slot5;
                    var5 = var8.bind(var11)(var12, var7);
 491:
                    if(var5) { _fun0001_ip = 597; continue _fun0001 }
 494:
                    var11 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = var5[var6];
                    var8 = var11.bind(var3)(var6);
                    var7 = var8.sendMessage;
                    var6 = var12.id;
                    var5 = var5[var13];
                    var11 = var11.bind(var3)(var5);
                    var5 = var11.parse;
                    var4 = _closure2_slot2;
                    var4 = var4.withMessage;
                    var18 = var5.bind(var11)(var12, var4);
                    var4 = {};
                    var10 = _closure1_slot6;
                    var10 = var10.FORWARDING;
                    var4['location'] = var10;
                    var20 = var8;
                    var19 = var6;
                    var17 = false;
                    var16 = var4;
                    var4 = var20[var7](var19, var18, var17, var16, var15);
                    SaveGenerator(address=588);
 586:
                    return var4;
 588:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 597; continue _fun0001 }
 594:
                    return var4;
 597:
                    return var3;
 600:
                    return var2;
 603:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var19 = 'Unable to find destination channel for message';
                    var20 = var3;
                    var2 = new var20[var4](var19, var18);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 639:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var19 = 'Unable to find original channel for message';
                    var20 = var3;
                    var2 = new var20[var4](var19, var18);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 675:
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
        var2 = 9;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var4 = var5.map;
        var1 = function(arg1) {
            var5 = _closure1_slot7;
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
    var _closure1_slot7 = var2;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/ForwardActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();