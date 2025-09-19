// app/modules/frames/FramesActionCreators.shared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _launchFrame() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 420; continue _fun0001 }
 10:
                    var2 = arg1;
                    var8 = var2.applicationId;
                    var7 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=30);
 28:
                    return var7;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 417; continue _fun0001 }
 39:
                    var10 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 2;
                    var3 = var3[var9];
                    var11 = var10.bind(var7)(var3);
                    var10 = var11.dispatch;
                    var3 = {};
                    var12 = 'FRAME_LAUNCH_START';
                    var3['type'] = var12;
                    var12 = var8;
                    var3['applicationId'] = var12;
                    var3 = var10.bind(var11)(var3);
 91: // try_start_0
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var12 = 3;
                    var3 = var3[var12];
                    var11 = var10.bind(var7)(var3);
                    var10 = var11.createProxyTicket;
                    var3 = var8;
                    var3 = var10.bind(var11)(var3);
                    SaveGenerator(address=129);
 127:
                    return var3;
 129:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 273; continue _fun0001 }
 138:
                    var13 = var3;
                    var11 = _closure1_slot4;
                    var10 = var11.getCurrentEmbeddedActivity;
                    var11 = var10.bind(var11)();
                    var14 = var11;
                    var10 = null;
                    if(!(var10 != var11)) { _fun0001_ip = 219; continue _fun0001 }
 164:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var12 = var11.bind(var7)(var10);
                    var11 = var12.stopEmbeddedActivity;
                    var10 = {};
                    var15 = var14.location;
                    var10['location'] = var15;
                    var14 = var14.applicationId;
                    var10['applicationId'] = var14;
                    var14 = false;
                    var10['showFeedback'] = var14;
                    var10 = var11.bind(var12)(var10);
 219:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var9];
                    var12 = var11.bind(var7)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var14 = 'FRAME_LAUNCH';
                    var10['type'] = var14;
                    var14 = var8;
                    var10['applicationId'] = var14;
                    var10['proxyTicket'] = var13;
                    var10 = var11.bind(var12)(var10);
 270: // try_end0
                    return var7;
 273:
                    return var3;
 276: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var4 = var12;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 4;
                    var3 = var11[var3];
                    var3 = var10.bind(var7)(var3);
                    var6 = var3.bind(var7)();
                    var10 = _closure1_slot0;
                    var3 = 5;
                    var3 = var11[var3];
                    var11 = var10.bind(var7)(var3);
                    var10 = var11.getActivityLaunchErrorInfo;
                    var3 = var8;
                    var3 = var10.bind(var11)(var12, var3);
                    SaveGenerator(address=340);
 338:
                    return var3;
 340:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 414; continue _fun0001 }
 346:
                    var11 = var6;
                    var10 = var11.showLaunchErrorModal;
                    var6 = var3.message;
                    var6 = var10.bind(var11)(var6);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'FRAME_LAUNCH_FAIL';
                    var5['type'] = var9;
                    var5['applicationId'] = var8;
                    var5['error'] = var4;
                    var5 = var6.bind(var7)(var5);
                    throw var4;
 414:
                    return var3;
 417:
                    return var2;
 420:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/FramesActionCreators.shared.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function launchFrame() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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