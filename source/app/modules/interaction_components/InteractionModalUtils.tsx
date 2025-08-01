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
        var4 = _closure1_slot4;
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
                var2 = _closure1_slot8;
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
                var7 = _closure1_slot7;
                var2 = var7.getMember;
                var1 = _closure2_slot0;
                var1 = var1.bot;
                var1 = var1.id;
                var5 = var2.bind(var7)(var8, var1);
 83:
                var1 = {};
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 11;
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
                var3 = 12;
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
    var _closure1_slot14 = var1;
    var2 = function submitModal(arg1, arg2) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var7 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var6 = var7.bind(var3)(var1);
        var5 = var6.fromTimestamp;
        var1 = global;
        var9 = var1.Date;
        var1 = var9.now;
        var1 = var1.bind(var9)();
        var1 = var5.bind(var6)(var1);
        var _closure2_slot2 = var1;
        var9 = var8.channelId;
        var6 = _closure1_slot6;
        var5 = var6.getChannel;
        var6 = var5.bind(var6)(var9);
        var _closure2_slot3 = var6;
        var5 = 18;
        var5 = var11[var5];
        var7 = var7.bind(var3)(var5);
        var5 = null;
        var6 = var5 != var6;
        var5 = 'expected channel';
        var5 = var7.bind(var3)(var6, var5);
        var7 = _closure1_slot13;
        var6 = var8.customId;
        var5 = var8.components;
        var5 = var7.bind(var3)(var6, var5);
        var _closure2_slot4 = var5;
        var10 = _closure1_slot0;
        var2 = 20;
        var2 = var11[var2];
        var6 = var10.bind(var3)(var2);
        var5 = var6.addQueued;
        var2 = {};
        var7 = {};
        var9 = 10;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.InteractionTypes;
        var9 = var9.MODAL_SUBMIT;
        var7['interactionType'] = var9;
        var8 = var8.application;
        var8 = var8.id;
        var7['applicationId'] = var8;
        var2['data'] = var7;
        var2 = var5.bind(var6)(var1, var2);
        var2 = function send() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 26; continue _fun0002 }
 16:
                var2 = _closure2_slot1;
                var1 = var2.aborted;
 26:
                if(var1) { _fun0002_ip = 262; continue _fun0002 }
 32:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 21;
                var1 = var10[var1];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var5 = _closure1_slot12;
                var5 = var5.INTERACTIONS;
                var1['url'] = var5;
                var5 = {};
                var7 = 10;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.InteractionTypes;
                var7 = var7.MODAL_SUBMIT;
                var5['type'] = var7;
                var8 = _closure2_slot0;
                var7 = var8.application;
                var7 = var7.id;
                var5['application_id'] = var7;
                var7 = _closure2_slot3;
                var9 = var7.id;
                var5['channel_id'] = var9;
                var7 = var7.guild_id;
                var5['guild_id'] = var7;
                var7 = {};
                var9 = var8.id;
                var7['id'] = var9;
                var8 = var8.customId;
                var7['custom_id'] = var8;
                var8 = _closure2_slot4;
                var7['components'] = var8;
                var5['data'] = var7;
                var7 = _closure1_slot5;
                var6 = var7.getSessionId;
                var6 = var6.bind(var7)();
                var5['session_id'] = var6;
                var6 = _closure2_slot2;
                var5['nonce'] = var6;
                var1['body'] = var5;
                var4 = _closure2_slot1;
                var1['signal'] = var4;
                var4 = false;
                var1['rejectWithError'] = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.catch;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.status;
                        var2 = 429;
                        if(!(var2 !== var3)) { _fun0003_ip = 63; continue _fun0003 }
 18:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 20;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.setFailed;
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var4)(var2);
                        _fun0003_ip = 136; continue _fun0003;
 63:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = _closure2_slot5;
                        var1 = var1.body;
                        var5 = var1.retry_after;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
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
 262:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot5 = var2;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot15 = var2;
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
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.InteractionModalState;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot12 = var5;
    var5 = function getData(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var4 = var2.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 10;
                var1 = var1[var7];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.ComponentType;
                var1 = var1.ACTION_ROW;
                if(!(var1 !== var4)) { _fun0004_ip = 333; continue _fun0004 }
 52:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ComponentType;
                var1 = var1.TEXT_INPUT;
                if(!(var1 !== var4)) { _fun0004_ip = 245; continue _fun0004 }
 88:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ComponentType;
                var1 = var1.STRING_SELECT;
                if(!(var1 !== var4)) { _fun0004_ip = 157; continue _fun0004 }
 121:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 18;
                var1 = var6[var1];
                var6 = var4.bind(var5)(var1);
                var4 = false;
                var1 = 'unreachable';
                var1 = var6.bind(var5)(var4, var1);
                return var5;
 157:
                var7 = _closure1_slot11;
                var6 = var7.getInteractionComponentState;
                var4 = _closure2_slot0;
                var1 = var2.id;
                var6 = var6.bind(var7)(var4, var1);
                var1 = {};
                var4 = var2.type;
                var1['type'] = var4;
                var4 = var2.customId;
                var1['custom_id'] = var4;
                var4 = null;
                var7 = var4 == var6;
                var8 = undefined;
                if(var7) { _fun0004_ip = 223; continue _fun0004 }
 218:
                var8 = var6.type;
 223:
                var7 = var2.type;
                var4 = null;
                if(!(var8 === var7)) { _fun0004_ip = 239; continue _fun0004 }
 234:
                var4 = var6.values;
 239:
                var1['values'] = var4;
                return var1;
 245:
                var7 = _closure1_slot11;
                var6 = var7.getInteractionComponentState;
                var4 = _closure2_slot0;
                var1 = var2.id;
                var6 = var6.bind(var7)(var4, var1);
                var1 = {};
                var4 = var2.type;
                var1['type'] = var4;
                var4 = var2.customId;
                var1['custom_id'] = var4;
                var4 = null;
                var7 = var4 == var6;
                var8 = undefined;
                if(var7) { _fun0004_ip = 311; continue _fun0004 }
 306:
                var8 = var6.type;
 311:
                var7 = var2.type;
                var4 = null;
                if(!(var8 === var7)) { _fun0004_ip = 327; continue _fun0004 }
 322:
                var4 = var6.value;
 327:
                var1['value'] = var4;
                return var1;
 333:
                var1 = {};
                var4 = var2.type;
                var1['type'] = var4;
                var4 = _closure1_slot13;
                var3 = _closure2_slot0;
                var2 = var2.components;
                var2 = var4.bind(var5)(var3, var2);
                var1['components'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/InteractionModalUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsFirstTextInputInModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.useComponentStateContext;
            var4 = var2.bind(var3)();
            var3 = null;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0005_ip = 73; continue _fun0005 }
 46:
            var4 = var4.modal;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0005_ip = 73; continue _fun0005 }
 61:
            var6 = var4.components;
            var4 = 0;
            var2 = var6[var4];
 73:
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0005_ip = 87; continue _fun0005 }
 82:
            var3 = var2.type;
 87:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.ComponentType;
            var1 = var1.ACTION_ROW;
            var1 = var3 === var1;
            if(!var1) { _fun0005_ip = 150; continue _fun0005 }
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
        var2 = arg1;
        var14 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var14;
        var8 = var2.application;
        var13 = var2.customId;
        var _closure2_slot2 = var13;
        var7 = var2.components;
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var3 = 13;
        var3 = var11[var3];
        var6 = undefined;
        var3 = var10.bind(var6)(var3);
        var16 = var3.bind(var6)();
        var _closure2_slot3 = var16;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var19 = null;
        var3 = var3.bind(var4)(var19);
        var17 = _closure1_slot3;
        var15 = 2;
        var3 = var17.bind(var6)(var3, var15);
        var12 = 0;
        var4 = var3[var12];
        var5 = 1;
        var3 = var3[var5];
        var _closure2_slot4 = var3;
        var18 = _closure1_slot4;
        var3 = var18.useState;
        var3 = var3.bind(var18)(var19);
        var3 = var17.bind(var6)(var3, var15);
        var15 = var3[var12];
        var _closure2_slot5 = var15;
        var3 = var3[var5];
        var _closure2_slot6 = var3;
        var5 = _closure1_slot0;
        var3 = 14;
        var3 = var11[var3];
        var18 = var5.bind(var6)(var3);
        var17 = var18.useStateFromStores;
        var3 = _closure1_slot9;
        var12 = new Array(1);
        var12[0] = var3;
        var5 = new Array(1);
        var5[0] = var15;
        var3 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getModalState;
            var1 = _closure2_slot5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var17.bind(var18)(var12, var3, var5);
        var _closure2_slot7 = var5;
        var3 = 15;
        var3 = var11[var3];
        var10 = var10.bind(var6)(var3);
        var3 = function() {
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var3 = var10.bind(var6)(var3);
        var _closure2_slot8 = var3;
        var12 = _closure1_slot4;
        var11 = var12.useCallback;
        var10 = new Array(3);
        var10[0] = var16;
        var10[1] = var2;
        var10[2] = var3;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure2_slot4;
                var1 = undefined;
                var4 = null;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot6;
                var3 = var3.bind(var1)(var4);
                var4 = _closure2_slot8;
                var3 = function(arg1) {
                    var4 = arg1;
                    var2 = true;
                    var _closure4_slot0 = var2;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = arg1;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            if(var2) { _fun0007_ip = 21; continue _fun0007 }
 12:
                            var2 = false;
                            _closure4_slot0 = var2;
 21:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure4_slot0;
                    return var1;
                };
                var3 = var3.bind(var1)(var4);
                if(!var3) { _fun0006_ip = 76; continue _fun0006 }
 46:
                var3 = _closure2_slot6;
                var5 = _closure1_slot15;
                var4 = _closure2_slot0;
                var2 = _closure2_slot3;
                var2 = var5.bind(var1)(var4, var2);
                var2 = var3.bind(var1)(var2);
 76:
                return var1;
            }
        };
        var2 = var11.bind(var12)(var2, var10);
        var12 = _closure1_slot4;
        var11 = var12.useEffect;
        var10 = new Array(4);
        var10[0] = var15;
        var10[1] = var5;
        var10[2] = var14;
        var10[3] = var13;
        var9 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = _closure2_slot7;
                var3 = _closure1_slot10;
                var3 = var3.SUCCEEDED;
                if(!(var4 === var3)) { _fun0008_ip = 85; continue _fun0008 }
 24:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 16;
                var3 = var4[var3];
                var4 = undefined;
                var6 = var5.bind(var4)(var3);
                var5 = var6.dispatch;
                var3 = {};
                var7 = 'CLEAR_INTERACTION_MODAL_STATE';
                var3['type'] = var7;
                var7 = _closure2_slot2;
                var3['customId'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure2_slot1;
                var3 = var3.bind(var4)();
 85:
                var4 = _closure2_slot7;
                var3 = _closure1_slot10;
                var3 = var3.ERRORED;
                if(!(var4 === var3)) { _fun0008_ip = 171; continue _fun0008 }
 103:
                var3 = _closure2_slot4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
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
 171:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var11.bind(var12)(var9, var10);
        var1 = _closure1_slot14;
        var6 = var1.bind(var6)(var8);
        var1 = {};
        var1['components'] = var7;
        var7 = var6.applicationIconURL;
        var1['applicationIconURL'] = var7;
        var6 = var6.applicationName;
        var1['applicationName'] = var6;
        var1['submissionState'] = var5;
        var1['error'] = var4;
        var1['validators'] = var3;
        var1['onSubmit'] = var2;
        return var1;
    };
    var3['useModalState'] = var5;
    var4 = function useIframeModalState(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.application;
            var10 = var1.customId;
            var4 = _closure1_slot14;
            var12 = undefined;
            var4 = var4.bind(var12)(var3);
            var6 = var4.applicationIconURL;
            var5 = var4.applicationName;
            var4 = var4.applicationBaseUrl;
            var9 = _closure1_slot6;
            var8 = var9.getChannel;
            var7 = var1.channelId;
            var9 = var8.bind(var9)(var7);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 18;
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
            if(!var10) { _fun0009_ip = 192; continue _fun0009 }
 183:
            var11 = var9.guild_id;
            var10 = var3 !== var11;
 192:
            if(!var10) { _fun0009_ip = 206; continue _fun0009 }
 195:
            var9 = var9.guild_id;
            var2['guild_id'] = var9;
 206:
            var8 = var8.URL;
            var7 = var7 != var4;
            if(!var7) { _fun0009_ip = 222; continue _fun0009 }
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