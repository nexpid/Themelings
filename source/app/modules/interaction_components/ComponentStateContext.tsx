// app/modules/interaction_components/ComponentStateContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function getApplicationWidgetContainerId(arg1) {
        var1 = arg1;
        var3 = var1.applicationId;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'app-widget-';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function useComponentValidatorState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var8;
            var6 = _closure1_slot4;
            var3 = var6.useContext;
            var2 = _closure1_slot16;
            var3 = var3.bind(var6)(var2);
            var _closure2_slot2 = var3;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var5;
            var6[1] = var3;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var1 = var4[var1];
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var6 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var1 = var1.modal;
                    var2 = null;
                    var1 = var2 != var1;
                    var5 = 'message';
                    if(!var1) { _fun0002_ip = 61; continue _fun0002 }
 57:
                    var5 = 'modal';
 61:
                    var1 = arg1;
                    var1 = var7.bind(var8)(var6, var1, var5);
                    var _closure3_slot0 = var1;
                    var5 = _closure2_slot2;
                    var5 = var5.setValidationErrors;
                    if(!(var2 != var5)) { _fun0002_ip = 109; continue _fun0002 }
 89:
                    var5 = _closure2_slot2;
                    var4 = var5.setValidationErrors;
                    var3 = function(arg1) {
                        var1 = {};
                        var4 = arg1;
                        var5 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var2 = _closure2_slot0;
                        var3 = var2.id;
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
 109:
                    var1 = var2 == var1;
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var2, var6);
            var _closure2_slot3 = var2;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var9 = var3.validators;
            var4 = new Array(4);
            var4[0] = var9;
            var4[1] = var2;
            var4[2] = var8;
            var8 = var5.id;
            var4[3] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = function currentValidate() {
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var _closure3_slot0 = var4;
                    var2 = _closure2_slot2;
                    var3 = var2.validators;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 40; continue _fun0003 }
 30:
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
 40:
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure2_slot2;
                            var3 = var1.validators;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 36; continue _fun0004 }
 19:
                            var2 = var3.delete;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
 36:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var4);
            var1 = {};
            var6 = var3.validationErrors;
            var3 = null;
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 157; continue _fun0001 }
 148:
            var5 = var5.id;
            var4 = var6[var5];
 157:
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 169; continue _fun0001 }
 166:
            var3 = var4;
 169:
            var1['error'] = var3;
            var1['validate'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function useComponentStateForMessage(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var14 = arg1;
            var1 = arg2;
            var7 = arg3;
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var7;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var9 = var5[var2];
            var6 = undefined;
            var12 = var4.bind(var6)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var4 = _closure1_slot11;
                var3 = var4.getInteractionComponentState;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var2 = var5[var2];
            var11 = var4.bind(var6)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var4 = new Array(1);
            var4[0] = var14;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getInteraction;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var10.bind(var11)(var5, var2, var4);
            var4 = _closure1_slot15;
            var2 = var14.channel_id;
            var4 = var4.bind(var6)(var2);
            if(var4) { _fun0005_ip = 138; continue _fun0005 }
 135:
            var4 = var1;
 138:
            var1 = _closure1_slot18;
            var1 = var1.bind(var6)(var7, var9);
            var2 = var1.error;
            var12 = var1.validate;
            var _closure2_slot2 = var12;
            var13 = var14.applicationId;
            var1 = null;
            if(!(var1 == var13)) { _fun0005_ip = 185; continue _fun0005 }
 174:
            var1 = var14.author;
            var13 = var1.id;
 185:
            var _closure2_slot3 = var13;
            var1 = {};
            var1['state'] = var9;
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var15 = var14.channel_id;
            var9 = new Array(8);
            var9[0] = var15;
            var15 = var14.flags;
            var9[1] = var15;
            var14 = var14.id;
            var9[2] = var14;
            var14 = var7.customId;
            var9[3] = var14;
            var14 = var7.type;
            var9[4] = var14;
            var14 = var7.id;
            var9[5] = var14;
            var9[6] = var13;
            var9[7] = var12;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot2;
                    var3 = undefined;
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0006_ip = 24; continue _fun0006 }
 20:
                    var1 = false;
                    return var1;
 24:
                    var7 = _closure1_slot7;
                    var5 = var7.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.channel_id;
                    var5 = var5.bind(var7)(var2);
                    var8 = null;
                    var2 = var8 != var5;
                    if(!var2) { _fun0006_ip = 73; continue _fun0006 }
 59:
                    var7 = _closure2_slot1;
                    var7 = var7.customId;
                    var2 = var8 != var7;
 73:
                    if(!var2) { _fun0006_ip = 201; continue _fun0006 }
 79:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.executeMessageComponentInteraction;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var8 = var7.type;
                    var1['componentType'] = var8;
                    var8 = _closure2_slot0;
                    var9 = var8.id;
                    var1['messageId'] = var9;
                    var8 = var8.flags;
                    var1['messageFlags'] = var8;
                    var8 = var7.customId;
                    var1['customId'] = var8;
                    var7 = var7.id;
                    var1['componentId'] = var7;
                    var6 = _closure2_slot3;
                    var1['applicationId'] = var6;
                    var6 = var5.id;
                    var1['channelId'] = var6;
                    var5 = var5.guild_id;
                    var1['guildId'] = var5;
                    var1['localState'] = var4;
                    var1 = var2.bind(var3)(var1);
 201:
                    var1 = true;
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var9);
            var1['executeStateUpdate'] = var8;
            var8 = var4;
            if(!var8) { _fun0005_ip = 302; continue _fun0005 }
 293:
            var9 = _closure1_slot13;
            var8 = var9.bind(var6)(var7);
 302:
            var1['isDisabled'] = var8;
            var3 = _closure1_slot14;
            var3 = var3.bind(var6)(var5, var7, var4);
            var1['visualState'] = var3;
            var1['error'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function useComponentStateForModal(arg1, arg2, arg3) {
        var9 = arg1;
        var12 = arg2;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var12;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 13;
        var2 = var6[var2];
        var4 = undefined;
        var10 = var5.bind(var4)(var2);
        var7 = var10.useStateFromStores;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var4 = _closure1_slot11;
            var3 = var4.getInteractionComponentState;
            var2 = _closure2_slot0;
            var2 = var2.customId;
            var1 = _closure2_slot1;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var7 = var7.bind(var10)(var3, var2);
        var2 = _closure1_slot18;
        var3 = var2.bind(var4)(var12, var7);
        var2 = var3.error;
        var3 = var3.validate;
        var _closure2_slot3 = var3;
        var11 = _closure1_slot4;
        var10 = var11.useCallback;
        var13 = var9.customId;
        var9 = new Array(3);
        var9[0] = var13;
        var12 = var12.id;
        var9[1] = var12;
        var9[2] = var3;
        var3 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0007_ip = 110; continue _fun0007 }
 12:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 18;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var2);
                var6 = var7.dispatch;
                var5 = {};
                var2 = 'SET_INTERACTION_COMPONENT_STATE';
                var5['type'] = var2;
                var8 = _closure2_slot0;
                var8 = var8.customId;
                var5['rootContainerId'] = var8;
                var8 = _closure2_slot1;
                var8 = var8.id;
                var5['componentId'] = var8;
                var5['state'] = var4;
                var5 = var6.bind(var7)(var5);
                var2 = _closure2_slot3;
                var2 = var2.bind(var3)(var4);
                var2 = !var2;
                var1 = !var2;
 110:
                return var1;
            }
        };
        var3 = var10.bind(var11)(var3, var9);
        var _closure2_slot4 = var3;
        var9 = _closure1_slot1;
        var8 = 19;
        var8 = var6[var8];
        var8 = var9.bind(var4)(var8);
        var1 = function() {
            var3 = _closure2_slot4;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var8.bind(var4)(var1);
        var1 = {};
        var1['state'] = var7;
        var1['executeStateUpdate'] = var3;
        var3 = false;
        var1['isDisabled'] = var3;
        var3 = 11;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.ActionComponentState;
        var3 = var3.NORMAL;
        var1['visualState'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function getParentsNotSupported(arg1) {
        var2 = 'ApplicationWidget';
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = global;
            var3 = var1.Error;
            var5 = _closure2_slot0;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = '';
            var1 = ' does not support parents';
            var7 = var4.bind(var2)(var5, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var6 = var8[var4];
    var4 = metroImportAll;
    var10 = var4.bind(var1)(var6);
    var _closure1_slot4 = var10;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = function isInteractionComponent(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var6 = var2.type;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 10;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.BUTTON;
            if(!(var3 !== var6)) { _fun0008_ip = 296; continue _fun0008 }
 52:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var3 !== var6)) { _fun0008_ip = 292; continue _fun0008 }
 88:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            if(!(var3 !== var6)) { _fun0008_ip = 292; continue _fun0008 }
 124:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            if(!(var3 !== var6)) { _fun0008_ip = 292; continue _fun0008 }
 160:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            if(!(var3 !== var6)) { _fun0008_ip = 292; continue _fun0008 }
 193:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var6)) { _fun0008_ip = 292; continue _fun0008 }
 226:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ACTION_ROW;
            if(!(var3 !== var6)) { _fun0008_ip = 288; continue _fun0008 }
 259:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_INPUT;
 288:
            var3 = false;
            return var3;
 292:
            var3 = true;
            return var3;
 296:
            var2 = var2.style;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ButtonStyle;
            var1 = var1.LINK;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var5 = function getActionComponentState(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0009_ip = 17; continue _fun0009 }
 15:
            var3 = false;
 17:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 11;
            var1 = var1[var5];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ActionComponentState;
            var6 = var1.NORMAL;
            var1 = null;
            var9 = var1 != var8;
            if(!var9) { _fun0009_ip = 102; continue _fun0009 }
 61:
            var10 = var8.state;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.InteractionState;
            var1 = var1.FAILED;
            var9 = var10 !== var1;
 102:
            var1 = var6;
            if(!var9) { _fun0009_ip = 253; continue _fun0009 }
 111:
            var9 = var8.data;
            var10 = var9.interactionType;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 10;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.InteractionTypes;
            var9 = var9.MESSAGE_COMPONENT;
            if(!(var10 === var9)) { _fun0009_ip = 178; continue _fun0009 }
 158:
            var8 = var8.data;
            var9 = var8.componentId;
            var8 = var7.id;
            if(!(var9 !== var8)) { _fun0009_ip = 221; continue _fun0009 }
 178:
            var8 = _closure1_slot13;
            var8 = var8.bind(var4)(var7);
            if(!var8) { _fun0009_ip = 219; continue _fun0009 }
 190:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var5];
            var8 = var9.bind(var4)(var8);
            var8 = var8.ActionComponentState;
            var6 = var8.DISABLED;
 219:
            _fun0009_ip = 250; continue _fun0009;
 221:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var5];
            var8 = var9.bind(var4)(var8);
            var8 = var8.ActionComponentState;
            var6 = var8.LOADING;
 250:
            var1 = var6;
 253:
            if(!var3) { _fun0009_ip = 265; continue _fun0009 }
 256:
            var6 = _closure1_slot13;
            var3 = var6.bind(var4)(var7);
 265:
            if(!var3) { _fun0009_ip = 297; continue _fun0009 }
 268:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ActionComponentState;
            var1 = var2.DISABLED;
 297:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function useShouldDisableInteractiveComponents(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = _closure1_slot7;
            var3 = var5.getChannel;
            var1 = arg1;
            var6 = var3.bind(var5)(var1);
            var _closure2_slot0 = var6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 13;
            var1 = var8[var5];
            var9 = undefined;
            var12 = var3.bind(var9)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var1;
            var7 = new Array(1);
            var7[0] = var6;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    if(var4) { _fun0011_ip = 27; continue _fun0011 }
 18:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
 27:
                    var1 = var3 == var1;
                    if(var1) { _fun0011_ip = 61; continue _fun0011 }
 34:
                    var4 = _closure1_slot9;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var1 = var3.bind(var4)(var2);
 61:
                    return var1;
                }
            };
            var1 = var11.bind(var12)(var10, var1, var7);
            var7 = var8[var5];
            var13 = var3.bind(var9)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var7;
            var10 = new Array(1);
            var10[0] = var6;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    if(var4) { _fun0012_ip = 27; continue _fun0012 }
 18:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
 27:
                    var1 = var3 != var1;
                    if(!var1) { _fun0012_ip = 61; continue _fun0012 }
 34:
                    var4 = _closure1_slot6;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var1 = var3.bind(var4)(var2);
 61:
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var11, var7, var10);
            var5 = var8[var5];
            var11 = var3.bind(var9)(var5);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot8;
            var5 = new Array(2);
            var5[0] = var12;
            var12 = _closure1_slot10;
            var5[1] = var12;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var2 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var2;
                    var2 = undefined;
                    if(var6) { _fun0013_ip = 43; continue _fun0013 }
 34:
                    var6 = _closure2_slot0;
                    var2 = var6.guild_id;
 43:
                    var6 = var1 != var2;
                    var2 = null;
                    if(!var6) { _fun0013_ip = 122; continue _fun0013 }
 52:
                    var6 = var1 != var4;
                    var2 = null;
                    if(!var6) { _fun0013_ip = 122; continue _fun0013 }
 61:
                    var7 = _closure1_slot8;
                    var6 = var7.getMember;
                    var5 = _closure2_slot0;
                    var9 = var1 == var5;
                    var5 = undefined;
                    if(var9) { _fun0013_ip = 93; continue _fun0013 }
 84:
                    var8 = _closure2_slot0;
                    var5 = var8.guild_id;
 93:
                    var4 = var4.id;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = var1 == var4;
                    var3 = undefined;
                    if(var5) { _fun0013_ip = 119; continue _fun0013 }
 113:
                    var3 = var4.isPending;
 119:
                    var2 = var3;
 122:
                    var1 = var1 != var2;
                    if(!var1) { _fun0013_ip = 132; continue _fun0013 }
 129:
                    var1 = var2;
 132:
                    return var1;
                }
            };
            var5 = var10.bind(var11)(var5, var2);
            var2 = 14;
            var2 = var8[var2];
            var10 = var3.bind(var9)(var2);
            var8 = var10.useCurrentUserCommunicationDisabled;
            var3 = null;
            var11 = var3 == var6;
            var2 = undefined;
            if(var11) { _fun0010_ip = 210; continue _fun0010 }
 205:
            var2 = var6.guild_id;
 210:
            var10 = var8.bind(var10)(var2);
            var8 = _closure1_slot3;
            var2 = 2;
            var8 = var8.bind(var9)(var10, var2);
            var2 = 1;
            var2 = var8[var2];
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 15;
            var4 = var10[var4];
            var8 = var8.bind(var9)(var4);
            var4 = var8.useCanUnarchiveThread;
            var4 = var4.bind(var8)(var6);
            var1 = !var1;
            if(var1) { _fun0010_ip = 275; continue _fun0010 }
 272:
            var1 = var7;
 275:
            if(var1) { _fun0010_ip = 281; continue _fun0010 }
 278:
            var1 = var5;
 281:
            if(var1) { _fun0010_ip = 304; continue _fun0010 }
 284:
            var5 = var3 != var6;
            if(!var5) { _fun0010_ip = 301; continue _fun0010 }
 291:
            var7 = var6.isLockedThread;
            var5 = var7.bind(var6)();
 301:
            var1 = var5;
 304:
            if(var1) { _fun0010_ip = 333; continue _fun0010 }
 307:
            var3 = var3 != var6;
            if(!var3) { _fun0010_ip = 324; continue _fun0010 }
 314:
            var5 = var6.isArchivedThread;
            var3 = var5.bind(var6)();
 324:
            if(!var3) { _fun0010_ip = 330; continue _fun0010 }
 327:
            var3 = !var4;
 330:
            var1 = var3;
 333:
            if(var1) { _fun0010_ip = 339; continue _fun0010 }
 336:
            var1 = var2;
 339:
            var1 = !var1;
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var9 = var10.createContext;
    var6 = null;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot16 = var6;
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/interaction_components/ComponentStateContext.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getActionComponentState'] = var5;
    var3['useShouldDisableInteractiveComponents'] = var4;
    var4 = function ComponentStateContextProvider(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var14 = var1.message;
            var _closure2_slot0 = var14;
            var13 = var1.modal;
            var _closure2_slot1 = var13;
            var12 = var1.applicationWidget;
            var _closure2_slot2 = var12;
            var10 = var1.validators;
            var _closure2_slot3 = var10;
            var9 = var1.validationErrors;
            var _closure2_slot4 = var9;
            var8 = var1.setValidationErrors;
            var _closure2_slot5 = var8;
            var11 = var1.shouldDisableInteractiveComponents;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0014_ip = 83; continue _fun0014 }
 81:
            var11 = false;
 83:
            var _closure2_slot6 = var11;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(7);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var9;
            var3[6] = var8;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot0;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0015_ip = 257; continue _fun0015 }
 18:
                    var1 = _closure2_slot1;
                    if(!(var8 == var1)) { _fun0015_ip = 164; continue _fun0015 }
 29:
                    var1 = _closure2_slot2;
                    if(!(var8 == var1)) { _fun0015_ip = 73; continue _fun0015 }
 37:
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {constructor: {value: var5}});
                    var12 = 'ComponentStateContextProvider requires at least one of message, modal, or applicationWidget';
                    var13 = var4;
                    var1 = new var13[var5](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var4;
                    throw var1;
 73:
                    var1 = {};
                    var6 = 'ApplicationWidget';
                    var _closure3_slot0 = var6;
                    var4 = function() {
                        var1 = global;
                        var3 = var1.Error;
                        var5 = _closure3_slot0;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var2 = '';
                        var1 = ' does not support state';
                        var7 = var4.bind(var2)(var5, var1);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var8 = var2;
                        var1 = new var8[var3](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    };
                    var1['useComponentState'] = var4;
                    var9 = _closure1_slot17;
                    var7 = _closure2_slot2;
                    var5 = undefined;
                    var9 = var9.bind(var5)(var7);
                    var1['containerId'] = var9;
                    var1['applicationWidget'] = var7;
                    var7 = _closure2_slot3;
                    var1['validators'] = var7;
                    var7 = _closure2_slot4;
                    var1['validationErrors'] = var7;
                    var7 = _closure2_slot5;
                    var1['setValidationErrors'] = var7;
                    var4 = _closure1_slot21;
                    var4 = var4.bind(var5)(var6);
                    var1['getParents'] = var4;
                    return var1;
 164:
                    var1 = {};
                    var6 = _closure1_slot20;
                    var5 = var6.bind;
                    var4 = _closure2_slot1;
                    var5 = var5.bind(var6)(var8, var4);
                    var1['useComponentState'] = var5;
                    var5 = var4.channelId;
                    var1['channelId'] = var5;
                    var5 = var4.customId;
                    var1['containerId'] = var5;
                    var1['modal'] = var4;
                    var4 = _closure2_slot3;
                    var1['validators'] = var4;
                    var4 = _closure2_slot4;
                    var1['validationErrors'] = var4;
                    var4 = _closure2_slot5;
                    var1['setValidationErrors'] = var4;
                    var4 = function getParents(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getParents;
                        var1 = _closure2_slot1;
                        var2 = var1.components;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['getParents'] = var4;
                    return var1;
 257:
                    var1 = {};
                    var7 = _closure1_slot19;
                    var6 = var7.bind;
                    var4 = _closure2_slot0;
                    var5 = _closure2_slot6;
                    var5 = var6.bind(var7)(var8, var4, var5);
                    var1['useComponentState'] = var5;
                    var5 = var4.channel_id;
                    var1['channelId'] = var5;
                    var5 = var4.id;
                    var1['containerId'] = var5;
                    var1['message'] = var4;
                    var3 = _closure2_slot3;
                    var1['validators'] = var3;
                    var2 = function getParents(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getParents;
                        var1 = _closure2_slot0;
                        var2 = var1.components;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['getParents'] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot12;
            var1 = _closure1_slot16;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ComponentStateContextProvider'] = var4;
    var4 = function useComponentState(arg1, arg2) {
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = _closure1_slot16;
        var4 = var2.bind(var3)(var1);
        var3 = var4.useComponentState;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useComponentState'] = var4;
    var4 = function useComponentStateContext() {
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = _closure1_slot16;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useComponentStateContext'] = var4;
    var4 = function useComponentContainerId() {
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = _closure1_slot16;
        var1 = var2.bind(var3)(var1);
        var1 = var1.containerId;
        return var1;
    };
    var3['useComponentContainerId'] = var4;
    var2 = function useComponentError(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.useContext;
            var1 = _closure1_slot16;
            var1 = var2.bind(var3)(var1);
            var4 = var1.validationErrors;
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0016_ip = 51; continue _fun0016 }
 39:
            var3 = arg1;
            var3 = var3.id;
            var2 = var4[var3];
 51:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0016_ip = 63; continue _fun0016 }
 60:
            var1 = var2;
 63:
            return var1;
        }
    };
    var3['useComponentError'] = var2;
    return var1;
})();