// app/modules/premium/gifting/native/MobileGiftIntentCardManager.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GiftIntentSecondaryAction;
    var _closure1_slot12 = var8;
    var4 = var4.GiftIntentType;
    var _closure1_slot13 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MobileGiftIntentCardManager() {
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
                var1 = _closure1_slot14;
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
        var1 = 'isChannelEligible';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.ChannelTypes;
            var1 = var1.DM;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'maybeSendCard';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var9 = arg1;
                var4 = arg2;
                var8 = this;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var9;
                var _closure3_slot2 = var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var5.EnableFriendAnniversaryNotifications;
                var5 = var6.getSetting;
                var5 = var5.bind(var6)();
                if(!var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var6 = _closure1_slot11;
                var5 = var6.isGiftIntentMessageInCooldown;
                var5 = var5.bind(var6)(var4);
                if(var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var7 = _closure1_slot10;
                var6 = var7.getChannelId;
                var6 = var6.bind(var7)();
                var5 = var9 !== var6;
case 11:
                if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 13:
                var6 = _closure1_slot9;
                var5 = var6.isReady;
                var5 = var5.bind(var6)(var9);
                if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var6 = _closure1_slot9;
                var5 = var6.whenReady;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure1_slot10;
                        var1 = var2.getChannelId;
                        var3 = var1.bind(var2)();
                        var2 = _closure3_slot1;
                        if(!(var3 === var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var4 = _closure3_slot0;
                        var3 = var4.maybeSendCard;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot2;
                        var1 = var3.bind(var4)(var2, var1);
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var9, var3);
                _fun0003_ip = 9; continue _fun0003;
case 14:
                var7 = var8.trySendGiftingPromptSystemMessage;
                var3 = _closure1_slot13;
                var13 = var3.FRIEND_ANNIVERSARY;
                var3 = _closure1_slot12;
                var11 = var3.SEND_MESSAGE;
                var10 = 'maybeSendCard';
                var15 = var8;
                var14 = var9;
                var12 = var4;
                var3 = var15[var7](var14, var13, var12, var11, var10, var9);
                if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 18:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.logMessageGiftIntentShown;
                var2 = var2.bind(var3)(var4);
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'sendCardInSelectedChannelIfEligible';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot8;
                var4 = var5.getChannel;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var _closure3_slot1 = var3;
                var4 = null;
                if(!(var4 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var5 = var6.isChannelEligible;
                var5 = var5.bind(var6)(var3);
                if(!var5) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                var5 = global;
                var6 = var5.Set;
                var8 = var3.recipients;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var3 = new var9[var6](var8, var7);
                var3 = var3 instanceof Object ? var3 : var5;
                var _closure3_slot2 = var3;
                var5 = _closure1_slot11;
                var3 = var5.getFriendAnniversaries;
                var6 = var3.bind(var5)();
                var5 = var6.find;
                var3 = function(arg1) {
                    var3 = _closure3_slot2;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
                var _closure3_slot3 = var3;
                if(!(var4 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 22:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.DelayedCall;
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var8 = 1000;
                var7 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.maybeSendCard;
                    var2 = _closure3_slot1;
                    var2 = var2.id;
                    var1 = _closure3_slot3;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var9 = var2;
                var1 = new var9[var4](var8, var7, var6);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.delay;
                var1 = var1.bind(var2)();
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'maybeFetchUserAffinities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'MobileGiftIntentCardManager';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = var3.enabled;
                if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchUserAffinitiesV2;
                var2 = var2.bind(var3)();
case 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'onChannelSelect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var1 = arg1;
            var2 = var1.channelId;
            var1 = var3.sendCardInSelectedChannelIfEligible;
            var1 = var1.bind(var3)(var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'sendGiftingPromptSystemMessagesIfEligible';
        var5['key'] = var7;
        var6 = function value() {
            var3 = this;
            var1 = var3.maybeFetchUserAffinities;
            var1 = var1.bind(var3)();
            var2 = var3.sendCardInSelectedChannelIfEligible;
            var4 = _closure1_slot10;
            var1 = var4.getChannelId;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/MobileGiftIntentCardManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();