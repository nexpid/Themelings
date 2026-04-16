// app/modules/rpc/server/commands/application.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RPC_LOCAL_SCOPE;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ApplicationFlags;
    var _closure1_slot4 = var4;
    var4 = var2.Endpoints;
    var _closure1_slot5 = var4;
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot6 = var2;
    var2 = {};
    var10 = var4.SEND_ANALYTICS_EVENT;
    var7 = {};
    var11 = function validation(arg1) {
        var6 = arg1;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var4 = 3;
        var1 = var8[var4];
        var5 = undefined;
        var1 = var7.bind(var5)(var1);
        var2 = var1.bind(var5)(var6);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var9 = var6.string;
        var10 = var9.bind(var6)();
        var9 = var10.required;
        var9 = var9.bind(var10)();
        var1['event_name'] = var9;
        var4 = var8[var4];
        var4 = var7.bind(var5)(var4);
        var5 = var4.bind(var5)(var6);
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['event_properties'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var11;
    var11 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.socket;
            var1 = var1.args;
            var5 = var1.event_name;
            var6 = var1.event_properties;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var9 = var7[var4];
            var1 = undefined;
            var11 = var8.bind(var1)(var9);
            var10 = var11.validatePostMessageTransport;
            var9 = var3.transport;
            var9 = var10.bind(var11)(var9);
            var4 = var7[var4];
            var9 = var8.bind(var1)(var4);
            var8 = var9.validateApplication;
            var4 = var3.application;
            var4 = var8.bind(var9)(var4);
            var3 = var3.application;
            var9 = var3.id;
            var4 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var3 = var4.bind(var1)(var3);
            var10 = var3.bind(var1)();
            var3 = null;
            var4 = var3 == var10;
            var8 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var10.getGuildId;
            var8 = var4.bind(var10)();
case 2:
            var7 = _closure1_slot3;
            var4 = var7.getApplication;
            var12 = var4.bind(var7)(var9);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 6;
            var4 = var11[var4];
            var11 = var7.bind(var1)(var4);
            var7 = var11.hasApplicationFlag;
            var4 = _closure1_slot4;
            var4 = var4.EMBEDDED_FIRST_PARTY;
            var4 = var7.bind(var11)(var12, var4);
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 7;
            var4 = var11[var4];
            var12 = var7.bind(var1)(var4);
            var11 = {};
            var4 = _closure1_slot6;
            var4 = var4.INVALID_COMMAND;
            var11['errorCode'] = var4;
            var4 = var12.prototype;
            var7 = Object.create(var4, {constructor: {value: var12}});
            var13 = 'This application cannot access this API';
            var15 = var7;
            var14 = var11;
            var4 = new var15[var12](var14, var13, var12);
            var4 = var4 instanceof Object ? var4 : var7;
            throw var4;
case 4:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 8;
            var4 = var11[var4];
            var7 = var7.bind(var1)(var4);
            var4 = var7.getActiveAnalyticsSessionIDs;
            var4 = var4.bind(var7)(var9);
            var7 = {};
            var7['activity_application_id'] = var9;
            var11 = var3 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var10.type;
case 6:
            var7['activity_channel_type'] = var9;
            var7['activity_guild_id'] = var8;
            var8 = var3 == var4;
            var3 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.activityUserSessionId;
case 8:
            var7['activity_user_session_id'] = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.track;
            var2 = {};
            var14 = var2;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var7['handler'] = var11;
    var2[9] = var7;
    var7 = var4.GET_APPLICATION_TICKET;
    var4 = {};
    var4['scope'] = var9;
    var8 = function handler(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.socket;
            var1 = var1.application;
            var7 = var1.id;
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {'url': null, 'body': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
            var5 = _closure1_slot5;
            var4 = var5.APPLICATION_TICKET;
            var4 = var4.bind(var5)(var7);
            var1['url'] = var4;
            var4 = {};
            var5 = 11;
            var5 = var9[var5];
            var6 = var8.bind(var6)(var5);
            var5 = var6.isTestModeForApplication;
            var5 = var5.bind(var6)(var7);
            var4['test_mode'] = var5;
            var1['body'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 10:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {};
            var1 = _closure1_slot6;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var10 = 'No application.';
            var12 = var2;
            var11 = var3;
            var1 = new var12[var4](var11, var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['handler'] = var8;
    var2[6] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/application.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();