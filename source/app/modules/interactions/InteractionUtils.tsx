// app/modules/interactions/InteractionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var9 = function getInteractionTimeoutTimestamp(arg1) {
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
            var1 = 4;
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
    var _closure1_slot13 = var9;
    var8 = function getInteractionInitialResponseDeadlineTimestamp(arg1) {
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
            var1 = 4;
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
    var _closure1_slot14 = var8;
    var1 = function _executeMessageComponentInteraction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var9 = var2.componentType;
                    var14 = var2.messageId;
                    var15 = var2.messageFlags;
                    var7 = var2.customId;
                    var12 = var2.componentId;
                    var6 = var2.applicationId;
                    var _closure4_slot0 = var6;
                    var16 = var2.channelId;
                    var _closure4_slot1 = var16;
                    var17 = var2.guildId;
                    var _closure4_slot2 = var17;
                    var8 = var2.localState;
                    var5 = undefined;
                    var _closure4_slot3 = var5;
                    SaveGenerator(address=87);
case 43:
                    return var5;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 44; continue _fun0006 }
case 11:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 4;
                    var3 = var11[var3];
                    var11 = var10.bind(var5)(var3);
                    var10 = var11.fromTimestamp;
                    var3 = global;
                    var18 = var3.Date;
                    var3 = var18.now;
                    var3 = var3.bind(var18)();
                    var18 = var10.bind(var11)(var3);
                    _closure4_slot3 = var18;
                    var10 = _closure1_slot5;
                    var3 = var10.canQueueInteraction;
                    var3 = var3.bind(var10)(var14, var18);
                    if(!var3) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 5;
                    var3 = var11[var3];
                    var10 = var10.bind(var5)(var3);
                    var3 = var10.unarchiveThreadIfNecessary;
                    var3 = var3.bind(var10)(var16);
                    SaveGenerator(address=210);
case 47:
                    return var3;
case 48:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var24 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var20 = 6;
                    var10 = var23[var20];
                    var21 = var24.bind(var5)(var10);
                    var11 = var21.addQueued;
                    var10 = {};
                    var10['messageId'] = var14;
                    var22 = {};
                    var19 = 7;
                    var23 = var23[var19];
                    var23 = var24.bind(var5)(var23);
                    var23 = var23.InteractionTypes;
                    var23 = var23.MESSAGE_COMPONENT;
                    var22['interactionType'] = var23;
                    var22['applicationId'] = var6;
                    var22['customId'] = var7;
                    var22['componentId'] = var12;
                    var10['data'] = var22;
                    var22 = function onFailure(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure4_slot1;
                            var2 = null;
                            var1 = arg2;
                            var1 = var2 == var1;
                            if(!var1) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                            var1 = var2 != var4;
case 51:
                            if(!var1) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var1 = var2.sendClydeError;
                            var1 = var1.bind(var2)(var3, var4);
case 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10['onFailure'] = var22;
                    var10 = var11.bind(var21)(var18, var10);
                    var10 = null;
                    if(!(var10 != var8)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var20];
                    var11 = var11.bind(var5)(var10);
                    var10 = var11.queueInteractionComponentState;
                    var29 = var11;
                    var28 = var14;
                    var27 = var18;
                    var26 = var8;
                    var25 = var12;
                    var10 = var29[var10](var28, var27, var26, var25, var24);
case 55:
                    var12 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var19 = var11[var19];
                    var19 = var10.bind(var5)(var19);
                    var19 = var19.InteractionTypes;
                    var19 = var19.MESSAGE_COMPONENT;
                    var12['type'] = var19;
                    var12['nonce'] = var18;
                    var12['guild_id'] = var17;
                    var12['channel_id'] = var16;
                    var12['message_flags'] = var15;
                    var12['message_id'] = var14;
                    var12['application_id'] = var6;
                    var14 = _closure1_slot4;
                    var6 = var14.getSessionId;
                    var6 = var6.bind(var14)();
                    var12['session_id'] = var6;
                    var6 = {};
                    var6['component_type'] = var9;
                    var6['custom_id'] = var7;
                    var7 = _closure1_slot16;
                    var27 = var7.bind(var5)(var8);
                    var28 = var6;
                    var7 = copyDataProperties(var28, var27);
                    var12['data'] = var6;
                    var9 = 8;
                    var6 = var11[var9];
                    var6 = var10.bind(var5)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.post;
                    var6 = {};
                    var13 = _closure1_slot6;
                    var13 = var13.INTERACTIONS;
                    var6['url'] = var13;
                    var6['body'] = var12;
                    var12 = 3000;
                    var6['timeout'] = var12;
                    var9 = var11[var9];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var6['rejectWithError'] = var9;
                    var4 = function(arg1) {
                        var7 = _closure1_slot17;
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
                    SaveGenerator(address=572);
case 57:
                    return var4;
case 58:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 59; continue _fun0006 }
case 45:
                    return var5;
case 59:
                    return var4;
case 49:
                    return var3;
case 44:
                    return var2;
case 41:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function mapMessageComponentLocalStateForAPI(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var4 = var2.type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 7;
            var5 = var5[var7];
            var6 = undefined;
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.TEXT_INPUT;
            if(!(var5 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 7:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.FILE_UPLOAD;
            if(!(var5 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.RADIO_GROUP;
            if(!(var5 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 64:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CHECKBOX_GROUP;
            if(!(var5 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 17:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CHECKBOX;
            if(!(var5 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 22:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.STRING_SELECT;
            if(!(var5 !== var4)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.USER_SELECT;
            if(!(var5 !== var4)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.ROLE_SELECT;
            if(!(var5 !== var4)) { _fun0008_ip = 67; continue _fun0008 }
case 69:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.ComponentType;
            var5 = var5.MENTIONABLE_SELECT;
            if(!(var5 !== var4)) { _fun0008_ip = 67; continue _fun0008 }
case 70:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var4)) { _fun0008_ip = 67; continue _fun0008 }
case 71:
            return var1;
case 67:
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
case 65:
            return var2;
case 62:
            return var1;
case 60:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var7 = function handleInteractionResponse(arg1, arg2, arg3, arg4, arg5) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var11 = arg3;
            var9 = arg4;
            var10 = arg5;
            var2 = var1.ok;
            if(var2) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var2 = var1.hasErr;
            if(var2) { _fun0009_ip = 74; continue _fun0009 }
case 39:
            var4 = var1.status;
            var2 = 400;
            if(!(var4 >= var2)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
            var4 = var1.status;
            var2 = 500;
            if(!(var4 < var2)) { _fun0009_ip = 75; continue _fun0009 }
case 77:
            var2 = var1.body;
            if(var2) { _fun0009_ip = 78; continue _fun0009 }
case 75:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.setFailed;
            var6 = var1.body;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var2 = var6.code;
case 79:
            var2 = var4.bind(var5)(var3, var2);
            var2 = undefined;
            return var2;
case 78:
            var2 = var1.body;
            var5 = var2.code;
            var4 = _closure1_slot7;
            var4 = var4.INVALID_FORM_BODY;
            if(!(var5 === var4)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var4 = var1.body;
            var4 = var4.errors;
            if(var4) { _fun0009_ip = 83; continue _fun0009 }
case 81:
            var4 = var1.body;
            var5 = var4.code;
            var4 = _closure1_slot7;
            var4 = var4.UNKNOWN_INTEGRATION;
            if(!(var5 !== var4)) { _fun0009_ip = 84; continue _fun0009 }
case 22:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 6;
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
            _fun0009_ip = 85; continue _fun0009;
case 84:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 11;
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
            if(!var13) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var12 = var10;
case 86:
            var5['guildId'] = var12;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var7 = var6.bind(var8)(var5);
            var6 = var7.setFailed;
            var5 = var1.body;
            var5 = var5.message;
            var5 = var6.bind(var7)(var3, var8, var5);
            var4 = undefined;
case 85:
            return var4;
case 83:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 10;
            var4 = var5[var4];
            var5 = undefined;
            var6 = var6.bind(var5)(var4);
            var4 = var6.getFirstSkemaError;
            var1 = var1.body;
            var1 = var1.errors;
            var6 = var4.bind(var6)(var1);
            var1 = null;
            var4 = var1 == var6;
            if(var4) { _fun0009_ip = 88; continue _fun0009 }
case 89:
            var8 = var6.code;
            var7 = 'INTERACTION_APPLICATION_COMMAND_INVALID_VERSION';
            var7 = var7 !== var8;
            if(!var7) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var12 = var6.code;
            var8 = 'INTERACTION_APPLICATION_COMMAND_INVALID';
            var7 = var8 !== var12;
case 90:
            var4 = var7;
case 88:
            if(var4) { _fun0009_ip = 92; continue _fun0009 }
case 93:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 11;
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
            if(!var11) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var9 = var10;
case 94:
            var4['guildId'] = var9;
            var4 = var7.bind(var8)(var4);
case 92:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.setFailed;
            var7 = var1 == var6;
            var1 = undefined;
            if(var7) { _fun0009_ip = 96; continue _fun0009 }
case 97:
            var1 = var6.message;
case 96:
            var1 = var2.bind(var4)(var3, var5, var1);
            var1 = undefined;
            return var1;
case 74:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.setFailed;
            var1 = var1.bind(var2)(var3);
case 72:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var7;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var14 = 0;
    var6 = var5[var14];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var6 = var5[var13];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var12 = 2;
    var6 = var5[var12];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var11 = 3;
    var6 = var5[var11];
    var6 = var4.bind(var1)(var6);
    var10 = var6.Endpoints;
    var _closure1_slot6 = var10;
    var10 = var6.AbortCodes;
    var _closure1_slot7 = var10;
    var10 = var6.MessageStates;
    var _closure1_slot8 = var10;
    var6 = var6.MessageFlags;
    var _closure1_slot9 = var6;
    var6 = {};
    var6['SENDING'] = var14;
    var10 = 'SENDING';
    var6[var14] = var10;
    var6['CREATED'] = var13;
    var10 = 'CREATED';
    var6[var13] = var10;
    var6['FAILED'] = var12;
    var10 = 'FAILED';
    var6[var12] = var10;
    var6['TIMED_OUT'] = var11;
    var10 = 'TIMED_OUT';
    var6[var11] = var10;
    var11 = 4;
    var6['EPHEMERAL_SUCCESS'] = var11;
    var10 = 'EPHEMERAL_SUCCESS';
    var6[var11] = var10;
    var _closure1_slot10 = var6;
    var10 = 13;
    var10 = var5[var10];
    var12 = var4.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/interactions/InteractionUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['getInteractionTimeoutTimestamp'] = var9;
    var3['getInteractionInitialResponseDeadlineTimestamp'] = var8;
    var8 = function executeMessageComponentInteraction() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['executeMessageComponentInteraction'] = var8;
    var3['handleInteractionResponse'] = var7;
    var3['InteractionStatusViewState'] = var6;
    var6 = function getInteractionStatusViewState(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var10 = arg2;
            var3 = null;
            var1 = var3 == var10;
            var4 = undefined;
            var9 = undefined;
            if(var1) { _fun0010_ip = 98; continue _fun0010 }
case 99:
            var9 = var10.state;
case 98:
            var5 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.SENT;
            var7 = var5 === var1;
            if(!var7) { _fun0010_ip = 100; continue _fun0010 }
case 5:
            var5 = _closure1_slot13;
            var1 = var6.id;
            var5 = var5.bind(var4)(var1);
            var1 = global;
            var8 = var1.Date;
            var1 = var8.now;
            var1 = var1.bind(var8)();
            var7 = var5 < var1;
case 100:
            var5 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.SEND_FAILED;
            var5 = var5 === var1;
            if(!var5) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var8 = _closure1_slot14;
            var1 = var6.id;
            var8 = var8.bind(var4)(var1);
            var1 = global;
            var11 = var1.Date;
            var1 = var11.now;
            var1 = var1.bind(var11)();
            var5 = var8 < var1;
case 101:
            var1 = var3 == var10;
            var8 = undefined;
            if(var1) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var1 = var10.data;
            var8 = var1.interactionType;
case 103:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.InteractionTypes;
            var1 = var1.APPLICATION_COMMAND;
            var8 = var8 === var1;
            var1 = var6.isCommandType;
            var1 = var1.bind(var6)();
            if(!var8) { _fun0010_ip = 18; continue _fun0010 }
case 48:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 12;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.InteractionState;
            var11 = var11.QUEUED;
            if(!(var9 !== var11)) { _fun0010_ip = 105; continue _fun0010 }
case 18:
            if(!var1) { _fun0010_ip = 106; continue _fun0010 }
case 107:
            var12 = var6.state;
            var11 = _closure1_slot8;
            var11 = var11.SENDING;
            if(!(var12 === var11)) { _fun0010_ip = 106; continue _fun0010 }
case 108:
            if(!(var3 == var10)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            if(!var8) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 12;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.InteractionState;
            var8 = var8.CREATED;
            if(!(var9 !== var8)) { _fun0010_ip = 111; continue _fun0010 }
case 109:
            var9 = var6.hasFlag;
            var8 = _closure1_slot9;
            var8 = var8.LOADING;
            var8 = var9.bind(var6)(var8);
            if(!var8) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            if(!var7) { _fun0010_ip = 111; continue _fun0010 }
case 112:
            var8 = var6.interaction;
            if(!(var3 != var8)) { _fun0010_ip = 114; continue _fun0010 }
case 115:
            var9 = var6.hasFlag;
            var8 = _closure1_slot9;
            var8 = var8.LOADING;
            var8 = var9.bind(var6)(var8);
            if(!var8) { _fun0010_ip = 114; continue _fun0010 }
case 116:
            if(var7) { _fun0010_ip = 117; continue _fun0010 }
case 114:
            var7 = var6.interaction;
            if(!(var3 != var7)) { _fun0010_ip = 118; continue _fun0010 }
case 119:
            var8 = var6.hasFlag;
            var7 = _closure1_slot9;
            var7 = var7.LOADING;
            var7 = var8.bind(var6)(var7);
            if(var7) { _fun0010_ip = 118; continue _fun0010 }
case 120:
            if(var5) { _fun0010_ip = 117; continue _fun0010 }
case 118:
            if(!var1) { _fun0010_ip = 121; continue _fun0010 }
case 122:
            var5 = var6.state;
            var1 = _closure1_slot8;
            var1 = var1.SEND_FAILED;
            if(!(var5 !== var1)) { _fun0010_ip = 123; continue _fun0010 }
case 121:
            var1 = var6.interaction;
            var3 = var3 != var1;
            var1 = undefined;
            if(!var3) { _fun0010_ip = 124; continue _fun0010 }
case 125:
            var5 = var6.hasFlag;
            var3 = _closure1_slot9;
            var3 = var3.EPHEMERAL;
            var3 = var5.bind(var6)(var3);
            var1 = undefined;
            if(!var3) { _fun0010_ip = 124; continue _fun0010 }
case 126:
            var3 = _closure1_slot10;
            var1 = var3.EPHEMERAL_SUCCESS;
case 124:
            _fun0010_ip = 127; continue _fun0010;
case 123:
            var3 = _closure1_slot10;
            var1 = var3.FAILED;
case 127:
            _fun0010_ip = 128; continue _fun0010;
case 117:
            var3 = _closure1_slot10;
            var1 = var3.TIMED_OUT;
case 128:
            _fun0010_ip = 94; continue _fun0010;
case 111:
            var3 = _closure1_slot10;
            var1 = var3.CREATED;
case 94:
            _fun0010_ip = 129; continue _fun0010;
case 105:
            var2 = _closure1_slot10;
            var1 = var2.SENDING;
case 129:
            return var1;
        }
    };
    var3['getInteractionStatusViewState'] = var6;
    var2 = function canRetryInteractionData(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var11 = var1.options;
            var3 = null;
            var2 = var3 == var11;
            var6 = undefined;
            var1 = undefined;
            if(var2) { _fun0011_ip = 51; continue _fun0011 }
case 130:
            var1 = var11.length;
case 51:
            var10 = 1;
            var2 = var11;
            if(!(var10 === var1)) { _fun0011_ip = 131; continue _fun0011 }
case 39:
            var9 = 0;
            var1 = var11[var9];
            var4 = var1.type;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            var5 = var11;
            if(!(var4 !== var1)) { _fun0011_ip = 132; continue _fun0011 }
case 133:
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
            if(!(var4 === var1)) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var1 = var5[var9];
            var11 = var1.options;
            var4 = var3 == var11;
            var1 = undefined;
            if(var4) { _fun0011_ip = 134; continue _fun0011 }
case 103:
            var1 = var11.length;
case 134:
            var2 = var11;
            if(!(var10 === var1)) { _fun0011_ip = 131; continue _fun0011 }
case 135:
            var1 = var11[var9];
            var4 = var1.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var12.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            var5 = var11;
            if(var4 === var1) { _fun0011_ip = 132; continue _fun0011 }
case 136:
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
            if(var4 === var1) { _fun0011_ip = 132; continue _fun0011 }
case 131:
            var1 = _closure1_slot11;
            if(!(var3 == var2)) { _fun0011_ip = 110; continue _fun0011 }
case 137:
            var2 = new Array(0);
case 110:
            var4 = var1.bind(var6)(var2);
            var2 = var4.bind(var6)();
            var1 = var2.done;
            var3 = 7;
            if(var1) { _fun0011_ip = 138; continue _fun0011 }
case 139:
            var1 = var2.value;
            var7 = var1.type;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var8.bind(var6)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.ATTACHMENT;
            if(!(var7 !== var1)) { _fun0011_ip = 140; continue _fun0011 }
case 113:
            var7 = var4.bind(var6)();
            var1 = var7.done;
            var2 = var7;
            if(var1) { _fun0011_ip = 138; continue _fun0011 }
case 141:
            _fun0011_ip = 139; continue _fun0011;
case 140:
            var1 = false;
            return var1;
case 138:
            var1 = true;
            return var1;
        }
    };
    var3['canRetryInteractionData'] = var2;
    var2 = 14;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.interactionCallbackErrorReason;
    var3['interactionCallbackErrorReason'] = var2;
    return var1;
})();