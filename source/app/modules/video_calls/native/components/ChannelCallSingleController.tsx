// app/modules/video_calls/native/components/ChannelCallSingleController.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallSingleController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.selectedParticipant;
            var _closure2_slot0 = var7;
            var6 = var2.channel;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var2 = var6.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 6;
                var2 = var8[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.VIDEO_LAYOUT_TOGGLED;
                var2 = {};
                var7 = 'focus';
                var2['video_layout'] = var7;
                var7 = _closure1_slot0;
                var6 = 7;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.collectVoiceAnalyticsMetadata;
                var6 = _closure2_slot1;
                var6 = var6.id;
                var9 = var7.bind(var8)(var6);
                var10 = var2;
                var6 = copyDataProperties(var10, var9);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var9 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getActiveStreamForStreamKey;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2, var1);
            var2 = var7.type;
            var1 = _closure1_slot7;
            var1 = var1.STREAM;
            if(!(var1 !== var2)) { _fun0001_ip = 263; continue _fun0001 }
 136:
            var1 = _closure1_slot7;
            var1 = var1.USER;
            if(!(var1 !== var2)) { _fun0001_ip = 220; continue _fun0001 }
 150:
            var1 = _closure1_slot7;
            var1 = var1.HIDDEN_STREAM;
            if(!(var1 !== var2)) { _fun0001_ip = 216; continue _fun0001 }
 164:
            var1 = _closure1_slot7;
            var1 = var1.ACTIVITY;
            if(!(var1 !== var2)) { _fun0001_ip = 180; continue _fun0001 }
 178:
            return var5;
 180:
            var1 = global;
            var4 = var1.Error;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var11 = 'Activities are not supported on old voice UI';
            var12 = var2;
            var1 = new var12[var4](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
 216:
            var1 = null;
            return var1;
 220:
            var4 = _closure1_slot8;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['participant'] = var7;
            var1['channel'] = var6;
            var1 = var4.bind(var5)(var2, var1);
            return var1;
 263:
            var1 = var7.user;
            var9 = var1.id;
            var2 = _closure1_slot5;
            var1 = var2.getId;
            var2 = var1.bind(var2)();
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0001_ip = 354; continue _fun0001 }
 296:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            if(!(var9 !== var2)) { _fun0001_ip = 321; continue _fun0001 }
 308:
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            _fun0001_ip = 332; continue _fun0001;
 321:
            var9 = _closure1_slot2;
            var8 = 9;
            var2 = var9[var8];
 332:
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['participant'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 354:
            return var1;
        }
    };
    var3['ChannelCallSingleController'] = var2;
    return var1;
})();