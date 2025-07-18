// app/modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 459; continue _fun0001 }
 13:
                    var10 = arg1;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0001_ip = 24; continue _fun0001 }
 22:
                    var2 = true;
 24:
                    var6 = var2;
                    var13 = arguments[2];
                    var5 = undefined;
                    SaveGenerator(address=36);
 34:
                    return var9;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 456; continue _fun0001 }
 45:
                    var8 = _closure1_slot4;
                    var7 = var8.getDMFromUserId;
                    var4 = var10;
                    var4 = var7.bind(var8)(var4);
                    var5 = var4;
                    var8 = null;
                    if(!(var8 != var4)) { _fun0001_ip = 77; continue _fun0001 }
 75:
                    _fun0001_ip = 127; continue _fun0001;
 77: // try_start_0
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 4;
                    var4 = var11[var4];
                    var11 = var7.bind(var9)(var4);
                    var7 = var11.getDMChannel;
                    var4 = var10;
                    var4 = var7.bind(var11)(var4);
                    SaveGenerator(address=115);
 113:
                    return var4;
 115:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 368; continue _fun0001 }
 124:
                    var5 = var4;
 127: // try_start_1 // try_end0
                    var7 = var5;
                    if(!(var8 != var7)) { _fun0001_ip = 280; continue _fun0001 }
 137:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 7;
                    var7 = var11[var7];
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.sendStickers;
                    var7 = var5;
                    var5 = ['749054660769218631'];
                    var5 = var8.bind(var11)(var7, var5);
                    SaveGenerator(address=186);
 184:
                    return var5;
 186:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 282; continue _fun0001 }
 192:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 8;
                    var7 = var11[var7];
                    var12 = var8.bind(var9)(var7);
                    var11 = var12.track;
                    var7 = _closure1_slot5;
                    var8 = var7.WAVE_CTA_CLICKED;
                    var7 = {};
                    var7['source'] = var13;
                    var7 = var11.bind(var12)(var8, var7);
                    if(!var6) { _fun0001_ip = 280; continue _fun0001 }
 242:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 4;
                    var6 = var8[var6];
                    var8 = var7.bind(var9)(var6);
                    var7 = var8.openPrivateChannel;
                    var6 = {};
                    var6['recipientIds'] = var10;
                    var6 = var7.bind(var8)(var6);
 280: // try_end1
                    _fun0001_ip = 365; continue _fun0001;
 282:
                    return var5;
 285: // catch_target1
                    CatchBlockStart(arg_register=4);
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 5;
                    var5 = var12[var5];
                    var7 = var11.bind(var9)(var5);
                    var6 = var7.presentError;
                    var5 = 6;
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
 365:
                    return var9;
 368:
                    return var4;
 371: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.presentError;
                    var3 = 6;
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
 456:
                    return var2;
 459:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = 10;
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
        var1 = 3;
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
        var1 = 3;
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
        var4 = _closure1_slot7;
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
        var1 = 9;
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