// app/modules/channel/SelectedChannelManager.tsx
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.findFirstVoiceChannelId;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot12 = var8;
    var8 = var4.Routes;
    var _closure1_slot13 = var8;
    var8 = var4.ME;
    var _closure1_slot14 = var8;
    var4 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function SelectedChannelManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleGuildCreate;
                var2['GUILD_CREATE'] = var3;
                var3 = var1.handleChannelCreate;
                var2['CHANNEL_CREATE'] = var3;
                var3 = var1.handleLogout;
                var2['LOGOUT'] = var3;
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
        var1 = 'handleGuildCreate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var1 = var1.guild;
                var5 = _closure1_slot9;
                var3 = var5.getChannelId;
                var2 = _closure1_slot14;
                var3 = var3.bind(var5)(var2);
                var2 = var5.getVoiceChannelId;
                var5 = var2.bind(var5)();
                var2 = var1.id;
                if(!(var2 === var3)) { _fun0003_ip = 87; continue _fun0003 }
 49:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var3);
                var3 = var6.transitionToGuild;
                var2 = var1.id;
                var2 = var3.bind(var6)(var2);
 87:
                var2 = var1.id;
                var2 = var2 === var5;
                if(!var2) { _fun0003_ip = 111; continue _fun0003 }
 99:
                var6 = var1.unavailable;
                var3 = false;
                var2 = var3 !== var6;
 111:
                if(!var2) { _fun0003_ip = 120; continue _fun0003 }
 114:
                var3 = null;
                var2 = var3 == var5;
 120:
                if(!var2) { _fun0003_ip = 170; continue _fun0003 }
 123:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.selectVoiceChannel;
                var4 = _closure1_slot10;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
 170:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleChannelCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var2 = var1.channel;
                var4 = var2.type;
                var3 = _closure1_slot12;
                var3 = var3.GROUP_DM;
                if(!(var4 === var3)) { _fun0004_ip = 234; continue _fun0004 }
 33:
                var5 = var2.originChannelId;
                var6 = _closure1_slot9;
                var4 = var6.getChannelId;
                var3 = _closure1_slot15;
                var6 = var4.bind(var6)(var3);
                var4 = _closure1_slot11;
                var3 = var4.getGuildId;
                var4 = var3.bind(var4)();
                var3 = null;
                var4 = var3 == var4;
                if(!var4) { _fun0004_ip = 85; continue _fun0004 }
 81:
                var4 = var3 != var5;
 85:
                if(!var4) { _fun0004_ip = 92; continue _fun0004 }
 88:
                var4 = var5 === var6;
 92:
                if(!var4) { _fun0004_ip = 153; continue _fun0004 }
 95:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 11;
                var6 = var6[var4];
                var4 = undefined;
                var7 = var7.bind(var4)(var6);
                var6 = var7.transitionTo;
                var10 = _closure1_slot13;
                var9 = var10.CHANNEL;
                var8 = _closure1_slot14;
                var4 = var2.id;
                var4 = var9.bind(var10)(var8, var4);
                var4 = var6.bind(var7)(var4);
 153:
                var3 = var3 != var5;
                if(!var3) { _fun0004_ip = 178; continue _fun0004 }
 160:
                var6 = _closure1_slot9;
                var4 = var6.getVoiceChannelId;
                var4 = var4.bind(var6)();
                var3 = var5 === var4;
 178:
                if(!var3) { _fun0004_ip = 234; continue _fun0004 }
 181:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.selectVoiceChannel;
                var2 = var2.id;
                var5 = _closure1_slot8;
                var1 = var5.isVideoEnabled;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
 234:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleLogout';
        var5['key'] = var7;
        var6 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'VOICE_CHANNEL_SELECT', 'channelId': null, 'guildId': null, 'video': false, 'currentVoiceChannelId': null, 'joinVoiceId': null};
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/SelectedChannelManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();