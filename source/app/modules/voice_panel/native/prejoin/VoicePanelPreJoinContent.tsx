// app/modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot36;
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
            var7 = _closure1_slot36;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
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
    var _closure1_slot36 = var1;
    var1 = function StreamPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var20 = var2.voiceState;
            var13 = var2.stream;
            var _closure2_slot0 = var13;
            var8 = var2.channelId;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot26;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var6 = _closure1_slot5;
            var5 = var6.useContext;
            var2 = _closure1_slot1;
            var19 = _closure1_slot2;
            var3 = 23;
            var3 = var19[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var5.bind(var6)(var3);
            var15 = var3.mode;
            var3 = var3.setFocused;
            var _closure2_slot2 = var3;
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var13;
            var5[2] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 24;
                var2 = var6[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var5 = var7.selectVoiceChannel;
                var4 = _closure2_slot1;
                var4 = var5.bind(var7)(var4);
                var4 = _closure1_slot0;
                var3 = 25;
                var3 = var6[var3];
                var8 = var4.bind(var1)(var3);
                var7 = var8.watchStream;
                var5 = _closure2_slot0;
                var3 = {};
                var9 = true;
                var3['forceMultiple'] = var9;
                var3 = var7.bind(var8)(var5, var3);
                var3 = _closure2_slot2;
                var2 = 26;
                var2 = var6[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.encodeStreamKey;
                var2 = var2.bind(var4)(var5);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var6.bind(var7)(var3, var5);
            var16 = _closure1_slot0;
            var3 = 27;
            var5 = var19[var3];
            var8 = var16.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot11;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var7.bind(var8)(var6, var5);
            var _closure2_slot3 = var5;
            var3 = var19[var3];
            var6 = var16.bind(var4)(var3);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var4 = _closure1_slot12;
                var3 = var4.can;
                var1 = _closure1_slot21;
                var2 = var1.CONNECT;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var5.bind(var6)(var3, var1);
            var3 = _closure1_slot24;
            var6 = 28;
            var1 = var19[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var10.activityInfoWrapper;
            var1['style'] = var5;
            var8 = _closure1_slot23;
            var5 = 29;
            var5 = var19[var5];
            var5 = var16.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'variant': 'text-sm/semibold', 'style': null, 'color': 'header-secondary'};
            var11 = var10.activityInfoHeader;
            var5['style'] = var11;
            var11 = 30;
            var17 = var19[var11];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var11 = var19[var11];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var16 = var11.I0mOAg;
            var11 = {};
            var19 = var20.nick;
            var21 = null;
            if(!(var21 == var19)) { _fun0004_ip = 361; continue _fun0004 }
 351:
            var20 = var20.user;
            var19 = var20.username;
 361:
            var11['username'] = var19;
            var11 = var17.bind(var18)(var16, var11);
            var5['children'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot23;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = var16[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = var10.previewImageWrapper;
            var6['style'] = var10;
            var11 = _closure1_slot23;
            var10 = _closure1_slot0;
            var9 = 31;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.VoicePanelStreamPreview;
            var9 = {};
            var9['mode'] = var15;
            var14 = !var14;
            var9['disabled'] = var14;
            var9['stream'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function ActivityInfo(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var4 = var2.activity;
            var _closure2_slot0 = var4;
            var13 = var2.analyticsLocations;
            var _closure2_slot1 = var13;
            var2 = _closure1_slot26;
            var5 = undefined;
            var14 = var2.bind(var5)();
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 32;
            var3 = var6[var3];
            var7 = var2.bind(var5)(var3);
            var8 = var4.applicationId;
            var3 = new Array(1);
            var3[0] = var8;
            var7 = var7.bind(var5)(var3);
            var3 = _closure1_slot4;
            var9 = 1;
            var7 = var3.bind(var5)(var7, var9);
            var3 = 0;
            var25 = var7[var3];
            var _closure2_slot2 = var25;
            var8 = _closure1_slot0;
            var7 = 33;
            var7 = var6[var7];
            var11 = var8.bind(var5)(var7);
            var10 = var11.getEmbeddedActivityLocationChannelId;
            var7 = var4.location;
            var11 = var10.bind(var11)(var7);
            var7 = 34;
            var7 = var6[var7];
            var10 = var2.bind(var5)(var7);
            var7 = var4.applicationId;
            var16 = var10.bind(var5)(var7, var11);
            var11 = _closure1_slot5;
            var10 = var11.useContext;
            var7 = 23;
            var7 = var6[var7];
            var7 = var2.bind(var5)(var7);
            var7 = var10.bind(var11)(var7);
            var11 = var7.channelId;
            var _closure2_slot3 = var11;
            var15 = var7.windowDimensions;
            var _closure2_slot4 = var15;
            var12 = _closure1_slot5;
            var10 = var12.useState;
            var7 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 35;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getWindowDimensions;
                var2 = var2.bind(var3)();
                var2 = var2.width;
                var3 = _closure1_slot18;
                var1 = 16;
                var3 = var3 + var1;
                var1 = 2;
                var1 = var1 * var3;
                var1 = var2 - var1;
                return var1;
            };
            var12 = var10.bind(var12)(var7);
            var10 = _closure1_slot4;
            var7 = 2;
            var7 = var10.bind(var5)(var12, var7);
            var3 = var7[var3];
            var17 = var7[var9];
            var _closure2_slot5 = var17;
            var18 = 36;
            var7 = var6[var18];
            var12 = var8.bind(var5)(var7);
            var10 = var12.useAnimatedReaction;
            var9 = function l() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = var1.width;
                return var1;
            };
            var7 = {};
            var7['windowDimensions'] = var15;
            var9['__closure'] = var7;
            var7 = 16837592262556.0;
            var9['__workletHash'] = var7;
            var7 = _closure1_slot28;
            var9['__initData'] = var7;
            var7 = function s(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0006_ip = 79; continue _fun0006 }
 10:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 36;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot5;
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure1_slot18;
                    var1 = 16;
                    var5 = var5 + var1;
                    var1 = 2;
                    var1 = var1 * var5;
                    var1 = var4 - var1;
                    var1 = var2.bind(var3)(var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = {};
            var18 = var6[var18];
            var18 = var8.bind(var5)(var18);
            var18 = var18.runOnJS;
            var15['runOnJS'] = var18;
            var15['setActivityPreviewWidth'] = var17;
            var17 = _closure1_slot18;
            var15['EDGE_GUTTER'] = var17;
            var7['__closure'] = var15;
            var15 = 1481130207412.0;
            var7['__workletHash'] = var15;
            var15 = _closure1_slot29;
            var7['__initData'] = var15;
            var7 = var10.bind(var12)(var9, var7);
            var7 = 37;
            var9 = var6[var7];
            var12 = var8.bind(var5)(var9);
            var10 = var12.useEmbeddedActivityJoinability;
            var9 = {};
            var17 = _closure1_slot10;
            var15 = var17.getId;
            var15 = var15.bind(var17)();
            var9['userId'] = var15;
            var9['channelId'] = var11;
            var9['application'] = var25;
            var10 = var10.bind(var12)(var9);
            var _closure2_slot6 = var10;
            var7 = var6[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.EmbeddedActivityJoinability;
            var7 = var7.CAN_JOIN;
            var12 = var10 === var7;
            var _closure2_slot7 = var12;
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var15 = var4.launchId;
            var7 = new Array(6);
            var7[0] = var15;
            var7[1] = var13;
            var7[2] = var25;
            var7[3] = var12;
            var7[4] = var11;
            var7[5] = var10;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure2_slot6;
                var2['embeddedActivityJoinability'] = var6;
                var6 = _closure1_slot3;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 178; continue _fun0007 }
 10:
                            var2 = _closure2_slot7;
                            if(var2) { _fun0007_ip = 62; continue _fun0007 }
 20:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 24;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.selectVoiceChannel;
                            var2 = _closure2_slot3;
                            var2 = var3.bind(var4)(var2);
                            _fun0007_ip = 170; continue _fun0007;
 62:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 170; continue _fun0007 }
 72:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 38;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.maybeJoinEmbeddedActivity;
                            var2 = {};
                            var6 = _closure2_slot3;
                            var2['channelId'] = var6;
                            var6 = _closure2_slot2;
                            var7 = var6.id;
                            var2['applicationId'] = var7;
                            var7 = _closure2_slot0;
                            var7 = var7.launchId;
                            var2['launchId'] = var7;
                            var2['inputApplication'] = var6;
                            var5 = _closure2_slot1;
                            var2['analyticsLocations'] = var5;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address=164);
 162:
                            return var2;
 164:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0007_ip = 175; continue _fun0007 }
 170:
                            var3 = undefined;
                            return var3;
 175:
                            return var2;
 178:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var6.bind(var1)(var5);
                var _closure3_slot0 = var5;
                var4 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var2['handleCanJoin'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var8.bind(var9)(var1, var7);
            var1 = 39;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var4 = var4.applicationId;
            var1['applicationId'] = var4;
            var1['size'] = var3;
            var3 = ['embedded_background'];
            var1['names'] = var3;
            var26 = var2.bind(var5)(var1);
            var22 = null;
            var2 = var22 == var25;
            var1 = null;
            if(var2) { _fun0005_ip = 1175; continue _fun0005 }
 591:
            var4 = _closure1_slot24;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 28;
            var2 = var21[var11];
            var3 = var12.bind(var5)(var2);
            var2 = {};
            var6 = var14.activityInfoWrapper;
            var2['style'] = var6;
            var8 = _closure1_slot23;
            var19 = _closure1_slot0;
            var6 = 29;
            var6 = var21[var6];
            var6 = var19.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'style': null, 'color': 'header-secondary'};
            var9 = var14.activityInfoHeader;
            var6['style'] = var9;
            var23 = 30;
            var9 = var21[var23];
            var9 = var19.bind(var5)(var9);
            var15 = var9.intl;
            var13 = var15.format;
            var9 = var21[var23];
            var9 = var19.bind(var5)(var9);
            var9 = var9.t;
            var10 = var9.n/IJ6e;
            var9 = {};
            var16 = var16.length;
            var9['n'] = var16;
            var9 = var13.bind(var15)(var10, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot24;
            var7 = 40;
            var7 = var21[var7];
            var7 = var19.bind(var5)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var10 = 0.7;
            var7['activeOpacity'] = var10;
            var7['onPress'] = var17;
            var10 = var14.previewImageWrapper;
            var7['style'] = var10;
            var10 = false;
            var7['accessible'] = var10;
            var15 = _closure1_slot23;
            var10 = var21[var11];
            var13 = var12.bind(var5)(var10);
            var10 = {};
            var16 = var14.previewImage;
            var10['style'] = var16;
            var24 = _closure1_slot23;
            var16 = 41;
            var16 = var21[var16];
            var18 = var12.bind(var5)(var16);
            var16 = {};
            var16['imageBackground'] = var26;
            var26 = 1.7777777777777777;
            var16['aspectRatio'] = var26;
            var16 = var24.bind(var5)(var18, var16);
            var10['children'] = var16;
            var13 = var15.bind(var5)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot23;
            var11 = var21[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var14 = var14.joinButtonWrapper;
            var11['style'] = var14;
            var16 = _closure1_slot23;
            var18 = 42;
            var14 = var21[var18];
            var14 = var19.bind(var5)(var14);
            var15 = var14.Button;
            var14 = {'text': null, 'size': 'sm', 'iconPosition': 'start', 'variant': 'primary-overlay'};
            var24 = var21[var23];
            var24 = var19.bind(var5)(var24);
            var27 = var24.intl;
            var26 = var27.formatToPlainString;
            var23 = var21[var23];
            var23 = var19.bind(var5)(var23);
            var23 = var23.t;
            var24 = var23.YV/hEx;
            var23 = {};
            var28 = var25.name;
            var23['name'] = var28;
            var23 = var26.bind(var27)(var24, var23);
            var14['text'] = var23;
            var20 = _closure1_slot23;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.Button;
            var19 = var18.Icon;
            var18 = {};
            var21 = 'entity';
            var18['variant'] = var21;
            var21 = {'uri': null, 'width': 20, 'height': 20};
            var24 = var25.getIconURL;
            var23 = 20;
            var23 = var24.bind(var25)(var23);
            var24 = var22 != var23;
            var22 = undefined;
            if(!var24) { _fun0005_ip = 1107; continue _fun0005 }
 1104:
            var22 = var23;
 1107:
            var21['uri'] = var22;
            var18['source'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var14['icon'] = var18;
            var14['onPress'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1175:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function RoomMembersSection(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.title;
            var7 = var1.members;
            var14 = var1.channelId;
            var13 = var1.guildId;
            var4 = _closure1_slot23;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 46;
            var1 = var1[var11];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.VoicePanelFormSection;
            var1 = {};
            var1['title'] = var5;
            var5 = new Array(0);
            var6 = _closure1_slot35;
            var10 = var6.bind(var3)(var7);
            var7 = var10.bind(var3)();
            var6 = var7.done;
            var9 = 47;
            var8 = null;
            if(var6) { _fun0008_ip = 226; continue _fun0008 }
 98:
            var18 = var7.value;
            var15 = _closure1_slot14;
            var6 = var15.getUser;
            var21 = var6.bind(var15)(var18);
            if(!(var8 != var21)) { _fun0008_ip = 211; continue _fun0008 }
 122:
            var15 = var5.push;
            var17 = _closure1_slot23;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var11];
            var6 = var16.bind(var3)(var6);
            var16 = var6.MemberRowItem;
            var6 = {};
            var6['user'] = var21;
            var6['channelId'] = var14;
            var6['guildId'] = var13;
            var20 = _closure1_slot1;
            var19 = var19[var9];
            var20 = var20.bind(var3)(var19);
            var19 = var20.getName;
            var19 = var19.bind(var20)(var13, var14, var21);
            var6['nick'] = var19;
            var6 = var17.bind(var3)(var16, var6, var18);
            var6 = var15.bind(var5)(var6);
 211:
            var15 = var10.bind(var3)();
            var6 = var15.done;
            var7 = var15;
            if(!var6) { _fun0008_ip = 98; continue _fun0008 }
 226:
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function RoomMembers(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var16 = var1.members;
            var8 = var1.streamingMembers;
            var23 = var1.blockedMembers;
            var22 = var1.ignoredMembers;
            var3 = _closure1_slot5;
            var2 = var3.useContext;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var21 = var1.channelId;
            var _closure2_slot0 = var21;
            var20 = var1.guildId;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = 20;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var14 = 0;
            var13 = var2[var14];
            var _closure2_slot1 = var13;
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot2 = var1;
            var2 = var23.size;
            var1 = var22.size;
            var10 = var2 + var1;
            var1 = var16.length;
            var11 = var1 - var10;
            var3 = _closure1_slot24;
            var2 = _closure1_slot25;
            var1 = {};
            var6 = var10 > var14;
            if(!var6) { _fun0009_ip = 204; continue _fun0009 }
 174:
            var9 = _closure1_slot23;
            var7 = _closure1_slot30;
            var5 = {};
            var5['channelId'] = var21;
            var5['blockedUserIds'] = var23;
            var5['ignoredUserIds'] = var22;
            var6 = var9.bind(var4)(var7, var5);
 204:
            var5 = new Array(5);
            var5[0] = var6;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var3 = var2;
                    var5 = undefined;
                    var3 = var3 === var5;
                    var6 = undefined;
                    if(var3) { _fun0010_ip = 27; continue _fun0010 }
 24:
                    var6 = var1;
 27:
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 57; continue _fun0010 }
 32:
                    var7 = var4().value;
                    var4 = var2;
                    var4 = var4 === var5;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0010_ip = 57; continue _fun0010 }
 51:
                    var1 = var7;
                    var3 = var4;
 57:
                    if(var3) { _fun0010_ip = 63; continue _fun0010 }
 60:
                    var2.return();
 63:
                    var4 = _closure1_slot23;
                    var3 = _closure1_slot37;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['channelId'] = var7;
                    var2['voiceState'] = var6;
                    var2['stream'] = var1;
                    var1 = var1.ownerId;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var5[1] = var6;
            var6 = var23.size;
            var6 = var6 > var14;
            if(!var6) { _fun0009_ip = 348; continue _fun0009 }
 245:
            var9 = _closure1_slot23;
            var8 = _closure1_slot39;
            var7 = {};
            var18 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 30;
            var19 = var25[var17];
            var19 = var18.bind(var4)(var19);
            var24 = var19.intl;
            var19 = var24.formatToPlainString;
            var17 = var25[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.pGJ1Q0;
            var17 = {};
            var25 = var23.size;
            var17['n'] = var25;
            var17 = var19.bind(var24)(var18, var17);
            var7['title'] = var17;
            var7['members'] = var23;
            var7['channelId'] = var21;
            var7['guildId'] = var20;
            var6 = var9.bind(var4)(var8, var7);
 348:
            var5[2] = var6;
            var6 = var22.size;
            var6 = var6 > var14;
            if(!var6) { _fun0009_ip = 467; continue _fun0009 }
 364:
            var9 = _closure1_slot23;
            var8 = _closure1_slot39;
            var7 = {};
            var18 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 30;
            var19 = var25[var17];
            var19 = var18.bind(var4)(var19);
            var24 = var19.intl;
            var19 = var24.formatToPlainString;
            var17 = var25[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17./pXOCA;
            var17 = {};
            var25 = var22.size;
            var17['n'] = var25;
            var17 = var19.bind(var24)(var18, var17);
            var7['title'] = var17;
            var7['members'] = var22;
            var7['channelId'] = var21;
            var7['guildId'] = var20;
            var6 = var9.bind(var4)(var8, var7);
 467:
            var5[3] = var6;
            var6 = var11 > var14;
            if(!var6) { _fun0009_ip = 1010; continue _fun0009 }
 481:
            var9 = _closure1_slot24;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var19 = 46;
            var7 = var7[var19];
            var7 = var8.bind(var4)(var7);
            var8 = var7.VoicePanelFormSection;
            var7 = {};
            if(!(var14 !== var10)) { _fun0009_ip = 584; continue _fun0009 }
 517:
            var14 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 30;
            var17 = var24[var10];
            var17 = var14.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var10 = var24[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var14 = var10.R0h4pK;
            var10 = {};
            var10['n'] = var11;
            var10 = var17.bind(var18)(var14, var10);
            _fun0009_ip = 654; continue _fun0009;
 584:
            var17 = _closure1_slot0;
            var25 = _closure1_slot2;
            var14 = 30;
            var18 = var25[var14];
            var18 = var17.bind(var4)(var18);
            var24 = var18.intl;
            var18 = var24.formatToPlainString;
            var14 = var25[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var17 = var14.vloEU1;
            var14 = {};
            var25 = var16.length;
            var14['n'] = var25;
            var10 = var18.bind(var24)(var17, var14);
 654:
            var7['title'] = var10;
            var14 = new Array(0);
            var10 = _closure1_slot35;
            var18 = var10.bind(var4)(var16);
            var16 = var18.bind(var4)();
            var10 = var16.done;
            var17 = 47;
            if(var10) { _fun0009_ip = 879; continue _fun0009 }
 689:
            var10 = var16.value;
            var24 = var14.length;
            if(!(!(var24 >= var13))) { _fun0009_ip = 879; continue _fun0009 }
 706:
            var25 = var23.has;
            var24 = var10.user;
            var24 = var24.id;
            var24 = var25.bind(var23)(var24);
            if(var24) { _fun0009_ip = 749; continue _fun0009 }
 729:
            var26 = var22.has;
            var25 = var10.user;
            var25 = var25.id;
            var24 = var26.bind(var22)(var25);
 749:
            if(var24) { _fun0009_ip = 861; continue _fun0009 }
 752:
            var24 = var14.push;
            var27 = _closure1_slot23;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var25 = var28[var19];
            var25 = var26.bind(var4)(var25);
            var26 = var25.MemberRowItem;
            var25 = {};
            var29 = var10.user;
            var25['user'] = var29;
            var25['channelId'] = var21;
            var25['guildId'] = var20;
            var29 = _closure1_slot1;
            var28 = var28[var17];
            var30 = var29.bind(var4)(var28);
            var29 = var30.getName;
            var28 = var10.user;
            var28 = var29.bind(var30)(var20, var21, var28);
            var25['nick'] = var28;
            var10 = var10.user;
            var10 = var10.id;
            var10 = var27.bind(var4)(var26, var25, var10);
            var10 = var24.bind(var14)(var10);
 861:
            var24 = var18.bind(var4)();
            var10 = var24.done;
            var16 = var24;
            if(!var10) { _fun0009_ip = 689; continue _fun0009 }
 879:
            var10 = new Array(2);
            var10[0] = var14;
            var11 = var11 > var13;
            if(!var11) { _fun0009_ip = 996; continue _fun0009 }
 894:
            var14 = _closure1_slot23;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 48;
            var12 = var20[var12];
            var12 = var19.bind(var4)(var12);
            var13 = var12.TableRow;
            var12 = {};
            var16 = 30;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.F4MCUF;
            var16 = var17.bind(var18)(var16);
            var12['label'] = var16;
            var15 = function onPress() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot1;
                var1 = 20;
                var2 = var2 + var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 996:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1010:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function PreJoinTransitioner(arg1) {
        var4 = arg1;
        var17 = var4.transitionState;
        var _closure2_slot0 = var17;
        var12 = var4.transitionCleanUp;
        var _closure2_slot1 = var12;
        var2 = null;
        var3 = Object.create(var2);
        var2 = 0;
        var3['transitionState'] = var2;
        var3['transitionCleanUp'] = var2;
        var23 = {};
        var22 = var4;
        var21 = var3;
        var11 = copyDataProperties(var23, var22, var21);
        var2 = _closure1_slot26;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var5 = _closure1_slot5;
        var3 = var5.useContext;
        var6 = _closure1_slot1;
        var13 = _closure1_slot2;
        var2 = 23;
        var2 = var13[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var3.bind(var5)(var2);
        var20 = var2.windowDimensions;
        var _closure2_slot2 = var20;
        var19 = var2.controlsSpecs;
        var _closure2_slot3 = var19;
        var18 = var2.safeArea;
        var _closure2_slot4 = var18;
        var10 = var2.preJoinContentSize;
        var _closure2_slot5 = var10;
        var16 = var2.useReducedMotion;
        var _closure2_slot6 = var16;
        var15 = _closure1_slot0;
        var14 = 36;
        var2 = var13[var14];
        var5 = var15.bind(var4)(var2);
        var3 = var5.useAnimatedStyle;
        var2 = function o() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var5 = var1.height;
                var1 = {};
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var4 = 49;
                var4 = var3[var4];
                var13 = undefined;
                var6 = var6.bind(var13)(var4);
                var4 = 0.8;
                var4 = var4 * var5;
                var4 = var6.bind(var13)(var4);
                var5 = var5 - var4;
                var6 = _closure2_slot3;
                var4 = var6.get;
                var4 = var4.bind(var6)();
                var4 = var4.height;
                var5 = var5 + var4;
                var6 = _closure2_slot4;
                var4 = var6.get;
                var4 = var4.bind(var6)();
                var4 = var4.bottom;
                var4 = var5 + var4;
                var1['paddingBottom'] = var4;
                var7 = _closure1_slot0;
                var6 = 55;
                var4 = var3[var6];
                var5 = var7.bind(var13)(var4);
                var4 = var5.withSpring;
                var8 = _closure2_slot0;
                var15 = 56;
                var3 = var3[var15];
                var3 = var7.bind(var13)(var3);
                var3 = var3.TransitionStates;
                var7 = var3.YEETED;
                var11 = 1;
                var3 = var11;
                if(!(var8 === var7)) { _fun0011_ip = 181; continue _fun0011 }
 179:
                var3 = 0;
 181:
                var3 = var4.bind(var5)(var3);
                var1['opacity'] = var3;
                var3 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var6];
                var8 = var5.bind(var13)(var6);
                var7 = var8.withSpring;
                var14 = 36;
                var4 = var4[var14];
                var9 = var5.bind(var13)(var4);
                var6 = var9.interpolate;
                var5 = _closure2_slot6;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                if(var4) { _fun0011_ip = 285; continue _fun0011 }
 248:
                var5 = _closure2_slot0;
                var12 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var15];
                var4 = var12.bind(var13)(var4);
                var4 = var4.TransitionStates;
                var4 = var4.YEETED;
                if(!(var5 !== var4)) { _fun0011_ip = 287; continue _fun0011 }
 285:
                var11 = 0;
 287:
                var5 = [0, 1];
                var4 = [0, 400];
                var6 = var6.bind(var9)(var11, var5, var4);
                var18 = _closure1_slot17;
                var4 = function n() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0012_ip = 11; continue _fun0012 }
 9:
                        var2 = false;
 11:
                        if(!var2) { _fun0012_ip = 60; continue _fun0012 }
 14:
                        var4 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 56;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.TransitionStates;
                        var3 = var3.YEETED;
                        var2 = var4 === var3;
 60:
                        if(!var2) { _fun0012_ip = 107; continue _fun0012 }
 63:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 36;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
 107:
                        return var1;
                    }
                };
                var9 = {};
                var11 = _closure2_slot0;
                var9['transitionState'] = var11;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = var11[var15];
                var15 = var12.bind(var13)(var15);
                var15 = var15.TransitionStates;
                var9['TransitionStates'] = var15;
                var11 = var11[var14];
                var11 = var12.bind(var13)(var11);
                var11 = var11.runOnJS;
                var9['runOnJS'] = var11;
                var10 = _closure2_slot1;
                var9['transitionCleanUp'] = var10;
                var4['__closure'] = var9;
                var9 = 2541522666097.0;
                var4['__workletHash'] = var9;
                var2 = _closure1_slot34;
                var4['__initData'] = var2;
                var17 = 'respect-motion-settings';
                var20 = var8;
                var19 = var6;
                var16 = var4;
                var2 = var20[var7](var19, var18, var17, var16, var15);
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            }
        };
        var7 = {};
        var7['windowDimensions'] = var20;
        var20 = 49;
        var20 = var13[var20];
        var20 = var6.bind(var4)(var20);
        var7['roundToNearestPixel'] = var20;
        var7['controlsSpecs'] = var19;
        var7['safeArea'] = var18;
        var18 = 55;
        var18 = var13[var18];
        var18 = var15.bind(var4)(var18);
        var18 = var18.withSpring;
        var7['withSpring'] = var18;
        var7['transitionState'] = var17;
        var17 = 56;
        var17 = var13[var17];
        var17 = var15.bind(var4)(var17);
        var17 = var17.TransitionStates;
        var7['TransitionStates'] = var17;
        var17 = var13[var14];
        var17 = var15.bind(var4)(var17);
        var17 = var17.interpolate;
        var7['interpolate'] = var17;
        var7['useReducedMotion'] = var16;
        var16 = _closure1_slot17;
        var7['MODE_CHANGE_PHYSICS'] = var16;
        var14 = var13[var14];
        var14 = var15.bind(var4)(var14);
        var14 = var14.runOnJS;
        var7['runOnJS'] = var14;
        var7['transitionCleanUp'] = var12;
        var2['__closure'] = var7;
        var7 = 16643118377748.0;
        var2['__workletHash'] = var7;
        var7 = _closure1_slot33;
        var2['__initData'] = var7;
        var5 = var3.bind(var5)(var2);
        var7 = _closure1_slot5;
        var3 = var7.useCallback;
        var2 = new Array(1);
        var2[0] = var10;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var5 = var1.height;
            var4 = _closure2_slot5;
            var3 = var4.set;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 49;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var2 = var2.bind(var1)(var5);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var12 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot23;
        var1 = 57;
        var1 = var13[var1];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var1['style'] = var5;
        var10 = false;
        var1['collapsable'] = var10;
        var7 = _closure1_slot23;
        var5 = 28;
        var5 = var13[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['onLayout'] = var12;
        var5['collapsable'] = var10;
        var9 = var9.contentWrapper;
        var5['style'] = var9;
        var10 = _closure1_slot23;
        var9 = _closure1_slot32;
        var8 = {};
        var23 = var8;
        var22 = var11;
        var11 = copyDataProperties(var23, var22);
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function renderItem(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot23;
        var4 = _closure1_slot41;
        var3 = {};
        var1 = arg3;
        var3['transitionState'] = var1;
        var1 = arg4;
        var3['transitionCleanUp'] = var1;
        var7 = arg2;
        var8 = var3;
        var1 = copyDataProperties(var8, var7);
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot42 = var1;
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
    var13 = 1;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.StyleSheet;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var17 = 8;
    var4 = var6[var17];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot17 = var4;
    var14 = 16;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var16 = var4.EDGE_GUTTER;
    var _closure1_slot18 = var16;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot19 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot20 = var8;
    var4 = var4.Permissions;
    var _closure1_slot21 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoiceChannelWarningSurfaces;
    var _closure1_slot22 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot23 = var8;
    var8 = var4.jsxs;
    var _closure1_slot24 = var8;
    var4 = var4.Fragment;
    var _closure1_slot25 = var4;
    var4 = 20;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingTop': null, 'gap': 24, 'paddingBottom': 16};
    var11 = 21;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.BASE_VOICE_PANEL_HEADER_HEIGHT;
    var11 = var16 + var11;
    var11 = var11 + var16;
    var10['paddingTop'] = var11;
    var4['contentWrapper'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var14;
    var4['channelInfoWrapper'] = var10;
    var16 = 'center';
    var10 = {'textAlign': 'center', 'paddingTop': 16, 'paddingBottom': 16};
    var4['subheading'] = var10;
    var10 = {'position': 'relative', 'width': '100%', 'aspectRatio': 1.7777777777777777, 'borderRadius': null, 'overflow': 'hidden', 'justifyContent': 'center'};
    var11 = 22;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var10['borderRadius'] = var18;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BLACK;
    var10['backgroundColor'] = var18;
    var4['previewImageWrapper'] = var10;
    var10 = {};
    var21 = var15.absoluteFillObject;
    var22 = var10;
    var18 = copyDataProperties(var22, var21);
    var19 = 0.5;
    var18 = 'opacity';
    var10[var18] = var19;
    var4['previewImage'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var14;
    var4['activityInfoWrapper'] = var10;
    var10 = {};
    var10['marginBottom'] = var17;
    var4['activityInfoHeader'] = var10;
    var10 = {'borderRadius': null, 'width': '100%', 'aspectRatio': 1.7777777777777777};
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var10['borderRadius'] = var17;
    var4['activityImage'] = var10;
    var10 = {};
    var21 = var15.absoluteFillObject;
    var22 = var10;
    var15 = copyDataProperties(var22, var21);
    var17 = 'flex';
    var15 = 'display';
    var10[var15] = var17;
    var15 = 'alignItems';
    var10[var15] = var16;
    var15 = 'justifyContent';
    var10[var15] = var16;
    var4['joinButtonWrapper'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var14;
    var4['optInChannelsContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['gap'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['padding'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INFO_WARNING_FOREGROUND;
    var10['borderColor'] = var14;
    var10['borderWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INFO_WARNING_BACKGROUND;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['marginHorizontal'] = var11;
    var4['blockedMemberWarning'] = var10;
    var10 = {};
    var11 = 36;
    var10['height'] = var11;
    var4['consolePreJoinPadding'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot26 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var2 = var1.hasMembers;
            var1 = _closure1_slot26;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var1 = null;
            if(var2) { _fun0013_ip = 184; continue _fun0013 }
 30:
            var4 = _closure1_slot23;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 28;
            var2 = var13[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var9.channelInfoWrapper;
            var2['style'] = var7;
            var8 = _closure1_slot23;
            var12 = _closure1_slot0;
            var6 = 29;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var9 = var9.subheading;
            var6['style'] = var9;
            var9 = 30;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.sS2J0N;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 184:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var10 = var1.channelId;
            var2 = var1.blockedUserIds;
            var3 = var1.ignoredUserIds;
            var1 = _closure1_slot26;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 43;
            var6 = var1[var6];
            var8 = var7.bind(var4)(var6);
            var7 = {};
            var6 = _closure1_slot0;
            var9 = 44;
            var9 = var1[var9];
            var9 = var6.bind(var4)(var9);
            var9 = var9.ImpressionNames;
            var9 = var9.VOICE_CHANNEL_BLOCKED_USER_WARNING;
            var7['name'] = var9;
            var9 = {};
            var9['channel_id'] = var10;
            var10 = global;
            var12 = var10.Array;
            var10 = var12.from;
            var10 = var10.bind(var12)(var2);
            var9['blocked_user_ids'] = var10;
            var10 = _closure1_slot22;
            var10 = var10.PRE_JOIN_SHEET;
            var9['warning_surface'] = var10;
            var7['properties'] = var9;
            var7 = var8.bind(var4)(var7);
            var8 = var3.size;
            var9 = var2.size;
            var7 = 30;
            var2 = var1[var7];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var7];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.CjrALS;
            var14 = var2.bind(var3)(var1);
            var1 = 0;
            if(!(var9 > var1)) { _fun0014_ip = 213; continue _fun0014 }
 206:
            if(!(!(var8 > var1))) { _fun0014_ip = 345; continue _fun0014 }
 213:
            if(!(!(var8 > var1))) { _fun0014_ip = 281; continue _fun0014 }
 217:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var7];
            var3 = var2.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.format;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.6X29zc;
            var1 = {};
            var1['n'] = var9;
            var10 = var3.bind(var6)(var2, var1);
            _fun0014_ip = 343; continue _fun0014;
 281:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var7];
            var3 = var2.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.format;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.u9trAQ;
            var1 = {};
            var1['n'] = var8;
            var10 = var3.bind(var6)(var2, var1);
 343:
            _fun0014_ip = 399; continue _fun0014;
 345:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var7];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var7];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.MpRfpK;
            var10 = var2.bind(var3)(var1);
 399:
            var3 = _closure1_slot24;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 28;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var5.blockedMemberWarning;
            var1['style'] = var5;
            var9 = _closure1_slot23;
            var7 = _closure1_slot0;
            var5 = 45;
            var5 = var6[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.CircleErrorIcon;
            var5 = {};
            var12 = 'text-warning';
            var5['color'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot24;
            var15 = 29;
            var6 = var6[var15];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/bold', 'color': 'interactive-active'};
            var9 = {};
            var12 = 1;
            var9['flexShrink'] = var12;
            var6['style'] = var9;
            var9 = new Array(3);
            var9[0] = var10;
            var10 = ' ';
            var9[1] = var10;
            var10 = null;
            var12 = var10 != var14;
            if(!var12) { _fun0014_ip = 609; continue _fun0014 }
 561:
            var13 = _closure1_slot23;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var15 = 'heading-sm/semibold';
            var11['variant'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 609:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot26;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 27;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot10;
            var4 = new Array(4);
            var4[0] = var3;
            var3 = _closure1_slot7;
            var4[1] = var3;
            var3 = _closure1_slot15;
            var4[2] = var3;
            var3 = _closure1_slot13;
            var4[3] = var3;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getId;
                    var4 = var1.bind(var2)();
                    var3 = _closure1_slot15;
                    var2 = var3.getVoiceStateForSession;
                    var6 = _closure1_slot7;
                    var1 = var6.getRemoteSessionId;
                    var1 = var1.bind(var6)();
                    var1 = var2.bind(var3)(var4, var1);
                    var4 = null;
                    var2 = var4 != var1;
                    var3 = undefined;
                    if(!var2) { _fun0016_ip = 61; continue _fun0016 }
 58:
                    var3 = var1;
 61:
                    var2 = _closure1_slot7;
                    var1 = var2.getAwaitingRemoteSessionInfo;
                    var1 = var1.bind(var2)();
                    var2 = var4 == var1;
                    var6 = undefined;
                    if(var2) { _fun0016_ip = 89; continue _fun0016 }
 84:
                    var6 = var1.channelId;
 89:
                    var1 = _closure2_slot0;
                    var1 = var6 === var1;
                    if(var1) { _fun0016_ip = 179; continue _fun0016 }
 103:
                    var8 = var4 == var3;
                    var6 = undefined;
                    if(var8) { _fun0016_ip = 117; continue _fun0016 }
 112:
                    var6 = var3.channelId;
 117:
                    var2 = _closure2_slot0;
                    var2 = var6 === var2;
                    if(!var2) { _fun0016_ip = 176; continue _fun0016 }
 128:
                    var6 = _closure1_slot13;
                    var5 = var6.getSessionById;
                    var8 = var4 == var3;
                    var7 = undefined;
                    if(var8) { _fun0016_ip = 153; continue _fun0016 }
 147:
                    var7 = var3.sessionId;
 153:
                    var8 = var4 != var7;
                    var3 = '';
                    if(!var8) { _fun0016_ip = 167; continue _fun0016 }
 164:
                    var3 = var7;
 167:
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 != var3;
 176:
                    var1 = var2;
 179:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var4, var1, var3);
            var1 = null;
            if(!var3) { _fun0015_ip = 157; continue _fun0015 }
 115:
            var4 = _closure1_slot23;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 28;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = var6.consolePreJoinPadding;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 157:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var8 = var7.memo;
    var4 = function VoicePanelPreJoinContentInner(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var15 = var1.members;
            var14 = var1.streamingMembers;
            var13 = var1.blockedMembers;
            var12 = var1.ignoredMembers;
            var11 = var1.activities;
            var1 = _closure1_slot26;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var8 = _closure1_slot5;
            var2 = var8.useContext;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 23;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var2.bind(var8)(var1);
            var9 = var1.channelId;
            var _closure2_slot0 = var9;
            var8 = var1.guildId;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot0;
            var1 = 27;
            var1 = var5[var1];
            var16 = var2.bind(var4)(var1);
            var10 = var16.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var10.bind(var16)(var2, var1);
            var1 = 50;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var16 = var1.bind(var4)(var19);
            var1 = 51;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = 52;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.VOICE_PANEL_PRE_JOIN;
            var1 = var2.bind(var4)(var1);
            var1 = var1.analyticsLocations;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 53;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot19;
                var3 = var2.VIEW_VOICE_CHANNEL;
                var2 = {};
                var7 = _closure2_slot1;
                var2['guild_id'] = var7;
                var7 = _closure2_slot0;
                var2['channel_id'] = var7;
                var6 = _closure2_slot2;
                var2['location_stack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot24;
            var2 = _closure1_slot25;
            var1 = {};
            var17 = _closure1_slot23;
            var8 = _closure1_slot27;
            var5 = {};
            var18 = var15.length;
            var10 = 0;
            var18 = var18 > var10;
            var5['hasMembers'] = var18;
            var8 = var17.bind(var4)(var8, var5);
            var5 = new Array(5);
            var5[0] = var8;
            var8 = null;
            if(!var16) { _fun0017_ip = 363; continue _fun0017 }
 302:
            var18 = _closure1_slot23;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var16 = 54;
            var16 = var21[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var20 = var20.optInChannelsContainer;
            var16['style'] = var20;
            var16['channel'] = var19;
            var19 = _closure1_slot20;
            var19 = var19.CHANNEL;
            var16['analyticsSection'] = var19;
            var8 = var18.bind(var4)(var17, var16);
 363:
            var5[1] = var8;
            var8 = var11.map;
            var7 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot23;
                var4 = _closure1_slot38;
                var3 = {};
                var3['activity'] = var1;
                var2 = _closure2_slot2;
                var3['analyticsLocations'] = var2;
                var2 = var1.launchId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7 = var8.bind(var11)(var7);
            var5[2] = var7;
            var7 = var15.length;
            var7 = var7 > var10;
            if(var7) { _fun0017_ip = 409; continue _fun0017 }
 400:
            var8 = var13.size;
            var7 = var8 > var10;
 409:
            if(var7) { _fun0017_ip = 421; continue _fun0017 }
 412:
            var8 = var12.size;
            var7 = var8 > var10;
 421:
            if(!var7) { _fun0017_ip = 460; continue _fun0017 }
 424:
            var11 = _closure1_slot23;
            var10 = _closure1_slot40;
            var8 = {};
            var8['members'] = var15;
            var8['streamingMembers'] = var14;
            var8['blockedMembers'] = var13;
            var8['ignoredMembers'] = var12;
            var7 = var11.bind(var4)(var10, var8);
 460:
            var5[3] = var7;
            var8 = _closure1_slot23;
            var7 = _closure1_slot31;
            var6 = {};
            var6['channelId'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}";
    var4['code'] = var8;
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelPreJoinWrapper() {
        var8 = _closure1_slot5;
        var3 = var8.useContext;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 23;
        var2 = var7[var2];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var2 = var3.bind(var8)(var2);
        var11 = var2.channelId;
        var _closure2_slot0 = var11;
        var3 = var2.guildId;
        var _closure2_slot1 = var3;
        var2 = 58;
        var2 = var7[var2];
        var2 = var6.bind(var4)(var2);
        var12 = var2.bind(var4)(var11);
        var _closure2_slot2 = var12;
        var2 = _closure1_slot0;
        var6 = 27;
        var6 = var7[var6];
        var10 = var2.bind(var4)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot16;
        var8 = new Array(4);
        var8[0] = var6;
        var6 = _closure1_slot8;
        var8[1] = var6;
        var6 = _closure1_slot6;
        var8[2] = var6;
        var6 = _closure1_slot9;
        var8[3] = var6;
        var6 = new Array(3);
        var6[0] = var12;
        var6[1] = var11;
        var6[2] = var3;
        var3 = 59;
        var3 = var7[var3];
        var3 = var2.bind(var4)(var3);
        var13 = var3.areVoicePanelPreJoinContentPropsEqual;
        var15 = function() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0018_ip = 258; continue _fun0018 }
 13:
                var4 = _closure1_slot16;
                var3 = var4.getVoiceStatesForChannelAlt;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var11 = null;
                var5 = var11 != var1;
                var10 = undefined;
                var1 = undefined;
                if(!var5) { _fun0018_ip = 51; continue _fun0018 }
 47:
                var1 = _closure2_slot1;
 51:
                var6 = var3.bind(var4)(var2, var1);
                var2 = _closure1_slot8;
                var1 = var2.getBlockedUsersForVoiceChannel;
                var5 = _closure2_slot0;
                var3 = var1.bind(var2)(var5);
                var1 = var2.getIgnoredUsersForVoiceChannel;
                var2 = var1.bind(var2)(var5);
                var4 = _closure1_slot6;
                var1 = var4.getEmbeddedActivitiesForChannel;
                var5 = var1.bind(var4)(var5);
                var4 = new Array(0);
                var1 = _closure1_slot35;
                var9 = var1.bind(var10)(var6);
                var7 = var9.bind(var10)();
                var1 = var7.done;
                var8 = var7;
                var7 = undefined;
                if(var1) { _fun0018_ip = 229; continue _fun0018 }
 132:
                var16 = var8.value;
                var1 = var16.voiceState;
                var1 = var1.selfStream;
                if(!var1) { _fun0018_ip = 214; continue _fun0018 }
 152:
                var17 = _closure1_slot9;
                var15 = var17.getStreamForUser;
                var1 = var16.user;
                var14 = var1.id;
                var1 = _closure2_slot1;
                var1 = var15.bind(var17)(var14, var1);
                var7 = var1;
                if(!(var11 != var1)) { _fun0018_ip = 214; continue _fun0018 }
 189:
                var15 = var4.push;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var1;
                var14 = var15.bind(var4)(var14);
                var7 = var1;
 214:
                var14 = var9.bind(var10)();
                var1 = var14.done;
                var8 = var14;
                if(!var1) { _fun0018_ip = 132; continue _fun0018 }
 229:
                var1 = {};
                var1['members'] = var6;
                var1['activities'] = var5;
                var1['streamingMembers'] = var4;
                var1['blockedMembers'] = var3;
                var1['ignoredMembers'] = var2;
                return var1;
 258:
                var1 = undefined;
                return var1;
            }
        };
        var17 = var10;
        var16 = var8;
        var14 = var6;
        var6 = var17[var9](var16, var15, var14, var13, var12);
        var3 = _closure1_slot23;
        var1 = 56;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionItem;
        var1 = {};
        var1['item'] = var6;
        var5 = _closure1_slot42;
        var1['renderItem'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 60;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();