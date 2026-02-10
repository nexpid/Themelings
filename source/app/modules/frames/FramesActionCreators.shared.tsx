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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
                    var8 = var2.applicationId;
                    var7 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=26);
case 4:
                    return var7;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var10 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 1;
                    var3 = var3[var9];
                    var11 = var10.bind(var7)(var3);
                    var10 = var11.dispatch;
                    var3 = {};
                    var12 = 'FRAME_LAUNCH_START';
                    var3['type'] = var12;
                    var12 = var8;
                    var3['applicationId'] = var12;
                    var3 = var10.bind(var11)(var3);
case 8: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 2;
                    var3 = var11[var3];
                    var11 = var10.bind(var7)(var3);
                    var10 = var11.createProxyTicket;
                    var3 = var8;
                    var3 = var10.bind(var11)(var3);
                    SaveGenerator(address=125);
case 9:
                    return var3;
case 10:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var11 = 3;
                    var11 = var10[var11];
                    var13 = var12.bind(var7)(var11);
                    var11 = var13.leaveCurrentEmbeddedActivity;
                    var11 = var11.bind(var13)();
                    var11 = 4;
                    var11 = var10[var11];
                    var12 = var12.bind(var7)(var11);
                    var11 = var12.leaveCurrentFrame;
                    var11 = var11.bind(var12)();
                    var11 = _closure1_slot1;
                    var10 = var10[var9];
                    var12 = var11.bind(var7)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var13 = 'FRAME_LAUNCH';
                    var10['type'] = var13;
                    var13 = var8;
                    var10['applicationId'] = var13;
                    var10['proxyTicket'] = var3;
                    var10 = var11.bind(var12)(var10);
case 13: // try_end0
                    return var7;
case 11:
                    return var3;
case 14: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var4 = var12;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 5;
                    var3 = var11[var3];
                    var3 = var10.bind(var7)(var3);
                    var6 = var3.bind(var7)();
                    var10 = _closure1_slot0;
                    var3 = 6;
                    var3 = var11[var3];
                    var11 = var10.bind(var7)(var3);
                    var10 = var11.getActivityLaunchErrorInfo;
                    var3 = var8;
                    var3 = var10.bind(var11)(var12, var3);
                    SaveGenerator(address=300);
case 15:
                    return var3;
case 16:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
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
case 17:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _refreshProxyTicket() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 3:
                    var2 = arg1;
                    var7 = var2.applicationId;
                    var6 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=26);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 7:
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 1;
                    var3 = var3[var8];
                    var11 = var9.bind(var6)(var3);
                    var10 = var11.dispatch;
                    var3 = {'type': 'FRAME_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': true};
                    var9 = var7;
                    var3['applicationId'] = var9;
                    var9 = true;
                    var3 = var10.bind(var11)(var3);
case 21: // try_start_0 // try_start_1
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 2;
                    var3 = var11[var3];
                    var11 = var10.bind(var6)(var3);
                    var10 = var11.createProxyTicket;
                    var3 = var7;
                    var3 = var10.bind(var11)(var3);
                    SaveGenerator(address=131);
case 22:
                    return var3;
case 12:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var8];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var13 = 'FRAME_UPDATE_PROXY_TICKET';
                    var10['type'] = var13;
                    var13 = var7;
                    var10['applicationId'] = var13;
                    var10['proxyTicket'] = var3;
                    var10 = var11.bind(var12)(var10);
case 25: // try_end0 // try_end1
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var8];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.dispatch;
                    var10 = {'type': 'FRAME_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var13 = var7;
                    var10['applicationId'] = var13;
                    var10 = var11.bind(var12)(var10);
                    return var9;
case 23:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var8];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.dispatch;
                    var9 = {'type': 'FRAME_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var12 = var7;
                    var9['applicationId'] = var12;
                    var9 = var10.bind(var11)(var9);
                    return var3;
case 26: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=10);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var9.bind(var6)(var3);
                    var5 = var3.bind(var6)();
                    var9 = _closure1_slot0;
                    var3 = 6;
                    var3 = var10[var3];
                    var10 = var9.bind(var6)(var3);
                    var9 = var10.getActivityLaunchErrorInfo;
                    var3 = var7;
                    var3 = var9.bind(var10)(var11, var3);
                    SaveGenerator(address=355);
case 27:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var10 = var5;
                    var9 = var10.showLaunchErrorModal;
                    var5 = var3.message;
                    var5 = var9.bind(var10)(var5);
case 2: // try_end2
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var11 = var9.bind(var6)(var5);
                    var10 = var11.dispatch;
                    var9 = {'type': 'FRAME_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var5 = var7;
                    var9['applicationId'] = var5;
                    var5 = false;
                    var9 = var10.bind(var11)(var9);
                    return var5;
case 29:
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var10 = var9.bind(var6)(var5);
                    var9 = var10.dispatch;
                    var5 = {'type': 'FRAME_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var11 = var7;
                    var5['applicationId'] = var11;
                    var5 = var9.bind(var10)(var5);
                    return var3;
case 31: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {'type': 'FRAME_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var4['applicationId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 20:
                    return var2;
case 19:
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/FramesActionCreators.shared.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function launchFrame() {
        var1 = undefined;
        var4 = _closure1_slot4;
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
        var1 = 1;
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
    var4 = function updateFrameLayoutMode(arg1) {
        var1 = arg1;
        var6 = var1.applicationId;
        var5 = var1.layoutMode;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
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
    var3['updateFrameLayoutMode'] = var4;
    var4 = function updateFramePanelMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FRAME_SET_PANEL_MODE';
        var2['type'] = var5;
        var5 = arg1;
        var2['activityPanelMode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateFramePanelMode'] = var4;
    var2 = function refreshProxyTicket() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['refreshProxyTicket'] = var2;
    return var1;
})();