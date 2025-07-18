// app/modules/applications/message_embed/utils/getPlayInContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/utils/getPlayInContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePlayInContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 2;
            var6 = var2[var7];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var10)(var8, var6);
            var _closure2_slot1 = var9;
            var2 = var2[var7];
            var8 = var4.bind(var5)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 74; continue _fun0002 }
 13:
                    var4 = _closure1_slot2;
                    var3 = var4.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot1;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var2 = var4.length;
                    var3 = 0;
                    var5 = var2 > var3;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 72; continue _fun0002 }
 68:
                    var2 = var4[var3];
 72:
                    return var2;
 74:
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var4, var2);
            var8 = null;
            var4 = var8 == var2;
            var6 = undefined;
            if(var4) { _fun0001_ip = 120; continue _fun0001 }
 114:
            var6 = var2.compositeInstanceId;
 120:
            var10 = var8 == var2;
            var4 = undefined;
            if(var10) { _fun0001_ip = 134; continue _fun0001 }
 129:
            var4 = var2.location;
 134:
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = var10[var7];
            var11 = var2.bind(var5)(var7);
            var7 = var11.useStateFromStores;
            var12 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentEmbeddedActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var11)(var3, var1);
            var1 = 3;
            var3 = var10[var1];
            var11 = var2.bind(var5)(var3);
            var3 = var11.useEmbeddedActivityLaunchability;
            var3 = var3.bind(var11)(var9);
            var1 = var10[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.EmbeddedActivityLaunchability;
            var2 = var1.CAN_LAUNCH;
            var1 = {};
            var1['currentChannelId'] = var9;
            var1['instanceId'] = var6;
            var1['instanceLocation'] = var4;
            var4 = var8 != var6;
            if(!var4) { _fun0001_ip = 266; continue _fun0001 }
 247:
            var8 = var8 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 262; continue _fun0001 }
 256:
            var5 = var7.compositeInstanceId;
 262:
            var4 = var5 === var6;
 266:
            var1['isCurrentlyInInstance'] = var4;
            var2 = var3 === var2;
            var1['canLaunchInChannel'] = var2;
            return var1;
        }
    };
    var3['usePlayInContext'] = var4;
    var2 = function getPlayInContext(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var8 = null;
            if(!(var8 == var9)) { _fun0003_ip = 35; continue _fun0003 }
 18:
            var2 = _closure1_slot3;
            var1 = var2.getChannelId;
            var9 = var1.bind(var2)();
 35:
            if(!(var8 != var9)) { _fun0003_ip = 310; continue _fun0003 }
 42:
            if(!(var8 == var9)) { _fun0003_ip = 85; continue _fun0003 }
 46:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.EmbeddedActivityLaunchability;
            var3 = var1.NO_CHANNEL;
            _fun0003_ip = 121; continue _fun0003;
 85:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var1 = var2.getEmbeddedActivityLaunchabilityForChannel;
            var3 = var1.bind(var2)(var9);
 121:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.EmbeddedActivityLaunchability;
            var2 = var2.CAN_LAUNCH;
            var7 = _closure1_slot2;
            var6 = var7.getEmbeddedActivitiesForChannel;
            var7 = var6.bind(var7)(var9);
            var6 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var6.bind(var7)(var4);
            var7 = var6.length;
            var4 = 0;
            var10 = var7 > var4;
            var7 = undefined;
            if(!var10) { _fun0003_ip = 208; continue _fun0003 }
 204:
            var7 = var6[var4];
 208:
            var4 = var8 == var7;
            var6 = undefined;
            if(var4) { _fun0003_ip = 223; continue _fun0003 }
 217:
            var6 = var7.compositeInstanceId;
 223:
            var10 = var8 == var7;
            var4 = undefined;
            if(var10) { _fun0003_ip = 237; continue _fun0003 }
 232:
            var4 = var7.location;
 237:
            var7 = _closure1_slot2;
            var1 = var7.getCurrentEmbeddedActivity;
            var7 = var1.bind(var7)();
            var1 = {};
            var1['currentChannelId'] = var9;
            var1['instanceId'] = var6;
            var1['instanceLocation'] = var4;
            var4 = var8 != var6;
            if(!var4) { _fun0003_ip = 294; continue _fun0003 }
 275:
            var8 = var8 == var7;
            var5 = undefined;
            if(var8) { _fun0003_ip = 290; continue _fun0003 }
 284:
            var5 = var7.compositeInstanceId;
 290:
            var4 = var5 === var6;
 294:
            var1['isCurrentlyInInstance'] = var4;
            var2 = var3 === var2;
            var1['canLaunchInChannel'] = var2;
            return var1;
 310:
            var1 = {'currentChannelId': null, 'instanceId': null, 'instanceLocation': null, 'isCurrentlyInInstance': false, 'canLaunchInChannel': false};
            return var1;
        }
    };
    var3['getPlayInContext'] = var2;
    return var1;
})();