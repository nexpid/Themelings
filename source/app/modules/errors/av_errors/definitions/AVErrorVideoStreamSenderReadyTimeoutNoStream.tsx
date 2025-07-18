// app/modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        var3 = _closure1_slot3;
        var2 = var3.getTimedoutVideos;
        var4 = var2.bind(var3)();
        var2 = global;
        var3 = var2.Object;
        var2 = var3.values;
        var4 = var2.bind(var3)(var4);
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var2 = var1.userId;
                var3 = var1.videoStreamId;
                var4 = _closure1_slot2;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var1 = var1 === var2;
                if(!var1) { _fun0001_ip = 44; continue _fun0001 }
 38:
                var2 = null;
                var1 = var2 == var3;
 44:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVError;
            var2 = var2.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
            var1['type'] = var2;
            var5 = arg1;
            var6 = var1;
            var2 = copyDataProperties(var6, var5);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getActiveErrors'] = var7;
    var4 = function makeErrorContextKey(arg1) {
        var1 = arg1;
        var5 = var1.mediaContext;
        var4 = var1.userId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var2['makeErrorContextKey'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition'] = var2;
    return var1;
})();