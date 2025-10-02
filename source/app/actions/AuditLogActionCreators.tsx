// app/actions/AuditLogActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function isLoading() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot3;
            var1 = var1.isLoading;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var1 = var2.isLoadingNextPage;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function makeRequest(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg2;
            var7 = var2.before;
            var6 = var2.userId;
            var1 = var2.targetId;
            var3 = var2.action;
            var2 = null;
            if(!(var2 == var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot3;
            var6 = var4.userIdFilter;
case 4:
            if(!(var2 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot3;
            var3 = var4.actionFilter;
case 6:
            if(!(var2 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot3;
            var1 = var4.targetIdFilter;
case 8:
            var4 = {};
            var8 = _closure1_slot5;
            var4['limit'] = var8;
            if(!(var2 != var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4['before'] = var7;
case 10:
            if(!(var2 != var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4['user_id'] = var6;
case 12:
            if(!(var2 != var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4['action_type'] = var3;
case 14:
            if(!(var2 != var1)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4['target_id'] = var1;
case 16:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.get;
            var1 = {};
            var7 = _closure1_slot4;
            var6 = var7.GUILD_AUDIT_LOG;
            var5 = arg1;
            var5 = var6.bind(var7)(var5);
            var1['url'] = var5;
            var1['query'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function fetchLogs(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot6;
            var1 = undefined;
            var4 = var4.bind(var1)();
            if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = null;
            if(!(var4 != var5)) { _fun0003_ip = 18; continue _fun0003 }
case 20:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.dispatch;
            var4 = {};
            var8 = 'AUDIT_LOG_FETCH_START';
            var4['type'] = var8;
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot7;
            var3 = {};
            var6 = arg2;
            var3['userId'] = var6;
            var6 = arg4;
            var3['action'] = var6;
            var6 = arg3;
            var3['targetId'] = var6;
            var5 = var4.bind(var1)(var5, var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var12 = var1.audit_log_entries;
                var11 = var1.integrations;
                var10 = var1.users;
                var9 = var1.webhooks;
                var8 = var1.guild_scheduled_events;
                var7 = var1.auto_moderation_rules;
                var6 = var1.threads;
                var5 = var1.application_commands;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var13 = 'AUDIT_LOG_FETCH_SUCCESS';
                var2['type'] = var13;
                var2['logs'] = var12;
                var2['integrations'] = var11;
                var2['users'] = var10;
                var2['webhooks'] = var9;
                var2['guildScheduledEvents'] = var8;
                var2['automodRules'] = var7;
                var2['threads'] = var6;
                var2['applicationCommands'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIT_LOG_FETCH_FAIL';
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Endpoints;
    var _closure1_slot4 = var8;
    var5 = var5.AUDIT_LOG_PAGE_LIMIT;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/AuditLogActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['fetchLogs'] = var4;
    var4 = function fetchNextLogPage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var9 = arguments[1];
            var1 = undefined;
            if(!(var9 === var1)) { _fun0004_ip = 3; continue _fun0004 }
case 21:
            var9 = false;
case 3:
            var4 = _closure1_slot3;
            var4 = var4.hasOlderLogs;
            if(!var4) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var4 = _closure1_slot6;
            var4 = var4.bind(var1)();
            if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 24:
            var6 = null;
            if(!(var6 != var5)) { _fun0004_ip = 22; continue _fun0004 }
case 25:
            var4 = _closure1_slot3;
            var7 = var4.logs;
            var8 = var7.length;
            var4 = 1;
            var4 = var8 - var4;
            var4 = var7[var4];
            var7 = var6 != var4;
            var6 = null;
            if(!var7) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var6 = var4.id;
case 26:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var8.dispatch;
            var4 = {};
            var10 = 'AUDIT_LOG_FETCH_NEXT_PAGE_START';
            var4['type'] = var10;
            var4['before'] = var6;
            var4['isGroupedFetch'] = var9;
            var4 = var7.bind(var8)(var4);
            var4 = _closure1_slot7;
            var3 = {};
            var3['before'] = var6;
            var5 = var4.bind(var1)(var5, var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var12 = var1.audit_log_entries;
                var11 = var1.integrations;
                var10 = var1.users;
                var9 = var1.webhooks;
                var8 = var1.guild_scheduled_events;
                var7 = var1.auto_moderation_rules;
                var6 = var1.threads;
                var5 = var1.application_commands;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var13 = 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS';
                var2['type'] = var13;
                var2['logs'] = var12;
                var2['integrations'] = var11;
                var2['users'] = var10;
                var2['webhooks'] = var9;
                var2['guildScheduledEvents'] = var8;
                var2['automodRules'] = var7;
                var2['threads'] = var6;
                var2['applicationCommands'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL';
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 22:
            return var1;
        }
    };
    var3['fetchNextLogPage'] = var4;
    var4 = function filterByAction(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot6;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 28; continue _fun0005 }
case 30:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.dispatch;
            var6 = {};
            var9 = 'AUDIT_LOG_FILTER_BY_ACTION';
            var6['type'] = var9;
            var6['action'] = var5;
            var6 = var7.bind(var8)(var6);
            var2 = _closure1_slot8;
            var14 = undefined;
            var13 = var4;
            var12 = null;
            var11 = null;
            var10 = var5;
            var2 = var14[var2](var13, var12, var11, var10, var9);
            return var2;
case 28:
            return var1;
        }
    };
    var3['filterByAction'] = var4;
    var4 = function filterByUserId(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var5 = _closure1_slot6;
            var1 = undefined;
            var5 = var5.bind(var1)();
            if(var5) { _fun0006_ip = 31; continue _fun0006 }
case 29:
            var5 = null;
            if(!(var5 != var3)) { _fun0006_ip = 31; continue _fun0006 }
case 30:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.dispatch;
            var5 = {};
            var8 = 'AUDIT_LOG_FILTER_BY_USER';
            var5['type'] = var8;
            var5['userId'] = var4;
            var5 = var6.bind(var7)(var5);
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var3, var4);
            return var2;
case 31:
            return var1;
        }
    };
    var3['filterByUserId'] = var4;
    var2 = function filterByTargetId(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot6;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 29:
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 32; continue _fun0007 }
case 30:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.dispatch;
            var6 = {};
            var9 = 'AUDIT_LOG_FILTER_BY_TARGET';
            var6['type'] = var9;
            var6['targetId'] = var5;
            var6 = var7.bind(var8)(var6);
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var4, var3, var5);
            return var2;
case 32:
            return var1;
        }
    };
    var3['filterByTargetId'] = var2;
    return var1;
})();