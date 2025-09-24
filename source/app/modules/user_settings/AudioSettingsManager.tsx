// app/modules/user_settings/AudioSettingsManager.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function updateAudioSettingsProto(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg2;
            var6 = arg3;
            var3 = undefined;
            var5 = undefined;
            if(!(var5 === var5)) { _fun0005_ip = 16; continue _fun0005 }
 14:
            var5 = true;
 16:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var7 = var7.bind(var3)(var2);
            var2 = var7.coerceAudioContextForProto;
            var7 = var2.bind(var7)(var6);
            var8 = null;
            if(!(var8 != var7)) { _fun0005_ip = 264; continue _fun0005 }
 59:
            var2 = arg1;
            var2 = var2[var7];
            var7 = var2[var1];
            if(!(var8 == var7)) { _fun0005_ip = 133; continue _fun0005 }
 74:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 13;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var10 = var8.AudioContextSetting;
            var9 = var10.create;
            var8 = {};
            var11 = false;
            var8['muted'] = var11;
            var11 = _closure1_slot15;
            var11 = var11.bind(var3)(var6);
            var8['volume'] = var11;
            var7 = var9.bind(var10)(var8);
 133:
            var2[var1] = var7;
            var8 = var2[var1];
            var7 = arg4;
            var7 = var7.bind(var3)(var8);
            var8 = var2[var1];
            var7 = global;
            var9 = var7.String;
            var10 = var7.Date;
            var7 = var10.now;
            var7 = var7.bind(var10)();
            var7 = var9.bind(var3)(var7);
            var8['modifiedAt'] = var7;
            if(!var5) { _fun0005_ip = 246; continue _fun0005 }
 190:
            var5 = var2[var1];
            var5 = var5.volume;
            var4 = _closure1_slot15;
            var4 = var4.bind(var3)(var6);
            var4 = var5 !== var4;
            if(var4) { _fun0005_ip = 226; continue _fun0005 }
 216:
            var5 = var2[var1];
            var4 = var5.muted;
 226:
            if(var4) { _fun0005_ip = 239; continue _fun0005 }
 229:
            var5 = var2[var1];
            var4 = var5.soundboardMuted;
 239:
            if(var4) { _fun0005_ip = 246; continue _fun0005 }
 242:
            var1 = delete var2[var1];
 246:
            var1 = function trimOldestEntries(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var10 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.entries;
                    var4 = var2.bind(var3)(var10);
                    var8 = var4.length;
                    var7 = 300;
                    if(!(!(var8 <= var7))) { _fun0006_ip = 122; continue _fun0006 }
 54:
                    var3 = var4.sort;
                    var2 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var5 = arg1;
                            var2 = var5[Symbol.iterator];
                            var5 = var2().next;
                            var10 = undefined;
                            var3 = undefined;
                            var4 = undefined;
                            var6 = var5().value;
                            var9 = var2;
                            var9 = var9 === var10;
                            var3 = var9;
                            if(var9) { _fun0007_ip = 32; continue _fun0007 }
 29:
                            var4 = var6;
 32:
                            var4 = undefined;
                            var6 = var3;
                            if(var6) { _fun0007_ip = 60; continue _fun0007 }
 40:
                            var5 = var5().value;
                            var6 = var2;
                            var6 = var6 === var10;
                            var3 = var6;
                            if(var6) { _fun0007_ip = 60; continue _fun0007 }
 57:
                            var4 = var5;
 60: // try_start_0
                            var8 = var4.modifiedAt;
 66: // try_end0
                            var4 = var3;
                            if(var4) { _fun0007_ip = 75; continue _fun0007 }
 72:
                            var2.return();
 75:
                            var11 = arg2;
                            var5 = var11[Symbol.iterator];
                            var11 = var5().next;
                            var6 = undefined;
                            var9 = undefined;
                            var12 = var11().value;
                            var13 = var5;
                            var13 = var13 === var10;
                            var6 = var13;
                            if(var13) { _fun0007_ip = 105; continue _fun0007 }
 102:
                            var9 = var12;
 105:
                            var9 = undefined;
                            var12 = var6;
                            if(var12) { _fun0007_ip = 133; continue _fun0007 }
 113:
                            var11 = var11().value;
                            var12 = var5;
                            var12 = var12 === var10;
                            var6 = var12;
                            if(var12) { _fun0007_ip = 133; continue _fun0007 }
 130:
                            var9 = var11;
 133: // try_start_1
                            var7 = var9.modifiedAt;
 139: // try_end1
                            var9 = var6;
                            if(var9) { _fun0007_ip = 148; continue _fun0007 }
 145:
                            var5.return();
 148:
                            var9 = global;
                            var11 = var9.Number;
                            var8 = var11.bind(var10)(var8);
                            var9 = var9.Number;
                            var7 = var9.bind(var10)(var7);
                            var7 = var8 - var7;
                            return var7;
 178: // catch_target1
                            CatchBlockStart(arg_register=3);
                            _fun0007_ip = 184; continue _fun0007;
 182:
                            CatchBlockStart(arg_register=3);
 184:
                            if(var6) { _fun0007_ip = 190; continue _fun0007 }
 187:
                            var5.return();
 190:
                            throw var4;
 192: // catch_target0
                            CatchBlockStart(arg_register=0);
                            _fun0007_ip = 198; continue _fun0007;
 196:
                            CatchBlockStart(arg_register=0);
 198:
                            if(var3) { _fun0007_ip = 204; continue _fun0007 }
 201:
                            var2.return();
 204:
                            throw var1;
                        }
                    };
                    var6 = var3.bind(var4)(var2);
                    var2 = var8 - var7;
                    var5 = 0;
                    var4 = 1;
                    var3 = 0;
                    if(!(var3 < var2)) { _fun0006_ip = 122; continue _fun0006 }
 89:
                    var11 = _closure1_slot8;
                    var2 = var6[var3];
                    var2 = var11.bind(var1)(var2, var4);
                    var2 = var2[var5];
                    var2 = delete var10[var2];
                    var3 = var3 + 1;
                    var2 = var8 - var7;
                    if(var3 < var2) { _fun0006_ip = 89; continue _fun0006 }
 122:
                    return var1;
                }
            };
            var1 = var1.bind(var3)(var2);
            var1 = true;
            return var1;
 264:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function handleConnectionOpen() {
        var2 = function handleMigrateSettings() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var6 = _closure1_slot14;
                var7 = _closure1_slot11;
                var3 = var7.getId;
                var3 = var3.bind(var7)();
                var3 = var6.bind(var1)(var3);
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0008_ip = 140; continue _fun0008 }
 67:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var5 = var4[var2];
                var5 = var3.bind(var1)(var5);
                var6 = var5.PreloadedUserSettingsActionCreators;
                var5 = var6.updateAsync;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.UserSettingsDelay;
                var4 = var2.AUTOMATED;
                var3 = 'audioContextSettings';
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var30 = arg1;
                        var29 = global;
                        var4 = var29.Object;
                        var3 = var4.entries;
                        var5 = _closure1_slot12;
                        var1 = var5.getState;
                        var1 = var1.bind(var5)();
                        var1 = var1.settingsByContext;
                        var28 = var3.bind(var4)(var1);
                        var1 = var28.length;
                        var27 = 0;
                        var3 = var27 < var1;
                        var26 = false;
                        var7 = undefined;
                        var5 = true;
                        var25 = null;
                        var24 = 2;
                        var23 = 1;
                        var22 = 300;
                        var21 = 16;
                        var20 = 'volume';
                        var19 = false;
                        var18 = 0;
                        var17 = undefined;
                        var16 = undefined;
                        var15 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var4 = undefined;
                        var1 = false;
                        if(!var3) { _fun0009_ip = 776; continue _fun0009 }
 119:
                        var31 = var28[var18];
                        var3 = _closure1_slot8;
                        var3 = var3.bind(var7)(var31, var24);
                        var35 = var3[var27];
                        var3 = var3[var23];
                        var32 = _closure1_slot0;
                        var31 = _closure1_slot2;
                        var31 = var31[var21];
                        var32 = var32.bind(var7)(var31);
                        var31 = var32.coerceAudioContextForProto;
                        var34 = var31.bind(var32)(var35);
                        var31 = var19;
                        var33 = var6;
                        var32 = var4;
                        if(!(var25 != var34)) { _fun0009_ip = 749; continue _fun0009 }
 185:
                        var44 = var30[var34];
                        var36 = var29.String;
                        var37 = var29.Date;
                        var34 = var37.now;
                        var34 = var34.bind(var37)();
                        var43 = var36.bind(var7)(var34);
                        var42 = {};
                        var37 = var29.Object;
                        var36 = var37.entries;
                        var34 = var3.localMutes;
                        var41 = var36.bind(var37)(var34);
                        var34 = var41.length;
                        var34 = var27 < var34;
                        var36 = 0;
                        var40 = 0;
                        if(!var34) { _fun0009_ip = 328; continue _fun0009 }
 256:
                        var37 = var41[var36];
                        var34 = _closure1_slot8;
                        var34 = var34.bind(var7)(var37, var24);
                        var37 = var34[var27];
                        var38 = var34[var23];
                        var34 = {};
                        var34['muted'] = var38;
                        var38 = _closure1_slot15;
                        var38 = var38.bind(var7)(var35);
                        var34['volume'] = var38;
                        var34['modifiedAt'] = var43;
                        var34['soundboardMuted'] = var26;
                        var42[var37] = var34;
                        var36 = var36 + 1;
                        var34 = var41.length;
                        var40 = var36;
                        if(var40 < var34) { _fun0009_ip = 256; continue _fun0009 }
 328:
                        var36 = var29.Object;
                        var34 = var36.entries;
                        var3 = var3.localVolumes;
                        var39 = var34.bind(var36)(var3);
                        var3 = var39.length;
                        var3 = var27 < var3;
                        var34 = 0;
                        var38 = 0;
                        if(!var3) { _fun0009_ip = 465; continue _fun0009 }
 367:
                        var36 = var39[var34];
                        var3 = _closure1_slot8;
                        var3 = var3.bind(var7)(var36, var24);
                        var36 = var3[var27];
                        var46 = var3[var23];
                        var3 = {};
                        var3['muted'] = var26;
                        var3['modifiedAt'] = var43;
                        var49 = var42[var36];
                        var50 = var3;
                        var37 = copyDataProperties(var50, var49);
                        var45 = _closure1_slot0;
                        var37 = _closure1_slot2;
                        var37 = var37[var21];
                        var45 = var45.bind(var7)(var37);
                        var37 = var45.snapVolumeToDefault;
                        var37 = var37.bind(var45)(var46, var35);
                        var3[var20] = var37;
                        var42[var36] = var3;
                        var34 = var34 + 1;
                        var3 = var39.length;
                        var38 = var34;
                        if(var38 < var3) { _fun0009_ip = 367; continue _fun0009 }
 465:
                        var34 = var29.Object;
                        var3 = var34.keys;
                        var3 = var3.bind(var34)(var44);
                        var37 = var3.length;
                        var34 = _closure1_slot19;
                        var35 = var29.Object;
                        var3 = var35.entries;
                        var35 = var3.bind(var35)(var42);
                        var3 = var35.entries;
                        var3 = var3.bind(var35)();
                        var36 = var34.bind(var7)(var3);
                        var45 = var36.bind(var7)();
                        var3 = var45.done;
                        var35 = var19;
                        var34 = var45;
                        var31 = var35;
                        var17 = var44;
                        var16 = var43;
                        var15 = var42;
                        var14 = var40;
                        var13 = var41;
                        var12 = var38;
                        var11 = var39;
                        var10 = var34;
                        var9 = var37;
                        var8 = var36;
                        var33 = var6;
                        var32 = var4;
                        if(var3) { _fun0009_ip = 749; continue _fun0009 }
 582:
                        var45 = var34.value;
                        var3 = _closure1_slot8;
                        var45 = var3.bind(var7)(var45, var24);
                        var3 = var45[var27];
                        var46 = _closure1_slot8;
                        var45 = var45[var23];
                        var45 = var46.bind(var7)(var45, var24);
                        var46 = var45[var27];
                        var45 = var45[var23];
                        var47 = var22 - var37;
                        var3 = var3 + var23;
                        var3 = var47 - var3;
                        var10 = var34;
                        var31 = var35;
                        var17 = var44;
                        var16 = var43;
                        var15 = var42;
                        var14 = var40;
                        var13 = var41;
                        var12 = var38;
                        var11 = var39;
                        var9 = var37;
                        var8 = var36;
                        var33 = var46;
                        var32 = var45;
                        if(!(!(var3 <= var27))) { _fun0009_ip = 749; continue _fun0009 }
 678:
                        var3 = var44[var46];
                        if(!(var25 == var3)) { _fun0009_ip = 692; continue _fun0009 }
 686:
                        var44[var46] = var45;
                        var35 = true;
 692:
                        var47 = var36.bind(var7)();
                        var3 = var47.done;
                        var34 = var47;
                        var31 = var35;
                        var17 = var44;
                        var16 = var43;
                        var15 = var42;
                        var14 = var40;
                        var13 = var41;
                        var12 = var38;
                        var11 = var39;
                        var10 = var34;
                        var9 = var37;
                        var8 = var36;
                        var33 = var46;
                        var32 = var45;
                        if(!var3) { _fun0009_ip = 582; continue _fun0009 }
 749:
                        var18 = var18 + 1;
                        var3 = var28.length;
                        var19 = var31;
                        var6 = var33;
                        var4 = var32;
                        var1 = var19;
                        if(var18 < var3) { _fun0009_ip = 119; continue _fun0009 }
 776:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var3 = var4.bind(var7)(var3);
                        var4 = var3.Storage;
                        var3 = var4.set;
                        var6 = _closure1_slot14;
                        var8 = _closure1_slot11;
                        var2 = var8.getId;
                        var2 = var2.bind(var8)();
                        var2 = var6.bind(var7)(var2);
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var2 = var5.bind(var6)(var3, var2, var4);
 140:
                return var1;
            }
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function writeRemoteSettings() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
        var5 = var4[var2];
        var1 = undefined;
        var5 = var3.bind(var1)(var5);
        var6 = var5.PreloadedUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.UserSettingsDelay;
        var4 = var2.INFREQUENT_USER_ACTION;
        var3 = 'audioContextSettings';
        var2 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = false;
            var _closure3_slot1 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.drainPendingAudioSettings;
            var2 = function(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg3;
                    var _closure4_slot0 = var1;
                    var7 = _closure1_slot21;
                    var11 = _closure3_slot0;
                    var1 = undefined;
                    var10 = arg2;
                    var9 = arg1;
                    var8 = function(arg1) {
                        var1 = global;
                        var4 = var1.Object;
                        var3 = var4.assign;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    var12 = undefined;
                    var4 = var12[var7](var11, var10, var9, var8, var7);
                    var2 = _closure3_slot1;
                    if(var2) { _fun0010_ip = 54; continue _fun0010 }
 51:
                    var2 = var4;
 54:
                    _closure3_slot1 = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure3_slot1;
            return var1;
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function handleSetLocalVolume(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var7 = var1.context;
            var6 = var1.userId;
            var8 = var1.volume;
            var3 = _closure1_slot11;
            var2 = var3.getId;
            var2 = var2.bind(var3)();
            if(!(var6 !== var2)) { _fun0011_ip = 160; continue _fun0011 }
 40:
            var3 = _closure1_slot9;
            var2 = var3.getRemoteSessionId;
            var5 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var5)) { _fun0011_ip = 110; continue _fun0011 }
 60:
            var4 = _closure1_slot17;
            var3 = {};
            var9 = _closure1_slot12;
            var2 = var9.isLocalMute;
            var2 = var2.bind(var9)(var6, var7);
            var3['muted'] = var2;
            var3['volume'] = var8;
            var14 = undefined;
            var13 = var5;
            var12 = var6;
            var11 = var7;
            var10 = var3;
            var2 = var14[var4](var13, var12, var11, var10, var9);
 110:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.updatePendingSettings;
            var3 = {};
            var3['volume'] = var8;
            var3 = var4.bind(var5)(var7, var6, var3);
            var1 = _closure1_slot16;
            var1 = var1.bind(var2)();
 160:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function handleSetLocalMute(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var7 = var1.context;
            var6 = var1.userId;
            var3 = _closure1_slot11;
            var2 = var3.getId;
            var2 = var2.bind(var3)();
            if(!(var6 !== var2)) { _fun0012_ip = 114; continue _fun0012 }
 34:
            var3 = _closure1_slot12;
            var2 = var3.isLocalMute;
            var8 = var2.bind(var3)(var6, var7);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.updatePendingSettings;
            var3 = {};
            var3['muted'] = var8;
            var3 = var4.bind(var5)(var7, var6, var3);
            var4 = _closure1_slot16;
            var3 = var4.cancel;
            var3 = var3.bind(var4)();
            var1 = _closure1_slot23;
            var1 = var1.bind(var2)();
 114:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function handleSetLocalSoundboardMute(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var7 = var1.context;
            var6 = var1.userId;
            var3 = _closure1_slot11;
            var2 = var3.getId;
            var2 = var2.bind(var3)();
            if(!(var6 !== var2)) { _fun0013_ip = 113; continue _fun0013 }
 34:
            var3 = _closure1_slot10;
            var2 = var3.isLocalSoundboardMuted;
            var8 = var2.bind(var3)(var6);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.updatePendingSettings;
            var3 = {};
            var3['soundboardMuted'] = var8;
            var3 = var4.bind(var5)(var7, var6, var3);
            var4 = _closure1_slot16;
            var3 = var4.cancel;
            var3 = var3.bind(var4)();
            var1 = _closure1_slot23;
            var1 = var1.bind(var2)();
 113:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function handleResetMediaEngineSettings(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0014_ip = 89; continue _fun0014 }
 9:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var6 = var5[var3];
            var1 = undefined;
            var6 = var4.bind(var1)(var6);
            var7 = var6.PreloadedUserSettingsActionCreators;
            var6 = var7.updateAsync;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.UserSettingsDelay;
            var5 = var3.INFREQUENT_USER_ACTION;
            var4 = 'audioContextSettings';
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var2['user'] = var1;
                var1 = {};
                var2['stream'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3, var5);
            return var1;
 89:
            var9 = "Cannot destructure 'undefined' or 'null'.";
            var10 = var2;
            var1 = throwTypeError(var10, var9);
            var1 = undefined;
            throw var1;
        }
    };
    var _closure1_slot27 = var1;
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
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot13 = var4;
    var4 = function SETTINGS_MIGRATION_KEY(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'AudioContextSettingsMigrated:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var4 = function DEFAULT_VOLUME_FOR_CONTEXT(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = _closure1_slot13;
            var3 = var1.STREAM;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0015_ip = 56; continue _fun0015 }
 20:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.AudioSettingsDefaultVolumes;
            var1 = var1.USER;
            _fun0015_ip = 90; continue _fun0015;
 56:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AudioSettingsDefaultVolumes;
            var1 = var2.STREAM;
 90:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 17;
    var8 = var6[var4];
    var11 = var7.bind(var1)(var8);
    var10 = var11.debounce;
    var9 = function() {
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var8 = 2000;
    var8 = var10.bind(var11)(var9, var8);
    var _closure1_slot16 = var8;
    var4 = var6[var4];
    var11 = var7.bind(var1)(var4);
    var10 = var11.debounce;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.remoteAudioSettingsUpdate;
    var8 = {};
    var4 = 500;
    var8['maxWait'] = var4;
    var4 = var10.bind(var11)(var9, var4, var8);
    var _closure1_slot17 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function AudioSettingsManager(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot18;
                var1 = var1.bind(var4)();
                if(var1) { _fun0016_ip = 84; continue _fun0016 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0016_ip = 118; continue _fun0016;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot22;
                var2['POST_CONNECTION_OPEN'] = var4;
                var4 = _closure1_slot24;
                var2['AUDIO_SET_LOCAL_VOLUME'] = var4;
                var4 = _closure1_slot25;
                var2['AUDIO_TOGGLE_LOCAL_MUTE'] = var4;
                var4 = _closure1_slot26;
                var2['AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE'] = var4;
                var3 = _closure1_slot27;
                var2['MEDIA_ENGINE_RESET_SETTINGS'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var16 = var4;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/AudioSettingsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();