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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MessageFlags;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MessageSendLocation;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function sendForward(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot5;
                    var4 = var5.getChannel;
                    var3 = _closure2_slot1;
                    var13 = var4.bind(var5)(var3);
                    var4 = var5.getChannel;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure2_slot2;
                    var5 = var5.isICYMIGameContentForwarding;
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                    var5 = var4 == var3;
                    var6 = undefined;
                    if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var6 = var3.guild_id;
case 7:
                    _fun0001_ip = 9; continue _fun0001;
case 6:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var6 = var5.GAME_CONTENT_GUILD_ID;
case 9:
                    if(!(var4 == var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    if(!(var4 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 10:
                    if(!(var4 != var13)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var14 = 7;
                    var5 = var8[var14];
                    var3 = undefined;
                    var9 = var7.bind(var3)(var5);
                    var7 = var9.parse;
                    var5 = '';
                    var16 = var7.bind(var9)(var13, var5);
                    var9 = {};
                    var9['guild_id'] = var6;
                    var6 = _closure2_slot0;
                    var7 = var6.channel_id;
                    var9['channel_id'] = var7;
                    var6 = var6.id;
                    var9['message_id'] = var6;
                    var7 = _closure1_slot0;
                    var6 = 8;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.MessageReferenceTypes;
                    var6 = var6.FORWARD;
                    var9['type'] = var6;
                    var6 = _closure2_slot2;
                    var7 = var4 == var6;
                    var6 = undefined;
                    if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var7 = _closure2_slot2;
                    var6 = var7.onlyAttachmentIds;
case 15:
                    if(!(var4 == var6)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var6 = _closure2_slot2;
                    var7 = var4 == var6;
                    var6 = undefined;
                    if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var7 = _closure2_slot2;
                    var6 = var7.onlyEmbedIndices;
case 19:
                    var7 = var4 != var6;
                    var6 = undefined;
                    if(!var7) { _fun0001_ip = 21; continue _fun0001 }
case 17:
                    var7 = {};
                    var8 = _closure2_slot2;
                    var10 = var8.onlyAttachmentIds;
                    var7['attachment_ids'] = var10;
                    var8 = var8.onlyEmbedIndices;
                    var7['embed_indices'] = var8;
                    var6 = var7;
case 21:
                    var9['forward_only'] = var6;
                    var6 = _closure2_slot2;
                    var6 = var4 == var6;
                    var7 = undefined;
                    if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var2 = _closure2_slot2;
                    var7 = var2.withMessage;
case 22:
                    var2 = var4 != var7;
                    var15 = 0;
                    var10 = 0;
                    var12 = var7;
                    if(!var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var3)(var2);
                    var8 = var2.bind(var3)(var7);
                    var6 = _closure1_slot3;
                    var2 = 2;
                    var8 = var6.bind(var3)(var8, var2);
                    var6 = var8[var15];
                    var2 = 1;
                    var2 = var8[var2];
                    var10 = 0;
                    var12 = var7;
                    if(!var6) { _fun0001_ip = 24; continue _fun0001 }
case 26:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 10;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.addFlag;
                    var6 = _closure1_slot7;
                    var6 = var6.SUPPRESS_NOTIFICATIONS;
                    var10 = var7.bind(var8)(var15, var6);
                    var12 = var2;
case 24:
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 11;
                    var2 = var2[var6];
                    var15 = var7.bind(var3)(var2);
                    var8 = var15.sendMessage;
                    var21 = var13.id;
                    var2 = {};
                    var2['messageReference'] = var9;
                    var9 = _closure1_slot8;
                    var9 = var9.FORWARDING;
                    var2['location'] = var9;
                    var9 = false;
                    var2['eagerDispatch'] = var9;
                    var2['flags'] = var10;
                    var22 = var15;
                    var20 = var16;
                    var19 = false;
                    var18 = var2;
                    var2 = var22[var8](var21, var20, var19, var18, var17);
                    SaveGenerator(address=559);
case 27:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var4 = var4 == var12;
                    if(var4) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var4 = var5 === var12;
case 31:
                    if(var4) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 12;
                    var5 = var8[var5];
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.isRatelimitedInChannel;
                    var5 = _closure1_slot6;
                    var4 = var7.bind(var8)(var13, var5);
case 33:
                    if(var4) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = var4[var6];
                    var8 = var5.bind(var3)(var6);
                    var7 = var8.sendMessage;
                    var6 = var13.id;
                    var4 = var4[var14];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.parse;
                    var20 = var4.bind(var5)(var13, var12);
                    var4 = {};
                    var11 = _closure1_slot8;
                    var11 = var11.FORWARDING;
                    var4['location'] = var11;
                    var4['flags'] = var10;
                    var22 = var8;
                    var21 = var6;
                    var19 = false;
                    var18 = var4;
                    var4 = var22[var7](var21, var20, var19, var18, var17);
                    SaveGenerator(address=709);
case 37:
                    return var4;
case 38:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 35; continue _fun0001 }
case 39:
                    return var4;
case 35:
                    return var3;
case 29:
                    return var2;
case 13:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var21 = 'Unable to find destination channel for message';
                    var22 = var3;
                    var2 = new var22[var4](var21, var20);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 12:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var21 = 'Unable to find original channel for message';
                    var22 = var3;
                    var2 = new var22[var4](var21, var20);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
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
        var2 = 13;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var4 = var5.map;
        var1 = function(arg1) {
            var5 = _closure1_slot9;
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
    var _closure1_slot9 = var2;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/ForwardActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();