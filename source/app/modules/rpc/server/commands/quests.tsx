// app/modules/rpc/server/commands/quests.tsx
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
    var4 = var2.RPCCommands;
    var7 = var2.RPCErrors;
    var _closure1_slot4 = var7;
    var2 = var2.AnalyticEvents;
    var _closure1_slot5 = var2;
    var2 = {};
    var10 = var4.GET_QUEST_ENROLLMENT_STATUS;
    var7 = {};
    var9 = 2;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.IDENTIFY;
    var7['scope'] = var11;
    var11 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.socket;
            var1 = var1.args;
            var5 = var1.quest_id;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var7 = var8[var6];
            var4 = undefined;
            var10 = var3.bind(var4)(var7);
            var9 = var10.validatePostMessageTransport;
            var7 = var2.transport;
            var7 = var9.bind(var10)(var7);
            var6 = var8[var6];
            var7 = var3.bind(var4)(var6);
            var6 = var7.validateApplication;
            var2 = var2.application;
            var7 = var6.bind(var7)(var2);
            var6 = _closure1_slot3;
            var2 = var6.getQuest;
            var6 = var2.bind(var6)(var5);
            var2 = 4;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getActivityApplicationId;
            var2 = var2.bind(var3)(var6);
            var3 = null;
            if(!(var3 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(!(var2 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var2 = {};
            var2['quest_id'] = var5;
            var8 = var6.userStatus;
            var9 = var3 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8.enrolledAt;
case 6:
            var7 = var3 != var7;
            var2['is_enrolled'] = var7;
            var7 = var6.userStatus;
            var8 = var3 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.enrolledAt;
case 8:
            var7 = var3 != var6;
            var3 = null;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var6;
case 10:
            var2['enrolled_at'] = var3;
            return var2;
case 2:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot4;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Quest not found: ';
            var11 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var13 = var2;
            var12 = var3;
            var1 = new var13[var4](var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var11;
    var2[9] = var7;
    var10 = var4.QUEST_START_TIMER;
    var7 = {};
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.IDENTIFY;
    var7['scope'] = var11;
    var11 = function handler(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.socket;
            var1 = var1.args;
            var5 = var1.quest_id;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var7 = var8[var3];
            var4 = undefined;
            var10 = var6.bind(var4)(var7);
            var9 = var10.validatePostMessageTransport;
            var7 = var2.transport;
            var7 = var9.bind(var10)(var7);
            var3 = var8[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.validateApplication;
            var2 = var2.application;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot3;
            var2 = var3.getQuest;
            var2 = var2.bind(var3)(var5);
            var3 = 4;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getPlayActivityApplicationId;
            var6 = var3.bind(var6)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(!(var3 != var6)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            if(!(var6 === var7)) { _fun0002_ip = 12; continue _fun0002 }
case 15:
            var6 = var2.userStatus;
            var8 = var3 == var6;
            var2 = undefined;
            if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = var6.enrolledAt;
case 16:
            if(!(var3 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.track;
            var2 = _closure1_slot5;
            var8 = var2.RPC_QUEST_START_TIMER_CALLED;
            var2 = {};
            var2['application_id'] = var7;
            var2['quest_id'] = var5;
            var2 = var9.bind(var10)(var8, var2);
            var2 = 7;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.dispatch;
            var2 = {};
            var8 = 'QUEST_APPLICATION_START_TIMER';
            var2['type'] = var8;
            var2['questId'] = var5;
            var2['applicationId'] = var7;
            var2 = var3.bind(var6)(var2);
            var2 = {};
            var3 = true;
            var2['success'] = var3;
            return var2;
case 18:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var6 = {};
            var2 = _closure1_slot4;
            var2 = var2.INVALID_COMMAND;
            var6['errorCode'] = var2;
            var2 = var7.prototype;
            var3 = Object.create(var2, {constructor: {value: var7}});
            var12 = 'User is not enrolled in quest';
            var14 = var3;
            var13 = var6;
            var2 = new var14[var7](var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 12:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot4;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Quest not found: ';
            var12 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var14 = var2;
            var13 = var3;
            var1 = new var14[var4](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var11;
    var2[9] = var7;
    var7 = var4.GET_QUESTS;
    var4 = {};
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.IDENTIFY;
    var4['scope'] = var9;
    var8 = function handler(arg1) {
        var1 = arg1;
        var1 = var1.socket;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 3;
        var7 = var8[var4];
        var5 = undefined;
        var10 = var6.bind(var5)(var7);
        var9 = var10.validatePostMessageTransport;
        var7 = var1.transport;
        var7 = var9.bind(var10)(var7);
        var4 = var8[var4];
        var7 = var6.bind(var5)(var4);
        var4 = var7.validateApplication;
        var1 = var1.application;
        var7 = var4.bind(var7)(var1);
        var1 = {};
        var4 = 8;
        var4 = var8[var4];
        var6 = var6.bind(var5)(var4);
        var5 = var6.getEligibleQuestsForApplicationId;
        var3 = _closure1_slot3;
        var4 = var3.quests;
        var3 = true;
        var5 = var5.bind(var6)(var4, var7, var3);
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['quest_id'] = var3;
                var5 = var2.userStatus;
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var4 = var5.enrolledAt;
case 20:
                var5 = var3 != var4;
                var3 = null;
                if(!var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var3 = var4;
case 22:
                var1['enrolled_at'] = var3;
                var2 = var2.config;
                var2 = var2.ctaConfig;
                var2 = var2.link;
                var1['external_cta_url'] = var2;
                return var1;
            }
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.sort;
        var2 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = var5.enrolled_at;
                var6 = null;
                if(!(var6 == var1)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var1 = var4.enrolled_at;
                var2 = var6 == var1;
                var1 = 0;
                if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 24:
                var2 = var5.enrolled_at;
                var3 = var6 == var2;
                var2 = 1;
                if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 27:
                var3 = var4.enrolled_at;
                var6 = var6 == var3;
                var3 = -1;
                if(var6) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var6 = global;
                var8 = var6.Date;
                var9 = var5.enrolled_at;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var5 = new var10[var8](var9, var8);
                var7 = var5 instanceof Object ? var5 : var7;
                var5 = var7.getTime;
                var5 = var5.bind(var7)();
                var7 = var6.Date;
                var9 = var4.enrolled_at;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = var6.getTime;
                var4 = var4.bind(var6)();
                var3 = var5 - var4;
case 28:
                var2 = var3;
case 17:
                var1 = var2;
case 26:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1['quests'] = var2;
        return var1;
    };
    var4['handler'] = var8;
    var2[6] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/quests.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();