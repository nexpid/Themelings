// app/modules/video_calls/native/components/ChannelCallController.tsx
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = function ChannelPrivateVoiceCallController(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.channel;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var6);
            var3 = var6.isPrivate;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0001_ip = 54; continue _fun0001 }
 51:
            if(var1) { _fun0001_ip = 76; continue _fun0001 }
 54:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var1 = {};
            var1['channel'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 112; continue _fun0001;
 76:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 112:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function ChannelCallController(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.channel;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var6 = var1.bind(var5)(var7);
            var1 = null;
            if(!(var1 == var6)) { _fun0002_ip = 66; continue _fun0002 }
 44:
            var4 = _closure1_slot5;
            var3 = _closure1_slot8;
            var1 = {};
            var1['channel'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 113; continue _fun0002;
 66:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ChannelCallSingleController;
            var2 = {};
            var2['channel'] = var7;
            var2['selectedParticipant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 113:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function ChannelCallGridContainer(arg1) {
        var2 = arg1;
        var2 = var2.channel;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var5 = var2.id;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var2 = var8[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot4;
            var3 = var2.VIDEO_LAYOUT_TOGGLED;
            var2 = {};
            var7 = 'grid';
            var2['video_layout'] = var7;
            var7 = _closure1_slot0;
            var6 = 8;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.collectVoiceAnalyticsMetadata;
            var6 = _closure2_slot0;
            var6 = var6.id;
            var9 = var7.bind(var8)(var6);
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = global;
        var3 = var1.Error;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var7 = 'Legacy voice and video call controller, slated for removal.';
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        throw var1;
    };
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0003_ip = 42; continue _fun0003 }
 17:
            var5 = _closure1_slot5;
            var4 = _closure1_slot6;
            var3 = {};
            var3['channel'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 42:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();