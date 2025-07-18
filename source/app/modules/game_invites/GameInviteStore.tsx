// app/modules/game_invites/GameInviteStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function parseInvite(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var9 = undefined;
            var3 = undefined;
            var6 = undefined;
            var4 = undefined;
            var1 = null;
            var7 = null;
 15: // try_start_0
            var8 = global;
            var11 = var8.JSON;
            var10 = var11.parse;
            var8 = var5;
            var8 = var8.launch_parameters;
            var7 = var10.bind(var11)(var8);
 45: // try_end0
            var8 = var5;
            var10 = var8.platform_type;
            var8 = _closure1_slot7;
            var8 = var8.XBOX;
            if(!(var10 !== var8)) { _fun0002_ip = 73; continue _fun0002 }
 71:
            return var1;
 73:
            var8 = var7;
            var9 = var8;
            var10 = var1 == var8;
            var8 = undefined;
            if(var10) { _fun0002_ip = 94; continue _fun0002 }
 88:
            var8 = var9.titleId;
 94:
            var6 = var8;
            var3 = var7;
            var7 = var1 == var7;
            var2 = undefined;
            if(var7) { _fun0002_ip = 115; continue _fun0002 }
 109:
            var2 = var3.inviteToken;
 115:
            var4 = var2;
            var2 = var6;
            var3 = var1 == var2;
            var2 = null;
            if(var3) { _fun0002_ip = 180; continue _fun0002 }
 130:
            var3 = var4;
            var3 = var1 == var3;
            var2 = null;
            if(var3) { _fun0002_ip = 180; continue _fun0002 }
 142:
            var3 = {};
            var12 = var5;
            var13 = var3;
            var5 = copyDataProperties(var13, var12);
            var5 = {};
            var5['titleId'] = var6;
            var5['inviteToken'] = var4;
            var4 = 'parsed_launch_parameters';
            var3[var4] = var5;
            var2 = var3;
 180:
            return var2;
 182: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PlatformTypes;
    var _closure1_slot7 = var8;
    var8 = new Array(0);
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot9 = var8;
    var8 = null;
    var _closure1_slot10 = var8;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GameInviteStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getInvites';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getInviteStatuses';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isInviteGameInstalled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var1.invite_id;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 37; continue _fun0004 }
 31:
                var1 = var2.installed;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isInviteJoinable';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var1.invite_id;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 37; continue _fun0005 }
 31:
                var1 = var2.joinable;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastUnseenInvite';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getUnseenInviteCount';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GameInviteStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpenSupplemental(arg1) {
        var1 = arg1;
        var4 = var1.gameInvites;
        var2 = var4.map;
        var1 = _closure1_slot13;
        var5 = var2.bind(var4)(var1);
        var4 = var5.filter;
        var6 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var2 = var2.isNotNullish;
        var2 = var4.bind(var5)(var2);
        _closure1_slot8 = var2;
        return var1;
    };
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var9;
    var9 = function handleGameInviteCreate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.gameInvite;
            var4 = _closure1_slot13;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var5 = null;
            if(!(var5 != var4)) { _fun0006_ip = 74; continue _fun0006 }
 29:
            var5 = new Array(1);
            var5[0] = var4;
            var8 = _closure1_slot8;
            var4 = 1;
            var9 = var5;
            var7 = var4;
            var6 = arraySpread(var9, var8, var7);
            _closure1_slot8 = var5;
            _closure1_slot10 = var2;
            var2 = _closure1_slot11;
            var2 = var2 + var4;
            _closure1_slot11 = var2;
 74:
            return var1;
        }
    };
    var2['GAME_INVITE_CREATE'] = var9;
    var9 = function handleGameInviteDelete(arg1) {
        var2 = arg1;
        var2 = var2.inviteId;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot8;
        var3 = var4.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.invite_id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_INVITE_DELETE'] = var9;
    var9 = function handleGameInviteDeleteMany(arg1) {
        var2 = arg1;
        var2 = var2.inviteIds;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot8;
        var3 = var4.filter;
        var1 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var1.invite_id;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_INVITE_DELETE_MANY'] = var9;
    var9 = function handleGameInviteUpdateStatus(arg1) {
        var4 = arg1;
        var3 = {};
        var6 = _closure1_slot9;
        var7 = var3;
        var2 = copyDataProperties(var7, var6);
        _closure1_slot9 = var3;
        var2 = var4.inviteId;
        var1 = {};
        var5 = var4.installed;
        var1['installed'] = var5;
        var4 = var4.joinable;
        var1['joinable'] = var4;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_INVITE_UPDATE_STATUS'] = var9;
    var4 = function handleGameInviteClearUnseen() {
        var1 = null;
        _closure1_slot10 = var1;
        var1 = 0;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_INVITE_CLEAR_UNSEEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_invites/GameInviteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();