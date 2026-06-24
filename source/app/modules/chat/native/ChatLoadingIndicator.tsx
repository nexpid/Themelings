// app/modules/chat/native/ChatLoadingIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function openLoadingIndicatorDebugBody() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot10;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var3 = null;
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.isStaff;
            var2 = var4.bind(var5)();
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.isStaffPersonal;
            var3 = var4.bind(var5)();
case 6:
            var2 = var3;
case 4:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openLazy;
            var1 = {};
            var4 = function importer() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 15;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 14;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.then;
                var1 = function(arg1) {
                    var2 = arg1;
                    var2 = var2.default;
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
                        var4 = _closure1_slot13;
                        var3 = _closure4_slot0;
                        var2 = {};
                        var8 = arg1;
                        var9 = var2;
                        var5 = copyDataProperties(var9, var8);
                        var6 = 'Chat Loading indicator';
                        var5 = 'title';
                        var2[4] = var6;
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot17;
                        var1 = undefined;
                        var5 = {};
                        var6 = var7.bind(var1)(var6, var5);
                        var5 = 'children';
                        var2[4] = var6;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['importer'] = var4;
            var4 = true;
            var1['isDismissable'] = var4;
            var1 = var2.bind(var3)(var1);
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppStates;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['container'] = var10;
    var10 = {'height': 8, 'width': 8};
    var11 = 12;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var10['backgroundColor'] = var11;
    var4['pulse'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var7 = var8.memo;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 16;
            var6 = var5[var4];
            var4 = undefined;
            var9 = var2.bind(var4)(var6);
            var8 = var9.useStateFromStoresObject;
            var6 = _closure1_slot8;
            var7 = new Array(3);
            var7[0] = var6;
            var6 = _closure1_slot7;
            var7[1] = var6;
            var6 = _closure1_slot9;
            var7[2] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannelId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot7;
                    var2 = var3.isConnected;
                    var2 = var2.bind(var3)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure1_slot8;
                    var1 = var3.getMessages;
                    var3 = var1.bind(var3)(var4);
                    var1 = {};
                    var4 = var3.cached;
                    var1['messagesCached'] = var4;
                    var3 = var3.ready;
                    var1['messagesReady'] = var3;
                    var1['connected'] = var2;
                    return var1;
case 10:
                    var1 = {'messagesCached': false, 'messagesReady': false};
                    var1['connected'] = var2;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var7, var6);
            var7 = var6.messagesCached;
            var9 = var6.messagesReady;
            var6 = var6.connected;
            var8 = function renderField(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var8 = arg2;
                    var10 = arg3;
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var5 = new Array(5);
                    var1 = arg1;
                    var5[0] = var1;
                    var1 = ':';
                    var5[1] = var1;
                    var1 = ' ';
                    var5[2] = var1;
                    var13 = _closure1_slot13;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var12 = 17;
                    var6 = var1[var12];
                    var1 = undefined;
                    var6 = var9.bind(var1)(var6);
                    var9 = var6.Text;
                    var6 = {};
                    var11 = 'text-md/normal';
                    var6['variant'] = var11;
                    var11 = 'text-feedback-critical';
                    if(!var8) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var11 = 'text-feedback-positive';
case 12:
                    var6['color'] = var11;
                    var11 = 'false';
                    var14 = var11;
                    if(!var8) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var14 = 'true';
case 14:
                    var6['children'] = var14;
                    var6 = var13.bind(var1)(var9, var6);
                    var5[3] = var6;
                    var9 = null;
                    var13 = var9 != var10;
                    var6 = null;
                    if(!var13) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var6 = null;
                    if(!(var8 !== var10)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var12];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-md/normal', 'color': 'text-muted'};
                    if(!var10) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var11 = 'true';
case 19:
                    var10 = [' ', '(should be '];
                    var10[2] = var11;
                    var11 = ' to hide loading indicator)';
                    var10[3] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 16:
                    var5[4] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var3 = _closure1_slot14;
            var1 = 17;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var10 = 'messages.cached';
            var5 = false;
            var10 = var8.bind(var4)(var10, var7, var5);
            var5 = new Array(7);
            var5[0] = var10;
            var10 = '\n';
            var5[1] = var10;
            var11 = 'messages.ready';
            var12 = true;
            var11 = var8.bind(var4)(var11, var9, var12);
            var5[2] = var11;
            var5[3] = var10;
            var11 = 'connected';
            var11 = var8.bind(var4)(var11, var6, var12);
            var5[4] = var11;
            var5[5] = var10;
            if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var7 = !var9;
case 21:
            if(var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var7 = !var6;
case 23:
            var6 = 'should show chat indicator';
            var6 = var8.bind(var4)(var6, var7);
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatLoadingIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldChannelShowLoadingIndicator(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 18;
        var3 = var5[var3];
        var7 = undefined;
        var3 = var4.bind(var7)(var3);
        var8 = var3.ChatLoadingIndicatorExperiment;
        var6 = var8.useConfig;
        var3 = {};
        var9 = 'ChatLoadingIndicatorGuard';
        var3['location'] = var9;
        var3 = var6.bind(var8)(var3);
        var3 = var3.enabled;
        var _closure2_slot1 = var3;
        var3 = 16;
        var3 = var5[var3];
        var6 = var4.bind(var7)(var3);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot8;
        var4 = new Array(3);
        var4[0] = var3;
        var3 = _closure1_slot7;
        var4[1] = var3;
        var3 = _closure1_slot11;
        var4[2] = var3;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var1 = false;
                return var1;
case 25:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var4 = _closure1_slot11;
                var3 = var4.getState;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot12;
                var3 = var3.ACTIVE;
                if(!(var4 === var3)) { _fun0005_ip = 29; continue _fun0005 }
case 6:
                var4 = _closure1_slot8;
                var3 = var4.getMessages;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot7;
                var1 = var2.isConnected;
                var2 = var1.bind(var2)();
                var1 = var3.cached;
                if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 30:
                var3 = var3.ready;
                var1 = !var3;
case 12:
                if(var1) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var1 = !var2;
case 31:
                return var1;
case 29:
                var1 = false;
                return var1;
case 27:
                var1 = false;
                return var1;
            }
        };
        var6 = var5.bind(var6)(var4, var3);
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = false;
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot3;
        var1 = 2;
        var4 = var3.bind(var7)(var4, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot3 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot2;
                if(var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var4 = _closure2_slot3;
                var2 = undefined;
                var3 = false;
                var3 = var4.bind(var2)(var3);
                return var2;
case 33:
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 3000;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useShouldChannelShowLoadingIndicator'] = var4;
    var2 = function ChannelHeaderLoadingIndicator() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot16;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 16;
            var3 = var15[var2];
            var8 = var14.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var6.bind(var8)(var4, var3);
            var _closure2_slot0 = var9;
            var2 = var15[var2];
            var6 = var14.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0008_ip = 11; continue _fun0008 }
case 33:
                    var5 = var4.isStaff;
                    var1 = var5.bind(var4)();
case 11:
                    if(var1) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var3 = var3 == var4;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var3 = var4.isStaffPersonal;
                    var2 = var3.bind(var4)();
case 37:
                    var1 = var2;
case 35:
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var3, var2);
            var6 = 19;
            var3 = var15[var6];
            var4 = var14.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function t() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = {};
                    if(var1) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var3 = {};
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var13 = 19;
                    var1 = var19[var13];
                    var14 = undefined;
                    var6 = var18.bind(var14)(var1);
                    var5 = var6.withRepeat;
                    var1 = var19[var13];
                    var9 = var18.bind(var14)(var1);
                    var8 = var9.withSequence;
                    var1 = 20;
                    var4 = var19[var1];
                    var10 = var18.bind(var14)(var4);
                    var7 = var10.withTiming;
                    var4 = {};
                    var17 = 0;
                    var4['duration'] = var17;
                    var12 = 1;
                    var7 = var7.bind(var10)(var12, var4);
                    var4 = var19[var1];
                    var21 = var18.bind(var14)(var4);
                    var11 = var21.withTiming;
                    var10 = {};
                    var20 = 1500;
                    var10['duration'] = var20;
                    var4 = var19[var13];
                    var4 = var18.bind(var14)(var4);
                    var22 = var4.Easing;
                    var4 = var22.bezier;
                    var16 = 0.4;
                    var15 = 0.2;
                    var27 = var22;
                    var26 = var16;
                    var25 = 0;
                    var24 = var15;
                    var23 = var12;
                    var4 = var27[var4](var26, var25, var24, var23, var22);
                    var10['easing'] = var4;
                    var4 = 0.5;
                    var4 = var11.bind(var21)(var4, var10);
                    var1 = var19[var1];
                    var11 = var18.bind(var14)(var1);
                    var10 = var11.withTiming;
                    var1 = {};
                    var1['duration'] = var20;
                    var13 = var19[var13];
                    var13 = var18.bind(var14)(var13);
                    var14 = var13.Easing;
                    var13 = var14.bezier;
                    var27 = var14;
                    var26 = var16;
                    var25 = 0;
                    var13 = var27[var13](var26, var25, var24, var23, var22);
                    var1['easing'] = var13;
                    var1 = var10.bind(var11)(var12, var1);
                    var4 = var8.bind(var9)(var7, var4, var1);
                    var1 = -1;
                    var1 = var5.bind(var6)(var4, var1);
                    var3['scale'] = var1;
                    var1 = new Array(1);
                    var1[0] = var3;
                    var2['transform'] = var1;
                    var1 = var2;
                    _fun0009_ip = 41; continue _fun0009;
case 39:
                    var3 = new Array(0);
                    var2['transform'] = var3;
                    var1 = var2;
case 41:
                    return var1;
                }
            };
            var8 = {};
            var8['useReducedMotion'] = var9;
            var9 = var15[var6];
            var9 = var14.bind(var5)(var9);
            var9 = var9.withRepeat;
            var8['withRepeat'] = var9;
            var9 = var15[var6];
            var9 = var14.bind(var5)(var9);
            var9 = var9.withSequence;
            var8['withSequence'] = var9;
            var9 = 20;
            var9 = var15[var9];
            var9 = var14.bind(var5)(var9);
            var9 = var9.withTiming;
            var8['withTiming'] = var9;
            var9 = var15[var6];
            var9 = var14.bind(var5)(var9);
            var9 = var9.Easing;
            var8['Easing'] = var9;
            var1['__closure'] = var8;
            var8 = 17454673879926.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot18;
            var1['__initData'] = var8;
            var11 = var3.bind(var4)(var1);
            var4 = _closure1_slot14;
            var3 = _closure1_slot5;
            var1 = {};
            var8 = var10.container;
            var1['style'] = var8;
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var6 = var15[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.View;
            var6 = {};
            var12 = var10.pulse;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var6['style'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var10 = _closure1_slot13;
            var8 = 17;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var11 = 21;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.JwIJMV;
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var1 = var6;
            if(!var2) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var4 = _closure1_slot13;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = _closure1_slot19;
            var2['onPress'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var3['ChannelHeaderLoadingIndicator'] = var2;
    return var1;
})();