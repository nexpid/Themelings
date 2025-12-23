// app/modules/premium/premium_group/PremiumGroupStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var10 = function handleMutationStart() {
        var1 = _closure1_slot12;
        var2 = var1.membersData;
        var1 = true;
        var2['isUpdating'] = var1;
        var1 = undefined;
        return var1;
    };
    var9 = function handleMutationSuccess(arg1) {
        var1 = arg1;
        var1 = var1.subscriptionId;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.wait;
        var3 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.fetchSubscriptionGroupMembers;
            var2 = _closure2_slot0;
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = _closure1_slot11;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot12;
        var3 = var2.membersData;
        var2 = false;
        var3['isUpdating'] = var2;
        return var1;
    };
    var11 = function handleMutationFailure() {
        var1 = _closure1_slot12;
        var2 = var1.membersData;
        var1 = false;
        var2['isUpdating'] = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot14 = var11;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.PremiumGroupAPIErrorCodes;
    var _closure1_slot9 = var8;
    var2 = var2.TOTAL_PREMIUM_GROUP_MEMBER_SEATS;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NOOP_NULL;
    var _closure1_slot11 = var2;
    var2 = {};
    var8 = {'data': null, 'isFetching': false, 'isUpdating': false};
    var2['membersData'] = var8;
    var8 = {'data': null, 'isFetching': false, 'hasFetched': false};
    var2['membershipData'] = var8;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PremiumGroupStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMembers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membersData;
            var1 = var1.data;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingMembers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membersData;
            var1 = var1.isFetching;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isUpdatingMembers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membersData;
            var1 = var1.isUpdating;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasFetchedMembers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membersData;
            var2 = var1.data;
            var1 = null;
            var1 = var1 !== var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMembership';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membershipData;
            var1 = var1.data;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFetchingMembership';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membershipData;
            var1 = var1.isFetching;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasFetchedMembership';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.membershipData;
            var2 = var1.data;
            var1 = null;
            var1 = var1 !== var2;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getNumUsedSeats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot12;
                var1 = var1.membersData;
                var3 = var1.data;
                var1 = null;
                var3 = var1 == var3;
                var1 = 0;
                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot12;
                var2 = var2.membersData;
                var2 = var2.data;
                var2 = var2.members;
                var1 = var2.length;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getNumAvailableInvites';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot12;
                var2 = var2.membersData;
                var3 = var2.data;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = _closure1_slot12;
                var2 = var2.membersData;
                var2 = var2.data;
                var2 = var2.members;
                var3 = var2.length;
                var2 = _closure1_slot12;
                var2 = var2.membersData;
                var2 = var2.data;
                var2 = var2.invitedUsers;
                var2 = var2.length;
                var3 = var3 + var2;
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var2 = _closure1_slot10;
                var3 = var2 - var3;
                var2 = 0;
                var2 = var4.bind(var5)(var2, var3);
                return var2;
case 11:
                var1 = _closure1_slot10;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getNumTotalSeats';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PremiumGroupStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleMembersRequest(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var1 = var1.subscriptionId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot12;
            var1 = var1.membersData;
            var1 = var1.isFetching;
            var1 = !var1;
            if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 8;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.wait;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.fetchSubscriptionGroupMembers;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = _closure1_slot11;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 13:
            return var1;
        }
    };
    var2['PREMIUM_GROUP_MEMBERS_REQUEST'] = var12;
    var12 = function handleMembersFetchStart() {
        var1 = _closure1_slot12;
        var2 = var1.membersData;
        var1 = true;
        var2['isFetching'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERS_FETCH_START'] = var12;
    var12 = function handleMembersFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.members;
        var2 = _closure1_slot12;
        var2 = var2.membersData;
        var2['data'] = var3;
        var1 = _closure1_slot12;
        var2 = var1.membersData;
        var1 = false;
        var2['isFetching'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS'] = var12;
    var12 = function handleMembersFetchFailure() {
        var1 = _closure1_slot12;
        var2 = var1.membersData;
        var1 = false;
        var2['isFetching'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERS_FETCH_FAILURE'] = var12;
    var12 = function handleMembershipRequest() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot12;
            var1 = var1.membershipData;
            var1 = var1.isFetching;
            var1 = !var1;
            if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.wait;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchPremiumGroupMembership;
                var3 = var2.bind(var3)();
                var2 = var3.catch;
                var1 = _closure1_slot11;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 15:
            return var1;
        }
    };
    var2['PREMIUM_GROUP_MEMBERSHIP_REQUEST'] = var12;
    var12 = function handleMembershipFetchStart() {
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = true;
        var2['isFetching'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERSHIP_FETCH_START'] = var12;
    var12 = function handleMembershipFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.membership;
        var2 = _closure1_slot12;
        var2 = var2.membershipData;
        var2['data'] = var3;
        var2 = _closure1_slot12;
        var3 = var2.membershipData;
        var2 = false;
        var3['isFetching'] = var2;
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = true;
        var2['hasFetched'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS'] = var12;
    var12 = function handleMembershipNotFound() {
        var2 = _closure1_slot12;
        var3 = var2.membershipData;
        var2 = false;
        var3['isFetching'] = var2;
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = true;
        var2['hasFetched'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND'] = var12;
    var12 = function handleMembershipFetchFailure() {
        var2 = _closure1_slot12;
        var3 = var2.membershipData;
        var2 = false;
        var3['isFetching'] = var2;
        var1 = _closure1_slot12;
        var2 = var1.membershipData;
        var1 = true;
        var2['hasFetched'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE'] = var12;
    var2['PREMIUM_GROUP_INVITE_USERS_START'] = var10;
    var2['PREMIUM_GROUP_INVITE_USERS_SUCCESS'] = var9;
    var2['PREMIUM_GROUP_INVITE_USERS_FAILURE'] = var11;
    var2['PREMIUM_GROUP_REMOVE_MEMBER_START'] = var10;
    var2['PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS'] = var9;
    var2['PREMIUM_GROUP_REMOVE_MEMBER_FAILURE'] = var11;
    var2['PREMIUM_GROUP_REMOVE_INVITE_START'] = var10;
    var2['PREMIUM_GROUP_REMOVE_INVITE_SUCCESS'] = var9;
    var9 = function handleRemoveInviteFailure(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.errorCode;
            var1 = var1.subscriptionId;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot9;
            var3 = var3.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED;
            if(!(var4 !== var3)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
            var4 = _closure1_slot14;
            var3 = undefined;
            var4 = var4.bind(var3)();
            return var3;
case 17:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 8;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.wait;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.fetchSubscriptionGroupMembers;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = _closure1_slot11;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure1_slot12;
            var2 = var1.membersData;
            var1 = false;
            var2['isUpdating'] = var1;
            var1 = true;
            return var1;
        }
    };
    var2['PREMIUM_GROUP_REMOVE_INVITE_FAILURE'] = var9;
    var4 = function reset() {
        var2 = {};
        var1 = {'data': null, 'isFetching': false, 'isUpdating': false};
        var2['membersData'] = var1;
        var1 = {'data': null, 'isFetching': false, 'hasFetched': false};
        var2['membershipData'] = var1;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/PremiumGroupStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();