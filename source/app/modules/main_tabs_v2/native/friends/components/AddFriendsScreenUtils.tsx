// app/modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _sendWave() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var10 = arg1;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = true;
case 4:
                    var6 = var2;
                    var13 = arguments[2];
                    var5 = undefined;
                    SaveGenerator(address=36);
case 6:
                    return var9;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var8 = _closure1_slot4;
                    var7 = var8.getDMFromUserId;
                    var4 = var10;
                    var4 = var7.bind(var8)(var4);
                    var5 = var4;
                    var8 = null;
                    if(!(var8 != var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    _fun0001_ip = 12; continue _fun0001;
case 10: // try_start_0
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 5;
                    var4 = var11[var4];
                    var11 = var7.bind(var9)(var4);
                    var7 = var11.getDMChannel;
                    var4 = var10;
                    var4 = var7.bind(var11)(var4);
                    SaveGenerator(address=115);
case 13:
                    return var4;
case 14:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var5 = var4;
case 12: // try_start_1 // try_end0
                    var7 = var5;
                    if(!(var8 != var7)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 8;
                    var7 = var11[var7];
                    var14 = var8.bind(var9)(var7);
                    var12 = var14.sendStickers;
                    var18 = var5;
                    var8 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.SEND_WAVE;
                    var8['location'] = var5;
                    var17 = ['749054660769218631'];
                    var16 = '';
                    var19 = var14;
                    var15 = var8;
                    var5 = var19[var12](var18, var17, var16, var15, var14);
                    SaveGenerator(address=210);
case 19:
                    return var5;
case 20:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 9;
                    var7 = var11[var7];
                    var12 = var8.bind(var9)(var7);
                    var11 = var12.track;
                    var7 = _closure1_slot5;
                    var8 = var7.WAVE_CTA_CLICKED;
                    var7 = {};
                    var7['source'] = var13;
                    var7 = var11.bind(var12)(var8, var7);
                    if(!var6) { _fun0001_ip = 17; continue _fun0001 }
case 23:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 5;
                    var6 = var8[var6];
                    var8 = var7.bind(var9)(var6);
                    var7 = var8.openPrivateChannel;
                    var6 = {};
                    var6['recipientIds'] = var10;
                    var6 = var7.bind(var8)(var6);
case 17: // try_end1
                    _fun0001_ip = 24; continue _fun0001;
case 21:
                    return var5;
case 25: // catch_target1
                    CatchBlockStart(arg_register=4);
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 6;
                    var5 = var12[var5];
                    var7 = var11.bind(var9)(var5);
                    var6 = var7.presentError;
                    var5 = 7;
                    var8 = var12[var5];
                    var8 = var11.bind(var9)(var8);
                    var10 = var8.intl;
                    var8 = var10.string;
                    var5 = var12[var5];
                    var5 = var11.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.iufib2;
                    var5 = var8.bind(var10)(var5);
                    var5 = var6.bind(var7)(var5);
case 24:
                    return var9;
case 15:
                    return var4;
case 26: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.presentError;
                    var3 = 7;
                    var6 = var10[var3];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var10[var3];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.t;
                    var3 = var3.iufib2;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
                    var3 = undefined;
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function dismissIncomingRequest(arg1) {
        var1 = arg1;
        var7 = var1.userId;
        var6 = var1.applicationId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.cancelFriendRequest;
        var2 = {};
        var2['userId'] = var7;
        var2['applicationId'] = var6;
        var5 = _closure1_slot6;
        var5 = var5.FRIENDS_ADD_FRIENDS_MODAL;
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissIncomingRequest'] = var4;
    var4 = function acceptIncomingRequest(arg1) {
        var1 = arg1;
        var7 = var1.userId;
        var6 = var1.applicationId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.maybeConfirmFriendRequestAccept;
        var2 = {};
        var2['userId'] = var7;
        var2['applicationId'] = var6;
        var5 = _closure1_slot6;
        var5 = var5.FRIENDS_ADD_FRIENDS_MODAL;
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['acceptIncomingRequest'] = var4;
    var4 = function sendWave() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendWave'] = var4;
    var2 = function addContactSuggestion(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.addRelationship;
        var2 = {};
        var5 = arg1;
        var5 = var5.id;
        var2['userId'] = var5;
        var5 = {};
        var6 = _closure1_slot6;
        var6 = var6.FRIENDS_ADD_FRIENDS_MODAL;
        var5['location'] = var6;
        var2['context'] = var5;
        var2['type'] = var1;
        var5 = true;
        var2['fromFriendSuggestion'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['addContactSuggestion'] = var2;
    return var1;
})();