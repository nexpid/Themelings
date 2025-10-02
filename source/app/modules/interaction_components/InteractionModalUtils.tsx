// app/modules/interaction_components/InteractionModalUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function useApplicationInfo(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var6 = var5.id;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = var5.icon;
        var2[1] = var6;
        var6 = var5.name;
        var2[2] = var6;
        var5 = var5.bot;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var8 = var1.bind(var2)();
                var6 = null;
                var1 = var6 != var8;
                var4 = undefined;
                var5 = undefined;
                if(!var1) { _fun0001_ip = 83; continue _fun0001 }
 30:
                var2 = _closure2_slot0;
                var2 = var2.bot;
                var2 = var6 != var2;
                var5 = undefined;
                if(!var2) { _fun0001_ip = 83; continue _fun0001 }
 52:
                var7 = _closure1_slot9;
                var2 = var7.getMember;
                var1 = _closure2_slot0;
                var1 = var1.bot;
                var1 = var1.id;
                var5 = var2.bind(var7)(var8, var1);
 83:
                var1 = {};
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 14;
                var2 = var8[var2];
                var9 = var7.bind(var4)(var2);
                var8 = var9.getApplicationIconURL;
                var7 = {};
                var10 = _closure2_slot0;
                var11 = var10.id;
                var7['id'] = var11;
                var10 = var10.icon;
                var7['icon'] = var10;
                var10 = true;
                var7['botIconFirst'] = var10;
                var11 = var6 != var5;
                var10 = undefined;
                if(!var11) { _fun0001_ip = 164; continue _fun0001 }
 154:
                var11 = _closure2_slot0;
                var10 = var11.bot;
 164:
                var7['bot'] = var10;
                var7 = var8.bind(var9)(var7);
                var1['applicationIconURL'] = var7;
                if(!(var6 != var5)) { _fun0001_ip = 197; continue _fun0001 }
 183:
                var5 = _closure2_slot0;
                var5 = var5.bot;
                if(!(var6 == var5)) { _fun0001_ip = 208; continue _fun0001 }
 197:
                var5 = _closure2_slot0;
                var5 = var5.name;
                _fun0001_ip = 223; continue _fun0001;
 208:
                var6 = _closure2_slot0;
                var6 = var6.bot;
                var5 = var6.username;
 223:
                var1['applicationName'] = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['applicationBaseUrl'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function getUploadsForModal(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot11;
        var4 = var5.getUploads;
        var2 = _closure1_slot8;
        var3 = var2.InteractionModal;
        var2 = arg1;
        var3 = var4.bind(var5)(var2, var3);
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.deserializeComponentUploadId;
                var1 = arg1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                var3 = var3 == var1;
                if(var3) { _fun0002_ip = 59; continue _fun0002 }
 53:
                var2 = var1.containerId;
 59:
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var2 = function submitModal() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var2;
    var1 = function _submitModal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 346; continue _fun0003 }
 18:
                    var _closure4_slot0 = var4;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var11;
                    var3 = undefined;
                    var _closure4_slot3 = var3;
                    var _closure4_slot4 = var3;
                    var _closure4_slot5 = var3;
                    var _closure4_slot6 = var3;
                    var8 = var4.channelId;
                    var7 = _closure1_slot7;
                    var2 = var7.getChannel;
                    var7 = var2.bind(var7)(var8);
                    _closure4_slot3 = var7;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 23;
                    var2 = var10[var2];
                    var9 = var9.bind(var3)(var2);
                    var2 = null;
                    var7 = var2 != var7;
                    var2 = 'expected channel';
                    var2 = var9.bind(var3)(var7, var2);
                    var7 = _closure1_slot18;
                    var2 = var4.customId;
                    var9 = var7.bind(var3)(var8, var2);
                    var7 = var9.length;
                    var2 = 0;
                    var7 = var7 > var2;
                    var2 = undefined;
                    if(!var7) { _fun0003_ip = 172; continue _fun0003 }
 147:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 25;
                    var7 = var10[var7];
                    var7 = var8.bind(var3)(var7);
                    var2 = var7.bind(var3)(var9);
 172:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var7 = 26;
                    var7 = var15[var7];
                    var10 = var14.bind(var3)(var7);
                    var8 = var10.addQueued;
                    var7 = {};
                    var12 = {};
                    var13 = 13;
                    var13 = var15[var13];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.InteractionTypes;
                    var13 = var13.MODAL_SUBMIT;
                    var12['interactionType'] = var13;
                    var13 = var4.application;
                    var13 = var13.id;
                    var12['applicationId'] = var13;
                    var7['data'] = var12;
                    var7['preflight'] = var2;
                    var7 = var8.bind(var10)(var11, var7);
                    SaveGenerator(address=264);
 262:
                    return var2;
 264:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 343; continue _fun0003 }
 270:
                    var8 = var9.map;
                    var7 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAttachmentPayload;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    _closure4_slot4 = var7;
                    var8 = _closure1_slot16;
                    var7 = var4.customId;
                    var6 = var4.components;
                    var4 = {};
                    var4['uploads'] = var9;
                    var4 = var8.bind(var3)(var7, var6, var4);
                    _closure4_slot5 = var4;
                    var4 = function send() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = _closure4_slot1;
                            var1 = null;
                            var1 = var1 != var2;
                            if(!var1) { _fun0004_ip = 26; continue _fun0004 }
 16:
                            var2 = _closure4_slot1;
                            var1 = var2.aborted;
 26:
                            if(var1) { _fun0004_ip = 293; continue _fun0004 }
 32:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 28;
                            var1 = var10[var1];
                            var8 = undefined;
                            var1 = var9.bind(var8)(var1);
                            var3 = var1.HTTP;
                            var2 = var3.post;
                            var1 = {};
                            var5 = _closure1_slot15;
                            var5 = var5.INTERACTIONS;
                            var1['url'] = var5;
                            var5 = {};
                            var7 = 13;
                            var7 = var10[var7];
                            var7 = var9.bind(var8)(var7);
                            var7 = var7.InteractionTypes;
                            var7 = var7.MODAL_SUBMIT;
                            var5['type'] = var7;
                            var9 = _closure4_slot0;
                            var7 = var9.application;
                            var7 = var7.id;
                            var5['application_id'] = var7;
                            var7 = _closure4_slot3;
                            var7 = var7.id;
                            var5['channel_id'] = var7;
                            var7 = _closure4_slot3;
                            var7 = var7.guild_id;
                            var5['guild_id'] = var7;
                            var7 = {};
                            var10 = var9.id;
                            var7['id'] = var10;
                            var9 = var9.customId;
                            var7['custom_id'] = var9;
                            var9 = _closure4_slot5;
                            var7['components'] = var9;
                            var9 = _closure4_slot4;
                            var10 = var9.length;
                            var9 = 0;
                            var9 = var10 > var9;
                            if(!var9) { _fun0004_ip = 212; continue _fun0004 }
 208:
                            var8 = _closure4_slot4;
 212:
                            var7['attachments'] = var8;
                            var5['data'] = var7;
                            var7 = _closure1_slot6;
                            var6 = var7.getSessionId;
                            var6 = var6.bind(var7)();
                            var5['session_id'] = var6;
                            var6 = _closure4_slot2;
                            var5['nonce'] = var6;
                            var1['body'] = var5;
                            var4 = _closure4_slot1;
                            var1['signal'] = var4;
                            var4 = false;
                            var1['rejectWithError'] = var4;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.catch;
                            var1 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var1 = arg1;
                                    var3 = var1.status;
                                    var2 = 429;
                                    if(!(var2 !== var3)) { _fun0005_ip = 63; continue _fun0005 }
 18:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 26;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.setFailed;
                                    var2 = _closure4_slot2;
                                    var2 = var3.bind(var4)(var2);
                                    _fun0005_ip = 136; continue _fun0005;
 63:
                                    var2 = global;
                                    var4 = var2.setTimeout;
                                    var3 = _closure4_slot6;
                                    var1 = var1.body;
                                    var5 = var1.retry_after;
                                    var6 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 29;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var1 = var6.bind(var2)(var1);
                                    var1 = var1.Millis;
                                    var1 = var1.SECOND;
                                    var1 = var5 * var1;
                                    var1 = var4.bind(var2)(var3, var1);
 136:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
 293:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    _closure4_slot6 = var4;
                    var4 = var4.bind(var3)();
                    return var3;
 343:
                    return var2;
 346:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DraftType;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.InteractionModalState;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot15 = var5;
    var5 = function getData(arg1, arg2, arg3) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var4 = var3.type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 13;
                var1 = var1[var8];
                var6 = undefined;
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.ACTION_ROW;
                if(!(var1 !== var4)) { _fun0006_ip = 893; continue _fun0006 }
 54:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.TEXT_INPUT;
                if(!(var1 !== var4)) { _fun0006_ip = 805; continue _fun0006 }
 90:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.FILE_UPLOAD;
                if(!(var1 !== var4)) { _fun0006_ip = 678; continue _fun0006 }
 126:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.STRING_SELECT;
                if(!(var1 !== var4)) { _fun0006_ip = 590; continue _fun0006 }
 162:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.USER_SELECT;
                if(!(var1 !== var4)) { _fun0006_ip = 484; continue _fun0006 }
 198:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.ROLE_SELECT;
                if(!(var1 !== var4)) { _fun0006_ip = 484; continue _fun0006 }
 234:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.MENTIONABLE_SELECT;
                if(!(var1 !== var4)) { _fun0006_ip = 484; continue _fun0006 }
 270:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.CHANNEL_SELECT;
                if(!(var1 !== var4)) { _fun0006_ip = 484; continue _fun0006 }
 306:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.TEXT_DISPLAY;
                if(!(var1 !== var4)) { _fun0006_ip = 471; continue _fun0006 }
 342:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ComponentType;
                var1 = var1.LABEL;
                if(!(var1 !== var4)) { _fun0006_ip = 411; continue _fun0006 }
 375:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 23;
                var1 = var5[var1];
                var5 = var4.bind(var6)(var1);
                var4 = false;
                var1 = 'unreachable';
                var1 = var5.bind(var6)(var4, var1);
                return var6;
 411:
                var1 = {};
                var4 = var3.type;
                var1['type'] = var4;
                var9 = _closure1_slot16;
                var8 = _closure2_slot0;
                var10 = var3.component;
                var5 = new Array(1);
                var5[0] = var10;
                var4 = _closure2_slot1;
                var5 = var9.bind(var6)(var8, var5, var4);
                var4 = 0;
                var4 = var5[var4];
                var1['component'] = var4;
                return var1;
 471:
                var1 = {};
                var4 = var3.type;
                var1['type'] = var4;
                return var1;
 484:
                var8 = _closure1_slot14;
                var5 = var8.getInteractionComponentState;
                var4 = _closure2_slot0;
                var1 = var3.id;
                var5 = var5.bind(var8)(var4, var1);
                var1 = {};
                var4 = var3.type;
                var1['type'] = var4;
                var4 = var3.customId;
                var1['custom_id'] = var4;
                var4 = null;
                var8 = var4 == var5;
                var9 = undefined;
                if(var8) { _fun0006_ip = 550; continue _fun0006 }
 545:
                var9 = var5.type;
 550:
                var8 = var3.type;
                var4 = null;
                if(!(var9 === var8)) { _fun0006_ip = 584; continue _fun0006 }
 561:
                var9 = var5.selectedOptions;
                var8 = var9.map;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.value;
                    return var1;
                };
                var4 = var8.bind(var9)(var5);
 584:
                var1['values'] = var4;
                return var1;
 590:
                var8 = _closure1_slot14;
                var5 = var8.getInteractionComponentState;
                var4 = _closure2_slot0;
                var1 = var3.id;
                var5 = var5.bind(var8)(var4, var1);
                var1 = {};
                var4 = var3.type;
                var1['type'] = var4;
                var4 = var3.customId;
                var1['custom_id'] = var4;
                var4 = null;
                var8 = var4 == var5;
                var9 = undefined;
                if(var8) { _fun0006_ip = 656; continue _fun0006 }
 651:
                var9 = var5.type;
 656:
                var8 = var3.type;
                var4 = null;
                if(!(var9 === var8)) { _fun0006_ip = 672; continue _fun0006 }
 667:
                var4 = var5.values;
 672:
                var1['values'] = var4;
                return var1;
 678:
                var8 = _closure1_slot14;
                var5 = var8.getInteractionComponentState;
                var4 = _closure2_slot0;
                var1 = var3.id;
                var1 = var5.bind(var8)(var4, var1);
                var4 = null;
                var5 = var4 == var1;
                var8 = undefined;
                if(var5) { _fun0006_ip = 722; continue _fun0006 }
 717:
                var8 = var1.type;
 722:
                var5 = var3.type;
                var9 = null;
                if(!(var8 === var5)) { _fun0006_ip = 739; continue _fun0006 }
 733:
                var9 = var1.uploadIds;
 739:
                var1 = {};
                var5 = var3.type;
                var1['type'] = var5;
                var5 = var3.customId;
                var1['custom_id'] = var5;
                var8 = var4 == var9;
                var5 = undefined;
                if(var8) { _fun0006_ip = 787; continue _fun0006 }
 770:
                var8 = var9.map;
                var7 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = _closure2_slot1;
                    var3 = var2.uploads;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var8.bind(var9)(var7);
 787:
                var7 = var4 != var5;
                var4 = null;
                if(!var7) { _fun0006_ip = 799; continue _fun0006 }
 796:
                var4 = var5;
 799:
                var1['values'] = var4;
                return var1;
 805:
                var7 = _closure1_slot14;
                var5 = var7.getInteractionComponentState;
                var4 = _closure2_slot0;
                var1 = var3.id;
                var5 = var5.bind(var7)(var4, var1);
                var1 = {};
                var4 = var3.type;
                var1['type'] = var4;
                var4 = var3.customId;
                var1['custom_id'] = var4;
                var4 = null;
                var7 = var4 == var5;
                var8 = undefined;
                if(var7) { _fun0006_ip = 871; continue _fun0006 }
 866:
                var8 = var5.type;
 871:
                var7 = var3.type;
                var4 = null;
                if(!(var8 === var7)) { _fun0006_ip = 887; continue _fun0006 }
 882:
                var4 = var5.value;
 887:
                var1['value'] = var4;
                return var1;
 893:
                var1 = {};
                var4 = var3.type;
                var1['type'] = var4;
                var5 = _closure1_slot16;
                var4 = _closure2_slot0;
                var3 = var3.components;
                var2 = _closure2_slot1;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['components'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/InteractionModalUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsFirstTextInputInModal(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.useComponentStateContext;
            var4 = var2.bind(var3)();
            var3 = null;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0007_ip = 73; continue _fun0007 }
 46:
            var4 = var4.modal;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0007_ip = 73; continue _fun0007 }
 61:
            var6 = var4.components;
            var4 = 0;
            var2 = var6[var4];
 73:
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0007_ip = 87; continue _fun0007 }
 82:
            var3 = var2.type;
 87:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.ComponentType;
            var1 = var1.ACTION_ROW;
            var1 = var3 === var1;
            if(!var1) { _fun0007_ip = 150; continue _fun0007 }
 126:
            var3 = var2.components;
            var2 = 0;
            var2 = var3[var2];
            var3 = var2.id;
            var2 = arg1;
            var1 = var3 === var2;
 150:
            return var1;
        }
    };
    var3['useIsFirstTextInputInModal'] = var5;
    var5 = function useModalState(arg1, arg2) {
        var15 = arg1;
        var17 = arg2;
        var _closure2_slot0 = var15;
        var _closure2_slot1 = var17;
        var10 = var15.application;
        var16 = var15.customId;
        var _closure2_slot2 = var16;
        var9 = var15.components;
        var5 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 16;
        var2 = var12[var2];
        var8 = undefined;
        var2 = var5.bind(var8)(var2);
        var19 = var2.bind(var8)();
        var _closure2_slot3 = var19;
        var3 = _closure1_slot5;
        var2 = var3.useState;
        var18 = null;
        var2 = var2.bind(var3)(var18);
        var13 = _closure1_slot4;
        var7 = 2;
        var2 = var13.bind(var8)(var2, var7);
        var4 = 0;
        var6 = var2[var4];
        var3 = 1;
        var2 = var2[var3];
        var _closure2_slot4 = var2;
        var14 = _closure1_slot5;
        var2 = var14.useState;
        var2 = var2.bind(var14)(var18);
        var2 = var13.bind(var8)(var2, var7);
        var18 = var2[var4];
        var _closure2_slot5 = var18;
        var2 = var2[var3];
        var _closure2_slot6 = var2;
        var20 = _closure1_slot5;
        var14 = var20.useState;
        var2 = {};
        var2 = var14.bind(var20)(var2);
        var2 = var13.bind(var8)(var2, var7);
        var4 = var2[var4];
        var3 = var2[var3];
        var7 = _closure1_slot0;
        var2 = 17;
        var2 = var12[var2];
        var20 = var7.bind(var8)(var2);
        var14 = var20.useStateFromStores;
        var2 = _closure1_slot12;
        var13 = new Array(1);
        var13[0] = var2;
        var7 = new Array(1);
        var7[0] = var18;
        var2 = function() {
            var3 = _closure1_slot12;
            var2 = var3.getModalState;
            var1 = _closure2_slot5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var14.bind(var20)(var13, var2, var7);
        var _closure2_slot7 = var7;
        var2 = 18;
        var2 = var12[var2];
        var5 = var5.bind(var8)(var2);
        var2 = function() {
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5 = var5.bind(var8)(var2);
        var _closure2_slot8 = var5;
        var14 = _closure1_slot5;
        var13 = var14.useCallback;
        var12 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 151; continue _fun0008 }
 10:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var5 = null;
                    var4 = var4.bind(var3)(var5);
                    var4 = _closure2_slot6;
                    var4 = var4.bind(var3)(var5);
                    var5 = _closure2_slot8;
                    var4 = function(arg1) {
                        var4 = arg1;
                        var2 = true;
                        var _closure5_slot0 = var2;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var2 = arg1;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                if(var2) { _fun0009_ip = 21; continue _fun0009 }
 12:
                                var2 = false;
                                _closure5_slot0 = var2;
 21:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure5_slot0;
                        return var1;
                    };
                    var4 = var4.bind(var3)(var5);
                    if(!var4) { _fun0008_ip = 145; continue _fun0008 }
 56:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.fromTimestamp;
                    var5 = global;
                    var8 = var5.Date;
                    var5 = var8.now;
                    var5 = var5.bind(var8)();
                    var6 = var6.bind(var7)(var5);
                    var5 = _closure2_slot6;
                    var5 = var5.bind(var3)(var6);
                    var5 = _closure1_slot19;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var3)(var4, var2, var6);
                    SaveGenerator(address=139);
 137:
                    return var2;
 139:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 148; continue _fun0008 }
 145:
                    return var3;
 148:
                    return var2;
 151:
                    return var1;
                }
            };
            return var1;
        };
        var12 = var12.bind(var8)(var2);
        var2 = new Array(3);
        var2[0] = var19;
        var2[1] = var15;
        var2[2] = var5;
        var2 = var13.bind(var14)(var12, var2);
        var14 = _closure1_slot5;
        var13 = var14.useEffect;
        var12 = new Array(5);
        var12[0] = var18;
        var12[1] = var7;
        var12[2] = var17;
        var12[3] = var16;
        var15 = var15.channelId;
        var12[4] = var15;
        var11 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = _closure2_slot7;
                var3 = _closure1_slot13;
                var3 = var3.SUCCEEDED;
                if(!(var4 === var3)) { _fun0010_ip = 166; continue _fun0010 }
 27:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 20;
                var3 = var6[var3];
                var4 = undefined;
                var8 = var5.bind(var4)(var3);
                var7 = var8.dispatch;
                var3 = {};
                var9 = 'CLEAR_INTERACTION_MODAL_STATE';
                var3['type'] = var9;
                var9 = _closure2_slot2;
                var3['customId'] = var9;
                var3 = var7.bind(var8)(var3);
                var3 = 21;
                var3 = var6[var3];
                var8 = var5.bind(var4)(var3);
                var7 = var8.removeFiles;
                var3 = _closure2_slot0;
                var6 = var3.channelId;
                var5 = _closure1_slot18;
                var3 = var3.channelId;
                var9 = var5.bind(var4)(var3, var9);
                var5 = var9.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var5.bind(var9)(var3);
                var3 = _closure1_slot8;
                var3 = var3.InteractionModal;
                var3 = var7.bind(var8)(var6, var5, var3);
                var3 = _closure2_slot1;
                var3 = var3.bind(var4)();
 166:
                var4 = _closure2_slot7;
                var3 = _closure1_slot13;
                var3 = var3.ERRORED;
                if(!(var4 === var3)) { _fun0010_ip = 252; continue _fun0010 }
 184:
                var3 = _closure2_slot4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 22;
                var4 = var7[var1];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.uJgdEh;
                var1 = var4.bind(var5)(var1);
                var1 = var3.bind(var2)(var1);
 252:
                var1 = undefined;
                return var1;
            }
        };
        var11 = var13.bind(var14)(var11, var12);
        var1 = _closure1_slot17;
        var8 = var1.bind(var8)(var10);
        var1 = {};
        var1['components'] = var9;
        var9 = var8.applicationIconURL;
        var1['applicationIconURL'] = var9;
        var8 = var8.applicationName;
        var1['applicationName'] = var8;
        var1['submissionState'] = var7;
        var1['error'] = var6;
        var1['validators'] = var5;
        var1['validationErrors'] = var4;
        var1['setValidationErrors'] = var3;
        var1['onSubmit'] = var2;
        return var1;
    };
    var3['useModalState'] = var5;
    var4 = function useIframeModalState(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var3 = var1.application;
            var10 = var1.customId;
            var4 = _closure1_slot17;
            var12 = undefined;
            var4 = var4.bind(var12)(var3);
            var6 = var4.applicationIconURL;
            var5 = var4.applicationName;
            var4 = var4.applicationBaseUrl;
            var9 = _closure1_slot7;
            var8 = var9.getChannel;
            var7 = var1.channelId;
            var9 = var8.bind(var9)(var7);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 23;
            var2 = var8[var2];
            var11 = var7.bind(var12)(var2);
            var7 = null;
            var8 = var7 != var9;
            var2 = 'channel should not be null';
            var2 = var11.bind(var12)(var8, var2);
            var2 = {};
            var19 = var1.channelId;
            var17 = var3.id;
            var8 = global;
            var3 = var8.HermesInternal;
            var12 = var3.concat;
            var3 = '';
            var11 = ':';
            var20 = var3;
            var18 = var11;
            var16 = var11;
            var15 = var10;
            var11 = var20[var12](var19, var18, var17, var16, var15, var14);
            var2['instance_id'] = var11;
            var2['custom_id'] = var10;
            var10 = var1.channelId;
            var2['channel_id'] = var10;
            var10 = var9.guild_id;
            var10 = var7 != var10;
            if(!var10) { _fun0011_ip = 192; continue _fun0011 }
 183:
            var11 = var9.guild_id;
            var10 = var3 !== var11;
 192:
            if(!var10) { _fun0011_ip = 206; continue _fun0011 }
 195:
            var9 = var9.guild_id;
            var2['guild_id'] = var9;
 206:
            var8 = var8.URL;
            var7 = var7 != var4;
            if(!var7) { _fun0011_ip = 222; continue _fun0011 }
 219:
            var3 = var4;
 222:
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var20 = var7;
            var19 = var3;
            var3 = new var20[var8](var19, var18);
            var3 = var3 instanceof Object ? var3 : var7;
            var1 = var1.iframePath;
            var3['pathname'] = var1;
            var1 = {};
            var1['applicationIconURL'] = var6;
            var1['applicationName'] = var5;
            var1['applicationBaseUrl'] = var4;
            var1['queryParams'] = var2;
            var2 = var3.toString;
            var2 = var2.bind(var3)();
            var1['iframeUrl'] = var2;
            return var1;
        }
    };
    var3['useIframeModalState'] = var4;
    var3['submitModal'] = var2;
    return var1;
})();