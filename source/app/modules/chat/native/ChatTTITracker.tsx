// app/modules/chat/native/ChatTTITracker.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var7 = var4.Fragment;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatTTITracker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatTTITracker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.messages;
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var5 = var8.length;
            var1 = 0;
            var1 = var5 > var1;
            var5 = null;
            if(!var1) { _fun0001_ip = 99; continue _fun0001 }
 40:
            var13 = _closure1_slot3;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 1;
            var1 = var11[var1];
            var12 = undefined;
            var1 = var10.bind(var12)(var1);
            var11 = var1.TTIMeasurementView;
            var10 = {};
            var1 = function onMeasurement(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.displayMessagesWithCache;
                var3 = var4.record;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.timestamp;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onMeasurement'] = var1;
            var1 = 'cached_messages_tti';
            var5 = var13.bind(var12)(var11, var10, var1);
 99:
            var1 = new Array(2);
            var1[0] = var5;
            var5 = var8.hasFetched;
            if(var5) { _fun0001_ip = 138; continue _fun0001 }
 116:
            var10 = var8.ready;
            var5 = null;
            if(!var10) { _fun0001_ip = 197; continue _fun0001 }
 127:
            var8 = var8.cached;
            var5 = null;
            if(var8) { _fun0001_ip = 197; continue _fun0001 }
 138:
            var10 = _closure1_slot3;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 1;
            var7 = var9[var7];
            var9 = undefined;
            var7 = var8.bind(var9)(var7);
            var8 = var7.TTIMeasurementView;
            var7 = {};
            var6 = function onMeasurement(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.displayLatestMessages;
                var3 = var4.record;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.timestamp;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onMeasurement'] = var6;
            var6 = 'latest_messages_tti';
            var5 = var10.bind(var9)(var8, var7, var6);
 197:
            var1[1] = var5;
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['ChatTTITracker'] = var2;
    return var1;
})();