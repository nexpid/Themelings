// app/modules/saved_messages/SavedMessagesActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _upsertSavedMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 173; continue _fun0001 }
 13:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.put;
                    var2 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.PUT_SAVED_MESSAGE;
                    var9 = var8.channelId;
                    var7 = var8.messageId;
                    var7 = var10.bind(var11)(var9, var7);
                    var2['url'] = var7;
                    var7 = {};
                    var8 = var8.dueAt;
                    var7['due_at'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=113);
 111:
                    return var2;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 170; continue _fun0001 }
 119:
                    var4 = var2.ok;
                    if(var4) { _fun0001_ip = 131; continue _fun0001 }
 128:
                    return var5;
 131:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.savedMessageCreateObjectToClient;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 170:
                    return var2;
 173:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _deleteSavedMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 119; continue _fun0002 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var9 = _closure1_slot5;
                    var8 = var9.DELETE_SAVED_MESSAGE;
                    var7 = var6.channelId;
                    var6 = var6.messageId;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=93);
 91:
                    return var2;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 116; continue _fun0002 }
 99:
                    var4 = var2.ok;
                    if(var4) { _fun0002_ip = 111; continue _fun0002 }
 108:
                    return var3;
 111:
                    var3 = true;
                    return var3;
 116:
                    return var2;
 119:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _fetchAndUpdateSavedMessages() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 201; continue _fun0003 }
 10:
                    var3 = _closure1_slot4;
                    var2 = var3.getIsStale;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0003_ip = 51; continue _fun0003 }
 30:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var2 = var2.bind(var3)();
                    return var2;
 51:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.GET_SAVED_MESSAGES;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=114);
 112:
                    return var2;
 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 198; continue _fun0003 }
 120:
                    var5 = var2.body;
                    var7 = var5.results;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var1 = {};
                            var4 = var2.message;
                            var3 = null;
                            var4 = var3 != var4;
                            if(!var4) { _fun0004_ip = 60; continue _fun0004 }
 19:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 5;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.createMessageRecord;
                            var4 = var2.message;
                            var3 = var5.bind(var6)(var4);
 60:
                            var1['message'] = var3;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 4;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.savedMessageDataToClient;
                            var2 = var2.save_data;
                            var2 = var3.bind(var4)(var2);
                            var1['saveData'] = var2;
                            return var1;
                        }
                    };
                    var7 = var6.bind(var7)(var5);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 6;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'SAVED_MESSAGES_UPDATE';
                    var4['type'] = var8;
                    var4['savedMessages'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 198:
                    return var2;
 201:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/SavedMessagesActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function upsertSavedMessage() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['upsertSavedMessage'] = var4;
    var4 = function deleteSavedMessage() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteSavedMessage'] = var4;
    var2 = function fetchAndUpdateSavedMessages() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAndUpdateSavedMessages'] = var2;
    return var1;
})();