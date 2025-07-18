// app/modules/activities/useIsActivityFocused.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function isActivityFocused(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.ChannelRTCStore;
            var3 = var1.EmbeddedActivitiesStore;
            var1 = var2.getSelectedParticipant;
            var2 = var1.bind(var2)(var4);
            var1 = var3.getCurrentEmbeddedActivity;
            var7 = var1.bind(var3)();
            var8 = null;
            var1 = var8 != var2;
            if(!var1) { _fun0001_ip = 54; continue _fun0001 }
 50:
            var1 = var8 != var7;
 54:
            if(!var1) { _fun0001_ip = 131; continue _fun0001 }
 57:
            var3 = var2.id;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var6 = undefined;
            var5 = var4.bind(var6)(var2);
            var4 = var5.getEmbeddedActivityParticipantId;
            var2 = {};
            var9 = var7.applicationId;
            var2['applicationId'] = var9;
            var8 = var8 == var7;
            if(var8) { _fun0001_ip = 117; continue _fun0001 }
 111:
            var6 = var7.compositeInstanceId;
 117:
            var2['instanceId'] = var6;
            var2 = var4.bind(var5)(var2);
            var1 = var3 === var2;
 131:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
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
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/useIsActivityFocused.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsActivityFocused(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = {};
            var4 = _closure2_slot0;
            var2['channelId'] = var4;
            var4 = _closure1_slot2;
            var2['ChannelRTCStore'] = var4;
            var1 = _closure1_slot3;
            var2['EmbeddedActivitiesStore'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['isActivityFocused'] = var2;
    return var1;
})();