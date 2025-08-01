// app/modules/app_startup/native/executeHeadlessTask.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _executeHeadlessTask() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var16 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2308; continue _fun0001 }
 13:
                    var14 = var16;
                    var12 = arg2;
                    var11 = arg3;
                    var9 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var13 = undefined;
                    var4 = undefined;
                    var10 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var2 = 5;
                    var2 = var15[var2];
                    var17 = var10.bind(var9)(var2);
                    var5 = global;
                    var2 = var5.HermesInternal;
                    var8 = var2.concat;
                    var2 = 'Task ';
                    var29 = var8.bind(var2)(var16);
                    var8 = var17.prototype;
                    var8 = Object.create(var8, {constructor: {value: var17}});
                    var30 = var8;
                    var2 = new var30[var17](var29, var28);
                    var3 = var2 instanceof Object ? var2 : var8;
                    var8 = var5.Date;
                    var2 = var8.now;
                    var6 = var2.bind(var8)();
                    var8 = 6;
                    var2 = var15[var8];
                    var18 = var10.bind(var9)(var2);
                    var17 = var18.addBreadcrumb;
                    var2 = {};
                    var19 = 'Executing headless task.';
                    var2['message'] = var19;
                    var19 = {};
                    var19['name'] = var16;
                    var2['data'] = var19;
                    var2 = var17.bind(var18)(var2);
                    var17 = _closure1_slot2;
                    var2 = 7;
                    var2 = var15[var2];
                    var17 = var17.bind(var9)(var2);
                    var2 = var17.recordStartHeadlessTask;
                    var2 = var2.bind(var17)();
                    var2 = 8;
                    var2 = var15[var2];
                    var10 = var10.bind(var9)(var2);
                    var2 = var10.recordStartHeadlessTask;
                    var2 = var2.bind(var10)(var16);
                    var10 = _closure1_slot0;
                    var2 = 9;
                    var2 = var15[var2];
                    var10 = var10.bind(var9)(var2);
                    var2 = var10.closeFastConnectSocket;
                    var2 = var2.bind(var10)();
                    var15 = false;
                    var13 = false;
 238: // try_start_0
                    var10 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var16 = 10;
                    var2 = var2[var16];
                    var2 = var10.bind(var9)(var2);
                    var2 = var2.wasEverActive;
                    if(var2) { _fun0001_ip = 298; continue _fun0001 }
 267:
                    var10 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var16];
                    var2 = var10.bind(var9)(var2);
                    var10 = var2.extraProperties;
                    var2 = true;
                    var10['headless_task_ran'] = var2;
 298:
                    var2 = _closure1_slot5;
                    var10 = var2.currentState;
                    var2 = 'active';
                    if(!(var2 !== var10)) { _fun0001_ip = 369; continue _fun0001 }
 316:
                    var16 = var3;
                    var10 = var16.log;
                    var2 = 'Pausing socket in headless task because app state is not active';
                    var2 = var10.bind(var16)(var2);
                    var10 = _closure1_slot2;
                    var16 = _closure1_slot3;
                    var2 = 11;
                    var2 = var16[var2];
                    var16 = var10.bind(var9)(var2);
                    var10 = var16.setIsPaused;
                    var2 = true;
                    var2 = var10.bind(var16)(var2);
 369:
                    var10 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var16 = 12;
                    var2 = var2[var16];
                    var18 = var10.bind(var9)(var2);
                    var17 = var18.track;
                    var2 = _closure1_slot9;
                    var10 = var2.HEADLESS_TASK_INVOKED;
                    var2 = {};
                    var19 = _closure1_slot5;
                    var19 = var19.currentState;
                    var2['client_app_state'] = var19;
                    var19 = var14;
                    var2['name'] = var19;
                    var2 = var17.bind(var18)(var10, var2);
                    var2 = _closure1_slot7;
                    var2 = var2.bind(var9)();
                    SaveGenerator(address=446);
 444:
                    return var2;
 446:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 1669; continue _fun0001 }
 455:
                    var18 = var3;
                    var17 = var18.log;
                    var10 = 'initHeadlessTask completed';
                    var10 = var17.bind(var18)(var10);
                    var10 = _closure1_slot8;
                    var10 = var10.promise;
                    SaveGenerator(address=489);
 487:
                    return var10;
 489:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=16);
                    if(var17) { _fun0001_ip = 1347; continue _fun0001 }
 498:
                    var19 = var3;
                    var18 = var19.log;
                    var17 = 'Flux Initialized';
                    var17 = var18.bind(var19)(var17);
                    var18 = _closure1_slot6;
                    var17 = var18.isAuthenticated;
                    var17 = var17.bind(var18)();
                    if(var17) { _fun0001_ip = 557; continue _fun0001 }
 535:
                    var19 = var3;
                    var18 = var19.log;
                    var17 = 'Analytics Init skipped; not authenticated';
                    var17 = var18.bind(var19)(var17);
                    _fun0001_ip = 659; continue _fun0001;
 557:
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var17 = 13;
                    var17 = var19[var17];
                    var17 = var18.bind(var9)(var17);
                    var19 = var17.AnalyticsActionHandlers;
                    var18 = var19.handleConnectionOpen;
                    var17 = {};
                    var21 = _closure1_slot6;
                    var20 = var21.getAnalyticsToken;
                    var20 = var20.bind(var21)();
                    var17['analyticsToken'] = var20;
                    var20 = {};
                    var22 = _closure1_slot6;
                    var21 = var22.getId;
                    var21 = var21.bind(var22)();
                    var20['id'] = var21;
                    var17['user'] = var20;
                    var17 = var18.bind(var19)(var17);
                    var19 = var3;
                    var18 = var19.log;
                    var17 = 'Analytics Initialized';
                    var17 = var18.bind(var19)(var17);
 659:
                    var12 = var12.bind(var9)();
                    var11 = var12.bind(var9)(var11);
                    SaveGenerator(address=672);
 670:
                    return var11;
 672:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 1025; continue _fun0001 }
 681:
                    var21 = true;
                    var13 = true;
                    var18 = var3;
                    var17 = var18.log;
                    var12 = 'Task completed successfully';
                    var12 = var17.bind(var18)(var12);
 705: // try_end0
                    var17 = var5.Date;
                    var12 = var17.now;
                    var17 = var12.bind(var17)();
                    var12 = var6;
                    var12 = var17 - var12;
                    var18 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var19 = var17[var8];
                    var24 = var18.bind(var9)(var19);
                    var20 = var24.addBreadcrumb;
                    var19 = {};
                    var22 = 'Finished headless task.';
                    var19['message'] = var22;
                    var25 = {};
                    var23 = var14;
                    var25['name'] = var23;
                    var22 = var13;
                    var25['success'] = var22;
                    var26 = 'ms';
                    var26 = var12 + var26;
                    var25['duration'] = var26;
                    var19['data'] = var25;
                    var19 = var20.bind(var24)(var19);
                    var24 = var3;
                    var20 = var24.log;
                    var19 = 'Unpausing socket';
                    var19 = var20.bind(var24)(var19);
                    var20 = _closure1_slot2;
                    var19 = 11;
                    var19 = var17[var19];
                    var20 = var20.bind(var9)(var19);
                    var19 = var20.setIsPaused;
                    var19 = var19.bind(var20)(var15);
                    var17 = var17[var16];
                    var20 = var18.bind(var9)(var17);
                    var19 = var20.track;
                    var17 = _closure1_slot9;
                    var18 = var17.HEADLESS_TASK_COMPLETED;
                    var17 = {};
                    var24 = _closure1_slot5;
                    var24 = var24.currentState;
                    var17['client_app_state'] = var24;
                    var17['name'] = var23;
                    var17['success'] = var22;
                    var17['duration_ms'] = var12;
                    var12 = {};
                    var12['flush'] = var21;
                    var4 = var19.bind(var20)(var18, var17, var12);
 916: // try_start_1
                    var18 = var5.Promise;
                    var17 = var18.race;
                    var19 = var4;
                    var12 = new Array(2);
                    var12[0] = var19;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var19 = 14;
                    var19 = var21[var19];
                    var21 = var20.bind(var9)(var19);
                    var20 = var21.timeoutPromise;
                    var19 = 1500;
                    var19 = var20.bind(var21)(var19);
                    var12[1] = var19;
                    var12 = var17.bind(var18)(var12);
                    SaveGenerator(address=989);
 987:
                    return var12;
 989:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=16);
                    if(var17) { _fun0001_ip = 997; continue _fun0001 }
 995: // try_end1
                    _fun0001_ip = 1022; continue _fun0001;
 997:
                    return var12;
 1000: // catch_target1
                    CatchBlockStart(arg_register=18);
                    var18 = var3;
                    var17 = var18.warn;
                    var12 = 'Failed to submit analytics';
                    var12 = var17.bind(var18)(var12, var19);
 1022:
                    return var9;
 1025:
                    var17 = var5.Date;
                    var12 = var17.now;
                    var17 = var12.bind(var17)();
                    var12 = var6;
                    var12 = var17 - var12;
                    var18 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var19 = var17[var8];
                    var23 = var18.bind(var9)(var19);
                    var20 = var23.addBreadcrumb;
                    var19 = {};
                    var21 = 'Finished headless task.';
                    var19['message'] = var21;
                    var24 = {};
                    var22 = var14;
                    var24['name'] = var22;
                    var21 = var13;
                    var24['success'] = var21;
                    var25 = 'ms';
                    var25 = var12 + var25;
                    var24['duration'] = var25;
                    var19['data'] = var24;
                    var19 = var20.bind(var23)(var19);
                    var23 = var3;
                    var20 = var23.log;
                    var19 = 'Unpausing socket';
                    var19 = var20.bind(var23)(var19);
                    var20 = _closure1_slot2;
                    var19 = 11;
                    var19 = var17[var19];
                    var20 = var20.bind(var9)(var19);
                    var19 = var20.setIsPaused;
                    var19 = var19.bind(var20)(var15);
                    var17 = var17[var16];
                    var20 = var18.bind(var9)(var17);
                    var19 = var20.track;
                    var17 = _closure1_slot9;
                    var18 = var17.HEADLESS_TASK_COMPLETED;
                    var17 = {};
                    var23 = _closure1_slot5;
                    var23 = var23.currentState;
                    var17['client_app_state'] = var23;
                    var17['name'] = var22;
                    var17['success'] = var21;
                    var17['duration_ms'] = var12;
                    var12 = {};
                    var21 = true;
                    var12['flush'] = var21;
                    var4 = var19.bind(var20)(var18, var17, var12);
 1238: // try_start_2
                    var18 = var5.Promise;
                    var17 = var18.race;
                    var19 = var4;
                    var12 = new Array(2);
                    var12[0] = var19;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var19 = 14;
                    var19 = var21[var19];
                    var21 = var20.bind(var9)(var19);
                    var20 = var21.timeoutPromise;
                    var19 = 1500;
                    var19 = var20.bind(var21)(var19);
                    var12[1] = var19;
                    var12 = var17.bind(var18)(var12);
                    SaveGenerator(address=1311);
 1309:
                    return var12;
 1311:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=16);
                    if(var17) { _fun0001_ip = 1319; continue _fun0001 }
 1317: // try_end2
                    _fun0001_ip = 1344; continue _fun0001;
 1319:
                    return var12;
 1322: // catch_target2
                    CatchBlockStart(arg_register=18);
                    var18 = var3;
                    var17 = var18.warn;
                    var12 = 'Failed to submit analytics';
                    var12 = var17.bind(var18)(var12, var19);
 1344:
                    return var11;
 1347:
                    var12 = var5.Date;
                    var11 = var12.now;
                    var12 = var11.bind(var12)();
                    var11 = var6;
                    var11 = var12 - var11;
                    var17 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var18 = var12[var8];
                    var22 = var17.bind(var9)(var18);
                    var19 = var22.addBreadcrumb;
                    var18 = {};
                    var20 = 'Finished headless task.';
                    var18['message'] = var20;
                    var23 = {};
                    var21 = var14;
                    var23['name'] = var21;
                    var20 = var13;
                    var23['success'] = var20;
                    var24 = 'ms';
                    var24 = var11 + var24;
                    var23['duration'] = var24;
                    var18['data'] = var23;
                    var18 = var19.bind(var22)(var18);
                    var22 = var3;
                    var19 = var22.log;
                    var18 = 'Unpausing socket';
                    var18 = var19.bind(var22)(var18);
                    var19 = _closure1_slot2;
                    var18 = 11;
                    var18 = var12[var18];
                    var19 = var19.bind(var9)(var18);
                    var18 = var19.setIsPaused;
                    var18 = var18.bind(var19)(var15);
                    var12 = var12[var16];
                    var19 = var17.bind(var9)(var12);
                    var18 = var19.track;
                    var12 = _closure1_slot9;
                    var17 = var12.HEADLESS_TASK_COMPLETED;
                    var12 = {};
                    var22 = _closure1_slot5;
                    var22 = var22.currentState;
                    var12['client_app_state'] = var22;
                    var12['name'] = var21;
                    var12['success'] = var20;
                    var12['duration_ms'] = var11;
                    var11 = {};
                    var20 = true;
                    var11['flush'] = var20;
                    var4 = var18.bind(var19)(var17, var12, var11);
 1560: // try_start_3
                    var17 = var5.Promise;
                    var12 = var17.race;
                    var18 = var4;
                    var11 = new Array(2);
                    var11[0] = var18;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var18 = 14;
                    var18 = var20[var18];
                    var20 = var19.bind(var9)(var18);
                    var19 = var20.timeoutPromise;
                    var18 = 1500;
                    var18 = var19.bind(var20)(var18);
                    var11[1] = var18;
                    var11 = var12.bind(var17)(var11);
                    SaveGenerator(address=1633);
 1631:
                    return var11;
 1633:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 1641; continue _fun0001 }
 1639: // try_end3
                    _fun0001_ip = 1666; continue _fun0001;
 1641:
                    return var11;
 1644: // catch_target3
                    CatchBlockStart(arg_register=17);
                    var17 = var3;
                    var12 = var17.warn;
                    var11 = 'Failed to submit analytics';
                    var11 = var12.bind(var17)(var11, var18);
 1666:
                    return var10;
 1669:
                    var11 = var5.Date;
                    var10 = var11.now;
                    var11 = var10.bind(var11)();
                    var10 = var6;
                    var10 = var11 - var10;
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var17 = var11[var8];
                    var21 = var12.bind(var9)(var17);
                    var20 = var21.addBreadcrumb;
                    var17 = {};
                    var18 = 'Finished headless task.';
                    var17['message'] = var18;
                    var22 = {};
                    var19 = var14;
                    var22['name'] = var19;
                    var18 = var13;
                    var22['success'] = var18;
                    var23 = 'ms';
                    var23 = var10 + var23;
                    var22['duration'] = var23;
                    var17['data'] = var22;
                    var17 = var20.bind(var21)(var17);
                    var21 = var3;
                    var20 = var21.log;
                    var17 = 'Unpausing socket';
                    var17 = var20.bind(var21)(var17);
                    var20 = _closure1_slot2;
                    var17 = 11;
                    var17 = var11[var17];
                    var20 = var20.bind(var9)(var17);
                    var17 = var20.setIsPaused;
                    var17 = var17.bind(var20)(var15);
                    var11 = var11[var16];
                    var17 = var12.bind(var9)(var11);
                    var16 = var17.track;
                    var11 = _closure1_slot9;
                    var12 = var11.HEADLESS_TASK_COMPLETED;
                    var11 = {};
                    var20 = _closure1_slot5;
                    var20 = var20.currentState;
                    var11['client_app_state'] = var20;
                    var11['name'] = var19;
                    var11['success'] = var18;
                    var11['duration_ms'] = var10;
                    var10 = {};
                    var18 = true;
                    var10['flush'] = var18;
                    var4 = var16.bind(var17)(var12, var11, var10);
 1882: // try_start_4
                    var12 = var5.Promise;
                    var11 = var12.race;
                    var16 = var4;
                    var10 = new Array(2);
                    var10[0] = var16;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var16 = 14;
                    var16 = var18[var16];
                    var18 = var17.bind(var9)(var16);
                    var17 = var18.timeoutPromise;
                    var16 = 1500;
                    var16 = var17.bind(var18)(var16);
                    var10[1] = var16;
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=1955);
 1953:
                    return var10;
 1955:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 1963; continue _fun0001 }
 1961: // try_end4
                    _fun0001_ip = 1988; continue _fun0001;
 1963:
                    return var10;
 1966: // catch_target4
                    CatchBlockStart(arg_register=15);
                    var12 = var3;
                    var11 = var12.warn;
                    var10 = 'Failed to submit analytics';
                    var10 = var11.bind(var12)(var10, var16);
 1988:
                    return var2;
 1991: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var11 = var5.Date;
                    var10 = var11.now;
                    var10 = var10.bind(var11)();
                    var6 = var10 - var6;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = var11[var8];
                    var16 = var10.bind(var9)(var8);
                    var12 = var16.addBreadcrumb;
                    var8 = {};
                    var17 = 'Finished headless task.';
                    var8['message'] = var17;
                    var17 = {};
                    var17['name'] = var14;
                    var17['success'] = var13;
                    var18 = 'ms';
                    var18 = var6 + var18;
                    var17['duration'] = var18;
                    var8['data'] = var17;
                    var8 = var12.bind(var16)(var8);
                    var16 = var3;
                    var12 = var16.log;
                    var8 = 'Unpausing socket';
                    var8 = var12.bind(var16)(var8);
                    var12 = _closure1_slot2;
                    var8 = 11;
                    var8 = var11[var8];
                    var12 = var12.bind(var9)(var8);
                    var8 = var12.setIsPaused;
                    var8 = var8.bind(var12)(var15);
                    var8 = 12;
                    var8 = var11[var8];
                    var12 = var10.bind(var9)(var8);
                    var11 = var12.track;
                    var8 = _closure1_slot9;
                    var10 = var8.HEADLESS_TASK_COMPLETED;
                    var8 = {};
                    var15 = _closure1_slot5;
                    var15 = var15.currentState;
                    var8['client_app_state'] = var15;
                    var8['name'] = var14;
                    var8['success'] = var13;
                    var8['duration_ms'] = var6;
                    var6 = {};
                    var13 = true;
                    var6['flush'] = var13;
                    var4 = var11.bind(var12)(var10, var8, var6);
 2200: // try_start_5
                    var6 = var5.Promise;
                    var5 = var6.race;
                    var8 = var4;
                    var4 = new Array(2);
                    var4[0] = var8;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 14;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.timeoutPromise;
                    var7 = 1500;
                    var7 = var8.bind(var9)(var7);
                    var4[1] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=2273);
 2271:
                    return var4;
 2273:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2281; continue _fun0001 }
 2279: // try_end5
                    _fun0001_ip = 2306; continue _fun0001;
 2281:
                    return var4;
 2284: // catch_target5
                    CatchBlockStart(arg_register=5);
                    var5 = var3;
                    var4 = var5.warn;
                    var3 = 'Failed to submit analytics';
                    var3 = var4.bind(var5)(var3, var6);
 2306:
                    throw var2;
 2308:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.initHeadlessTask;
    var _closure1_slot7 = var7;
    var4 = var4.applicationReady;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/native/executeHeadlessTask.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function executeHeadlessTask() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();