// app/modules/game_relationships/GameRelationshipActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function showRequestFailedAlert(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var2 = var7[var1];
            var1 = undefined;
            var2 = var11.bind(var1)(var2);
            var4 = var2.APIError;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var12 = arg1;
            var13 = var3;
            var2 = new var13[var4](var12, var11);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.getAnyErrorMessage;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var10 = 4;
            var8 = var7[var10];
            var8 = var11.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var10];
            var7 = var11.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.328j/P;
            var7 = var8.bind(var9)(var7);
            var2['title'] = var7;
            var7 = null;
            if(!(var7 == var5)) { _fun0001_ip = 199; continue _fun0001 }
 147:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var10];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var10];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.fEptJC;
            var5 = var7.bind(var8)(var6);
 199:
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function deleteGameRelationship() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _deleteGameRelationship() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 155; continue _fun0002 }
 13:
                    var9 = var2.userId;
                    var8 = var2.applicationId;
                    var5 = var2.onSuccess;
                    var3 = undefined;
                    SaveGenerator(address=35);
 33:
                    return var3;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 152; continue _fun0002 }
 41: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var4 = var6.bind(var3)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.del;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var11 = _closure1_slot4;
                    var10 = var11.USER_GAME_RELATIONSHIP;
                    var8 = var10.bind(var11)(var9, var8);
                    var4['url'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=120);
 118:
                    return var4;
 120:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 132; continue _fun0002 }
 126:
                    var5 = var5.bind(var3)();
 130: // try_end0
                    _fun0002_ip = 149; continue _fun0002;
 132:
                    return var4;
 135: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var3)(var5);
 149:
                    return var3;
 152:
                    return var2;
 155:
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
    var1 = function _removeGameFriend() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 85; continue _fun0003 }
 10:
                    var7 = var2.userId;
                    var6 = var2.applicationId;
                    var4 = undefined;
                    SaveGenerator(address=26);
 24:
                    return var4;
 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 82; continue _fun0003 }
 32:
                    var5 = _closure1_slot7;
                    var3 = {};
                    var3['userId'] = var7;
                    var3['applicationId'] = var6;
                    var6 = function onSuccess() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 6;
                        var2 = var8[var1];
                        var1 = undefined;
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 4;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.zRf8cH;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3['onSuccess'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=70);
 68:
                    return var3;
 70:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 79; continue _fun0003 }
 76:
                    return var4;
 79:
                    return var3;
 82:
                    return var2;
 85:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _cancelGameFriendRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 85; continue _fun0004 }
 10:
                    var7 = var2.userId;
                    var6 = var2.applicationId;
                    var4 = undefined;
                    SaveGenerator(address=26);
 24:
                    return var4;
 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 82; continue _fun0004 }
 32:
                    var5 = _closure1_slot7;
                    var3 = {};
                    var3['userId'] = var7;
                    var3['applicationId'] = var6;
                    var6 = function onSuccess() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 6;
                        var2 = var8[var1];
                        var1 = undefined;
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 4;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.XMf21t;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3['onSuccess'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=70);
 68:
                    return var3;
 70:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 79; continue _fun0004 }
 76:
                    return var4;
 79:
                    return var3;
 82:
                    return var2;
 85:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot4 = var7;
    var2 = var2.RelationshipTypes;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function removeGameFriend() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['removeGameFriend'] = var7;
    var7 = function acceptGameFriendRequest(arg1) {
        var2 = arg1;
        var4 = var2.userId;
        var2 = var2.applicationId;
        var3 = {};
        var3['userId'] = var4;
        var3['applicationId'] = var2;
        var2 = _closure1_slot5;
        var2 = var2.FRIEND;
        var3['type'] = var2;
        var2 = function onSuccess() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var2 = var8[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var4 = var2.AccessibilityAnnouncer;
            var3 = var4.announce;
            var2 = 4;
            var5 = var8[var2];
            var5 = var7.bind(var1)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.taJiub;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['onSuccess'] = var2;
        var2 = function addGameRelationship(arg1) {
            var2 = arg1;
            var9 = var2.userId;
            var8 = var2.applicationId;
            var3 = var2.onSuccess;
            var _closure3_slot0 = var3;
            var6 = var2.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.HTTP;
            var3 = var4.put;
            var2 = {};
            var7 = _closure1_slot4;
            var5 = var7.USER_GAME_RELATIONSHIP;
            var5 = var5.bind(var7)(var9, var8);
            var2['url'] = var5;
            var5 = {};
            var5['type'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = _closure1_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.reject;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['acceptGameFriendRequest'] = var7;
    var4 = function cancelGameFriendRequest() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['cancelGameFriendRequest'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_relationships/GameRelationshipActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();