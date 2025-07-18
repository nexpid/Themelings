// app/modules/guild_scheduled_events/useGetEventChannelsByType.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function getEventChannelsByType(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg2;
            var3 = arguments[2];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0004_ip = 30; continue _fun0004 }
 12:
            var2 = _closure1_slot3;
            var1 = new Array(1);
            var1[0] = var2;
            var3 = var1;
 30:
            var2 = var3;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var3 = var2().value;
            var2 = var1;
            var2 = var2 === var7;
            var5 = undefined;
            if(var2) { _fun0004_ip = 55; continue _fun0004 }
 52:
            var5 = var3;
 55:
            if(var2) { _fun0004_ip = 61; continue _fun0004 }
 58:
            var1.return();
 61:
            var1 = null;
            if(!(var1 != var8)) { _fun0004_ip = 259; continue _fun0004 }
 70:
            var1 = new Array(0);
            var3 = _closure1_slot8;
            var4 = var5.getChannels;
            var2 = arg1;
            var4 = var4.bind(var5)(var2);
            var2 = _closure1_slot4;
            var2 = var4[var2];
            var5 = var3.bind(var7)(var2);
            var3 = var5.bind(var7)();
            var2 = var3.done;
            var4 = 5;
            if(var2) { _fun0004_ip = 257; continue _fun0004 }
 126:
            var2 = var3.value;
            var9 = var2.channel;
            var10 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var10 = var10.bind(var7)(var2);
            var2 = var10.getManageResourcePermissions;
            var2 = var2.bind(var10)(var9);
            var11 = var2.canCreateGuildEvent;
            var2 = var2.canManageAllEvents;
            if(var11) { _fun0004_ip = 182; continue _fun0004 }
 179:
            var11 = var2;
 182:
            var2 = var9.type;
            if(!(var2 === var8)) { _fun0004_ip = 242; continue _fun0004 }
 191:
            var2 = var9.isGuildVoice;
            var2 = var2.bind(var9)();
            if(!var2) { _fun0004_ip = 207; continue _fun0004 }
 204:
            var2 = var11;
 207:
            if(var2) { _fun0004_ip = 229; continue _fun0004 }
 210:
            var10 = var9.isGuildStageVoice;
            var10 = var10.bind(var9)();
            if(!var10) { _fun0004_ip = 226; continue _fun0004 }
 223:
            var10 = var11;
 226:
            var2 = var10;
 229:
            if(!var2) { _fun0004_ip = 242; continue _fun0004 }
 232:
            var2 = var1.push;
            var2 = var2.bind(var1)(var9);
 242:
            var9 = var5.bind(var7)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0004_ip = 126; continue _fun0004 }
 257:
            return var1;
 259:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot6 = var8;
    var5 = var5.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/useGetEventChannelsByType.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useCanCreateEventInStageChannel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 4;
            var2 = var8[var5];
            var6 = undefined;
            var12 = var7.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var9 = new Array(1);
            var9[0] = var4;
            var2 = function() {
                var4 = _closure1_slot5;
                var3 = var4.can;
                var2 = _closure1_slot7;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var11.bind(var12)(var10, var2, var9);
            var5 = var8[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var6)(var3, var1);
            var1 = var4.isGuildStageVoice;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0005_ip = 124; continue _fun0005 }
 121:
            var1 = var2;
 124:
            if(!var1) { _fun0005_ip = 133; continue _fun0005 }
 127:
            var2 = null;
            var1 = var2 == var3;
 133:
            return var1;
        }
    };
    var3['useCanCreateEventInStageChannel'] = var5;
    var5 = function useCanCreateEventInVoiceChannel(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 4;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.can;
                var2 = _closure1_slot6;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var1, var2);
            var1 = var3.isGuildVoice;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0006_ip = 87; continue _fun0006 }
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var3['useCanCreateEventInVoiceChannel'] = var5;
    var3['getEventChannelsByType'] = var4;
    var2 = function useGetEventChannelsByType(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var5 = _closure1_slot10;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGetEventChannelsByType'] = var2;
    return var1;
})();