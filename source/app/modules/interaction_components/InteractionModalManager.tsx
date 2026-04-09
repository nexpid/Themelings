// app/modules/interaction_components/InteractionModalManager.tsx
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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
    var1 = function _handleInteractionModalCreate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 11;
                    var5 = var2[var3];
                    var3 = undefined;
                    var7 = var7.bind(var3)(var5);
                    var5 = 10;
                    var5 = var2[var5];
                    var2 = var2.paths;
                    var2 = var7.bind(var3)(var5, var2);
                    SaveGenerator(address=60);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = var2.openInteractionModal;
                    var5 = var5.bind(var3)(var6);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 12;
                    var5 = var8[var5];
                    var10 = var7.bind(var3)(var5);
                    var9 = var10.track;
                    var5 = _closure1_slot11;
                    var7 = var5.OPEN_MODAL;
                    var5 = {};
                    var11 = 'interaction_modal';
                    var5['type'] = var11;
                    var11 = var6.application;
                    var11 = var11.id;
                    var5['application_id'] = var11;
                    var5 = var9.bind(var10)(var7, var5);
                    var7 = _closure1_slot0;
                    var5 = 13;
                    var5 = var8[var5];
                    var5 = var7.bind(var3)(var5);
                    var7 = var5.AndroidPullModeRenderingExperiment;
                    var5 = var7.getCurrentConfig;
                    var5 = var5.bind(var7)();
                    var7 = var5.treatmentId;
                    var5 = 2;
                    if(!(var7 >= var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = function getInteractionModalDebugData(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var6 = arg1;
                            var3 = _closure1_slot10;
                            var2 = var3.getInteractionDebugContext;
                            var1 = var6.nonce;
                            var7 = var2.bind(var3)(var1);
                            var4 = null;
                            var1 = var4 == var7;
                            var2 = undefined;
                            var3 = undefined;
                            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var1 = var7.interaction;
                            var3 = var1.data;
case 14:
                            var9 = _closure1_slot9;
                            var8 = var9.getApplication;
                            var1 = var6.application;
                            var1 = var1.id;
                            var8 = var8.bind(var9)(var1);
                            var1 = {};
                            var9 = var6.id;
                            var1['interactionId'] = var9;
                            var9 = var6.nonce;
                            var1['nonce'] = var9;
                            var9 = var6.channelId;
                            var1['channelId'] = var9;
                            var9 = var6.application;
                            var9 = var9.id;
                            var1['applicationId'] = var9;
                            var8 = var4 != var8;
                            var1['hasApplicationRecord'] = var8;
                            var8 = var6.application;
                            var8 = var8.bot;
                            var8 = var4 != var8;
                            var1['hasActionApplicationBot'] = var8;
                            var8 = var6.components;
                            var8 = var8.length;
                            var1['componentCount'] = var8;
                            var9 = var6.components;
                            var8 = var9.map;
                            var6 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.type;
                                return var1;
                            };
                            var6 = var8.bind(var9)(var6);
                            var1['componentTypes'] = var6;
                            var8 = var4 == var3;
                            var6 = undefined;
                            if(var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var6 = var3.interactionType;
case 16:
                            var1['sourceInteractionType'] = var6;
                            var8 = var4 == var3;
                            var6 = undefined;
                            if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                            var6 = var3.applicationId;
case 18:
                            var1['sourceApplicationId'] = var6;
                            var8 = var4 == var7;
                            var6 = undefined;
                            if(var8) { _fun0003_ip = 20; continue _fun0003 }
case 10:
                            var6 = var7.messageId;
case 20:
                            var1['sourceMessageId'] = var6;
                            var6 = var4 == var3;
                            var9 = undefined;
                            if(var6) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                            var9 = var3.interactionType;
case 21:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var8 = 9;
                            var6 = var6[var8];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.InteractionTypes;
                            var7 = var6.MESSAGE_COMPONENT;
                            var6 = undefined;
                            if(!(var9 === var7)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var7 = var3.customId;
                            var6 = var4 != var7;
case 23:
                            var1['hasSourceCustomId'] = var6;
                            var7 = var4 == var3;
                            var6 = undefined;
                            if(var7) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                            var6 = var3.interactionType;
case 25:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var5 = var7.bind(var2)(var5);
                            var5 = var5.InteractionTypes;
                            var5 = var5.MESSAGE_COMPONENT;
                            var2 = undefined;
                            if(!(var6 === var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                            var3 = var3.componentId;
                            var2 = var4 != var3;
case 27:
                            var1['hasSourceComponentId'] = var2;
                            return var1;
                        }
                    };
                    var7 = var5.bind(var3)(var6);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.addBreadcrumb;
                    var4 = {'category': 'interaction_modal', 'message': 'Interaction modal opened'};
                    var4['data'] = var7;
                    var4 = var5.bind(var6)(var4);
case 12:
                    return var3;
case 10:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function InteractionModalManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var2 = undefined;
                var8 = var8.bind(var2)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var2)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var2)();
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 31; continue _fun0004;
case 29:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var2)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 31:
                var1 = var4.bind(var2)(var5, var1);
                var _closure3_slot0 = var1;
                var1['iframeModalOpenTimeMs'] = var2;
                var2 = {};
                var4 = function INTERACTION_MODAL_CREATE(arg1) {
                    var3 = function handleInteractionModalCreate() {
                        var1 = undefined;
                        var4 = _closure1_slot13;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    var2 = !var2;
                    return var1;
                };
                var2['INTERACTION_MODAL_CREATE'] = var4;
                var4 = function INTERACTION_IFRAME_MODAL_CREATE(arg1) {
                    var6 = arg1;
                    var2 = _closure3_slot0;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2['iframeModalOpenTimeMs'] = var1;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var3 = var5[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.bind(var1)(var6);
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var7 = 'interaction_iframe_modal';
                    var2['type'] = var7;
                    var6 = var6.application;
                    var6 = var6.id;
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2['INTERACTION_IFRAME_MODAL_CREATE'] = var4;
                var4 = function INTERACTION_IFRAME_MODAL_CLOSE(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.iframeModalOpenTimeMs;
                        var1 = null;
                        var3 = var1 != var4;
                        var1 = undefined;
                        var7 = undefined;
                        if(!var3) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                        var3 = global;
                        var5 = var3.Date;
                        var3 = var5.now;
                        var3 = var3.bind(var5)();
                        var7 = var3 - var4;
case 32:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot11;
                        var4 = var3.MODAL_DISMISSED;
                        var3 = {};
                        var8 = 'interaction_iframe_modal';
                        var3['type'] = var8;
                        var8 = arg1;
                        var8 = var8.applicationId;
                        var3['application_id'] = var8;
                        var3['duration_open_ms'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['iframeModalOpenTimeMs'] = var1;
                        return var1;
                    }
                };
                var2['INTERACTION_IFRAME_MODAL_CLOSE'] = var4;
                var3 = function RPC_APP_DISCONNECTED(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.application;
                        var4 = _closure1_slot10;
                        var3 = var4.getIFrameModalApplicationId;
                        var4 = var3.bind(var4)();
                        var5 = _closure1_slot10;
                        var3 = var5.getIFrameModalKey;
                        var3 = var3.bind(var5)();
                        var2 = var2.id;
                        var2 = var2 === var4;
                        if(!var2) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                        var5 = null;
                        var2 = var5 != var4;
case 34:
                        if(!var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.bind(var2)(var4, var3);
case 36:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['RPC_APP_DISCONNECTED'] = var3;
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
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/InteractionModalManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 'interaction_iframe_modal';
    var3['INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE'] = var2;
    return var1;
})();