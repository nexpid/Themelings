// app/modules/system_dm/UrgentSystemDMManagerBase.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function maybeShowUrgentMessageModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot9;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 94; continue _fun0002 }
 22:
            var3 = _closure1_slot8;
            var1 = var3.getChannelId;
            var1 = var1.bind(var3)();
            var6 = _closure1_slot7;
            var4 = var6.getDMFromUserId;
            var3 = _closure1_slot10;
            var3 = var4.bind(var6)(var3);
            var4 = var5.hasUrgentMessages;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0002_ip = 98; continue _fun0002 }
 68:
            if(!(var3 !== var1)) { _fun0002_ip = 98; continue _fun0002 }
 72:
            var3 = _closure1_slot12;
            if(var3) { _fun0002_ip = 94; continue _fun0002 }
 79:
            var3 = true;
            _closure1_slot12 = var3;
            var4 = arg1;
            var3 = undefined;
            var3 = var4.bind(var3)();
 94:
            var3 = undefined;
            return var3;
 98:
            var3 = _closure1_slot15;
            var2 = {};
            var2['channelId'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function maybeClearUrgentMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot9;
            var2 = var4.getCurrentUser;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot7;
            var4 = var6.getDMFromUserId;
            var2 = _closure1_slot10;
            var2 = var4.bind(var6)(var2);
            var3 = var3 === var2;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0003_ip = 66; continue _fun0003 }
 56:
            var4 = var5.hasUrgentMessages;
            var2 = var4.bind(var5)();
 66:
            if(!var2) { _fun0003_ip = 72; continue _fun0003 }
 69:
            var2 = var3;
 72:
            if(!var2) { _fun0003_ip = 125; continue _fun0003 }
 75:
            var4 = false;
            _closure1_slot12 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setFlag;
            var1 = _closure1_slot11;
            var1 = var1.HAS_UNREAD_URGENT_MESSAGES;
            var1 = var2.bind(var3)(var1, var4);
 125:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SYSTEM_USER;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserFlags;
    var _closure1_slot11 = var4;
    var4 = false;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function UrgentSystemDMManagerBase(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var2);
                var1 = _closure1_slot5;
                var11 = var1.bind(var5)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 64; continue _fun0004 }
 51:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0004_ip = 102; continue _fun0004;
 64:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 102:
                var1 = var2.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var2 = arg1;
                var1['handleShowUrgentMessageAlert'] = var2;
                var2 = {};
                var5 = function POST_CONNECTION_OPEN() {
                    var3 = _closure1_slot14;
                    var1 = _closure3_slot0;
                    var2 = var1.handleShowUrgentMessageAlert;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var5;
                var4 = function MESSAGE_CREATE() {
                    var3 = _closure1_slot14;
                    var1 = _closure3_slot0;
                    var2 = var1.handleShowUrgentMessageAlert;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['MESSAGE_CREATE'] = var4;
                var3 = _closure1_slot15;
                var2['CHANNEL_SELECT'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/system_dm/UrgentSystemDMManagerBase.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();