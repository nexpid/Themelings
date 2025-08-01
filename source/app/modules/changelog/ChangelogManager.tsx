// app/modules/changelog/ChangelogManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function ChangelogManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = function POST_CONNECTION_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleConnectionOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['POST_CONNECTION_OPEN'] = var5;
                var1['actions'] = var4;
                var2 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 1063; continue _fun0003 }
 10:
                                var5 = undefined;
                                var14 = undefined;
                                var8 = undefined;
                                var4 = undefined;
                                var9 = undefined;
                                var6 = undefined;
 22: // try_start_0
                                var7 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var11 = 9;
                                var2 = var2[var11];
                                var7 = var7.bind(var5)(var2);
                                var2 = var7.fetchChangelogConfig;
                                var2 = var2.bind(var7)();
                                SaveGenerator(address=59);
 57:
                                return var2;
 59:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                                if(var7) { _fun0003_ip = 969; continue _fun0003 }
 68:
                                var13 = var2.body;
                                var14 = var13;
                                var10 = _closure1_slot0;
                                var16 = _closure1_slot2;
                                var7 = 10;
                                var7 = var16[var7];
                                var10 = var10.bind(var5)(var7);
                                var7 = var10.getClientVersionForChangelog;
                                var23 = var7.bind(var10)();
                                var12 = global;
                                var10 = var12.Object;
                                var7 = var10.entries;
                                var22 = var7.bind(var10)(var13);
                                var7 = var22.length;
                                var10 = 0;
                                var7 = var10 < var7;
                                var13 = null;
                                var21 = 2;
                                var20 = 1;
                                var19 = 0;
                                var18 = null;
                                var17 = 0;
                                var15 = null;
                                if(!var7) { _fun0003_ip = 220; continue _fun0003 }
 155:
                                var24 = var22[var17];
                                var7 = _closure1_slot9;
                                var24 = var7.bind(var5)(var24, var21);
                                var7 = var24[var10];
                                var24 = var24[var20];
                                var24 = var24.min_version;
                                var25 = var24 <= var23;
                                if(!var25) { _fun0003_ip = 196; continue _fun0003 }
 192:
                                var25 = var24 > var19;
 196:
                                if(!var25) { _fun0003_ip = 205; continue _fun0003 }
 199:
                                var19 = var24;
                                var18 = var7;
 205:
                                var17 = var17 + 1;
                                var7 = var22.length;
                                var15 = var18;
                                if(var17 < var7) { _fun0003_ip = 155; continue _fun0003 }
 220:
                                var8 = var15;
                                var17 = _closure1_slot1;
                                var7 = 11;
                                var16 = var16[var7];
                                var18 = var17.bind(var5)(var16);
                                var17 = var18.dispatch;
                                var16 = {};
                                var19 = 'CHANGE_LOG_SET_CONFIG';
                                var16['type'] = var19;
                                var19 = var2.body;
                                var16['config'] = var19;
                                var16['latestChangelogId'] = var15;
                                var16 = var17.bind(var18)(var16);
                                if(!(var13 != var15)) { _fun0003_ip = 927; continue _fun0003 }
 282:
                                var15 = var14;
                                var14 = var8;
                                var14 = var15[var14];
                                var15 = var14.show_on_startup;
                                var14 = true;
                                if(!(var14 === var15)) { _fun0003_ip = 885; continue _fun0003 }
 309:
                                var16 = _closure1_slot11;
                                var14 = var16.lastSeenChangelogId;
                                var14 = var14.bind(var16)();
                                var4 = var14;
                                var15 = var16.lastSeenChangelogDate;
                                var9 = var15.bind(var16)();
                                if(!(var13 != var14)) { _fun0003_ip = 382; continue _fun0003 }
 340:
                                var15 = _closure1_slot1;
                                var16 = _closure1_slot2;
                                var14 = 12;
                                var14 = var16[var14];
                                var16 = var15.bind(var5)(var14);
                                var15 = var16.compare;
                                var14 = var8;
                                var4 = var15.bind(var16)(var14, var4);
                                if(!(!(var4 <= var10))) { _fun0003_ip = 843; continue _fun0003 }
 382:
                                var10 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var11];
                                var15 = var10.bind(var5)(var4);
                                var14 = var15.fetchChangelog;
                                var10 = var8;
                                var4 = _closure1_slot10;
                                var4 = var4.locale;
                                var4 = var14.bind(var15)(var10, var4);
                                SaveGenerator(address=428);
 426:
                                return var4;
 428:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                                if(var10) { _fun0003_ip = 801; continue _fun0003 }
 437:
                                var6 = var4;
                                if(!(var13 != var4)) { _fun0003_ip = 759; continue _fun0003 }
 447:
                                var10 = var9;
                                if(!(var13 != var10)) { _fun0003_ip = 680; continue _fun0003 }
 457:
                                var14 = _closure1_slot11;
                                var10 = var14.lastSeenChangelogDate;
                                var10 = var10.bind(var14)();
                                if(!(var13 != var10)) { _fun0003_ip = 680; continue _fun0003 }
 478:
                                var13 = _closure1_slot11;
                                var10 = var13.isLocked;
                                var10 = var10.bind(var13)();
                                if(var10) { _fun0003_ip = 638; continue _fun0003 }
 498:
                                var14 = var12.Date;
                                var10 = var6;
                                var28 = var10.date;
                                var13 = var14.prototype;
                                var13 = Object.create(var13, {constructor: {value: var14}});
                                var29 = var13;
                                var10 = new var29[var14](var28, var27);
                                var10 = var10 instanceof Object ? var10 : var13;
                                var13 = var12.Date;
                                var28 = var9;
                                var12 = var13.prototype;
                                var12 = Object.create(var12, {constructor: {value: var13}});
                                var29 = var12;
                                var9 = new var29[var13](var28, var27);
                                var9 = var9 instanceof Object ? var9 : var12;
                                if(!(var10 > var9)) { _fun0003_ip = 596; continue _fun0003 }
 566:
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var9 = 13;
                                var9 = var12[var9];
                                var10 = var10.bind(var5)(var9);
                                var9 = var10.openChangelog;
                                var9 = var9.bind(var10)();
 596: // try_end0
                                var10 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var9 = var9[var7];
                                var12 = var10.bind(var5)(var9);
                                var10 = var12.dispatch;
                                var9 = {};
                                var13 = 'CHANGE_LOG_RESOLVED';
                                var9['type'] = var13;
                                var9 = var10.bind(var12)(var9);
                                return var5;
 638:
                                var10 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var9 = var9[var7];
                                var12 = var10.bind(var5)(var9);
                                var10 = var12.dispatch;
                                var9 = {};
                                var13 = 'CHANGE_LOG_RESOLVED';
                                var9['type'] = var13;
                                var9 = var10.bind(var12)(var9);
                                return var5;
 680: // try_start_1
                                var10 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var9 = var9[var11];
                                var10 = var10.bind(var5)(var9);
                                var9 = var10.markChangelogAsSeen;
                                var6 = var6.date;
                                var6 = var9.bind(var10)(var8, var6);
 715: // try_end1
                                var9 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var8 = var8[var7];
                                var10 = var9.bind(var5)(var8);
                                var9 = var10.dispatch;
                                var8 = {};
                                var11 = 'CHANGE_LOG_RESOLVED';
                                var8['type'] = var11;
                                var8 = var9.bind(var10)(var8);
                                var6 = undefined;
                                return var6;
 759:
                                var8 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var6 = var6[var7];
                                var9 = var8.bind(var5)(var6);
                                var8 = var9.dispatch;
                                var6 = {};
                                var10 = 'CHANGE_LOG_RESOLVED';
                                var6['type'] = var10;
                                var6 = var8.bind(var9)(var6);
                                return var5;
 801:
                                var8 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var6 = var6[var7];
                                var9 = var8.bind(var5)(var6);
                                var8 = var9.dispatch;
                                var6 = {};
                                var10 = 'CHANGE_LOG_RESOLVED';
                                var6['type'] = var10;
                                var6 = var8.bind(var9)(var6);
                                return var4;
 843:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var7];
                                var8 = var6.bind(var5)(var4);
                                var6 = var8.dispatch;
                                var4 = {};
                                var9 = 'CHANGE_LOG_RESOLVED';
                                var4['type'] = var9;
                                var4 = var6.bind(var8)(var4);
                                return var5;
 885:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var7];
                                var8 = var6.bind(var5)(var4);
                                var6 = var8.dispatch;
                                var4 = {};
                                var9 = 'CHANGE_LOG_RESOLVED';
                                var4['type'] = var9;
                                var4 = var6.bind(var8)(var4);
                                return var5;
 927:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var7];
                                var7 = var6.bind(var5)(var4);
                                var6 = var7.dispatch;
                                var4 = {};
                                var8 = 'CHANGE_LOG_RESOLVED';
                                var4['type'] = var8;
                                var4 = var6.bind(var7)(var4);
                                return var5;
 969:
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var3 = var6[var3];
                                var6 = var4.bind(var5)(var3);
                                var4 = var6.dispatch;
                                var3 = {};
                                var7 = 'CHANGE_LOG_RESOLVED';
                                var3['type'] = var7;
                                var3 = var4.bind(var6)(var3);
                                return var2;
 1014: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=1);
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var3 = var6[var3];
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.dispatch;
                                var3 = {};
                                var6 = 'CHANGE_LOG_RESOLVED';
                                var3['type'] = var6;
                                var3 = var4.bind(var5)(var3);
                                throw var2;
 1063:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['handleConnectionOpen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/ChangelogManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();