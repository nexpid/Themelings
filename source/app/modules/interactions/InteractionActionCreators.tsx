// app/modules/interactions/InteractionActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchMessageInteractionData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var10 = _closure1_slot4;
                    var9 = var10.MESSAGE_INTERACTION_DATA;
                    var9 = var9.bind(var10)(var8, var7);
                    var2['url'] = var9;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=92);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.ok;
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = null;
                    return var3;
case 8:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 2;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS';
                    var4['type'] = var9;
                    var4['channelId'] = var8;
                    var4['messageId'] = var7;
                    var4['interactionData'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interactions/InteractionActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function queueInteractionComponentState(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUEUE_INTERACTION_COMPONENT_STATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['messageId'] = var5;
        var5 = arg2;
        var2['nonce'] = var5;
        var5 = arg3;
        var2['state'] = var5;
        var5 = arg4;
        var2['componentId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['queueInteractionComponentState'] = var4;
    var4 = function addQueued(arg1, arg2) {
        var1 = arg2;
        var10 = var1.data;
        var9 = var1.messageId;
        var8 = var1.preflight;
        var7 = var1.onCreate;
        var6 = var1.onSuccess;
        var5 = var1.onFailure;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var11 = 'INTERACTION_QUEUE';
        var2['type'] = var11;
        var2['data'] = var10;
        var10 = arg1;
        var2['nonce'] = var10;
        var2['messageId'] = var9;
        var2['preflight'] = var8;
        var2['onCreate'] = var7;
        var2['onSuccess'] = var6;
        var2['onFailure'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['addQueued'] = var4;
    var4 = function setFailed(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'INTERACTION_FAILURE';
        var2['type'] = var5;
        var5 = arg1;
        var2['nonce'] = var5;
        var5 = arg3;
        var2['errorMessage'] = var5;
        var5 = arg2;
        var2['errorCode'] = var5;
        var5 = arg4;
        var2['status'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setFailed'] = var4;
    var2 = function fetchMessageInteractionData() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMessageInteractionData'] = var2;
    return var1;
})();