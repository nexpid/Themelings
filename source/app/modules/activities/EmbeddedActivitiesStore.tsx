// app/modules/activities/EmbeddedActivitiesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot39;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot39;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot40 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function getLaunchStatesKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg2;
        var2 = ':';
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function getNormalizedGuildId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 != var2;
            var1 = '0';
            if(!var3) { _fun0005_ip = 21; continue _fun0005 }
 18:
            var1 = var2;
 21:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function updateEmbeddedActivities(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var13 = var1.location;
            var _closure2_slot0 = var13;
            var11 = var1.applicationId;
            var _closure2_slot1 = var11;
            var18 = var1.launchId;
            var17 = var1.compositeInstanceId;
            var16 = var1.participants;
            var1 = undefined;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var22 = var3.bind(var1)(var11);
            var10 = null;
            if(!(var10 != var22)) { _fun0006_ip = 1074; continue _fun0006 }
 84:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 14;
            var3 = var3[var14];
            var5 = var5.bind(var1)(var3);
            var3 = var5.getEmbeddedActivityLocationChannelId;
            var8 = var3.bind(var5)(var13);
            if(!(var10 != var8)) { _fun0006_ip = 137; continue _fun0006 }
 119:
            var5 = _closure1_slot22;
            var3 = var5.get;
            var3 = var3.bind(var5)(var8);
            if(!(var10 == var3)) { _fun0006_ip = 141; continue _fun0006 }
 137:
            var3 = _closure1_slot18;
 141:
            var15 = var10 != var3;
            if(!var15) { _fun0006_ip = 159; continue _fun0006 }
 148:
            var5 = var3.length;
            var3 = 0;
            var15 = var3 === var5;
 159:
            var6 = _closure1_slot24;
            var5 = var6.get;
            var3 = var13.id;
            var9 = var5.bind(var6)(var3);
            if(!(var10 == var9)) { _fun0006_ip = 186; continue _fun0006 }
 182:
            var9 = _closure1_slot18;
 186:
            var5 = var9.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var9)(var3);
            var6 = var16.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var3 = var6.bind(var16)(var3);
            var7 = _closure1_slot9;
            var6 = var7.getId;
            var6 = var6.bind(var7)();
            _closure2_slot2 = var6;
            var7 = var3.some;
            var6 = function(arg1) {
                var2 = _closure2_slot2;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var20 = var7.bind(var3)(var6);
            var7 = var16.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = _closure2_slot2;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var16)(var6);
            var7 = var10 == var6;
            var19 = undefined;
            if(var7) { _fun0006_ip = 282; continue _fun0006 }
 276:
            var19 = var6.sessionId;
 282:
            var7 = var16.some;
            var6 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActivityParticipantCurrentUserCurrentSession;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var7.bind(var16)(var6);
            var7 = _closure1_slot20;
            var6 = var7.get;
            var7 = var6.bind(var7)(var11);
            var23 = _closure1_slot25;
            var12 = var23.get;
            var24 = _closure1_slot41;
            var25 = var10 != var8;
            var6 = null;
            if(!var25) { _fun0006_ip = 337; continue _fun0006 }
 334:
            var6 = var8;
 337:
            var6 = var24.bind(var1)(var6, var11);
            var12 = var12.bind(var23)(var6);
            var6 = var10 == var12;
            var25 = undefined;
            if(var6) { _fun0006_ip = 363; continue _fun0006 }
 357:
            var25 = var12.launchParams;
 363:
            var6 = {};
            var6['applicationId'] = var11;
            var6['location'] = var13;
            var6['launchId'] = var18;
            var6['compositeInstanceId'] = var17;
            var6['url'] = var22;
            var22 = global;
            var23 = var22.Set;
            var24 = var23.prototype;
            var24 = Object.create(var24, {constructor: {value: var23}});
            var30 = var24;
            var29 = var3;
            var23 = new var30[var23](var29, var28);
            var23 = var23 instanceof Object ? var23 : var24;
            var6['userIds'] = var23;
            var6['participants'] = var16;
            var24 = var10 == var7;
            var23 = undefined;
            if(var24) { _fun0006_ip = 443; continue _fun0006 }
 437:
            var23 = var7.referrerId;
 443:
            if(!(var10 == var23)) { _fun0006_ip = 465; continue _fun0006 }
 447:
            var26 = var10 == var25;
            var24 = undefined;
            if(var26) { _fun0006_ip = 462; continue _fun0006 }
 456:
            var24 = var25.referrerId;
 462:
            var23 = var24;
 465:
            var6['referrerId'] = var23;
            var24 = var10 == var7;
            var23 = undefined;
            if(var24) { _fun0006_ip = 485; continue _fun0006 }
 479:
            var23 = var7.customId;
 485:
            if(!(var10 == var23)) { _fun0006_ip = 507; continue _fun0006 }
 489:
            var26 = var10 == var25;
            var24 = undefined;
            if(var26) { _fun0006_ip = 504; continue _fun0006 }
 498:
            var24 = var25.customId;
 504:
            var23 = var24;
 507:
            var6['customId'] = var23;
            var23 = var20;
            if(!var23) { _fun0006_ip = 522; continue _fun0006 }
 518:
            var23 = var10 != var7;
 522:
            if(!var23) { _fun0006_ip = 567; continue _fun0006 }
 525:
            var26 = _closure1_slot20;
            var25 = var26.set;
            var24 = var7.applicationId;
            var23 = {};
            var29 = var23;
            var28 = var7;
            var27 = copyDataProperties(var29, var28);
            var29 = var23;
            var28 = var6;
            var27 = copyDataProperties(var29, var28);
            var23 = var25.bind(var26)(var24, var23);
 567:
            if(!(var10 != var7)) { _fun0006_ip = 660; continue _fun0006 }
 571:
            var24 = var13.id;
            var23 = var7.location;
            var23 = var23.id;
            if(!(var24 === var23)) { _fun0006_ip = 660; continue _fun0006 }
 590:
            var23 = var7.applicationId;
            if(!(var11 === var23)) { _fun0006_ip = 660; continue _fun0006 }
 599:
            if(var20) { _fun0006_ip = 643; continue _fun0006 }
 602:
            var24 = var22.Array;
            var23 = var24.from;
            var22 = var7.userIds;
            var24 = var23.bind(var24)(var22);
            var23 = var24.some;
            var22 = function(arg1) {
                var2 = _closure2_slot2;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var22 = var23.bind(var24)(var22);
            if(var22) { _fun0006_ip = 646; continue _fun0006 }
 643:
            if(var21) { _fun0006_ip = 660; continue _fun0006 }
 646:
            var21 = _closure1_slot45;
            var21 = var21.bind(var1)(var7);
            _fun0006_ip = 841; continue _fun0006;
 660:
            if(!var20) { _fun0006_ip = 841; continue _fun0006 }
 666:
            if(!(var10 != var7)) { _fun0006_ip = 701; continue _fun0006 }
 670:
            var20 = var7.applicationId;
            if(!(var20 === var11)) { _fun0006_ip = 701; continue _fun0006 }
 679:
            var7 = var7.location;
            var20 = var7.id;
            var7 = var13.id;
            if(!(var20 !== var7)) { _fun0006_ip = 841; continue _fun0006 }
 701:
            var20 = _closure1_slot9;
            var7 = var20.getSessionId;
            var7 = var7.bind(var20)();
            if(!(var19 === var7)) { _fun0006_ip = 810; continue _fun0006 }
 719:
            var7 = {};
            var7['applicationId'] = var11;
            var7['launchId'] = var18;
            var7['compositeInstanceId'] = var17;
            var7['location'] = var13;
            var7['participants'] = var16;
            var7['isFirstActivityInChannel'] = var15;
            var5 = var10 == var5;
            var7['isStart'] = var5;
            var5 = var6.referrerId;
            var7['referrerId'] = var5;
            var5 = var6.customId;
            var7['customId'] = var5;
            var15 = var10 == var12;
            var5 = undefined;
            if(var15) { _fun0006_ip = 795; continue _fun0006 }
 789:
            var5 = var12.inviterUserId;
 795:
            var7['inviterUserId'] = var5;
            var5 = function openActivity(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.applicationId;
                    var11 = var1.launchId;
                    var10 = var1.compositeInstanceId;
                    var3 = var1.location;
                    var16 = var1.participants;
                    var18 = var1.isFirstActivityInChannel;
                    var17 = var1.isStart;
                    var9 = var1.referrerId;
                    var5 = var1.customId;
                    var14 = var1.inviterUserId;
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.bind(var1)(var7);
                    var12 = _closure1_slot9;
                    var8 = var12.getSessionId;
                    var8 = var8.bind(var12)();
                    var13 = null;
                    if(!(var13 != var2)) { _fun0007_ip = 704; continue _fun0007 }
 116:
                    if(!(var13 != var8)) { _fun0007_ip = 704; continue _fun0007 }
 123:
                    var12 = _closure1_slot20;
                    var8 = var12.get;
                    var8 = var8.bind(var12)(var7);
                    var15 = var13 == var8;
                    var12 = undefined;
                    if(var15) { _fun0007_ip = 156; continue _fun0007 }
 146:
                    var8 = var8.location;
                    var12 = var8.id;
 156:
                    var8 = var3.id;
                    if(!(var12 !== var8)) { _fun0007_ip = 700; continue _fun0007 }
 168:
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var8 = 14;
                    var8 = var15[var8];
                    var12 = var12.bind(var1)(var8);
                    var8 = var12.getEmbeddedActivityLocationChannelId;
                    var8 = var8.bind(var12)(var3);
                    var15 = _closure1_slot10;
                    var12 = var15.getChannel;
                    var19 = var12.bind(var15)(var8);
                    var15 = var13 == var19;
                    var12 = undefined;
                    if(var15) { _fun0007_ip = 232; continue _fun0007 }
 222:
                    var15 = var19.getGuildId;
                    var12 = var15.bind(var19)();
 232:
                    var20 = _closure1_slot12;
                    var15 = var20.getCurrentUser;
                    var15 = var15.bind(var20)();
                    if(!(var13 != var15)) { _fun0007_ip = 696; continue _fun0007 }
 252:
                    if(!(var13 == var12)) { _fun0007_ip = 288; continue _fun0007 }
 256:
                    var15 = var13 == var19;
                    var12 = undefined;
                    if(var15) { _fun0007_ip = 275; continue _fun0007 }
 265:
                    var15 = var19.isPrivate;
                    var12 = var15.bind(var19)();
 275:
                    if(!(var13 != var12)) { _fun0007_ip = 692; continue _fun0007 }
 282:
                    if(!var12) { _fun0007_ip = 692; continue _fun0007 }
 288:
                    _closure1_slot33 = var3;
                    var13 = var16.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.userId;
                        return var1;
                    };
                    var22 = var13.bind(var16)(var12);
                    var15 = {};
                    var15['applicationId'] = var7;
                    var15['url'] = var2;
                    var2 = global;
                    var12 = var2.Set;
                    var13 = var12.prototype;
                    var13 = Object.create(var13, {constructor: {value: var12}});
                    var23 = var13;
                    var12 = new var23[var12](var22, var21);
                    var12 = var12 instanceof Object ? var12 : var13;
                    var15['userIds'] = var12;
                    var15['participants'] = var16;
                    var13 = var2.Date;
                    var12 = var13.now;
                    var12 = var12.bind(var13)();
                    var15['connectedSince'] = var12;
                    var15['launchId'] = var11;
                    var15['compositeInstanceId'] = var10;
                    var15['location'] = var3;
                    var15['referrerId'] = var9;
                    var15['customId'] = var5;
                    var9 = _closure1_slot20;
                    var5 = var9.set;
                    var5 = var5.bind(var9)(var7, var15);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 16;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var13 = var5.ComponentDispatch;
                    var12 = var13.dispatch;
                    var5 = _closure1_slot15;
                    var11 = var5.OPEN_EMBEDDED_ACTIVITY;
                    var5 = {};
                    var5['location'] = var3;
                    var5['applicationId'] = var7;
                    var5['isFirstActivityInChannel'] = var18;
                    var5['isStart'] = var17;
                    var5['participants'] = var16;
                    var5['embeddedActivity'] = var15;
                    var5['inviterUserId'] = var14;
                    var5 = var12.bind(var13)(var11, var5);
                    var5 = 17;
                    var5 = var10[var5];
                    var9 = var9.bind(var1)(var5);
                    var5 = var9.shouldOpenActivityInPopoutWindow;
                    var5 = var5.bind(var9)();
                    if(var5) { _fun0007_ip = 595; continue _fun0007 }
 521:
                    var9 = _closure1_slot11;
                    var5 = var9.getChannelId;
                    var5 = var5.bind(var9)();
                    if(!(var8 === var5)) { _fun0007_ip = 579; continue _fun0007 }
 539:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 19;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.bind(var1)(var8);
                    if(var5) { _fun0007_ip = 579; continue _fun0007 }
 567:
                    var5 = _closure1_slot13;
                    var5 = var5.PANEL;
                    _fun0007_ip = 589; continue _fun0007;
 579:
                    var8 = _closure1_slot13;
                    var5 = var8.PIP;
 589:
                    _closure1_slot34 = var5;
                    _fun0007_ip = 645; continue _fun0007;
 595:
                    var5 = _closure1_slot13;
                    var5 = var5.ACTIVITY_POPOUT_WINDOW;
                    _closure1_slot34 = var5;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 18;
                    var5 = var9[var5];
                    var8 = var8.bind(var1)(var5);
                    var5 = var8.wait;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'ACTIVITY_POPOUT_WINDOW_OPEN';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var8)(var4);
 645:
                    var5 = _closure1_slot32;
                    var4 = var5.set;
                    var6 = _closure1_slot47;
                    var3 = var3.id;
                    var3 = var6.bind(var1)(var3, var7);
                    var6 = var2.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
 692:
                    var1 = false;
                    return var1;
 696:
                    var1 = false;
                    return var1;
 700:
                    var1 = false;
                    return var1;
 704:
                    var1 = false;
                    return var1;
                }
            };
            var5 = var5.bind(var1)(var7);
 810:
            var7 = _closure1_slot46;
            var5 = {};
            var15 = var10 != var8;
            var12 = null;
            if(!var15) { _fun0006_ip = 828; continue _fun0006 }
 825:
            var12 = var8;
 828:
            var5['channelId'] = var12;
            var5['applicationId'] = var11;
            var5 = var7.bind(var1)(var5);
 841:
            var7 = var9.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot1;
                var1 = var2 !== var1;
                return var1;
            };
            var12 = var7.bind(var9)(var5);
            var5 = var3.length;
            var9 = 0;
            if(!(var5 > var9)) { _fun0006_ip = 877; continue _fun0006 }
 867:
            var5 = var12.push;
            var5 = var5.bind(var12)(var6);
 877:
            var11 = _closure1_slot24;
            var7 = var11.set;
            var5 = var13.id;
            var5 = var7.bind(var11)(var5, var12);
            if(!(var10 != var8)) { _fun0006_ip = 1074; continue _fun0006 }
 904:
            var7 = _closure1_slot22;
            var5 = var7.get;
            var11 = var5.bind(var7)(var8);
            if(!(var10 == var11)) { _fun0006_ip = 926; continue _fun0006 }
 922:
            var11 = new Array(0);
 926:
            var7 = var11.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot1;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = var7.bind(var11)(var5);
            var11 = _closure1_slot42;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var14];
            var12 = var12.bind(var1)(var5);
            var5 = var12.getEmbeddedActivityLocationGuildId;
            var5 = var5.bind(var12)(var13);
            var5 = var11.bind(var1)(var5);
            var12 = _closure1_slot21;
            var11 = var12.get;
            var11 = var11.bind(var12)(var5);
            if(!(var10 == var11)) { _fun0006_ip = 1000; continue _fun0006 }
 996:
            var11 = new Array(0);
 1000:
            var10 = var11.filter;
            var4 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.applicationId;
                    var1 = _closure2_slot1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0008_ip = 45; continue _fun0008 }
 22:
                    var3 = var3.location;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3 === var2;
 45:
                    var1 = !var1;
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4);
            var3 = var3.length;
            if(!(var3 > var9)) { _fun0006_ip = 1044; continue _fun0006 }
 1024:
            var3 = var7.push;
            var3 = var3.bind(var7)(var6);
            var3 = var4.push;
            var3 = var3.bind(var4)(var6);
 1044:
            var6 = _closure1_slot22;
            var3 = var6.set;
            var3 = var3.bind(var6)(var8, var7);
            var3 = _closure1_slot21;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
 1074:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function updateEmbeddedActivitiesForGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.activity_instances;
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 32; continue _fun0009 }
 15:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var7 = var2.location;
                var6 = var2.application_id;
                var4 = var2.launch_id;
                var1 = var2.composite_instance_id;
                var5 = var2.participants;
                var3 = _closure1_slot43;
                var2 = {};
                var2['location'] = var7;
                var2['applicationId'] = var6;
                var2['launchId'] = var4;
                var2['compositeInstanceId'] = var1;
                var4 = var5.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.user_id;
                    var1['userId'] = var3;
                    var3 = var2.session_id;
                    var1['sessionId'] = var3;
                    var2 = var2.nonce;
                    var1['nonce'] = var2;
                    return var1;
                };
                var1 = var4.bind(var5)(var1);
                var2['participants'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 32:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function disconnectEmbeddedActivity(arg1) {
        var4 = _closure1_slot20;
        var3 = var4.delete;
        var1 = arg1;
        var1 = var1.applicationId;
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 16;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = _closure1_slot15;
        var2 = var2.RELEASE_ACTIVITY_WEB_VIEW;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function handleEmbeddedActivityLaunchEnd(arg1) {
        var1 = arg1;
        var6 = var1.applicationId;
        var5 = var1.channelId;
        var4 = _closure1_slot25;
        var3 = var4.delete;
        var2 = _closure1_slot41;
        var1 = undefined;
        var2 = var2.bind(var1)(var5, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function getActivityKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot47 = var1;
    var13 = global;
    var5 = var13.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var6 = var2.ActivityPopoutWindowLayouts;
    var2 = 11;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var12 = var2.ActivityPanelModes;
    var _closure1_slot13 = var12;
    var11 = var2.FocusedActivityLayouts;
    var _closure1_slot14 = var11;
    var2 = 12;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var4 = var2.ComponentActions;
    var _closure1_slot15 = var4;
    var2 = var2.PopoutWindowKeys;
    var _closure1_slot16 = var2;
    var5 = var13.Set;
    var2 = var5.prototype;
    var4 = Object.create(var2, {constructor: {value: var5}});
    var18 = new Array(0);
    var19 = var4;
    var2 = new var19[var5](var18, var17);
    var5 = var2 instanceof Object ? var2 : var4;
    var2 = {};
    var4 = var13.Set;
    var14 = var4.prototype;
    var14 = Object.create(var14, {constructor: {value: var4}});
    var19 = var14;
    var4 = new var19[var4](var18);
    var4 = var4 instanceof Object ? var4 : var14;
    var2['everLaunchedActivities'] = var4;
    var4 = {};
    var2['seenNewActivities'] = var4;
    var4 = {};
    var2['seenUpdatedActivities'] = var4;
    var4 = null;
    var2['lastCheckedForBadgeableActivities'] = var4;
    var4 = {};
    var2['dateRangesForSurfaces'] = var4;
    var _closure1_slot17 = var2;
    var4 = new Array(0);
    var _closure1_slot18 = var4;
    var2 = new Array(0);
    var _closure1_slot19 = var2;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot20 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot21 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot22 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot23 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot24 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot25 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot26 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot27 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot28 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot29 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot30 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot31 = var14;
    var13 = var13.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {constructor: {value: var13}});
    var19 = var14;
    var13 = new var19[var13](var18);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot32 = var13;
    var _closure1_slot33 = var1;
    var12 = var12.DISCONNECTED;
    var _closure1_slot34 = var12;
    var11 = var11.RESIZABLE;
    var _closure1_slot35 = var11;
    var6 = var6.NORMAL;
    var _closure1_slot36 = var6;
    var6 = 24;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var11 = var6.PersistedStore;
    var6 = function(arg1) {
        var4 = function EmbeddedActivitiesStoreClass() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot40;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 69; continue _fun0010 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 105; continue _fun0010;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = arg1;
                var1 = global;
                var6 = var1.Set;
                var3 = null;
                var5 = var3 == var2;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0011_ip = 30; continue _fun0011 }
 24:
                var4 = var2.everLaunchedActivities;
 30:
                if(!(var3 == var4)) { _fun0011_ip = 38; continue _fun0011 }
 34:
                var4 = new Array(0);
 38:
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var8 = var4;
                var4 = new var9[var6](var8, var7);
                var4 = var4 instanceof Object ? var4 : var5;
                if(!(var3 != var2)) { _fun0011_ip = 93; continue _fun0011 }
 65:
                var3 = {};
                var8 = var3;
                var7 = var2;
                var2 = copyDataProperties(var8, var7);
                var2 = 'everLaunchedActivities';
                var3[var2] = var4;
                _closure1_slot17 = var3;
 93:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(29);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function getState() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSelfEmbeddedActivityForChannel';
        var5['key'] = var7;
        var7 = function getSelfEmbeddedActivityForChannel(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = null;
                var4 = var2 == var1;
                var1 = null;
                if(var4) { _fun0012_ip = 85; continue _fun0012 }
 20:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var7 = _closure1_slot20;
                var4 = var7.values;
                var4 = var4.bind(var7)();
                var5 = var5.bind(var6)(var4);
                var4 = var5.find;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getEmbeddedActivityLocationChannelId;
                    var1 = arg1;
                    var1 = var1.location;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0012_ip = 82; continue _fun0012 }
 79:
                var2 = var3;
 82:
                var1 = var2;
 85:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSelfEmbeddedActivityForLocation';
        var5['key'] = var7;
        var7 = function getSelfEmbeddedActivityForLocation(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = null;
                var4 = var2 == var1;
                var1 = null;
                if(var4) { _fun0013_ip = 85; continue _fun0013 }
 20:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var7 = _closure1_slot20;
                var4 = var7.values;
                var4 = var4.bind(var7)();
                var5 = var5.bind(var6)(var4);
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.location;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0013_ip = 82; continue _fun0013 }
 79:
                var2 = var3;
 82:
                var1 = var2;
 85:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSelfEmbeddedActivities';
        var5['key'] = var7;
        var7 = function getSelfEmbeddedActivities() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForGuild';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForGuild(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 30; continue _fun0014 }
 26:
                var1 = _closure1_slot18;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForChannel';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForChannel(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = _closure1_slot22;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0015_ip = 30; continue _fun0015 }
 26:
                var1 = _closure1_slot18;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForLocation';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForLocation(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = _closure1_slot24;
                var3 = var4.get;
                var1 = arg1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0016_ip = 35; continue _fun0016 }
 31:
                var1 = _closure1_slot18;
 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForStartingChannel';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForStartingChannel(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = _closure1_slot23;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0017_ip = 30; continue _fun0017 }
 26:
                var1 = _closure1_slot18;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesByChannel';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesByChannel() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivityDurationMs';
        var5['key'] = var7;
        var7 = function getEmbeddedActivityDurationMs(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var3 = _closure1_slot32;
                var2 = var3.get;
                var6 = _closure1_slot47;
                var5 = undefined;
                var4 = arg1;
                var1 = arg2;
                var1 = var6.bind(var5)(var4, var1);
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0018_ip = 65; continue _fun0018 }
 44:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var2 - var3;
 65:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isLaunchingActivity';
        var5['key'] = var7;
        var7 = function isLaunchingActivity() {
            var1 = _closure1_slot25;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getShelfActivities';
        var5['key'] = var7;
        var7 = function getShelfActivities(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var4 = _closure1_slot42;
                var3 = undefined;
                var1 = arg1;
                var4 = var4.bind(var3)(var1);
                var3 = _closure1_slot26;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 == var1)) { _fun0019_ip = 41; continue _fun0019 }
 37:
                var1 = _closure1_slot19;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getShelfFetchStatus';
        var5['key'] = var7;
        var7 = function getShelfFetchStatus(arg1) {
            var4 = _closure1_slot42;
            var3 = undefined;
            var2 = arg1;
            var3 = var4.bind(var3)(var2);
            var2 = _closure1_slot27;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'shouldFetchShelf';
        var5['key'] = var7;
        var7 = function shouldFetchShelf(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var3 = _closure1_slot42;
                var5 = undefined;
                var2 = arg1;
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot27;
                var1 = var2.get;
                var3 = var1.bind(var2)(var3);
                var1 = null;
                if(!(var1 == var3)) { _fun0020_ip = 49; continue _fun0020 }
 37:
                var2 = {};
                var4 = false;
                var2['isFetching'] = var4;
                var3 = var2;
 49:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = var1 == var3;
                var5 = undefined;
                if(var2) { _fun0020_ip = 81; continue _fun0020 }
 75:
                var5 = var3.lastFetchTimestampMs;
 81:
                var6 = var1 != var5;
                var2 = 0;
                if(!var6) { _fun0020_ip = 93; continue _fun0020 }
 90:
                var2 = var5;
 93:
                var4 = var4 - var2;
                var2 = 21600000;
                var2 = var4 > var2;
                var1 = var1 != var3;
                if(!var1) { _fun0020_ip = 120; continue _fun0020 }
 114:
                var1 = var3.isFetching;
 120:
                var1 = !var1;
                if(!var1) { _fun0020_ip = 129; continue _fun0020 }
 126:
                var1 = var2;
 129:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getOrientationLockStateForApp';
        var5['key'] = var7;
        var7 = function getOrientationLockStateForApp(arg1) {
            var3 = _closure1_slot28;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getPipOrientationLockStateForApp';
        var5['key'] = var7;
        var7 = function getPipOrientationLockStateForApp(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var2 = _closure1_slot29;
                var1 = var2.get;
                var1 = var1.bind(var2)(var4);
                var2 = null;
                if(!(var2 == var1)) { _fun0021_ip = 40; continue _fun0021 }
 29:
                var2 = var3.getOrientationLockStateForApp;
                var1 = var2.bind(var3)(var4);
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getGridOrientationLockStateForApp';
        var5['key'] = var7;
        var7 = function getGridOrientationLockStateForApp(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var2 = _closure1_slot30;
                var1 = var2.get;
                var1 = var1.bind(var2)(var4);
                var2 = null;
                if(!(var2 == var1)) { _fun0022_ip = 43; continue _fun0022 }
 29:
                var6 = _closure1_slot29;
                var5 = var6.get;
                var1 = var5.bind(var6)(var4);
 43:
                if(!(var2 == var1)) { _fun0022_ip = 58; continue _fun0022 }
 47:
                var2 = var3.getOrientationLockStateForApp;
                var1 = var2.bind(var3)(var4);
 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getLayoutModeForApp';
        var5['key'] = var7;
        var7 = function getLayoutModeForApp(arg1) {
            var3 = _closure1_slot31;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getConnectedActivityChannelId';
        var5['key'] = var7;
        var7 = function getConnectedActivityChannelId() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var3 = _closure1_slot33;
                var2 = null;
                if(!(var2 == var3)) { _fun0023_ip = 17; continue _fun0023 }
 13:
                var2 = undefined;
                return var2;
 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getEmbeddedActivityLocationChannelId;
                var1 = _closure1_slot33;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getConnectedActivityLocation';
        var5['key'] = var7;
        var7 = function getConnectedActivityLocation() {
            var1 = _closure1_slot33;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getActivityPanelMode';
        var5['key'] = var7;
        var7 = function getActivityPanelMode() {
            var1 = _closure1_slot34;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getFocusedLayout';
        var5['key'] = var7;
        var7 = function getFocusedLayout() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getCurrentEmbeddedActivity';
        var5['key'] = var7;
        var7 = function getCurrentEmbeddedActivity() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = this;
                var1 = var3.getConnectedActivityLocation;
                var2 = var1.bind(var3)();
                var1 = var3.getSelfEmbeddedActivityForLocation;
                var2 = var1.bind(var3)(var2);
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0024_ip = 38; continue _fun0024 }
 35:
                var1 = var2;
 38:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivityForUserId';
        var5['key'] = var7;
        var7 = function getEmbeddedActivityForUserId(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var12 = arg1;
                var11 = arg2;
                var10 = undefined;
                if(!(var10 === var11)) { _fun0025_ip = 14; continue _fun0025 }
 12:
                return var10;
 14:
                var2 = _closure1_slot38;
                var1 = _closure1_slot24;
                var8 = var2.bind(var10)(var1);
                var1 = var8.bind(var10)();
                var2 = var1.done;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = var1;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0025_ip = 172; continue _fun0025 }
 57:
                var13 = var4.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var10)(var13, var7);
                var13 = var2[var6];
                var13 = _closure1_slot38;
                var2 = var2[var5];
                var14 = var13.bind(var10)(var2);
                var13 = var14.bind(var10)();
                var2 = var13.done;
                if(var2) { _fun0025_ip = 155; continue _fun0025 }
 101:
                var15 = var13.value;
                var2 = var15.applicationId;
                if(!(var2 === var11)) { _fun0025_ip = 137; continue _fun0025 }
 115:
                var16 = var15.userIds;
                var2 = var16.has;
                var2 = var2.bind(var16)(var12);
                var1 = var15;
                if(var2) { _fun0025_ip = 172; continue _fun0025 }
 137:
                var16 = var14.bind(var10)();
                var2 = var16.done;
                var13 = var16;
                var3 = var15;
                if(!var2) { _fun0025_ip = 101; continue _fun0025 }
 155:
                var13 = var8.bind(var10)();
                var2 = var13.done;
                var4 = var13;
                var1 = undefined;
                if(!var2) { _fun0025_ip = 57; continue _fun0025 }
 172:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'hasActivityEverBeenLaunched';
        var5['key'] = var7;
        var7 = function hasActivityEverBeenLaunched(arg1) {
            var1 = _closure1_slot17;
            var3 = var1.everLaunchedActivities;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getLaunchState';
        var5['key'] = var7;
        var7 = function getLaunchState(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var6 = arg1;
                var1 = arg2;
                var5 = null;
                if(!(var5 == var6)) { _fun0026_ip = 16; continue _fun0026 }
 12:
                var2 = undefined;
                return var2;
 16:
                var3 = _closure1_slot25;
                var2 = var3.get;
                var4 = _closure1_slot41;
                var7 = var5 != var1;
                var5 = null;
                if(!var7) { _fun0026_ip = 44; continue _fun0026 }
 41:
                var5 = var1;
 44:
                var1 = undefined;
                var1 = var4.bind(var1)(var5, var6);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getLaunchStates';
        var5['key'] = var7;
        var7 = function getLaunchStates() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'getActivityPopoutWindowLayout';
        var5['key'] = var7;
        var6 = function getActivityPopoutWindowLayout() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['value'] = var6;
        var1[28] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var6.bind(var1)(var11);
    var6 = 'EmbeddedActivitiesStore';
    var12['displayName'] = var6;
    var6 = 'EmbeddedActivities';
    var12['persistKey'] = var6;
    var6 = new Array(10);
    var11 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = new Array(0);
        var2 = 'seenFeaturedActivities';
        var1[var2] = var3;
        var3 = false;
        var2 = 'shouldShowNewActivityIndicator';
        var1[var2] = var3;
        return var1;
    };
    var6[0] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.seenFeaturedActivities;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[1] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.seenActivities;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[2] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.currentFreeActivity;
        var1 = delete var2.lastFreeActivityRotationTimestampMs;
        var1 = delete var2.freePeriodActivities;
        var1 = delete var2.shouldShowFreeActivityIndicator;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[3] = var11;
    var11 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = {};
        var2 = 'seenNewActivities';
        var1[var2] = var3;
        var3 = {};
        var2 = 'seenUpdatedActivities';
        var1[var2] = var3;
        return var1;
    };
    var6[4] = var11;
    var11 = function(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var2 = arg1;
            var1 = global;
            var4 = var1.Set;
            var1 = var2.everLaunchedActivities;
            var3 = null;
            if(!(var3 == var1)) { _fun0027_ip = 27; continue _fun0027 }
 23:
            var1 = new Array(0);
 27:
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var6 = var1;
            var1 = new var7[var4](var6, var5);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var2 = copyDataProperties(var6, var5);
            var2 = 'everLaunchedActivities';
            var1[var2] = var3;
            return var1;
        }
    };
    var6[5] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.usersHavePlayedByApp;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[6] = var11;
    var11 = function(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var2 = arg1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var2['surfacesToShowNewActivityIndicator'] = var1;
            var1 = var2.shouldShowNewActivityIndicator;
            if(!var1) { _fun0028_ip = 99; continue _fun0028 }
 46:
            var4 = var2.surfacesToShowNewActivityIndicator;
            var3 = var4.add;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 22;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.EmbeddedActivitySurfaces;
            var1 = var1.VOICE_LAUNCHER;
            var1 = var3.bind(var4)(var1);
 99:
            var1 = delete var2.shouldShowNewActivityIndicator;
            var1 = {};
            var8 = var1;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            return var1;
        }
    };
    var6[7] = var11;
    var11 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = null;
        var2 = 'lastCheckedForBadgeableActivities';
        var1[var2] = var3;
        return var1;
    };
    var6[8] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.surfacesToShowNewActivityIndicator;
        var1 = {};
        var5 = var1;
        var4 = var2;
        var2 = copyDataProperties(var5, var4);
        var3 = {};
        var2 = 'dateRangesForSurfaces';
        var1[var2] = var3;
        return var1;
    };
    var6[9] = var11;
    var12['migrations'] = var6;
    var6 = 18;
    var6 = var9[var6];
    var18 = var10.bind(var1)(var6);
    var6 = {};
    var10 = function handleActivityLayoutModeUpdate(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var3 = var1.layoutMode;
        var2 = _closure1_slot31;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var6['ACTIVITY_LAYOUT_MODE_UPDATE'] = var10;
    var10 = function handleConnectionOpen(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var5 = var1.guilds;
            var4 = _closure1_slot22;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot21;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot24;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot23;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = var5.forEach;
            var3 = function(arg1) {
                var3 = _closure1_slot44;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot9;
            var3 = var4.getId;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var5 = function _loop(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var6 = _closure1_slot37;
                    var5 = var6.getEmbeddedActivitiesForLocation;
                    var4 = var3.location;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.some;
                    var2 = function(arg1) {
                        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                            var2 = arg1;
                            var4 = var2.applicationId;
                            var1 = _closure3_slot0;
                            var1 = var1.applicationId;
                            var1 = var4 === var1;
                            if(!var1) { _fun0031_ip = 47; continue _fun0031 }
 27:
                            var4 = var2.launchId;
                            var3 = _closure3_slot0;
                            var3 = var3.launchId;
                            var1 = var4 === var3;
 47:
                            if(!var1) { _fun0031_ip = 73; continue _fun0031 }
 50:
                            var4 = var2.userIds;
                            var3 = var4.has;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
 73:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0030_ip = 62; continue _fun0030 }
 51:
                    var2 = _closure1_slot45;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = global;
            var3 = var2.Array;
            var2 = var3.from;
            var4 = _closure1_slot20;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var4 = var2.bind(var3)(var1);
            var1 = var4.length;
            var3 = 0;
            var2 = var3 < var1;
            var1 = undefined;
            if(!var2) { _fun0029_ip = 176; continue _fun0029 }
 155:
            var2 = var4[var3];
            var2 = var5.bind(var1)(var2);
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0029_ip = 155; continue _fun0029 }
 176:
            return var1;
        }
    };
    var6['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var10 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var2 = _closure1_slot44;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var6['GUILD_CREATE'] = var10;
    var10 = function handleChannelDelete(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot22;
            var5 = var6.get;
            var1 = var2.id;
            var6 = var5.bind(var6)(var1);
            var5 = null;
            if(!(var5 == var6)) { _fun0032_ip = 46; continue _fun0032 }
 42:
            var6 = new Array(0);
 46:
            var9 = _closure1_slot22;
            var8 = var9.set;
            var7 = var2.id;
            var1 = new Array(0);
            var1 = var8.bind(var9)(var7, var1);
            var8 = _closure1_slot42;
            var7 = var2.guild_id;
            var1 = undefined;
            var9 = var8.bind(var1)(var7);
            var8 = _closure1_slot21;
            var7 = var8.get;
            var8 = var7.bind(var8)(var9);
            if(!(var5 == var8)) { _fun0032_ip = 108; continue _fun0032 }
 104:
            var8 = new Array(0);
 108:
            var7 = var8.filter;
            var5 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getEmbeddedActivityLocationChannelId;
                var1 = arg1;
                var1 = var1.location;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var8 = var7.bind(var8)(var5);
            var7 = _closure1_slot21;
            var5 = var7.set;
            var5 = var5.bind(var7)(var9, var8);
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = _closure1_slot24;
                var2 = var3.delete;
                var1 = arg1;
                var1 = var1.location;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot23;
            var4 = var5.set;
            var3 = var2.id;
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var6['CHANNEL_DELETE'] = var10;
    var10 = function handleEmbeddedActivityLaunchStart(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var1 = arg1;
            var11 = var1.applicationId;
            var10 = var1.componentId;
            var4 = var1.commandOrigin;
            var8 = var1.launchParams;
            var5 = var1.channelId;
            var9 = var1.inviterUserId;
            var7 = _closure1_slot25;
            var6 = var7.set;
            var2 = _closure1_slot41;
            var1 = undefined;
            var5 = var2.bind(var1)(var5, var11);
            var2 = {};
            var11 = true;
            var2['isLaunching'] = var11;
            var2['componentId'] = var10;
            var2['inviterUserId'] = var9;
            var2['launchParams'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 23;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(var4 !== var2)) { _fun0033_ip = 139; continue _fun0033 }
 127:
            var2 = _closure1_slot14;
            var2 = var2.RESIZABLE;
            _fun0033_ip = 149; continue _fun0033;
 139:
            var4 = _closure1_slot14;
            var2 = var4.NO_CHAT;
 149:
            _closure1_slot35 = var2;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_START'] = var10;
    var10 = function handleEmbeddedActivityLaunchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.applicationId;
        var1 = _closure1_slot17;
        var2 = var1.everLaunchedActivities;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_SUCCESS'] = var10;
    var10 = function handleEmbeddedActivityLaunchFail(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var1 = var1.channelId;
        var3 = _closure1_slot46;
        var2 = {};
        var2['applicationId'] = var4;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_FAIL'] = var10;
    var10 = function handleEmbeddedActivityClose(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var3 = _closure1_slot20;
            var1 = var3.get;
            var5 = var1.bind(var3)(var4);
            var3 = _closure1_slot20;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            var6 = var3 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0034_ip = 62; continue _fun0034 }
 52:
            var5 = var5.location;
            var4 = var5.id;
 62:
            var5 = _closure1_slot33;
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0034_ip = 80; continue _fun0034 }
 75:
            var3 = var5.id;
 80:
            if(!(var4 === var3)) { _fun0034_ip = 88; continue _fun0034 }
 84:
            _closure1_slot33 = var1;
 88:
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_CLOSE'] = var10;
    var10 = function handleUpdatePopoutWindowLayout(arg1) {
        var1 = arg1;
        var2 = var1.layout;
        _closure1_slot36 = var2;
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT'] = var10;
    var10 = function handleEmbeddedActivityUpdateV2(arg1) {
        var2 = arg1;
        var6 = var2.applicationId;
        var4 = var2.launchId;
        var1 = var2.compositeInstanceId;
        var7 = var2.location;
        var5 = var2.participants;
        var3 = _closure1_slot43;
        var2 = {};
        var2['location'] = var7;
        var2['applicationId'] = var6;
        var2['launchId'] = var4;
        var2['compositeInstanceId'] = var1;
        var4 = var5.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.user_id;
            var1['userId'] = var3;
            var3 = var2.session_id;
            var1['sessionId'] = var3;
            var2 = var2.nonce;
            var1['nonce'] = var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var2['participants'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_UPDATE_V2'] = var10;
    var10 = function handleLocalActivityUpdate(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
            var1 = arg1;
            var3 = var1.activity;
            var2 = null;
            if(!(var2 != var3)) { _fun0035_ip = 96; continue _fun0035 }
 15:
            var5 = _closure1_slot20;
            var4 = var5.get;
            var6 = var3.application_id;
            var7 = var2 != var6;
            var3 = '';
            if(!var7) { _fun0035_ip = 47; continue _fun0035 }
 44:
            var3 = var6;
 47:
            var5 = var4.bind(var5)(var3);
            if(!(var2 != var5)) { _fun0035_ip = 92; continue _fun0035 }
 56:
            var4 = _closure1_slot20;
            var3 = var4.set;
            var2 = var5.applicationId;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
 92:
            var1 = false;
            return var1;
 96:
            var1 = false;
            return var1;
        }
    };
    var6['LOCAL_ACTIVITY_UPDATE'] = var10;
    var10 = function handleSetSelfEmbeddedActivityConfig(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var6 = var1.config;
            var3 = _closure1_slot20;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0036_ip = 77; continue _fun0036 }
 36:
            var4 = _closure1_slot20;
            var3 = var4.set;
            var2 = var5.applicationId;
            var1 = {};
            var8 = var1;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var5 = 'config';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
 77:
            var1 = undefined;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_SET_CONFIG'] = var10;
    var10 = function handleEmbeddedActivityFetchShelf(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot42;
            var1 = undefined;
            var6 = var3.bind(var1)(var4);
            var5 = _closure1_slot27;
            var3 = var5.get;
            var8 = var3.bind(var5)(var6);
            var4 = var5.set;
            var3 = {};
            var7 = true;
            var3['isFetching'] = var7;
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0037_ip = 67; continue _fun0037 }
 61:
            var7 = var8.lastFetchTimestampMs;
 67:
            var3['lastFetchTimestampMs'] = var7;
            var3 = var4.bind(var5)(var6, var3);
            var3 = _closure1_slot17;
            var2 = global;
            var5 = var2.Date;
            var4 = var2.Date;
            var2 = var4.now;
            var11 = var2.bind(var4)();
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var2 = new var12[var5](var11, var10);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.toISOString;
            var2 = var2.bind(var4)();
            var3['lastCheckedForBadgeableActivities'] = var2;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_FETCH_SHELF'] = var10;
    var10 = function handleEmbeddedActivityFetchShelfSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var3 = var1.activities;
        var4 = _closure1_slot42;
        var1 = undefined;
        var5 = var4.bind(var1)(var5);
        var6 = _closure1_slot26;
        var4 = var6.set;
        var4 = var4.bind(var6)(var5, var3);
        var4 = global;
        var6 = var4.Date;
        var4 = var6.now;
        var6 = var4.bind(var6)();
        var4 = {};
        var4['activities'] = var3;
        var4['now'] = var6;
        var3 = function handleShowingNewActivityIndicator(arg1) {
            var1 = arg1;
            var6 = var1.activities;
            var1 = var1.now;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 20;
            var4 = var8[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var7 = _closure1_slot0;
            var4 = 21;
            var4 = var8[var4];
            var7 = var7.bind(var1)(var4);
            var4 = var7.getOS;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var1)(var4);
            var _closure3_slot1 = var4;
            var5 = var6.reduce;
            var4 = function(arg1, arg2) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var3 = arg2;
                    var4 = var3.client_platform_config;
                    var3 = _closure3_slot1;
                    var4 = var4[var3];
                    var _closure4_slot1 = var4;
                    var3 = var4.label_from;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0038_ip = 280; continue _fun0038 }
 48:
                    var3 = var4.label_until;
                    if(!(var6 != var3)) { _fun0038_ip = 280; continue _fun0038 }
 61:
                    var3 = {};
                    var6 = var4.label_from;
                    var3['fromDate'] = var6;
                    var6 = var4.label_until;
                    var3['untilDate'] = var6;
                    var _closure4_slot2 = var3;
                    var3 = global;
                    var8 = var3.Date;
                    var9 = var4.label_from;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var7 = var6 instanceof Object ? var6 : var7;
                    var6 = var7.getTime;
                    var7 = var6.bind(var7)();
                    var _closure4_slot3 = var7;
                    var8 = var3.Date;
                    var9 = var4.label_until;
                    var6 = var8.prototype;
                    var6 = Object.create(var6, {constructor: {value: var8}});
                    var10 = var6;
                    var4 = new var10[var8](var9, var8);
                    var6 = var4 instanceof Object ? var4 : var6;
                    var4 = var6.getTime;
                    var6 = var4.bind(var6)();
                    var4 = _closure3_slot0;
                    var4 = var7 > var4;
                    if(var4) { _fun0038_ip = 198; continue _fun0038 }
 190:
                    var5 = _closure3_slot0;
                    var4 = var6 < var5;
 198:
                    if(var4) { _fun0038_ip = 278; continue _fun0038 }
 201:
                    var5 = var3.Object;
                    var4 = var5.values;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 22;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.EmbeddedActivitySurfaces;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = _closure4_slot1;
                        var3 = var1.omit_badge_from_surfaces;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                            var3 = arg1;
                            var2 = _closure4_slot0;
                            var4 = var2[var3];
                            var2 = null;
                            var2 = var2 == var4;
                            if(var2) { _fun0039_ip = 75; continue _fun0039 }
 23:
                            var5 = global;
                            var6 = var5.Date;
                            var7 = var4.fromDate;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var8 = var5;
                            var4 = new var8[var6](var7, var6);
                            var5 = var4 instanceof Object ? var4 : var5;
                            var4 = var5.getTime;
                            var5 = var4.bind(var5)();
                            var4 = _closure4_slot3;
                            var2 = var5 < var4;
 75:
                            if(!var2) { _fun0039_ip = 90; continue _fun0039 }
 78:
                            var2 = _closure4_slot0;
                            var1 = _closure4_slot2;
                            var2[var3] = var1;
 90:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
 278:
                    return var1;
 280:
                    return var1;
                }
            };
            var3 = {};
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure1_slot17;
            var2['dateRangesForSurfaces'] = var3;
            return var1;
        };
        var3 = var3.bind(var1)(var4);
        var4 = _closure1_slot27;
        var3 = var4.set;
        var2 = {};
        var7 = false;
        var2['isFetching'] = var7;
        var2['lastFetchTimestampMs'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS'] = var10;
    var10 = function handleEmbeddedActivityFetchShelfFail(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot42;
            var1 = undefined;
            var5 = var3.bind(var1)(var4);
            var4 = _closure1_slot27;
            var2 = var4.get;
            var7 = var2.bind(var4)(var5);
            var3 = var4.set;
            var2 = {};
            var6 = false;
            var2['isFetching'] = var6;
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0040_ip = 67; continue _fun0040 }
 61:
            var6 = var7.lastFetchTimestampMs;
 67:
            var2['lastFetchTimestampMs'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL'] = var10;
    var10 = function handleOrientationLockState(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var7 = var1.lockState;
            var6 = var1.pictureInPictureLockState;
            var4 = var1.gridLockState;
            var1 = null;
            if(!(var1 != var7)) { _fun0041_ip = 52; continue _fun0041 }
 32:
            var5 = _closure1_slot28;
            var2 = var5.set;
            var2 = var2.bind(var5)(var3, var7);
            _fun0041_ip = 69; continue _fun0041;
 52:
            var5 = _closure1_slot28;
            var2 = var5.delete;
            var2 = var2.bind(var5)(var3);
 69:
            if(!(var1 !== var6)) { _fun0041_ip = 99; continue _fun0041 }
 73:
            var2 = undefined;
            if(!(var2 !== var6)) { _fun0041_ip = 116; continue _fun0041 }
 79:
            var5 = _closure1_slot29;
            var2 = var5.set;
            var2 = var2.bind(var5)(var3, var6);
            _fun0041_ip = 116; continue _fun0041;
 99:
            var5 = _closure1_slot29;
            var2 = var5.delete;
            var2 = var2.bind(var5)(var3);
 116:
            if(!(var1 !== var4)) { _fun0041_ip = 146; continue _fun0041 }
 120:
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0041_ip = 163; continue _fun0041 }
 126:
            var2 = _closure1_slot30;
            var1 = var2.set;
            var1 = var1.bind(var2)(var3, var4);
            _fun0041_ip = 163; continue _fun0041;
 146:
            var2 = _closure1_slot30;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 163:
            var1 = undefined;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE'] = var10;
    var10 = function handleSetPanelMode(arg1) {
        var1 = arg1;
        var2 = var1.activityPanelMode;
        _closure1_slot34 = var2;
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_SET_PANEL_MODE'] = var10;
    var10 = function handleSetFocusedLayout(arg1) {
        var1 = arg1;
        var2 = var1.focusedActivityLayout;
        _closure1_slot35 = var2;
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot33;
            var1 = null;
            if(!(var1 != var3)) { _fun0042_ip = 107; continue _fun0042 }
 21:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.getEmbeddedActivityLocationChannelId;
            var3 = _closure1_slot33;
            var3 = var5.bind(var6)(var3);
            var1 = var1 != var3;
            if(!var1) { _fun0042_ip = 69; continue _fun0042 }
 65:
            var1 = var3 !== var4;
 69:
            if(!var1) { _fun0042_ip = 90; continue _fun0042 }
 72:
            var4 = _closure1_slot34;
            var3 = _closure1_slot13;
            var3 = var3.PANEL;
            var1 = var4 === var3;
 90:
            if(!var1) { _fun0042_ip = 107; continue _fun0042 }
 93:
            var1 = _closure1_slot13;
            var1 = var1.PIP;
            _closure1_slot34 = var1;
 107:
            var1 = undefined;
            return var1;
        }
    };
    var6['CHANNEL_SELECT'] = var10;
    var10 = function handlePopoutWindowClose(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var1 = arg1;
            var3 = var1.key;
            var1 = _closure1_slot16;
            var1 = var1.ACTIVITY_POPOUT;
            if(!(var3 === var1)) { _fun0043_ip = 39; continue _fun0043 }
 25:
            var1 = _closure1_slot13;
            var1 = var1.PIP;
            _closure1_slot34 = var1;
 39:
            var1 = undefined;
            return var1;
        }
    };
    var6['POPOUT_WINDOW_CLOSE'] = var10;
    var10 = var12.prototype;
    var10 = Object.create(var10, {constructor: {value: var12}});
    var19 = var10;
    var17 = var6;
    var6 = new var19[var12](var18, var17, var16);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot37 = var6;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/activities/EmbeddedActivitiesStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['FEATURED_ACTIVITY_IDS'] = var5;
    var3['NO_ACTIVITIES'] = var4;
    var3['NO_ACTIVITY_CONFIGS'] = var2;
    var2 = '0';
    var3['ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS'] = var2;
    return var1;
})();