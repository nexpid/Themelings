// app/modules/interactions/InteractionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var11;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var8 = function getInteractionTimeoutTimestamp(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = '';
            if(!(var1 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var1 = global;
            var2 = var1.Number;
            var1 = var2.isNaN;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 39:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.extractTimestamp;
            var2 = var1.bind(var2)(var3);
            var1 = 900000;
            var1 = var2 + var1;
            _fun0004_ip = 40; continue _fun0004;
case 36:
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var1 = var2.bind(var3)();
case 40:
            return var1;
        }
    };
    var _closure1_slot16 = var8;
    var7 = function getInteractionInitialResponseDeadlineTimestamp(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var1 = '';
            if(!(var1 !== var3)) { _fun0005_ip = 36; continue _fun0005 }
case 38:
            var1 = global;
            var2 = var1.Number;
            var1 = var2.isNaN;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 39:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.extractTimestamp;
            var2 = var1.bind(var2)(var3);
            var1 = 3000;
            var1 = var2 + var1;
            _fun0005_ip = 40; continue _fun0005;
case 36:
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var1 = var2.bind(var3)();
case 40:
            return var1;
        }
    };
    var _closure1_slot17 = var7;
    var1 = function mapMessageComponentLocalStateForAPI(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var5 = var2.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 8;
            var4 = var4[var7];
            var6 = undefined;
            var4 = var8.bind(var6)(var4);
            var4 = var4.ComponentType;
            var4 = var4.TEXT_INPUT;
            if(!(var5 !== var4)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var5 = var2.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var8.bind(var6)(var4);
            var4 = var4.ComponentType;
            var4 = var4.FILE_UPLOAD;
            if(!(var5 !== var4)) { _fun0006_ip = 43; continue _fun0006 }
case 11:
            var4 = var2.type;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var4 !== var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var5 = var2.selectedOptions;
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.value;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var5 = var2.type;
            var3['type'] = var5;
            var3['values'] = var4;
            return var3;
case 45:
            return var2;
case 43:
            return var1;
case 41:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var16 = 0;
    var4 = var11[var16];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var4 = var11[var15];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var14 = 2;
    var4 = var11[var14];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var13 = 3;
    var4 = var11[var13];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var12 = 4;
    var4 = var11[var12];
    var4 = var10.bind(var1)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot7 = var5;
    var5 = var4.AbortCodes;
    var _closure1_slot8 = var5;
    var5 = var4.MessageStates;
    var _closure1_slot9 = var5;
    var4 = var4.MessageFlags;
    var _closure1_slot10 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var13 = var2.componentType;
                    var14 = var2.messageId;
                    var15 = var2.messageFlags;
                    var11 = var2.customId;
                    var9 = var2.componentId;
                    var6 = var2.applicationId;
                    var _closure4_slot0 = var6;
                    var16 = var2.channelId;
                    var _closure4_slot1 = var16;
                    var17 = var2.guildId;
                    var _closure4_slot2 = var17;
                    var12 = var2.localState;
                    var5 = undefined;
                    var _closure4_slot3 = var5;
                    SaveGenerator(address=87);
case 49:
                    return var5;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 50; continue _fun0007 }
case 11:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.fromTimestamp;
                    var3 = global;
                    var18 = var3.Date;
                    var3 = var18.now;
                    var3 = var3.bind(var18)();
                    var18 = var7.bind(var8)(var3);
                    _closure4_slot3 = var18;
                    var7 = _closure1_slot6;
                    var3 = var7.canQueueInteraction;
                    var3 = var3.bind(var7)(var14, var18);
                    if(!var3) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var7 = var7.bind(var5)(var3);
                    var3 = var7.unarchiveThreadIfNecessary;
                    var3 = var3.bind(var7)(var16);
                    SaveGenerator(address=210);
case 53:
                    return var3;
case 54:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var24 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var20 = 7;
                    var7 = var23[var20];
                    var21 = var24.bind(var5)(var7);
                    var8 = var21.addQueued;
                    var7 = {};
                    var7['messageId'] = var14;
                    var22 = {};
                    var19 = 8;
                    var23 = var23[var19];
                    var23 = var24.bind(var5)(var23);
                    var23 = var23.InteractionTypes;
                    var23 = var23.MESSAGE_COMPONENT;
                    var22['interactionType'] = var23;
                    var22['applicationId'] = var6;
                    var22['customId'] = var11;
                    var22['componentId'] = var9;
                    var7['data'] = var22;
                    var22 = function onFailure(arg1, arg2) {
                        var5 = _closure1_slot11;
                        var4 = _closure4_slot1;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var5.bind(var3)(var4, var2, var1);
                        return var1;
                    };
                    var7['onFailure'] = var22;
                    var7 = var8.bind(var21)(var18, var7);
                    var7 = null;
                    if(!(var7 != var12)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var20];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.queueInteractionComponentState;
                    var29 = var8;
                    var28 = var14;
                    var27 = var18;
                    var26 = var12;
                    var25 = var9;
                    var7 = var29[var7](var28, var27, var26, var25, var24);
case 57:
                    var9 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var19 = var8[var19];
                    var19 = var7.bind(var5)(var19);
                    var19 = var19.InteractionTypes;
                    var19 = var19.MESSAGE_COMPONENT;
                    var9['type'] = var19;
                    var9['nonce'] = var18;
                    var9['guild_id'] = var17;
                    var9['channel_id'] = var16;
                    var9['message_flags'] = var15;
                    var9['message_id'] = var14;
                    var9['application_id'] = var6;
                    var14 = _closure1_slot5;
                    var6 = var14.getSessionId;
                    var6 = var6.bind(var14)();
                    var9['session_id'] = var6;
                    var6 = {};
                    var6['component_type'] = var13;
                    var6['custom_id'] = var11;
                    var11 = _closure1_slot18;
                    var27 = var11.bind(var5)(var12);
                    var28 = var6;
                    var11 = copyDataProperties(var28, var27);
                    var9['data'] = var6;
                    var6 = 9;
                    var6 = var8[var6];
                    var6 = var7.bind(var5)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.post;
                    var6 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.INTERACTIONS;
                    var6['url'] = var10;
                    var6['body'] = var9;
                    var9 = 3000;
                    var6['timeout'] = var9;
                    var9 = false;
                    var6['rejectWithError'] = var9;
                    var4 = function(arg1) {
                        var7 = _closure1_slot12;
                        var12 = _closure4_slot3;
                        var10 = _closure4_slot0;
                        var9 = _closure4_slot1;
                        var8 = _closure4_slot2;
                        var1 = undefined;
                        var11 = arg1;
                        var13 = undefined;
                        var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var4 = var7.bind(var8)(var6, var4);
                    SaveGenerator(address=555);
case 59:
                    return var4;
case 60:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 51:
                    return var5;
case 61:
                    return var4;
case 55:
                    return var3;
case 50:
                    return var2;
case 47:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var4.bind(var1)();
    var4 = function handleInteractionFailure(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var2 = null;
            var1 = arg3;
            var1 = var2 == var1;
            if(!var1) { _fun0008_ip = 62; continue _fun0008 }
case 48:
            var1 = var2 != var4;
case 62:
            if(!var1) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.sendClydeError;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var5 = function handleInteractionResponse(arg1, arg2, arg3, arg4, arg5) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var11 = arg3;
            var9 = arg4;
            var10 = arg5;
            var2 = var1.ok;
            if(var2) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var2 = var1.hasErr;
            if(var2) { _fun0009_ip = 67; continue _fun0009 }
case 39:
            var4 = var1.status;
            var2 = 400;
            if(!(var4 >= var2)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var4 = var1.status;
            var2 = 500;
            if(!(var4 < var2)) { _fun0009_ip = 68; continue _fun0009 }
case 70:
            var2 = var1.body;
            if(var2) { _fun0009_ip = 71; continue _fun0009 }
case 68:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.setFailed;
            var6 = var1.body;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var2 = var6.code;
case 72:
            var2 = var4.bind(var5)(var3, var2);
            var2 = undefined;
            return var2;
case 71:
            var2 = var1.body;
            var5 = var2.code;
            var4 = _closure1_slot8;
            var4 = var4.INVALID_FORM_BODY;
            if(!(var5 === var4)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var4 = var1.body;
            var4 = var4.errors;
            if(var4) { _fun0009_ip = 76; continue _fun0009 }
case 74:
            var4 = var1.body;
            var5 = var4.code;
            var4 = _closure1_slot8;
            var4 = var4.UNKNOWN_INTEGRATION;
            if(!(var5 !== var4)) { _fun0009_ip = 77; continue _fun0009 }
case 22:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 7;
            var5 = var5[var4];
            var4 = undefined;
            var8 = var6.bind(var4)(var5);
            var7 = var8.setFailed;
            var4 = var1.body;
            var16 = var4.code;
            var4 = var1.body;
            var15 = var4.message;
            var14 = var1.status;
            var18 = var8;
            var17 = var3;
            var4 = var18[var7](var17, var16, var15, var14, var13);
            var4 = undefined;
            _fun0009_ip = 78; continue _fun0009;
case 77:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 12;
            var5 = var7[var5];
            var8 = undefined;
            var7 = var6.bind(var8)(var5);
            var6 = var7.dispatch;
            var5 = {};
            var12 = 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION';
            var5['type'] = var12;
            var5['applicationId'] = var11;
            var5['channelId'] = var9;
            var12 = null;
            var13 = var12 != var10;
            if(!var13) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var12 = var10;
case 79:
            var5['guildId'] = var12;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var7 = var6.bind(var8)(var5);
            var6 = var7.setFailed;
            var5 = var1.body;
            var5 = var5.message;
            var5 = var6.bind(var7)(var3, var8, var5);
            var4 = undefined;
case 78:
            return var4;
case 76:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 11;
            var4 = var5[var4];
            var5 = undefined;
            var6 = var6.bind(var5)(var4);
            var4 = var6.getFirstSkemaError;
            var1 = var1.body;
            var1 = var1.errors;
            var6 = var4.bind(var6)(var1);
            var1 = null;
            var4 = var1 == var6;
            if(var4) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var8 = var6.code;
            var7 = 'INTERACTION_APPLICATION_COMMAND_INVALID_VERSION';
            var7 = var7 !== var8;
            if(!var7) { _fun0009_ip = 83; continue _fun0009 }
case 84:
            var12 = var6.code;
            var8 = 'INTERACTION_APPLICATION_COMMAND_INVALID';
            var7 = var8 !== var12;
case 83:
            var4 = var7;
case 81:
            if(var4) { _fun0009_ip = 85; continue _fun0009 }
case 86:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 12;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.dispatch;
            var4 = {};
            var12 = 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION';
            var4['type'] = var12;
            var4['applicationId'] = var11;
            var4['channelId'] = var9;
            var11 = var1 != var10;
            var9 = null;
            if(!var11) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var9 = var10;
case 87:
            var4['guildId'] = var9;
            var4 = var7.bind(var8)(var4);
case 85:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.setFailed;
            var7 = var1 == var6;
            var1 = undefined;
            if(var7) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var1 = var6.message;
case 89:
            var1 = var2.bind(var4)(var3, var5, var1);
            var1 = undefined;
            return var1;
case 67:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.setFailed;
            var1 = var1.bind(var2)(var3);
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = {};
    var4['SENDING'] = var16;
    var9 = 'SENDING';
    var4[var16] = var9;
    var4['CREATED'] = var15;
    var9 = 'CREATED';
    var4[var15] = var9;
    var4['FAILED'] = var14;
    var9 = 'FAILED';
    var4[var14] = var9;
    var4['TIMED_OUT'] = var13;
    var9 = 'TIMED_OUT';
    var4[var13] = var9;
    var4['EPHEMERAL_SUCCESS'] = var12;
    var9 = 'EPHEMERAL_SUCCESS';
    var4[var12] = var9;
    var _closure1_slot13 = var4;
    var9 = 16;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/interactions/InteractionUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getInteractionTimeoutTimestamp'] = var8;
    var3['getInteractionInitialResponseDeadlineTimestamp'] = var7;
    var3['executeMessageComponentInteraction'] = var6;
    var3['handleInteractionResponse'] = var5;
    var3['InteractionStatusViewState'] = var4;
    var4 = function(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var10 = arg2;
            var3 = null;
            var1 = var3 == var10;
            var4 = undefined;
            var9 = undefined;
            if(var1) { _fun0010_ip = 91; continue _fun0010 }
case 62:
            var9 = var10.state;
case 91:
            var5 = var6.state;
            var1 = _closure1_slot9;
            var1 = var1.SENT;
            var7 = var5 === var1;
            if(!var7) { _fun0010_ip = 92; continue _fun0010 }
case 5:
            var5 = _closure1_slot16;
            var1 = var6.id;
            var5 = var5.bind(var4)(var1);
            var1 = global;
            var8 = var1.Date;
            var1 = var8.now;
            var1 = var1.bind(var8)();
            var7 = var5 < var1;
case 92:
            var5 = var6.state;
            var1 = _closure1_slot9;
            var1 = var1.SEND_FAILED;
            var5 = var5 === var1;
            if(!var5) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var8 = _closure1_slot17;
            var1 = var6.id;
            var8 = var8.bind(var4)(var1);
            var1 = global;
            var11 = var1.Date;
            var1 = var11.now;
            var1 = var1.bind(var11)();
            var5 = var8 < var1;
case 93:
            var1 = var3 == var10;
            var8 = undefined;
            if(var1) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var1 = var10.data;
            var8 = var1.interactionType;
case 95:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 8;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.InteractionTypes;
            var1 = var1.APPLICATION_COMMAND;
            var8 = var8 === var1;
            var1 = var6.isCommandType;
            var1 = var1.bind(var6)();
            if(!var8) { _fun0010_ip = 18; continue _fun0010 }
case 54:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 13;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.InteractionState;
            var11 = var11.QUEUED;
            if(!(var9 !== var11)) { _fun0010_ip = 97; continue _fun0010 }
case 18:
            if(!var1) { _fun0010_ip = 98; continue _fun0010 }
case 99:
            var12 = var6.state;
            var11 = _closure1_slot9;
            var11 = var11.SENDING;
            if(!(var12 === var11)) { _fun0010_ip = 98; continue _fun0010 }
case 100:
            if(!(var3 == var10)) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            if(!var8) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 13;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.InteractionState;
            var8 = var8.CREATED;
            if(!(var9 !== var8)) { _fun0010_ip = 103; continue _fun0010 }
case 101:
            var9 = var6.hasFlag;
            var8 = _closure1_slot10;
            var8 = var8.LOADING;
            var8 = var9.bind(var6)(var8);
            if(!var8) { _fun0010_ip = 104; continue _fun0010 }
case 105:
            if(!var7) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var8 = var6.interaction;
            if(!(var3 != var8)) { _fun0010_ip = 106; continue _fun0010 }
case 107:
            var9 = var6.hasFlag;
            var8 = _closure1_slot10;
            var8 = var8.LOADING;
            var8 = var9.bind(var6)(var8);
            if(!var8) { _fun0010_ip = 106; continue _fun0010 }
case 108:
            if(var7) { _fun0010_ip = 109; continue _fun0010 }
case 106:
            var7 = var6.interaction;
            if(!(var3 != var7)) { _fun0010_ip = 110; continue _fun0010 }
case 111:
            var8 = var6.hasFlag;
            var7 = _closure1_slot10;
            var7 = var7.LOADING;
            var7 = var8.bind(var6)(var7);
            if(var7) { _fun0010_ip = 110; continue _fun0010 }
case 112:
            if(var5) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            if(!var1) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var5 = var6.state;
            var1 = _closure1_slot9;
            var1 = var1.SEND_FAILED;
            if(!(var5 !== var1)) { _fun0010_ip = 115; continue _fun0010 }
case 113:
            var1 = var6.interaction;
            var3 = var3 != var1;
            var1 = undefined;
            if(!var3) { _fun0010_ip = 116; continue _fun0010 }
case 117:
            var5 = var6.hasFlag;
            var3 = _closure1_slot10;
            var3 = var3.EPHEMERAL;
            var3 = var5.bind(var6)(var3);
            var1 = undefined;
            if(!var3) { _fun0010_ip = 116; continue _fun0010 }
case 118:
            var3 = _closure1_slot13;
            var1 = var3.EPHEMERAL_SUCCESS;
case 116:
            _fun0010_ip = 119; continue _fun0010;
case 115:
            var3 = _closure1_slot13;
            var1 = var3.FAILED;
case 119:
            _fun0010_ip = 120; continue _fun0010;
case 109:
            var3 = _closure1_slot13;
            var1 = var3.TIMED_OUT;
case 120:
            _fun0010_ip = 87; continue _fun0010;
case 103:
            var3 = _closure1_slot13;
            var1 = var3.CREATED;
case 87:
            _fun0010_ip = 121; continue _fun0010;
case 97:
            var2 = _closure1_slot13;
            var1 = var2.SENDING;
case 121:
            return var1;
        }
    };
    var3['getInteractionStatusViewState'] = var4;
    var4 = function canRetryInteractionData(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var11 = var1.options;
            var3 = null;
            var2 = var3 == var11;
            var6 = undefined;
            var1 = undefined;
            if(var2) { _fun0011_ip = 122; continue _fun0011 }
case 123:
            var1 = var11.length;
case 122:
            var10 = 1;
            var2 = var11;
            if(!(var10 === var1)) { _fun0011_ip = 124; continue _fun0011 }
case 39:
            var9 = 0;
            var1 = var11[var9];
            var4 = var1.type;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 8;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            var5 = var11;
            if(!(var4 !== var1)) { _fun0011_ip = 125; continue _fun0011 }
case 126:
            var1 = var11[var9];
            var4 = var1.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var12.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND;
            var5 = var11;
            var2 = var5;
            if(!(var4 === var1)) { _fun0011_ip = 124; continue _fun0011 }
case 125:
            var1 = var5[var9];
            var11 = var1.options;
            var4 = var3 == var11;
            var1 = undefined;
            if(var4) { _fun0011_ip = 127; continue _fun0011 }
case 95:
            var1 = var11.length;
case 127:
            var2 = var11;
            if(!(var10 === var1)) { _fun0011_ip = 124; continue _fun0011 }
case 128:
            var1 = var11[var9];
            var4 = var1.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var12.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            var5 = var11;
            if(var4 === var1) { _fun0011_ip = 125; continue _fun0011 }
case 129:
            var1 = var11[var9];
            var4 = var1.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var12.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND;
            var5 = var11;
            var2 = var5;
            if(var4 === var1) { _fun0011_ip = 125; continue _fun0011 }
case 124:
            var1 = _closure1_slot14;
            if(!(var3 == var2)) { _fun0011_ip = 102; continue _fun0011 }
case 130:
            var2 = new Array(0);
case 102:
            var4 = var1.bind(var6)(var2);
            var2 = var4.bind(var6)();
            var1 = var2.done;
            var3 = 8;
            if(var1) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var1 = var2.value;
            var7 = var1.type;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var8.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.ATTACHMENT;
            if(!(var7 !== var1)) { _fun0011_ip = 133; continue _fun0011 }
case 105:
            var7 = var4.bind(var6)();
            var1 = var7.done;
            var2 = var7;
            if(var1) { _fun0011_ip = 131; continue _fun0011 }
case 134:
            _fun0011_ip = 132; continue _fun0011;
case 133:
            var1 = false;
            return var1;
case 131:
            var1 = true;
            return var1;
        }
    };
    var3['canRetryInteractionData'] = var4;
    var2 = function interactionCallbackErrorReason(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 14;
            var1 = var1[var5];
            var7 = undefined;
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.TIMEOUT;
            if(!(var1 !== var3)) { _fun0012_ip = 135; continue _fun0012 }
case 136:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT;
            if(!(var1 !== var3)) { _fun0012_ip = 137; continue _fun0012 }
case 138:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL;
            if(!(var1 !== var3)) { _fun0012_ip = 139; continue _fun0012 }
case 140:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS;
            if(!(var1 !== var3)) { _fun0012_ip = 139; continue _fun0012 }
case 141:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL;
            if(!(var1 !== var3)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_UNKNOWN_GUILD;
            if(!(var1 !== var3)) { _fun0012_ip = 142; continue _fun0012 }
case 144:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE;
            if(!(var1 !== var3)) { _fun0012_ip = 142; continue _fun0012 }
case 145:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK;
            if(!(var1 !== var3)) { _fun0012_ip = 142; continue _fun0012 }
case 146:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE;
            if(!(var1 !== var3)) { _fun0012_ip = 147; continue _fun0012 }
case 148:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE;
            if(!(var1 !== var3)) { _fun0012_ip = 149; continue _fun0012 }
case 150:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED;
            if(!(var1 !== var3)) { _fun0012_ip = 151; continue _fun0012 }
case 152:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED;
            if(!(var1 !== var3)) { _fun0012_ip = 151; continue _fun0012 }
case 153:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY;
            if(!(var1 !== var3)) { _fun0012_ip = 154; continue _fun0012 }
case 86:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE;
            if(!(var1 !== var3)) { _fun0012_ip = 155; continue _fun0012 }
case 119:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.ReasonCodes;
            var1 = var1.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION;
            if(!(var1 !== var3)) { _fun0012_ip = 156; continue _fun0012 }
case 85:
            return var7;
case 156:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.PrHIMz;
            var1 = var3.bind(var4)(var1);
            return var1;
case 155:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.PtobXV;
            var1 = var3.bind(var4)(var1);
            return var1;
case 154:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.WjNAAA;
            var1 = var3.bind(var4)(var1);
            return var1;
case 151:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.uGDCc3;
            var1 = var3.bind(var4)(var1);
            return var1;
case 149:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.RvkXdX;
            var1 = var3.bind(var4)(var1);
            return var1;
case 147:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.4WuFRE;
            var1 = var3.bind(var4)(var1);
            return var1;
case 142:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.j29zCg;
            var1 = var3.bind(var4)(var1);
            return var1;
case 139:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.hHGrW1;
            var1 = var3.bind(var4)(var1);
            return var1;
case 137:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var3 = var6[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.Gyzcra;
            var1 = var3.bind(var4)(var1);
            return var1;
case 135:
            var4 = _closure1_slot4;
            var3 = var4.getApplication;
            var1 = arg2;
            var6 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0012_ip = 157; continue _fun0012 }
case 158:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var3 = var8[var1];
            var3 = var5.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var8[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.vGU8+v;
            var1 = var3.bind(var4)(var1);
            _fun0012_ip = 159; continue _fun0012;
case 157:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.u2D2Ul;
            var2 = {};
            var6 = var6.name;
            var2['applicationName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 159:
            return var1;
        }
    };
    var3['interactionCallbackErrorReason'] = var2;
    return var1;
})();