// app/modules/frames/FramesActionCreators.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/FramesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function launchFrame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var3 = _closure1_slot3;
            var2 = var3.getCurrentEmbeddedActivity;
            var6 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 91; continue _fun0001 }
 31:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.stopEmbeddedActivity;
            var2 = {};
            var7 = var6.location;
            var2['location'] = var7;
            var6 = var6.applicationId;
            var2['applicationId'] = var6;
            var6 = false;
            var2['showFeedback'] = var6;
            var2 = var3.bind(var4)(var2);
 91:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'FRAME_LAUNCH';
            var2['type'] = var6;
            var2['applicationId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['launchFrame'] = var4;
    var4 = function stopFrame(arg1) {
        var1 = arg1;
        var5 = var1.applicationId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'FRAME_STOP';
        var2['type'] = var6;
        var2['applicationId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['stopFrame'] = var4;
    var2 = function updateFrameLayoutMode(arg1) {
        var1 = arg1;
        var6 = var1.applicationId;
        var5 = var1.layoutMode;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var7 = 'FRAME_UPDATE_LAYOUT_MODE';
        var2['type'] = var7;
        var2['applicationId'] = var6;
        var2['layoutMode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateFrameLayoutMode'] = var2;
    return var1;
})();