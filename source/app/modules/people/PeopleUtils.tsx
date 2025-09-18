// app/modules/people/PeopleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var7 = function acceptFriendRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.userId;
            var5 = var1.applicationId;
            var8 = var1.location;
            var7 = var1.confirmStrangerRequest;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 32; continue _fun0001 }
 30:
            var7 = false;
 32:
            var1 = null;
            if(!(var1 == var5)) { _fun0001_ip = 95; continue _fun0001 }
 38:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.acceptFriendRequest;
            var1 = {};
            var1['userId'] = var6;
            var1['confirmStrangerRequest'] = var7;
            var7 = {};
            var7['location'] = var8;
            var1['context'] = var7;
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 139; continue _fun0001;
 95:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.acceptGameFriendRequest;
            var2 = {};
            var2['userId'] = var6;
            var2['applicationId'] = var5;
            var1 = var3.bind(var4)(var2);
 139:
            return var1;
        }
    };
    var _closure1_slot5 = var7;
    var1 = function handleFriendRequestAcceptError(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var3 = var1.body;
            var4 = null;
            var4 = var4 == var3;
            var5 = undefined;
            var7 = undefined;
            if(var4) { _fun0002_ip = 35; continue _fun0002 }
 30:
            var7 = var3.code;
 35:
            var4 = _closure1_slot4;
            var4 = var4.RELATIONSHIP_INVALID_NO_CONFIRMATION;
            if(!(var7 !== var4)) { _fun0002_ip = 121; continue _fun0002 }
 52:
            var7 = var1.ok;
            var1 = false;
            if(!var7) { _fun0002_ip = 231; continue _fun0002 }
 66:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.dispatch;
            var7 = {'type': 'UPDATE_STRANGER_STATUS', 'userId': null, 'isStranger': false};
            var10 = var2.userId;
            var7['userId'] = var10;
            var7 = var8.bind(var9)(var7);
            var1 = false;
            _fun0002_ip = 231; continue _fun0002;
 121:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.dispatch;
            var4 = {'type': 'UPDATE_STRANGER_STATUS', 'userId': null, 'isStranger': true};
            var2 = var2.userId;
            var4['userId'] = var2;
            var1 = true;
            var4 = var8.bind(var9)(var4);
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.openAcceptFriendRequestConfirmModal;
            var3 = {};
            var7 = function onConfirm() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot5;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var8 = var4;
                    var7 = var3;
                    var1 = copyDataProperties(var8, var7);
                    var6 = true;
                    var1 = 'confirmStrangerRequest';
                    var4[var1] = var6;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var3.onConfirm;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 70; continue _fun0003 }
 56:
                    var3 = _closure2_slot0;
                    var2 = var3.onConfirm;
                    var2 = var2.bind(var3)();
 70:
                    return var1;
                }
            };
            var3['onConfirm'] = var7;
            var6 = function onCancel() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.onCancel;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 33; continue _fun0004 }
 19:
                    var2 = _closure2_slot0;
                    var1 = var2.onCancel;
                    var1 = var1.bind(var2)();
 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onCancel'] = var6;
            var3 = var4.bind(var5)(var3);
 231:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AbortCodes;
    var _closure1_slot4 = var2;
    var2 = {};
    var8 = function removeFriend(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.userId;
            var4 = var1.applicationId;
            var6 = var1.location;
            var1 = null;
            if(!(var1 == var4)) { _fun0005_ip = 69; continue _fun0005 }
 24:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.removeFriend;
            var1 = {};
            var1['location'] = var6;
            var1 = var2.bind(var3)(var5, var1);
            _fun0005_ip = 115; continue _fun0005;
 69:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.removeGameFriend;
            var1 = {};
            var1['userId'] = var5;
            var1['applicationId'] = var4;
            var1 = var2.bind(var3)(var1);
 115:
            var1 = undefined;
            return var1;
        }
    };
    var2['removeFriend'] = var8;
    var8 = function cancelFriendRequest(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var6 = var1.userId;
            var5 = var1.applicationId;
            var4 = var1.location;
            var1 = null;
            if(!(var1 == var5)) { _fun0006_ip = 69; continue _fun0006 }
 24:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.cancelFriendRequest;
            var1 = {};
            var1['location'] = var4;
            var1 = var2.bind(var3)(var6, var1);
            _fun0006_ip = 115; continue _fun0006;
 69:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.cancelGameFriendRequest;
            var2 = {};
            var2['userId'] = var6;
            var2['applicationId'] = var5;
            var1 = var3.bind(var4)(var2);
 115:
            return var1;
        }
    };
    var2['cancelFriendRequest'] = var8;
    var2['acceptFriendRequest'] = var7;
    var4 = function maybeConfirmFriendRequestAccept(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var7 = var2.userId;
            var _closure2_slot0 = var7;
            var6 = var2.applicationId;
            var _closure2_slot1 = var6;
            var5 = var2.location;
            var _closure2_slot2 = var5;
            var3 = var2.onConfirm;
            var _closure2_slot3 = var3;
            var2 = var2.onCancel;
            var _closure2_slot4 = var2;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var3 = var4[var3];
            var4 = undefined;
            var9 = var8.bind(var4)(var3);
            var8 = var9.isEligibleForFriendRequestAlerts;
            var3 = 'useFriendRequestActions';
            var3 = var8.bind(var9)(var3);
            var9 = _closure1_slot3;
            var8 = var9.isStranger;
            var8 = var8.bind(var9)(var7);
            var9 = null;
            if(!(var9 == var6)) { _fun0007_ip = 259; continue _fun0007 }
 116:
            if(!var3) { _fun0007_ip = 259; continue _fun0007 }
 122:
            var9 = false;
            if(!(var9 !== var8)) { _fun0007_ip = 259; continue _fun0007 }
 131:
            if(!var8) { _fun0007_ip = 137; continue _fun0007 }
 134:
            if(var3) { _fun0007_ip = 200; continue _fun0007 }
 137:
            if(!var3) { _fun0007_ip = 257; continue _fun0007 }
 140:
            var8 = _closure1_slot5;
            var3 = {};
            var3['userId'] = var7;
            var3['applicationId'] = var6;
            var3['location'] = var5;
            var9 = var8.bind(var4)(var3);
            var8 = var9.then;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure1_slot6;
                    var4 = {};
                    var1 = _closure2_slot0;
                    var4['userId'] = var1;
                    var1 = _closure2_slot1;
                    var4['applicationId'] = var1;
                    var1 = _closure2_slot2;
                    var4['location'] = var1;
                    var1 = _closure2_slot3;
                    var4['onConfirm'] = var1;
                    var1 = _closure2_slot4;
                    var4['onCancel'] = var1;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var5.bind(var1)(var3, var4);
                    if(var3) { _fun0008_ip = 78; continue _fun0008 }
 68:
                    var5 = _closure2_slot3;
                    var4 = null;
                    var3 = var4 == var5;
 78:
                    if(var3) { _fun0008_ip = 89; continue _fun0008 }
 81:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
 89:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var3);
            var8 = var9.catch;
            var3 = function(arg1) {
                var4 = _closure1_slot6;
                var3 = {};
                var2 = _closure2_slot0;
                var3['userId'] = var2;
                var2 = _closure2_slot1;
                var3['applicationId'] = var2;
                var2 = _closure2_slot2;
                var3['location'] = var2;
                var2 = _closure2_slot3;
                var3['onConfirm'] = var2;
                var1 = _closure2_slot4;
                var3['onCancel'] = var1;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var3 = var8.bind(var9)(var3);
            _fun0007_ip = 257; continue _fun0007;
 200:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 5;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.openAcceptFriendRequestConfirmModal;
            var3 = {};
            var10 = function onConfirm() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = {};
                    var1 = _closure2_slot0;
                    var3['userId'] = var1;
                    var1 = _closure2_slot1;
                    var3['applicationId'] = var1;
                    var1 = _closure2_slot2;
                    var3['location'] = var1;
                    var1 = true;
                    var3['confirmStrangerRequest'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0009_ip = 68; continue _fun0009 }
 60:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
 68:
                    return var1;
                }
            };
            var3['onConfirm'] = var10;
            var10 = function onCancel() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 23; continue _fun0010 }
 13:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onCancel'] = var10;
            var3 = var8.bind(var9)(var3);
 257:
            return var4;
 259:
            var3 = _closure1_slot5;
            var2 = {};
            var2['userId'] = var7;
            var2['applicationId'] = var6;
            var2['location'] = var5;
            var5 = true;
            var2['confirmStrangerRequest'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 23; continue _fun0011 }
 13:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['maybeConfirmFriendRequestAccept'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/people/PeopleUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();