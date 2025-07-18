// app/modules/stage_channels/StageChannelModalActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
    var6 = function connectToStage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var2 = false;
 14:
            var6 = _closure1_slot9;
            var4 = var6.getVoiceChannelId;
            var4 = var4.bind(var6)();
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 34:
            var2 = function canJoinImmediately(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var5 = _closure1_slot8;
                    var2 = var5.can;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 6;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                    var1 = var2.bind(var5)(var1, var6);
                    var1 = !var1;
                    if(var1) { _fun0002_ip = 156; continue _fun0002 }
 62:
                    var5 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var8 = 7;
                    var2 = var2[var8];
                    var9 = var5.bind(var7)(var2);
                    var5 = var9.shouldShowBlockedUsers;
                    var2 = var6.id;
                    var2 = var5.bind(var9)(var2);
                    if(!var2) { _fun0002_ip = 113; continue _fun0002 }
 101:
                    var9 = var6.id;
                    var5 = arg2;
                    var2 = var5 !== var9;
 113:
                    if(!var2) { _fun0002_ip = 153; continue _fun0002 }
 116:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.openStageBlockedUsersSheet;
                    var3 = function() {
                        var4 = _closure1_slot11;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var2 = true;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var6, var3);
                    var2 = 1;
 153:
                    var1 = var2;
 156:
                    var1 = !var1;
                    return var1;
                }
            };
            var2 = var2.bind(var5)(var1, var4);
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 50:
            var2 = false;
            return var2;
 54:
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 11;
            var2 = var6[var2];
            var7 = var4.bind(var5)(var2);
            var2 = var7.initialize;
            var2 = var2.bind(var7)();
            var2 = 12;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.selectVoiceChannel;
            var2 = var1.id;
            var2 = var4.bind(var6)(var2);
            var4 = _closure1_slot9;
            var2 = var4.getVoiceChannelId;
            var4 = var2.bind(var4)();
            var2 = var1.id;
            if(!(var4 === var2)) { _fun0001_ip = 215; continue _fun0001 }
 135:
            var4 = _closure1_slot5;
            var2 = var4.getAllApplicationStreamsForChannel;
            var1 = var1.id;
            var2 = var2.bind(var4)(var1);
            var4 = var2.length;
            var1 = 0;
            if(!(var4 > var1)) { _fun0001_ip = 211; continue _fun0001 }
 166:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 13;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.watchStream;
            var2 = var2[var1];
            var1 = {};
            var5 = true;
            var1['noFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 211:
            var1 = true;
            return var1;
 215:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function connectAndOpen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var7 = arguments[1];
            var4 = arguments[2];
            var6 = arguments[3];
            var _closure2_slot0 = var5;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0003_ip = 26; continue _fun0003 }
 24:
            var7 = false;
 26:
            var _closure2_slot1 = var7;
            if(!(var4 === var1)) { _fun0003_ip = 36; continue _fun0003 }
 34:
            var4 = false;
 36:
            var _closure2_slot2 = var4;
            if(!(var6 === var1)) { _fun0003_ip = 46; continue _fun0003 }
 44:
            var6 = false;
 46:
            var9 = _closure1_slot9;
            var3 = var9.getVoiceChannelId;
            var3 = var3.bind(var9)();
            var6 = !var6;
            if(!var6) { _fun0003_ip = 78; continue _fun0003 }
 69:
            var9 = var5.id;
            var6 = var3 !== var9;
 78:
            if(!var6) { _fun0003_ip = 112; continue _fun0003 }
 81:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 14;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.shouldShowVoiceChannelChangeConfirmation;
            var6 = var9.bind(var10)(var5);
 112:
            if(!var6) { _fun0003_ip = 152; continue _fun0003 }
 115:
            var10 = _closure1_slot2;
            var11 = _closure1_slot3;
            var9 = 7;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.showChannelChangeConfirmationAlert;
            var8 = function() {
                var6 = _closure1_slot11;
                var10 = _closure2_slot0;
                var9 = _closure2_slot1;
                var8 = _closure2_slot2;
                var1 = undefined;
                var7 = true;
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var6 = var9.bind(var10)(var5, var8);
 152:
            if(var6) { _fun0003_ip = 179; continue _fun0003 }
 155:
            var6 = _closure1_slot10;
            var6 = var6.bind(var1)(var5, var7);
            if(!var6) { _fun0003_ip = 179; continue _fun0003 }
 168:
            var2 = _closure1_slot12;
            var2 = var2.bind(var1)(var5, var3, var4);
 179:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function navigateToStage(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            var6 = true;
 11:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 7;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.navigateToStage;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2, var6);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 15;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/stage_channels/StageChannelModalActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function connectOrLurkStage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0005_ip = 27; continue _fun0005 }
 25:
            var3 = false;
 27:
            var _closure2_slot2 = var3;
            var3 = global;
            var3 = var3.Promise;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            StartGenerator();
                            var4 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 215; continue _fun0006 }
 15:
                            var _closure5_slot0 = var4;
                            var7 = _closure1_slot6;
                            var6 = var7.getChannel;
                            var3 = _closure2_slot1;
                            var3 = var6.bind(var7)(var3);
                            var6 = null;
                            if(!(var6 == var3)) { _fun0006_ip = 191; continue _fun0006 }
 52:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var6 = 8;
                            var6 = var8[var6];
                            var8 = undefined;
                            var10 = var7.bind(var8)(var6);
                            var7 = var10.stopLurkingAll;
                            var11 = _closure2_slot0;
                            var6 = new Array(1);
                            var6[0] = var11;
                            var6 = var7.bind(var10)(var6);
                            SaveGenerator(address=101);
 99:
                            return var6;
 101:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(var7) { _fun0006_ip = 188; continue _fun0006 }
 107:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot3;
                            var7 = 9;
                            var7 = var11[var7];
                            var12 = var10.bind(var8)(var7);
                            var11 = var12.joinGuild;
                            var10 = _closure2_slot0;
                            var7 = {};
                            var13 = true;
                            var7['lurker'] = var13;
                            var7 = var11.bind(var12)(var10, var7);
                            SaveGenerator(address=156);
 154:
                            return var7;
 156:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(var10) { _fun0006_ip = 185; continue _fun0006 }
 162:
                            var11 = _closure1_slot7;
                            var10 = var11.addConditionalChangeListener;
                            var9 = function() {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    var4 = _closure1_slot6;
                                    var3 = var4.getChannel;
                                    var1 = _closure2_slot1;
                                    var4 = var3.bind(var4)(var1);
                                    var1 = null;
                                    var1 = var1 == var4;
                                    if(var1) { _fun0007_ip = 88; continue _fun0007 }
 33:
                                    var5 = _closure1_slot10;
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot3;
                                    var2 = 10;
                                    var2 = var6[var2];
                                    var5 = var5.bind(var3)(var2);
                                    var2 = var5.initialize;
                                    var2 = var2.bind(var5)();
                                    var2 = _closure5_slot0;
                                    var2 = var2.bind(var3)(var4);
                                    var1 = false;
 88:
                                    return var1;
                                }
                            };
                            var9 = var10.bind(var11)(var9);
                            return var8;
 185:
                            return var7;
 188:
                            return var6;
 191:
                            var6 = _closure1_slot10;
                            var5 = _closure2_slot2;
                            var2 = undefined;
                            var5 = var6.bind(var2)(var3, var5);
                            var2 = var4.bind(var2)(var3);
                            return var2;
 215:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var5 = var1.bind(var2)();
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['connectOrLurkStage'] = var7;
    var3['connectToStage'] = var6;
    var3['connectAndOpen'] = var5;
    var3['navigateToStage'] = var4;
    var2 = function showUserProfile(arg1) {
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.showPlatformUserProfile;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['showUserProfile'] = var2;
    return var1;
})();