// app/modules/self_mod/ChannelSafetyWarningsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function handleChannelSelect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 258; continue _fun0002 }
 17:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var6 = var7.isEligibleForInappropriateConversationWarning;
            var3 = {};
            var8 = 'channel_select';
            var3['location'] = var8;
            var3 = var6.bind(var7)(var3);
            if(var3) { _fun0002_ip = 72; continue _fun0002 }
 68:
            var3 = false;
            return var3;
 72:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 8;
            var3 = var3[var8];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getSafetyAlertsSettingOrDefault;
            var3 = var3.bind(var6)();
            if(var3) { _fun0002_ip = 109; continue _fun0002 }
 105:
            var3 = false;
            return var3;
 109:
            var6 = _closure1_slot7;
            var3 = var6.getChannel;
            var7 = var3.bind(var6)(var5);
            if(!(var1 != var7)) { _fun0002_ip = 254; continue _fun0002 }
 130:
            var3 = var7.isDM;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0002_ip = 254; continue _fun0002 }
 143:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getInappropriateConversationTakeoverForChannel;
            var6 = var3.bind(var6)(var5);
            var1 = var1 != var6;
            if(!var1) { _fun0002_ip = 252; continue _fun0002 }
 178:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 9;
            var2 = var8[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.showTakeoverModal;
            var2 = {};
            var8 = var6.id;
            var2['warningId'] = var8;
            var6 = var6.type;
            var2['warningType'] = var6;
            var6 = var7.getRecipientId;
            var6 = var6.bind(var7)();
            var2['senderId'] = var6;
            var2['channelId'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 252:
            return var1;
 254:
            var1 = false;
            return var1;
 258:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function handleChannelUpdates(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.channels;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var7 = var5.bind(var4)(var1);
            var5 = var7.isEligibleForInappropriateConversationWarning;
            var1 = {};
            var8 = 'channel_updates';
            var1['location'] = var8;
            var1 = var5.bind(var7)(var1);
            if(var1) { _fun0003_ip = 68; continue _fun0003 }
 64:
            var1 = false;
            return var1;
 68:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 8;
            var1 = var1[var7];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getSafetyAlertsSettingOrDefault;
            var1 = var1.bind(var5)();
            if(var1) { _fun0003_ip = 105; continue _fun0003 }
 101:
            var1 = false;
            return var1;
 105:
            var5 = _closure1_slot8;
            var1 = var5.getCurrentlySelectedChannelId;
            var5 = var1.bind(var5)();
            _closure2_slot0 = var5;
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 300; continue _fun0003 }
 132:
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var6)(var3);
            if(!(var1 != var5)) { _fun0003_ip = 296; continue _fun0003 }
 156:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var7 = var6.bind(var4)(var3);
            var6 = var7.getInappropriateConversationTakeoverForChannel;
            var3 = var5.id;
            var6 = var6.bind(var7)(var3);
            var3 = var1 == var6;
            if(var3) { _fun0003_ip = 209; continue _fun0003 }
 196:
            var1 = var5.isDM;
            var1 = var1.bind(var5)();
            var3 = !var1;
 209:
            var1 = !var3;
            if(var3) { _fun0003_ip = 294; continue _fun0003 }
 215:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.showTakeoverModal;
            var2 = {};
            var7 = var6.id;
            var2['warningId'] = var7;
            var6 = var6.type;
            var2['warningType'] = var6;
            var6 = var5.getRecipientId;
            var6 = var6.bind(var5)();
            var2['senderId'] = var6;
            var5 = var5.id;
            var2['channelId'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 294:
            return var1;
 296:
            var1 = false;
            return var1;
 300:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function ChannelSafetyWarningsManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 84; continue _fun0004 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 118; continue _fun0004;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot10;
                var2['CHANNEL_SELECT'] = var4;
                var3 = _closure1_slot11;
                var2['CHANNEL_UPDATES'] = var3;
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
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/ChannelSafetyWarningsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();