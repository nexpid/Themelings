// app/modules/stage_channels/native/StageBoostUpsellManager.tsx
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
    var4 = var4.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot12 = var4;
    var4 = false;
    var _closure1_slot13 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function StageBoostUpsellManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleVoiceChannelSelect;
                var2['VOICE_CHANNEL_SELECT'] = var3;
                var3 = var1.handleVoiceStateUpdates;
                var2['VOICE_STATE_UPDATES'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handleVoiceChannelSelect';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = var1.channelId;
                var1 = null;
                var1 = var1 == var2;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = _closure1_slot8;
                var3 = var4.getKey;
                var3 = var3.bind(var4)();
                var2 = _closure1_slot12;
                var1 = var3 === var2;
case 9:
                if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.hideActionSheet;
                var1 = _closure1_slot12;
                var1 = var2.bind(var3)(var1);
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleVoiceStateUpdates';
        var5['key'] = var7;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure1_slot13;
                if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = _closure1_slot11;
                var1 = var3.getVoiceChannelId;
                var5 = var1.bind(var3)();
                var1 = null;
                if(!(var1 != var5)) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                var4 = _closure1_slot9;
                var3 = var4.getChannel;
                var7 = var3.bind(var4)(var5);
                if(!(var1 != var7)) { _fun0004_ip = 13; continue _fun0004 }
case 16:
                if(!(var1 != var7)) { _fun0004_ip = 13; continue _fun0004 }
case 17:
                var1 = var7.isGuildStageVoice;
                var1 = var1.bind(var7)();
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 18:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var8 = undefined;
                var4 = var3.bind(var8)(var1);
                var3 = var4.getStageHasMedia;
                var1 = var7.id;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 19:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var3 = var3.bind(var8)(var1);
                var1 = var3.getChannelVideoLimit;
                var1 = var1.bind(var3)(var7);
                var1 = var1.reachedLimit;
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 20:
                var4 = _closure1_slot10;
                var3 = var4.can;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var1 = var5.bind(var8)(var1);
                var1 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var1 = var3.bind(var4)(var1, var7);
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 21:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 10;
                var3 = var1[var3];
                var6 = var4.bind(var8)(var3);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 15;
                var3 = var1[var3];
                var4 = var4.bind(var8)(var3);
                var3 = 14;
                var3 = var1[var3];
                var1 = var1.paths;
                var4 = var4.bind(var8)(var3, var1);
                var3 = _closure1_slot12;
                var1 = {};
                var1['channel'] = var7;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = true;
                _closure1_slot13 = var1;
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
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
    var4 = 'modules/stage_channels/native/StageBoostUpsellManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();