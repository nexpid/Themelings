// app/modules/rpc/server/commands/activities.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var7 = var2.RPCErrors;
    var _closure1_slot4 = var7;
    var2 = var2.ApplicationFlags;
    var _closure1_slot5 = var2;
    var2 = {};
    var9 = var4.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS;
    var8 = 2;
    var7 = var6[var8];
    var14 = var5.bind(var1)(var7);
    var13 = var14.createRPCCommand;
    var10 = var4.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS;
    var7 = {};
    var12 = 3;
    var15 = var6[var12];
    var15 = var5.bind(var1)(var15);
    var15 = var15.activityInstanceConnectedParticipantsScope;
    var7['scope'] = var15;
    var15 = function handler(arg1) {
        var1 = arg1;
        var1 = var1.socket;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 4;
        var5 = var4[var2];
        var2 = undefined;
        var6 = var3.bind(var2)(var5);
        var5 = var6.validatePostMessageTransport;
        var1 = var1.transport;
        var1 = var5.bind(var6)(var1);
        var1 = 3;
        var1 = var4[var1];
        var2 = var3.bind(var2)(var1);
        var1 = var2.activityInstanceConnectedParticipants;
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['handler'] = var15;
    var7 = var13.bind(var14)(var10, var7);
    var2[8] = var7;
    var7 = var4.REQUEST_PROXY_TICKET_REFRESH;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createRPCCommand;
    var8 = var4.REQUEST_PROXY_TICKET_REFRESH;
    var4 = {};
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.activityInstanceConnectedParticipantsScope;
    var4['scope'] = var12;
    var11 = function handler(arg1) {
        var2 = arg1;
        var2 = var2.socket;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = undefined;
                    var3 = undefined;
                    var9 = undefined;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 4;
                    var4 = var8[var6];
                    var12 = var7.bind(var5)(var4);
                    var11 = var12.validatePostMessageTransport;
                    var4 = _closure2_slot0;
                    var10 = var4.transport;
                    var10 = var11.bind(var12)(var10);
                    var6 = var8[var6];
                    var11 = var7.bind(var5)(var6);
                    var10 = var11.validateApplication;
                    var6 = var4.application;
                    var3 = var10.bind(var11)(var6);
                    var6 = 5;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.hasApplicationFlag;
                    var6 = var4.application;
                    var4 = _closure1_slot5;
                    var4 = var4.EMBEDDED;
                    var4 = var7.bind(var8)(var6, var4);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = 6;
                    var4 = var7[var4];
                    var11 = var6.bind(var5)(var4);
                    var10 = {};
                    var4 = _closure1_slot4;
                    var4 = var4.UNAUTHORIZED_FOR_APPLICATION;
                    var10['errorCode'] = var4;
                    var4 = var11.prototype;
                    var8 = Object.create(var4, {constructor: {value: var11}});
                    var13 = 'This application cannot access this API';
                    var15 = var8;
                    var14 = var10;
                    var4 = new var15[var11](var14, var13, var12);
                    var4 = var4 instanceof Object ? var4 : var8;
                    throw var4;
case 4:
                    var4 = 7;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var9 = var4.bind(var5)();
case 6: // try_start_0
                    var4 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 8;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.createProxyTicket;
                    var6 = var3;
                    var10 = var9;
                    var3 = null;
                    var10 = var3 == var10;
                    var3 = undefined;
                    if(var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var3 = var9.id;
case 7:
                    var3 = var7.bind(var8)(var6, var3);
                    SaveGenerator(address=274);
case 9:
                    return var3;
case 10:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var4['ticket'] = var3;
case 13: // try_end0
                    return var4;
case 11:
                    return var3;
case 14: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = {};
                    var2 = _closure1_slot4;
                    var2 = var2.UNKNOWN_ERROR;
                    var4['errorCode'] = var2;
                    var2 = var5.prototype;
                    var3 = Object.create(var2, {constructor: {value: var5}});
                    var13 = 'Failed to create proxy ticket';
                    var15 = var3;
                    var14 = var4;
                    var2 = new var15[var5](var14, var13, var12);
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
    var4['handler'] = var11;
    var4 = var9.bind(var10)(var8, var4);
    var2[6] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/activities.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();