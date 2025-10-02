// app/modules/user_affinities/UserAffinitiesActionCreators.tsx
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
    var7 = var4.Endpoints;
    var _closure1_slot5 = var7;
    var4 = var4.Consents;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_affinities/UserAffinitiesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchUserAffinitiesV2() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arguments[0];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = true;
case 2:
            var3 = _closure1_slot4;
            var1 = var3.shouldFetch;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot3;
            var3 = var4.hasConsented;
            var1 = _closure1_slot6;
            var1 = var1.PERSONALIZATION;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)();
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 3;
            var3 = var9[var7];
            var10 = var4.bind(var5)(var3);
            var4 = var10.dispatch;
            var3 = {};
            var11 = 'LOAD_USER_AFFINITIES_V2';
            var3['type'] = var11;
            var3 = var4.bind(var10)(var3);
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {};
            var6 = _closure1_slot5;
            var6 = var6.USER_AFFINITIES_V2;
            var3['url'] = var6;
            var6 = 0;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7;
case 8:
            var3['retries'] = var6;
            var6 = true;
            var3['oldFormErrors'] = var6;
            var6 = false;
            var3['rejectWithError'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = var1.body;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'LOAD_USER_AFFINITIES_V2_SUCCESS';
                var2['type'] = var6;
                var7 = var5.user_affinities;
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.other_user_id;
                        var1['otherUserId'] = var2;
                        var2 = var3.user_segment;
                        var1['userSegment'] = var2;
                        var2 = var3.other_user_segment;
                        var1['otherUserSegment'] = var2;
                        var2 = var3.is_friend;
                        var1['isFriend'] = var2;
                        var6 = var3.dm_probability;
                        var4 = null;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var5 = var6;
case 10:
                        var1['dmProbability'] = var5;
                        var6 = var3.dm_rank;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var5 = var6;
case 12:
                        var1['dmRank'] = var5;
                        var6 = var3.vc_probability;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var5 = var6;
case 14:
                        var1['vcProbability'] = var5;
                        var6 = var3.vc_rank;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var5 = var6;
case 16:
                        var1['vcRank'] = var5;
                        var6 = var3.server_message_probability;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var5 = var6;
case 18:
                        var1['serverMessageProbability'] = var5;
                        var6 = var3.server_message_rank;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var5 = var6;
case 20:
                        var1['serverMessageRank'] = var5;
                        var6 = var3.communication_probability;
                        var7 = var4 != var6;
                        var5 = 0;
                        if(!var7) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                        var5 = var6;
case 22:
                        var1['communicationProbability'] = var5;
                        var3 = var3.communication_rank;
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var2 = var3;
case 24:
                        var1['communicationRank'] = var2;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var2['affineUsers'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'LOAD_USER_AFFINITIES_V2_FAILURE';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['fetchUserAffinitiesV2'] = var2;
    return var1;
})();