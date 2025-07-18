// app/modules/rpc/server/commands/invites.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var13 = var2.RPC_SCOPE_CONFIG;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = var4.INVITE_USER_EMBEDDED;
    var8 = 5;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createRPCCommand;
    var8 = var4.INVITE_USER_EMBEDDED;
    var4 = {};
    var12 = {};
    var14 = var13.ANY;
    var13 = 6;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var15 = var13.RELATIONSHIPS_READ;
    var13 = new Array(1);
    var13[0] = var15;
    var12[var14] = var13;
    var4['scope'] = var12;
    var11 = function handler(arg1) {
        var2 = arg1;
        var3 = var2.socket;
        var _closure2_slot0 = var3;
        var2 = var2.args;
        var3 = var2.user_id;
        var _closure2_slot1 = var3;
        var2 = var2.content;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 863; continue _fun0001 }
 10:
                    var5 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var2 = _closure2_slot0;
                    var2 = var2.application;
                    var2 = var2.id;
                    var8 = var2;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0001_ip = 786; continue _fun0001 }
 45:
                    var6 = _closure1_slot3;
                    var3 = var6.getConnectedActivityLocation;
                    var3 = var3.bind(var6)();
                    if(!(var4 != var3)) { _fun0001_ip = 712; continue _fun0001 }
 69:
                    var10 = var3.kind;
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var12 = 8;
                    var6 = var6[var12];
                    var6 = var11.bind(var5)(var6);
                    var6 = var6.EmbeddedActivityLocationKind;
                    var6 = var6.GUILD_CHANNEL;
                    if(!(var6 !== var10)) { _fun0001_ip = 512; continue _fun0001 }
 113:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var12];
                    var6 = var11.bind(var5)(var6);
                    var6 = var6.EmbeddedActivityLocationKind;
                    var6 = var6.GUILD_CHANNEL_MESSAGE;
                    if(!(var6 !== var10)) { _fun0001_ip = 512; continue _fun0001 }
 149:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var12];
                    var6 = var11.bind(var5)(var6);
                    var6 = var6.EmbeddedActivityLocationKind;
                    var6 = var6.PRIVATE_CHANNEL;
                    if(!(var6 !== var10)) { _fun0001_ip = 289; continue _fun0001 }
 182:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var12];
                    var6 = var11.bind(var5)(var6);
                    var6 = var6.EmbeddedActivityLocationKind;
                    var6 = var6.PRIVATE_CHANNEL_MESSAGE;
                    if(!(var6 !== var10)) { _fun0001_ip = 289; continue _fun0001 }
 215:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var6 = 7;
                    var6 = var11[var6];
                    var6 = var10.bind(var5)(var6);
                    var12 = var6.RPCError;
                    var11 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.NO_ELIGIBLE_ACTIVITY;
                    var11['errorCode'] = var6;
                    var6 = var12.prototype;
                    var10 = Object.create(var6, {constructor: {value: var12}});
                    var13 = 'Unsupported activity location';
                    var15 = var10;
                    var14 = var11;
                    var6 = new var15[var12](var14, var13, var12);
                    var6 = var6 instanceof Object ? var6 : var10;
                    throw var6;
 289:
                    var10 = _closure1_slot4;
                    var6 = var10.getChannel;
                    var3 = var3.channel_id;
                    var3 = var6.bind(var10)(var3);
                    if(!(var4 != var3)) { _fun0001_ip = 438; continue _fun0001 }
 315:
                    var6 = var3.type;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var4 = 10;
                    var4 = var11[var4];
                    var4 = var10.bind(var5)(var4);
                    var4 = var4.ChannelTypes;
                    var4 = var4.DM;
                    if(!(var6 !== var4)) { _fun0001_ip = 364; continue _fun0001 }
 356:
                    var9 = var3;
                    _fun0001_ip = 547; continue _fun0001;
 364:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var10 = var3.RPCError;
                    var6 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.INVALID_CHANNEL;
                    var6['errorCode'] = var3;
                    var3 = var10.prototype;
                    var4 = Object.create(var3, {constructor: {value: var10}});
                    var13 = 'Cannot send invite to a DM';
                    var15 = var4;
                    var14 = var6;
                    var3 = new var15[var10](var14, var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 438:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var10 = var3.RPCError;
                    var6 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.INVALID_CHANNEL;
                    var6['errorCode'] = var3;
                    var3 = var10.prototype;
                    var4 = Object.create(var3, {constructor: {value: var10}});
                    var13 = 'Invalid channel';
                    var15 = var4;
                    var14 = var6;
                    var3 = new var15[var10](var14, var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 512:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 9;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.validateOpenInviteDialog;
                    var3 = var3.bind(var4)();
                    var9 = var3.channel;
 547: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 11;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.sendEmbeddedActivityInviteUser;
                    var3 = {};
                    var9 = var9.id;
                    var3['channelId'] = var9;
                    var3['applicationId'] = var8;
                    var8 = _closure2_slot1;
                    var3['userId'] = var8;
                    var7 = _closure2_slot2;
                    var3['prefixedContent'] = var7;
                    var7 = 'RPC_ACTIVITY_INVITE_USER';
                    var3['location'] = var7;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=624);
 622:
                    return var3;
 624:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 633; continue _fun0001 }
 630: // try_end0
                    return var5;
 633:
                    return var3;
 636: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.RPCError;
                    var6 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.UNKNOWN_ERROR;
                    var6['errorCode'] = var3;
                    var3 = var7.prototype;
                    var4 = Object.create(var3, {constructor: {value: var7}});
                    var13 = 'Failed to invite user';
                    var15 = var4;
                    var14 = var6;
                    var3 = new var15[var7](var14, var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 712:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var6 = var3.RPCError;
                    var4 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.NO_ELIGIBLE_ACTIVITY;
                    var4['errorCode'] = var2;
                    var2 = var6.prototype;
                    var3 = Object.create(var2, {constructor: {value: var6}});
                    var13 = 'No eligible activity for application. Ensure an activity was set using setActivity.';
                    var15 = var3;
                    var14 = var4;
                    var2 = new var15[var6](var14, var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 786:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.RPCError;
                    var4 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.INVALID_COMMAND;
                    var4['errorCode'] = var2;
                    var2 = var5.prototype;
                    var3 = Object.create(var2, {constructor: {value: var5}});
                    var13 = 'No application.';
                    var15 = var3;
                    var14 = var4;
                    var2 = new var15[var5](var14, var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 863:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['handler'] = var11;
    var4 = var9.bind(var10)(var8, var4);
    var2[var7] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/invites.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();